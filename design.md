# Smobler — Website Design Direction

**Version** 1.0 · Working spec for a full smobler.io revamp
**Scope** Visual system, typography, layout grid, motion, component library, page IA, CMS content models
**Inputs** lazarev.agency, creme.digital (structural references), current smobler.io (content audit)

---

## 0. How to use this document

Sections 3–8 are the system: build these as tokens and components first. Sections 9–11 are the site: pages assembled from those components. Anything wrapped in `{{ }}` is a content placeholder that needs a real number, name, or asset before launch — do not ship invented figures.

**One decision needs confirming before build starts:** the exact hex of Sunlight Yellow. This spec uses `#FFD100` as the working value. Pull the real value from the Smobler brand kit and replace it — every other yellow token in §4 is derived from it, so one substitution updates the whole scale.

---

## 1. What's changing

Smobler today reads as a metaverse build shop: a long list of infrastructure services, a deep catalogue of Sandbox/Roblox projects, and press releases parked at the bottom of a single scrolling page. The work is genuinely strong — Singapore government projects, Clay Nation's first cross-chain build, A11Y Park, Mediacorp — but the site presents it as an undifferentiated inventory.

The revamp does three jobs:

1. **Lead with AI**, without discarding the world-building heritage. Smobler's advantage is not that it can call a model; it's that it has shipped 20+ persistent worlds and knows what breaks when you put generated content in front of real players. That's the story.
2. **Make the people visible.** A studio selling judgment has to show who has it. Today there is no team page at all.
3. **Turn the newsroom into a reason to return**, not an archive nobody scrolls to.

---

## 2. Reading the two references

| | Take | Leave |
|---|---|---|
| **lazarev.agency** | Outcome-first proof (`$500M+ raised`, `+120% traffic`) attached to named clients. Deep, navigable service taxonomy. Case cards that carry a client, a stage, a date, and a video still. Articles surfaced inside the nav, not buried. | The service link-farm in the footer — 40+ near-duplicate SEO pages. Smobler doesn't need that surface area and it dilutes authority. |
| **creme.digital** | Single-scroll clarity: a claim, proof, work, how-it-works, price, done. Big-number stat blocks. Product UI shown as artifacts, not screenshots-in-laptops. Marquee of live work at the top. | The fake chat-bubble illustration and the three-tier subscription pricing. Smobler sells multi-month enterprise, government, and IP engagements; posted price tiers would misprice the work. |

**Synthesis:** Lazarev's evidentiary rigour, Creme's velocity. A visitor should reach "these people have done this" within one screen and "here's the specific thing I'd hire them for" within three.

---

## 3. Design thesis — *Sunlight on snow*

The brand colour is not called "yellow." It's called **Sunlight**. Take that literally and it becomes a system rather than a fill.

**Sunlight Yellow is treated as a light source, never as decoration.** The whole site has one sun, fixed at the upper-left, low on the horizon. Every shadow falls down and to the right. Every raised surface catches a yellow edge on its top-left. Sections alternate between the sunlit face (Snowfield, a cool off-white) and the shaded face (Glacier, a cold blue-black). Nothing is neutral grey; everything is either lit or in shade.

This is grounded in Smobler's own material: the Himalayan IPs, Yeti Realm, the SNOW token, and the voxel geometry of Sandbox builds — where a world *is* a field of blocks catching a directional light. Snow shadows are blue in reality, which is why the dark surface is blue-black rather than neutral.

**The signature element:** hard-edged offset shadows. No blur. A card sits on the page like a block on a snowfield, casting a solid, cold, down-right shadow. On hover the shadow *shortens* — the element rises toward the sun — and the top-left edge picks up a 1px yellow rim. It reads as physical, it's cheap to render, and it belongs to nobody else in this category.

**Restraint clause:** the light system is where the boldness is spent. Everything else — type, spacing, colour outside the two surfaces — stays quiet and disciplined. No gradients. No glassmorphism. No floating 3D blobs.

---

## 4. Colour

