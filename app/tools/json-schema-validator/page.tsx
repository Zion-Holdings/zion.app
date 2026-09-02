'use client';

import { useState } from 'react';

export const metadata = {
  title: 'JSON Schema Validator — Zion Tech Group',
  description: 'Validate JSON objects against a schema in the browser. Fast, private, no uploads.',
  alternates: { canonical: '/tools/json-schema-validator/' },
};

export default function JsonSchemaValidatorPage() {
  const [jsonText, setJsonText] = useState('');
  const [schemaText, setSchemaText] = useState('');
  const [output, setOutput] = useState<{ valid?: boolean; errors?: string }>({});

  const handleValidate = () => {
    const errors: string[] = [];
    let json: unknown;
    let schema: unknown;

    try {
      json = JSON.parse(jsonText);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Invalid JSON';
      setOutput({ valid: false, errors: `Input JSON: ${message}` });
      return;
    }

    try {
      schema = JSON.parse(schemaText);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Invalid schema JSON';
      setOutput({ valid: false, errors: `Schema JSON: ${message}` });
      return;
    }

    try {
      const result = window.schemaValidate(json, schema);
      setOutput({ valid: result.valid, errors: result.errors || undefined });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Validation failed';
      setOutput({ valid: false, errors: message });
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-white">JSON Schema Validator</h1>
      <p className="mt-2 text-slate-300">
        Validate JSON against a schema. Runs in-browser.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <textarea
          value={jsonText}
          onChange={(event) => setJsonText(event.target.value)}
          placeholder='{ "name": "Zion", "plan": "growth" }'
          className="h-64 rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200"
        />
        <textarea
          value={schemaText}
          onChange={(event) => setSchemaText(event.target.value)}
          placeholder='{ "type": "object", "required": ["name"], "properties": { "name": { "type": "string" } } }'
          className="h-64 rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200"
        />
      </div>

      <button
        onClick={handleValidate}
        className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500"
      >
        Validate
      </button>

      {output.errors && (
        <div className="mt-4 rounded-xl border border-red-900/60 bg-red-950/60 p-4 text-sm text-red-200">
          {output.valid ? 'Valid' : `Invalid: ${output.errors}`}
        </div>
      )}
    </div>
  );
}

declare global {
  interface Window {
    schemaValidate: (data: unknown, schema: unknown) => { valid: boolean; errors?: string };
  }
}
