import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';

const AboutPage: NextPage = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our performance by the tangible business outcomes we deliver for our clients.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in every project, ensuring robust, scalable, and maintainable solutions.",
      icon: "⭐"
    },
    {
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fostering open communication and collaboration throughout the project lifecycle.",
      icon: "🤝"
    }
  ];

  const expertise = [
    {
      category: "Artificial Intelligence & Machine Learning",
      skills: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Model Development"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS/Azure/GCP", "Microservices Architecture", "DevOps & CI/CD", "Container Orchestration", "Serverless Computing"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["React/Next.js", "Node.js/Python", "Mobile App Development", "Progressive Web Apps", "API Development"]
    },
    {
      category: "Data & Analytics",
      skills: ["Big Data Processing", "Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Pipeline Engineering"]
    },
    {
      category: "Security & Compliance",
      skills: ["Cybersecurity", "Penetration Testing", "Compliance Management", "Identity & Access Management", "Security Auditing"]
    },
    {
      category: "Emerging Technologies",
      skills: ["Blockchain Development", "IoT Platforms", "AR/VR Applications", "Edge Computing", "Quantum Computing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>About Us - Zion Tech Group | Technology Innovation Leaders</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider with expertise in AI, cloud computing, and digital transformation. Discover our mission, values, and commitment to client success." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, digital transformation consultants" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to helping businesses 
            harness the power of innovation to achieve digital transformation and competitive advantage.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to democratize advanced technology solutions, Zion Tech Group 
                has grown from a small startup to a trusted technology partner for businesses across industries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every organization, regardless of size, deserves access to cutting-edge 
                technology solutions that can transform their operations and drive growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced engineers, designers, and consultants work collaboratively 
                to deliver innovative solutions that solve real business problems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-lg opacity-90">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative technology solutions that drive digital transformation, 
              improve operational efficiency, and create sustainable competitive advantages in the digital economy.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technology partner for businesses seeking to leverage AI, cloud computing, 
              and emerging technologies to achieve breakthrough innovation and market leadership.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Our diverse team of technology experts brings together decades of combined experience 
            in software development, AI research, cloud architecture, and business consulting.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Team</h3>
              <p className="text-gray-600">Full-stack developers, AI engineers, and DevOps specialists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Team</h3>
              <p className="text-gray-600">UX/UI designers and product strategists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consulting Team</h3>
              <p className="text-gray-600">Business analysts and technology consultants</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our expertise can help transform your business
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
=======
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
=======
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
    { number: '600+', label: 'Services', color: 'text-cyan-400' },
    { number: '1000%', label: 'ROI', color: 'text-fuchsia-400' },
    { number: '24/7', label: 'Support', color: 'text-green-400' },
    { number: '99.9%', label: 'SLA', color: 'text-blue-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
      {/* Mission & Vision */}
=======
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission and vision." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

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

      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">Our Core Values</h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The principles that guide our innovation and shape our future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center group border-gradient-blue" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${value.color}`}>{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-cursor-blue">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">What We Do</h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions that drive innovation and transformation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="card-hover group border-gradient-blue" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>{achievement.number}</div>
                <div className="text-gray-400 text-sm md:text-base font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">Ready to Join the Future?</h2>
          <p className="text-responsive-md text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let&apos;s work together to build the next generation of autonomous technology and shape the future of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/contact" size="lg" className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover-glow">Get in Touch</Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg:white hover:text-cursor-blue shadow-2xl">Explore Services</Button>
          </div>
        </div>

        {/* Contact Section */}
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get in touch with our experts today for a free consultation and discover how our 500+ revolutionary micro SaaS services can drive unprecedented growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-blue-400 font-semibold text-lg">{contactInfo.mobile}</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7 for urgent inquiries</p>
              </Card>
              
              <Card className="text-center p-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-green-400 font-semibold text-lg">{contactInfo.email}</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours guaranteed</p>
              </Card>
              
              <Card className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-purple-400 font-semibold text-sm">{contactInfo.address}</p>
                <p className="text-gray-400 text-sm mt-2">Global headquarters and innovation center</p>
              </Card>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg mb-6">
                🌐 Visit our website: {contactInfo.website}
              </div>
              <p className="text-gray-400 text-lg">
                Start your 21-day free trial today and experience the future of technology
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
