'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';


export default function OnboardingChecklist() {
  const nameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const deptRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('generate');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const name = nameRef.current?.value || 'New hire';
      const role = roleRef.current?.value || 'Role';
      const dept = deptRef.current?.value || 'Department';
      const date = new Date().toISOString().slice(0,10);
      out.textContent = `Onboarding Checklist\nDate: ${date}\n\nEmployee: ${name}\nRole: ${role}\nDepartment: ${dept}\n\nWeek 1\n- Accounts: email, SSO, VPN, GitHub/GitLab, CI/CD\n- Devices: laptop, monitor, YubiKey/2FA, headset\n- Access: repos, monitoring, ticketing, cloud console\n- Compliance: security awareness, data privacy, acceptable use\n- Team: manager 1:1, buddy assignment, team intro meeting\n\nWeek 2-4\n- Repo onboarding: readmes, runbooks, incident process\n- First change request or documentation task\n- 30-day check-in with manager and mentor\n\nNotes\n- Recurring reminders for 30/60/90 day reviews\n- Track training completions and access reviews`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Onboarding Checklist</h1>
        <p className="mt-2 text-slate-400">Generate a practical new hire checklist from role inputs.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input ref={nameRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., Alex Johnson" />
            </div>
            <div>
              <label className="block text-sm font-medium">Role</label>
              <input ref={roleRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., DevOps Engineer" />
            </div>
            <div>
              <label className="block text-sm font-medium">Department</label>
              <input ref={deptRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., Platform" />
            </div>
            <button id="generate" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Checklist</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Output appears here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
