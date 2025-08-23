import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const caseStudies = [
    {
      id: 'quantum-ai-financial-trading',
      title: 'Quantum AI Revolutionizes Financial Trading',
      company: 'Global Financial Markets Inc.',
      industry: 'Financial Services',
      challenge: 'Traditional trading algorithms were limited by computational power and couldn\'t process complex market patterns in real-time.',
      solution: 'Implemented quantum-enhanced AI trading systems that can analyze thousands of market variables simultaneously.',
      results: [
        '300% increase in trading accuracy',
        '85% reduction in processing time',
        '$2.5B additional revenue generated',
        '99.9% system uptime achieved'
      ],
      technologies: ['Quantum AI', 'Machine Learning', 'Real-time Analytics', 'High-Frequency Trading'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'autonomous-manufacturing-optimization',
      title: 'Autonomous Manufacturing Optimization',
      company: 'Advanced Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues were causing 15% waste and 20% downtime.',
      solution: 'Deployed autonomous AI systems for predictive maintenance, quality control, and production optimization.',
      results: [
        '40% increase in production efficiency',
        '60% reduction in downtime',
        '25% improvement in product quality',
        '30% reduction in energy consumption'
      ],
      technologies: ['Computer Vision', 'IoT Sensors', 'Predictive Analytics', 'Robotic Process Automation'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'sustainable-energy-management',
      title: 'Sustainable Energy Management System',
      company: 'Green Energy Solutions',
      industry: 'Energy',
      challenge: 'Inefficient energy distribution and lack of real-time optimization was causing 25% energy waste.',
      solution: 'Implemented AI-powered smart grid management with autonomous load balancing and renewable energy integration.',
      results: [
        '35% reduction in energy waste',
        '50% increase in renewable energy utilization',
        '40% improvement in grid stability',
        '$15M annual cost savings'
      ],
      technologies: ['Smart Grid AI', 'Renewable Energy Integration', 'Predictive Analytics', 'IoT Infrastructure'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'healthcare-diagnostic-automation',
      title: 'AI-Powered Healthcare Diagnostics',
      company: 'Metropolitan Health Systems',
      industry: 'Healthcare',
      challenge: 'Manual diagnostic processes were slow and error-prone, leading to delayed treatments and misdiagnoses.',
      solution: 'Deployed autonomous AI diagnostic systems with computer vision and natural language processing.',
      results: [
        '90% reduction in diagnostic time',
        '95% accuracy in disease detection',
        '60% improvement in patient outcomes',
        '40% reduction in healthcare costs'
      ],
      technologies: ['Computer Vision', 'Natural Language Processing', 'Medical AI', 'Predictive Analytics'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'logistics-automation-transformation',
      title: 'Logistics Automation Transformation',
      company: 'Global Logistics Network',
      industry: 'Logistics',
      challenge: 'Complex supply chain operations were causing delays, inefficiencies, and increased costs.',
      solution: 'Implemented autonomous logistics systems with predictive routing, automated warehousing, and real-time tracking.',
      results: [
        '45% improvement in delivery times',
        '30% reduction in operational costs',
        '99.5% delivery accuracy',
        '50% increase in warehouse efficiency'
      ],
      technologies: ['Autonomous Vehicles', 'Predictive Routing', 'Warehouse Automation', 'Real-time Tracking'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'retail-customer-experience',
      title: 'AI-Enhanced Retail Customer Experience',
      company: 'NextGen Retail Solutions',
      industry: 'Retail',
      challenge: 'Traditional retail systems couldn\'t provide personalized experiences or optimize inventory in real-time.',
      solution: 'Deployed AI-powered customer analytics, autonomous inventory management, and personalized marketing systems.',
      results: [
        '65% increase in customer satisfaction',
        '40% improvement in inventory turnover',
        '35% increase in average order value',
        '50% reduction in stockouts'
      ],
      technologies: ['Customer Analytics', 'Inventory AI', 'Personalization Engine', 'Predictive Marketing'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'cybersecurity-threat-detection',
      title: 'Advanced Cybersecurity Threat Detection',
      company: 'SecureNet Technologies',
      industry: 'Cybersecurity',
      challenge: 'Traditional security systems couldn\'t detect sophisticated cyber threats in real-time.',
      solution: 'Implemented autonomous AI security systems with behavioral analysis and predictive threat detection.',
      results: [
        '99.9% threat detection accuracy',
        '90% reduction in false positives',
        'Real-time threat response',
        'Zero successful breaches in 18 months'
      ],
      technologies: ['Behavioral Analytics', 'Threat Intelligence', 'Machine Learning', 'Real-time Monitoring'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'agriculture-precision-farming',
      title: 'Precision Agriculture with AI',
      company: 'SmartFarm Innovations',
      industry: 'Agriculture',
      challenge: 'Traditional farming methods were inefficient and couldn\'t optimize resource usage or crop yields.',
      solution: 'Deployed autonomous farming systems with drone monitoring, soil analysis, and predictive irrigation.',
      results: [
        '50% increase in crop yields',
        '40% reduction in water usage',
        '30% decrease in fertilizer costs',
        '25% improvement in crop quality'
      ],
      technologies: ['Drone Technology', 'Soil Analysis AI', 'Predictive Irrigation', 'Crop Monitoring'],
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const industries = ['All', 'Financial Services', 'Manufacturing', 'Energy', 'Healthcare', 'Logistics', 'Retail', 'Cybersecurity', 'Agriculture'];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world success stories of AI automation implementation across industries. See how organizations achieved remarkable results with autonomous systems." />
        <meta property="og:title" content="Case Studies | Zion Tech Group - AI & Automation Success Stories" />
        <meta property="og:description" content="Explore real-world success stories of AI automation implementation across industries." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Real-world examples of how AI automation and autonomous systems are transforming 
                industries and delivering measurable business value.
              </p>
            </header>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === industry
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            
            {/* Featured Case Studies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.filter(study => study.featured).map((study) => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-white/80 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Solution</h4>
                      <p className="text-white/80 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-green-400 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                    >
                      Read Full Case Study
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* All Case Studies */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.filter(study => !study.featured).map((study) => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{study.company}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">Challenge</h4>
                      <p className="text-white/80 text-sm line-clamp-3">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-400 mb-2 text-sm">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-white/80 text-xs">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            +{study.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Join the organizations already achieving remarkable results with AI automation. 
                  Let's discuss how autonomous systems can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Your Transformation
                  </Link>
                  <Link 
                    href="/services"
                    className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Let us help you achieve similar results with AI automation. Our team of experts 
                  will work with you to design and implement intelligent solutions tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    href="/services" 
                    className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Financial Services Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                      Financial Services
                    </span>
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 text-sm rounded-full border border-red-400/30">
                      Fraud Detection
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-blue-400">
                    Real-Time Fraud Detection System
                  </h2>
                  <p className="text-white/80 mb-6">
                    A major credit card company needed to upgrade their fraud detection capabilities to handle 
                    increasing transaction volumes while maintaining high accuracy and reducing false positives.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-blue-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Existing rule-based systems were generating too many false positives, leading to 
                        customer frustration and increased operational costs for manual review processes.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Implemented a hybrid AI system combining deep learning models with traditional 
                        rule-based logic, featuring real-time learning and adaptive thresholds.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 85% reduction in false positives</li>
                        <li>• 60% faster fraud detection</li>
                        <li>• $2.3M annual cost savings</li>
                        <li>• 99.7% fraud detection accuracy</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">AI Models</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• LSTM networks for sequence modeling</li>
                        <li>• Random Forest for feature importance</li>
                        <li>• Gradient Boosting for ensemble learning</li>
                        <li>• AutoML for hyperparameter optimization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">Real-Time Processing</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Apache Kafka for stream processing</li>
                        <li>• Redis for caching and session management</li>
                        <li>• Microservices architecture</li>
                        <li>• Horizontal scaling capabilities</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">Security Features</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• End-to-end encryption</li>
                        <li>• Multi-factor authentication</li>
                        <li>• Audit logging and monitoring</li>
                        <li>• Compliance with PCI DSS standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-400/20 text-orange-400 text-sm rounded-full border border-orange-400/30">
                      Manufacturing
                    </span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      Predictive Maintenance
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-orange-400">
                    Predictive Maintenance for Industrial Equipment
                  </h2>
                  <p className="text-white/80 mb-6">
                    A global manufacturing company wanted to reduce unplanned downtime and optimize 
                    maintenance schedules using IoT sensors and AI-powered predictive analytics.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-orange-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Equipment failures were causing millions in lost production time annually, 
                        with reactive maintenance approaches proving costly and inefficient.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Deployed IoT sensors across critical equipment and implemented machine learning 
                        models to predict failures weeks in advance, enabling proactive maintenance.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 70% reduction in unplanned downtime</li>
                        <li>• 45% decrease in maintenance costs</li>
                        <li>• 90% accuracy in failure prediction</li>
                        <li>• $4.2M annual cost savings</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-200 mb-2">IoT Infrastructure</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 500+ IoT sensors across 15 facilities</li>
                        <li>• Real-time data collection every 30 seconds</li>
                        <li>• Edge computing for local processing</li>
                        <li>• 5G connectivity for low-latency transmission</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-200 mb-2">AI Models</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Time series forecasting with Prophet</li>
                        <li>• Anomaly detection using Isolation Forest</li>
                        <li>• Survival analysis for equipment lifetime</li>
                        <li>• Ensemble methods for improved accuracy</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-200 mb-2">Analytics Platform</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Real-time dashboards and alerts</li>
                        <li>• Mobile app for field technicians</li>
                        <li>• Integration with CMMS systems</li>
                        <li>• Automated report generation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Retail Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                      Retail
                    </span>
                    <span className="px-3 py-1 bg-pink-400/20 text-pink-400 text-sm rounded-full border border-pink-400/30">
                      Customer Experience
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-purple-400">
                    AI-Powered Customer Experience Platform
                  </h2>
                  <p className="text-white/80 mb-6">
                    A major retail chain wanted to personalize customer experiences across all touchpoints, 
                    from online shopping to in-store interactions, using AI-driven insights and automation.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Customer data was siloed across multiple systems, making it impossible to deliver 
                        personalized experiences and leading to declining customer satisfaction scores.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Built a unified customer data platform with AI-powered recommendation engines, 
                        predictive analytics, and automated personalization across all channels.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 35% increase in customer lifetime value</li>
                        <li>• 50% improvement in conversion rates</li>
                        <li>• 25% reduction in customer churn</li>
                        <li>• 40% increase in average order value</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-200 mb-2">Data Platform</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Real-time data streaming with Apache Kafka</li>
                        <li>• Data lake architecture on AWS S3</li>
                        <li>• Real-time analytics with Apache Spark</li>
                        <li>• Customer 360 data model</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-200 mb-2">AI Features</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Collaborative filtering recommendations</li>
                        <li>• Natural language processing for chatbots</li>
                        <li>• Computer vision for in-store analytics</li>
                        <li>• Predictive customer behavior modeling</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-200 mb-2">Integration</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• API-first architecture</li>
                        <li>• Real-time synchronization</li>
                        <li>• Multi-channel orchestration</li>
                        <li>• A/B testing framework</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/20 text-center">
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                These case studies demonstrate the real impact our AI and automation solutions can have on your business. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold text-lg transition-colors">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold text-lg transition-colors border border-white/20">
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default CaseStudies;