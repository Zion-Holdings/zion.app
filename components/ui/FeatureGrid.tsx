import { Bot, Briefcase, MessageSquare, ShieldCheck, Rocket, Trophy } from 'lucide-react';
import FuturisticCard from './FuturisticCard';

export default function FeatureGrid() {
  const items = [
    { title: 'AI Talent Marketplace', description: 'Discover vetted AI engineers, data scientists, and agents.', Icon: Bot },
    { title: 'Post & Match', description: 'Post jobs and get intelligent, auto-matched proposals.', Icon: Briefcase },
    { title: 'Secure Messaging', description: 'Encrypted inbox with file sharing and structured threads.', Icon: MessageSquare },
    { title: 'Trust & Safety', description: 'Identity checks, NDAs, and milestone escrow.', Icon: ShieldCheck },
    { title: 'Faster Delivery', description: 'Templates, automations, and reusable components.', Icon: Rocket },
    { title: 'Quality Outcomes', description: 'Reviews, benchmarks, and continuous verification.', Icon: Trophy },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <FuturisticCard key={it.title} {...it} />
      ))}
    </div>
  );
}