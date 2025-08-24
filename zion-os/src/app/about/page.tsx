import Link from "next/link";

export const metadata = {
  title: "About Us - Zion Tech Group | Leading Technology Innovation",
  description: "Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI, quantum computing, and enterprise technology solutions.",
  keywords: "about Zion Tech Group, company history, mission, vision, technology innovation, AI company",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology with innovative solutions that 
            transform businesses and accelerate human progress.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology and empower organizations 
                worldwide to achieve their full potential through innovative AI, quantum computing, 
                and enterprise solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that technology should be a force for good, driving sustainable growth, 
                fostering innovation, and creating opportunities for all.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in transformative technology solutions, 
                shaping the future of business and society through continuous innovation 
                and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to global technology leadership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">2018</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Foundation</h3>
              <p className="text-gray-400">
                Founded with a vision to revolutionize how businesses leverage 
                artificial intelligence and emerging technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2021</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expansion</h3>
              <p className="text-gray-400">
                Expanded into quantum computing and cybersecurity, serving 
                Fortune 500 companies across multiple industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Leadership</h3>
              <p className="text-gray-400">
                Established as a global technology leader with offices in 
                15 countries and serving 500+ enterprise clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We constantly push the boundaries of what's possible, 
                exploring new technologies and approaches to solve complex challenges.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We maintain the highest standards in everything we do, 
                from product development to customer service and support.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of partnerships and teamwork, 
                working closely with clients and partners to achieve shared success.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-400">
                We measure success not just by profit, but by the positive 
                impact our solutions have on businesses and society.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-400">
                We conduct business with honesty, transparency, and ethical 
                practices, building trust with our clients and partners.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning</h3>
              <p className="text-gray-400">
                We foster a culture of continuous learning and development, 
                encouraging our team to stay ahead of emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, cybersecurity, and enterprise technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">KL</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kleber Lima</h3>
              <p className="text-blue-400 mb-3">CEO & Founder</p>
              <p className="text-gray-400 text-sm">
                Visionary leader with 15+ years in technology innovation and business transformation.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
              <p className="text-green-400 mb-3">Research & Development</p>
              <p className="text-gray-400 text-sm">
                Leading researchers pushing the boundaries of artificial intelligence and machine learning.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">QC</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Team</h3>
              <p className="text-purple-400 mb-3">Quantum Computing</p>
              <p className="text-gray-400 text-sm">
                Experts in quantum algorithms, infrastructure, and applications development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's work together to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </Link>
              <Link href="/careers" className="btn-secondary text-lg px-8 py-4">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}