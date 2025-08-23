import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { GradientHeading } from '@/components/GradientHeading';

const historicalEvents: Record<string, string> = {
  '01-01': 'Genesis block minted (2023)',
  '06-06': 'Zion OS launched first governance portal (2024)',
};

export default function TimeOS() {
  const todayKey = new Date().toISOString().slice(5, 10);
  const todaysEvent = historicalEvents[todayKey];
  return (
    <>
      <NextSeo
        title="Zion TimeOS"
        description="Decentralized coordination layer for proposals, releases, and anniversaries."/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="text-center space-y-4">
            <GradientHeading level="h1">Zion TimeOS</GradientHeading>
            <p className="text-zion-slate-light text-xl">
              Manage proposals, releases, anniversaries and cross-instance schedules.
            </p>
          </section>

          <section className="space-y-4">
            <GradientHeading level="h2">Governance Calendar</GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light space-y-2">
              <li>DAO voting windows</li>
              <li>Token unlock events</li>
              <li>Proposal cooldowns</li>
              <li>Cross-instance sync schedules</li>
            </ul>
          </section>

          <section className="space-y-4">
            <GradientHeading level="h2">Protocol Events Layer</GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light space-y-2">
              <li>Manifesto Days</li>
              <li>Global Summits</li>
              <li>Treasury report cycles</li>
              <li>Talent Festival launches</li>
            </ul>
          </section>

          <section className="space-y-4">
            <GradientHeading level="h2">Memory Engine</GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light space-y-2">
              <li>Stores every proposal, milestone and manifesto</li>
              <li>Shows “On this day in Zion history…”</li>
              <li>Pushes governance anniversaries into roadmap voting</li>
            </ul>
            <div className="mt-4">
              {todaysEvent ? (
                <p className="text-zion-slate-light">
                  <strong>On this day in Zion history:</strong> {todaysEvent}
                </p>
              ) : (
                <p className="text-zion-slate-light italic">
                  No historical events recorded for this day yet.
                </p>
              )}
            </div>
          </section>

          <section className="space-y-4">
            <GradientHeading level="h2">Sync Options</GradientHeading>
            <ul className="list-disc pl-6 text-zion-slate-light space-y-2">
              <li>Export to Notion, iCal or Google Calendar</li>
              <li>Push via webhooks to DAO chat or mobile app</li>
              <li>Auto-invite function for DAO votes</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
