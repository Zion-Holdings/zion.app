# SDK + CLI

Install
```bash
npm install @zion/sdk
```

Create a job
```ts
import { Zion } from "@zion/sdk";
const zion = new Zion({ baseUrl: "/api/v1" });
await zion.jobs.create({ title: "Design landing page", budget: { currency: "USDC", amount: "5000" } });
```

CLI
```bash
npx zion jobs create --title "Design landing page" --budget 5000 --currency USDC
npx zion proposals list
```

Config
```json
{
  "baseUrl": "/api/v1",
  "chainId": 8453,
  "ipfsGateway": "https://ipfs.io"
}
```