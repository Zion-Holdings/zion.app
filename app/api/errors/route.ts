import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'automation', 'reports', 'errors');
const LOG_FILE = path.join(DATA_DIR, `errors-${new Date().toISOString().slice(0, 10)}.jsonl`);

function ensureFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  ensureFiles();

  try {
    const body = await request.json();
    const { errors, sessionId, url, userAgent } = body;

    if (!Array.isArray(errors) || errors.length === 0) {
      return NextResponse.json({ ok: true, message: 'No errors' });
    }

    // Append each error as a JSON line
    const lines = errors.map((err) =>
      JSON.stringify({
        timestamp: new Date().toISOString(),
        sessionId,
        url,
        userAgent,
        ...err,
      })
    );

    fs.appendFileSync(LOG_FILE, lines.join('\n') + '\n');

    return NextResponse.json({ ok: true, received: errors.length });
  } catch (err) {
    console.error('Error ingestion failed:', err);
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}
