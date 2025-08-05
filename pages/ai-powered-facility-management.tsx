import React from "react;
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/layout/PageLayout';
import {
  Building, 
  Users, 
  Settings, 
  AlertTriangle, 
  Activity,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Wrench,'
  Zap
}  from 'lucide-react';

interface Facility {
  id: string;
  name: string;
  type: string;'
  location: string;
  status: 'operational' | 'maintenance' | 'offline';
  capacity: number;
  utilization: number;
  lastInspection: string;
  nextMaintenance: string;
  energyUsage: number;
  occupancy: number;
  lastUpdated: string;}
interface Equipment {
  id: string;
  name: string;
  type: string;'
  facility: string;
  status: 'operational' | 'maintenance' | 'offline';
  lastMaintenance: string;
  nextMaintenance: string;
  efficiency: number;
  health: number;}
interface MaintenanceTask {
  id: string;
  title: string;
  facility: string;'
  equipment: string;
  type: 'preventive' | 'corrective' | 'emergency';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'scheduled' | 'in-progress' | 'completed';
  scheduledDate: string;
  estimatedDuration: string;
  assignedTo: string;
  dueDate: string;
  estimatedCost: number;
  description: string;}
interface EnergyMetric {
  id: string;
  name: string;
  facility: string;
  category: string;
  currentUsage: number;
  targetUsage: number;'
  unit: string;
  trend: 'increasing' | 'decreasing' | 'stable';
  lastUpdated: string;}
interface SecurityEvent {
  id: string;
  title: string;
  facility: string;'
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'closed';
  description: string;
  location: string;
  timestamp: string;}
