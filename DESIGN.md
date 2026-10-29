# Design: ARES Labs

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Conversational FAQ (the home page is the questions a lab director asks, answered on ARES's own figures); /products Split Studio, /about-us Long Document, /careers Letter, /contact a booking page whose form is the hero
- Theme: Console, colourway `paper` (the light ground), dealt 1/3 on seed ares-labs-llp-distributor-3086·e9f3fa4b·2026-10-29·r0, draw fe89e5
- Axes: light/grotesk-sans/chromatic-amber · posture: restrained
- Meanings: amber is a person and the one primary control; cool blue is an instrument, a reading, a count. Never swapped.

## Tokens
`src/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(98% 0.006 85);  --color-paper-2: oklch(96% 0.008 85);  --color-paper-3: oklch(93% 0.01 85);
  --color-ink: oklch(19% 0.01 60);  --color-ink-2: oklch(32% 0.012 60);  --color-muted: oklch(46% 0.012 60);  --color-rule: oklch(88% 0.008 70);  --color-rule-2: oklch(72% 0.01 70);
  --color-accent: oklch(52% 0.135 70);  --color-accent-ink: oklch(98% 0.008 80);  --color-focus: oklch(52% 0.135 70);
  --color-cool: oklch(50% 0.14 250);  --color-cool-soft: oklch(93% 0.04 250);  --color-accent-soft: oklch(93% 0.045 80);
  --font-display: "Host Grotesk Variable", ui-sans-serif, system-ui, sans-serif;  --font-body: var(--font-display);  --font-outlier: "Atkinson Hyperlegible Mono", ui-monospace, monospace;
  --radius-card: 10px;  --radius-pill: 6px;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `src/tokens.css`. The fonts are self-hosted from `@fontsource-variable/host-grotesk` and `@fontsource/atkinson-hyperlegible-mono` (400 and 500), imported at the top of `src/index.css`.

## Type
- Heads: Host Grotesk 500, tracking -0.03em, one weight and one colour; sentence case, roman, never a coloured or italic word inside a head.
- Body: Host Grotesk 400 at 16px, line-height 1.55, in `--color-ink-2`; labels, captions and table heads are 500 a step smaller, sentence case, untracked, never an eyebrow above a heading.
- Measured: Atkinson Hyperlegible Mono (`.measured`, `.reading`) only for what an instrument or a clock wrote: a throughput, a first-result time, the hotline number, the support hours. Never a label, a head or a control.

## Surfaces
- Hairline panels cut from one surface (`.panels` / `.panel`): 1px `--color-rule` seams, `--color-paper-2` inside, 10px radius. Three steps and no lamp: paper, a panel, the deepest step for photographs; no shadow, glow, gradient or texture anywhere.
- Product photographs on their white studio ground sit in `.product-figure` and multiply onto the panel, so the instrument stands on the paper. Bench photographs go in a `data-slot` and take the duotone (paper-3 to ink) that `src/base.css` applies.
- Bands: `--color-paper-2` between two hairlines, two a page at most.

## Controls
- Primary: amber fill with `--color-accent-ink` text · 6px radius · 48px tall; one filled primary per page, the nav's action is the quiet one.
- Secondary: 1px `--color-rule-2` outline on transparent · same radius and height. Links underline in `--color-rule-2` and turn amber on hover.
- Inputs: 1px `--color-muted` border, 48px, the ring as an outline inset 3px; the border never changes width.

## Motion
- Character: brisk. The verb: everything arrives the way an instrument reading does. A value counts up and locks, a trace draws itself, a panel slides into its seam, and an instrument clicked on the home index travels to its chapter on the platforms page.
- Engine: GSAP (ScrollTrigger, SplitText) and Lenis on one ticker, in `src/motion/engine.js`; every page effect runs inside `usePage` and is reverted on navigation. Declared in markup: `data-intro` (the hero's one orchestrated entrance, `data-split` lines rising, items and tiles following), `data-reveal` and `data-stagger` (reveal once on scroll), `data-count` (real figures only), `data-fill` (the primary and quiet buttons flood from the pointer's entry point), `data-draw` (the kinetic trace).
- Budget: one entrance per page, one reveal pattern, one scroll-linked pattern (the home statement wipes in on `animation-timeline: view()`), one pinned stage (the platforms page). Nav links draw an underline; the nav steps aside on the way down and returns on the way up. Route changes use the View Transitions API, with each product image named `product-<id>` so it morphs between pages.
- Honesty: every hidden state exists only under the `.js` class and is released under `prefers-reduced-motion: reduce`; the static page is the complete page. No loops, no parallax, no cursor follower; the kinetic curve is labelled a sample.

## Chrome
- Nav: a floating pill, inset 16px from the top, sticky; wordmark left, four links, the quiet "Request a demo" right; under 60rem the links drop into the pill behind a Menu button.
- Footer: a colophon block, the whole company in one paragraph (what it does, both New Delhi offices, the email, the hotline and its hours), then the five route links and the photo credit.

## Exports
`src/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request, per Hallmark's `export-formats.md`.
