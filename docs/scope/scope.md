# Scope: Padel Court Booking App

A single‑venue padel court booking interface for public walk‑in visitors. Users select a court and a time slot (10 am–10 pm, 12 one‑hour slots). Slots show a pending indicator while payment is in progress. Authentication, user profiles, admin dashboard, and notifications are deferred to later phases.

**Build approach:** Tracer Bullet (each feature built end‑to‑end through every layer, working).
**Workflow:** Prototype (just `/develop`; no verify/test/review stages after develop).

## At a glance

| #   | Feature                                    | Phase      | Status                     |
| --- | ------------------------------------------ | ---------- | -------------------------- |
| 1   | Stack & architecture                       | Foundation | existing                   |
| 2   | Coding standards & tooling                 | Foundation | in-progress                |
| 3   | Design system & UI foundation              | Foundation | in-progress                |
| 4   | Public landing + court selection           | Slice 1    | planned · needs a decision |
| 5   | Time slot grid (12 slots, 10am–10pm)       | Slice 1    | planned · needs a decision |
| 6   | Slot selection + pending payment indicator | Slice 1    | planned · needs a decision |
| 7   | Mobile‑responsive slot grid layout         | Slice 2    | planned · needs a decision |
| 8   | Booking confirmation UI (placeholder)      | Slice 2    | planned                    |
| 9   | Authentication (eventual)                  | Deferred   | planned                    |
| 10  | User profiles / history (eventual)         | Deferred   | planned                    |
| 11  | Admin dashboard (eventual)                 | Deferred   | planned                    |
| 12  | Notifications (eventual)                   | Deferred   | planned                    |

## Foundations

### 1. Stack & architecture · existing

Next.js 16 (app router), React 19, shadcn/ui with `@base-ui/react`, Tailwind CSS v4, `class-variance-authority`, `cn`, `zod`, `@tanstack/react-query`. Project scaffolded and runs locally.
**Done when:** the stack is recorded in a spec and the empty scaffold boots locally and passes build.

- [x] Scaffold exists (from `create-next-app` + shadcn init)
- [x] Record stack decisions in a spec: `/architect stack & architecture`
      Spec 0001 · code in `./`

### 2. Coding standards & tooling · planned

Capture conventions from the real project, then install lint, format, and pre‑commit enforcement.
**Done when:** root `AGENTS.md` reflects the real stack, and lint/format/pre‑commit run clean.

- [x] Capture conventions + tooling choices: `/audit`
- [x] Install the tooling: `/develop tooling`
- [x] Check it runs clean: `/test`

### 3. Design system & UI foundation · in-progress

Visual language, layout primitives, and base components so the flows feel cohesive and accessible. Includes color scale, spacing, type scale, and base components (button already exists; need card, input, select, dialog, tooltip for slot grid).
**Done when:** `design.md` covers type/color/spacing/components, and base components handle focus and keyboard.

- [x] Design it (spec): `/architect design system & UI foundation`

## Slice 1: Public Booking Experience (core MVP)

### 4. Public landing + court selection · planned · needs a decision

Public marketing/landing page showing venue name, court count, and a simple court picker (dropdown or cards). No auth wall. SEO metadata and structured data for the venue.
**Done when:** a visitor lands on `/`, sees venue info, picks a court, and the URL reflects the selection; page is crawlable and renders fast.

- [ ] Design it (spec): `/architect public landing + court selection`

### 5. Time slot grid (12 slots, 10am–10pm) · planned · needs a decision

Grid component rendering 12 one‑hour slots (10:00–11:00 through 21:00–22:00) for the selected court. Slots show available / unavailable / pending‑payment states. Keyboard navigable, screen‑reader labelled, mobile‑first layout (stacked on narrow screens).
**Done when:** grid renders all 12 slots with correct times, states toggle via props, keyboard focus order is logical, and it passes axe‑core smoke test.

- [ ] Design it (spec): `/architect time slot grid`

### 6. Slot selection + pending payment indicator · planned · needs a decision

