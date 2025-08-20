import React from 'react';
import Head from 'next/head';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Global E-commerce Platform',
      company: 'TechCorp International',
      description: 'Transformed a legacy e-commerce system into a modern, AI-powered platform with 300% increase in conversion rates.',
      results: [
        '300% increase in conversion rates',
        '50% reduction in cart abandonment',
        '99.9% uptime achieved',
        '40% faster page load times'
      ],
      technologies: ['Next.js', 'AI/ML', 'Cloud Infrastructure', 'Performance Optimization'],
      image: '🛒',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      title: 'Healthcare AI Platform',
      company: 'MedTech Solutions',
      description: 'Developed an AI-powered diagnostic platform that improved diagnostic accuracy by 85% and reduced diagnosis time by 60%.',
      results: [
        '85% improvement in diagnostic accuracy',
        '60% reduction in diagnosis time',
        'Real-time patient monitoring',
        'HIPAA compliant architecture'
      ],
      technologies: ['AI/ML', 'Healthcare APIs', 'Real-time Analytics', 'Security'],
      image: '🏥',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      title: 'Financial Services Automation',
      company: 'FinTech Innovations',
      description: 'Built an autonomous financial trading platform that processes millions of transactions daily with zero downtime.',
      results: [
        'Zero downtime in 12 months',
        '10M+ daily transactions',
        '99.99% accuracy rate',
        'Real-time fraud detection'
      ],
      technologies: ['Blockchain', 'AI/ML', 'Real-time Processing', 'Security'],
      image: '💳',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
    },
    {
      title: 'Manufacturing IoT Platform',
      company: 'SmartManufacturing Inc',
      description: 'Created an IoT platform that reduced production costs by 30% and increased efficiency by 45% through predictive maintenance.',
      results: [
        '30% reduction in production costs',
        '45% increase in efficiency',
        'Predictive maintenance alerts',
        'Real-time production monitoring'
      ],
      technologies: ['IoT', 'AI/ML', 'Cloud Infrastructure', 'Data Analytics'],
      image: '🏭',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      title: 'Educational Technology Platform',
      company: 'EduTech Global',
      description: 'Developed a personalized learning platform that improved student engagement by 200% and learning outcomes by 75%.',
      results: [
        '200% increase in student engagement',
        '75% improvement in learning outcomes',
        'Personalized learning paths',
        'Real-time progress tracking'
      ],
      technologies: ['AI/ML', 'Educational APIs', 'Data Analytics', 'Mobile Apps'],
      image: '🎓',
      color: 'bg-gradient-to-br from-red-400 to-pink-500',
    },
    {
      title: 'Logistics Optimization System',
      company: 'LogiTech Solutions',
      description: 'Built an AI-powered logistics platform that reduced delivery times by 40% and increased route efficiency by 60%.',
      results: [
        '40% reduction in delivery times',
        '60% increase in route efficiency',
        'Real-time tracking and updates',
        'Predictive route optimization'
      ],
      technologies: ['AI/ML', 'GPS Integration', 'Real-time Analytics', 'Mobile Apps'],
      image: '🚚',
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    },
  ];

  const industries = [
    { name: 'E-commerce', count: '15+', icon: '🛒' },
    { name: 'Healthcare', count: '12+', icon: '🏥' },
    { name: 'Finance', count: '18+', icon: '💳' },
    { name: 'Manufacturing', count: '10+', icon: '🏭' },
    { name: 'Education', count: '8+', icon: '🎓' },
    { name: 'Logistics', count: '14+', icon: '🚚' },
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing how Zion Tech Group has transformed businesses with autonomous technology." />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and case studies." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real-world examples of how we&apos;ve transformed businesses with autonomous technology
            </p>
            <Button href="/contact" size="lg">
              Start Your Success Story
            </Button>
          </div>
        </Container>
      </section>

      {/* Industry Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses across diverse sectors with innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-blue-600 font-medium">{industry.count} projects</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed insights into our most impactful projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`w-full h-48 ${study.color} flex items-center justify-center mb-6`}>
                  <span className="text-6xl">{study.image}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                    <span className="text-sm text-gray-500">{study.company}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button href="/contact" variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the organizations we&apos;ve helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Zion Tech Group transformed our entire business operations. The AI-powered automation increased our efficiency by 300%.&quot;
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, TechCorp International</div>
            </Card>

            <Card className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Their autonomous systems have revolutionized our healthcare platform. Diagnostic accuracy improved dramatically.&quot;
              </p>
              <div className="font-semibold text-gray-900">Dr. Michael Chen</div>
              <div className="text-sm text-gray-500">CTO, MedTech Solutions</div>
            </Card>

            <Card className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-gray-600 mb-4 italic">
                &quot;Zero downtime for 12 months straight. Their redundancy systems are truly revolutionary.&quot;
              </p>
              <div className="font-semibold text-gray-900">David Rodriguez</div>
              <div className="text-sm text-gray-500">VP Engineering, FinTech Innovations</div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing list of organizations that have transformed their business with our autonomous technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Start Your Project
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}