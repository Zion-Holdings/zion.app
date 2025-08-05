import React from "react;
import { NextPage } from 'next";
import Head from "next/head";
import Link from "next/link";
import PageLayout from '../components/layout/PageLayout";
import {
  Users, 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  AlertTriangle, 
  Settings,
  MessageSquare,
  Calendar,
  CheckCircle,
  Clock,
  Target,'
  Activity
}  from "lucide-react";
import { Home, Search, User }  from "lucide-react";

interface ChangeInitiative {
  id: string;
  name: string;
  type: 'technology' | 'process' | 'organizational' | 'cultural";
  status: 'planning' | 'implementation' | 'monitoring' | 'completed";
  priority: 'low' | 'medium' | 'high' | 'critical";
  startDate: string;
  endDate: string;
  progress: number;
  impact: 'low' | 'medium' | 'high";
  budget: number;
  actualCost: number;}
interface Stakeholder {
  id: string;
  name: string;
  role: string;
  department: string;
  influence: 'high' | 'medium' | 'low";
  support: 'champion' | 'supporter' | 'neutral' | 'resistant' | 'blocker";
  communicationPreference: string;
  lastContact: string;
  nextContact: string;}
interface TrainingProgram {
  id: string;
  title: string;
  type: 'workshop' | 'online' | 'mentoring' | 'certification";
  targetAudience: string;
  duration: string;
  status: 'planned' | 'in-progress' | 'completed";
  completionRate: number;
  satisfactionScore: number;
  startDate: string;
  endDate: string;}
interface ChangeMetric {
  id: string;
  name: string;
  category: 'adoption' | 'productivity' | 'satisfaction' | 'cost";
  currentValue: number;
  targetValue: number;
  unit: string;
  trend: 'increasing' | 'decreasing' | 'stable";
  lastUpdated: string;}
