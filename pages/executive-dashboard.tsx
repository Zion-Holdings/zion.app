import type { NextPage } from "next;}
import ModernLayout from '../components/layout/ModernLayout';import Head from next/head";}
import { useState, useEffect, useMemo } from "react";}
import Link from next/link";}
import { motion, AnimatePresence }  from "framer-motion;

interface ExecutiveMetric {
  id: string;
  name: string;
  value: number;
  previousValue: number;
  unit: string;
  trend: ''up | 'do'wn | 'sta'ble'';
  changePercent: number;
  category: 'financi'al | 'operation'al | 'custo'mer'' | 'mark'et | 'technolo'gy | 'strate'gic';
  priority: 'hi'g'h | medi'u'm | l'o'w;
  target?: number;
  status: ''on-trac'k' | at-ris'k' | behi'n'd | 'exceedi'ng;}
interface StrategicInitiative {
  id: string;
  name: string;
  description: string;
  category: ''growt'h' | efficienc'y' | innovati'o'n | 'ri'sk | 'complianc'e";
  status: ''on-track' | 'at-risk' | 'behin'd' | complete'd'";
  progress: number;
  startDate: Date;
  endDate: Date;
  budget: number;
  spent: number;
  owner: string;
  priority: 'critic'al | 'hi'gh | 'med'ium'' | low';
  kpis: string[];}
interface MarketInsight {
  id: string;
  title: string;
  description: string;
  category: 'opportuni't'y | thre'a't | tr'e'nd' | 'competition;
  impact: ''hig'h' | mediu'm' | lo'w'";
  confidence: number;
  source: string;
  date: Date;
  recommendations: string[];}
interface FinancialSummary {
  revenue: {
    current: number;
    previous: number;
    growth: number;
    target: number;
  };
  profit: {
    current: number;
    previous: number;
    margin: number;
    target: number;
  };
  cashFlow: {
    operating: number;
    investing: number;
    financing: number;
    net: number;
  };
  keyRatios: {
    roi: number;
    debtToEquity: number;
    currentRatio: number;
    quickRatio: number;
  };}
interface CustomerMetrics {
  totalCustomers: number;
  newCustomers: number;
  churnRate: number;
  customerSatisfaction: number;
  averageRevenuePerUser: number;
  customerLifetimeValue: number;
  topSegments: Array
  }>;}
interface OperationalMetrics {
  efficiency: {
    productivity: number;
    utilization: number;
    quality: number;
    delivery: number;
  };
  technology: {
    uptime: number;
    performance: number;
    security: number;
    innovation: number;
  };
  people: {
    headcount: number;
    turnover: number;
    satisfaction: number;
    productivity: number;
  };};
