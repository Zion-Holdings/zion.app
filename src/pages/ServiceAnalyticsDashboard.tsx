import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Target, Award } from 'lucide-react';

const ServiceAnalyticsDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const analyticsData = {
    totalServices: 25,
    activeUsers: 1247,
    totalRevenue: 125000,
    growthRate: 23.5,
    topServices: [
      { name: 'AI Process Automation', usage: 89, revenue: 45000 },
      { name: 'Cybersecurity Solutions', usage: 76, revenue: 38000 },
      { name: 'Cloud Migration', usage: 65, revenue: 32000 },
      { name: 'Data Analytics', usage: 58, revenue: 29000 },
      { name: 'DevOps Automation', usage: 52, revenue: 26000 }
    ],
    monthlyTrends: [
      { month: 'Jan', services: 18, users: 890, revenue: 95000 },
      { month: 'Feb', services: 20, users: 1020, revenue: 108000 },
      { month: 'Mar', services: 22, users: 1150, revenue: 118000 },
      { month: 'Apr', services: 25, users: 1247, revenue: 125000 }
    ]
  };

  return (
    <>
      <SEO 
        title="Service Analytics Dashboard - Zion Tech Group" 
        description="Comprehensive analytics and insights into our service performance, user engagement, and business metrics."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="w-12 h-12 mr-3 text-zion-cyan" />
              <h1 className="text-5xl font-bold text-white">Service Analytics Dashboard</h1>
            </div>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real-time insights into our service performance, user engagement, and business growth metrics.
            </p>
          </div>

          {/* Period Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-2 border border-zion-blue-light/30">
              {['7d', '30d', '90d', '1y'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedPeriod === period
                      ? 'bg-zion-cyan text-zion-blue-dark'
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zion-slate-light text-sm">Total Services</p>
                  <p className="text-3xl font-bold text-white">{analyticsData.totalServices}</p>
                </div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-zion-cyan" />
                </div>
              </div>
            </div>

            <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zion-slate-light text-sm">Active Users</p>
                  <p className="text-3xl font-bold text-white">{analyticsData.activeUsers.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
              </div>
            </div>

            <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zion-slate-light text-sm">Total Revenue</p>
                  <p className="text-3xl font-bold text-white">${(analyticsData.totalRevenue / 1000).toFixed(0)}K</p>
                </div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-zion-cyan" />
                </div>
              </div>
            </div>

            <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zion-slate-light text-sm">Growth Rate</p>
                  <p className="text-3xl font-bold text-white">{analyticsData.growthRate}%</p>
                </div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
              </div>
            </div>
          </div>

          {/* Top Services Performance */}
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-zion-cyan" />
              Top Performing Services
            </h2>
            <div className="space-y-4">
              {analyticsData.topServices.map((service, index) => (
                <div key={service.name} className="flex items-center justify-between p-4 bg-zion-blue-dark/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-zion-cyan font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{service.name}</h3>
                      <p className="text-zion-slate-light text-sm">Usage: {service.usage}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">${(service.revenue / 1000).toFixed(0)}K</p>
                    <p className="text-zion-slate-light text-sm">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trends Chart */}
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-zion-cyan" />
              Monthly Growth Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {analyticsData.monthlyTrends.map((trend) => (
                <div key={trend.month} className="text-center">
                  <div className="bg-zion-cyan/20 rounded-lg p-4 mb-3">
                    <p className="text-2xl font-bold text-zion-cyan">{trend.month}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-medium">{trend.services} Services</p>
                    <p className="text-zion-slate-light text-sm">{trend.users.toLocaleString()} Users</p>
                    <p className="text-zion-cyan font-medium">${(trend.revenue / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
              <h2 className="text-2xl font-bold text-white mb-4">Need Custom Analytics?</h2>
              <p className="text-zion-slate-light mb-6">
                Get detailed insights and custom reports for your specific business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors">
                  <Award className="w-5 h-5 mr-2 inline" />
                  Request Custom Report
                </button>
                <button className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAnalyticsDashboard;