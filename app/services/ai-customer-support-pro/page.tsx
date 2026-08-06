import Link from 'next/link';

export const metadata = {
  title: 'AI Customer Support Pro | Zion Tech Group',
  description: 'Context-aware AI customer support with human escalation paths. Reduce ticket volume while improving customer satisfaction.',
  keywords: ['AI customer support', 'chatbot', 'customer service automation', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'AI Customer Support Pro | Zion Tech Group',
    description: 'Context-aware AI customer support with human escalation paths.',
    url: 'https://ziontechgroup.com/services/ai-customer-support-pro/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: 'https://ziontechgroup.com/services/ai-customer-support-pro/' },
};

export default function AICustomerSupportPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI Customer Support Pro
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Context-aware AI customer support with human escalation paths
          </p>
        </header>

        <section className="prose prose-invert max-w-none">
          <h2>Why Context-Aware Support Matters</h2>
          <p>
            Generic chatbots frustrate customers and increase support costs. Our AI Customer Support Pro 
            understands context, maintains conversation history, and escalates appropriately to human agents.
          </p>

          <h2>Key Capabilities</h2>
          <ul>
            <li><strong>RAG-Powered Responses</strong> - Ground answers in your actual documentation and knowledge base</li>
            <li><strong>Conversation Memory</strong> - Remember context across interactions for seamless experience</li>
            <li><strong>Smart Escalation</strong> - Automatically route to humans when complexity exceeds AI capabilities</li>
            <li><strong>Omnichannel Support</strong> - Unified interface for web chat, email, SMS, and social media</li>
            <li><strong>Sentiment Analysis</strong> - Detect frustration and urgency to prioritize tickets</li>
          </ul>

          <h2>Measurable Results</h2>
          <p>
            <strong>60-80% reduction</strong> in ticket volume for Tier 1 issues<br/>
            <strong>40% faster</strong> response times<br/>
            <strong>95%+</strong> customer satisfaction for AI-handled issues
          </p>

          <h2>Implementation</h2>
          <ol>
            <li><strong>Knowledge Integration</strong> - Connect to your documentation, CRM, and support systems</li>
            <li><strong>Intent Training</strong> - Fine-tune for your specific customer journey</li>
            <li><strong>Escalation Rules</strong> - Define when and how to route to human agents</li>
            <li><strong>Monitoring Dashboard</strong> - Track performance and identify improvement opportunities</li>
          </ol>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">See a Demo</h2>
            <p className="text-slate-300">Schedule a 15-minute demo to see the solution in action.</p>
            <div className="mt-4">
              <Link href="/contact/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 inline-block">
                Schedule Demo
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Learn More</h2>
            <p className="text-slate-300">Read case studies and technical documentation.</p>
            <Link
              href="/blog/"
              className="mt-4 inline-block rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Read Our Blog
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}