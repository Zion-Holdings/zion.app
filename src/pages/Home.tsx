
import React from 'react';
import { SEO } from "@/components/SEO";
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Code, 
  Cloud, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Lock
} from 'lucide-react';

export default function Home() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: Rocket },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: Shield },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: Zap },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: Brain },
  ];

  const services = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable, focused software solutions for specific business needs',
      icon: '💼',
      features: ['Custom Development', 'API Integration', 'Cloud Deployment', '24/7 Support'],
      link: '/services/micro-saas'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business automation',
      icon: '🧠',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      link: '/services/ai-ml'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions for scalability and reliability',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Disaster Recovery'],
      link: '/services/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: '🔒',
      features: ['Threat Detection', 'Penetration Testing', 'Compliance Auditing', 'Incident Response'],
      link: '/services/cybersecurity'
    }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️', description: 'Modern web development' },
    { name: 'Node.js & Python', icon: '🐍', description: 'Backend & AI development' },
    { name: 'AWS & Azure', icon: '☁️', description: 'Cloud infrastructure' },
    { name: 'Docker & Kubernetes', icon: '🐳', description: 'Container orchestration' },
    { name: 'TensorFlow & PyTorch', icon: '🤖', description: 'Machine learning' },
    { name: 'Blockchain & Web3', icon: '⛓️', description: 'Decentralized solutions' }
  ];

  const quickActions = [
    { title: 'Get Started', description: 'Start your free trial today', action: 'Start Free Trial', link: '/signup', icon: Rocket },
    { title: 'View Services', description: 'Explore our service catalog', action: 'Browse Services', link: '/services', icon: Code },
    { title: 'Contact Sales', description: 'Talk to our experts', action: 'Contact Us', link: '/contact', icon: Users },
    { title: 'Documentation', description: 'Learn how to use our platform', action: 'View Docs', link: '/docs', icon: Database }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow Inc',
      company: 'TechFlow Inc',
      content: 'Zion Tech Group transformed our entire tech infrastructure. Their micro SaaS solutions are game-changing.',
      rating: 5,
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Founder at StartupXYZ',
      company: 'StartupXYZ',
      content: 'The AI solutions they implemented saved us 40% on operational costs. Highly recommended!',
      rating: 5,
      avatar: '/avatars/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director at GlobalCorp',
      company: 'GlobalCorp',
      content: 'Outstanding cybersecurity implementation. We feel completely secure with their solutions.',
      rating: 5,
      avatar: '/avatars/emily.jpg'
    }
  ];

  const performanceMetrics = [
    { metric: '99.99%', label: 'Uptime', description: 'Guaranteed reliability' },
    { metric: '<100ms', label: 'Response Time', description: 'Lightning fast performance' },
    { metric: '24/7', label: 'Support', description: 'Always available' },
    { metric: '21 Days', label: 'Free Trial', description: 'Risk-free testing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="Zion Tech Group - Revolutionary Technology Solutions" 
        description="Transform your business with Zion Tech Group's cutting-edge micro SaaS, AI, cloud infrastructure, and cybersecurity solutions. Start your free trial today."
        keywords="AI, technology, micro SaaS, cloud infrastructure, cybersecurity, machine learning, business automation"
        url="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge micro SaaS, AI-powered automation, and enterprise-grade infrastructure. 
              Join the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickActions.map((action, index) => (
              <div key={action.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <action.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                <a 
                  href={action.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  {action.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{tech.icon}</div>
                <div className="text-white font-medium">{tech.name}</div>
                <div className="text-gray-400 text-sm">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Performance <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Metrics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in these key performance indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-blue-100 font-semibold mb-1">{item.label}</div>
                <div className="text-blue-200 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from the businesses we&apos;ve transformed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.role}</div>
                    <div className="text-blue-300 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-16" aria-label="Contact Information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            >
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">📱</div>
                <div className="font-semibold text-lg mb-2">Mobile</div>
                <a 
                  href="tel:+13024640950" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  aria-label="Call us at +1 302 464 0950"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">✉️</div>
                <div className="font-semibold text-lg mb-2">Email</div>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                  aria-label="Email us at kleber@ziontechgroup.com"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3" aria-hidden="true">📍</div>
                <div className="font-semibold text-lg mb-2">Address</div>
                <address className="text-blue-100 not-italic">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </address>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <a 
                href="/contact" 
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Get started with us"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
