import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, ShieldCheck, Rocket, Sparkles, Globe, Cpu, Brain } from 'lucide-react';

export default function AboutPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	const pillars = [
		{ title: 'AI-first Engineering', icon: <Brain className="w-6 h-6" />, desc: 'LLM apps, RAG, guardrails, evals and AI observability from day one.' },
		{ title: 'Platform and SRE', icon: <ShieldCheck className="w-6 h-6" />, desc: 'GitOps, IaC, SLOs, incident automation, cost and compliance by default.' },
		{ title: 'Quantum R&D', icon: <Cpu className="w-6 h-6" />, desc: 'Exploratory quantum workloads with pragmatic business outcomes.' },
		{ title: 'Global Delivery', icon: <Globe className="w-6 h-6" />, desc: 'Secure, reliable delivery with 24/7 support and 99.99% uptime.' }
	];

	return (
		<UltraFuturisticBackground variant="holographic" intensity="high">
			<Head>
				<title>About Us - Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group builds outcome-driven AI, micro SaaS, and platform engineering solutions with transparent pricing and 24/7 support." />
			</Head>
			<section className="relative py-24 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-14">
						<h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
							We build practical AI and platform solutions
						</h1>
						<p className="mt-4 text-gray-300 max-w-3xl mx-auto">
							From micro SaaS accelerators to enterprise AI services, we focus on measurable outcomes: faster delivery, higher reliability, and lower cost.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<Card className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 backdrop-blur-xl p-8">
							<div className="flex items-center gap-3 mb-4">
								<Rocket className="w-6 h-6 text-cyan-400" />
								<h2 className="text-2xl font-bold text-white">Our Mission</h2>
							</div>
							<p className="text-gray-300">
								Deliver future-grade capabilities with present-day ROI. We productize repeatable outcomes so you start fast and scale predictably.
							</p>
						</Card>
						<Card className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 backdrop-blur-xl p-8">
							<div className="flex items-center gap-3 mb-4">
								<Sparkles className="w-6 h-6 text-purple-400" />
								<h2 className="text-2xl font-bold text-white">How We Work</h2>
							</div>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>Productized service tiers with clear SLAs</li>
								<li>Security, compliance, and FinOps baked in</li>
								<li>Build-operate-transfer options for in-house teams</li>
								<li>Transparent pricing and usage-based add-ons</li>
							</ul>
						</Card>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
						{pillars.map((p) => (
							<Card key={p.title} className="bg-gradient-to-br from-gray-900/70 to-black/80 border border-gray-700/40 p-6">
								<div className="flex items-center gap-3 mb-3 text-white">{p.icon}<span className="font-semibold">{p.title}</span></div>
								<p className="text-gray-300 text-sm">{p.desc}</p>
							</Card>
						))}
					</div>

					<Card className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 backdrop-blur-xl p-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="flex items-center gap-3 text-cyan-400">
								<Phone className="w-5 h-5" />
								<a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:text-white">{contactInfo.mobile}</a>
							</div>
							<div className="flex items-center gap-3 text-purple-400">
								<Mail className="w-5 h-5" />
								<a href={`mailto:${contactInfo.email}`} className="hover:text-white">{contactInfo.email}</a>
							</div>
							<div className="flex items-center gap-3 text-green-400">
								<MapPin className="w-5 h-5" />
								<a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
									{contactInfo.address}
								</a>
							</div>
						</div>
						<div className="mt-6 flex justify-center">
							<Button href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Us</Button>
						</div>
					</Card>
				</div>
			</section>
		</UltraFuturisticBackground>
	);
}

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
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🤖',
      title: 'Autonomy',
      description: 'Building systems that can operate independently and make intelligent decisions',
      color: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Creating technology that makes a positive difference in the world',
      color: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Advanced machine learning models, natural language processing, computer vision systems, and autonomous decision making.',
      icon: '🧠',
      color: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Automation Systems',
      description: 'Cloud infrastructure automation, CI/CD pipeline optimization, self-healing applications, and performance monitoring.',
      icon: '⚙️',
      color: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
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
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            About Our Company
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            About Zion Tech Group
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Pioneering the future of autonomous technology and AI-driven innovation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="card-hover group border-gradient-blue hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/20">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
              </p>
            </Card>
            
            <Card className="card-hover group border-gradient-purple hover:border-fuchsia-400/40 hover:shadow-2xl hover:shadow-fuchsia-400/20">
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
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Our Core Values
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The principles that guide our innovation and shape our future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-hover text-center group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${value.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-cursor-blue">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              What We Do
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions that drive innovation and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Our Achievements
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Numbers that tell the story of our success and impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-4xl md:text-5xl font-bold mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.number}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-cursor-blue/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Join the Future?
          </h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let&apos;s work together to build the next generation of autonomous technology and shape the future of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow"
            >
              Get in Touch
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}