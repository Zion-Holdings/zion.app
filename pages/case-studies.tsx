import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Platform',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      description: 'Developed an intelligent e-commerce platform with AI-powered product recommendations, automated inventory management, and personalized customer experiences.',
      results: [
        '45% increase in conversion rates',
        '30% reduction in cart abandonment',
        '60% improvement in customer satisfaction',
        'Automated 80% of customer support queries'
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      image: '🛒',
      color: 'text-cyan-400',
    },
    {
      title: 'Healthcare Data Analytics Platform',
      company: 'MediTech Solutions',
      industry: 'Healthcare',
      description: 'Built a comprehensive healthcare analytics platform that processes patient data securely while providing actionable insights for medical professionals.',
      results: [
        'Real-time patient monitoring',
        '95% accuracy in diagnosis predictions',
        'Compliant with HIPAA regulations',
        'Reduced diagnosis time by 40%'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'MongoDB'],
      image: '🏥',
      color: 'text-fuchsia-400',
    },
    {
      title: 'Financial Services Automation',
      company: 'FinFlow Capital',
      industry: 'Fintech',
      description: 'Implemented intelligent automation systems for financial services, including fraud detection, risk assessment, and automated trading algorithms.',
      results: [
        '99.9% fraud detection accuracy',
        '50% faster risk assessment',
        'Automated 90% of routine tasks',
        'Increased trading efficiency by 35%'
      ],
      technologies: ['Python', 'PyTorch', 'Kubernetes', 'Redis', 'PostgreSQL'],
      image: '💳',
      color: 'text-green-400',
    },
    {
      title: 'Manufacturing IoT Platform',
      company: 'SmartManufacture Co.',
      industry: 'Manufacturing',
      description: 'Created an IoT platform for smart manufacturing with predictive maintenance, quality control automation, and real-time production monitoring.',
      results: [
        '25% reduction in downtime',
        '30% improvement in product quality',
        'Real-time production insights',
        'Automated quality control processes'
      ],
      technologies: ['Node.js', 'React', 'TensorFlow', 'Docker', 'InfluxDB'],
      image: '🏭',
      color: 'text-orange-400',
    },
    {
      title: 'Educational AI Platform',
      company: 'EduTech Innovations',
      industry: 'Education',
      description: 'Developed an AI-powered educational platform that personalizes learning experiences and provides intelligent tutoring for students.',
      results: [
        'Personalized learning paths',
        '40% improvement in student performance',
        'Automated grading system',
        '24/7 intelligent tutoring support'
      ],
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
      image: '🎓',
      color: 'text-purple-400',
    },
    {
      title: 'Logistics Optimization System',
      company: 'LogiTech Solutions',
      industry: 'Logistics',
      description: 'Built an intelligent logistics platform that optimizes routes, predicts delivery times, and automates warehouse operations.',
      results: [
        '20% reduction in delivery costs',
        '35% improvement in delivery accuracy',
        'Automated warehouse operations',
        'Real-time tracking and optimization'
      ],
      technologies: ['Python', 'React', 'TensorFlow', 'PostgreSQL', 'Redis'],
      image: '🚚',
      color: 'text-blue-400',
    },
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories & Results</title>
        <meta name="description" content="Explore real-world success stories and results from our AI-powered solutions across various industries including e-commerce, healthcare, fintech, and more." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Success stories and results from our AI-powered solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,162,255,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container-cursor text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text-white leading-tight tracking-tight">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Real-world success stories showcasing the transformative power of our AI-powered solutions
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,122,204,0.03),transparent_50%)]" />
        
        <div className="container-cursor relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 hover-lift relative overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cursor-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-4xl mb-6 text-center">{study.image}</div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cursor-blue transition-colors duration-300 relative z-10">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm relative z-10">
                  {study.company}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  {study.description}
                </p>
                
                <div className="mb-6 relative z-10">
                  <h4 className="font-semibold text-white mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cursor-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 relative z-10">
                  <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-br from-cursor-blue to-blue-600 group-hover:w-full transition-all duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Success by the Numbers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantified results from our client projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', color: 'text-cyan-400' },
              { number: '95%', label: 'Client Satisfaction', color: 'text-fuchsia-400' },
              { number: '40%', label: 'Average Efficiency Gain', color: 'text-green-400' },
              { number: '24/7', label: 'Support Availability', color: 'text-blue-400' },
            ].map((metric, index) => (
              <Card
                key={index}
                className="text-center group hover:border-blue-400/30"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
                  {metric.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400">
              Direct feedback from the businesses we&apos;ve transformed
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                quote: "Zion Tech Group transformed our e-commerce platform with AI-powered recommendations. The results exceeded our expectations.",
                author: "Sarah Johnson",
                position: "CTO, TechRetail Inc.",
                company: "TechRetail Inc."
              },
              {
                quote: "Their healthcare analytics platform has revolutionized how we process patient data and make diagnostic decisions.",
                author: "Dr. Michael Chen",
                position: "Chief Medical Officer",
                company: "MediTech Solutions"
              },
              {
                quote: "The automation systems they built have streamlined our operations and significantly reduced costs.",
                author: "David Rodriguez",
                position: "Operations Director",
                company: "FinFlow Capital"
              }
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 group hover:border-blue-400/30"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-4xl text-blue-400 mb-4">&quot;</div>
                <blockquote className="text-lg text-gray-300 mb-6 italic">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
                         Let&apos;s discuss how we can transform your business with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Your Project
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}