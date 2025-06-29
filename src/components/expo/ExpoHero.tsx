import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ExpoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan/60 py-20 text-center text-white">
      <div className="absolute right-4 top-4"><ModeToggle /></div>
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Zion Global Expo</h1>
        <p className="text-xl opacity-90">Showcasing Multiverse Innovation</p>
        <p className="text-lg">Hybrid Virtual Summit</p>
        <div className="aspect-video max-w-3xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OYxhW22Kv30?mute=1&controls=1"
            title="Zion Expo Welcome"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="max-w-2xl mx-auto text-lg">
          Explore Zion's manifesto and join us in building a borderless multiverse powering talent, AI and trust.
        </p>
        <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80">
          <Link href="#agenda">View Agenda</Link>
        </Button>
      </div>
    </section>
  );
}
