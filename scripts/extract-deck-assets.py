"""
One-off extractor: pulls real Smobler imagery out of the master deck PDF into
public/, so the site stops leaning on stock photography.

Images are addressed by their position on the slide rather than by extraction
order — the portfolio slides are 2x2 grids, so a rect centre maps cleanly onto
the label printed in that quadrant.

    python scripts/extract-deck-assets.py

Requires PyMuPDF (pip install pymupdf). Safe to re-run; it overwrites in place.
"""

import io
import os
import sys

import fitz  # PyMuPDF
from PIL import Image

DECK = "decks/Smobler Global Master Deck 30Dec25.pdf"
MAX_EDGE = 1600

# Slide labels read off the rendered deck pages. Quadrants are of the 720x405
# slide box: TL/TR/BL/BR by rect centre.
QUADRANT_PAGES = {
    10: {"TL": "bhutanverse", "TR": "austinverse", "BL": "phygital-wedding", "BR": "saving-claybox"},
    11: {"TL": "lets-celebrate-2024", "TR": "silverkris-lounge", "BL": "lky100", "BR": "dreamscape"},
    12: {"TL": "a11y-park", "TR": "peace-sanctuary", "BL": "8sian-town", "BR": "sonik-satellitez"},
    13: {"TL": "equalverse", "TR": "playground-uxc", "BL": "3verest", "BR": "herstory"},
}

# Single-image picks: (page, xref-or-None, min pixel area, destination)
# Where xref is None the largest qualifying image on the page wins.
SINGLES = [
    (14, 384, "projects/teletubbies-custard-chaos"),
    (14, 382, "projects/teletubbies-custard-chaos-2"),
    (15, None, "projects/bright-futures"),
    (16, None, "projects/vr-medical-training"),
    (25, None, "products/nutra"),
    (26, None, "products/nutra-2"),
    (29, None, "products/digital-bunkering"),
    (31, None, "products/digital-bunkering-2"),
    (33, None, "events/nova-2023-singapore"),
    (34, None, "events/nova-2024-austin"),
    (35, None, "events/nova-2024-singapore"),
    (39, None, "events/nova-2025-singapore"),
    (41, None, "events/irl-activations"),
]

# Slide 8 — the four-pillar row. The row also carries a repeated rounded-card
# mask and the corner wordmark, so the photo behind each card is named outright.
PILLARS = {
    288: "educational-gaming",
    292: "ai-food",
    290: "blockchain-maritime",
    294: "phygital-events",
}

# Slide 44 — Smobler Global Team. Keyed by the rect centre (x, y) rounded, in
# slide coordinates; three rows: team, team, advisors.
TEAM_SLOTS = [
    (155, 112, "loretta-chen"),
    (257, 112, "mridhul-pax"),
    (359, 112, "veronica-ong"),
    (461, 112, "rafaela-rizzi"),
    (563, 112, "gianna-bui"),
    (257, 206, "jane-ngo"),
    (360, 207, "rj-purwandito"),
    (461, 206, "remi-cesar"),
    (122, 304, "evan-cheng"),
    (217, 304, "desmond-tay"),
    (312, 304, "sebastien-borget"),
    (406, 304, "matas-danielevicius"),
    (501, 309, "creighton-liu"),
    (596, 315, "marc-dragon"),
]


def save(raw, dest_rel, root):
    """Downscale to MAX_EDGE and write as JPEG under public/."""
    im = Image.open(io.BytesIO(raw))
    if im.mode not in ("RGB", "L"):
        im = im.convert("RGB")
    if max(im.size) > MAX_EDGE:
        scale = MAX_EDGE / max(im.size)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    path = os.path.join(root, "public", dest_rel + ".jpg")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, "JPEG", quality=82, optimize=True)
    return path, im.size


def quadrant(rect):
    cx, cy = (rect.x0 + rect.x1) / 2, (rect.y0 + rect.y1) / 2
    return ("T" if cy < 202.5 else "B") + ("L" if cx < 360 else "R")


def placed_images(doc, page, min_placed_pt=100):
    """
    Every image on the page with its rect, largest *placed* area first.

    Ranking by source pixels is wrong here: the deck's corner wordmark is a
    2048x987 plate scaled down to 45pt, so on pixel count it outranks every real
    photo on the slide. `min_placed_pt` drops anything that occupies less than
    that many points on either axis, which is enough to lose the wordmark and
    the small logo tiles while keeping every content image.
    """
    out = []
    for img in page.get_images(full=True):
        xref = img[0]
        rects = page.get_image_rects(xref)
        if not rects:
            continue
        try:
            ex = doc.extract_image(xref)
        except Exception:
            continue
        for rect in rects:
            if rect.width < min_placed_pt or rect.height < min_placed_pt:
                continue
            out.append((xref, rect, ex))
    out.sort(key=lambda t: -(t[1].width * t[1].height))
    return out


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    deck = os.path.join(root, DECK)
    if not os.path.exists(deck):
        sys.exit(f"deck not found: {deck}")
    doc = fitz.open(deck)
    written = 0

    # The 2x2 portfolio grids.
    for pno, mapping in QUADRANT_PAGES.items():
        page = doc[pno - 1]
        for xref, rect, ex in placed_images(doc, page):
            if ex["width"] * ex["height"] < 150_000:
                continue  # the small smobler wordmark plate
            slug = mapping.get(quadrant(rect))
            if not slug:
                continue
            path, size = save(ex["image"], f"projects/{slug}", root)
            print(f"p{pno:02d} {quadrant(rect)} -> {os.path.relpath(path, root)} {size}")
            written += 1
            del mapping[quadrant(rect)]

    # Named single picks.
    for pno, want_xref, dest in SINGLES:
        page = doc[pno - 1]
        for xref, rect, ex in placed_images(doc, page):
            if want_xref is not None and xref != want_xref:
                continue
            if ex["width"] * ex["height"] < 150_000:
                continue
            path, size = save(ex["image"], dest, root)
            print(f"p{pno:02d}      -> {os.path.relpath(path, root)} {size}")
            written += 1
            break

    # Slide 8 — four pillars.
    page = doc[7]
    for xref, rect, ex in placed_images(doc, page):
        slug = PILLARS.get(xref)
        if not slug:
            continue
        path, size = save(ex["image"], f"pillars/{slug}", root)
        print(f"p08      -> {os.path.relpath(path, root)} {size}")
        written += 1

    # Slide 44 — team portraits, matched to the nearest printed slot. The
    # portraits are only ~55pt square, so the placed-size floor drops right down.
    page = doc[43]
    for xref, rect, ex in placed_images(doc, page, min_placed_pt=30):
        if ex["width"] * ex["height"] < 40_000:
            continue
        cx, cy = (rect.x0 + rect.x1) / 2, (rect.y0 + rect.y1) / 2
        slug, dist = min(
            ((s, (cx - x) ** 2 + (cy - y) ** 2) for x, y, s in TEAM_SLOTS),
            key=lambda t: t[1],
        )
        if dist > 400:  # 20pt — the portraits sit on a wide grid, nothing is close by accident
            continue
        path, size = save(ex["image"], f"team/{slug}", root)
        print(f"p44      -> {os.path.relpath(path, root)} {size}")
        written += 1

    print(f"\n{written} images written to public/")


if __name__ == "__main__":
    main()
