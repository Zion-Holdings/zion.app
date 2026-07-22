'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DockerComposeGenerator() {
  const appRef = useRef<HTMLInputElement>(null);
  const dbRef = useRef<HTMLSelectElement>(null);
  const portRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('generate');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const app = appRef.current?.value || 'app';
      const db = dbRef.current?.value || 'postgres';
      const port = Number(portRef.current?.value || 3000);
      const image = db === 'mysql' ? 'mysql:8' : db === 'mongo' ? 'mongo:7' : 'postgres:16';
      const env = db === 'mysql' ? 'MYSQL_ROOT_PASSWORD=secret' : db === 'mongo' ? 'MONGO_INITDB_ROOT_USERNAME=root\n      MONGO_INITDB_ROOT_PASSWORD=secret' : 'POSTGRES_PASSWORD=secret';
      out.textContent = `version: '3.9'
services:
  ${app}:
    build: .
    ports:
      - "${port}:${port}"
    environment:
      - DATABASE_URL=${db}://db:5432/app
    depends_on:
      - db
  db:
    image: ${image}
    environment:
      - ${env.replace(/\n/g, '\n      - ')}
    volumes:
      - db:/var/lib/${db}
volumes:
  db:`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Docker Compose Generator</h1>
        <p className="mt-2 text-slate-400">Generate a basic docker-compose skeleton for app + database services.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">App service name</label>
              <input ref={appRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="app" />
            </div>
            <div>
              <label className="block text-sm font-medium">Database</label>
              <select ref={dbRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
                <option>postgres</option>
                <option>mysql</option>
                <option>mongo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">App port</label>
              <input ref={portRef} type="number" min="1" max="65535" defaultValue="3000" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" />
            </div>
            <button id="generate" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate</button>
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">docker-compose.yml</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Output appears here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
