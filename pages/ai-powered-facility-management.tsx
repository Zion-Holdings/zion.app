import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Building2, 
  Wrench, 
  Calendar, 
  BarChart3, 
  AlertTriangle, 
  Settings,
  Users,
  MapPin,
  Activity,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

interface Facility {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'operational' | 'maintenance' | 'offline';
  capacity: number;
  utilization: number;
  lastInspection: string;
  nextMaintenance: string;
}

interface Equipment {
  id: string;
  name: string;
  type: string;
  facility: string;
  status: 'operational' | 'maintenance' | 'offline';
  lastMaintenance: string;
  nextMaintenance: string;
  efficiency: number;
  health: number;
}

interface MaintenanceTask {
  id: string;
  title: string;
  facility: string;
  equipment: string;
  type: 'preventive' | 'corrective' | 'emergency';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'scheduled' | 'in-progress' | 'completed';
  scheduledDate: string;
  estimatedDuration: string;
  assignedTo: string;
}

const AIPoweredFacilityManagementPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [maintenanceTasks, setMaintenanceTasks] = useState<MaintenanceTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    loadFacilityData();
  }, [selectedTimeframe]);

  const loadFacilityData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-facility-management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeframe: selectedTimeframe,
          action: 'getData'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setFacilities(data.facilities || []);
        setEquipment(data.equipment || []);
        setMaintenanceTasks(data.maintenanceTasks || []);
      }
    } catch (error) {
      console.error('Error loading facility data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-500';
      case 'maintenance': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'facilities', name: 'Facilities', icon: Building2 },
    { id: 'equipment', name: 'Equipment', icon: Wrench },
    { id: 'maintenance', name: 'Maintenance', icon: Calendar },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>AI-Powered Facility Management System | Zion Tech Group</title>
        <meta name="description" content="Comprehensive facility management with AI-powered maintenance scheduling, equipment tracking, and facility analytics." />
        <meta name="keywords" content="facility management, maintenance, equipment tracking, AI analytics, building management, Zion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                <Building2 className="h-8 w-8" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">AI-Powered Facility Management</h1>
                <p className="text-gray-300">Intelligent facility operations and maintenance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-2 text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Total Facilities</p>
                        <p className="text-2xl font-bold text-white">{facilities.length}</p>
                      </div>
                      <Building2 className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Active Equipment</p>
                        <p className="text-2xl font-bold text-white">
                          {equipment.filter(e => e.status === 'operational').length}
                        </p>
                      </div>
                      <Wrench className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Pending Tasks</p>
                        <p className="text-2xl font-bold text-white">
                          {maintenanceTasks.filter(t => t.status === 'scheduled').length}
                        </p>
                      </div>
                      <Calendar className="h-8 w-8 text-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">Avg. Efficiency</p>
                        <p className="text-2xl font-bold text-white">
                          {Math.round(equipment.reduce((acc, e) => acc + e.efficiency, 0) / Math.max(equipment.length, 1))}%
                        </p>
                      </div>
                      <Activity className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Maintenance</h3>
                    <div className="space-y-3">
                      {maintenanceTasks.slice(0, 5).map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white font-medium">{task.title}</p>
                            <p className="text-gray-300 text-sm">{task.facility} - {task.equipment}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Facility Status</h3>
                    <div className="space-y-3">
                      {facilities.slice(0, 5).map((facility) => (
                        <div key={facility.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white font-medium">{facility.name}</p>
                            <p className="text-gray-300 text-sm">{facility.location}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(facility.status)}`}>
                            {facility.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Facilities Tab */}
            {activeTab === 'facilities' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Facility Management</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add Facility
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Facility</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Location</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Utilization</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Next Maintenance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {facilities.map((facility) => (
                          <tr key={facility.id} className="hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{facility.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{facility.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{facility.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(facility.status)}`}>
                                {facility.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-blue-500 h-2 rounded-full" 
                                    style={{ width: `${facility.utilization}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-300">{facility.utilization}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{facility.nextMaintenance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Equipment Tab */}
            {activeTab === 'equipment' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Equipment Tracking</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add Equipment
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Equipment</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Facility</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Efficiency</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Health</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Next Maintenance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {equipment.map((item) => (
                          <tr key={item.id} className="hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{item.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.facility}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${item.efficiency}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-300">{item.efficiency}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                                  <div 
                                    className={`h-2 rounded-full ${item.health > 70 ? 'bg-green-500' : item.health > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${item.health}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-300">{item.health}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.nextMaintenance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Maintenance Tab */}
            {activeTab === 'maintenance' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Maintenance Scheduling</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Schedule Task
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Task</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Facility</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Equipment</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Priority</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Scheduled</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Assigned To</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {maintenanceTasks.map((task) => (
                          <tr key={task.id} className="hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-white">{task.title}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.facility}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.equipment}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                task.status === 'completed' ? 'bg-green-100 text-green-800' :
                                task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {task.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.scheduledDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.assignedTo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Facility Utilization</h3>
                    <div className="space-y-4">
                      {facilities.map((facility) => (
                        <div key={facility.id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">{facility.name}</span>
                            <span className="text-white">{facility.utilization}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${facility.utilization}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Equipment Health</h3>
                    <div className="space-y-4">
                      {equipment.slice(0, 5).map((item) => (
                        <div key={item.id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300">{item.name}</span>
                            <span className="text-white">{item.health}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                item.health > 70 ? 'bg-green-500' : 
                                item.health > 40 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${item.health}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <h4 className="font-semibold text-blue-300 mb-2">Predictive Maintenance</h4>
                      <p className="text-gray-300 text-sm">AI predicts 3 equipment failures in the next 30 days. Schedule preventive maintenance to avoid downtime.</p>
                    </div>
                    <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                      <h4 className="font-semibold text-green-300 mb-2">Efficiency Optimization</h4>
                      <p className="text-gray-300 text-sm">Facility A shows 15% efficiency improvement potential through equipment upgrades and process optimization.</p>
                    </div>
                    <div className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <h4 className="font-semibold text-yellow-300 mb-2">Resource Allocation</h4>
                      <p className="text-gray-300 text-sm">Redistribute maintenance staff to prioritize high-priority equipment in Facility B.</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <h4 className="font-semibold text-purple-300 mb-2">Cost Optimization</h4>
                      <p className="text-gray-300 text-sm">Consolidate maintenance schedules to reduce operational costs by 12% while maintaining service quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Alerts Tab */}
            {activeTab === 'alerts' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Alerts & Notifications</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 text-red-400" />
                      <div>
                        <h4 className="font-semibold text-red-300">Critical Equipment Failure</h4>
                        <p className="text-gray-300 text-sm">HVAC System in Facility A has exceeded temperature thresholds. Immediate maintenance required.</p>
                        <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/20 backdrop-blur-md rounded-lg p-4 border border-yellow-500/30">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-6 w-6 text-yellow-400" />
                      <div>
                        <h4 className="font-semibold text-yellow-300">Maintenance Due</h4>
                        <p className="text-gray-300 text-sm">Generator in Facility B requires scheduled maintenance within 48 hours.</p>
                        <p className="text-gray-400 text-xs mt-1">4 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-6 w-6 text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-blue-300">Performance Alert</h4>
                        <p className="text-gray-300 text-sm">Facility C utilization has dropped below 60%. Review operational efficiency.</p>
                        <p className="text-gray-400 text-xs mt-1">6 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/20 backdrop-blur-md rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-green-400" />
                      <div>
                        <h4 className="font-semibold text-green-300">Security Update</h4>
                        <p className="text-gray-300 text-sm">All security systems in Facility D are operating normally. No issues detected.</p>
                        <p className="text-gray-400 text-xs mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">AI-Powered Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/ai-powered-hr-management" className="hover:text-white">HR Management</Link></li>
                <li><Link href="/ai-powered-vendor-management" className="hover:text-white">Vendor Management</Link></li>
                <li><Link href="/ai-powered-facility-management" className="hover:text-white">Facility Management</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-white">API Reference</Link></li>
                <li><Link href="/support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-300 text-center">&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIPoweredFacilityManagementPage; 