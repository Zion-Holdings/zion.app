import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Blockchain Consulting | Zion Tech Group",
  description: "Blockchain consulting for smart contracts, DeFi, tokenization, and Web3 integration with real-world business use cases.",
  openGraph: {
    title: "Blockchain Consulting | Zion Tech Group",
    description: "Blockchain consulting for smart contracts, DeFi, tokenization, and Web3 integration with real-world business use cases.",
    url: "https://ziontechgroup.com/blockchain-consulting/",
    type: 'website',
  },
  alternates: { canonical: "/blockchain-consulting/" },
};

export default function BlockchainConsultingPage() {
  return (
    <StandardPage
      title="Blockchain Consulting"
      subtitle="Blockchain consulting for smart contracts, DeFi, tokenization, and Web3 integration with real-world business use cases."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Blockchain Consulting" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Blockchain consulting for smart contracts, DeFi, tokenization, and Web3 integration with real-world business use cases.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
