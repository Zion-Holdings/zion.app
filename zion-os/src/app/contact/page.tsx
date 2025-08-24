import Link from "next/link";

export const metadata = {
  title: "Contact Zion Tech Group - Get in Touch",
  description: "Contact Zion Tech Group for AI automation, quantum computing, cybersecurity, and enterprise IT solutions. Get expert consultation and support.",
  keywords: "contact Zion Tech Group, get quote, support, consultation, AI services, quantum computing, Zion Tech Group",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Get in touch with our team 
            of experts and discover how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI Automation Services</option>
                    <option value="quantum-computing">Quantum Computing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="enterprise-it">Enterprise IT</option>
                    <option value="ai-consciousness">AI Consciousness Evolution</option>
                    <option value="space-tech">Space Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell us about your project or how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* General Contact */}
              <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                      info@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">
                      San Francisco, CA<br />
                      United States
                    </span>
                  </div>
                </div>
              </div>

              {/* Support Contact */}
              <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
                <h3 className="text-xl font-bold mb-4">Technical Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                    </svg>
                    <a href="mailto:support@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                      support@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <a href="https://discord.gg/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      Discord Community
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                      Documentation
                    </Link>
                  </div>
                </div>
              </div>

              {/* Business Contact */}
              <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
                <h3 className="text-xl font-bold mb-4">Business Inquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <a href="mailto:business@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                      business@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <a href="mailto:partnerships@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                      partnerships@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Global Office Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* San Francisco */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">San Francisco</h3>
              <p className="text-gray-400 mb-4">Global Headquarters</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
                <p className="mt-3">
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                    +1 (302) 464-0950
                  </a>
                </p>
              </div>
            </div>

            {/* New York */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">New York</h3>
              <p className="text-gray-400 mb-4">East Coast Hub</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>456 Tech Avenue</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="mt-3">
                  <a href="tel:+12125551234" className="text-blue-400 hover:text-blue-300">
                    +1 (212) 555-1234
                  </a>
                </p>
              </div>
            </div>

            {/* London */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">London</h3>
              <p className="text-gray-400 mb-4">European Headquarters</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>789 Innovation Street</p>
                <p>London, EC1A 1BB</p>
                <p>United Kingdom</p>
                <p className="mt-3">
                  <a href="tel:+442071234567" className="text-blue-400 hover:text-blue-300">
                    +44 20 7123 4567
                  </a>
                </p>
              </div>
            </div>

            {/* Tokyo */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Tokyo</h3>
              <p className="text-gray-400 mb-4">Asia Pacific Hub</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>101 Tech District</p>
                <p>Tokyo, 100-0001</p>
                <p>Japan</p>
                <p className="mt-3">
                  <a href="tel:+81312345678" className="text-blue-400 hover:text-blue-300">
                    +81 3 1234 5678
                  </a>
                </p>
              </div>
            </div>

            {/* Dubai */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Dubai</h3>
              <p className="text-gray-400 mb-4">Middle East Hub</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>202 Innovation Tower</p>
                <p>Dubai, UAE</p>
                <p>United Arab Emirates</p>
                <p className="mt-3">
                  <a href="tel:+97141234567" className="text-blue-400 hover:text-blue-300">
                    +971 4 123 4567
                  </a>
                </p>
              </div>
            </div>

            {/* Sydney */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Sydney</h3>
              <p className="text-gray-400 mb-4">Australia Hub</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>303 Tech Boulevard</p>
                <p>Sydney, NSW 2000</p>
                <p>Australia</p>
                <p className="mt-3">
                  <a href="tel:+61212345678" className="text-blue-400 hover:text-blue-300">
                    +61 2 1234 5678
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-center">
            <h2 className="text-3xl font-bold mb-4">Response Time</h2>
            <p className="text-xl text-gray-300 mb-6">
              We're committed to providing quick and helpful responses to all inquiries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">2 Hours</h3>
                <p className="text-gray-300">Initial Response</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">24 Hours</h3>
                <p className="text-gray-300">Detailed Solution</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">48 Hours</h3>
                <p className="text-gray-300">Project Proposal</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}