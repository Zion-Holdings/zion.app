import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Activity,
  Globe,
  Rocket,
  BarChart3,
  Lock,
  Cpu,
  Users,
  TrendingUp
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const EnergySolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Energy Management',
      description: 'Intelligent energy optimization and demand response systems',
      icon: <Brain className="w-8 h-8" />,
      features: ['Demand Forecasting', 'Load Balancing', 'Energy Optimization', 'Predictive Maintenance'],
      href: '/ai-energy-management',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Smart Grid Solutions',
      description: 'Advanced smart grid technology for modern energy distribution',
      icon: <Zap className="w-8 h-8" />,
      features: ['Grid Monitoring', 'Fault Detection', 'Automated Switching', 'Real-time Analytics'],
      href: '/smart-grid-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Renewable Energy Integration',
      description: 'AI-powered renewable energy management and optimization',
      icon: <Activity className="w-8 h-8" />,
      features: ['Solar Optimization', 'Wind Integration', 'Battery Management', 'Grid Stability'],
      href: '/renewable-energy-integration',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Energy Cybersecurity',
      description: 'Advanced security solutions for critical energy infrastructure',
      icon: <Shield className="w-8 h-8" />,
      features: ['SCADA Security', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      href: '/energy-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Energy Analytics Platform',
      description: 'Comprehensive analytics for energy operations and optimization',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Performance Analytics', 'Efficiency Metrics', 'Predictive Insights', 'Cost Optimization'],
      href: '/energy-analytics-platform',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Energy Partners', value: '100+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Grids Optimized', value: '250+', icon: <Activity className="w-6 h-6" /> },
    { label: 'Energy Savings', value: '30%', icon: <Star className="w-6 h-6" /> },
    { label: 'Efficiency Gain', value: '45%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Critical Infrastructure',
      description: 'Enterprise-grade security for energy systems'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Monitoring',
      description: 'Instant energy system insights'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Deployment',
      description: 'Available worldwide with local compliance'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Platform',
      description: 'Grows with your energy operations'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Energy Solutions - Zion Tech Group | AI-Powered Energy Technology" 
          description="Transform energy with Zion Tech Group's AI management, smart grid, renewable integration, cybersecurity, and analytics solutions. Drive efficiency and sustainability." 
          canonical="https://ziontechgroup.com/solutions/energy/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Energy Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing energy with AI-powered management, smart grid technology, renewable energy integration, advanced cybersecurity, and comprehensive analytics. Drive efficiency, sustainability, and reliability.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Energy Solutions
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Our Energy Solutions?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Energy?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the energy revolution with our AI-powered solutions. Increase efficiency, improve reliability, and drive sustainability with intelligent energy technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default EnergySolutionsPage;