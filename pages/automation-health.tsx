import React, { useState } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import FuturisticLayout from '../components/FuturisticLayout';
import fs from 'fs';
import path from 'path';

interface AutomationHealth {
  version: string;
  lastUpdated: string;
  functions: Record<string, FunctionHealth>;
  workflows: Record<string, WorkflowHealth>;
  summary: HealthSummary;
}

interface FunctionHealth {
  name: string;
  lastRunAt: string | null;
  lastSuccessAt: string | null;
  lastFailureAt: string | null;
  totalRuns: number;
  successfulRuns: number;
  failedRuns: number;
  skippedRuns: number;
  totalDurationMs: number;
  averageDurationMs: number;
  totalCommits: number;
  lastError: string | null;
  consecutiveFailures: number;
  consecutiveSuccesses: number;
  status: 'healthy' | 'failed' | 'skipped' | 'unknown';
}

interface WorkflowHealth {
  name: string;
  lastRunAt: string | null;
  lastSuccessAt: string | null;
  lastFailureAt: string | null;
  totalRuns: number;
  successfulRuns: number;
  failedRuns: number;
  skippedRuns: number;
  cancelledRuns: number;
  totalDurationMs: number;
  averageDurationMs: number;
  totalCommits: number;
  lastError: string | null;
  consecutiveFailures: number;
  consecutiveSuccesses: number;
  status: 'healthy' | 'failed' | 'skipped' | 'cancelled' | 'unknown';
}

interface HealthSummary {
  totalFunctions: number;
  totalWorkflows: number;
  healthyFunctions: number;
  healthyWorkflows: number;
  failedFunctions: number;
  failedWorkflows: number;
  totalCommits: number;
  totalErrors: number;
  averageFunctionDuration: number;
  averageWorkflowDuration: number;
}

interface ControlPlane {
  globalPause: boolean;
  version: string;
  lastUpdated: string;
  functions: Record<string, boolean>;
  workflows: Record<string, boolean>;
  throttles: {
    maxConcurrentFunctions: number;
    maxConcurrentWorkflows: number;
    functionTimeoutMs: number;
    workflowTimeoutMs: number;
  };
  budgets: {
    openai: {
      dailyUsd: number;
      monthlyUsd: number;
      enabled: boolean;
    };
    github: {
      dailyActions: number;
      monthlyActions: number;
      enabled: boolean;
    };
  };
}

interface ScheduleHints {
  version: string;
  lastUpdated: string;
  workflows: Record<string, any>;
  recommendations: {
    totalWorkflows: number;
    workflowsNeedingSpeedUp: number;
    workflowsNeedingSlowDown: number;
    overallHealth: string;
    nextReview: string;
  };
  performance: {
    averageSuccessRate: number;
    totalFailures: number;
    efficiency: string;
  };
}

interface Props {
  health: AutomationHealth;
  controlPlane: ControlPlane;
  scheduleHints: ScheduleHints;
}