```css
:root {
  /* Brand — CONFIRM against brand kit, all yellows derive from --sun-500 */
  --sun-500:      #FFD100;  /* Sunlight Yellow — primary */
  --sun-400:      #FFE04D;  /* hover lift, rim-light */
  --sun-700:      #B38F00;  /* yellow that must pass AA as text on Snowfield */
  --sun-100:      #FFF6CC;  /* wash blocks, selection */

  /* Surfaces */
  --snowfield:    #F1F3F0;  /* light surface — the lit face */
  --snowfield-2:  #E4E7E3;  /* recessed light surface, table stripes */
  --glacier:      #10151B;  /* dark surface — the shaded face */
  --glacier-2:    #1A212A;  /* raised card on dark */
  --shade:        #070A0E;  /* deepest — footer, media letterboxing */

  /* Ink */
  --ink:          #0B0E12;  /* body text on light */
  --ink-mute:     #5B646D;  /* secondary text on light */
  --snow-text:    #EDEFEC;  /* body text on dark */
  --snow-mute:    #8B959E;  /* secondary text on dark */

  /* Signal — machine states only */
  --ice-400:      #7CD3E8;  /* live, generating, streaming, AI-authored */
  --ice-900:      #123A47;  /* ice on light surfaces */

  /* Utility */
  --line-light:   rgba(11,14,18,.12);
  --line-dark:    rgba(237,239,236,.14);
  --alert:        #E5484D;
}
```

### Rules

- **Sunlight is light, not text.** Yellow may be a fill, a rim, an underline, a highlight block, or a shadow tint. It is never body copy on a light surface — `--sun-500` on `--snowfield` fails contrast badly. If yellow must be text on light, use `--sun-700`.
- **Two surfaces, alternating.** A page is a sequence of Snowfield and Glacier bands. Never three surface tones in one viewport.
- **Ice is reserved for machine state.** Live generation, streaming output, AI-authored content badges, telemetry. Using it decoratively breaks the one signal the user learns. This split — *yellow is Smobler, ice is the model* — makes AI provenance legible without a legend.
- **Ratios per section:** ~70% surface, ~22% ink, ~6% sunlight, ~2% ice. Yellow's power is scarcity.

---

## 5. Typography

Three roles, three faces. All available on Google Fonts or Fontshare — no licence blockers.

| Role | Face | Why |
|---|---|---|
| **Display** | **Familjen Grotesk** (600, 700) | Tall x-height, tight apertures, a slightly odd `g` and `a` that keep it from reading as another neutral Swiss grotesque. Engineered rather than corporate. Used only for H1/H2 and stat numerals. |
| **Body** | **Switzer** (400, 500, 600) — Fontshare | Warmer and rounder than Inter at small sizes, holds up in long-form case studies and press releases. Variable, so one file. |
| **Utility / data** | **Martian Mono** (300, 500) — variable width | Carries datelines, tags, office codes, role titles, timestamps, and AI telemetry labels. Its width axis lets labels fit tight plot cards without shrinking below 11px. |

**Paid upgrade path (optional):** swap Display for *PP Neue Montreal Medium* or *Söhne Breit* if a licence budget exists. Do not swap Body or Utility — they're doing specific work.

**CJK fallback** (Smobler operates across Asia): `"Noto Sans SC", "Noto Sans JP", "Noto Sans KR"` after Switzer in the body stack. Test the Singapore and Japan press pages.

### Scale

Fluid, clamped between 375px and 1440px viewports.

```css
--t-display:  clamp(3.25rem, 7.2vw, 6.75rem);  /* hero H1, 92% line-height, -0.035em */
--t-h1:       clamp(2.5rem, 4.6vw, 4rem);      /* section heads, 96%, -0.03em */
--t-h2:       clamp(1.75rem, 2.6vw, 2.5rem);   /* card heads, 105%, -0.02em */
--t-h3:       1.25rem;                          /* 130%, -0.01em */
--t-body-lg:  1.125rem;                         /* lede, 160% */
--t-body:     1rem;                             /* 165% */
--t-small:    0.875rem;                         /* 150% */
--t-label:    0.6875rem;                        /* mono, 0.14em tracking, UPPERCASE */
```

### Type rules

- Display face never appears below 1.75rem. Below that it's Switzer.
- Measure caps at **68 characters** for body, **34** for ledes.
- Mono labels are uppercase with `0.14em` tracking. Everything else is sentence case — including buttons and headlines. No Title Case anywhere.
- Numerals in stat blocks use Display at `--t-display` with tabular figures so a counting animation doesn't reflow.

---

## 6. Layout — the Buildplate grid

Smobler's clients buy plots. Sandbox estates are grids — the Metaverse for Good land is literally a 12×12. So the page grid is an estate map, and content modules are **plots** that snap to it.

