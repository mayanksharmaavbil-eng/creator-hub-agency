// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Force-enable the Nitro Cloudflare deploy plugin. Outside the Lovable sandbox
  // this is skipped by default, which is why `wrangler deploy` could not resolve
  // the TanStack virtual entry modules. With this on, `vite build` emits a ready
  // Cloudflare Worker bundle in dist/ (dist/client + dist/server) plus a generated
  // deploy config.
  nitro: true,
  tanstackStart: {
    server: { entry: "server" },
  },
});
