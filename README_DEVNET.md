Zion DevNet Simulator

Routes
- /devnet (dashboard)
- /sandbox (redirects to /devnet)
- /faucet (ZION$ faucet)
- /dao/dev (DAO proposal sandbox)
- /marketplace (mock jobs + talent)
- /nations (micro-nations + manifesto editor)
- /gpt-playground (GPT tester)

API
- /api/devnet/faucet GET address balance, POST mint
- /api/devnet/marketplace GET list, POST create job
- /api/devnet/dao GET proposals, POST submit/vote/finalize
- /api/devnet/nation GET list, POST create, PUT update manifesto
- /api/devnet/vault GET/POST manifesto by nationId
- /api/devnet/gpt POST prompt (uses mock if no OPENAI_API_KEY)

CLI
- Install: npm link (once)
- Start: zion devnet start (runs on http://localhost:3001)

Docker
- Build & run: docker compose up --build
- App at http://localhost:3000

Deploy
- Netlify/Railway: set DEVNET=1, build with `npm run build` or `next build`; use `next start` or adapter plugin.

Notes
- In-memory state resets on restart. Suitable for sandboxing; no persistence by default.
- Simple rate limiter in API to aid stress testing.