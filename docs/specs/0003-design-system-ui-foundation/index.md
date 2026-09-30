# Design System & UI Foundation

## Summary

Core visual and structural foundation for the Padel Court Booking App. Dark-mode-first palette (deep slate/navy base, lime accent), hybrid layout (Flex for components, CSS Grid for slot booking), and foundational components.

## Structure

- **[0003-badge.md](0003-badge.md)** — Badge component specification
- **[0003-skeleton.md](0003-skeleton.md)** — Skeleton/loading component specification

## Requirements

- Dark-mode-first aesthetic (deep slate/navy base, lime accent)
- Typography hierarchy (sans body, bold display)
- Layout system (Flex components, CSS Grid booking slots)
- WCAG 2.1 accessibility
- Badge and Skeleton foundation components

## Decision

- **Palette**: Deep slate/navy base with lime accent, dark-mode-first
- **Typography**: Sans body, bold display font
- **Layout**: Flex for components, CSS Grid for slot booking grid
- **Components**: Badge (status/availability), Skeleton (loading states)
- **Accessibility**: WCAG 2.1 AA

## Build plan

1. Define design tokens (colors, typography, spacing) in Tailwind config
2. Implement Badge component
3. Implement Skeleton component
4. Verify accessibility and responsive behavior

## Consequences

- Design tokens centralize visual constants; changes propagate everywhere
- CSS Grid for booking slots enables complex layouts without JS
- Dark-first defaults to indoor court environments

## Follow-up

- Button and Input components
- Modal and Dialog patterns
- Accessibility audit for all components

## Rationale

Dark-mode-first matches the indoor court environment. CSS Grid for slots provides precise control over court availability layouts. Badge and Skeleton are the highest-value foundational components.

## References

- Tailwind CSS v4 documentation
- WCAG 2.1 accessibility guidelines
- shadcn/ui component patterns