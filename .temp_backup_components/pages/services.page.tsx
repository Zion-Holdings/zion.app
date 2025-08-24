import EnhancedLayout from '../components/layout/EnhancedLayout';
import { Rocket, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">Services</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <section id="mvp" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <Rocket className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">MVP Acceleration</div>
          <p className="mt-1 text-sm opacity-80">Dedicated squads to launch your MVP in weeks with tight feedback cycles.</p>
        </section>
        <section id="security" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <ShieldCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">Security & Compliance</div>
          <p className="mt-1 text-sm opacity-80">Secure architecture, audits, and compliance workflows (SOC2-ready).</p>
        </section>
        <section id="ai" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950">
          <BadgeCheck className="h-6 w-6 text-indigo-500" />
          <div className="mt-3 text-lg font-semibold">AI Integrations</div>
          <p className="mt-1 text-sm opacity-80">Copilots, agents, vector search, and automation tailored to your product.</p>
        </section>
      </div>
    </EnhancedLayout>
  );
}