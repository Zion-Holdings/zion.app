import type { NextPage } from "next";
import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface Nanotechnology {
  id: string;
  name: string;
  description: string;
  type: 'nanomaterials' | 'nanodevices' | 'nanosensors' | 'nanomedicine' | 'nanoelectronics' | 'nanophotonics";
  status: 'active' | 'inactive' | 'research' | 'error' | 'offline";
  scale: number;
  precision: number;
  efficiency: number;
  aiAnalysis: NanoAnalysis;}
interface NanoAnalysis {
  id: string;
  performanceScore: number;
  precisionScore: number;
  innovationScore: number;
  recommendations: string[];}
interface MolecularEngineering {
  id: string;
  title: string;
  description: string;
  type: 'molecular_design' | 'molecular_synthesis' | 'molecular_assembly' | 'molecular_computing' | 'molecular_sensors' | 'molecular_machines";
  status: 'active' | 'inactive' | 'designing' | 'error' | 'offline";
  molecules: number;
  complexity: number;
  aiOptimization: MolecularOptimization;}
interface MolecularOptimization {
  id: string;
  designScore: number;
  synthesisScore: number;
  efficiencyScore: number;
  recommendations: string[];}
interface NanoscaleDevices {
  id: string;
  name: string;
  description: string;
  type: 'quantum_dots' | 'nanowires' | 'nanotubes' | 'nanoparticles' | 'nanofilms' | 'nanostructures";
  status: 'active' | 'inactive' | 'fabricating' | 'error' | 'offline";
  size: number;
  conductivity: number;
  aiAnalysis: DeviceAnalysis;}
interface DeviceAnalysis {
  id: string;
  fabricationScore: number;
  performanceScore: number;
  reliabilityScore: number;
  recommendations: string[];}
interface MolecularComputing {
  id: string;
  computingId: string;
  title: string;
  description: string;
  type: 'dna_computing' | 'molecular_logic' | 'quantum_molecular' | 'biomolecular' | 'synthetic_biology' | 'molecular_memory";
  status: 'active' | 'inactive' | 'computing' | 'error' | 'offline";
  operations: number;
  accuracy: number;
  aiAnalysis: ComputingAnalysis;}
interface ComputingAnalysis {
  id: string;
  computingScore: number;
  accuracyScore: number;
  speedScore: number;
  recommendations: string[];}
interface Nanorobotics {
  id: string;
  robotId: string;
  title: string;
  description: string;
  type: 'nanorobots' | 'nanomachines' | 'nanomotors' | 'nanoswimmers' | 'nanogrippers' | 'nanopropellers";
  status: 'active' | 'inactive' | 'operating' | 'error' | 'offline";
  mobility: number;
  precision: number;
  aiAnalysis: RoboticsAnalysis;}
interface RoboticsAnalysis {
  id: string;
  mobilityScore: number;
  precisionScore: number;
  controlScore: number;
  recommendations: string[];}
interface NanotechnologyManagement {
  id: string;
  systemId: string;
  title: string;
  description: string;
  category: 'research' | 'development' | 'production' | 'quality' | 'safety' | 'optimization";
  status: 'operational' | 'maintenance' | 'error' | 'offline";
  devices: number;
  efficiency: number;
  aiAnalysis: ManagementAnalysis;}
interface ManagementAnalysis {
  id: string;
  managementScore: number;
  innovationScore: number;
  safetyScore: number;
  recommendations: string[];}
interface NanotechnologyAnalytics {
  totalNanodevices: number;
  activeMolecularSystems: number;
  nanoscaleDevices: number;
  computingSystems: number;
  nanorobotics: number;
  managedSystems: number;
  averageScale: number;
  aiOptimizationScore: number;
  aiInsights: NanotechnologyInsight[];}
interface NanotechnologyInsight {
  id: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral";
  confidence: number;
  recommendations: string[];}
