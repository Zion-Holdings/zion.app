import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Eye, Heart, Award, CheckCircle, Star, Globe, Zap, Shield, Cpu, Cloud, Brain, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries and exploring new technologies to solve complex challenges",
      icon: Rocket,
      color: "text-purple-400"
    },
    {
      title: "Excellence",
      description: "Delivering exceptional quality and exceeding client expectations in every project",
      icon: Award,
      color: "text-yellow-400"
    },
    {
      title: "Integrity",
      description: "Building trust through honest communication and ethical business practices",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Collaboration",
      description: "Working together with clients and partners to achieve shared success",
      icon: Users,
      color: "text-green-400"
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Technology visionary with 15+ years of experience in software development and business transformation",
      expertise: ["Strategic Leadership", "Technology Innovation", "Business Development"],
      image: "/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in emerging technologies with deep knowledge of AI, cloud computing, and digital transformation",
      expertise: ["Technical Architecture", "AI/ML", "Cloud Infrastructure"],
      image: "/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      description: "Seasoned engineer specializing in scalable systems, DevOps, and software architecture",
      expertise: ["System Design", "DevOps", "Software Architecture"],
      image: "/team/michael-chen.jpg"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Star },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Globe }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to transform businesses through technology"
    },
    {
      year: "2015",
      title: "AI Services Launch",
      description: "Expanded into artificial intelligence and machine learning solutions"
    },
    {
      year: "2018",
      title: "Cloud & DevOps",
      description: "Launched comprehensive cloud infrastructure and DevOps services"
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Became a leader in end-to-end digital transformation consulting"
    },
    {
      year: "2024",
      title: "Emerging Tech",
      description: "Pioneering emerging technologies including quantum computing and XR"
    }
  ];

  return (
    <>
      <SEO 
        title="About Us | Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI, and digital transformation."
        keywords="about Zion Tech Group, company history, team, mission, values, technology company"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transforming Business Through
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Technology Innovation
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                For over 15 years, Zion Tech Group has been at the forefront of technological innovation, 
                helping businesses navigate the digital landscape and achieve transformative growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-zion-slate-light mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, 
                  efficiency, and sustainable growth in an ever-evolving digital world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Strategic Focus</h3>
                      <p className="text-zion-slate-light">Delivering technology solutions that align with business objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Future Vision</h3>
                      <p className="text-zion-slate-light">Anticipating technology trends and preparing clients for tomorrow</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-zion-slate-light mb-6">
                    To be the leading technology partner for businesses seeking digital transformation, 
                    recognized for innovation, reliability, and measurable business impact.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-zion-cyan/10 rounded-xl">
                      <Zap className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                      <p className="text-white font-semibold">Innovation</p>
                    </div>
                    <div className="text-center p-4 bg-zion-purple/10 rounded-xl">
                      <Globe className="w-8 h-8 text-zion-purple mx-auto mb-2" />
                      <p className="text-white font-semibold">Global Reach</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are as a company.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-zion-slate-light">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Experienced professionals passionate about technology and committed to your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-zion-cyan text-center mb-4">{member.role}</p>
                  <p className="text-zion-slate-light mb-4 text-center">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From startup to industry leader, discover the milestones that shaped Zion Tech Group.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-zion-cyan/30"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-zion-blue-dark border border-zion-cyan/20 rounded-xl p-6">
                        <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-zion-slate-light">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our team can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
