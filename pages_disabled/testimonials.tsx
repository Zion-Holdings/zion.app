import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

const Testimonials: NextPage = () => {
  const [selectedRating, setSelectedRating] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Chief Risk Officer',
      company: 'SecureBank Corp',
      industry: 'Financial Services',
      rating: 5,
      quote: "Zion Tech Group's AI fraud detection system has revolutionized our security infrastructure. We've seen an 89% reduction in fraud while dramatically improving customer experience. The team's expertise and dedication exceeded our expectations.",
      project: 'AI-Powered Fraud Detection System',
      results: ['89% fraud reduction', '76% fewer false positives', '$2.4M annual savings'],
      avatar: 'SM',
      featured: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Chief Medical Officer',
      company: 'MediCore Health System',
      industry: 'Healthcare',
      rating: 5,
      quote: "The AI diagnostics platform has transformed our patient care. We're seeing faster, more accurate diagnoses that are saving lives. Zion Tech Group's understanding of both technology and healthcare is exceptional.",
      project: 'AI Medical Diagnostics Platform',
      results: ['94% accuracy improvement', '78% faster processing', '65% patient throughput increase'],
      avatar: 'MC',
      featured: true,
      date: '2024-01-12'
    },
    {
      id: 3,
      name: 'Jennifer Walsh',
      role: 'CTO',
      company: 'RetailMax Global',
      industry: 'E-commerce',
      rating: 5,
      quote: "Our Black Friday traffic increased 300% with zero downtime. The cloud migration has been transformational for our business. Zion Tech Group delivered exactly what they promised, on time and under budget.",
      project: 'Cloud Migration & Optimization',
      results: ['99.9% uptime', '68% faster load times', '45% cost reduction'],
      avatar: 'JW',
      featured: true,
      date: '2024-01-10'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Operations Director',
      company: 'TechManufacture Inc',
      industry: 'Manufacturing',
      rating: 5,
      quote: "The smart manufacturing solution has given us unprecedented visibility and control over our production processes. Zion Tech Group's IoT expertise helped us modernize our entire operation.",
      project: 'IoT Manufacturing Automation',
      results: ['42% efficiency increase', '67% downtime reduction', '35% quality improvement'],
      avatar: 'DR',
      featured: false,
      date: '2024-01-08'
    },
    {
      id: 5,
      name: 'Alex Thompson',
      role: 'Founder & CEO',
      company: 'InnovateTech Startup',
      industry: 'Technology',
      rating: 5,
      quote: "The DevOps platform has been a game-changer. We can now deploy features multiple times per day with complete confidence. Zion Tech Group helped us scale from startup to market leader.",
      project: 'Autonomous DevOps Platform',
      results: ['85% faster deployments', '92% error reduction', '70% faster time to market'],
      avatar: 'AT',
      featured: false,
      date: '2024-01-05'
    },
    {
      id: 6,
      name: 'Emily Watson',
      role: 'VP of Operations',
      company: 'DataFlow Analytics',
      industry: 'Technology',
      rating: 5,
      quote: "Zion Tech Group's data analytics platform has given us insights we never thought possible. The team's technical expertise and business acumen are unmatched in the industry.",
      project: 'Advanced Analytics Platform',
      results: ['300% faster insights', 'Real-time reporting', 'Predictive analytics'],
      avatar: 'EW',
      featured: false,
      date: '2024-01-03'
    },
    {
      id: 7,
      name: 'Robert Kim',
      role: 'Head of IT',
      company: 'Global Logistics Corp',
      industry: 'Logistics',
      rating: 5,
      quote: "The supply chain optimization system has streamlined our entire operation. We've reduced delivery times by 40% and cut costs by 25%. Zion Tech Group truly understands logistics.",
      project: 'Supply Chain Optimization',
      results: ['40% faster delivery', '25% cost reduction', 'Real-time tracking'],
      avatar: 'RK',
      featured: false,
      date: '2024-01-01'
    },
    {
      id: 8,
      name: 'Lisa Chang',
      role: 'Marketing Director',
      company: 'Growth Marketing Agency',
      industry: 'Marketing',
      rating: 5,
      quote: "The AI-powered marketing automation platform has transformed how we serve our clients. Campaign performance has improved by 150% and client satisfaction is at an all-time high.",
      project: 'AI Marketing Automation',
      results: ['150% performance improvement', 'Automated workflows', 'Predictive targeting'],
      avatar: 'LC',
      featured: false,
      date: '2023-12-28'
    }
  ];

  const ratings = ['All', '5 Stars', '4 Stars', '3 Stars'];
  const industries = ['All', 'Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing', 'Technology', 'Logistics', 'Marketing'];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesRating = selectedRating === 'All' || 
      (selectedRating === '5 Stars' && testimonial.rating === 5) ||
      (selectedRating === '4 Stars' && testimonial.rating === 4) ||
      (selectedRating === '3 Stars' && testimonial.rating === 3);
    
    const matchesIndustry = selectedIndustry === 'All' || testimonial.industry === selectedIndustry;
    
    return matchesRating && matchesIndustry;
  });

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Testimonials - Zion Tech Group | Client Reviews & Success Stories</title>
        <meta name="description" content="Read what our clients say about working with Zion Tech Group. Discover real success stories, client reviews, and testimonials from businesses we've transformed." />
        <meta name="keywords" content="client testimonials, customer reviews, success stories, client feedback, Zion Tech Group reviews" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped transform 
            with innovative technology solutions and exceptional service delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>⭐ {averageRating.toFixed(1)} Average Rating</span>
            <span>💼 {testimonials.length}+ Client Reviews</span>
            <span>🏆 100% Satisfaction Rate</span>
            <span>🚀 Proven Results</span>
          </div>
        </div>

        {/* Overall Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{testimonials.length}+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{averageRating.toFixed(1)}</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Client Stories</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-blue-600 font-medium">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.industry}</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 text-lg italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Project: {testimonial.project}</div>
                  <div className="space-y-2">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Rating</label>
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {ratings.map(rating => (
                    <option key={rating} value={rating}>{rating}</option>
                  ))}
                </select>
              </div>

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
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTestimonials.length}</span> testimonials
            {selectedRating !== 'All' && ` with ${selectedRating}`}
            {selectedIndustry !== 'All' && ` from ${selectedIndustry}`}
          </p>
        </div>

        {/* All Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Client Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="text-right">
                    <div className="flex mb-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="text-xs text-gray-500">{testimonial.industry}</div>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <div className="text-sm text-blue-600 mb-1">{testimonial.role}</div>
                <div className="text-sm text-gray-500 mb-4">{testimonial.company}</div>

                <blockquote className="text-gray-700 text-sm italic mb-4 line-clamp-4">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="text-xs text-gray-500 mb-3">
                  Project: {testimonial.project}
                </div>

                <div className="text-xs text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Clients Choose Zion Tech Group</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Our commitment to excellence, proven results, and exceptional service delivery 
                has made us the trusted technology partner for businesses worldwide.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="opacity-90">
                  We deliver measurable outcomes that drive real business value and ROI.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Partnership Approach</h3>
                <p className="opacity-90">
                  We work as an extension of your team, ensuring long-term success.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Innovation Leadership</h3>
                <p className="opacity-90">
                  Cutting-edge technology solutions that keep you ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results and become 
              another satisfied Zion Tech Group client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;