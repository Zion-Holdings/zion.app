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
      color: 'text-green-400',
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
    { number: '99.99%', label: 'Uptime Guarantee', color: 'text-green-400' },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,170,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,122,204,0.05),transparent_50%)]" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="animate-fade-in">
            <div className="relative mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text leading-tight tracking-tight">
                About Zion Tech Group
              </h1>
              {/* Glow effect behind title */}
              <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/20 via-cursor-accent/20 to-cursor-blue/20 blur-3xl -z-10 scale-110"></div>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed text-balance">
              Pioneering the future of autonomous technology and AI-driven innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative bg-gradient-to-b from-cursor-dark to-cursor-darker overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,122,204,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,212,170,0.05),transparent_50%)]"></div>
        
        <div className="container-cursor relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <Card className="group hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/20 card-hover h-full">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
                </p>
              </Card>
            </div>
            
            <div className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
              <Card className="group hover:border-fuchsia-400/40 hover:shadow-2xl hover:shadow-fuchsia-400/20 card-hover h-full">
                <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding relative bg-black overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,204,0.03),transparent_50%)]"></div>
        
        <div className="container-cursor relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                Core Values
              </h2>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/10 via-cursor-accent/10 to-cursor-blue/10 blur-2xl -z-10 scale-110"></div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
              The principles that guide our innovation and shape our future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <Card className="text-center group hover:border-green-400/30 card-hover h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${value.color}`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,122,204,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,212,170,0.05),transparent_50%)]"></div>
        
        <div className="container-cursor relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                What We Do
              </h2>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/10 via-cursor-accent/10 to-cursor-blue/10 blur-2xl -z-10 scale-110"></div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
              Comprehensive solutions that drive innovation and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <Card className="group hover:border-blue-400/30 card-hover h-full">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-3 ${service.color}`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,122,204,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,212,170,0.05),transparent_50%)]"></div>
        
        <div className="container-cursor relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                Our Impact
              </h2>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/10 via-cursor-accent/10 to-cursor-blue/10 blur-2xl -z-10 scale-110"></div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
              Numbers that tell the story of our success and innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <Card className="text-center group hover:border-blue-400/30 card-hover">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.label}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative bg-gradient-to-r from-cursor-blue to-blue-600 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="container-narrow text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-blue-100 mb-8 text-balance">
              Be part of the autonomous technology revolution and help us build a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover:shadow-white/25"
              >
                Get in Touch
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl hover:shadow-white/25"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}