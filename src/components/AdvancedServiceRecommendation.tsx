import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Users,
  DollarSign,
  Clock,
  Award,
  Rocket,
  Lightbulb,
  BarChart3,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ClientProfile {
  industry: string;
  companySize: string;
  budget: string;
  timeline: string;
  technologyMaturity: string;
  primaryGoals: string[];
  challenges: string[];
}

interface ServiceRecommendation {
  service: {
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    duration: string;
    tags: string[];
    features: string[];
    benefits: string[];
    technology: string[];
    targetAudience: string[];
    image: string;
    link: string;
    contactInfo: string;
    email: string;
  };
  matchScore: number;
  reasoning: string[];
  priority: 'High' | 'Medium' | 'Low';
  implementationComplexity: 'Simple' | 'Moderate' | 'Complex';
  expectedROI: string;
  timeToValue: string;
}

const AdvancedServiceRecommendation: React.FC = () => {
  const [clientProfile, setClientProfile] = useState<ClientProfile>({
    industry: '',
    companySize: '',
    budget: '',
    timeline: '',
    technologyMaturity: '',
    primaryGoals: [],
    challenges: []
  });

  const [recommendations, setRecommendations] = useState<ServiceRecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const industries = [
    'Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 
    'Retail', 'Education', 'Government', 'Energy', 'Transportation', 'Media'
  ];

  const companySizes = [
    'Startup (1-50 employees)', 'Small Business (51-200 employees)', 
    'Medium Business (201-1000 employees)', 'Enterprise (1000+ employees)'
  ];

  const budgets = [
    'Under $50K', '$50K-$200K', '$200K-$500K', '$500K-$1M', '$1M+'
  ];

  const timelines = [
    'Immediate (0-3 months)', 'Short-term (3-6 months)', 
    'Medium-term (6-12 months)', 'Long-term (12+ months)'
  ];

  const technologyMaturityLevels = [
    'Early Adopter', 'Growing', 'Mature', 'Advanced', 'Innovation Leader'
  ];

  const primaryGoals = [
    'Cost Reduction', 'Revenue Growth', 'Operational Efficiency', 
    'Digital Transformation', 'Innovation', 'Competitive Advantage',
    'Customer Experience', 'Risk Management', 'Sustainability'
  ];

  const challenges = [
    'Legacy Systems', 'Data Security', 'Scalability Issues', 
    'Talent Shortage', 'Regulatory Compliance', 'Integration Complexity',
    'Performance Issues', 'Cost Management', 'Technology Debt'
  ];

  const mockServices = [
    {
      id: 'ai-crm-platform',
      title: 'AI-Powered CRM Platform',
      description: 'Advanced customer relationship management platform with AI-driven insights and automation.',
      category: 'ai',
      price: '$25,000/month',
      duration: '6-12 months',
      tags: ['AI', 'CRM', 'Automation', 'Analytics'],
      features: ['AI-powered insights', 'Automated workflows', 'Predictive analytics'],
      benefits: ['Improved customer retention', 'Increased sales efficiency', 'Better decision making'],
      technology: ['AI/ML', 'Cloud Computing', 'Big Data', 'Automation'],
      targetAudience: ['Enterprise', 'Financial Services', 'Healthcare', 'Technology Companies'],
      image: '/images/services/ai-crm.jpg',
      link: 'https://ziontechgroup.com/services/ai-crm-platform',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      id: 'quantum-computing-service',
      title: 'Quantum Computing as a Service',
      description: 'Enterprise-grade quantum computing platform for complex computational problems.',
      category: 'quantum',
      price: '$150,000/month',
      duration: '12-18 months',
      tags: ['Quantum Computing', 'Research', 'Optimization'],
      features: ['Quantum processors access', 'Algorithm development', 'Research support'],
      benefits: ['Solve intractable problems', 'Research acceleration', 'Competitive advantage'],
      technology: ['Quantum Computing', 'Quantum Algorithms', 'Research Tools'],
      targetAudience: ['Research Institutions', 'Pharmaceutical Companies', 'Financial Services'],
      image: '/images/services/quantum-computing.jpg',
      link: 'https://ziontechgroup.com/services/quantum-computing-service',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain Solution',
      description: 'Transparent and secure supply chain management using blockchain technology.',
      category: 'blockchain',
      price: '$75,000/month',
      duration: '8-14 months',
      tags: ['Blockchain', 'Supply Chain', 'Transparency'],
      features: ['End-to-end tracking', 'Smart contracts', 'Transparency'],
      benefits: ['Enhanced transparency', 'Reduced fraud', 'Improved efficiency'],
      technology: ['Blockchain', 'Smart Contracts', 'IoT', 'Cloud Computing'],
      targetAudience: ['Manufacturing', 'Retail', 'Logistics', 'Food & Beverage'],
      image: '/images/services/blockchain-supply-chain.jpg',
      link: 'https://ziontechgroup.com/services/blockchain-supply-chain',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com'
    }
  ];

  const calculateMatchScore = (service: any, profile: ClientProfile): number => {
    let score = 0;
    
    // Industry match
    if (service.targetAudience.some(audience => 
      audience.toLowerCase().includes(profile.industry.toLowerCase()))) {
      score += 25;
    }
    
    // Budget compatibility
    const servicePrice = parseInt(service.price.replace(/[^0-9]/g, ''));
    if (profile.budget === 'Under $50K' && servicePrice < 50) score += 20;
    else if (profile.budget === '$50K-$200K' && servicePrice >= 50 && servicePrice < 200) score += 20;
    else if (profile.budget === '$200K-$500K' && servicePrice >= 200 && servicePrice < 500) score += 20;
    else if (profile.budget === '$500K-$1M' && servicePrice >= 500 && servicePrice < 1000) score += 20;
    else if (profile.budget === '$1M+' && servicePrice >= 1000) score += 20;
    
    // Timeline compatibility
    const serviceDuration = parseInt(service.duration.split('-')[0]);
    if (profile.timeline === 'Immediate (0-3 months)' && serviceDuration <= 3) score += 15;
    else if (profile.timeline === 'Short-term (3-6 months)' && serviceDuration <= 6) score += 15;
    else if (profile.timeline === 'Medium-term (6-12 months)' && serviceDuration <= 12) score += 15;
    else if (profile.timeline === 'Long-term (12+ months)' && serviceDuration > 12) score += 15;
    
    // Technology maturity alignment
    if (profile.technologyMaturity === 'Innovation Leader' && service.category === 'quantum') score += 20;
    else if (profile.technologyMaturity === 'Advanced' && ['ai', 'blockchain'].includes(service.category)) score += 20;
    else if (profile.technologyMaturity === 'Mature' && ['iot', 'edge-computing'].includes(service.category)) score += 20;
    else if (profile.technologyMaturity === 'Growing' && ['cloud-services', 'web-development'].includes(service.category)) score += 20;
    else if (profile.technologyMaturity === 'Early Adopter' && ['basic-services', 'consulting'].includes(service.category)) score += 20;
    
    // Goal alignment
    const goalMatches = profile.primaryGoals.filter(goal => 
      service.benefits.some(benefit => 
        benefit.toLowerCase().includes(goal.toLowerCase())
      )
    ).length;
    score += (goalMatches / profile.primaryGoals.length) * 20;
    
    return Math.min(100, score);
  };

  const generateRecommendations = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    setTimeout(() => {
      const recs = mockServices.map(service => {
        const matchScore = calculateMatchScore(service, clientProfile);
        
        let priority: 'High' | 'Medium' | 'Low';
        if (matchScore >= 80) priority = 'High';
        else if (matchScore >= 60) priority = 'Medium';
        else priority = 'Low';
        
        let complexity: 'Simple' | 'Moderate' | 'Complex';
        if (service.category === 'quantum' || service.category === 'ai') complexity = 'Complex';
        else if (service.category === 'blockchain' || service.category === 'iot') complexity = 'Moderate';
        else complexity = 'Simple';
        
        const reasoning = [
          `High match with ${clientProfile.industry} industry requirements`,
          `Budget alignment with ${clientProfile.budget} range`,
          `Timeline compatibility with ${clientProfile.timeline} expectations`,
          `Technology maturity level appropriate for ${clientProfile.technologyMaturity}`
        ];
        
        const expectedROI = matchScore >= 80 ? 'High ROI expected' : 
                           matchScore >= 60 ? 'Moderate ROI expected' : 'ROI to be evaluated';
        
        const timeToValue = complexity === 'Simple' ? '2-4 months' : 
                           complexity === 'Moderate' ? '4-8 months' : '8-12 months';
        
        return {
          service,
          matchScore,
          reasoning,
          priority,
          implementationComplexity: complexity,
          expectedROI,
          timeToValue
        };
      }).sort((a, b) => b.matchScore - a.matchScore);
      
      setRecommendations(recs);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Complex': return 'bg-red-100 text-red-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Simple': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isFormComplete = () => {
    return clientProfile.industry && clientProfile.companySize && clientProfile.budget && 
           clientProfile.timeline && clientProfile.technologyMaturity && 
           clientProfile.primaryGoals.length > 0 && clientProfile.challenges.length > 0;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-zion-blue-dark mb-4">
          AI-Powered Service Recommendation Engine
        </h1>
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          Get personalized service recommendations based on your industry, goals, and requirements. 
          Our AI analyzes your profile to suggest the perfect solutions for your business.
        </p>
      </motion.div>

      {/* Client Profile Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-zion-cyan" />
          Tell Us About Your Business
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Industry</label>
            <select 
              value={clientProfile.industry}
              onChange={(e) => setClientProfile(prev => ({ ...prev, industry: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Company Size</label>
            <select 
              value={clientProfile.companySize}
              onChange={(e) => setClientProfile(prev => ({ ...prev, companySize: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Company Size</option>
              {companySizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Budget Range</label>
            <select 
              value={clientProfile.budget}
              onChange={(e) => setClientProfile(prev => ({ ...prev, budget: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Budget Range</option>
              {budgets.map(budget => (
                <option key={budget} value={budget}>{budget}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Implementation Timeline</label>
            <select 
              value={clientProfile.timeline}
              onChange={(e) => setClientProfile(prev => ({ ...prev, timeline: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Timeline</option>
              {timelines.map(timeline => (
                <option key={timeline} value={timeline}>{timeline}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Technology Maturity Level</label>
            <select 
              value={clientProfile.technologyMaturity}
              onChange={(e) => setClientProfile(prev => ({ ...prev, technologyMaturity: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Technology Maturity</option>
              {technologyMaturityLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-zion-slate-dark mb-2">Primary Business Goals</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {primaryGoals.map(goal => (
              <label key={goal} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={clientProfile.primaryGoals.includes(goal)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setClientProfile(prev => ({ ...prev, primaryGoals: [...prev.primaryGoals, goal] }));
                    } else {
                      setClientProfile(prev => ({ ...prev, primaryGoals: prev.primaryGoals.filter(g => g !== goal) }));
                    }
                  }}
                  className="rounded text-zion-cyan"
                />
                <span className="text-sm text-zion-slate-light">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-zion-slate-dark mb-2">Current Challenges</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {challenges.map(challenge => (
              <label key={challenge} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={clientProfile.challenges.includes(challenge)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setClientProfile(prev => ({ ...prev, challenges: [...prev.challenges, challenge] }));
                    } else {
                      setClientProfile(prev => ({ ...prev, challenges: prev.challenges.filter(c => c !== challenge) }));
                    }
                  }}
                  className="rounded text-zion-cyan"
                />
                <span className="text-sm text-zion-slate-light">{challenge}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button 
            className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-lg px-8 py-4"
            onClick={generateRecommendations}
            disabled={!isFormComplete() || isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing Your Profile...
              </>
            ) : (
              <>
                <Brain className="w-5 h-5 mr-2" />
                Get AI Recommendations
              </>
            )}
          </Button>
        </div>
      </motion.div>

      {/* Recommendations Results */}
      {showResults && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-zion-blue-dark mb-6 text-center">
            Your Personalized Service Recommendations
          </h2>
          
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-zion-blue-dark mb-2">
                          {rec.service.title}
                        </CardTitle>
                        <p className="text-zion-slate-light mb-3">
                          {rec.service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getPriorityColor(rec.priority)}>
                            Priority: {rec.priority}
                          </Badge>
                          <Badge className={getComplexityColor(rec.implementationComplexity)}>
                            Complexity: {rec.implementationComplexity}
                          </Badge>
                          <Badge className="bg-zion-cyan/10 text-zion-cyan">
                            Match Score: {rec.matchScore}%
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-zion-cyan mb-1">
                          {rec.service.price}
                        </div>
                        <div className="text-sm text-zion-slate-light">
                          {rec.service.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-zion-purple" />
                          Why This Service Matches
                        </h4>
                        <ul className="space-y-2">
                          {rec.reasoning.map((reason, idx) => (
                            <li key={idx} className="text-sm text-zion-slate-light flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-zion-cyan" />
                          Implementation Details
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-zion-slate-light">Expected ROI:</span>
                            <span className="text-sm font-medium text-zion-slate-dark">{rec.expectedROI}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-zion-slate-light">Time to Value:</span>
                            <span className="text-sm font-medium text-zion-slate-dark">{rec.timeToValue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-zion-slate-light">Category:</span>
                            <Badge variant="outline" className="text-xs">
                              {rec.service.category.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <Button 
                            className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark"
                            onClick={() => window.open(rec.service.link, '_blank')}
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Our expert team is ready to help you implement the perfect solution 
                for your business needs. Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-zion-purple hover:bg-zion-slate-light"
                  onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Recommendation Consultation', '_blank')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Get Expert Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-zion-purple"
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdvancedServiceRecommendation;