import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { ExpoHero } from '@/components/expo/ExpoHero';
import { AgendaTimeline } from '@/components/expo/AgendaTimeline';
import { KeynotesSection } from '@/components/expo/KeynotesSection';
import { PartnerBoothsSection } from '@/components/expo/PartnerBoothsSection';
import { MultiverseLaunchesSection } from '@/components/expo/MultiverseLaunchesSection';
import { InteractiveMap } from '@/components/expo/InteractiveMap';
import { LivestreamSection } from '@/components/expo/LivestreamSection';
import { ExpoGPTPrompt } from '@/components/expo/ExpoGPTPrompt';
import { ExportsSection } from '@/components/expo/ExportsSection';

export default function ExpoPage() {
  return (
    <>
      <SEO title="Zion Global Expo" description="Virtual summit showcasing multiverse innovation" />
      <Header />
      <main className="bg-background">
        <ExpoHero />
        <AgendaTimeline />
        <KeynotesSection />
        <PartnerBoothsSection />
        <MultiverseLaunchesSection />
        <InteractiveMap />
        <LivestreamSection />
        <ExpoGPTPrompt />
        <ExportsSection />
      </main>
    </>
  );
}
