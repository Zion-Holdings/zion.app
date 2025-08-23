    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+1 302 464 0950',
      description: 'Available Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'We respond within 2 hours'
=======
import React from 'react';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Star, Award, Zap, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      title: 'Phone',
      value: '+1 302 464 0950',
      icon: Phone,
      description: 'Call us directly for immediate assistance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      icon: Mail,
      description: 'Send us a detailed message',
      color: 'from-blue-500 to-cyan-500'
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
    },
    {
      icon: '📍',
      title: 'Address',
      value: '364 E Main St STE 1008 Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office anytime'
    },
    {
      icon: '🌐',
      title: 'Website',
      value: 'ziontechgroup.com',
      link: 'https://ziontechgroup.com',
      description: 'Explore our services online'
    }
  ];

  const contactForm = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
  const services = [
    'AI & Machine Learning Solutions',
    'Quantum Computing Services',
    'Space Technology Platforms',
    'IT Infrastructure Solutions',
    'Micro SAAS Services',
    'Cybersecurity Platforms',
    'DevOps Automation',
    'Custom Development',
    'Other'
  ];

  return (
    <Layout
      title="Contact Us | Zion Tech Group"
      description="Get in touch with Zion Tech Group for AI consciousness, quantum computing, cybersecurity, and space technology solutions. Contact our expert team today."
      keywords="contact Zion Tech Group, AI consciousness, quantum computing, cybersecurity, space technology, business solutions"
      canonicalUrl="https://ziontechgroup.com/contact"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <MessageSquare className="mx-auto h-20 w-20 text-green-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Ready to transform your business with revolutionary technology? 
                Get in touch with our expert team today.
              </p>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
            </div>

    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO 
        title="Contact Zion Tech Group | Get Started Today" 
        description="Contact Zion Tech Group for innovative AI, quantum computing, and emerging technology solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com"
        canonical="https://ziontechgroup.com/contact/"
      />

      <div className="container mx-auto px-4 py-16 space-y-16 text-white">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss how our innovative solutions can drive your success.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-cyan-400 font-medium mb-2 group-hover:text-cyan-300 transition-colors">
                {method.value}
              </p>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              
              {submitStatus === 'success' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">We'll get back to you within 2 hours.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            {/* Why Choose Us */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
=======
        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to reach our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center">
                  <div className={`p-4 bg-gradient-to-r ${method.color} rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                    <method.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-green-400 font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we\'ll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 mx-auto"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
                Why Choose Zion Tech Group?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>500+ proven micro SAAS services and solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Cutting-edge AI and quantum computing expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>99.9% uptime guarantee with 24/7 support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Competitive pricing with transparent costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span>Rapid deployment and onboarding</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Fast Response Guarantee
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Initial Response:</span>
                  <span className="text-green-400 font-semibold">Within 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quote Delivery:</span>
                  <span className="text-green-400 font-semibold">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Project Start:</span>
                  <span className="text-green-400 font-semibold">Within 1 week</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-b from-red-900/50 to-red-800/50 border border-red-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                🚨 Emergency Support
              </h3>
              <p className="text-gray-300 mb-4">
                Need immediate assistance? Our emergency support team is available 24/7.
              </p>
              <a
                href="tel:+1 302 464 0950"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <span>📞</span>
                Call Emergency Support
              </a>
            </div>
          </motion.div>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Star className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Specialists in AI consciousness, quantum computing, and space technology
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  Cutting-edge solutions that push the boundaries of what's possible
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Successful implementations across industries worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the technology revolution and transform your business with 
              cutting-edge AI, quantum computing, and space technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Project
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 17df199e451813150094c5ab1fb554b04628cb60
  );
};

export default ContactPage;
