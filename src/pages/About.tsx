import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Pioneering the future of technology through innovative micro SAAS solutions, 
            cutting-edge AI services, and transformative digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to thrive in the digital age through innovative micro SAAS platforms 
                and AI-powered services.
              </p>
              <p className="text-zion-slate-light">
                We believe that every organization deserves access to enterprise-grade technology 
                that drives growth, efficiency, and competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the leading force in the democratization of advanced technology, 
                creating a world where innovation is accessible, sustainable, and beneficial 
                for all.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where technology serves humanity, enhances productivity, 
                and creates meaningful impact across industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push boundaries and explore new technologies to deliver 
                cutting-edge solutions that drive real business value.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Our success is measured by our customers' success. We build lasting 
                partnerships and ensure every solution delivers measurable results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We maintain the highest standards of security and data protection, 
                ensuring our clients' information and systems remain safe and secure.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-zion-slate-light">
                We're committed to creating positive change through technology, 
                supporting sustainable practices and inclusive growth worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-zion-slate-light">
                We strive for excellence in everything we do, from code quality 
                to customer service, ensuring the highest standards of delivery.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-zion-slate-light">
                We foster a culture of continuous learning and improvement, 
                staying ahead of industry trends and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Micro SAAS Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader driving innovation and strategic growth across all business units.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Team</h3>
              <p className="text-zion-cyan mb-2">Engineering Excellence</p>
              <p className="text-zion-slate-light text-sm">
                World-class developers and engineers building the future of technology.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Division</h3>
              <p className="text-zion-cyan mb-2">AI & ML Specialists</p>
              <p className="text-zion-slate-light text-sm">
                Experts in artificial intelligence and machine learning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of organizations that trust Zion Tech Group to drive their digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
