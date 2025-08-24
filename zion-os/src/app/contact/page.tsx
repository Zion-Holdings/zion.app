"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        budget: "",
        timeline: ""
      });
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to transform your business with AI-powered solutions? Get in touch with our team 
          and let's discuss how we can help you achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Send Us a Message</h2>
          
          {submitStatus === "success" && (
            <div className="bg-green-600 text-white p-4 rounded-lg">
              Thank you for your message! We'll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="zion-os">Zion OS Platform</option>
                  <option value="ai-services">AI Services</option>
                  <option value="it-services">IT Services</option>
                  <option value="micro-saas">Micro SAAS Solutions</option>
                  <option value="blockchain">Blockchain & Web3</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="custom">Custom Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-25k">$5,000 - $25,000</option>
                  <option value="25k-100k">$25,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="over-12-months">Over 12 months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full p-3 bg-zinc-900 border border-white/10 rounded focus:border-blue-500 focus:outline-none"
                placeholder="Tell us about your project, requirements, or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg font-semibold transition-colors"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="opacity-80">+1 302 464 0950</p>
                  <p className="text-sm opacity-60">Available Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="opacity-80">kleber@ziontechgroup.com</p>
                  <p className="text-sm opacity-60">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="opacity-80">364 E Main St STE 1008<br />Middletown DE 19709<br />United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-xs opacity-60">
              * Emergency support available 24/7 for enterprise clients
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Sales%20Inquiry"
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition-colors"
              >
                Sales Inquiry
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Support%20Request"
                className="block w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-center font-medium transition-colors"
              >
                Support Request
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Partnership%20Opportunity"
                className="block w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-center font-medium transition-colors"
              >
                Partnership Opportunity
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-white">in</span>
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <span className="text-white">𝕏</span>
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-white">GH</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="opacity-90 mb-6 max-w-2xl mx-auto">
          Don't wait to transform your business. Contact us today and let's discuss how our AI-powered 
          solutions can help you achieve your goals faster and more efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/multiverse/launch"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Launch Your Instance
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            View Our Services
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">How quickly can you respond to inquiries?</h3>
            <p className="opacity-80 text-sm">
              We typically respond to all inquiries within 24 hours during business days. For urgent matters, 
              enterprise clients have access to our 24/7 emergency support line.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Do you offer free consultations?</h3>
            <p className="opacity-80 text-sm">
              Yes! We offer a free 30-minute consultation to discuss your project requirements and explore 
              how our solutions can help your business.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">What industries do you specialize in?</h3>
            <p className="opacity-80 text-sm">
              We serve businesses across all industries including healthcare, finance, education, legal, 
              government, and more. Our solutions are designed to be industry-agnostic and customizable.
            </p>
          </div>
          
          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Do you work with international clients?</h3>
            <p className="opacity-80 text-sm">
              Absolutely! We work with clients worldwide and have experience with various compliance 
              requirements including GDPR, HIPAA, and other international standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}