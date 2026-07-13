'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'on-hold' | 'planning';
  progress: number;
  phase: string;
  team: string[];
  nextMilestone: string;
  dueDate: string;
  budget: string;
  spent: string;
}

interface Ticket {
  id: string;
  subject: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'open' | 'in-progress' | 'resolved';
  created: string;
  category: string;
}

interface Document {
  id: string;
  name: string;
  type: 'contract' | 'invoice' | 'report' | 'proposal';
  date: string;
  size: string;
}

const sampleProjects: Project[] = [
  {
    id: 'proj-001',
    name: 'AI Email Intelligence Implementation',
    status: 'active',
    progress: 72,
    phase: 'Configuration & Testing',
    team: ['Sarah K.', 'Mike R.', 'Ana L.'],
    nextMilestone: 'UAT Completion',
    dueDate: '2026-06-15',
    budget: '$45,000',
    spent: '$32,400',
  },
  {
    id: 'proj-002',
    name: 'Cloud Migration to AWS',
    status: 'active',
    progress: 45,
    phase: 'Data Migration',
    team: ['David T.', 'Lisa M.'],
    nextMilestone: 'Production Cutover',
    dueDate: '2026-07-30',
    budget: '$120,000',
    spent: '$54,000',
  },
  {
    id: 'proj-003',
    name: 'Security Compliance Audit (SOC 2)',
    status: 'planning',
    progress: 15,
    phase: 'Discovery & Assessment',
    team: ['Chris W.', 'Jennifer P.'],
    nextMilestone: 'Gap Analysis Report',
    dueDate: '2026-08-20',
    budget: '$35,000',
    spent: '$5,250',
  },
];

const sampleTickets: Ticket[] = [
  { id: 'TKT-1042', subject: 'Email routing not working for CC recipients', priority: 'high', status: 'in-progress', created: '2 hours ago', category: 'Bug' },
  { id: 'TKT-1039', subject: 'Request for additional user licenses', priority: 'medium', status: 'open', created: '1 day ago', category: 'Request' },
  { id: 'TKT-1035', subject: 'Dashboard loading slowly', priority: 'low', status: 'resolved', created: '3 days ago', category: 'Performance' },
  { id: 'TKT-1028', subject: 'API integration documentation needed', priority: 'medium', status: 'resolved', created: '5 days ago', category: 'Documentation' },
];

const sampleDocuments: Document[] = [
  { id: 'doc-001', name: 'Master Services Agreement v2.1', type: 'contract', date: '2026-01-15', size: '2.4 MB' },
  { id: 'doc-002', name: 'Invoice #INV-2026-0542', type: 'invoice', date: '2026-05-01', size: '156 KB' },
  { id: 'doc-003', name: 'Monthly Performance Report - May', type: 'report', date: '2026-05-28', size: '4.8 MB' },
  { id: 'doc-004', name: 'AI Email Intelligence Proposal', type: 'proposal', date: '2025-12-10', size: '1.2 MB' },
  { id: 'doc-005', name: 'Invoice #INV-2026-0498', type: 'invoice', date: '2026-04-01', size: '148 KB' },
  { id: 'doc-006', name: 'SOC 2 Readiness Assessment', type: 'report', date: '2026-05-20', size: '3.1 MB' },
];

type Tab = 'overview' | 'projects' | 'tickets' | 'documents' | 'analytics' | 'billing';

