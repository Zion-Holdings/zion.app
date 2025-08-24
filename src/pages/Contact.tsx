import React from 'react';
import { SEO } from '../components/SEO';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with our team for any questions or support."
        keywords="contact, support, Zion Tech Group"
        canonical="https://ziontechgroup.com/contact"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Contact Us</h1>
        <p className="text-lg text-zion-slate-light mb-8">
          Get in touch with our team for any questions or support.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-zion-slate mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate focus:border-zion-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate focus:border-zion-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate focus:border-zion-cyan focus:outline-none transition-colors"
                  placeholder="What can we help you with?"
                />
              </div>
              
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Message</label>
                <textarea 
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate h-32 focus:border-zion-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>
              
              <button 
                type="submit"
                className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-zion-slate mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zion-blue mb-3">Headquarters</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zion-purple mb-3">Support</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>Email:</strong> support@ziontechgroup.com</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zion-cyan mb-3">Business Hours</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zion-blue mb-3">Emergency Support</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>24/7 Hotline:</strong> +1 302 464 0950</p>
                  <p><strong>Critical Issues:</strong> Immediate response</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate mb-8 text-center">Other Ways to Connect</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Email Us</h3>
              <p className="text-zion-slate-light mb-4">
                Send us a detailed message and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="text-zion-blue hover:text-zion-blue-dark font-semibold"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Call Us</h3>
              <p className="text-zion-slate-light mb-4">
                Speak directly with our team for immediate assistance and support.
              </p>
              <a 
                href="tel:+13024640950"
                className="text-zion-purple hover:text-zion-purple-dark font-semibold"
              >
                +1 302 464 0950
              </a>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Visit Website</h3>
              <p className="text-zion-slate-light mb-4">
                Explore our services and learn more about what we can do for you.
              </p>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-dark font-semibold"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate mb-8 text-center">Our Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-zion-slate/10">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Zion Tech Group Headquarters</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                United States
              </p>
            </div>
            <div className="bg-zion-slate/10 h-64 rounded-lg flex items-center justify-center">
              <p className="text-zion-slate-light">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zion-slate/10">
              <h3 className="text-lg font-semibold text-zion-slate mb-2">What services do you offer?</h3>
              <p className="text-zion-slate-light">
                We offer comprehensive IT and AI services including AI development, cybersecurity, cloud solutions, 
                digital transformation, and more. Visit our services page for detailed information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zion-slate/10">
              <h3 className="text-lg font-semibold text-zion-slate mb-2">How quickly can you respond to urgent requests?</h3>
              <p className="text-zion-slate-light">
                For critical issues, we provide immediate response. For general inquiries, we respond within 24 hours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zion-slate/10">
              <h3 className="text-lg font-semibold text-zion-slate mb-2">Do you work with international clients?</h3>
              <p className="text-zion-slate-light">
                Yes, we serve clients worldwide and can accommodate different time zones and requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zion-slate/10">
              <h3 className="text-lg font-semibold text-zion-slate mb-2">What is your pricing structure?</h3>
              <p className="text-zion-slate-light">
                Our pricing varies based on project scope and requirements. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
