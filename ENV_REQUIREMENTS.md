# Environment Variables

This project currently has **no `.env` file** and requires **no secrets** to run
the frontend locally. It is a TanStack Start (React 19 + Vite 7) app.

If you later enable a backend (Lovable Cloud / Supabase), these variables apply:

## Browser / build-time (Vite, safe to expose)
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` — Supabase anon/publishable key

## Server / runtime only (never expose to the client)
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` — bypasses RLS; server-only

Create a `.env` in the project root if/when these are needed.

## Getting started
```bash
bun install        # or npm install
bun run dev        # start the dev server
bun run build      # production build
```

## Assets
Binary assets (images/logos) are stored as `.asset.json` pointer files that
reference Lovable's CDN. The actual binaries are served from those CDN URLs and
are not bundled in this archive. Replace the `url` fields or swap in local files
if you need fully self-hosted assets.
