import React, { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      budget: '',
      timeline: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@ziontechgroup.com',
      description: 'Send us a detailed message about your project requirements',
      color: 'cyan'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our AI automation experts',
      color: 'fuchsia'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant answers to your questions via live chat',
      color: 'green'
    },
    {
      icon: '📅',
      title: 'Schedule Meeting',
      details: 'Book a consultation',
      description: 'Schedule a 30-minute consultation with our team',
      color: 'blue'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Innovation Drive, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      icon: '🏢',
      color: 'cyan'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Tech Square, London, EC2A 4BX',
      phone: '+44 20 1234 5678',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
      icon: '🏛️',
      color: 'fuchsia'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Digital Hub, Singapore 018956',
      phone: '+65 6123 4567',
      email: 'sg@ziontechgroup.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
      icon: '🌆',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'from-cyan-400 to-blue-500',
      fuchsia: 'from-fuchsia-400 to-purple-500',
      green: 'from-green-400 to-emerald-500',
      blue: 'from-blue-400 to-indigo-500'
    };
    return colorMap[color] || 'from-gray-400 to-gray-500';
  };

  return (
    <>
      <Head>
        <title>Contact Us | Zion Tech Group - Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group to discuss your AI automation needs. Get in touch with our experts for consultation and project inquiries." />
        <meta property="og:title" content="Contact Us | Zion Tech Group" />
        <meta property="og:description" content="Contact Zion Tech Group to discuss your AI automation needs." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to transform your business with AI automation? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </header>

            {/* Contact Methods */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">How Can We Help?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(method.color)} rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{method.details}</p>
                    <p className="text-white/70 text-sm">{method.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Form and Office Locations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-development">AI Development</option>
                        <option value="automation-systems">Automation Systems</option>
                        <option value="cloud-infrastructure">Cloud Infrastructure</option>
                        <option value="devops-cicd">DevOps & CI/CD</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-25k">Under $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="over-250k">Over $250K</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="over-12-months">Over 12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Our Offices</h2>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(office.color)} rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                          {office.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">{office.city}</h3>
                          <p className="text-white/60 text-sm mb-3">{office.country}</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-white/80">{office.address}</p>
                            <p className="text-white/80">📞 {office.phone}</p>
                            <p className="text-white/80">📧 {office.email}</p>
                            <p className="text-white/60">🕒 {office.hours}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">How quickly can you start a project?</h3>
                  <p className="text-white/80 text-sm">
                    We can typically begin small projects within 2-4 weeks. For larger enterprise implementations, 
                    we usually start within 6-8 weeks after initial consultation and planning.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">What industries do you specialize in?</h3>
                  <p className="text-white/80 text-sm">
                    We work across multiple industries including manufacturing, healthcare, finance, retail, 
                    and technology. Our AI solutions are adaptable to any business domain.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Do you provide ongoing support?</h3>
                  <p className="text-white/80 text-sm">
                    Yes, we offer comprehensive support packages including 24/7 monitoring, 
                    regular updates, performance optimization, and technical support.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Can you work with existing systems?</h3>
                  <p className="text-white/80 text-sm">
                    Absolutely! We specialize in integrating AI solutions with existing infrastructure. 
                    We'll assess your current systems and design solutions that work seamlessly.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                  Let's discuss how our AI automation solutions can transform your business and drive innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                  </a>
                  <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-cyan-400/50 text-white font-bold rounded-xl transition-all duration-300">
                    View Case Studies
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}
