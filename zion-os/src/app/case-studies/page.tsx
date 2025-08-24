import Link from "next/link";

export const metadata = {
  title: "Case Studies - Zion Tech Group | Success Stories & Client Results",
  description: "Explore real-world case studies and success stories from Zion Tech Group's AI, quantum computing, and autonomous technology implementations.",
  keywords: "case studies, success stories, client results, AI implementation, quantum computing projects, Zion Tech Group",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world success stories showcasing how our AI and technology solutions 
            transform businesses across industries
          </p>
        </div>

        {/* Featured Case Study */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  AI-Powered Business Transformation for Global Manufacturing
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  How we helped a Fortune 500 manufacturing company implement autonomous 
                  business operations, resulting in 40% cost reduction and 60% efficiency improvement.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">40%</div>
                    <div className="text-sm text-gray-400">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">60%</div>
                    <div className="text-sm text-gray-400">Efficiency Improvement</div>
                  </div>
                </div>
                <Link href="/case-studies/manufacturing-transformation" className="btn-primary">
                  Read Full Case Study
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-400">Global Operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories by Industry</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our solutions drive results across different sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Services */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-400 mb-4">
                Quantum-powered trading algorithms and AI risk management systems
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Risk Reduction:</span>
                  <span className="text-green-400 font-semibold">35%</span>
                </div>
                <div className="flex justify-between">
                  <span>Trading Performance:</span>
                  <span className="text-green-400 font-semibold">+25%</span>
                </div>
              </div>
              <Link href="/case-studies/financial-services" className="btn-secondary w-full mt-4">
                View Case Study
              </Link>
            </div>

            {/* Healthcare */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-400 mb-4">
                AI-powered diagnostic systems and autonomous patient care management
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Diagnostic Accuracy:</span>
                  <span className="text-blue-400 font-semibold">+30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Patient Wait Times:</span>
                  <span className="text-blue-400 font-semibold">-45%</span>
                </div>
              </div>
              <Link href="/case-studies/healthcare" className="btn-secondary w-full mt-4">
                View Case Study
              </Link>
            </div>

            {/* E-commerce */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-gray-400 mb-4">
                AI-driven personalization and autonomous inventory management
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="text-purple-400 font-semibold">+28%</span>
                </div>
                <div className="flex justify-between">
                  <span>Inventory Costs:</span>
                  <span className="text-purple-400 font-semibold">-22%</span>
                </div>
              </div>
              <Link href="/case-studies/ecommerce" className="btn-secondary w-full mt-4">
                View Case Study
              </Link>
            </div>

            {/* Technology */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-gray-400 mb-4">
                Autonomous DevOps and AI-powered code review systems
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Deployment Speed:</span>
                  <span className="text-yellow-400 font-semibold">+300%</span>
                </div>
                <div className="flex justify-between">
                  <span>Bug Detection:</span>
                  <span className="text-yellow-400 font-semibold">+85%</span>
                </div>
              </div>
              <Link href="/case-studies/technology" className="btn-secondary w-full mt-4">
                View Case Study
              </Link>
            </div>

            {/* Logistics */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Logistics</h3>
              <p className="text-gray-400 mb-4">
                AI-powered route optimization and autonomous fleet management
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Fuel Efficiency:</span>
                  <span className="text-indigo-400 font-semibold">+18%</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Times:</span>
                  <span className="text-indigo-400 font-semibold">-25%</span>
                </div>
              </div>
              <Link href="/case-studies/logistics" className="btn-secondary w-full mt-4">
                View Case Study
              </Link>
            </div>

            {/* Research */}
            <div className="card group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Research & Development</h3>
              <p className="text-gray-400 mb-4">
                AI-powered research automation and quantum computing applications
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Research Speed:</span>
                  <span className="text-red-400 font-semibold">+200%</span>
                </div>
                <div className="flex justify-between">
                  <span>Discovery Rate:</span>
                  <span className="text-red-400 font-semibold">+150%</span>
                </div>
              </div>
              <Link href="/case-studies/research" className="btn-secondary w-full mt-4">
                View Case Study
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their operations with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-400 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Davis</h4>
                  <p className="text-sm text-gray-400">CTO, Global Manufacturing Co.</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "Zion Tech Group's AI business manager transformed our operations completely. 
                We've seen unprecedented efficiency gains and cost savings."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-400 font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Martinez</h4>
                  <p className="text-sm text-gray-400">VP Engineering, Tech Startup</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "The autonomous code review system has dramatically improved our development 
                velocity and code quality. Game-changing technology."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Kim</h4>
                  <p className="text-sm text-gray-400">Head of Research, Pharma Lab</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "Our research productivity increased by 200% with their AI research assistant. 
                It's like having a team of PhDs working 24/7."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the growing list of organizations that have transformed their operations 
              with Zion Tech Group's cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}