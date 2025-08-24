import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRole } from '../context/RoleContext';

export default function OnboardingWizard() {
  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const has = typeof window !== 'undefined' ? window.localStorage.getItem('zion_has_onboarded') : 'true';
      if (!has) {
        setOpen(true);
      }
    } catch {}
  }, []);

  function completeOnboarding() {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_has_onboarded', '1');
      }
    } catch {}
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="font-semibold">Welcome to Zion</div>
          <button onClick={completeOnboarding} className="text-sm opacity-70 hover:opacity-100">Skip</button>
        </div>
        <div className="p-4 space-y-4">
          <div className="text-sm opacity-80">Let's get you started. Who are you?</div>
          <div className="flex gap-2">
            <button onClick={() => setRole('client')} className={`px-3 py-1.5 rounded-md border ${role === 'client' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}>I'm a Client</button>
            <button onClick={() => setRole('talent')} className={`px-3 py-1.5 rounded-md border ${role === 'talent' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}>I'm Talent</button>
          </div>
          {role === 'client' ? (
            <div className="space-y-2">
              <div className="text-base font-medium">Next steps</div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Post your first job and get matched in minutes</li>
                <li>Invite talent you already know to apply</li>
                <li>We can suggest matches based on your job description</li>
              </ul>
              <div className="flex gap-2 pt-2">
                <Link href="/jobs/post"><a className="px-3 py-1.5 rounded-md bg-blue-600 text-white">Post a Job</a></Link>
                <Link href="/talent"><a className="px-3 py-1.5 rounded-md border">Browse Talent</a></Link>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-base font-medium">Next steps</div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Complete your profile and set availability</li>
                <li>Get AI suggestions for roles that fit your skills</li>
                <li>Apply to jobs and get instant updates</li>
              </ul>
              <div className="flex gap-2 pt-2">
                <Link href="/dashboard"><a className="px-3 py-1.5 rounded-md bg-blue-600 text-white">Go to Dashboard</a></Link>
                <Link href="/talent"><a className="px-3 py-1.5 rounded-md border">Browse Jobs</a></Link>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">
          <button onClick={completeOnboarding} className="px-3 py-1.5 rounded-md border">Done</button>
        </div>
      </div>
    </div>
  );
}