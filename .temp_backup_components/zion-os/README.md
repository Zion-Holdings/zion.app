# Zion OS

Unified deployment protocol for spinning up full-scale Zion ecosystems.

## Quickstart

1. Copy `.env.example` to `.env` and set secrets.
2. Install dependencies:

```bash
npm install
```

3. Generate DB & client:

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

4. Run dev server:

```bash
npm run dev
```

Admin endpoints require header `x-superadmin: $NEXTAUTH_SECRET`.

Routes:
- `/multiverse/launch` or `/admin/os-deploy` to deploy
- `/admin/instances` to view instances
- `/api/deploy` POST deployment
- `/api/health` health check