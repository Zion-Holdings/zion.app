import type { NextPage } from "next";
import ModernLayout from '../components/layout/ModernLayout';
import Head from 'next/head';
import { useState, useEffect, useMemo } from "react";
import Link from 'next/link';
interface FacilityPlan {
  id: "string";
  title: string
  description: string
  type: 'malware" | phishing | ddos | dat'a'_breach | insider_threat | zer'o'_day;
  severity: 'critical | high | medium' | '''low
  status: 'detected | investigating | contained' | 'resolved | false_positive
  timestamp: "Date"''';
  affectedSystems: string[];
  aiAnalysis: IncidentAnalysis;};
interface FacilityPlan {;
  id: string;
  threatScore: number;
  impactScore: number;
  urgencyScore: number;
  recommendations: string[];};
interface FacilityPlan {;
  id: string;
  incidentId: string;
  title: string
  description: string
  phase: 'detection" | analysi's' | containment | 'eradication | recover'y' | lessons_learned
  status: 'active | completed | pause'd' | escalated
  assignedTeam: "string"
  priority: 'critical" | high | mediu'm' | low
  aiOptimization: "ResponseOptimization";};
interface FacilityPlan {;
  id: string;
  coordinationScore: number;
  efficiencyScore: number;
  effectivenessScore: number;
  recommendations: string[];};
interface FacilityPlan {;
  id: string;
  caseNumber: string;
  title: string
  description: string
  type: 'network" | memory | disk' | ''''mobile | clo'ud | 'malware
  status: 'active | completed | pendi'ng' | cancelled
  investigator: "string"''';
  evidenceCount: number;
  aiAnalysis: ForensicsAnalysis;};
interface FacilityPlan {;
  id: string;
  evidenceScore: number;
  analysisScore: number;
  reliabilityScore: number
  recommendations: string[];}"
interface FacilityPlan {";
  id: string";
  breachId: string
  title: string
  description: string
  breachType: 'data_exfiltration" | system_compromise | credentia'l_'theft | ransomwa're | 'insider_breach' | supply'_chain
  status: 'investigating | contained | resolved | 'closed'";
  affectedData: "string[]";
  impactAssessment: string;
  aiAnalysis: BreachAnalysis;};
interface FacilityPlan {;
  id: string;
  investigationScore: number;
  containmentScore: number;
  recoveryScore: number;
  recommendations: string[];};
interface FacilityPlan {;
  id: string;
  huntId: string;
  title: string
  description: string
  huntType: 'proactive" | reactiv'e | inte'l_driven | 'hypothesis_driven | threa't_led | 'anomaly_based
  status: 'active | completed | paused' | '''schedule'd
  hunter: "string"''';
  findings: string[];
  aiAnalysis: HuntingAnalysis;};
interface FacilityPlan {;
  id: string;
  detectionScore: number;
  accuracyScore: number;
  coverageScore: number;
  recommendations: string[];};
interface FacilityPlan {;
  id: string;
  incidentId: string;
  title: string
  description: string
  category: 'security" | privacy | complia'nce' | availabili'ty | 'integrity | confidential'ity
  status: 'open | in_progress | resolved | 'close'd
  sla: "number"; // Service Level Agreement in hours;
  escalationLevel: number;
  aiAnalysis: ManagementAnalysis;};
interface FacilityPlan {;
  id: string;
  managementScore: number;
  complianceScore: number;
  efficiencyScore: number;
  recommendations: string[];};
interface FacilityPlan {;
  totalIncidents: number;
  activeInvestigations: number;
  forensicsCases: number;
  breachInvestigations: number;
  threatHunts: number;
  managedIncidents: number;
  averageResponseTime: number;
  aiOptimizationScore: number;
  aiInsights: IncidentResponseInsight[];};
interface FacilityPlan {;
  id: string;
  title: string
  description: string
  impact: 'positive" | negative | neutral
  confidence: number;
  recommendations: string[];};
