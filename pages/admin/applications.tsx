import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import ResumeCard, { Resume } from '../../components/ui/ResumeCard';

const resumesKey = 'zion.resumes';
const applicationsKey = 'zion.job_applications';
const recruiterKey = 'zion.isRecruiter';

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

function downloadBase64(fileName: string, base64: string) {
  const a = document.createElement('a');
  a.href = base64;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

const ApplicationsDashboard: NextPage = () => {
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsRecruiter(localStorage.getItem(recruiterKey) === 'true');
    try {
      const rawApps = localStorage.getItem(applicationsKey);
      setApplications(rawApps ? (JSON.parse(rawApps) as JobApplication[]) : []);
    } catch {
      setApplications([]);
    }
    try {
      const rawRes = localStorage.getItem(resumesKey);
      setResumes(rawRes ? (JSON.parse(rawRes) as Resume[]) : []);
    } catch {
      setResumes([]);
    }
  }, []);

  const byId = useMemo(() => {
    const m = new Map<string, Resume>();
    for (const r of resumes) m.set(r.id, r);
    return m;
  }, [resumes]);

  return (
    <div>
      <Head>
        <title>Recruiter Dashboard - Applications</title>
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">Applications</h1>
        {!isRecruiter ? (
          <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-4 text-amber-800">
            Access restricted. Toggle recruiter mode at <a className="underline" href="/admin">/admin</a>.
          </div>
        ) : null}

        <div className="mt-6 grid gap-6">
          {applications.length === 0 ? (
            <p className="text-sm text-zinc-600">No applications yet.</p>
          ) : (
            applications.map((app) => {
              const resumeRef = app.resume;
              const isUpload = resumeRef.type === 'upload';
              const resume = resumeRef.type === 'ai' ? byId.get(resumeRef.resumeId) : null;
              return (
                <div key={app.id} className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-zinc-500">Application ID: {app.id}</div>
                      <div className="text-sm text-zinc-500">Job ID: {app.jobId}</div>
                      <div className="text-sm text-zinc-500">User: {app.userId}</div>
                      <div className="text-sm text-zinc-500">Date: {new Date(app.createdAt).toLocaleString()}</div>
                    </div>
                    <div>
                      {resumeRef.type === 'upload' ? (
                        <button
                          onClick={() => downloadBase64(resumeRef.fileName, resumeRef.fileBase64)}
                          className="inline-flex items-center rounded-md border border-zinc-300 px-3 py-2 hover:bg-zinc-50"
                        >
                          Download Uploaded PDF
                        </button>
                      ) : resume ? (
                        <button
                          onClick={() => {
                            const text = `Name: ${resume.name}\nSummary: ${resume.summary}\nSkills: ${resume.skills.join(', ')}`;
                            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `${resume.name.replace(/\s+/g, '_')}_resume.txt`;
                            document.body.appendChild(a);
                            a.click();
                            a.remove();
                            URL.revokeObjectURL(url);
                          }}
                          className="inline-flex items-center rounded-md border border-zinc-300 px-3 py-2 hover:bg-zinc-50"
                        >
                          Download AI Resume
                        </button>
                      ) : (
                        <span className="text-sm text-zinc-500">Resume not found</span>
                      )}
                    </div>
                  </div>
                  {resumeRef.type !== 'upload' && resume ? (
                    <div className="mt-4">
                      <ResumeCard resume={resume} />
                    </div>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default ApplicationsDashboard;