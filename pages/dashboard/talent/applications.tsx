import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import { supabase } from '../../../utils/supabase/client';

// Types
export type ApplicationStatus =
  | 'submitted'
  | 'viewed'
  | 'shortlisted'
  | 'interview_scheduled'
  | 'offer_sent'
  | 'hired'
  | 'not_selected';

export interface TalentApplication {
  id: string;
  job_title: string;
  company_name?: string | null;
  created_at: string; // ISO
  status: ApplicationStatus;
  // Resume fields - flexible to support either URL or storage object
  resume_name?: string | null;
  resume_url?: string | null;
  resume_id?: string | null;
  // Optional feedback fields (if provided by the client/company)
  feedback?: string | null;
  rejection_reason?: string | null;
}

// Status configuration
const STATUS_LABELS: Record<ApplicationStatus, string> = {
  submitted: 'Submitted',
  viewed: 'Viewed',
  shortlisted: 'Shortlisted',
  interview_scheduled: 'Interview Scheduled',
  offer_sent: 'Offer Sent',
  hired: 'Hired',
  not_selected: 'Not Selected',
};

const STATUS_COLORS: Record<ApplicationStatus, string> = {
  submitted: 'bg-blue-100 text-blue-700 border-blue-200',
  viewed: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  shortlisted: 'bg-green-100 text-green-700 border-green-200',
  interview_scheduled: 'bg-amber-100 text-amber-800 border-amber-200',
  offer_sent: 'bg-purple-100 text-purple-700 border-purple-200',
  hired: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  not_selected: 'bg-rose-100 text-rose-700 border-rose-200',
};

const STATUS_STEPS: ApplicationStatus[] = [
  'submitted',
  'viewed',
  'shortlisted',
  'interview_scheduled',
  'offer_sent',
  'hired', // success path
];

// Mock data fallback
const MOCK_APPLICATIONS: TalentApplication[] = [
  {
    id: 'demo-1',
    job_title: 'Senior Frontend Engineer',
    company_name: 'Zion Labs',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
    status: 'shortlisted',
    resume_name: 'resume_jane_doe.pdf',
    resume_url: '#',
  },
  {
    id: 'demo-2',
    job_title: 'AI Product Manager',
    company_name: 'Aurora AI',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
    status: 'interview_scheduled',
    resume_name: 'resume_jane_doe.pdf',
    resume_url: '#',
  },
  {
    id: 'demo-3',
    job_title: 'Data Scientist',
    company_name: 'Nebula Analytics',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toISOString(),
    status: 'not_selected',
    resume_name: 'resume_jane_doe.pdf',
    resume_url: '#',
  },
  {
    id: 'demo-4',
    job_title: 'DevOps Engineer',
    company_name: 'CloudForge',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    status: 'submitted',
    resume_name: 'resume_jane_doe.pdf',
    resume_url: '#',
  },
];

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