```
Container   1440px max, 40px margin (desktop) / 24px (tablet) / 20px (mobile)
Columns     12 · 24px gutter
Plot unit   1 plot = 3 columns. Modules span 3 / 6 / 9 / 12 columns only.
Rows        Vertical rhythm on an 8px base; section padding 96 / 128 / 160
```

Breakpoints: `480 · 768 · 1024 · 1280 · 1536`.
Below 768 the grid collapses to 4 columns; plots become full-width or 2-up.

**Spacing scale:** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

**Radii:** `0` on everything — plots, cards, buttons, inputs, media. The one exception is status chips and filter pills at `999px`. Square corners are a voxel argument, not a brutalist affectation; the colour and the light system keep it from reading as newsprint.

**Plot boundaries** are visible only where they carry meaning: the news wall, the team roster, and the work index show a 1px `--line-light` / `--line-dark` grid. Editorial pages don't.

---

## 7. Light, elevation and motion

One sun, upper-left, low. Every elevation rule follows from it.

```css
/* On Snowfield — solid cold shadow, no blur, falls down-right */
--lift-rest:  14px 14px 0 rgba(16, 21, 27, .09);
--lift-hover: 6px 6px 0 rgba(16, 21, 27, .14);   /* shorter = risen toward the sun */

/* On Glacier — no shadow; light is described by a rim on the lit edges */
--rim-rest:   inset 1px 1px 0 rgba(255, 209, 0, .16);
--rim-hover:  inset 1px 1px 0 rgba(255, 209, 0, .55);

--dur-fast:   120ms;
--dur-ui:     220ms;
--dur-reveal: 420ms;
--ease-ui:    cubic-bezier(.2, .8, .2, 1);
--ease-sun:   cubic-bezier(.16, 1, .3, 1);
```

**Page-load sequence (home only, once per session).** A single sweep of light rakes left-to-right across the hero headline over 1400ms — a linear-gradient mask on the text, plus the hero shadow retracting from long to rest. It happens once, it's the only orchestrated moment on the site, and it earns the "Sunlight" name. Everything else is micro-interaction.

**Scroll.** Sections cross-fade surfaces only (Snowfield ⇄ Glacier) at `--dur-reveal`. Plot cards fade+rise 16px, staggered 40ms, once. No parallax, no pinned scroll-jacking, no counter animations outside the stat band.

**Hover.** Shadow shortens, rim brightens, media scales `1.02`. That's the whole vocabulary.

**Reduced motion.** `prefers-reduced-motion: reduce` fixes the sun at rest state: no sweep, no stagger, no ticker movement. Content and hierarchy must be complete without any of it.

---

## 8. Component library

| Component | Notes |
|---|---|
| **Plot card** | The base unit. Media (16:10 or 4:5) → mono kicker → Display H2 → 2-line dek → mono meta row. Spans 3/6/12. |
| **Button — primary** | `--sun-500` fill, `--ink` label, square, `--lift-rest`. Hover shortens shadow. |
| **Button — ghost** | 1px border in current line colour, transparent fill, yellow rim on hover. |
| **Chip** | Pill, mono `--t-label`. Types: filter (toggleable), status (`--ice-400` for live/AI), office code. |
| **Stat block** | Display numeral + mono label beneath, hairline above. Always in threes. |
| **Logo wall** | Monochrome marks at 60% opacity on Glacier, full opacity on hover. Three rows: *Invested by · Partnered with · Featured in* — Smobler already has this content and it's under-used. |
| **The Wire** | Single-line mono ticker, newsroom only. See §10.2. |
| **Person plot** | Duotone portrait, name, mono role, office chip. See §10.3. |
| **Drawer** | Right-side panel, 480px, Glacier, used for person detail and case-study specs. Focus-trapped, Esc closes. |
| **Section header** | Mono eyebrow → Display H1 → optional 2-line dek → optional right-aligned link. |
| **Footer** | `--shade`. Offices with real addresses, newsletter, socials, legal. No service link farm. |

---

## 9. Information architecture

```
/                       Home
/what-we-build          Capabilities (AI-led)
/work                   Index — filterable
/work/[slug]            Case study
/worlds                 Proprietary IPs — Ichorium Wars, Yeti Realm, Cobbleland, SNOW
/studio                 About + People + Offices
/studio/careers         Open roles
/newsroom               News hub
/newsroom/[slug]        Article / press release
/contact                Contact
```

