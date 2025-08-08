import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ResumeCard, { Resume } from '../../../components/ui/ResumeCard';

const resumesKey = 'zion.resumes';
const applicationsKey = 'zion.job_applications';
const authKey = 'zion.isAuthenticated';

type ApplicationResumeRef =
  | { type: 'ai'; resumeId: string }
  | { type: 'upload'; fileName: string; fileBase64: string };

type JobApplication = {
  id: string;
  jobId: string;
  userId: string;
  createdAt: string;
  resume: ApplicationResumeRef;
};

function loadResumes(): Resume[] {
  if (typeof window === 'undefined') return [] as any;
  try {
    const raw = localStorage.getItem(resumesKey);
    return raw ? (JSON.parse(raw) as Resume[]) : [];
  } catch {
    return [] as any;
  }
}

function saveApplication(app: JobApplication) {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(applicationsKey);
    const all = raw ? (JSON.parse(raw) as JobApplication[]) : [];
    all.unshift(app);
    localStorage.setItem(applicationsKey, JSON.stringify(all));
  } catch {
    // ignore
  }
}

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const ApplyPage: NextPage = () => {
  const router = useRouter();
  const { jobId } = router.query as { jobId?: string };

  const [isAuthed, setIsAuthed] = useState(false);
  const [option, setOption] = useState<'recent' | 'saved' | 'upload'>('recent');
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [selectedResumeId, setSelectedResumeId] = useState<string | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadBase64, setUploadBase64] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsAuthed(localStorage.getItem(authKey) === 'true');
    setResumes(loadResumes());
  }, []);

  const mostRecent = useMemo(() => {
    return [...resumes].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0] || null;
  }, [resumes]);

  useEffect(() => {
    if (option === 'saved' && resumes.length && !selectedResumeId) {
      setSelectedResumeId(resumes[0].id);
    }
  }, [option, resumes, selectedResumeId]);

  useEffect(() => {
    if (!uploadFile) {
      setUploadBase64('');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setUploadBase64(String(reader.result || ''));
    reader.readAsDataURL(uploadFile);
  }, [uploadFile]);

  const selectedResume = useMemo(() => {
    if (option === 'recent') return mostRecent;
    if (option === 'saved') return resumes.find((r) => r.id === selectedResumeId) || null;
    return null;
  }, [option, mostRecent, resumes, selectedResumeId]);

  const handleDownload = () => {
    if (selectedResume) {
      const content = `Name: ${selectedResume.name}\nSummary: ${selectedResume.summary}\nSkills: ${selectedResume.skills.join(', ')}`;
      downloadText(`${selectedResume.name.replace(/\s+/g, '_')}_resume.txt`, content);
    } else if (uploadFile && uploadBase64) {
      const a = document.createElement('a');
      a.href = uploadBase64;
      a.download = uploadFile.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  const canSubmit = useMemo(() => {
    if (!isAuthed) return false;
    if (option === 'upload') return Boolean(uploadFile && uploadBase64);
    return Boolean(selectedResume || mostRecent);
  }, [isAuthed, option, selectedResume, mostRecent, uploadFile, uploadBase64]);

  const onSubmit = async () => {
    if (!canSubmit || !jobId) return;
    setSubmitting(true);
    const userId = 'demo-user';
    const app: JobApplication = {
      id: `${jobId}-${Date.now()}`,
      jobId,
      userId,
      createdAt: new Date().toISOString(),
      resume:
        option === 'upload' && uploadFile && uploadBase64
          ? { type: 'upload', fileName: uploadFile.name, fileBase64: uploadBase64 }
          : { type: 'ai', resumeId: (selectedResume || mostRecent)!.id },
    };
    saveApplication(app);
    setSubmitting(false);
    alert('Application submitted with resume attached.');
    router.push('/');
  };

  return (
    <div>
      <Head>
        <title>Apply to Job - Zion AI Marketplace</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">Apply to Job</h1>
        <p className="mt-1 text-sm text-zinc-600">Job ID: {jobId}</p>

        <section className="mt-8">
          <h2 className="text-lg font-medium">Attach Resume</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="resumeOption"
                className="h-4 w-4"
                checked={option === 'recent'}
                onChange={() => setOption('recent')}
              />
              <span>Use most recent AI Resume</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="resumeOption"
                className="h-4 w-4"
                checked={option === 'saved'}
                onChange={() => setOption('saved')}
              />
              <span>Select from saved versions</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="resumeOption"
                className="h-4 w-4"
                checked={option === 'upload'}
                onChange={() => setOption('upload')}
              />
              <span>Upload a custom resume (PDF file)</span>
            </label>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={option + (selectedResume?.id || uploadFile?.name || '')}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-6"
            >
              {option === 'saved' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Choose a saved resume</label>
                  <select
                    className="w-full rounded-md border border-zinc-300 px-3 py-2"
                    value={selectedResumeId || ''}
                    onChange={(e) => setSelectedResumeId(e.target.value)}
                  >
                    {resumes.length === 0 ? (
                      <option value="" disabled>
                        No saved resumes found
                      </option>
                    ) : (
                      resumes.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name} — {new Date(r.createdAt).toLocaleString()}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              )}

              {option === 'upload' ? (
                <div>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                  />
                  {uploadFile ? (
                    <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-200">
                      Selected file: {uploadFile.name}
                    </div>
                  ) : null}
                </div>
              ) : selectedResume ? (
                <ResumeCard resume={selectedResume} onDownload={handleDownload} />
              ) : (
                <div className="rounded-md border border-dashed border-zinc-300 p-4 text-sm text-zinc-600">
                  No AI resume found. Generate one below.
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`/resume/builder`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-zinc-300 px-3 py-2 hover:bg-zinc-50"
            >
              Generate Resume Now
            </a>
            <button
              type="button"
              onClick={handleDownload}
              disabled={!selectedResume && !(uploadFile && uploadBase64)}
              className="inline-flex items-center rounded-md border border-zinc-300 px-3 py-2 hover:bg-zinc-50 disabled:opacity-60"
            >
              Download Selected
            </button>
          </div>
        </section>

        <section className="mt-8">
          <div className="rounded-md bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-4 text-sm text-zinc-600 dark:text-zinc-300">
            Your resume will be attached to this application and visible only to the job poster and marketplace admins.
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canSubmit || submitting}
              className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {!isAuthed && (
              <span className="text-sm text-rose-600">Login required to submit</span>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ApplyPage;