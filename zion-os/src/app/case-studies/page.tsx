import Link from "next/link";

export const metadata = {
  title: "Case Studies - Zion Tech Group | Client Success Stories",
  description: "Explore real-world examples of how Zion Tech Group has helped clients transform their businesses with AI, quantum computing, and enterprise technology solutions.",
  keywords: "case studies, client success stories, AI implementation, quantum computing, enterprise solutions, Zion Tech Group",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Real-world examples of how we've helped clients transform their businesses 
            with cutting-edge technology solutions
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="card group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Manufacturing Corp</h3>
              <p className="text-blue-400 font-medium mb-3">AI-Powered Predictive Maintenance</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Implemented an AI-driven predictive maintenance system that reduced equipment downtime 
                by 40% and increased operational efficiency by 25%. The solution integrated with 
                existing IoT sensors and provided real-time insights for maintenance teams.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-gray-300">Manufacturing</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Challenge:</span>
                  <span className="text-gray-300">Unplanned equipment failures</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Solution:</span>
                  <span className="text-gray-300">AI predictive maintenance</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Results:</span>
                  <span className="text-gray-300">40% reduction in downtime</span>
                </div>
              </div>
              <Link href="/case-studies/global-manufacturing" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read Full Case Study →
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Financial Services</h3>
              <p className="text-purple-400 font-medium mb-3">Quantum Computing for Risk Assessment</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Deployed quantum computing algorithms for portfolio optimization and risk assessment, 
                enabling faster and more accurate financial modeling. The solution processed complex 
                risk scenarios in minutes instead of hours, giving traders a competitive advantage.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-gray-300">Financial Services</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Challenge:</span>
                  <span className="text-gray-300">Slow risk modeling</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Solution:</span>
                  <span className="text-gray-300">Quantum algorithms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Results:</span>
                  <span className="text-gray-300">100x faster processing</span>
                </div>
              </div>
              <Link href="/case-studies/quantum-financial" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Read Full Case Study →
              </Link>
            </div>

            {/* Case Study 3 */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Healthcare Network Alliance</h3>
              <p className="text-green-400 font-medium mb-3">Cybersecurity & Compliance Automation</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Implemented comprehensive cybersecurity solutions with SOC2 compliance automation, 
                protecting sensitive patient data across multiple healthcare facilities. The system 
                provided real-time threat detection and automated compliance reporting.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-gray-300">Healthcare</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Challenge:</span>
                  <span className="text-gray-300">Data security & compliance</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Solution:</span>
                  <span className="text-gray-300">Cybersecurity suite</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Results:</span>
                  <span className="text-gray-300">100% compliance rate</span>
                </div>
              </div>
              <Link href="/case-studies/healthcare-network" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Read Full Case Study →
              </Link>
            </div>

            {/* Case Study 4 */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tech Startup Incubator</h3>
              <p className="text-red-400 font-medium mb-3">Zion OS Platform Deployment</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Helped a startup incubator launch multiple digital economies using the Zion OS platform. 
                Each startup was able to deploy their marketplace, governance, and token systems in 
                under 24 hours, accelerating their time to market significantly.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-gray-300">Startup Incubator</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Challenge:</span>
                  <span className="text-gray-300">Slow platform development</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Solution:</span>
                  <span className="text-gray-300">Zion OS platform</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Results:</span>
                  <span className="text-gray-300">24-hour deployment</span>
                </div>
              </div>
              <Link href="/case-studies/startup-incubator" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Read Full Case Study →
              </Link>
            </div>

            {/* Case Study 5 */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Satellite Communications Ltd</h3>
              <p className="text-yellow-400 font-medium mb-3">Space Technology Infrastructure</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Designed and deployed satellite communication infrastructure for remote regions, 
                providing high-speed internet access to underserved communities. The solution 
                included ground stations, satellite management systems, and user terminals.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-gray-300">Satellite Communications</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Challenge:</span>
                  <span className="text-gray-300">Remote connectivity</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Solution:</span>
                  <span className="text-gray-300">Satellite infrastructure</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Results:</span>
                  <span className="text-gray-300">100,000+ users connected</span>
                </div>
              </div>
              <Link href="/case-studies/satellite-communications" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Read Full Case Study →
              </Link>
            </div>

            {/* Case Study 6 */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Marketing Agency</h3>
              <p className="text-indigo-400 font-medium mb-3">AI Content Generation Platform</p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Built an AI-powered content generation platform that increased content production 
                by 300% while maintaining quality standards. The system generated blog posts, 
                social media content, and marketing copy in multiple languages.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Industry:</span>
                  <span className="text-gray-300">Marketing & Advertising</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Challenge:</span>
                  <span className="text-gray-300">Content production scaling</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Solution:</span>
                  <span className="text-gray-300">AI content generation</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Results:</span>
                  <span className="text-gray-300">300% production increase</span>
                </div>
              </div>
              <Link href="/case-studies/content-marketing" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Read Full Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantifiable results that demonstrate the value we deliver to our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">$2B+</div>
              <div className="text-gray-400">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <div className="text-gray-400">Average Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Direct feedback from the organizations we've helped transform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Davis</h4>
                  <p className="text-gray-400 text-sm">CTO, Global Manufacturing Corp</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Zion Tech Group's AI solution transformed our maintenance operations. 
                We've seen a dramatic reduction in downtime and significant cost savings."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-400 font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Mitchell</h4>
                  <p className="text-gray-400 text-sm">Head of Technology, Quantum Financial</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The quantum computing implementation exceeded our expectations. 
                Our risk modeling is now 100x faster, giving us a real competitive edge."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-gray-400 text-sm">CIO, Healthcare Network Alliance</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Zion Tech Group's cybersecurity solution not only protected our data 
                but also automated our compliance processes, saving us countless hours."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can help transform your business 
              and deliver measurable results like these.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}