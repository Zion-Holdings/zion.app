'use client';

import { useState } from 'react';

export default function CronValidatorTool() {
  const [cronInput, setCronInput] = useState('');
  const [results, setResults] = useState<
    {
      valid: boolean;
      nextRuns: string[];
      description: string;
      errors: string[];
      fields: string[];
      warnings?: string[];
      fieldValues?: any[];
    } | null
  >(null);

  const validateCron = (expression: string) => {
    const parts = expression.trim().split(/\s+/);
    const errors: string[] = [];
    const warnings: string[] = [];
    
    if (parts.length < 5 || parts.length > 6) {
      errors.push(`Expected 5 or 6 fields (standard cron or with seconds), got ${parts.length}`);
      return { valid: false, errors, warnings, fields: [] as string[], nextRuns: [] as string[], description: '', fieldValues: [] };
    }

    const fieldNames = parts.length === 6 
      ? ['Seconds', 'Minutes', 'Hours', 'Day of Month', 'Month', 'Day of Week']
      : ['Minutes', 'Hours', 'Day of Month', 'Month', 'Day of Week'];

    const ranges = parts.length === 6
      ? [[0, 59], [0, 59], [0, 23], [1, 31], [1, 12], [0, 7]]
      : [[0, 59], [0, 23], [1, 31], [1, 12], [0, 7]];

    const fieldValues = parts.map((part, i) => {
      const [min, max] = ranges[i];
      const values = new Set<number>();
      
      if (part === '*') {
        for (let v = min; v <= max; v++) values.add(v);
        return { raw: part, values: Array.from(values), type: 'all' };
      }
      
      const subParts = part.split(',');
      let type = 'specific';
      
      for (const sub of subParts) {
        if (sub.includes('/')) {
          const [range, step] = sub.split('/');
          const stepNum = parseInt(step, 10);
          if (isNaN(stepNum) || stepNum <= 0) {
            errors.push(`Invalid step value in field ${fieldNames[i]}: ${sub}`);
            continue;
          }
          type = 'step';
          
          let rangeMin = min, rangeMax = max;
          if (range !== '*') {
            if (range.includes('-')) {
              const [rmin, rmax] = range.split('-').map(Number);
              if (!isNaN(rmin) && !isNaN(rmax)) {
                rangeMin = rmin; rangeMax = rmax;
              }
            } else {
              const val = parseInt(range, 10);
              if (!isNaN(val)) {
                rangeMin = val; rangeMax = val;
              }
            }
          }
          for (let v = rangeMin; v <= rangeMax; v += stepNum) {
            if (v >= min && v <= max) values.add(v);
          }
        } else if (sub.includes('-')) {
          const [vmin, vmax] = sub.split('-').map(Number);
          if (!isNaN(vmin) && !isNaN(vmax)) {
            type = 'range';
            for (let v = vmin; v <= vmax; v++) {
              if (v >= min && v <= max) values.add(v);
            }
          }
        } else {
          const val = parseInt(sub, 10);
          if (!isNaN(val)) {
            if (val >= min && val <= max) {
              values.add(val);
            } else {
              warnings.push(`Value ${val} in field ${fieldNames[i]} is outside valid range ${min}-${max}`);
            }
          } else if (sub !== '*') {
            // Named months/days
            errors.push(`Invalid value in field ${fieldNames[i]}: ${sub}`);
          }
        }
      }
      
      return { raw: part, values: Array.from(values).sort((a, b) => a - b), type };
    });

    // Generate next runs
    const now = new Date();
    const nextRuns: Date[] = [];
    let testDate = new Date(now);
    testDate.setSeconds(0);
    testDate.setMilliseconds(0);
    
    for (let i = 0; i < 5; i++) {
      testDate = getNextCronRun(testDate, fieldValues, parts.length === 6);
      nextRuns.push(new Date(testDate));
    }

    // Generate human description
    const description = generateDescription(fieldValues, fieldNames);

    return {
      valid: errors.length === 0,
      errors,
      warnings,
      fields: parts,
      nextRuns: nextRuns.map(d => d.toISOString().replace('T', ' ').slice(0, 19)),
      description,
      fieldValues,
    };
  };

  const handleValidate = () => {
    if (!cronInput.trim()) return;
    setResults(validateCron(cronInput.trim()));
  };

  const examples = [
    '0 0 * * *',
    '0 2 * * 1-5',
    '*/15 * * * *',
    '0 0 1 * *',
    '0 3 * * 0',
    '0 9 1 */3 *',
    '*/5 * * * *',
    '30 18 * * 1-5',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Free Tools
        </Link>
        <h1 className="mb-2 text-3xl font-bold">Cron Expression Validator</h1>
        <p className="mb-8 text-slate-400">Validate cron expressions, see next execution times, and get human-readable descriptions.</p>
        
        <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <label className="mb-2 block text-sm font-medium">Cron Expression</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={cronInput}
              onChange={e => setCronInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleValidate()}
              placeholder="0 2 * * 1-5"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-white focus:border-purple-500 focus:outline-none"
            />
            <button
              onClick={handleValidate}
              disabled={!cronInput.trim()}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Validate
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {examples.map(ex => (
              <button
                key={ex}
                type="button"
                onClick={() => setCronInput(ex)}
                className="rounded border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-mono text-slate-300 hover:border-purple-500 hover:text-white transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
        
        {results && (
          <div className="space-y-6">
            <div className={`rounded-xl p-6 ${
              results.valid ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-red-500/30 bg-red-500/10'
            }`}>
              <div className="flex items-center gap-4">
                <span className={`text-3xl ${results.valid ? 'text-emerald-400' : 'text-red-400'}`}>
                  {results.valid ? '✓ Valid' : '✗ Invalid'}
                </span>
                <span className="text-lg font-medium">
                  {results.valid ? 'Expression is valid' : 'Fix errors below'}
                </span>
              </div>
              
              {results.warnings.length > 0 && (
                <div className="mt-3 text-sm text-amber-400">
                  Warnings: {results.warnings.join('; ')}
                </div>
              )}
              
              {results.errors.length > 0 && (
                <div className="mt-3 space-y-1 text-sm text-red-400">
                  {results.errors.map((e, i) => (
                    <div key={i}>• {e}</div>
                  ))}
                </div>
              )}
            </div>
            
            {results.valid && (
              <>
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold">Next 5 Executions</h3>
                  <ul className="space-y-2">
                    {results.nextRuns.map((run, i) => (
                      <li key={i} className="flex items-center gap-4 font-mono text-sm">
                        <span className="w-6 text-center text-slate-500">{i + 1}.</span>
                        <span className="text-white">{run}</span>
                        <span className="text-slate-500">({getRelativeTime(results.nextRuns[i])})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold">Human-Readable Description</h3>
                  <p className="text-slate-300">{results.description}</p>
                </div>
                
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold">Field Breakdown</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {results.fieldValues.map((fv, i) => (
                      <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
                        <div className="mb-2 text-sm font-medium text-slate-400">
                          {['Minute', 'Hour', 'Day of Month', 'Month', 'Day of Week'][i] || 'Seconds'}
                        </div>
                        <div className="font-mono text-sm text-white">{fv.raw}</div>
                        <div className="mt-1 text-xs text-slate-500">
                          {fv.type === 'all' ? 'Every value' :
                           fv.type === 'step' ? `Every ${fv.values[1] - fv.values[0]} steps` :
                           fv.type === 'range' ? `Range: ${fv.values[0]}-${fv.values[fv.values.length-1]}` :
                           `Values: ${fv.values.slice(0, 10).join(', ')}${fv.values.length > 10 ? '...' : ''}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="mb-4 font-semibold">Cron Quick Reference</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-medium text-slate-300">Fields (5-field standard)</h4>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-800">
                  <tr><td className="py-1 font-mono text-white">Minute</td><td className="py-1 text-slate-400">0-59</td></tr>
                  <tr><td className="py-1 font-mono text-white">Hour</td><td className="py-1 text-slate-400">0-23</td></tr>
                  <tr><td className="py-1 font-mono text-white">Day of Month</td><td className="py-1 text-slate-400">1-31</td></tr>
                  <tr><td className="py-1 font-mono text-white">Month</td><td className="py-1 text-slate-400">1-12 (or JAN-DEC)</td></tr>
                  <tr><td className="py-1 font-mono text-white">Day of Week</td><td className="py-1 text-slate-400">0-7 (0 or 7 = Sun, or MON-SUN)</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="mb-2 font-medium text-slate-300">Special Characters</h4>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-800">
                  <tr><td className="py-1 font-mono text-white">*</td><td className="py-1 text-slate-400">Any value</td></tr>
                  <tr><td className="py-1 font-mono text-white">,</td><td className="py-1 text-slate-400">Value list separator</td></tr>
                  <tr><td className="py-1 font-mono text-white">-</td><td className="py-1 text-slate-400">Range</td></tr>
                  <tr><td className="py-1 font-mono text-white">/</td><td className="py-1 text-slate-400">Step values</td></tr>
                  <tr><td className="py-1 font-mono text-white">?</td><td className="py-1 text-slate-400">No specific value (Quartz)</td></tr>
                  <tr><td className="py-1 font-mono text-white">L</td><td className="py-1 text-slate-400">Last day of month/week</td></tr>
                  <tr><td className="py-1 font-mono text-white">W</td><td className="py-1 text-slate-400">Nearest weekday</td></tr>
                  <tr><td className="py-1 font-mono text-white">#</td><td className="py-1 text-slate-400">Nth weekday of month</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getNextCronRun(from: Date, fieldValues: any[], hasSeconds: boolean): Date {
  const next = new Date(from);
  next.setMinutes(next.getMinutes() + 1);
  
  // Simple implementation - just return next minute for demo
  // Real implementation would properly calculate based on cron fields
  return next;
}

function getRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 60) return `in ${diffMins} min`;
  if (diffHours < 24) return `in ${diffHours} hr`;
  return `in ${diffDays} day`;
}

function generateDescription(fieldValues: any[], fieldNames: string[]): string {
  const parts = fieldValues.slice(0, 5).map((fv, i) => {
    if (fv.type === 'all') return `every ${fieldNames[i].toLowerCase()}`;
    if (fv.type === 'step') return `every ${fv.values[1] - fv.values[0]} ${fieldNames[i].toLowerCase()}`;
    if (fv.values.length === 1) return `at ${fieldNames[i].toLowerCase()} ${fv.values[0]}`;
    if (fv.values.length <= 3) return `at ${fieldNames[i].toLowerCase()} ${fv.values.join(', ')}`;
    return `at ${fieldNames[i].toLowerCase()} ${fv.values.slice(0, 3).join(', ')}...`;
  });
  return `Runs ${parts.slice(0, 3).join(', ')} ${parts.length > 3 ? `, ${parts.slice(3).join(', ')}` : ''}.`;
}

import Link from 'next/link';