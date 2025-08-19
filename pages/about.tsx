import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

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

            {/* Team & Expertise */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Team & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">AI Researchers & Engineers</h3>
                  <p className="text-white/70 mb-4">
                    Our team includes PhD-level researchers and senior engineers with expertise in machine learning, 
                    natural language processing, computer vision, and autonomous systems.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• 15+ years average experience</li>
                    <li>• Published research papers</li>
                    <li>• Industry-leading certifications</li>
                    <li>• Continuous learning programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Domain Specialists</h3>
                  <p className="text-white/70 mb-4">
                    We have deep expertise across multiple industries including healthcare, finance, manufacturing, 
                    and e-commerce, enabling us to deliver contextually relevant solutions.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• Industry-specific knowledge</li>
                    <li>• Regulatory compliance expertise</li>
                    <li>• Best practice frameworks</li>
                    <li>• Proven methodologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Innovation Timeline */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Innovation Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">2023</div>
                  <h3 className="text-lg font-semibold mb-2">Foundation</h3>
                  <p className="text-sm text-white/70">Established core AI capabilities and first autonomous systems</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">2024</div>
                  <h3 className="text-lg font-semibold mb-2">Expansion</h3>
                  <p className="text-sm text-white/70">Scaled to 100+ automations and launched cloud platform</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">2025</div>
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-white/70">Advanced autonomous agents and self-healing systems</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}