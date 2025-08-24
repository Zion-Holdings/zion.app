import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PartnersPage() {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate on cutting-edge AI, quantum computing, and emerging technology solutions",
      benefits: ["Joint R&D initiatives", "Technology licensing", "Market expansion", "Innovation sharing"],
      icon: "🔬"
    },
    {
      title: "Channel Partners",
      description: "Resell and implement Zion Tech Group solutions in your markets",
      benefits: ["Revenue sharing", "Training and certification", "Marketing support", "Technical assistance"],
      icon: "🌐"
    },
    {
      title: "Strategic Partners",
      description: "Long-term collaboration on transformative business initiatives",
      benefits: ["Joint ventures", "Strategic investments", "Market leadership", "Innovation ecosystem"],
      icon: "🚀"
    },
    {
      title: "Academic Partners",
      description: "Research collaboration and talent development programs",
      benefits: ["Research grants", "Student internships", "Faculty exchange", "Innovation labs"],
      icon: "🎓"
    }
  ];

  const currentPartners = [
    {
      name: "Quantum Computing Institute",
      logo: "🔬",
      description: "Leading research in quantum algorithms and quantum machine learning",
      partnership: "Joint R&D in quantum AI applications"
    },
    {
      name: "Global Tech Consortium",
      logo: "🌍",
      description: "International technology standards and interoperability",
      partnership: "Technology standards development"
    },
    {
      name: "Innovation University",
      logo: "🎓",
      description: "Academic research and talent development",
      partnership: "AI ethics research and education"
    }
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's partner ecosystem. Explore technology partnerships, channel opportunities, and strategic collaborations in AI, quantum computing, and emerging technologies." />
        <meta name="keywords" content="technology partners, channel partners, strategic partnerships, AI collaboration, quantum computing partners" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Join our ecosystem of innovators, researchers, and technology leaders 
              to shape the future of AI, quantum computing, and digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#partnership-types" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Opportunities
              </Link>
              <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnership-types" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Partnership Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-6xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <p className="text-blue-400 font-medium">{partner.partnership}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Partnership Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Initial Contact</h3>
                <p className="text-gray-300">Reach out to discuss partnership opportunities and mutual goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Evaluation</h3>
                <p className="text-gray-300">Assess compatibility, resources, and strategic alignment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Agreement</h3>
                <p className="text-gray-300">Define terms, responsibilities, and success metrics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Launch</h3>
                <p className="text-gray-300">Execute partnership initiatives and monitor progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s explore how we can work together to create innovative solutions 
              and drive digital transformation across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Partnership Discussion
              </Link>
              <Link href="/services" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}