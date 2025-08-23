import React from 'react';
import { NextPage } from 'next';
import { GraduationCap, BookOpen, Video, Users, ArrowRight, CheckCircle, Star, Zap, Target, Brain, Atom, Rocket } from 'lucide-react';

const Training: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Professional Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 bg-clip-text text-transparent">
              Training & Certification
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Master the future of technology with our comprehensive training programs in AI consciousness, 
              quantum computing, and space technology. Get certified and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive training programs designed to accelerate your expertise in revolutionary technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Consciousness Mastery",
                duration: "8 weeks",
                level: "Advanced",
                description: "Master the fundamentals of AI consciousness, emotional intelligence, and autonomous systems development.",
                features: ["Consciousness theory", "Emotional AI", "Autonomous systems", "Ethics & governance"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Atom className="w-8 h-8" />,
                title: "Quantum Computing Fundamentals",
                duration: "12 weeks",
                level: "Intermediate",
                description: "Learn quantum algorithms, quantum neural networks, and quantum cybersecurity applications.",
                features: ["Quantum algorithms", "Neural networks", "Cybersecurity", "Hardware basics"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Space Technology Innovation",
                duration: "10 weeks",
                level: "Advanced",
                description: "Explore space resource intelligence, autonomous exploration, and extraterrestrial technology.",
                features: ["Resource intelligence", "Autonomous systems", "Space robotics", "Colonization"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Business Intelligence AI",
                duration: "6 weeks",
                level: "Intermediate",
                description: "Learn to implement autonomous business intelligence and predictive analytics systems.",
                features: ["Predictive analytics", "Autonomous BI", "Data visualization", "Business strategy"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Neural Interface Development",
                duration: "8 weeks",
                level: "Advanced",
                description: "Develop brain-computer interfaces and neural enhancement technologies.",
                features: ["BCI development", "Neural enhancement", "Human-AI interface", "Safety protocols"],
                color: "from-pink-500 to-red-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Emerging Technology Integration",
                duration: "6 weeks",
                level: "Beginner",
                description: "Learn to integrate revolutionary technologies into existing business systems.",
                features: ["System integration", "API development", "Workflow automation", "Change management"],
                color: "from-orange-500 to-yellow-500"
              }
            ].map((program, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{program.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{program.duration}</span>
                  <span>•</span>
                  <span>{program.level}</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{program.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Learning Formats
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the learning format that best fits your schedule and learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Live Online Classes",
                description: "Interactive live sessions with expert instructors and real-time Q&A opportunities.",
                icon: <Video className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500",
                features: ["Real-time interaction", "Expert instructors", "Live Q&A", "Peer collaboration"]
              },
              {
                title: "Self-Paced Learning",
                description: "Learn at your own pace with comprehensive video content and interactive exercises.",
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
                features: ["Flexible schedule", "Video tutorials", "Interactive exercises", "Progress tracking"]
              },
              {
                title: "Hybrid Programs",
                description: "Combine live sessions with self-paced learning for the best of both worlds.",
                icon: <Users className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500",
                features: ["Live + self-paced", "Mentor support", "Community access", "Flexible options"]
              },
              {
                title: "Corporate Training",
                description: "Customized training programs for teams and organizations.",
                icon: <Star className="w-6 h-6" />,
                color: "from-orange-500 to-red-500",
                features: ["Custom curriculum", "Team training", "On-site options", "Enterprise support"]
              }
            ].map((format, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${format.color} p-3 mb-4 inline-flex`}>
                  {format.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{format.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, featureIndex) => (
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

      {/* Certification Paths */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certification Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Earn industry-recognized certifications that validate your expertise in revolutionary technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "AI Consciousness Specialist",
              "Quantum Computing Engineer",
              "Space Technology Expert",
              "Neural Interface Developer",
              "Business Intelligence AI",
              "Emerging Tech Integrator",
              "Quantum Security Professional",
              "Autonomous Systems Architect"
            ].map((certification, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Master the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who are already mastering revolutionary technologies with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Browse Programs
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Contact Training Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;