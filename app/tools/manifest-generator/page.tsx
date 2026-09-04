'use client';

import { useState } from 'react';

const templates = [
  {
    name: 'Chrome Extension Manifest V3',
    filename: 'manifest-v3.json',
    content: JSON.stringify({
      manifest_version: 3,
      name: 'My Extension',
      version: '1.0',
      description: 'A browser extension for productivity',
      permissions: ['storage', 'activeTab'],
      action: { default_popup: 'popup.html', default_icon: { '16': 'icons/icon16.png' } },
      background: { service_worker: 'background.js' },
      icons: { '128': 'icons/icon128.png' },
    }, null, 2),
  },
  {
    name: 'Web App Manifest',
    filename: 'manifest.webmanifest',
    content: JSON.stringify({
      name: 'Sample App',
      short_name: 'Sample',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#3b82f6',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    }, null, 2),
  },
  {
    name: 'AWS SAM Template',
    filename: 'template.yaml',
    content: JSON.stringify({
      AWSTemplateFormatVersion: '2010-09-09',
      Transform: 'AWS::Serverless-2016-10-31',
      Resources: {
        HelloWorldFunction: {
          Type: 'AWS::Serverless::Function',
          Properties: {
            CodeUri: 'src/',
            Handler: 'hello.handler',
            Runtime: 'nodejs20.x',
            Policies: 'AWSLambdaBasicExecutionRole',
          },
        },
      },
    }, null, 2),
  },
  {
    name: 'VS Code Extension Package',
    filename: 'package.json',
    content: JSON.stringify({
      name: 'my-extension',
      displayName: 'My Extension',
      description: 'A helpful VS Code extension',
      version: '1.0.0',
      engines: { vscode: '^1.70.0' },
      categories: ['Other'],
      activationEvents: ['onStartupFinished'],
      contributes: { commands: [{ command: 'extension.hello', title: 'Hello World' }] },
    }, null, 2),
  },
];

export default function ManifestGeneratorPage() {
  const [templateId, setTemplateId] = useState(templates[0].name);
  const template = templates.find(t => t.name === templateId) || templates[0];
  const [content, setContent] = useState(template.content);
  const [error, setError] = useState('');

  const handleTemplateChange = (name: string) => {
    const picked = templates.find(t => t.name === name)!;
    setTemplateId(name);
    setContent(picked.content);
    setError('');
  };

  const handleJSON = () => {
    try {
      JSON.parse(content);
      setError('');
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">📦 Manifest Generator</h1>
        <p className="text-slate-400 mb-6">Generate starter manifests for extensions, web apps, and cloud services.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm text-slate-300">
              Template
              <select
                value={templateId}
                onChange={(e) => handleTemplateChange(e.target.value)}
                className="mt-2 w-full rounded-lg bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2"
              >
                {templates.map((t) => (
                  <option key={t.name} value={t.name}>{t.name}</option>
                ))}
              </select>
            </label>

            <label className="block text-sm text-slate-300">
              Filename
              <input
                readOnly
                value={template.filename}
                className="mt-2 w-full rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 px-3 py-2"
              />
            </label>

            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(content)}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
              >
                Copy Manifest
              </button>
              <button
                onClick={handleJSON}
                className="px-4 py-2 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors"
              >
                Validate
              </button>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>

          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-80 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 p-3 font-mono text-sm leading-relaxed"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
