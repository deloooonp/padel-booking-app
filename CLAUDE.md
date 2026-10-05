# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Install dependencies**

  ```bash
  pnpm install
  ```

- **Start development server**

  ```bash
  pnpm dev
  ```

- **Build for production**

  ```bash
  pnpm build
  ```

- **Run linting**

  ```bash
  pnpm lint
  ```

- **Run tests**

  ```bash
  pnpm vitest run
  ```

- **Format code**

  ```bash
  pnpm format
  ```

- **Prepare Git hooks** (run once after cloning)

  ```bash
  pnpm prepare
  ```

- **Run a single test file**
  ```bash
  pnpm vitest run -- <path-to-test-file>
  ```

## High‑level Architecture

- **Framework**: Next.js 16 (app router) with React 19.
- **State & Data**:
  - Server components render static UI; client components (`"use client"`) handle interactivity.
  - Data fetching uses TanStack Query (`@tanstack/react-query`).
  - Forms use react‑hook‑form with Zod resolver (`@hookform/resolvers`, `zod`).
- **Styling**: Tailwind CSS v4, class‑variance‑authority (`cn`), shadcn/ui components.
- **Data Layer (deferred)**: Drizzle‑ORM + Supabase (`@supabase/supabase-js`) for persistence; currently replaced by mock data (`lib/mock-data.ts`).
- **Validation**: Zod schemas (`lib/schemas/*.ts`) enforce input validation for auth, registration, and any future API payloads.
- **Utility**: Common helpers live in `lib/utils.ts`; type utilities are derived from Zod (`z.infer`).
- **Components**:
  - `components/ui/` – shadcn‑based UI primitives (Button, Card, Input, etc.).
  - `components/common/` – shared layout pieces (Header, Footer, Logo).
  - Page‑specific components reside in `app/(auth)/`, `app/(main)/`, etc., following the app‑router convention.
- **Data & Mock**: `lib/mock-data.ts` supplies static venue, court, slot, and user data for prototyping; real backend will replace it later.

## Scope Discipline

- Make the smallest change that fulfills the requirement; avoid unrelated refactors.
- No unrequested abstractions (e.g., interfaces with single implementations, factories for one‑off objects).
- Prefer native solutions (HTML `<input type="date">`, CSS over JS libraries) before adding new dependencies.
- Run `pnpm lint` and `pnpm typecheck` before declaring a task complete.

## Design System & UI Foundation

- UI foundation is defined in `docs/specs/0003-design-system-ui-foundation`.
- Base components (Button, Card, Input, etc.) are already implemented; new components for the slot grid, modal, and pending state should reuse these primitives.
- Follow the Indonesian UI text rule: all visible strings are in Indonesian, while code, component names, and comments remain English.

## Important Files & Conventions

- **`app/`** – Next.js app router; each folder represents a route (e.g., `(auth)`, `(main)`).
- **`components/`** – UI components organized by domain (ui, common).
- **`lib/`** – Domain logic, Zod schemas, mock data, and utility functions.
- **`docs/specs/`** – Detailed specifications for each feature slice; consult before implementing.
- **`package.json`** – Lists dependencies; scripts map to the commands above.
- **`.husky/`** – Git hooks enforce linting and formatting on commit.

When adding new features, first create or update the corresponding spec in `docs/specs/`, then implement the UI following the design system, and finally wire up any required data layer changes.
