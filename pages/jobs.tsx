import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';

const Jobs: NextPage = () => {
  const job = {
    title: 'Senior Full-Stack Engineer (Next.js + AI)',
    description: 'Build modern AI-enabled web apps at Zion Tech Solutions.',
    datePosted: new Date().toISOString().slice(0, 10),
    employmentType: 'FULL_TIME',
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10),
    baseSalary: {
      currency: 'USD',
      value: 160000,
      unitText: 'YEAR',
    },
    hiringOrganization: {
      name: 'Zion Tech Solutions',
      sameAs: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app/logo.png',
    },
    jobLocationType: 'TELECOMMUTE',
  } as const;

  return (
    <div>
      <Seo title="Jobs" description="Open roles at Zion Tech Solutions." />
      <JobPostingJsonLd
        datePosted={job.datePosted}
        description={job.description}
        employmentType={job.employmentType}
        hiringOrganization={job.hiringOrganization}
        jobLocationType={job.jobLocationType}
        title={job.title}
        validThrough={job.validThrough}
        baseSalary={job.baseSalary}
      />
      <main>
        <h1>Jobs</h1>
        <p>{job.title}</p>
        <p>{job.description}</p>
      </main>
    </div>
  );
};

export default Jobs;