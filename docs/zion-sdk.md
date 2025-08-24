---
route: /docs/zion-sdk
---

## Zion SDK

The Zion SDK helps builders, DAOs, and partner orgs integrate with Zion OS APIs and scaffold new instances.

### Packages
- `@zion/sdk` (TypeScript, React helpers)
- `create-zion-instance` (CLI scaffolder)
- `zion-python` (Python wrapper)

### Install

```bash
npm i @zion/sdk
# or
pnpm add @zion/sdk
```

### Quick Example (TypeScript)

```ts
import { ZionClient } from '@zion/sdk';

const zion = new ZionClient({ baseUrl: process.env.ZION_API_URL!, apiKey: process.env.ZION_API_KEY });
const jobs = await zion.marketplace.listJobs();
```

### Scaffold a new instance

```bash
npx create-zion-instance --template nextjs --dir my-zion
```

See each package README for details.