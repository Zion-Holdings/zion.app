import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes, high downtime, and quality control issues',
      solution: 'Implemented autonomous AI systems for predictive maintenance, quality control, and production optimization',
      results: [
        '40% increase in production efficiency',
        '60% reduction in unplanned downtime',
        '35% improvement in product quality',
        '25% reduction in operational costs'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'IoT Sensors', 'Predictive Analytics'],
      duration: '6 months',
      teamSize: '8 engineers',
      featured: true
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      challenge: 'Unable to meet client demand for high-quality content at scale',
      solution: 'Deployed autonomous content generation systems with human oversight and quality control',
      results: [
        '10x increase in content output',
        '85% improvement in engagement metrics',
        '70% reduction in content creation time',
        '95% client satisfaction rate'
      ],
      technologies: ['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'Analytics'],
      duration: '4 months',
      teamSize: '5 engineers + 3 content specialists',
      featured: false
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      challenge: 'High cloud costs, performance issues, and manual scaling requirements',
      solution: 'Built self-healing, auto-scaling cloud infrastructure with intelligent resource management',
      results: [
        '50% reduction in cloud costs',
        '99.9% uptime achieved',
        '3x improvement in response times',
        'Zero manual intervention required'
      ],
      technologies: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Cost Optimization'],
      duration: '8 months',
      teamSize: '6 DevOps engineers',
      featured: false
    },
    {
      id: 'customer-service-automation',
      title: 'Intelligent Customer Service Automation',
      company: 'Financial Services Provider',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbots and automated ticket routing systems',
      results: [
        '80% reduction in response time',
        '60% decrease in customer service costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      technologies: ['Chatbots', 'Natural Language Processing', 'Ticket Routing', 'Sentiment Analysis'],
      duration: '5 months',
      teamSize: '4 engineers + 2 customer service specialists',
      featured: false
    },
    {
      id: 'data-analytics-transformation',
      title: 'Data Analytics Transformation',
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Inability to leverage data for patient care improvements and operational efficiency',
      solution: 'Built comprehensive data analytics platform with real-time insights and predictive modeling',
      results: [
        '30% improvement in patient outcomes',
        '40% reduction in operational costs',
        'Real-time data insights',
        'Predictive analytics for patient care'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Analytics', 'Predictive Modeling'],
      duration: '10 months',
      teamSize: '10 data scientists + 5 engineers',
      featured: false
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories of how our autonomous technology solutions have transformed businesses across industries." />
        <meta property="og:title" content="Case Studies" />
        <meta property="og:description" content="Real-world success stories of our autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our autonomous technology solutions have transformed businesses across industries
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Study
            </h2>
            <p className="text-xl text-gray-600">
              Our most impactful transformation story
            </p>
          </div>

          {caseStudies.filter(cs => cs.featured).map(caseStudy => (
            <Card key={caseStudy.id} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl text-blue-600">{caseStudy.title}</CardTitle>
                    <p className="text-gray-600 mt-2">{caseStudy.company} • {caseStudy.industry}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{caseStudy.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-600 mb-6">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
                    <ul className="space-y-2 mb-6">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete portfolio of successful transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.filter(cs => !cs.featured).map(caseStudy => (
              <Card key={caseStudy.id} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{caseStudy.title}</CardTitle>
                  <p className="text-gray-600">{caseStudy.company} • {caseStudy.industry}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our autonomous technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}