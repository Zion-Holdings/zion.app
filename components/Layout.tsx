import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EnhancedNavigation from './EnhancedNavigation';
import ResponsiveNavigation from './ResponsiveNavigation';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion App - AI-Powered Solutions',
  description = 'Advanced AI-powered solutions for modern businesses'
}) => {
  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const ctaButton = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base"
    >
      Get Started
    </motion.button>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <ResponsiveNavigation 
          items={navigationItems}
          ctaButton={ctaButton}
          variant="light"
        />

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Zion App</h3>
                <p className="text-gray-400 mb-4">
                  Advanced AI-powered solutions for modern businesses. We specialize in cutting-edge technology solutions that drive innovation and growth.
                </p>
                <div className="flex space-x-4">
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
                  <Link href="/help-desk-support" className="text-gray-400 hover:text-white transition-colors">Support</Link>
                </div>
              </div>
              
              {/* AI & ML Services */}
              <div>
                <h4 className="text-md font-semibold mb-4">AI & Machine Learning</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services/ai-consulting" className="hover:text-white transition-colors">AI Consulting</Link></li>
                  <li><Link href="/services/ai-model-development" className="hover:text-white transition-colors">Model Development</Link></li>
                  <li><Link href="/services/machine-learning-implementation" className="hover:text-white transition-colors">ML Implementation</Link></li>
                  <li><Link href="/services/ai-powered-automation" className="hover:text-white transition-colors">Process Automation</Link></li>
                  <li><Link href="/services/ai-powered-data-analytics" className="hover:text-white transition-colors">Data Analytics</Link></li>
                  <li><Link href="/services/ai-powered-business-intelligence" className="hover:text-white transition-colors">Business Intelligence</Link></li>
                </ul>
              </div>
              
              {/* Cloud & DevOps */}
              <div>
                <h4 className="text-md font-semibold mb-4">Cloud & DevOps</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services/cloud-migration-services" className="hover:text-white transition-colors">Cloud Migration</Link></li>
                  <li><Link href="/services/devops-automation" className="hover:text-white transition-colors">DevOps Automation</Link></li>
                  <li><Link href="/services/performance-optimization" className="hover:text-white transition-colors">Performance Optimization</Link></li>
                  <li><Link href="/services/security-auditing" className="hover:text-white transition-colors">Security Auditing</Link></li>
                  <li><Link href="/services/edge-ai-implementation" className="hover:text-white transition-colors">Edge AI</Link></li>
                  <li><Link href="/services/quantum-computing-solutions" className="hover:text-white transition-colors">Quantum Computing</Link></li>
                </ul>
              </div>
              
              {/* Resources & Company */}
              <div>
                <h4 className="text-md font-semibold mb-4">Resources & Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/blog/cybersecurity-in-the-age-of-ai" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/blog/machine-learning-in-healthcare" className="hover:text-white transition-colors">Healthcare ML</Link></li>
                  <li><Link href="/blog/blockchain-for-supply-chain-management" className="hover:text-white transition-colors">Blockchain</Link></li>
                  <li><Link href="/blog/digital-transformation-strategies" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Additional Footer Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-800">
              {/* Advanced Technologies */}
              <div>
                <h4 className="text-md font-semibold mb-4">Advanced Technologies</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/quantum-computing" className="hover:text-white transition-colors">Quantum Computing</Link></li>
                  <li><Link href="/blockchain-solutions" className="hover:text-white transition-colors">Blockchain Solutions</Link></li>
                  <li><Link href="/iot-platforms" className="hover:text-white transition-colors">IoT Platforms</Link></li>
                  <li><Link href="/virtual-reality" className="hover:text-white transition-colors">Virtual Reality</Link></li>
                  <li><Link href="/augmented-reality" className="hover:text-white transition-colors">Augmented Reality</Link></li>
                  <li><Link href="/mixed-reality" className="hover:text-white transition-colors">Mixed Reality</Link></li>
                </ul>
              </div>
              
              {/* Business Solutions */}
              <div>
                <h4 className="text-md font-semibold mb-4">Business Solutions</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
                  <li><Link href="/talent-directory" className="hover:text-white transition-colors">Talent Directory</Link></li>
                  <li><Link href="/join-talent" className="hover:text-white transition-colors">Join Talent</Link></li>
                  <li><Link href="/project-management" className="hover:text-white transition-colors">Project Management</Link></li>
                  <li><Link href="/analytics-dashboard" className="hover:text-white transition-colors">Analytics Dashboard</Link></li>
                  <li><Link href="/executive-dashboard" className="hover:text-white transition-colors">Executive Dashboard</Link></li>
                </ul>
              </div>
              
              {/* Support & Tools */}
              <div>
                <h4 className="text-md font-semibold mb-4">Support & Tools</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/help-desk-support" className="hover:text-white transition-colors">Help Desk</Link></li>
                  <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/api-docs" className="hover:text-white transition-colors">API Docs</Link></li>
                  <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
                  <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                  <li><Link href="/compliance-governance" className="hover:text-white transition-colors">Compliance</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Zion App. All rights reserved. | <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout; 