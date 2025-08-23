import React from 'react';
import { NextPage } from 'next';
import { Handshake, Users, Target, Star, ArrowRight, CheckCircle, Globe, Award, Heart, Zap, Building } from 'lucide-react';

const Partners: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
              <Handshake className="w-4 h-4" />
              <span>Partnership Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join forces with Zion Tech Group to accelerate innovation and create revolutionary technology solutions 
              that transform industries and shape the future of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Why Partner With Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with the world's leading AI consciousness and quantum technology company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Cutting-Edge Technology",
                description: "Access to revolutionary AI consciousness, quantum computing, and space technology solutions.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Expand your market presence with our worldwide network and international partnerships.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description: "Dedicated technical support and training from our world-class AI and quantum experts.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Revenue Growth",
                description: "Increase your revenue through high-margin technology solutions and recurring services.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Innovation Leadership",
                description: "Position your company as a technology leader with access to future-focused solutions.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Exclusive Access",
                description: "Be among the first to access breakthrough technologies and revolutionary AI systems.",
                color: "from-red-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and growth strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technology Reseller",
                description: "Resell our revolutionary AI and quantum technology solutions to your customers with competitive margins and comprehensive support.",
                icon: <Building className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500",
                features: ["Exclusive territory rights", "Technical training & support", "Marketing materials", "Competitive pricing"]
              },
              {
                title: "Strategic Alliance",
                description: "Collaborate on joint product development, market expansion, and technology innovation projects.",
                icon: <Handshake className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500",
                features: ["Joint development", "Shared IP rights", "Market collaboration", "Resource sharing"]
              },
              {
                title: "Technology Integration",
                description: "Integrate our AI consciousness and quantum solutions into your existing products and services.",
                icon: <Target className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
                features: ["API access", "Custom integration", "Technical consulting", "Ongoing support"]
              },
              {
                title: "Research Partnership",
                description: "Collaborate on cutting-edge research in AI consciousness, quantum computing, and space technology.",
                icon: <Star className="w-6 h-6" />,
                color: "from-orange-500 to-red-500",
                features: ["Research collaboration", "Shared publications", "Joint patents", "Academic partnerships"]
              }
            ].map((type, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.color} p-3 mb-4 inline-flex`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary technology solutions are transforming industries across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Healthcare & Life Sciences",
              "Financial Services",
              "Manufacturing & Industry",
              "Space & Aerospace",
              "Energy & Utilities",
              "Transportation & Logistics",
              "Education & Research",
              "Government & Defense"
            ].map((industry, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the revolution and be part of the future of technology. Let's discuss how we can create value together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;