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

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
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

            {/* Company History Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">Our Journey</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    2020
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Foundation</h3>
                    <p className="text-white/70">
                      Zion Tech Group was founded with a vision to revolutionize technology through autonomous innovation. 
                      Our team of AI researchers and automation experts came together to build the future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    2022
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">First Major Breakthrough</h3>
                    <p className="text-white/70">
                      We successfully deployed our first autonomous AI system, achieving 99.9% uptime and 
                      demonstrating the potential of self-operating technology infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Global Expansion</h3>
                    <p className="text-white/70">
                      Expanded our operations globally, serving clients across 15+ countries and 
                      establishing ourselves as a leader in autonomous technology solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    2025
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-400">AI Revolution</h3>
                    <p className="text-white/70">
                      Currently leading the AI revolution with 227 active automations, pioneering 
                      new approaches to autonomous systems and intelligent automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-cyan-400">Leadership Team</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Experienced executives with decades of combined experience in AI, automation, and technology leadership.
                  </p>
                  <p className="text-white/60 text-xs">
                    • CEO & CTO with 20+ years experience<br/>
                    • Former executives from top tech companies<br/>
                    • PhDs in AI and Computer Science
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-fuchsia-400">AI Research Team</h3>
                  <p className="text-white/70 text-sm mb-3">
                    World-class researchers and engineers pushing the boundaries of artificial intelligence and machine learning.
                  </p>
                  <p className="text-white/60 text-xs">
                    • 15+ AI researchers<br/>
                    • Published in top AI conferences<br/>
                    • Breakthrough innovations in ML
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-green-400">Engineering Team</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Skilled engineers and developers building robust, scalable, and innovative automation solutions.
                  </p>
                  <p className="text-white/60 text-xs">
                    • 25+ software engineers<br/>
                    • Full-stack development expertise<br/>
                    • Cloud and DevOps specialists
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-blue-400 mb-2">AI & ML</h4>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Scikit-learn</li>
                    <li>• OpenAI GPT Models</li>
                    <li>• Custom Neural Networks</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-green-400 mb-2">Cloud & DevOps</h4>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• AWS, Azure, GCP</li>
                    <li>• Kubernetes & Docker</li>
                    <li>• Terraform & Ansible</li>
                    <li>• CI/CD Pipelines</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-purple-400 mb-2">Data & Analytics</h4>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Apache Spark</li>
                    <li>• PostgreSQL & MongoDB</li>
                    <li>• Elasticsearch</li>
                    <li>• Grafana & Prometheus</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-yellow-400 mb-2">Frontend & UI</h4>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• React & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Progressive Web Apps</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Awards & Recognition Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-emerald-400">Awards & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold text-emerald-400">AI Innovation Award 2024</h4>
                      <p className="text-white/70 text-sm">Recognized for breakthrough autonomous systems</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h4 className="font-semibold text-emerald-400">Top 10 AI Companies</h4>
                      <p className="text-white/70 text-sm">Featured in TechCrunch's annual ranking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-emerald-400">Excellence in Automation</h4>
                      <p className="text-white/70 text-sm">Industry recognition for process optimization</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-semibold text-emerald-400">Research Publications</h4>
                      <p className="text-white/70 text-sm">15+ papers published in top AI conferences</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-semibold text-emerald-400">Industry Partnerships</h4>
                      <p className="text-white/70 text-sm">Strategic alliances with leading tech companies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <h4 className="font-semibold text-emerald-400">Global Impact</h4>
                      <p className="text-white/70 text-sm">Serving clients across 15+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Vision Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">Looking to the Future</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">2025-2030 Roadmap</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-fuchsia-400">•</span>
                      <span>Launch of next-generation autonomous AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fuchsia-400">•</span>
                      <span>Expansion into quantum computing and edge AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fuchsia-400">•</span>
                      <span>Development of AGI (Artificial General Intelligence) foundations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fuchsia-400">•</span>
                      <span>Global deployment of autonomous infrastructure</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Long-term Vision</h3>
                  <p className="text-white/70 mb-4">
                    We envision a world where AI and automation work seamlessly together to solve humanity's 
                    greatest challenges, from climate change to healthcare, while enhancing human creativity and potential.
                  </p>
                  <p className="text-white/70">
                    Our commitment to ethical AI development and responsible innovation ensures that 
                    we're building a future that benefits all of humanity.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}