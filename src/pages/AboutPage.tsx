import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  TrendingUp, 
  Users, 
  Award, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  Rocket,
  Lightbulb
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize security and reliability in everything we do, ensuring your business is protected."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international expertise and insights to solve local and global business challenges."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Services Delivered", icon: Rocket },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Visionary leader with 15+ years in technology and business transformation. Passionate about innovation and client success.",
      expertise: ["Strategic Planning", "Business Development", "Technology Leadership"]
    },
    {
      name: "Sarah Chen",
      role: "CTO & Head of Innovation",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "Technology expert specializing in AI, cloud architecture, and digital transformation. Drives innovation across all solutions.",
      expertise: ["AI/ML", "Cloud Architecture", "Digital Transformation"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Solutions architect with deep expertise in enterprise systems, cybersecurity, and business process optimization.",
      expertise: ["Enterprise Systems", "Cybersecurity", "Process Optimization"]
    },
    {
      name: "Emily Watson",
      role: "Head of Client Success",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Client success specialist ensuring exceptional service delivery and long-term partnerships with our clients.",
      expertise: ["Client Relations", "Project Management", "Service Delivery"]
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to transform businesses through innovative technology solutions."
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description: "Reached our first milestone of 100 satisfied clients across various industries and business sizes."
    },
    {
      year: "2022",
      title: "AI Services Launch",
      description: "Expanded our portfolio with cutting-edge AI services and machine learning solutions."
    },
    {
      year: "2023",
      title: "Micro SAAS Platform",
      description: "Launched our innovative micro SAAS platform, revolutionizing how businesses access enterprise-grade tools."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded our reach globally, serving clients across North America, Europe, and Asia-Pacific regions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-dark via-zion-dark/95 to-zion-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zion-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-light/90 mb-8 max-w-4xl mx-auto">
                We're a forward-thinking technology company dedicated to transforming businesses 
                through innovative AI, micro SAAS, and IT solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30">
                  <Target className="w-8 h-8 text-zion-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Mission
                </h2>
                <p className="text-lg text-zion-light/70 leading-relaxed">
                  To democratize access to enterprise-grade technology solutions, enabling businesses 
                  of all sizes to compete and thrive in the digital economy. We believe that innovation 
                  should be accessible, affordable, and impactful.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zion-light/80">
                    <CheckCircle className="w-5 h-5 text-zion-primary flex-shrink-0" />
                    <span>Democratize technology access</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-light/80">
                    <CheckCircle className="w-5 h-5 text-zion-primary flex-shrink-0" />
                    <span>Drive digital transformation</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-light/80">
                    <CheckCircle className="w-5 h-5 text-zion-primary flex-shrink-0" />
                    <span>Enable business growth</span>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30">
                  <Eye className="w-8 h-8 text-zion-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Vision
                </h2>
                <p className="text-lg text-zion-light/70 leading-relaxed">
                  To be the leading force in business technology innovation, creating a world where 
                  every organization has the tools and capabilities to achieve their full potential 
                  and drive positive change in their industries.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zion-light/80">
                    <CheckCircle className="w-5 h-5 text-zion-primary flex-shrink-0" />
                    <span>Lead technology innovation</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-light/80">
                    <CheckCircle className="w-5 h-5 text-zion-primary flex-shrink-0" />
                    <span>Empower organizations globally</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-light/80">
                    <CheckCircle className="w-5 h-5 text-zion-primary flex-shrink-0" />
                    <span>Drive positive industry change</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-zion-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-zion-light/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-zion-light/70 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape how we serve our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-zion-dark/60 to-zion-dark/40 backdrop-blur-sm border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-zion-light/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-zion-light/70 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, 
                business, and innovation to deliver exceptional results for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-zion-dark/60 to-zion-dark/40 backdrop-blur-sm border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-zion-primary/30 group-hover:border-zion-primary/60 transition-all duration-300">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-zion-secondary font-semibold mb-3">{member.role}</p>
                  <p className="text-zion-light/70 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-xs text-zion-light/60">
                        • {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl text-zion-light/70 max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted technology partner for businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zion-primary to-zion-secondary" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-gradient-to-r from-zion-dark/80 to-zion-dark/60 backdrop-blur-sm border border-zion-primary/20 rounded-2xl p-6 hover:border-zion-primary/40 transition-all duration-300">
                        <div className="text-2xl font-bold text-zion-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-zion-light/70">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-zion-primary rounded-full border-4 border-zion-dark shadow-lg" />
                    
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-zion-primary/10 via-zion-secondary/10 to-zion-cyan/10 rounded-3xl p-12 border border-zion-primary/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-zion-light/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful companies that trust Zion Tech Group 
                to deliver innovative solutions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-primary/25 flex items-center gap-3"
                >
                  Get Started Today
                  <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </a>
                <a
                  href="/all-services"
                  className="group bg-transparent hover:bg-zion-primary/10 text-zion-primary border-2 border-zion-primary hover:border-zion-primary/60 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                >
                  Explore Our Services
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;