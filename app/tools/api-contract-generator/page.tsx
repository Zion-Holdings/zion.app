'use client';

import { useState } from 'react';

function parseYaml(yaml: string): any {
  const lines = yaml.split('\n');
  const result: any = {};
  let currentPath: string[] = [];
  const stack: any[] = [result];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const indent = line.search(/\S/);
    while (stack.length > 1 && indent <= currentPath.length) {
      stack.pop();
      currentPath.pop();
    }

    if (trimmed.includes(':')) {
      const [key, ...val] = trimmed.split(':');
      const value = val.join(':').trim();
      const obj = stack[stack.length - 1];

      if (value === '' || value === '|') {
        obj[key.trim()] = {};
        stack.push(obj[key.trim()]);
        currentPath.push(key.trim());
      } else {
        obj[key.trim()] = value.replace(/^['"]|['"]$/g, '');
      }
    } else if (trimmed.startsWith('- ')) {
      const arr = stack[stack.length - 1];
      if (!Array.isArray(arr)) {
        const parent = stack[stack.length - 2];
        const lastKey = currentPath[currentPath.length - 1];
        parent[lastKey] = [trimmed.substring(2).trim()];
        stack.push(parent[lastKey]);
      } else {
        arr.push(trimmed.substring(2).trim());
      }
    }
  }
  return result;
}

function opToFn(method: string, path: string): string {
  const parts = path.split('/').filter(p => p && !p.startsWith('{')).map(p => p.replace(/[^a-zA-Z0-9]/g, ''));
  const action = method.charAt(0).toUpperCase() + method.slice(1);
  return action + parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

function tsType(schema: any): string {
  if (!schema) return 'any';
  if (schema.$ref) return schema.$ref.split('/').pop() || 'any';
  if (schema.type === 'array') return `${tsType(schema.items)}[]`;
  if (schema.type === 'object') return 'Record<string, any>';
  return schema.type || 'any';
}

function interpolatePath(path: string, params: any[]): string {
  return path.replace(/\{(\w+)\}/g, (_, key) => `\${${key}}`);
}

function generateTsType(name: string, schema: any): string {
  if (schema.type !== 'object') return `export type ${name} = ${schema.type};\n`;
  const props = schema.properties ? Object.entries(schema.properties).map(([k, v]: [string, any]) =>
    `  ${k}${schema.required?.includes(k) ? '' : '?'}: ${tsType(v)};`
  ).join('\n') : '';
  return `export interface ${name} {\n${props}\n}\n`;
}

function genParams(op: any): string {
  const params: string[] = [];
  if (op.parameters) {
    for (const p of op.parameters) {
      if (p.in === 'path' || p.in === 'query') {
        params.push(`${p.name}: ${tsType(p.schema)}`);
      }
    }
  }
  if (op.requestBody) params.push('body: any');
  return params.join(', ');
}

function generateTypescript(spec: any): string {
  let out = '// Generated from OpenAPI spec\n';
  out += '// API Contract Generator - TypeScript Client\n\n';

  if (spec.components?.schemas) {
    out += '// Types\n';
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      out += generateTsType(name, schema as any);
    }
    out += '\n';
  }

  out += '// Client\n';
  out += 'export class ApiClient {\n';
  out += '  constructor(private baseUrl: string, private headers: Record<string, string> = {}) {}\n\n';

  if (spec.paths) {
    for (const [path, methods] of Object.entries(spec.paths)) {
      for (const [method, op] of Object.entries(methods as any)) {
        const opData = op as any;
        const fnName = opToFn(method, path);
        out += `  async ${fnName}(${genParams(opData)}) {\n`;
        out += `    const url = \`\${this.baseUrl}\${interpolatePath('${path}', ${JSON.stringify(opData.parameters || [])})}\`;\n`;
        out += `    const response = await fetch(url, {\n`;
        out += `      method: '${method.toUpperCase()}',\n`;
        out += `      headers: { 'Content-Type': 'application/json', ...this.headers },\n`;
        if (opData.requestBody) {
          out += `      body: JSON.stringify(body),\n`;
        }
        out += `    });\n`;
        out += `    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);\n`;
        out += `    return response.json();\n`;
        out += `  }\n\n`;
      }
    }
    out += '}\n';
  out += '\nfunction interpolatePath(path: string, params: any[]): string {\n';
  out += '  return path.replace(/\\{(\\w+)\\}/g, (_, key) => `\${${key}}`);\n';
  out += '}\n';
  return out;
}

function pyType(schema: any): string {
  if (!schema) return 'Any';
  if (schema.$ref) return schema.$ref.split('/').pop() || 'Any';
  if (schema.type === 'array') return `List[${pyType(schema.items)}]`;
  return { string: 'str', integer: 'int', number: 'float', boolean: 'bool' }[schema.type] || 'Any';
}

function genPyParams(op: any): string {
  const params: string[] = [];
  if (op.parameters) {
    for (const p of op.parameters) {
      if (p.in === 'path' || p.in === 'query') {
        params.push(`${p.name}: ${pyType(p.schema)}`);
      }
    }
  }
  if (op.requestBody) params.push('body: Dict[str, Any]');
  return params.length ? ', ' + params.join(', ') : '';
}

function interpolatePyPath(path: string): string {
  return path.replace(/\{(\w+)\}/g, '{$1}');
}

function generatePyModel(name: string, schema: any): string {
  if (schema.type !== 'object') return `@dataclass\nclass ${name}:\n    value: ${pyType(schema)}\n\n`;
  const fields = schema.properties ? Object.entries(schema.properties).map(([k, v]: [string, any]) =>
    `    ${k}: ${pyType(v)}${schema.required?.includes(k) ? '' : ' = None'}`
  ).join('\n') : '';
  return `@dataclass\nclass ${name}:\n${fields}\n\n`;
}

function generatePython(spec: any): string {
  let out = '# Generated from OpenAPI spec\n';
  out += '# API Contract Generator - Python Client\n\n';
  out += 'from dataclasses import dataclass\n';
  out += 'from typing import Optional, List, Dict, Any\n';
  out += 'import httpx\n\n';

  if (spec.components?.schemas) {
    out += '# Models\n';
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      out += generatePyModel(name, schema as any);
    }
    out += '\n';
  }

  out += 'class ApiClient:\n';
  out += '    def __init__(self, base_url: str, headers: Dict[str, str] = None):\n';
  out += '        self.base_url = base_url.rstrip("/")\n';
  out += '        self.headers = headers or {}\n\n';

  if (spec.paths) {
    for (const [path, methods] of Object.entries(spec.paths)) {
      for (const [method, op] of Object.entries(methods as any)) {
        const opData = op as any;
        const fnName = method + '_' + path.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
        out += `    async def ${fnName}(self${genPyParams(opData)}) -> Any:\n`;
        out += `        url = f"{self.base_url}${interpolatePyPath(path)}"\n`;
        out += `        async with httpx.AsyncClient() as client:\n`;
        out += `            resp = await client.${method}(url, headers={**self.headers, "Content-Type": "application/json"}, json=body if 'body' in locals() else None)\n`;
        out += `            resp.raise_for_status()\n`;
        out += `            return resp.json()\n\n`;
      }
    }
  }
  return out;
}

function goType(schema: any): string {
  if (!schema) return 'interface{}';
  if (schema.$ref) return schema.$ref.split('/').pop() || 'interface{}';
  if (schema.type === 'array') return `[]${goType(schema.items)}`;
  return { string: 'string', integer: 'int', number: 'float64', boolean: 'bool' }[schema.type] || 'interface{}';
}

function genGoParams(op: any): string {
  const params: string[] = [];
  if (op.parameters) {
    for (const p of op.parameters) {
      if (p.in === 'path' || p.in === 'query') {
        params.push(`${p.name} ${goType(p.schema)}`);
      }
    }
  }
  if (op.requestBody) params.push('body interface{}');
  return params.join(', ');
}

function goReturnType(op: any): string {
  if (op.responses?.['200']?.content?.['application/json']?.schema) {
    const schema = op.responses['200'].content['application/json'].schema;
    if (schema.$ref) return schema.$ref.split('/').pop() || 'interface{}';
  }
  return 'interface{}';
}

function generateGoStruct(name: string, schema: any): string {
  if (schema.type !== 'object') return `type ${name} ${goType(schema)}\n\n`;
  const fields = schema.properties ? Object.entries(schema.properties).map(([k, v]: [string, any]) =>
    `    ${k.charAt(0).toUpperCase() + k.slice(1)} ${goType(v)} \`json:"${k}"\``
  ).join('\n') : '';
  return `type ${name} struct {\n${fields}\n}\n\n`;
}

function generateGo(spec: any): string {
  let out = '// Generated from OpenAPI spec\n';
  out += '// API Contract Generator - Go Client\n\n';
  out += 'package apiclient\n\n';
  out += 'import (\n';
  out += '    "encoding/json"\n';
  out += '    "fmt"\n';
  out += '    "net/http"\n';
  out += ')\n\n';

  if (spec.components?.schemas) {
    out += '// Models\n';
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      out += generateGoStruct(name, schema as any);
    }
    out += '\n';
  }

  out += 'type Client struct {\n';
  out += '    BaseURL string\n';
  out += '    HTTPClient *http.Client\n';
  out += '    Headers map[string]string\n';
  out += '}\n\n';

  out += 'func NewClient(baseURL string) *Client {\n';
  out += '    return &Client{BaseURL: baseURL, HTTPClient: &http.Client{}}\n';
  out += '}\n\n';

  if (spec.paths) {
    for (const [path, methods] of Object.entries(spec.paths)) {
      for (const [method, op] of Object.entries(methods as any)) {
        const opData = op as any;
        const fnName = opToFn(method, path);
        out += `func (c *Client) ${fnName}(${genGoParams(opData)}) (${goReturnType(opData)}, error) {\n`;
        out += `    url := fmt.Sprintf("%s%s", c.BaseURL, "${path}")\n`;
        out += `    // ... implementation\n`;
        out += `    return nil, nil\n`;
        out += `}\n\n`;
      }
    }
  }
  return out;
}

