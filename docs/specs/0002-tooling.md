## Summary

Lint, format, typecheck, and pre-commit enforcement for the Padel Court Booking App. Tools come from the installed stack: ESLint (Next.js config), Prettier, and TypeScript.

## Requirements

- Lint and format on every commit
- Typecheck on every commit
- CI runs lint, typecheck, test on push
- Unit and integration test framework installed

## Decision

- **Linter/formatter**: ESLint + Prettier (already installed, configured via `eslint.config.mjs` and `.prettierrc`)
- **Typecheck**: `tsc --noEmit` via the existing TypeScript setup
- **Pre-commit hooks**: Husky + lint-staged (to be installed)
- **Test framework**: Vitest (recommended for Next.js 16 + React 19, native ESM, fast)
- **CI**: GitHub Actions basic workflow (lint + typecheck + test)

## Build plan

1. Install tooling packages (husky, lint-staged, vitest, @vitest/coverage-v8)
2. Configure lint-staged in package.json
3. Set up Husky pre-commit hook
4. Configure Vitest with Next.js plugin
5. Add CI workflow
6. Verify all checks run clean

## Consequences

- Husky requires git integration (already enabled via AGENTS.md)
- Vitest is newer but aligned with the Next.js 16 + React 19 stack
- Pre-commit hooks add a speed bump; keep them fast (lint-staged stages only changed files)

## Follow-up

- Add accessibility lint rules (eslint-plugin-jsx-a11y) once UI components are built
- Consider strict lint rules for the booking logic (no `any`, exhaustive deps)

## Rationale

These are the standard tooling choices for a Next.js 16 project. ESLint and Prettier are already installed; the remaining tools (husky, vitest) are the conventional picks for this stack.

## References

- ESLint config: `eslint.config.mjs`
- Prettier config: `.prettierrc`
- TypeScript config: `tsconfig.json`
