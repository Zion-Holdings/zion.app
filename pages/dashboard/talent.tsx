import React from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import OnboardingProgressCard, { OnboardingStep } from '../../components/onboarding/OnboardingProgressCard';
import SmartNudgeBanner from '../../components/onboarding/SmartNudgeBanner';
import { fetchOnboardingProgress, fallbackTalentProgress, getCurrentUserId } from '../../utils/supabase/onboarding';

export default function TalentDashboardPage() {
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
        profile = await fetchOnboardingProgress(uid, 'talent');
      }

      const data = profile ?? fallbackTalentProgress();

      const nextSteps: OnboardingStep[] = [
        { id: 'profile', label: 'Profile complete', completed: !!data.profile_complete, ctaLabel: 'Complete profile', ctaHref: '/profile' },
        { id: 'skills', label: 'Skills added', completed: !!data.skills_added, ctaLabel: 'Add skills now', ctaHref: '/skills' },
        { id: 'availability', label: 'Availability set', completed: !!data.availability_set, ctaLabel: 'Set availability now', ctaHref: '/availability' },
        { id: 'first-job', label: 'First job applied', completed: !!data.first_job_applied, ctaLabel: 'Browse jobs', ctaHref: '/jobs' },
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
          <h1 className="text-2xl font-semibold">Talent Dashboard</h1>
          <p className="text-sm opacity-70">Track your onboarding progress to get better matches.</p>
        </div>

        <SmartNudgeBanner
          role="talent"
          userId={userId}
          message={percent < 100 ? 'Want better matches? Add your skills and availability.' : 'You are all set! Keep applying to jobs to land your first gig.'}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {loading ? (
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 text-sm opacity-70">Loading progress…</div>
            ) : (
              <OnboardingProgressCard
                title="Your onboarding"
                steps={steps}
                highlightColorClass="from-neon-green to-neon-blue"
              />
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
              <h3 className="font-medium">Tips</h3>
              <ul className="mt-2 text-sm list-disc list-inside opacity-80">
                <li>Well‑crafted profiles get 2x more invites.</li>
                <li>Add at least 5 key skills to improve search visibility.</li>
                <li>Set availability so clients know when you can start.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}