import React from 'react';
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
      challenge: 'Global Manufacturing Corp faced significant production inefficiencies and frequent equipment downtime, resulting in missed deadlines and increased operational costs.',
      solution: 'We deployed an integrated AI automation system that included predictive maintenance, real-time quality control, and autonomous production line optimization.',
      impact: [
        '40% increase in overall production efficiency',
        '60% reduction in unplanned downtime',
        '25% improvement in product quality',
        '30% reduction in operational costs',
        '99.5% system uptime achieved'
      ],
      technologies: ['Machine Learning', 'IoT Sensors', 'Predictive Analytics', 'Computer Vision', 'Robotic Process Automation'],
      duration: '6 months',
      team: '8 engineers + 3 AI specialists'
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      challenge: 'A growing digital marketing agency struggled to meet the increasing demand for high-quality, personalized content across multiple channels and languages.',
      solution: 'We developed an autonomous content generation system that could create, optimize, and distribute content while maintaining brand voice and quality standards.',
      impact: [
        '10x increase in content production capacity',
        '85% improvement in audience engagement',
        '70% reduction in content creation time',
        'Support for 15+ languages',
        '24/7 content generation capability'
      ],
      technologies: ['Natural Language Processing', 'Content Optimization', 'Multi-language Support', 'Brand Voice Training', 'Automated Distribution'],
      duration: '4 months',
      team: '6 engineers + 2 content strategists'
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      challenge: 'A rapidly growing e-commerce platform experienced skyrocketing cloud costs and frequent performance issues during peak traffic periods.',
      solution: 'We implemented a comprehensive cloud optimization strategy including auto-scaling, load balancing, and intelligent resource management.',
      impact: [
        '50% reduction in cloud infrastructure costs',
        '99.9% uptime achieved',
        '3x improvement in peak traffic handling',
        'Automated scaling based on demand',
        'Real-time performance monitoring'
      ],
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana', 'Auto-scaling'],
      duration: '5 months',
      team: '10 DevOps engineers + 2 cloud architects'
    },
    {
      id: 'financial-automation-system',
      title: 'Intelligent Financial Automation',
      company: 'Regional Bank',
      industry: 'Finance',
      results: '90% automation of routine tasks, 70% faster processing',
      description: 'Implementing AI-driven financial processing and compliance automation.',
      challenge: 'A regional bank struggled with manual financial processing, compliance reporting, and fraud detection, leading to delays and increased risk.',
      solution: 'We developed an intelligent financial automation system that handled routine transactions, compliance checks, and fraud detection automatically.',
      impact: [
        '90% automation of routine financial tasks',
        '70% faster transaction processing',
        '99.9% accuracy in fraud detection',
        'Real-time compliance monitoring',
        'Significant reduction in operational risk'
      ],
      technologies: ['Machine Learning', 'Blockchain', 'RegTech', 'Natural Language Processing', 'Real-time Analytics'],
      duration: '8 months',
      team: '12 engineers + 4 financial experts + 2 compliance specialists'
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI-Powered Healthcare Diagnostics',
      company: 'Regional Hospital Network',
      industry: 'Healthcare',
      results: '95% diagnostic accuracy, 40% faster diagnosis',
      description: 'Revolutionizing patient care through AI-powered diagnostic assistance.',
      challenge: 'A regional hospital network faced challenges with diagnostic accuracy, long wait times, and the need to handle increasing patient volumes.',
      solution: 'We implemented an AI diagnostic assistance system that could analyze medical images, patient data, and symptoms to provide accurate preliminary diagnoses.',
      impact: [
        '95% diagnostic accuracy achieved',
        '40% faster diagnosis and treatment planning',
        '30% reduction in diagnostic errors',
        'Improved patient outcomes',
        'Enhanced doctor productivity'
      ],
      technologies: ['Computer Vision', 'Deep Learning', 'Medical Imaging AI', 'Natural Language Processing', 'Predictive Analytics'],
      duration: '12 months',
      team: '15 engineers + 8 medical professionals + 3 AI researchers'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Intelligence Platform',
      company: 'Global Retail Chain',
      industry: 'Retail',
      results: '35% reduction in supply chain costs, 99% on-time delivery',
      description: 'Building an intelligent supply chain that predicts demand and optimizes logistics.',
      challenge: 'A global retail chain struggled with supply chain inefficiencies, stockouts, and delayed deliveries affecting customer satisfaction.',
      solution: 'We developed an intelligent supply chain platform that used AI to predict demand, optimize inventory, and streamline logistics operations.',
      impact: [
        '35% reduction in supply chain costs',
        '99% on-time delivery rate',
        '50% reduction in stockouts',
        'Real-time inventory optimization',
        'Predictive demand forecasting'
      ],
      technologies: ['Predictive Analytics', 'Machine Learning', 'IoT Sensors', 'Blockchain', 'Real-time Tracking'],
      duration: '10 months',
      team: '14 engineers + 5 supply chain experts + 2 data scientists'
    }
  ];

  const industries = ['All', 'Manufacturing', 'Marketing', 'Technology', 'Finance', 'Healthcare', 'Retail'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world success stories of AI automation implementation across various industries." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories of AI automation implementation." />
        <meta name="twitter:card" content="summary_large_image" />
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
                Real-world examples of how our AI automation solutions have transformed businesses 
                across industries and delivered measurable results.
              </p>
            </header>

            {/* Featured Case Study */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Featured Success Story</h2>
              <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        Manufacturing
                      </span>
                      <span className="text-white/60 text-sm">Featured Case Study</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">AI-Powered Manufacturing Automation</h3>
                    <p className="text-cyan-400 font-semibold mb-3">Global Manufacturing Corp</p>
                    <p className="text-white/80 mb-6">
                      How we implemented autonomous AI systems to revolutionize manufacturing processes, 
                      achieving 40% increase in production efficiency and 60% reduction in downtime.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-white/80 text-sm">40% increase in production efficiency</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-white/80 text-sm">60% reduction in downtime</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-white/80 text-sm">99.5% system uptime achieved</span>
                      </div>
                    </div>
                    <Link 
                      href="#ai-automation-manufacturing"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                    >
                      Read Full Case Study
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Technologies Used</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="px-3 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-lg border border-cyan-400/30 text-center">
                        Machine Learning
                      </span>
                      <span className="px-3 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-lg border border-cyan-400/30 text-center">
                        IoT Sensors
                      </span>
                      <span className="px-3 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-lg border border-cyan-400/30 text-center">
                        Predictive Analytics
                      </span>
                      <span className="px-3 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-lg border border-cyan-400/30 text-center">
                        Computer Vision
                      </span>
                    </div>
                    <div className="mt-6 p-4 bg-white/5 rounded-lg">
                      <p className="text-white/80 text-sm">
                        <strong>Project Duration:</strong> 6 months<br/>
                        <strong>Team Size:</strong> 8 engineers + 3 AI specialists
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* All Case Studies */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">All Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study) => (
                  <div key={study.id} id={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {study.industry}
                      </span>
                      <span className="text-white/60 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{study.company}</p>
                    <p className="text-white/80 mb-4">{study.description}</p>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-400 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-blue-400 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-400 mb-2">Impact</h4>
                      <ul className="space-y-1">
                        {study.impact.map((result, index) => (
                          <li key={index} className="text-white/70 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-purple-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded border border-purple-400/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                      >
                        Read Full Case Study
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="mt-20 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI automation solutions can transform your business 
                  and deliver measurable results like the success stories above.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    href="/services" 
                    className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}