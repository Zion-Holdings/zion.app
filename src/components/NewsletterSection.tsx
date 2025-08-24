
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";

export function NewsletterSection() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden" 
      id="newsletter"
      aria-labelledby="newsletter-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-zion-purple-light rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <GradientHeading 
            id="newsletter-heading"
            className="animate-fade-in-up"
          >
            Stay Informed
          </GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl mb-8 animate-fade-in-up animation-delay-200">
            Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities.
          </p>
          
          {/* Enhanced benefits list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Latest Tech News</h3>
              <p className="text-zion-slate-light text-sm">Stay ahead with trending technology insights</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Marketplace Updates</h3>
              <p className="text-zion-slate-light text-sm">New services and opportunities</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-zion-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-zion-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Weekly Digest</h3>
              <p className="text-zion-slate-light text-sm">Curated content delivered weekly</p>
            </div>
          </div>
          
          <div className="max-w-md mx-auto animate-fade-in-up animation-delay-600">
            <EnhancedNewsletterForm />
          </div>
          
          {/* Privacy notice */}
          <p className="text-zion-slate-light/60 text-sm mt-6 animate-fade-in-up animation-delay-800">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
