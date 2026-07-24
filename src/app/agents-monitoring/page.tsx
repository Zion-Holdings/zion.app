'use client';

import { useState } from 'react';
import {
  INITIAL_AGENT_LOGS,
  INITIAL_AGENT_STATUS,
  WAVE_DATA,
} from '@/app/data/agent-logs';

type View = 'client' | 'ops';

export default function AgentsMonitoring() {
  const [view, setView] = useState<View>('client');

  const totalServices = WAVE_DATA.reduce((sum, w) => sum + w.services, 0);
  const totalWaves = WAVE_DATA.length;
  const activeAgents = INITIAL_AGENT_STATUS.filter(s => s.status === 'active').length;
  const totalTasksCompleted = INITIAL_AGENT_STATUS.reduce((sum, a) => sum + a.tasksCompleted, 0);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-400 font-medium uppercase tracking-wider">Live Monitoring</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            AI Agent Fleet
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our AI agents work 24/7 to build, monitor, and improve the Zion Tech Group platform.
            Here&apos;s what they&apos;ve accomplished — in real time.
          </p>

          {/* View toggle */}
          <div className="mt-6 inline-flex rounded-full bg-slate-800 border border-slate-700 p-1">
            <button
              onClick={() => setView('client')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${view === 'client' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              👤 Client View
            </button>
            <button
              onClick={() => setView('ops')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${view === 'ops' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              🔧 Ops View
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-500/20 p-5 text-center">
              <div className="text-4xl font-bold text-purple-400">{totalWaves}</div>
              <div className="text-sm text-slate-400 mt-1">Development Waves</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-pink-900/30 to-pink-800/10 border border-pink-500/20 p-5 text-center">
              <div className="text-4xl font-bold text-pink-400">{totalServices}</div>
              <div className="text-sm text-slate-400 mt-1">Services Cataloged</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-500/20 p-5 text-center">
              <div className="text-4xl font-bold text-green-400">{activeAgents}</div>
              <div className="text-sm text-slate-400 mt-1">Active Agents</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 border border-cyan-500/20 p-5 text-center">
              <div className="text-4xl font-bold text-cyan-400">{totalTasksCompleted}</div>
              <div className="text-sm text-slate-400 mt-1">Tasks Completed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {view === 'client' && (
          <div className="space-y-8">
            {/* What our agents do */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">What Our AI Agents Do</h2>
              <p className="text-slate-400 mb-6">Our autonomous AI agents continuously build and improve the Zion Tech Group platform around the clock.</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: '🔬', title: 'Research', desc: 'Agents research real-world AI, IT, and cloud services to add to our catalog — verifying features, pricing, and availability.' },
                  { icon: '⚙️', title: 'Integration', desc: 'Each researched service is integrated with full metadata: features, benefits, pricing tiers, and contact information.' },
                  { icon: '🔍', title: 'Quality Assurance', desc: 'Agents crawl the entire site to verify all links work, content is accurate, and pages render correctly.' },
                  { icon: '📊', title: 'Monitoring', desc: 'Continuous monitoring of site health, CI/CD pipeline status, and deployment verification.' },
                  { icon: '🚀', title: 'Deployment', desc: 'Automated builds and deployments to GitHub Pages with full static export verification.' },
                  { icon: '🤝', title: 'Coordination', desc: 'Multi-agent coordination ensures work is distributed efficiently with no duplication or conflicts.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent fleet */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Meet the Fleet</h2>
              <p className="text-slate-400 mb-6">Six specialized AI agents working together to build and maintain our platform.</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {INITIAL_AGENT_STATUS.map((agent, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{agent.emoji}</span>
                      <div>
                        <h3 className="font-bold text-slate-100">{agent.name}</h3>
                        <p className="text-xs text-slate-500">{agent.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{agent.specialty}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>✅ {agent.tasksCompleted} tasks</span>
                      <span>📅 {agent.weekActions} this week</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${agent.status === 'active' ? 'bg-green-500' : 'bg-slate-500'}`}></span>
                      <span className="text-xs text-slate-500">{agent.status === 'active' ? 'Currently active' : 'Available'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent milestones */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Recent Milestones</h2>
              <p className="text-slate-400 mb-6">Latest achievements from our AI agent fleet.</p>
              <div className="space-y-3">
                {INITIAL_AGENT_LOGS.slice(0, 6).map((log, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-slate-700/30 bg-slate-800/20 p-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mt-0.5">
                      {log.category}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-200">{log.action}</p>
                      <p className="text-xs text-slate-500 mt-1">{log.result.slice(0, 150)}</p>
                    </div>
                    <div className="text-xs text-slate-600 shrink-0">{log.timestamp.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Want AI Agents Working for You?</h2>
              <p className="text-slate-300 mb-6">Let our team of AI agents build and maintain your technology platform.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
                  📧 kleber@ziontechgroup.com
                </a>
                <a href="tel:+13024640950" className="px-6 py-3 rounded-full border border-purple-500/50 text-sm font-semibold text-purple-300 hover:bg-purple-500/10 transition-all">
                  📞 +1 302 464 0950
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-500">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        )}

        {view === 'ops' && (
          <div className="space-y-6">
            {/* Full agent details */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Agent Details</h2>
              <div className="space-y-4">
                {INITIAL_AGENT_STATUS.map((agent, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{agent.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-100">{agent.name}</h3>
                          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${agent.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}`}>
                            {agent.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-3">{agent.telegram} · {agent.role} · {agent.specialty}</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                          <div className="rounded-lg bg-slate-700/30 p-2 text-center">
                            <div className="text-lg font-bold text-purple-400">{agent.tasksCompleted}</div>
                            <div className="text-[10px] text-slate-500">Total Tasks</div>
                          </div>
                          <div className="rounded-lg bg-slate-700/30 p-2 text-center">
                            <div className="text-lg font-bold text-green-400">{agent.todayActions}</div>
                            <div className="text-[10px] text-slate-500">Today</div>
                          </div>
                          <div className="rounded-lg bg-slate-700/30 p-2 text-center">
                            <div className="text-lg font-bold text-cyan-400">{agent.weekActions}</div>
                            <div className="text-[10px] text-slate-500">Week</div>
                          </div>
                          <div className="rounded-lg bg-slate-700/30 p-2 text-center">
                            <div className="text-lg font-bold text-emerald-400">{agent.uptime}</div>
                            <div className="text-[10px] text-slate-500">Uptime</div>
                          </div>
                          <div className="rounded-lg bg-slate-700/30 p-2 text-center">
                            <div className="text-sm font-medium text-slate-300 mt-1">{agent.lastActionTime}</div>
                            <div className="text-[10px] text-slate-500">Last Active</div>
                          </div>
                        </div>
                        <div className="text-sm text-slate-300"><span className="text-slate-500">Current:</span> {agent.currentTask}</div>
                        <div className="text-sm text-slate-300"><span className="text-slate-500">Last:</span> {agent.lastAction}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full activity log */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Full Activity Log</h2>
              <div className="space-y-2">
                {INITIAL_AGENT_LOGS.map((log, i) => (
                  <div key={i} className="rounded-lg border border-slate-700/30 bg-slate-800/20 p-4">
                    <div className="flex items-start gap-3">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                        log.category === 'wave' ? 'bg-purple-500/20 text-purple-400' :
                        log.category === 'fix' ? 'bg-red-500/20 text-red-400' :
                        log.category === 'integration' ? 'bg-blue-500/20 text-blue-400' :
                        log.category === 'monitoring' ? 'bg-indigo-500/20 text-indigo-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>
                        {log.category}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-400">{log.bot}</span>
                          <span className="text-xs text-slate-600">{log.timestamp}</span>
                          {log.duration && <span className="text-xs text-slate-600">· {log.duration}</span>}
                        </div>
                        <p className="text-sm font-medium text-slate-200">{log.action}</p>
                        <p className="text-xs text-slate-400 mt-1">{log.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
