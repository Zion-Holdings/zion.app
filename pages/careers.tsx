import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Briefcase, Globe, Shield, TrendingUp, Building, Star, Rocket, Lightbulb, Heart } from 'lucide-react';

export default function Careers() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Join Our Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Careers
                </span>
                <br />
                <span className="text-white">Shape the Future of Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join Zion Tech Group and be part of a team that's revolutionizing AI consciousness, 
                quantum computing, and autonomous systems. Your next breakthrough starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Learn About Culture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover what makes us different and why talented professionals choose to 
                build their careers with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Cutting-Edge Innovation",
                  description: "Work on the most advanced AI consciousness and quantum computing technologies.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Lightbulb className="w-12 h-12" />,
                  title: "Creative Freedom",
                  description: "Express your creativity and bring your boldest ideas to life.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Global Impact",
                  description: "Make a difference in the world through transformative technology.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Heart className="w-12 h-12" />,
                  title: "Inclusive Culture",
                  description: "Join a diverse team that values collaboration and mutual respect.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Career Growth",
                  description: "Continuous learning and advancement opportunities in your field.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Recognition",
                  description: "Get recognized for your contributions and achievements.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore exciting opportunities to join our team and contribute to 
                groundbreaking technological advancements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Senior AI Consciousness Engineer",
                  department: "AI Research & Development",
                  location: "Remote / Hybrid",
                  type: "Full-time",
                  description: "Lead the development of next-generation AI consciousness systems and ethical frameworks.",
                  requirements: ["PhD in AI/ML", "5+ years experience", "Ethics background"],
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Quantum Computing Specialist",
                  department: "Quantum Technologies",
                  location: "On-site",
                  type: "Full-time",
                  description: "Design and implement quantum algorithms for complex computational problems.",
                  requirements: ["MS/PhD in Physics", "Quantum experience", "Programming skills"],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Autonomous Systems Architect",
                  department: "Autonomous Technologies",
                  location: "Remote",
                  type: "Full-time",
                  description: "Architect autonomous systems that integrate AI consciousness with real-world applications.",
                  requirements: ["Systems engineering", "AI/ML experience", "Robotics knowledge"],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Cybersecurity Engineer",
                  department: "Security & Compliance",
                  location: "Hybrid",
                  type: "Full-time",
                  description: "Protect our systems and data with advanced security measures and threat detection.",
                  requirements: ["Security certifications", "3+ years experience", "Threat analysis"],
                  color: "from-orange-500 to-red-500"
                }
              ].map((position, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${position.color} p-4 mb-6`}>
                    <Briefcase className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">{position.department}</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">{position.location}</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">{position.type}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Company Culture
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience a workplace that values innovation, collaboration, and 
                personal growth while making a positive impact on the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Values That Drive Us</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Innovation First",
                      description: "We push boundaries and embrace bold ideas that challenge conventional thinking."
                    },
                    {
                      title: "Ethical Technology",
                      description: "Every innovation we create is guided by strong ethical principles and human values."
                    },
                    {
                      title: "Collaborative Excellence",
                      description: "We believe the best solutions come from diverse teams working together."
                    },
                    {
                      title: "Continuous Learning",
                      description: "Growth is constant - we invest in your development and encourage curiosity."
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                        <p className="text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-32 h-32 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't see the perfect role? Send us your resume and let's explore 
              opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Submit Application
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Contact Recruiting
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}