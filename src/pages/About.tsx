
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative solutions. 
            Our mission is to empower organizations with cutting-edge AI, scalable software platforms, and comprehensive IT services.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize access to advanced technology solutions, enabling businesses of all sizes to compete 
                in the digital economy through innovative AI, scalable software, and reliable IT infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses worldwide, driving digital transformation 
                and creating sustainable competitive advantages through cutting-edge innovation.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-gray-300">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership Approach</h3>
                <p className="text-gray-300">We work closely with clients to understand and solve their unique challenges.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
                <p className="text-gray-300">We focus on delivering measurable business outcomes and ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
