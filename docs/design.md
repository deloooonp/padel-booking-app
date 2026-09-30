# Design System

Padel Court Booking App — dark-mode-first, indoor court environment.

## Palette

| Token             | Light                        | Dark                  |
| ----------------- | ---------------------------- | --------------------- |
| Background        | `oklch(1 0 0)`               | `oklch(0.145 0 0)`    |
| Foreground        | `oklch(0.145 0 0)`           | `oklch(0.985 0 0)`    |
| Primary           | `oklch(0.205 0 0)`           | `oklch(0.922 0 0)`    |
| Accent            | `oklch(0.97 0 0)`            | `oklch(0.269 0 0)`    |
| Badge available   | `oklch(0.7 0.15 130)` lime   | `oklch(0.6 0.15 130)` |
| Badge booked      | `oklch(0.55 0.05 250)` slate | `oklch(0.4 0.05 250)` |
| Badge maintenance | `oklch(0.7 0.15 80)` amber   | `oklch(0.6 0.15 80)`  |

## Typography

Sans body, bold display — Geist from Next.js font optimization.

## Spacing

Radius: `--radius: 0.625rem`, scales via `--radius-sm` through `--radius-4xl`.

## Components

- **Badge** — availability/status pill; variants: available, booked, maintenance, outline; sizes: sm, md.
- **Skeleton** — loading placeholder; variants: text, circle, rect; pulse animation.
