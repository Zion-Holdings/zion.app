
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of technology collaboration and AI innovation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-zion-blue text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-zion-blue mb-4">Our Mission</h3>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                To democratize access to advanced technology solutions, making it easier for businesses 
                of all sizes to leverage the power of AI, cloud computing, and digital transformation. 
                We believe that innovation should be accessible to everyone.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-zion-purple text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-zion-purple mb-4">Our Vision</h3>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                To become the world's most trusted platform for technology services and AI solutions, 
                empowering businesses to innovate and grow in the digital age. We envision a future where 
                technology collaboration is seamless and transformative.
              </p>
            </div>
          </div>

          {/* Company Description */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-8">Who We Are</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-zion-slate-light leading-relaxed">
                Zion Tech Group is a leading technology marketplace that connects businesses with top AI and tech talent, 
                innovative services, and cutting-edge solutions. We specialize in micro SAAS services, AI development, 
                cloud solutions, cybersecurity, and enterprise technology consulting.
              </p>
              
              <p className="text-lg text-zion-slate-light leading-relaxed">
                Founded with a vision to bridge the gap between cutting-edge technology and business needs, 
                we've created a comprehensive ecosystem where innovation meets implementation. Our platform 
                serves as the central hub for all technology collaboration needs.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="text-zion-cyan text-3xl mb-3">💡</div>
                <h4 className="text-lg font-semibold text-zion-blue mb-2">Innovation</h4>
                <p className="text-zion-slate-light text-sm">
                  We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="text-zion-cyan text-3xl mb-3">⭐</div>
                <h4 className="text-lg font-semibold text-zion-blue mb-2">Quality</h4>
                <p className="text-zion-slate-light text-sm">
                  We maintain the highest standards in all our services and partnerships.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="text-zion-cyan text-3xl mb-3">🔍</div>
                <h4 className="text-lg font-semibold text-zion-blue mb-2">Transparency</h4>
                <p className="text-zion-slate-light text-sm">
                  We believe in open communication and clear, honest relationships with our clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="text-zion-cyan text-3xl mb-3">🤝</div>
                <h4 className="text-lg font-semibold text-zion-blue mb-2">Partnership</h4>
                <p className="text-zion-slate-light text-sm">
                  We build lasting relationships based on trust, collaboration, and mutual success.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">500+</div>
                <div className="text-blue-100">Verified Professionals</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">1000+</div>
                <div className="text-blue-100">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">50+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">99%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
