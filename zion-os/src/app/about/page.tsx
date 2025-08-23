export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Pioneering the future of technology through innovative AI solutions, autonomous systems, and cutting-edge research that transforms businesses and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                To accelerate human progress through the development and deployment of advanced AI technologies that solve complex challenges and create unprecedented opportunities for growth and innovation.
              </p>
              <p className="text-lg text-white/80 mb-6">
                We believe that artificial intelligence, when developed responsibly and ethically, has the power to transform every aspect of human life, from healthcare and education to business and scientific discovery.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Innovation First</h3>
                  <p className="text-white/70">Pushing the boundaries of what's possible</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="text-white font-semibold">Excellence</h4>
                    <p className="text-white/70">Delivering the highest quality solutions and services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="text-white font-semibold">Innovation</h4>
                    <p className="text-white/70">Continuously exploring new technologies and approaches</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="text-white font-semibold">Integrity</h4>
                    <p className="text-white/70">Operating with transparency and ethical principles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full mt-1"></div>
                  <div>
                    <h4 className="text-white font-semibold">Collaboration</h4>
                    <p className="text-white/70">Working together to achieve extraordinary results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2020</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Foundation</h3>
              <p className="text-white/70">Zion Tech Group was founded with a vision to revolutionize technology through AI innovation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2022</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expansion</h3>
              <p className="text-white/70">Launched our first autonomous AI systems and expanded into quantum computing research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Leadership</h3>
              <p className="text-white/70">Became a recognized leader in AI-powered technology solutions with global reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
              <p className="text-purple-400 mb-2">CEO & Founder</p>
              <p className="text-white/70 text-sm">Visionary leader driving innovation and strategic growth</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Research Team</h3>
              <p className="text-cyan-400 mb-2">Research & Development</p>
              <p className="text-white/70 text-sm">Cutting-edge AI research and development experts</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technology Team</h3>
              <p className="text-blue-400 mb-2">Engineering & Innovation</p>
              <p className="text-white/70 text-sm">World-class engineers and technology innovators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-white/70">Team Members</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
                <div className="text-white/70">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">$50M+</div>
                <div className="text-white/70">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-white/70">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/70 mb-8">
            Be part of the future of technology. Let's work together to create innovative solutions that change the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/careers"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}