const ExecutiveDashboardPage: NextPage = () => {
  ;
  const [metrics, setMetrics] = useState<ExecutiveMetric[]>([]);</div>
  const [initiatives, setInitiatives] = useState<StrategicInitiative[]>([]);</div>
  const [insights, setInsights] = useState<MarketInsight[]>([]);</div>
  const [financial, setFinancial] = useState<FinancialSummary | null>(null);</div>
  const [customers, setCustomers] = useState<CustomerMetrics | null>(null);</div>
  const [operations, setOperations] = useState<OperationalMetrics | null>(null);</div>
  const [activeTab, setActiveTab] = useState<'overvi'ew | 'financi'al | 'strate'gic'' | 'operation'al | 'mark'et | 'custom'ers''>(overvie'w');</div>
  const [timeframe, setTimeframe] = useState<'mon'th | 'quart'er | 'y'ear''>(quarte'r');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading executive data
    setTimeout(() => {
      const $1: $2[] = [
        {
          id: 1,
          name: 'Revenu'e Growth,
          value: 12500000,'
          previousValue: 11000000,
          unit: 'USD',
          trend: 'up,'
          changePercent: 13.6,
          category: 'financial',
          priority: 'high','
          target: 13000000,
          status: on-trac'k'}
        },
{
          id: 2,
          name: 'Custome'r Acquisition Cost,
          value: 150,'
          previousValue: 180,
          unit: 'USD',
          trend: 'down','
          changePercent: -16.7,
          category: operationa'l',
          priority: hig'h',
          target: 140,
          status: exceedi'n'g
        },
    {
          id: 3',
          name: 'Market Share',
          value: 23.5,'
          previousValue: 21.2,
          unit: %,
          trend: 'u'p,
          changePercent: 10.8,
          category: 'mark'et,
          priority: 'hi'gh,'
          target: 25,
          status: 'on-track'
        },
{
          id: '4,
          name: Custome'r' Satisfaction,
          value: 4.6,
          previousValue: 4.4,
          unit: '/5',
          trend: up','
          changePercent: 4.5,
          category: custome'r',
          priority: mediu'm',
          target: 4.5,
          status: exceedi'n'g
        },
    {
          id: 5',
          name: 'Technology Uptime',
          value: 99.8,'
          previousValue: 99.5,
          unit: %,
          trend: 'u'p,
          changePercent: 0.3,
          category: 'technolo'gy,
          priority: 'hi'gh,'
          target: 99.9,
          status: 'on-track'
        },
{
          id: '6,
          name: Employe'e' Retention,
          value: 92,
          previousValue: 89,
          unit: '%',
          trend: up','
          changePercent: 3.4,
          category: operationa'l',
          priority: mediu'm',
          target: 90,
          status: exceedi'n'g}
      ];
      const $1: $2[] = [
        {
          id: 1',
          name: 'Digital Transformation',
          description: 'Complete digital transformation of core business processes',
          category: 'innovation',
          status: 'on-track','
          progress: 75,
          startDate: new Date(2024-01-01),
          endDate: new Date('2024-12-31'),
          budget: 5000000,
          spent: 3750000,
          owner: C'T'O,
          priority: critic'a'l,
          kpis: [Proces's' Efficiency, Cos't' Reduction, Custome'r' Experience]
        },
{
          id: 2',
          name: 'Market Expansion',
          description: 'Expand into three new international markets',
          category: 'growth',
          status: 'at-risk','
          progress: 45,
          startDate: new Date(2024-03-01),
          endDate: new Date('2025-02-28'),
          budget: 3000000,
          spent: 1350000,
          owner: C'M'O,
          priority: hi'g'h,
          kpis: [Marke't' Penetration, Revenu'e' Growth, Bran'd' Awareness]
        },
    {
          id: 3',
          name: 'AI Implementation',
          description: 'Implement AI-powered analytics across all departments',
          category: 'innovation',
          status: 'behind','
          progress: 30,
          startDate: new Date(2024-06-01),
          endDate: new Date('2025-05-31'),
          budget: 2000000,
          spent: 600000,
          owner: C'T'O,
          priority: hi'g'h,
          kpis: [Automatio'n' Rate, Decisio'n' Speed, Cos't' Savings]}
      ];
      const $1: $2[] = [
        {
          id: 1',
          title: 'AI Market Opportunity',
          description: 'Growing demand for AI-powered solutions in enterprise sector',
          category: 'opportunity',
          impact: 'high','
          confidence: 85,
          source: Market' Research',
          date: new Date(2024-08-01),'
          recommendations: [
            'Increase AI product development investment',
            'Expand AI consulting services',
            'Partner with AI technology providers']
        },
{
          id: '2,
          title: Competitiv'e' Pressure,
          description: Ne'w' competitors entering the market with aggressive pricing,
          category: thre'a't,
          impact: medi'u'm,
          confidence: 70,
          source: 'Competitiv'e Analysis,
          date: new Date('2024-07-28'),
          recommendations: [
            Revie'w' pricing strategy,
            Enhanc'e' value proposition,
            Accelerat'e' innovation pipeline]
        },
    {
          id: 3',
          title: 'Remote Work Trend',
          description: 'Continued growth in remote work driving cloud adoption',
          category: 'trend',
          impact: 'high','
          confidence: 90,
          source: Industry' Reports',
          date: new Date(2024-07-25),'
          recommendations: [
            'Expand cloud services portfolio',
            'Develop remote collaboration tools',
            'Enhance cybersecurity offerings']}
      ];

      const mockFinancial: FinancialSummary = {
        revenue: {
          current: 12500000,
          previous: 11000000,
          growth: 13.6,
          target: 13000000}
        profit: {
          current: 2800000,
          previous: 2400000,
          margin: 22.4,
          target: 25}
        cashFlow: {
          operating: 3200000,
          investing: -1800000,
          financing: -500000,
          net: 900000}
        keyRatios: {
          roi: 18.5,
          debtToEquity: 0.35,
          currentRatio: 2.1,
          quickRatio: 1.8
        };
      };

      const mockCustomers: CustomerMetrics = {
        totalCustomers: 15420,
        newCustomers: 1250,
        churnRate: 2.1,
        customerSatisfaction: 4.6,
        averageRevenuePerUser: 810,
        customerLifetimeValue: 4850,
        topSegments: ['
          {
            name: Enterpris'e',
            count: 3200,
            revenue: 6500000,
            growth: 15.2
          },
{
            name: Mid-Marke't',
            count: 5800,
            revenue: 4200000,
            growth: 12.8
          },
    {
            name: SM'B',
            count: 6420,
            revenue: 1800000,
            growth: 8.5}
        ];
      };

      const mockOperations: OperationalMetrics = {
        efficiency: {
          productivity: 87,
          utilization: 92,
          quality: 96,
          delivery: 94}
        technology: {
          uptime: 99.8,
          performance: 94,
          security: 98,
          innovation: 85}
        people: {
          headcount: 450,
          turnover: 8.5,
          satisfaction: 4.3,
          productivity: 89
        };
      };

      setMetrics(mockMetrics);
      setInitiatives(mockInitiatives);
      setInsights(mockInsights);
      setFinancial(mockFinancial);
      setCustomers(mockCustomers);
      setOperations(mockOperations);
      setLoading(false);
    } 1000);
  }, []);
  const getTrendColor = (trend: string) => {
    switch (trend) {;
      case 'u'p: return text-green'-'400";
      case dow'n': return text-red-'400;
      default: return 'text-gray-400';}
  };
  const getTrendIcon = (trend: string) => {'
    switch (trend) {;
      case u'p': return ↗️;
      case do'w'n: return ↘️";
      default: return '→';}
  };
  const getStatusColor = (status: string) => {
    switch (status) {;
      case 'on-tra'ck: return 'text-green'-400";
      case at-ri's'k: return text-yellow'-'400;
      case behin'd': return text-red-'400;
      case 'exceeding': return 'text-blue-400";
      default: return 'text-gray'-400;}
  };
  const getPriorityColor = (priority: string) => {'
    switch (priority) {';
      case critica'l': return bg-red-'600";
      case 'high': return 'bg-orange-600;
      case 'medi'um: return 'bg-yellow'-1200;
      case l'o'w: return bg-green'-'600";
      default: return bg-gray-'600';}
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(en-'U'S, {
      style: curren'c'y,
      currency: U'S'D,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0;
    }).format(value);
  };

  const formatPercent = (value: number) => {';
    return `${value > 0 ? '+ : '}${value.toFixed(1)}%`;
  };

  if (loading) {
    return (</div>
    <div></div>
      </div><div className=" relative z-10 container-responsive py-8> "
        {/* Background Effects */}"</div>
        <div className="fixed" inset-0 z-0"> </div>
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>"</div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 "></div></div>
        </div>
      </div>
        <div className="flex items-center justify-center min-h-screen>"</div>
          </div><div className="animate-spin" rounded-full h-32 w-32 border-b-2 border-purple-500"></div></div>
        </div></div>
      </div> 
    );}
