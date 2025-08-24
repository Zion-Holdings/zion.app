import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Cloud, Brain, Shield, Zap, TrendingUp, Target } from 'lucide-react';
import { ENHANCED_SERVICES_DATA, MARKET_ANALYSIS } from '../data/enhancedServicesData';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: '🚀' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: '🛡️' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: '⏰' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: '🤖' },
  ];

  const coreServices = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence for business transformation',
      icon: <Brain className="w-8 h-8" />,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions for modern applications',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security frameworks and threat protection',
      icon: <Shield className="w-8 h-8" />,
      features: ['Zero Trust Security', 'Penetration Testing', 'Compliance Auditing', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization',
      icon: <Zap className="w-8 h-8" />,
      features: ['Process Automation', 'Legacy Modernization', 'API Integration', 'Data Migration']
    }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️' },
    { name: 'Node.js & Python', icon: '🐍' },
    { name: 'AWS & Azure', icon: '☁️' },
    { name: 'Docker & Kubernetes', icon: '🐳' },
    { name: 'TensorFlow & PyTorch', icon: '🤖' },
    { name: 'Blockchain & Web3', icon: '⛓️' }
  ];

  const featuredServices = ENHANCED_SERVICES_DATA.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,113,242,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(34,221,210,0.1)_50%,transparent_70%)] animate-pulse"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/services'}
                className="mx-auto sm:mx-0 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="mx-auto sm:mx-0 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-6 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Core Service Categories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Enhanced Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our most innovative and in-demand micro SaaS, IT, and AI solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{service.images?.[0] || '🚀'}</div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white/80 text-sm">{service.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-white/60">
                    AI Score: {service.aiScore}%
                  </div>
                </div>
                <button
                  onClick={() => window.location.href = `/services#${service.id}`}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20 px-6 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Market Insights & Competitive Analysis</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stay ahead with our comprehensive market analysis and competitive intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-cyan-400 mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Market Pricing</h3>
              <p className="text-white/70 mb-4">
                Average market prices across service categories
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• AI & Automation: $8,000 - $15,000</li>
                <li>• Cloud & Infrastructure: $15,000 - $30,000</li>
                <li>• Cybersecurity: $18,000 - $35,000</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-purple-400 mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Market Trends</h3>
              <p className="text-white/70 mb-4">
                Key market trends and growth indicators
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• {MARKET_ANALYSIS.keyTrends[0]}</li>
                <li>• {MARKET_ANALYSIS.keyTrends[1]}</li>
                <li>• {MARKET_ANALYSIS.keyTrends[2]}</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-green-400 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Competitive Advantages</h3>
              <p className="text-white/70 mb-4">
                Our key differentiators in the market
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• AI-first approach with proven results</li>
                <li>• Enterprise-grade security and compliance</li>
                <li>• Scalable architecture for growth</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Master</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks to build scalable, modern applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm text-white/80">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/services'}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}