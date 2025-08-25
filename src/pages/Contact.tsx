import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Ready to transform your business? Let's discuss how our innovative solutions 
            can drive your success. We're here to help you navigate the future of technology.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light mb-2">+1 (302) 464-0950</p>
              <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light mb-2">kleber@ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">24/7 Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light mb-2">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light text-sm">Middletown, DE 19709</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-zion-slate-light mb-2">Monday - Friday</p>
              <p className="text-zion-slate-light text-sm">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
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
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter company name"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter phone number"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="micro-saas">Micro SAAS Services</option>
                    <option value="ai-services">AI & Machine Learning</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="enterprise-solutions">Enterprise Solutions</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
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
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
                <div className="bg-zion-slate-dark h-64 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-zion-slate-light">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-zion-cyan" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Map integration coming soon</p>
                  </div>
                </div>
                <div className="space-y-3 text-zion-slate-light">
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                  <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4 text-zion-slate-light">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Expert team with 15+ years of experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Cutting-edge AI and machine learning solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>24/7 support and maintenance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Proven track record of successful projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What services does Zion Tech Group offer?</h3>
              <p className="text-zion-slate-light">
                We offer a comprehensive range of services including micro SAAS development, AI and machine learning solutions, 
                cloud infrastructure, digital transformation consulting, and enterprise technology solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">How quickly can you start working on my project?</h3>
              <p className="text-zion-slate-light">
                We typically begin project planning within 48 hours of initial contact. Actual development start dates 
                depend on project scope and current capacity, but we aim to start within 1-2 weeks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support after project completion?</h3>
              <p className="text-zion-slate-light">
                Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and 24/7 
                technical support to ensure your solution continues to perform optimally.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-zion-slate-light">
                We work across various industries including healthcare, finance, manufacturing, retail, education, 
                and technology. Our solutions are adaptable to any sector that can benefit from digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Don't wait to transform your business. Contact us today and let's discuss how we can help 
            you achieve your technology goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
