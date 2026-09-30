# Skeleton Component

## Summary

Loading placeholder that mimics the shape of content while data fetches.

## Requirements

- Match the visual structure of the content being loaded
- Animated pulse or shimmer effect
- Multiple variants (text, circle, rect)
- Accessible (aria-busy, screen reader support)

## Decision

- **Animation**: Subtle pulse (opacity oscillation)
- **Colors**: Slightly lighter than background to indicate loading
- **Variants**: Text (line), Circle (avatar), Rect (card/image)
- **Accessibility**: `aria-busy="true"` on container, `aria-live="polite"` for status announcements

## Build plan

1. Create `Skeleton` base component with `variant` prop
2. Define skeleton color tokens (slate-700/800 background, slate-600 pulse)
3. Implement Text, Circle, Rect variants
4. Add accessibility attributes
5. Verify animation performance (GPU-accelerated opacity)

## Consequences

- Pulse animation provides clear loading feedback without being distracting
- Skeleton color must contrast enough to be visible but not compete with content

## Follow-up

- Shimmer variant for premium feel
- Skeleton wrapper for full card layouts

## Rationale

Skeleton screens provide immediate visual feedback and reduce perceived load time compared to spinners. The pulse animation is subtle and performant.