## Summary

This document records the technology stack and architectural decisions for the Padel Court Booking App. The stack is based on Next.js 16 with the app router, React 19, and shadcn/ui components. All components are copy-pasted and maintained directly in the codebase.

## Requirements

- Document the current technology stack
- Specify the build approach (Tracer Bullet)
- Record the status of the stack decision

## Decision

The stack consists of Next.js 16 (app router), React 19, shadcn/ui with @base-ui/react, Tailwind CSS v4, class-variance-authority, cn, zod, and @tanstack/react-query. Authentication uses a custom implementation with Supabase Postgres (no Supabase Auth/RLS/Realtime), and Drizzle ORM with pooler configuration (prepare: false).

## Build plan

Tracer Bullet approach: build end-to-end through every layer first, then thicken. Each feature will be implemented as a thin slice that works across all layers before adding more functionality.

## Consequences

- Ownership of all components through copy-paste means full control over component behavior
- Potential for increased maintenance overhead due to maintaining copy-pasted components
- Need to ensure unique constraints in the database to prevent double-booking
- Newer versions of Next.js, React, and Tailwind may require workarounds for some libraries

## Follow-up

- Document any additional decisions needed for the design system and UI foundation
- Consider implementing a proper auth solution for future phases
- Verify the unique constraint in the database schema to prevent double-booking

## Rationale

This stack was chosen because of prior experience with this exact stack in a prototype booking system. The team is familiar with the workflow and component structure, allowing for faster development. While newer versions of the libraries may require additional work, the copy-paste nature of shadcn/ui gives full control over component implementation.

## References

- Next.js 16 documentation and guides
- Tailwind CSS v4 documentation
- shadcn/ui component library
- Drizzle ORM documentation
- Supabase Postgres configuration
- @tanstack/react-query documentation
- @base-ui/react documentation
- class-variance-authority documentation
- cn documentation
- zod documentation
- @tanstack/react-query documentation
- Next.js app router documentation
- Schema.org sportsActivityLocation for venue metadata