import React from 'react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { JOBS } from '../../../data/jobs';
import { APPLICATIONS } from '../../../data/applications';
import ApplicationsTable from '../../../components/marketplace/ApplicationsTable';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jobId = ctx.params?.jobId as string;
  const job = JOBS.find((j) => j.id === jobId) || null;
  if (!job) {
    return { notFound: true };
  }
  const clientId = 'client-demo-001';
  if (job.clientId !== clientId) {
    return { redirect: { destination: '/auth', permanent: false } };
  }
  return { props: { jobId } };
};

type Props = { jobId: string };

const JobApplicationsPage: React.FC<Props> = ({ jobId }) => {
  const job = JOBS.find((j) => j.id === jobId)!;
  const apps = APPLICATIONS.filter((a) => a.jobId === jobId);
  const router = useRouter();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="text-sm text-neutral-600 hover:underline">← Back</button>
      <h1 className="text-2xl font-semibold mt-2">Applications</h1>
      <div className="text-sm text-neutral-600 dark:text-neutral-300">{job.title} • {job.location || '—'}</div>

      <div className="mt-6">
        <ApplicationsTable applications={apps} />
      </div>
    </main>
  );
};

export default JobApplicationsPage;