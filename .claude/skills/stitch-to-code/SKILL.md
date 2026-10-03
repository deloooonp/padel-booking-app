---
name: stitch-to-code
description: Convert a Stitch-exported HTML page into Next.js components using our design tokens, existing components, and shadcn. Use when given Stitch HTML or a path to it.
disable-model-invocation: true
---

# Stitch HTML to Next.js

Input: $ARGUMENTS (path to a Stitch HTML file, or HTML pasted in chat).
Stitch HTML is a VISUAL REFERENCE, never code to paste as-is.
When making metadata use Metadata type from nextjs.

## Stack

Next.js App Router, Tailwind v4 (CSS-first, @theme in globals.css, no tailwind.config.js),
shadcn/ui, lucide-react. Stitch HTML is Tailwind v3 via CDN, so it must be converted.

## Hard rule: do NOT change the layout

Layout = DOM structure, element order, spacing, sizing, alignment, breakpoints, responsive behavior.
The result must look the same as the HTML at every breakpoint.
Allowed: replacing hardcoded colors/fonts with tokens, replacing a raw element with an equivalent
component (restyle via className to keep the same look), HTML-to-JSX conversion, a11y attributes
that do not change visuals. If a shadcn component cannot match the layout without changing it,
keep a custom element and say so in the report.

## Brand source of truth (overrides whatever Stitch drifted to)

- Headings: Clash Display (Medium). Body/UI: Satoshi.
- Lime accent #c8f135, slate dark #1e293b, white #ffffff. Dark-first, navy background.
  (Edit this block if the brand changes.)

## Icons (HARD RULE)

- ALL icons come from lucide-react. No exceptions.
- Never use FontAwesome, Material Icons, Heroicons, emoji-as-icons, or any icon font/CDN.
  Remove every icon CDN <link>/<script> from the HTML.
- Inline <svg> used as an icon: replace with the closest lucide icon. Brand artwork (logo,
  illustrations like the big tennis ball graphic) stays as an SVG file or component in
  components/common.
- Import per icon: `import { MapPin } from "lucide-react"`. Never `import *`.
- Size and color through className (size-4, text-primary), never inline style.
- No exact match: use the nearest lucide icon and list it under "Icon swaps" in the report.
  Do not add another icon library.

## Step 1: Tokens (always first)

1. Read app/globals.css and the font setup in layout.tsx.
2. Extract from the HTML: colors (hex, rgb, arbitrary values), fonts, radii, shadows,
   and the inline tailwind.config.
3. FIRST RUN (tokens not set yet): write them into globals.css as CSS variables (light + dark),
   mapped to shadcn names (background, foreground, card, primary, ...) via @theme inline.
   Set up fonts with next/font. Where Stitch conflicts with the brand block, the brand block wins.
4. LATER RUNS: map every value to an existing token (nearest match for near-equal values).
   If nothing fits, do NOT invent a token: use the nearest and list it under "Unmapped".
5. Near-identical colors (e.g. 8 navy shades): collapse into a small set of surface tokens
   (background, card, muted, border). List the merges in the report.
6. No hardcoded hex, arbitrary color values, or font-family left in components.
   Never copy the inline tailwind.config. Remove the Tailwind CDN script.
7. Light sections inside the dark theme (e.g. bg-white blocks): do NOT map to dark tokens.
   Add a `.light` scope in globals.css (copy of the :root values) and wrap those sections in it.
8. Fonts: expect Clash Display and Satoshi files in fonts/ (woff2). If missing, STOP and tell me.
   Never substitute another font or fall back to Google Fonts silently.

## Step 2: Extract components

- components/layout: header/navbar, footer, sidebar, page shells
- components/sections: large page blocks
- components/common: atoms and molecules (badge, stat card, booking card, ...)
- The page file under app/ composes them.
  Extract only when a pattern repeats (2+ times, in this page or across pages) or is a layout/section.
  One-offs stay inline in the page. Hardcoded text and data become props or constants in
  lib/mock-data.ts.

## Step 3: Component priority (check in order, before writing anything new)

1. Already exists in components/** (including installed shadcn in components/ui):
   reuse it. Extend via props/className, do not duplicate.
2. Not installed, but shadcn has a component that can reproduce the SAME look and layout:
   use the shadcn MCP to search and add it. Never hand-write a shadcn component.
   If the closest shadcn component would force any layout change, skip to step 3.
3. Nothing fits: create a new component composed from shadcn primitives and tokens.

## Step 4: Conversion details

- class to className, style strings to Tailwind or objects, SVG attributes to camelCase.
- <a> to next/link, <img> to next/image. Stitch image URLs are remote and can expire:
  use a placeholder in public/ with a TODO, never hotlink.
- Keep semantic elements (button, nav, main, ...).
- Server component by default, "use client" only when interactive.
- Static placeholder text in inputs/selects (e.g. "Pick a Time") becomes a real control
  (shadcn Select/Popover/Calendar) styled to look identical. Wire to mock data only.
- Drop unused CSS classes defined in the <style> block.

## Step 5: Tailwind v3 to v4 fidelity

Fidelity = how the HTML RENDERS in v3, not its class names. When a class means something
different in v4, convert it so the rendered result stays identical:

- `shadow-sm` -> `shadow-xs`, `shadow` -> `shadow-sm` (same for `drop-shadow`)
- `rounded-sm` -> `rounded-xs`, `rounded` -> `rounded-sm`
- `blur-sm` -> `blur-xs`, `blur` -> `blur-sm` (same for `backdrop-blur`)
- `outline-none` -> `outline-hidden`
- `ring` (3px in v3) -> `ring-3` (bare `ring` is 1px in v4)
- `bg-gradient-to-*` -> `bg-linear-to-*`
- `flex-shrink-*` -> `shrink-*`, `flex-grow-*` -> `grow-*`
- `bg-opacity-*`, `text-opacity-*` -> slash syntax (`bg-black/50`)
- bare `border`: v3 renders gray-200, v4 renders currentColor. Set an explicit border color
  token on any element that relied on the default.
- Classes invalid in v3 but valid in v4 (e.g. `py-4.5`) did nothing in the Stitch render:
  drop them or use the nearest valid value that matches what was rendered.

## Step 6: Scope check

Out-of-scope sections (tournaments, player matching, fake stats like "50+ clubs / 10k players",
membership, fictional venue names): do NOT delete and do NOT port silently.
Stop and ask which to keep. Kept sections keep their layout exactly.

## Constraints

- No new dependencies without asking.
- Do not touch backend, schema, or unrelated files.
- Keep existing component APIs backward compatible.

## Done

Run typecheck, lint, and build. Then report: tokens mapped, unmapped and merged; components
reused; components added via shadcn MCP; components created; icon swaps; and anything where
the layout could not be matched exactly.

After building, tell me to compare visually: original HTML in a browser tab vs the running page,
side by side at 375px, 768px and 1440px. List the 3 spots most likely to differ
(spacing, shadows, borders, fonts) so I know where to look.