Global nav: `What we build · Work · Worlds · Studio · Newsroom` + `Start a project` (primary button).
Nav is Glacier, 72px, non-sticky on scroll-down / reveals on scroll-up.

---

## 10. Page specifications

### 10.1 Home

```
┌──────────────────────────────────────────────────────────┐
│ NAV                                     [Start a project]│
├──────────────────────────────────────────────────────────┤
│ GLACIER                                                  │
│  ▸ eyebrow: SINGAPORE · SINCE {{year}}                   │
│                                                          │
│  We build worlds that                                    │
│  think back.            ← sun sweep on load              │
│                                                          │
│  Smobler is an AI world studio. We've shipped {{n}}      │
│  persistent worlds for brands, governments and IP        │
│  holders — now with models inside them.                  │
│                                                          │
│  [Start a project]  [See the work →]                     │
│                                                          │
│  {{n}} worlds │ {{n}} countries │ {{n}} players reached  │
├──────────────────────────────────────────────────────────┤
│ LOGO WALL — invested by / partnered with / featured in   │
├──────────────────────────────────────────────────────────┤
│ SNOWFIELD · What we build (6 plots, 2×3)                 │
├──────────────────────────────────────────────────────────┤
│ GLACIER · Featured work (1×12 lead + 2×6)                │
├──────────────────────────────────────────────────────────┤
│ SNOWFIELD · Our worlds — IP strip, horizontal scroll     │
├──────────────────────────────────────────────────────────┤
│ GLACIER · Provenance band (see below)                    │
├──────────────────────────────────────────────────────────┤
│ SNOWFIELD · From the newsroom (3 plots + view all)       │
├──────────────────────────────────────────────────────────┤
│ GLACIER · The studio — 6 faces + "meet the team →"       │
├──────────────────────────────────────────────────────────┤
│ SUNLIGHT BAND · CTA                                      │
├──────────────────────────────────────────────────────────┤
│ SHADE · Footer                                           │
└──────────────────────────────────────────────────────────┘
```

**Hero thesis.** No 3D blob, no gradient mesh, no dashboard mockup. The hero is the headline, lit. The sweep *is* the visual. Behind it, a fixed low-contrast voxel horizon in `--glacier-2` — barely visible, no animation.

**Capabilities — six plots.** Rewrite the current infrastructure list into AI-led propositions:

1. **World generation** — text and reference to playable voxel space; art-directed, not slot-machined.
2. **Agentic characters** — NPCs and companions with memory and consistent voice, running inside live worlds.
3. **Creator copilots** — tooling that lets UGC creators ship faster. Extends Smobler's existing work creating jobs for digital creators.
4. **Brand AI experiences** — conversational activations, AR and MR filters, live events.
5. **Pipelines and moderation** — asset pipelines, safety layers, the unglamorous part that keeps a public world open.
6. **Provenance and ownership** — on-chain attribution for generated assets.

**Provenance band.** A short, honest section on how Smobler handles AI-authored content: what's generated, what's human-made, who owns it. Smobler's Web3 infrastructure makes this a real capability rather than a policy statement — it's the most defensible differentiator on the page. Use `--ice-400` here and only here on the homepage.

---

### 10.2 Newsroom — the captivating bit

The brief asks for news displayed captivatingly. Captivating comes from *density, recency and rhythm*, not from carousel effects.

```
┌──────────────────────────────────────────────────────────┐
│ NAV                                                      │
│ THE WIRE ▸ 14 AUG · City of Austin enters The Sandbox ▸ …│  ← mono ticker
├──────────────────────────────────────────────────────────┤
│ GLACIER · LEAD (12 col)                                  │
│  ┌───────────────────────┬────────────────────────────┐  │
│  │ PRESS RELEASE         │                            │  │
│  │ 14 AUG 2026           │        lead image          │  │
│  │                       │                            │  │
│  │ Big display headline  │                            │  │
│  │ two lines max         │                            │  │
│  │ Dek, two lines.       │                            │  │
│  │ Read →                │                            │  │
│  └───────────────────────┴────────────────────────────┘  │
├──────────────────────────────────────────────────────────┤
│ [All] [Press] [Coverage] [Product] [Field notes]  2026 ▾ │  ← sticky filter bar
├──────────────────────────────────────────────────────────┤
│ SNOWFIELD · THE WALL                                     │
│  AUG │ ┌──────┐ ┌──────┐ ┌──────┐                        │
│  ┃   │ │ plot │ │ plot │ │ plot │                        │
│  ┃   │ └──────┘ └──────┘ └──────┘                        │
│  JUL │ ┌─────────────┐ ┌──────┐                          │
│  ┃   │ │  6-col      │ │ plot │                          │
│      │ └─────────────┘ └──────┘                          │
├──────────────────────────────────────────────────────────┤
│ GLACIER · AS FEATURED IN — publication logo wall         │
├──────────────────────────────────────────────────────────┤
│ SUNLIGHT · Newsletter — one field, one button            │
└──────────────────────────────────────────────────────────┘
```