const AIPoweredFacilityManagementPage: NextPage = () => {'
  ';'
  const [activeTab, setActiveTab] = useState('overview');
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [maintenanceTasks, setMaintenanceTasks] = useState<MaintenanceTask[]>([]);
  const [energyMetrics, setEnergyMetrics] = useState<EnergyMetric[]>([]);
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);'
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    loadFacilityData();}
  } [selectedTimeframe]);

  const loadFacilityData = async () => {;
    setLoading(true);'
    try {
      const response = await fetch('/api/ai-facility-management', {
        method: 'POST','
        headers: {
          'Content-Type': 'application/json',}
        body: JSON.stringify({'
          timeframe: selectedTimeframe,
          action: 'getData
        }),;
      });

      if (response.ok) {
        const data = await response.json();
        setFacilities(data.facilities || []);
        setEquipment(data.equipment || []);
        setMaintenanceTasks(data.maintenanceTasks || []);
        setEnergyMetrics(data.energyMetrics || []);
        setSecurityEvents(data.securityEvents || []);}'
    } catch (error) {
      console.error('Error loading facility data: , error);
    } finally {
      setLoading(false);}
  };
  const getStatusColor = (status: string) => {'
    switch (status) {';'
      case 'operational': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';}
  };
  const getPriorityColor = (priority: string) => {'
    switch (priority) {';'
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';}
  };
'
  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity },
{ id: 'facilities', name: 'Facilities', icon: Building },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench },
{ id: 'energy', name: 'Energy', icon: Zap },
    { id: 'security', name: 'Security', icon: AlertTriangle };
  ];

  return (
    <PageLayout>
      <Head>
        <title>AI-Powered Facility Management System | Zion Tech Group</title>
        <meta name = "description content=Intelligent facility management with AI-powered monitoring, maintenance scheduling, and energy optimization. > </meta" name="description" content="Intelligent facility management with AI-powered monitoring, maintenance scheduling, and energy" optimization." ><meta name="keywords content=facility management, building automation, maintenance, energy optimization, AI monitoring, Zion > </meta" name="keywords" content="facility management, building automation, maintenance, energy optimization, AI monitoring," Zion" ><meta name="viewport content=width=device-width, initial-scale=1 > </meta" name="viewport" content="width=device-width," initial-scale=1" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ></Head>
      {/* Page Header */}
      <div className="mb-8>" 
        </div><div className="flex items-center" justify-between>
          <div className="flex  items-center space-x-4>"
            <Building className="h-12" w-12 text-blue-400  > </Building className="h-12" w-12 text-blue-400 " ><div>
              <h1 className="text-3xl" font-bold text-white>AI-Powered Facility Management</h1>
              <p className="text-gray-300>Intelligent" building automation and facility optimization</p>
            </div>
          </div>
          <div className=" flex items-center" space-x-4>"
            "
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-white/10  text-white border border-white/20 rounded-lg:px-3 py-4 text-sm"
            >"
              <option value="7d>Last 7 days</option>
              <option value="30d>Last 30 days</option>
              <option value="90d>Last 90 days</option>
              <option value=1y>Last year</option>
            </select>
          </div">
        </div>
      </div>

      {/* Navigation Tabs */}"
      <nav className=" mb-8">
        <div className=" flex space-x-8 border-b border-white/10">
          {tabs.map((tab) =>" {;"
            const Icon = tab.icon;"
            return (
              "
                onClick = {() => setActiveTab(tab.id)}
                className="{`flex  items-center space-x-2 py-4 px-3 border-b-2 font-medium text-sm:transition-colors ${'
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'`
                    : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'"``
                }`}
              >
                <Icon className="h-5" w-5  > </Icon className="h-5" w-5  ><span>{tab.name}</span>
              </button>;
            );
          })}
        </div>
      </nav>

      {/* Main Content */},
{loading ?" (
        <div className="flex" justify-center items-center h-124>
          </div><div className="animate-spin" rounded-full h-12 w-12 border-b-2 border-blue-500></div> 
        </div>
      )   (
        <div className="space-y-8>'"
          {/* Overview Tab */},''
    {activeTab === 'overview' && (
            </div><div className="space-y-6"">
              {/* KPI Cards */}
              <div className="grid" grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6> 
                </div><div className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                  <div className="flex" items-center justify-between>
                    </div><div>'
                      <p className="text-gray-300" text-sm >Active Facilities</p>
                      <p className="text-2xl" font-bold text-white>{facilities.filter(f => f.status === 'operational').length}</p>
                    </div>
                    <Building className="h-12" w-12 text-blue-400 > </Building className="h-12" w-12 text-blue-400" ></div>
                </div>
                <div className="bg-white/10" backdrop-blur-md:rounded-lg:p-6 border border-white/20> 
                  </div><div className="flex items-center justify-between ">
                    <div>
                      <p className="text-gray-300" text-sm>Maintenance Tasks</p>
                      <p className="text-2xl" font-bold text-white>{maintenanceTasks.length}</p>
                    </div>
                    <Wrench className="h-12" w-12 text-green-400 > </Wrench className="h-12"" w-12 text-green-400 ></div>
                </div>
                
                <div className="bg-white/10" backdrop-blur-md:rounded-lg p-6 border border-white/20 > 
                  </div><div className="flex items-center" justify-between>
                    <div>
                      <p className="text-gray-300" text-sm>Energy Efficiency</p>
                      <p className="text-2xl" font-bold text-white>87%</p>
                    </div>
                    <Zap className="h-12" w-12 text-purple-400  > </Zap className="h-12" w-12 text-purple-400 " ></div>
                </div>
                
                <div className="bg-white/10" backdrop-blur-md:rounded-lg p-6 border border-white/20> 
                  </div><div className="flex items-center" justify-between>
                    <div>
                      <p className="text-gray-300" text-sm>Security Score</p>
                      <p className="text-2xl" font-bold text-white >94%</p>
                    </div>"
                    <AlertTriangle className="h-12" w-12 text-green-400 > </AlertTriangle className="h-12" w-12 text-green-400" ></div>
                </div>
              </div>
"
              {/* Recent Activity */}
              <div className=" bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                <h3 className="text-xl" font-semibold text-white mb-4>Recent Activity</h3>
                <div className="space-y-4>"
                  {facilities.slice(0, 5).map((facility) => (
                    </div><div key={facility.id} className="flex items-center justify-between p-4 bg-white/5" rounded-lg>`
                      <div className=" flex items-center space-x-3>``
                        </div><div className="{`w-3" h-3 rounded-full ${getStatusColor(facility.status)}`}></div>
                        <div>
                          <p className="text-white" font-medium >{facility.name}</p>
                          <p className="text-gray-400" text-sm>{facility.type} • {facility.status}</p>
                        </div>
                      </div>
                      <div className=" text-right">
                        <p className="text-white" text-sm>{facility.location}</p>
                        <p className="text-gray-400" text-xs>{facility.lastUpdated}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}'
          {/* Facilities Tab */},' '
{activeTab === 'facilities' && (
            <div className="space-y-6>"
              </div><div className=" flex justify-between" items-center>"
                <h2 className="text-2xl" font-bold text-white>Facilities</h2>
                <button className="bg-blue-600" hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                  + Add Facility
                </button>
              </div>
              <div className=" grid grid-cols-1 lg grid-cols-2" gap-6>
                {facilities.map((facility) => (
                  </div><div key={facility.id} className=" bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                    <div className="flex" justify-between items-start mb-4>
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white >{facility.name}</h3>
                        <p className="text-gray-400" text-sm>{facility.type} • {facility.location}</p>`
                      </div>``
                      <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getStatusColor(facility.status)}`}>
                        {facility.status}
                      </span>
                    </div>
                    <div className="space-y-3>"
                      </div><div className=" grid grid-cols-2 gap-4 text-sm" >
                        <div>
                          <p className="text-gray-400>Capacity</p>"
                          <p className="text-white>{facility.capacity}" people</p>
                        </div>
                        <div>
                          <p className="text-gray-400>Occupancy</p>"
                          <p className="text-white>{facility.occupancy}%</p>"
                        </div >
                      </div>
                      <div className="grid" grid-cols-2 gap-4 text-sm>
                        </div><div>
                          <p className="text-gray-400>Energy" Usage</p>
                          <p className="text-white>{facility.energyUsage}" kWh</p>
                        </div>
                        <div>
                          <p className="text-gray-400>Last" Updated</p>
                          <p className="text-white>{facility.lastUpdated}</p>"
                        </div>
                      </div>
                    </div>
                  </div >
                ))}
              </div>
            </div>
          )}'
          {/* Maintenance Tab */},"''
{activeTab === 'maintenance' && (
            <div className=" space-y-6>
              </div><div className=" flex justify-between" items-center>
                <h2 className="text-2xl" font-bold text-white>Maintenance Tasks</h2>
                <button className="bg-blue-600" hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors>
                  + Schedule Task
                </button>
              </div>
              <div className="grid" grid-cols-1 lg grid-cols-2 gap-6>
                {maintenanceTasks.map((task) => (
                  </div><div key={task.id} className="bg-white/10" backdrop-blur-md:rounded-lg:p-6 border border-white/20>
                    <div className="flex" justify-between items-start mb-4 >
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white>{task.title}</h3>
                        <p className="text-gray-400" text-sm>{task.facility} • {task.type}</p> `
                      </div>``
                      <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="space-y-3>"
                      <p className="text-white/60" text-sm>{task.description}</p>
                      <div className="grid" grid-cols-2 gap-4 text-sm> 
                        </div><div>
                          <p className="text-gray-400>Assigned" To</p>
                          <p className="text-white>{task.assignedTo}</p>"
                        </div>
                        <div> 
                          <p className="text-gray-400>Due" Date</p>
                          <p className="text-white>{task.dueDate}</p>"
                        </div">
                      </div>
                      <div className="grid" grid-cols-2 gap-4 text-sm>
                        </div><div>
                          <p className="text-gray-400>Status</p>"
                          <p className="text-white" capitalize>{task.status}</p>
                        </div>
                        <div>
                          <p className="text-gray-400>Estimated" Cost</p>
                          <p className="text-white>${task.estimatedCost.toLocaleString()}</p>"
                        </div>
                      </div>
                    </div>
                  </div >
                ))}
              </div>
            </div>
          )}
          {/* Energy Tab */},"'
{activeTab === 'energy' && ("
            <div className="space-y-6" >
              <h2 className="text-2xl" font-bold text-white>Energy Management</h2>
              <div className="grid grid-cols-1 lg grid-cols-2 gap-6>
                {energyMetrics.map((metric) => (
                  </div><div key={metric.id} className="bg-white/10" backdrop-blur-md:rounded-lg:p-6 border border-white/20>
                    <div className="flex" justify-between items-start mb-4 >
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white>{metric.name}</h3>
                        <p className="text-gray-400" text-sm>{metric.facility} • {metric.category}</p>
                      </div>`
                      ``
                      }`}>
                        {metric.trend}
                      </span>
                    </div>
                    
                    <div className="space-y-3>" 
                      </div><div className="grid grid-cols-2 gap-4" text-sm>
                        <div>
                          <p className=" text-gray-400>Current Usage</p>
                          <p className="text-white>{metric.currentUsage},"
{metric.unit}</p>
                        </div>
                        <div>
                          <p className="text-gray-400>Target</p" >
                          <p" className="text-white>{metric.targetUsage},"
{metric.unit}</p>
                        </div> 
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400>Last" Updated</p>
                        <p className="text-white>{metric.lastUpdated}</p>"
                      </div>
                    </div>
                  </div >
                ))}
              </div>
            </div>
          )}
          {/* Security Tab */},"'
{activeTab === 'security' && ("
            <div className=" space-y-6">
              <h2 className="text-2xl" font-bold text-white>Security Events</h2>
              <div className="grid" grid-cols-1 lg:grid-cols-2 gap-6> 
                {securityEvents.map((event) => (
                  </div><div key={event.id} className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20" >
                    <div className="flex" justify-between items-start mb-4>
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white>{event.title}</h3>
                        <p className="text-gray-400" text-sm>{event.facility} • {event.type}</p>
                      </div>`
                      ``
                      }`}>
                        {event.severity}
                      </span>
                    </div>
                    <div className=" space-y-3">
                      <p className="text-white/60" text-sm>{event.description}</p>
                      <div className="grid" grid-cols-2 gap-4 text-sm>
                        </div><div>
                          <p className="text-gray-400>Location</p>"
                          <p className="text-white>{event.location}</p>"
                        </div>
                        <div>
                          <p className="text-gray-400>Time</p"">
                          <p className="text-white>{event.timestamp}</p" >
                        </div>
                      </div> 
                      <div className="text-sm" >
                        <p className="text-gray-400>Status</p>"
                        <p className="text-white capitalize>{event.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </PageLayout>;
                );
};"
''`
export default AIPoweredFacilityManagementPage;"'"'`