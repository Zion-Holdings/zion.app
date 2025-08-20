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

  const industries = ['All', 'E-commerce', 'Healthcare', 'Fintech', 'Manufacturing', 'Education', 'Logistics'];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing how Zion Tech Group has transformed businesses with AI-powered solutions." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and transformations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world success stories showcasing how we&apos;ve transformed businesses with AI-powered solutions
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 border border-gray-700 hover:border-blue-500"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group hover:border-blue-400/30 overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {study.image}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className={`text-sm font-medium ${study.color}`}>
                    {study.company}
                  </p>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  href="#"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  View Full Case Study
                </Button>
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