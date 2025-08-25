import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Cloud,
  Database,
  Smartphone,
  BarChart3,
  Users,
  Clock,
  DollarSign,
  Star,
  Rocket
} from 'lucide-react';

interface BusinessNeed {
  id: string;
  category: string;
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  icon: React.ReactNode;
}

interface ServiceRecommendation {
  id: string;
  name: string;
  description: string;
  matchScore: number;
  estimatedROI: string;
  timeline: string;
  investment: string;
  benefits: string[];
  whyRecommended: string;
  icon: React.ReactNode;
  category: string;
}

const businessNeeds: BusinessNeed[] = [
  {
    id: 'automation',
    category: 'Efficiency',
    name: 'Process Automation',
    description: 'Automate repetitive tasks and workflows',
    priority: 'high',
    impact: 'high',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'security',
    category: 'Protection',
    name: 'Cybersecurity',
    description: 'Protect against threats and ensure compliance',
    priority: 'high',
    impact: 'high',
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: 'cloud',
    category: 'Infrastructure',
    name: 'Cloud Migration',
    description: 'Move to scalable cloud infrastructure',
    priority: 'medium',
    impact: 'high',
    icon: <Cloud className="w-5 h-5" />
  },
  {
    id: 'analytics',
    category: 'Insights',
    name: 'Data Analytics',
    description: 'Gain insights from business data',
    priority: 'medium',
    impact: 'medium',
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    id: 'ai',
    category: 'Innovation',
    name: 'AI Integration',
    description: 'Implement AI-powered solutions',
    priority: 'medium',
    impact: 'high',
    icon: <Brain className="w-5 h-5" />
  },
  {
    id: 'mobile',
    category: 'Accessibility',
    name: 'Mobile Solutions',
    description: 'Develop mobile applications',
    priority: 'low',
    impact: 'medium',
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 'database',
    category: 'Data Management',
    name: 'Database Optimization',
    description: 'Optimize data storage and retrieval',
    priority: 'low',
    impact: 'medium',
    icon: <Database className="w-5 h-5" />
  },
  {
    id: 'collaboration',
    category: 'Teamwork',
    name: 'Team Collaboration',
    description: 'Improve team communication and workflow',
    priority: 'low',
    impact: 'low',
    icon: <Users className="w-5 h-5" />
  }
];

const serviceRecommendations: ServiceRecommendation[] = [
  {
    id: 'ai-automation',
    name: 'AI Business Process Automation',
    description: 'Intelligent automation with machine learning',
    matchScore: 95,
    estimatedROI: '300-500%',
    timeline: '4-6 weeks',
    investment: '$8,999 - $15,999',
    benefits: ['Reduce manual work by 80%', 'Improve accuracy by 95%', 'Scale operations efficiently'],
    whyRecommended: 'High priority need with maximum impact potential',
    icon: <Brain className="w-6 h-6" />,
    category: 'AI & Automation'
  },
  {
    id: 'cybersecurity-suite',
    name: 'Comprehensive Cybersecurity Suite',
    description: 'Advanced threat protection and compliance',
    matchScore: 92,
    estimatedROI: 'Preventive (saves $100K+ annually)',
    timeline: '6-8 weeks',
    investment: '$12,999 - $25,999',
    benefits: ['100% compliance guarantee', '24/7 threat monitoring', 'Zero breach protection'],
    whyRecommended: 'Critical security need with high business impact',
    icon: <Shield className="w-6 h-6" />,
    category: 'Security'
  },
  {
    id: 'cloud-migration',
    name: 'Enterprise Cloud Migration',
    description: 'Seamless cloud infrastructure transition',
    matchScore: 88,
    estimatedROI: '200-400%',
    timeline: '8-12 weeks',
    investment: '$25,000 - $50,000',
    benefits: ['50% cost reduction', '99.9% uptime guarantee', 'Global scalability'],
    whyRecommended: 'High impact infrastructure modernization',
    icon: <Cloud className="w-6 h-6" />,
    category: 'Infrastructure'
  },
  {
    id: 'data-analytics',
    name: 'Advanced Business Intelligence',
    description: 'Real-time analytics and insights platform',
    matchScore: 85,
    estimatedROI: '400-600%',
    timeline: '8-10 weeks',
    investment: '$18,999 - $35,999',
    benefits: ['Real-time decision making', 'Predictive analytics', 'Custom dashboards'],
    whyRecommended: 'Medium priority with high ROI potential',
    icon: <BarChart3 className="w-6 h-6" />,
    category: 'Analytics'
  },
  {
    id: 'web-development',
    name: 'Custom Web Application',
    description: 'Modern, scalable web solutions',
    matchScore: 82,
    estimatedROI: '250-400%',
    timeline: '10-14 weeks',
    investment: '$15,999 - $30,999',
    benefits: ['Enhanced user experience', 'Mobile-first design', 'SEO optimization'],
    whyRecommended: 'Medium priority with good ROI potential',
    icon: <Smartphone className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 'devops-automation',
    name: 'DevOps & CI/CD Automation',
    description: 'Streamlined development and deployment',
    matchScore: 78,
    estimatedROI: '200-300%',
    timeline: '4-6 weeks',
    investment: '$7,999 - $15,999',
    benefits: ['10x faster deployments', 'Reduced errors by 90%', 'Improved team productivity'],
    whyRecommended: 'Efficiency improvement with good ROI',
    icon: <Rocket className="w-6 h-6" />,
    category: 'DevOps'
  }
];

