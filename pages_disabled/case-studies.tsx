import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudies: NextPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');

  const caseStudies = [
    {
      id: 'fintech-ai-fraud-detection',
      title: 'FinTech Revolution: AI-Powered Fraud Detection System',
      company: 'SecureBank Corp',
      industry: 'Financial Services',
      service: 'AI & Machine Learning',
      challenge: 'High fraud rates and false positives in transaction monitoring',
      solution: 'Implemented advanced AI fraud detection system with real-time analysis',
      results: {
        fraudReduction: '89%',
        falsePositives: '76%',
        processingSpeed: '95%',
        costSavings: '$2.4M',
        timeframe: '6 months'
      },
      description: 'SecureBank Corp was experiencing significant losses due to fraudulent transactions and customer dissatisfaction from false positive alerts. Our AI-powered fraud detection system revolutionized their security infrastructure.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Behavioral Analysis', 'Pattern Recognition'],
      metrics: [
        { label: 'Fraud Detection Rate', value: '99.2%', improvement: '+89%' },
        { label: 'False Positives', value: '2.1%', improvement: '-76%' },
        { label: 'Processing Speed', value: '<100ms', improvement: '+95%' },
        { label: 'Annual Savings', value: '$2.4M', improvement: 'New' }
      ],
      testimonial: {
        quote: "Zion Tech Group's AI solution has transformed our fraud detection capabilities. We've seen an 89% reduction in fraud while dramatically improving customer experience.",
        author: 'Sarah Mitchell',
        role: 'Chief Risk Officer',
        avatar: 'SM'
      },
      image: '🛡️',
      featured: true,
      duration: '6 months',
      teamSize: '8 experts'
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'Healthcare Innovation: AI-Powered Medical Diagnostics Platform',
      company: 'MediCore Health System',
      industry: 'Healthcare',
      service: 'AI & Machine Learning',
      challenge: 'Slow diagnostic processes and inconsistent accuracy across different specialists',
      solution: 'Developed AI diagnostic platform with computer vision and predictive analytics',
      results: {
        diagnosticAccuracy: '94%',
        processingTime: '78%',
        patientThroughput: '65%',
        costReduction: '$1.8M',
        timeframe: '8 months'
      },
      description: 'MediCore Health System needed to improve diagnostic accuracy and speed while reducing costs. Our AI-powered medical diagnostics platform delivered exceptional results.',
      technologies: ['Computer Vision', 'Deep Learning', 'Medical Imaging', 'Predictive Analytics'],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '96.7%', improvement: '+94%' },
        { label: 'Processing Time', value: '15 min', improvement: '-78%' },
        { label: 'Patient Throughput', value: '+65%', improvement: '+65%' },
        { label: 'Cost Reduction', value: '$1.8M', improvement: 'Annual' }
      ],
      testimonial: {
        quote: "The AI diagnostics platform has revolutionized our patient care. We're seeing faster, more accurate diagnoses that are saving lives.",
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        avatar: 'MC'
      },
      image: '🏥',
      featured: true,
      duration: '8 months',
      teamSize: '12 experts'
    },
    {
      id: 'ecommerce-cloud-migration',
      title: 'E-commerce Transformation: Cloud Migration & Optimization',
      company: 'RetailMax Global',
      industry: 'E-commerce',
      service: 'Cloud & Infrastructure',
      challenge: 'Legacy infrastructure causing downtime and limiting scalability',
      solution: 'Complete cloud migration with auto-scaling and performance optimization',
      results: {
        uptime: '99.9%',
        loadTimes: '68%',
        scalability: '10x',
        costOptimization: '45%',
        timeframe: '4 months'
      },
      description: 'RetailMax Global was struggling with frequent downtime and slow performance during peak shopping seasons. Our cloud migration strategy delivered remarkable improvements.',
      technologies: ['AWS', 'Kubernetes', 'Auto-scaling', 'Load Balancing', 'CDN'],
      metrics: [
        { label: 'Uptime', value: '99.97%', improvement: '+99.9%' },
        { label: 'Page Load Time', value: '1.2s', improvement: '-68%' },
        { label: 'Scalability', value: '10x', improvement: '1000%' },
        { label: 'Infrastructure Costs', value: '-45%', improvement: '-45%' }
      ],
      testimonial: {
        quote: "Our Black Friday traffic increased 300% with zero downtime. The cloud migration has been transformational for our business.",
        author: 'Jennifer Walsh',
        role: 'CTO',
        avatar: 'JW'
      },
      image: '☁️',
      featured: false,
      duration: '4 months',
      teamSize: '6 experts'
    },
    {
      id: 'manufacturing-iot-automation',
      title: 'Smart Manufacturing: IoT-Powered Production Optimization',
      company: 'TechManufacture Inc',
      industry: 'Manufacturing',
      service: 'IoT & Automation',
      challenge: 'Inefficient production processes and lack of real-time visibility',
      solution: 'Implemented IoT sensors and automation systems for smart manufacturing',
      results: {
        efficiency: '42%',
        downtime: '67%',
        qualityImprovement: '35%',
        energySavings: '28%',
        timeframe: '10 months'
      },
      description: 'TechManufacture Inc needed to modernize their production facilities to compete in the digital age. Our IoT and automation solution transformed their operations.',
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Maintenance', 'Real-time Analytics'],
      metrics: [
        { label: 'Production Efficiency', value: '+42%', improvement: '+42%' },
        { label: 'Unplanned Downtime', value: '-67%', improvement: '-67%' },
        { label: 'Quality Score', value: '98.5%', improvement: '+35%' },
        { label: 'Energy Consumption', value: '-28%', improvement: '-28%' }
      ],
      testimonial: {
        quote: "The smart manufacturing solution has given us unprecedented visibility and control over our production processes.",
        author: 'David Rodriguez',
        role: 'Operations Director',
        avatar: 'DR'
      },
      image: '🏭',
      featured: false,
      duration: '10 months',
      teamSize: '10 experts'
    },
    {
      id: 'startup-devops-platform',
      title: 'Startup Success: Autonomous DevOps Platform Implementation',
      company: 'InnovateTech Startup',
      industry: 'Technology',
      service: 'DevOps & Infrastructure',
      challenge: 'Manual deployment processes causing delays and errors',
      solution: 'Implemented autonomous DevOps platform with CI/CD and self-healing infrastructure',
      results: {
        deploymentSpeed: '85%',
        errorReduction: '92%',
        teamProductivity: '60%',
        timeToMarket: '70%',
        timeframe: '3 months'
      },
      description: 'InnovateTech Startup was struggling with slow, error-prone deployments that were hampering their growth. Our autonomous DevOps platform accelerated their success.',
      technologies: ['CI/CD Pipeline', 'Docker', 'Kubernetes', 'Monitoring', 'Infrastructure as Code'],
      metrics: [
        { label: 'Deployment Speed', value: '< 5 min', improvement: '+85%' },
        { label: 'Deployment Errors', value: '-92%', improvement: '-92%' },
        { label: 'Team Productivity', value: '+60%', improvement: '+60%' },
        { label: 'Time to Market', value: '-70%', improvement: '-70%' }
      ],
      testimonial: {
        quote: "The DevOps platform has been a game-changer. We can now deploy features multiple times per day with complete confidence.",
        author: 'Alex Thompson',
        role: 'Founder & CEO',
        avatar: 'AT'
      },
      image: '🚀',
      featured: false,
      duration: '3 months',
      teamSize: '5 experts'
    }
  ];

  const industries = ['All', 'Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing', 'Technology'];
  const services = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'DevOps & Infrastructure', 'IoT & Automation', 'Cybersecurity'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful client implementations and transformative technology solutions. See how we've helped businesses across industries achieve remarkable results with AI, cloud computing, and digital transformation." />
        <meta name="keywords" content="case studies, client success stories, AI implementation, cloud migration, digital transformation results, technology solutions" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories & Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover how we&apos;ve helped businesses across industries achieve remarkable results through innovative 
            technology solutions. From AI-powered systems to cloud transformations, see the real impact of our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📊 Proven Results</span>
            <span>🏆 Award-Winning Projects</span>
            <span>💼 Industry Leaders</span>
            <span>🎯 Measurable Impact</span>
          </div>
        </div>

        {/* Featured Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{study.image}</div>
                      <div>
                        <div className="text-sm text-blue-600 font-medium">{study.service}</div>
                        <div className="text-xs text-gray-500">{study.industry}</div>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-4">{study.company}</p>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                        <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 italic mb-3">&quot;{study.testimonial.quote}&quot;</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {study.testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-500">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>⏱️ {study.duration}</span>
                      <span>👥 {study.teamSize}</span>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredCaseStudies.length}</span> case studies
            {selectedIndustry !== 'All' && ` in ${selectedIndustry}`}
            {selectedService !== 'All' && ` for ${selectedService}`}
          </p>
        </div>

        {/* All Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{study.image}</div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{study.industry}</div>
                      <div className="text-xs text-blue-600 font-medium">{study.service}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{study.company}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
                  
                  {/* Top 2 Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {study.duration} • {study.teamSize}
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                These numbers represent real results achieved for our clients across various industries and project types.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-lg opacity-90">Client Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg opacity-90">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results with innovative technology solutions 
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;