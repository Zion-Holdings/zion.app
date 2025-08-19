import React, { useEffect, useState } from 'react';
import { JobCard } from '@/components/jobs/JobCard';
import { JOB_POSTS } from '@/data/jobsData';

export default function CareersPage() {
  const [jobs, setJobs] = useState(JOB_POSTS);

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(data => setJobs(data))
      .catch(() => {
        // fall back to static data
        setJobs(JOB_POSTS);
      });
  }, []);

  return (
    <main className="min-h-screen bg-zion-blue py-10">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="text-3xl font-bold text-white">Open Positions</h1>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
