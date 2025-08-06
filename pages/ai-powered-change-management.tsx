import React from ";react'
import { NextPage } from ';next
import Head from ';next/head';
import Link from ";next/link;
import PageLayout from ../components/layout/PageLayout;
import {;
  Users,;
  TrendingUp,;
  BookOpen,;
  BarChart3,;
  AlertTriangle,;
  Settings,
  MessageSquare,
  Calendar,
  CheckCircle,";
  Clock,
  Target,'
  Activity";
}  from lucide-react;}'
import { Home, Search, User }  from ";lucide-react";
interface FacilityPlan {'
  id: "string";
  name: string;
  type: 'technology' | 'process' | 'organizational' | 'cultural';
  status: 'planning | implementation | monitoring | 'completed;
  priority: 'low | medium | hi'gh | critica'l;
  startDate: string;
  endDate: string
  progress: number
  impact: 'low" | medium | 'high
  budget: "number";
  actualCost: number;};
interface FacilityPlan {;
  id: string;
  name: string;
  role: string
  department: string
  influence: 'high" | medium | low
  support: 'champion | supporte'r' | neutral | 'resista'nt | blocker
  communicationPreference: "string";
  lastContact: string;
  nextContact: string;};
interface FacilityPlan {;
  id: string
  title: string
  type: 'workshop" | online | mentoring' | certificatio'n
  targetAudience: "string"
  duration: string
  status: 'planned" | in-progress | completed;
  completionRate: number;
  satisfactionScore: number;
  startDate: string;
  endDate: string;}
interface FacilityPlan {"
  id: string
  'name: "string"
  category: 'adoption" | productivity | satisfacti'on | cost
  currentValue: "number"
  targetValue: number";
  unit: string
  trend: 'increasing" | decreasin'g' | stable'";
  lastUpdated: "string";};