function generateOpenAPI(spec: any): string {
  return JSON.stringify(spec, null, 2);
}

function generateMockServer(spec: any): string {
  let out = '// Mock Server (Express.js)\n';
  out += '// Generated from OpenAPI spec\n\n';
  out += 'const express = require("express");\n';
  out += 'const app = express();\n';
  out += 'app.use(express.json());\n\n';

  if (spec.paths) {
    for (const [path, methods] of Object.entries(spec.paths)) {
      const expressPath = path.replace(/\{(\w+)\}/g, ':$1');
      for (const [method, op] of Object.entries(methods as any)) {
        const opData = op as any;
        out += `app.${method}('${expressPath}', (req, res) => {\n`;
        out += `  // ${opData.summary || ''}\n`;
        out += `  res.json({ message: "Mock response for ${method.toUpperCase()} ${path}" });\n`;
        out += `});\n\n`;
      }
    }
  }

  out += 'app.listen(3001, () => console.log("Mock server on :3001"));\n';
  return out;
}

const samples = [
  { name: 'Simple CRUD', spec: `openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: List users
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
    post:
      summary: Create user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserInput'
      responses:
        '201':
          description: Created
  /users/{id}:
    get:
      summary: Get user
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id: { type: string }
        name: { type: string }
        email: { type: string }
      required: [id, name, email]
    UserInput:
      type: object
      properties:
        name: { type: string }
        email: { type: string }
      required: [name, email]` },
  { name: 'E-commerce', spec: `openapi: 3.0.0
info:
  title: Shop API
  version: 1.0.0
paths:
  /products:
    get:
      summary: List products
      parameters:
        - name: category
          in: query
          schema: { type: string }
        - name: page
          in: query
          schema: { type: integer, default: 1 }
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items: { $ref: '#/components/schemas/Product' }
                  pagination:
                    $ref: '#/components/schemas/Pagination'
  /orders:
    post:
      summary: Create order
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                items:
                  type: array
                  items:
                    type: object
                    properties:
                      productId: { type: string }
                      quantity: { type: integer }
                    required: [productId, quantity]
                shippingAddress:
                  $ref: '#/components/schemas/Address'
              required: [items, shippingAddress]
      responses:
        '201':
          description: Created
components:
  schemas:
    Product:
      type: object
      properties:
        id: { type: string }
        name: { type: string }
        price: { type: number }
        category: { type: string }
    Pagination:
      type: object
      properties:
        page: { type: integer }
        total: { type: integer }
    Address:
      type: object
      properties:
        street: { type: string }
        city: { type: string }
        zip: { type: string }
        country: { type: string }
      required: [street, city, zip, country]` },
];

