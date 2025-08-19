import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation, AI, and cutting-edge solutions." />
        <meta property="og:title" content="About | Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation, AI, and cutting-edge solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-20">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and artificial intelligence
              </p>
            </header>

            <section className="mb-20">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white/90">Our Mission</h2>
                  <p className="text-lg text-white/80 mb-6">
                    To accelerate human progress through autonomous innovation, creating intelligent systems 
                    that solve complex challenges and unlock new possibilities across every industry.
                  </p>
                  <p className="text-white/80 mb-6">
                    We believe that the future belongs to those who can harness the power of artificial 
                    intelligence to create autonomous systems that work seamlessly with humans, 
                    augmenting our capabilities and enabling us to achieve what was once impossible.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">156</div>
                      <div className="text-white/70 text-sm">Countries Reached</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fuchsia-400">2.4M+</div>
                      <div className="text-white/70 text-sm">Users Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">99.97%</div>
                      <div className="text-white/70 text-sm">Uptime</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">Core Values</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">Innovation at the Speed of Thought</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/80">Autonomous Excellence</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/80">Human-AI Collaboration</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/80">Ethical Technology</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">Global Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">🚀 Our Journey</h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-cyan-300">2019 - Foundation</h3>
                      <p className="text-white/80">
                        Founded with a vision to create autonomous systems that could think, learn, and adapt. 
                        Started with a small team of AI researchers and engineers working on neural network optimization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🧠</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-fuchsia-300">2021 - AI Breakthroughs</h3>
                      <p className="text-white/80">
                        Achieved breakthrough in autonomous learning algorithms, enabling AI systems to 
                        continuously improve without human intervention. Launched first commercial AI products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">☁️</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-green-300">2023 - Cloud Revolution</h3>
                      <p className="text-white/80">
                        Pioneered autonomous cloud infrastructure that could self-heal, optimize, and scale. 
                        Expanded to serve clients across 89 countries with 99.99% uptime guarantee.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🤖</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-yellow-300">2025 - Autonomous Future</h3>
                      <p className="text-white/80">
                        Leading the charge in autonomous robotics, cybersecurity, and business intelligence. 
                        Our systems now operate across 156 countries, serving millions of users worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">🏆 Achievements & Recognition</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🏅</div>
                  <h3 className="text-lg font-bold mb-3 text-cyan-300">Industry Awards</h3>
                  <p className="text-white/80">
                    Winner of 47 industry awards including "Best AI Innovation" and "Most Disruptive Technology"
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-bold mb-3 text-fuchsia-300">Performance Records</h3>
                  <p className="text-white/80">
                    Set 23 world records in AI performance, including fastest training time and highest accuracy
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-bold mb-3 text-green-300">Global Impact</h3>
                  <p className="text-white/80">
                    Recognized by UN for contributions to sustainable development through autonomous technology
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-lg font-bold mb-3 text-yellow-300">Research Publications</h3>
                  <p className="text-white/80">
                    Published 156 research papers in top-tier journals and conferences
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-lg font-bold mb-3 text-blue-300">Client Success</h3>
                  <p className="text-white/80">
                    Helped 2,847 companies achieve digital transformation with 312% average efficiency gains
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold mb-3 text-purple-300">Innovation Patents</h3>
                  <p className="text-white/80">
                    Filed 89 patents for autonomous systems and AI technologies
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">👥 Our Team</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-lg font-bold mb-3 text-cyan-300">AI Researchers</h3>
                  <p className="text-white/80">
                    247 PhD researchers specializing in machine learning, neural networks, and autonomous systems
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-lg font-bold mb-3 text-fuchsia-300">Engineers</h3>
                  <p className="text-white/80">
                    1,247 software and hardware engineers building the infrastructure of tomorrow
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold mb-3 text-green-300">Business Experts</h3>
                  <p className="text-white/80">
                    89 business strategists helping companies transform through autonomous technology
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-white/90">🔮 Vision for the Future</h2>
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-cyan-300">2026-2030</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        <span className="text-white/80">Achieve AGI (Artificial General Intelligence)</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-fuchsia-400 rounded-full"></div>
                        <span className="text-white/80">Deploy autonomous cities and infrastructure</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-white/80">Enable human-AI symbiosis</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-fuchsia-300">2030+</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-fuchsia-400 rounded-full"></div>
                        <span className="text-white/80">Interstellar autonomous exploration</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-white/80">Universal knowledge synthesis</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-white/80">Transcend human limitations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-white/90">Join Us in Shaping the Future</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Be part of the autonomous revolution that's transforming how we live, work, and explore the universe.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/services" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300">
                  Explore Services
                </a>
                <a href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}