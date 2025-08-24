import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Award, Globe, Zap, Shield, TrendingUp, Heart } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value",
      icon: Heart,
      color: "text-red-400"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service",
      icon: Award,
      color: "text-yellow-400"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business relationships",
      icon: Shield,
      color: "text-green-400"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to transform businesses through innovative technology"
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level project, establishing our reputation for quality"
    },
    {
      year: "2019",
      title: "AI Division Launch",
      description: "Expanded into artificial intelligence and machine learning services"
    },
    {
      year: "2021",
      title: "Cloud Services",
      description: "Launched comprehensive cloud migration and infrastructure services"
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Extended our services to clients across multiple countries and continents"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate and lead in emerging technologies like quantum computing and space tech"
    }
  ];

  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in technology and business transformation",
      image: "👨‍💼"
    },
    {
      name: "AI Development Team",
      role: "Machine Learning Engineers",
      description: "Experts in cutting-edge AI technologies and neural network architectures",
      image: "🤖"
    },
    {
      name: "Cloud Architects",
      role: "Infrastructure Specialists",
      description: "Certified professionals in AWS, Azure, and multi-cloud solutions",
      image: "☁️"
    },
    {
      name: "Security Experts",
      role: "Cybersecurity Professionals",
      description: "Certified security professionals with deep expertise in threat prevention",
      image: "🔒"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: "🎓" },
    { number: "500+", label: "Projects Delivered", icon: "✅" },
    { number: "50+", label: "Team Members", icon: "👥" },
    { number: "99.9%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🔄" },
    { number: "8+", label: "Industries Served", icon: "🏢" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Group | Our Story, Mission & Team</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions. Discover our story, values, and dedicated team." />
        <meta name="keywords" content="about us, company story, mission, team, Zion Tech Group, technology company" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            We&apos;re a team of passionate technologists, innovators, and problem-solvers 
            dedicated to transforming businesses through cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get in Touch
            </Link>
            <Link href="/careers" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in an increasingly digital world.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We believe that technology should be an enabler, not a barrier. Our solutions 
                are designed to be intuitive, scalable, and transformative.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-blue-400" />
                <span className="text-white font-medium">Innovation-Driven Solutions</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the leading technology partner for businesses seeking digital transformation, 
                recognized for our innovation, reliability, and commitment to client success.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We envision a future where technology seamlessly integrates with business processes, 
                creating opportunities for growth and innovation across all industries.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-purple-400" />
                <span className="text-white font-medium">Global Technology Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Culture
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Innovation & Learning</h3>
                <p className="text-gray-300 mb-4">
                  We foster a culture of continuous learning and innovation. Our team members are 
                  encouraged to explore new technologies, attend conferences, and contribute to 
                  open-source projects.
                </p>
                <p className="text-gray-300">
                  We believe that the best solutions come from diverse perspectives and collaborative 
                  problem-solving.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300 mb-4">
                  We understand that great work comes from happy, well-balanced team members. 
                  We offer flexible working arrangements, comprehensive benefits, and a supportive 
                  environment.
                </p>
                <p className="text-gray-300">
                  Our team members enjoy competitive salaries, health benefits, and opportunities 
                  for professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start a Project
              </Link>
              <Link href="/careers" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Join Our Team
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;