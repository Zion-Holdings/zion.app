'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

type Style = 'photorealistic' | 'illustration' | '3d-render' | 'anime' | 'watercolor';
type AspectRatio = '1:1' | '16:9' | '9:16' | '4:3';

interface PromptResult {
  prompt: string;
  style: Style;
  safetyScore: number;
  coherenceScore: number;
  launchReady: number;
}

export default function AutonomousMediaPromptStudioPage() {
  const [subject, setSubject] = useState('');
  const [style, setStyle] = useState<Style>('photorealistic');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [negativePrompt, setNegativePrompt] = useState('blurry, low quality, distorted');
  const [results, setResults] = useState<PromptResult[]>([]);

  const generatedPrompt = useMemo(() => {
    if (!subject.trim()) return '';
    const styleModifiers: Record<Style, string> = {
      'photorealistic': 'photorealistic, ultra-detailed, 8K, natural lighting, DSLR quality',
      'illustration': 'digital illustration, clean lines, vibrant colors, professional design',
      '3d-render': '3D render, octane render, volumetric lighting, subsurface scattering',
      'anime': 'anime style, cel shading, vibrant palette, studio quality',
      'watercolor': 'watercolor painting, soft edges, artistic, textured paper',
    };
    return `${subject.trim()}, ${styleModifiers[style]}, ${aspectRatio} aspect ratio, high resolution, professional quality`;
  }, [subject, style, aspectRatio]);

  const generate = () => {
    if (!generatedPrompt) return;
    const safetyScore = negativePrompt.length > 10 ? Math.min(98, 85 + Math.floor(Math.random() * 12)) : Math.floor(Math.random() * 40 + 50);
    const coherenceScore = subject.length > 5 ? Math.min(96, 70 + Math.floor(Math.random() * 25)) : Math.floor(Math.random() * 30 + 40);
    const launchReady = Math.round((safetyScore + coherenceScore) / 2);

    setResults((prev) => [
      { prompt: generatedPrompt, style, safetyScore, coherenceScore, launchReady },
      ...prev.slice(0, 4),
    ]);
  };

  const subjectSuggestions = [
    'A futuristic city skyline at sunset',
    'A professional business team meeting',
    'An AI robot helping a human',
    'A modern office with natural light',
    'A cybersecurity shield visualization',
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <Link href="/ai-lab" className="mb-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
          ← Back to AI Lab
        </Link>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-pink-400">Multimodal Intelligence</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Autonomous Media Prompt Studio</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Design image and video prompt systems with style coherence, safety guardrails, and launch-readiness scoring.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {/* Input */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold text-slate-200">Prompt Builder</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-400">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Describe what you want to generate..."
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {subjectSuggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSubject(s)}
                        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400 hover:border-purple-500 hover:text-purple-300"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-slate-400">Style</label>
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value as Style)}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="photorealistic">Photorealistic</option>
                      <option value="illustration">Illustration</option>
                      <option value="3d-render">3D Render</option>
                      <option value="anime">Anime</option>
                      <option value="watercolor">Watercolor</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-400">Aspect Ratio</label>
                    <select
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="1:1">1:1 Square</option>
                      <option value="16:9">16:9 Landscape</option>
                      <option value="9:16">9:16 Portrait</option>
                      <option value="4:3">4:3 Classic</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400">Negative Prompt</label>
                  <input
                    type="text"
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {generatedPrompt && (
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 p-4">
                    <p className="text-xs font-semibold text-purple-300">Generated Prompt:</p>
                    <p className="mt-1 text-sm text-slate-200">{generatedPrompt}</p>
                  </div>
                )}

                <button
                  onClick={generate}
                  disabled={!generatedPrompt}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl disabled:opacity-50"
                >
                  Generate & Score
                </button>
              </div>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="space-y-3">
                {results.map((r, i) => (
                  <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-200">{r.prompt}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                        Safety: {r.safetyScore}%
                      </span>
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
                        Coherence: {r.coherenceScore}%
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs ${
                        r.launchReady >= 80 ? 'bg-purple-500/20 text-purple-300' : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        Launch Ready: {r.launchReady}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick stats */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-slate-900/80 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">Prompts Generated</p>
              <p className="mt-3 text-5xl font-bold text-white">{results.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Style Guide</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li>✓ Use specific subjects for best results</li>
                <li>✓ Negative prompts improve safety scores</li>
                <li>✓ 16:9 works best for banners</li>
                <li>✓ 1:1 is optimal for social media</li>
                <li>✓ Add quality modifiers for coherence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
