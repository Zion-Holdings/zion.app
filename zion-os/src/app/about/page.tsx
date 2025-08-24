import Link from "next/link";

export const metadata = {
  title: "About Zion Tech Group - Leading AI & Technology Innovation",
  description: "Learn about Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and autonomous systems. Discover our journey, values, and vision for the future.",
  keywords: "Zion Tech Group, AI innovation, quantum computing, autonomous systems, technology company, about us",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of autonomous technology and AI-powered solutions
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI and autonomous technologies, 
                enabling businesses and individuals to harness the power of intelligent 
                automation for unprecedented growth and innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe in creating technology that serves humanity, enhances 
                productivity, and opens new possibilities for the future.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where AI and autonomous systems work seamlessly with humans, 
                creating a more efficient, sustainable, and prosperous future for all.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to technological innovation leader
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">2019</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Foundation</h3>
              <p className="text-gray-400">
                Zion Tech Group was founded with a vision to revolutionize 
                how businesses interact with technology.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2022</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Breakthrough</h3>
              <p className="text-gray-400">
                Launched our first autonomous AI systems and began 
                developing quantum computing solutions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
              <p className="text-gray-400">
                Serving clients worldwide with cutting-edge AI, 
                quantum, and autonomous technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-400">
                Constantly pushing boundaries and exploring new possibilities
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-sm text-gray-400">
                Building reliable, secure, and transparent solutions
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-gray-400">
                Working together with clients and partners for mutual success
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-gray-400">
                Delivering the highest quality solutions and service
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionaries driving Zion Tech Group forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">KL</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kleber Lima</h3>
              <p className="text-blue-400 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-400">
                Visionary leader with 15+ years in AI and technology innovation
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
              <p className="text-green-400 mb-2">Research & Development</p>
              <p className="text-sm text-gray-400">
                World-class researchers pushing the boundaries of AI and quantum computing
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">ET</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Engineering Team</h3>
              <p className="text-purple-400 mb-2">Product Development</p>
              <p className="text-sm text-gray-400">
                Expert engineers building the future of autonomous systems
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in shaping the future of technology. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}