# 0004 Public Landing and Court Selection

**Status**: Proposed
**Date**: 2026-09-30

## Summary
Landing page for selecting a venue and viewing available courts.

## Requirements
- User can view a list of venues.
- User can select a venue to see its courts.
- User can view the list of courts for a selected venue with their status (active/maintenance).

## Decision
### Data Model (Future)
- Drizzle + Supabase will be used for persistence.
- Venue: id, name, address, timezone.
- Court: id, venue_id, name, status.

### Frontend
- Use mock data to power the Landing Page and Court Selection.

## Build plan
1. Implement Landing Page and Court Selection UI using mock data.

## Consequences
- Clean separation of venue and court data.

## Rationale
[rationale.md](rationale.md)