**The Wire.** Latest eight headlines in Martian Mono, scrolling right-to-left at 40px/s under the nav, newsroom only. Pauses on hover and on focus. Under reduced motion it becomes a static line: `LATEST ▸ {{headline}}`. It's the one place the site feels live.

**Sticky month markers.** The left gutter of the wall carries the month as a vertical mono label that sticks while its group scrolls past. It makes an archive scannable by time, which is what people actually do in a newsroom, and it gives the wall its rhythm.

**Mixed spans.** Items alternate 3-col and 6-col by editorial weight (a CMS flag, not random). Irregularity is what stops a news grid reading as a spreadsheet.

**Four post types**, distinguished by a mono chip only — never by card colour:

| Type | Use |
|---|---|
| `PRESS RELEASE` | Smobler announcements |
| `COVERAGE` | Third-party press. Card shows the publication's mark instead of an image. |
| `PRODUCT NOTE` | Ships, releases, SNOW/dApp updates |
| `FIELD NOTE` | Studio writing — the SEO surface, borrowed from Lazarev's article strategy |

**Article page.** Single 8-col column on Snowfield. Display H1, mono dateline, 68-char measure. Pull-quotes break to full width on Sunlight `--sun-100` blocks. Related items at the foot are always three, always most-recent-first.

---

### 10.3 Studio — staff viewing

One page carrying about, people, and offices. People are the centre of it.

```
┌──────────────────────────────────────────────────────────┐
│ GLACIER · Who we are — 8-col statement, offices strip    │
├──────────────────────────────────────────────────────────┤
│ SNOWFIELD · Leadership (2-up, large plots, 6 col each)   │
├──────────────────────────────────────────────────────────┤
│ [All] [Design] [Engineering] [AI] [Art] [Production] [BD]│
│ [SG] [NA] [LATAM] [EU]                                   │
├──────────────────────────────────────────────────────────┤
│ THE ROSTER — 4-up, plot grid with visible boundaries     │
│  ┌────┐ ┌────┐ ┌────┐ ┌┄┄┄┄┐                             │
│  │ 👤 │ │ 👤 │ │ 👤 │ ┊OPEN┊  ← dashed plot = open role  │
│  └────┘ └────┘ └────┘ └┄┄┄┄┘                             │
├──────────────────────────────────────────────────────────┤
│ SUNLIGHT · Careers CTA                                   │
└──────────────────────────────────────────────────────────┘
```

**Portrait treatment.** Duotone mapped from `--glacier` to `--snowfield` at rest. On hover the portrait resolves to full colour and the top-left edge takes the yellow rim — the light finds them. It unifies portraits shot in wildly different conditions across four regions, which is a real problem for a distributed studio.

**Person plot card:** portrait 4:5 → name in Display H3 → role in mono → office chip. Nothing else at grid level.

**Drawer on click** — not a separate page, so browsing the roster stays uninterrupted. Contains: larger portrait, bio (60 words max), disciplines as chips, *worlds shipped* (linked to `/work` entries), optional external link. Keyboard: Enter opens, Esc closes, focus returns to the card.

**Open plots.** Each open role appears in the roster as a dashed-outline plot reading `PLOT AVAILABLE — {{role}}`, linking to `/studio/careers`. Vacancies live where the team lives; it's the estate metaphor doing honest work.

**Offices strip.** Singapore HQ plus Asia / North America / LATAM / Europe, each with a mono city code and the local time. Real content Smobler already has and currently wastes in a contact block.

---

### 10.4 Work

Index: filterable plot grid (`Sector` × `Platform` × `Year`). Card carries client, one-line outcome, platform chip, year.

