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
  ArrowDownRight,
  Activity,
  BarChart,
  LineChart,
  PieChart as PieChartIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ServiceAnalytics {
  id: string;
  title: string;
  category: string;
  price: string;
  performance: number;
  adoption: number;
  revenue: number;
  growth: number;
  marketDemand: 'High' | 'Medium' | 'Low';
  technologyMaturity: 'Emerging' | 'Growing' | 'Mature' | 'Disruptive';
  customerSatisfaction: number;
  competitiveAdvantage: number;
}

const AdvancedServiceAnalyticsDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPerformance, setSelectedPerformance] = useState<string>('all');
  const [selectedMarketDemand, setSelectedMarketDemand] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'overview' | 'performance' | 'revenue' | 'market'>('overview');

  // Mock analytics data - in real app this would come from API
  const analyticsData: ServiceAnalytics[] = [
    {
      id: 'quantum-computing-platform',
      title: 'Advanced Quantum Computing Platform',
      category: 'quantum',
      price: '$500,000/month',
      performance: 95,
      adoption: 85,
      revenue: 500000,
      growth: 45,
      marketDemand: 'High',
      technologyMaturity: 'Emerging',
      customerSatisfaction: 92,
      competitiveAdvantage: 95
    },
    {
      id: 'ai-consciousness-platform',
      title: 'Advanced AI Consciousness Platform',
      category: 'ai',
      price: '$800,000/month',
      performance: 88,
      adoption: 65,
      revenue: 800000,
      growth: 78,
      marketDemand: 'High',
      technologyMaturity: 'Emerging',
      customerSatisfaction: 89,
      competitiveAdvantage: 98
    },
    {
      id: 'space-mining-platform',
      title: 'Advanced Space Mining Platform',
      category: 'space-tech',
      price: '$2,000,000/month',
      performance: 92,
      adoption: 45,
      revenue: 2000000,
      growth: 120,
      marketDemand: 'High',
      technologyMaturity: 'Emerging',
      customerSatisfaction: 94,
      competitiveAdvantage: 96
    },
    {
      id: 'synthetic-biology-platform',
      title: 'Advanced Synthetic Biology Platform',
      category: 'biotech-ai',
      price: '$1,200,000/month',
      performance: 87,
      adoption: 70,
      revenue: 1200000,
      growth: 85,
      marketDemand: 'High',
      technologyMaturity: 'Growing',
      customerSatisfaction: 91,
      competitiveAdvantage: 89
    },
    {
      id: 'fusion-energy-platform',
      title: 'Advanced Fusion Energy Platform',
      category: 'green-tech',
      price: '$3,500,000/month',
      performance: 94,
      adoption: 35,
      revenue: 3500000,
      growth: 200,
      marketDemand: 'High',
      technologyMaturity: 'Emerging',
      customerSatisfaction: 96,
      competitiveAdvantage: 99
    },
    {
      id: 'quantum-ai-platform',
      title: 'Advanced Quantum AI Platform',
      category: 'quantum',
      price: '$750,000/month',
      performance: 90,
      adoption: 60,
      revenue: 750000,
      growth: 95,
      marketDemand: 'High',
      technologyMaturity: 'Emerging',
      customerSatisfaction: 93,
      competitiveAdvantage: 97
    }
  ];

  const filteredAnalytics = useMemo(() => {
    return analyticsData.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPerformance = selectedPerformance === 'all' || 
        (selectedPerformance === 'high' && service.performance >= 90) ||
        (selectedPerformance === 'medium' && service.performance >= 80 && service.performance < 90) ||
        (selectedPerformance === 'low' && service.performance < 80);
      const matchesMarketDemand = selectedMarketDemand === 'all' || service.marketDemand === selectedMarketDemand;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesPerformance && matchesMarketDemand && matchesSearch;
    });
  }, [selectedCategory, selectedPerformance, selectedMarketDemand, searchTerm]);

  const analyticsMetrics = useMemo(() => {
    const totalServices = analyticsData.length;
    const avgPerformance = analyticsData.reduce((sum, service) => sum + service.performance, 0) / totalServices;
    const avgAdoption = analyticsData.reduce((sum, service) => sum + service.adoption, 0) / totalServices;
    const totalRevenue = analyticsData.reduce((sum, service) => sum + service.revenue, 0);
    const avgGrowth = analyticsData.reduce((sum, service) => sum + service.growth, 0) / totalServices;
    const avgSatisfaction = analyticsData.reduce((sum, service) => sum + service.customerSatisfaction, 0) / totalServices;
    const avgCompetitiveAdvantage = analyticsData.reduce((sum, service) => sum + service.competitiveAdvantage, 0) / totalServices;

    return {
      totalServices,
      avgPerformance: Math.round(avgPerformance),
      avgAdoption: Math.round(avgAdoption),
      totalRevenue,
      avgGrowth: Math.round(avgGrowth),
      avgSatisfaction: Math.round(avgSatisfaction),
      avgCompetitiveAdvantage: Math.round(avgCompetitiveAdvantage)
    };
  }, [analyticsData]);

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGrowthColor = (growth: number) => {
    if (growth >= 50) return 'text-green-600';
    if (growth >= 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMarketDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTechnologyMaturityColor = (maturity: string) => {
    switch (maturity) {
      case 'Emerging': return 'bg-blue-100 text-blue-800';
      case 'Growing': return 'bg-green-100 text-green-800';
      case 'Mature': return 'bg-orange-100 text-orange-800';
      case 'Disruptive': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Globe className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Technology', icon: <Zap className="w-4 h-4" /> },
    { id: 'ai', name: 'Artificial Intelligence', icon: <Brain className="w-4 h-4" /> },
    { id: 'space-tech', name: 'Space Technology', icon: <Rocket className="w-4 h-4" /> },
    { id: 'biotech-ai', name: 'Biotech AI', icon: <Shield className="w-4 h-4" /> },
    { id: 'green-tech', name: 'Green Technology', icon: <Star className="w-4 h-4" /> }
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
              Advanced Service Analytics Dashboard
            </h1>
            <p className="text-zion-slate-light">
              Comprehensive analytics, performance metrics, and business intelligence for your service portfolio
            </p>
          </div>
          
          <div className="flex gap-2">
            {(['overview', 'performance', 'revenue', 'market'] as const).map((mode) => (
              <Button
                key={mode}
                variant={viewMode === mode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode(mode)}
              >
                {mode === 'overview' && <BarChart3 className="w-4 h-4 mr-2" />}
                {mode === 'performance' && <Activity className="w-4 h-4 mr-2" />}
                {mode === 'revenue' && <DollarSign className="w-4 h-4 mr-2" />}
                {mode === 'market' && <TrendingUp className="w-4 h-4 mr-2" />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
            <Globe className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zion-blue-dark">{analyticsMetrics.totalServices}</div>
            <p className="text-xs text-zion-slate-light">Active service portfolio</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Performance</CardTitle>
            <Activity className="h-4 w-4 text-zion-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zion-blue-dark">{analyticsMetrics.avgPerformance}%</div>
            <p className="text-xs text-zion-slate-light">Service performance score</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zion-blue-dark">
              ${(analyticsMetrics.totalRevenue / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-zion-slate-light">Monthly revenue potential</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-zion-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-zion-blue-dark">{analyticsMetrics.avgGrowth}%</div>
            <p className="text-xs text-zion-slate-light">Year-over-year growth</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
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
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Performance</label>
            <select 
              value={selectedPerformance}
              onChange={(e) => setSelectedPerformance(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Performance Levels</option>
              <option value="high">High (90%+)</option>
              <option value="medium">Medium (80-89%)</option>
              <option value="low">Low (&lt;80%)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Market Demand</label>
            <select 
              value={selectedMarketDemand}
              onChange={(e) => setSelectedMarketDemand(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Demand Levels</option>
              <option value="High">High Demand</option>
              <option value="Medium">Medium Demand</option>
              <option value="Low">Low Demand</option>
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
                setSelectedPerformance('all');
                setSelectedMarketDemand('all');
                setSearchTerm('');
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Analytics Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zion-blue-light/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Adoption
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Market
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Maturity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zion-slate-light/20">
              {filteredAnalytics.map((service, index) => (
                <motion.tr
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="hover:bg-zion-blue-light/5"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-zion-blue-dark">
                        {service.title}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        ID: {service.id}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline" className="capitalize">
                      {service.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zion-slate-dark">
                    {service.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-zion-slate-dark">
                        {service.performance}%
                      </div>
                      <div className="ml-2 w-16 bg-zion-slate-light/20 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getPerformanceColor(service.performance).replace('text-', 'bg-')}`}
                          style={{ width: `${service.performance}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zion-slate-dark">
                      {service.adoption}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-zion-cyan">
                      ${(service.revenue / 1000).toFixed(0)}K
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center text-sm font-medium ${getGrowthColor(service.growth)}`}>
                      {service.growth > 0 ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {service.growth}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getMarketDemandColor(service.marketDemand)}>
                      {service.marketDemand}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getTechnologyMaturityColor(service.technologyMaturity)}>
                      {service.technologyMaturity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Service Portfolio?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our advanced analytics dashboard provides the insights you need to optimize performance, 
            maximize revenue, and stay ahead of market trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hover:bg-zion-slate-light"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Portfolio Optimization', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Get Portfolio Optimization
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-zion-purple"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Speak with an Expert
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedServiceAnalyticsDashboard;