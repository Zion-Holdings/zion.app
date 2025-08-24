'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact: NextPage = () => {
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
      icon: Mail,
      title: 'Email Us',
      value: 'info@ziontechgroup.com',
      subtitle: 'We\'ll respond within 24 hours',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM PST',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      subtitle: 'Schedule an in-person meeting',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      value: '24/7 Available',
      subtitle: 'Emergency support anytime',
      color: 'text-orange-400'
    }
  ];

  const services = [
    'AI Development',
    'Cloud Architecture',
    'Web Development',
    'Data Analytics',
    'Blockchain Solutions',
    'IoT Platforms',
    'Cybersecurity',
    'Digital Transformation',
    'Other'
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Innovation Drive, Suite 100',
      zip: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@ziontechgroup.com'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Tech Square, Floor 3',
      zip: 'London, EC2A 4BX',
      phone: '+44 20 7123 4567',
      email: 'london@ziontechgroup.com'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Digital Hub, Level 5',
      zip: 'Singapore 018956',
      phone: '+65 6123 4567',
      email: 'singapore@ziontechgroup.com'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact our team for technology solutions, project inquiries, or general questions. We're here to help transform your business." />
        <meta name="keywords" content="contact Zion Tech Group, get quote, project inquiry, technology consultation, support" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss your project 
            and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <div className="text-blue-400 font-medium mb-2">{info.value}</div>
                <div className="text-gray-400 text-sm">{info.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-200">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Office Locations */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{office.city}</h3>
                        <div className="text-gray-400 mb-3">
                          <div>{office.address}</div>
                          <div>{office.zip}</div>
                          <div className="text-sm text-gray-500">{office.country}</div>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">{office.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get quick answers to common questions about working with Zion Tech Group.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How quickly can you start a project?</h3>
              <p className="text-gray-300">
                We can typically begin most projects within 2-4 weeks after the initial consultation and contract signing. 
                For urgent projects, we offer expedited onboarding options.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What is your typical project timeline?</h3>
              <p className="text-gray-300">
                Project timelines vary based on complexity and scope. Small projects typically take 4-8 weeks, 
                while enterprise solutions can take 3-12 months. We provide detailed timelines during the planning phase.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support after project completion?</h3>
              <p className="text-gray-300">
                Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, 
                and 24/7 emergency support. We also provide training and documentation for your team.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-300">
                We have experience across 25+ industries including healthcare, finance, retail, manufacturing, 
                education, and more. Our solutions are tailored to meet industry-specific requirements and compliance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and explore how our technology solutions 
            can drive growth and innovation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15551234567" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <a 
              href="mailto:info@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;