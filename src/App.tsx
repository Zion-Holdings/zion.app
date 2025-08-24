import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Cloud, Brain, Shield, Zap, Rocket, TrendingUp, Target } from 'lucide-react'
import FuturisticAnimatedBackground from './components/ui/FuturisticAnimatedBackground'
import FuturisticNeonButton from './components/ui/FuturisticNeonButton'
import { ENHANCED_SERVICES_DATA, MARKET_ANALYSIS } from './data/enhancedServicesData'

function App() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: '🚀' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: '🛡️' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: '⏰' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: '🤖' },
  ]

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
  ]

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️' },
    { name: 'Node.js & Python', icon: '🐍' },
    { name: 'AWS & Azure', icon: '☁️' },
    { name: 'Docker & Kubernetes', icon: '🐳' },
    { name: 'TensorFlow & PyTorch', icon: '🤖' },
    { name: 'Blockchain & Web3', icon: '⛓️' }
  ]

  const featuredServices = ENHANCED_SERVICES_DATA.slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <FuturisticAnimatedBackground variant="cyberpunk" intensity="medium" className="absolute inset-0 -z-10" />
      
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
              <FuturisticNeonButton
                variant="primary"
                size="lg"
                glowIntensity="high"
                onClick={() => window.location.href = '/enhanced-services'}
                className="mx-auto sm:mx-0"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticNeonButton>
              <FuturisticNeonButton
                variant="secondary"
                size="lg"
                glowIntensity="medium"
                onClick={() => window.location.href = '/enhanced-contact'}
                className="mx-auto sm:mx-0"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </FuturisticNeonButton>
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
                  <div className="text-2xl">{service.images[0]}</div>
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
                <FuturisticNeonButton
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => window.location.href = `/enhanced-services#${service.id}`}
                >
                  Learn More
                </FuturisticNeonButton>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <FuturisticNeonButton
              variant="secondary"
              size="lg"
              glowIntensity="high"
              onClick={() => window.location.href = '/enhanced-services'}
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticNeonButton>
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
                <li>• AI & Automation: {MARKET_ANALYSIS.averagePrices["AI & Automation"]}</li>
                <li>• Cloud & Infrastructure: {MARKET_ANALYSIS.averagePrices["Cloud & Infrastructure"]}</li>
                <li>• Cybersecurity: {MARKET_ANALYSIS.averagePrices["Cybersecurity"]}</li>
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
                <li>• {MARKET_ANALYSIS.marketTrends[0]}</li>
                <li>• {MARKET_ANALYSIS.marketTrends[1]}</li>
                <li>• {MARKET_ANALYSIS.marketTrends[2]}</li>
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
                <li>• {MARKET_ANALYSIS.competitiveAdvantages[0]}</li>
                <li>• {MARKET_ANALYSIS.competitiveAdvantages[1]}</li>
                <li>• {MARKET_ANALYSIS.competitiveAdvantages[2]}</li>
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
              <FuturisticNeonButton
                variant="primary"
                size="lg"
                glowIntensity="high"
                onClick={() => window.location.href = '/enhanced-services'}
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticNeonButton>
              <FuturisticNeonButton
                variant="secondary"
                size="lg"
                glowIntensity="medium"
                onClick={() => window.location.href = '/enhanced-contact'}
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </FuturisticNeonButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-white/60 mb-4">
                Transforming businesses through innovative technology solutions.
              </p>
              <div className="text-white/60 text-sm">
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="/enhanced-services" className="hover:text-cyan-400 transition-colors">AI Solutions</a></li>
                <li><a href="/enhanced-services" className="hover:text-cyan-400 transition-colors">Cloud Infrastructure</a></li>
                <li><a href="/enhanced-services" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
                <li><a href="/enhanced-services" className="hover:text-cyan-400 transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="/enhanced-contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="/enhanced-services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="/enhanced-contact" className="hover:text-cyan-400 transition-colors">Get Quote</a></li>
                <li><a href="/enhanced-contact" className="hover:text-cyan-400 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <div className="text-white/60 mb-4">
              © 2025 Zion Tech Group. All rights reserved.
            </div>
            <div className="text-white/40 text-sm">
              Transforming businesses through innovative technology solutions.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App