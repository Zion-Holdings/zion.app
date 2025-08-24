<<<<<<< HEAD

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function About() {
  return (
    <>
      <SEO 
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>About Zion</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our platform brings together talented AI specialists, innovative companies, and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className="text-zion-slate-light text-lg">
                By connecting talent with opportunity and innovation with implementation, we're creating 
                a global community where the future of technology is being built today.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                We envision a world where AI and technology are accessible to all, regardless of geographical 
                or financial constraints. A world where the best minds can collaborate to solve the most 
                challenging problems.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Zion is building that world by creating a transparent, ethical, and inclusive platform 
                that puts people at the center of technological advancement.
              </p>
              <p className="text-zion-slate-light text-lg">
                Our goal is to become the premier destination for AI and tech innovation, fostering 
                a community that shapes the future of how we live, work, and interact with technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600" 
                alt="Tech innovation" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-zion-slate-light">
                  We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light">
                  We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
                <p className="text-zion-slate-light">
                  We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
=======
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
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </main>
      <Footer />
    </>
  );
}
=======

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
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
