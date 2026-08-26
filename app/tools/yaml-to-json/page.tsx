"use client";
import { useState } from "react";
export default function Page() {
  const [yaml, setYaml] = useState(`name: Zion Tech Group
services:
  - AI Consulting
  - Managed IT
  - Cybersecurity
settings:
  active: true
  retries: 3`);
  const [json, setJson] = useState("");

  function convert(e) {
    e.preventDefault();
    try {
      const obj = {};
      const lines = yaml.split("\n");
      let stack = [obj];
      let lastKey = null;

      for (const raw of lines) {
        const line = raw.replace(/\t/g, "  ");
        const indent = line.search(/\S|$/);
        const text = line.trim();
        if (!text || text.startsWith("#")) continue;

        while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();

        const current = stack[stack.length - 1].node;
        if (text.includes(":")) {
          const idx = text.indexOf(":");
          const key = text.slice(0, idx).trim();
          const valueRaw = text.slice(idx + 1).trim();
          if (!valueRaw || valueRaw.startsWith("#")) {
            const child = {};
            current[key] = child;
            stack.push({ indent, node: child });
            lastKey = key;
          } else if (valueRaw.startsWith('"') && valueRaw.endsWith('"')) {
            current[key] = valueRaw.slice(1, -1);
          } else if (valueRaw === "true" || valueRaw === "false") {
            current[key] = valueRaw === "true";
          } else if (!isNaN(valueRaw) && valueRaw !== "") {
            current[key] = Number(valueRaw);
          } else {
            current[key] = valueRaw;
          }
        }
      }

      setJson(JSON.stringify(obj, null, 2));
    } catch (err) {
      setJson("Error: " + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">YAML to JSON</h1>
        <p className="text-gray-600 mb-6">Convert simple YAML into formatted JSON.</p>
        <form onSubmit={convert} className="space-y-4">
          <textarea
            value={yaml}
            onChange={(e) => setYaml(e.target.value)}
            placeholder="key: value"
            className="w-full h-64 p-4 border rounded-lg font-mono text-sm"
          />
          <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg">
            Convert
          </button>
        </form>
        {json && (
          <div className="mt-6 p-4 bg-white border rounded-lg">
            <div className="text-sm font-semibold text-gray-700 mb-2">Output</div>
            <pre className="text-sm font-mono whitespace-pre-wrap">{json}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
