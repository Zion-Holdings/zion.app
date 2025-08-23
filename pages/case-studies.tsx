import React from 'next/react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      challenge: 'Traditional manufacturing processes were inefficient with high downtime and inconsistent quality.',
      solution: 'Deployed AI-powered predictive maintenance, quality control automation, and intelligent production scheduling.',
      technologies: ['Computer Vision', 'Predictive Analytics', 'IoT Sensors', 'Machine Learning'],
      metrics: [
        { label: 'Production Efficiency', value: '+40%', change: 'positive' },
        { label: 'Downtime Reduction', value: '-60%', change: 'positive' },
        { label: 'Quality Defects', value: '-75%', change: 'positive' },
        { label: 'Energy Consumption', value: '-25%', change: 'positive' }
      ],
      duration: '6 months',
      teamSize: '8 engineers'
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      challenge: 'Manual content creation couldn\'t keep up with demand, leading to missed opportunities and inconsistent quality.',
      solution: 'Built an AI-powered content generation platform with automated research, writing, and optimization.',
      technologies: ['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'A/B Testing'],
      metrics: [
        { label: 'Content Output', value: '10x', change: 'positive' },
        { label: 'Engagement Rate', value: '+85%', change: 'positive' },
        { label: 'SEO Rankings', value: '+60%', change: 'positive' },
        { label: 'Content Costs', value: '-70%', change: 'positive' }
      ],
      duration: '4 months',
      teamSize: '5 engineers'
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      challenge: 'Manual infrastructure management led to high costs, frequent outages, and poor performance during traffic spikes.',
      solution: 'Implemented autonomous cloud infrastructure with auto-scaling, predictive scaling, and intelligent cost optimization.',
      technologies: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Machine Learning'],
      metrics: [
        { label: 'Cloud Costs', value: '-50%', change: 'positive' },
        { label: 'Uptime', value: '99.9%', change: 'positive' },
        { label: 'Response Time', value: '-40%', change: 'positive' },
        { label: 'Deployment Time', value: '-80%', change: 'positive' }
      ],
      duration: '8 months',
      teamSize: '12 engineers'
    },
    {
      id: 'healthcare-diagnostic-automation',
      title: 'Healthcare Diagnostic Automation',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      results: '90% accuracy in early disease detection, 3x faster diagnosis',
      description: 'Revolutionizing medical diagnostics through AI-powered image analysis and patient data processing.',
      challenge: 'Manual diagnostic processes were slow, error-prone, and couldn\'t handle the volume of patient data.',
      solution: 'Developed AI systems for medical image analysis, patient data correlation, and diagnostic assistance.',
      technologies: ['Computer Vision', 'Deep Learning', 'Natural Language Processing', 'Predictive Analytics'],
      metrics: [
        { label: 'Diagnostic Accuracy', value: '90%', change: 'positive' },
        { label: 'Diagnosis Speed', value: '3x faster', change: 'positive' },
        { label: 'False Positives', value: '-40%', change: 'positive' },
        { label: 'Patient Wait Times', value: '-60%', change: 'positive' }
      ],
      duration: '12 months',
      teamSize: '15 engineers'
    },
    {
      id: 'financial-trading-automation',
      title: 'Financial Trading Automation',
      company: 'Investment Firm',
      industry: 'Finance',
      results: '35% increase in portfolio returns, 80% reduction in trading errors',
      description: 'Building autonomous trading systems that adapt to market conditions in real-time.',
      challenge: 'Human traders couldn\'t process market data fast enough, leading to missed opportunities and costly errors.',
      solution: 'Developed AI-powered trading algorithms with real-time market analysis, risk management, and automated execution.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Risk Management', 'Algorithmic Trading'],
      metrics: [
        { label: 'Portfolio Returns', value: '+35%', change: 'positive' },
        { label: 'Trading Errors', value: '-80%', change: 'positive' },
        { label: 'Response Time', value: '-95%', change: 'positive' },
        { label: 'Risk Management', value: '+50%', change: 'positive' }
      ],
      duration: '10 months',
      teamSize: '10 engineers'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Optimization',
      company: 'Global Retail Chain',
      industry: 'Retail',
      results: '30% reduction in logistics costs, 99.5% on-time delivery',
      description: 'Creating intelligent supply chain systems that predict demand and optimize logistics.',
      challenge: 'Complex supply chains with multiple suppliers and distribution centers led to inefficiencies and delays.',
      solution: 'Implemented AI-powered demand forecasting, route optimization, and inventory management systems.',
      technologies: ['Predictive Analytics', 'Route Optimization', 'Inventory Management', 'IoT Integration'],
      metrics: [
        { label: 'Logistics Costs', value: '-30%', change: 'positive' },
        { label: 'On-time Delivery', value: '99.5%', change: 'positive' },
        { label: 'Inventory Turnover', value: '+45%', change: 'positive' },
        { label: 'Supplier Performance', value: '+60%', change: 'positive' }
      ],
      duration: '9 months',
      teamSize: '14 engineers'
    }
  ];

  const industries = ['All', 'Manufacturing', 'Marketing', 'Technology', 'Healthcare', 'Finance', 'Retail'];
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world AI automation success stories across industries. See how organizations achieved remarkable results through intelligent automation." />
        <meta property="og:title" content="Case Studies | Zion Tech Group - AI & Automation Success Stories" />
        <meta property="og:description" content="Explore real-world AI automation success stories across industries." />
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
                AI Automation Success Stories
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Real-world examples of how organizations across industries are achieving remarkable results 
                through intelligent automation and autonomous systems
              </p>
            </header>

            {/* Industry Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                      selectedIndustry === industry
                        ? 'bg-cyan-400 text-white border-cyan-400'
                        : 'bg-white/10 text-white/80 border-white/20 hover:border-cyan-400/30 hover:text-cyan-400'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </section>

            {/* Case Studies Grid */}
            <section className="mb-20">
              <div className="grid gap-8">
                {filteredCaseStudies.map((study) => (
                  <div key={study.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left Column - Overview */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                            {study.industry}
                          </span>
                          <span className="text-white/60 text-sm">{study.duration}</span>
                          <span className="text-white/60 text-sm">•</span>
                          <span className="text-white/60 text-sm">{study.teamSize}</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-3 text-white">{study.title}</h2>
                        <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                        <p className="text-white/80 mb-6">{study.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-red-400 mb-2">Challenge</h4>
                            <p className="text-white/70 text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-400 mb-2">Solution</h4>
                            <p className="text-white/70 text-sm">{study.solution}</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-blue-400 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Column - Results */}
                      <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-green-400">Results</h3>
                        <div className="space-y-4">
                          {study.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-4 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10">
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-white/70 text-sm">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 rounded-xl border border-cyan-400/20">
                          <h4 className="font-semibold text-cyan-400 mb-2">Key Achievement</h4>
                          <p className="text-white/80 text-sm">{study.results}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        Read Full Case Study
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Metrics Summary */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Collective Impact</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-xl border border-green-400/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-white/80">Industries Transformed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.5M+</div>
                  <div className="text-white/80">Annual Cost Savings</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-400/10 to-purple-500/10 rounded-xl border border-purple-400/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-white/80">Average Efficiency Gain</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-cyan-500/10 rounded-xl border border-cyan-400/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-white/80">System Reliability</div>
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