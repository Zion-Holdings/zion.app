"use client";

import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isQuantumOpen, setIsQuantumOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI & Automation</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li><Link href="/ai-automation-services" className="hover:text-white transition-colors">AI Automation</Link></li>
                      <li><Link href="/ai-business-intelligence" className="hover:text-white transition-colors">Business Intelligence</Link></li>
                      <li><Link href="/ai-content-generation" className="hover:text-white transition-colors">Content Generation</Link></li>
                      <li><Link href="/ai-autonomous-systems" className="hover:text-white transition-colors">Autonomous Systems</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Infrastructure</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li><Link href="/enterprise-it" className="hover:text-white transition-colors">Enterprise IT</Link></li>
                      <li><Link href="/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                      <li><Link href="/quantum-services" className="hover:text-white transition-colors">Quantum Services</Link></li>
                      <li><Link href="/space-tech" className="hover:text-white transition-colors">Space Tech</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Solutions Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center">
                AI Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI Agents</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li><Link href="/ai-agents" className="hover:text-white transition-colors">AI Agents</Link></li>
                      <li><Link href="/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link></li>
                      <li><Link href="/ai-autonomous-research" className="hover:text-white transition-colors">Research Assistant</Link></li>
                      <li><Link href="/ai-autonomous-business-manager" className="hover:text-white transition-colors">Business Manager</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Specialized AI</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li><Link href="/ai-consciousness-evolution" className="hover:text-white transition-colors">Consciousness Evolution</Link></li>
                      <li><Link href="/ai-blockchain-analytics" className="hover:text-white transition-colors">Blockchain Analytics</Link></li>
                      <li><Link href="/ai-climate-prediction" className="hover:text-white transition-colors">Climate Prediction</Link></li>
                      <li><Link href="/ai-biomedical-research" className="hover:text-white transition-colors">Biomedical Research</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantum Solutions */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center">
                Quantum
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><Link href="/quantum-neural-network-platform" className="hover:text-white transition-colors">Neural Network Platform</Link></li>
                    <li><Link href="/quantum-cloud-infrastructure" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
                    <li><Link href="/quantum-financial-trading" className="hover:text-white transition-colors">Financial Trading</Link></li>
                    <li><Link href="/quantum-services" className="hover:text-white transition-colors">Quantum Services</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium flex items-center">
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                    <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                    <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                    <li><Link href="/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
                    <li><Link href="/white-papers" className="hover:text-white transition-colors">White Papers</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resources */}
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Resources
            </Link>

            {/* Zion OS Platform */}
            <Link href="/multiverse/launch" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Zion OS
            </Link>

            <button className="btn-primary text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2 mb-4">
              {/* Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center justify-between"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/ai-automation-services" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">AI Automation</Link>
                    <Link href="/enterprise-it" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Enterprise IT</Link>
                    <Link href="/cybersecurity" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Cybersecurity</Link>
                    <Link href="/quantum-services" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Quantum Services</Link>
                  </div>
                )}
              </div>

              {/* AI Solutions */}
              <div>
                <button
                  onClick={() => setIsAIOpen(!isAIOpen)}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center justify-between"
                >
                  AI Solutions
                  <svg className={`w-4 h-4 transition-transform ${isAIOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAIOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/ai-agents" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">AI Agents</Link>
                    <Link href="/ai-consciousness-evolution" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Consciousness Evolution</Link>
                    <Link href="/ai-autonomous-research" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Research Assistant</Link>
                    <Link href="/ai-business-intelligence" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Business Intelligence</Link>
                  </div>
                )}
              </div>

              {/* Quantum */}
              <div>
                <button
                  onClick={() => setIsQuantumOpen(!isQuantumOpen)}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center justify-between"
                >
                  Quantum
                  <svg className={`w-4 h-4 transition-transform ${isQuantumOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isQuantumOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/quantum-neural-network-platform" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Neural Network Platform</Link>
                    <Link href="/quantum-cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Cloud Infrastructure</Link>
                    <Link href="/quantum-financial-trading" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Financial Trading</Link>
                  </div>
                )}
              </div>

              {/* Company */}
              <div>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center justify-between"
                >
                  Company
                  <svg className={`w-4 h-4 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCompanyOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/about" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">About Us</Link>
                    <Link href="/case-studies" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Case Studies</Link>
                    <Link href="/news" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">News</Link>
                    <Link href="/events" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">Events</Link>
                  </div>
                )}
              </div>

              <Link href="/docs" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Resources
              </Link>
              <Link href="/multiverse/launch" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Zion OS
              </Link>
              <button className="w-full mt-4 btn-primary text-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}