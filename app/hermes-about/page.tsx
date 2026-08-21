import React from 'react';

export const metadata = {
  title: 'Hermes AI Agents: About the Platform | Zion Tech Group',
  description: 'About Zion Tech Group Hermes AI agent platform. 10,000+ deployments, 20+ industries, 99.99% uptime. Meet the swarm.',
  openGraph: { title: 'Hermes AI Agents Platform | Zion Tech Group', description: '10,000+ AI agent deployments. 20+ industries. 99.99% uptime. Meet the swarm.' },
};

export default function AboutHermes() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hermes Agent Platform</h1>
          <p className="text-xl text-indigo-200 mb-8">The world&apos;s most advanced multi-agent AI orchestration platform. Built for enterprises that cannot afford failure.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">Make AI agents as reliable as electricity. When you flip a switch, the light turns on. When you deploy a Hermes agent, it works. Every time. No exceptions.</p>
              <p className="text-lg text-slate-600">We built Hermes because the world doesn&apos;t need more chatbots. It needs agents that coordinate, heal, scale, and comply — automatically.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">By the Numbers</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600">17,000+</div>
                  <div className="text-sm text-slate-600">Services Deployed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">20+</div>
                  <div className="text-sm text-slate-600">Industries</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-pink-600">99.99%</div>
                  <div className="text-sm text-slate-600">Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-600">Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="text-center">
            <p className="text-xl text-slate-600 mb-6">Hermes was built by a team of AI researchers, DevOps engineers, and compliance specialists who believe that agent infrastructure should be boringly reliable.</p>
            <p className="text-lg text-slate-600">We&apos;re not a startup. We&apos;re a platform. And we&apos;re here for the long haul.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
