import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  Clock, 
  MessageSquare,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import UltraFuturisticBackground2026 from '../components/ui/UltraFuturisticBackground2026';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950',
      color: 'from-cyan-500 to-blue-500',
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500',
      description: 'Send us a detailed message anytime'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown DE 19709',
      link: null,
      color: 'from-green-500 to-emerald-500',
      description: 'Visit our headquarters'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website',
      value: 'ziontechgroup.com',
      link: 'https://ziontechgroup.com',
      color: 'from-orange-500 to-red-500',
      description: 'Explore our online presence'
    }
  ];

  const services = [
    'AI & Consciousness Evolution',
    'Micro SAAS Solutions',
    'AI Automation & Intelligence',
    'Quantum Cybersecurity',
    'Enterprise IT Solutions',
    'Emerging Technologies',
    'Custom Development',
    'Consulting Services'
  ];

  return (
    <UltraFuturisticBackground2026 intensity="high" theme="quantum">
      {/* Header */}
      <section className="relative z-10 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Ready to transform your business with revolutionary AI, quantum computing, and micro SAAS solutions? 
              Let's discuss how we can accelerate your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{info.description}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-cyan-400 font-semibold whitespace-pre-line">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
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
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-black text-white">
                          {service}
                        </option>
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
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Details & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Zion Tech Group?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Revolutionary Technology</h4>
                      <p className="text-gray-400 text-sm">
                        Cutting-edge AI, quantum computing, and emerging technologies that define the future.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                      <p className="text-gray-400 text-sm">
                        Track record of delivering exceptional ROI and transforming businesses across industries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-400 text-sm">
                        World-class engineers, AI researchers, and technology experts dedicated to your success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Contact Options
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-semibold">Call Now</p>
                      <p className="text-cyan-400 text-sm">+1 302 464 0950</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-semibold">Send Email</p>
                      <p className="text-purple-400 text-sm">kleber@ziontechgroup.com</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-400 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-white font-semibold">Monday - Friday</p>
                      <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-white font-semibold">Saturday</p>
                      <p className="text-gray-400 text-sm">10:00 AM - 4:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-white font-semibold">24/7 Support</p>
                      <p className="text-gray-400 text-sm">Emergency technical support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group. Let's discuss how our revolutionary solutions can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
            </div>

            <div className="mt-12 bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <p className="text-gray-300 mb-4">
                <strong>Zion Tech Group</strong> - Revolutionizing technology, one breakthrough at a time.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <span>Mobile: +1 302 464 0950</span>
                <span>•</span>
                <span>Email: kleber@ziontechgroup.com</span>
                <span>•</span>
                <span>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticBackground2026>
  );
};

export default Contact;