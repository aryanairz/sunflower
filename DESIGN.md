# Design

Visual system for Sunflower Ranch. Aesthetic lane: rustic ranch handcrafted, sun-drenched. Reference objects: a hand-painted wooden ranch sign at golden hour, a kraft-paper quinceanera invitation, a county-fair poster. Color strategy: Committed. Warm earth tones carry whole sections, not just buttons.

## Theme

Light, warm, sun-soaked. Physical scene: a phone held in afternoon sun, a girl deciding where to have her quinceanera, wanting it to feel like warmth and family. The canvas is cream and kraft paper; color bands (gold, terracotta clay, deep wood) break the scroll like painted signboards.

## Color

OKLCH, stored as space-separated channels in CSS variables so Tailwind alpha modifiers work: `oklch(var(--sun) / <alpha-value>)`. No pure black or white; every neutral is tinted toward warm gold (hue ~80).

Neutrals
- `cream` 0.962 0.018 85 — page canvas
- `cream-2` 0.985 0.010 85 — raised surfaces, the lightest tone
- `sand` 0.905 0.035 78 — kraft alt sections
- `sand-deep` 0.858 0.046 76 — deeper kraft edges, hairlines

Ink
- `ink` 0.285 0.028 60 — warm espresso, body + headlines
- `ink-muted` 0.475 0.030 62 — secondary text

Brand (committed)
- `sun` 0.800 0.155 82 — bright sunflower gold; fills, marks, the spinning bloom. Pair with ink text.
- `gold` 0.600 0.115 72 — deep amber; readable accent text, links, kickers on cream.
- `clay` 0.575 0.115 45 — terracotta; a full section band, cream text on it.
- `clay-deep` 0.500 0.118 42 — clay hover / pressed.
- `wood` 0.360 0.045 55 — deep wood brown; footer, closing CTA band, cream text on it.
- `leaf` 0.560 0.075 128 — muted olive; tiny sunflower-leaf accents only, used sparingly.

Contrast rules: gold is for accents and large type, never small body on cream. Cream text only on clay, clay-deep, or wood. Ink text on sun and on all cream/sand surfaces.

## Texture and motifs

Handcraft is delivered with code, not stock textures.
- Grain: a faint inline SVG `feTurbulence` overlay (~3 to 5% opacity) over cream and sand sections gives a paper tooth.
- Scallop and torn-paper dividers: SVG section transitions (a petal scallop or a rough deckle edge) separate color bands like cut paper. This is the signature move; it replaces flat full-width section seams.
- Hand-drawn sunflower mark: a custom SVG bloom (ring of petals + seeded center) used as kicker bullet, divider centerpiece, and a slow-spinning hero flourish. Replaces the banned uppercase-eyebrow-label grammar.
- Photo framing: images sit in thick warm mats with a slight rotation (-1.5 to 2deg), like pinned prints. They straighten on hover.

## Typography

Mirrors the logo's own pairing (Western arched serif + a script word "Events"). None are on the reflex-reject list.
- Display / headlines: `Zilla Slab` (500, 600, 700, plus italic). Sturdy rounded slab, hand-painted-signboard warmth. Fluid `clamp()`, large.
- Script accent: `Caveat` (600, 700) for accent words (magic, fun and relax) and kickers. Used sparingly, never for body or long strings.
- Body / UI: `Hanken Grotesk` (400, 500, 600, 700). Warm humanist grotesque; body, nav, labels, forms. Keeps the slab and script from going costume.

Scale: modular, ratio >= 1.25. Hero display runs `clamp(2.75rem, 8vw, 6.5rem)`. Body caps at 68ch.

## Layout

- No identical card grids. Event types are a numbered editorial list with a sunflower divider. Amenities are an asymmetric feature strip, not four matching icon cards.
- Alternating color bands (cream, sand, clay, wood) with scalloped/torn dividers give rhythm. Vary vertical spacing; do not pad every section equally.
- Photos break the grid: full-bleed hero, off-axis framed prints, a masonry gallery.
- Left-aligned and asymmetric by default; reserve centering for the closing CTA.
- Buttons: fully rounded (`rounded-full`), sun fill with ink text, generous padding, uppercase tracked label in Hanken.

## Motion

- Entrance: staggered reveals, ease-out-expo, short travel. One orchestrated load per page, not scattered micro-interactions.
- Sunflower bloom rotates slowly and continuously in the hero; pauses under prefers-reduced-motion.
- Framed photos straighten and lift on hover (transform only, never layout props).
- Gallery lightbox crossfades. Honor reduced motion everywhere.

## Components

- Nav: sticky, cream with grain, logo left, links center, sun "Request Your Date" pill right. Mobile: full-screen menu, slab links.
- Buttons: primary (sun fill, ink text), secondary (ink hairline outline on cream, or cream hairline on dark bands).
- ScallopDivider / TornDivider: SVG band transitions.
- Sunflower: SVG mark, sizable, optional spin.
- FramedPhoto: rotated warm mat around an image, straightens on hover.
- EventList: numbered rustic list.
- AmenityStrip: asymmetric icon-and-label feature row.
- InquiryForm: warm fielded form on cream-2, sun submit, friendly success state.
- Footer: wood band, cream text, social marks, tagline with sunflower.
