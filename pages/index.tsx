import EnhancedLayout from '../components/layout/EnhancedLayout';

export default function Home() {
  return (
    <EnhancedLayout>
      <div className="py-10 space-y-6">
        <h1 className="text-3xl font-semibold">Zion</h1>
        <p className="opacity-80">Advanced AI-powered autonomous systems for growth, fundraising, and operations.</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl bg-white/60 dark:bg-white/5">
            <h2 className="font-semibold">Autonomous Cloud Suite</h2>
            <p className="text-sm opacity-70">Always-on agents running in the cloud. They research, generate, and commit results automatically.</p>
            <div className="mt-2 flex gap-3 text-sm">
              <a className="underline" href="/automation/reports">View Reports</a>
              <a className="underline" href="https://github.com/Zion-Holdings/zion.app/actions" target="_blank" rel="noreferrer">Action Runs</a>
            </div>
          </div>

          <div className="p-4 border rounded-xl bg-white/60 dark:bg-white/5">
            <h2 className="font-semibold">Investor Match Autopilot</h2>
            <p className="text-sm opacity-70">Discovers top-fit VCs and angels for your stage and thesis. Generates intros automatically.</p>
            <div className="mt-2 flex gap-3 text-sm">
              <a className="underline" href="/investor-match">Try Matching</a>
              <a className="underline" href="/automation/reports">Latest Matches</a>
            </div>
          </div>

          <div className="p-4 border rounded-xl bg-white/60 dark:bg-white/5">
            <h2 className="font-semibold">Grant & Opportunity Radar</h2>
            <p className="text-sm opacity-70">Continuously scans opportunities and drafts applications for review.</p>
            <div className="mt-2 flex gap-3 text-sm">
              <a className="underline" href="/automation/reports">See Artifacts</a>
            </div>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}