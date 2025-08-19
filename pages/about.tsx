import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and technological advancement." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and technological advancement." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future through autonomous innovation and cutting-edge technology solutions
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-cyan-300">Our Mission</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-white/90 leading-relaxed mb-6">
                      At Zion Tech Group, we are driven by a singular mission: to accelerate human progress 
                      through autonomous innovation. We believe that the future belongs to intelligent systems 
                      that can think, learn, and create independently.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      Our autonomous systems are designed to solve complex problems, drive innovation, and 
                      create value across industries. We're not just building technology; we're building 
                      the foundation for a more intelligent, efficient, and sustainable future.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-xl border border-cyan-400/20">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Core Values</h3>
                    <ul className="text-white/80 space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-cyan-400">•</span>
                        <span>Innovation at the forefront</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-fuchsia-400">•</span>
                        <span>Autonomous excellence</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-400">•</span>
                        <span>Ethical AI development</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-yellow-400">•</span>
                        <span>Global impact focus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-cyan-300">Our Vision</h2>
                <div className="bg-gradient-to-r from-white/5 to-white/10 p-8 rounded-xl border border-white/10">
                  <p className="text-white/90 leading-relaxed text-lg">
                    We envision a world where autonomous systems work seamlessly alongside humans, 
                    augmenting our capabilities and enabling us to focus on what makes us uniquely human: 
                    creativity, empathy, and strategic thinking. Our autonomous innovation hub serves as 
                    the catalyst for this transformation.
                  </p>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-cyan-300">What We Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Autonomous Research</h3>
                    <p className="text-white/80">
                      Our AI systems conduct independent research across multiple domains, 
                      identifying opportunities and generating innovative solutions.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">System Development</h3>
                    <p className="text-white/80">
                      We build intelligent systems that can operate independently, 
                      continuously improving and adapting to new challenges.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-green-300">Technology Integration</h3>
                    <p className="text-white/80">
                      Seamlessly integrating cutting-edge technologies to create 
                      comprehensive solutions for complex problems.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-300">Innovation Consulting</h3>
                    <p className="text-white/80">
                      Helping organizations navigate the autonomous future through 
                      strategic guidance and implementation support.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Ecosystem Building</h3>
                    <p className="text-white/80">
                      Creating interconnected autonomous systems that work together 
                      to achieve greater collective intelligence.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-red-300">Future Planning</h3>
                    <p className="text-white/80">
                      Anticipating technological trends and preparing for the 
                      autonomous future that lies ahead.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-cyan-300">Our Approach</h2>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-lg border border-white/10">
                    <h3 className="text-2xl font-semibold mb-4 text-green-300">Autonomous First</h3>
                    <p className="text-white/80 mb-4">
                      We design systems that can operate independently from day one, 
                      continuously learning and improving without human intervention.
                    </p>
                    <ul className="text-white/70 space-y-2">
                      <li>• Self-learning algorithms</li>
                      <li>• Autonomous decision-making</li>
                      <li>• Continuous self-improvement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-lg border border-white/10">
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Ethical Innovation</h3>
                    <p className="text-white/80 mb-4">
                      Every system we build incorporates ethical considerations, 
                      ensuring that autonomous technology benefits humanity.
                    </p>
                    <ul className="text-white/70 space-y-2">
                      <li>• Ethical AI frameworks</li>
                      <li>• Human-centric design</li>
                      <li>• Responsible development</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-lg border border-white/10">
                    <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Collaborative Intelligence</h3>
                    <p className="text-white/80 mb-4">
                      Our systems work together as a collective intelligence, 
                      achieving results that surpass individual capabilities.
                    </p>
                    <ul className="text-white/70 space-y-2">
                      <li>• Multi-agent coordination</li>
                      <li>• Emergent intelligence</li>
                      <li>• Collective problem-solving</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-cyan-300">Why Choose Zion Tech Group?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Proven Track Record</h3>
                    <p className="text-white/80 leading-relaxed">
                      With years of experience in autonomous systems and AI development, 
                      we have a proven track record of delivering innovative solutions 
                      that drive real business value.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Cutting-Edge Technology</h3>
                    <p className="text-white/80 leading-relaxed">
                      We stay at the forefront of technological advancement, 
                      incorporating the latest breakthroughs in AI, automation, 
                      and autonomous systems into our solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Global Perspective</h3>
                    <p className="text-white/80 leading-relaxed">
                      Our global presence and diverse team bring international 
                      perspectives to every project, ensuring solutions that 
                      work across cultures and markets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Future-Focused</h3>
                    <p className="text-white/80 leading-relaxed">
                      We don't just solve today's problems; we anticipate 
                      tomorrow's challenges and build systems that can adapt 
                      and evolve with changing needs.
                    </p>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-2xl border border-cyan-400/20">
                  <h2 className="text-3xl font-bold mb-6 text-white">Join Us in Shaping the Future</h2>
                  <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                    Ready to explore how autonomous innovation can transform your organization? 
                    Let's discuss how Zion Tech Group can help you navigate the autonomous future.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </Link>
                    <Link href="/services" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                      Our Services
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}