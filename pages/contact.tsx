import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, Send, CheckCircle, Star, Zap, Shield, Users, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
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

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      value: '+1 302 464 0950',
      description: 'Available 24/7 for urgent matters',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      value: 'kleber@ziontechgroup.com',
      description: 'Response within 2 hours during business hours',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, United States',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Fast Response',
      description: 'Average response time under 2 hours'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Dedicated Support',
      description: 'Personal account manager for enterprise clients'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact our team of experts for support, sales inquiries, or technical assistance. Available 24/7." />
        <meta name="keywords" content="contact Zion Tech Group, support, sales, technical assistance, micro SaaS services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group. Contact our team of experts for support, sales inquiries, or technical assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Zion Tech Group" />
        <meta name="twitter:description" content="Get in touch with Zion Tech Group. Contact our team of experts for support, sales inquiries, or technical assistance." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="particles-bg opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <MessageSquare className="w-4 h-4 text-blue-300 mr-2" />
            <span className="text-sm font-medium text-blue-300">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ready to transform your business with our micro SaaS solutions? 
            Our expert team is here to help you succeed. Get in touch today.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="neon-text-green">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of experts is here to help you succeed with our micro SaaS services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <Phone className="h-16 w-16 text-neon-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
                <p className="text-neon-blue font-semibold text-xl mb-2">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">Available 24/7 for urgent support</p>
                <p className="text-gray-400 text-sm mt-2">International calls welcome</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <Mail className="h-16 w-16 text-neon-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-neon-green font-semibold text-xl mb-2">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 2 hours</p>
                <p className="text-gray-400 text-sm mt-2">Technical and sales inquiries</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <MapPin className="h-16 w-16 text-neon-purple mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Headquarters</h3>
                <p className="text-neon-purple font-semibold text-base leading-tight mb-2">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709<br />
                  United States
                </p>
                <p className="text-gray-400 text-sm">Main office location</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-lg mb-8">
              Ready to transform your business? Start your free trial today or schedule a consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/micro-saas"
                className="btn-futuristic px-8 py-3 text-lg font-semibold"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                View Pricing
                <DollarSign className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                variant="glass"
                size="lg"
                hover
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${method.bgColor} flex items-center justify-center text-white`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <div className="text-lg font-semibold text-gray-800 mb-2">{method.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </div>
              
              {isSubmitted ? (
                <Card variant="glass" size="lg" className="text-center p-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                  </p>
                </Card>
              ) : (
                <Card variant="futuristic" size="xl" className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-content-generator">AI Content Generator Pro</option>
                        <option value="cloud-cost-optimizer">Cloud Cost Optimizer</option>
                        <option value="ai-code-review">AI Code Review Assistant</option>
                        <option value="api-doc-generator">API Documentation Generator</option>
                        <option value="database-monitor">Database Performance Monitor</option>
                        <option value="ai-sales-assistant">AI Sales Assistant</option>
                        <option value="ai-legal-assistant">AI Legal Assistant</option>
                        <option value="ai-hr-assistant">AI HR Assistant</option>
                        <option value="business-intelligence">Business Intelligence Hub</option>
                        <option value="ai-video-editor">AI Video Editor Pro</option>
                        <option value="email-marketing">Email Marketing Automation</option>
                        <option value="social-media-scheduler">Social Media Scheduler</option>
                        <option value="invoice-billing">Invoice & Billing Manager</option>
                        <option value="project-management">Project Management Suite</option>
                        <option value="customer-support">Customer Support Hub</option>
                        <option value="ai-seo-optimizer">AI SEO Optimizer</option>
                        <option value="ai-chatbot">AI Chatbot Platform</option>
                        <option value="ai-fraud-detection">AI Fraud Detection</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="futuristic"
                      size="lg"
                      icon={<Send className="w-5 h-5" />}
                      iconPosition="right"
                      fullWidth
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      glow
                      className="py-4"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
            
            {/* Why Choose Us */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-lg text-gray-600">
                  We're not just another tech company. We're your strategic partner in digital transformation.
                </p>
              </div>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <Card
                    key={index}
                    variant="glass"
                    size="md"
                    hover
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2hrs</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-200/50">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="holographic" size="xl" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Our team is ready to help you succeed with our micro SaaS solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="futuristic"
                size="lg"
                href="tel:+13024640950"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
                glow
                className="min-w-[200px]"
              >
                Call Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                href="mailto:kleber@ziontechgroup.com"
                icon={<Mail className="w-5 h-5" />}
                iconPosition="left"
                glow
                className="min-w-[200px]"
              >
                Send Email
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}