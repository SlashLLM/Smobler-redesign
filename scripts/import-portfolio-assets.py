"""
Pulls the imagery listed in the portfolio manifest into public/, so the case
studies serve the site's own screenshots rather than hotlinking Webflow's CDN.

Run scripts/fetch-portfolio-sources.mjs first — this reads the manifest it
writes to .portfolio-sources/ and never touches the network itself except to
download the URLs recorded there.

    python scripts/import-portfolio-assets.py [--manifest DIR] [--only SLUG] [--force]

Requires Pillow (pip install pillow). Safe to re-run: an asset already on disk is
skipped unless --force, so a second run downloads nothing.

Video posters come from i.ytimg.com rather than the page, because the click-to-
play facade must not touch YouTube before the visitor asks it to. maxresdefault
is missing for older uploads and answers 404, so hqdefault is the fallback.

The existing top-level public/projects/<slug>.jpg heroes are deck-sourced and are
left alone; everything written here lands under public/projects/<slug>/.
"""

import argparse
import io
import json
import os
import re
import sys
import urllib.parse
import urllib.request

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAX_EDGE = 1600
QUALITY = 82

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as res:
        return res.read()


def basename(url):
    """
    A readable filename from a Webflow asset URL.

    Webflow prefixes every upload with a 24-char object id and appends the
    `-p-<width>` srcset rung; both are noise in the repo, so they come off.
    """
    name = urllib.parse.unquote(urllib.parse.urlparse(url).path.rsplit("/", 1)[-1])
    name = re.sub(r"^[0-9a-f]{24}_", "", name)
    name = re.sub(r"-p-\d+(?=\.[a-z]+$)", "", name)
    name = os.path.splitext(name)[0]
    name = re.sub(r"[^a-zA-Z0-9]+", "-", name).strip("-").lower()
    return name or "image"


def save(raw, path):
    """Downscale to MAX_EDGE and write as JPEG."""
    im = Image.open(io.BytesIO(raw))
    if im.mode not in ("RGB", "L"):
        im = im.convert("RGB")
    if max(im.size) > MAX_EDGE:
        scale = MAX_EDGE / max(im.size)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, "JPEG", quality=QUALITY, optimize=True)
    return im.size


def write(url, dest_abs, force):
    """Returns (public path, bytes written) — bytes 0 when the asset was skipped."""
    rel = "/" + os.path.relpath(dest_abs, os.path.join(ROOT, "public")).replace(os.sep, "/")
    if os.path.exists(dest_abs) and not force:
        return rel, 0
    try:
        size = save(fetch(url), dest_abs)
    except Exception as err:  # a single dead asset must not abort the import
        print(f"    FAILED {os.path.basename(dest_abs)} — {err}")
        return None, 0
    written = os.path.getsize(dest_abs)
    print(f"    {rel}  {size[0]}x{size[1]}  {written // 1024}KB")
    return rel, written


def poster(video_id, dest_abs, force):
    """maxres first; older uploads only have hqdefault and 404 on maxres."""
    for name in ("maxresdefault", "hqdefault"):
        rel, written = write(
            f"https://i.ytimg.com/vi/{video_id}/{name}.jpg", dest_abs, force
        )
        if rel:
            return rel, written
    return None, 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", default=os.path.join(ROOT, ".portfolio-sources"))
    ap.add_argument("--only")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    manifest_path = os.path.join(args.manifest, "manifest.json")
    if not os.path.exists(manifest_path):
        sys.exit(f"No manifest at {manifest_path} — run fetch-portfolio-sources.mjs first.")

    with open(manifest_path, encoding="utf-8") as fh:
        manifest = json.load(fh)

    # What data/projects.ts should reference, keyed by slug.
    resolved = {}
    total = 0

    for slug, entry in manifest.items():
        if args.only and args.only not in slug:
            continue
        print(f"{slug}")
        out_dir = os.path.join(ROOT, "public", "projects", slug)
        paths = {"gallery": [], "chapters": [], "poster": None, "quoteLogo": None}

        if entry.get("videoId"):
            rel, n = poster(entry["videoId"], os.path.join(out_dir, "poster.jpg"), args.force)
            paths["poster"] = rel
            total += n

        for i, chapter in enumerate(entry.get("chapters") or [], start=1):
            if not chapter.get("imageUrl"):
                paths["chapters"].append(None)
                continue
            rel, n = write(
                chapter["imageUrl"], os.path.join(out_dir, f"chapter-{i}.jpg"), args.force
            )
            paths["chapters"].append(rel)
            total += n

        quote = entry.get("pullQuote") or {}
        if quote.get("logoUrl"):
            rel, n = write(
                quote["logoUrl"],
                os.path.join(out_dir, f"logo-{basename(quote['logoUrl'])}.jpg"),
                args.force,
            )
            paths["quoteLogo"] = rel
            total += n

        for i, url in enumerate(entry.get("galleryUrls") or [], start=1):
            rel, n = write(
                url, os.path.join(out_dir, f"{i:02d}-{basename(url)}.jpg"), args.force
            )
            if rel:
                paths["gallery"].append(rel)
            total += n

        resolved[slug] = paths

    out = os.path.join(args.manifest, "assets.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(resolved, fh, indent=2)
    print(f"\n{total // 1024 // 1024}MB written · paths → {out}")


if __name__ == "__main__":
    main()
