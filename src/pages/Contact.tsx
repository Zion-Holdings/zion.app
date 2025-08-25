import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Users } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      
      // Show success toast
      if (typeof window !== 'undefined' && (window as any).showToast) {
        (window as any).showToast.success('Message Sent!', 'Thank you for contacting us. We\'ll get back to you soon.');
      }
    } catch (error) {
      setSubmitStatus('error');
      
      // Show error toast
      if (typeof window !== 'undefined' && (window as any).showToast) {
        (window as any).showToast.error('Error', 'Failed to send message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a detailed message'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown DE 19709',
      href: '#',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
      href: '#',
      description: 'Eastern Time Zone'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cybersecurity Solutions',
    'Micro SAAS Development',
    'Space Technology',
    'Healthcare AI',
    'Manufacturing AI',
    'Emerging Technology',
    'Autonomous Systems',
    'Custom Solution',
    'Other'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>
      
      <div className="neural-lines">
        <div className="neural-line" style={{ top: '15%', width: '50%', left: '10%', animationDelay: '0s' }}></div>
        <div className="neural-line" style={{ top: '35%', width: '40%', left: '25%', animationDelay: '1s' }}></div>
        <div className="neural-line" style={{ top: '55%', width: '60%', left: '15%', animationDelay: '2s' }}></div>
        <div className="neural-line" style={{ top: '75%', width: '45%', left: '20%', animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="neon-text">
                Touch
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          {/* Enhanced Contact Methods Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <a
                    href={method.href}
                    className="block futuristic-card p-6 rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:neon-text transition-colors duration-300">
                      {method.title}
                    </h3>
                    <div className="text-zion-cyan text-center mb-3 whitespace-pre-line">
                      {method.value}
                    </div>
                    <p className="text-zion-slate-light text-sm text-center">
                      {method.description}
                    </p>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 futuristic-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text mb-6">Send Us a Message</h2>
              <p className="text-xl text-zion-slate-light">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              className="futuristic-card p-8 rounded-xl border border-zion-cyan/30 shadow-xl shadow-zion-cyan/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-zion-cyan font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 futuristic-card border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-zion-cyan font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 futuristic-card border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-zion-cyan font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 futuristic-card border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-zion-cyan font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 futuristic-card border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mb-8">
                <label htmlFor="message" className="block text-zion-cyan font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 futuristic-card border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                  placeholder="Tell us about your project, requirements, and goals..."
                />
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="quantum-button px-8 py-4 text-lg font-medium transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold neon-text mb-6">Why Choose Zion Tech Group?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-zion-slate-light">Our team consists of industry experts with decades of combined experience in cutting-edge technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                    <p className="text-zion-slate-light">We serve clients worldwide, providing 24/7 support and localized solutions for international markets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personalized Service</h3>
                    <p className="text-zion-slate-light">Every project is unique, and we provide customized solutions tailored to your specific needs and goals.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="futuristic-card p-8 rounded-xl border border-zion-cyan/30">
              <h3 className="text-2xl font-bold text-white mb-6">Response Time Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Initial Response</span>
                  <span className="text-zion-cyan font-semibold">Within 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Detailed Quote</span>
                  <span className="text-zion-cyan font-semibold">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Project Start</span>
                  <span className="text-zion-cyan font-semibold">Within 1 week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light">Support Response</span>
                  <span className="text-zion-cyan font-semibold">Within 1 hour</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-zion-cyan/10 rounded-lg border border-zion-cyan/30">
                <p className="text-zion-cyan text-sm text-center">
                  <strong>Emergency Support:</strong> Available 24/7 for critical issues
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold neon-text mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="quantum-button px-8 py-4 text-lg font-medium transform hover:scale-105">
                Schedule a Call
              </button>
              <button className="futuristic-card border border-zion-cyan/30 text-zion-cyan px-8 py-4 text-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}