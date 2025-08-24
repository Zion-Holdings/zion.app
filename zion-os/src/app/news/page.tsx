import Link from "next/link";

export const metadata = {
  title: "News & Insights - Zion Tech Group | Latest Technology Updates",
  description: "Stay updated with the latest news, insights, and thought leadership from Zion Tech Group. Discover industry trends, company updates, and technology innovations.",
  keywords: "news, insights, technology updates, AI news, quantum computing, cybersecurity, Zion Tech Group",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">News & Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest technology trends, company updates, and industry insights 
            from Zion Tech Group
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                    FEATURED
                  </span>
                  <span className="text-gray-400 text-sm">December 15, 2024</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Our new AI platform transforms how businesses analyze data and make decisions. 
                  Using advanced machine learning algorithms, it provides real-time insights and 
                  predictive analytics that drive strategic growth.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">AI</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Business Intelligence</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Platform Launch</span>
                </div>
                <Link href="/news/ai-business-intelligence-platform-launch" className="btn-primary">
                  Read Full Article
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find the latest news and insights in your area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/news/category/ai" className="card text-center group hover:bg-blue-500/10 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-400 text-sm">Latest developments in artificial intelligence</p>
            </Link>
            
            <Link href="/news/category/quantum" className="card text-center group hover:bg-purple-500/10 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quantum Computing</h3>
              <p className="text-gray-400 text-sm">Breakthroughs in quantum technology</p>
            </Link>
            
            <Link href="/news/category/cybersecurity" className="card text-center group hover:bg-green-500/10 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-400 text-sm">Security trends and threat intelligence</p>
            </Link>
            
            <Link href="/news/category/company" className="card text-center group hover:bg-red-500/10 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Company News</h3>
              <p className="text-gray-400 text-sm">Updates about Zion Tech Group</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay informed with our most recent articles and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  QUANTUM
                </span>
                <span className="text-gray-400 text-sm">December 12, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Quantum Computing Breakthrough: New Algorithm Reduces Error Rates by 60%
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our research team has developed a revolutionary quantum error correction algorithm 
                that significantly improves the reliability of quantum computations.
              </p>
              <Link href="/news/quantum-error-correction-breakthrough" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </article>

            {/* News Article 2 */}
            <article className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  SECURITY
                </span>
                <span className="text-gray-400 text-sm">December 10, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                New Cybersecurity Framework Addresses AI-Powered Threats
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Zion Tech Group introduces comprehensive security protocols designed to protect 
                organizations from increasingly sophisticated AI-generated cyber attacks.
              </p>
              <Link href="/news/ai-cybersecurity-framework" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </article>

            {/* News Article 3 */}
            <article className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  COMPANY
                </span>
                <span className="text-gray-400 text-sm">December 8, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Zion Tech Group Expands to European Market
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We're excited to announce our expansion into the European market with new 
                offices in London, Berlin, and Paris to better serve our international clients.
              </p>
              <Link href="/news/european-market-expansion" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </article>

            {/* News Article 4 */}
            <article className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  SPACE TECH
                </span>
                <span className="text-gray-400 text-sm">December 5, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Satellite Communication Technology Advances
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our space technology division has developed next-generation satellite 
                communication systems with improved bandwidth and reliability.
              </p>
              <Link href="/news/satellite-communication-advances" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </article>

            {/* News Article 5 */}
            <article className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-indigo-500/20 text-indigo-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  AI
                </span>
                <span className="text-gray-400 text-sm">December 3, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                AI Content Generation: Balancing Creativity and Ethics
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our AI ethics team explores the challenges and opportunities in AI-generated 
                content, ensuring responsible development and deployment.
              </p>
              <Link href="/news/ai-content-generation-ethics" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </article>

            {/* News Article 6 */}
            <article className="card group">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full mr-3">
                  RESEARCH
                </span>
                <span className="text-gray-400 text-sm">November 30, 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Research Partnership with Leading Universities
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Zion Tech Group announces strategic research partnerships with MIT, Stanford, 
                and Cambridge to advance AI and quantum computing technologies.
              </p>
              <Link href="/news/university-research-partnerships" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, insights, and technology updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="btn-primary px-8 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Share Your Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Are you a journalist or industry analyst? We'd love to connect and share 
              insights about our latest innovations and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Media Relations
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn About Zion Tech Group
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}