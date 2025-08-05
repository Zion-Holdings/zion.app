import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head";
import { useState, useEffect, useMemo } from 'react";
import Link from 'next/link";

interface TestSuite {
  id: string;'
  name: string;
  type: 'unit' | 'integration' | 'e2e' | 'performance' | 'security' | 'accessibility";
  status: 'running' | 'passed' | 'failed' | 'pending' | 'skipped";
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  duration: number;
  lastRun: Date;
  aiGenerated: boolean;'
  coverage: number;
  priority: 'low' | 'medium' | 'high' | 'critical";
  tags: string[];}
interface TestCase {
  id: string;
  name: string;
  description: string;'
  suite: string;
  status: 'passed' | 'failed' | 'skipped' | 'pending";
  duration: number;
  lastRun: Date;
  aiGenerated: boolean;'
  automated: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical";
  flaky: boolean;
  errorMessage?: string;
  steps: {
    id: string;
    action: string;
    expected: string;'
    actual?: string;
    status: 'passed' | 'failed' | 'skipped";
  }[];}
interface TestExecution {
  id: string;'
  suiteId: string;
  environment: 'development' | 'staging' | 'production' | 'testing";
  startTime: Date;
  endTime?: Date;'
  duration: number;
  status: 'running' | 'completed' | 'failed' | 'cancelled";
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  coverage: number;
  performance: {
    avgResponseTime: number;
    maxResponseTime: number;
    throughput: number;
    errorRate: number;
  };}
interface TestAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;'
  improvement: number;
  trend: 'up' | 'down' | 'stable";
  period: string;}
