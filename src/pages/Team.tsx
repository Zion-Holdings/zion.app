import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  TrendingUp 
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 20+ years in technology innovation and business transformation",
      expertise: ["AI & Machine Learning", "Quantum Computing", "Strategic Leadership"],
      image: "/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Head of Engineering",
      description: "Technology expert driving innovation in AI, quantum computing, and infrastructure solutions",
      expertise: ["Software Architecture", "AI Systems", "Cloud Infrastructure"],
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI & Research",
      description: "Leading-edge researcher in artificial intelligence and autonomous systems",
      expertise: ["Machine Learning", "Neural Networks", "AI Ethics"],
      image: "/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Elena Petrova",
      role: "Quantum Technology Lead",
      description: "Quantum physicist specializing in quantum computing and quantum internet infrastructure",
      expertise: ["Quantum Computing", "Quantum Networks", "Quantum Algorithms"],
      image: "/team/elena-petrova.jpg"
    },
    {
      name: "Alex Thompson",
      role: "Cybersecurity Director",
      description: "Security expert ensuring enterprise-grade protection for all client solutions",
      expertise: ["Zero Trust Security", "Threat Intelligence", "Compliance"],
      image: "/team/alex-thompson.jpg"
    },
    {
      name: "Priya Patel",
      role: "Head of Industry Solutions",
      description: "Domain expert in healthcare, finance, and manufacturing technology solutions",
      expertise: ["Industry 4.0", "Digital Transformation", "Regulatory Compliance"],
      image: "/team/priya-patel.jpg"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible with cutting-edge technology",
      icon: Rocket
    },
    {
      title: "Excellence",
      description: "Delivering the highest quality solutions and exceptional service",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "Working together to achieve extraordinary results for our clients",
      icon: Users
    },
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our interactions",
      icon: Shield
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across diverse industries"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals with diverse expertise"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      number: "99.9%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Our Team - Zion Tech Group" 
        description="Meet the exceptional team of innovators, engineers, and industry experts driving Zion Tech Group's mission to revolutionize technology."
        keywords="team, leadership, experts, AI specialists, quantum physicists, cybersecurity experts, Zion Tech Group"
        url="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Team
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Exceptional Talent, Extraordinary Results
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Meet the brilliant minds behind Zion Tech Group - a diverse team of innovators, engineers, 
            researchers, and industry experts committed to transforming the future of technology.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology innovation, 
              business transformation, and industry expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-zion-cyan font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-zion-slate text-sm mb-4">
                    {member.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark mb-3">Areas of Expertise</h4>
                  <ul className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              The core principles that guide our team and drive our success in delivering 
              innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Numbers that reflect our team's dedication, expertise, and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {achievement.label}
                </div>
                <p className="text-zion-slate text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Are you passionate about technology innovation? Join our team of experts and help us 
            shape the future of technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}