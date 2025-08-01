import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface AdminUser {
  username: string;
  password: string;
  role: string;
}

interface AgentStatus {
  id: string;
  type: string;
  status: string;
  lastActivity: string;
}

interface SystemHealth {
  timestamp: string;
  activeAgents: number;
  totalAgents: number;
  systemHealth: string;
  memoryUsage: any;
  uptime: number;
}

interface AdminTool {
  name: string;
  description: string;
  status: string;
  lastExecuted: string;
}

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState({
    agents: [] as AgentStatus[],
    systemHealth: {} as SystemHealth,
    adminTools: [] as AdminTool[],
    webResearch: [] as any[],
    evolutionStatus: '',
    lastUpdate: ''
  });

  const adminUser: AdminUser = {
    username: 'kleber@ziontechgroup.com',
    password: 'Tw2.R5u&2!sDfeW',
    role: 'admin'
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    // In a real implementation, this would check against a secure authentication system
    // For now, we'll simulate authentication
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      loadAdminData();
    } else {
      setIsLoading(false);
    }
  };

  const handleLogin = (username: string, password: string) => {
    if (username === adminUser.username && password === adminUser.password) {
      localStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      loadAdminData();
    } else {
      alert('Invalid credentials');
    }
  };

  const loadAdminData = async () => {
    try {
      // Simulate loading admin data
      const mockData = {
        agents: [
          { id: 'agent-1', type: 'AdminAgentCreator', status: 'active', lastActivity: new Date().toISOString() },
          { id: 'agent-2', type: 'AdminToolGenerator', status: 'active', lastActivity: new Date().toISOString() },
          { id: 'agent-3', type: 'AdminStatusMonitor', status: 'active', lastActivity: new Date().toISOString() },
          { id: 'agent-4', type: 'AdminWebResearcher', status: 'active', lastActivity: new Date().toISOString() },
          { id: 'agent-5', type: 'AdminEvolutionAgent', status: 'active', lastActivity: new Date().toISOString() }
        ],
        systemHealth: {
          timestamp: new Date().toISOString(),
          activeAgents: 5,
          totalAgents: 5,
          systemHealth: 'healthy',
          memoryUsage: { heapUsed: '45MB', heapTotal: '60MB' },
          uptime: 3600
        },
        adminTools: [
          { name: 'ProjectStatusDashboard', description: 'Real-time project status monitoring', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'AgentPerformanceMonitor', description: 'Monitor agent performance and efficiency', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'SystemHealthChecker', description: 'Comprehensive system health analysis', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'AutomationAnalyzer', description: 'Analyze automation patterns and efficiency', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'TrendPredictor', description: 'Predict future trends and requirements', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'SecurityAuditor', description: 'Security analysis and threat detection', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'BackupManager', description: 'Automated backup and recovery management', status: 'active', lastExecuted: new Date().toISOString() },
          { name: 'AnalyticsVisualizer', description: 'Advanced analytics and visualization tools', status: 'active', lastExecuted: new Date().toISOString() }
        ],
        webResearch: [
          { topic: 'AI admin tools 2024', findings: ['Latest developments', 'New tools', 'Best practices'], timestamp: new Date().toISOString() },
          { topic: 'autonomous agent systems', findings: ['System architectures', 'Performance optimization', 'Scalability patterns'], timestamp: new Date().toISOString() },
          { topic: 'project management automation', findings: ['Automation frameworks', 'Integration patterns', 'Efficiency metrics'], timestamp: new Date().toISOString() }
        ],
        evolutionStatus: 'continuous',
        lastUpdate: new Date().toISOString()
      };

      setAdminData(mockData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading admin data:', error);
      setIsLoading(false);
    }
  };

  const executeTool = async (toolName: string) => {
    console.log(`Executing tool: ${toolName}`);
    // In a real implementation, this would call the actual tool
    alert(`${toolName} executed successfully`);
  };

  const createNewAgent = async () => {
    console.log('Creating new agent...');
    // In a real implementation, this would trigger agent creation
    alert('New agent creation initiated');
  };

  const evolveSystem = async () => {
    console.log('Evolving system...');
    // In a real implementation, this would trigger system evolution
    alert('System evolution initiated');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Admin Dashboard...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion Tech Group</title>
        <meta name="description" content="Admin dashboard for autonomous agents and system management" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-400">Autonomous System Management</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Admin: {adminUser.username}</span>
                <button
                  onClick={() => {
                    localStorage.removeItem('adminAuth');
                    setIsAuthenticated(false);
                  }}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* System Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Active Agents</h3>
              <p className="text-3xl font-bold text-green-400">{adminData.systemHealth.activeAgents}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Agents</h3>
              <p className="text-3xl font-bold text-blue-400">{adminData.systemHealth.totalAgents}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">System Health</h3>
              <p className={`text-3xl font-bold ${adminData.systemHealth.systemHealth === 'healthy' ? 'text-green-400' : 'text-yellow-400'}`}>
                {adminData.systemHealth.systemHealth}
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Uptime</h3>
              <p className="text-3xl font-bold text-purple-400">{Math.floor(adminData.systemHealth.uptime / 3600)}h</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="flex space-x-4">
              <button
                onClick={createNewAgent}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
              >
                Create New Agent
              </button>
              <button
                onClick={evolveSystem}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
              >
                Evolve System
              </button>
              <button
                onClick={() => loadAdminData()}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md"
              >
                Refresh Data
              </button>
            </div>
          </div>

          {/* Agents Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Active Agents</h2>
              <div className="space-y-3">
                {adminData.agents.map((agent) => (
                  <div key={agent.id} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <div>
                      <p className="font-medium">{agent.type}</p>
                      <p className="text-sm text-gray-400">Last activity: {new Date(agent.lastActivity).toLocaleString()}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${agent.status === 'active' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                      {agent.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Tools */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Admin Tools</h2>
              <div className="space-y-3">
                {adminData.adminTools.map((tool) => (
                  <div key={tool.name} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <div>
                      <p className="font-medium">{tool.name}</p>
                      <p className="text-sm text-gray-400">{tool.description}</p>
                    </div>
                    <button
                      onClick={() => executeTool(tool.name)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs"
                    >
                      Execute
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Web Research */}
          <div className="bg-gray-800 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4">Web Research Findings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {adminData.webResearch.map((research, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded">
                  <h3 className="font-medium mb-2">{research.topic}</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {research.findings.map((finding: any, idx: number) => (
                      <li key={idx}>• {finding}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(research.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-gray-800 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Evolution Status</h3>
                <p className="text-green-400">{adminData.evolutionStatus}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Last Update</h3>
                <p className="text-gray-400">{new Date(adminData.lastUpdate).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

const LoginForm: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard; 