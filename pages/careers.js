import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { JobCard } from '@/components/jobs/JobCard';
import { JOB_POSTS } from '@/data/jobsData';
export default function CareersPage() {
    const [jobs, setJobs] = useState(JOB_POSTS);
    useEffect(() => {
        fetch('/api/jobs')
            .then(res => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setJobs(data))
            .catch(() => {
            // fall back to static data
            setJobs(JOB_POSTS);
        });
    }, []);
    return (_jsx("main", { className: "min-h-screen bg-zion-blue py-10", children: _jsxs("div", { className: "container mx-auto px-4 space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold text-white", children: "Open Positions" }), jobs.map(job => (_jsx(JobCard, { job: job }, job.id)))] }) }));
}
