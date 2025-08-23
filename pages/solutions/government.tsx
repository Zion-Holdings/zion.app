import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Globe,
  Rocket,
  Activity,
  Zap,
  Lock,
  BarChart3,
  Users,
  TrendingUp
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const GovernmentSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Government Analytics',
      description: 'Intelligent analytics for government decision making and citizen services',
      icon: <Brain className="w-8 h-8" />,
      features: ['Citizen Analytics', 'Policy Impact Assessment', 'Resource Optimization', 'Predictive Planning'],
      href: '/ai-government-analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Digital Government Platform',
      description: 'Comprehensive digital transformation for government services',
      icon: <Building className="w-8 h-8" />,
      features: ['Citizen Portals', 'Service Automation', 'Document Management', 'Workflow Optimization'],
      href: '/digital-government-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Government Cybersecurity',
      description: 'Advanced security solutions for government systems and data',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Data Protection', 'Compliance Management', 'Incident Response'],
      href: '/government-cybersecurity',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Smart City Solutions',
      description: 'IoT and AI-powered solutions for modern city management',
      icon: <Globe className="w-8 h-8" />,
      features: ['Traffic Management', 'Energy Optimization', 'Public Safety', 'Environmental Monitoring'],
      href: '/smart-city-solutions',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Government Cloud Infrastructure',
      description: 'Secure and compliant cloud solutions for government operations',
      icon: <Cloud className="w-8 h-8" />,
      features: ['FedRAMP Compliance', 'Data Sovereignty', 'Scalable Architecture', 'Cost Optimization'],
      href: '/government-cloud-infrastructure',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Government Agencies', value: '150+', icon: <Building className="w-6 h-6" /> },
    { label: 'Citizens Served', value: '50M+', icon: <Users className="w-6 h-6" /> },
    { label: 'Service Efficiency', value: '60%', icon: <Star className="w-6 h-6" /> },
    { label: 'Cost Savings', value: '40%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security First',
      description: 'FedRAMP and FISMA compliant solutions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Services',
      description: 'Instant citizen service delivery'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'National Coverage',
      description: 'Available across all government levels'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Platform',
      description: 'Grows with government needs'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Government Solutions - Zion Tech Group | AI-Powered Government Technology" 
          description="Transform government with Zion Tech Group's AI analytics, digital platforms, cybersecurity, smart city solutions, and cloud infrastructure. Drive efficiency and citizen satisfaction." 
          canonical="https://ziontechgroup.com/solutions/government/" 
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
              Government Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing government with AI-powered analytics, digital transformation platforms, advanced cybersecurity, smart city solutions, and compliant cloud infrastructure. Drive efficiency and improve citizen services.
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
              Our Government Solutions
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
              Why Choose Our Government Solutions?
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
              Ready to Transform Government?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the government technology revolution with our AI-powered solutions. Improve efficiency, enhance citizen services, and ensure security compliance.
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

export default GovernmentSolutionsPage;