export default function ApiContractGeneratorTool() {
  const [spec, setSpec] = useState('');
  const [format, setFormat] = useState<'typescript' | 'python' | 'go' | 'openapi' | 'mock'>('typescript');
  const [result, setResult] = useState<string>('');

  const generate = () => {
    if (!spec.trim()) return;

    try {
      const isYaml = spec.includes(':') && !spec.startsWith('{');
      const parsed = isYaml ? parseYaml(spec) : JSON.parse(spec);

      let generated = '';

      if (format === 'typescript') {
        generated = generateTypescript(parsed);
      } else if (format === 'python') {
        generated = generatePython(parsed);
      } else if (format === 'go') {
        generated = generateGo(parsed);
      } else if (format === 'openapi') {
        generated = generateOpenAPI(parsed);
      } else if (format === 'mock') {
        generated = generateMockServer(parsed);
      }

      setResult(generated);
    } catch (e) {
      setResult('Error: ' + (e as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">API Contract Generator</h1>
        <p className="mb-8 text-slate-400">Generate TypeScript, Python, Go clients, mock servers, and OpenAPI docs from your spec.</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">OpenAPI Spec (YAML or JSON)</label>
              <textarea
                value={spec}
                onChange={e => setSpec(e.target.value)}
                rows={25}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none"
                placeholder="Paste your OpenAPI 3.0 spec here..."
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {samples.map(s => (
                <button key={s.name} onClick={() => setSpec(s.spec)} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-mono text-slate-300 hover:border-purple-500 hover:text-white transition-colors">{s.name}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2"><select value={format} onChange={e => setFormat(e.target.value as any)} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-purple-500 focus:outline-none"><option value="typescript">TypeScript Client</option><option value="python">Python Client</option><option value="go">Go Client</option><option value="openapi">OpenAPI JSON</option><option value="mock">Mock Server (Node)</option></select></label>
              <button onClick={generate} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition-colors">Generate</button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Generated Output</h3>
              <button onClick={() => navigator.clipboard.writeText(result)} className="rounded-lg border border-slate-700 px-3 py-1 text-sm font-mono text-slate-300 hover:border-purple-500 transition-colors">Copy</button>
            </div>
            <pre className="rounded-lg bg-slate-900 p-4 overflow-x-auto text-sm font-mono text-slate-300 max-h-[600px]">{result || 'Output will appear here...'}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';