import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BarChart3, Database, Brain, TrendingUp, PieChart, LineChart, Rocket, Zap } from 'lucide-react';

export default function DataAnalytics() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor your data in real-time with interactive dashboards and alerts"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that discover hidden patterns and trends"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect and unify data from multiple sources and platforms"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes with advanced modeling"
    },
    {
      icon: PieChart,
      title: "Visualization",
      description: "Beautiful, interactive charts and graphs for better understanding"
    },
    {
      icon: LineChart,
      title: "Performance Metrics",
      description: "Track KPIs and performance indicators across your organization"
    }
  ];

  const services = [
    {
      title: "Business Intelligence",
      href: "/business-intelligence",
      description: "Transform data into actionable business insights"
    },
    {
      title: "Predictive Modeling",
      href: "/predictive-modeling",
      description: "Forecast trends and outcomes with AI models"
    },
    {
      title: "Data Warehousing",
      href: "/data-warehousing",
      description: "Centralized data storage and management solutions"
    },
    {
      title: "ETL Automation",
      href: "/etl-automation",
      description: "Automate data extraction, transformation, and loading"
    },
    {
      title: "Dashboard Development",
      href: "/dashboard-development",
      description: "Custom dashboards for your specific business needs"
    },
    {
      title: "Data Governance",
      href: "/data-governance",
      description: "Ensure data quality, security, and compliance"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Data Analytics
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with our advanced analytics platform. 
                Make data-driven decisions that drive business growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Analytics Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive data analytics solutions to unlock your business potential
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Unlock Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our data experts help you turn information into actionable insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}