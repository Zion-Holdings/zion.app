import React, { useState, useEffect , useCallback } from 'react
import Link from 'next/link
import { ChevronUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)}}
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  const scrollToTop = () => {
    window.scrollTo({'
      top: 0,
      behavior: 'smooth
    })}
  return (
    <footer className=" relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" text-white">
      <div className=" container-responsive" section-padding">
        <div className=" grid-responsive-4 gap-8 lg" gap-12">
          
          {/* Company Info */}"
          <div className=" lg" col-span-1">
            <div className=" flex items-center" mb-4">
              <h3 className=" text-responsive-xl" font-bold">
                <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
              </h3>
            </div>
            <p className=" text-responsive-sm text-gray-300" mb-6>
              The First Free AI-Powered Marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment.
            </p>
            <div className=" flex flex-wrap" gap-4">
              <Link href="/about" className=" text-gray-400 hover text-white transition-colors" touch-target>
                About Us
              </Link>
              <Link href="/contact" className=" text-gray-400 hover text-white transition-colors" touch-target>
                Contact
              </Link>
              <Link href="/sitemap" className="text-gray-400" hover text-white transition-colors touch-target>
                Sitemap
              </Link>
            </div> </div>
          {/* Marketplace & Services */}
          <div>
            <h4 className="text-responsive-lg" font-semibold mb-4 text-purple-400>Marketplace</h4>
            <ul className="space-y-3">
              <li><Link href="/marketplace" className="text-gray-400" hover text-white transition-colors touch-target>Main Marketplace</Link></li>
              <li><Link href="/services" className="text-gray-400" hover text-white transition-colors touch-target>IT Services</Link></li>
              <li><Link href="/talents" className="text-gray-400" hover text-white transition-colors touch-target>AI Talents</Link></li>
              <li><Link href="/equipment" className="text-gray-400" hover text-white transition-colors touch-target>Equipment</Link></li>
              <li><Link href="/products" className="text-gray-400" hover text-white transition-colors touch-target>Products</Link></li>
              <li><Link href="/service-categories" className="text-gray-400" hover text-white transition-colors touch-target>Service Categories</Link></li>
              <li><Link href="/talent-directory" className="text-gray-400" hover text-white transition-colors touch-target>Talent Directory</Link></li>
              <li><Link href="/ai-service-matcher" className="text-gray-400" hover text-white transition-colors touch-target>AI Service Matcher</Link></li>
            </ul> </div>
          {/* AI-Powered Services */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>AI Services</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-powered-analytics" className="text-gray-400" hover text-white transition-colors touch-target>AI Analytics</Link></li>
              <li><Link href="/ai-powered-automation" className="text-gray-400" hover text-white transition-colors touch-target>AI Automation</Link></li>
              <li><Link href="/ai-powered-data-analytics" className="text-gray-400" hover text-white transition-colors touch-target>Data Analytics</Link></li>
              <li><Link href="/ai-powered-security-cybersecurity" className="text-gray-400" hover text-white transition-colors touch-target>Cybersecurity</Link></li>
              <li><Link href="/ai-powered-education-training" className="text-gray-400" hover text-white transition-colors touch-target>Education & Training</Link></li>
              <li><Link href="/ai-powered-contract-legal" className="text-gray-400" hover text-white transition-colors touch-target>Legal & Contracts</Link></li>
              <li><Link href="/ai-powered-customer-support" className="text-gray-400" hover text-white transition-colors touch-target>Customer Support</Link></li>
              <li><Link href="/ai-powered-identity-verification" className="text-gray-400" hover text-white transition-colors touch-target>Identity Verification</Link></li>
            </ul> </div>
          {/* Business Tools */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>Business Tools</h4>
            <ul className="space-y-3">
              <li><Link href="/executive-dashboard" className="text-gray-400" hover text-white transition-colors touch-target>Executive Dashboard</Link></li>
              <li><Link href="/analytics-dashboard" className="text-gray-400" hover text-white transition-colors touch-target>Analytics Dashboard</Link></li>
              <li><Link href="/project-management" className="text-gray-400" hover text-white transition-colors touch-target>Project Management</Link></li>
              <li><Link href="/ai-project-management" className="text-gray-400" hover text-white transition-colors touch-target>AI Project Management</Link></li>
              <li><Link href="/webhook-management" className="text-gray-400" hover text-white transition-colors touch-target>Webhook Management</Link></li>
              <li><Link href="/workflow-designer" className="text-gray-400" hover text-white transition-colors touch-target>Workflow Designer</Link></li>
              <li><Link href="/data-warehouse-etl" className="text-gray-400" hover text-white transition-colors touch-target>Data Warehouse ETL</Link></li>
              <li><Link href="/help-desk-support" className="text-gray-400" hover text-white transition-colors touch-target>Help Desk Support</Link></li>
            </ul> </div>
          {/* Security & Payments */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>Security & Payments</h4>
            <ul className="space-y-3">
              <li><Link href="/escrow-services" className="text-gray-400" hover text-white transition-colors touch-target>Escrow Services</Link></li>
              <li><Link href="/warranty-protection" className="text-gray-400" hover text-white transition-colors touch-target>Warranty Protection</Link></li>
              <li><Link href="/payment-processing" className="text-gray-400" hover text-white transition-colors touch-target>Payment Processing</Link></li>
              <li><Link href="/invoice-billing" className="text-gray-400" hover text-white transition-colors touch-target>Invoice & Billing</Link></li>
              <li><Link href="/dispute-resolution" className="text-gray-400" hover text-white transition-colors touch-target>Dispute Resolution</Link></li>
              <li><Link href="/compliance-governance" className="text-gray-400" hover text-white transition-colors touch-target>Compliance & Governance</Link></li>
              <li><Link href="/skill-verification" className="text-gray-400" hover text-white transition-colors touch-target>Skill Verification</Link></li>
              <li><Link href="/marketplace-pricing" className="text-gray-400" hover text-white transition-colors touch-target>Marketplace Pricing</Link></li>
            </ul> </div>
          {/* Communication & Support */}
          <div>
            <h4 className="text-responsive-lg" font-semibold mb-4 text-purple-400>Communication</h4>
            <ul className="space-y-3">
              <li><Link href="/inbox" className="text-gray-400" hover text-white transition-colors touch-target>Inbox</Link></li>
              <li><Link href="/real-time-chat" className="text-gray-400" hover text-white transition-colors touch-target>Real-time Chat</Link></li>
              <li><Link href="/notifications" className="text-gray-400" hover text-white transition-colors touch-target>Notifications</Link></li>
              <li><Link href="/advanced-search" className="text-gray-400" hover text-white transition-colors touch-target>Advanced Search</Link></li>
              <li><Link href="/referral-affiliate" className="text-gray-400" hover text-white transition-colors touch-target>Referral System</Link></li>
              <li><Link href="/ai-powered-testing" className="text-gray-400" hover text-white transition-colors touch-target>AI Testing</Link></li>
              <li><Link href="/multi-language" className="text-gray-400" hover text-white transition-colors touch-target>Multi-language</Link></li>
            </ul> </div>
          {/* Immersive & VR */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>Immersive & VR</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-immersive-marketplace" className="text-gray-400" hover text-white transition-colors touch-target>Immersive Marketplace</Link></li>
              <li><Link href="/ai-powered-mixed-reality-spatial-computing" className="text-gray-400" hover text-white transition-colors touch-target>Mixed Reality</Link></li>
              <li><Link href="/ai-powered-augmented-reality" className="text-gray-400" hover text-white transition-colors touch-target>Augmented Reality</Link></li>
              <li><Link href="/ai-powered-collaboration-team" className="text-gray-400" hover text-white transition-colors touch-target>Team Collaboration</Link></li>
            </ul> </div>
          {/* Transportation & Logistics */}
          <div>
            <h4 className="text-responsive-lg" font-semibold mb-4 text-purple-400>Transportation</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-powered-autonomous-vehicle-transportation" className="text-gray-400" hover text-white transition-colors touch-target>Autonomous Vehicles</Link></li>
              <li><Link href="/ai-powered-autonomous-drone-delivery-logistics" className="text-gray-400" hover text-white transition-colors touch-target>Drone Delivery</Link></li>
              <li><Link href="/ai-powered-inventory-supply-chain" className="text-gray-400" hover text-white transition-colors touch-target>Supply Chain</Link></li>
              <li><Link href="/ai-powered-pricing-estimation" className="text-gray-400" hover text-white transition-colors touch-target>Pricing Estimation</Link></li>
            </ul> </div>
          {/* Legal & Contracts */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>Legal & Contracts</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-contract-generator" className="text-gray-400" hover text-white transition-colors touch-target>Contract Generator</Link></li>
              <li><Link href="/ai-invoice-generator" className="text-gray-400" hover text-white transition-colors touch-target>Invoice Generator</Link></li>
              <li><Link href="/ai-powered-biometric-authentication" className="text-gray-400" hover text-white transition-colors touch-target>Biometric Auth</Link></li>
              <li><Link href="/ai-powered-quantum-cryptography-secure-communication" className="text-gray-400" hover text-white transition-colors touch-target>Quantum Cryptography</Link></li>
            </ul> </div>
          {/* Specialized AI */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>Specialized AI</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-powered-quantum-computing" className="text-gray-400" hover text-white transition-colors touch-target>Quantum Computing</Link></li>
              <li><Link href="/ai-powered-quantum-machine-learning-neural-networks" className="text-gray-400" hover text-white transition-colors touch-target>Quantum ML</Link></li>
              <li><Link href="/ai-powered-quantum-entanglement-teleportation" className="text-gray-400" hover text-white transition-colors touch-target>Quantum Teleportation</Link></li>
              <li><Link href="/ai-powered-space-exploration-satellite-management" className="text-gray-400" hover text-white transition-colors touch-target>Space Exploration</Link></li>
              <li><Link href="/ai-powered-underwater-exploration-marine-research" className="text-gray-400" hover text-white transition-colors touch-target>Underwater Exploration</Link></li>
              <li><Link href="/ai-powered-climate-change-environmental-sustainability" className="text-gray-400" hover text-white transition-colors touch-target>Climate Change</Link></li>
              <li><Link href="/ai-powered-precision-agriculture-smart-farming" className="text-gray-400" hover text-white transition-colors touch-target>Precision Agriculture</Link></li>
              <li><Link href="/ai-powered-healthcare-medical-diagnostics" className="text-gray-400" hover text-white transition-colors touch-target>Healthcare</Link></li>
            </ul> </div>
          {/* Industry Solutions */}
          <div>
            <h4 className=" text-responsive-lg font-semibold mb-4 text-purple-400>Industry Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-powered-energy-management-renewable-energy" className="text-gray-400" hover text-white transition-colors touch-target>Energy Management</Link></li>
              <li><Link href="/ai-powered-manufacturing-industrial-automation" className="text-gray-400" hover text-white transition-colors touch-target>Manufacturing</Link></li>
              <li><Link href="/ai-powered-finance-banking" className="text-gray-400" hover text-white transition-colors touch-target>Finance & Banking</Link></li>
              <li><Link href="/ai-powered-retail-ecommerce" className="text-gray-400" hover text-white transition-colors touch-target>Retail & E-commerce</Link></li>
              <li><Link href="/ai-powered-entertainment-gaming" className="text-gray-400" hover text-white transition-colors touch-target>Entertainment & Gaming</Link></li>
              <li><Link href="/ai-powered-social-media-community" className="text-gray-400" hover text-white transition-colors touch-target>Social Media</Link></li>
              <li><Link href="/ai-powered-urban-development-smart-infrastructure" className="text-gray-400" hover text-white transition-colors touch-target>Smart Infrastructure</Link></li>
            </ul> </div>
          {/* Resources */}
          <div>
            <h4 className="text-responsive-lg" font-semibold mb-4 text-purple-400>Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-400" hover text-white transition-colors touch-target>Blog</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400" hover text-white transition-colors touch-target>Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400" hover text-white transition-colors touch-target>Terms of Service</Link></li>
              <li><Link href="/accessibility" className="text-gray-400" hover text-white transition-colors touch-target>Accessibility</Link></li>
              <li><Link href="/investor-matchmaking" className="text-gray-400" hover text-white transition-colors touch-target>Investor Matchmaking</Link></li>
            </ul> </div>
          {/* Account */}
          <div>
            <h4 className="text-responsive-lg" font-semibold mb-4 text-purple-400>Account</h4>
            <ul className="space-y-3">
              <li><Link href="/auth/login" className="text-gray-400" hover text-white transition-colors touch-target>Login</Link></li>
              <li><Link href="/auth/signup" className="text-gray-400" hover text-white transition-colors touch-target>Sign Up</Link></li>
              <li><Link href="/auth/forgot-password" className="text-gray-400" hover text-white transition-colors touch-target>Forgot Password</Link></li>
              <li><Link href="/user-profiles" className="text-gray-400" hover text-white transition-colors touch-target>User Profiles</Link></li>
              <li><Link href="/review-system" className="text-gray-400" hover text-white transition-colors touch-target>Review System</Link></li>
            </ul>
          </div> 
        </div>
        {/* Bottom Bar */} 
        <div className="border-t border-white/10 pt-8" mt-12">
          <div className=" flex flex-col lg flex-row justify-between items-center space-y-4 lg" space-y-0">
            <div className=" text-center lg" text-left">
              <p className="text-responsive-sm text-gray-400">;
                &copy;
 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 lg gap-6">
              <Link href="/sitemap" className=" text-gray-400 hover text-white transition-colors" touch-target>
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400" hover text-white transition-colors touch-target> Accessibility
              </Link>
              <button
                onClick={scrollToTop}"
                className=" group flex items-center space-x-2 text-gray-400 hover text-white transition-all duration-300 hover scale-105 touch-target aria-label= Back to" top
              >
                <ChevronUp className="w-4" h-4 group-hover -translate-y-1 transition-transform duration-300 > 
                </ChevronUp className="w-4 h-4 group-hover -translate-y-1 transition-transform duration-300 ><span className="hidden" sm inline>Back to Top</span>
              </button>
            </div>
          </div> </div>
      </div>

      {/* Animated Border */} 
      <div className="absolute" bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse></div>
    </footer"> );
};
'
export default Footer "'"