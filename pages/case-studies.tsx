import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Rocket,
  Shield,
  Brain,
  Clock
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 12 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Finance', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
    { id: 'retail', name: 'Retail', count: 2 },
    { id: 'government', name: 'Government', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'MedTech Innovations Inc.',
      industry: 'healthcare',
      challenge: 'Traditional diagnostic methods were time-consuming and had a 15% error rate, leading to delayed treatments and increased healthcare costs.',
      solution: 'Implemented our AI consciousness evolution platform with advanced medical imaging analysis and predictive diagnostics capabilities.',
      results: [
        'Reduced diagnostic time by 80%',
        'Improved accuracy to 98.5%',
        'Decreased healthcare costs by $2.3M annually',
        'Enhanced patient outcomes by 40%'
      ],
      technologies: ['AI Consciousness Platform', 'Medical Imaging AI', 'Predictive Analytics'],
      duration: '6 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading System',
      client: 'Quantum Capital Group',
      industry: 'finance',
      challenge: 'Traditional trading systems were vulnerable to quantum attacks and couldn\'t handle the increasing complexity of modern financial markets.',
      solution: 'Developed a quantum-resistant trading platform with autonomous decision-making capabilities and real-time risk assessment.',
      results: [
        'Eliminated quantum security vulnerabilities',
        'Increased trading efficiency by 300%',
        'Reduced risk exposure by 65%',
        'Generated $15M in additional revenue'
      ],
      technologies: ['Quantum Cybersecurity', 'Autonomous Trading AI', 'Risk Management'],
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Autonomous Manufacturing Operations',
      client: 'Future Manufacturing Corp',
      industry: 'manufacturing',
      challenge: 'Manual manufacturing processes were inefficient, error-prone, and couldn\'t scale to meet growing demand.',
      solution: 'Implemented autonomous manufacturing systems with AI-powered quality control and predictive maintenance.',
      results: [
        'Increased production capacity by 250%',
        'Reduced defects by 90%',
        'Lowered operational costs by 35%',
        'Improved worker safety by 100%'
      ],
      technologies: ['Autonomous Systems', 'AI Quality Control', 'Predictive Maintenance'],
      duration: '10 months',
      team: '15 specialists'
    },
    {
      id: 4,
      title: 'AI-Powered Customer Experience Platform',
      client: 'RetailTech Solutions',
      industry: 'retail',
      challenge: 'Customer service was inconsistent across channels, leading to poor customer satisfaction and lost sales opportunities.',
      solution: 'Built an AI-powered customer experience platform with emotional intelligence and multi-channel integration.',
      results: [
        'Improved customer satisfaction by 85%',
        'Increased sales conversion by 45%',
        'Reduced customer service costs by 60%',
        'Enhanced customer retention by 70%'
      ],
      technologies: ['AI Emotional Intelligence', 'Multi-channel Integration', 'Customer Analytics'],
      duration: '7 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Quantum-Secure Government Communications',
      client: 'Federal Security Agency',
      industry: 'government',
      challenge: 'Government communications were vulnerable to quantum attacks and lacked real-time threat detection capabilities.',
      solution: 'Implemented quantum-secure communication infrastructure with autonomous threat detection and response systems.',
      results: [
        'Achieved quantum-resistant security',
        'Reduced threat response time by 95%',
        'Improved communication reliability by 99.9%',
        'Enhanced national security posture'
      ],
      technologies: ['Quantum Cryptography', 'Autonomous Security', 'Threat Intelligence'],
      duration: '12 months',
      team: '20 specialists'
    },
    {
      id: 6,
      title: 'Space Resource Mining AI Platform',
      client: 'SpaceX Resources',
      industry: 'manufacturing',
      challenge: 'Manual space resource identification and extraction was inefficient and dangerous for human operators.',
      solution: 'Developed autonomous space mining systems with AI-powered resource detection and extraction optimization.',
      results: [
        'Increased resource discovery by 400%',
        'Reduced extraction costs by 70%',
        'Improved safety by eliminating human risk',
        'Accelerated space exploration timeline'
      ],
      technologies: ['Space AI Systems', 'Autonomous Robotics', 'Resource Optimization'],
      duration: '18 months',
      team: '25 specialists'
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = [
    { label: 'Successful Projects', value: '150+', icon: <Award className="w-6 h-6" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> },
    { label: 'Average ROI', value: '300%', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Global Reach', value: '25+ Countries', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent"
            >
              Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Discover how our innovative solutions have transformed businesses across industries and delivered measurable results.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4 text-emerald-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Filter by Industry</h2>
              <p className="text-gray-400">Explore case studies from your specific industry</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {filteredCaseStudies.filter(study => study.featured).length > 0 && (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-6">Featured Success Story</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our most impactful transformation story
                </p>
              </motion.div>

              {filteredCaseStudies.filter(study => study.featured).map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-500/30">
                          {study.industry.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-teal-900/30 text-teal-300 text-sm rounded-full border border-teal-500/30">
                          FEATURED
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-emerald-400 font-semibold mb-6">{study.client}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 rounded-xl bg-emerald-900/20 border border-emerald-500/30">
                        <h4 className="text-xl font-bold text-white mb-4 text-center">Results</h4>
                        <div className="space-y-3">
                          {study.results.map((result, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-emerald-200">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-white">{study.duration}</div>
                          <div className="text-gray-400 text-sm">Duration</div>
                        </div>
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                          <div className="text-2xl font-bold text-white">{study.team}</div>
                          <div className="text-gray-400 text-sm">Team Size</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">More Success Stories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore how we've helped other organizations achieve their transformation goals
              </p>
            </motion.div>
            
            {filteredCaseStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-500/30">
                        {study.industry.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-emerald-400 font-semibold mb-4">{study.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm line-clamp-3">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm line-clamp-2">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2 text-sm text-emerald-200">
                            <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {study.team}
                        </div>
                      </div>
                      
                      <a
                        href={`/case-studies/${study.id}`}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-1"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <Award className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
                <p className="text-gray-400">
                  Try selecting a different industry or check back later for new success stories.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our innovative solutions can transform your business and deliver measurable results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Start Your Transformation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;