const AIPoweredNanotechnologyPage: NextPage = () => {
  const [nanotechnology, setNanotechnology] = useState<Nanotechnology[]>([]
  const [molecularEngineering, setMolecularEngineering] = useState<MolecularEngineering[]>([]
  const [nanoscaleDevices, setNanoscaleDevices] = useState<NanoscaleDevices[]>([]
  const [molecularComputing, setMolecularComputing] = useState<MolecularComputing[]>([]
  const [nanorobotics, setNanorobotics] = useState<Nanorobotics[]>([]
  const [nanotechnologyManagement, setNanotechnologyManagement] = useState<NanotechnologyManagement[]>([]
  const [analytics, setAnalytics] = useState<NanotechnologyAnalytics | null>(null
  const [activeTab, setActiveTab] = useState<'nanotechnology' | 'molecular' | 'devices' | 'computing' | 'robotics' | 'management' | 'overview'>('nanotechnology
  const [selectedType, setSelectedType] = useState<string>('all
  const [isLoading, setIsLoading] = useState(true
  // Mock data
  const $1: $2[] = [
    {
      id: '1',
      name: 'Advanced Nanomaterials System',
      description: 'High-precision nanotechnology system for advanced material development',
      type: 'nanomaterials',
      status: 'active',
      scale: 10,
      precision: 99.9,
      efficiency: 95.5,'
      aiAnalysis: {
        id: '1',
        performanceScore: 94,
        precisionScore: 99,'
        innovationScore: 96,
        recommendations: ['Optimize nanoscale fabrication', 'Enhance material properties']}}
    }]
  const $1: $2[] = [
    {
      id: '1',
      title: 'Molecular Design Platform',
      description: 'Advanced molecular engineering with AI-driven design optimization',
      type: 'molecular_design',
      status: 'active',
      molecules: 5000,
      complexity: 85,'
      aiOptimization: {
        id: '1',
        designScore: 93,
        synthesisScore: 91,'
        efficiencyScore: 94,
        recommendations: ['Improve molecular modeling', 'Enhance synthesis protocols']}
}]
  const $1: $2[] = [
    {
      id: '1',
      name: 'Quantum Dot Array',
      description: 'High-performance quantum dot nanoscale device system',
      type: 'quantum_dots',
      status: 'active',
      size: 5,
      conductivity: 98.5,'
      aiAnalysis: {
        id: '1',
        fabricationScore: 95,
        performanceScore: 97,'
        reliabilityScore: 94,
        recommendations: ['Optimize quantum dot synthesis', 'Enhance device stability']}
}]
  const $1: $2[] = [
    {
      id: '1',
      computingId: 'MC-001',
      title: 'DNA Computing System',
      description: 'Advanced molecular computing using DNA-based algorithms',
      type: 'dna_computing',
      status: 'active',
      operations: 1000000,
      accuracy: 99.8,'
      aiAnalysis: {
        id: '1',
        computingScore: 96,
        accuracyScore: 99,'
        speedScore: 94,
        recommendations: ['Optimize DNA sequences', 'Enhance computational efficiency']}
}]
  const $1: $2[] = [
    {
      id: '1',
      robotId: 'NR-001',
      title: 'Nanorobot Swarm',
      description: 'Advanced nanorobotics system for precise nanoscale operations',
      type: 'nanorobots',
      status: 'active',
      mobility: 95.5,
      precision: 99.2,'
      aiAnalysis: {
        id: '1',
        mobilityScore: 95,
        precisionScore: 99,'
        controlScore: 96,
        recommendations: ['Improve swarm coordination', 'Enhance precision control']}
}]
  const $1: $2[] = [
    {
      id: '1',
      systemId: 'NTM-001',
      title: 'Nanotechnology Management',
      description: 'Comprehensive management of nanotechnology research and development',
      category: 'research',
      status: 'operational',
      devices: 15,
      efficiency: 96.5,'
      aiAnalysis: {
        id: '1',
        managementScore: 94,
        innovationScore: 96,'
        safetyScore: 98,
        recommendations: ['Monitor device performance', 'Optimize research protocols']}
}]
  const mockAnalytics: NanotechnologyAnalytics = {
    totalNanodevices: 73,
    activeMolecularSystems: 28,
    nanoscaleDevices: 19,
    computingSystems: 12,
    nanorobotics: 14,
    managedSystems: 9,
    averageScale: 12.5,
    aiOptimizationScore: 96,
    aiInsights: ['
      {
        id: '1',
        title: 'High Nanotechnology Performance',
        description: 'AI-powered nanotechnology system shows 96% optimization score with advanced molecular engineering and nanoscale precision',
        impact: 'positive','
        confidence: 0.96,
        recommendations: ['Continue AI monitoring', 'Expand nanotechnology capabilities']
      }]}
  useEffect(() => {
    setTimeout(() => {
      setNanotechnology(mockNanotechnology
      setMolecularEngineering(mockMolecularEngineering
      setNanoscaleDevices(mockNanoscaleDevices
      setMolecularComputing(mockMolecularComputing
      setNanorobotics(mockNanorobotics
      setNanotechnologyManagement(mockNanotechnologyManagement
      setAnalytics(mockAnalytics
      setIsLoading(false
    } 1000
  } []
  const filteredNanotechnology = useMemo(() => {'
    let filtered = nanotechnology
    if (selectedType !== 'all') {
      filtered = filtered.filter(tech => tech.type === selectedType}
    return filtered;
  } [nanotechnology, selectedType]
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300
      case 'inactive': return 'bg-gray-500/20 text-gray-300
      case 'research': return 'bg-blue-500/20 text-blue-300
      case 'error': return 'bg-red-500/20 text-red-300
      case 'offline': return 'bg-gray-500/20 text-gray-300
      case 'designing': return 'bg-purple-500/20 text-purple-300
      case 'fabricating': return 'bg-yellow-500/20 text-yellow-300
      case 'computing': return 'bg-orange-500/20 text-orange-300
      case 'operating': return 'bg-indigo-500/20 text-indigo-300
      case 'operational': return 'bg-green-500/20 text-green-300
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  const getTypeColor = (type: string) => {'
    switch (type) {
      case 'nanomaterials': return 'bg-blue-500/20 text-blue-300
      case 'nanodevices': return 'bg-green-500/20 text-green-300
      case 'nanosensors': return 'bg-purple-500/20 text-purple-300
      case 'nanomedicine': return 'bg-red-500/20 text-red-300
      case 'nanoelectronics': return 'bg-orange-500/20 text-orange-300
      case 'nanophotonics': return 'bg-yellow-500/20 text-yellow-300
      case 'molecular_design': return 'bg-blue-500/20 text-blue-300
      case 'molecular_synthesis': return 'bg-green-500/20 text-green-300
      case 'molecular_assembly': return 'bg-purple-500/20 text-purple-300
      case 'molecular_computing': return 'bg-red-500/20 text-red-300
      case 'molecular_sensors': return 'bg-orange-500/20 text-orange-300
      case 'molecular_machines': return 'bg-yellow-500/20 text-yellow-300
      case 'quantum_dots': return 'bg-blue-500/20 text-blue-300
      case 'nanowires': return 'bg-green-500/20 text-green-300
      case 'nanotubes': return 'bg-purple-500/20 text-purple-300
      case 'nanoparticles': return 'bg-red-500/20 text-red-300
      case 'nanofilms': return 'bg-orange-500/20 text-orange-300
      case 'nanostructures': return 'bg-yellow-500/20 text-yellow-300
      case 'dna_computing': return 'bg-blue-500/20 text-blue-300
      case 'molecular_logic': return 'bg-green-500/20 text-green-300
      case 'quantum_molecular': return 'bg-purple-500/20 text-purple-300
      case 'biomolecular': return 'bg-red-500/20 text-red-300
      case 'synthetic_biology': return 'bg-orange-500/20 text-orange-300
      case 'molecular_memory': return 'bg-yellow-500/20 text-yellow-300
      case 'nanorobots': return 'bg-blue-500/20 text-blue-300
      case 'nanomachines': return 'bg-green-500/20 text-green-300
      case 'nanomotors': return 'bg-purple-500/20 text-purple-300
      case 'nanoswimmers': return 'bg-red-500/20 text-red-300
      case 'nanogrippers': return 'bg-orange-500/20 text-orange-300
      case 'nanopropellers': return 'bg-yellow-500/20 text-yellow-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  return (
    <div>
      </div><div className=" relative z-10 container-responsive" py-8>
        "
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head> 
        <title>AI-Powered Nanotechnology & Molecular Engineering System | Zion Tech Group</title>
        <meta name="description content=Nanotechnology, molecular engineering, nanoscale devices, molecular computing, nanorobotics, and automated nanotechnology management powered by AI. > </meta" name="description" content="Nanotechnology, molecular engineering, nanoscale devices, molecular computing, nanorobotics, and automated nanotechnology management powered by" AI." ><meta name="keywords content=nanotechnology, molecular engineering, nanoscale devices, molecular computing, nanorobotics, AI nanotechnology > </meta" name="keywords" content="nanotechnology, molecular engineering, nanoscale devices, molecular computing, nanorobotics, AI" nanotechnology" ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      {/* Header */}"
      <div className="relative" overflow-hidden>
        </div><div className="absolute" inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20></div>
        <div className="relative" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44> 
          </div><div className="text-center>"
            <h1 className="text-5xl" md text-6xl font-bold text-white mb-6>
              AI-Powered Nanotechnology & Molecular Engineering System
            </h1>
            <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
              Nanotechnology, molecular engineering, nanoscale devices, "
              molecular computing, nanorobotics, and automated nanotechnology management powered by AI.
            </p>
            <div className="flex" flex-wrap justify-center gap-4> 
              </div><div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className="text-white" font-semibold>🔬 Nanotechnology</span> 
              </div>
              <div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6" py-3>
                <span className="text-white" font-semibold>🧬 Molecular Engineering</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className="text-white" font-semibold>⚛️ Nanoscale Devices</span>
              </div>
            </div">
          </div>
        </div>
      </div>
"
      {/* Main Content */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
        {isLoading ? (
          </div><div className="flex" justify-center items-center py-40>
            <div className="animate-spin" rounded-full h-12 w-12 border-b-2 border-indigo-500 ></div>
          </div>
        ) : ("
          </>
            {/* Tabs */}"
            <div className=" flex flex-wrap justify-center" mb-8>'
              "''
                onClick={() => setActiveTab('nanotechnology')}"'
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'nanotechnology
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Nanotechnology ({nanotechnology.length}
              </button> '
              "'''`
                onClick={() => setActiveTab('molecular')}``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'molecular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Molecular Engineering ({molecularEngineering.length}
              </button>'
              `
                onClick={() => setActiveTab('devices')}``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'devices
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Nanoscale Devices ({nanoscaleDevices.length}
              </button>'
              `
                onClick={() => setActiveTab('computing')}``
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'computing
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Molecular Computing ({molecularComputing.length}
              </button>'
              "'''`
                onClick={() => setActiveTab('robotics')}"''``
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'robotics
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Nanorobotics ({nanorobotics.length}
              </button> '
              "'''`
                onClick={() => setActiveTab('management')}``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'management
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Management ({nanotechnologyManagement.length}
              </button>'
              `
                onClick={() => setActiveTab('overview')}``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'overview
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Overview
              </button>
            </div>
"'
            {/* Nanotechnology Tab */},
{activeTab === 'nanotechnology' && ("
              <div className=" space-y-8>
                {/* Controls */}
                </div><div className=" bg-white/10 backdrop-blur-sm:rounded-xl" p-6>
                  <div className="flex" flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0> 
                    </div><div className="flex items-center space-x-4">
                      
                        onChange={(e) => setSelectedType(e.target.value)}"
                        className=" bg-white/10 border border-white/20 rounded-lg px-3 py-4 text-white focus outline-none focus ring-2 focus" ring-indigo-500"
                      >
                        <option value=all className="bg-slate-800>All" Types</option>
                        <option value=nanomaterials className="bg-slate-800>Nanomaterials</option>"
                        <option value=nanodevices className="bg-slate-800>Nanodevices</option>"
                        <option value=nanosensors className="bg-slate-800>Nanosensors</option>"
                        <option value=nanomedicine className="bg-slate-800>Nanomedicine</option>"
                        <option value=nanoelectronics className="bg-slate-800>Nanoelectronics</option>"
                        <option value=nanophotonics className="bg-slate-800>Nanophotonics</option>"
                      </select>
                    </div>
                    <button className="bg-gradient-to-r" from-indigo-600 to-purple-600 hover from-indigo-700 hover to-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 >
                      Create Nanotechnology System
                    </button> </div>
                </div>

                {/* Nanotechnology Grid */}"
                <div className=" grid grid-cols-1 lg grid-cols-2 gap-6>
                  {filteredNanotechnology.map((tech) => (
                    </div><div key={tech.id} className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>
                      <div className="flex" items-start justify-between mb-4>
                        </div><div>'
                          <h3 className="text-xl" font-semibold text-white mb-2 >{tech.name}</h3>
                          <p className="text-gray-300" text-sm capitalize>{tech.type.replace('_', ' ')} System</p>
                        </div>`
                        <div className="text-right">``
                          <span className="{`px-3" py-3 rounded-full text-sm font-medium ${getStatusColor(tech.status)}`}>
                            {tech.status} 
                          </span>`
                          <div className="mt-2"">``
                            <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getTypeColor(tech.type)}`}>
                              {tech.scale}nm scale
                            </span>
                          </div>
                        </div> 
                      </div>
                      <div className="mb-4>
                        <p className="text-gray-300" text-sm>{tech.description}</p> 
                      </div>
                      <div className="grid" grid-cols-3 gap-4 mb-4>
                        </div><div className=" bg-white/5 rounded-lg" p-4>
                          <div className="text-sm" text-gray-400 mb-1>Scale</div>
                          <div className="text-2xl" font-bold text-white>{tech.scale}nm</div>
                        </div>
                        <div className="bg-white/5" rounded-lg p-4 >
                          </div><div className="text-sm" text-gray-400 mb-1>Precision</div>
                          <div className="text-2xl" font-bold text-white>{tech.precision}%</div>
                        </div>
                        <div className="bg-white/5" rounded-lg:p-4>
                          </div><div className="text-sm" text-gray-400 mb-1 >Efficiency</div>
                          <div className="text-2xl" font-bold text-white>{tech.efficiency}%</div>
                        </div>
                      </div>
                      {/* AI Analysis */}
                      <div className="mb-4">
                        <h4 className="text-lg" font-semibold text-white mb-3>AI Analysis</h4>
                        <div className="bg-gradient-to-r" from-indigo-600/20 to-purple-600/20 rounded-lg:p-4>
                          </div><div className="grid" grid-cols-3 gap-4 text-sm>
                            <div> 
                              </div><div className="text-gray-400" mb-1>Performance</div>
                              <div className="text-white" font-semibold>{tech.aiAnalysis.performanceScore}%</div>
                            </div>
                            <div>
                              </div><div className="text-gray-400" mb-1 >Precision</div>
                              <div className="text-white" font-semibold>{tech.aiAnalysis.precisionScore}%</div>
                            </div>
                            <div> 
                              </div><div className="text-gray-400" mb-1>Innovation</div>
                              <div className="text-white" font-semibold>{tech.aiAnalysis.innovationScore}%</div>
                            </div>
                          </div>
                          <div className="mt-3>"
                            </div><div className="text-sm" font-medium text-gray-400 mb-1>Recommendations </div>'
                            <div className="text-xs" text-gray-300>
                              {tech.aiAnalysis.recommendations.join(', ')}
                            </div>
                          </div>
                        </div> 
                      </div>
                      <div className="flex" space-x-2>
                        <button className="flex-1" bg-gradient-to-r from-indigo-600 to-purple-600 hover from-indigo-700 hover to-purple-700 text-white py-4 px-4 rounded-lg font-medium transition-all duration-300 >
                          View Details
                        </button>
                        <button className="flex-1" border border-white/20 text-white hover:bg-white/10 py-4 px-4 rounded-lg font-medium transition-all duration-300>
                          Configure
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Overview Tab */},"''
{activeTab === 'overview' && analytics && (
              <div className=" space-y-8>
                </div><div className=" grid grid-cols-1 md:grid-cols-2 lg grid-cols-4" gap-6>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.totalNanodevices.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm>Total Nanodevices</div> 
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2 >{analytics.averageScale.toLocaleString()}nm</div>
                    <div className="text-gray-400" text-sm>Avg Scale</div> 
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.activeMolecularSystems.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm >Active Molecular Systems</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.aiOptimizationScore}%</div>
                    <div className="text-gray-400" text-sm>AI Optimization Score</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl" font-semibold text-white mb-6>AI Insights</h3>
                  <div className="space-y-4>"
                    {analytics.aiInsights.map((insight) => (
                      </div><div key={insight.id} className=" bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg" p-4>
                        <div className="flex"  items-start justify-between mb-2>
                          <h4 className="text-white" font-semibold>{insight.title}</h4>`
                          ``
                          }`}>"
                            {insight.impact}
                          </span>
                        </div>"
                        <p className="text-gray-300" text-sm:mb-3>{insight.description}</p>
                        <div className="text-xs" text-gray-400 mb-2 >
                          Confidence: {Math.round(insight.confidence * 100)}%
                        </div>'
                        <div className="text-xs" text-gray-400>
                          <strong>Recommendations </strong> {insight.recommendations.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div> 
      {/* CTA Section */}"
      <div className="bg-gradient-to-r" from-indigo-600/20 to-purple-600/20 mt-16> 
        </div><div className="max-w-7xl"" mx-auto px-4 sm:px-6 lg:px-8 py-36>
          <div className="text-center>"
            <h2 className="text-3xl" font-bold text-white mb-4>
              Ready to Explore Nanotechnology?
            </h2>
            <p className="text-xl" text-gray-300 mb-8 max-w-2xl mx-auto>
              Start your nanotechnology journey with our AI-powered system  
              and ensure comprehensive nanotechnology management.
            </p>
            <div className="flex  flex-col sm:flex-row gap-4 justify-center>
              <Link href=/ai-service-matcher" className="bg-gradient-to-r" from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-indigo-500/25 transform hover scale-105 >Start Exploring
              </Link href=/ai-service-matcher  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-indigo-500/25 transform hover scale-105"></Link>
              <Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Learn More
              </Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" backdrop-blur-sm ></Link>
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
export default AIPoweredNanotechnologyPage )))))))))))))))))))))))))))))"'"'`