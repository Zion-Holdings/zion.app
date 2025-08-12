import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { SummitHero } from '@/components/summit/SummitHero';
import { AgendaSection } from '@/components/summit/AgendaSection';
import { SpeakersSection } from '@/components/summit/SpeakersSection';
import { PartnersSection } from '@/components/summit/PartnersSection';
import { LivestreamSection } from '@/components/summit/LivestreamSection';
import { RegistrationForm } from '@/components/summit/RegistrationForm';

export default function SummitPage() {
  return (
    <>
      <SEO title="Zion Global Summit" description="Join us for the Zion Global Launch Summit" />
      <Header />
      <main className="bg-background">
        <SummitHero />
        <AgendaSection />
        <SpeakersSection />
        <PartnersSection />
        <LivestreamSection />
        <RegistrationForm />
      </main>
    </>
  );
}
