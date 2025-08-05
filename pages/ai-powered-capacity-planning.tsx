import React, { useState, useEffect , useCallback }  from 'react';'''
import ModernLayout from '../components/layout/ModernLayout';import { NextPage } from 'next';'''
import Head from 'next/head';'''
import Link from 'next/link';
import {
  TrendingUp, 
  BarChart3, 
  Calendar, 
  Users, 
  AlertTriangle, 
  Settings,
  Activity,
  Zap,
  Target,
  Clock,'
  PieChart,''
  TrendingDown'''
}  from 'lucide-react';

interface CapacityPlan {'
  id: string;''
  name: string;'''
  type: 'infrastructure' | 'workforce' | 'technology' | 'financial';'''
  status: 'draft' | 'active' | 'completed' | 'archived';'''
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  currentCapacity: number;
  targetCapacity: number;
  utilization: number;
  cost: number;
  roi: number;}
interface DemandForecast {
  id: string;
  resource: string;
  period: string;
  currentDemand: number;'
  predictedDemand: number;''
  confidence: number;'''
  trend: 'increasing' | 'decreasing' | 'stable';
  factors: string[];
  lastUpdated: string;}
interface Resource {'
  id: string;''
  name: string;'''
  type: 'human' | 'infrastructure' | 'technology' | 'financial';
  category: string;
  currentCapacity: number;
  maxCapacity: number;
  utilization: number;
  cost: number;
  efficiency: number;
  availability: number;
  lastMaintenance: string;
  nextMaintenance: string;}'
interface OptimizationRecommendation {''
  id: string;'''
  type: 'scaling' | 'efficiency' | 'cost' | 'timing';'''
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  impact: string;
  implementationCost: number;'
  expectedROI: number;''
  timeframe: string;'''
  status: 'pending' | 'approved' | 'implemented' | 'rejected';}'
