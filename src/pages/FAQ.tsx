import { FaqSection } from "@/components/FaqSection";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Frequently asked questions about Zion's AI marketplace, IT services, and equipment solutions."
        keywords="FAQ, frequently asked questions, Zion, AI marketplace, IT services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <AppHeader />
      
      <main className="pt-16">
        <FaqSection />
        
        {/* Additional FAQ content */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-zion-slate-light text-xl max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Get in touch with our technical support team for immediate assistance.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-2 rounded-md transition-colors"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="text-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-3">Help Center</h3>
                <p className="text-zion-slate-light mb-4">
                  Browse our comprehensive help articles and tutorials.
                </p>
                <a 
                  href="/help" 
                  className="inline-block bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-2 rounded-md transition-colors"
                >
                  Visit Help Center
                </a>
              </div>
              
              <div className="text-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-zion-slate-light mb-4">
                  Chat with our support team in real-time for quick answers.
                </p>
                <button className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-2 rounded-md transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}