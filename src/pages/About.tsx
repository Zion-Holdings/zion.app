import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-zion-blue-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative micro SAAS solutions, cutting-edge IT services, and advanced AI technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-zion-slate-light">
                To democratize technology access and empower businesses of all sizes with 
                innovative, scalable, and cost-effective solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-zion-slate-light">
                To be the leading provider of micro SAAS solutions that drive digital 
                transformation across industries.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>
                <p className="text-zion-slate-light text-sm">
                  Cutting-edge solutions that keep you ahead of the competition
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h4>
                <p className="text-zion-slate-light text-sm">
                  Quick implementation and fast time-to-value
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                <p className="text-zion-slate-light text-sm">
                  Bank-level security and compliance standards
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Micro SAAS Solutions</h4>
                <ul className="text-zion-slate-light space-y-2 text-left">
                  <li>• Project Management Tools</li>
                  <li>• Customer Relationship Management</li>
                  <li>• Analytics & Reporting Platforms</li>
                  <li>• Workflow Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">IT Services</h4>
                <ul className="text-zion-slate-light space-y-2 text-left">
                  <li>• Cloud Migration & Management</li>
                  <li>• Cybersecurity & Compliance</li>
                  <li>• DevOps & Infrastructure</li>
                  <li>• On-site Technical Support</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">AI & Machine Learning</h4>
              <ul className="text-zion-slate-light space-y-2 text-left">
                <li>• Content Generation & Optimization</li>
                <li>• Predictive Analytics</li>
                <li>• Chatbot Development</li>
                <li>• Talent Matching & Recruitment</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;