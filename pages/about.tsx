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

            {/* Company History */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Journey</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2020
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Foundation</h3>
                    <p className="text-white/70">
                      Zion Tech Group was founded with a vision to revolutionize technology through autonomous systems. 
                      Started as a small team of AI researchers and engineers passionate about creating self-learning technology.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2022
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">First Autonomous Systems</h3>
                    <p className="text-white/70">
                      Successfully deployed our first autonomous AI systems in production environments. 
                      Achieved 99.5% uptime and began scaling our automation capabilities across multiple industries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Global Expansion</h3>
                    <p className="text-white/70">
                      Expanded operations globally with clients across 15+ countries. 
                      Launched our autonomous content generation platform and achieved 2,960+ AI-generated pages.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2025
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">Autonomous Revolution</h3>
                    <p className="text-white/70">
                      Currently leading the autonomous technology revolution with 227 active automations, 
                      12 AI components, and continuous innovation in self-healing systems.
                    </p>
                  </div>
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
                    <li>• Predictive analytics engines</li>
                    <li>• Neural network optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Automation Systems</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Cloud infrastructure automation</li>
                    <li>• CI/CD pipeline optimization</li>
                    <li>• Self-healing applications</li>
                    <li>• Performance monitoring</li>
                    <li>• Workflow orchestration</li>
                    <li>• Intelligent resource management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Frontend & UI</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-white/70">React & Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-white/70">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-white/70">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-white/70">Framer Motion</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">AI & Machine Learning</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                      <span className="text-white/70">TensorFlow & PyTorch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                      <span className="text-white/70">OpenAI GPT Models</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                      <span className="text-white/70">Computer Vision APIs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                      <span className="text-white/70">Natural Language Processing</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Infrastructure & DevOps</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-white/70">AWS & Google Cloud</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-white/70">Docker & Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-white/70">GitHub Actions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-white/70">PM2 Process Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    👨‍💻
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI Engineers</h3>
                  <p className="text-white/70 text-sm">Specialists in machine learning, neural networks, and autonomous systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🚀
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">DevOps Engineers</h3>
                  <p className="text-white/70 text-sm">Experts in cloud infrastructure, automation, and system reliability</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎨
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">UX Designers</h3>
                  <p className="text-white/70 text-sm">Creating intuitive interfaces for complex autonomous systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📊
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Data Scientists</h3>
                  <p className="text-white/70 text-sm">Analyzing patterns and optimizing AI performance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔒
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Security Experts</h3>
                  <p className="text-white/70 text-sm">Ensuring autonomous systems are secure and trustworthy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌐
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Product Managers</h3>
                  <p className="text-white/70 text-sm">Guiding the development of autonomous technology solutions</p>
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
                  <div className="text-3xl font-bold text-green-400">12</div>
                  <div className="text-sm text-white/70">AI Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}