import { } from 'next/navigation';

export const metadata = {
  title: "Integrated Commerce Automation - Zion Tech Group",
  description: "End-to-end e-commerce automation: product sync per multi-marketplace including Amazon, Shopify, eBay, and Etsy; inventory sync; order and workflow routing; auto",
  alternates: {
    canonical: `https://ziontechgroup.com/services/automation-integrated-commerce-automation`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Integrated Commerce Automation</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end e-commerce automation: product sync per multi-marketplace including Amazon, Shopify, eBay, and Etsy; inventory sync; order and workflow routing; auto-generated review request post-delivery; shipping and delivery auto-tracking; refund and return auto-processing.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-channel product sync for Amazon, Shopify, eBay, Etsy — bidirectional per SKU</li>
            <li>Inventory sync across channels — stock depletion reflected across every marketplace in 60 seconds</li>
            <li>Dropship workflow — auto-route orders to supplier per stock-level threshold</li>
            <li>Auto-review generator sends per-buyer review request post-delivery with personalised template</li>
            <li>Return and refund auto-process — auto-compute refund amount and inventory return per policy</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Sync 5,000 SKUs across 4 channels without a single manual spreadsheet copy-paste</li>
            <li>No oversold inventory — no stock-out fees from Amazon or account health penalties</li>
            <li>Auto-review response lifts conversion by 10 to 15 percent on new product listings</li>
            <li>Return and refund automation reduces support tickets from this channel by 70 percent</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$4999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$14999</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://calendly.com/kleber-ziontechgroup/consultation" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
