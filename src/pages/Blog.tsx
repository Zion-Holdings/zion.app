import React from 'react';
import { SEO } from '@/components/SEO';

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | Zion Tech Group"
        description="Stay updated with the latest technology trends, AI insights, and industry news from Zion Tech Group"
        keywords="blog, technology news, AI insights, tech trends, Zion Tech Group"
        canonical="https://ziontechgroup.com/blog"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Zion Tech Group Blog
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead of the curve with insights, trends, and expert perspectives on technology, AI, and digital transformation.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <div className="flex items-center mb-4">
                <span className="bg-zion-cyan text-zion-blue-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-zion-slate-light ml-4">December 15, 2024</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The Future of AI in Enterprise: 2025 Predictions
              </h2>
              <p className="text-zion-slate-light text-lg mb-6">
                Explore the transformative trends that will shape artificial intelligence in enterprise environments throughout 2025, 
                from autonomous decision-making to AI-powered cybersecurity.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-zion-cyan rounded-full flex items-center justify-center">
                    <span className="text-zion-blue-dark font-bold">ZT</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Zion Tech Team</div>
                    <div className="text-zion-slate-light text-sm">AI & Technology Experts</div>
                  </div>
                </div>
                <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
              <div className="mb-4">
                <span className="bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm font-semibold">
                  AI & ML
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Building Scalable AI Infrastructure
              </h3>
              <p className="text-zion-slate-light mb-4">
                Learn the best practices for designing and implementing AI infrastructure that can grow with your business needs.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-slate-light text-sm">December 10, 2024</span>
                <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  Read →
                </button>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
              <div className="mb-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Green IT
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Sustainable Technology Solutions
              </h3>
              <p className="text-zion-slate-light mb-4">
                Discover how businesses can reduce their carbon footprint while maintaining technological competitiveness.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-slate-light text-sm">December 8, 2024</span>
                <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  Read →
                </button>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
              <div className="mb-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Cloud
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Multi-Cloud Strategy Best Practices
              </h3>
              <p className="text-zion-slate-light mb-4">
                Navigate the complexities of multi-cloud environments with proven strategies and tools.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-slate-light text-sm">December 5, 2024</span>
                <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  Read →
                </button>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
              <div className="mb-4">
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Security
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Zero-Trust Security Architecture
              </h3>
              <p className="text-zion-slate-light mb-4">
                Implement a comprehensive zero-trust security model to protect your digital assets.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-slate-light text-sm">December 3, 2024</span>
                <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  Read →
                </button>
              </div>
            </article>

            {/* Article 5 */}
            <article className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
              <div className="mb-4">
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Innovation
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                The Rise of Edge Computing
              </h3>
              <p className="text-zion-slate-light mb-4">
                Explore how edge computing is revolutionizing data processing and IoT applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-slate-light text-sm">November 30, 2024</span>
                <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  Read →
                </button>
              </div>
            </article>

            {/* Article 6 */}
            <article className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors">
              <div className="mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Digital Transformation
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Legacy System Modernization
              </h3>
              <p className="text-zion-slate-light mb-4">
                Strategies for successfully modernizing legacy systems without disrupting business operations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-slate-light text-sm">November 28, 2024</span>
                <button className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  Read →
                </button>
              </div>
            </article>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Get the latest insights delivered directly to your inbox. Join thousands of tech professionals 
              who trust Zion Tech Group for industry knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-zion-cyan focus:outline-none"
              />
              <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}