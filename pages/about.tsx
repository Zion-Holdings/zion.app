import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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

            {/* New Company History Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Journey</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">2023 - Foundation</h3>
                    <p className="text-white/70">Started with a vision to create truly autonomous technology systems that could operate independently and continuously improve.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">2024 - Breakthrough</h3>
                    <p className="text-white/70">Developed our first autonomous content generation system, marking a major milestone in AI-driven automation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">2025 - Expansion</h3>
                    <p className="text-white/70">Scaled to 227 active automations and expanded our portfolio to include comprehensive AI solutions across multiple industries.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Technology Stack Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Frontend & UI</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Next.js & React</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Progressive Web Apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI & Machine Learning</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Reinforcement Learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Infrastructure</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Kubernetes & Docker</li>
                    <li>• AWS & Google Cloud</li>
                    <li>• CI/CD Pipelines</li>
                    <li>• Monitoring & Observability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* New Team Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Team</h2>
              <p className="text-white/80 mb-6 text-center max-w-3xl mx-auto">
                                  We&apos;re a diverse team of engineers, researchers, and innovators passionate about 
                  pushing the boundaries of what&apos;s possible with autonomous technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Engineers</h3>
                  <p className="text-white/70 text-sm">Building the next generation of intelligent systems</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">DevOps Specialists</h3>
                  <p className="text-white/70 text-sm">Ensuring reliable and scalable infrastructure</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Scientists</h3>
                  <p className="text-white/70 text-sm">Extracting insights from complex datasets</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Product Managers</h3>
                  <p className="text-white/70 text-sm">Guiding our vision and strategy</p>
                </div>
              </div>
            </div>

            {/* New Call to Action Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-4 text-center text-white">Join Us in Shaping the Future</h2>
              <p className="text-white/80 mb-6 text-center max-w-2xl mx-auto">
                                  Whether you&apos;re looking to implement autonomous technology in your organization 
                  or want to be part of our mission, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
                <Link 
                  href="/case-studies" 
                  className="px-8 py-4 border border-fuchsia-400/50 text-fuchsia-400 rounded-lg font-semibold hover:bg-fuchsia-400/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}