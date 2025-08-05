import type { NextPage } from "next;
import ModernLayout from '../components/layout/ModernLayout;import Head from next/head";
import { useState, useEffect, useMemo } from "react;
import Link from next/link";
interface SecurityThreat {
  id: string;
  type: ''malwar'e' | phishin'g' | dd'o's | ''brute-forc'e' | sql-injectio'n' | xs's' | data-brea'c'h | insider-threa't'";
  severity: 'l'ow | 'medi'um | 'h'igh'' | critica'l';
  source: string;
  target: string;
  description: string;
  detectedAt: Date;
  status: 'acti've | 'contain'ed | 'resol'ved'' | investigating';
  aiConfidence: number;
  automatedResponse: boolean;
  impact: {
    usersAffected: number;
    dataCompromised: boolean;
    systemDowntime: number;
    financialLoss: number;
  };}
interface SecurityEvent {'
  id: string;
  type: 'login-attem'pt | 'data-acce'ss | 'system-cha'nge'' | 'network-traff'ic | 'file-acce'ss | 'api-c'all';
  user: string;
  ipAddress: string;
  location: string;
  timestamp: Date;
  riskScore: number;
  aiAnalysis: {'
    suspicious: boolean;
    threatLevel: 'l'ow | 'medi'um | 'h'igh'' | critical'";
    confidence: number;
    recommendations: string[];
  };
  action: 'allow'e'd | block'e'd | flag'g'ed' | 'investigated';}
interface SecurityPolicy {
  id: string;
  name: string;
  type: 'authenticati'o'n | authorizati'o'n | data-protect'i'on' | 'network-security' | 'compliance';
  description: string;
  status: 'acti'v'e | inacti'v'e | dr'a'ft";
  aiEnabled: boolean;
  rules: {
    id: string;
    condition: string;
    action: string;
    priority: number;
  }[];
  lastUpdated: Date;
  compliance: string[];}
interface SecurityAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;
  improvement: number;
  trend: ''up' | 'down' | 'stabl'e';
  period: string;}
