import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SummitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/60 py-20 text-center text-white">
      <div className="absolute right-4 top-4"><ModeToggle /></div>
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Zion Global Summit 2025</h1>
        <p className="text-xl opacity-90">AI, Talent, Trust — Globalized</p>
        <p className="text-lg">June 20, 2025 • Virtual &amp; New York City</p>
        <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80" >
          <Link href="#register">Register Free</Link>
        </Button>
      </div>
    </section>
  );
}
