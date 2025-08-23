import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Atom,
  Globe,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  Calendar,
  Target,
  CheckCircle
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnosis Platform',
      client: 'MedTech Innovations Inc.',
      industry: 'Healthcare',
      challenge: 'Reducing diagnostic errors and improving patient outcomes through AI-powered medical imaging analysis.',
      solution: 'Developed a comprehensive AI platform using advanced computer vision and machine learning algorithms to analyze medical images with 99.2% accuracy.',
      results: [
        '99.2% diagnostic accuracy rate',
        '40% reduction in diagnostic time',
        '30% improvement in early detection rates',
        'ROI of 450% within 18 months'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'Healthcare Analytics', 'Cloud Computing'],
      duration: '12 months',
      teamSize: '15 engineers',
      image: '/images/case-studies/healthcare-ai.jpg',
      category: 'AI & Machine Learning'
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading System',
      client: 'Global Finance Corp.',
      industry: 'Financial Services',
      challenge: 'Implementing quantum-resistant encryption for high-frequency trading while maintaining sub-millisecond latency.',
      solution: 'Built a quantum-secure trading platform using post-quantum cryptography algorithms and optimized for ultra-low latency execution.',
      results: [
        'Zero security breaches in 2+ years',
        'Sub-millisecond trading latency maintained',
        '99.99% system uptime',
        '$2.3B in protected assets'
      ],
      technologies: ['Quantum Cryptography', 'High-Frequency Trading', 'Post-Quantum Algorithms', 'Real-time Systems'],
      duration: '18 months',
      teamSize: '12 engineers',
      image: '/images/case-studies/quantum-finance.jpg',
      category: 'Quantum Computing'
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform',
      client: 'SpaceX Resources',
      industry: 'Space Technology',
      challenge: 'Creating an AI-powered platform for identifying and analyzing valuable resources in space using satellite data.',
      solution: 'Developed a comprehensive space resource intelligence platform combining satellite imagery, AI analysis, and predictive modeling.',
      results: [
        '85% accuracy in resource identification',
        '60% reduction in exploration costs',
        'Real-time data processing from 50+ satellites',
        '$500M in resource value identified'
      ],
      technologies: ['Satellite Technology', 'AI/ML', 'Space Analytics', 'Predictive Modeling'],
      duration: '24 months',
      teamSize: '20 engineers',
      image: '/images/case-studies/space-resources.jpg',
      category: 'Space Technology'
    },
    {
      id: 4,
      title: 'Zero-Trust Enterprise Security Architecture',
      client: 'Fortune 500 Tech Company',
      industry: 'Technology',
      challenge: 'Implementing a comprehensive zero-trust security architecture across a global enterprise with 50,000+ employees.',
      solution: 'Designed and deployed a zero-trust security framework with continuous authentication, micro-segmentation, and real-time threat detection.',
      results: [
        '99.9% reduction in security incidents',
        'Zero successful breaches in 3+ years',
        '50% reduction in security overhead',
        'Compliance with SOC2, ISO27001, and GDPR'
      ],
      technologies: ['Zero Trust Architecture', 'Identity Management', 'Threat Detection', 'Compliance'],
      duration: '36 months',
      teamSize: '25 engineers',
      image: '/images/case-studies/zero-trust.jpg',
      category: 'Cybersecurity'
    },
    {
      id: 5,
      title: 'AI-Powered Manufacturing Optimization',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Optimizing manufacturing processes using AI to reduce waste, improve quality, and increase production efficiency.',
      solution: 'Implemented an AI-driven manufacturing optimization system with predictive maintenance, quality control, and process optimization.',
      results: [
        '25% reduction in manufacturing waste',
        '35% improvement in product quality',
        '20% increase in production efficiency',
        'ROI of 300% within 12 months'
      ],
      technologies: ['AI/ML', 'IoT', 'Predictive Analytics', 'Manufacturing Systems'],
      duration: '15 months',
      teamSize: '18 engineers',
      image: '/images/case-studies/manufacturing-ai.jpg',
      category: 'AI & Machine Learning'
    },
    {
      id: 6,
      title: 'Quantum Neural Network Platform',
      client: 'Advanced Research Institute',
      industry: 'Research & Development',
      challenge: 'Developing a quantum neural network platform for solving complex scientific problems beyond classical computing capabilities.',
      solution: 'Created a hybrid quantum-classical neural network platform leveraging quantum advantage for specific computational tasks.',
      results: [
        '1000x speedup for specific algorithms',
        'Breakthrough in protein folding prediction',
        'Published in Nature and Science journals',
        '$10M in research funding secured'
      ],
      technologies: ['Quantum Computing', 'Neural Networks', 'Hybrid Algorithms', 'Scientific Computing'],
      duration: '30 months',
      teamSize: '22 engineers',
      image: '/images/case-studies/quantum-neural.jpg',
      category: 'Quantum Computing'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Star, count: caseStudies.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: caseStudies.filter(cs => cs.category === 'AI & Machine Learning').length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: caseStudies.filter(cs => cs.category === 'Quantum Computing').length },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: caseStudies.filter(cs => cs.category === 'Space Technology').length },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: caseStudies.filter(cs => cs.category === 'Cybersecurity').length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => {
        if (selectedCategory === 'ai-ml') return cs.category === 'AI & Machine Learning';
        if (selectedCategory === 'quantum') return cs.category === 'Quantum Computing';
        if (selectedCategory === 'space') return cs.category === 'Space Technology';
        if (selectedCategory === 'security') return cs.category === 'Cybersecurity';
        return true;
      });

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how Zion Tech Group has transformed businesses across industries with 
                cutting-edge AI, quantum computing, and space technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
                      : 'border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-3 inline-block">
                            {caseStudy.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {caseStudy.title}
                          </h3>
                          <p className="text-gray-400">{caseStudy.client}</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Challenge</h4>
                        <p className="text-gray-300 mb-4">{caseStudy.challenge}</p>
                        
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Solution</h4>
                        <p className="text-gray-300">{caseStudy.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Results</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies & Details */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {caseStudy.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{caseStudy.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{caseStudy.teamSize}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <a
                          href={`/contact?case-study=${encodeURIComponent(caseStudy.title)}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <span className="text-sm text-gray-500">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions have delivered measurable results across industries and technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, number: '150+', label: 'Happy Clients' },
                { icon: TrendingUp, number: '99.9%', label: 'Success Rate' },
                { icon: Zap, number: '500%', label: 'Average ROI' },
                { icon: Star, number: '50+', label: 'Industry Awards' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our cutting-edge technology solutions can transform your business 
                and deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
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