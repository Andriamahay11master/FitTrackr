# FitTrackr

FitTrackr is a modern fitness tracking web app built with React, TypeScript, and Vite. It helps users track weight progress, set goals, log meals, and manage personalized settings in a clean dashboard experience backed by Firebase.

## Project setup

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Dependencies

These packages are required at runtime:

- `firebase` — Firebase SDK for authentication and data storage
- `react` — React UI library
- `react-dom` — React DOM renderer
- `react-router-dom` — Client-side routing
- `recharts` — Charting library for data visualizations
- `sass` — Sass compiler for styling

## Dev dependencies

These packages are used for development, linting, type checking, and build tooling:

- `@eslint/js` — ESLint JavaScript support
- `@types/node` — Node.js type definitions
- `@types/react` — React type definitions
- `@types/react-dom` — React DOM type definitions
- `@vitejs/plugin-react` — Vite plugin for React
- `autoprefixer` — PostCSS plugin to parse CSS and add vendor prefixes
- `eslint` — JavaScript and TypeScript linter
- `eslint-plugin-react-hooks` — ESLint rules for React hooks
- `eslint-plugin-react-refresh` — ESLint integration for React Fast Refresh
- `globals` — Global variable definitions for ESLint
- `postcss` — CSS processing tool
- `tailwindcss` — Utility-first CSS framework
- `typescript` — TypeScript language support
- `typescript-eslint` — ESLint parser and plugin for TypeScript
- `vite` — Frontend build and dev server

## Project structure

Key folders:

- `src/` — Application source code
  - `components/` — UI components, charts, routes, and skeletons
  - `features/` — Feature-specific modules for goals, meals, and weight
  - `hooks/` — Custom React hooks
  - `pages/` — Route pages for auth, dashboard, meals, settings, and weight
  - `services/` — Firebase, auth, storage, and weight services
  - `store/` — Zustand store hooks
  - `utils/` — Utility helpers for dates, insights, and weight calculations
  - `styles/` — SCSS styles

## Notes

This README has been updated to reflect the current `package.json` dependency list and the project's source structure.
