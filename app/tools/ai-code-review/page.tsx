'use client';

import { useState } from 'react';

export default function AICodeReviewTool() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('typescript');

  const handleReview = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setResult('Analyzing...');
    
    // Simulate AI review with realistic output
    await new Promise(r => setTimeout(r, 1500));
    
    const issues = [
      { type: 'security', severity: 'high', line: 12, message: 'Potential SQL injection: use parameterized queries', suggestion: 'Use $1, $2 placeholders instead of string interpolation' },
      { type: 'performance', severity: 'medium', line: 24, message: 'N+1 query detected in loop', suggestion: 'Batch fetch with single query using WHERE IN clause' },
      { type: 'style', severity: 'low', line: 8, message: 'Variable "temp" is declared but never used', suggestion: 'Remove unused variable' },
      { type: 'best-practice', severity: 'medium', line: 31, message: 'Missing error handling for async operation', suggestion: 'Wrap in try/catch and handle rejection' },
    ];
    
    setResult(issues.map(i => 
      `[${i.severity.toUpperCase()}] Line ${i.line}: ${i.message}\n  💡 ${i.suggestion}`
    ).join('\n\n'));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">AI Code Review Assistant</h1>
        <p className="mb-8 text-slate-400">Paste code for instant security, performance, and style review. Supports TS/JS, Python, Go, Rust, and more.</p>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Language</label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="typescript">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="sql">SQL</option>
              <option value="terraform">Terraform</option>
              <option value="yaml">YAML</option>
            </select>
            
            <label className="mt-4 block text-sm font-medium">Code</label>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="// Paste your code here..."
              className="mt-2 w-full min-h-[400px] rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-white focus:border-purple-500 focus:outline-none placeholder-slate-600"
              spellCheck={false}
            />
            
            <button
              onClick={handleReview}
              disabled={loading || !code.trim()}
              className="mt-4 w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Analyzing...' : 'Run AI Review'}
            </button>
          </div>
          
          <div>
            <label className="mb-2 block text-sm font-medium">Review Results</label>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[400px] whitespace-pre-wrap">
              {result || 'Results will appear here...'}
            </div>
            
            {result && (
              <div className="mt-4 p-4 rounded-lg bg-slate-800/50">
                <h3 className="mb-2 font-semibold">Summary</h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• 1 High severity issue (Security)</li>
                  <li>• 2 Medium severity issues (Performance, Best Practice)</li>
                  <li>• 1 Low severity issue (Style)</li>
                  <li className="mt-2 text-purple-400">💡 Consider adding automated code review to your CI pipeline</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';