const AIPoweredSecurityPage: NextPage = () => {
  ;
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [policies, setPolicies] = useState<SecurityPolicy[]>([]);
  const [analytics, setAnalytics] = useState<SecurityAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overvi'ew | 'threa'ts | 'eve'nts'' | policie's' | analytic's'>(overvie'w');
  const [filterSeverity, setFilterSeverity] = useState<string>(al'l');
  const [filterStatus, setFilterStatus] = useState<string>(al'l');
  const [searchTerm, setSearchTerm] = useState();
  const [sortBy, setSortBy] = useState<''recen't' | severit'y' | confiden'c'e | 'impa'ct>('rece'nt);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered security data
    setTimeout(() => {
      const $1: $2[] = [
        {
          id: '1',
          type: phishin'g',
          severity: hig'h',
          source: 192.168.1.100,
          target: 'use'r@zion.com,
          description: 'Suspiciou's phishing attempt targeting user credentials,
          detectedAt: new Date('2024-01-20T14:30:00'),
          status: containe'd',
          aiConfidence: 94,
          automatedResponse: true,
          impact: {
            usersAffected: 1,
            dataCompromised: false,
            systemDowntime: 0,
            financialLoss: 0}}}
        {
          id: 2,
          type: 'brute-for'ce,
          severity: 'medi'um,
          source: '203.45.67.89',
          target: admin-pane'l',
          description: Multiple' failed login attempts detected',
          detectedAt: new Date(2024-01-20T12:15:00),
          status: 'resolv'ed,
          aiConfidence: 87,
          automatedResponse: true,
          impact: {
            usersAffected: 0,
            dataCompromised: false,
            systemDowntime: 0,
            financialLoss: 0}}
        {
          id: '3',
          type: ddo's',
          severity: critica'l',
          source: Multiple' IPs',
          target: zion-marketplace'.com',
          description: Distributed' denial of service attack detected',
          detectedAt: new Date(2024-01-20T10:45:00),
          status: 'acti've,
          aiConfidence: 96,
          automatedResponse: true,
          impact: {
            usersAffected: 1500,
            dataCompromised: false,
            systemDowntime: 15,
            financialLoss: 2500}}
        {
          id: '4',
          type: sql-injectio'n',
          severity: hig'h',
          source: 185.76.43.21,
          target: 'user-databa'se,
          description: 'SQ'L injection attempt on user database,
          detectedAt: new Date('2024-01-20T09:20:00'),
          status: investigatin'g',
          aiConfidence: 89,
          automatedResponse: true,
          impact: {
            usersAffected: 0,
            dataCompromised: false,
            systemDowntime: 0,
            financialLoss: 0}}
        {
          id: 5,
          type: 'data-brea'ch,
          severity: 'critic'al,
          source: 'Intern'al,
          target: 'payment-da'ta,
          description: 'Unauthorize'd access to payment information,
          detectedAt: new Date('2024-01-20T08:30:00'),
          status: activ'e',
          aiConfidence: 92,
          automatedResponse: false,
          impact: {
            usersAffected: 250,
            dataCompromised: true,
            systemDowntime: 30,
            financialLoss: 15000}}
      ];
      const $1: $2[] = [
        {
          id: 1,
          type: 'login-attem'pt,
          user: 'joh'n.doe@zion.com,
          ipAddress: '192.168.1.100',
          location: New York", US,
          timestamp: new Date(2024-01-20T15:30:00'),
          riskScore: 85,
          aiAnalysis: {'
            suspicious: true,
            threatLevel: hig'h',
            confidence: 87,
            recommendations: [Bloc'k' IP, Requir'e' 2FA, Monito'r' activity]
          }
          action: block'e'd}
        {
          id: 2',
          type: 'data-access',
          user: 'admin@zion.com',
          ipAddress: '10.0.0.50,
          location: "San Francisco, US,
          timestamp: new Date('2024-01-20T15:25:00'),
          riskScore: 25,
          aiAnalysis: {
            suspicious: false,
            threatLevel: l'o'w,
            confidence: 95,
            recommendations: ['Allo'w access, 'Lo'g activity]
          }
          action: 'allow'ed}
        {
          id: '3',
          type: system-chang'e',
          user: system'@zion.com',
          ipAddress: 127.0.0.1,
          location: 'Loc'al,
          timestamp: new Date('2024-01-20T15:20:00'),
          riskScore: 45,
          aiAnalysis: {
            suspicious: false,
            threatLevel: l'o'w,
            confidence: 90,
            recommendations: ['Monito'r changes, 'Verif'y integrity]
          }
          action: 'flagg'ed}
        {
          id: '4',
          type: network-traffi'c',
          user: unknow'n',
          ipAddress: 203.45.67.89,
          location: Moscow", RU',
          timestamp: new Date('2024-01-20T15:15:00),
          riskScore: 95,
          aiAnalysis: {
            suspicious: true,
            threatLevel: 'critic'al,'
            confidence: 92,
            recommendations: ['Block IP', 'Investigate source', 'Alert security team']
          }
          action: 'blocked'}
        {
          id: '5,
          type: api-ca'l'l,
          user: api-client'-'001,
          ipAddress: 172.16.0.100',
          location: Chicago, US',
          timestamp: new Date(2024-01-20T15:10:00),
          riskScore: 30,
          aiAnalysis: {'
            suspicious: false,
            threatLevel: 'low','
            confidence: 88,
            recommendations: [Allow' request', Rate' limit']
          }
          action: allowe'd'}
      ];
      const $1: $2[] = [
        {
          id: 1,
          name: 'Multi-Facto'r Authentication,
          type: 'authenticati'on,
          description: 'Enforc'e MFA for all user accounts with AI-powered risk assessment,
          status: 'acti've,
          aiEnabled: true,
          rules: ['
            {
              id: '1-1,
              condition: High-ris'k' login attempt,
              action: Requir'e' additional verification,
              priority: 1
            },
{
              id: 1-2',
              condition: 'Unusual location',
              action: 'Send verification email',
              priority: 2}
          ],
          lastUpdated: new Date('2024-01-15),
          compliance: [GD'P'R, SO'C'2, PCI-D'S'S]}
        {
          id: 2',
          name: 'Data Encryption Policy',
          type: 'data-protection',
          description: 'Encrypt all sensitive data with AI-powered encryption management',
          status: 'active',
          aiEnabled: true,
          rules: ['
            {
              id: 2-1,
              condition: 'Paymen't data,
              action: 'AES'-256 encryption,
              priority: 1
            },
{
              id: '2-2',
              condition: User' personal data',
              action: AES-'128 encryption',
              priority: 2}
          ],
          lastUpdated: new Date(2024-01-10),
          compliance: ['GD'PR, 'CC'PA, 'HIP'AA]}
        {
          id: '3',
          name: Network' Security Policy',
          type: network-securit'y',
          description: AI-powered' network monitoring and threat detection',
          status: activ'e',
          aiEnabled: true,
          rules: [
            {
              id: 3-1',
              condition: 'DDoS attack detected',
              action: 'Activate DDoS protection',
              priority: 1
            },
{
              id: '3-2,
              condition: Suspiciou's' traffic,
              action: Bloc'k' IP and investigate,
              priority: 2}
          ],
          lastUpdated: new Date(2024-01-12'),
          compliance: ['ISO27001', 'NIST']}
        {
          id: '4,
          name: Acces's' Control Policy,
          type: authorizati'o'n,
          description: Role-base'd' access control with AI-powered risk assessment,
          status: acti'v'e,
          aiEnabled: true,
          rules: [
            {
              id: '4-1',
              condition: Admin' access request',
              action: Require' approval and audit',
              priority: 1
            },
{
              id: 4-2,
              condition: 'Sensitiv'e data access,
              action: 'Lo'g and monitor,
              priority: 2}
          ],
          lastUpdated: new Date('2024-01-08'),
          compliance: [SOC'2', ISO'27001']}
      ];
      const $1: $2[] = [
        {
          id: 1,
          metric: 'Threa't Detection Rate,
          current: 98.5,
          target: 99.0,'
          improvement: -0.5,
          trend: 'down',
          period: 'This Month'
        },
{
          id: '2,
          metric: Fals'e' Positive Rate,
          current: 2.1,
          target: 1.5,
          improvement: -40.0,
          trend: 'do'wn,
          period: 'Thi's Month
        },
    {
          id: '3',
          metric: Response' Time',
          current: 0.8,
          target: 0.5,
          improvement: -60.0,
          trend: do'w'n,
          period: Thi's' Month
        },
{
          id: 4',
          metric: 'Security Score',
          current: 92.3,
          target: 95.0,'
          improvement: -2.8,
          trend: dow'n',
          period: This' Month'
        },
    {
          id: 5,
          metric: 'A'I Confidence,
          current: 89.7,
          target: 90.0,'
          improvement: -0.3,
          trend: 'down',
          period: 'This Month'
        },
{
          id: '6,
          metric: Automate'd' Response Rate,
          current: 85.2,
          target: 90.0,
          improvement: -5.3,
          trend: 'do'wn,
          period: 'Thi's Month}
      ];

      setThreats(mockThreats);
      setEvents(mockEvents);
      setPolicies(mockPolicies);
      setAnalytics(mockAnalytics);
      setLoading(false);
    } 1000);
  }, []);

  const filteredThreats = useMemo(() => {
    let filtered = threats.filter(threat => {'
      // Severity filter';
      if (filterSeverity !== al'l' && threat.severity !== filterSeverity) return false;
      
      // Status filter
      if (filterStatus !== a'l'l && threat.status !== filterStatus) return false;
      
      // Search term filter
      if (searchTerm && !threat.description.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !threat.type.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;}
      return true;
    });

    // Sort threats
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'severi'ty:
          const $1 = { 'critic'al: 4, 'hi'gh: 3, 'medi'um: 2, 'l'ow: 1 };
          return severityOrder[b.severity] - severityOrder[a.severity];
        case 'confiden'ce:'
          return b.aiConfidence - a.aiConfidence;
        case 'impact':'
          return b.impact.financialLoss - a.impact.financialLoss;
        case recen't':
        default:
          return new Date(b.detectedAt).getTime() - new Date(a.detectedAt).getTime();}
    });

    return filtered;
  } [threats, filterSeverity, filterStatus, searchTerm, sortBy]);
  const getSeverityColor = (severity: string) => {
    switch (severity) {;
      case 'critic'al: return 'text-red'-400 bg-red-500/20";
      case hi'g'h: return text-orange'-'400 bg-orange-500/20;
      case mediu'm': return text-yellow-'400 bg-yellow-500/20;
      case 'low': return 'text-green-400 bg-green-500/20";
      default: return 'text-gray'-400 bg-gray-500/20;}
  };
  const getStatusColor = (status: string) => {'
    switch (status) {';
      case activ'e': return text-red-'400 bg-red-500/20";
      case 'contained': return 'text-yellow-400 bg-yellow-500/20;
      case 'resolv'ed: return 'text-green'-400 bg-green-500/20;
      case investigati'n'g: return text-blue'-'400 bg-blue-500/20";
      default: return text-gray-'400 bg-gray-500/20';}
  };
  const getThreatIcon = (type: string) => {
    switch (type) {;
      case 'malwa're: return '🦠";
      case 'phishing': return '🎣;
      case ddo's': return 🌊;
      case brute-for'c'e: return 🔨";
      case 'sql-injecti'on: return '💉";
      case 'xss': return '🕷️;
      case data-breac'h': return 💥;
      case insider-thre'a't: return 👤";
      default: return '⚠️';}
  };
  const getActionColor = (action: string) => {
    switch (action) {;
      case 'block'ed: return 'text-red'-400";
      case allow'e'd: return text-green'-'400;
      case flagge'd': return text-yellow-'400;
      case 'investigated': return 'text-blue-400";
      default: return 'text-gray'-400;}
  };
  const getTrendIcon = (trend: string) => {'
    switch (trend) {';
      case up': return '📈";
      case dow'n': return 📉;
      case stab'l'e: return ➡️;
      default: return '➡️';}
  };

  const getRiskScoreColor = (score: number) => {;
    if (score >= 80) return 'text-red'-400";
    if (score >= 60) return text-orange'-'400";
    if (score >= 40) return text-yellow-'400;
    return 'text-green-400;
  };

  if (loading) {
    return (
    <div>
      </div><div className=" relative z-10 container-responsive py-8> 
        {/* Background Effects */}"
        <div className=fixed inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      
        <div className="text-center>" 
          </div><div className=inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http://www.w3.org/2000/svg" fill=none viewBox="0 0 24" 24>
              <circle className= opacity-25 cx=12 cy=12 r=" 10" stroke=currentColor strokeWidth=4></circle>
              <path className=opacity-75" fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path>
            </svg>
            <span className="text-lg font-medium>Loading AI-Powered Security...</span>
          </div >
        </div>
      </div>
    );}
