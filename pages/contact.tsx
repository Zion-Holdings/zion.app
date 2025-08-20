import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Get in touch via email',
      contact: 'hello@ziontechgroup.com',
      color: 'bg-blue-100'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      contact: 'Available 24/7',
      color: 'bg-purple-100'
    },
    {
      icon: '📱',
      title: 'Phone',
      description: 'Speak directly with our experts',
      contact: '+1 (555) 123-4567',
      color: 'bg-green-100'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group to discuss your AI and automation needs." />
        <meta property="og:title" content="Contact Us | Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group to discuss your AI and automation needs." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-8">
              <span className="mr-2">💬</span>
              Get In Touch
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Talk
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with autonomous technology? Let's discuss how we can help.
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Methods */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your company name"
                  />
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
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Other ways to reach us
              </h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className="text-2xl">{method.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {method.description}
                        </p>
                        <p className="text-blue-600 font-medium">
                          {method.contact}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Office Location */}
              <Card className="mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Office Location
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Visit our headquarters
                    </p>
                    <p className="text-gray-900">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94000<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about working with Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How quickly can you start a project?
              </h3>
              <p className="text-gray-600">
                We can typically begin work within 1-2 weeks of project approval. Our autonomous systems allow us to rapidly deploy and scale solutions.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What industries do you work with?
              </h3>
              <p className="text-gray-600">
                We work across all industries, from healthcare and finance to manufacturing and retail. Our AI solutions are adaptable to any business domain.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive support and maintenance packages. Our autonomous systems also provide 24/7 monitoring and self-healing capabilities.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How do you ensure data security?
              </h3>
              <p className="text-gray-600">
                We implement enterprise-grade security measures including encryption, access controls, and automated threat detection to protect your data.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's discuss how our autonomous technology can transform your business operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Explore Our Services
              </Button>
              <Button 
                href="/case-studies" 
                variant="ghost" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}