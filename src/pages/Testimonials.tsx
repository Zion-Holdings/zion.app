import React from 'react';
import { Star, Quote, Building, User, Award, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Testimonials() {
  const featuredTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechFlow Solutions',
      companyLogo: '🏢',
      rating: 5,
      content: 'Zion Tech Group transformed our business operations with their AI platform. We\'ve seen a 300% increase in efficiency and our team can now focus on strategic initiatives instead of repetitive tasks.',
      industry: 'Technology',
      results: ['300% efficiency increase', '50% cost reduction', 'Improved decision making']
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'VP of Operations',
      company: 'Global Manufacturing Inc.',
      companyLogo: '🏭',
      rating: 5,
      content: 'The AI-powered predictive maintenance system from Zion Tech Group has saved us millions in unplanned downtime. Their team\'s expertise in manufacturing AI is unmatched.',
      industry: 'Manufacturing',
      results: ['40% reduction in downtime', 'Millions saved in maintenance', 'Predictive insights']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Medical Officer',
      company: 'HealthTech Innovations',
      companyLogo: '🏥',
      rating: 5,
      content: 'Zion Tech Group\'s AI diagnostic tools have revolutionized our patient care. The accuracy and speed of their medical AI solutions are truly groundbreaking.',
      industry: 'Healthcare',
      results: ['95% diagnostic accuracy', 'Faster patient care', 'Reduced errors']
    }
  ];

  const industryTestimonials = [
    {
      industry: 'Financial Services',
      testimonials: [
        {
          name: 'David Thompson',
          position: 'Head of Risk Management',
          company: 'SecureBank',
          rating: 5,
          content: 'Their AI risk assessment platform has given us unprecedented insights into market trends and potential risks. It\'s like having a crystal ball for financial markets.',
          results: ['Real-time risk monitoring', 'Improved compliance', 'Better investment decisions']
        },
        {
          name: 'Lisa Wang',
          position: 'VP of Digital Innovation',
          company: 'FinTech Capital',
          rating: 5,
          content: 'Zion Tech Group\'s AI solutions have accelerated our digital transformation by 2 years. Their expertise in financial AI is exceptional.',
          results: ['2-year acceleration', 'Enhanced customer experience', 'Operational efficiency']
        }
      ]
    },
    {
      industry: 'Retail & E-commerce',
      testimonials: [
        {
          name: 'Alex Rodriguez',
          position: 'CEO',
          company: 'SmartRetail',
          rating: 5,
          content: 'The AI-powered inventory management system has eliminated stockouts and reduced waste by 60%. Our customers are happier and our profits are up.',
          results: ['Eliminated stockouts', '60% waste reduction', 'Increased profits']
        },
        {
          name: 'Jennifer Kim',
          position: 'Marketing Director',
          company: 'E-Commerce Plus',
          rating: 5,
          content: 'Their AI marketing automation has increased our conversion rates by 150%. The personalized customer experience is game-changing.',
          results: ['150% conversion increase', 'Personalized marketing', 'Better ROI']
        }
      ]
    },
    {
      industry: 'Government & Public Sector',
      testimonials: [
        {
          name: 'Robert Williams',
          position: 'IT Director',
          company: 'City of Innovation',
          rating: 5,
          content: 'Zion Tech Group helped us modernize our city services with AI. Citizens now get faster responses and we\'ve reduced operational costs significantly.',
          results: ['Faster citizen services', 'Reduced costs', 'Modernized systems']
        },
        {
          name: 'Maria Garcia',
          position: 'Chief Data Officer',
          company: 'State Technology Agency',
          rating: 5,
          content: 'Their AI data analytics platform has transformed how we make policy decisions. We now have insights that were previously impossible to obtain.',
          results: ['Data-driven decisions', 'Policy insights', 'Operational transparency']
        }
      ]
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { number: '300+', label: 'Successful Projects', icon: Award, color: 'from-purple-500 to-pink-500' },
    { number: '50+', label: 'Industries Served', icon: Building, color: 'from-blue-500 to-cyan-500' },
    { number: '24/7', label: 'Support Available', icon: Shield, color: 'from-green-500 to-emerald-500' }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how organizations across industries are transforming their operations with Zion Tech Group's AI solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-700 bg-gray-900/30">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="p-8 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.companyLogo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-cyan-400">{testimonial.position}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-400">{testimonial.industry} Industry</span>
                  </div>

                  <blockquote className="mb-6">
                    <Quote className="w-8 h-8 text-cyan-400/50 mb-3" />
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </blockquote>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry-Specific Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Success Across Industries
          </h2>
          <div className="space-y-16">
            {industryTestimonials.map((industry) => (
              <div key={industry.industry}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                  {industry.industry}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {industry.testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-900/30 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                          <p className="text-cyan-400 text-sm">{testimonial.position}</p>
                          <p className="text-gray-400 text-xs">{testimonial.company}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      <blockquote className="mb-4">
                        <p className="text-gray-300 text-sm leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </blockquote>

                      <div>
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Results:</h5>
                        <ul className="space-y-1">
                          {testimonial.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <Zap className="w-3 h-3 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                View More Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}