import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  Star,
  CheckCircle,
  BarChart3,
  Shield,
  Cloud,
  Brain,
  Zap,
  Globe,
  Factory,
  Building,
  Target,
  Award
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: 8 },
    { id: 'healthcare', name: 'Healthcare', icon: Shield, count: 2 },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: 2 },
    { id: 'retail', name: 'Retail', icon: Globe, count: 1 },
    { id: 'education', name: 'Education', icon: Users, count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Target, count: 8 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 3 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 2 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 2 },
    { id: 'transformation', name: 'Digital Transformation', icon: Zap, count: 1 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Care Optimization',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'MetroHealth Systems faced challenges with patient wait times, resource allocation, and treatment planning efficiency. Manual processes were causing delays and reducing the quality of patient care.',
      solution: 'Implemented a comprehensive AI solution including predictive analytics for patient flow, intelligent resource scheduling, and automated treatment recommendations based on medical history and current symptoms.',
      results: [
        '40% reduction in patient wait times',
        '25% improvement in resource utilization',
        '30% faster treatment planning',
        '95% accuracy in patient flow predictions'
      ],
      metrics: {
        efficiency: '40%',
        costSavings: '$2.1M',
        timeReduction: '30%',
        satisfaction: '95%'
      },
      duration: '6 months',
      teamSize: '8 specialists',
      featured: true
    },
    {
      id: 2,
      title: 'Multi-Cloud Security Infrastructure',
      client: 'Global Financial Corp',
      industry: 'finance',
      service: 'security',
      challenge: 'Global Financial Corp needed to secure their multi-cloud environment across AWS, Azure, and GCP while maintaining compliance with strict financial regulations and protecting sensitive customer data.',
      solution: 'Designed and implemented a comprehensive zero-trust security architecture with advanced threat detection, automated compliance monitoring, and unified security management across all cloud platforms.',
      results: [
        '99.9% security uptime achieved',
        'Zero security breaches in 18 months',
        '100% compliance with financial regulations',
        '60% reduction in security incident response time'
      ],
      metrics: {
        efficiency: '99.9%',
        costSavings: '$1.8M',
        timeReduction: '60%',
        satisfaction: '100%'
      },
      duration: '8 months',
      teamSize: '12 specialists',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Manufacturing Transformation',
      client: 'Precision Manufacturing Co',
      industry: 'manufacturing',
      service: 'transformation',
      challenge: 'Precision Manufacturing Co struggled with outdated production processes, quality control issues, and supply chain inefficiencies that were impacting their competitive position in the market.',
      solution: 'Led a comprehensive digital transformation initiative including IoT sensor integration, predictive maintenance systems, automated quality control, and supply chain optimization using AI and machine learning.',
      results: [
        '35% increase in production efficiency',
        '50% reduction in quality defects',
        '45% improvement in supply chain visibility',
        '25% reduction in operational costs'
      ],
      metrics: {
        efficiency: '35%',
        costSavings: '$3.2M',
        timeReduction: '45%',
        satisfaction: '92%'
      },
      duration: '12 months',
      teamSize: '15 specialists',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud-Native Application Migration',
      client: 'TechStart Solutions',
      industry: 'retail',
      service: 'cloud',
      challenge: 'TechStart Solutions had a legacy monolithic application that was difficult to scale, maintain, and deploy. They needed to modernize their infrastructure to support rapid growth and improve user experience.',
      solution: 'Migrated the monolithic application to a cloud-native microservices architecture using Kubernetes, implemented CI/CD pipelines, and optimized the infrastructure for auto-scaling and high availability.',
      results: [
        '10x faster deployment capability',
        '99.9% system availability',
        '80% reduction in infrastructure costs',
        '5x improvement in development velocity'
      ],
      metrics: {
        efficiency: '80%',
        costSavings: '$1.5M',
        timeReduction: '80%',
        satisfaction: '98%'
      },
      duration: '10 months',
      teamSize: '10 specialists',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Driven Fraud Detection System',
      client: 'SecureBank International',
      industry: 'finance',
      service: 'ai',
      challenge: 'SecureBank International was experiencing increasing fraud attempts and needed a more sophisticated detection system that could identify complex fraud patterns in real-time while reducing false positives.',
      solution: 'Developed and deployed a machine learning-based fraud detection system using advanced algorithms, real-time data processing, and continuous learning capabilities to adapt to new fraud patterns.',
      results: [
        '90% reduction in fraud losses',
        '95% accuracy in fraud detection',
        '70% reduction in false positives',
        'Real-time fraud prevention'
      ],
      metrics: {
        efficiency: '90%',
        costSavings: '$4.5M',
        timeReduction: '95%',
        satisfaction: '96%'
      },
      duration: '7 months',
      teamSize: '9 specialists',
      featured: false
    },
    {
      id: 6,
      title: 'Cybersecurity Compliance Framework',
      client: 'MedTech Innovations',
      industry: 'healthcare',
      service: 'security',
      challenge: 'MedTech Innovations needed to achieve and maintain compliance with multiple healthcare security standards (HIPAA, SOC 2, ISO 27001) while protecting sensitive patient data and intellectual property.',
      solution: 'Implemented a comprehensive security framework including access controls, encryption, monitoring systems, and automated compliance reporting to meet all regulatory requirements.',
      results: [
        '100% compliance with all security standards',
        'Zero security incidents in 24 months',
        'Automated compliance reporting',
        'Enhanced patient data protection'
      ],
      metrics: {
        efficiency: '100%',
        costSavings: '$2.8M',
        timeReduction: '85%',
        satisfaction: '100%'
      },
      duration: '9 months',
      teamSize: '11 specialists',
      featured: false
    },
    {
      id: 7,
      title: 'Predictive Analytics Platform',
      client: 'DataFlow Analytics',
      industry: 'education',
      service: 'ai',
      challenge: 'DataFlow Analytics needed to process and analyze large volumes of educational data to provide insights for improving student outcomes and institutional performance.',
      solution: 'Built a scalable predictive analytics platform using machine learning algorithms, big data processing, and interactive dashboards to provide actionable insights for educators and administrators.',
      results: [
        '85% improvement in data processing speed',
        '90% accuracy in student performance predictions',
        'Real-time analytics dashboards',
        '40% improvement in decision-making efficiency'
      ],
      metrics: {
        efficiency: '85%',
        costSavings: '$1.2M',
        timeReduction: '85%',
        satisfaction: '94%'
      },
      duration: '5 months',
      teamSize: '7 specialists',
      featured: false
    },
    {
      id: 8,
      title: 'Hybrid Cloud Infrastructure',
      client: 'Enterprise Solutions Inc',
      industry: 'manufacturing',
      service: 'cloud',
      challenge: 'Enterprise Solutions Inc needed to modernize their IT infrastructure to support remote work, improve collaboration, and reduce operational costs while maintaining security and compliance.',
      solution: 'Designed and implemented a hybrid cloud solution combining on-premises infrastructure with cloud services, including virtual desktop infrastructure, collaboration tools, and automated backup systems.',
      results: [
        '50% reduction in IT infrastructure costs',
        '99.5% system availability',
        'Seamless remote work capability',
        'Enhanced collaboration tools'
      ],
      metrics: {
        efficiency: '50%',
        costSavings: '$2.4M',
        timeReduction: '70%',
        satisfaction: '97%'
      },
      duration: '11 months',
      teamSize: '13 specialists',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories &
              <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                {' '}Proven Results
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how Zion Tech Group has transformed businesses across industries 
              with innovative solutions that deliver measurable results and lasting impact.
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Industry Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Factory className="w-5 h-5 text-yellow-400 mr-2" />
                  Filter by Industry
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        selectedIndustry === industry.id
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <industry.icon className="w-4 h-4" />
                      {industry.name}
                      <span className="text-xs opacity-75">({industry.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 text-yellow-400 mr-2" />
                  Filter by Service
                </h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        selectedService === service.id
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <service.icon className="w-4 h-4" />
                      {service.name}
                      <span className="text-xs opacity-75">({service.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Success Stories</h2>
              <p className="text-gray-300">Our most impactful transformations and achievements</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:border-yellow-400/50 transition-all duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-sm rounded-full font-medium">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-gray-300 text-sm rounded-full">
                        {services.find(s => s.id === study.service)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4 font-medium">Client: {study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">{study.metrics.efficiency}</div>
                        <div className="text-xs text-gray-400">Efficiency Gain</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">{study.metrics.costSavings}</div>
                        <div className="text-xs text-gray-400">Cost Savings</div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center justify-between text-sm text-gray-400 border-t border-white/20 pt-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.teamSize}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Case Studies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">More Success Stories</h2>
            <p className="text-gray-300">Additional transformations and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden hover:border-yellow-400/50 transition-all duration-200"
              >
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-600 text-white text-xs rounded-full">
                      {industries.find(i => i.id === study.industry)?.name}
                    </span>
                    <span className="px-2 py-1 bg-white/20 text-gray-300 text-xs rounded-full">
                      {services.find(s => s.id === study.service)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 font-medium">Client: {study.client}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Challenge</h4>
                      <p className="text-gray-300 text-xs line-clamp-3">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Solution</h4>
                      <p className="text-gray-300 text-xs line-clamp-3">{study.solution}</p>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                        <span className="line-clamp-1">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-lg font-bold text-yellow-400">{study.metrics.efficiency}</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 rounded">
                      <div className="text-lg font-bold text-yellow-400">{study.metrics.costSavings}</div>
                      <div className="text-xs text-gray-400">Savings</div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-white/20 pt-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {study.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {study.teamSize}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {regularCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-300">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can transform your business and deliver similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}