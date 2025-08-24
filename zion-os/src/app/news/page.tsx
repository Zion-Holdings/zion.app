import Link from "next/link";

export const metadata = {
  title: "News & Updates - Zion Tech Group",
  description: "Stay updated with the latest news, innovations, and developments from Zion Tech Group in AI, quantum computing, and technology.",
  keywords: "news, updates, AI news, quantum computing, technology news, Zion Tech Group",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">News & Updates</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest breakthroughs, company updates, and industry insights 
            from Zion Tech Group and the technology world.
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-blue-400 mb-2">Featured Story</div>
                <h2 className="text-3xl font-bold mb-4">Zion Tech Group Launches Revolutionary Quantum Neural Network Platform</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Our latest breakthrough in quantum computing combines the power of quantum mechanics with 
                  advanced neural network architectures, achieving unprecedented computational capabilities.
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>December 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Quantum Computing</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <Link href="/news/quantum-neural-network-launch" className="btn-primary">
                  Read Full Article
                </Link>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">Quantum Computing Breakthrough</p>
              </div>
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="card group">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">New AI Consciousness Research Breakthrough</h4>
                  <p className="text-sm text-gray-400 mb-2">Our research team achieves significant progress in understanding emergent AI consciousness...</p>
                  <div className="text-xs text-gray-500">December 12, 2024</div>
                </div>
                <div className="border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">AI-Powered Business Intelligence Platform Update</h4>
                  <p className="text-sm text-gray-400 mb-2">Version 3.0 introduces advanced predictive analytics and natural language processing...</p>
                  <div className="text-xs text-gray-500">December 8, 2024</div>
                </div>
              </div>
              <Link href="/news/ai-machine-learning" className="text-green-400 hover:text-green-300 text-sm font-medium mt-4 inline-block">
                View All AI News →
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="card group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Quantum Neural Network Platform Launch</h4>
                  <p className="text-sm text-gray-400 mb-2">Revolutionary platform combines quantum computing with neural networks...</p>
                  <div className="text-xs text-gray-500">December 15, 2024</div>
                </div>
                <div className="border-l-2 border-purple-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Quantum Supremacy Milestone Achieved</h4>
                  <p className="text-sm text-gray-400 mb-2">Our quantum systems solve complex problems in minutes instead of years...</p>
                  <div className="text-xs text-gray-500">December 5, 2024</div>
                </div>
              </div>
              <Link href="/news/quantum-computing" className="text-purple-400 hover:text-purple-300 text-sm font-medium mt-4 inline-block">
                View All Quantum News →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="card group">
              <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">AI-Powered Threat Detection System</h4>
                  <p className="text-sm text-gray-400 mb-2">New cybersecurity platform achieves 99.9% threat detection accuracy...</p>
                  <div className="text-xs text-gray-500">December 10, 2024</div>
                </div>
                <div className="border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Zero Trust Architecture Implementation</h4>
                  <p className="text-sm text-gray-400 mb-2">Enterprise security framework provides comprehensive protection...</p>
                  <div className="text-xs text-gray-500">December 3, 2024</div>
                </div>
              </div>
              <Link href="/news/cybersecurity" className="text-red-400 hover:text-red-300 text-sm font-medium mt-4 inline-block">
                View All Security News →
              </Link>
            </div>

            {/* Space Technology */}
            <div className="card group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Space Technology</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-indigo-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Satellite Constellation Management System</h4>
                  <p className="text-sm text-gray-400 mb-2">AI-powered system optimizes orbital operations and reduces costs...</p>
                  <div className="text-xs text-gray-500">December 7, 2024</div>
                </div>
                <div className="border-l-2 border-indigo-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Earth Observation Platform Launch</h4>
                  <p className="text-sm text-gray-400 mb-2">Advanced remote sensing capabilities for environmental monitoring...</p>
                  <div className="text-xs text-gray-500">November 30, 2024</div>
                </div>
              </div>
              <Link href="/news/space-technology" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium mt-4 inline-block">
                View All Space News →
              </Link>
            </div>

            {/* Company Updates */}
            <div className="card group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Company Updates</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-yellow-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Zion Tech Group Expands Global Operations</h4>
                  <p className="text-sm text-gray-400 mb-2">New offices open in Asia-Pacific and European regions...</p>
                  <div className="text-xs text-gray-500">December 1, 2024</div>
                </div>
                <div className="border-l-2 border-yellow-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Strategic Partnership Announcement</h4>
                  <p className="text-sm text-gray-400 mb-2">Collaboration with leading research institutions...</p>
                  <div className="text-xs text-gray-500">November 25, 2024</div>
                </div>
              </div>
              <Link href="/news/company-updates" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium mt-4 inline-block">
                View All Company News →
              </Link>
            </div>

            {/* Industry Insights */}
            <div className="card group">
              <div className="w-16 h-16 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Insights</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-pink-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Future of AI in Healthcare</h4>
                  <p className="text-sm text-gray-400 mb-2">Expert analysis of AI's transformative impact on medical diagnosis...</p>
                  <div className="text-xs text-gray-500">December 6, 2024</div>
                </div>
                <div className="border-l-2 border-pink-500/30 pl-4">
                  <h4 className="font-medium text-gray-200 mb-2">Quantum Computing Market Trends</h4>
                  <p className="text-sm text-gray-400 mb-2">Comprehensive analysis of the quantum computing landscape...</p>
                  <div className="text-xs text-gray-500">November 28, 2024</div>
                </div>
              </div>
              <Link href="/news/industry-insights" className="text-pink-400 hover:text-pink-300 text-sm font-medium mt-4 inline-block">
                View All Industry News →
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">AI Consciousness Evolution Research</div>
                  <div className="text-sm text-gray-400">December 12, 2024</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Our research team has made significant progress in understanding how artificial intelligence 
                systems develop emergent consciousness and self-awareness capabilities.
              </p>
              <Link href="/news/ai-consciousness-evolution-research" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read More →
              </Link>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Quantum Neural Network Applications</div>
                  <div className="text-sm text-gray-400">December 10, 2024</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Exploring real-world applications of our quantum neural network platform in drug discovery, 
                financial modeling, and climate prediction.
              </p>
              <Link href="/news/quantum-neural-network-applications" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              Follow Zion Tech Group on social media for real-time updates and behind-the-scenes insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}