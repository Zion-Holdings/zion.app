import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const rows = [
  { name: 'RAG Evaluation Lab', price: '$400–$1,200/mo', link: 'https://ziontechgroup.com/services/rag-evaluation-lab' },
  { name: 'Browser Automation Cloud', price: '$200–$800/mo', link: 'https://ziontechgroup.com/services/browser-automation-cloud' },
  { name: 'Secrets Rotation Automation', price: '$300–$1,500/mo', link: 'https://ziontechgroup.com/services/secrets-rotation-automation' },
  { name: 'API Performance Testing', price: '$200–$1,000/mo', link: 'https://ziontechgroup.com/services/api-performance-testing' },
  { name: 'Vendor Security Questionnaire AI', price: '$300–$1,200/mo', link: 'https://ziontechgroup.com/services/vendor-security-questionnaire-ai' },
  { name: 'Invoice Reconciliation Copilot', price: '$250–$900/mo', link: 'https://ziontechgroup.com/services/invoice-reconciliation-copilot' },
];

export default function MarketPricingPage() {
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Market Pricing | Zion Tech Group" description="Average market prices for popular services with quick links to learn more." canonical="https://ziontechgroup.com/market-pricing/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Market Pricing</h1>
        <p className="text-gray-300 mb-8">Typical market ranges based on publicly available pricing and analyst reports. Contact sales at +1 302 464 0950 or kleber@ziontechgroup.com for tailored quotes.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left bg-black/40 border border-gray-700/60 rounded-xl">
            <thead className="bg-gray-900/60">
              <tr>
                <th className="px-4 py-3 border-b border-gray-700/60">Service</th>
                <th className="px-4 py-3 border-b border-gray-700/60">Average Market Price</th>
                <th className="px-4 py-3 border-b border-gray-700/60">Link</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="hover:bg-gray-800/40">
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3 text-gray-300">{r.price}</td>
                  <td className="px-4 py-3">
                    <a href={r.link} className="text-cyan-300 hover:text-white">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mt-6">Note: Pricing varies by usage, team size, and compliance needs. We provide transparent quotes and competitive match.</p>
      </div>
    </UltraFuturisticBackground>
  );
}