
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request a Quote - Zion Tech Group"
        description="Get a customized quote for your IT services, AI solutions, or tech projects. Our team will provide you with a detailed estimate tailored to your needs."
        keywords="request quote, IT services quote, AI solutions quote, tech project estimate, custom pricing"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get a personalized estimate for your IT services, AI solutions, or tech projects. 
              Our team will analyze your requirements and provide you with a detailed quote.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
