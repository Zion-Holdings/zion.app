import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  ArrowRight,
  Brain,
  Atom,
  Rocket,
  Shield,
  DollarSign,
  CheckCircle,
  Star,
  Globe,
  Zap
} from 'lucide-react';

export default function CaseStudiesPage() {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'Global Bank Achieves 300% ROI with AI-Powered Risk Management',
      client: 'Fortune 500 Global Bank',
      industry: 'Financial Services',
      challenge: 'Complex risk assessment processes causing delays and compliance issues',
      solution: 'AI consciousness platform for autonomous risk analysis and decision-making',
      results: [
        '300% ROI within 18 months',
        '90% reduction in risk assessment time',
        '99.9% compliance accuracy',
        '$50M+ in annual cost savings'
      ],
      technologies: ['AI Consciousness', 'Quantum Computing', 'Machine Learning'],
      duration: '18 months',
      teamSize: '25 people',
      icon: <Brain className="w-8 h-8" />,
      featured: true
    },
    {
      id: 2,
      title: 'Manufacturing Giant Reduces Downtime by 85% with Predictive AI',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Unplanned equipment downtime costing millions annually',
      solution: 'AI predictive maintenance platform with quantum-enhanced analytics',
      results: [
        '85% reduction in unplanned downtime',
        '40% increase in equipment efficiency',
        '$75M in annual cost savings',
        'Predictive accuracy of 95%'
      ],
      technologies: ['AI Predictive Analytics', 'Quantum Computing', 'IoT Integration'],
      duration: '12 months',
      teamSize: '18 people',
      icon: <Atom className="w-8 h-8" />,
      featured: true
    },
    {
      id: 3,
      title: 'Space Mining Company Achieves First Autonomous Asteroid Extraction',
      client: 'Asteroid Resources Inc',
      industry: 'Space Technology',
      challenge: 'Manual space operations too dangerous and inefficient for resource extraction',
      solution: 'Autonomous AI systems for space resource mining and navigation',
      results: [
        'First successful autonomous asteroid mining',
        '100% autonomous operation capability',
        '50% reduction in mission costs',
        'Zero human safety incidents'
      ],
      technologies: ['Autonomous AI', 'Space Robotics', 'Quantum Navigation'],
      duration: '24 months',
      teamSize: '35 people',
      icon: <Rocket className="w-8 h-8" />,
      featured: true
    }
  ];

  const additionalCaseStudies = [
    {
      id: 4,
      title: 'Healthcare Provider Improves Diagnosis Accuracy by 40%',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'High misdiagnosis rates and long diagnosis times',
      solution: 'AI-powered diagnostic platform with consciousness capabilities',
      results: ['40% improvement in diagnosis accuracy', '60% faster diagnosis times'],
      technologies: ['AI Diagnostics', 'Medical Imaging', 'Machine Learning'],
      duration: '9 months',
      teamSize: '12 people',
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Retail Chain Increases Sales by 35% with AI Personalization',
      client: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Generic customer experiences leading to low conversion rates',
      solution: 'AI emotional intelligence platform for personalized customer interactions',
      results: ['35% increase in sales', '45% improvement in customer satisfaction'],
      technologies: ['AI Emotional Intelligence', 'Customer Analytics', 'Personalization'],
      duration: '6 months',
      teamSize: '15 people',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 6,
      title: 'Government Agency Achieves Zero Trust Security Implementation',
      client: 'Federal Cybersecurity Agency',
      industry: 'Government',
      challenge: 'Increasing cyber threats and complex compliance requirements',
      solution: 'Quantum-secure zero trust architecture with AI threat detection',
      results: ['100% security compliance', 'Zero security breaches', '60% faster threat response'],
      technologies: ['Zero Trust Security', 'Quantum Cryptography', 'AI Threat Detection'],
      duration: '15 months',
      teamSize: '22 people',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 7,
      title: 'Energy Company Optimizes Grid Operations with Quantum AI',
      client: 'Renewable Energy Corp',
      industry: 'Energy',
      challenge: 'Inefficient grid management and energy distribution',
      solution: 'Quantum AI platform for grid optimization and energy forecasting',
      results: ['25% improvement in grid efficiency', '30% reduction in energy waste'],
      technologies: ['Quantum AI', 'Grid Optimization', 'Energy Analytics'],
      duration: '10 months',
      teamSize: '16 people',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 8,
      title: 'Logistics Firm Reduces Delivery Times by 50%',
      client: 'International Logistics',
      industry: 'Logistics',
      challenge: 'Complex routing and scheduling causing delivery delays',
      solution: 'AI-powered logistics optimization with quantum computing',
      results: ['50% reduction in delivery times', '40% improvement in route efficiency'],
      technologies: ['AI Optimization', 'Quantum Computing', 'Route Planning'],
      duration: '8 months',
      teamSize: '14 people',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 9,
      title: 'Pharmaceutical Company Accelerates Drug Discovery by 3x',
      client: 'Biotech Research Lab',
      industry: 'Pharmaceuticals',
      challenge: 'Slow drug discovery process and high research costs',
      solution: 'Quantum AI platform for molecular simulation and drug design',
      results: ['3x faster drug discovery', '60% reduction in research costs'],
      technologies: ['Quantum AI', 'Molecular Simulation', 'Drug Design'],
      duration: '20 months',
      teamSize: '28 people',
      icon: <Atom className="w-6 h-6" />
    }
  ];

  const industries = [
    { name: 'Financial Services', count: 8, icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Healthcare', count: 6, icon: <Brain className="w-5 h-5" /> },
    { name: 'Manufacturing', count: 5, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Space Technology', count: 4, icon: <Rocket className="w-5 h-5" /> },
    { name: 'Government', count: 7, icon: <Shield className="w-5 h-5" /> },
    { name: 'Energy', count: 4, icon: <Zap className="w-5 h-5" /> }
  ];

  const technologies = [
    'AI Consciousness', 'Quantum Computing', 'Autonomous Systems', 'Zero Trust Security',
    'Predictive Analytics', 'Space Robotics', 'Emotional Intelligence', 'Quantum Cryptography'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Real results from real clients. Discover how our cutting-edge AI, quantum computing, 
              and space technology solutions are transforming industries worldwide.
            </p>
            <div className="flex items-center justify-center gap-4 text-cyan-400">
              <Trophy className="w-8 h-8" />
              <span className="text-lg font-semibold">Proven Results, Measurable Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful transformations that showcase the power of next-generation technology.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredCaseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-cyan-400">
                      {study.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-3">{study.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {study.client}
                        </span>
                        <span className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          {study.industry}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">The Challenge</h4>
                      <p className="text-gray-300 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-xl font-semibold text-white mb-3">Our Solution</h4>
                      <p className="text-gray-300 mb-4">{study.solution}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Results & Impact</h4>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                    <div className="text-sm text-gray-400">
                      Team: {study.teamSize} • Duration: {study.duration}
                    </div>
                    <a
                      href="/contact"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to space exploration, we're revolutionizing how industries operate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400">{industry.count} case studies</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional examples of how our solutions are driving transformation across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalCaseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-cyan-400">
                      {study.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">
                      <span className="font-medium">{study.client}</span> • {study.industry}
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <div className="space-y-1">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{study.duration}</span>
                    <span>{study.teamSize} people</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge technology stack delivers unprecedented results for our clients.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already achieving breakthrough results with our 
              AI, quantum computing, and space technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}