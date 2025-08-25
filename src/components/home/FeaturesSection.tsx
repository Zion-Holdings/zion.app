import React from 'react';
import { Brain, Shield, Clock, TrendingUp, Users, Rocket, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation.",
    benefits: ["Intelligent automation", "Predictive insights", "Continuous learning"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance standards to protect your business and data.",
    benefits: ["SOC 2 compliance", "GDPR ready", "Zero-trust architecture"]
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring to keep your systems running smoothly.",
    benefits: ["Instant response", "Proactive monitoring", "Expert engineers"]
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable business outcomes and ROI for our clients.",
    benefits: ["Average 40% cost reduction", "95% client satisfaction", "3x faster deployment"]
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with deep expertise in AI, cybersecurity, and enterprise IT.",
    benefits: ["AWS certified", "Microsoft partners", "Industry veterans"]
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Solutions designed to scale and adapt as your business grows and technology evolves.",
    benefits: ["Scalable architecture", "API-first design", "Cloud-native"]
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results that drive real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1,200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}