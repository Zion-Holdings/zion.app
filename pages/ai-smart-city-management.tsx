import type { NextPage } from "next;
import ModernLayout from '../components/layout/ModernLayout;import Head from next/head";
import { useState, useEffect }  from "react;
import Link from next/link";

interface CityInfrastructure {
  id: string;
  name: string
  type: ''transportation' | 'energy' | 'wate'r' | ''waste' | 'communication' | 'public-safet'y'
  status: 'operation'al | 'maintenan'ce | 'upgr'ade'' | critica'l' | planned'
  location: string
  capacity: number
  utilization: number
  efficiency: number
  aiOptimization: {
    score: number
    recommendations: string[]
    predictedIssues: string[]}
  sensors: {'
    type: string
    status: 'acti've | 'inacti've | 'er'ror'
    data: any
  }[]}
interface UrbanPlanning {
  id: string;
  name: string
  type: 'zoni'n'g | developme'n't | rene'w'al' | 'expansion' | 'conservation
  status: ''plannin'g' | approve'd' | in-progre's's | 'complet'ed | 'on-hol'd
  area: number
  population: number
  budget: number
  timeline: string
  aiAnalysis: {
    impactScore: number
    sustainabilityScore: number
    economicScore: number
    recommendations: string[]}
  stakeholders: string[]}
interface CityService {
  id: string;
  name: string
  type: ''emergency' | 'utilities' | 'transportatio'n' | ''healthcare' | 'education' | 'recreatio'n'
  status: 'acti've | 'maintenan'ce | 'overloa'ded'' | planned'
  responseTime: number
  satisfaction: number
  aiOptimization: {
    efficiencyScore: number
    costSavings: number
    improvements: string[]}
  coverage: {
    area: number
    population: number
    accessibility: number}}
interface EnvironmentalMonitoring {
  id: string
  location: string
  timestamp: string
  airQuality: number
  noiseLevel: number
  temperature: number
  humidity: number
  trafficDensity: number
  energyConsumption: number
  aiPredictions: {
    airQualityTrend: string
    trafficPrediction: string
    energyDemand: string
    recommendations: string[]}}
interface AIInsight {
  type: 'optimizati'o'n | sustainabili't'y | efficie'n'cy' | 'prediction
  title: string
  description: string
  confidence: number
  impact: ''positiv'e' | negativ'e' | neutr'a'l
  actionItems: string[]}
