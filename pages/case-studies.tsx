import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Target, Award, ArrowRight, 
  Star, CheckCircle, Clock, DollarSign, Zap,
  Brain, Atom, Shield, Rocket, Globe
} from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
  const featuredCaseStudies = [
    {
      title: 'Fortune 500 Bank: AI-Powered Risk Management Transformation',
      client: 'Global Financial Institution',
      industry: 'Financial Services',
      challenge: 'Manual risk assessment processes causing delays and inconsistencies in loan approvals',
      solution: 'Implemented AI-powered risk assessment platform with real-time data analysis and predictive modeling',
      results: [
        '85% reduction in risk assessment time',
        '40% improvement in risk prediction accuracy',
        '$50M annual cost savings',
        '99.9% system uptime achieved'
      ],
      technologies: ['AI Risk Assessment', 'Machine Learning', 'Real-time Analytics', 'Predictive Modeling'],
      image: '🏦',
      featured: true
    },
    {
      title: 'Healthcare Network: Autonomous Patient Care System',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Staff shortages and manual processes leading to delayed patient care and increased errors',
      solution: 'Deployed autonomous patient monitoring and care coordination system with AI-powered decision support',
      results: [
        '60% reduction in patient wait times',
        '45% decrease in medical errors',
        '30% improvement in staff efficiency',
        '95% patient satisfaction increase'
      ],
      technologies: ['AI Patient Monitoring', 'Autonomous Systems', 'Healthcare Analytics', 'Decision Support'],
      image: '🏥',
      featured: true
    },
    {
      title: 'Manufacturing Giant: Quantum-Secure Supply Chain',
      client: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Supply chain vulnerabilities and inefficiencies causing production delays and security risks',
      solution: 'Implemented quantum-secure supply chain optimization platform with autonomous monitoring',
      results: [
        '70% improvement in supply chain efficiency',
        'Zero security breaches in 2 years',
        '25% reduction in production delays',
        '$100M annual cost savings'
      ],
      technologies: ['Quantum Security', 'Supply Chain AI', 'Autonomous Monitoring', 'Blockchain'],
      image: '🏭',
      featured: true
    }
  ];

  const caseStudies = [
    {
      title: 'Tech Startup: AI-Powered Customer Success Platform',
      client: 'SaaS Technology Company',
      industry: 'Technology',
      challenge: 'High customer churn due to lack of proactive support and personalized engagement',
      solution: 'Built AI-driven customer success platform with predictive churn analysis and automated engagement',
      results: [
        '35% reduction in customer churn',
        '50% increase in customer lifetime value',
        '80% improvement in support response time',
        '90% customer satisfaction score'
      ],
      technologies: ['AI Customer Success', 'Predictive Analytics', 'Automation', 'Personalization'],
      image: '💻'
    },
    {
      title: 'Retail Chain: Autonomous Inventory Management',
      client: 'National Retail Corporation',
      industry: 'Retail',
      challenge: 'Inefficient inventory management leading to stockouts and overstock situations',
      solution: 'Implemented autonomous inventory management system with AI-powered demand forecasting',
      results: [
        '40% reduction in stockouts',
        '30% decrease in excess inventory',
        '25% improvement in profit margins',
        '50% faster inventory turnover'
      ],
      technologies: ['Autonomous Inventory', 'AI Forecasting', 'Supply Chain Optimization', 'Real-time Analytics'],
      image: '🛍️'
    },
    {
      title: 'Energy Company: Quantum Computing for Grid Optimization',
      client: 'Renewable Energy Provider',
      industry: 'Energy',
      challenge: 'Complex grid optimization problems requiring computational power beyond classical computing',
      solution: 'Developed quantum computing solution for grid optimization and energy distribution',
      results: [
        '60% improvement in grid efficiency',
        '45% reduction in energy waste',
        '30% cost savings in operations',
        '99.99% grid reliability achieved'
      ],
      technologies: ['Quantum Computing', 'Grid Optimization', 'Energy Analytics', 'Predictive Modeling'],
      image: '⚡'
    },
    {
      title: 'Logistics Firm: AI-Powered Route Optimization',
      client: 'International Logistics Company',
      industry: 'Logistics',
      challenge: 'Inefficient route planning causing delays and increased fuel costs',
      solution: 'Implemented AI-powered route optimization system with real-time traffic and weather analysis',
      results: [
        '35% reduction in delivery times',
        '25% decrease in fuel costs',
        '40% improvement in driver efficiency',
        '50% increase in customer satisfaction'
      ],
      technologies: ['AI Route Optimization', 'Real-time Analytics', 'Predictive Modeling', 'IoT Integration'],
      image: '🚚'
    },
    {
      title: 'Insurance Company: Autonomous Claims Processing',
      client: 'Major Insurance Provider',
      industry: 'Insurance',
      challenge: 'Manual claims processing causing delays and inconsistent customer experiences',
      solution: 'Built autonomous claims processing system with AI-powered damage assessment and fraud detection',
      results: [
        '70% faster claims processing',
        '90% accuracy in damage assessment',
        '60% reduction in fraud cases',
        '95% customer satisfaction improvement'
      ],
      technologies: ['Autonomous Claims', 'AI Damage Assessment', 'Fraud Detection', 'Process Automation'],
      image: '🛡️'
    },
    {
      title: 'Education Institution: AI-Powered Learning Platform',
      client: 'University System',
      industry: 'Education',
      challenge: 'One-size-fits-all learning approach not meeting individual student needs',
      solution: 'Developed AI-powered personalized learning platform with adaptive content and progress tracking',
      results: [
        '40% improvement in student performance',
        '60% increase in engagement',
        '35% reduction in dropout rates',
        '90% student satisfaction score'
      ],
      technologies: ['AI Learning Platform', 'Personalization', 'Adaptive Content', 'Progress Analytics'],
      image: '🎓'
    }
  ];

  const industries = [
    { name: 'Financial Services', count: 12, icon: '🏦' },
    { name: 'Healthcare', count: 8, icon: '🏥' },
    { name: 'Manufacturing', count: 15, icon: '🏭' },
    { name: 'Technology', count: 20, icon: '💻' },
    { name: 'Retail', count: 10, icon: '🛍️' },
    { name: 'Energy', count: 6, icon: '⚡' },
    { name: 'Logistics', count: 9, icon: '🚚' },
    { name: 'Insurance', count: 7, icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Real results from real clients. Discover how Zion Tech Group is transforming 
            businesses across industries with AI consciousness and quantum technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#featured"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Featured Cases
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              Start Your Success Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Success Stories
          </motion.h2>
          
          <div className="space-y-12">
            {featuredCaseStudies.map((study, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/30"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-6xl mb-4 text-center">
                      {study.image}
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-bold mb-2">
                        {study.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-2">
                        {study.client}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {study.industry}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">The Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">Our Solution</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-cyan-400">Results Achieved</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
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

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Industries We Transform
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/case-studies/industry/${industry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10 text-center">
                    <div className="text-4xl mb-3">
                      {industry.icon}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {industry.count} case studies
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            All Success Stories
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/case-studies/${study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/10">
                    <div className="text-4xl mb-4 text-center">
                      {study.image}
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {study.challenge}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results</h4>
                      <div className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {study.client}
                      </span>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="text-sm">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the growing list of companies that have transformed their business 
              with Zion Tech Group's AI consciousness and quantum technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}