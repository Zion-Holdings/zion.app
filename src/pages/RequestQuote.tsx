
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request a Quote - Zion AI Marketplace"
        description="Get customized quotes for AI and tech services from verified professionals. Submit your project requirements and receive competitive pricing."
        keywords="request quote, AI services, tech services, project pricing, custom quotes, IT services"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <Header />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tell us about your project and we'll connect you with the perfect AI and tech professionals. 
              Get competitive quotes from verified experts in our marketplace.
            </p>
          </div>
          <QuoteRequestForm />
        </div>
      </div>
    </>
  );
}