export default function AutomationHealthPage({ health, controlPlane, scheduleHints }: Props) {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500';
      case 'failed': return 'text-red-500';
      case 'skipped': return 'text-yellow-500';
      case 'cancelled': return 'text-gray-500';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '✅';
      case 'failed': return '❌';
      case 'skipped': return '⏭️';
      case 'cancelled': return '⏹️';
      default: return '❓';
    }
  };

  const formatDuration = (ms: number) => {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${(ms / 60000).toFixed(1)}m`;
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  return (
    <FuturisticLayout>
      <Head>
        <title>Automation Health Dashboard | Zion Tech Group</title>
        <meta name="description" content="Real-time automation health monitoring and control plane dashboard" />
      
        <meta property="og:title" content="🤖 Automation Health Dashboard" />
        <meta property="og:description" content="🤖 Automation Health Dashboard — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🤖 Automation Health Dashboard
            </h1>
            <p className="text-gray-300 mt-2">
              Real-time monitoring and control of autonomous systems
            </p>
          </div>

          {/* Control Plane Status */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-cyan-400">Control Plane</h2>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  controlPlane.globalPause ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {controlPlane.globalPause ? 'PAUSED' : 'ACTIVE'}
                </span>
                <span className="text-sm text-gray-400">v{controlPlane.version}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-purple-400 mb-2">Throttles</h3>
                <div className="space-y-2 text-sm">
                  <div>Max Functions: {controlPlane.throttles.maxConcurrentFunctions}</div>
                  <div>Max Workflows: {controlPlane.throttles.maxConcurrentWorkflows}</div>
                  <div>Function Timeout: {formatDuration(controlPlane.throttles.functionTimeoutMs)}</div>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-purple-400 mb-2">OpenAI Budget</h3>
                <div className="space-y-2 text-sm">
                  <div>Daily: ${controlPlane.budgets.openai.dailyUsd}</div>
                  <div>Monthly: ${controlPlane.budgets.openai.monthlyUsd}</div>
                  <div className={controlPlane.budgets.openai.enabled ? 'text-green-400' : 'text-red-400'}>
                    {controlPlane.budgets.openai.enabled ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-purple-400 mb-2">GitHub Actions</h3>
                <div className="space-y-2 text-sm">
                  <div>Daily: {controlPlane.budgets.github.dailyActions.toLocaleString()}</div>
                  <div>Monthly: {controlPlane.budgets.github.monthlyActions.toLocaleString()}</div>
                  <div className={controlPlane.budgets.github.enabled ? 'text-green-400' : 'text-red-400'}>
                    {controlPlane.budgets.github.enabled ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-6 bg-slate-800/50 rounded-lg p-1">
            {['overview', 'functions', 'workflows', 'schedules'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Health Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400">{health.summary.totalFunctions}</div>
                  <div className="text-gray-400">Total Functions</div>
                  <div className="text-sm text-green-400 mt-1">
                    {health.summary.healthyFunctions} healthy
                  </div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400">{health.summary.totalWorkflows}</div>
                  <div className="text-gray-400">Total Workflows</div>
                  <div className="text-sm text-green-400 mt-1">
                    {health.summary.healthyWorkflows} healthy
                  </div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400">{health.summary.totalCommits}</div>
                  <div className="text-gray-400">Total Commits</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Generated by automations
                  </div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-red-400">{health.summary.totalErrors}</div>
                  <div className="text-gray-400">Total Errors</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Across all systems
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-cyan-400 mb-2">Functions</h4>
                    <div className="space-y-2 text-sm">
                      <div>Average Duration: {formatDuration(health.summary.averageFunctionDuration)}</div>
                      <div>Success Rate: {((health.summary.healthyFunctions / health.summary.totalFunctions) * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-400 mb-2">Workflows</h4>
                    <div className="space-y-2 text-sm">
                      <div>Average Duration: {formatDuration(health.summary.averageWorkflowDuration)}</div>
                      <div>Success Rate: {((health.summary.healthyWorkflows / health.summary.totalWorkflows) * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Recommendations */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Schedule Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">{scheduleHints.recommendations.workflowsNeedingSpeedUp}</div>
                    <div className="text-gray-400">Speed Up</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">{scheduleHints.recommendations.workflowsNeedingSlowDown}</div>
                    <div className="text-gray-400">Slow Down</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">{scheduleHints.performance.averageSuccessRate.toFixed(1)}%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    scheduleHints.recommendations.overallHealth === 'excellent' ? 'bg-green-500/20 text-green-400' :
                    scheduleHints.recommendations.overallHealth === 'good' ? 'bg-blue-500/20 text-blue-400' :
                    scheduleHints.recommendations.overallHealth === 'fair' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    Overall Health: {scheduleHints.recommendations.overallHealth.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Functions Tab */}
          {activeTab === 'functions' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Function Health</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2">Function</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Last Run</th>
                      <th className="text-left py-2">Success Rate</th>
                      <th className="text-left py-2">Avg Duration</th>
                      <th className="text-left py-2">Commits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(health.functions).map((func) => (
                      <tr key={func.name} className="border-b border-slate-700/50">
                        <td className="py-2 font-mono text-cyan-400">{func.name}</td>
                        <td className="py-2">
                          <span className={`inline-flex items-center gap-1 ${getStatusColor(func.status)}`}>
                            {getStatusIcon(func.status)} {func.status}
                          </span>
                        </td>
                        <td className="py-2 text-gray-400">{formatDate(func.lastRunAt)}</td>
                        <td className="py-2">
                          {func.totalRuns > 0 ? ((func.successfulRuns / func.totalRuns) * 100).toFixed(1) : 0}%
                        </td>
                        <td className="py-2 text-gray-400">{formatDuration(func.averageDurationMs)}</td>
                        <td className="py-2 text-green-400">{func.totalCommits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Workflows Tab */}
          {activeTab === 'workflows' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Workflow Health</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2">Workflow</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Last Run</th>
                      <th className="text-left py-2">Success Rate</th>
                      <th className="text-left py-2">Avg Duration</th>
                      <th className="text-left py-2">Commits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(health.workflows).map((workflow) => (
                      <tr key={workflow.name} className="border-b border-slate-700/50">
                        <td className="py-2 font-mono text-purple-400">{workflow.name}</td>
                        <td className="py-2">
                          <span className={`inline-flex items-center gap-1 ${getStatusColor(workflow.status)}`}>
                            {getStatusIcon(workflow.status)} {workflow.status}
                          </span>
                        </td>
                        <td className="py-2 text-gray-400">{formatDate(workflow.lastRunAt)}</td>
                        <td className="py-2">
                          {workflow.totalRuns > 0 ? ((workflow.successfulRuns / workflow.totalRuns) * 100).toFixed(1) : 0}%
                        </td>
                        <td className="py-2 text-gray-400">{formatDuration(workflow.averageDurationMs)}</td>
                        <td className="py-2 text-green-400">{workflow.totalCommits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Schedules Tab */}
          {activeTab === 'schedules' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Schedule Optimization</h3>
              <div className="space-y-4">
                {Object.entries(scheduleHints.workflows).map(([name, workflow]) => (
                  <div key={name} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-cyan-400">{name}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        workflow.recommendations.shouldSpeedUp ? 'bg-green-500/20 text-green-400' :
                        workflow.recommendations.shouldSlowDown ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {workflow.recommendations.reason.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Current</div>
                        <div className="text-white">{workflow.currentFrequency}m</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Target</div>
                        <div className="text-white">{workflow.targetFrequency}m</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Success Rate</div>
                        <div className="text-white">{(workflow.successRate * 100).toFixed(1)}%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Failures</div>
                        <div className="text-white">{workflow.failures}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm mt-8">
            Last updated: {new Date(health.lastUpdated).toLocaleString()}
          </div>
        </div>
      </div>
    </FuturisticLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const readJson = (segments: string[]) => {
      const filePath = path.join(process.cwd(), ...segments);
      if (fs.existsSync(filePath)) {
        try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { /* ignore */ }
      }
      return null;
    };

    // Read automation health data from public files during static export
    const health = readJson(['public','reports','automation','health.json']) ?? {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      functions: {},
      workflows: {},
      summary: {
        totalFunctions: 0,
        totalWorkflows: 0,
        healthyFunctions: 0,
        healthyWorkflows: 0,
        failedFunctions: 0,
        failedWorkflows: 0,
        totalCommits: 0,
        totalErrors: 0,
        averageFunctionDuration: 0,
        averageWorkflowDuration: 0
      }
    };

    // Read control plane data
    const controlPlane = readJson(['public','automation','control.json']) ?? {
      globalPause: false,
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      functions: {},
      workflows: {},
      throttles: { maxConcurrentFunctions: 6, maxConcurrentWorkflows: 3, functionTimeoutMs: 180000, workflowTimeoutMs: 3600000 },
      budgets: { openai: { dailyUsd: 2.50, monthlyUsd: 50.00, enabled: true }, github: { dailyActions: 2000, monthlyActions: 50000, enabled: true } }
    };

    // Read schedule hints
    const scheduleHints = readJson(['public','automation','schedule-hints.json']) ?? {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      workflows: {},
      recommendations: { totalWorkflows: 0, workflowsNeedingSpeedUp: 0, workflowsNeedingSlowDown: 0, overallHealth: 'unknown', nextReview: new Date().toISOString() },
      performance: { averageSuccessRate: 0, totalFailures: 0, efficiency: 'unknown' }
    };

    return {
      props: {
        health,
        controlPlane,
        scheduleHints,
      },
    };
  } catch (error) {
    console.error('Error fetching automation data:', error);
    
    return {
      props: {
        health: {
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
          functions: {},
          workflows: {},
          summary: {
            totalFunctions: 0,
            totalWorkflows: 0,
            healthyFunctions: 0,
            healthyWorkflows: 0,
            failedFunctions: 0,
            failedWorkflows: 0,
            totalCommits: 0,
            totalErrors: 0,
            averageFunctionDuration: 0,
            averageWorkflowDuration: 0
          }
        },
        controlPlane: {
          globalPause: false,
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
          functions: {},
          workflows: {},
          throttles: { maxConcurrentFunctions: 6, maxConcurrentWorkflows: 3, functionTimeoutMs: 180000, workflowTimeoutMs: 3600000 },
          budgets: { openai: { dailyUsd: 2.50, monthlyUsd: 50.00, enabled: true }, github: { dailyActions: 2000, monthlyActions: 50000, enabled: true } }
        },
        scheduleHints: {
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
          workflows: {},
          recommendations: { totalWorkflows: 0, workflowsNeedingSpeedUp: 0, workflowsNeedingSlowDown: 0, overallHealth: 'unknown', nextReview: new Date().toISOString() },
          performance: { averageSuccessRate: 0, totalFailures: 0, efficiency: 'unknown' }
        },
      },
    };
  }
};
