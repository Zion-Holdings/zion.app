import React from 'react';
import Head from 'next/head';

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team | Zion Tech Group - AI & Automation Experts</title>
        <meta name="description" content="Meet the talented team of AI engineers, automation specialists, and technology innovators at Zion Tech Group." />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the AI and automation experts at Zion Tech Group." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Passionate experts in AI, automation, and autonomous technology working together to build the future
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Case Studies
              </a>
              <a href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Blog
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Leadership Team */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center">
                    <div className="text-4xl">👨‍💼</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Alex Chen</h3>
                  <p className="text-fuchsia-400 mb-3">CEO & Founder</p>
                  <p className="text-white/70 text-sm mb-4">
                    Former AI researcher at Google, 15+ years in autonomous systems and machine learning.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">AI Strategy</span>
                    <span className="px-2 py-1 bg-fuchsia-500/20 text-fuchsia-400 rounded text-xs">Leadership</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="text-4xl">👩‍💻</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-400">Sarah Rodriguez</h3>
                  <p className="text-blue-400 mb-3">CTO</p>
                  <p className="text-white/70 text-sm mb-4">
                    Expert in cloud architecture and autonomous systems, previously at Amazon and Microsoft.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Cloud</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Architecture</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <div className="text-4xl">👨‍🔬</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Dr. Michael Kim</h3>
                  <p className="text-pink-400 mb-3">Head of AI Research</p>
                  <p className="text-white/70 text-sm mb-4">
                    PhD in Computer Science from MIT, specializing in autonomous AI and neural networks.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Research</span>
                    <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">ML</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Team */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Core Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👩‍💼</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Emily Watson</h3>
                  <p className="text-fuchsia-400 mb-3">AI Engineer</p>
                  <p className="text-white/70 text-sm">
                    Specializes in natural language processing and autonomous decision-making systems.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👨‍💻</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-green-400">David Park</h3>
                  <p className="text-blue-400 mb-3">Automation Specialist</p>
                  <p className="text-white/70 text-sm">
                    Expert in process automation and workflow optimization across industries.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👩‍🔬</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-purple-400">Lisa Chen</h3>
                  <p className="text-pink-400 mb-3">Data Scientist</p>
                  <p className="text-white/70 text-sm">
                    Focuses on predictive analytics and business intelligence solutions.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👨‍🔧</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-400">James Wilson</h3>
                  <p className="text-orange-400 mb-3">DevOps Engineer</p>
                  <p className="text-white/70 text-sm">
                    Specializes in CI/CD pipelines and cloud infrastructure automation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👩‍🎨</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-red-400">Maria Garcia</h3>
                  <p className="text-pink-400 mb-3">UX Designer</p>
                  <p className="text-white/70 text-sm">
                    Creates intuitive interfaces for AI-powered applications and automation tools.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👨‍💼</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-400">Robert Taylor</h3>
                  <p className="text-purple-400 mb-3">Solutions Architect</p>
                  <p className="text-white/70 text-sm">
                    Designs scalable AI and automation solutions for enterprise clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Values */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Team Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Innovation</h3>
                  <p className="text-white/70 text-sm">
                    Constantly pushing boundaries and exploring new frontiers in technology
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Collaboration</h3>
                  <p className="text-white/70 text-sm">
                    Working together to achieve extraordinary results through teamwork
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Excellence</h3>
                  <p className="text-white/70 text-sm">
                    Delivering the highest quality solutions and exceeding expectations
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Growth</h3>
                  <p className="text-white/70 text-sm">
                    Continuous learning and development in emerging technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Join Our Team */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Join Our Team</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented individuals who are passionate about AI, automation, and building the future of technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/careers" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold py-3 px-8 rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Apply Now
                  </a>
                  <a href="/contact" className="border border-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-200">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}