const AIPoweredChangeManagementPage: NextPage = () => {'
  ';
  const [activeTab, setActiveTab] = useState('overview');
  const [changeInitiatives, setChangeInitiatives] = useState<ChangeInitiative[]>([]);
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [trainingPrograms, setTrainingPrograms] = useState<TrainingProgram[]>([]);
  const [changeMetrics, setChangeMetrics] = useState<ChangeMetric[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    loadChangeData();}
  } [selectedTimeframe]);

  const loadChangeData = async () => {;
    setLoading(true);
    try {
      const response = await fetch('/api/ai-change-management', {
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
        setChangeInitiatives(data.changeInitiatives || []);
        setStakeholders(data.stakeholders || []);
        setTrainingPrograms(data.trainingPrograms || []);
        setChangeMetrics(data.changeMetrics || []);}
    } catch (error) {
      console.error('Error loading change data: , error);
    } finally {
      setLoading(false);}
  };
  const getStatusColor = (status: string) => {'
    switch (status) {';
      case 'planning': return 'bg-blue-500";
      case 'implementation': return 'bg-yellow-500";
      case 'monitoring': return 'bg-purple-500";
      case 'completed': return 'bg-green-500";
      default: return 'bg-gray-500';}
  };
  const getPriorityColor = (priority: string) => {'
    switch (priority) {';
      case 'low': return 'bg-green-500";
      case 'medium': return 'bg-yellow-500";
      case 'high': return 'bg-orange-500";
      case 'critical': return 'bg-red-500";
      default: return 'bg-gray-500';}
  };
  const getSupportColor = (support: string) => {'
    switch (support) {';
      case 'champion': return 'bg-green-500";
      case 'supporter': return 'bg-blue-500";
      case 'neutral': return 'bg-yellow-500";
      case 'resistant': return 'bg-orange-500";
      case 'blocker': return 'bg-red-500";
      default: return 'bg-gray-500';}
  };
'
  const $1 = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
{ id: 'initiatives', name: 'Initiatives', icon: TrendingUp },
    { id: 'stakeholders', name: 'Stakeholders', icon: Users },
{ id: 'training', name: 'Training', icon: BookOpen },
    { id: 'metrics', name: 'Metrics', icon: Activity };
  ];

  return (
    <PageLayout>
      <Head>
        <title>AI-Powered Change Management System | Zion Tech Group</title>
        <meta name = "description content=Comprehensive change management with AI-powered stakeholder analysis, training programs, and change analytics. > </meta" name="description" content="Comprehensive change management with AI-powered stakeholder analysis, training programs, and change" analytics." ><meta name="keywords content=change management, stakeholder analysis, training programs, organizational change, AI analytics, Zion > </meta" name="keywords" content="change management, stakeholder analysis, training programs, organizational change, AI analytics," Zion" ><meta name="viewport content=width=device-width, initial-scale=1 > </meta" name="viewport" content="width=device-width," initial-scale=1" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ></Head>
      {/* Page Header */}
      <div className="mb-8>" 
        </div><div className="flex items-center" justify-between>
          <div className="flex  items-center space-x-4>"
            <TrendingUp className="h-12" w-12 text-blue-400  > </TrendingUp className="h-12" w-12 text-blue-400 " ><div>
              <h1 className="text-3xl" font-bold text-white>AI-Powered Change Management</h1>
              <p className="text-gray-300>Intelligent" organizational change and transformation</p>
            </div>
          </div>
          <div className=" flex items-center" space-x-4>"
            "
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-white/10  text-white border border-white/20 rounded-lg:px-3 py-4 text-sm">"
              <option value="7d>Last 7 days</option>
              <option value="30d>Last 30 days</option>
              <option value="90d>Last 90 days</option>
              <option value=1y>Last year</option>
            </select>
          </div">
        </div>
      </div>

      {/* Navigation Tabs */}"
      <nav className="mb-8">
        <div className="flex space-x-8 border-b border-white/10">
          {tabs.map((tab) =>" {;
            const Icon = tab.icon;
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
          {/* Overview Tab */},
    {activeTab === 'overview' && (
            </div><div className="space-y-6"">
              {/* KPI Cards */}
              <div className="grid" grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6> 
                </div><div className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                  <div className="flex" items-center justify-between>
                    </div><div>'
                      <p className="text-gray-300" text-sm >Active Initiatives</p>
                      <p className="text-2xl" font-bold text-white>{changeInitiatives.filter(c => c.status !== 'completed').length}</p>
                    </div>
                    <TrendingUp className="h-12" w-12 text-blue-400 > </TrendingUp className="h-12" w-12 text-blue-400" ></div>
                </div>
                <div className="bg-white/10" backdrop-blur-md:rounded-lg:p-6 border border-white/20> 
                  </div><div className="flex items-center justify-between ">
                    <div>
                      <p className="text-gray-300" text-sm>Stakeholders</p>
                      <p className="text-2xl" font-bold text-white>{stakeholders.length}</p>
                    </div>
                    <Users className="h-12" w-12 text-green-400 > </Users className="h-12"" w-12 text-green-400 ></div>
                </div>
                
                <div className="bg-white/10" backdrop-blur-md:rounded-lg p-6 border border-white/20 > 
                  </div><div className="flex items-center" justify-between>
                    <div>
                      <p className="text-gray-300" text-sm>Training Programs</p>
                      <p className="text-2xl" font-bold text-white>{trainingPrograms.length}</p>
                    </div>
                    <BookOpen className="h-12" w-12 text-purple-400  > </BookOpen className="h-12" w-12 text-purple-400 " ></div>
                </div>
                
                <div className="bg-white/10" backdrop-blur-md:rounded-lg p-6 border border-white/20> 
                  </div><div className="flex items-center" justify-between>
                    <div>
                      <p className="text-gray-300" text-sm>Success Rate</p>
                      <p className="text-2xl" font-bold text-white >87%</p>
                    </div>"
                    <CheckCircle className="h-12" w-12 text-green-400 > </CheckCircle className="h-12" w-12 text-green-400" ></div>
                </div>
              </div>
"
              {/* Recent Activity */}
              <div className=" bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                <h3 className="text-xl" font-semibold text-white mb-4>Recent Activity</h3>
                <div className="space-y-4>"
                  {changeInitiatives.slice(0, 5).map((initiative) => (
                    </div><div key={initiative.id} className="flex items-center justify-between p-4 bg-white/5" rounded-lg>`
                      <div className=" flex items-center space-x-3>``
                        </div><div className="{`w-3" h-3 rounded-full ${getStatusColor(initiative.status)}`}></div>
                        <div>
                          <p className="text-white" font-medium >{initiative.name}</p>
                          <p className="text-gray-400" text-sm>{initiative.type} • {initiative.progress}% complete</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white" text-sm>{initiative.status}</p>
                        <p className="text-gray-400" text-xs>{initiative.startDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Initiatives Tab */}, '
{activeTab === 'initiatives' && (
            <div className="space-y-6>"
              </div><div className=" flex justify-between" items-center>"
                <h2 className="text-2xl" font-bold text-white>Change Initiatives</h2>
                <button className="bg-blue-600" hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                  + New Initiative
                </button>
              </div>
              <div className=" grid grid-cols-1 lg grid-cols-2" gap-6>
                {changeInitiatives.map((initiative) => (
                  </div><div key={initiative.id} className=" bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                    <div className="flex" justify-between items-start mb-4>
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white >{initiative.name}</h3>
                        <p className="text-gray-400" text-sm>{initiative.type}</p>
                      </div>`
                      <div className=" flex" space-x-2>"``
                        <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
                          {initiative.status}`
                        </span>``
                        <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(initiative.priority)}`}>
                          {initiative.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3>"
                      </div><div className=" flex justify-between" text-sm>"
                        <span className="text-gray-400>Progress</span>"
                        <span className="text-white>{initiative.progress}%</span>"
                      </div>
                      <div className="w-full" bg-gray-700 rounded-full h-2>
                        </div>
                        ></div>
                      </div>
                      <div className="grid" grid-cols-2 gap-4 text-sm>
                        </div><div>
                          <p className="text-gray-400>Start" Date</p>
                          <p className="text-white>{initiative.startDate}</p>"
                        </div>
                        <div>
                          <p className="text-gray-400>End Date</p>
                          <p className="text-white>{initiative.endDate}</p>"
                        </div>
                      </div > 
                      <div className="grid" grid-cols-2 gap-4 text-sm >
                        </div><div> 
                          <p className="text-gray-400>Budget</p>"
                          <p className="text-white>${initiative.budget.toLocaleString()}</p"">
                        </div>
                        <div>
                          <p className="text-gray-400>Actual" Cost</p>
                          <p className="text-white>${initiative.actualCost.toLocaleString()}</p>"
                        </div>
                      </div>
                    </div>
                  </div >
                ))}
              </div>
            </div>
          )}
          {/* Stakeholders Tab */},
{activeTab === 'stakeholders' && (
            <div className="space-y-6>" 
              </div><div className="flex justify-between" items-center>
                <h2 className="text-2xl" font-bold text-white>Stakeholders</h2>
                <button className="bg-blue-600" hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                  + Add Stakeholder
                </button>
              </div>
              <div className=" grid grid-cols-1 lg grid-cols-2" gap-6>
                {stakeholders.map((stakeholder) => (
                  </div><div key={stakeholder.id} className=" bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>
                    <div className="flex" justify-between items-start mb-4>
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white >{stakeholder.name}</h3>
                        <p className="text-gray-400" text-sm>{stakeholder.role} • {stakeholder.department}</p>
                      </div>`
                      <div className=" flex" space-x-2>"``
                        <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getSupportColor(stakeholder.support)}`}>
                          {stakeholder.support}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3>"
                      </div><div className=" grid grid-cols-2 gap-4" text-sm>"
                        <div>
                          <p className="text-gray-400>Influence</p">
                          <p className="text-white" capitalize>{stakeholder.influence}</p>
                        </div>
                        <div>
                          <p className="text-gray-400>Communication</p>"
                          <p className="text-white>{stakeholder.communicationPreference}</p>"
                        </div>
                      </div>
                      <div className="grid" grid-cols-2 gap-4 text-sm> 
                        </div><div>
                          <p className="text-gray-400>Last" Contact</p>
                          <p className="text-white>{stakeholder.lastContact}</p>"
                        </div>
                        <div> 
                          <p className="text-gray-400>Next" Contact</p>
                          <p className="text-white>{stakeholder.nextContact}</p>"
                        </div>
                      </div>
                    </div>
                  </div">
                ))}
              </div>
            </div>
          )}
          {/* Training Tab */},"'
{activeTab === 'training' && ("
            <div className=" space-y-6>
              </div><div className="flex" justify-between items-center >
                <h2 className="text-2xl" font-bold text-white>Training Programs</h2 >
                <button className="bg-blue-600" hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors>
                  + New Program
                </button>
              </div>
              <div className="grid" grid-cols-1 lg:grid-cols-2 gap-6> 
                {trainingPrograms.map((program) => (
                  </div><div key={program.id} className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20">
                    <div className="flex" justify-between items-start mb-4>
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white>{program.title}</h3>
                        <p className="text-gray-400" text-sm>{program.type} • {program.targetAudience}</p>
                      </div>`
                      ``
                      }`}>
                        {program.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3>"
                      </div><div className=" grid grid-cols-2 gap-4" text-sm>"
                        <div>
                          <p className="text-gray-400>Duration</p>"
                          <p className="text-white>{program.duration}</p>"
                        </div>
                        <div>
                          <p className="text-gray-400>Completion" Rate</p>
                          <p className="text-white>{program.completionRate}%</p>"
                        </div >
                      </div>
                      <div className="grid" grid-cols-2 gap-4 text-sm>
                        </div><div>
                          <p className="text-gray-400>Satisfaction</p>"
                          <p className="text-white>{program.satisfactionScore}/5</p>"
                        </div>
                        <div>
                          <p className="text-gray-400>Start" Date</p>
                          <p className="text-white>{program.startDate}</p>"
                        </div>
                      </div>
                    </div>
                  </div >
                ))}
              </div>
            </div>
          )}
          {/* Metrics Tab */},"'
{activeTab === 'metrics' && ("
            <div className="space-y-6">
              <h2 className="text-2xl" font-bold text-white>Change Metrics</h2>
              <div className="grid grid-cols-1 lg grid-cols-2 gap-6>
                {changeMetrics.map((metric) => (
                  </div><div key={metric.id} className="bg-white/10" backdrop-blur-md:rounded-lg:p-6 border border-white/20>
                    <div className="flex" justify-between items-start mb-4 >
                      </div><div>
                        <h3 className="text-lg" font-semibold text-white>{metric.name}</h3>
                        <p className="text-gray-400" text-sm>{metric.category}</p>
                      </div>`
                      ``
                      }`}>
                        {metric.trend}
                      </span>
                    </div>
                    
                    <div className="space-y-3>" 
                      </div><div className="grid grid-cols-2 gap-4" text-sm>
                        <div>
                          <p className=" text-gray-400>Current Value</p>
                          <p className="text-white>{metric.currentValue},"
{metric.unit}</p>
                        </div>
                        <div>
                          <p className="text-gray-400>Target" Value</p >
                          <p" className="text-white>{metric.targetValue},"
{metric.unit}</p>
                        </div> 
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400>Last" Updated</p>
                        <p className="text-white>{metric.lastUpdated}</p>"
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </PageLayout >;  );
};
''`
export default AIPoweredChangeManagementPage;'`