import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function Sitemap() {
  const mainPages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About Us' },
    { path: '/mission', title: 'Our Mission' },
    { path: '/team', title: 'Team' },
    { path: '/careers', title: 'Careers' },
    { path: '/news', title: 'News & Updates' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/contact', title: 'Contact' },
  ];

  const services = [
    { path: '/ai-services', title: 'AI & Machine Learning' },
    { path: '/quantum-services', title: 'Quantum Technology' },
    { path: '/cybersecurity', title: 'Cybersecurity' },
    { path: '/it-services', title: 'Cloud & Infrastructure' },
    { path: '/data-analytics', title: 'Business Intelligence' },
    { path: '/devops-automation', title: 'DevOps & Automation' },
    { path: '/space-tech', title: 'Space Technology' },
  ];

  const solutions = [
    { path: '/solutions/enterprise', title: 'Enterprise Solutions' },
    { path: '/solutions/healthcare', title: 'Healthcare Solutions' },
    { path: '/solutions/financial', title: 'Financial Solutions' },
    { path: '/solutions/manufacturing', title: 'Manufacturing Solutions' },
    { path: '/retail-technology-solutions', title: 'Retail Solutions' },
    { path: '/government-technology-solutions', title: 'Government Solutions' },
  ];

  const resources = [
    { path: '/docs', title: 'Documentation' },
    { path: '/blog', title: 'Blog & Articles' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/white-papers', title: 'White Papers' },
    { path: '/webinars', title: 'Webinars' },
    { path: '/events-webinars', title: 'Events' },
    { path: '/training', title: 'Training' },
  ];

  const legal = [
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
    { path: '/cookies', title: 'Cookie Policy' },
    { path: '/accessibility', title: 'Accessibility' },
  ];

  const quickLinks = [
    { path: '/get-started', title: 'Get Started' },
    { path: '/support', title: 'Support' },
    { path: '/status', title: 'Status Page' },
    { path: '/developer-resources', title: 'Developer Resources' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of all pages and services offered by Zion Tech Group"
        keywords="sitemap, navigation, pages, services, Zion Tech Group"
        canonical="https://ziontechgroup.com/sitemap"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Sitemap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for Zion Tech Group website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                🏠
              </span>
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link 
                    to={page.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {page.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                ⚡
              </span>
              Services
            </h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                🎯
              </span>
              Solutions
            </h2>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.path}>
                  <Link 
                    to={solution.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {solution.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                📚
              </span>
              Resources
            </h2>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {resource.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                ⚖️
              </span>
              Legal
            </h2>
            <ul className="space-y-2">
              {legal.map((legalPage) => (
                <li key={legalPage.path}>
                  <Link 
                    to={legalPage.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {legalPage.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                🔗
              </span>
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for? Contact our support team.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
