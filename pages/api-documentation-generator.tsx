import { useState } from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { FileCode2, Download } from 'lucide-react';
import type { DocumentationConfig, APIDocumentation } from '../services/apiDocGeneratorService';
import { APIDocGeneratorService } from '../services/apiDocGeneratorService';

export default function APIDocGeneratorPage() {
  const [sourcePath, setSourcePath] = useState('src');
  const [format, setFormat] = useState<DocumentationConfig['outputFormat']>('markdown');
  const [doc, setDoc] = useState<APIDocumentation | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const svc = new (APIDocGeneratorService as any)();
      const result: APIDocumentation = await svc.generateDocumentation(sourcePath, {
        outputFormat: format,
        includeExamples: true,
        includeSchemas: true,
        includeAuthentication: true,
        includeRateLimits: true,
        branding: { companyName: 'Zion Tech Group' }
      });
      setDoc(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>API Documentation Generator - Zion Tech Group</title>
        <meta name="description" content="Generate API docs from your codebase with examples and schemas." />
        <link rel="canonical" href="https://ziontechgroup.com/api-documentation-generator" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <FileCode2 className="w-10 h-10" /> API Documentation Generator
          </h1>

          <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-300 mb-2">Source path</label>
                <input value={sourcePath} onChange={(e) => setSourcePath(e.target.value)} className="w-full bg-black/40 border border-slate-700 rounded-lg px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Output format</label>
                <select value={format} onChange={(e) => setFormat(e.target.value as any)} className="w-full bg-black/40 border border-slate-700 rounded-lg px-3 py-2 text-white">
                  <option value="markdown">Markdown</option>
                  <option value="html">HTML</option>
                  <option value="json">JSON</option>
                  <option value="openapi">OpenAPI</option>
                  <option value="pdf">PDF</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button onClick={generate} variant="quantum" className="w-full" disabled={loading}>
                  {loading ? 'Generating…' : 'Generate'}
                </Button>
              </div>
            </div>
          </div>

          {doc && (
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl text-white font-semibold">{doc.name} v{doc.version}</div>
                <Button variant="secondary"><Download className="w-4 h-4 mr-2" />Export</Button>
              </div>
              <div className="text-slate-300 text-sm mb-2">Endpoints: {doc.metadata.totalEndpoints} • Coverage: {doc.metadata.coverage}%</div>
              <pre className="text-slate-200 text-xs whitespace-pre-wrap break-words">{JSON.stringify(doc, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

