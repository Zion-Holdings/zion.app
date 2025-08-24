import React, { useState } from 'react';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@ziontechgroup.com',
      description: 'Send us a message anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  const services = [
    'AI Development',
    'Cloud Infrastructure',
    'Digital Transformation',
    'Cybersecurity',
    'Data Analytics',
    'Custom Software',
    'Consulting',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business? Let's start a conversation about how Zion Tech Group can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl glass-morphism border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 animate-float">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                  <div className="text-zion-cyan font-semibold text-lg mb-2">{method.value}</div>
                  <p className="text-zion-slate-light">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-transparent to-zion-slate-dark/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="p-8 rounded-2xl glass-morphism border border-zion-cyan/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-white font-semibold mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-zion-slate-dark text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-zion-emerald/20 border border-zion-emerald/30 rounded-lg text-zion-emerald-light">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                      ❌ There was an error sending your message. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan disabled:from-zion-slate disabled:to-zion-slate text-zion-slate-dark disabled:text-zion-slate-light rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Info Panel */}
              <div className="space-y-8">
                <div className="p-8 rounded-2xl glass-morphism border border-zion-purple/30">
                  <h3 className="text-2xl font-bold text-white mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-zion-purple rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Initial Consultation</h4>
                        <p className="text-zion-slate-light text-sm">We'll schedule a call to understand your needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-zion-purple rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Proposal & Planning</h4>
                        <p className="text-zion-slate-light text-sm">We'll create a customized solution for your project</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-zion-purple rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Project Kickoff</h4>
                        <p className="text-zion-slate-light text-sm">We'll begin implementation with regular updates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl glass-morphism border border-zion-blue/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion?</h3>
                  <ul className="space-y-3 text-zion-slate-light">
                    <li className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span>Expert AI & Tech Professionals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span>Proven Track Record</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span>24/7 Support & Communication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span>Flexible Engagement Models</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-zion-cyan">✓</span>
                      <span>Competitive Pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-xl glass-morphism border border-zion-cyan/20">
              <h3 className="text-xl font-bold text-white mb-3">How quickly can you start a project?</h3>
              <p className="text-zion-slate-light">
                Most projects can begin within 1-2 weeks of our initial consultation. We pride ourselves on quick turnaround times while maintaining quality standards.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-morphism border border-zion-cyan/20">
              <h3 className="text-xl font-bold text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-zion-slate-light">
                We work across all industries including healthcare, finance, manufacturing, retail, and more. Our AI and tech solutions are adaptable to any business sector.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-morphism border border-zion-cyan/20">
              <h3 className="text-xl font-bold text-white mb-3">Do you provide ongoing support?</h3>
              <p className="text-zion-slate-light">
                Yes, we offer comprehensive ongoing support and maintenance packages to ensure your solutions continue to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
