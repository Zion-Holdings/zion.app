import React from 'react';

interface AgentStatus {
  agentId: string;
  type: string;
  status: 'active' | 'idle' | 'error' | 'stopped';
  lastActivity: string;
  pid?: number;
  workload?: number;
  currentTask?: string;
  performance?: {
    tasksCompleted?: number;
    successRate?: number;
    avgResponseTime?: number;
  };
}

interface AgentMonitorProps {
  agents: AgentStatus[];
  onAgentClick?: (agent: AgentStatus) => void;
};

export default function AgentMonitor({ agents, onAgentClick }: AgentMonitorProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'idle': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      case 'stopped': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs font-semibold">Active</span>
          </div>
        );
      case 'idle':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-xs font-semibold">Idle</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-xs font-semibold">Error</span>
          </div>
        );
      case 'stopped':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-xs font-semibold">Stopped</span>
          </div>
        );
      default:
        return null;
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const getAgentTypeIcon = (type: string) => {
    const typeIcons: { [key: string]: string } = {
      'AdminAgentCreator': '🔧',
      'AdminAnalyticsAgent': '📊',
      'AdminBackupAgent': '💾',
      'AdminEvolutionAgent': '🔄',
      'AdminSecurityAgent': '🔒',
      'AdminStatusMonitor': '📈',
      'AdminToolGenerator': '🛠️',
      'AdminWebResearcher': '🌐',
      'content': '📝',
      'research': '🔍',
      'seo': '🎯',
      'monetization': '💰',
      'analytics': '📊',
      'orchestrator': '🎼'
    };

    return typeIcons[type] || '🤖';
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Agent Monitor</h3>
        <div className="text-sm text-gray-500">
          {agents.length} agents total
        </div>
      </div>

      <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-3 gap-4">
        {agents.map((agent) => (
          <div
            key={agent.agentId}
            onClick={() => onAgentClick?.(agent)}
            className={`bg-white rounded-lg shadow p-4 border-2 cursor-pointer transition-all hover:shadow-lg ${
              onAgentClick ? 'hover:border-blue-300' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{getAgentTypeIcon(agent.type)}</span>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{agent.type}</div>
                  <div className="text-xs text-gray-500">ID: {agent.agentId}</div>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(agent.status)}`}>
                {agent.status}
              </div>
            </div>

            <div className="space-y-2">
              {agent.pid && (
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">PID:</span>
                  <span className="text-gray-900 font-mono">{agent.pid}</span>
                </div>
              )}

              {agent.workload !== undefined && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Workload:</span>
                    <span className="text-gray-900">{agent.workload}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-blue-600 h-1 rounded-full transition-all duration-300 style={{ width: `${agent.workload}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {agent.currentTask && ("
                <div className=""text-xs">
                  <div className="text-gray-600 mb-1">Current Task:</div>
                  <div className="text-gray-900 bg-gray-50 p-2 rounded text-xs">
                    {agent.currentTask}
                  </div>
                </div>
              )}

              {agent.performance && (
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-gray-600">Tasks</div>
                    <div className="font-semibold text-gray-900">{agent.performance.tasksCompleted || 0}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Success</div>
                    <div className="font-semibold text-gray-900">{agent.performance.successRate || 0}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Avg Time</div>
                    <div className="font-semibold text-gray-900">{agent.performance.avgResponseTime || 0}s</div>
                  </div>
                </div>
              )}

              <div className="text-xs text-gray-500 pt-2 border-t">
                Last activity: {formatTime(agent.lastActivity)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {agents.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-500">No agents found</div>
          <p className="text-sm text-gray-400 mt-2">Agents will appear here when they are created and running</p>
        </div>
      )}
    </div>
  );
} 