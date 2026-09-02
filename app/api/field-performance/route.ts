import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, '.hermes', 'memory', 'field-performance', 'raw');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || typeof body.value !== 'number' || !body.rating || !body.id) {
      return NextResponse.json({ error: 'Invalid metric payload' }, { status: 400 });
    }

    // Ensure today's file exists
    const today = new Date().toISOString().split('T')[0];
    const dir = path.join(DATA_DIR, today);
    fs.mkdirSync(dir, { recursive: true });

    const filepath = path.join(dir, 'submissions.jsonl');
    const line = JSON.stringify({
      ...body,
      page: body.page || '/',
      timestamp: body.timestamp || Date.now(),
      connection: body.connection || null,
      deviceMemory: body.deviceMemory || null,
    }) + '\n';

    fs.appendFileSync(filepath, line);

    // Also update latest snapshot for quick access
    const latestPath = path.join(DATA_DIR, 'latest.jsonl');
    fs.appendFileSync(latestPath, line);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Field performance submission error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