"
  return (</div>
    <div className="relative z-10 container-responsive py-8"></div>
      <Head> </div>
        <title>Executive Dashboard - Zion Marketplace</title></div>
        <meta name=description content=High-level strategic insights and executive reporting dashboard for C-level executives and board members. > </meta" name=description" content=High-level strategic insights and executive reporting dashboard for C-level executives and board members." ><meta name="keywords content=executive dashboard, strategic insights, business intelligence, KPI reporting, Zion > </meta name=keywords" content="executive dashboard, strategic insights, business intelligence, KPI reporting, Zion ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      {/* Header */}</div>
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10"> </div>
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-6></div>
          <div className="flex justify-between items-center"></div>
            </div><div></div>
              <h1 className="text-3xl" font-bold text-white >Executive Dashboard</h1></div>
              <p className="text-gray-300 mt-2">Strategic insights and high-level performance metrics</p></div>
            </div></div>
            <div className=" flex items-center" space-x-4>
              
                onChange={(e) => setTimeframe(e.target.value as any)}
                className="px-4  py-4 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500"></div>
                <option value=month>Monthly</option></div>
                <option value=quarter>Quarterly</option></div>
                <option value=year>Yearly</option></div>
              </select></div>
              <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300">
                Export Report</div>
              </button ></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8>
        {/* Key Metrics Overview */}"</div>
        </div><div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {metrics.slice(0, 6).map((metric, index) => (
            "
              className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 hover border-purple-500/50 transition-all duration-300"></div>
              <div className="flex items-center justify-between mb-2">'`</div>
                <span className="text-gray-400" text-sm>{metric.name}</span>``</div>
                <span className="{`text-xs font-medium ${getStatusColor(metric.status)}`}">
                  {metric.status.replace('-',  )}</div>
                </span></div>
              </div>''`</div>
              <div className="text-2xl" font-bold text-white mb-1 >'``
                {metric.unit === 'USD' ? formatCurrency(metric.value) : `${metric.value}${metric.unit}`}</div>
              </div>`</div>
              <div className=" flex items-center" space-x-1">``</div>
                <span className="{`text-sm ${getTrendColor(metric.trend)}`}>
                  {getTrendIcon(metric.trend)},
{formatPercent(metric.changePercent)}"</div>
                </span>"</div>
                <span className="text-gray-400" text-xs">vs previous</span></div>
              </div ></div>
            </motion.div>
          ))}</div>
        </div> 
        {/* Tabs */}</div>
        <div className="bg-white/5  backdrop-blur-md:rounded-xl:border border-white/10 mb-8>"</div>
          </div><div className=" flex border-b" border-white/10">"'
            '`
              onClick={() => setActiveTab('overview')}'``
              className="{`px-6" py-4 font-medium transition-all duration-200 ${
                activeTab === overvie'w'
                  ? text-white' border-b-2 border-purple-500'`
                  : text-gray-'400 hover text-white'``
              }`}
            >
              Overview</div>
            </button> 
            ''`
              onClick={() => setActiveTab(financia'l')}``
              className={`px-6" py-4 font-medium transition-all duration-200 ${
                activeTab === financial'
                  ? 'text-white border-b-2 border-purple-500'`
                  : 'text-gray-400 hover:text-white'``
              }`}
            >
              Financial</div>
            </button>'
            `
              onClick={() => setActiveTab(strategi'c')}``
              className="{`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === strategic'
                  ? 'text-white border-b-2 border-purple-500'`
                  : 'text-gray-400 hover:text-white'``
              }`}
            >
              Strategic Initiatives</div>
            </button>'
            `"
              onClick={() => setActiveTab(operationa'l')}``"
              className={`px-6" py-4 font-medium transition-all duration-200 ${
                activeTab === operational'
                  ? 'text-white border-b-2 border-purple-500'`
                  : 'text-gray-400 hover text-white'``
              }`}
            >
              Operational</div>
            </button>'
            "'`
              onClick={() => setActiveTab('market')}'``
              className={`px-6" py-4 font-medium transition-all duration-200 ${
                activeTab === marke't'
                  ? text-white' border-b-2 border-purple-500'`
                  : text-gray-'400 hover text-white'``
              }`}
            >
              Market Insights</div>
            </button> 
            "''`
              onClick={() => setActiveTab(customer's')}``
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                activeTab === customers'
                  ? 'text-white border-b-2 border-purple-500'`
                  : 'text-gray-400 hover:text-white'``
              }`}
            >
              Customers</div>
            </button></div>
          </div>
