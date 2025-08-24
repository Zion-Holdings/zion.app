
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request a Quote - Zion Tech Group" 
        description="Get a customized quote for your AI and tech project needs. Our team will provide you with competitive pricing and solutions." 
        keywords="quote request, pricing, AI services, tech solutions, project estimate"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Request a Quote</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get a customized quote for your AI and tech project needs. Our team will provide you with 
              competitive pricing and tailored solutions to meet your requirements.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
      </main>
    </>
  );
}
