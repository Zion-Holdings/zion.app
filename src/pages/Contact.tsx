import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Users, CheckCircle } from 'lucide-react';

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
      value: '+1 302 464 0950',
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
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for technology solutions, consultations, and support. We're here to help transform your business."
        keywords="contact Zion Tech Group, technology consultation, AI solutions, cybersecurity support"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your business? Let's discuss how our technology solutions can help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              className="bg-zion-blue/30 border border-zion-purple/20 rounded-2xl p-8"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <p className="text-zion-slate-light">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-xl text-white focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-zion-blue-dark text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-8">
                  We're here to help you navigate the complex world of technology. 
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-zion-blue/20 border border-zion-purple/20 rounded-xl hover:border-zion-purple/40 transition-all duration-300"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-zion-purple to-zion-cyan p-3 flex-shrink-0">
                      <method.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-zion-slate-light mb-2 whitespace-pre-line">{method.value}</p>
                      <p className="text-zion-slate-light text-sm">{method.description}</p>
                      {method.href !== '#' && (
                        <a
                          href={method.href}
                          className="inline-block mt-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                        >
                          Get in touch →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-3">
                  {[
                    "Expert team with proven track record",
                    "Cutting-edge technology solutions",
                    "24/7 support and maintenance",
                    "Competitive pricing and flexible contracts",
                    "Industry-specific expertise"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-zion-blue/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss your project and explore how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}