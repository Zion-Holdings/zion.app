import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Brain, 
  Target, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Lightbulb,
  Code,
  Cloud,
  Shield,
  BarChart3
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const StartupSolutionsPage: React.FC = () => {
  const startupSolutions = [
    {
      title: 'MVP Development Platform',
      description: 'Rapid MVP development with scalable architecture for startups',
      icon: <Code className="w-8 h-8" />,
      features: ['Rapid Prototyping', 'Scalable Architecture', 'Cloud-Native', 'API-First Design'],
      href: '/services/mvp-development-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Startup AI Solutions',
      description: 'Affordable AI solutions designed for startup growth and innovation',
      icon: <Brain className="w-8 h-8" />,
      features: ['Cost-Effective AI', 'Quick Implementation', 'Scalable Models', 'Startup-Friendly Pricing'],
      href: '/services/startup-ai-solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Startup Cloud Infrastructure',
      description: 'Flexible cloud solutions that grow with your startup',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Pay-as-You-Grow', 'Auto-scaling', 'Startup Discounts', '24/7 Support'],
      href: '/services/startup-cloud-infrastructure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Startup Cybersecurity',
      description: 'Essential security solutions for startup protection',
      icon: <Shield className="w-8 h-8" />,
      features: ['Basic Security Suite', 'Compliance Ready', 'Threat Protection', 'Security Training'],
      href: '/services/startup-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Startup Analytics Platform',
      description: 'Data-driven insights to accelerate startup growth',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Growth Metrics', 'User Analytics', 'Conversion Tracking', 'ROI Measurement'],
      href: '/services/startup-analytics-platform',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Startup Automation Suite',
      description: 'Automate repetitive tasks to focus on growth',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process Automation', 'Marketing Automation', 'Customer Support', 'Workflow Management'],
      href: '/services/startup-automation-suite',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const startupFeatures = [
    {
      title: 'Cost-Effective',
      description: 'Solutions designed for startup budgets with growth-friendly pricing',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Quick Setup',
      description: 'Fast implementation to get you to market quickly',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable',
      description: 'Grow with your startup without switching platforms',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Startup Support',
      description: 'Dedicated support team that understands startup challenges',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Startups Helped', value: '1000+', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Average Setup Time', value: '< 24h', icon: <Zap className="w-6 h-6" /> },
    { label: 'Cost Savings', value: '60%+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Success Rate', value: '95%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Startup Solutions - Zion Tech Group | Technology Solutions for Growing Startups" 
          description="Accelerate your startup growth with Zion Tech Group's affordable, scalable technology solutions including MVP development, AI, cloud infrastructure, and automation." 
          canonical="https://ziontechgroup.com/solutions/startup/" 
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
              Startup Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Accelerate your startup growth with our affordable, scalable technology solutions designed for rapid innovation and market success.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Startup Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Startup Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our startup solutions are designed to help you move fast, stay lean, and scale efficiently without breaking the bank.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {startupFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Startup Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Startup Solutions Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of startup-focused technology solutions designed to accelerate growth and innovation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {startupSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className={`flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={solution.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Startup?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our startup solutions can help you move fast, stay lean, and achieve market success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default StartupSolutionsPage;