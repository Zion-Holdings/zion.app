import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '', service: 'general' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group to discuss autonomous technology solutions, AI innovation, and how we can transform your business." />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group to discuss autonomous technology solutions, AI innovation, and how we can transform your business." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to revolutionize your business with autonomous technology? 
                Let's discuss how Zion Tech Group can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
                    <p className="text-green-300 text-center">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="autonomous-systems">Autonomous Systems</option>
                      <option value="cloud-automation">Cloud Automation</option>
                      <option value="security-monitoring">Security & Monitoring</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="consulting">Consulting Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Whether you're looking to implement autonomous systems, 
                    optimize your cloud infrastructure, or explore AI solutions, 
                    our team of experts is here to help.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We typically respond to all inquiries within 24 hours 
                    and are happy to schedule a consultation to discuss 
                    your specific needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Global Operations</h3>
                      <p className="text-white/70">Serving clients worldwide with distributed teams and cloud-based solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⏰</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">24/7 Support</h3>
                      <p className="text-white/70">Our autonomous systems never sleep, ensuring continuous operation and monitoring</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🚀</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Fast Response</h3>
                      <p className="text-white/70">Quick turnaround times for urgent projects and immediate support needs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Ready to Start?</h3>
                  <p className="text-white/80 mb-4">
                    Schedule a free consultation to discuss your project requirements 
                    and see how our autonomous technology can transform your business.
                  </p>
                  <Link 
                    href="/about" 
                    className="inline-block bg-white/20 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Contact Methods */}
            <section className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Other Ways to Connect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-white/70 mb-4">Direct communication for detailed discussions</p>
                  <a href="mailto:contact@ziontech.group" className="text-cyan-400 hover:text-cyan-300">
                    contact@ziontech.group
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-white/70 mb-4">Professional networking and updates</p>
                  <a href="https://linkedin.com/company/ziontechgroup" className="text-cyan-400 hover:text-cyan-300">
                    Follow Us
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-4xl mb-4">🐦</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Twitter</h3>
                  <p className="text-white/70 mb-4">Latest news and technology insights</p>
                  <a href="https://twitter.com/ziontechgroup" className="text-cyan-400 hover:text-cyan-300">
                    @ziontechgroup
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}