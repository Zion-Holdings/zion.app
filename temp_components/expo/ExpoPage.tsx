import { useState } from 'react';
import WelcomeManifesto from './WelcomeManifesto';
import AgendaTimeline from './AgendaTimeline';
import Keynotes from './Keynotes';
import PartnerBooths from './PartnerBooths';
import GlobeMap from './GlobeMap';
import Livestream from './Livestream';
import GPTAssistant from './GPTAssistant';
import ExportsBar from './ExportsBar';
import { expoManifesto } from '../../data/expo/manifesto';
import { agendaItems } from '../../data/expo/agenda';
import { speakers } from '../../data/expo/speakers';
import { partners } from '../../data/expo/partners';
import { locations } from '../../data/expo/locations';

export default function ExpoPage() {
  const [activeTrack, setActiveTrack] = useState<'All' | 'AI' | 'DAO' | 'Talent' | 'Global'>('All');

  return (
    <div className="space-y-12">
      <WelcomeManifesto manifesto={expoManifesto} />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Agenda</h2>
          <div className="flex gap-2 text-sm">
            {['All','AI','DAO','Talent','Global'].map((track) => (
              <button
                key={track}
                onClick={() => setActiveTrack(track as any)}
                className={`px-3 py-1 rounded border ${activeTrack===track ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}
              >{track}</button>
            ))}
          </div>
        </div>
        <AgendaTimeline items={agendaItems} activeTrack={activeTrack} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Keynotes</h2>
        <Keynotes speakers={speakers} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Partner Booths</h2>
        <PartnerBooths partners={partners} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Map</h2>
        <GlobeMap locations={locations} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Livestream & Replays</h2>
        <Livestream agenda={agendaItems} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ZionGPT Assistant</h2>
        <GPTAssistant />
      </section>

      <ExportsBar />
    </div>
  );
}