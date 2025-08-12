// @vitest-environment node
import { beforeAll, afterAll, describe, it, expect } from 'vitest';
import express from 'express';
import syncRoutes from '../server/routes/sync';
import crypto from 'crypto';

let server: any;
let baseUrl = '';

beforeAll(() => {
  const app = express();
  app.use(express.json());
  app.use('/sync', syncRoutes);
  server = app.listen(0);
  const { port } = server.address() as any;
  baseUrl = `http://127.0.0.1:${port}`;
});

afterAll(() => {
  server.close();
});

describe('sync routes', () => {
  it('stores proposal data via /sync/hub', async () => {
    const payload = { proposals: [{ id: 'p1', version: 1 }] };
    const merkleRoot = crypto
      .createHash('sha256')
      .update(JSON.stringify({ ...payload, tokenTransfers: [], talentMoves: [], resolutions: [], leaderboard: [] }))
      .digest('hex');

    const res = await fetch(`${baseUrl}/sync/hub`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, merkleRoot }),
    });
    expect(res.status).toBe(200);
    const status = await fetch(`${baseUrl}/sync/status`);
    const data = await status.json();
    expect(data.proposals[0].id).toBe('p1');
  });
});
