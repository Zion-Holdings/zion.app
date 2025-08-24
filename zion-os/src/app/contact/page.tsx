"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
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
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const services = [
    "Zion OS Platform",
    "AI Content Hub",
    "AI Customer Support Suite",
    "AI Data Analytics Platform",
    "Cloud Migration Services",
    "Cybersecurity Audit & Compliance",
    "DevOps Automation & CI/CD",
    "Invoice Automation System",
    "HR Management Platform",
    "Project Management Suite",
    "Smart Contract Audit Services",
    "NFT Marketplace Platform",
    "DeFi Protocol Development",
    "Healthcare Compliance Platform",
    "Legal Document Automation",
    "Education LMS Platform",
    "Custom Development",
    "Other"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to transform your business with our innovative solutions? Get in touch with our team today.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-lg">+1 302 464 0950</p>
          <p className="text-sm opacity-80 mt-1">Mon-Fri: 9AM-6PM EST</p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-lg">kleber@ziontechgroup.com</p>
          <p className="text-sm opacity-80 mt-1">24/7 Support Available</p>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-lg">364 E Main St STE 1008</p>
          <p className="text-lg">Middletown DE 19709</p>
          <p className="text-sm opacity-80 mt-1">United States</p>
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">About Zion Tech Group</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Overview</h3>
            <p className="text-sm opacity-80 mb-4">
              Zion Tech Group is a leading technology company specializing in AI-powered solutions, 
              micro SAAS services, and innovative IT solutions. We help businesses of all sizes 
              transform their operations through cutting-edge technology and automation.
            </p>
            <h3 className="text-lg font-semibold mb-2">Core Services</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• AI-Powered Business Solutions</li>
              <li>• Cloud Migration & DevOps</li>
              <li>• Cybersecurity & Compliance</li>
              <li>• Blockchain & Web3 Development</li>
              <li>• Industry-Specific Platforms</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• 10+ Years of Experience</li>
              <li>• 500+ Successful Projects</li>
              <li>• 24/7 Technical Support</li>
              <li>• Competitive Pricing</li>
              <li>• Custom Solutions</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 mt-4">Industries We Serve</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Healthcare & Life Sciences</li>
              <li>• Financial Services</li>
              <li>• Education & Training</li>
              <li>• Legal & Compliance</li>
              <li>• E-commerce & Retail</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          
          {submitStatus === "success" && (
            <div className="bg-green-600 text-white p-4 rounded-lg mb-6 text-center">
              Thank you for your message! We'll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-black">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Additional Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
          <div className="space-y-3">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center gap-3 p-3 bg-zinc-800 rounded hover:bg-zinc-700 transition-colors"
            >
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send us an email</span>
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 p-3 bg-zinc-800 rounded hover:bg-zinc-700 transition-colors"
            >
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call us directly</span>
            </a>
            <a
              href="/services"
              className="flex items-center gap-3 p-3 bg-zinc-800 rounded hover:bg-zinc-700 transition-colors"
            >
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View our services</span>
            </a>
          </div>
        </div>

        <div className="border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span>10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
            <div className="pt-2 border-t border-white/10">
              <p className="text-xs opacity-80">
                Emergency support available 24/7 for enterprise clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="opacity-90">
          Launch your instance today or schedule a consultation with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/multiverse/launch"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Launch Your Instance
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>
    </div>
  );
}