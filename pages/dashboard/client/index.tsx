import React, { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { JOBS } from '../../../data/jobs';
import { APPLICATIONS } from '../../../data/applications';
import ApplicationsTable from '../../../components/marketplace/ApplicationsTable';

export const getServerSideProps: GetServerSideProps = async () => {
  const clientId = 'client-demo-001';
  if (!clientId) {
    return { redirect: { destination: '/auth', permanent: false } };
  }
  return { props: { clientId } };
};

type Props = { clientId: string };

const ClientDashboardPage: React.FC<Props> = ({ clientId }) => {
  const [openJobIds, setOpenJobIds] = useState<Record<string, boolean>>({});

  const jobsForClient = JOBS.filter((j) => j.clientId === clientId);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-1">Client Dashboard</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">Review and manage applications across your jobs.</p>

      <div className="space-y-4">
        {jobsForClient.map((job) => {
          const apps = APPLICATIONS.filter((a) => a.jobId === job.id);
          const isOpen = !!openJobIds[job.id];
          return (
            <section key={job.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900/40"
                onClick={() => setOpenJobIds((prev) => ({ ...prev, [job.id]: !isOpen }))}
              >
                <div className="text-left">
                  <div className="font-medium">{job.title}</div>
                  <div className="text-xs text-neutral-500">{job.location || '—'} • Posted {new Date(job.createdAt).toLocaleDateString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-600 dark:text-neutral-300">{apps.length} applications</span>
                  <span className={`inline-block transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
                </div>
              </button>
              {isOpen ? (
                <div className="p-4">
                  <ApplicationsTable applications={apps} />
                </div>
              ) : null}
            </section>
          );
        })}
        {jobsForClient.length === 0 ? (
          <div className="p-6 text-sm text-neutral-500 border border-dashed rounded-lg">No jobs yet.</div>
        ) : null}
      </div>
    </main>
  );
};

export default ClientDashboardPage;