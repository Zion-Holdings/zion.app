import React, { useState } from 'react';
import { NextSeo } from '@/components/NextSeo';
import { Button } from '@/components/ui/button';

const modules = [
  {
    title: 'Module 1 — \uD83C\uDF0D Introduction to Zion',
    points: [
      'What is Zion OS?',
      'Mission: AI, Talent, Trust',
      'Multiverse and Nation-as-a-DAO',
    ],
  },
  {
    title: 'Module 2 — \uD83E\uDDE0 Core Systems Overview',
    points: [
      'Marketplace logic',
      'ZionGPT prompt routing',
      'DAO governance',
      'Token economy basics (ZION$)',
      'Multiverse config',
    ],
  },
  {
    title: 'Module 3 — \uD83D\uDEE0 Deployment & Setup',
    points: [
      'Using the Genesis Deploy Kit',
      'Enabling modules (jobs, grants, academy)',
      'Initial DAO config + manifestos',
    ],
  },
  {
    title: 'Module 4 — \uD83D\uDCAC Community, Support, Scaling',
    points: [
      'Creating nations',
      'Activating proposals',
      'Hiring moderators, educators, ambassadors',
      'Franchise and growth strategy',
    ],
  },
  {
    title: 'Module 5 — \uD83D\uDDFC Legal & Launch',
    points: [
      'KYC/AML overview',
      'Token legal stack',
      'Whitepaper + governance docs',
    ],
  },
];

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 3,
  backoff = 500
) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Request failed with status ${res.status}`);
    }
    return res.json();
  } catch (err) {
    if (retries > 0) {
      await new Promise((r) => setTimeout(r, backoff));
      return fetchWithRetry(url, options, retries - 1, backoff * 2);
    }
    throw err;
  }
}

export default function FounderCoursePage() {
  const [progress, setProgress] = useState(0);
  const [summary, setSummary] = useState('');
  const [quiz, setQuiz] = useState<any[]>([]);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const completeModule = () => setProgress((p) => p + 1);

  const callSummary = async (text: string) => {
    setError(null);
    setLoadingSummary(true);
    try {
      const data = await fetchWithRetry(
        '/api/summarize',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        },
        3,
        500
      );
      setSummary(data.summary);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch summary');
    } finally {
      setLoadingSummary(false);
    }
  };

  const callQuiz = async (topic: string) => {
    setError(null);
    setLoadingQuiz(true);
    try {
      const data = await fetchWithRetry(
        '/api/generate-quiz',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic }),
        },
        3,
        500
      );
      setQuiz(data.quiz);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch quiz');
    } finally {
      setLoadingQuiz(false);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <NextSeo title="Zion Founder Course" description="Learn how to launch your own Zion instance." />
      <h1 className="text-3xl font-bold">Zion Founder Course</h1>
      <p>Progress: {progress}/{modules.length}</p>
      {error && <p className="text-red-500">{error}</p>}
      {modules.map((m, idx) => (
        <div key={idx} className="border p-4 rounded space-y-2">
          <h2 className="text-xl font-semibold">{m.title}</h2>
          <ul className="list-disc pl-6">
            {m.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="space-x-2">
            <Button onClick={() => {completeModule(); callSummary(m.points.join('. '));}}>Summarize This Module</Button>
            <Button variant="outline" onClick={() => callQuiz(m.title)}>Take Quiz</Button>
          </div>
        </div>
      ))}

      {loadingSummary && (
        <p className="text-sm text-zion-slate-light">Generating summary...</p>
      )}
      {summary && (
        <div className="border p-4 rounded bg-gray-50">
          <h3 className="font-semibold mb-2">Module Summary</h3>
          <p>{summary}</p>
        </div>
      )}

      {loadingQuiz && (
        <p className="text-sm text-zion-slate-light">Loading quiz...</p>
      )}
      {quiz.length > 0 && (
        <div className="border p-4 rounded bg-gray-50 space-y-2">
          <h3 className="font-semibold">Quiz</h3>
          {quiz.map((q, i) => (
            <div key={i}>
              <p className="font-medium">{q.question}</p>
              <ul className="list-disc pl-6">
                {q.options.map((o: string, j: number) => (
                  <li key={j}>{o}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
