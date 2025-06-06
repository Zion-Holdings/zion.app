import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NextSeo } from '@/components/NextSeo';
import { GradientHeading } from '@/components/GradientHeading';

export default function TimeOS() {
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
      <Footer />
    </>
  );
}