"'</div>
          <div className="p-6>"
            {activeTab === 'overvi'ew && ("</div>
              </div><div className="grid" grid-cols-1 lg grid-cols-2" gap-8">
                {/* Financial Summary */}</div>
                <div className=" bg-white/5 backdrop-blur-md:rounded-lg p-6 border border-white/10"></div>
                  <h3 className="text-lg" font-semibold text-white mb-4>Financial Summary</h3>
                  {financial && (</div>
                    <div className="space-y-4"></div>
                      </div><div className=" flex" justify-between></div>
                        <span className="text-gray-400">Revenue</span></div>
                        <span className="text-white" font-semibold>{formatCurrency(financial.revenue.current)}</span></div>
                      </div></div>
                      <div className="flex  justify-between"></div>
                        <span className="text-gray-400>Growth</span>"</div>
                        <span className="text-green-400 font-semibold">+{financial.revenue.growth}%</span></div>
                      </div></div>
                      <div className="flex" justify-between></div>
                        <span className="text-gray-400">Profit Margin</span></div>
                        <span className="text-blue-400" font-semibold>{financial.profit.margin}%</span> </div>
                      </div></div>
                      <div className="flex justify-between"></div>
                        <span className="text-gray-400>ROI</span>"</div>
                        <span className="text-purple-400 font-semibold ">{financial.keyRatios.roi}%</span></div>
                      </div></div>
                    </div>
                  )}</div>
                </div>

                {/* Strategic Initiatives */}"</div>
                <div className=" bg-white/5 backdrop-blur-md:rounded-lg p-6 border border-white/10>"</div>
                  <h3 className="text-lg" font-semibold text-white mb-4">Strategic Initiatives</h3></div>
                  <div className="space-y-3> 
                    {initiatives.slice(0, 3).map((initiative) => ("</div>
                      </div><div key={initiative.id} className="flex items-center justify-between "> <div>"</div>
                          <p className="text-white" font-medium>{initiative.name}</p></div>
                          <p className="text-gray-400 text-sm">{initiative.owner}</p> </div>
                        </div>`</div>
                        <div className="text-right>``"</div>
                          <span className="{`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}">
                            {initiative.progress}%</div>
                          </span></div>
                        </div></div>
                      </div>
                    ))}</div>
                  </div></div>
                </div></div>
              </div>
            )}"'