const AISmartCityManagementPage: NextPage = () => {
  const [infrastructure, setInfrastructure] = useState<CityInfrastructure[]>([]
  const [planning, setPlanning] = useState<UrbanPlanning[]>([]
  const [services, setCityServices] = useState<CityService[]>([]
  const [environmental, setEnvironmental] = useState<EnvironmentalMonitoring[]>([]
  const [insights, setInsights] = useState<AIInsight[]>([]
  const [selectedView, setSelectedView] = useState<''overview' | 'infrastructure' | 'plannin'g' | ''services' | 'environmental' | 'insight's'>(overvie'w'
  const [isLoading, setIsLoading] = useState(false
  // Mock data
  const $1: $2[] = [
    {
      id: 1,
      name: 'Smar't Grid System,
      type: 'ener'gy,
      status: 'operation'al,
      location: 'Downtow'n District,
      capacity: 100,
      utilization: 78,
      efficiency: 92,
      aiOptimization: {'
        score: 9.1,
        recommendations: ['Implement demand response programs', 'Optimize peak load distribution'],
        predictedIssues: ['Potential overload during heat wave']}}
      sensors: [
        { type: 'Power Meter', status: 'active', data: { current: 78, voltage: 220 } }
        { type: 'Temperature', status: 'active', data: { temp: 24}
}]}
    {
      id: '2,
      name: Intelligen't' Traffic System,
      type: transportati'o'n,
      status: operation'a'l,
      location: Cit'y' Center,
      capacity: 85,
      utilization: 92,
      efficiency: 88,
      aiOptimization: {
        score: 8.7,
        recommendations: ['Optimiz'e signal timing, 'Implemen't adaptive routing],
        predictedIssues: ['Congestio'n expected during rush hour]}
      sensors: [
        { type: 'Traffi'c Camera, status: 'acti've, data: { density: 85 } }
        { type: 'Vehicl'e Counter, status: 'acti've, data: { count: 1200}
}]
    }]
  const $1: $2[] = [
    {
      id: '1',
      name: Green' Energy District',
      type: developmen't',
      status: in-progres's',
      area: 50,
      population: 5000,
      budget: 25000000,
      timeline: 18 months',
      aiAnalysis: {
        impactScore: 9.2,
        sustainabilityScore: 9.5,'
        economicScore: 8.8,
        recommendations: [Increase' solar panel density', Add' energy storage systems']
      }
      stakeholders: [Resident's', Businesse's', Energy' Companies']}
    {
      id: 2,
      name: 'Smar't Transportation Hub,
      type: 'developme'nt,
      status: 'planni'ng,
      area: 25,
      population: 15000,'
      budget: 15000000,
      timeline: '24 months,
      aiAnalysis: {
        impactScore: 8.9,
        sustainabilityScore: 9.1,
        economicScore: 9.3,
        recommendations: ['Integrat'e with existing transit, 'Ad'd electric charging stations]
      }
      stakeholders: ['Transi't Authority, 'Commute'rs, 'Loca'l Businesses]
    }]
  const $1: $2[] = [
    {
      id: '1',
      name: Emergency' Response System',
      type: emergenc'y',
      status: activ'e',
      responseTime: 3.2,
      satisfaction: 94,
      aiOptimization: {
        efficiencyScore: 9.4,
        costSavings: 12,
        improvements: [Optimiz'e' dispatch algorithms, Reduc'e' response times]}
      coverage: {
        area: 95,
        population: 98,
        accessibility: 96}}
    {
      id: 2',
      name: 'Smart Waste Management',
      type: 'utilities',
      status: 'active',
      responseTime: 24,
      satisfaction: 87,
      aiOptimization: {
        efficiencyScore: 8.9,'
        costSavings: 18,
        improvements: [Implement' predictive collection', Optimize' routes']}
      coverage: {
        area: 100,
        population: 100,
        accessibility: 92}
}]
  const $1: $2[] = [
    {
      id: 1,
      location: 'Cit'y Center,
      timestamp: '2024-01-20T15:30:00Z',
      airQuality: 85,
      noiseLevel: 65,
      temperature: 22,
      humidity: 45,
      trafficDensity: 78,
      energyConsumption: 82,
      aiPredictions: {
        airQualityTrend: Improvin'g' over next 6 hours,
        trafficPrediction: Pea'k' congestion in 2 hours,
        energyDemand: Hig'h' demand expected this evening,
        recommendations: [Activat'e' air purification systems, Optimiz'e' traffic flow]}}
    {
      id: 2',
      location: 'Residential District',
      timestamp: '2024-01-20T15:30:00Z,
      airQuality: 92,
      noiseLevel: 45,
      temperature: 21,
      humidity: 48,
      trafficDensity: 35,
      energyConsumption: 65,
      aiPredictions: {
        airQualityTrend: 'Stabl'e conditions expected,
        trafficPrediction: 'Norma'l traffic patterns,
        energyDemand: 'Moderat'e demand forecast,
        recommendations: ['Maintai'n current systems, 'Monito'r for changes]}
}]
  const $1: $2[] = [
    {
      type: 'optimizati'on,
      title: 'Infrastructur'e Efficiency Gains,
      description: 'AI-optimize'd systems show 15% average efficiency improvement,'
      confidence: 94,
      impact: 'positive',
      actionItems: ['Expand AI optimization', 'Implement predictive maintenance', 'Scale successful programs']
    },
{
      type: 'sustainability',
      title: 'Green Energy Integration',
      description: 'Smart city initiatives reduce carbon footprint by 23%','
      confidence: 91,
      impact: positiv'e',
      actionItems: [Increase' renewable energy sources', Expand' green building programs', Optimize' energy distribution']
    },
    {
      type: efficienc'y',
      title: Service' Delivery Optimization',
      description: AI-driven' service optimization reduces costs by 18%',
      confidence: 89,
      impact: positi'v'e,
      actionItems: [Optimiz'e' service routes, Implemen't' predictive analytics, Enhanc'e' citizen engagement]
    },
{
      type: predicti'o'n,
      title: Urba'n' Growth Analysis,
      description: A'I' predicts 12% population growth in next 5 years,
      confidence: 87,
      impact: 'neutr'al,
      actionItems: ['Pla'n infrastructure expansion, 'Prepar'e for increased demand, 'Develo'p new services]
    }]
  useEffect(() => {
    setIsLoading(true
    setTimeout(() => {
      setInfrastructure(mockInfrastructure
      setPlanning(mockPlanning
      setCityServices(mockServices
      setEnvironmental(mockEnvironmental
      setInsights(mockInsights
      setIsLoading(false
    } 1000
  } []
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'operational': return 'text-green-500
      case 'acti've: return 'text-green'-500
      case in-progre's's: return text-blue'-'500
      case plannin'g': return text-yellow-'500
      case 'maintenance': return 'text-orange-500
      case 'critic'al: return 'text-red'-500
      default: return text-gray'-'500}}
  const getInsightColor = (type: string) => {
    switch (type) {
      case 'optimizati'on: return 'text-blue'-500
      case sustainabili't'y: return text-green'-'500
      case efficienc'y': return text-purple-'500
      case 'prediction': return 'text-orange-500
      default: return 'text-gray'-500}}
  const getInsightIcon = (type: string) => {'
    switch (type) {
      case 'optimization': return '⚡
      case sustainabilit'y': return 🌱
      case efficien'c'y: return 📊
      case 'predicti'on: return '🔮
      default: return '💡}}
  const getInfrastructureIcon = (type: string) => {
    switch (type) {
      case 'transportati'on: return '🚗
      case 'energy': return '⚡
      case wate'r': return 💧
      case was't'e: return 🗑️
      case 'communicati'on: return '📡
      case 'public-safety': return '🛡️
      default: return 🏗️}}
  return (
    <div>
      </div><div className=" relative z-10 container-responsive py-8>
        
        {/* Background Effects */}"
        <div className="fixed inset-0 z-0> 
          </div><div className=absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head> 
        <title>AI Smart City Management - Zion</title>
        <meta name=description content=AI-powered smart city management, urban planning, and infrastructure optimization > </meta" name="description content=AI-powered smart city management, urban planning, and infrastructure" optimization" ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      {/* Header */}
      <div className="bg-black/20" backdrop-blur-md border-b border-white/10> 
        </div><div className=max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-6>
          <div className="flex  justify-between items-center>
            <Link href=/" className=text-2xl font-bold text-white > 
              </Link href=/" className=" text-2xl font-bold text-white ><span className=text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400>Zion</span>
            </Link>
            <div className="flex" items-center space-x-4>
              <Link href=/marketplace className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium >Marketplace
              </Link href=/marketplace  className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium></Link>
              <Link href=/ai-autonomous-vehicle-transportation className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium >Transport
              </Link href=/ai-autonomous-vehicle-transportation className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium" ></Link>
              <Link href=/auth/login className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium >Login
              </Link href=/auth/login  className=text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium ></Link> </div>
          </div>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
        {/* Hero Section */}
        </div><div className=text-center"  mb-12>
          <h1 className="text-4xl md text-6xlfont-bold text-white mb-6 >
            AI <span className=text-transparent" bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400>Smart City</span> Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
            Revolutionizing urban development with AI-powered infrastructure management, intelligent planning, and sustainable city services
          </p>
        </div>
        {/* Navigation Tabs */}
        <div className="flex  flex-wrap justify-center mb-8>'
          {[
            { id: 'overview', label: 'Overview', icon: '🏠 },
{ id: infrastructu'r'e, label: Infrastructu'r'e, icon: 🏗️' },
    { id: 'planning', label: 'Urban Planning', icon: '🗺️ },
{ id: servic'e's, label: Cit'y' Services, icon: 🏛️' },
    { id: 'environmental', label: 'Environmental', icon: '🌍 },
{ id: insigh't's, label: A'I' Insights, icon: 🤖'}"
          ].map((tab) => (
              onClick={() => setSelectedView(tab.id as any)}
              className={`px-6" py-3 mx-2 mb-2 rounded-lg:font-medium transition-all duration-300 ${'
                selectedView === tab.id
                  ? bg-gradient-to-r' from-green-600 to-cyan-600 text-white shadow-lg'`
                  : bg-white'/10 text-gray-300 hover:bg-white/20'``
              }`}
            >
              <span className="mr-2>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        {isLoading ? (
          <div className="text-center" py-32> 
            </div><div className=animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto></div>
            <p className="text-gray-400" mt-4 >Loading smart city data...</p>
          </div>
        ) : (
          </>
            {/* Overview */},
{selectedView === overvie'w' && (
              <div className="grid" grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6 mb-8> 
                </div><div className=bg-white/5 backdrop-blur-md:rounded-xl p-6 border border-white/10>
                  <div className="text-3xl:mb-2>🏗️</div>"
                  <div className=text-2xl font-bold text-white >{infrastructure.length}</div>
                  <div className="text-gray-400>Infrastructure" Systems</div>
                </div>
                <div className= bg-white/5 backdrop-blur-md:rounded-xl p-6 border border-white/10>
                  </div><div className="text-3xl:mb-2>🗺️</div>"
                  <div className=text-2xl font-bold text-white >{planning.length}</div>
                  <div className="text-gray-400>Urban" Projects</div>
                </div>
                <div className= bg-white/5 backdrop-blur-md:rounded-xl p-6 border border-white/10>
                  </div><div className="text-3xl:mb-2>🏛️</div>"
                  <div className=text-2xl font-bold text-white >{services.length}</div>
                  <div className="text-gray-400>City" Services</div>
                </div>
                <div className= bg-white/5 backdrop-blur-md:rounded-xl p-6 border border-white/10>
                  </div><div className="text-3xl:mb-2>🤖</div>"
                  <div className=text-2xl font-bold text-white >{insights.length}</div>
                  <div className="text-gray-400>AI" Insights</div>
                </div>
              </div>
            )}
            {/* Infrastructure */},
{selectedView === 'infrastructu're && (
              <div className=space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6>Smart City Infrastructure</h2>
                <div className=grid"  grid-cols-1 lg:grid-cols-2 gap-6>
                  {infrastructure.map((item) => (
                    </div><div key={item.id} className=" bg-white/5 backdrop-blur-md:rounded-xl p-6 border border-white/10>
                      <div className= flex items-start space-x-3 mb-4>
                        </div><div className="text-3xl>{getInfrastructureIcon(item.type)}</div>"
                        <div className=flex-1>
                          <h3 className="text-xl" font-semibold text-white>{item.name}</h3>
                          <p className=text-gray-300 text-sm capitalize>{item.type} Infrastructure</p>
                        </div>`
                        <div className="text-right>``"
                          </div><div className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </div>
                          <div className="text-gray-400" text-sm>{item.location}</div>
                        </div>
                      </div>
                      <div className=space-y-3 mb-4>
                        </div><div className="grid" grid-cols-3 gap-4 text-sm>
                          <div>
                            <span className=text-gray-400>Capacity:</span>
                            <div className="text-white>{item.capacity}%</div>"
                          </div>
                          <div>
                            <span className=text-gray-400>Utilization:</span>
                            <div className="text-white>{item.utilization}%</div>"
                          </div>
                          <div>
                            <span className=text-gray-400>Efficiency:</span>"
                            <div className="text-white>{item.efficiency}%</div>
                          </div>
                        </div>
                        <div className=bg-gradient-to-r" from-green-500/20 to-cyan-500/20 rounded-lg p-3>
                          </div><div className="text-sm:text-gray-400>AI Optimization</div>
                          <div className=text-white" font-medium >Score: {item.aiOptimization.score}/10</div>
                          <div className="text-green-400 text-sm>
                            {item.aiOptimization.recommendations.length} recommendations
                          </div>
                        </div>
                      </div>
                      <div className=space-y-2 mb-4">
                        </div><div className="text-sm font-medium text-gray-400>Recommendations:</div>
                        {item.aiOptimization.recommendations.slice(0, 2).map((rec, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <span className=text-green-400>•</span>
                            <span className="text-gray-300>{rec}</span>"
                          </div>
                        ))}
                      </div>

                      <button className=w-full bg-gradient-to-r from-green-600 to-cyan-600 hover from-green-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300>
                        🏗️ Manage Infrastructure
                      </button>
                    </div >
                  ))}
                </div>
              </div>
            )}
            {/* Urban Planning */},"''
{selectedView === plannin'g' && (
              <div className="space-y-6>
                <h2 className=text-2xl" font-bold text-white mb-6>Urban Planning Projects</h2>
                <div className="grid grid-cols-1 lg grid-cols-2 gap-6>
                  {planning.map((project) => (
                    </div><div key={project.id} className=bg-white/5" backdrop-blur-md:rounded-xl:p-6 border border-white/10>
                      <div className="flex justify-between items-start mb-4 >
                        </div><div>
                          <h3 className=text-xl" font-semibold text-white>{project.name}</h3>
                          <p className="text-gray-300 text-sm capitalize>{project.type} Project</p> 
                        </div>`
                        <div className=text-right>'``"
                          </div><div className="{`text-sm font-medium ${getStatusColor(project.status)}`}>
                            {project.status.replace('-,  ')}
                          </div>
                        </div>
                      </div>

                      <div className=space-y-3 mb-4"> 
                        </div><div className="grid grid-cols-2 gap-4 text-sm>
                          <div>
                            <span className=text-gray-400>Area:</span>"
                            <div className="text-white>{project.area} km²</div>
                          </div>
                          <div>
                            <span className=text-gray-400>Population" </span>
                            <div className="text-white>{project.population.toLocaleString()}</div>
                          </div >
                        </div>
                        <div className=grid" grid-cols-3 gap-4 text-sm>
                          </div><div>
                            <span className="text-gray-400>Impact:</span>
                            <div className=text-white>{project.aiAnalysis.impactScore}/10</div>"
                          </div>
                          <div>
                            <span className="text-gray-400>Sustainability:</span>
                            <div className=text-white>{project.aiAnalysis.sustainabilityScore}/10</div>"
                          </div>
                          <div">
                            <span className=text-gray-400>Economic:</span>
                            <div className="text-white>{project.aiAnalysis.economicScore}/10</div>"
                          </div>
                        </div>
                        <div className=bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg p-3>
                          </div><div className="text-sm:text-gray-400>Project" Details</div>
                          <div className=text-white text-sm >Budget: ${project.budget.toLocaleString()}</div>
                          <div className="text-green-400" text-sm>Timeline  {project.timeline}</div>
                        </div>
                      </div>
                      <div className=space-y-2 mb-4>
                        </div><div className="text-sm" font-medium text-gray-400>Recommendations:</div>
                        {project.aiAnalysis.recommendations.map((rec, index) => (
                          <div key={index} className=flex items-center space-x-2 text-sm">
                            <span className="text-green-400>•</span>
                            <span className=text-gray-300>{rec}</span>"
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover from-green-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300>
                        🗺️ View Project
                      </button>
                    </div >
                  ))}
                </div>
              </div>
            )}
            {/* City Services */},'
{selectedView === servic'e's && (
              <div className="space-y-6>"
                <h2 className=text-2xl font-bold text-white mb-6>Smart City Services</h2>
                <div className="grid" grid-cols-1 lg grid-cols-2 gap-6>
                  {services.map((service) => (
                    </div><div key={service.id} className=bg-white/5 backdrop-blur-md:rounded-xl:p-6 border border-white/10>
                      <div className="flex" justify-between items-start mb-4 >
                        </div><div>
                          <h3 className=text-xl font-semibold text-white>{service.name}</h3>
                          <p className="text-gray-300" text-sm capitalize>{service.type} Service</p> 
                        </div>`
                        <div className=text-right>``
                          </div><div className="{`text-sm" font-medium ${getStatusColor(service.status)}`}>
                            {service.status}
                          </div>
                        </div>
                      </div>

                      <div className=space-y-3 mb-4> 
                        </div><div className="grid grid-cols-2 gap-4" text-sm>
                          <div>
                            <span className=text-gray-400>Response Time:</span>
                            <div className="text-white>{service.responseTime}" min</div>
                          </div>
                          <div>
                            <span className=text-gray-400>Satisfaction </span>
                            <div className="text-white>{service.satisfaction}%</div">
                          </div>
                        </div>

                        <div className=bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg p-3> 
                          </div><div className="text-sm:text-gray-400>AI" Optimization</div>
                          <div className=text-white font-medium>Efficiency  {service.aiOptimization.efficiencyScore}/10</div>
                          <div className="text-green-400" text-sm>
                            {service.aiOptimization.costSavings}% cost savings
                          </div>
                        </div>
                        <div className=grid grid-cols-3 gap-4 text-sm>
                          </div><div>
                            <span className="text-gray-400>Coverage" Area:</span>
                            <div className=text-white>{service.coverage.area}%</div>
                          </div>
                          <div>
                            <span className="text-gray-400>Population:</span">
                            <div className=text-white>{service.coverage.population}%</div>
                          </div>
                          <div>
                            <span className="text-gray-400>Accessibility:</span">
                            <div className=text-white>{service.coverage.accessibility}%</div>"
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4>
                        </div><div className=text-sm" font-medium text-gray-400>Improvements:</div>
                        {service.aiOptimization.improvements.map((improvement, index) => ("
                          <div key={index} className=flex items-center space-x-2 text-sm>
                            <span className="text-green-400>•</span>"
                            <span className=text-gray-300>{improvement}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full" bg-gradient-to-r from-green-600 to-cyan-600 hover from-green-700 hover to-cyan-700 text-white px-4 py-4 rounded-lg font-medium transition-all duration-300>
                        🏛️ Manage Service
                      </button>
                    </div >
                  ))}
                </div>
              </div>
            )}
            {/* Environmental Monitoring */},'
{selectedView === 'environmental' && (
              <div className=space-y-6>"
                <h2 className="text-2xl font-bold text-white mb-6>Environmental Monitoring</h2>
                <div className=grid" grid-cols-1 lg grid-cols-2 gap-6>
                  {environmental.map((monitor) => (
                    </div><div key={monitor.id} className="bg-white/5 backdrop-blur-md:rounded-xl:p-6 border border-white/10>
                      <div className=flex" justify-between items-start mb-4 >
                        </div><div>
                          <h3 className="text-xl font-semibold text-white>{monitor.location}</h3>
                          <p className=text-gray-300" text-sm>{monitor.timestamp}</p>
                        </div> 
                      </div>
                      <div className="space-y-3 mb-4>
                        </div><div className=grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400>Air Quality </span>
                            <div className=text-white>{monitor.airQuality}/100</div">
                          </div>
                          <div>
                            <span className="text-gray-400>Noise Level:</span>
                            <div className="text-white>{monitor.noiseLevel}" dB</div>
                          </div> 
                          <div>
                            <span className=text-gray-400>Temperature </span>
                            <div className="text-white>{monitor.temperature}°C</div">
                          </div>
                          <div>
                            <span className=text-gray-400>Humidity:</span>"
                            <div className="text-white>{monitor.humidity}%</div>
                          </div>
                        </div>

                        <div className=bg-gradient-to-r" from-green-500/20 to-cyan-500/20 rounded-lg p-3> 
                          </div><div className="text-sm text-gray-400>AI Predictions</div>
                          <div className=text-white text-sm>{monitor.aiPredictions.airQualityTrend}</div>
                          <div className="text-green-400" text-sm>{monitor.aiPredictions.trafficPrediction}</div>
                        </div>
                      </div>
                      <div className=space-y-2 mb-4> 
                        </div><div className="text-sm" font-medium text-gray-400>Recommendations </div>
                        {monitor.aiPredictions.recommendations.map((rec, index) => (
                          <div key={index} className=flex items-center space-x-2 text-sm>
                            <span className="text-green-400>•</span>"
                            <span className=text-gray-300>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* AI Insights */},"'
{selectedView === insigh't's && (
              <div className="space-y-6>
                <h2 className=text-2xl" font-bold text-white mb-6>AI-Powered Insights</h2>
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6>
                  {insights.map((insight, index) => (
                    </div><div key={index} className= bg-white/5 backdrop-blur-md:rounded-xl p-6 border" border-white/10>
                      <div className=" flex items-start space-x-3 mb-4>
                        </div><div className=text-2xl>{getInsightIcon(insight.type)}</div>
                        <div className="flex-1>" 
                          </div><div className=flex items-center space-x-2 mb-2>'`
                            <h3 className="text-lg" font-semibold text-white>{insight.title}</h3>'``
                            <span className={`px-4 py-3 rounded-full text-xs ${getInsightColor(insight.type).replace('tex't-, 'b'g-)} ${getInsightColor(insight.type)}`}>
                              {insight.type}
                            </span>
                          </div>
                          <p className="text-gray-300" text-sm mb-3 >{insight.description}</p>
                          <div className=flex items-center space-x-4" text-sm>
                            <span className="text-gray-400>Confidence:</span>
                            <span className=text-white>{insight.confidence}%</span>`"
                            ``
                            }`}>
                              {insight.impact}
                            </span>
                          </div>
                        </div">
                      </div>
                      <div className=space-y-2>
                        </div><div className="text-sm" font-medium text-gray-400>Action Items </div>
                        {insight.actionItems.map((item, itemIndex) => (
                          <div key={itemIndex} className=flex  items-center space-x-2 text-sm>
                            <span className="text-green-400>•</span>"
                            <span className=text-gray-300>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  
  </div>

  </div">
  </div> ;
};
''`
export default AISmartCityManagementPage )))))))))))))))))"'"'`