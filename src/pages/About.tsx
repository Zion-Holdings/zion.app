import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Brain
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business operations are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by your success, building long-term partnerships based on results.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Our team stays ahead of industry trends, ensuring you benefit from the latest technological advancements.'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored solutions that address your unique business challenges and requirements.'
    },
    {
      icon: Database,
      title: 'Data Analytics & AI',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and streamlined development processes for modern applications.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that automate processes and enhance decision-making.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transforming businesses through innovative technology solutions, 
              cutting-edge AI, and comprehensive digital transformation services.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zion-blue-dark mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zion-slate mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-zion-slate mb-6 leading-relaxed">
                We believe that every organization deserves access to cutting-edge technology 
                that can transform their operations and unlock new possibilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                Our Vision
              </h3>
              <p className="text-zion-slate leading-relaxed">
                To be the leading technology partner for businesses worldwide, 
                known for innovation, reliability, and exceptional results.
              </p>
              <div className="mt-6">
                <TrendingUp className="w-12 h-12 text-zion-cyan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              What We Do
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the diverse needs of modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-zion-slate text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                Kleber
              </h3>
              <p className="text-zion-slate mb-2">CEO & Founder</p>
              <p className="text-sm text-zion-slate-light">
                Technology visionary with over 10 years of experience in software development and business transformation.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
