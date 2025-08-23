import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, 
  CheckCircle, AlertCircle, Building2, User, MessageSquare, Globe
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general',
    budget: 'not-specified',
    timeline: 'not-specified'
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string>('');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      }
      case 'phone': {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        return value && !phoneRegex.test(value.replace(/\s/g, '')) ? 'Please enter a valid phone number' : '';
      }
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setActiveField('');
    
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setActiveField(e.target.name);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    for (const key of Object.keys(formData)) {
      if (key === 'phone' || key === 'company') continue; // Optional fields
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
        message: '',
        service: 'general',
        budget: 'not-specified',
        timeline: 'not-specified'
      });
      setErrors({});
    }, 5000);
  };

  const getFieldClassName = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 backdrop-blur-sm";
    const errorClasses = errors[fieldName] ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-cyan-500";
    const activeClasses = activeField === fieldName ? "bg-white/15 border-white/40" : "";
    
    return `${baseClasses} ${errorClasses} ${activeClasses}`;
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for revolutionary technology solutions, AI services, and enterprise consulting." />
        <meta name="keywords" content="contact, Zion Tech Group, AI services, technology consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with revolutionary technology? Let's discuss how Zion Tech Group can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Send className="w-8 h-8 mr-3 text-cyan-400" />
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto animate-pulse" />
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        className={getFieldClassName('name')}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center mt-2 text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 mr-2" />
                          {errors.name}
                        </motion.div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        className={getFieldClassName('email')}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center mt-2 text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 mr-2" />
                          {errors.email}
                        </motion.div>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        className={getFieldClassName('company')}
                        placeholder="Enter your company name"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        className={getFieldClassName('phone')}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center mt-2 text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 mr-2" />
                          {errors.phone}
                        </motion.div>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={getFieldClassName('service')}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="ai-services">AI & Machine Learning</option>
                        <option value="quantum-computing">Quantum Computing</option>
                        <option value="space-technology">Space Technology</option>
                        <option value="enterprise-solutions">Enterprise Solutions</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="custom-development">Custom Development</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={getFieldClassName('budget')}
                      >
                        <option value="not-specified">Not Specified</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={getFieldClassName('timeline')}
                      >
                        <option value="not-specified">Not Specified</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="6-12-months">6-12 Months</option>
                        <option value="over-12-months">Over 12 Months</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        className={getFieldClassName('message')}
                        placeholder="Tell us about your project, goals, or how we can help..."
                      />
                      {errors.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center mt-2 text-red-400 text-sm"
                        >
                          <AlertCircle className="w-4 h-4 mr-2" />
                          {errors.message}
                        </motion.div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Ready to discuss your next project? We're here to help you navigate the future of technology.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">{contactInfo.mobile}</p>
                      <p className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">{contactInfo.email}</p>
                      <p className="text-sm text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                      <p className="text-sm text-gray-400">Visit by appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-3">
                    {[
                      'Revolutionary AI and quantum technology solutions',
                      'Expert team with decades of experience',
                      'Proven track record of successful implementations',
                      '24/7 support and maintenance',
                      'Competitive pricing and flexible contracts'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