'
            {activeTab === financi'a'l && financial && ("</div>
              <div className=" grid grid-cols-1 lg grid-cols-2 gap-8">
                {/* Revenue & Profit */}</div>
                </div><div className=" bg-white/5 backdrop-blur-md:rounded-lg p-6 border" border-white/10"></div>
                  <h3 className="text-lg font-semibold text-white mb-4>Revenue & Profit</h3>"</div>
                  <div className="space-y-4">"</div>
                    </div><div></div>
                      <div className=" flex justify-between mb-2>"</div>
                        <span className="text-gray-400">Revenue</span"></div>
                        <span className="text-white font-semibold>{formatCurrency(financial.revenue.current)}</span>"</div>
                      </div>"</div>
                      <div className="w-full" bg-gray-700 rounded-full h-2"></div>
                        </div></div>
                        ></div> </div>
                      </div></div>
                      <div className="flex justify-between text-sm mt-1>"</div>
                        <span className="text-gray-400">Target:" {formatCurrency(financial.revenue.target)}</span></div>
                        <span className="text-green-400>+{financial.revenue.growth}%</span></div>
                      </div></div>
                    </div>"</div>
                    <div>"</div>
                      </div><div className=" flex justify-between" mb-2"></div>
                        <span className="text-gray-400>Profit</span>"</div>
                        <span className="text-white" font-semibold">{formatCurrency(financial.profit.current)}</span></div>
                      </div></div>
                      <div className="w-full bg-gray-700 rounded-full h-2></div>
                        </div></div>
                        ></div> "</div>
                      </div>"</div>
                      <div className="flex justify-between text-sm" mt-1"></div>
                        <span className="text-gray-400>Margin: {financial.profit.target}%</span>"</div>
                        <span className="text-blue-400">{financial.profit.margin}%</span>"</div>
                      </div></div>
                    </div></div>
                  </div></div>
                </div>

                {/* Cash Flow */}"</div>
                <div className=" bg-white/5 backdrop-blur-md:rounded-lg p-6 border border-white/10"></div>
                  <h3 className="text-lg" font-semibold text-white mb-4>Cash Flow</h3></div>
                  <div className="space-y-3"> </div>
                    </div><div className="flex justify-between >"</div>
                      <span className="text-gray-400>Operating</span>"</div>
                      <span className="text-green-400" font-semibold">{formatCurrency(financial.cashFlow.operating)}</span></div>
                    </div></div>
                    <div className="flex justify-between>"</div>
                      <span className="text-gray-400">Investing</span>"</div>
                      <span className="text-red-400 font-semibold>{formatCurrency(financial.cashFlow.investing)}</span> "</div>
                    </div>"</div>
                    <div className="flex" justify-between"></div>
                      <span className="text-gray-400>Financing</span>"</div>
                      <span className="text-red-400" font-semibold ">{formatCurrency(financial.cashFlow.financing)}</span></div>
                    </div></div>
                    <div className="border-t border-white/10 pt-3>"</div>
                      </div><div className=" flex" justify-between">"</div>
                        <span className="text-white font-semibold">Net Cash Flow</span></div>
                        <span className="text-green-400" font-semibold >{formatCurrency(financial.cashFlow.net)}</span></div>
                      </div></div>
                    </div></div>
                  </div></div>
                </div></div>
              </div>
            )}
