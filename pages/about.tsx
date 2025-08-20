import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function AboutPage() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Constantly pushing boundaries and exploring new frontiers in technology',
      color: 'text-cyan-400',
    },
    {
      icon: '🤖',
      title: 'Autonomy',
      description: 'Building systems that can operate independently and make intelligent decisions',
      color: 'text-fuchsia-400',
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Creating technology that makes a positive difference in the world',
      color: 'text-emerald-400',
    },
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Advanced machine learning models, natural language processing, computer vision systems, and autonomous decision making.',
      icon: '🧠',
      color: 'text-cyan-400',
    },
    {
      title: 'Automation Systems',
      description: 'Cloud infrastructure automation, CI/CD pipeline optimization, self-healing applications, and performance monitoring.',
      icon: '⚙️',
      color: 'text-fuchsia-400',
    },
  ];

  const achievements = [
    { number: '227+', label: 'Active Automations', color: 'text-cyan-400' },
    { number: '2960+', label: 'Dynamic Pages', color: 'text-fuchsia-400' },
    { number: '99.99%', label: 'Uptime Guarantee', color: 'text-emerald-400' },
    { number: '12', label: 'Core Components', color: 'text-blue-400' },
  ];

  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission and vision." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Pioneering the future of autonomous technology and AI-driven innovation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,204,0.03),transparent_70%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="group hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/20 bg-cursor-dark/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed font-light">
                To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
              </p>
            </Card>
            
            <Card className="group hover:border-fuchsia-400/40 hover:shadow-2xl hover:shadow-fuchsia-400/20 bg-cursor-dark/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed font-light">
                To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-cursor-darker to-cursor-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,122,204,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
              Our Core Values
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              The principles that guide our innovation and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 bg-cursor-dark/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br from-cursor-blue/20 to-blue-600/20 border border-cursor-blue/30`}>
                  {value.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,122,204,0.03),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
              What We Do
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive solutions that drive digital transformation and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 bg-cursor-dark/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br from-cursor-blue/20 to-blue-600/20 border border-cursor-blue/30`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cursor-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-b from-cursor-darker to-cursor-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,204,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
              Our Achievements
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Numbers that tell the story of our success and impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium font-light">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Join Our Mission
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Be part of the revolution in autonomous technology and AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-cursor-blue hover:bg-gray-100 hover:shadow-2xl"
              >
                Get in Touch
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cursor-blue"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};