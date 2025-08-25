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
            Transforming businesses through innovative micro SAAS solutions, cutting-edge IT services, 
            and advanced AI technologies since 2020.
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, automation, and digital transformation to achieve unprecedented growth.
              </p>
              <p className="text-lg text-zion-slate-light">
                We believe that innovation should be accessible, scalable, and sustainable for every organization.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Target className="w-16 h-16 text-zion-cyan mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Vision 2030</h3>
              <p className="text-zion-slate-light">
                To become the leading platform for AI-powered business solutions, connecting talent, 
                technology, and innovation across the global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push the boundaries of what's possible, embracing emerging technologies 
                and creative solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We prioritize data security, privacy, and ethical AI practices in everything we build.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Your success is our success. We're committed to delivering measurable results and 
                exceptional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">AI Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">1000+</div>
              <div className="text-zion-slate-light">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader with 15+ years in tech innovation and business transformation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Team</h3>
              <p className="text-zion-cyan mb-2">AI Research & Development</p>
              <p className="text-zion-slate-light text-sm">
                Experts in machine learning, neural networks, and AI ethics.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dev Team</h3>
              <p className="text-zion-cyan mb-2">Software Development</p>
              <p className="text-zion-slate-light text-sm">
                Full-stack developers specializing in scalable microservices and cloud solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
