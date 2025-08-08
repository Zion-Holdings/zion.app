import React, { useState } from 'react';

export default function HiringScalingToolkit() {
  const [jobTitle, setJobTitle] = useState('Founding Engineer');
  const [description, setDescription] = useState('We are building...');
  const [milestones, setMilestones] = useState<string[]>(['MVP', 'First 10 customers']);

  function addMilestone() {
    setMilestones((prev) => [...prev, `Milestone ${prev.length + 1}`]);
  }

  return (
    <div id="hiring-scaling" className="enhanced-card">
      <h2 className="text-lg font-semibold mb-4">Hiring + Scaling Toolkit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="space-y-2">
          <h3 className="font-semibold">Post a Job</h3>
          <input className="border rounded px-3 py-2 w-full bg-white dark:bg-black" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <textarea className="border rounded px-3 py-2 w-full min-h-[100px] bg-white dark:bg-black" value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded bg-blue-600 text-white">Post</button>
            <button className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800">Get Team Match</button>
          </div>
        </section>
        <section className="space-y-2">
          <h3 className="font-semibold">Milestone Roadmap</h3>
          <ul className="text-sm list-disc pl-5 space-y-1">
            {milestones.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
          <button onClick={addMilestone} className="px-3 py-2 rounded bg-green-600 text-white">Add Milestone</button>
          <p className="text-xs text-gray-600 dark:text-gray-400">Linked to ZionGPT Core (stub)</p>
        </section>
      </div>
    </div>
  );
}