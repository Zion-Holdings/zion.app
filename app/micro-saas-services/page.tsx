
import Link from 'next/link';

export const metadata = {
  openGraph: {
    title: 'Micro-SaaS Products | Zion Tech Group',
    description: 'Ready-to-use AI-powered micro-SaaS products. Start free, scale as you grow.',
    url: 'https://ziontechgroup.com/micro-saas-services/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro-SaaS Products | Zion Tech Group',
    description: 'Ready-to-use AI-powered micro-SaaS products. Start free, scale as you grow.',
  }, title: 'Micro SaaS Services', description: 'Ready-to-use micro-SaaS products from Zion Tech Group. AI-powered tools and platforms for your business.', alternates: { canonical: 'https://ziontechgroup.com/micro-saas-services/' } };

export default function MicroSaaSListPage() {
  const services = [
    { icon: '🧾', name: 'AI Invoice Processor', href: '/micro-saas/ai-invoice-processing', desc: 'Automated invoice extraction and processing.' },
    { icon: '📝', name: 'Content Writer Pro', href: '/micro-saas/ai-content-writer-pro', desc: 'AI-powered content generation for blogs, ads, and social.' },
    { icon: '💬', name: 'AI Chatbot Builder', href: '/micro-saas/ai-chatbot-builder', desc: 'Build and deploy AI chatbots without code.' },
    { icon: '📧', name: 'Email Marketing Automation', href: '/micro-saas/ai-email-marketing-automation', desc: 'Intelligent email campaigns with AI optimization.' },
    { icon: '💰', name: 'Expense Tracker', href: '/micro-saas/ai-expense-tracker', desc: 'AI-powered expense categorization and reporting.' },
    { icon: '💡', name: 'Idea Generator', href: '/micro-saas/ai-idea-generator', desc: 'AI-powered brainstorming and ideation tool.' },
    { icon: '📦', name: 'Inventory Manager', href: '/micro-saas/ai-inventory-manager', desc: 'Smart inventory tracking with demand forecasting.' },
    { icon: '📄', name: 'Invoice Processing', href: '/micro-saas/ai-invoice-processing', desc: 'Automated invoice data extraction and validation.' },
    { icon: '📊', name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', desc: 'Real-time business analytics with AI insights.' },
    { icon: '📅', name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', desc: 'AI-powered scheduling with smart reminders.' },
    { icon: '🔍', name: 'SEO Optimizer', href: '/micro-saas/seo-optimizer', desc: 'AI-driven SEO analysis and optimization.' },
    { icon: '📱', name: 'Social Media Manager', href: '/micro-saas/social-manager', desc: 'AI-powered social media scheduling and analytics.' },
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Micro SaaS</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Micro-SaaS Products</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Ready-to-use AI-powered micro-SaaS products. Start free, scale as you grow.</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
