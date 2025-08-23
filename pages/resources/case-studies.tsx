import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building, 
  Heart, 
  Shield, 
  Brain, 
  Rocket, 
  Cloud, 
  Database,
  CheckCircle,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Diagnostics',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Improving diagnostic accuracy and reducing patient wait times',
      solution: 'Implemented AI-powered medical image analysis system with real-time processing',
      results: [
        '25% improvement in diagnostic accuracy',
        '40% reduction in patient wait times',
        '300% increase in daily patient capacity',
        '95% physician satisfaction rate'
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Real-time Processing'],
      duration: '6 months',
      team: '8 developers',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Enterprise Cybersecurity Transformation',
      client: 'Fortune 500 Financial Institution',
      industry: 'Financial Services',
      challenge: 'Modernizing security infrastructure and achieving compliance',
      solution: 'Zero-trust architecture with AI-powered threat detection and automated compliance',
      results: [
        '99.9% threat detection rate',
        '60% reduction in security incidents',
        '100% compliance achievement',
        '45% reduction in security costs'
      ],
      technologies: ['Zero-Trust Security', 'AI/ML', 'Compliance Automation'],
      duration: '12 months',
      team: '15 developers',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud-Native Digital Banking Platform',
      client: 'Regional Credit Union',
      industry: 'Financial Services',
      challenge: 'Modernizing legacy systems and improving customer experience',
      solution: 'Cloud-native digital banking platform with mobile-first design',
      results: [
        '200% increase in customer engagement',
        '85% improvement in mobile app performance',
        '50% reduction in operational costs',
        '90% customer satisfaction score'
      ],
      technologies: ['Cloud Native', 'Mobile Development', 'Microservices'],
      duration: '9 months',
      team: '12 developers',
      icon: <Building className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'AI-Driven Manufacturing Optimization',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Optimizing production processes and reducing waste',
      solution: 'AI-powered predictive maintenance and process optimization system',
      results: [
        '30% increase in production efficiency',
        '25% reduction in waste and defects',
        '40% improvement in equipment uptime',
        '$2M annual cost savings'
      ],
      technologies: ['AI/ML', 'IoT Integration', 'Predictive Analytics'],
      duration: '8 months',
      team: '10 developers',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Government Data Analytics Platform',
      client: 'Department of Homeland Security',
      industry: 'Government',
      challenge: 'Improving emergency response and data analysis capabilities',
      solution: 'Real-time data analytics platform with AI-powered insights',
      results: [
        '60% improvement in response time',
        '300% increase in data processing capacity',
        '90% accuracy in threat assessment',
        'Enhanced inter-agency collaboration'
      ],
      technologies: ['Big Data', 'AI/ML', 'Real-time Analytics'],
      duration: '15 months',
      team: '20 developers',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Startup Growth Acceleration Platform',
      client: 'Tech Startup Incubator',
      industry: 'Technology',
      challenge: 'Helping startups scale quickly and efficiently',
      solution: 'Comprehensive growth platform with automation and analytics',
      results: [
        '500% increase in startup success rate',
        '300% faster time to market',
        '200% improvement in investor attraction',
        'Scalable platform supporting 100+ startups'
      ],
      technologies: ['Automation', 'Analytics', 'Cloud Infrastructure'],
      duration: '10 months',
      team: '14 developers',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const industries = [
    { name: 'Healthcare', count: 15, icon: <Heart className="w-6 h-6" /> },
    { name: 'Financial Services', count: 12, icon: <Building className="w-6 h-6" /> },
    { name: 'Manufacturing', count: 8, icon: <Rocket className="w-6 h-6" /> },
    { name: 'Government', count: 6, icon: <Shield className="w-6 h-6" /> },
    { name: 'Technology', count: 20, icon: <Brain className="w-6 h-6" /> },
    { name: 'Retail', count: 5, icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our healthcare operations with their AI solutions. The results exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      title: "CTO, Regional Medical Center",
      rating: 5
    },
    {
      quote: "Their cybersecurity expertise helped us achieve 100% compliance while significantly improving our security posture.",
      author: "Michael Chen",
      title: "CISO, Fortune 500 Bank",
      rating: 5
    },
    {
      quote: "The digital transformation project delivered exceptional results and transformed our customer experience.",
      author: "Lisa Rodriguez",
      title: "CEO, Regional Credit Union",
      rating: 5
    }
  ];

  return (
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Real success stories and implementation examples from our clients. See how Zion Tech Group solutions have transformed businesses across industries."
      keywords="case studies, success stories, client implementations, Zion Tech Group, business transformation"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                  Case Studies
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real success stories from our clients. See how Zion Tech Group solutions have 
                transformed businesses across industries and delivered measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  View All Case Studies
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Submit Your Story
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions have delivered results across diverse industries and business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-3xl font-bold text-purple-400">{industry.count}+</p>
                  <p className="text-gray-400">Case Studies</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                In-depth stories of transformation and success from our most impactful projects.
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Icon and Basic Info */}
                    <div className="text-center lg:text-left">
                      <div className={`w-20 h-20 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6`}>
                        {study.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-center lg:justify-start">
                          <Building className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{study.client}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{study.industry}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{study.duration}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start">
                          <Users className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{study.team} developers</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Column - Challenge and Solution */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Read Full Case Study
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear directly from our clients about their experience with Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how Zion Tech Group can help transform your business 
                and deliver measurable results like the ones you've seen here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;