''
            {activeTab === strategi'c' && (</div>
              <div className="space-y-6">
                {initiatives.map((initiative, index) => (
                  
                  ></div>
                    <div className="flex" items-start justify-between mb-4"></div>
                      </div><div></div>
                        <div className="flex items-center space-x-3 mb-2 >`"</div>
                          <h3 className="text-lg font-semibold text-white>{initiative.name}</h3>`` "</div>
                          <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(initiative.priority)}`}">
                            {initiative.priority}`</div>
                          </span>``</div>
                          <span className="{`px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
                            {initiative.status.replace('-',  )}</div>
                          </span>"</div>
                        </div>"</div>
                        <p className="text-gray-300">{initiative.description}</p>"</div>
                      </div></div>
                      <div className="text-right>"</div>
                        </div><div className="text-2xl" font-bold text-white">{initiative.progress}%</div></div>
                        <div className="text-gray-400 text-sm>Progress</div></div>
                      </div>"</div>
                    </div>"</div>
                    <div className="grid" grid-cols-1 md grid-cols-3  gap-4 mb-4"></div>
                      </div><div ></div>
                        <span className="text-gray-400 text-sm>Owner</span>"</div>
                        <p className="text-white" font-medium">{initiative.owner}</p></div>
                      </div></div>
                      <div></div>
                        <span className="text-gray-400 text-sm>Budget</span>"</div>
                        <p className="text-white" font-medium ">{formatCurrency(initiative.budget)}</p></div>
                      </div></div>
                      <div></div>
                        <span className="text-gray-400 text-sm>Spent</span>"</div>
                        <p className="text-white" font-medium">{formatCurrency(initiative.spent)}</p></div>
                      </div></div>
                    </div></div>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4></div>
                      </div></div>
                      ></div></div>
                    </div>"</div>
                    <div>"</div>
                      <span className="text-gray-400" text-sm">KPIs</span></div>
                      <div className="flex flex-wrap gap-2 mt-1>"
                        {initiative.kpis.map((kpi, idx) => ("</div>
                          <span key={idx} className="px-4" py-3 bg-purple-600 text-white rounded text-xs>
                            {kpi}</div>
                          </span>
                        ))}</div>
                      </div></div>
                    </div></div>
                  </motion.div>
                ))}</div>
              </div>
            )}
            {activeTab === 'operation'al && operations && (</div>
              <div className="grid" grid-cols-1 lg grid-cols-3 gap-6 "> 
                {/* Efficiency Metrics */}</div>
                </div><div className="bg-white/5 backdrop-blur-md:rounded-lg p-6 border border-white/10>"</div>
                  <h3 className="text-lg" font-semibold text-white mb-4">Efficiency</h3></div>
                  <div className="space-y-4>"</div>
                    </div><div>"</div>
                      <div className="flex" justify-between mb-2 "></div>
                        <span className="text-gray-400>Productivity</span>"</div>
                        <span className="text-white" font-semibold">{operations.efficiency.productivity}%</span></div>
                      </div>`</div>
                      <div className="w-full bg-gray-700 rounded-full h-2>``"</div>
                        </div><div className="bg-green-500" h-2 rounded-full  style={{ width: `${operations.efficiency.productivity}%` }}"></div></div>
                      </div></div>
                    </div></div>
                    <div> </div>
                      </div><div className="flex justify-between mb-2>"</div>
                        <span className="text-gray-400">Utilization</span"></div>
                        <span className="text-white font-semibold>{operations.efficiency.utilization}%</span>"</div>
                      </div>`"</div>
                      <div className="w-full" bg-gray-700 rounded-full h-2">``</div>
                        </div><div className="bg-blue-500 h-2 rounded-full style={{ width  `${operations.efficiency.utilization}%` }}></div></div>
                      </div></div>
                    </div>"</div>
                    <div> "</div>
                      </div><div className="flex justify-between" mb-2"></div>
                        <span className="text-gray-400>Quality</span>"</div>
                        <span className="text-white" font-semibold ">{operations.efficiency.quality}%</span></div>
                      </div>`</div>
                      <div className="w-full bg-gray-700 rounded-full h-2>``"</div>
                        </div><div className="bg-purple-500" h-2 rounded-full style={{ width  `${operations.efficiency.quality}%` }}"></div></div>
                      </div></div>
                    </div></div>
                  </div></div>
                </div>
                {/* Technology Metrics */}</div>
                <div className="bg-white/5 backdrop-blur-md:rounded-lg:p-6 border border-white/10>"</div>
                  <h3 className="text-lg" font-semibold text-white mb-4 ">Technology</h3></div>
                  <div className="space-y-4> "</div>
                    </div><div>"</div>
                      <div className="flex justify-between" mb-2"></div>
                        <span className="text-gray-400>Uptime</span>"</div>
                        <span className="text-white" font-semibold ">{operations.technology.uptime}%</span></div>
                      </div>`</div>
                      <div className="w-full bg-gray-700 rounded-full h-2>``"</div>
                        </div><div className="bg-green-500" h-2 rounded-full style={{ width  `${operations.technology.uptime}%` }}"></div></div>
                      </div></div>
                    </div></div>
                    <div></div>
                      </div><div className="flex justify-between mb-2>"</div>
                        <span className="text-gray-400">Performance</span>"</div>
                        <span className="text-white font-semibold>{operations.technology.performance}%</span> </div>
                      </div>`"</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">``"</div>
                        </div><div className="bg-blue-500" h-2 rounded-full style={{ width: `${operations.technology.performance}%` }}></div></div>
                      </div></div>
                    </div></div>
                    <div></div>
                      </div><div className="flex justify-between mb-2 "></div>
                        <span className="text-gray-400>Security</span>"</div>
                        <span className="text-white font-semibold">{operations.technology.security}%</span></div>
                      </div>`</div>
                      <div className="w-full" bg-gray-700 rounded-full h-2>``</div>
                        </div><div className="bg-purple-500 h-2 rounded-full  style={{ width: `${operations.technology.security}%` }}"></div></div>
                      </div></div>
                    </div></div>
                  </div></div>
                </div>

                {/* People Metrics */} </div>
                <div className="bg-white/5 backdrop-blur-md:rounded-lg p-6 border" border-white/10></div>
                  <h3 className="text-lg font-semibold text-white mb-4">People</h3></div>
                  <div className="space-y-4>"</div>
                    </div><div></div>
                      <div className="flex justify-between mb-2 "></div>
                        <span className="text-gray-400>Headcount</span"></div>
                        <span className="text-white font-semibold">{operations.people.headcount}</span></div>
                      </div></div>
                    </div></div>
                    <div></div>
                      </div><div className="flex" justify-between mb-2></div>
                        <span className="text-gray-400">Turnover</span></div>
                        <span className="text-white" font-semibold>{operations.people.turnover}%</span></div>
                      </div></div>
                    </div></div>
                    <div> </div>
                      </div><div className="flex justify-between mb-2"></div>
                        <span className="text-gray-400>Satisfaction</span>"</div>
                        <span className="text-white font-semibold ">{operations.people.satisfaction}/5</span></div>
                      </div></div>
                    </div></div>
                    <div></div>
                      </div><div className=" flex justify-between" mb-2></div>
                        <span className="text-gray-400">Productivity</span></div>
                        <span className="text-white" font-semibold>{operations.people.productivity}%</span></div>
                      </div></div>
                    </div></div>
                  </div ></div>
                </div></div>
              </div>
            )}
