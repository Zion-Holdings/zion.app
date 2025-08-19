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
                  <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                  <div className="text-sm text-white/70">Pages Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-white/70">Monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* Company History */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">2023 - Foundation</h3>
                    <p className="text-white/80">
                      Zion Tech Group was founded with a vision to revolutionize technology through autonomous innovation. 
                      We started with a small team of AI researchers and automation experts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">2024 - Breakthrough</h3>
                    <p className="text-white/80">
                      Developed our first autonomous content generation system and launched the initial version of our 
                      cloud-native automation platform. Achieved 99.5% uptime milestone.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">2025 - Expansion</h3>
                    <p className="text-white/80">
                      Scaled to 227 active automations, generated over 2,960 pages, and achieved 99.9% system uptime. 
                      Launched advanced monitoring and self-healing capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Future - Innovation</h3>
                    <p className="text-white/80">
                      Continuing to push the boundaries of autonomous technology, developing next-generation AI systems, 
                      and expanding our global reach to serve clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Frontend & UI</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Next.js 14 with TypeScript</div>
                  <div>• Tailwind CSS & Framer Motion</div>
                  <div>• React Hooks & Context API</div>
                  <div>• Progressive Web App (PWA)</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Backend & APIs</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Node.js & Express.js</div>
                  <div>• GraphQL & REST APIs</div>
                  <div>• WebSocket for real-time data</div>
                  <div>• JWT authentication</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">AI & Machine Learning</h3>
                <div className="space-y-2 text-white/70">
                  <div>• TensorFlow & PyTorch</div>
                  <div>• GPT-4 & Claude integration</div>
                  <div>• Custom ML models</div>
                  <div>• Natural language processing</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Infrastructure</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Kubernetes & Docker</div>
                  <div>• AWS, Azure, GCP support</div>
                  <div>• CI/CD with GitHub Actions</div>
                  <div>• Monitoring with Prometheus</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Databases</h3>
                <div className="space-y-2 text-white/70">
                  <div>• PostgreSQL & MongoDB</div>
                  <div>• Redis for caching</div>
                  <div>• Elasticsearch for search</div>
                  <div>• Time-series databases</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">DevOps & Security</h3>
                <div className="space-y-2 text-white/70">
                  <div>• Terraform & Ansible</div>
                  <div>• OAuth 2.0 & OIDC</div>
                  <div>• Automated security scanning</div>
                  <div>• Compliance monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* Team & Leadership */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">CEO & Founder</h3>
                <p className="text-cyan-400 mb-3">Visionary Leader</p>
                <p className="text-white/70 text-sm">
                  Leading the company's strategic direction and driving innovation in autonomous technology.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👩‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">CTO</h3>
                <p className="text-fuchsia-400 mb-3">Technology Architect</p>
                <p className="text-white/70 text-sm">
                  Overseeing all technical operations and ensuring our platform remains cutting-edge.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Head of AI Research</h3>
                <p className="text-green-400 mb-3">AI Pioneer</p>
                <p className="text-white/70 text-sm">
                  Leading breakthrough research in autonomous systems and machine learning.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements & Recognition */}
          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Achievements & Recognition</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Industry Awards</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🏆</span>
                      <span>Best AI Innovation 2024</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🥇</span>
                      <span>Top Automation Platform</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">🌟</span>
                      <span>Excellence in Cloud Technology</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Certifications</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span>SOC 2 Type II Compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span>ISO 27001 Security</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span>GDPR Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-white/80 mb-8">
                Be part of the future of autonomous technology. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </a>
                <a href="/features" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-300">
                  Explore Our Platform
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}