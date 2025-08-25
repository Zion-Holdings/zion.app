
import { Users, Target, Award, Zap, Globe, Shield, Sparkles, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Award },
    { label: 'Projects Completed', value: '100+', icon: Target },
    { label: 'Happy Clients', value: '50+', icon: Users },
    { label: 'Team Members', value: '15+', icon: Users }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Every project we deliver meets the highest standards of quality, security, and performance that our clients expect.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their needs and building solutions that truly serve their business objectives.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our services are available worldwide, helping businesses across different industries and regions achieve digital transformation.'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 5+ years of experience in technology and business transformation.',
      avatar: '👨‍💼'
    },
    {
      name: 'AI Team',
      role: 'AI Specialists',
      description: 'Expert team specializing in machine learning, natural language processing, and AI-powered solutions.',
      avatar: '🤖'
    },
    {
      name: 'Dev Team',
      role: 'Development Engineers',
      description: 'Skilled developers creating robust, scalable, and innovative software solutions.',
      avatar: '👨‍💻'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated professionals ensuring exceptional customer experience and support.',
      avatar: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Our Story</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            About
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to empowering businesses 
            with innovative AI, IT, and micro SAAS solutions that drive growth and efficiency.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                Our Mission
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to leverage the power of AI, automation, and digital transformation 
                to achieve their goals and stay competitive in an ever-evolving digital landscape.
              </p>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                We believe that every business deserves access to enterprise-grade technology 
                solutions that were once only available to large corporations with massive budgets.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 lg:p-12 backdrop-blur-md shadow-xl">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-zion-slate-light leading-relaxed text-lg">
                  To become the leading provider of intelligent, accessible, and affordable 
                  technology solutions that transform how businesses operate, compete, and grow 
                  in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We've helped businesses achieve remarkable results through our innovative solutions and dedicated support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-cyan/25">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              These principles guide everything we do, from how we develop solutions to how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="group bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, 
              business, and innovation to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-cyan/25 text-4xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-t border-zion-purple/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Let's discuss how our team can help transform your business with innovative 
            technology solutions tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30 text-lg"
            >
              <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Today
              <TrendingUp className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:+13024640950"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 hover:scale-105 text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="mt-12 text-slate-700 dark:text-slate-300 space-y-2">
            <p className="text-lg">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-lg">✉️ kleber@ziontechgroup.com</p>
            <p className="text-lg">🌐 <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline font-medium">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}