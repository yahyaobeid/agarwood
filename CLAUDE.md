# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start Vite dev server
npm run build  # Production build
```

No test runner or linter is configured. TypeScript type-checking runs implicitly through Vite.

## Architecture

This is a **single-page marketing site** for Cao Agarwood Estates, generated from a Figma design. It uses React + Vite + Tailwind CSS v4.

**Page sections** (rendered in order in `src/app/App.tsx`):
- `Hero` → `Story` → `Product` → `Process` → `Contact` → `Footer`

Each section is a self-contained component in `src/app/components/`.

**UI primitives** live in `src/app/components/ui/` — these are Radix UI wrappers (shadcn-style) and should not be modified unless fixing a bug in the primitive itself.

**Styling layers** (`src/styles/`):
- `index.css` — base resets
- `tailwind.css` — Tailwind entry
- `theme.css` — CSS custom properties / design tokens
- `fonts.css` — `@font-face` declarations

**No routing** — single view, no React Router pages in use despite the package being installed.

**`src/app/components/figma/`** — Figma-generated helper components; treat as source of truth for design fidelity.
