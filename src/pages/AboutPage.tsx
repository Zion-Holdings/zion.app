import React from 'react';
import { Users, Target, Award, Zap, Globe, Shield } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              {" "}Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to empowering businesses 
            with innovative AI, IT, and micro SAAS solutions that drive growth and efficiency.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to leverage the power of AI, automation, and digital transformation 
                to achieve their goals and stay competitive in an ever-evolving digital landscape.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                We believe that every business deserves access to enterprise-grade technology 
                solutions that were once only available to large corporations with massive budgets.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zion-slate-light leading-relaxed">
                To become the leading provider of intelligent, accessible, and affordable 
                technology solutions that transform how businesses operate, compete, and grow 
                in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
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

      {/* Team */}
      <div className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We are a diverse team of passionate technologists, designers, and business 
              experts who are committed to delivering exceptional value to our clients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Leadership Team
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Our experienced leadership team brings decades of combined experience 
                  in technology, business, and innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-3"></div>
                    <div className="font-semibold text-slate-900 dark:text-white">Kleber</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Founder & CEO</div>
                  </div>
                  {/* Add more team members as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Let's discuss how our innovative solutions can transform your business 
              and help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30"
              >
                Get Started
              </a>
              <a
                href="/all-services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}