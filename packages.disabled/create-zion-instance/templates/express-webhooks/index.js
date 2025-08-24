import express from 'express';
import bodyParser from 'body-parser';
import { ZionClient } from '@zion/sdk';

const app = express();
app.use(bodyParser.json());

const zion = new ZionClient({ baseUrl: process.env.ZION_API_URL || 'https://api.zion.example', apiKey: process.env.ZION_API_KEY });

app.post('/webhooks/zion', async (req, res) => {
  // Process incoming event
  const event = req.body;
  console.log('Received Zion event:', event.type);
  res.json({ received: true });
});

app.get('/health', (_, res) => res.send('ok'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));