export default function ClientPortalPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [newTicketSubject, setNewTicketSubject] = useState('');
  const [newTicketPriority, setNewTicketPriority] = useState<'critical' | 'high' | 'medium' | 'low'>('medium');
  const [showTicketForm, setShowTicketForm] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h1 className="text-4xl font-bold text-white mb-2">Client Portal</h1>
            <p className="text-slate-300">Access your projects, documents, and support tickets</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Sign In to Portal
              </button>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                🚀 Try Demo Portal
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm">
                New client? <a href="/contact" className="text-blue-400 hover:text-blue-300">Request access</a>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-white/60 hover:text-white text-sm">← Back to Homepage</Link>
          </div>
        </div>
      </div>
    );
  }

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'overview', label: 'Overview', icon: '📊' },
    { key: 'projects', label: 'Projects', icon: '📁' },
    { key: 'tickets', label: 'Support', icon: '🎫' },
    { key: 'documents', label: 'Documents', icon: '📄' },
    { key: 'analytics', label: 'Analytics', icon: '📈' },
    { key: 'billing', label: 'Billing', icon: '💳' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-blue-600">Zion Tech Group</Link>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-500">Client Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Welcome, <strong>John Smith</strong></span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">JS</div>
            <button onClick={() => setIsLoggedIn(false)} className="text-sm text-slate-500 hover:text-red-600">Sign Out</button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <div className="text-sm text-slate-500 mb-1">Active Projects</div>
                <div className="text-3xl font-bold text-blue-600">{sampleProjects.filter(p => p.status === 'active').length}</div>
                <div className="text-xs text-green-600 mt-1">↑ On track</div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <div className="text-sm text-slate-500 mb-1">Open Tickets</div>
                <div className="text-3xl font-bold text-orange-600">{sampleTickets.filter(t => t.status !== 'resolved').length}</div>
                <div className="text-xs text-slate-500 mt-1">{sampleTickets.filter(t => t.status === 'in-progress').length} in progress</div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <div className="text-sm text-slate-500 mb-1">Total Investment</div>
                <div className="text-3xl font-bold text-purple-600">$200K</div>
                <div className="text-xs text-slate-500 mt-1">Across all projects</div>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <div className="text-sm text-slate-500 mb-1">Health Score</div>
                <div className="text-3xl font-bold text-green-600">92/100</div>
                <div className="text-xs text-green-600 mt-1">● Excellent</div>
              </div>
            </div>

            {/* Active Projects Summary */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Active Projects</h2>
                <button onClick={() => setActiveTab('projects')} className="text-blue-600 text-sm hover:underline">View All →</button>
              </div>
              <div className="space-y-4">
                {sampleProjects.filter(p => p.status === 'active').map(project => (
                  <div key={project.id} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'active' ? 'bg-green-100 text-green-700' :
                        project.status === 'planning' ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>{project.status}</span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-slate-500 mb-1">
                        <span>{project.phase}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>📅 Next: {project.nextMilestone}</span>
                      <span>💰 {project.spent} / {project.budget}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">🎫 Recent Tickets</h2>
                <div className="space-y-3">
                  {sampleTickets.slice(0, 3).map(ticket => (
                    <div key={ticket.id} className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg">
                      <span className={`w-2 h-2 rounded-full ${
                        ticket.priority === 'critical' ? 'bg-red-500' :
                        ticket.priority === 'high' ? 'bg-orange-500' :
                        ticket.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{ticket.subject}</div>
                        <div className="text-xs text-slate-500">{ticket.id} · {ticket.created}</div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        ticket.status === 'open' ? 'bg-blue-100 text-blue-700' :
                        ticket.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>{ticket.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold mb-4">📄 Recent Documents</h2>
                <div className="space-y-3">
                  {sampleDocuments.slice(0, 4).map(doc => (
                    <div key={doc.id} className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <span className="text-2xl">
                        {doc.type === 'contract' ? '📋' : doc.type === 'invoice' ? '💰' : doc.type === 'report' ? '📊' : '📄'}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{doc.name}</div>
                        <div className="text-xs text-slate-500">{doc.date} · {doc.size}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4">👥 Your Dedicated Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Sarah Kim', role: 'Project Manager', email: 'sarah.kim@ziontechgroup.com', avatar: 'SK' },
                  { name: 'Mike Rodriguez', role: 'Lead Engineer', email: 'mike.r@ziontechgroup.com', avatar: 'MR' },
                  { name: 'Ana Lopez', role: 'AI Specialist', email: 'ana.l@ziontechgroup.com', avatar: 'AL' },
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {member.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-sm text-slate-500">{member.role}</div>
                      <a href={`mailto:${member.email}`} className="text-xs text-blue-600 hover:underline">{member.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Projects</h2>
              <div className="flex gap-2">
                <select className="px-3 py-2 border rounded-lg text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Completed</option>
                  <option>Planning</option>
                </select>
              </div>
            </div>
            {sampleProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <p className="text-sm text-slate-500">Phase: {project.phase}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'active' ? 'bg-green-100 text-green-700' :
                    project.status === 'planning' ? 'bg-blue-100 text-blue-700' :
                    project.status === 'completed' ? 'bg-purple-100 text-purple-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>{project.status}</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div><span className="text-slate-500">Due Date:</span><br/><strong>{project.dueDate}</strong></div>
                  <div><span className="text-slate-500">Budget:</span><br/><strong>{project.budget}</strong></div>
                  <div><span className="text-slate-500">Spent:</span><br/><strong>{project.spent}</strong></div>
                  <div><span className="text-slate-500">Next Milestone:</span><br/><strong>{project.nextMilestone}</strong></div>
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.map((member, i) => (
                      <div key={i} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                        {member.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Support Tickets</h2>
              <button
                onClick={() => setShowTicketForm(!showTicketForm)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                + New Ticket
              </button>
            </div>
            {showTicketForm && (
              <div className="bg-white rounded-xl shadow p-6 border-2 border-blue-200">
                <h3 className="text-lg font-bold mb-4">Submit New Ticket</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input value={newTicketSubject} onChange={(e) => setNewTicketSubject(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg" placeholder="Brief description of your issue..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Priority</label>
                      <select value={newTicketPriority} onChange={(e) => setNewTicketPriority(e.target.value as any)}
                        className="w-full px-4 py-2 border rounded-lg">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select className="w-full px-4 py-2 border rounded-lg">
                        <option>Bug Report</option>
                        <option>Feature Request</option>
                        <option>Question</option>
                        <option>Performance Issue</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea rows={4} className="w-full px-4 py-2 border rounded-lg" placeholder="Provide details..." />
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Submit Ticket</button>
                    <button onClick={() => setShowTicketForm(false)} className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg">Cancel</button>
                  </div>
                </div>
              </div>
            )}
            <div className="space-y-3">
              {sampleTickets.map(ticket => (
                <div key={ticket.id} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    ticket.priority === 'critical' ? 'bg-red-500' :
                    ticket.priority === 'high' ? 'bg-orange-500' :
                    ticket.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">{ticket.id}</span>
                      <span className="text-xs px-2 py-0.5 bg-slate-100 rounded">{ticket.category}</span>
                    </div>
                    <h3 className="font-medium">{ticket.subject}</h3>
                    <p className="text-sm text-slate-500">Created {ticket.created}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    ticket.status === 'open' ? 'bg-blue-100 text-blue-700' :
                    ticket.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>{ticket.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Documents</h2>
              <div className="flex gap-2">
                {['All', 'Contracts', 'Invoices', 'Reports', 'Proposals'].map(filter => (
                  <button key={filter} className="px-3 py-1.5 text-sm border rounded-lg hover:bg-slate-50">{filter}</button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleDocuments.map(doc => (
                <div key={doc.id} className="bg-white rounded-xl shadow p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-2xl">
                    {doc.type === 'contract' ? '📋' : doc.type === 'invoice' ? '💰' : doc.type === 'report' ? '📊' : '📄'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{doc.name}</h3>
                    <p className="text-sm text-slate-500">{doc.date} · {doc.size}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Usage Analytics & ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <div className="text-4xl font-bold text-green-600">$284,000</div>
                <div className="text-sm text-slate-500 mt-1">Estimated Annual Savings</div>
                <div className="text-xs text-green-600 mt-2">↑ 340% ROI</div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <div className="text-4xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-slate-500 mt-1">Hours Saved (YTD)</div>
                <div className="text-xs text-blue-600 mt-2">↑ 18% vs last quarter</div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <div className="text-4xl font-bold text-purple-600">99.7%</div>
                <div className="text-sm text-slate-500 mt-1">System Uptime</div>
                <div className="text-xs text-green-600 mt-2">Above SLA target</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Monthly Performance Trend</h3>
              <div className="space-y-3">
                {['January', 'February', 'March', 'April', 'May'].map((month, i) => {
                  const value = 60 + i * 8;
                  return (
                    <div key={month} className="flex items-center gap-4">
                      <span className="w-20 text-sm text-slate-600">{month}</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-6 relative">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-6 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${value}%` }}>
                          <span className="text-xs text-white font-bold">{value}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">🎉 You're getting great value!</h3>
              <p className="text-blue-100 mb-4">Your solutions are delivering $23,667/month in measurable savings.</p>
              <Link href="/services" className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50">
                Explore Expansion Opportunities →
              </Link>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Billing & Invoices</h2>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Current Plan</h3>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-bold text-lg">Enterprise Plan</div>
                  <div className="text-sm text-slate-600">$12,499/month · Renews Aug 1, 2026</div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">Manage Plan</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Invoice History</h3>
              <div className="space-y-3">
                {sampleDocuments.filter(d => d.type === 'invoice').map(invoice => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{invoice.name}</div>
                      <div className="text-sm text-slate-500">{invoice.date}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-600 text-sm font-medium">✓ Paid</span>
                      <button className="text-blue-600 text-sm hover:underline">Download PDF</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>📞 <a href="tel:+130****0950" className="text-blue-600">+1 302 464 0950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600">kleber@ziontechgroup.com</a></p>
          <p className="mt-1">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}
