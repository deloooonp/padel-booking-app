# Design Rationale

## Context

The Padel Court Booking App requires a premium, high-performance feel. The user interface must be highly legible in low-light environments (indoor courts) and convey trust and clarity for booking decisions.

## Options considered

- **Light-first palette**: Rejected — poor readability in dimly lit court environments and gym lighting.
- **Custom color palette**: Rejected — maintenance overhead; Tailwind's built-in slate/gray covers our needs.
- **Flex-only layout**: Rejected — CSS Grid is necessary for the booking slot matrix.
- **Sans-only typography**: Rejected — a display font adds personality and hierarchy.

## Rationale

Dark-mode-first design aligns with the physical environment where users book courts (gyms, indoor facilities). Lime accent provides high contrast against dark backgrounds while maintaining a modern, energetic feel appropriate for sports.

## References

- WCAG 2.1 AA contrast requirements
- Tailwind CSS v4 color palette