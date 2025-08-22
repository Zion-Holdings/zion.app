import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, Clock, ArrowRight, 
  Star, CheckCircle, Target, Rocket, Brain, Atom,
  Shield, Globe, Zap, Award, BarChart3, Building
} from 'lucide-react';

export default function CaseStudies() {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Success Platform',
      client: 'Fortune 500 SaaS Company',
      industry: 'Software as a Service',
      challenge: 'High customer churn rate (25%) and manual customer success processes leading to missed renewal opportunities.',
      solution: 'Implemented AI-powered customer success platform with predictive analytics, automated health scoring, and proactive intervention workflows.',
      results: [
        { metric: 'Customer Churn Reduction', value: '68%', improvement: 'decrease' },
        { metric: 'Customer Lifetime Value', value: '142%', improvement: 'increase' },
        { metric: 'Renewal Rate', value: '94%', improvement: 'increase' },
        { metric: 'Customer Success Efficiency', value: '3.2x', improvement: 'improvement' }
      ],
      technologies: ['AI/ML', 'Predictive Analytics', 'Automation', 'CRM Integration'],
      duration: '6 months',
      team: '8 engineers',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Quantum-Secure Cloud Infrastructure',
      client: 'Global Financial Institution',
      industry: 'Financial Services',
      challenge: 'Need for future-proof security infrastructure that can withstand quantum computing attacks while maintaining high performance.',
      solution: 'Designed and implemented quantum-resistant encryption protocols, post-quantum cryptography algorithms, and quantum-secure key management systems.',
      results: [
        { metric: 'Security Posture', value: 'Quantum-Ready', improvement: 'achievement' },
        { metric: 'Performance Impact', value: '<5%', improvement: 'minimal' },
        { metric: 'Compliance Score', value: '99.8%', improvement: 'increase' },
        { metric: 'Future-Proofing', value: '2030+', improvement: 'timeline' }
      ],
      technologies: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Cloud Security', 'Key Management'],
      duration: '12 months',
      team: '12 engineers',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Autonomous Manufacturing Operations',
      client: 'Leading Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Inefficient production lines with frequent downtime, quality issues, and high operational costs.',
      solution: 'Deployed AI-powered autonomous manufacturing system with predictive maintenance, quality control automation, and self-optimizing production lines.',
      results: [
        { metric: 'Production Efficiency', value: '87%', improvement: 'increase' },
        { metric: 'Downtime Reduction', value: '73%', improvement: 'decrease' },
        { metric: 'Quality Defects', value: '91%', improvement: 'decrease' },
        { metric: 'Operational Costs', value: '34%', improvement: 'decrease' }
      ],
      technologies: ['AI/ML', 'IoT Sensors', 'Predictive Maintenance', 'Computer Vision'],
      duration: '18 months',
      team: '15 engineers',
      featured: true,
      image: '/api/placeholder/600/400'
    }
  ];

  const caseStudies = [
    {
      id: 4,
      title: 'AI Content Personalization Engine',
      client: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'Low conversion rates due to generic content and poor user engagement.',
      solution: 'Built AI-powered content personalization system that dynamically adapts content based on user behavior and preferences.',
      results: [
        { metric: 'Conversion Rate', value: '156%', improvement: 'increase' },
        { metric: 'User Engagement', value: '89%', improvement: 'increase' },
        { metric: 'Average Session Time', value: '2.4x', improvement: 'improvement' }
      ],
      technologies: ['AI/ML', 'Content Optimization', 'User Analytics', 'A/B Testing'],
      duration: '4 months',
      team: '6 engineers'
    },
    {
      id: 5,
      title: 'DevOps Automation Platform',
      client: 'Technology Startup',
      industry: 'Technology',
      challenge: 'Slow deployment cycles, manual infrastructure management, and frequent production issues.',
      solution: 'Implemented comprehensive DevOps automation platform with CI/CD pipelines, infrastructure as code, and automated monitoring.',
      results: [
        { metric: 'Deployment Frequency', value: '15x', improvement: 'increase' },
        { metric: 'Lead Time', value: '78%', improvement: 'decrease' },
        { metric: 'Production Incidents', value: '92%', improvement: 'decrease' }
      ],
      technologies: ['Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
      duration: '3 months',
      team: '4 engineers'
    },
    {
      id: 6,
      title: 'Predictive Analytics for Supply Chain',
      client: 'Global Logistics Company',
      industry: 'Logistics',
      challenge: 'Supply chain disruptions, inventory inefficiencies, and poor demand forecasting.',
      solution: 'Developed AI-powered predictive analytics platform for demand forecasting, inventory optimization, and risk assessment.',
      results: [
        { metric: 'Forecast Accuracy', value: '94%', improvement: 'increase' },
        { metric: 'Inventory Costs', value: '28%', improvement: 'decrease' },
        { metric: 'Supply Chain Resilience', value: '3.5x', improvement: 'improvement' }
      ],
      technologies: ['AI/ML', 'Predictive Analytics', 'Supply Chain Optimization', 'Risk Management'],
      duration: '8 months',
      team: '10 engineers'
    },
    {
      id: 7,
      title: 'AI-Powered Cybersecurity Platform',
      client: 'Healthcare Organization',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats, false positives, and manual threat detection processes.',
      solution: 'Deployed AI-powered cybersecurity platform with advanced threat detection, automated response, and behavioral analysis.',
      results: [
        { metric: 'Threat Detection Rate', value: '99.7%', improvement: 'increase' },
        { metric: 'False Positives', value: '87%', improvement: 'decrease' },
        { metric: 'Response Time', value: '95%', improvement: 'decrease' }
      ],
      technologies: ['AI/ML', 'Threat Intelligence', 'Behavioral Analysis', 'Automation'],
      duration: '7 months',
      team: '8 engineers'
    },
    {
      id: 8,
      title: 'Quantum Machine Learning Platform',
      client: 'Research Institution',
      industry: 'Research & Development',
      challenge: 'Need for quantum-enhanced machine learning capabilities for complex scientific computations.',
      solution: 'Built hybrid quantum-classical machine learning platform combining quantum algorithms with classical ML workflows.',
      results: [
        { metric: 'Computational Speed', value: '1000x', improvement: 'improvement' },
        { metric: 'Accuracy Improvement', value: '23%', improvement: 'increase' },
        { metric: 'Research Efficiency', value: '5.2x', improvement: 'improvement' }
      ],
      technologies: ['Quantum Computing', 'Machine Learning', 'Hybrid Algorithms', 'Scientific Computing'],
      duration: '24 months',
      team: '20 engineers'
    }
  ];

  const industries = [
    { name: 'Financial Services', icon: <DollarSign className="w-5 h-5" />, count: 12, color: 'text-green-400' },
    { name: 'Healthcare', icon: <Shield className="w-5 h-5" />, count: 8, color: 'text-blue-400' },
    { name: 'Manufacturing', icon: <Building className="w-5 h-5" />, count: 15, color: 'text-purple-400' },
    { name: 'Technology', icon: <Rocket className="w-5 h-5" />, count: 20, color: 'text-cyan-400' },
    { name: 'Retail', icon: <Globe className="w-5 h-5" />, count: 10, color: 'text-yellow-400' },
    { name: 'Research', icon: <Brain className="w-5 h-5" />, count: 6, color: 'text-pink-400' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real-world results from our AI, quantum computing, and autonomous systems implementations. 
              See how we've transformed businesses across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <TrendingUp className="w-6 h-6" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Award className="w-6 h-6" />
                <span>Industry Leaders</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Success Stories</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-400">Transformative results that demonstrate the power of our technology</p>
          </motion.div>
          
          <div className="space-y-12">
            {featuredCaseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-gray-800/50 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-6">{study.client}</p>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                          <Target className="w-5 h-5 text-red-400" />
                          The Challenge
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                          <Rocket className="w-5 h-5 text-green-400" />
                          Our Solution
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-semibold">{study.duration}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-400">Team Size</div>
                        <div className="text-white font-semibold">{study.team}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 lg:p-12 flex items-center">
                    <div className="w-full">
                      <h4 className="text-2xl font-bold text-white mb-6 text-center">Results</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-black/30 rounded-xl p-4 border border-gray-800/50">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-300 text-sm">{result.metric}</span>
                              <span className="text-2xl font-bold text-cyan-400">{result.value}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-green-400 text-sm font-medium">
                                {result.improvement}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-400">Proven results in diverse sectors and business environments</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={industry.color}>{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{industry.count}</div>
                <div className="text-gray-400">Case Studies</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-400">Additional case studies showcasing our diverse capabilities</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.slice(0, 3).map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{result.value}</div>
                      <div className="text-xs text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    {study.duration} • {study.team}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have transformed their businesses 
              with our AI, quantum computing, and autonomous systems solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}