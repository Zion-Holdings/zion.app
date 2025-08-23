import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, Clock, ArrowRight, 
  Star, CheckCircle, Target, Globe, Rocket, Brain
} from 'lucide-react';
import Link from 'next/link';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnosis Platform',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Reducing diagnostic errors and improving patient outcomes through AI-powered analysis',
      solution: 'Developed a comprehensive AI platform that analyzes medical images, patient data, and clinical notes to provide accurate diagnoses and treatment recommendations',
      results: [
        '95% reduction in diagnostic errors',
        '40% faster diagnosis times',
        'Improved patient outcomes by 60%',
        'Cost savings of $2.5M annually'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'Natural Language Processing', 'Cloud Infrastructure'],
      duration: '8 months',
      team: '12 engineers',
      featured: true,
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Quantum Computing Financial Risk Analysis',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge: 'Complex financial modeling and risk assessment that was computationally impossible with classical computers',
      solution: 'Implemented quantum computing algorithms for portfolio optimization, risk assessment, and market prediction',
      results: [
        '1000x faster computation times',
        'Improved portfolio returns by 25%',
        'Reduced risk exposure by 40%',
        'New investment opportunities identified'
      ],
      technologies: ['Quantum Computing', 'Financial Modeling', 'Risk Analytics', 'Quantum Algorithms'],
      duration: '12 months',
      team: '8 quantum specialists',
      featured: false,
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Space Resource Intelligence Platform',
      client: 'Space Mining Corporation',
      industry: 'Space Technology',
      challenge: 'Identifying and analyzing potential mining sites on asteroids and other celestial bodies',
      solution: 'Built an AI-powered platform that processes satellite data, orbital mechanics, and resource composition to identify optimal mining locations',
      results: [
        'Identified 15 new mining sites',
        'Reduced exploration costs by 70%',
        'Improved resource yield predictions by 85%',
        'Accelerated mission planning by 6 months'
      ],
      technologies: ['AI/ML', 'Satellite Technology', 'Orbital Mechanics', 'Data Analytics'],
      duration: '18 months',
      team: '15 engineers',
      featured: false,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'Metaverse Virtual Workspace Platform',
      client: 'Fortune 500 Tech Company',
      industry: 'Technology',
      challenge: 'Creating immersive virtual workspaces for remote teams to collaborate effectively',
      solution: 'Developed a comprehensive metaverse platform with 3D environments, real-time collaboration tools, and AI-powered virtual assistants',
      results: [
        'Increased team productivity by 35%',
        'Reduced travel costs by $1.2M annually',
        'Improved employee satisfaction by 45%',
        'Faster project completion times'
      ],
      technologies: ['Metaverse Development', 'VR/AR', '3D Graphics', 'AI Integration'],
      duration: '14 months',
      team: '20 developers',
      featured: false,
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'Quantum Cybersecurity Implementation',
      client: 'Government Defense Agency',
      industry: 'Government',
      challenge: 'Protecting critical infrastructure from future quantum computing attacks',
      solution: 'Implemented quantum-resistant cryptography and quantum key distribution systems across government networks',
      results: [
        '100% quantum-resistant security',
        'Zero security breaches in 2 years',
        'Compliance with new security standards',
        'Future-proof security infrastructure'
      ],
      technologies: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Network Security', 'Quantum Key Distribution'],
      duration: '24 months',
      team: '25 security experts',
      featured: false,
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      id: 6,
      title: 'AI-Powered Manufacturing Optimization',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Optimizing production processes and reducing waste in complex manufacturing operations',
      solution: 'Deployed AI systems that monitor production lines, predict maintenance needs, and optimize resource allocation',
      results: [
        'Reduced production waste by 30%',
        'Increased production efficiency by 25%',
        'Saved $3.8M in operational costs',
        'Improved product quality by 20%'
      ],
      technologies: ['AI/ML', 'IoT Sensors', 'Predictive Analytics', 'Process Optimization'],
      duration: '10 months',
      team: '10 engineers',
      featured: false,
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const industries = [
    'All Industries',
    'Healthcare',
    'Financial Services',
    'Space Technology',
    'Technology',
    'Government',
    'Manufacturing',
    'Retail',
    'Education'
  ];

  const metrics = [
    { number: '150+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '$50M+', label: 'Value Delivered', icon: <DollarSign className="w-8 h-8" /> },
    { number: '25+', label: 'Industries Served', icon: <Globe className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Real-world success stories showcasing how our innovative technology solutions 
              transform businesses and drive measurable results across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#case-studies" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Case Studies
              </a>
              <Link href="/contact" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <TrendingUp className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Star className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <CheckCircle className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-gray-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Success Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful project that demonstrates the transformative power of our technology
            </p>
          </motion.div>

          {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                      {caseStudy.icon}
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    <strong>Client:</strong> {caseStudy.client}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                      <p className="text-gray-300">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                      <p className="text-gray-300">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{caseStudy.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Team Size:</span>
                          <span>{caseStudy.team}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful projects across different industries
            </p>
          </motion.div>

          {/* Industry Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {industries.map((industry, index) => (
              <button
                key={industry}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                {industry}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                      {caseStudy.icon}
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    <strong>Client:</strong> {caseStudy.client}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {caseStudy.duration}
                      </span>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Link>
              <Link href="/services" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;