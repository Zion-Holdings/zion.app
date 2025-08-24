import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';

export default function Contact() {
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 302 464 0950', 'Available 24/7'],
      color: 'from-zion-cyan to-zion-purple',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['kleber@ziontechgroup.com', 'Quick response guaranteed'],
      color: 'from-zion-purple to-zion-cyan',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      color: 'from-zion-cyan to-zion-blue-light',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM EST', 'Weekend: By appointment'],
      color: 'from-zion-purple to-zion-cyan',
      action: null
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & DevOps',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Quantum Computing',
    'Data & Analytics',
    'Custom Development'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-marketplace', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/lovable_dev', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/zionmarketplace', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to start your digital transformation journey? Our team of experts is here to help 
              you choose the perfect solutions for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us. We're here to help you succeed with your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className={`text-zion-slate-light ${idx === 0 ? 'mb-2' : 'mb-4'}`}>
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block bg-white/10 text-zion-cyan hover:bg-zion-cyan hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    {info.action.includes('tel:') ? 'Call Now' : info.action.includes('mailto:') ? 'Send Email' : 'Get Directions'}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Send Us a Message</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a customized solution.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-12 text-center"
            >
              <CheckCircle className="w-20 h-20 text-zion-cyan mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-zion-slate-light text-lg">
                Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, requirements, and goals..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-4 px-8 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Follow us on social media for the latest updates, insights, and technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-zion-cyan" />
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-zion-cyan" />
                Additional Information
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                  <p className="text-zion-slate-light">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Consultation</h4>
                  <p className="text-zion-slate-light">Free initial consultation to discuss your project requirements and goals.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
                  <p className="text-zion-slate-light">24/7 technical support available for all our enterprise clients.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait to transform your business. Contact us today and let's discuss how our 
              revolutionary technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Email</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}