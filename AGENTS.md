# Repository Guidelines

## Project Structure & Module Organization
The stack is React with Vite (or Next) plus TailwindCSS, Framer Motion, lucide-react, and PostCSS/Autoprefixer. Keep code in `src/`: pages in `src/app/` (`src/app/Page.tsx` entry), UI blocks in `src/components/`, utilities in `src/lib/`, and global styles in `src/styles/`. Store primitives in `src/components/primitives.tsx` and reuse them across sections (`Hero`, `Services`, etc.) for consistent rhythm.

## Build, Test, and Development Commands
Use npm scripts as the single interface: `npm install` (deps), `npm run dev` (Vite server), `npm run build` (production bundle), `npm run preview`, `npm run lint` (ESLint + Tailwind), and `npm run test` (Vitest). Document any extra POSIX shell helpers under `scripts/README.md`.

## Styling, Tokens & Motion
Define all design tokens in `src/styles/tokens.css` exactly as provided and import the file first in `src/main.tsx` (or `src/main.css`). Configure Tailwind via `tailwind.config.ts`, extending colors, radii, shadows, typography, and the custom `.focus-ring` utility. Framer Motion presets live in `src/lib/motion.ts` with the shared `[0.22,1,0.36,1]` easing and sub-600 ms durations; do not introduce alternate curves. Utility class merging uses `src/lib/cn.ts`.

## Components & Layout Conventions
Follow the supplied primitives (`Container`, `Section`, `Card`, `Button`) and prefer composition over ad-hoc class strings. Components live in PascalCase files exporting default React functions. Section blocks (Hero, Services, Portfolio, Calculator, Process, Pricing, FAQ, Contact) use the tokens for spacing (`max-w-container`, `gap-*`) and typography (`text-4xl`, `leading-relaxed`). lucide-react icons default to `h-5 w-5`. Forms reuse the shared border, padding, and `.focus-ring`. Respect the z-index map (`z-40` nav/progress, `z-50` mobile CTA/modal backdrop, `z-60` modal content).

## Testing Guidelines
Write component and hook tests with Vitest + Testing Library under `src/__tests__/` or colocated `*.test.tsx`. Snapshot only pure presentational components and assert accessibility with `@testing-library/jest-dom`. Run `npm run test -- --coverage` for hero/CTA changes and store artifacts in `coverage/`. Include before/after screenshots alongside any UI-facing PR.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (`feat: hero motion`, `fix: calculator form validation`, `chore: tailwind tokens`). Each PR should: describe the problem, list the solution, enumerate commands run (`npm run lint`, `npm run test`), and include screenshots or Loom for visual tweaks. Reference related Notion/Jira tickets in the footer and request review only after CI greenlights.

## Security & Configuration Tips
Never commit secrets; capture required env vars in `.env.example` and describe them in `docs/configuration.md`. Pin dependency versions (`package.json`, `pnpm-lock.yaml` if applicable) and run `npm audit --production` before release branches. Record architecture or token changes in `docs/adr/` for future auditability.***