function StatusBadge({ status }: { status: ApplicationStatus }) {
  const label = STATUS_LABELS[status];
  const classes = STATUS_COLORS[status];
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${classes}`}>
      {label}
    </span>
  );
}

function StatusStepper({ status }: { status: ApplicationStatus }) {
  const currentIndex = STATUS_STEPS.indexOf(status as (typeof STATUS_STEPS)[number]);
  const isTerminalNegative = status === 'not_selected';
  const effectiveIndex = isTerminalNegative ? 2 : currentIndex; // if rejected, show progress up to shortlist

  return (
    <div className="flex items-center gap-2 w-full">
      {STATUS_STEPS.map((step, index) => {
        const isActive = index <= effectiveIndex;
        const isLast = index === STATUS_STEPS.length - 1;
        return (
          <div key={step} className="flex items-center w-full">
            <div
              className={`h-2 rounded-full flex-1 ${
                isActive ? 'bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500' : 'bg-gray-200 dark:bg-gray-800'
              }`}
              title={STATUS_LABELS[step]}
            />
            {!isLast && <div className="w-2" />}
          </div>
        );
      })}
    </div>
  );
}

function ResumePreview({ application, onUpdate }: { application: TalentApplication; onUpdate: (file: File) => Promise<void>; }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const canEdit = ['submitted', 'viewed'].includes(application.status);

  const triggerFilePicker = () => fileInputRef.current?.click();

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="text-sm opacity-80">
        <span className="font-medium">Resume:</span>{' '}
        {application.resume_url ? (
          <a
            href={application.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            {application.resume_name || 'Download'}
          </a>
        ) : (
          <span className="italic">Not available</span>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (file) await onUpdate(file);
          if (fileInputRef.current) fileInputRef.current.value = '';
        }}
      />
      {canEdit && (
        <button
          type="button"
          onClick={triggerFilePicker}
          className="inline-flex items-center rounded-md bg-gray-900 text-white dark:bg-white dark:text-black text-xs px-3 py-1.5 hover:opacity-90"
        >
          Update Resume
        </button>
      )}
    </div>
  );
}

function ApplicationCard({ application, onUpdateResume }: { application: TalentApplication; onUpdateResume: (applicationId: string, file: File) => Promise<void>; }) {
  const handleUpdate = useCallback(
    async (file: File) => {
      await onUpdateResume(application.id, file);
    },
    [application.id, onUpdateResume]
  );

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">
            {application.job_title}
          </h3>
          <div className="text-sm opacity-80">
            {application.company_name || 'Client'}
          </div>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <div className="mt-4">
        <StatusStepper status={application.status} />
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="opacity-70">Applied on:</span>{' '}
          <span className="font-medium">{formatDate(application.created_at)}</span>
        </div>
        <div>
          <ResumePreview application={application} onUpdate={handleUpdate} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 flex-wrap">
        {application.status === 'shortlisted' && (
          <button className="inline-flex items-center rounded-md bg-green-600 text-white text-sm px-3 py-2 hover:bg-green-700">
            Prepare for Interview
          </button>
        )}
        {application.status === 'offer_sent' && (
          <button className="inline-flex items-center rounded-md bg-purple-600 text-white text-sm px-3 py-2 hover:bg-purple-700">
            View Offer / Accept
          </button>
        )}
        {application.status === 'not_selected' && (
          <button className="inline-flex items-center rounded-md bg-gray-200 dark:bg-gray-800 text-sm px-3 py-2 hover:opacity-80" onClick={() => {
            const reason = application.feedback || application.rejection_reason;
            alert(reason ? reason : 'No feedback provided.');
          }}>
            Why?
          </button>
        )}
      </div>
    </div>
  );
}

export default function TalentApplicationsPage() {
  const [applications, setApplications] = useState<TalentApplication[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const sortedApplications = useMemo(() => {
    if (!applications) return [];
    return [...applications].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [applications]);

  // Fetch logged-in user and applications
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError) throw authError;
        const user = authData?.user as any;
        const uid = user?.id ?? null;
        if (!uid) {
          // Not logged in; show auth CTA
          if (!isMounted) return;
          setUserId(null);
          setApplications([]);
          setIsLoading(false);
          return;
        }

        const role = user?.user_metadata?.role || user?.app_metadata?.role;
        const isTalent = role === 'talent' || (Array.isArray(role) && role.includes('talent'));
        if (!isTalent) {
          if (!isMounted) return;
          setUserId(uid);
          setApplications([]);
          setError('You are not authorized to view this page. Talent role required.');
          setIsLoading(false);
          return;
        }

        if (isMounted) setUserId(uid);

        const { data, error } = await supabase
          .from<TalentApplication>('job_applications')
          .select(
            'id, job_title, company_name, created_at, status, resume_name, resume_url, resume_id, feedback, rejection_reason'
          )
          .eq('talent_id', uid)
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (isMounted) {
          setApplications(data ?? []);
        }
      } catch (err: any) {
        console.error('Failed to load applications:', err?.message || err);
        if (isMounted) {
          setError('Unable to load applications. Showing demo data.');
          setApplications(MOCK_APPLICATIONS);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const onUpdateResume = useCallback(
    async (applicationId: string, file: File) => {
      try {
        if (!userId) throw new Error('You must be logged in to update resume');

        // Upload to Supabase Storage (resumes bucket)
        const path = `${userId}/${applicationId}/${Date.now()}_${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(path, file, { upsert: true, contentType: file.type });
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage.from('resumes').getPublicUrl(uploadData.path);
        const resumeUrl = publicUrlData.publicUrl;

        // Update application row
        const { error: updateError } = await supabase
          .from('job_applications')
          .update({ resume_url: resumeUrl, resume_name: file.name })
          .eq('id', applicationId)
          .eq('talent_id', userId);
        if (updateError) throw updateError;

        // Refresh local state
        setApplications((prev) =>
          (prev ?? []).map((app) =>
            app.id === applicationId
              ? { ...app, resume_url: resumeUrl, resume_name: file.name }
              : app
          )
        );
      } catch (err: any) {
        console.error('Failed to update resume:', err?.message || err);
        alert(err?.message || 'Failed to update resume');
      }
    },
    [userId]
  );

  return (
    <EnhancedLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Your Applications</h1>
          <p className="text-sm opacity-80 mt-1">Track your progress across all jobs you have applied to.</p>
        </div>
      </div>

      <div className="mt-6">
        {isLoading ? (
          <div className="text-sm opacity-70">Loading applications...</div>
        ) : (
          <>
            {error && (
              <div className="mb-4 rounded-md border border-amber-300 bg-amber-50 text-amber-900 p-3 text-sm">
                {error}
              </div>
            )}

            {userId === null && (!applications || applications.length === 0) ? (
              <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-800 p-8 text-center">
                <div className="text-base font-medium">Sign in to view your applications</div>
                <div className="text-sm opacity-70 mt-1">You must be logged in as talent to access this page.</div>
                <a
                  href="/auth"
                  className="inline-flex items-center rounded-md bg-gray-900 text-white dark:bg-white dark:text-black text-sm px-4 py-2 mt-4 hover:opacity-90"
                >
                  Go to Sign In
                </a>
              </div>
            ) : !applications || applications.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-800 p-8 text-center">
                <div className="text-base font-medium">No applications yet</div>
                <div className="text-sm opacity-70 mt-1">Start applying to jobs in the marketplace to see them here.</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {sortedApplications.map((app) => (
                  <ApplicationCard
                    key={app.id}
                    application={app}
                    onUpdateResume={onUpdateResume}
                  />)
                )}
              </div>
            )}
          </>
        )}
      </div>
    </EnhancedLayout>
  );
}