Case study template:
1. Full-bleed hero media + client, year, disciplines
2. The problem — 3-col statement
3. Outcome stats — three numerals, `{{ }}` until verified
4. Build sections — alternating 6/6 media and text
5. AI role — explicit: what the model did, what humans did
6. Credits — links into `/studio` person drawers
7. Next case

Section 5 is non-negotiable for AI positioning. Vague AI claims are the fastest way to lose a technical buyer.

---

## 11. Content models

```yaml
NewsItem:
  title, slug, type[press|coverage|product|field]
  publishedAt, excerpt, body(rich)
  heroImage, publication?, sourceUrl?      # coverage only
  weight[standard|featured]                # drives 3-col vs 6-col span
  onWire: bool                             # ticker inclusion
  tags[], seo{}

Person:
  name, slug, role, disciplines[], office[SG|NA|LATAM|EU]
  portrait, portraitAlt, bio(<=60 words)
  projects[] -> Project, links[], order, isLeadership, isActive

OpenRole:
  title, discipline, office, employmentType, applyUrl, isOpen

Project:
  title, slug, client, sector, platform[], year
  heroMedia, outcomeStats[3], body(blocks)
  aiRole(rich), credits[] -> Person, isFeatured

World:            # proprietary IPs
  name, slug, tagline, status, heroMedia, body, links[]
```

The `weight` and `onWire` flags are what let an editor control the newsroom's rhythm without a developer. Ship the CMS with those exposed.

---

## 12. Voice

Plain, specific, present tense. Smobler builds things — write like it.

- Say what was built, for whom, and what happened. `Built Singapore's first countdown game with Mediacorp.` Not `Leveraged immersive technologies to drive engagement.`
- Never claim AI capability in the abstract. Name the model's job: *generates terrain variants*, *voices the NPC*, *flags user assets for review*.
- Buttons say what happens: `Start a project`, `Read the release`, `See the roster`. Not `Learn more`, `Submit`.
- Sentence case everywhere. Em-dashes sparingly. No exclamation marks outside error recovery.
- Empty states are invitations: `No coverage filed for 2024 yet.` Errors are actionable: `That file is over 10MB. Try a smaller one.`

---

## 13. Accessibility floor

- WCAG 2.2 AA. Body text ≥ 4.5:1, large text ≥ 3:1. Yellow-on-light is text-forbidden (see §4).
- Visible focus: 2px `--sun-500` outline, 2px offset, on both surfaces.
- The Wire and all motion respect `prefers-reduced-motion`.
- Drawers focus-trap and restore focus on close. Filter chips are real `<button>`s with `aria-pressed`.
- Every portrait needs `portraitAlt`. Every case-study video needs captions.
- Duotone portraits must remain identifiable in Windows High Contrast Mode — test it.
- Target size ≥ 44×44 on touch.

---

## 14. Performance budget

| Metric | Target |
|---|---|
| LCP | < 2.0s on 4G |
| CLS | < 0.05 — reserve all media aspect ratios |
| Total JS | < 180KB gzipped |
| Fonts | 3 files, variable, `woff2`, `font-display: swap`, preload Display + Body only |
| Hero media | AVIF/WebP, `srcset`, no autoplay video above the fold |

The sun-sweep is a CSS mask animation — no JS, no canvas.

**Suggested stack:** Next.js (App Router) + a headless CMS with the models in §11 + Vercel. Framer is viable if the team wants Creme-level iteration speed, but the newsroom's month-sticky wall and the roster drawer are meaningfully harder there.

---

## 15. Build order

1. Tokens (§4–7) and the plot grid. Confirm the Sunlight hex first.
2. Plot card, button, chip, section header, footer.
3. Newsroom — highest ongoing value, and it validates the light system against real photography.
4. Studio / roster + drawer.
5. Home.
6. Work index and case template.
7. Worlds, careers, contact.

### Open questions

- Exact Sunlight Yellow hex, and whether a secondary brand colour exists in the kit.
- Are the proprietary IPs (Ichorium Wars, Yeti Realm, Cobbleland, SNOW) staying under the smobler.io domain, or moving to their own sites? Changes the weight of `/worlds`.
- How many people go on the roster, and do all regions have shootable portraits? If not, budget a single remote portrait direction (background, crop, lighting) before build.
- Which outcome stats can be published? Every `{{ }}` in §10 needs an owner.
- Is there a shippable AI capability to demo live, or is the AI story told through case studies for now? An honest case-study-led story beats a thin demo.
