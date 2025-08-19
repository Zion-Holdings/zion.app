import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission and vision." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pioneering the future of autonomous technology and AI-driven innovation
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
                <p className="text-lg text-white/80 mb-4">
                  To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
                </p>
                <p className="text-white/70">
                  We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Vision</h2>
                <p className="text-lg text-white/80 mb-4">
                  To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
                </p>
                <p className="text-white/70">
                  We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-white/70">Constantly pushing boundaries and exploring new frontiers in technology</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2">Autonomy</h3>
                  <p className="text-white/70">Building systems that can operate independently and make intelligent decisions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-2">Impact</h3>
                  <p className="text-white/70">Creating technology that makes a positive difference in the world</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Development</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Advanced machine learning models</li>
                    <li>• Natural language processing</li>
                    <li>• Computer vision systems</li>
                    <li>• Autonomous decision making</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Automation Systems</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Cloud infrastructure automation</li>
                    <li>• CI/CD pipeline optimization</li>
                    <li>• Self-healing applications</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400">2,960</div>
                  <div className="text-sm text-white/70">Pages Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">12</div>
                  <div className="text-sm text-white/70">AI Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Our Team</h2>
              <p className="text-white/70 text-center mb-8 max-w-3xl mx-auto">
                Meet the brilliant minds behind Zion Tech Group's autonomous innovation revolution
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">AI Research Team</h3>
                  <p className="text-white/70 text-sm">
                    Leading-edge researchers pushing the boundaries of autonomous AI systems
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Engineering Team</h3>
                  <p className="text-white/70 text-sm">
                    Expert engineers building scalable, reliable automation infrastructure
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Data Science Team</h3>
                  <p className="text-white/70 text-sm">
                    Data scientists transforming raw information into actionable insights
                  </p>
                </div>
              </div>
            </div>

            {/* Company History Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Our Journey</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2023</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">Foundation</h3>
                    <p className="text-white/70">
                      Zion Tech Group was founded with a vision to revolutionize technology through autonomous innovation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2024</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Breakthrough</h3>
                    <p className="text-white/70">
                      Launched our first autonomous AI systems and achieved significant milestones in automation technology.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2025</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Expansion</h3>
                    <p className="text-white/70">
                      Rapidly expanding our portfolio and serving clients across multiple industries with cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards & Recognition Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Awards & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Innovation Award</h3>
                  <p className="text-white/70 text-sm">
                    Recognized for breakthrough autonomous AI technology
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Excellence in AI</h3>
                  <p className="text-white/70 text-sm">
                    Industry recognition for AI development excellence
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Future Leader</h3>
                  <p className="text-white/70 text-sm">
                    Named as a future leader in autonomous technology
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Ready to be part of the autonomous technology revolution? Let's work together 
                to build the future of AI and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg">
                  Get in Touch
                </a>
                <a href="/careers" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-lg">
                  Join Our Team
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}