import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImprovedNavigation from './ImprovedNavigation';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;}
const Layout: React.FC<LayoutProps> = ({'
  children, 
  title = 'Zion App - AI-Powered Solutions',
  description = 'Advanced AI-powered solutions for modern businesses'
}) => {'
  const navigationItems = [
    { href: '/', label: 'Home' },'
    { 
      href: '/services', 
      label: 'Services','
      children: [
        { href: '/services/ai-consulting', label: 'AI Consulting', icon: '🤖', description: 'Strategic AI implementation' },
        { href: '/services/ai-model-development', label: 'AI Model Development', icon: '🧠', description: 'Custom ML models' },
        { href: '/services/machine-learning-implementation', label: 'Machine Learning', icon: '📊', description: 'ML solutions' },
        { href: '/services/cloud-migration-services', label: 'Cloud Migration', icon: '☁️', description: 'Seamless cloud setup' },
        { href: '/services/devops-automation', label: 'DevOps Automation', icon: '⚙️', description: 'CI/CD pipelines' },
        { href: '/services/security-auditing', label: 'Security Auditing', icon: '🔒', description: 'Security assessments' },
        { href: '/services/performance-optimization', label: 'Performance Optimization', icon: '⚡', description: 'System optimization' },
        { href: '/services/edge-ai-implementation', label: 'Edge AI', icon: '🌐', description: 'Edge computing solutions' },
        { href: '/services/quantum-computing-solutions', label: 'Quantum Computing', icon: '⚛️', description: 'Quantum solutions' },
        { href: '/services/blockchain-development', label: 'Blockchain Development', icon: '🔗', description: 'Blockchain solutions' },
        { href: '/services/iot-solutions', label: 'IoT Solutions', icon: '📡', description: 'IoT integration' },
        { href: '/services/ai-powered-automation', label: 'Process Automation', icon: '🤖', description: 'Workflow automation' },
        { href: '/services/ai-powered-data-analytics', label: 'Data Analytics', icon: '📈', description: 'Advanced analytics' },
        { href: '/services/ai-powered-business-intelligence', label: 'Business Intelligence', icon: '💼', description: 'BI solutions' },
        { href: '/services/ai-powered-customer-support', label: 'Customer Support', icon: '🎧', description: 'AI-powered support' },
        { href: '/services/ai-powered-contract-legal', label: 'Contract & Legal', icon: '📋', description: 'Legal automation' },
        { href: '/services/ai-powered-collaboration-workspace', label: 'Collaboration Workspace', icon: '👥', description: 'Team collaboration' },
        { href: '/services/ai-powered-hr-management', label: 'HR Management', icon: '👨‍💼', description: 'HR automation' },
        { href: '/services/ai-powered-finance-banking', label: 'Finance & Banking', icon: '💰', description: 'Financial solutions' },
        { href: '/services/ai-powered-healthcare-medical-diagnostics', label: 'Healthcare & Medical', icon: '🏥', description: 'Medical AI' },
        { href: '/services/ai-powered-retail-ecommerce', label: 'Retail & E-commerce', icon: '🛒', description: 'Retail solutions' },
        { href: '/services/ai-powered-manufacturing-industrial-automation', label: 'Manufacturing & Industrial', icon: '🏭', description: 'Industrial AI' },
        { href: '/services/ai-powered-education-training', label: 'Education & Training', icon: '🎓', description: 'Educational AI' },
        { href: '/services/ai-powered-energy-management-renewable-energy', label: 'Energy Management', icon: '⚡', description: 'Energy optimization' },
        { href: '/services/ai-powered-entertainment-gaming', label: 'Entertainment & Gaming', icon: '🎮', description: 'Gaming AI' },
        { href: '/services/ai-powered-event-calendar', label: 'Event Calendar', icon: '📅', description: 'Event management' },
        { href: '/services/ai-powered-facility-management', label: 'Facility Management', icon: '🏢', description: 'Facility optimization' },
        { href: '/services/ai-powered-feedback-survey', label: 'Feedback & Survey', icon: '📝', description: 'Feedback collection' },
        { href: '/services/ai-powered-governance-compliance', label: 'Governance & Compliance', icon: '📋', description: 'Compliance automation' },
        { href: '/services/ai-powered-holographic-display', label: 'Holographic Display', icon: '👁️', description: 'Holographic tech' },
        { href: '/services/ai-powered-identity-verification', label: 'Identity Verification', icon: '🆔', description: 'Identity management' },
        { href: '/services/ai-powered-incident-response', label: 'Incident Response', icon: '🚨', description: 'Security response' },
        { href: '/services/ai-powered-inventory-supply-chain', label: 'Inventory & Supply Chain', icon: '📦', description: 'Supply chain AI' },
        { href: '/services/ai-powered-iot', label: 'IoT Integration', icon: '🌐', description: 'IoT solutions' },
        { href: '/services/ai-powered-knowledge-base', label: 'Knowledge Base', icon: '📚', description: 'Knowledge management' },
        { href: '/services/ai-powered-learning-platform', label: 'Learning Platform', icon: '🎓', description: 'Learning AI' },
        { href: '/services/ai-powered-live-streaming-broadcasting', label: 'Live Streaming', icon: '📺', description: 'Streaming solutions' },
        { href: '/services/ai-powered-loyalty-rewards', label: 'Loyalty & Rewards', icon: '🎁', description: 'Loyalty programs' },
        { href: '/services/ai-powered-machine-learning', label: 'Machine Learning', icon: '🧠', description: 'ML solutions' },
        { href: '/services/ai-powered-mixed-reality-spatial-computing', label: 'Mixed Reality', icon: '🥽', description: 'AR/VR solutions' },
        { href: '/services/ai-powered-mobile-responsive', label: 'Mobile Responsive', icon: '📱', description: 'Mobile optimization' },
        { href: '/services/ai-powered-multi-language', label: 'Multi-language', icon: '🌍', description: 'Translation services' },
        { href: '/services/ai-powered-monitoring-surveillance', label: 'Monitoring & Surveillance', icon: '👁️', description: 'Monitoring AI' },
        { href: '/services/ai-powered-prediction-forecasting', label: 'Prediction & Forecasting', icon: '🔮', description: 'Predictive analytics' },
        { href: '/services/ai-powered-pricing-estimation', label: 'Pricing & Estimation', icon: '💰', description: 'Pricing optimization' },
        { href: '/services/ai-powered-quality-assurance', label: 'Quality Assurance', icon: '✅', description: 'QA automation' },
        { href: '/services/ai-powered-recommendations', label: 'Recommendations', icon: '💡', description: 'Recommendation engines' },
        { href: '/services/ai-powered-security-cybersecurity', label: 'Security & Cybersecurity', icon: '🛡️', description: 'Security AI' },
        { href: '/services/ai-powered-seo', label: 'SEO Optimization', icon: '🔍', description: 'SEO automation' },
        { href: '/services/ai-powered-social-media-community', label: 'Social Media & Community', icon: '📱', description: 'Social media AI' },
        { href: '/services/ai-powered-subscription-membership', label: 'Subscription & Membership', icon: '💳', description: 'Subscription management' },
        { href: '/services/ai-powered-testing', label: 'Testing', icon: '🧪', description: 'Automated testing' },
        { href: '/services/ai-powered-virtual-reality', label: 'Virtual Reality', icon: '🥽', description: 'VR solutions' },
        { href: '/services/ai-powered-voice-assistant-speech-recognition', label: 'Voice Assistant', icon: '🎤', description: 'Voice AI' },
        { href: '/services/ai-powered-workflow-orchestration', label: 'Workflow Orchestration', icon: '🔄', description: 'Workflow automation' },]
    },'
    { 
      href: '/marketplace', 
      label: 'Marketplace','
      children: [
        { href: '/marketplace', label: 'Browse Services', icon: '🔍', description: 'Find services' },
        { href: '/talent-directory', label: 'Talent Directory', icon: '👥', description: 'Find experts' },
        { href: '/join-talent', label: 'Join Talent', icon: '➕', description: 'Become a provider' },
        { href: '/service-categories', label: 'Service Categories', icon: '📂', description: 'Browse categories' },
        { href: '/post-request', label: 'Post Request', icon: '📝', description: 'Request services' },
        { href: '/quote-requests', label: 'Quote Requests', icon: '💰', description: 'Get quotes' },
        { href: '/review-system', label: 'Reviews', icon: '⭐', description: 'Read reviews' },
        { href: '/payment-processing', label: 'Payment Processing', icon: '💳', description: 'Secure payments' },
        { href: '/escrow-services', label: 'Escrow Services', icon: '🔒', description: 'Secure transactions' },
        { href: '/warranty-protection', label: 'Warranty Protection', icon: '🛡️', description: 'Service protection' },
        { href: '/dispute-resolution', label: 'Dispute Resolution', icon: '⚖️', description: 'Conflict resolution' },
        { href: '/referral-affiliate', label: 'Referral & Affiliate', icon: '🤝', description: 'Referral program' },]
    },'
    { 
      href: '/blog', 
      label: 'Resources','
      children: [
        { href: '/blog', label: 'Blog', icon: '📝', description: 'Latest insights' },
        { href: '/blog/cybersecurity-in-the-age-of-ai', label: 'Cybersecurity', icon: '🔒', description: 'Security insights' },
        { href: '/blog/machine-learning-in-healthcare', label: 'Healthcare ML', icon: '🏥', description: 'Healthcare AI' },
        { href: '/blog/blockchain-for-supply-chain-management', label: 'Blockchain', icon: '🔗', description: 'Blockchain insights' },
        { href: '/blog/digital-transformation-strategies', label: 'Digital Transformation', icon: '🔄', description: 'Transformation guides' },
        { href: '/blog/edge-ai-the-future-of-distributed-computing', label: 'Edge AI', icon: '🌐', description: 'Edge computing' },
        { href: '/blog/cloud-native-architecture-patterns', label: 'Cloud Architecture', icon: '☁️', description: 'Cloud patterns' },
        { href: '/blog/microservices-best-practices', label: 'Microservices', icon: '🔧', description: 'Microservices guide' },
        { href: '/blog/sustainable-technology-solutions', label: 'Sustainable Tech', icon: '🌱', description: 'Green technology' },
        { href: '/blog/augmented-reality-in-enterprise', label: 'AR in Enterprise', icon: '🥽', description: 'AR applications' },
        { href: '/blog/serverless-computing-benefits', label: 'Serverless Computing', icon: '⚡', description: 'Serverless benefits' },
        { href: '/blog/data-privacy-and-gdpr-compliance', label: 'Data Privacy', icon: '🔒', description: 'Privacy compliance' },
        { href: '/blog/devops-automation-tools', label: 'DevOps Tools', icon: '⚙️', description: 'DevOps automation' },
        { href: '/blog/quantum-computing-applications-in-business', label: 'Quantum Computing', icon: '⚛️', description: 'Quantum business' },
        { href: '/blog/api-security-and-authentication', label: 'API Security', icon: '🔐', description: 'API protection' },
        { href: '/docs', label: 'Documentation', icon: '📚', description: 'Technical docs' },
        { href: '/api-docs', label: 'API Documentation', icon: '🔌', description: 'API reference' },
        { href: '/help-desk-support', label: 'Help Desk', icon: '🎧', description: 'Get support' },
        { href: '/faq', label: 'FAQ', icon: '❓', description: 'Frequently asked' },]
    },'
    { 
      href: '/about', 
      label: 'Company','
      children: [
        { href: '/about', label: 'About Us', icon: '🏢', description: 'Our story' },
        { href: '/careers', label: 'Careers', icon: '💼', description: 'Join our team' },
        { href: '/press', label: 'Press', icon: '📰', description: 'Press releases' },
        { href: '/partners', label: 'Partners', icon: '🤝', description: 'Partnerships' },
        { href: '/innovation', label: 'Innovation', icon: '💡', description: 'Our innovations' },
        { href: '/contact', label: 'Contact', icon: '📞', description: 'Get in touch' },
        { href: '/privacy-policy', label: 'Privacy Policy', icon: '🔒', description: 'Privacy information' },
        { href: '/terms-of-service', label: 'Terms of Service', icon: '📋', description: 'Terms and conditions' },
        { href: '/security', label: 'Security', icon: '🛡️', description: 'Security measures' },
        { href: '/compliance-governance', label: 'Compliance', icon: '📋', description: 'Compliance info' },
        { href: '/status', label: 'System Status', icon: '📊', description: 'Service status' },]
    },;
  ];

  const ctaButton = (
    <motion.button
      whileHover={{ scale: 1.05}}
      whileTap={{ scale: 0.95}}
      className="bg-gradient-to-r" from-blue-600 to-purple-600 hover:from-blue-700 hover to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg text-base shadow-lg >
      Get Started
    </motion.button>;
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name =  description content={description} > </meta name=description" content={description} ><meta name="viewport content=width=device-width, initial-scale=1 > </meta" name="viewport" content="width=device-width," initial-scale=1" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ></Head>
      "
      <div className=" min-h-screen" bg-gray-50">
        {/* Header */}"
        <ImprovedNavigation items={navigationItems}
          ctaButton={ctaButton}"
          variant="light
        >{/* Main Content */}
        </ImprovedNavigation "
          items={navigationItems}
          ctaButton={ctaButton}"
          variant="light"
        ><main>
          {children}
        </main>

        {/* Footer */}"
        <footer className=" bg-gray-900" text-white">
          <div className=" max-w-7xl mx-auto px-4 sm px-6 lg px-8" py-12">
            <div className=" grid grid-cols-1 md grid-cols-2 lg grid-cols-5" gap-8">
              {/* Company Info */}"
              <div className=" lg" col-span-2">
                <h3 className=" text-lg font-semibold mb-4>Zion App</h3>
                <p className=" text-gray-400" mb-4>
                  Advanced AI-powered solutions for modern businesses. We specialize in cutting-edge technology solutions that drive innovation and growth.
                </p>
                <div className=" flex" space-x-4">
                  <Link href="/privacy-policy" className="text-gray-400" hover text-white transition-colors>Privacy</Link>
                  <Link href="/terms-of-service" className="text-gray-400" hover text-white transition-colors>Terms</Link>
                  <Link href="/help-desk-support" className="text-gray-400" hover text-white transition-colors>Support</Link>
                </div> </div>
              {/* AI & ML Services */}
              <div>
                <h4 className=" text-md font-semibold mb-4>AI & Machine Learning</h4>
                <ul className=" space-y-2" text-gray-400">
                  <li><Link href="/services/ai-consulting" className="hover" text-white transition-colors>AI Consulting</Link></li>
                  <li><Link href="/services/ai-model-development" className="hover" text-white transition-colors>Model Development</Link></li>
                  <li><Link href="/services/machine-learning-implementation" className="hover" text-white transition-colors>ML Implementation</Link></li>
                  <li><Link href="/services/ai-powered-automation" className="hover" text-white transition-colors>Process Automation</Link></li>
                  <li><Link href="/services/ai-powered-data-analytics" className="hover" text-white transition-colors>Data Analytics</Link></li>
                  <li><Link href="/services/ai-powered-business-intelligence" className="hover" text-white transition-colors>Business Intelligence</Link></li>
                </ul> </div>
              {/* Cloud & DevOps */}
              <div>
                <h4 className=" text-md font-semibold mb-4>Cloud & DevOps</h4>
                <ul className=" space-y-2" text-gray-400">
                  <li><Link href="/services/cloud-migration-services" className="hover" text-white transition-colors>Cloud Migration</Link></li>
                  <li><Link href="/services/devops-automation" className="hover" text-white transition-colors>DevOps Automation</Link></li>
                  <li><Link href="/services/performance-optimization" className="hover" text-white transition-colors>Performance Optimization</Link></li>
                  <li><Link href="/services/security-auditing" className="hover" text-white transition-colors>Security Auditing</Link></li>
                  <li><Link href="/services/edge-ai-implementation" className="hover" text-white transition-colors>Edge AI</Link></li>
                  <li><Link href="/services/quantum-computing-solutions" className="hover" text-white transition-colors>Quantum Computing</Link></li>
                </ul> </div>
              {/* Marketplace */}
              <div>
                <h4 className="text-md" font-semibold mb-4>Marketplace</h4>
                <ul className="space-y-2" text-gray-400">
                  <li><Link href="/marketplace" className="hover" text-white transition-colors>Browse Services</Link></li>
                  <li><Link href="/talent-directory" className="hover" text-white transition-colors>Talent Directory</Link></li>
                  <li><Link href="/join-talent" className="hover" text-white transition-colors>Join Talent</Link></li>
                  <li><Link href="/service-categories" className="hover" text-white transition-colors>Service Categories</Link></li>
                  <li><Link href="/post-request" className="hover" text-white transition-colors>Post Request</Link></li>
                  <li><Link href="/quote-requests" className="hover" text-white transition-colors>Quote Requests</Link></li> </ul>
              </div>
            </div>
             
            <div className="border-t" border-gray-800 mt-8 pt-8 text-center text-gray-400>;
              <p>&copy; 2024 Zion App. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </"> );"
};"
'
export default Layout;"'"