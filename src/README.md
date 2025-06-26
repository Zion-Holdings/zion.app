# Frontend Application Source (`src/`)

This directory contains the primary source code for the Zion platform's Next.js frontend application.

## Overview

The frontend is built using Next.js and React, with TypeScript as the primary language. It's responsible for rendering the user interface, managing client-side state, interacting with various backend APIs, and providing the overall user experience for the platform.

## Key Technologies & Libraries

-   **Framework:** Next.js using the Pages Router. The root `pages/` directory is primary, with additional routes maintained in `src/pages/`.
-   **Language:** TypeScript
-   **UI Framework/Libraries:**
    -   React
    -   Tailwind CSS (assumed, based on `src/index.css` and typical Next.js setups)
    -   Chakra UI (`@chakra-ui/react`)
    -   Radix UI (`@radix-ui/*`) for unstyled, accessible UI primitives.
    -   Shadcn UI components are used as the design system, built on top of Radix primitives.
    -   Framer Motion (for animations)
-   **State Management:**
    -   React Query / SWR (`@tanstack/react-query`, `swr`): For server state, caching, and data synchronization.
    -   Redux Toolkit (`@reduxjs/toolkit`): For complex client-side state (e.g., cart, wishlist, auth session details).
    -   React Context API: For global state like theme, authentication, wallet info, etc.
-   **Forms:** React Hook Form is the primary library. Formik and others are maintained for a few legacy pages.
-   **API Interaction:** Axios, SWR/React Query's fetch capabilities. Custom clients in `src/api/` and `src/services/`.
-   **Authentication:** NextAuth.js (client-side integration via `AuthProvider` in `src/context/auth/`), interacting with Supabase.
-   **Internationalization (i18n):** `i18next`, `react-i18next`.
-   **Web3/Decentralization:** Ethers.js, Helia, libp2p, OrbitDB (client-side interactions).
    -   Custom `useTokenBalance` hook retrieves ERC20 balances when a wallet is connected.
-   **Error Monitoring:** Sentry (`@sentry/nextjs`).
-   **Testing:**
    -   Jest (with React Testing Library) for unit/integration tests (tests primarily in `__tests__/` at root).
    -   Storybook (`.storybook/` at root) for component development and testing.

## Directory Structure Highlights

-   **`api/`**: Client-side API service functions/wrappers for backend communication.
-   **`assets/`**: Static assets like images.
-   **`components/`**: Reusable React components, organized by feature or type. This is a very large and critical directory.
-   **`config/`**: Frontend-specific configurations.
-   **`context/`**: React Context providers for global state.
-   **`data/`**: Mock data, static data sets.
-   **`hooks/`**: Custom React hooks for reusable logic.
-   **`i18n/` & `locales/`**: Internationalization and localization files.
-   **`integrations/`**: Client-side setup for third-party services (Firebase, Supabase client).
-   **`layout/`**: Components defining the overall page structure and navigation.
-   **`lib/`**: General utility functions and libraries for the frontend.
-   **`mobile/`**: Components and pages potentially tailored for a mobile-specific web experience.
-   **`pages/` (within `src/`)**: Supplemental pages that share the Pages Router with the root `pages/` directory.
-   **`routes/`**: Custom routing logic, protected route components, route configuration.
-   **`services/`**: More structured API interaction layer, potentially typed API clients.
-   **`store/`**: Redux Toolkit store setup (slices, reducers).
-   **`styles/`**: Global stylesheets, CSS modules, Tailwind base.
-   **`types/`**: TypeScript type definitions.
-   **`utils/`**: Utility functions.

## Getting Started & Development

1.  **Prerequisites:** Node.js, npm (ensure versions match project requirements, e.g., Node 20.x).
2.  **Install Dependencies:** Run `npm install` in the root of the monorepo.
3.  **Environment Variables:**
    *   Copy `.env.example` (if it exists at the root or `src/`) to `.env.local`.
    *   Populate necessary client-side environment variables (e.g., `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SENTRY_DSN`, API keys for third-party services).
4.  **Running the Development Server:**
    ```bash
    npm run dev
    ```
    The frontend will typically be available at `http://localhost:3000`.

## Building for Production

```bash
npm run build
```
This will create an optimized production build in the `.next` directory.

## Running Tests

-   **Unit/Integration Tests (Jest):**
    ```bash
    npm test
    ```
-   **E2E Tests (Cypress/Playwright):** Refer to `cypress/README.md` (if exists) or root level instructions. Typically:
    ```bash
    npm run cypress:open
    # or
    npm run playwright test # (or similar, check Playwright scripts)
    ```
-   **Storybook (Component Development/Testing):**
    ```bash
    npm run storybook
    ```

## Coding Conventions & Style Guides

-   **Linting:** ESLint is used. Run `npm run lint` to check.
-   **Formatting:** Prettier is used. Run `npm run format` to format code.
-   See [CONTRIBUTING.md](../CONTRIBUTING.md) for coding standards and contribution guidelines.

## State Management Strategy

The application employs a hybrid state management approach:

1.  **React Query / SWR:** For managing server state, caching API responses, and handling asynchronous data fetching.
2.  **Redux Toolkit:** For complex global client-side state (e.g., shopping cart, wishlist, detailed auth session info).
3.  **React Context API:** For simpler global state that needs to be shared across components (e.g., theme, basic auth status, wallet connection).

-   See [Frontend State Management Guidelines](../docs/frontend_state_management_guidelines.md) for more details on choosing between React Query, Redux Toolkit and React Context.

## Key Architectural Decisions & Notes

-   **Component-Driven Development:** Emphasis on reusable components.
-   **TypeScript:** For static typing and improved code quality.
-   **Robust Error Handling:** Multiple layers of error boundaries.
-   **Internationalization:** Built-in support for multiple languages.
-   Chakra UI provides layout primitives and theming, while Radix primitives and Shadcn UI supply accessible components.
-   `AuthProvider` handles Supabase authentication and updates `authSlice` to store tokens in Redux for global access.
