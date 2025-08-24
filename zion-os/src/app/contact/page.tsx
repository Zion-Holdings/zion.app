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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitMessage("Thank you for your inquiry! We'll get back to you within 24 hours.");
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to transform your business with our cutting-edge solutions? Get in touch with our team of experts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="font-semibold">Mobile</div>
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-2xl">✉️</div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="opacity-80">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709<br />
                    United States
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Why Choose Zion Tech Group?</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>• 10+ years of experience in digital transformation</li>
              <li>• 200+ successful projects delivered</li>
              <li>• 24/7 technical support and monitoring</li>
              <li>• Competitive pricing with transparent costs</li>
              <li>• Rapid deployment and implementation</li>
              <li>• Ongoing maintenance and optimization</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-yellow-600/20 to-red-600/20 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
              <div>Saturday: 10:00 AM - 2:00 PM EST</div>
              <div>Sunday: Closed</div>
              <div className="mt-3 text-blue-400">Emergency support available 24/7</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          
          {submitMessage && (
            <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-green-300">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Service of Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select a service...</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="it-infrastructure">IT Infrastructure</option>
                <option value="blockchain-web3">Blockchain & Web3</option>
                <option value="iot-edge">IoT & Edge Computing</option>
                <option value="data-analytics">Data & Analytics</option>
                <option value="api-integration">API & Integration</option>
                <option value="custom-development">Custom Development</option>
                <option value="consulting">Consulting & Strategy</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select budget...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="over-12-months">Over 12 months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us about your project requirements, challenges, and goals..."
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Additional Contact Methods */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">Other Ways to Connect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-lg font-semibold mb-2">Phone Consultation</h3>
            <p className="text-sm opacity-80 mb-3">Schedule a free 30-minute consultation call to discuss your project.</p>
            <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 text-sm">Call Now</a>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-sm opacity-80 mb-3">Chat with our team in real-time for immediate assistance.</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm">Start Chat</button>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-lg font-semibold mb-2">Schedule Meeting</h3>
            <p className="text-sm opacity-80 mb-3">Book a meeting slot that works best for your schedule.</p>
            <a href="mailto:kleber@ziontechgroup.com?subject=Schedule Meeting" className="text-blue-400 hover:text-blue-300 text-sm">Book Meeting</a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">What is your typical project timeline?</h3>
              <p className="text-sm opacity-80">Project timelines vary based on complexity. Simple integrations take 2-4 weeks, while complex platforms can take 3-6 months. We provide detailed timelines during project planning.</p>
            </div>
            
            <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Do you provide ongoing support?</h3>
              <p className="text-sm opacity-80">Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and technical support to ensure your solutions run smoothly.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">What industries do you specialize in?</h3>
              <p className="text-sm opacity-80">We work across industries including healthcare, finance, manufacturing, retail, and government. Our solutions are adaptable to any sector's specific needs.</p>
            </div>
            
            <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Can you work with existing systems?</h3>
              <p className="text-sm opacity-80">Absolutely! We specialize in integrating with legacy systems and can modernize your existing infrastructure while maintaining business continuity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}