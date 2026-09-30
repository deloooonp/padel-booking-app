# Badge Component

## Summary

Small status indicator for court availability, booking status, and filter states.

## Requirements

- Display availability status (available, booked, maintenance)
- Support for size variants (sm, md)
- Accessible color contrast (WCAG 2.1 AA)
- Clickable variant for filter interactions

## Decision

- **Visual**: Rounded pill shape with subtle border
- **Colors**: Available (lime/green), Booked (slate/gray), Maintenance (amber)
- **Sizes**: sm (compact filters), md (default)
- **Interaction**: Clickable when used as filter trigger

## Build plan

1. Create `Badge` component with `variant` and `size` props
2. Define color tokens in Tailwind config
3. Add clickable state with hover/focus styles
4. Verify contrast ratios

## Consequences

- Pill shape provides clear visual separation without heavy borders
- Color semantics must be consistent across all status indicators

## Follow-up

- Add icon support for status badges
- Loading state for async status updates

## Rationale

Badges are the primary status communication mechanism in a booking app. Users need to quickly scan availability at a glance.