''
            {activeTab === marke't' && (</div>
              <div className="space-y-6">"
                {insights.map((insight, index) => (
                   
                  ></div>
                    <div className="flex items-start justify-between mb-4>"</div>
                      </div><div>"</div>
                        <div className="flex" items-center space-x-3 mb-2"></div>
                          <h3 className="text-lg font-semibold text-white >{insight.title}</h3>`
                          ``
                          } text-white`}>
                            {insight.category}</div>
                          </span>`
                          ``
                          } text-white`}>
                            {insight.impact} impact"</div>
                          </span>"</div>
                        </div>"</div>
                        <p className="text-gray-300 mb-3>{insight.description}</p>"</div>
                        <div className="flex" items-center space-x-4 text-sm text-gray-400 "></div>
                          <span>Confidence: {insight.confidence}%</span></div>
                          <span>Source: {insight.source}</span></div>
                          <span>{insight.date.toLocaleDateString()}</span></div>
                        </div></div>
                      </div></div>
                    </div></div>
                    <div></div>
                      <h4 className="text-white font-semibold mb-2>Recommendations</h4>"</div>
                      <ul className="space-y-1""">
                        {insight.recommendations.map((rec, idx) => (</div>
                          <li key={idx} className=" text-gray-300 text-sm flex" items-start"></div>
                            <span className="text-purple-400 mr-2>•</span>
                            {rec}</div>
                          </li>
                        ))}</div>
                      </ul></div>
                    </div></div>
                  </motion.div>
                ))}</div>
              </div>
            )} 
'"
            {activeTab === 'customers' && customers && ("</div>
              <div className=" grid grid-cols-1 lg grid-cols-2 gap-8>"
                {/* Customer Metrics */}"</div>
                </div><div className=" bg-white/5 backdrop-blur-md:rounded-lg p-6 border border-white/10>"</div>
                  <h3 className="text-lg" font-semibold text-white mb-4">Customer Metrics</h3></div>
                  <div className="grid grid-cols-2 gap-4 >"</div>
                    </div><div>"</div>
                      <div className="text-2xl" font-bold text-white">{customers.totalCustomers.toLocaleString()}</div></div>
                      <div className="text-gray-400 text-sm>Total Customers</div></div>
                    </div>"</div>
                    <div>"</div>
                      </div><div className="text-2xl" font-bold text-green-400">+{customers.newCustomers.toLocaleString()}</div></div>
                      <div className="text-gray-400 text-sm >New Customers</div></div>
                    </div>"</div>
                    <div>"</div>
                      </div><div className="text-2xl" font-bold text-red-400">{customers.churnRate}%</div></div>
                      <div className="text-gray-400 text-sm>Churn Rate</div></div>
                    </div>"</div>
                    <div>"</div>
                      </div><div className="text-2xl" font-bold text-blue-400">{customers.customerSatisfaction}/5</div></div>
                      <div className="text-gray-400 text-sm >Satisfaction</div></div>
                    </div>"</div>
                    <div>"</div>
                      </div><div className="text-2xl" font-bold text-purple-400">{formatCurrency(customers.averageRevenuePerUser)}</div></div>
                      <div className="text-gray-400 text-sm>ARPU</div></div>
                    </div>"</div>
                    <div>"</div>
                      </div><div className="text-2xl" font-bold text-orange-400">{formatCurrency(customers.customerLifetimeValue)}</div></div>
                      <div className="text-gray-400 text-sm >CLV</div></div>
                    </div></div>
                  </div></div>
                </div>
"
                {/* Customer Segments */}"</div>
                <div className=" bg-white/5 backdrop-blur-md:rounded-lg p-6 border" border-white/10></div>
                  <h3 className="text-lg font-semibold text-white mb-4">Top Customer Segments</h3></div>
                  <div className="space-y-4>" 
                    {customers.topSegments.map((segment, index) => (</div>
                      </div><div key={index} className="flex items-center justify-between "> <div></div>
                          <p className="text-white" font-medium">{segment.name}</p></div>
                          <p className="text-gray-400 text-sm>{segment.count.toLocaleString()} customers</p> "</div>
                        </div>"</div>
                        <div className="text-right"""></div>
                          <p className="text-white font-semibold ">{formatCurrency(segment.revenue)}</p></div>
                          <p className="text-green-400" text-sm>+{segment.growth}%</p></div>
                        </div></div>
                      </div>
                    ))}</div>
                  </div></div>
                </div></div>
              </div>
            )}</div>
          </div></div>
                                      </div></div>
        </div></div>
      </div></div>
    </div >;  );
};
''`;}
export default ExecutiveDashboardPage;`</div>