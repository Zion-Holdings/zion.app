import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Target, 
  Award,
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  Zap,
  Shield,
  Brain,
  Rocket
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface ServicePerformance {
  name: string;
  performance: number;
  growth: number;
  clients: number;
  revenue: number;
  status: 'trending' | 'stable' | 'declining';
}

const AdvancedAnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [selectedMetric, setSelectedMetric] = useState<string>('overview');

  // Mock data - in real app this would come from API
  const metrics: MetricCard[] = [
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: 12.5,
      changeType: 'increase',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Active Clients',
      value: '1,247',
      change: 8.2,
      changeType: 'increase',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Service Performance',
      value: '94.2%',
      change: 2.1,
      changeType: 'increase',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Client Satisfaction',
      value: '4.8/5',
      change: 0.3,
      changeType: 'increase',
      icon: <Star className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const servicePerformance: ServicePerformance[] = [
    {
      name: 'AI CRM Platform',
      performance: 96,
      growth: 15.2,
      clients: 89,
      revenue: 450000,
      status: 'trending'
    },
    {
      name: 'Quantum Computing',
      performance: 92,
      growth: 28.7,
      clients: 23,
      revenue: 1200000,
      status: 'trending'
    },
    {
      name: 'Blockchain Solutions',
      performance: 88,
      growth: 12.4,
      clients: 156,
      revenue: 780000,
      status: 'stable'
    },
    {
      name: 'Cybersecurity Suite',
      performance: 94,
      growth: 18.9,
      clients: 203,
      revenue: 920000,
      status: 'trending'
    },
    {
      name: 'IoT Platform',
      performance: 85,
      growth: 8.7,
      clients: 67,
      revenue: 340000,
      status: 'stable'
    }
  ];

  const categoryDistribution: ChartData[] = [
    { label: 'AI & ML', value: 35, color: 'from-purple-500 to-pink-600' },
    { label: 'Quantum', value: 20, color: 'from-blue-500 to-cyan-600' },
    { label: 'Blockchain', value: 25, color: 'from-green-500 to-emerald-600' },
    { label: 'Cybersecurity', value: 15, color: 'from-red-500 to-pink-600' },
    { label: 'IoT', value: 5, color: 'from-orange-500 to-yellow-600' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'stable':
        return <Activity className="w-4 h-4 text-blue-500" />;
      case 'declining':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'trending':
        return 'bg-green-100 text-green-800';
      case 'stable':
        return 'bg-blue-100 text-blue-800';
      case 'declining':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
              Advanced Analytics Dashboard
            </h1>
            <p className="text-zion-slate-light">
              Real-time insights into service performance, client metrics, and business intelligence
            </p>
          </div>
          
          <div className="flex gap-2">
            {(['7d', '30d', '90d', '1y'] as const).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Metrics Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center text-white`}>
                    {metric.icon}
                  </div>
                  <div className="flex items-center gap-1">
                    {metric.changeType === 'increase' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}%
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
                  {metric.value}
                </h3>
                <p className="text-sm text-zion-slate-light">
                  {metric.title}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Service Performance Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-zion-cyan" />
              Service Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zion-slate-light/20">
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Performance</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Growth</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Clients</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePerformance.map((service, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="border-b border-zion-slate-light/10 hover:bg-zion-blue-light/5"
                    >
                      <td className="py-3 px-4">
                        <div className="font-medium text-zion-blue-dark">{service.name}</div>
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
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-green-600 font-medium">+{service.growth}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">{service.clients}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">${(service.revenue / 1000).toFixed(0)}K</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(service.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(service.status)}
                            {service.status}
                          </div>
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

      {/* Charts and Insights */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
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
              {categoryDistribution.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <span className="font-medium text-zion-slate-dark">{category.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        style={{ width: `${category.value}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-zion-slate-light">{category.value}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-zion-cyan" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-zion-green/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-zion-green mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">AI Services Growth</h4>
                  <p className="text-sm text-zion-slate-light">
                    AI and ML services showing 35% growth, highest performing category
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg">
                <Users className="w-5 h-5 text-zion-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Client Acquisition</h4>
                  <p className="text-sm text-zion-slate-light">
                    New client acquisition rate increased by 18% this quarter
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg">
                <Star className="w-5 h-5 text-zion-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Satisfaction Score</h4>
                  <p className="text-sm text-zion-slate-light">
                    Client satisfaction reached 4.8/5, highest in company history
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
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Get Detailed Analytics</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Access comprehensive analytics, custom reports, and real-time insights 
            to optimize your business performance and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hover:bg-zion-slate-light"
              onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Analytics Dashboard Access', '_blank')}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Request Access
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-zion-purple"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;