import React from 'react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const featuredTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechFlow Solutions',
      companyLogo: '🚀',
      rating: 5,
      content: 'Zion Tech Group transformed our business operations with their AI-powered automation platform. We saw a 60% increase in efficiency within the first quarter.',
      image: '👩‍💼',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'VP of Engineering',
      company: 'InnovateCorp',
      companyLogo: '💡',
      rating: 5,
      content: 'The quantum computing solutions they implemented for our research division have accelerated our development timeline by 3x. Outstanding technical expertise.',
      image: '👨‍💻',
      featured: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      position: 'Head of Research',
      company: 'BioTech Innovations',
      companyLogo: '🧬',
      rating: 5,
      content: 'Their AI-driven drug discovery platform has revolutionized our research process. We\'ve identified promising compounds in weeks instead of months.',
      image: '👩‍🔬',
      featured: true
    }
  ];

  const clientTestimonials = [
    {
      id: 4,
      name: 'David Thompson',
      position: 'CEO',
      company: 'Manufacturing Plus',
      companyLogo: '🏭',
      rating: 5,
      content: 'The cybersecurity framework they implemented has given us peace of mind. Their team is responsive, knowledgeable, and truly understands our industry.',
      image: '👨‍💼'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Director of IT',
      company: 'Global Retail Corp',
      companyLogo: '🛍️',
      rating: 5,
      content: 'Zion Tech Group helped us migrate to the cloud seamlessly. Their expertise in enterprise solutions is unmatched. Highly recommend!',
      image: '👩‍💼'
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Founder',
      company: 'StartupXYZ',
      companyLogo: '🚀',
      rating: 5,
      content: 'As a startup, we needed cost-effective AI solutions. Zion Tech Group delivered exactly what we needed within our budget and timeline.',
      image: '👨‍💻'
    },
    {
      id: 7,
      name: 'Amanda Foster',
      position: 'Operations Manager',
      company: 'Logistics Pro',
      companyLogo: '📦',
      rating: 5,
      content: 'Their AI-powered logistics optimization has reduced our delivery times by 25% and cut costs significantly. Exceptional service and results.',
      image: '👩‍💼'
    },
    {
      id: 8,
      name: 'James Wilson',
      position: 'CFO',
      company: 'Financial Services Inc',
      companyLogo: '💰',
      rating: 5,
      content: 'The financial AI tools they developed have improved our risk assessment accuracy by 40%. Their understanding of financial regulations is impressive.',
      image: '👨‍💼'
    },
    {
      id: 9,
      name: 'Maria Garcia',
      position: 'HR Director',
      company: 'TalentFirst',
      companyLogo: '👥',
      rating: 5,
      content: 'Their AI recruitment platform has streamlined our hiring process and helped us find better candidates faster. Game-changing technology.',
      image: '👩‍💼'
    }
  ];

  const industryTestimonials = [
    {
      industry: 'Healthcare',
      testimonials: [
        {
          name: 'Dr. Sarah Williams',
          position: 'Chief Medical Officer',
          company: 'HealthTech Medical',
          content: 'Zion Tech Group\'s AI diagnostic tools have improved our diagnostic accuracy by 35%. Their healthcare expertise is invaluable.'
        },
        {
          name: 'Mark Johnson',
          position: 'IT Director',
          company: 'City General Hospital',
          content: 'The patient management system they built has reduced wait times and improved patient satisfaction significantly.'
        }
      ]
    },
    {
      industry: 'Manufacturing',
      testimonials: [
        {
          name: 'Carlos Rodriguez',
          position: 'Plant Manager',
          company: 'AutoParts Manufacturing',
          content: 'Their predictive maintenance AI has prevented costly equipment failures and increased our uptime by 20%.'
        },
        {
          name: 'Jennifer Lee',
          position: 'Operations Director',
          company: 'Smart Manufacturing Co',
          content: 'The quality control AI system has reduced defects by 45% and saved us millions in warranty claims.'
        }
      ]
    },
    {
      industry: 'Financial Services',
      testimonials: [
        {
          name: 'Thomas Anderson',
          position: 'Risk Manager',
          company: 'Global Bank',
          content: 'Their fraud detection AI has saved us millions by identifying suspicious transactions in real-time.'
        },
        {
          name: 'Rachel Green',
          position: 'Investment Director',
          company: 'Wealth Management Group',
          content: 'The AI-powered investment analysis tools have improved our portfolio performance by 15%.'
        }
      ]
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Hear from our clients about how Zion Tech Group has transformed their businesses with cutting-edge AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transformative results from our most impactful projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="p-8 rounded-2xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.position}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm mr-2">{testimonial.companyLogo}</span>
                        <span className="text-cyan-400 font-medium">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="text-center">
                    <button className="px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300 text-sm">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Testimonials */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we've helped organizations in different sectors achieve their goals
            </p>
          </div>

          <div className="space-y-12">
            {industryTestimonials.map((industry, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">{industry.industry}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.testimonials.map((testimonial, testimonialIndex) => (
                    <div key={testimonialIndex} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="text-3xl mr-3">👤</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                          <p className="text-cyan-400 text-sm font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.content}"</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonials Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Client Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Additional success stories from our diverse client base
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm mr-1">{testimonial.companyLogo}</span>
                        <span className="text-cyan-400 text-sm font-medium">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
                  
                  <div className="text-center">
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}