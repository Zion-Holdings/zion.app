import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CalendarClock, Users, Settings2, CheckCircle, DollarSign, Bell } from 'lucide-react';

export default function EmployeeSchedulingAIPage() {
  return (
    <>
      <Head>
        <title>AI Employee Scheduling | Demand Forecasting & Shift Optimization</title>
        <meta name="description" content="AI-driven employee scheduling with demand forecasting, availability, labor rules, and payroll integrations." />
        <link rel="canonical" href="https://ziontechgroup.com/services/employee-scheduling-ai" />
      </Head>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">AI Employee Scheduling</h1>
            <p className="mt-6 text-gray-300 text-lg">Generate fair, compliant schedules in minutes. Reduce overtime, predict demand, and sync with payroll.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <CalendarClock className="w-6 h-6" />, title: 'Forecasting', desc: 'Predict footfall/demand by hour and location.' },
              { icon: <Users className="w-6 h-6" />, title: 'Availability', desc: 'Preferences, time-off, skills matrix.' },
              { icon: <Settings2 className="w-6 h-6" />, title: 'Compliance', desc: 'Labor rules, breaks, rests and penalties.' },
              { icon: <Bell className="w-6 h-6" />, title: 'Shifts & Swaps', desc: 'One-tap shift swap requests and notifications.' },
              { icon: <DollarSign className="w-6 h-6" />, title: 'Payroll', desc: 'ADP, Gusto, QuickBooks Time integrations.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Optimization', desc: 'Minimize overtime while meeting SLAs.' }
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/70 border border-gray-800/70">
                <div className="text-fuchsia-400 mb-3">{f.icon}</div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-gray-400 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Pricing (avg. market)</h2>
              <div className="text-gray-300 space-y-3">
                <div>Per-employee: $2–$6/user/mo</div>
                <div>SMB: $100–$400/mo</div>
                <div>Enterprise: Custom + SSO/SSO, SLAs</div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Benchmarks: <a className="text-cyan-400 hover:underline" href="https://www.hotschedules.com/pricing/" target="_blank" rel="noopener noreferrer">HotSchedules</a>, <a className="text-cyan-400 hover:underline" href="https://wheniwork.com/pricing" target="_blank" rel="noopener noreferrer">When I Work</a>, <a className="text-cyan-400 hover:underline" href="https://www.deputy.com/pricing" target="_blank" rel="noopener noreferrer">Deputy</a>.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/70 border border-gray-800/70">
              <h2 className="text-2xl font-bold text-white mb-4">Outcomes</h2>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Reduce overtime 10–25%</li>
                <li>Cut scheduling time by 70%+</li>
                <li>Improve coverage quality and CSAT</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold">Get a Quote</Link>
            <Link href="/pricing" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">View Pricing</Link>
            <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-gray-100 border border-gray-700">Labor rules (FLSA)</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-sm text-gray-400">
          <div>Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
      </section>
    </>
  );
}