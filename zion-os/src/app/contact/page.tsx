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
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
    setIsSubmitting(false);
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
  };

  const services = [
    "AI Autonomous Enterprise Platform",
    "AI Consciousness Simulator Pro",
    "AI Multimodal Fusion Platform",
    "Smart CRM Intelligence Suite",
    "Affiliate Attribution Suite",
    "Intelligent HR Analytics Platform",
    "Quantum Cybersecurity Suite",
    "Edge Computing Orchestrator",
    "Blockchain Governance Platform",
    "Satellite AI Orchestrator",
    "Space Data Analytics Platform",
    "AI Financial Planning Platform",
    "Cryptocurrency Intelligence Suite",
    "AI Drug Discovery Platform",
    "Genomic AI Analytics Suite",
    "AI Personalized Learning Platform",
    "Virtual Reality Education Suite",
    "Smart Manufacturing AI Platform",
    "Industrial IoT Platform",
    "AI Retail Optimization Suite",
    "Omnichannel Commerce Platform",
    "Quantum AI Hybrid Platform",
    "Neuromorphic Computing Platform",
    "Metaverse AI Platform",
    "Web3 Identity Platform",
    "Custom Solution"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to transform your business with revolutionary technology? 
          Contact us today for a personalized consultation and discover how our AI-powered solutions can drive unprecedented growth and efficiency.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg p-6 border border-blue-500/20 text-center">
          <div className="text-3xl mb-4">📞</div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <a 
            href="tel:+13024640950" 
            className="text-blue-400 hover:text-blue-300 text-lg font-semibold"
          >
            +1 302 464 0950
          </a>
          <p className="text-sm opacity-80 mt-2">Available Mon-Fri, 9AM-6PM EST</p>
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg p-6 border border-green-500/20 text-center">
          <div className="text-3xl mb-4">✉️</div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="text-green-400 hover:text-green-300 text-lg font-semibold"
          >
            kleber@ziontechgroup.com
          </a>
          <p className="text-sm opacity-80 mt-2">Response within 24 hours</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/20 text-center">
          <div className="text-3xl mb-4">📍</div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <div className="text-purple-400 text-sm">
            364 E Main St STE 1008<br />
            Middletown DE 19709<br />
            United States
          </div>
          <p className="text-sm opacity-80 mt-2">Headquarters</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Zion Tech Group?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">First-to-Market</h3>
            <p className="text-sm opacity-80">Revolutionary solutions that don't exist elsewhere</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">60-75% Savings</h3>
            <p className="text-sm opacity-80">Significant cost reduction vs. traditional solutions</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Rapid Deployment</h3>
            <p className="text-sm opacity-80">Weeks, not months or years</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">2000% ROI</h3>
            <p className="text-sm opacity-80">Unprecedented return on investment</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
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
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service of Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select budget...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-plus">$500,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select timeline...</option>
                  <option value="immediate">Immediate (0-3 months)</option>
                  <option value="short-term">Short-term (3-6 months)</option>
                  <option value="medium-term">Medium-term (6-12 months)</option>
                  <option value="long-term">Long-term (12+ months)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell us about your project, challenges, and goals..."
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>

            {submitMessage && (
              <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 text-green-400 text-center">
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                <div>
                  <h3 className="font-semibold">Initial Consultation</h3>
                  <p className="text-sm opacity-80">We'll schedule a call to understand your needs and challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 className="font-semibold">Solution Design</h3>
                  <p className="text-sm opacity-80">Our team will design a customized solution for your business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 className="font-semibold">Proposal & Timeline</h3>
                  <p className="text-sm opacity-80">We'll provide a detailed proposal with implementation timeline</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                <div>
                  <h3 className="font-semibold">Implementation</h3>
                  <p className="text-sm opacity-80">Rapid deployment and ongoing support for your success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-6 border border-yellow-500/20">
            <h3 className="font-semibold mb-3">🚀 Ready to Get Started?</h3>
            <p className="text-sm opacity-80 mb-4">
              Don't wait to transform your business. Our revolutionary technology solutions are ready to deliver unprecedented results.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+13024640950"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-center text-sm font-semibold transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center text-sm font-semibold transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Contact Methods */}
      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Other Ways to Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl mb-2">🌐</div>
            <h3 className="font-semibold mb-2">Website</h3>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              ziontechgroup.com
            </a>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/13024640950" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              +1 302 464 0950
            </a>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://linkedin.com/company/ziontechgroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Zion Tech Group
            </a>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🐦</div>
            <h3 className="font-semibold mb-2">Twitter</h3>
            <a 
              href="https://twitter.com/ziontechgroup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              @ziontechgroup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}