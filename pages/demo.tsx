import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Play, 
  Monitor, 
  Smartphone, 
  Tablet, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Star,
  Award,
  Users,
  Globe,
  Code,
  Settings,
  Lock,
  BarChart3,
  TrendingUp,
  Cpu,
  Brain,
  Atom,
  Shield,
  Zap,
  Target,
  Heart,
  Lightbulb,
  Leaf,
  Infinity,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  MapPin,
  Video,
  Eye,
  Download,
  Rocket
} from 'lucide-react';

const DemoPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const demoCategories = [
    {
      category: 'AI & Machine Learning',
      demos: [
        {
          title: 'AI Consciousness Evolution',
          description: 'Experience our revolutionary AI consciousness platform in action',
          duration: '45 minutes',
          type: 'Live Demo',
          icon: <Brain className="w-6 h-6 text-purple-400" />
        },
        {
          title: 'Quantum AI Cognitive',
          description: 'See quantum-powered AI reasoning and decision making',
          duration: '30 minutes',
          type: 'Interactive Demo',
          icon: <Atom className="w-6 h-6 text-blue-400" />
        },
        {
          title: 'Autonomous Business Intelligence',
          description: 'Witness self-managing business analytics and insights',
          duration: '40 minutes',
          type: 'Live Demo',
          icon: <Target className="w-6 h-6 text-green-400" />
        }
      ],
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      category: 'Quantum Computing',
      demos: [
        {
          title: 'Quantum Cloud Infrastructure',
          description: 'Explore our quantum-enhanced cloud computing platform',
          duration: '35 minutes',
          type: 'Virtual Tour',
          icon: <Cpu className="w-6 h-6 text-blue-400" />
        },
        {
          title: 'Quantum Cybersecurity',
          description: 'See quantum-resistant security in action',
          duration: '25 minutes',
          type: 'Live Demo',
          icon: <Shield className="w-6 h-6 text-red-400" />
        },
        {
          title: 'Quantum Neural Networks',
          description: 'Experience quantum neural network training and inference',
          duration: '50 minutes',
          type: 'Interactive Demo',
          icon: <Atom className="w-6 h-6 text-cyan-400" />
        }
      ],
      icon: <Atom className="w-8 h-8 text-blue-400" />
    },
    {
      category: 'Space Technology',
      demos: [
        {
          title: 'Space Resource Intelligence',
          description: 'Explore our space resource mapping and analysis platform',
          duration: '40 minutes',
          type: 'Virtual Tour',
          icon: <Rocket className="w-6 h-6 text-pink-400" />
        },
        {
          title: 'Space Computing Platform',
          description: 'See extraterrestrial computing infrastructure in action',
          duration: '35 minutes',
          type: 'Live Demo',
          icon: <Globe className="w-6 h-6 text-indigo-400" />
        }
      ],
      icon: <Rocket className="w-8 h-8 text-pink-400" />
    },
    {
      category: 'Cybersecurity',
      demos: [
        {
          title: 'Zero Trust Architecture',
          description: 'Experience our comprehensive zero trust security solution',
          duration: '30 minutes',
          type: 'Live Demo',
          icon: <Lock className="w-6 h-6 text-green-400" />
        },
        {
          title: 'Autonomous Security Operations',
          description: 'See AI-powered security monitoring and response',
          duration: '45 minutes',
          type: 'Interactive Demo',
          icon: <Shield className="w-6 h-6 text-orange-400" />
        }
      ],
      icon: <Shield className="w-8 h-8 text-red-400" />
    }
  ];

  const demoBenefits = [
    {
      benefit: 'Hands-On Experience',
      description: 'Interact directly with our technology to see its capabilities',
      icon: <Monitor className="w-6 h-6 text-blue-400" />
    },
    {
      benefit: 'Expert Guidance',
      description: 'Learn from our technology experts and engineers',
      icon: <Users className="w-6 h-6 text-green-400" />
    },
    {
      benefit: 'Customized Solutions',
      description: 'See how our solutions can be tailored to your needs',
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      benefit: 'Real-World Applications',
      description: 'Understand practical use cases and business value',
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
    }
  ];

  const demoFormats = [
    {
      format: 'Live Demo',
      description: 'Real-time demonstration with our experts',
      duration: '30-60 minutes',
      icon: <Video className="w-6 h-6 text-blue-400" />
    },
    {
      format: 'Interactive Demo',
      description: 'Hands-on experience with our platforms',
      duration: '45-90 minutes',
      icon: <Monitor className="w-6 h-6 text-green-400" />
    },
    {
      format: 'Virtual Tour',
      description: 'Guided exploration of our technology',
      duration: '20-40 minutes',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      format: 'Custom Demo',
      description: 'Tailored demonstration for your specific needs',
      duration: 'Variable',
      icon: <Settings className="w-6 h-6 text-orange-400" />
    }
  ];

  const testimonials = [
    {
      quote: "The AI consciousness demo was mind-blowing. I could see the future of human-AI collaboration right before my eyes.",
      author: "Dr. Sarah Chen",
      company: "Tech Innovations Inc.",
      rating: 5
    },
    {
      quote: "Zion Tech Group's quantum computing demo exceeded our expectations. The performance improvements were incredible.",
      author: "Michael Rodriguez",
      company: "Quantum Solutions Corp.",
      rating: 5
    },
    {
      quote: "The space technology demo opened our eyes to possibilities we never considered. Truly revolutionary.",
      author: "Jennifer Williams",
      company: "Space Exploration Ltd.",
      rating: 5
    }
  ];

  return (
    <Layout 
      title="Request a Demo - Zion Tech Group"
      description="Experience Zion Tech Group's revolutionary technology firsthand. Request a personalized demo of our AI, quantum computing, and space technology solutions."
      keywords="demo, demonstration, AI demo, quantum computing demo, space technology demo, cybersecurity demo, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Experience the Future
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                See our revolutionary technology in action. Request a personalized demo and discover how Zion Tech Group can transform your business with AI consciousness, quantum computing, and space technology.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="#demo-request" 
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
                >
                  Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border border-orange-500/40 text-orange-300 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Demo Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Demo Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology demonstrations across all major service areas.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {demoCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-8">
                    {category.icon}
                    <h3 className="text-3xl font-bold text-white ml-4">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.demos.map((demo, demoIndex) => (
                      <div
                        key={demoIndex}
                        className="bg-gray-800/50 border border-gray-600/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          {demo.icon}
                          <span className="ml-2 px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full">
                            {demo.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3">{demo.title}</h4>
                        <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                        <div className="flex items-center text-orange-400 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          {demo.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demo Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Request a Demo?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our technology firsthand and understand how it can transform your business.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {demoBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{benefit.benefit}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demo Formats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Demo Formats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the demonstration format that works best for your team and schedule.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {demoFormats.map((format, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{format.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{format.format}</h3>
                  <p className="text-gray-300 mb-4">{format.description}</p>
                  <div className="text-orange-400 font-semibold">{format.duration}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Demo Attendees Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from professionals who have experienced our technology demonstrations.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo-request" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to see our technology in action? Fill out the form below and we'll schedule a personalized demonstration for your team.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Job Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Demo Category *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="">Select a demo category</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="quantum">Quantum Computing</option>
                    <option value="space">Space Technology</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="custom">Custom Demo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Demo Format *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="">Select a demo format</option>
                    <option value="live">Live Demo</option>
                    <option value="interactive">Interactive Demo</option>
                    <option value="virtual">Virtual Tour</option>
                    <option value="custom">Custom Format</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Additional Requirements</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Tell us about any specific requirements or questions you have..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center mx-auto"
                  >
                    Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to See the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience our revolutionary technology firsthand and discover how it can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Contact Sales Team
                </a>
                <a 
                  href="/case-studies" 
                  className="px-8 py-4 border border-orange-500/40 text-orange-300 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-300"
                >
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DemoPage;