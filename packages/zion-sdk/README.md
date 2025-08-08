# @zion/sdk

TypeScript SDK for Zion OS with React helpers.

## Install

```bash
npm i @zion/sdk
```

## Usage

```ts
import { ZionClient } from '@zion/sdk';

const zion = new ZionClient({ baseUrl: process.env.ZION_API_URL!, apiKey: process.env.ZION_API_KEY });
const jobs = await zion.marketplace.listJobs({ limit: 5 });
```

### React

```tsx
import { ZionProvider, useJobs } from '@zion/sdk/react';

function App() {
  return (
    <ZionProvider options={{ baseUrl: process.env.NEXT_PUBLIC_ZION_API_URL! }}>
      <Jobs />
    </ZionProvider>
  );
}

function Jobs() {
  const { data, loading } = useJobs();
  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```