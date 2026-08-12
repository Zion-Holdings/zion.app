import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Industries | Zion Tech Group',
  description: 'AI and IT solutions by industry: healthcare, finance, manufacturing, retail, legal, insurance, and more.',
  alternates: { canonical: '/industries/' },
  openGraph: {
    title: 'Industries | Zion Tech Group',
    description: 'AI and IT solutions by industry: healthcare, finance, manufacturing, retail, legal, insurance, and more.',
    url: 'https://ziontechgroup.com/industries/',
    type: 'page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | Zion Tech Group',
    description: 'AI and IT solutions by industry: healthcare, finance, manufacturing, retail, legal, insurance, and more.',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-950 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-300 mb-12">
            Our AI & IT services cover 600+ solutions across multiple industry verticals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Healthcare', desc: 'AI for medical imaging, patient analytics, drug discovery, and compliance automation.', href: '/industries/healthcare/' },
              { title: 'Financial Services', desc: 'Fraud detection, algorithmic trading, risk modeling, and regulatory compliance automation.', href: '/industries/finance/' },
              { title: 'Manufacturing', desc: 'Predictive maintenance, computer vision quality control, and supply chain optimization.', href: '/industries/manufacturing/' },
              { title: 'Retail & E-Commerce', desc: 'Personalization engines, demand forecasting, inventory optimization, and customer analytics.', href: '/industries/retail/' },
              { title: 'Legal & Compliance', desc: 'Contract analysis, e-discovery, regulatory reporting, and litigation outcome prediction.', href: '/industries/legal/' },
              { title: 'Real Estate & PropTech', desc: 'Property valuation, tenant screening, smart building automation, and portfolio optimization.', href: '/industries/real-estate/' },
              { title: 'Insurance', desc: 'Claims automation, risk assessment, underwriting AI, and customer experience optimization.', href: '/industries/insurance/' },
              { title: 'Construction', desc: 'Project management AI, safety monitoring, cost estimation, and resource optimization.', href: '/industries/construction/' },
              { title: 'Education', desc: 'Personalized learning, automated assessment, student analytics, and administrative automation.', href: '/industries/education/' },
              { title: 'Logistics & Transportation', desc: 'Route optimization, fleet management, demand forecasting, and warehouse automation.', href: '/industries/logistics/' },
              { title: 'Media & Entertainment', desc: 'Content recommendation, automated production, audience analytics, and rights management.', href: '/industries/media/' },
              { title: 'Telecommunications', desc: 'Network optimization, predictive maintenance, customer churn prediction, and 5G automation.', href: '/industries/telecom/' },
              { title: 'Energy & Utilities', desc: 'Grid optimization, demand forecasting, predictive maintenance, and sustainability analytics.', href: '/industries/energy/' },
              { title: 'Chemicals & Materials', desc: 'Research automation, supply chain optimization, quality control, and compliance monitoring.', href: '/industries/chemicals/' },
              { title: 'Sports & Entertainment', desc: 'Fan engagement, performance analytics, content creation, and venue optimization.', href: '/industries/sports/' },
              { title: 'Government & Public Sector', desc: 'Citizen services automation, fraud detection, resource allocation, and compliance monitoring.', href: '/industries/government/' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-purple-500/40 transition-colors block">
                <div className="flex items-start gap-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                    <p className="text-slate-300 text-sm">{item.desc}</p>
                    <span className="text-purple-400 text-xs mt-2 inline-block">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">
              Find Services for Your Industry
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
