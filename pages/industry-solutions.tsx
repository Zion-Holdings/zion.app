import Head from 'next/head';
import Link from 'next/link';
import { Heart, DollarSign, Factory, GraduationCap, Gavel, ShoppingCart, Building, Shield, Cpu } from 'lucide-react';

const industries = [
  { name: 'Healthcare & Life Sciences', href: '/ai-healthcare-analytics', icon: Heart, blurb: 'Diagnostics, research, and patient experience' },
  { name: 'Financial Services', href: '/quantum-financial-trading', icon: DollarSign, blurb: 'Trading, risk, and compliance automation' },
  { name: 'Manufacturing & Industry 4.0', href: '/ai-manufacturing-optimization', icon: Factory, blurb: 'Predictive maintenance and quality' },
  { name: 'Education & EdTech', href: '/education-technology-solutions', icon: GraduationCap, blurb: 'Personalized learning and assessment' },
  { name: 'Legal & Compliance', href: '/ai-legal-contract-analyzer', icon: Gavel, blurb: 'Contract analysis and evidence automation' },
  { name: 'Retail & E‑commerce', href: '/customer-service-ai', icon: ShoppingCart, blurb: 'Personalization and service automation' },
  { name: 'Public Sector & Gov', href: '/quantum-cybersecurity-services', icon: Building, blurb: 'Security, resilience, and data governance' },
  { name: 'Enterprise IT & Cloud', href: '/enterprise-it', icon: Cpu, blurb: 'Platforms, SRE, and FinOps acceleration' },
  { name: 'Security & Zero Trust', href: '/security', icon: Shield, blurb: 'Threat detection and identity-first access' },
];

export default function IndustrySolutionsPage() {
  return (
    <>
      <Head>
        <title>Industry Solutions | Zion Tech Group</title>
        <meta name="description" content="Tailored solutions across healthcare, finance, manufacturing, retail, public sector, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/industry-solutions" />
      </Head>
      <section className="pt-28 pb-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Industry Solutions</span>
          </h1>
          <p className="text-gray-400 max-w-3xl">Explore curated offerings and blueprints aligned to outcomes for your industry.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {industries.map((i) => (
              <Link key={i.name} href={i.href} className="p-6 rounded-2xl border border-gray-800 bg-black/40 hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <i.icon className="w-5 h-5 text-cyan-300" />
                  <div className="text-white font-semibold">{i.name}</div>
                </div>
                <div className="text-gray-400 text-sm">{i.blurb}</div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-gray-400 text-sm">
            Don’t see your industry? <Link href="/contact" className="text-cyan-300 underline">Contact us</Link> for a tailored plan.
          </div>
        </div>
      </section>
    </>
  );
}