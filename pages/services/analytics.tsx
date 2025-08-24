import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, Database, Target, Zap, Users, CheckCircle, 
  ArrowRight, ChevronRight, Globe, Brain, Rocket, Shield
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function DataAnalyticsPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Interactive dashboards and reporting solutions",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Scalable data pipelines and ETL solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Machine learning models for forecasting",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Streaming data processing and insights",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Data Strategy",
      description: "Data governance and architecture consulting",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Intelligent data analysis and automation",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const solutions = [
    {
      title: "Data Warehousing",
      description: "Modern data architecture and storage solutions",
      icon: Database,
      examples: ["Data modeling", "ETL processes", "Performance optimization"]
    },
    {
      title: "Advanced Analytics",
      description: "Statistical analysis and machine learning",
      icon: BarChart3,
      examples: ["Predictive modeling", "Statistical analysis", "A/B testing"]
    },
    {
      title: "Data Visualization",
      description: "Interactive charts and business dashboards",
      icon: Target,
      examples: ["Custom dashboards", "Real-time monitoring", "Mobile reporting"]
    },
    {
      title: "Data Governance",
      description: "Data quality and compliance management",
      icon: Shield,
      examples: ["Data cataloging", "Quality monitoring", "Compliance reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Data Analytics Services — Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our analytics solutions. Business intelligence, predictive analytics, and data-driven decision making." />
        <meta property="og:title" content="Data Analytics Services — Zion Tech Group" />
        <meta property="og:description" content="Transform your data into actionable insights with our analytics solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services/analytics" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-5 mx-auto mb-8 flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Transform your data into actionable insights that drive strategic decisions and business growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              From business intelligence to predictive analytics, our data solutions unlock the hidden value in your data and enable data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Analytics Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Analytics Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive data analytics services designed to extract maximum value from your data assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-indigo-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-indigo-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Analytics Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tailored analytics solutions for every stage of your data journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-white/70">{solution.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {solution.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-white/80">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data analytics solutions can transform your business intelligence and drive strategic decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Start Analytics Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Analytics Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}