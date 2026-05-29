# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — start Next.js dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm start` — run the built app
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next/core-web-vitals` + `/typescript`)

There is no test runner configured.

`next.config.ts` allows the dev origin `http://10.1.1.38:3000` so the dev server can be hit from another machine on the LAN — keep that entry when editing the config.

## Architecture

Marketing/site for **Nedel Sistemas** (a Brazilian ERP/PDV vendor — Itapiranga, SC). All user-facing copy is **Brazilian Portuguese**; match the existing tone when adding content.

**Stack:** Next.js 16 App Router (RSC enabled, `src/app/`), React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui (`radix-vega` style — see `components.json`), Radix primitives via the `radix-ui` umbrella package, `lucide-react` for icons.

**Path alias:** `@/*` → `src/*`. shadcn aliases follow `components.json`: `@/components`, `@/components/ui`, `@/lib/utils`, `@/hooks`.

### Layout/routing

`src/app/layout.tsx` is the root layout: it wires up four fonts (Geist + Inter from `next/font/google`, plus local `HelveticaNeueRoman.otf` and `DongraScript.ttf` from `src/assets/fonts/`) as CSS variables and wraps every page with a shared `<Navbar />` and `<Footer />`. Routes:

- `/` — landing page (`src/app/page.tsx`)
- `/downloads` — public/internal download links
- `/help` — uses its own nested layout with a shadcn `Sidebar`/`SidebarProvider` (`src/app/help/layout.tsx` + `src/components/app-sidebar.tsx`). Note: the sidebar's `navMain` data is still shadcn placeholder content.
- `/policy/privacy`, `/policy/terms` — share `src/app/policy/layout.tsx`

### Styling system

Tailwind v4 is configured entirely in CSS (`src/app/globals.css`) — there is **no `tailwind.config.*`**. That single file:

1. Imports `tailwindcss`, `tw-animate-css`, and `shadcn/tailwind.css`.
2. Defines theme tokens under `@theme inline` (shadcn semantic colors like `--color-primary`, plus brand tokens `--color-nedel-blue` (`#0066ff` — vibrant), `--color-nedel-black-blue` (`#051c2c` — petrol), `--color-nedel-medium-blue`, `--color-nedel-green` (`#25d366` — reserved for WhatsApp UI only), `--color-nedel-white`, `--color-nedel-highlight-gray` (`#d9d9d6`)). **Red was removed from the design system — do not reintroduce `nedel-red`, `coral-red-*`, or `mexican-red-*`. Visual contrast is built by mass and saturation: vibrant blue against petrol against gray.**
3. Defines the raw palette in `:root` (named ramps: `blue-ribbon-*`, `daintree-*`, `royal-blue-*`, `quill-gray-*`, `mountain-meadow-*`, `white-*`) — the brand tokens above resolve into these.
4. Sets base typography in `@layer base` (body uses `font-helvetica`; `h1`–`h4` use `font-inter`).

When introducing colors, use the brand tokens (`bg-nedel-blue`, `text-nedel-black-blue`, etc.) or shadcn semantic tokens — don't hardcode hexes. Background patterns live in `public/graphics/` (e.g. `bg-[url('/graphics/pattern-n/azul-medio.png')]`).

### Components

- `src/components/ui/` — shadcn primitives (Button, Sheet, Sidebar, Table, Dropdown, etc.). The `Button` uses `cva` variants + `data-slot`/`data-variant` attributes; prefer adding variants there over one-off classes.
- `src/components/ui/section.tsx` — `<Section>` wrapper used to lay out homepage blocks (vertical padding + centered max-width container). Reach for it before nesting custom section markup.
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge). Use it (or `twMerge` directly) for any conditional class composition.
- Top-level `src/components/*` (navbar, footer, app-sidebar, nav-main, team-switcher, type-animation) are app-specific. Note: both `navbar.tsx` and a legacy `_navbar.tsx` exist — the leading-underscore file is unused; edit `navbar.tsx`.

### Assets

- `src/assets/` — fonts, mock product screenshots (`mock/digiadm.png`, `mock/diginfce.png`, `mock/digientregas.png`), and the `digiadm-logo`. Import these as ES modules (typed as `StaticImageData`) and pass to `next/image`.
- `public/` is organized by domain:
  - `brand/` — Nedel marks (`nedel.svg`, `n.svg`, `nedel-footer.svg`)
  - `apps/` — product screenshots (`digiadm.png`, `diginfce.png`)
  - `logotipos/` — client logos (`png/` rendered on site, `cruas/` raw uploads, `figma/` working files)
  - `social/` — social network icons (`ig.svg`, `github.svg`)
  - `graphics/` — background patterns (`pattern-n/`, `tracado/`) and decorative ornaments
  - `images/` — photography (team, facade, city) and `timeline/` historical photos
  - Use kebab-case filenames with no accents or spaces — these become URLs.