User taps a slot → slot enters "pending payment" state (blocked for others, visual indicator + optional countdown). No real payment integration yet; state is local or mocked.
**Done when:** selecting an available slot shows a pending badge, the slot is visually distinct from available/unavailable, and the indicator clears on a simulated expiry or failure.

- [ ] Design it (spec): `/architect slot selection + pending payment indicator`

## Slice 2: Polish & Mobile Ready

### 7. Mobile‑responsive slot grid layout · planned · needs a decision

Ensure the slot grid works well on phones: horizontal scroll with snap, or stacked cards with touch targets ≥ 44×44 px. Test on common breakpoints.
**Done when:** grid is usable on 375 px width, touch targets meet WCAG, and no horizontal overflow on viewport.

- [ ] Design it (spec): `/architect mobile‑responsive slot grid layout`

### 8. Booking confirmation UI (placeholder) · planned

After a slot is "paid" (mocked), show a confirmation screen with court, date, time, and a reference code. No backend persistence; purely a UI placeholder for the future booking flow.
**Done when:** a mock payment success navigates to a confirmation screen displaying the booking details.

- [ ] Build it: `/develop booking confirmation UI (placeholder)`
  - [ ] Confirmation screen component
  - [ ] Navigation from pending state
- [ ] Verify it: `/check verify booking confirmation UI (placeholder)`

## Deferred (enrolled for roadmap context)

### 9. Authentication (eventual) · planned

User accounts, sign in/up, session management. Will gate real bookings and enable history.

- [ ] Design it (spec): `/architect authentication`

### 10. User profiles / history (eventual) · planned

Logged‑in users see past and upcoming bookings, can cancel within policy.

- [ ] Design it (spec): `/architect user profiles / history`

### 11. Admin dashboard (eventual) · planned

Venue owner manages courts, pricing, blockouts, views bookings.

- [ ] Design it (spec): `/architect admin dashboard`

### 12. Notifications (eventual) · planned

Email/SMS/WhatsApp confirmations, reminders before slot, payment receipts.

- [ ] Design it (spec): `/architect notifications`

## Legend

- **needs a decision** = run `/architect` first; otherwise straight to `/develop`.
- **Status** `planned` → `in‑progress` → `done`, plus `existing` (pre‑workflow) and `dropped` (de‑scoped, kept for history).
- **Workflow** (header line) is the project default: **Prototype** = just `/develop` (no verify/test/review). `/architect` still applies whenever a decision is owed.
- **Pointer line** (`spec <n> · code in <path>`): added by `/architect` (spec) and `/develop` (code).
- **Next step** = the first unticked box (always a command or tracked milestone).

## /scope complete

**8 features planned (4 foundations + 2 slice 1 + 2 slice 2), 4 deferred, build approach Tracer Bullet, workflow Prototype.**
Next: `/clear`, then `/audit` (coding standards & tooling foundation has no root AGENTS.md with real conventions)
Heads up: Design system & UI foundation is a `needs a decision` foundation — it must be specced before the slot grid can be built consistently.
Scope written to `docs/scope/scope.md`.

## References

### Project sources

- `AGENTS.md`, which requires checking the installed Next.js 16 guides before writing code.
- `package.json`, which records the current Next.js, React, Tailwind CSS, shadcn UI, and supporting frontend dependencies.
- The existing app router files in `app/`, which show the current scaffold and metadata entry point.

### Practices and standards

- Foundations before features, so the design system and accessible interaction rules are settled before the slot grid.
- Mobile first layout, because public visitors are likely to book from a phone.
- Accessible keyboard and screen reader support for the slot grid, because availability must not depend on pointer input.
- A local pending state is suitable for the frontend prototype, but real slot holds must move to the backend before accepting payments.

### Verified links

- [Next.js Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) | Official App Router guidance for metadata, `generateMetadata`, and sitemap file conventions.
- [Schema.org sportsActivityLocation](https://schema.org/sportsActivityLocation) | Defines the sports activity location property and its `SportsActivityLocation` value type.

Some standards links were not added because the reference lookup service was unavailable. They should be verified before the accessibility acceptance criteria are treated as a compliance claim.