export function AIServiceRecommendation() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<'startup' | 'sme' | 'enterprise'>('sme');
  const [industry, setIndustry] = useState<'tech' | 'finance' | 'healthcare' | 'retail' | 'manufacturing'>('tech');
  const [budget, setBudget] = useState<'low' | 'medium' | 'high'>('medium');
  const [timeline, setTimeline] = useState<'immediate' | 'quarter' | 'year'>('quarter');

  const selectedNeedObjects = useMemo(() => {
    return businessNeeds.filter(need => selectedNeeds.includes(need.id));
  }, [selectedNeeds]);

  const priorityScore = useMemo(() => {
    if (selectedNeedObjects.length === 0) return 0;
    const scores = { low: 1, medium: 2, high: 3 };
    return selectedNeedObjects.reduce((sum, need) => sum + scores[need.priority], 0) / selectedNeedObjects.length;
  }, [selectedNeedObjects]);

  const impactScore = useMemo(() => {
    if (selectedNeedObjects.length === 0) return 0;
    const scores = { low: 1, medium: 2, high: 3 };
    return selectedNeedObjects.reduce((sum, need) => sum + scores[need.impact], 0) / selectedNeedObjects.length;
  }, [selectedNeedObjects]);

  const recommendations = useMemo(() => {
    if (selectedNeeds.length === 0) return [];
    
    // AI-powered scoring algorithm
    return serviceRecommendations
      .map(service => {
        let score = 0;
        
        // Base score from service match
        score += service.matchScore;
        
        // Company size adjustment
        if (companySize === 'startup' && service.investment.includes('$8,999')) score += 10;
        if (companySize === 'enterprise' && service.investment.includes('$25,000')) score += 10;
        
        // Industry-specific adjustments
        if (industry === 'finance' && service.category === 'Security') score += 15;
        if (industry === 'healthcare' && service.category === 'Security') score += 15;
        if (industry === 'tech' && service.category === 'AI & Automation') score += 10;
        
        // Budget alignment
        if (budget === 'low' && service.investment.includes('$8,999')) score += 10;
        if (budget === 'high' && service.investment.includes('$25,000')) score += 10;
        
        // Timeline alignment
        if (timeline === 'immediate' && service.timeline.includes('4-6')) score += 10;
        if (timeline === 'year' && service.timeline.includes('8-12')) score += 5;
        
        return { ...service, finalScore: score };
      })
      .sort((a, b) => b.finalScore - a.finalScore)
      .slice(0, 3);
  }, [selectedNeeds, companySize, industry, budget, timeline]);

  const handleNeedToggle = (needId: string) => {
    setSelectedNeeds(prev => 
      prev.includes(needId) 
        ? prev.filter(id => id !== needId)
        : [...prev, needId]
    );
  };

  const resetRecommendations = () => {
    setSelectedNeeds([]);
    setCompanySize('sme');
    setIndustry('tech');
    setBudget('medium');
    setTimeline('quarter');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-500/20 border-green-400/30';
      default: return 'text-white/60 bg-white/10 border-white/20';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-purple-400 bg-purple-500/20 border-purple-400/30';
      case 'medium': return 'text-blue-400 bg-blue-500/20 border-blue-400/30';
      case 'low': return 'text-cyan-400 bg-cyan-500/20 border-cyan-400/30';
      default: return 'text-white/60 bg-white/10 border-white/20';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Service Recommendations
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our AI analyzes your business needs and recommends the perfect service combination for maximum ROI and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Company Profile */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                Company Profile
              </h3>
              
              {/* Company Size */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white/80 mb-2">Company Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'startup', label: 'Startup', desc: '1-50 employees' },
                    { value: 'sme', label: 'SME', desc: '51-500 employees' },
                    { value: 'enterprise', label: 'Enterprise', desc: '500+ employees' }
                  ].map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setCompanySize(size.value as any)}
                      className={`p-3 rounded-lg border transition-all duration-300 text-center ${
                        companySize === size.value
                          ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                          : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30'
                      }`}
                    >
                      <div className="font-semibold text-sm">{size.label}</div>
                      <div className="text-xs opacity-70">{size.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white/80 mb-2">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value as any)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                >
                  <option value="tech">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300 text-sm"
                  >
                    <option value="low">$5K - $15K</option>
                    <option value="medium">$15K - $50K</option>
                    <option value="high">$50K+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300 text-sm"
                  >
                    <option value="immediate">Immediate (1-2 months)</option>
                    <option value="quarter">This Quarter (3-6 months)</option>
                    <option value="year">This Year (6-12 months)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Business Needs Selection */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Select Your Business Needs
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {businessNeeds.map((need) => (
                  <button
                    key={need.id}
                    onClick={() => handleNeedToggle(need.id)}
                    className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                      selectedNeeds.includes(need.id)
                        ? 'bg-green-500/20 border-green-400/50 text-green-400'
                        : 'bg-white/10 border-white/20 text-white/80 hover:border-green-400/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-green-400">{need.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{need.name}</div>
                        <div className="text-sm opacity-70 mb-2">{need.description}</div>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded text-xs border ${getPriorityColor(need.priority)}`}>
                            Priority: {need.priority}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs border ${getImpactColor(need.impact)}`}>
                            Impact: {need.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetRecommendations}
              className="w-full py-3 px-6 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Reset Recommendations
            </button>
          </motion.div>

          {/* AI Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {selectedNeeds.length > 0 ? (
              <>
                {/* Analysis Summary */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    AI Analysis Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {Math.round(priorityScore * 33.33)}%
                      </div>
                      <div className="text-white/70 text-sm">Priority Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        {Math.round(impactScore * 33.33)}%
                      </div>
                      <div className="text-white/70 text-sm">Impact Score</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-4 text-center">
                    Based on {selectedNeeds.length} selected needs and company profile
                  </p>
                </div>

                {/* Top Recommendations */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Top AI Recommendations
                  </h3>
                  
                  <AnimatePresence>
                    {recommendations.map((rec, index) => (
                      <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="text-cyan-400">{rec.icon}</div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">{rec.name}</h4>
                              <p className="text-sm text-cyan-400">{rec.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-400">{rec.finalScore}</div>
                            <div className="text-xs text-white/60">AI Score</div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-sm mb-4">{rec.description}</p>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{rec.estimatedROI}</div>
                            <div className="text-xs text-white/60">ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-400">{rec.timeline}</div>
                            <div className="text-xs text-white/60">Timeline</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-400">{rec.investment}</div>
                            <div className="text-xs text-white/60">Investment</div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-white mb-2">Key Benefits:</h5>
                          <div className="space-y-1">
                            {rec.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Why Recommended */}
                        <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 mb-4">
                          <p className="text-sm text-blue-300">
                            <strong>Why Recommended:</strong> {rec.whyRecommended}
                          </p>
                        </div>

                        {/* CTA */}
                        <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Get Started with {rec.name}
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-12 text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Analysis Ready</h3>
                <p className="text-white/70">
                  Select your business needs and company profile to receive AI-powered service recommendations.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}