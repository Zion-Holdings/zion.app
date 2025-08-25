import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  Building2,
  Lightbulb,
  TrendingUp,
  Heart
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of technology through innovative micro SAAS solutions, 
            cutting-edge IT services, and transformative AI technologies that empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, automation, and digital transformation for sustainable growth.
              </p>
              <div className="flex items-center gap-3 text-zion-cyan">
                <Target className="w-6 h-6" />
                <span className="font-semibold">Empowering Innovation</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the leading force in technological advancement, creating a world where every business 
                can access enterprise-grade solutions that drive success and innovation.
              </p>
              <div className="flex items-center gap-3 text-zion-cyan">
                <Globe className="w-6 h-6" />
                <span className="font-semibold">Global Technology Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-zion-purple-light rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                Building secure, reliable solutions that our clients can depend on for their critical operations.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client Success</h3>
              <p className="text-zion-slate-light">
                Your success is our success. We're committed to delivering measurable results and value.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-zion-purple-light rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative Excellence</h3>
              <p className="text-zion-slate-light">
                We approach every challenge with creativity and ingenuity, finding unique solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-zion-cyan rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Growth</h3>
              <p className="text-zion-slate-light">
                We're always learning, evolving, and improving to stay ahead of technology trends.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-zion-purple-light rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Passion for Tech</h3>
              <p className="text-zion-slate-light">
                We're genuinely passionate about technology and its power to transform businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple-light mb-2">50+</div>
              <div className="text-zion-slate-light">Micro SAAS Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple-light mb-2">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan font-medium mb-3">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader driving innovation and strategic growth across all business units.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-zion-purple-light to-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technology Team</h3>
              <p className="text-zion-cyan font-medium mb-3">Engineering Excellence</p>
              <p className="text-zion-slate-light text-sm">
                World-class engineers and developers creating cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Client Success</h3>
              <p className="text-zion-cyan font-medium mb-3">Dedicated Support</p>
              <p className="text-zion-slate-light text-sm">
                Committed professionals ensuring your success with our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8">
            Join hundreds of businesses already leveraging Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
