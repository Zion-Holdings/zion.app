
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of technology through innovation, expertise, and unwavering commitment to excellence
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-blue-400 text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-blue-100 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and sustainable growth in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-cyan-400 text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-blue-100 leading-relaxed">
              To be the leading technology partner that transforms how businesses operate, 
              creating a future where technology seamlessly enhances human potential.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Founded in 2020</h3>
              <p className="text-blue-100">
                Started with a vision to democratize access to cutting-edge technology solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Hub</h3>
              <p className="text-blue-100">
                Built a team of experts passionate about pushing technological boundaries
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-blue-100">
                Serving clients worldwide with transformative technology solutions
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-green-400 text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
              <p className="text-blue-100 text-sm">
                We operate with honesty, transparency, and ethical practices
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-yellow-400 text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-blue-100 text-sm">
                We strive for the highest quality in everything we do
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-purple-400 text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-blue-100 text-sm">
                We believe in the power of teamwork and partnership
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-red-400 text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-blue-100 text-sm">
                We continuously explore new technologies and approaches
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Team</h2>
          <p className="text-blue-100 text-center mb-8 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, 
            business, and innovation to deliver exceptional results for our clients.
          </p>
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
