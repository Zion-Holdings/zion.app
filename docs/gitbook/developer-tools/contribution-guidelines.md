# Contribution Guidelines

## Setup
- Node 20+, PNPM 9+
- `pnpm i && pnpm build && pnpm test`

## Workflow
- Create a branch per change; keep PRs scoped
- Conventional commits; PR description with screenshots/API diffs
- Add/Update docs and tests

## Code Style
- TypeScript strict, ESLint + Prettier
- Avoid magic numbers; centralize config
- Tests: unit + integration; snapshot where helpful

## Security
- Never commit secrets
- Report vulnerabilities via security@ (PGP preferred)