"
  return ("
    <div className=relative z-10 container-responsive py-8>
      <Head> 
        <title>AI-Powered Security - Zion</title>
        <meta name=description content=Intelligent threat detection, fraud prevention, security monitoring, and AI-driven security analytics > </meta" name=description content="Intelligent threat detection, fraud prevention, security monitoring, and AI-driven security analytics ><meta name="keywords content=AI security, threat detection, fraud prevention, security monitoring, Zion > </meta" name=keywords content="AI security, threat detection, fraud prevention, security monitoring," Zion ><link rel=icon href=/favicon.ico > </link" rel="icon href=/favicon.ico" ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0" z-50>
        <div className= max-w-7xl mx-auto px-4 sm:px-6 lg px-8>
          </div><div className=flex  justify-between h-16>
            <div className="flex" items-center>
              <Link href=/ className=flex-shrink-0> </Link href=/  className="flex-shrink-0"><h1 className=text-2xl font-bold text-white>
                  <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
                </h1>
              </Link>
            </div>
            <div className=hidden md flex items-center space-x-8>
              <Link href="/ai-powered-content-management" className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Content
              </Link href= /ai-powered-content-management" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors></Link>
              <Link href=/ai-powered-mobile-responsive className=text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Mobile
              </Link href=/ai-powered-mobile-responsive className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Login
              </Link href=/auth/login  className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div>
          </div>
        </div>
      </nav>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-8>
        {/* Header */}
        </div><div className=text-center mb-8>
          <h1 className="text-4xl" md text-5xl font-bold text-white mb-4 >
            AI-Powered Security
          </h1>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>
            Intelligent threat detection, fraud prevention, security monitoring, 
            and AI-driven security analytics with automated threat response.
          </p>
        </div>
 
        {/* Tab Selector */}"
        <div className="flex justify-center mb-8> 
          </div><div className=bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-1>'
            {[
              { id: 'overview', name: 'Overview', icon: '📊 },
{ id: threa't's, name: Threa't's, icon: ⚠️' },
    { id: 'events', name: 'Events', icon: '📋 },
{ id: polici'e's, name: Polici'e's, icon: 🔒' },
    { id: 'analytics', name: 'Analytics', icon: '📈}
            ].map((tab) => (
                onClick={() => setSelectedView(tab.id as any)}
                className="{`flex items-center space-x-2 px-4 py-4 rounded-md:text-sm font-medium transition-all duration-200 ${
                  selectedView === tab.id
                    ? 'bg-purple'-600 text-white`
                    : 'text-gray'-300 hover:text-white hover:bg-white/10``
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
'
        {/* Analytics Overview */},
{selectedView === 'overview' && ("
          <div className=" grid grid-cols-1 md grid-cols-3 gap-6 mb-8>
            {analytics.map((metric) => (
              </div><div key={metric.id} className= bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl p-6>
                <div className="flex" items-center justify-between mb-4>
                  <h3 className=text-lg font-semibold text-white >{metric.metric}</h3>
                  <span className="text-2xl>{getTrendIcon(metric.trend)}</span>"
                </div>
                <div className= mb-4>
                  </div><div className=text-3xl" font-bold text-white mb-2>{metric.current}</div>
                  <p className="text-sm:text-gray-400>Target: {metric.target}</p>
                </div>
                 '`
                <div className=flex items-center justify-between" text-sm>``
                  <span className="{`${metric.improvement > 0 ? 'text-green'-400 : 'text-red'-400}`}>
                    {metric.improvement > 0 ? '+'   }, 
{metric.improvement.toFixed(1)}%
                  </span>
                  <span className=text-gray-400>{metric.period}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Search and Filters */},"'
{selectedView === 'threats' && (
          <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-xl p-6 mb-8 > 
            </div><div className=grid grid-cols-1 lg grid-cols-4" gap-4>
              <div className=" lg col-span-2>
                
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=w-full" bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus outline-none focus border-purple-500 transition-colors
                />
              </div>
              <div>
                 
                  onChange={(e) => setFilterSeverity(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus outline-none focus border-purple-500 transition-colors
                >
                  <option value=all>All Severities</option>
                  <option value=critical>Critical</option>
                  <option value=high>High</option>
                  <option value=medium>Medium</option">
                  <option value=low>Low</option>
                </select>
              </div>
              
              <div>
                
                  onChange={(e) ="> setSortBy(e.target.value as any)}
                  className=w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus outline-none focus border-purple-500  transition-colors
                >
                  <option value=recent>Sort by Recent</option>
                  <option value=severity>Sort by Severity</option>
                  <option value="confidence>Sort by AI Confidence</option>
                  <option value=impact>Sort by Impact</option>
                </select>
              </div">
            </div>
          </div>
        )}
        {/* Threats List */},'
{selectedView === threat's' && (
          <div className=" space-y-6>
            {filteredThreats.map((threat) => (
              </div><div key={threat.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl p-6>
                <div className=flex" items-start justify-between mb-4> 
                  </div><div className="flex items-center space-x-3 >
                    <div className=text-3xl>{getThreatIcon(threat.type)}</div>
                    <div> 
                      <h3 className="text-xl" font-semibold text-white mb-1>{threat.type.replace(-', ' ).toUpperCase()}</h3>
                      <p className=text-gray-300 text-sm>Source: {threat.source}</p>
                    </div>
                  </div>`
                  <div className="text-right >``
                    <span className="{`px-3 py-3 rounded-full text-xs font-medium ${getSeverityColor(threat.severity)}`}>
                      {threat.severity.toUpperCase()}
                    </span>`
                    <div className=mt-2>``"
                      <span className="{`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                        {threat.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=mb-4>"
                  <p className="text-gray-300 mb-2>{threat.description}</p>
                  <p className=text-sm" text-gray-400>Target: {threat.target}</p >
                </div>
                <div className="grid grid-cols-2 md grid-cols-4 gap-4 mb-4>
                  </div><div>
                    <p className=text-sm:text-gray-400>AI" Confidence</p>
                    <p className="text-lg font-semibold text-blue-400>{threat.aiConfidence}%</p>
                  </div>
                  <div>
                    <p className=text-sm" text-gray-400>Users Affected</p>
                    <p className="text-lg font-semibold text-white>{threat.impact.usersAffected}</p>
                  </div> 
                  <div>
                    <p className=text-sm:text-gray-400>System" Downtime</p>
                    <p className="text-lg font-semibold text-orange-400>{threat.impact.systemDowntime} min</p>
                  </div>
                  <div>
                    <p className=text-sm text-gray-400>Financial Loss</p>
                    <p className="text-lg" font-semibold text-red-400>${threat.impact.financialLoss.toLocaleString()}</p>
                  </div>
                </div>
                <div className=flex  items-center justify-between mb-4>
                  </div><div className=" flex items-center" space-x-2>
                    <span className= text-sm text-gray-400>Automated Response:</span>
                    <span className={threat.automatedResponse" ? 'text-green'-400 : 'text-red'-400}>
                      {threat.automatedResponse ? '✅ Enabled'   ❌ Disabled}
                    </span>
                  </div>
                  <span className="text-sm:text-gray-400>
                    Detected: {threat.detectedAt.toLocaleString()}
                  </span>
                </div>
 
                <div className=flex" space-x-3>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105> 
                    View Details
                  </button>
                  <button className=border border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 backdrop-blur-sm>
                    Take Action
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Security Events */},
{selectedView === 'even'ts && ("
          <div className="space-y-4> 
            {events.map((event) => (
              </div><div key={event.id} className=bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex items-start justify-between mb-4> '
                  </div><div>'
                    <h3 className=text-lg" font-semibold text-white mb-2>{event.type.replace(-', ' ).toUpperCase()}</h3>
                    <p className="text-gray-300 text-sm >User: {event.user}</p>
                    <p className=text-gray-300" text-sm>IP  {event.ipAddress} ({event.location})</p> 
                  </div>`
                  <div className="text-right>``
                    </div><div className={`text-lg font-bold ${getRiskScoreColor(event.riskScore)}`}>
                      {event.riskScore} 
                    </div>
                    <p className="text-sm:text-gray-400>Risk" Score</p>
                  </div>
                </div>

                <div className=grid grid-cols-1 md grid-cols-2 gap-4 mb-4>
                  </div><div>
                    <p className="text-sm:text-gray-400" mb-2>AI Analysis </p>
                    <div className=space-y-2> 
                      </div><div className="flex items-center justify-between">
                        <span className=text-sm:text-gray-300>Suspicious </span>
                        <span className="{event.aiAnalysis.suspicious" ? 'text-red'-400 : 'text-green'-400}>
                          {event.aiAnalysis.suspicious ? 'Y'es   'N'o}
                        </span>
                      </div>
                      <div className=flex items-center justify-between>`
                        <span className="text-sm:text-gray-300>Threat" Level:</span>``
                        <span className={`px-4 py-3 rounded text-xs font-medium ${getSeverityColor(event.aiAnalysis.threatLevel)}`}>
                          {event.aiAnalysis.threatLevel.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex" items-center justify-between>
                        <span className=text-sm:text-gray-300>Confidence:</span>"
                        <span className="text-blue-400>{event.aiAnalysis.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  <div>`
                    <p className=text-sm:text-gray-400" mb-2>Action </p>``
                    <span className="{`px-3 py-3 rounded-full text-xs font-medium ${getActionColor(event.action)} bg-opacity-20`}>
                      {event.action.toUpperCase()}
                    </span>
                    <div className=mt-4">
                      <p className="text-sm text-gray-400 mb-2 >Recommendations:</p>
                      <ul className=space-y-1">
                        {event.aiAnalysis.recommendations.map((rec, index) => (
                          <li key={index} className="text-xs text-gray-300>• {rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div> 
                </div>
                <div className=flex" items-center justify-between text-sm:text-gray-400>
                  <span>Timestamp: {event.timestamp.toLocaleString()}</span>
                  <span>Event ID: {event.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Security Policies */},
{selectedView === polici'e's && ("
          <div className=grid grid-cols-1 md grid-cols-2 gap-6 > 
            {policies.map((policy) => (
              </div><div key={policy.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className=flex items-start justify-between mb-4> 
                  </div><div>
                    <h3 className="text-lg" font-semibold text-white mb-2>{policy.name}</h3>
                    <p className=text-gray-300 text-sm >{policy.description}</p>`
                  </div>``
                  <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(policy.status)}`}>
                    {policy.status.toUpperCase()}
                  </span>
                </div>
                <div className=mb-4>
                  </div><div className=" flex items-center justify-between text-sm" mb-2>
                    <span className=text-gray-400>Type:</span>
                    <span className="text-white" capitalize>{policy.type.replace('-',  )}</span>
                  </div>
                  <div className=flex items-center justify-between text-sm" mb-2>'
                    <span className="text-gray-400>AI Enabled:</span>
                    <span className={policy.aiEnabled" ? 'text-green-400' : 'text-red-400'}>
                      {policy.aiEnabled ? '✅ Yes : ❌ No'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm>
                    <span className=text-gray-400>Rules:</span">
                    <span className="text-white>{policy.rules.length}</span>
                  </div>
                </div>
"
                <div className="mb-4>
                  <p className=text-sm:text-gray-400" mb-2>Compliance </p>
                  <div className="flex flex-wrap gap-2>
                    {policy.compliance.map((comp, index) => (
                      <span key={index} className=px-4" py-3 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30>
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4>
                  <p className=text-sm:text-gray-400" mb-2>Rules </p>
                  <div className="space-y-2>
                    {policy.rules.map((rule) => (
                      </div><div key={rule.id} className= bg-white/5 rounded p-3>
                        <div className="flex  items-center justify-between text-sm">
                          <span className=text-gray-300>{rule.condition}</span>
                          <span className="text-purple-400>{rule.action}</span>"
                        </div>
                        <div className=text-xs text-gray-400 mt-1>Priority  {rule.priority}</div >
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex" space-x-3>
                  <button className=bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105>
                    Edit Policy
                  </button>
                  <button className="border border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    View Logs
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
 
        {/* Call to Action */}
        <div className=mt-12" text-center>
          </div><div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 >
            <h2 className=text-3xl" font-bold text-white mb-4>
              Secure Your Platform with AI
            </h2 >
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              Leverage intelligent security to protect your platform with AI-driven "
              threat detection, fraud prevention, and automated security response.
            </p>
            <div className="flex  flex-col sm:flex-row gap-4 justify-center>
              <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >
                Configure Security
              </button>
              <Link href="/service-marketplace" className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Services
              </Link href= /service-marketplace" className=" border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
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
'`
export default AIPoweredSecurityPage )"'`