import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group" 
        description="Stay updated with the latest insights, tech trends, and company news from Zion Tech Group." 
        keywords="blog, tech insights, AI trends, Zion Tech Group news, industry updates"
        url="https://ziontechgroup.com/blog"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Blog & Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Stay informed with the latest tech trends, AI insights, and company updates
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Featured Post */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Featured Post</h2>
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-zion-blue p-8 flex items-center">
                    <div>
                      <div className="text-zion-cyan text-sm font-medium mb-2">AI & Technology</div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        The Future of AI in Enterprise: 2024 Trends and Predictions
                      </h3>
                      <p className="text-zion-slate-light mb-4">
                        Discover how artificial intelligence is reshaping business operations and what 
                        companies need to know to stay competitive in the evolving tech landscape.
                      </p>
                      <div className="flex items-center text-zion-slate-light text-sm mb-4">
                        <span>January 15, 2024</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                      </div>
                      <a
                        href="#"
                        className="inline-block bg-zion-cyan text-zion-blue-dark px-6 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-zion-blue-light p-8 flex items-center justify-center">
                    <div className="text-center text-zion-blue-dark">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <p className="text-lg font-semibold">AI Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue p-6 text-center">
                    <svg className="w-16 h-16 text-zion-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="text-zion-cyan text-sm font-medium mb-2">Cybersecurity</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Essential Cybersecurity Practices for Small Businesses
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      Learn the fundamental security measures every small business should implement 
                      to protect against cyber threats.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">January 12, 2024</span>
                      <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue p-6 text-center">
                    <svg className="w-16 h-16 text-zion-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="text-zion-cyan text-sm font-medium mb-2">Performance</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Optimizing Web Application Performance
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      Discover proven techniques to improve your web application's speed and user experience.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">January 10, 2024</span>
                      <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue p-6 text-center">
                    <svg className="w-16 h-16 text-zion-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="text-zion-cyan text-sm font-medium mb-2">Digital Transformation</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Digital Transformation Success Stories
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      Real-world examples of companies that successfully transformed their operations 
                      through technology.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">January 8, 2024</span>
                      <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            {/* Categories */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">AI & ML</h3>
                  <p className="text-zion-slate-light text-sm">12 articles</p>
                </a>

                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Security</h3>
                  <p className="text-zion-slate-light text-sm">8 articles</p>
                </a>

                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Performance</h3>
                  <p className="text-zion-slate-light text-sm">6 articles</p>
                </a>

                <a href="#" className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-colors">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-3">
                    <svg className="w-6 h-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Transformation</h3>
                  <p className="text-zion-slate-light text-sm">10 articles</p>
                </a>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="text-center">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
                  Get the latest tech insights and company updates delivered to your inbox
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-l-lg focus:outline-none focus:border-zion-cyan"
                    />
                    <button className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-r-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-zion-slate-light text-sm mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}