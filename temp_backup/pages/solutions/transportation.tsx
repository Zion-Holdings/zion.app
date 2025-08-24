import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Truck, 
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
  TrendingUp,
  Zap
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const TransportationSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Fleet Management',
      description: 'Intelligent fleet optimization and route planning systems',
      icon: <Brain className="w-8 h-8" />,
      features: ['Route Optimization', 'Fuel Management', 'Driver Analytics', 'Predictive Maintenance'],
      href: '/ai-fleet-management',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Autonomous Vehicle Platform',
      description: 'Advanced autonomous driving technology and safety systems',
      icon: <Truck className="w-8 h-8" />,
      features: ['Self-Driving Technology', 'Safety Systems', 'Traffic Integration', 'Remote Monitoring'],
      href: '/autonomous-vehicle-ai-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smart Traffic Management',
      description: 'AI-powered traffic optimization and congestion reduction',
      icon: <Activity className="w-8 h-8" />,
      features: ['Traffic Flow Optimization', 'Signal Coordination', 'Incident Detection', 'Real-time Updates'],
      href: '/smart-traffic-management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Transportation Cybersecurity',
      description: 'Advanced security solutions for transportation infrastructure',
      icon: <Shield className="w-8 h-8" />,
      features: ['Vehicle Security', 'Infrastructure Protection', 'Data Privacy', 'Threat Detection'],
      href: '/transportation-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Logistics Analytics Platform',
      description: 'Comprehensive analytics for transportation and logistics operations',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Performance Analytics', 'Cost Optimization', 'Predictive Insights', 'Supply Chain Visibility'],
      href: '/logistics-analytics-platform',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Transportation Partners', value: '200+', icon: <Truck className="w-6 h-6" /> },
    { label: 'Fleets Managed', value: '500+', icon: <Activity className="w-6 h-6" /> },
    { label: 'Route Optimization', value: '35%', icon: <Star className="w-6 h-6" /> },
    { label: 'Cost Reduction', value: '25%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Safety First',
      description: 'Enterprise-grade security for transportation systems'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Tracking',
      description: 'Instant transportation insights and updates'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Coverage',
      description: 'Available worldwide with local compliance'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Platform',
      description: 'Grows with your transportation needs'
    }
  ];

  return (
    <UltraFuturisticBackground variant="holographic">
      <div className="min-h-screen">
        <SEO 
          title="Transportation Solutions - Zion Tech Group | AI-Powered Transportation Technology" 
          description="Transform transportation with Zion Tech Group's AI fleet management, autonomous vehicles, smart traffic, cybersecurity, and analytics solutions. Drive efficiency and safety." 
          canonical="https://ziontechgroup.com/solutions/transportation/" 
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
              Transportation Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing transportation with AI-powered fleet management, autonomous vehicle technology, smart traffic systems, advanced cybersecurity, and comprehensive analytics. Drive efficiency, safety, and sustainability.
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
              Our Transportation Solutions
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
              Why Choose Our Transportation Solutions?
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
              Ready to Transform Transportation?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the transportation revolution with our AI-powered solutions. Increase efficiency, improve safety, and reduce costs with intelligent transportation technology.
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

export default TransportationSolutionsPage;