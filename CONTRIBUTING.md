# Contributing to Zion

Thank you for your interest in contributing! Please follow these guidelines to help us keep the project consistent.

## Development Setup

1. Run `./setup.sh npm` to install dependencies. Other package managers are supported but npm is the default.
2. Copy `.env.example` to `.env` and adjust values as needed.
3. Validate your environment:
   ```bash
   npx ts-node --transpile-only scripts/check-env.ts
   ```

## Coding Standards

- Use Prettier and ESLint: `npm run lint-format` before submitting a pull request.
- Write unit tests for new functionality (`npm test`).
- Run `npx vitest run --coverage` and `npm run cypress:run` if your changes affect front‑end behavior.

## Pull Requests

1. Create a feature branch from `main`.
2. Ensure all tests pass locally.
3. Open a pull request with a clear description of your changes.

We appreciate all contributions! If you have questions, open an issue.
