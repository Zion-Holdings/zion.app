import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'IT Workspace Analytics | Zion Tech Group',
  description: 'IT workspace analytics for visibility, adoption, and performance across devices, apps, and users.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[
          {label:'Home', href:'/'},
          {label:'Services', href:'/services/'},
          {label:'IT Workspace Analytics', href:'/services/it-workspace-analytics'},
        ]} />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Workspace Analytics</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Use analytics to measure adoption, detect bottlenecks, and improve digital workplace performance.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Practical analytics patterns for IT operations and workspace performance.</p><ul><li>Adoption and usage visibility</li><li>Performance diagnostics</li><li>Business review requests at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/services/">all services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
      </div>
    </main>
  );
}
