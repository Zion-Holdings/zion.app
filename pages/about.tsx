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
      color: 'bg-blue-100'
    },
    {
      icon: '🤖',
      title: 'Autonomy',
      description: 'Building systems that can operate independently and make intelligent decisions',
      color: 'bg-purple-100'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Creating technology that makes a positive difference in the world',
      color: 'bg-green-100'
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Advanced machine learning models, natural language processing, computer vision systems, and autonomous decision making.',
      icon: '🧠',
      color: 'text-blue-600'
    },
    {
      title: 'Automation Systems',
      description: 'Cloud infrastructure automation, CI/CD pipeline optimization, self-healing applications, and performance monitoring.',
      icon: '⚡',
      color: 'text-purple-600'
    }
  ];

  const achievements = [
    { number: '227', label: 'Active Automations', color: 'text-blue-600' },
    { number: '2960+', label: 'Dynamic Pages', color: 'text-purple-600' },
    { number: '12', label: 'Core Components', color: 'text-indigo-600' },
    { number: '99.99%', label: 'Uptime', color: 'text-green-600' }
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-8">
              <span className="mr-2">🏢</span>
              About Our Company
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of autonomous technology and AI-driven innovation
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
              </p>
            </Card>
            
            <Card>
              <h2 className="text-3xl font-bold mb-6 text-purple-600">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our innovation and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to AI development and automation systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-3 ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Achievements */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${achievement.color}`}>
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how our autonomous technology can transform your organization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get Started Today
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}