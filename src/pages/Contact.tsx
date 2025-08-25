import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building2,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
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
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how Zion Tech Group can help you achieve your goals 
            with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light text-sm mb-3">Get in touch via email</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-zion-purple-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light text-sm mb-3">Speak with our team</p>
              <a 
                href="tel:+13024640950" 
                className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                +1 (302) 464-0950
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm mb-3">Our headquarters</p>
              <p className="text-zion-cyan text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-zion-purple-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-zion-slate-light text-sm mb-3">When we're available</p>
              <p className="text-zion-cyan text-sm">
                Mon-Fri: 9AM-6PM EST<br />
                Sat: 10AM-2PM EST
              </p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
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
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
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
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
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
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
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
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
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
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  We are a leading technology company specializing in micro SAAS solutions, AI services, 
                  and digital transformation. Our team of experts is dedicated to helping businesses 
                  leverage cutting-edge technology for growth and success.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Founded in 2009</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Global reach with local expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">24/7 customer support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert team with 15+ years of experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cutting-edge AI and machine learning solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scalable micro SAAS platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proven track record of successful implementations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8">
            Don't wait to transform your business. Contact us today and let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
