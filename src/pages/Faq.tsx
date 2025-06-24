import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { FaqSection } from '@/components/FaqSection';

export default function Faq() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about the Zion AI Marketplace"
        canonical="https://app.ziontechgroup.com/faq"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </div>
      </main>
    </>
  );
}
