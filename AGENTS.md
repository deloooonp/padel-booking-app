# Padel Court Booking App

## Stack

- **Language / Runtime**: TypeScript, Node
- **Framework**: Next.js 16 (app router), React 19
- **Key dependencies**: shadcn/ui (copy-paste), @base-ui/react, Tailwind CSS v4, class-variance-authority, cn, zod, @tanstack/react-query, react-hook-form, @hookform/resolvers, lucide-react, tw-animate-css
- **Package manager**: pnpm 11.4.0

## Build approach

Tracer Bullet, vertical end to end slices, thin but complete through every layer

## Commands

```bash
# Install
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Test
pnpm lint
```

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`.

## Rules

- Clean Architecture: business rules independent of UI/DB, data flows inward
- Strict TypeScript: no implicit any, exhaustive null checks
- Match scaffold folder structure (Next.js app router conventions)
- Consistent error handling across the app
- Validate env vars at startup
- Consistent naming conventions
- Documented public APIs

## Agent skills

- shadcn ([.claude/skills/shadcn](.claude/skills/shadcn)): shadcn component management and configuration

## Context files

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
