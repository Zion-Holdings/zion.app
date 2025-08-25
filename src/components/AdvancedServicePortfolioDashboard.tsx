import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  Globe,
  Rocket,
  Brain,
  Shield,
  Zap,
  Star,
  Filter,
  Search,
  Download,
  Eye,
  Settings,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ServicePortfolio {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  status: 'Active' | 'Development' | 'Planning' | 'Discontinued';
  performance: number;
  clientCount: number;
  revenue: number;
  growth: number;
  complexity: 'Basic' | 'Intermediate' | 'Advanced' | 'Enterprise';
  marketDemand: 'Low' | 'Medium' | 'High' | 'Exploding';
  technologyMaturity: 'Emerging' | 'Growing' | 'Mature' | 'Leading';
}

interface PortfolioMetrics {
  totalServices: number;
  totalRevenue: number;
  activeClients: number;
  averagePerformance: number;
  portfolioGrowth: number;
  marketCoverage: number;
}

const AdvancedServicePortfolioDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'analytics'>('overview');

  // Mock data - in real app this would come from API
  const portfolioData: ServicePortfolio[] = [
    {
      id: 'ai-consciousness',
      title: 'Advanced AI Consciousness Platform',
      category: 'ai',
      price: '$300,000/month',
      duration: '24-36 months',
      status: 'Active',
      performance: 95,
      clientCount: 8,
      revenue: 2400000,
      growth: 28.5,
      complexity: 'Enterprise',
      marketDemand: 'Exploding',
      technologyMaturity: 'Leading'
    },
    {
      id: 'space-mining',
      title: 'Space Mining & Resource Extraction',
      category: 'space-tech',
      price: '$1,000,000/month',
      duration: '36-48 months',
      status: 'Development',
      performance: 88,
      clientCount: 3,
      revenue: 3000000,
      growth: 45.2,
      complexity: 'Enterprise',
      marketDemand: 'High',
      technologyMaturity: 'Emerging'
    },
    {
      id: 'quantum-teleportation',
      title: 'Quantum Teleportation Network',
      category: 'quantum',
      price: '$800,000/month',
      duration: '36-48 months',
      status: 'Planning',
      performance: 0,
      clientCount: 0,
      revenue: 0,
      growth: 0,
      complexity: 'Enterprise',
      marketDemand: 'Exploding',
      technologyMaturity: 'Emerging'
    },
    {
      id: 'fusion-energy',
      title: 'Fusion Energy Generation Platform',
      category: 'green-tech',
      price: '$2,000,000/month',
      duration: '48-60 months',
      status: 'Development',
      performance: 92,
      clientCount: 2,
      revenue: 4000000,
      growth: 67.8,
      complexity: 'Enterprise',
      marketDemand: 'High',
      technologyMaturity: 'Growing'
    },
    {
      id: 'nanotechnology',
      title: 'Advanced Nanotechnology Platform',
      category: 'biotech-ai',
      price: '$450,000/month',
      duration: '30-42 months',
      status: 'Active',
      performance: 89,
      clientCount: 12,
      revenue: 5400000,
      growth: 34.2,
      complexity: 'Advanced',
      marketDemand: 'High',
      technologyMaturity: 'Growing'
    },
    {
      id: 'brain-computer-interface',
      title: 'Advanced Brain-Computer Interface',
      category: 'biotech-ai',
      price: '$600,000/month',
      duration: '30-42 months',
      status: 'Active',
      performance: 91,
      clientCount: 6,
      revenue: 3600000,
      growth: 42.1,
      complexity: 'Enterprise',
      marketDemand: 'Exploding',
      technologyMaturity: 'Leading'
    }
  ];

  const filteredPortfolio = useMemo(() => {
    return portfolioData.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || service.status === selectedStatus;
      const matchesComplexity = selectedComplexity === 'all' || service.complexity === selectedComplexity;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesStatus && matchesComplexity && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, selectedComplexity, searchTerm]);

  const portfolioMetrics: PortfolioMetrics = useMemo(() => {
    const activeServices = portfolioData.filter(s => s.status === 'Active');
    const totalRevenue = portfolioData.reduce((sum, s) => sum + s.revenue, 0);
    const totalClients = portfolioData.reduce((sum, s) => sum + s.clientCount, 0);
    const avgPerformance = activeServices.length > 0 
      ? activeServices.reduce((sum, s) => sum + s.performance, 0) / activeServices.length 
      : 0;
    const portfolioGrowth = portfolioData.length > 0 
      ? portfolioData.reduce((sum, s) => sum + s.growth, 0) / portfolioData.length 
      : 0;
    
    return {
      totalServices: portfolioData.length,
      totalRevenue,
      activeClients: totalClients,
      averagePerformance: Math.round(avgPerformance),
      portfolioGrowth: Math.round(portfolioGrowth),
      marketCoverage: Math.round((portfolioData.length / 50) * 100) // Assuming 50 total possible services
    };
  }, [portfolioData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Development': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Discontinued': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

  const getMarketDemandColor = (demand: string) => {
    switch (demand) {
      case 'Low': return 'bg-gray-100 text-gray-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Exploding': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTechnologyMaturityColor = (maturity: string) => {
    switch (maturity) {
      case 'Emerging': return 'bg-blue-100 text-blue-800';
      case 'Growing': return 'bg-green-100 text-green-800';
      case 'Mature': return 'bg-orange-100 text-orange-800';
      case 'Leading': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    { id: 'all', name: 'All Categories', count: portfolioData.length },
    { id: 'ai', name: 'AI & Machine Learning', count: portfolioData.filter(s => s.category === 'ai').length },
    { id: 'quantum', name: 'Quantum Computing', count: portfolioData.filter(s => s.category === 'quantum').length },
    { id: 'space-tech', name: 'Space Technology', count: portfolioData.filter(s => s.category === 'space-tech').length },
    { id: 'biotech-ai', name: 'Biotech AI', count: portfolioData.filter(s => s.category === 'biotech-ai').length },
    { id: 'green-tech', name: 'Green Technology', count: portfolioData.filter(s => s.category === 'green-tech').length }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zion-blue-dark mb-2">
              Advanced Service Portfolio Dashboard
            </h1>
            <p className="text-zion-slate-light">
              Comprehensive insights into our cutting-edge service portfolio, performance metrics, and strategic analysis
            </p>
          </div>
          
          <div className="flex gap-2">
            {(['overview', 'detailed', 'analytics'] as const).map((mode) => (
              <Button
                key={mode}
                variant={viewMode === mode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode(mode)}
              >
                {mode === 'overview' && <Eye className="w-4 h-4 mr-2" />}
                {mode === 'detailed' && <BarChart3 className="w-4 h-4 mr-2" />}
                {mode === 'analytics' && <PieChart className="w-4 h-4 mr-2" />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Portfolio Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{portfolioMetrics.portfolioGrowth}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              {portfolioMetrics.totalServices}
            </h3>
            <p className="text-sm text-zion-slate-light">
              Total Services
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{Math.round(portfolioMetrics.portfolioGrowth)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              ${(portfolioMetrics.totalRevenue / 1000000).toFixed(1)}M
            </h3>
            <p className="text-sm text-zion-slate-light">
              Total Revenue
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{Math.round(portfolioMetrics.portfolioGrowth)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              {portfolioMetrics.activeClients}
            </h3>
            <p className="text-sm text-zion-slate-light">
              Active Clients
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{Math.round(portfolioMetrics.portfolioGrowth)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              {portfolioMetrics.averagePerformance}%
            </h3>
            <p className="text-sm text-zion-slate-light">
              Avg Performance
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Category</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Status</label>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Development">Development</option>
              <option value="Planning">Planning</option>
              <option value="Discontinued">Discontinued</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Complexity</label>
            <select 
              value={selectedComplexity}
              onChange={(e) => setSelectedComplexity(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Complexities</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Search</label>
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex items-end">
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedStatus('all');
                setSelectedComplexity('all');
                setSearchTerm('');
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-zion-cyan" />
                Service Portfolio Overview
              </CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zion-slate-light/20">
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Performance</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Clients</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Growth</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Complexity</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Demand</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPortfolio.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="border-b border-zion-slate-light/10 hover:bg-zion-blue-light/5"
                    >
                      <td className="py-3 px-4">
                        <div className="font-medium text-zion-blue-dark">{service.title}</div>
                        <div className="text-sm text-zion-slate-light">{service.price}</div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-zion-slate-light/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
                              style={{ width: `${service.performance}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{service.performance}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">{service.clientCount}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">${(service.revenue / 1000000).toFixed(1)}M</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          {service.growth > 0 ? (
                            <ArrowUpRight className="w-4 h-4 text-green-500" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-500" />
                          )}
                          <span className={`text-sm font-medium ${
                            service.growth > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {service.growth > 0 ? '+' : ''}{service.growth}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getComplexityColor(service.complexity)}>
                          {service.complexity}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getMarketDemandColor(service.marketDemand)}>
                          {service.marketDemand}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Portfolio Insights */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
      >
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-zion-purple" />
              Service Category Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categories.filter(cat => cat.id !== 'all').map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-purple-500' :
                      index === 2 ? 'bg-green-500' :
                      index === 3 ? 'bg-orange-500' :
                      index === 4 ? 'bg-red-500' : 'bg-gray-500'
                    }`}></div>
                    <span className="font-medium text-zion-slate-dark">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          index === 0 ? 'bg-blue-500' :
                          index === 1 ? 'bg-purple-500' :
                          index === 2 ? 'bg-green-500' :
                          index === 3 ? 'bg-orange-500' :
                          index === 4 ? 'bg-red-500' : 'bg-gray-500'
                        }`}
                        style={{ width: `${(category.count / portfolioData.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-zion-slate-light">{category.count}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-zion-cyan" />
              Portfolio Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-zion-green/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-zion-green mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">High Growth Services</h4>
                  <p className="text-sm text-zion-slate-light">
                                          {portfolioData.filter(s => s.growth > 30).length} services showing &gt;30% growth
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg">
                <Star className="w-5 h-5 text-zion-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Top Performers</h4>
                  <p className="text-sm text-zion-slate-light">
                                          {portfolioData.filter(s => s.performance > 90).length} services with &gt;90% performance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg">
                <Award className="w-5 h-5 text-zion-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Market Leaders</h4>
                  <p className="text-sm text-zion-slate-light">
                    {portfolioData.filter(s => s.technologyMaturity === 'Leading').length} services in leading position
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Expand Your Portfolio?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our comprehensive service portfolio offers cutting-edge solutions across all major technology sectors. 
            Contact us to discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hover:bg-zion-slate-light"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Portfolio Expansion Consultation', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Get Portfolio Consultation
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
    </div>
  );
};

export default AdvancedServicePortfolioDashboard;