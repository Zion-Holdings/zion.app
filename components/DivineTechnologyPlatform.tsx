import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface DivineTechnology {
  id: string;
  name: string;
  type: 'divine_universal' | 'divine_infinite' | 'divine_transcendent' | 'divine_omnipotent' | 'divine_eternal' | 'divine_absolute';
  status: 'divine_initialization' | 'divine_awakening' | 'divine_integration' | 'divine_coherence' | 'divine_transcendence' | 'divine_absolution';
  divineCapability: number;
  universalIntegration: number;
  transcendentPower: number;
  lastUpdated: string;
  performance: number;
  complexity: 'divine_basic' | 'divine_advanced' | 'divine_expert' | 'divine_master' | 'divine_transcendent' | 'divine_absolute';
  divineEfficiency: number;
  universalScope: number;
  consciousness: number;
  description: string;
  divineCapabilities: string[];
  universalFeatures: string[];
  transcendentCapabilities: string[];
}

interface DivineTechnologyMetrics {
  totalDivineTechnologies: number;
  activeDivineTechnologies: number;
  averageDivineCapability: number;
  totalUniversalScope: number;
  divineEfficiency: number;
  transcendentPowerScore: number;
  lastDivineUpdate: string;
  universalIntegrationProgress: number;
  divineCoherenceLevel: number;
  consciousnessLevel: number;
}

interface DivineTechnologyPlatformProps {
  showMetrics?: boolean;
  maxTechnologies?: number;
  className?: string;
}

export default function DivineTechnologyPlatform({ 
  showMetrics = true, 
  maxTechnologies = 5,
  className = '' 
}: DivineTechnologyPlatformProps) {
  const [divineTechnologies, setDivineTechnologies] = useState<DivineTechnology[]>([]);
  const [metrics, setMetrics] = useState<DivineTechnologyMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [divineAwakening, setDivineAwakening] = useState<string | null>(null);
  const [showTechnologyCreator, setShowTechnologyCreator] = useState(false);
  const [newTechnology, setNewTechnology] = useState({
    name: '',
    type: 'divine_universal' as const,
    complexity: 'divine_basic' as const,
    description: ''
  });

  useEffect(() => {
    const generateDivineTechnologyData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2900));
        
        const mockDivineTechnologies: DivineTechnology[] = [
          {
            id: 'divine-universal-v1',
            name: 'Divine Universal Platform',
            type: 'divine_universal',
            status: 'divine_coherence',
            divineCapability: 99.5,
            universalIntegration: 99.3,
            transcendentPower: 99.7,
            lastUpdated: '2024-12-15T16:00:00Z',
            performance: 99.9,
            complexity: 'divine_transcendent',
            divineEfficiency: 99.6,
            universalScope: 99.8,
            consciousness: 99.4,
            description: 'Divine universal platform providing transcendent divine capabilities and universal technology integration across all divine dimensions.',
            divineCapabilities: ['Divine Awakening', 'Divine Integration', 'Divine Coherence', 'Divine Transcendence'],
            universalFeatures: ['Universal Integration', 'Divine Technology', 'Infinite Capabilities', 'Transcendent Power'],
            transcendentCapabilities: ['Divine Consciousness', 'Universal Wisdom', 'Infinite Understanding', 'Divine Knowledge']
          },
          {
            id: 'divine-infinite-v1',
            name: 'Divine Infinite Integration',
            type: 'divine_infinite',
            status: 'divine_transcendence',
            divineCapability: 99.9,
            universalIntegration: 99.7,
            transcendentPower: 99.9,
            lastUpdated: '2024-12-15T15:45:00Z',
            performance: 99.9,
            complexity: 'divine_absolute',
            divineEfficiency: 99.9,
            universalScope: 99.9,
            consciousness: 99.8,
            description: 'Divine infinite integration with absolute divine capabilities and universal infinite technology integration.',
            divineCapabilities: ['Divine Absolution', 'Infinite Integration', 'Absolute Power', 'Divine Capabilities'],
            universalFeatures: ['Infinite Technology', 'Universal Integration', 'Absolute Capabilities', 'Divine Power'],
            transcendentCapabilities: ['Divine Absolution', 'Infinite Consciousness', 'Absolute Wisdom', 'Divine Understanding']
          },
          {
            id: 'divine-transcendent-v1',
            name: 'Divine Transcendent System',
            type: 'divine_transcendent',
            status: 'divine_integration',
            divineCapability: 99.0,
            universalIntegration: 98.6,
            transcendentPower: 99.3,
            lastUpdated: '2024-12-15T15:30:00Z',
            performance: 99.2,
            complexity: 'divine_master',
            divineEfficiency: 98.8,
            universalScope: 99.1,
            consciousness: 98.4,
            description: 'Divine transcendent system with master-level divine capabilities and advanced universal technology integration.',
            divineCapabilities: ['Divine Mastery', 'Transcendent Integration', 'Master Capabilities', 'Master Power'],
            universalFeatures: ['Transcendent Technology', 'Universal Integration', 'Master Capabilities', 'Master Power'],
            transcendentCapabilities: ['Divine Mastery', 'Transcendent Consciousness', 'Master Wisdom', 'Master Understanding']
          },
          {
            id: 'divine-omnipotent-v1',
            name: 'Divine Omnipotent Platform',
            type: 'divine_omnipotent',
            status: 'divine_awakening',
            divineCapability: 98.2,
            universalIntegration: 97.8,
            transcendentPower: 98.6,
            lastUpdated: '2024-12-15T15:15:00Z',
            performance: 98.4,
            complexity: 'divine_expert',
            divineEfficiency: 98.0,
            universalScope: 98.3,
            consciousness: 97.5,
            description: 'Divine omnipotent platform with expert-level divine capabilities and comprehensive universal technology integration.',
            divineCapabilities: ['Divine Expertise', 'Omnipotent Integration', 'Expert Capabilities', 'Omnipotent Power'],
            universalFeatures: ['Omnipotent Technology', 'Universal Integration', 'Expert Capabilities', 'Omnipotent Power'],
            transcendentCapabilities: ['Divine Expertise', 'Omnipotent Consciousness', 'Expert Wisdom', 'Omnipotent Understanding']
          },
          {
            id: 'divine-eternal-v1',
            name: 'Divine Eternal System',
            type: 'divine_eternal',
            status: 'divine_initialization',
            divineCapability: 97.0,
            universalIntegration: 96.6,
            transcendentPower: 97.4,
            lastUpdated: '2024-12-15T15:00:00Z',
            performance: 97.2,
            complexity: 'divine_advanced',
            divineEfficiency: 96.8,
            universalScope: 97.1,
            consciousness: 96.3,
            description: 'Divine eternal system with advanced divine capabilities and foundational universal technology integration.',
            divineCapabilities: ['Divine Advancement', 'Eternal Integration', 'Advanced Capabilities', 'Eternal Power'],
            universalFeatures: ['Eternal Technology', 'Universal Integration', 'Advanced Capabilities', 'Eternal Power'],
            transcendentCapabilities: ['Divine Advancement', 'Eternal Consciousness', 'Advanced Wisdom', 'Eternal Understanding']
          }
        ];

        const mockMetrics: DivineTechnologyMetrics = {
          totalDivineTechnologies: 5,
          activeDivineTechnologies: 5,
          averageDivineCapability: 98.7,
          totalUniversalScope: 494.6,
          divineEfficiency: 98.6,
          transcendentPowerScore: 98.9,
          lastDivineUpdate: '2024-12-15T16:00:00Z',
          universalIntegrationProgress: 98.0,
          divineCoherenceLevel: 99.1,
          consciousnessLevel: 98.3
        };

        setDivineTechnologies(mockDivineTechnologies);
        setMetrics(mockMetrics);
      } catch (error) {
        console.error('Error generating divine technology data:', error);
      } finally {
        setLoading(false);
      }
    };

    generateDivineTechnologyData();
  }, [maxTechnologies]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'divine_universal': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'divine_infinite': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'divine_transcendent': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
      case 'divine_omnipotent': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'divine_eternal': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'divine_absolute': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'divine_universal': return '🌟🌌';
      case 'divine_infinite': return '🌟♾️';
      case 'divine_transcendent': return '🌟✨';
      case 'divine_omnipotent': return '🌟👑';
      case 'divine_eternal': return '🌟∞';
      case 'divine_absolute': return '🌟⚡';
      default: return '🌟';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'divine_initialization': return 'bg-gray-500/20 text-gray-400';
      case 'divine_awakening': return 'bg-pink-500/20 text-pink-400';
      case 'divine_integration': return 'bg-green-500/20 text-green-400';
      case 'divine_coherence': return 'bg-purple-500/20 text-purple-400';
      case 'divine_transcendence': return 'bg-indigo-500/20 text-indigo-400';
      case 'divine_absolution': return 'bg-cyan-500/20 text-cyan-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'divine_basic': return 'bg-green-500/20 text-green-400';
      case 'divine_advanced': return 'bg-yellow-500/20 text-yellow-400';
      case 'divine_expert': return 'bg-orange-500/20 text-orange-400';
      case 'divine_master': return 'bg-red-500/20 text-red-400';
      case 'divine_transcendent': return 'bg-purple-500/20 text-purple-400';
      case 'divine_absolute': return 'bg-cyan-500/20 text-cyan-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleDivineAwakening = async (technologyId: string) => {
    setDivineAwakening(technologyId);
    try {
      // Simulate divine awakening process
      await new Promise(resolve => setTimeout(resolve, 14000));
      
      // Update the divine technology
      setDivineTechnologies(prev => prev.map(tech => 
        tech.id === technologyId 
          ? { 
              ...tech, 
              divineCapability: Math.min(100, tech.divineCapability + 2.1),
              universalIntegration: Math.min(100, tech.universalIntegration + 1.9),
              transcendentPower: Math.min(100, tech.transcendentPower + 2.3),
              performance: Math.min(100, tech.performance + 1.8),
              divineEfficiency: Math.min(100, tech.divineEfficiency + 2.0),
              universalScope: Math.min(100, tech.universalScope + 1.7),
              consciousness: Math.min(100, tech.consciousness + 2.2),
              lastUpdated: new Date().toISOString()
            }
          : tech
      ));
      
      console.log(`Awakened divine technology ${technologyId}`);
    } catch (error) {
      console.error('Error during divine awakening:', error);
    } finally {
      setDivineAwakening(null);
    }
  };

  const handleCreateTechnology = async () => {
    if (!newTechnology.name || !newTechnology.description) return;
    
    const technology: DivineTechnology = {
      id: Date.now().toString(),
      name: newTechnology.name,
      type: newTechnology.type,
      status: 'divine_initialization',
      divineCapability: 84.0,
      universalIntegration: 80.0,
      transcendentPower: 87.0,
      lastUpdated: new Date().toISOString(),
      performance: 82.5,
      complexity: newTechnology.complexity,
      divineEfficiency: newTechnology.complexity === 'divine_basic' ? 80.0 : 
                      newTechnology.complexity === 'divine_advanced' ? 84.0 :
                      newTechnology.complexity === 'divine_expert' ? 88.0 : 92.0,
      universalScope: 81.0,
      consciousness: 79.0,
      description: newTechnology.description,
      divineCapabilities: ['Divine Initiation', 'Basic Integration', 'Foundation'],
      universalFeatures: ['Universal Foundation', 'Basic Technology', 'Integration'],
      transcendentCapabilities: ['Basic Consciousness', 'Foundation', 'Initiation']
    };
    
    setDivineTechnologies(prev => [technology, ...prev]);
    setNewTechnology({
      name: '',
      type: 'divine_universal',
      complexity: 'divine_basic',
      description: ''
    });
    setShowTechnologyCreator(false);
  };

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-800/30 rounded-lg p-4">
              <div className="h-4 bg-slate-700 rounded mb-2"></div>
              <div className="h-3 bg-slate-700 rounded mb-2"></div>
              <div className="h-3 bg-slate-700 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">🌟🌌 Divine Technology Platform</h3>
        <p className="text-white/70 text-sm">
          Divine-powered universal technology integration with transcendent divine capabilities
        </p>
      </div>

      {/* Create New Divine Technology Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowTechnologyCreator(!showTechnologyCreator)}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
        >
          {showTechnologyCreator ? 'Cancel' : '➕ Create New Divine Technology'}
        </button>
      </div>

      {/* New Technology Form */}
      {showTechnologyCreator && (
        <div className="bg-slate-800/30 border border-white/10 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-cyan-400 mb-3">Create New Divine Technology</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Technology Name</label>
              <input
                type="text"
                value={newTechnology.name}
                onChange={(e) => setNewTechnology(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-slate-700 border border-white/10 rounded px-3 py-2 text-white text-sm"
                placeholder="Enter divine technology name..."
              />
            </div>
            
            <div>
              <label className="block text-sm text-white/70 mb-1">Technology Type</label>
              <select
                value={newTechnology.type}
                onChange={(e) => setNewTechnology(prev => ({ ...prev, type: e.target.value as any }))}
                className="w-full bg-slate-700 border border-white/10 rounded px-3 py-2 text-white text-sm"
              >
                <option value="divine_universal">Divine Universal</option>
                <option value="divine_infinite">Divine Infinite</option>
                <option value="divine_transcendent">Divine Transcendent</option>
                <option value="divine_omnipotent">Divine Omnipotent</option>
                <option value="divine_eternal">Divine Eternal</option>
                <option value="divine_absolute">Divine Absolute</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-white/70 mb-1">Complexity Level</label>
              <select
                value={newTechnology.complexity}
                onChange={(e) => setNewTechnology(prev => ({ ...prev, complexity: e.target.value as any }))}
                className="w-full bg-slate-700 border border-white/10 rounded px-3 py-2 text-white text-sm"
              >
                <option value="divine_basic">Divine Basic</option>
                <option value="divine_advanced">Divine Advanced</option>
                <option value="divine_expert">Divine Expert</option>
                <option value="divine_master">Divine Master</option>
                <option value="divine_transcendent">Divine Transcendent</option>
                <option value="divine_absolute">Divine Absolute</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm text-white/70 mb-1">Description</label>
            <textarea
              value={newTechnology.description}
              onChange={(e) => setNewTechnology(prev => ({ ...prev, description: e.target.value }))}
              className="w-full bg-slate-700 border border-white/10 rounded px-3 py-2 text-white text-sm"
              rows={3}
              placeholder="Describe the divine technology..."
            />
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleCreateTechnology}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Create Technology
            </button>
            <button
              onClick={() => setShowTechnologyCreator(false)}
              className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Divine Technology Metrics Overview */}
      {showMetrics && metrics && (
        <div className="bg-slate-800/30 border border-white/10 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-cyan-400 mb-3">📊 Divine Technology Overview</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{metrics.totalDivineTechnologies}</div>
              <div className="text-xs text-white/60">Total Divine Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{metrics.activeDivineTechnologies}</div>
              <div className="text-xs text-white/60">Active Divine Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{metrics.averageDivineCapability.toFixed(1)}%</div>
              <div className="text-xs text-white/60">Avg Divine Capability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{metrics.totalUniversalScope.toFixed(1)}</div>
              <div className="text-xs text-white/60">Total Universal Scope</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Divine Efficiency:</span>
              <span className="text-green-400">{metrics.divineEfficiency}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Transcendent Power Score:</span>
              <span className="text-cyan-400">{metrics.transcendentPowerScore}/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Universal Integration Progress:</span>
              <span className="text-purple-400">{metrics.universalIntegrationProgress}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Divine Coherence Level:</span>
              <span className="text-indigo-400">{metrics.divineCoherenceLevel}/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Consciousness Level:</span>
              <span className="text-pink-400">{metrics.consciousnessLevel}/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Last Update:</span>
              <span className="text-white text-xs">
                {new Date(metrics.lastDivineUpdate).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Divine Technologies */}
      <div className="space-y-4">
        {divineTechnologies.slice(0, maxTechnologies).map((technology) => (
          <div key={technology.id} className="bg-slate-800/30 border border-white/10 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getTypeIcon(technology.type)}</span>
                <div>
                  <h4 className="font-semibold text-white">{technology.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(technology.status)}`}>
                      {technology.status.replace('divine_', '')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${getComplexityColor(technology.complexity)}`}>
                      {technology.complexity.replace('divine_', '')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className={`px-2 py-1 rounded text-xs font-medium border ${getTypeColor(technology.type)}`}>
                  {technology.type.replace('divine_', '').toUpperCase()}
                </span>
                <div className="text-sm text-white/60 mt-1">
                  {technology.divineEfficiency.toFixed(1)}% efficiency
                </div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-white/80 text-sm">{technology.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Status:</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(technology.status)}`}>
                      {technology.status.replace('divine_', '').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Divine Capability:</span>
                    <span className="text-pink-400">{technology.divineCapability.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Universal Integration:</span>
                    <span className="text-indigo-400">{technology.universalIntegration.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Transcendent Power:</span>
                    <span className="text-emerald-400">{technology.transcendentPower.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Performance:</span>
                    <span className="text-white">{technology.performance}/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Divine Efficiency:</span>
                    <span className="text-cyan-400">{technology.divineEfficiency.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Universal Scope:</span>
                    <span className="text-amber-400">{technology.universalScope.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Consciousness:</span>
                    <span className="text-purple-400">{technology.consciousness.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divine Capabilities */}
            <div className="mb-4">
              <div className="text-sm text-white/60 mb-2">Divine Capabilities:</div>
              <div className="flex flex-wrap gap-2">
                {technology.divineCapabilities.map((capability, index) => (
                  <span key={index} className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded border border-pink-500/30">
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            {/* Universal Features */}
            <div className="mb-4">
              <div className="text-sm text-white/60 mb-2">Universal Features:</div>
              <div className="flex flex-wrap gap-2">
                {technology.universalFeatures.map((feature, index) => (
                  <span key={index} className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded border border-indigo-500/30">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Transcendent Capabilities */}
            <div className="mb-4">
              <div className="text-sm text-white/60 mb-2">Transcendent Capabilities:</div>
              <div className="flex flex-wrap gap-2">
                {technology.transcendentCapabilities.map((capability, index) => (
                  <span key={index} className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            {/* Divine Technology Progress Visualization */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs text-white/60">
                <span>Overall Divine Technology Performance</span>
                <span>{Math.round((technology.divineCapability + technology.universalIntegration + technology.transcendentPower + technology.performance + technology.divineEfficiency + technology.universalScope + technology.consciousness) / 7)}/100</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(technology.divineCapability + technology.universalIntegration + technology.transcendentPower + technology.performance + technology.divineEfficiency + technology.universalScope + technology.consciousness) / 7}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-white/60">
                {technology.status === 'divine_absolution' && 'Divine technology has achieved absolute divine capabilities'}
                {technology.status === 'divine_transcendence' && 'Divine technology has achieved transcendent divine capabilities'}
                {technology.status === 'divine_coherence' && 'Divine technology has achieved divine coherence'}
                {technology.status === 'divine_integration' && 'Divine technology has achieved divine integration'}
                {technology.status === 'divine_awakening' && 'Divine technology is awakening divine capabilities'}
                {technology.status === 'divine_initialization' && 'Divine technology is initializing divine capabilities'}
              </div>
              
              {technology.status !== 'divine_absolution' && (
                <button
                  onClick={() => handleDivineAwakening(technology.id)}
                  disabled={divineAwakening === technology.id}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  {divineAwakening === technology.id ? 'Awakening...' : '🌟🌌 Awaken Divine Technology'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Divine Technology Type Distribution */}
      <div className="mt-6 bg-slate-800/30 border border-white/10 rounded-lg p-4">
        <h4 className="font-medium text-cyan-400 mb-3">🌟🌌 Divine Technology Type Distribution</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {['divine_universal', 'divine_infinite', 'divine_transcendent', 'divine_omnipotent', 'divine_eternal', 'divine_absolute'].map((type) => {
            const count = divineTechnologies.filter(tech => tech.type === type).length;
            const total = divineTechnologies.length;
            const percentage = total > 0 ? (count / total) * 100 : 0;
            
            return (
              <div key={type} className="text-center">
                <div className="text-2xl mb-1">{getTypeIcon(type)}</div>
                <div className="text-white font-medium capitalize">
                  {type.replace('divine_', '')}
                </div>
                <div className="text-cyan-400">{count}/{total}</div>
                <div className="text-xs text-white/60">{percentage.toFixed(1)}%</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link 
          href="/analytics-dashboard"
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          View Full Divine Technology Analytics →
        </Link>
      </div>
    </div>
  );
}