const AIPoweredTestingPage: NextPage = () => {
  ;
  const [testSuites, setTestSuites] = useState<TestSuite[]>([]);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [executions, setExecutions] = useState<TestExecution[]>([]);'
  const [analytics, setAnalytics] = useState<TestAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'suites' | 'cases' | 'executions' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'priority' | 'coverage' | 'performance'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered testing data
    setTimeout(() => {
      const $1: $2[] = [
        {
          id: '1',
          name: 'User Authentication Tests',
          type: 'integration',
          status: 'passed',
          totalTests: 25,
          passedTests: 24,
          failedTests: 1,
          skippedTests: 0,'
          duration: 45,
          lastRun: new Date('2024-01-20T15:30:00'),
          aiGenerated: true,'
          coverage: 92,
          priority: 'high',
          tags: ['authentication', 'security', 'user-management']}
        },'
{
          id: '2',
          name: 'Payment Processing Tests',
          type: 'e2e',
          status: 'running',
          totalTests: 18,
          passedTests: 15,
          failedTests: 2,
          skippedTests: 1,'
          duration: 120,
          lastRun: new Date('2024-01-20T15:15:00'),
          aiGenerated: true,'
          coverage: 88,
          priority: 'critical',
          tags: ['payment', 'e2e', 'critical-path']
        },'
    {
          id: '3',
          name: 'API Performance Tests',
          type: 'performance',
          status: 'failed',
          totalTests: 12,
          passedTests: 8,
          failedTests: 4,
          skippedTests: 0,'
          duration: 300,
          lastRun: new Date('2024-01-20T14:45:00'),
          aiGenerated: true,'
          coverage: 75,
          priority: 'high',
          tags: ['performance', 'api', 'load-testing']
        },'
{
          id: '4',
          name: 'UI Component Tests',
          type: 'unit',
          status: 'passed',
          totalTests: 45,
          passedTests: 45,
          failedTests: 0,
          skippedTests: 0,'
          duration: 30,
          lastRun: new Date('2024-01-20T14:30:00'),
          aiGenerated: true,'
          coverage: 95,
          priority: 'medium',
          tags: ['ui', 'components', 'unit-testing']
        },'
    {
          id: '5',
          name: 'Security Vulnerability Tests',
          type: 'security',
          status: 'pending',
          totalTests: 15,
          passedTests: 0,
          failedTests: 0,
          skippedTests: 15,'
          duration: 0,
          lastRun: new Date('2024-01-20T14:00:00'),
          aiGenerated: true,'
          coverage: 0,
          priority: 'critical',
          tags: ['security', 'vulnerability', 'penetration']}
      ];
      const $1: $2[] = [
        {
          id: '1',
          name: 'User Login with Valid Credentials',
          description: 'Test user login functionality with valid email and password',
          suite: 'User Authentication Tests',
          status: 'passed','
          duration: 2.5,
          lastRun: new Date('2024-01-20T15:30:00'),
          aiGenerated: true,'
          automated: true,
          priority: 'high',
          flaky: false,
          steps: ['
            {
              id: '1-1',
              action: 'Navigate to login page',
              expected: 'Login form is displayed',
              status: 'passed'
            },'
{
              id: '1-2',
              action: 'Enter valid email and password',
              expected: 'Credentials are accepted',
              status: 'passed'
            },'
    {
              id: '1-3',
              action: 'Click login button',
              expected: 'User is redirected to dashboard',
              status: 'passed'
            }]}'
        {
          id: '2',
          name: 'User Login with Invalid Credentials',
          description: 'Test user login functionality with invalid email and password',
          suite: 'User Authentication Tests',
          status: 'failed','
          duration: 1.8,
          lastRun: new Date('2024-01-20T15:30:00'),
          aiGenerated: true,'
          automated: true,
          priority: 'high','
          flaky: false,
          errorMessage: 'Expected error message not displayed',
          steps: ['
            {
              id: '2-1',
              action: 'Navigate to login page',
              expected: 'Login form is displayed',
              status: 'passed'
            },'
{
              id: '2-2',
              action: 'Enter invalid email and password',
              expected: 'Error message is displayed',
              actual: 'No error message shown',
              status: 'failed'
            }]}'
        {
          id: '3',
          name: 'Payment Processing Flow',
          description: 'Test complete payment processing workflow',
          suite: 'Payment Processing Tests',
          status: 'passed','
          duration: 15.2,
          lastRun: new Date('2024-01-20T15:15:00'),
          aiGenerated: true,'
          automated: true,
          priority: 'critical',
          flaky: false,
          steps: ['
            {
              id: '3-1',
              action: 'Select payment method',
              expected: 'Payment method is selected',
              status: 'passed'
            },'
{
              id: '3-2',
              action: 'Enter payment details',
              expected: 'Payment details are validated',
              status: 'passed'
            },'
    {
              id: '3-3',
              action: 'Process payment',
              expected: 'Payment is processed successfully',
              status: 'passed'
            }]}'
        {
          id: '4',
          name: 'API Response Time Test',
          description: 'Test API response time under normal load',
          suite: 'API Performance Tests',
          status: 'failed','
          duration: 45.0,
          lastRun: new Date('2024-01-20T14:45:00'),
          aiGenerated: true,'
          automated: true,
          priority: 'high','
          flaky: true,
          errorMessage: 'Response time exceeded 2 seconds',
          steps: ['
            {
              id: '4-1',
              action: 'Send API request',
              expected: Response time 
  const filteredTestSuites = useMemo(() => {
    let filtered = testSuites.filter(suite => {'
      // Type filter';'
      if (filterType !== 'all' && suite.type !== filterType) return false;
      '
      // Status filter
      if (filterStatus !== 'all' && suite.status !== filterStatus) return false;
      
      // Search term filter
      if (searchTerm && !suite.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !suite.tags.some(tag = > tag.toLowerCase().includes(searchTerm.toLowerCase()))) {;
        return false;}
      return true;
    });

    // Sort test suites
    filtered.sort((a, b) => {'
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'coverage':'
          return b.coverage - a.coverage;
        case 'performance':'
          return b.passedTests / b.totalTests - a.passedTests / a.totalTests;
        case 'recent':
        default:
          return new Date(b.lastRun).getTime() - new Date(a.lastRun).getTime();}
    });

    return filtered;
  } [testSuites, filterType, filterStatus, searchTerm, sortBy]);
  const getStatusColor = (status: string) => {'
    switch (status) {';'
      case 'passed': return 'text-green-400 bg-green-500/20";
      case 'failed': return 'text-red-400 bg-red-500/20";
      case 'running': return 'text-blue-400 bg-blue-500/20";
      case 'pending': return 'text-yellow-400 bg-yellow-500/20";
      case 'skipped': return 'text-gray-400 bg-gray-500/20";
      default: return 'text-gray-400 bg-gray-500/20';}
  };
  const getTypeIcon = (type: string) => {'
    switch (type) {';'
      case 'unit': return '🧪";
      case 'integration': return '🔗";
      case 'e2e': return '🌐";
      case 'performance': return '⚡";
      case 'security': return '🔒";
      case 'accessibility': return '♿";
      default: return '📋';}
  };
  const getPriorityColor = (priority: string) => {'
    switch (priority) {';'
      case 'critical': return 'text-red-400";
      case 'high': return 'text-orange-400";
      case 'medium': return 'text-yellow-400";
      case 'low': return 'text-green-400";
      default: return 'text-gray-400';}
  };
  const getTrendIcon = (trend: string) => {'
    switch (trend) {';'
      case 'up': return '📈";
      case 'down': return '📉";
      case 'stable': return '➡️";
      default: return '➡️';}
  };

  const getPassRate = (passed: number, total: number) => {;
    return total > 0 ? (passed / total) * 100 : 0;
  };

  if (loading) {
    return (
    <div>
      </div><div className=" relative z-10 container-responsive py-8> 
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      
        <div className="text-center>" 
          </div><div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300" shadow-lg>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" 24">
              <circle className=" opacity-25 cx=12 cy=12 r=" 10" stroke="currentColor strokeWidth=4></circle>
              <path className="opacity-75" fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path>
            </svg>
            <span className="text-lg" font-medium>Loading AI-Powered Testing...</span>
          </div >
        </div>
      </div>"
    );}
"
  return ("
    <div className="relative" z-10 container-responsive py-8>
      <Head> 
        <title>AI-Powered Testing - Zion</title>
        <meta name=description content=Intelligent test automation, quality assurance, performance testing, and AI-driven testing analytics > </meta" name=description content="Intelligent test automation, quality assurance, performance testing, and AI-driven testing" analytics" ><meta name="keywords content=AI testing, test automation, quality assurance, performance testing, Zion > </meta" name="keywords" content="AI testing, test automation, quality assurance, performance testing," Zion" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0" z-50>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8>
          </div><div className="flex  justify-between h-16>
            <div className="flex" items-center>
              <Link href=/ className="flex-shrink-0"> </Link href=/  className="flex-shrink-0"><h1 className="text-2xl font-bold" text-white>
                  <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
                </h1>
              </Link>
            </div>
            <div className="hidden md flex items-center space-x-8">
              <Link href="/ai-powered-security" className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Security
              </Link href= /ai-powered-security" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors"></Link>
              <Link href=/ai-powered-content-management className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Content
              </Link href=/ai-powered-content-management className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Login
              </Link href=/auth/login  className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div>
          </div>
        </div>
      </nav>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-8>
        {/* Header */}
        </div><div className="text-center" mb-8>
          <h1 className="text-4xl" md text-5xl font-bold text-white mb-4 >
            AI-Powered Testing
          </h1>
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
            Intelligent test automation, quality assurance, performance testing, 
            and AI-driven testing analytics with automated test generation.
          </p>
        </div>
 
        {/* Tab Selector */}"
        <div className="flex" justify-center mb-8> 
          </div><div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-1>'
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
{ id: 'suites', name: 'Test Suites', icon: '📋' },
    { id: 'cases', name: 'Test Cases', icon: '🧪' },
{ id: 'executions', name: 'Executions', icon: '🔄' },
    { id: 'analytics', name: 'Analytics', icon: '📈'}
            ].map((tab) => (
                onClick={() => setSelectedView(tab.id as any)}
                className="{`flex" items-center space-x-2 px-4 py-4 rounded-md:text-sm font-medium transition-all duration-200 ${'
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'``
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
"'
        {/* Analytics Overview */},''
{selectedView === 'overview' && ("
          <div className=" grid grid-cols-1 md grid-cols-3 gap-6 mb-8>
            {analytics.map((metric) => (
              </div><div key={metric.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-center justify-between mb-4>
                  <h3 className="text-lg" font-semibold text-white >{metric.metric}</h3>
                  <span className="text-2xl>{getTrendIcon(metric.trend)}</span>"
                </div>
                <div className=" mb-4>
                  </div><div className="text-3xl" font-bold text-white mb-2>{metric.current}</div>
                  <p className="text-sm:text-gray-400>Target:" {metric.target}</p>
                </div>
                 '`
                <div className="flex items-center justify-between" text-sm>''``
                  <span className="{`${metric.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.improvement > 0 ? '+'   ''}, 
{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400>{metric.period}</span>"
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* Search and Filters */},'"'
{selectedView === 'suites' && (
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-xl p-6 mb-8 > 
            </div><div className="grid grid-cols-1 lg grid-cols-4" gap-4>
              <div className=" lg" col-span-2>
                
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full" bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus outline-none focus border-purple-500 transition-colors
                />
              </div>
              <div>
                 
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus outline-none focus border-purple-500" transition-colors
                >
                  <option value=all>All Types</option>
                  <option value="unit>Unit Tests</option>
                  <option value="integration>Integration Tests</option>
                  <option value="e2e>End-to-End Tests</option>
                  <option value="performance>Performance Tests</option>
                  <option value="security>Security Tests</option>
                  <option value=accessibility>Accessibility Tests</option>
                </select>
              </div>
              
              <div>
                
                  onChange={(e) ="> setSortBy(e.target.value as any)}"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus outline-none focus border-purple-500  transition-colors
                >
                  <option value=recent>Sort by Recent</option>
                  <option value=priority>Sort by Priority</option>
                  <option value="coverage>Sort by Coverage</option>
                  <option value=performance>Sort by Performance</option>
                </select>
              </div">
            </div>
          </div>
        )}
        {/* Test Suites List */},"'
{selectedView === 'suites' && ("
          <div className=" grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6>
            {filteredTestSuites.map((suite) => (
              </div><div key={suite.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-start justify-between mb-4> 
                  </div><div className="flex items-center space-x-3 >
                    <div className="text-3xl>{getTypeIcon(suite.type)}</div>" 
                    <div>
                      <h3 className="text-lg" font-semibold text-white mb-1>{suite.name}</h3>
                      <p className="text-gray-300" text-sm:capitalize>{suite.type} Tests</p>
                    </div>
                  </div>`
                  <div className="text-right >``
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(suite.status)}`}>
                      {suite.status.toUpperCase()}
                    </span>`
                    <div className="mt-2>``"
                      <span className="{`px-4" py-3 rounded text-xs font-medium ${getPriorityColor(suite.priority)} bg-opacity-20`}>
                        {suite.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid" grid-cols-2 gap-4 mb-4>
                  </div><div>
                    <p className="text-sm" text-gray-400>Total Tests</p>
                    <p className="text-lg" font-semibold text-white>{suite.totalTests}</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>Pass" Rate</p>
                    <p className="text-lg" font-semibold text-green-400 >{getPassRate(suite.passedTests, suite.totalTests).toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Coverage</p>
                    <p className="text-lg" font-semibold text-blue-400>{suite.coverage}%</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>Duration</p>"
                    <p className="text-lg" font-semibold text-orange-400 >{suite.duration}s</p>
                  </div>
                </div>

                <div className="mb-4>" 
                  </div><div className="flex justify-between text-sm" mb-2>
                    <span className="text-green-400>Passed:" {suite.passedTests}</span>
                    <span className="text-red-400>Failed:" {suite.failedTests}</span>
                    <span className="text-gray-400>Skipped"  {suite.skippedTests}</span>
                  </div>
                  <div className="w-full" bg-gray-700 rounded-full h-2>
                    </div>
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm:text-gray-400" mb-2>Tags </p>
                  <div className="flex flex-wrap" gap-2>
                    {suite.tags.map((tag, index) => (
                      <span key={index} className="px-4" py-3 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
'
                <div className="flex" items-center justify-between text-sm text-gray-400 mb-4 >
                  <span>AI Generated: {suite.aiGenerated ? '✅' : '❌'}</span>
                  <span>Last Run: {suite.lastRun.toLocaleString()}</span>
                </div>
                <div className=" flex" space-x-3>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105> 
                    Run Tests
                  </button>
                  <button className="border" border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 backdrop-blur-sm>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* Test Cases */},
{selectedView === 'cases' && ("
          <div className="space-y-6>" 
            {testCases.map((testCase) => (
              </div><div key={testCase.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-start justify-between mb-4> 
                  </div><div>
                    <h3 className="text-lg" font-semibold text-white mb-2>{testCase.name}</h3>
                    <p className="text-gray-300" text-sm >{testCase.description}</p>
                    <p className="text-gray-400" text-sm>Suite  {testCase.suite}</p> 
                  </div>`
                  <div className="text-right">``
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(testCase.status)}`}>
                      {testCase.status.toUpperCase()} 
                    </span>`
                    <div className="mt-2"">``
                      <span className="{`px-4" py-3 rounded text-xs font-medium ${getPriorityColor(testCase.priority)} bg-opacity-20`}>
                        {testCase.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid" grid-cols-2 md grid-cols-4 gap-4 mb-4> 
                  </div><div>
                    <p className="text-sm:text-gray-400>Duration</p>"
                    <p className="text-lg" font-semibold text-orange-400 >{testCase.duration}s</p>
                  </div>
                  <div>'
                    <p className="text-sm" text-gray-400>Automated</p>
                    <p className="text-lg" font-semibold text-green-400>{testCase.automated ? 'Yes'   'No'}</p>
                  </div>
                  <div>'
                    <p className="text-sm:text-gray-400>AI" Generated</p>
                    <p className="text-lg" font-semibold text-blue-400 >{testCase.aiGenerated ? 'Yes' : 'No'}</p>
                  </div>
                  <div>'
                    <p className="text-sm" text-gray-400>Flaky</p>
                    <p className="text-lg" font-semibold text-red-400>{testCase.flaky ? 'Yes'   'No'}</p>
                  </div>
                </div>
                {testCase.errorMessage && (
                  <div className="mb-4" p-3 bg-red-500/20 border border-red-500/30 rounded-lg>
                    <p className="text-sm" text-red-300 font-medium >Error:</p>
                    <p className="text-sm" text-red-200>{testCase.errorMessage}</p>
                  </div>
                )} 

                <div className="mb-4">
                  <p className="text-sm:text-gray-400" mb-2>Test Steps </p>
                  <div className="space-y-2">
                    {testCase.steps.map((step) => (
                      </div><div key={step.id} className=" bg-white/5 rounded" p-3>
                        <div className=" flex items-center justify-between" text-sm>`
                          <span className="text-gray-300>{step.action}</span>``"
                          <span className="{`px-4" py-3 rounded text-xs font-medium ${getStatusColor(step.status)}`}>
                            {step.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400" mt-1>
                          Expected  {step.expected},
{step.actual && <span className="text-red-400" ml-2>Actual  {step.actual}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex" space-x-3>
                  <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >
                    Run Test
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Edit Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* Test Executions */}, ''
{selectedView === 'executions' && (
          <div className="space-y-6>
            {executions.map((execution) => (
              </div><div key={execution.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-start justify-between mb-4>
                  </div><div>
                    <h3 className="text-lg" font-semibold text-white mb-2>Test Execution #{execution.id}</h3> 
                    <p className="text-gray-300" text-sm>Environment  {execution.environment}</p>'
                    <p className="text-gray-400" text-sm>
                      {execution.startTime.toLocaleString()} - {execution.endTime ? execution.endTime.toLocaleString() : 'Running...'}
                    </p>
                  </div>`
                  <div className="text-right>``"
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(execution.status)}`}>
                      {execution.status.toUpperCase()}
                    </span>
                    <div className="mt-2" text-sm:text-gray-400>
                      Duration  {execution.duration}s
                    </div>
                  </div>
                </div>
                <div className="grid" grid-cols-2 md:grid-cols-4 gap-4 mb-4>
                  </div><div>
                    <p className="text-sm:text-gray-400>Total" Tests</p>
                    <p className="text-lg" font-semibold text-white>{execution.totalTests}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Passed</p>
                    <p className="text-lg" font-semibold text-green-400>{execution.passedTests}</p>
                  </div> 
                  <div>
                    <p className="text-sm:text-gray-400>Failed</p>"
                    <p className="text-lg" font-semibold text-red-400>{execution.failedTests}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Coverage</p>
                    <p className="text-lg" font-semibold text-blue-400>{execution.coverage}%</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm:text-gray-400" mb-2>Performance Metrics </p>
                  <div className="grid" grid-cols-2 md grid-cols-4 gap-4>
                    </div><div>
                      <p className="text-xs" text-gray-400>Avg Response</p>
                      <p className="text-sm" font-semibold text-white >{execution.performance.avgResponseTime}s</p>
                    </div>
                    <div>
                      <p className="text-xs" text-gray-400>Max Response</p>
                      <p className="text-sm" font-semibold text-orange-400>{execution.performance.maxResponseTime}s</p>
                    </div>
                    <div>
                      <p className="text-xs" text-gray-400>Throughput</p>
                      <p className="text-sm" font-semibold text-blue-400 >{execution.performance.throughput}/s</p>
                    </div>
                    <div>
                      <p className="text-xs" text-gray-400>Error Rate</p>
                      <p className="text-sm" font-semibold text-red-400>{execution.performance.errorRate}%</p>
                    </div>
                  </div> 
                </div>
                <div className="flex" space-x-3>
                  <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >
                    View Details
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Download Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
"
        {/* Call to Action */}"
        <div className="mt-12" text-center> 
          </div><div className="bg-gradient-to-br" from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl:p-8>
            <h2 className="text-3xl" font-bold text-white mb-4 >
              Test with AI Intelligence
            </h2>
            <p className="text-xl" text-gray-300 mb-8 max-w-2xl mx-auto>
              Leverage intelligent testing to ensure quality with AI-driven "
              test automation, performance testing, and automated test generation.
            </p>
            <div className=" flex flex-col sm flex-row gap-4" justify-center>
              <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105>
                Create Tests 
              </button>
              <Link href=/service-marketplace" className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Services
              </Link href=/service-marketplace  className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div> 
  </div>
;
};
''`
export default AIPoweredTestingPage ")"'"'`