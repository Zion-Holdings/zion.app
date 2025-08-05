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
    { 
      href: '/services', 
      label: 'Services',
      children: [
        { href: '/services/ai-consulting', label: 'AI Consulting' },
        { href: '/services/ai-model-development', label: 'AI Model Development' },
        { href: '/services/machine-learning-implementation', label: 'Machine Learning' },
        { href: '/services/cloud-migration-services', label: 'Cloud Migration' },
        { href: '/services/devops-automation', label: 'DevOps Automation' },
        { href: '/services/security-auditing', label: 'Security Auditing' },
        { href: '/services/performance-optimization', label: 'Performance Optimization' },
        { href: '/services/edge-ai-implementation', label: 'Edge AI' },
        { href: '/services/quantum-computing-solutions', label: 'Quantum Computing' },
        { href: '/services/blockchain-development', label: 'Blockchain Development' },
        { href: '/services/iot-solutions', label: 'IoT Solutions' },
        { href: '/services/ai-powered-automation', label: 'Process Automation' },
        { href: '/services/ai-powered-data-analytics', label: 'Data Analytics' },
        { href: '/services/ai-powered-business-intelligence', label: 'Business Intelligence' },
        { href: '/services/ai-powered-customer-support', label: 'Customer Support' },
        { href: '/services/ai-powered-contract-legal', label: 'Contract & Legal' },
        { href: '/services/ai-powered-collaboration-workspace', label: 'Collaboration Workspace' },
        { href: '/services/ai-powered-hr-management', label: 'HR Management' },
        { href: '/services/ai-powered-finance-banking', label: 'Finance & Banking' },
        { href: '/services/ai-powered-healthcare-medical-diagnostics', label: 'Healthcare & Medical' },
        { href: '/services/ai-powered-retail-ecommerce', label: 'Retail & E-commerce' },
        { href: '/services/ai-powered-manufacturing-industrial-automation', label: 'Manufacturing & Industrial' },
        { href: '/services/ai-powered-education-training', label: 'Education & Training' },
        { href: '/services/ai-powered-energy-management-renewable-energy', label: 'Energy Management' },
        { href: '/services/ai-powered-entertainment-gaming', label: 'Entertainment & Gaming' },
        { href: '/services/ai-powered-event-calendar', label: 'Event Calendar' },
        { href: '/services/ai-powered-facility-management', label: 'Facility Management' },
        { href: '/services/ai-powered-feedback-survey', label: 'Feedback & Survey' },
        { href: '/services/ai-powered-governance-compliance', label: 'Governance & Compliance' },
        { href: '/services/ai-powered-holographic-display', label: 'Holographic Display' },
        { href: '/services/ai-powered-identity-verification', label: 'Identity Verification' },
        { href: '/services/ai-powered-incident-response', label: 'Incident Response' },
        { href: '/services/ai-powered-inventory-supply-chain', label: 'Inventory & Supply Chain' },
        { href: '/services/ai-powered-iot', label: 'IoT Integration' },
        { href: '/services/ai-powered-knowledge-base', label: 'Knowledge Base' },
        { href: '/services/ai-powered-learning-platform', label: 'Learning Platform' },
        { href: '/services/ai-powered-live-streaming-broadcasting', label: 'Live Streaming' },
        { href: '/services/ai-powered-loyalty-rewards', label: 'Loyalty & Rewards' },
        { href: '/services/ai-powered-machine-learning', label: 'Machine Learning' },
        { href: '/services/ai-powered-mixed-reality-spatial-computing', label: 'Mixed Reality' },
        { href: '/services/ai-powered-mobile-responsive', label: 'Mobile Responsive' },
        { href: '/services/ai-powered-multi-language', label: 'Multi-language' },
        { href: '/services/ai-powered-monitoring-surveillance', label: 'Monitoring & Surveillance' },
        { href: '/services/ai-powered-prediction-forecasting', label: 'Prediction & Forecasting' },
        { href: '/services/ai-powered-pricing-estimation', label: 'Pricing & Estimation' },
        { href: '/services/ai-powered-quality-assurance', label: 'Quality Assurance' },
        { href: '/services/ai-powered-recommendations', label: 'Recommendations' },
        { href: '/services/ai-powered-security-cybersecurity', label: 'Security & Cybersecurity' },
        { href: '/services/ai-powered-seo', label: 'SEO Optimization' },
        { href: '/services/ai-powered-social-media-community', label: 'Social Media & Community' },
        { href: '/services/ai-powered-subscription-membership', label: 'Subscription & Membership' },
        { href: '/services/ai-powered-testing', label: 'Testing' },
        { href: '/services/ai-powered-virtual-reality', label: 'Virtual Reality' },
        { href: '/services/ai-powered-voice-assistant-speech-recognition', label: 'Voice Assistant' },
        { href: '/services/ai-powered-workflow-orchestration', label: 'Workflow Orchestration' },
      ]
    },
    { 
      href: '/marketplace', 
      label: 'Marketplace',
      children: [
        { href: '/marketplace', label: 'Browse Services' },
        { href: '/talent-directory', label: 'Talent Directory' },
        { href: '/join-talent', label: 'Join Talent' },
        { href: '/service-categories', label: 'Service Categories' },
        { href: '/post-request', label: 'Post Request' },
        { href: '/quote-requests', label: 'Quote Requests' },
        { href: '/review-system', label: 'Reviews' },
        { href: '/payment-processing', label: 'Payment Processing' },
        { href: '/escrow-services', label: 'Escrow Services' },
        { href: '/warranty-protection', label: 'Warranty Protection' },
        { href: '/dispute-resolution', label: 'Dispute Resolution' },
        { href: '/referral-affiliate', label: 'Referral & Affiliate' },
      ]
    },
    { 
      href: '/blog', 
      label: 'Resources',
      children: [
        { href: '/blog', label: 'Blog' },
        { href: '/blog/cybersecurity-in-the-age-of-ai', label: 'Cybersecurity' },
        { href: '/blog/machine-learning-in-healthcare', label: 'Healthcare ML' },
        { href: '/blog/blockchain-for-supply-chain-management', label: 'Blockchain' },
        { href: '/blog/digital-transformation-strategies', label: 'Digital Transformation' },
        { href: '/blog/edge-ai-the-future-of-distributed-computing', label: 'Edge AI' },
        { href: '/blog/cloud-native-architecture-patterns', label: 'Cloud Architecture' },
        { href: '/blog/microservices-best-practices', label: 'Microservices' },
        { href: '/blog/sustainable-technology-solutions', label: 'Sustainable Tech' },
        { href: '/blog/augmented-reality-in-enterprise', label: 'AR in Enterprise' },
        { href: '/blog/serverless-computing-benefits', label: 'Serverless Computing' },
        { href: '/blog/data-privacy-and-gdpr-compliance', label: 'Data Privacy' },
        { href: '/blog/devops-automation-tools', label: 'DevOps Tools' },
        { href: '/blog/quantum-computing-applications-in-business', label: 'Quantum Computing' },
        { href: '/blog/api-security-and-authentication', label: 'API Security' },
        { href: '/docs', label: 'Documentation' },
        { href: '/api-docs', label: 'API Documentation' },
        { href: '/help-desk-support', label: 'Help Desk' },
        { href: '/faq', label: 'FAQ' },
      ]
    },
    { 
      href: '/about', 
      label: 'Company',
      children: [
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
        { href: '/press', label: 'Press' },
        { href: '/partners', label: 'Partners' },
        { href: '/innovation', label: 'Innovation' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-service', label: 'Terms of Service' },
        { href: '/security', label: 'Security' },
        { href: '/compliance-governance', label: 'Compliance' },
        { href: '/status', label: 'System Status' },
      ]
    },
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
        <EnhancedNavigation 
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