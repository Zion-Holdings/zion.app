import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Clock,
  Target,
  Zap,
  Brain,
  Shield
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Global Bank Digital Transformation',
      description: 'How a leading global bank achieved 300% efficiency improvement with our AI-powered solutions',
      industry: 'Financial Services',
      results: ['300% Efficiency Improvement', '50% Cost Reduction', '99.9% Uptime'],
      icon: <TrendingUp className="w-8 h-8" />,
      href: '/resources/case-studies/global-bank-transformation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare AI Implementation',
      description: 'Revolutionary AI platform implementation for a major healthcare network',
      industry: 'Healthcare',
      results: ['40% Faster Diagnosis', '25% Cost Savings', 'Improved Patient Outcomes'],
      icon: <Brain className="w-8 h-8" />,
      href: '/resources/case-studies/healthcare-ai-implementation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Manufacturing Process Automation',
      description: 'Complete automation of manufacturing processes for a Fortune 500 company',
      industry: 'Manufacturing',
      results: ['60% Production Increase', '45% Quality Improvement', '30% Cost Reduction'],
      icon: <Zap className="w-8 h-8" />,
      href: '/resources/case-studies/manufacturing-automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Government Cybersecurity Upgrade',
      description: 'Comprehensive cybersecurity transformation for a federal government agency',
      industry: 'Government',
      results: ['99.99% Security Uptime', 'Zero Breaches', 'Full Compliance'],
      icon: <Shield className="w-8 h-8" />,
      href: '/resources/case-studies/government-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Retail AI Customer Experience',
      description: 'AI-powered customer experience transformation for a major retail chain',
      industry: 'Retail',
      results: ['35% Sales Increase', '50% Customer Satisfaction', '40% Operational Efficiency'],
      icon: <Users className="w-8 h-8" />,
      href: '/resources/case-studies/retail-ai-experience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Startup Scale-Up Success',
      description: 'How a tech startup scaled from 0 to 1M users with our cloud infrastructure',
      industry: 'Technology',
      results: ['1M+ Users', '99.9% Uptime', '10x Performance'],
      icon: <Target className="w-8 h-8" />,
      href: '/resources/case-studies/startup-scale-up',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const caseStudyFeatures = [
    {
      title: 'Real Results',
      description: 'Documented outcomes from actual client implementations',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Detailed Analysis',
      description: 'In-depth analysis of challenges, solutions, and results',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Industry Focused',
      description: 'Case studies across various industries and use cases',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Actionable Insights',
      description: 'Practical lessons and strategies you can apply',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Case Studies', value: '100+', icon: <BarChart3 className="w-6 h-6" /> },
    { label: 'Industries Covered', value: '15+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Success Rate', value: '95%', icon: <Star className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Case Studies - Zion Tech Group | Success Stories and Implementation Results" 
          description="Explore real-world success stories and implementation results from Zion Tech Group's technology solutions across various industries." 
          canonical="https://ziontechgroup.com/resources/case-studies/" 
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
              Case Studies
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore real-world success stories and implementation results from our technology solutions across various industries.
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

        {/* Case Study Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Read Our Case Studies?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our case studies provide real insights into how our solutions deliver measurable results across different industries and use cases.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {caseStudyFeatures.map((feature, index) => (
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

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our technology solutions have transformed businesses and delivered measurable results across various industries.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                      {caseStudy.icon}
                    </div>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-400 mb-6">{caseStudy.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results:</h4>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={caseStudy.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can help you achieve similar results and create your own success story.
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

export default CaseStudiesPage;