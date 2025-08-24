
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function RequestQuote() {
  return (
    <>
      <SEO
        title="Request a Quote - Zion Tech Group"
        description="Get a customized quote for your AI and tech project needs. Our experts will provide you with detailed pricing and solutions."
        keywords="request quote, AI project quote, tech services quote, custom pricing, project estimation"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Request a Quote</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get a customized quote for your AI and tech project needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
      </div>
    </>
  );
}
