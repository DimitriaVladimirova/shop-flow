# ShopFlow

A training web shop for groceries and everyday products, built with React and TypeScript.
It simulates a real team project: Jira tickets, pull requests, code review and CI.
The backend is mocked, so the app runs fully in the browser.

## Tech stack

- **React 19** + **TypeScript** (pinned to 6.0, see notes)
- **Vite** – dev server and build
- **Tailwind CSS v4** – styling
- **ESLint** + **Prettier** – code quality and formatting
- **Vitest** – tests
- **Husky** + **lint-staged** – checks before every commit
- **GitHub Actions** – CI on every pull request

## Requirements

- **Node.js 22** (the same version CI uses)
- **npm**
- **Git**

## Getting started

```bash
git clone https://github.com/DimitriaVladimirova/shop-flow.git
cd shop-flow
npm install
npm run dev
```

Open http://localhost:5173.

`npm install` also sets up the Git hooks (Husky), so lint and formatting run automatically before each commit.

## Scripts

| Command                | What it does                                          |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Starts the dev server with hot reload                 |
| `npm run build`        | Type-checks and builds the app into `dist/`           |
| `npm run preview`      | Serves the production build locally                   |
| `npm run lint`         | Checks the code with ESLint                           |
| `npm run typecheck`    | Checks types with TypeScript                          |
| `npm run test`         | Runs the tests once with Vitest                       |
| `npm run format`       | Formats all files with Prettier                       |
| `npm run format:check` | Checks formatting without changing files (used in CI) |

## Project structure

```
src/
  app/        App setup: router, providers, root layout
  features/   One folder per business area (catalog, cart, checkout, …)
  shared/     Reusable code: UI components, layout, helpers, HTTP client
  mocks/      Mock backend (MSW handlers and mock data)
  test/       Test setup and helpers
```

Tests live next to the code they test, e.g. `ProductCard.test.tsx` beside `ProductCard.tsx`.

## Workflow

- **Tickets:** [Jira board](https://shopflow-training.atlassian.net/jira/software/projects/SHOP/boards/2) – start with **SHOP-4 "How we work"**
- **Designs:** [Figma](https://www.figma.com/design/FZjVPrV7muIZqmJ2TWZVkx/E-commerce-UI---Figma-Ecommerce-UI-Kit--Demo-Version---Community-?node-id=2864-3735)
- **Branches:** `feature/SHOP-12-short-description` or `bugfix/SHOP-30-short-description`
- **Commits:** start with the ticket key, e.g. `SHOP-12: add product list query`
- Every change goes through a **pull request** with green CI and one approval before merging to `main`.

## Notes

- **TypeScript is pinned to `~6.0.3`** because `typescript-eslint` doesn't support TypeScript 7 yet.
- **`npm audit`** reports moderate issues in ESLint's dependencies (dev-only). `npm audit --omit=dev` shows 0 vulnerabilities.
- The repo uses **LF line endings** (`.gitattributes`). On Windows, set VS Code's _Files: Eol_ to `\n`.
