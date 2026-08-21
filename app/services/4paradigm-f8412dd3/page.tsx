import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: "4Paradigm - Zion Tech Group",
  description: "Phancy Group Co., Ltd. doing business as 4Paradigm (Chinese: 第四范式; pinyin: Dìsì Fànshì) is a Chinese company publicly listed in Hong Kong that focuses on providing artificial intelligence (AI) tools and applications in China.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/4paradigm-f8412dd3`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/4paradigm-f8412dd3`} title="4Paradigm" />
        <h1 className="text-4xl font-bold mb-6"> 4Paradigm</h1>
        <p className="text-lg text-gray-300 mb-8">Phancy Group Co., Ltd. doing business as 4Paradigm (Chinese: 第四范式; pinyin: Dìsì Fànshì) is a Chinese company publicly listed in Hong Kong that focuses on providing artificial intelligence (AI) tools and applications in China.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-driven automation</li>
            <li>Cloud-native deployment</li>
            <li>API-first architecture</li>
            <li>Enterprise-grade security</li>
            <li>Scalable infrastructure</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved operational efficiency</li>
            <li>Reduced manual processes</li>
            <li>Data-driven decision making</li>
            <li>Faster time-to value</li>
            <li>Scalable performance</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
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
    
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{ {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "cognitive",
  "provider": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "email": "hello@ziontechgroup.com",
    "telephone": "+1 (302) 464 0950"
  },
  "serviceArea": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  },
  "areaServed": "technology",
  "name": "4Paradigm",
  "description": "Phancy Group Co., Ltd. doing business as 4Paradigm (Chinese: 第四范式; pinyin: Dìsì Fànshì) is a Chinese company publicly listed in Hong Kong that focuses on providing artificial intelligence (AI) tools and applications in China.",
  "url": "https://ziontechgroup.com/services/4paradigm-f8412dd3",
  "category": "cognitive",
  "keywords": "cognitive, technology, AI, automation, enterprise"
} }} />
      <JsonLd data={{ {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is 4Paradigm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phancy Group Co., Ltd. doing business as 4Paradigm (Chinese: 第四范式; pinyin: Dìsì Fànshì) is a Chinese company publicly listed in Hong Kong that focuses on providing artificial intelligence (AI) tools and applications in China."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key features of 4Paradigm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key features include: AI-driven automation, Cloud-native deployment, API-first architecture, Enterprise-grade security, Scalable infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "What benefits does 4Paradigm provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The service delivers: Improved operational efficiency, Reduced manual processes, Data-driven decision making, Faster time-to value, Scalable performance."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with this service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free consultation via our Calendly link to discuss your requirements and get a tailored implementation plan."
      }
    },
    {
      "@type": "Question",
      "name": "Is this service available for enterprise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our AI services are designed for enterprise-scale deployment with appropriate SLAs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the pricing model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4Paradigm offers Basic, Pro, and Enterprise tiers. Contact us for a custom quote."
      }
    }
  ]
} }} />
    </main>
  );
}