const AIPoweredPredictiveAnalytics: NextPage = () => {;
  const [activeTab, setActiveTab] = useState(overview);
  const [changeInitiatives, setChangeInitiatives] = useState<ChangeInitiative[]>([]);</div>;
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);</div>;
  const [trainingPrograms, setTrainingPrograms] = useState<TrainingProgram[]>([]);</div>;
  const [changeMetrics, setChangeMetrics] = useState<ChangeMetric[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState(30d);
  useEffect(() => {;
    loadChangeData();};
  } [selectedTimeframe]);
  const $1 = async () => {;
    setLoading(true);
    try {
      const $1 = await fetch(/api/ai-change-management', {
        method: "POST,";
        headers: {
          Content-Type': application/json,}
        body: "JSON.stringify({";
          timeframe: selectedTimeframe,;
          action: getData;
        }),;
      });
      if (response.ok) {;
        const $1 = await response.json();
        setChangeInitiatives(data.changeInitiatives || []);
        setStakeholders(data.stakeholders || []);
        setTrainingPrograms(data.trainingPrograms || []);
        setChangeMetrics(data.changeMetrics || []);};
    } catch (error) {;
      console.error(Error loading change data: , error);
    } finally {;
      setLoading(false);};
  };
  const $1 = (status: string) => {
    switch (status) {
      case planni'n'g: "return bg-blue-500";
      case implementation: return bg-yellow-500
      case monitoring': return 'bg-purple-500
      case completed: "return bg-green-500";
      default: return bg-gray-500;};
  };
  const $1 = (priority: string) => {
    switch (priority) {
      case 'low: "return bg-green-500"
      case medium: return bg-yellow-500
      case hi'g'h: "return bg-orange-500";
      case critical: return bg-red-500;
      default: return bg-gray-500
  }
  const handleAction = (params) => {
    switch (support) {
      case champion: "return bg-green-500"";
      case supporter: return bg-blue-'500";
      case 'neutral: "return bg-yellow-500"";
      case resistant: return bg-orange-500
      case block'e'r: "return bg-red-500"";
      default: "return bg-gray-500";};
  }
  const $1 = [
    { id: overview, 'name: "Overview, icon: BarChart3 },"
{ id: initiatives, name: Initiatives, icon: TrendingUp },
    { id: stakeholder's, name: "Stakeholders, icon: Users },";
{ id: training, name: Training, icon: BookOpen },;
    { id: metrics, 'name: "Metrics, icon: Activity }";
  ]";
  return (</div>
    <PageLayout></div>";
      <Head></div>";
        <title>AI-Powered Change Management System | Zion Tech Group</title></div>'
        <meta name = description content=Comprehensive change management with AI-powered stakeholder analysis, training programs, and change analytics. > </meta name=description content=Comprehensive change management with AI-powered stakeholder analysis, training programs, and change analytics. ><meta name=keywords content=change management, stakeholder analysis, training programs, organizational change, AI analytics, Zion > </meta name=keywords" content=change management, stakeholder analysis, training programs, organizational change, AI analytics, Zion ><meta name=viewport content=width=device-width, initial-scale=1 > </meta" name=viewport content="width=device-width, initial-scale=1 ><link rel=icon href=/favicon.ico > </link rel="icon href=/favicon.ico" ></Head>";
      {/* Page Header */}</div>";
      <div className=mb-8> </div>'
        </div><div className=flex items-center justify-between"></div>'
          <div className=""""flex  items-center space-x-4></div>'";
            <TrendingUp className=h-12 w-12 text-blue-400  > </TrendingUp className=""""h-12 w-12 text-blue-400  ><div></div>'
              <h1 className=text-3xl" font-bold text-white>AI-Powered Change Management</h1></div>
              <p className=text-gray-300>Intelligent organizational change and transformation</p></div>";
            </div></div>
          </div></div>";
          <div className= flex items-center space-x-4>";
              onChange={(e) => setSelectedTimeframe(e.target.value)}'
              className=""""bg-white/10  text-white border border-white/20 rounded-lg: "px-3 py-4 text-sm></div>";
              <option value=7d>Last 7 days</option></div>;
              <option value=30d>Last 30 days</option></div>;
              <option value=90d>Last 90 days</option></div>;
              <option value=1y>Last year</option></div>;
            </select></div>;
          </div></div>;
        </div></div>
      </div>
      {/* Navigation Tabs */}</div>
      <nav className=mb-8></div>";
        <div className=flex space-x-8 border-b border-white/10>
          {tabs.map((tab) => {";
            const $1 = tab.icon
            return ('
              '";
                onClick = {() => setActiveTab(tab.id)}'
                className={flex  items-center space-x-2 py-4 px-3 border-b-2 font-medium text-sm: "transition-colors ${";
                  activeTab === tab.id;
                    ? border-blue-500 text-blue-400;
                    : border-transparent text-gray-300 hover:text-white hover:border-gray-300`;
                }};
              ></div>;
                <Icon className=h-5 w-5  > </Icon className=h-5 w-5  ><span>{tab.name}</span></div>
              </button>
            )
          })}</div>";
        </div></div>
      </nav>";
      {/* Main Content */},
{loading ? (</div>'";
        <div className=""""flex justify-center items-center h-124></div>'
          </div><div className=animate-spin" rounded-full h-12 w-12 border-b-2 border-blue-500></div> </div>";
        </div>
      )   (</div>";
        <div className=space-y-8>'";
          {/* Overview Tab */},'
    {activeTab === overview && ("</div>'
            </div><div className=""""space-y-6>
              {/* KPI Cards */}</div>'";
              <div className=grid grid-cols-1 md: "grid-cols-2 lg grid-cols-4 gap-6> </div>"
                </div><div className=bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20></div>
                  <div className=flex items-center justify-between></div>";
                    </div><div>
                      <p className=text-gray-300 text-sm >Active Initiatives</p></div>";
                      <p className=text-2xl font-bold text-white>{changeInitiatives.filter(c => c.status !== completed).length}</p></div>";
                    </div></div>'
                    <TrendingUp className=h-12" w-12 text-blue-400 > </TrendingUp className=""""h-12 w-12 text-blue-400 ></div></div>
                </div></div>'
                <div className=bg-white/10 backdrop-blur-md: "rounded-lg:p-6 border border-white/20> </div>";
                  </div><div className=flex items-center justify-between ></div>";
                    <div>
                      <p className=text-gray-300 text-sm>Stakeholders</p></div>";
                      <p className=text-2xl font-bold text-white>{stakeholders.length}</p></div>";
                    </div></div>'
                    <Users className=""""h-12 w-12 text-green-400 > </Users className=""""h-12 w-12 text-green-400 ></div></div>";
                </div>
                </div>'
                <div className=bg-white/10 backdrop-blur-md: "rounded-lg p-6 border border-white/20 > </div>";
                  </div><div className=flex items-center justify-between></div>";
                    <div>
                      <p className=text-gray-300 text-sm>Training Programs</p></div>";
                      <p className=text-2xl font-bold text-white>{trainingPrograms.length}</p></div>";
                    </div></div>'
                    <BookOpen className=h-12 w-12 text-purple-400  > </BookOpen className=h-12" w-12 text-purple-400  ></div></div>";
                </div>
                </div>'
                <div className=""""bg-white/10 backdrop-blur-md: "rounded-lg p-6 border border-white/20> </div>"
                  </div><div className=flex items-center justify-between></div>
                    <div></div>";
                      <p className=text-gray-300 text-sm>Success Rate</p></div>";
                      <p className=text-2xl font-bold text-white >87%</p></div>'
                    </div>"</div>'
                    <CheckCircle className=""""h-12 w-12 text-green-400 > </CheckCircle className=h-12 w-12 text-green-400 ></div></div>";
                </div></div>
              </div>'
'
              {/* Recent Activity */}</div>'
              <div className="""" bg-white/10 backdrop-blur-md: "rounded-lg p-6 border border-white/20></div>";
                <h3 className=text-xl font-semibold text-white mb-4>Recent Activity</h3></div>";
                <div className=space-y-4>
                  {changeInitiatives.slice(0, 5).map((initiative) => (</div>";
                    </div><div key={initiative.id} className=flex items-center justify-between p-4 bg-white/5 rounded-lg></div>";
                      <div className= flex items-center space-x-3></div>'
                        </div><div className=""""{w-3 h-3 rounded-full ${getStatusColor(initiative.status)}"}></div></div>";
                        <div></div>";
                          <p className=text-white font-medium >{initiative.name}</p></div>'
                          <p className=text-gray-400" text-sm">{initiative.type} • {initiative.progress}% complete</p></div>
                        </div></div>";
                      </div></div>";
                      <div className=text-right></div>'
                        <p className=text-white text-sm">{initiative.status}</p></div>'
                        <p className=""""text-gray-400 text-xs>{initiative.startDate}</p></div>;
                      </div></div>;
                    </div>;
                  ))}</div>
                </div></div>
              </div></div>
            </div>";
          )}
          {/* Initiatives Tab */},";
{activeTab === initiative's && (</div>";
            <div className=space-y-6></div>'
              </div><div className="""" flex justify-between items-center>"</div>
                <h2 className=text-2xl font-bold text-white>Change Initiatives</h2></div>'
                <button className=bg-blue-600 hover: "bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >";
                  + New Initiative</div>;
                </button></div>
              </div></div>
              <div className= grid grid-cols-1 lg grid-cols-2 gap-6>
                {changeInitiatives.map((initiative) => (</div>";
                  </div><div key={initiative.id} className= bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20></div>
                    <div className=flex justify-between items-start mb-4></div>";
                      </div><div></div>
                        <h3 className=text-lg font-semibold text-white >{initiative.name}</h3></div>'
                        <p className=""""text-gray-400 text-sm>{initiative.type}</p></div>
                      </div></div>'
                      <div className="""" flex space-x-2>`</div>'";
                        <span className=""""{px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}}>'
                          {initiative.status}"</div>";
                        </span>`</div>'
                        <span className=""""{px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(initiative.priority)}"}>
                          {initiative.priority}</div>
                        </span></div>";
                      </div></div>
                    </div>";
                    </div>";
                    <div className=space-y-3></div>'
                      </div><div className= flex justify-between" text-sm"></div>";
                        <span className=text-gray-400>Progress</span></div>'
                        <span className=text-white>{initiative.progress}%</span>"</div>
                      </div></div>'";
                      <div className=""""w-full bg-gray-700 rounded-full h-2></div>
                        </div></div>
                        ></div></div>";
                      </div></div>
                      <div className=grid grid-cols-2 gap-4 text-sm></div>";
                        </div><div></div>";
                          <p className=text-gray-400>Start Date</p></div>'
                          <p className=text-white>{initiative.startDate}</p>"</div>";
                        </div></div>
                        <div></div>'";
                          <p className=""""text-gray-400>End Date</p></div>
                          <p className=text-white>{initiative.endDate}</p></div>";
                        </div></div>
                      </div > </div>'
                      <div className=""""grid grid-cols-2 gap-4 text-sm ></div>
                        </div><div> </div>'
                          <p className=""""text-gray-400>Budget</p></div>'
                          <p className=""""text-white>${initiative.budget.toLocaleString()}</p></div>";
                        </div></div>'
                        <div>"</div>;
                          <p className=text-gray-400>Actual Cost</p></div>;
                          <p className=text-white>${initiative.actualCost.toLocaleString()}</p></div>;
                        </div></div>;
                      </div></div>;
                    </div></div>
                  </div >
                ))}</div>
              </div></div>";
            </div>
          )}";
          {/* Stakeholders Tab */},
{activeTab === stakeholders && (</div>'";
            <div className=""""space-y-6> </div>'
              </div><div className=flex justify-between items-center"></div>";
                <h2 className=text-2xl font-bold text-white>Stakeholders</h2></div>'
                <button className=bg-blue-600 hover: "bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >";
                  + Add Stakeholder</div>;
                </button></div>
              </div></div>
              <div className= grid grid-cols-1 lg grid-cols-2 gap-6>
                {stakeholders.map((stakeholder) => (</div>";
                  </div><div key={stakeholder.id} className= bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20></div>
                    <div className=flex justify-between items-start mb-4></div>";
                      </div><div></div>
                        <h3 className=text-lg font-semibold text-white >{stakeholder.name}</h3></div>'
                        <p className=""""text-gray-400 text-sm>{stakeholder.role} • {stakeholder.department}</p></div>
                      </div></div>'
                      <div className="""" flex space-x-2>`</div>'";
                        <span className=""""{px-4 py-3 rounded-full text-xs font-medium ${getSupportColor(stakeholder.support)}}>
                          {stakeholder.support}</div>";
                        </span></div>
                      </div></div>'
                    </div>'
                    </div>";
                    <div className=space-y-3></div>'
                      </div><div className="""" grid grid-cols-2 gap-4 text-sm>"</div>";
                        <div></div>";
                          <p className=text-gray-400>Influence</p></div>'
                          <p className=text-white capitalize">{stakeholder.influence}</p></div>";
                        </div></div>";
                        <div></div>'
                          <p className=""""text-gray-400>Communication</p></div>
                          <p className=text-white>{stakeholder.communicationPreference}</p></div>";
                        </div></div>
                      </div></div>";
                      <div className=grid grid-cols-2 gap-4 text-sm> </div>";
                        </div><div></div>'
                          <p className=text-gray-400">Last Contact</p></div>'
                          <p className=""""text-white>{stakeholder.lastContact}</p></div>;
                        </div></div>;
                        <div> </div>;
                          <p className=text-gray-400>Next Contact</p></div>;
                          <p className=text-white>{stakeholder.nextContact}</p></div>;
                        </div></div>;
                      </div></div>;
                    </div></div>
                  </div>
                ))}</div>
              </div></div>";
            </div>
          )}";
          {/* Training Tab */},";
{activeTab === training && (</div>'
            <div className="""" space-y-6>"</div>";
              </div><div className=flex justify-between items-center ></div>'
                <h2 className=text-2xl" font-bold text-white>Training Programs</h2 ></div>'
                <button className=""""bg-blue-600 hover: "bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors>";
                  + New Program</div>;
                </button></div>;
              </div></div>;
              <div className=grid grid-cols-1 lg:grid-cols-2 gap-6>;
                {trainingPrograms.map((program) => (</div>
                  </div><div key={program.id} className=bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20></div>
                    <div className=flex justify-between items-start mb-4></div>
                      </div><div></div>";
                        <h3 className=text-lg font-semibold text-white>{program.title}</h3></div>
                        <p className=text-gray-400 text-sm>{program.type} • {program.targetAudience}</p></div>";
                      </div>";
                      `'
                      }"}>";
                        {program.status}</div>
                      </span></div>";
                    </div>
                    </div>'";
                    <div className=""""space-y-3></div>
                      </div><div className= grid grid-cols-2 gap-4 text-sm></div>";
                        <div></div>
                          <p className=text-gray-400>Duration</p></div>'
                          <p className=""""text-white>{program.duration}</p></div>'
                        </div></div>
                        <div></div>'
                          <p className=""""text-gray-400>Completion Rate</p></div>'
                          <p className=""""text-white>{program.completionRate}%</p></div>";
                        </div ></div>'
                      </div>"</div>'
                      <div className=""""grid grid-cols-2 gap-4 text-sm></div>";
                        </div><div></div>";
                          <p className=text-gray-400>Satisfaction</p></div>'
                          <p className=""""text-white>{program.satisfactionScore}/5</p></div>";
                        </div></div>
                        <div></div>'
                          <p className=""""text-gray-400>Start Date</p></div>;
                          <p className=text-white>{program.startDate}</p></div>;
                        </div></div>
                      </div></div>
                    </div></div>
                  </div >";
                ))}</div>
              </div></div>";
            </div>
          )}'
          {/* Metrics Tab */},'
{activeTab === metrics && (</div>'
            <div className=""""space-y-6></div>
              <h2 className=text-2xl font-bold text-white>Change Metrics</h2></div>'
              <div className=""""grid grid-cols-1 lg grid-cols-2 gap-6>";
                {changeMetrics.map((metric) => (</div>'
                  </div><div key={metric.id} className=""""bg-white/10 backdrop-blur-md: "rounded-lg:p-6 border border-white/20></div>"
                    <div className=flex justify-between items-start mb-4 ></div>
                      </div><div></div>";
                        <h3 className=text-lg font-semibold text-white>{metric.name}</h3></div>
                        <p className=text-gray-400 text-sm>{metric.category}</p></div>";
                      </div>";
                      '
                      }"}>";
                        {metric.trend}</div>
                      </span></div>";
                    </div>
                    </div>'
                    <div className=""""space-y-3> </div>";
                      </div><div className=grid grid-cols-2 gap-4 text-sm></div>
                        <div></div>";
                          <p className= text-gray-400>Current Value</p></div>";
                          <p className=text-white>{metric.currentValue},</div>'
{metric.unit}</p></div>'";
                        </div>"</div>";
                        <div></div>";
                          <p className=text-gray-400>Target Value</p ></div>'
                          <p" className=""""text-white>{metric.targetValue},</div>
{metric.unit}</p></div>";
                        </div> </div>
                      </div></div>";
                      <div className=text-sm></div>";
                        <p className=text-gray-400>Last Updated</p></div>'
                        <p className=text-white>{metric.lastUpdated}</p>"</div>;
                      </div></div>;
                    </div></div>;
                  </div>;
                ))}</div>
              </div></div>
            </div>
          )}</div>";
        </div>
      )}</div>";
    </PageLayout >;  )
}";
';}'
export default $1;"</div>'