@AGENTS.md

## Code rules

Comments

- No comments that restate the code. Comment only the WHY of non-obvious logic.
- No commented-out code. No TODOs unless I ask.

TypeScript

- No `any`, no `@ts-ignore`. Derive types from Zod schemas (z.infer).
- Use the `@/` import alias, no deep relative imports.

React / Next

- Server components by default. "use client" only when needed.
- Data fetching with TanStack Query, never fetch inside useEffect.
- Forms: react-hook-form + Zod resolver.
- Merge classes with cn(). No inline styles, no hardcoded colors or fonts.

Domain

- Money is an integer in rupiah. Format with Intl.NumberFormat("id-ID").
- Dates and times: date-fns, timezone Asia/Jakarta. Never use the browser's local timezone.
- UI text is Indonesian. Code, names and comments are English.

Scope discipline

- Make the smallest change that does the job. No refactors of unrelated code.
- Do not create README, docs, or extra files unless I ask.
- Do not add dependencies without asking.
- Run typecheck and lint before saying a task is done.
