import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock, 
  DollarSign,
  Filter,
  Search,
  BarChart3,
  Award,
  Target,
  Users,
  Globe,
  Rocket,
  Mail,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ServiceTier {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  features: string[];
  benefits: string[];
  technology: string[];
  targetAudience: string[];
  rating: number;
  complexity: 'Basic' | 'Intermediate' | 'Advanced' | 'Enterprise';
  popularity: 'Low' | 'Medium' | 'High' | 'Trending';
  contactInfo: string;
  email: string;
  link: string;
}

interface ComparisonFilter {
  category: string;
  complexity: string;
  priceRange: string;
  technology: string;
}

const COMPLEXITY_LEVELS = ['Basic', 'Intermediate', 'Advanced', 'Enterprise'];
const POPULARITY_LEVELS = ['Low', 'Medium', 'High', 'Trending'];
const PRICE_RANGES = ['Under $10K', '$10K-$50K', '$50K-$100K', '$100K+'];

export const AdvancedServiceComparison: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [filters, setFilters] = useState<ComparisonFilter>({
    category: 'all',
    complexity: 'all',
    priceRange: 'all',
    technology: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table' | 'detailed'>('grid');

  // Mock data - in real app this would come from props or API
  const mockServices: ServiceTier[] = [
    {
      id: 'ai-crm-basic',
      name: 'AI CRM Basic',
      category: 'ai',
      price: '$5,000/month',
      duration: '3-6 months',
      features: ['Basic AI insights', 'Customer segmentation', 'Email automation'],
      benefits: ['Improved customer retention', 'Automated workflows', 'Basic analytics'],
      technology: ['AI/ML', 'CRM', 'Automation'],
      targetAudience: ['Small Business', 'Startups'],
      rating: 4.2,
      complexity: 'Basic',
      popularity: 'Medium',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/ai-crm-basic'
    },
    {
      id: 'ai-crm-enterprise',
      name: 'AI CRM Enterprise',
      category: 'ai',
      price: '$25,000/month',
      duration: '12-18 months',
      features: ['Advanced AI insights', 'Predictive analytics', 'Multi-channel integration', 'Custom AI models'],
      benefits: ['Predictive customer behavior', 'Advanced automation', 'Enterprise scalability'],
      technology: ['AI/ML', 'Big Data', 'Predictive Analytics', 'Enterprise Integration'],
      targetAudience: ['Enterprise', 'Large Corporations'],
      rating: 4.8,
      complexity: 'Enterprise',
      popularity: 'High',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/ai-crm-enterprise'
    },
    {
      id: 'quantum-basic',
      name: 'Quantum Computing Basic',
      category: 'quantum',
      price: '$50,000/month',
      duration: '6-12 months',
      features: ['Basic quantum algorithms', 'Cloud access', 'Documentation'],
      benefits: ['Quantum computing access', 'Algorithm development', 'Research capabilities'],
      technology: ['Quantum Computing', 'Cloud Platform', 'Basic Algorithms'],
      targetAudience: ['Research Institutions', 'Universities'],
      rating: 4.5,
      complexity: 'Intermediate',
      popularity: 'Medium',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/quantum-basic'
    },
    {
      id: 'quantum-enterprise',
      name: 'Quantum Computing Enterprise',
      category: 'quantum',
      price: '$200,000/month',
      duration: '18-24 months',
      features: ['Custom quantum algorithms', 'Dedicated processors', '24/7 support', 'Custom development'],
      benefits: ['Competitive advantage', 'Custom solutions', 'Priority access', 'Expert support'],
      technology: ['Quantum Computing', 'Custom Algorithms', 'Dedicated Hardware', 'Advanced Support'],
      targetAudience: ['Large Corporations', 'Government', 'Financial Services'],
      rating: 4.9,
      complexity: 'Enterprise',
      popularity: 'Trending',
      contactInfo: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      link: 'https://ziontechgroup.com/services/quantum-enterprise'
    }
  ];

  const filteredServices = useMemo(() => {
    return mockServices.filter(service => {
      const matchesCategory = filters.category === 'all' || service.category === filters.category;
      const matchesComplexity = filters.complexity === 'all' || service.complexity === filters.complexity;
      const matchesTechnology = filters.technology === 'all' || service.technology.includes(filters.technology);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesComplexity && matchesTechnology && matchesSearch;
    });
  }, [filters, searchTerm]);

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Enterprise': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPopularityIcon = (popularity: string) => {
    switch (popularity) {
      case 'Trending': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'High': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'Medium': return <Zap className="w-4 h-4 text-blue-500" />;
      case 'Low': return <Target className="w-4 h-4 text-gray-500" />;
      default: return <Users className="w-4 h-4 text-gray-500" />;
    }
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
          Advanced Service Comparison
        </h1>
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          Compare our cutting-edge services across different tiers, complexity levels, and pricing to find the perfect solution for your business needs.
        </p>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Category</label>
            <select 
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Categories</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="quantum">Quantum Computing</option>
              <option value="blockchain">Blockchain & Web3</option>
              <option value="cybersecurity">Cybersecurity</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Complexity</label>
            <select 
              value={filters.complexity}
              onChange={(e) => setFilters(prev => ({ ...prev, complexity: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Levels</option>
              {COMPLEXITY_LEVELS.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Price Range</label>
            <select 
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Prices</option>
              {PRICE_RANGES.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Technology</label>
            <select 
              value={filters.technology}
              onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Technologies</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">View Mode</label>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <BarChart3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'table' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('table')}
              >
                <Target className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'detailed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('detailed')}
              >
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      </motion.div>

      {/* Service Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
              selectedServices.includes(service.id) ? 'ring-2 ring-zion-cyan' : ''
            }`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg text-zion-blue-dark">
                    {service.name}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleServiceSelection(service.id)}
                    className={selectedServices.includes(service.id) ? 'text-zion-cyan' : 'text-zion-slate-light'}
                  >
                    {selectedServices.includes(service.id) ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getComplexityColor(service.complexity)}>
                    {service.complexity}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {getPopularityIcon(service.popularity)}
                    <span className="text-sm text-zion-slate-light">{service.popularity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {service.price}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {service.rating}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-zion-purple" />
                      Target Audience
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 2).map((audience, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Comparison Summary */}
      {selectedServices.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
            Comparison Summary ({selectedServices.length} services selected)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-zion-blue-light/10 rounded-lg">
              <div className="text-2xl font-bold text-zion-cyan">
                {selectedServices.length}
              </div>
              <div className="text-zion-slate-light">Services Selected</div>
            </div>
            <div className="text-center p-4 bg-zion-purple/10 rounded-lg">
              <div className="text-2xl font-bold text-zion-purple">
                {Math.max(...filteredServices.filter(s => selectedServices.includes(s.id)).map(s => s.rating))}
              </div>
              <div className="text-zion-slate-light">Highest Rating</div>
            </div>
            <div className="text-center p-4 bg-zion-green/10 rounded-lg">
              <div className="text-2xl font-bold text-zion-green">
                {filteredServices.filter(s => selectedServices.includes(s.id)).filter(s => s.complexity === 'Enterprise').length}
              </div>
              <div className="text-zion-slate-light">Enterprise Solutions</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Comparison Inquiry', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Detailed Comparison
            </Button>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our cutting-edge services are designed to give you a competitive advantage in the digital age. 
            Contact us today to discuss your specific needs and find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hover:bg-zion-slate-light"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-zion-purple"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedServiceComparison;