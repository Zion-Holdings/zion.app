import React, { useState } from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group - Get Started Today</title>
        <meta name="description" content="Get in touch with Zion Tech Group to discuss your AI and automation needs. Start your journey to autonomous technology today." />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch to discuss your AI and automation needs." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with autonomous technology? Let's start a conversation.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section className="bg-white" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="general">General Inquiry</option>
                  <option value="ai-automation">AI & Automation</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="performance-optimization">Performance Optimization</option>
                  <option value="security-compliance">Security & Compliance</option>
                  <option value="content-generation">Content Generation</option>
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
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a specific project in mind or just want to explore the possibilities of autonomous technology, we're here to help.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">hello@ziontechgroup.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">24 hours or less</p>
                  <p className="text-sm text-gray-500">For urgent matters, we offer priority support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-gray-600">Free initial consultation</p>
                  <p className="text-sm text-gray-500">Let's discuss your needs and explore solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about working with Zion Tech Group
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-bold mb-4 text-gray-900">What services do you offer?</h3>
            <p className="text-gray-600">
              We specialize in AI-powered automation, cloud infrastructure, performance optimization, security & compliance, and content generation. Our solutions are designed to operate autonomously with minimal human intervention.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4 text-gray-900">How quickly can you start a project?</h3>
            <p className="text-gray-600">
              Most projects can begin within 1-2 weeks of initial consultation. Our autonomous systems allow us to rapidly prototype and deploy solutions, with full implementation typically completed in 4-8 weeks.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Do you offer ongoing support?</h3>
            <p className="text-gray-600">
              Yes! Our autonomous systems provide 24/7 monitoring and optimization. We also offer dedicated support plans for ongoing maintenance, updates, and strategic guidance.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-4 text-gray-900">What makes your approach unique?</h3>
            <p className="text-gray-600">
              Our autonomous technology platform operates independently, continuously learning and improving. With 227+ active automations and 99.99% uptime, we deliver results that traditional approaches simply can't match.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the autonomous technology revolution today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="#contact-form">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" href="/case-studies" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}