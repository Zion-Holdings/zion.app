import React from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import OnboardingProgressCard, { OnboardingStep } from '../../components/onboarding/OnboardingProgressCard';
import SmartNudgeBanner from '../../components/onboarding/SmartNudgeBanner';
import { fetchOnboardingProgress, fallbackClientProgress, getCurrentUserId } from '../../utils/supabase/onboarding';

export default function ClientDashboardPage() {
  const [userId, setUserId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [steps, setSteps] = React.useState<OnboardingStep[]>([]);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      const uid = await getCurrentUserId();
      if (!mounted) return;
      setUserId(uid);

      let profile: any | null = null;
      if (uid) {
        profile = await fetchOnboardingProgress(uid, 'client');
      }

      const data = profile ?? fallbackClientProgress();

      const nextSteps: OnboardingStep[] = [
        { id: 'job', label: 'Job posted', completed: !!data.job_posted, ctaLabel: 'Post a job', ctaHref: '/jobs/new' },
        { id: 'invite', label: 'Talent invited', completed: !!data.talent_invited, ctaLabel: 'Invite talent now', ctaHref: '/talent' },
        { id: 'quote', label: 'Quote received', completed: !!data.quote_received, ctaLabel: 'Request quotes', ctaHref: '/quotes' },
        { id: 'hire', label: 'First hire complete', completed: !!data.first_hire_complete, ctaLabel: 'Review candidates', ctaHref: '/hires' },
      ];

      if (!mounted) return;
      setSteps(nextSteps);
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  const percent = React.useMemo(() => {
    if (steps.length === 0) return 0;
    return Math.round((steps.filter(s => s.completed).length / steps.length) * 100);
  }, [steps]);

  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Client Dashboard</h1>
          <p className="text-sm opacity-70">Finish onboarding to start hiring faster.</p>
        </div>

        <SmartNudgeBanner
          role="client"
          userId={userId}
          message={percent < 100 ? 'Invite talent now to speed up hiring!' : 'Great! Your hiring setup is complete.'}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {loading ? (
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 text-sm opacity-70">Loading progress…</div>
            ) : (
              <OnboardingProgressCard
                title="Your onboarding"
                steps={steps}
                highlightColorClass="from-neon-blue to-neon-purple"
              />
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-medium">Tips</h3>
              <ul className="mt-2 text-sm list-disc list-inside opacity-80">
                <li>Clear job briefs attract better proposals.</li>
                <li>Invite 3–5 talents to increase response rate.</li>
                <li>Close the loop quickly once you find a match.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}