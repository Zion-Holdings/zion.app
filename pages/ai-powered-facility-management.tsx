import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

interface Facility {
  id: string;
  name: string;
  type: string;
  location: string;
  size: number;
  capacity: number;
  status: 'operational' | 'maintenance' | 'offline' | 'emergency';
  lastInspection: string;
  nextMaintenance: string;
  energyEfficiency: number;
  occupancyRate: number;
  aiInsights: {
    riskScore: number;
    recommendation: string;
    trend: 'improving' | 'stable' | 'declining';
  };
}

interface Equipment {
  id: string;
  facilityId: string;
  name: string;
  type: string;
  status: 'operational' | 'maintenance' | 'offline' | 'repair';
  lastMaintenance: string;
  nextMaintenance: string;
  efficiency: number;
  age: number;
  criticality: 'low' | 'medium' | 'high';
}

interface MaintenanceTask {
  id: string;
  facilityId: string;
  equipmentId?: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  assignedTo: string;
  dueDate: string;
  estimatedCost: number;
}

const AIFacilityManagementPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [maintenanceTasks, setMaintenanceTasks] = useState<MaintenanceTask[]>([]);

  // Mock data
  const mockFacilities: Facility[] = [
    {
      id: '1',
      name: 'Main Office Building',
      type: 'Office',
      location: 'Downtown Business District',
      size: 50000,
      capacity: 200,
      status: 'operational',
      lastInspection: '2024-01-15',
      nextMaintenance: '2024-04-15',
      energyEfficiency: 85,
      occupancyRate: 92,
      aiInsights: {
        riskScore: 15,
        recommendation: 'Excellent facility performance, consider energy optimization',
        trend: 'improving'
      }
    },
    {
      id: '2',
      name: 'Manufacturing Plant A',
      type: 'Manufacturing',
      location: 'Industrial Zone',
      size: 150000,
      capacity: 500,
      status: 'operational',
      lastInspection: '2024-01-10',
      nextMaintenance: '2024-03-20',
      energyEfficiency: 78,
      occupancyRate: 88,
      aiInsights: {
        riskScore: 25,
        recommendation: 'Monitor equipment efficiency, schedule preventive maintenance',
        trend: 'stable'
      }
    },
    {
      id: '3',
      name: 'Data Center',
      type: 'Technology',
      location: 'Tech Campus',
      size: 25000,
      capacity: 100,
      status: 'operational',
      lastInspection: '2024-01-20',
      nextMaintenance: '2024-05-10',
      energyEfficiency: 92,
      occupancyRate: 95,
      aiInsights: {
        riskScore: 8,
        recommendation: 'High-performance facility, consider expansion',
        trend: 'improving'
      }
    }
  ];

  const mockEquipment: Equipment[] = [
    {
      id: '1',
      facilityId: '1',
      name: 'HVAC System',
      type: 'Climate Control',
      status: 'operational',
      lastMaintenance: '2024-01-15',
      nextMaintenance: '2024-04-15',
      efficiency: 88,
      age: 3,
      criticality: 'high'
    },
    {
      id: '2',
      facilityId: '1',
      name: 'Security System',
      type: 'Security',
      status: 'operational',
      lastMaintenance: '2024-01-10',
      nextMaintenance: '2024-03-10',
      efficiency: 95,
      age: 2,
      criticality: 'high'
    },
    {
      id: '3',
      facilityId: '2',
      name: 'Production Line 1',
      type: 'Manufacturing',
      status: 'operational',
      lastMaintenance: '2024-01-05',
      nextMaintenance: '2024-02-15',
      efficiency: 82,
      age: 5,
      criticality: 'high'
    }
  ];

  const mockMaintenanceTasks: MaintenanceTask[] = [
    {
      id: '1',
      facilityId: '1',
      equipmentId: '1',
      title: 'HVAC System Inspection',
      description: 'Routine inspection and filter replacement for main office HVAC system',
      priority: 'medium',
      status: 'pending',
      assignedTo: 'John Smith',
      dueDate: '2024-02-15',
      estimatedCost: 500
    },
    {
      id: '2',
      facilityId: '2',
      equipmentId: '3',
      title: 'Production Line Maintenance',
      description: 'Preventive maintenance for production line equipment',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'Mike Johnson',
      dueDate: '2024-02-10',
      estimatedCost: 1500
    },
    {
      id: '3',
      facilityId: '3',
      title: 'Data Center Security Audit',
      description: 'Comprehensive security audit for data center facility',
      priority: 'critical',
      status: 'pending',
      assignedTo: 'Sarah Wilson',
      dueDate: '2024-02-20',
      estimatedCost: 2000
    }
  ];

  useEffect(() => {
    setFacilities(mockFacilities);
    setEquipment(mockEquipment);
    setMaintenanceTasks(mockMaintenanceTasks);
  }, []);

  const generateFacilityReport = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-facility-management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'generate_report',
          facilities: facilities,
          equipment: equipment,
          maintenanceTasks: maintenanceTasks
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Facility report generated:', data);
      }
    } catch (error) {
      console.error('Error generating facility report:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportFacilityData = () => {
    const data = {
      facilities: facilities,
      equipment: equipment,
      maintenanceTasks: maintenanceTasks
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'facility-management-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getRiskColor = (riskScore: number) => {
    if (riskScore <= 15) return 'text-green-400';
    if (riskScore <= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'offline': return 'bg-gray-100 text-gray-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Head>
        <title>AI Facility Management - Zion</title>
        <meta name="description" content="Comprehensive AI-powered facility management system with equipment tracking, maintenance scheduling, and facility analytics." />
        <meta name="keywords" content="facility management, equipment management, maintenance scheduling, facility analytics, AI facility management, Zion" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Facility Management</span>
                </h1>
                <p className="text-gray-300 mt-2">
                  Intelligent facility management, equipment tracking, and maintenance optimization
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={generateFacilityReport}
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? 'Generating...' : 'Generate Report'}
                </button>
                <button
                  onClick={exportFacilityData}
                  className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'facilities', label: 'Facilities', icon: '🏢' },
              { id: 'equipment', label: 'Equipment', icon: '⚙️' },
              { id: 'maintenance', label: 'Maintenance', icon: '🔧' },
              { id: 'analytics', label: 'Analytics', icon: '📈' },
              { id: 'alerts', label: 'Alerts', icon: '⚠️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Facilities</p>
                      <p className="text-3xl font-bold text-white">{facilities.length}</p>
                    </div>
                    <div className="text-3xl">🏢</div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm">
                      <span className="text-green-400">+8%</span>
                      <span className="text-gray-400 ml-2">from last month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Equipment</p>
                      <p className="text-3xl font-bold text-white">{equipment.filter(e => e.status === 'operational').length}</p>
                    </div>
                    <div className="text-3xl">⚙️</div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm">
                      <span className="text-green-400">+5%</span>
                      <span className="text-gray-400 ml-2">from last month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Pending Tasks</p>
                      <p className="text-3xl font-bold text-white">{maintenanceTasks.filter(t => t.status === 'pending').length}</p>
                    </div>
                    <div className="text-3xl">🔧</div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm">
                      <span className="text-red-400">+12%</span>
                      <span className="text-gray-400 ml-2">from last month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Energy Efficiency</p>
                      <p className="text-3xl font-bold text-white">85%</p>
                    </div>
                    <div className="text-3xl">⚡</div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm">
                      <span className="text-green-400">+3%</span>
                      <span className="text-gray-400 ml-2">from last month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Facility Status</h3>
                  <div className="space-y-4">
                    {facilities.map((facility) => (
                      <div key={facility.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">{facility.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-white font-medium">{facility.name}</p>
                            <p className="text-gray-400 text-sm">{facility.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(facility.status)}`}>
                            {facility.status}
                          </span>
                          <p className="text-sm text-gray-400 mt-1">Efficiency: {facility.energyEfficiency}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Maintenance Alerts</h3>
                  <div className="space-y-4">
                    {maintenanceTasks.filter(t => t.priority === 'high' || t.priority === 'critical').slice(0, 3).map((task) => (
                      <div key={task.id} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{task.title}</h4>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            task.priority === 'critical' ? 'bg-red-100 text-red-800' :
                            task.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{task.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Due: {task.dueDate}</span>
                          <span className="text-white">${task.estimatedCost}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Facility</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Efficiency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Risk Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {facilities.map((facility) => (
                        <tr key={facility.id} className="hover:bg-white/5">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-white">{facility.name}</div>
                              <div className="text-sm text-gray-400">{facility.location}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{facility.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(facility.status)}`}>
                              {facility.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                                  style={{ width: `${facility.energyEfficiency}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-white">{facility.energyEfficiency}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-sm font-medium ${getRiskColor(facility.aiInsights.riskScore)}`}>
                              {facility.aiInsights.riskScore}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-400 hover:text-blue-300 mr-3">View</button>
                            <button className="text-green-400 hover:text-green-300 mr-3">Edit</button>
                            <button className="text-red-400 hover:text-red-300">Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'equipment' && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Equipment</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Efficiency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Criticality</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Next Maintenance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {equipment.map((item) => (
                        <tr key={item.id} className="hover:bg-white/5">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{item.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                                  style={{ width: `${item.efficiency}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-white">{item.efficiency}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              item.criticality === 'high' ? 'bg-red-100 text-red-800' :
                              item.criticality === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {item.criticality}
                            </span>
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

          {activeTab === 'maintenance' && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Task</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Priority</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Assigned To</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Due Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {maintenanceTasks.map((task) => (
                        <tr key={task.id} className="hover:bg-white/5">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-white">{task.title}</div>
                              <div className="text-sm text-gray-400">{task.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              task.priority === 'critical' ? 'bg-red-100 text-red-800' :
                              task.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {task.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              task.status === 'completed' ? 'bg-green-100 text-green-800' :
                              task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                              task.status === 'overdue' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {task.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.assignedTo}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{task.dueDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${task.estimatedCost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Energy Analytics</h3>
                  <div className="space-y-4">
                    {facilities.map((facility) => (
                      <div key={facility.id} className="p-4 bg-white/5 rounded-lg">
                        <h4 className="text-white font-medium mb-2">{facility.name}</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Efficiency</span>
                            <span className="text-white">{facility.energyEfficiency}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Occupancy</span>
                            <span className="text-white">{facility.occupancyRate}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Risk Score</span>
                            <span className={`text-sm ${getRiskColor(facility.aiInsights.riskScore)}`}>
                              {facility.aiInsights.riskScore}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Equipment Performance</h3>
                  <div className="space-y-4">
                    {equipment.map((item) => (
                      <div key={item.id} className="p-4 bg-white/5 rounded-lg">
                        <h4 className="text-white font-medium mb-2">{item.name}</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Efficiency</span>
                            <span className="text-white">{item.efficiency}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Age</span>
                            <span className="text-white">{item.age} years</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Criticality</span>
                            <span className={`text-sm ${
                              item.criticality === 'high' ? 'text-red-400' :
                              item.criticality === 'medium' ? 'text-yellow-400' :
                              'text-green-400'
                            }`}>
                              {item.criticality}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Maintenance Trends</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Task Distribution</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Pending</span>
                          <span className="text-yellow-400">{maintenanceTasks.filter(t => t.status === 'pending').length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">In Progress</span>
                          <span className="text-blue-400">{maintenanceTasks.filter(t => t.status === 'in-progress').length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Completed</span>
                          <span className="text-green-400">{maintenanceTasks.filter(t => t.status === 'completed').length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Overdue</span>
                          <span className="text-red-400">{maintenanceTasks.filter(t => t.status === 'overdue').length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Active Alerts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⚠️</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Critical Maintenance Due</p>
                        <p className="text-gray-400 text-sm">Production Line 1 maintenance overdue by 5 days</p>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 text-sm">Review</button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⚠️</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Energy Efficiency Alert</p>
                        <p className="text-gray-400 text-sm">Manufacturing Plant A energy efficiency below target</p>
                      </div>
                    </div>
                    <button className="text-yellow-400 hover:text-yellow-300 text-sm">Review</button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">ℹ️</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Preventive Maintenance</p>
                        <p className="text-gray-400 text-sm">HVAC System maintenance scheduled for next week</p>
                      </div>
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm">Review</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIFacilityManagementPage; 