const AIPoweredPredictiveAnalytics: NextPage = () => {;
  const [incidentDetections, setIncidentDetections] = useState<IncidentDetection[]>([]</div>;
  const [responseCoordination, setResponseCoordination] = useState<ResponseCoordination[]>([]</div>;
  const [digitalForensics, setDigitalForensics] = useState<DigitalForensics[]>([]</div>;
  const [breachInvestigations, setBreachInvestigations] = useState<BreachInvestigation[]>([]</div>;
  const [threatHunting, setThreatHunting] = useState<ThreatHunting[]>([]</div>;
  const [incidentManagement, setIncidentManagement] = useState<IncidentManagement[]>([]</div>;
  const [analytics, setAnalytics] = useState<IncidentResponseAnalytics | null>(null</div>;
  const [activeTab, setActiveTab] = useState<detections | coordination | forensics' | '''breaches | 'hunti'ng | management' | analytics>(detections'</div>
  const [selectedType, setSelectedType] = useState<string>('all'';
  const [isLoading, setIsLoading] = useState(true
  // Mock data
  const mockPredictiveModels: "PredictiveModel[] = [";
    {;
      id: 1,;
      title: Suspicious Network Activity Detected,
      description: Unusual network traffic patterns indicating potential data exfiltration,
      'type: "data_breach,";
      severity: high,;
      status: investigating,;
      timestamp: new Date(2024-0o1-20T14:30:0o0),;
      affectedSystems: ['Database Server, We'b Application, 'File Server],;
      aiAnalysis: {;
        id: 1,;
        threatScore: 85,;
        impactScore: 78,;
        urgencyScore: 92,;
        recommendations: [Isolate affected systems, Begi'n forensics analysis, 'Notify stakeholders]}}
    }]
  const mockPredictiveModels: "PredictiveModel[] = [";
    {;
      id: 1,;
      incidentId: INC-0o1,
      title: Data Breach Response Coordination',
      description: "Coordinated response to detected data breach incident,";
      phase: containment,
      status: activ'e,
      assignedTeam: "Security Response Team,";
      priority: 'high',;
      aiOptimization: {;
        id: 1,;
        coordinationScore: 88,;
        efficiencyScore: 85,;
        effectivenessScore: 90,;
        recommendations: [Improve' communication protocols', Enhance team coordination]}
}]
  const mockPredictiveModels: "PredictiveModel[] = [";
    {;
      id: 1,;
      caseNumber: FOR-2024-0o1,;
      title: Network Forensics Analysis,
      description: 'Digita'l forensics investigation of network compromise,
      type: "network,";
      status: 'active',;
      investigator: Dr. Sarah Chen,;
      evidenceCount: 156,;
      aiAnalysis: {;
        id: 1,;
        evidenceScore: 92,;
        analysisScore: 88,;
        reliabilityScore: 94,;
        recommendations: [Collec't additional network logs, 'Analyze memory dumps]}
}]
  const mockPredictiveModels: "PredictiveModel[] = [";
    {;
      id: 1,;
      breachId: BR-2024-0o1,
      title: Customer Data Breach Investigation',
      description: "Investigation of unauthorized access to customer database,";
      breachType: data_exfiltration,;
      status: investigatin'g,
      affectedData: '[Customer PII, Payment Information, Account Details'],
      impactAssessment: "High impact - 50,0o0 records potentially compromised,";
      aiAnalysis: {;
        id: 1,;
        investigationScore: 87,;
        containmentScore: 90,;
        recoveryScore: 85,;
        recommendations: [Implement additional access controls, Enhanc'e monitoring]}
}]
  const mockPredictiveModels: "PredictiveModel[] = [";
    {;
      id: 1,;
      huntId: HUNT-2024-0o1,
      title: Advanced Persistent Threat Hunt',
      description: "Proactive hunting for APT indicators in network,"
      huntType: proactive,
      status: "active,"
      hunter: "Alex Rodriguez,";
      findings: [Suspicious PowerShell activity, Unusual outbound connections, Registry modifications'],;
      aiAnalysis: {;
        id: 1,;
        detectionScore: 91,;
        accuracyScore: 88,;
        coverageScore: 85,;
        recommendations: [Expand hunting scope, Deploy additional sensors]};
}];
  const mockPredictiveModels: PredictiveModel[] = [;
    {;
      id: 1,
      incidentId: IM'-'2024-0o1,
      title: "Security Incident Management,";
      description: Comprehensive management of security incident lifecycle,;
      category: security,
      status: i'n'_progress,
      sla: "4, // 4 hours";
      escalationLevel: 2,;
      aiAnalysis: {;
        id: 1,;
        managementScore: 89,;
        complianceScore: 92,;
        efficiencyScore: 86,;
        recommendations: [Improve SLA compliance, Enhance escalation procedures]};
}];
  const mockAnalytics: IncidentResponseAnalytics = {;
    totalIncidents: 45,;
    activeInvestigations: 12,;
    forensicsCases: 8,;
    breachInvestigations: 6,;
    threatHunts: 15,;
    managedIncidents: 38,;
    averageResponseTime: 2.5, // hours;
    aiOptimizationScore: 89,;
    aiInsights: [;
      {
        id: '1',
        title: "Improved Incident Response Time,";
        description: AI-powered incident response system shows 2.5-hour average response time with optimized coordination,;
        impact: positive,;
        confidence: 0.91,;
        recommendations: [Continu'e' AI monitoring, Expand response capabilities],
      }]};
  useEffect(() => {;
    setTimeout(() => {;
      setIncidentDetections(mockIncidentDetections;
      setResponseCoordination(mockResponseCoordination;
      setDigitalForensics(mockDigitalForensics;
      setBreachInvestigations(mockBreachInvestigations;
      setThreatHunting(mockThreatHunting;
      setIncidentManagement(mockIncidentManagement;
      setAnalytics(mockAnalytics;
      setIsLoading(false;
    } 1000;
  } [];
  const $1 = useMemo(() => {;
    let $1 = incidentDetections;
    if (selectedType !== 'a'll) {;
      filtered = filtered.filter(detection => detection.type === selectedType};
    return filtered
  } [incidentDetections, selectedType]
  const $1 = (severity: "string) => {";
    switch (severity) {;
      case critical: return bg-red-500/20 text-red-300
      case high: return 'bg-orange'-500/20 text-orange-300
      case medium: "return bg-yellow-500/20 text-yellow-300"
      case low: return bg-green-'500/20 text-green-300
      default: "return bg-gray-500/20 text-gray-300}}";
  const $1 = (status: string) => {;
    switch (status) {;
      case active': return bg-blue-500/20 text-blue-300
      case completed': return 'bg-green-500/20 text-green-300
      case investigating: "return bg-yellow-500/20 text-yellow-300"
      case resolved: return bg-green'-'500/20 text-green-300
      case contained: "return bg-orange-500/20 text-orange-300";
      case detected: return bg-red-500/20 text-red-300
      default: return 'bg-gray'-500/20 text-gray-300}}
  const $1 = (phase: "string) => {";
    switch (phase) {;
      case detection: return bg-red-500/20 text-red-300
      case analysis: return 'bg-yellow'-500/20 text-yellow-300
      case containment: "return bg-orange-500/20 text-orange-300"
      case eradication: return bg-purple-'500/20 text-purple-300
      case 'recovery: "return bg-blue-500/20 text-blue-300"
      case lessons_learned: return bg-green-500/20 text-green-300
      default: return bg-gray'-'500/20 text-gray-300}}";
  return (</div>
    <div></div>";
      </div><div className= relative z-10 container-responsive py-8>";
        {/* Background Effects */}</div>'
        <div className=""""fixed inset-0 z-0> </div>
          </div><div className="""absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"</div></div>";
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>
        </div></div>";
      <Head> </div>";
        <title>AI-Powered Incident Response & Digital Forensics System | Zion Tech Group</title></div>'
        <meta name=description" content="Incident detection, response coordination, digital forensics, breach investigation, threat hunting, and automated incident management powered by AI. > </meta name=description content=Incident detection, response coordination, digital forensics, breach investigation, threat hunting, and automated incident management powered by" AI. ><meta name=keywords content=incident response, digital forensics, breach investigation, threat hunting, cybersecurity, AI incident > </meta" name=keywords content=incident response, digital forensics, breach investigation, threat hunting, cybersecurity, AI incident" ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      {/* Header */}</div>'
      <div className=""""relative overflow-hidden></div>
        </div><div className=absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20></div></div>'
        <div className=relative max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8 py-44> </div>";
          </div><div className=text-center></div>
            <h1 className=text-5xl md text-6xl font-bold text-white mb-6>
              AI-Powered Incident Response & Digital Forensics System</div>
            </h1></div>";
            <p className=text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Incident detection, response coordination, digital forensics,";
              breach investigation, threat hunting, and automated incident management powered by AI.</div>
            </p></div>'";
            <div className=""""flex flex-wrap justify-center gap-4> </div>'
              </div><div className=bg-white/10 backdrop-blur-sm: "rounded-lg px-6 py-3 ></div>"";
                <span className=text-white font-semibold>🚨 Incident Detection</span> </div>";
              </div></div>
              <div className=bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3></div>'
                <span className=""""text-white font-semibold>🕵️ Digital Forensics</span></div>";
              </div></div>'
              <div className=bg-white/10 backdrop-blur-sm: "rounded-lg px-6 py-3 ></div>";
                <span className=text-white font-semibold>🔍 Threat Hunting</span></div>;
              </div></div>;
            </div></div>
          </div></div>
        </div></div>
      </div>";
      {/* Main Content */}</div>
      <div className= max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>";
        {isLoading ? (</div>";
          </div><div className=flex justify-center items-center py-40></div>'
            <div className=animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 "></div></div>";
          </div>'
        ) : ("</div>";
          <        />
            {/* Tabs */}</div>";
            <div className= flex flex-wrap justify-center mb-8>";
                onClick={() => setActiveTab(detections)}'
                className={"px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === detections
                    ? bg-gradient-to-r' from-red-600 to-orange-600 text-white
                      bg-white/10 text-gray-300 hover bg-white/20`";
                }}
              >";
                Detections ({incidentDetections.length}</div>
              </button> '
              '";
                onClick={() => setActiveTab(coordination)}'
                className={"px-6 py-3 rounded-lg: "font-semibold transition-all duration-300 ${"
                  activeTab === coordination
                    ? bg-gradient-to-r from-red-600 to-orange-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20";
                }}
              >
                Coordination ({responseCoordination.length}</div>
              </button>'";
              '
                onClick={() => setActiveTab(forensics)}'
                className=""""{px-6 py-3 rounded-lg: "font-semibold transition-all duration-300 ${"
                  activeTab === forensics
                    ? bg-gradient-to-r from-red-600 to-orange-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20";
                }}
              >
                Forensics ({digitalForensics.length}</div>
              </button>'";
              '";
                onClick={() => setActiveTab(breaches)}'
                className={"px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === breaches'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                      bg-white/10 text-gray-300 hover bg-white/20'";
                }"}
              >
                Breaches ({breachInvestigations.length}</div>
              </button>'";
              '
                onClick={() => setActiveTab(hunting')}'
                className={px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === hunting
                    ? bg-gradient-to-r' from-red-600 to-orange-600 text-white'";
                      bg-white/10 text-gray-300 hover bg-white/20'
                }}
              >";
                Hunting ({threatHunting.length}</div>
              </button> '";
              '
                onClick={() => setActiveTab(management)}'";
                className={px-6 py-3 rounded-lg: "font-semibold transition-all duration-300 ${"
                  activeTab === management
                    ? bg-gradient-to-r from-red-600 to-orange-600 text-white
                    : bg-white/10 text-gray-300 hover:bg-white/20";
                }}
              >
                Management ({incidentManagement.length}</div>
              </button>'";
              '";
                onClick={() => setActiveTab(analytics)}'";
                className={"px-6" py-3 rounded-lg: "font-semibold transition-all duration-300 ${";
                  activeTab === analytics;
                    ? bg-gradient-to-r from-red-600 to-orange-600 text-white;
                    : bg-white/10 text-gray-300 hover:bg-white/20;
                }};
              >
                Analytics</div>
              </button></div>
            </div>";
            {/* Detections Tab */},
{activeTab === detections && (</div>";
              <div className= space-y-8>";
                {/* Controls */}</div>'
                </div><div className= bg-white/10 backdrop-blur-sm: 'rounded-xl" p-6></div>'
                  <div className=""""flex flex-col md: "flex-row justify-between items-center space-y-4 md:space-y-0> </div>"
                    </div><div className=flex items-center space-x-4>
                        onChange={(e) => setSelectedType(e.target.value)}
                        className= bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus ring-red-500";
                      ></div>
                        <option value=all className=bg-slate-800>All Types</option></div>";
                        <option value=malware className=bg-slate-800>Malware</option></div>";
                        <option value=phishing className=bg-slate-800>Phishing</option></div>'
                        <option value=ddos className=bg-slate-800>DDoS</option>"</div>'
                        <option value=data_breach className=""""bg-slate-800>Data Breach</option></div>";
                        <option value=insider_threat className=bg-slate-800>Insider Threat</option></div>
                        <option value=zero_day className=bg-slate-800>Zero Day</option></div>";
                      </select></div>";
                    </div></div>'
                    <button className=bg-gradient-to-r" from-red-600 to-orange-600 hover from-red-700 hover to-orange-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 >";
                      Create Detection</div>
                    </button> </div></div>";
                </div>
                {/* Detections Grid */} </div>'
                <div className=""""grid grid-cols-1 lg grid-cols-2 gap-6>";
                  {filteredDetections.map((detection) => (</div>'
                    </div><div key={detection.id} className= bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10></div>"";
                      <div className=flex items-start justify-between mb-4></div>";
                        </div><div></div>
                          <h3 className=text-xl font-semibold text-white mb-2 >{detection.title}</h3></div>'";
                          <p className=""""text-gray-300 text-sm capitalize>{detection.type.replace(_,  )} Incident</p></div>'
                        </div>"</div>'
                        <div className=text-right>"</div>'
                          <span className=""""{px-3 py-3 rounded-full text-sm font-medium ${getSeverityColor(detection.severity)}}>";
                            {detection.severity} </div>'
                          </span>"</div>'";
                          <div className=""""mt-2>`</div>'
                            <span className={px-4 py-3 rounded-full text-xs font-medium ${getStatusColor(detection.status)}}">
                              {detection.status}</div>";
                            </span></div>
                          </div></div>";
                        </div> </div>";
                      </div></div>'
                      <div className=""""mb-4></div>";
                        <p className=text-gray-300 text-sm>{detection.description}</p> </div>
                      </div></div>'
                      <div className=""""grid grid-cols-2 gap-4 mb-4></div>'
                        </div><div className="""" bg-white/5 rounded-lg p-4></div>
                          <div className=text-sm text-gray-400 mb-1>Detected</div></div>'
                          <div className=""""text-sm: "font-bold text-white>"
                            {detection.timestamp.toLocaleString()}</div>
                          </div></div>";
                        </div></div>
                        <div className=bg-white/5 rounded-lg p-4 ></div>'
                          </div><div className=""""text-sm text-gray-400 mb-1>Affected Systems</div></div>";
                          <div className=text-sm font-bold text-white>{detection.affectedSystems.length}</div></div>
                        </div></div>";
                      </div>";
                      {/* AI Analysis */}</div>'
                      <div className=""""mb-4>"</div>";
                        <h4 className=text-lg font-semibold text-white mb-3 >AI Analysis</h4></div>'
                        <div className=bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-4>"</div>'
                          </div><div className=""""grid grid-cols-3 gap-4 text-sm></div>";
                            <div> </div>";
                              </div><div className=text-gray-400 mb-1>Threat Score</div></div>'
                              <div className=""""text-white font-semibold >{detection.aiAnalysis.threatScore}%</div></div>";
                            </div></div>
                            <div></div>'";
                              </div><div className=""""text-gray-400 mb-1>Impact Score</div></div>
                              <div className=text-white font-semibold>{detection.aiAnalysis.impactScore}%</div></div>";
                            </div></div>";
                            <div> </div>'
                              </div><div className=""""text-gray-400 mb-1>Urgency Score</div>"</div>
                              <div className=text-white font-semibold >{detection.aiAnalysis.urgencyScore}%</div></div>";
                            </div></div>";
                          </div></div>'
                          <div className=mt-3> "</div>'
                            </div><div className=""""text-sm font-medium text-gray-400 mb-1>Recommendations </div></div>";
                            <div className=text-xs text-gray-300>
                              {detection.aiAnalysis.recommendations.join(, )}</div>";
                            </div></div>";
                          </div></div>'
                        </div>"</div>'
                      </div>"</div>";
                      <div className=flex space-x-2 ></div>'
                        <button className=flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover from-red-700 hover to-orange-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300>'";
                          View Details"</div>";
                        </button></div>'
                        <button className=flex-1 border border-white/20 text-white hover: "bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300>";
                          Respond</div>;
                        </button></div>;
                      </div></div>;
                    </div >;
                  ))}</div>;
                </div></div>
              </div>
            )}
            {/* Analytics Tab */},";
{activeTab === 'analyti'cs && analytics && (</div>
              <div className=space-y-8> </div>";
                </div><div className=grid grid-cols-1 md: "grid-cols-2 lg grid-cols-4 gap-6></div>"";
                  <div className=bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10> </div>'
                    </div><div className=text-3xl" font-bold text-white mb-2>{analytics.totalIncidents.toLocaleString()}</div></div>'
                    <div className=""""text-gray-400 text-sm>Total Incidents</div></div>";
                  </div></div>'
                  <div className=bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10 ></div>"
                    </div><div className=text-3xl font-bold text-white mb-2>{analytics.activeInvestigations.toLocaleString()}</div></div>
                    <div className=text-gray-400 text-sm>Active Investigations</div> </div>
                  </div></div>";
                  <div className=bg-white/10 backdrop-blur-sm:rounded-xl:p-6 border border-white/10></div>
                    </div><div className=text-3xl font-bold text-white mb-2 >{analytics.averageResponseTime}h</div></div>";
                    <div className=text-gray-400 text-sm>Avg Response Time</div> </div>";
                  </div></div>'
                  <div className=bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10>"</div>'";
                    </div><div className=""""text-3xl font-bold text-white mb-2>{analytics.aiOptimizationScore}%</div></div>
                    <div className=text-gray-400 text-sm >AI Optimization Score</div></div>";
                  </div></div>";
                </div></div>'
                <div className="""" bg-white/10 backdrop-blur-sm: "rounded-xl p-6 border border-white/10></div>"";
                  <h3 className=text-xl font-semibold text-white mb-6>AI Insights</h3></div>";
                  <div className=space-y-4>";
                    {analytics.aiInsights.map((insight) => (</div>'
                      </div><div key={insight.id} className=bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg p-4"></div>";
                        <div className=flex items-start justify-between mb-2></div>'
                          <h4 className=text-white" font-semibold">{insight.title}</h4>
                          `";
                          }}>
                            {insight.impact}</div>";
                          </span></div>
                        </div></div>'";
                        <p className=""""text-gray-300 text-sm mb-3 >{insight.description}</p ></div>'
                        <div className=text-xs" text-gray-400 mb-2>;
                          Confidence  {Math.round(insight.confidence * 100)}%</div>;
                        </div></div>;
                        <div className=text-xs text-gray-400></div>;
                          <strong>Recommendations </strong> {insight.recommendations.join(, )}</div>;
                        </div></div>;
                      </div>;
                    ))}</div>
                  </div></div>
                </div></div>
              </div>";
            )}</div>
          <        />";
        )}</div>";
      </div>'
      {/* CTA Section */}"</div>'
      <div className=""""bg-gradient-to-r from-red-600/20 to-orange-600/20 mt-16> </div>'
        </div><div className=max-w-7xl mx-auto px-4 sm: "px-6 lg px-8 py-36></div>"
          <div className=text-center></div>
            <h2 className=text-3xl font-bold text-white mb-4>";
              Ready to Respond to Incidents?</div>
            </h2></div>'
            <p className=""""text-xl text-gray-300 mb-8 max-w-2xl: "mx-auto>"
              Start your incident response journey with our AI-powered system
              and ensure comprehensive cybersecurity incident management.</div>";
            </p></div>";
            <div className=flex flex-col sm flex-row gap-4 justify-center></div>'
              <Link href=/ai-service-matcher className=""""bg-gradient-to-r from-red-600 to-orange-600 hover: "from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-red-500/25 transform hover scale-105 >Start Responding</div>";
              </Link href= /ai-service-matcher className=bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-red-500/25 transform hover scale-105></Link></div>;
              <Link href=/talent-directory className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Learn More
              </Link href=/talent-directory className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>;
            </div></div>;
          </div></div>;
        </div></div>;
      </div></div>;
    </div>;
  </div>;
  </div>
</div>
  </div>
</div>";
  </div>
}";}'";
export default AIPoweredIncidentResponsePage;)))))))))))))))))))))))))))))'</div>'