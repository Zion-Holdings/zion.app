import Link from "next/link";

export const metadata = {
  title: "About Zion Tech Group - Leading AI & Quantum Technology Company",
  description: "Learn about Zion Tech Group, a pioneering technology company specializing in AI automation, quantum computing, cybersecurity, and enterprise IT solutions.",
  keywords: "about Zion Tech Group, company history, mission, vision, AI technology, quantum computing, Zion Tech Group",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology through artificial intelligence, quantum computing, and innovative 
            solutions that transform businesses and advance human potential.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2020, Zion Tech Group emerged from a vision to democratize cutting-edge technology 
                and make advanced AI and quantum computing accessible to businesses of all sizes. What started 
                as a small research team has grown into a global technology leader.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our journey began with a simple belief: that technology should serve humanity, not replace it. 
                This philosophy drives everything we do, from our research priorities to our product development 
                and client relationships.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Today, we're proud to serve hundreds of organizations worldwide, helping them navigate the 
                digital transformation landscape and unlock new possibilities through innovative technology solutions.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Company Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                  Founded in 2020
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  200+ employees worldwide
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  15+ global offices
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  500+ successful projects
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To accelerate human progress through accessible, ethical, and transformative technology solutions 
                that solve the world's most complex challenges.
              </p>
              <p className="text-gray-300">
                We believe that advanced technology should be a force for good, empowering organizations and 
                individuals to achieve what was previously impossible while maintaining the highest standards 
                of ethics and responsibility.
              </p>
            </div>

            {/* Vision */}
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                To be the global leader in responsible AI and quantum technology, creating a future where 
                human potential is unlimited and technology serves as a bridge to new possibilities.
              </p>
              <p className="text-gray-300">
                We envision a world where artificial intelligence enhances human capabilities, quantum computing 
                solves previously intractable problems, and technology creates opportunities for all.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="card text-center group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We constantly push the boundaries of what's possible, exploring new frontiers in AI, 
                quantum computing, and emerging technologies.
              </p>
            </div>

            {/* Ethics */}
            <div className="card text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethics & Responsibility</h3>
              <p className="text-gray-400">
                We develop technology with a strong ethical foundation, ensuring our solutions benefit 
                humanity while minimizing potential risks.
              </p>
            </div>

            {/* Excellence */}
            <div className="card text-center group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We maintain the highest standards of quality in everything we do, from research and development 
                to client delivery and support.
              </p>
            </div>

            {/* Collaboration */}
            <div className="card text-center group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of partnerships, working closely with clients, researchers, 
                and industry leaders to achieve shared goals.
              </p>
            </div>

            {/* Sustainability */}
            <div className="card text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-green-500/30 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-400">
                We're committed to environmental responsibility, developing technology solutions that 
                support a sustainable future for generations to come.
              </p>
            </div>

            {/* Accessibility */}
            <div className="card text-center group">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500/30 transition-colors">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-400">
                We strive to make advanced technology accessible to organizations of all sizes, 
                democratizing innovation and opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-blue-400 mb-3">Chief Executive Officer</p>
              <p className="text-gray-400 text-sm">
                Visionary leader with 20+ years in technology and AI research. Former research director at leading tech companies.
              </p>
            </div>

            {/* CTO */}
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">JS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-green-400 mb-3">Chief Technology Officer</p>
              <p className="text-gray-400 text-sm">
                Quantum computing expert and AI researcher. PhD in Computer Science with focus on neural networks.
              </p>
            </div>

            {/* CRO */}
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-2xl">MB</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Brown</h3>
              <p className="text-purple-400 mb-3">Chief Research Officer</p>
              <p className="text-gray-400 text-sm">
                Leading researcher in AI consciousness and cognitive systems. Published author and conference speaker.
              </p>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">North America</h4>
              <p className="text-sm text-gray-400">San Francisco, New York, Toronto</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Europe</h4>
              <p className="text-sm text-gray-400">London, Berlin, Paris, Amsterdam</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Asia Pacific</h4>
              <p className="text-sm text-gray-400">Tokyo, Singapore, Sydney, Bangalore</p>
            </div>
            <div className="card text-center p-6">
              <h4 className="font-semibold mb-2">Middle East</h4>
              <p className="text-sm text-gray-400">Dubai, Tel Aviv, Riyadh</p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30">
              <h3 className="text-xl font-bold mb-3">2024 AI Innovation Award</h3>
              <p className="text-gray-300 text-sm">
                Recognized for breakthrough work in AI consciousness evolution and ethical AI development.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30">
              <h3 className="text-xl font-bold mb-3">2023 Quantum Excellence</h3>
              <p className="text-gray-300 text-sm">
                Awarded for pioneering quantum neural network platform and quantum computing applications.
              </p>
            </div>
            <div className="card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <h3 className="text-xl font-bold mb-3">2023 Best Workplace</h3>
              <p className="text-gray-300 text-sm">
                Named one of the top technology companies to work for by leading industry publications.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the Zion Tech Group Family</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a company that's shaping the future of technology and making a positive impact on the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="btn-primary">
                View Careers
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}