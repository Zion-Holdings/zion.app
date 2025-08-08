import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

const NewJobPost: NextPage = () => {
  const [role, setRole] = useState('DevOps Engineer');
  const [experience, setExperience] = useState('3+ years');
  const [skills, setSkills] = useState('Kubernetes, AWS');
  const [timeline, setTimeline] = useState('Immediate');
  const [description, setDescription] = useState('');

  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;

  const generateJobPrompt = useMemo(() => (
    `Write a job description for a remote ${role} with ${experience} of experience in ${skills}. Include responsibilities, required skills, and preferred tools.\n\nReturn markdown only.`
  ), [experience, role, skills]);

  return (
    <div>
      <Head>
        <title>New Job Post - Zion AI Marketplace</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Create Job Post</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">Role Title
          <input value={role} onChange={e => setRole(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
        </label>
        <label className="text-sm">Required Experience
          <input value={experience} onChange={e => setExperience(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
        </label>
        <label className="text-sm sm:col-span-2">Required Skills
          <input value={skills} onChange={e => setSkills(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
        </label>
        <label className="text-sm sm:col-span-2">Timeline
          <input value={timeline} onChange={e => setTimeline(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Job Description</h2>
        <AIAssistant
          buttonLabel="Generate Job Post"
          title="Generate Job Description"
          defaultPrompt={generateJobPrompt}
          onAccept={setDescription}
          authorizationToken={operatorToken}
        />
      </div>
      <textarea value={description} onChange={e => setDescription(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  );
};

export default NewJobPost;