const AIPoweredCapacityPlanningPage: NextPage = () => {''
  ';''
  const [activeTab, setActiveTab] = useState('overview');
  const [capacityPlans, setCapacityPlans] = useState<CapacityPlan[]>([]);
  const [demandForecasts, setDemandForecasts] = useState<DemandForecast[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);'
  const [optimizationRecommendations, setOptimizationRecommendations] = useState<OptimizationRecommendation[]>([]);''
  const [loading, setLoading] = useState(false);'''
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    loadCapacityData();}
  } [selectedTimeframe]);

  const loadCapacityData = async () => {;'
    setLoading(true);''
    try {'''
      const response = await fetch('/api/ai-capacity-planning', {'''
        method: 'POST',''
        headers: {'''
          'Content-Type': 'application/json',}'
        body: JSON.stringify({''
          timeframe: selectedTimeframe,'''
          action: 'getData'
        }),;
      });

      if (response.ok) {
        const data = await response.json();
        setCapacityPlans(data.capacityPlans || []);
        setDemandForecasts(data.demandForecasts || []);
        setResources(data.resources || []);'
        setOptimizationRecommendations(data.optimizationRecommendations || []);}''
    } catch (error) {'''
      console.error('Error loading capacity planning data: "", error);
    } finally {
      setLoading(false);}
  };
'
  const getStatusColor = (status: string) => {''
    switch (status) {';''
      case 'active': return 'text-green-500';'''
      case 'draft': return 'text-yellow-500';'''
      case 'completed': return 'text-blue-500';'''
      case 'archived': return 'text-gray-500';'''
      default: return 'text-gray-500';}
  };
'
  const getPriorityColor = (priority: string) => {''
    switch (priority) {';''
      case 'low': return 'bg-blue-100 text-blue-800';'''
      case 'medium': return 'bg-yellow-100 text-yellow-1200';'''
      case 'high': return 'bg-orange-100 text-orange-800';'''
      case 'critical': return 'bg-red-100 text-red-800';'''
      default: return 'bg-gray-100 text-gray-800';}
  };
'
  const getTrendColor = (trend: string) => {''
    switch (trend) {';''
      case 'increasing': return 'text-green-500';'''
      case 'decreasing': return 'text-red-500';'''
      case 'stable': return 'text-blue-500';'''
      default: return 'text-gray-500';}
  };'
''
  const tabs = ['''
    { id: 'overview', name: 'Overview', icon: BarChart3 },'''
{ id: 'plans', name: 'Capacity Plans', icon: TrendingUp },'''
    { id: 'forecasts', name: 'Demand Forecasts', icon: Calendar },'''
{ id: 'resources', name: 'Resources', icon: Users },'''
    { id: 'optimization', name: 'Optimization', icon: Target },'''
{ id: 'alerts', name: 'Alerts', icon: AlertTriangle };
  ];

  return (
    <div>
      </div><div className = "relative z-10 container-responsive py-8>"
        """
        {/* Background Effects */}"""
        <div className=fixed inset-0 z-0>"
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head>"
        <title>AI-Powered Capacity Planning System | Zion Tech Group</title>""
        <meta name="description" content=Comprehensive capacity planning with AI-powered demand forecasting, resource optimization, and planning analytics. > </meta" name="description" content="Comprehensive capacity planning with AI-powered demand forecasting, resource optimization, and planning" analytics." ><meta name="keywords" content=capacity planning, demand forecasting, resource optimization, AI analytics, Zion > </meta" name="keywords" content="capacity planning, demand forecasting, resource optimization, AI analytics," Zion" ><meta name="viewport" content=width=device-width, initial-scale=1 > </meta" name="viewport" content="width=device-width," initial-scale=1" ><link rel="icon" href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ></Head>
""
      {/* Header */}"""
      <header className="bg-black/20 backdrop-blur-md border-b" border-white/10>""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg" px-8>"
          </div><div className=""flex" justify-between items-center py-6>""
            <div className="flex items-center" space-x-4>""
              <Link href=/ className=text-white hover:text-gray-300 transition-colors > </Link href=/" className=""text-white hover:text-gray-300 transition-colors ><TrendingUp className=h-12 w-12 > </TrendingUp className="h-12 w-12 ></Link>"
              <div>""
                <h1 className="text-2xl font-bold text-white>AI-Powered Capacity Planning</h1>
                <p className=text-gray-300>Intelligent resource capacity and demand management</p>
              </div>"
            </div>""
            <div className="flex items-center" space-x-4>"
              """
                onChange={(e) => setSelectedTimeframe(e.target.value)}""""
                className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-4" text-sm"""
              >""""
                <option value=7d>Last 7 days</option>""
                <option value="30d">Last 30 days</option>""
                <option value="90d">Last 90 days</option>""
                <option value=1y>Last year</option>
              </select>
            </div>
          </div">
        </div>
      </header>"
""
      {/* Navigation Tabs */}"""
      <nav className="bg-black/10 backdrop-blur-md border-b" border-white/10>""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg" px-8>"
          </div><div className=""flex" space-x-8>
            {tabs.map((tab) => {;
              const Icon = tab.icon;"
              return (""
                  onClick = {() => setActiveTab(tab.id)}"""'
                  className="{`flex items-center space-x-2 py-4 px-3 border-b-2 font-medium text-sm:transition-colors" ${''
                    activeTab === tab.id'''
                      ? 'border-blue-500 text-blue-400''"''`
                        'border-transparent text-gray-300 hover text-white hover border-gray-300'""``
                  }`}"""
                >"""
                  <Icon className=h-5 w-5  > </Icon className="h-5 w-5  ><span>{tab.name}</span>
                </button>;
              );
            })}
          </div> </div>
      </nav>
""
      {/* Main Content */}"""
      <main className = "max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8>""
        {loading ? ("""
          <div className=flex justify-center items-center h-124>"
            </div><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500></div>
          </div>
        ) : ('
          <div className=space-y-8>''
            {/* Overview Tab */},'""''
{activeTab === 'overview' && (""
              </div><div className="space-y-6">""
                {/* KPI Cards */}"""
                <div className=grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6>"
                  </div><div className=""bg-white/10 backdrop-blur-md:rounded-lg:p-6 border border-white/20>
                    <div className=flex items-center justify-between >'
                      </div><div>''
                        <p className=text-gray-300 text-sm>Active Plans</p>'''
                        <p className=text-2xl font-bold text-white>{capacityPlans.filter(c => c.status === 'active').length}</p>
                      </div>""
                      <TrendingUp className="h-12 w-12 text-blue-400 > </TrendingUp className=""h-12" w-12 text-blue-400 ></div>
                  </div>
                  ""
                  <div className=bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20 >"
                    </div><div className="flex items-center" justify-between>
                      <div>"
                        <p className=text-gray-300 text-sm>Avg. Utilization</p>""
                        <p className=""text-2xl font-bold text-white>
                          {Math.round(resources.reduce((acc, r) => acc + r.utilization, 0) / Math.max(resources.length, 1))}%
                        </p>
                      </div>"
                      <Activity className=h-12 w-12 text-green-400  > </Activity className="h-12 w-12 text-green-400 " ></div>
                  </div>"
                  ""
                  <div className=bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20>"
                    </div><div className="flex items-center" justify-between>"
                      <div>""
                        <p className="text-gray-300 text-sm>Forecast Accuracy</p>
                        <p className=text-2xl font-bold text-white >
                          {Math.round(demandForecasts.reduce((acc, f) => acc + f.confidence, 0) / Math.max(demandForecasts.length, 1))}%
                        </p>
                      </div>"
                      <Target className=h-12 w-12 text-yellow-400 > </Target className="h-12 w-12 text-yellow-400" ></div>
                  </div>""
                  <div className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>"
                    </div><div className=""flex items-center justify-between>
                      <div>'
                        <p className=text-gray-300 text-sm >Pending Optimizations</p>''
                        <p className=text-2xl font-bold text-white>'''
                          {optimizationRecommendations.filter(o => o.status === 'pending').length}
                        </p>
                      </div>"
                      <Zap className=h-12 w-12 text-purple-400 > </Zap className="h-12 w-12 text-purple-400" ></div>
                  </div>
                </div>"
"""
                {/* Recent Activity */}""""
                <div className=""grid grid-cols-1 lg:grid-cols-2 gap-6>"
                  </div><div className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20" >
                    <h3 className=text-lg font-semibold text-white mb-4>Recent Capacity Plans</h3>""
                    <div className="space-y-3">"
                      {capacityPlans.slice(0, 5).map((plan) => (""
                        </div><div key={plan.id} className="flex items-center justify-between p-3 bg-white/5" rounded-lg>"
                          <div>""
                            <p className=""text-white font-medium>{plan.name}</p>
                            <p className=text-gray-300 text-sm>{plan.type} - {plan.status}</p>"
                          </div>""
                          <div className="flex items-center" space-x-2>"
                            </div><div className="w-16 bg-gray-700 rounded-full h-2>
                              
                              ></div>
                            </div>
                            <span className=text-sm text-gray-300>{plan.utilization}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>""
                  <div className="bg-white/10 backdrop-blur-md:rounded-lg p-6 border" border-white/20>"""
                    <h3 className="text-lg font-semibold text-white mb-4>Demand Trends</h3>
                    <div className=space-y-3>""
                      {demandForecasts.slice(0, 5).map((forecast) => (""
                        </div><div key={forecast.id} className="flex items-center justify-between p-3 bg-white/5" rounded-lg>
                          <div>"
                            <p className=text-white font-medium>{forecast.resource}</p>""
                            <p className="text-gray-300 text-sm>{forecast.period}</p>`
                          </div>``
                          <span className={`px-4 py-3 rounded-full text-xs font-medium ${getTrendColor(forecast.trend)}`}>
                            {forecast.trend}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>'
            )}''
            {/* Capacity Plans Tab */},'"''
{activeTab === 'plans' && (""
              <div className=space-y-6>"
                </div><div className="flex justify-between" items-center>"""
                  <h2 className="text-2xl font-bold text-white>Capacity Planning</h2>
                  <button className=bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                    Create Plan
                  </button>
                </div>
                ""
                <div className=bg-white/10 backdrop-blur-md:rounded-lg border border-white/20 overflow-hidden>"
                  </div><div className="overflow-x-auto">""
                    <table className="min-w-full divide-y" divide-white/10>""
                      <thead className=bg-white/5">
                        <tr>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Plan</th>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Type</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Status</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Priority</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Current Capacity</th>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Target Capacity</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Utilization</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >ROI</th>
                        </tr>"
                      </thead>""
                      <tbody className="divide-y" divide-white/10>""
                        {capacityPlans.map((plan) => (""""
                          <tr key={plan.id} className="hover" bg-white/5">
                            <td className=px-6 py-4 whitespace-nowrap>""
                              <div>"
                                </div><div className=""text-sm font-medium text-white>{plan.name}</div>
                              </div>
                            </td>"
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{plan.type}</td>""`
                            <td className="px-6 py-4" whitespace-nowrap>"""``
                              <span className=""{`inline-flex px-4 py-3 text-xs font-semibold rounded-full ${getStatusColor(plan.status)}`}>
                                {plan.status}
                              </span>
                            </td>""`
                            <td className="px-6 py-4 whitespace-nowrap >``
                              <span className={`inline-flex px-4 py-3 text-xs font-semibold rounded-full ${getPriorityColor(plan.priority)}`}">
                               " {plan.priority}
                              </span>
                            </td>"
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{plan.currentCapacity}</td>""
                            <td className="px-6 py-4 whitespace-nowrap text-sm:text-gray-300>{plan.targetCapacity}</td>""
                            <td className=px-6 py-4 whitespace-nowrap >
                              <div className=flex items-center>
                                </div><div className=w-16 bg-gray-700 rounded-full h-2 mr-2>
                                  
                                  ></div>
                                </div>
                                <span className=text-sm:text-gray-300>{plan.utilization}%</span>
                              </div>
                            </td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{plan.roi}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div">
                </div>
              </div>"'
            )}""''
            {/* Demand Forecasts Tab */},"'""''
{activeTab === 'forecasts' && (""""
              <div className="space-y-6">"
                </div><div className="flex justify-between" items-center>""
                  <h2 className=""text-2xl font-bold text-white>Demand Forecasting</h2>
                  <button className=bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors>
                    Generate Forecast
                  </button>
                </div>""
                <div className="bg-white/10 backdrop-blur-md:rounded-lg border border-white/20" overflow-hidden>"
                  </div><div className=""overflow-x-auto">""
                    <table className="min-w-full divide-y divide-white/10" >""
                      <thead className="bg-white/5">
                        <tr>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Resource</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Period</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Current Demand</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Predicted Demand</th>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Confidence</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Trend</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Last Updated</th>
                        </tr>"
                      </thead>""
                      <tbody className="divide-y" divide-white/10>""
                        {demandForecasts.map((forecast) => (""""
                          <tr key={forecast.id} className="hover" bg-white/5">
                            <td className=px-6 py-4 whitespace-nowrap>""
                              <div>"
                                </div><div className=""text-sm font-medium text-white>{forecast.resource}</div>
                              </div>
                            </td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{forecast.period}</td>"
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{forecast.currentDemand}</td>""
                            <td className="px-6 py-4 whitespace-nowrap text-sm:text-gray-300>{forecast.predictedDemand}</td>""
                            <td className=px-6 py-4 whitespace-nowrap >
                              <div className=flex items-center>
                                </div><div className=w-16 bg-gray-700 rounded-full h-2 mr-2>
                                  
                                  ></div">
                                </div>
                                <span className=text-sm:text-gray-300>{forecast.confidence}%</span>
                              </div>
                            </td>""`
                            <td className="px-6 py-4 whitespace-nowrap">``"
                              <span className={`inline-flex px-4 py-3 text-xs font-semibold rounded-full" ${getTrendColor(forecast.trend)}`}>
                                {forecast.trend}
                              </span>
                            </td>""
                            <td className="px-6 py-4 whitespace-nowrap text-sm:text-gray-300>{forecast.lastUpdated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>'
            )}''
            {/* Resources Tab */},'"''
{activeTab === 'resources' && (""
              <div className=space-y-6>"
                </div><div className="flex justify-between" items-center>
                  <h2 className=text-2xl font-bold text-white>Resource Management</h2>""
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-lg:transition-colors>
                    Add Resource
                  </button>
                </div>
                ""
                <div className=bg-white/10 backdrop-blur-md:rounded-lg border border-white/20 overflow-hidden >"
                  </div><div className="overflow-x-auto">""
                    <table className="min-w-full divide-y" divide-white/10>"""
                      <thead className=""bg-white/5>
                        <tr>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Resource</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Type</th>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Category</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Current Capacity</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Max Capacity</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Utilization</th>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Efficiency</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Availability</th>
                        </tr>"
                      </thead>""
                      <tbody className="divide-y divide-white/10" >"
                        {resources.map((resource) => ("""
                          <tr key={resource.id} className="hover" bg-white/5>
                            <td className=px-6 py-4 whitespace-nowrap>""
                              <div>"
                                </div><div className="text-sm font-medium text-white>{resource.name}</div>
                              </div>
                            </td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300 >{resource.type}</td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{resource.category}</td>"
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{resource.currentCapacity}</td>""
                            <td className="px-6 py-4 whitespace-nowrap text-sm:text-gray-300>{resource.maxCapacity}</td>""
                            <td className=px-6 py-4 whitespace-nowrap >
                              <div className=flex items-center>
                                </div><div className=w-16 bg-gray-700 rounded-full h-2 mr-2>
                                  
                                  ></div">
                                </div>
                                <span className=text-sm:text-gray-300>{resource.utilization}%</span>
                              </div>
                            </td>""
                            <td className="px-6 py-4" whitespace-nowrap>""
                              <div className="flex" items-center>"
                                </div><div className="w-16 bg-gray-700 rounded-full h-2 mr-2>
                                  
                                  ></div>
                                </div>
                                <span className=text-sm text-gray-300>{resource.efficiency}%</span>
                              </div>
                            </td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{resource.availability}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>'
            )}""''
            {/* Optimization Tab */},"'""''
{activeTab === 'optimization' && (""""
              <div className=""space-y-6>"
                </div><div className=flex justify-between items-center >
                  <h2 className=text-2xl font-bold text-white>Optimization Recommendations</h2">
                  <button className=bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-lg" transition-colors>"
                    Generate Recommendations
                  </button>
                </div>""
                <div className=""bg-white/10 backdrop-blur-md:rounded-lg:border border-white/20 overflow-hidden>"
                  </div><div className=overflow-x-auto">""
                    <table className="min-w-full divide-y" divide-white/10>""
                      <thead className="bg-white/5">
                        <tr>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Recommendation</th>""
                          <th className=""px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Type</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Priority</th>"
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Impact</th>""
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Implementation Cost</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Expected ROI</th>
                          <th className=px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Status</th>
                        </tr>"
                      </thead>""
                      <tbody className="divide-y" divide-white/10>""
                        {optimizationRecommendations.map((recommendation) => (""""
                          <tr key={recommendation.id} className=""hover:bg-white/5">
                            <td className=px-6 py-4 whitespace-nowrap >
                              <div>"
                                </div><div className=text-sm font-medium text-white>{recommendation.title}</div>""
                                <div className="text-sm text-gray-300>{recommendation.description}</div>
                              </div>
                            </td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{recommendation.type}</td>""`
                            <td className=""px-6" py-4 whitespace-nowrap>``
                              <span className={`inline-flex px-4 py-3 text-xs font-semibold rounded-full ${getPriorityColor(recommendation.priority)}`}>
                                {recommendation.priority}
                              </span>
                            </td>"
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300>{recommendation.impact}</td>""
                            <td className="px-6 py-4 whitespace-nowrap text-sm:text-gray-300>${recommendation.implementationCost.toLocaleString()}</td>
                            <td className=px-6 py-4 whitespace-nowrap text-sm text-gray-300 >{recommendation.expectedROI}%</td>
                            <td className=px-6 py-4 whitespace-nowrap>`
                              ``
                              }`}>
                                {recommendation.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>'
            )}""''
            {/* Alerts Tab */},"'""''
{activeTab === 'alerts' && (""""
              <div className=""space-y-6>
                <h2 className=text-2xl font-bold text-white >Alerts & Notifications</h2>
                ""
                <div className=space-y-4>"
                  </div><div className="bg-red-500/20 backdrop-blur-md:rounded-lg p-4 border" border-red-500/30>"""
                    <div className=""flex" items-center space-x-3>"
                      <AlertTriangle className=h-12 w-12 text-red-400  > </AlertTriangle className="h-12 w-12 text-red-400 " ><div>
                        <h4 className=font-semibold text-red-300>Critical Capacity Shortage</h4>"
                        <p className=text-gray-300 text-sm>Server infrastructure at 95% utilization. Immediate scaling required to prevent service disruption.</p>""
                        <p className="text-gray-400 text-xs mt-1>1 hour ago</p>
                      </div>
                    </div>
                  </div>
""
                  <div className=bg-yellow-500/20 backdrop-blur-md:rounded-lg p-4 border border-yellow-500/30 >"
                    </div><div className="flex items-center" space-x-3>"
                      <Calendar className=h-12 w-12 text-yellow-400 > </Calendar className="h-12 w-12 text-yellow-400" ><div>""
                        <h4 className="font-semibold text-yellow-300>Demand Forecast Alert</h4>
                        <p className=text-gray-300 text-sm >Predicted 40% increase in customer support demand over next quarter. Plan resource allocation.</p>
                        <p className=text-gray-400 text-xs mt-1>3 hours ago</p>
                      </div>
                    </div>"
                  </div>""
                  <div className="bg-blue-500/20 backdrop-blur-md:rounded-lg p-4 border" border-blue-500/30>"
                    </div><div className=""flex" items-center space-x-3>"
                      <Activity className=h-12 w-12 text-blue-400  > </Activity className="h-12 w-12 text-blue-400 " ><div>
                        <h4 className=font-semibold text-blue-300>Optimization Opportunity</h4>"
                        <p className=text-gray-300 text-sm>AI analysis suggests 25% cost savings through infrastructure consolidation. Review recommendation.</p>""
                        <p className="text-gray-400 text-xs mt-1>6 hours ago</p>
                      </div>
                    </div>
                  </div>
""
                  <div className=bg-green-500/20 backdrop-blur-md:rounded-lg p-4 border border-green-500/30 >"
                    </div><div className="flex items-center" space-x-3>"
                      <Target className=h-12 w-12 text-green-400 > </Target className="h-12 w-12 text-green-400" ><div>""
                        <h4 className="font-semibold text-green-300>Capacity Plan Success</h4>
                        <p className=text-gray-300 text-sm >Workforce expansion plan achieved 92% of target capacity. All KPIs within acceptable ranges.</p>
                        <p className=text-gray-400 text-xs mt-1>1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>"
"""
      {/* Footer */}""""
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10" mt-16>""
        <div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8>"
          </div><div className="grid grid-cols-1 md grid-cols-4 gap-8" >
            <div>"
              <h3 className=text-white font-semibold mb-4>AI-Powered Solutions</h3>""
              <ul className="space-y-2" text-gray-300>"""
                <li><Link href=/ai-powered-hr-management" className=hover text-white >HR Management</Link href=/ai-powered-hr-management  className="hover text-white" ></Link></li>"
                <li><Link href=/ai-powered-vendor-management className=hover text-white >Vendor Management</Link href=/ai-powered-vendor-management className="hover text-white" ></Link></li>""
                <li><Link href=/ai-powered-facility-management" className=hover text-white >Facility Management</Link href=/ai-powered-facility-management  className="hover text-white" ></Link></li>"
                <li><Link href=/ai-powered-change-management className=hover text-white >Change Management</Link href=/ai-powered-change-management className="hover text-white" ></Link></li>""
                <li><Link href=/ai-powered-capacity-planning" className=hover text-white >Capacity Planning</Link href=/ai-powered-capacity-planning  className="hover text-white ></Link></li> </ul>
            </div>
            <div>"
              <h3 className=text-white font-semibold mb-4>Resources</h3>""
              <ul className=""space-y-2" text-gray-300>""
                <li><Link href=/docs className=hover text-white >Documentation</Link href=/docs" className="hover text-white" ></Link></li>"
                <li><Link href=/api-docs className=hover text-white >API Reference</Link href=/api-docs className="hover text-white" ></Link></li>""
                <li><Link href=/help-desk-support" className=hover text-white >Support</Link href=/help-desk-support  className="hover text-white ></Link></li> </ul>
            </div>
            <div>"
              <h3 className=text-white font-semibold mb-4>Company</h3>""
              <ul className=""space-y-2" text-gray-300>""
                <li><Link href=/about className=hover text-white >About</Link href=/about" className="hover text-white" ></Link></li>"
                <li><Link href=/contact className=hover text-white >Contact</Link href=/contact className="hover text-white" ></Link></li>""
                <li><Link href=/privacy" className=hover text-white >Privacy</Link href=/privacy  className="hover text-white ></Link></li> </ul>
            </div>
            <div>"
              <h3 className=text-white font-semibold mb-4>Connect</h3>""
              <div className=""flex" space-x-4>""
                <Link href=#" className=text-gray-300 hover text-white >"
                  </Link href=#" className="text-gray-300 hover text-white ><span" className=sr-only>Twitter</span>
                  <svg className="h-12 w-12 fill=currentColor " viewBox="0 0 24" 24">"""
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84 > </path" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29" 1.84" ></svg>
                </Link>""
                <Link href="#" className=text-gray-300 hover text-white >"
                  </Link href="#" className="text-gray-300 hover text-white ><span" className=sr-only>LinkedIn</span>
                  <svg className="h-12 w-12 fill=currentColor " viewBox="0 0 24" 24">"""
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z> </path" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222" 0h.003z"></svg>
                </Link>
              </div>
            </div>"
          </div>""
          <div className="mt-8 pt-8 border-t" border-white/10>;""
            <p className="text-gray-300" text-center>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
                            </div>
        </div>
    );
};"'
""''`
export default AIPoweredCapacityPlanningPage;"'"'`