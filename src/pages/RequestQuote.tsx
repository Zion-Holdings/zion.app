
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a customized quote for your AI and technology project needs from Zion Tech Group." 
        keywords="request quote, pricing, AI services, tech solutions, project estimate"
        url="https://ziontechgroup.com/request-quote"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Request a Quote</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get a customized quote for your AI and technology project needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-zion-slate-light mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-zion-slate-light mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-zion-slate-light mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-zion-slate-light mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-zion-slate-light mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-zion-slate-light mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg"
                  >
                    <option value="">Select a project type</option>
                    <option value="ai-development">AI Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="hardware-setup">Hardware Setup</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-zion-slate-light mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={6}
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg resize-none"
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-zion-slate-light mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-zion-slate-light mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-zion-slate-light mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg resize-none"
                    placeholder="Any additional details, constraints, or questions you'd like us to know about..."
                  />
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light px-12 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
              <p className="text-zion-slate-light mb-6">
                For urgent inquiries or to speak with our team directly, contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-block bg-zion-blue-dark border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
