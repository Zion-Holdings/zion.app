import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function ContactPage() {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Contact | Zion Tech Group" description="Get in touch for quotes, demos, and technical guidance." canonical="https://ziontechgroup.com/contact/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Contact Us</h1>
        <p className="text-gray-300 mb-8">We usually respond within one business day. For urgent requests, please call.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 bg-black/40 border border-gray-700/60 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">Request a Quote or Demo</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg" placeholder="Name" />
                  <input className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg" placeholder="Email" />
                </div>
                <input className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg" placeholder="Company" />
                <textarea className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg h-32" placeholder="How can we help?" />
                <button type="submit" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">Send</button>
              </form>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-black/40 border border-gray-700/60 rounded-xl">
              <h3 className="font-semibold mb-2">Contact Details</h3>
              <div className="text-gray-300 space-y-2">
                <div>Mobile: <a href={`tel:${contact.mobile}`} className="text-cyan-300">{contact.mobile}</a></div>
                <div>Email: <a href={`mailto:${contact.email}`} className="text-cyan-300">{contact.email}</a></div>
                <div className="text-sm">Address: {contact.address}</div>
              </div>
            </div>
            <div className="p-6 bg-black/40 border border-gray-700/60 rounded-xl">
              <h3 className="font-semibold mb-2">Sales</h3>
              <p className="text-gray-300 text-sm">For pricing and bundles, see <a href="/pricing" className="text-cyan-300">Pricing</a> and <a href="/market-pricing" className="text-cyan-300">Market Pricing</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}