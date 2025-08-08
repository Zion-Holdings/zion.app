import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TALENT_PROFILES } from '../../data/talent';
import Link from 'next/link';

export type LocalResume = {
  id: string;
  name: string;
  summary: string;
  skills: string[];
  createdAt: string;
};

const storageKey = 'zion.resumes';

function loadResumes(): LocalResume[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as LocalResume[]) : [];
  } catch {
    return [];
  }
}

function saveResumes(resumes: LocalResume[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(storageKey, JSON.stringify(resumes));
}

const BuilderPage: NextPage = () => {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState<string>('');
  const [saving, setSaving] = useState(false);

  const suggested = useMemo(() => TALENT_PROFILES[0], []);

  useEffect(() => {
    if (suggested) {
      setName(suggested.name);
      setSummary(suggested.bio);
      setSkills(suggested.skills.join(', '));
    }
  }, [suggested]);

  const handleGenerate = () => {
    if (!name.trim()) return;
    setSummary(
      summary ||
        `${name} is an experienced ${suggested?.title || 'AI Professional'} with strengths in ${skills || suggested?.skills.join(', ')}. Proven impact across multiple projects.`
    );
  };

  const handleSave = async () => {
    if (!name.trim()) return;
    setSaving(true);
    const resume: LocalResume = {
      id: uuidv4(),
      name: name.trim(),
      summary: summary.trim() || 'Generated AI resume summary',
      skills: skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      createdAt: new Date().toISOString(),
    };
    const all = loadResumes();
    all.unshift(resume);
    saveResumes(all);
    setSaving(false);
    alert('AI Resume saved. You can now attach it in the application.');
  };

  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
        <meta name="description" content="Generate an AI-powered resume and save to your profile" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">AI Resume Builder</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Summary</label>
            <textarea
              className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
            <input
              className="w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            >
              Generate
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 disabled:opacity-60"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <Link href="/" className="inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 hover:bg-zinc-50">Home</Link>
          </div>
        </div>
        <p className="mt-6 text-sm text-zinc-600">
          Tip: After saving, return to the job application page to attach your most recent AI resume.
        </p>
      </main>
    </div>
  );
};

export default BuilderPage;