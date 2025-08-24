import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = "December 15, 2024";

  const dataWeCollect = [
    {
      category: "Personal Information",
      examples: ["Name", "Email address", "Phone number", "Company name", "Job title"],
      purpose: "To provide our services, communicate with you, and personalize your experience"
    },
    {
      category: "Technical Information",
      examples: ["IP address", "Browser type", "Device information", "Usage data", "Cookies"],
      purpose: "To improve our services, ensure security, and provide technical support"
    },
    {
      category: "Usage Information",
      examples: ["Pages visited", "Features used", "Search queries", "Time spent", "Interactions"],
      purpose: "To analyze usage patterns, improve user experience, and develop new features"
    },
    {
      category: "Communication Data",
      examples: ["Support tickets", "Feedback", "Survey responses", "Marketing preferences"],
      purpose: "To provide customer support, improve our services, and send relevant communications"
    }
  ];

  const dataSharing = [
    {
      category: "Service Providers",
      description: "We share data with trusted third-party service providers who help us operate our platform",
      examples: ["Cloud hosting providers", "Payment processors", "Analytics services", "Customer support tools"]
    },
    {
      category: "Legal Requirements",
      description: "We may disclose data when required by law or to protect our rights and safety",
      examples: ["Court orders", "Government requests", "Legal proceedings", "Security investigations"]
    },
    {
      category: "Business Transfers",
      description: "In the event of a merger, acquisition, or sale of assets, data may be transferred",
      examples: ["Company restructuring", "Asset sales", "Mergers and acquisitions"]
    },
    {
      category: "With Your Consent",
      description: "We may share data with third parties when you explicitly consent",
      examples: ["Marketing partnerships", "Integration services", "Third-party applications"]
    }
  ];

  const userRights = [
    {
      right: "Access",
      description: "Request a copy of the personal data we hold about you",
      icon: <Eye className="h-5 w-5" />
    },
    {
      right: "Correction",
      description: "Request correction of inaccurate or incomplete data",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      right: "Deletion",
      description: "Request deletion of your personal data",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      right: "Portability",
      description: "Request transfer of your data to another service",
      icon: <Globe className="h-5 w-5" />
    },
    {
      right: "Restriction",
      description: "Request limitation of data processing",
      icon: <Lock className="h-5 w-5" />
    },
    {
      right: "Objection",
      description: "Object to certain types of data processing",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const securityMeasures = [
    "Encryption of data in transit and at rest",
    "Regular security audits and penetration testing",
    "Access controls and authentication mechanisms",
    "Employee training on data protection",
    "Incident response and breach notification procedures",
    "Regular backups and disaster recovery planning"
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="flex items-center justify-center space-x-4 text-zion-slate-light">
            <Calendar className="h-5 w-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#overview" className="text-zion-cyan hover:text-zion-purple-light transition-colors">1. Overview</a>
              <a href="#data-collection" className="text-zion-cyan hover:text-zion-purple-light transition-colors">2. Data Collection</a>
              <a href="#data-use" className="text-zion-cyan hover:text-zion-purple-light transition-colors">3. How We Use Data</a>
              <a href="#data-sharing" className="text-zion-cyan hover:text-zion-purple-light transition-colors">4. Data Sharing</a>
              <a href="#data-security" className="text-zion-cyan hover:text-zion-purple-light transition-colors">5. Data Security</a>
              <a href="#user-rights" className="text-zion-cyan hover:text-zion-purple-light transition-colors">6. Your Rights</a>
              <a href="#cookies" className="text-zion-cyan hover:text-zion-purple-light transition-colors">7. Cookies & Tracking</a>
              <a href="#children" className="text-zion-cyan hover:text-zion-purple-light transition-colors">8. Children's Privacy</a>
              <a href="#international" className="text-zion-cyan hover:text-zion-purple-light transition-colors">9. International Transfers</a>
              <a href="#changes" className="text-zion-cyan hover:text-zion-purple-light transition-colors">10. Policy Changes</a>
              <a href="#contact" className="text-zion-cyan hover:text-zion-purple-light transition-colors">11. Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our website, services, and applications.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p>
                This policy applies to all users of our services, including customers, partners, and visitors 
                to our website. It covers both online and offline interactions with Zion Tech Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section id="data-collection" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2. Data Collection</h2>
            <p className="text-zion-slate-light mb-8">
              We collect various types of information to provide and improve our services. Here's what we collect and why:
            </p>
            
            <div className="space-y-6">
              {dataWeCollect.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.category}</h3>
                  <div className="mb-3">
                    <h4 className="font-medium text-white mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, idx) => (
                        <span key={idx} className="bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Purpose:</h4>
                    <p className="text-zion-slate-light">{item.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Use */}
      <section id="data-use" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">3. How We Use Data</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>We use the collected information for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional activities (with consent)</li>
                <li>Customer support and technical assistance</li>
                <li>Research and development of new features</li>
              </ul>
              <p>
                We will only use your personal data for the purposes for which we collected it, unless we 
                reasonably consider that we need to use it for another reason and that reason is compatible 
                with the original purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section id="data-sharing" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">4. Data Sharing and Disclosure</h2>
            <p className="text-zion-slate-light mb-8">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy:
            </p>
            
            <div className="space-y-6">
              {dataSharing.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.category}</h3>
                  <p className="text-zion-slate-light mb-3">{item.description}</p>
                  <div>
                    <h4 className="font-medium text-white mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, idx) => (
                        <span key={idx} className="bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section id="data-security" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5. Data Security</h2>
            <p className="text-zion-slate-light mb-8">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{measure}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zion-slate-light">
              Despite our security measures, no method of transmission over the internet or electronic 
              storage is 100% secure. We cannot guarantee absolute security, but we are committed to 
              protecting your information to the best of our ability.
            </p>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section id="user-rights" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">6. Your Rights and Choices</h2>
            <p className="text-zion-slate-light mb-8">
              Depending on your location, you may have certain rights regarding your personal information. 
              We are committed to honoring these rights:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-zion-cyan">{right.icon}</div>
                    <h3 className="text-lg font-semibold">{right.right}</h3>
                  </div>
                  <p className="text-zion-slate-light">{right.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-zion-cyan/10 rounded-xl border border-zion-cyan/20">
              <h3 className="text-lg font-semibold text-zion-cyan mb-3">How to Exercise Your Rights</h3>
              <p className="text-zion-slate-light mb-4">
                To exercise any of these rights, please contact us using the information provided at the 
                bottom of this policy. We will respond to your request within 30 days.
              </p>
              <p className="text-zion-slate-light">
                We may need to verify your identity before processing certain requests. We reserve the 
                right to deny requests that are unreasonably repetitive, require disproportionate technical 
                effort, or could compromise the privacy of others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section id="cookies" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">7. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small text files stored on your device that help us remember your preferences 
                and improve our services.
              </p>
              <p>
                <strong>Types of cookies we use:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies 
                may limit your ability to use some features of our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section id="children" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">8. Children's Privacy</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal 
                information, please contact us immediately. We will take steps to remove such information 
                from our records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section id="international" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">9. International Data Transfers</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws.
              </p>
              <p>
                When we transfer data internationally, we implement appropriate safeguards such as 
                standard contractual clauses, adequacy decisions, or other approved mechanisms to 
                protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Changes */}
      <section id="changes" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">10. Changes to This Policy</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the new policy on this page and 
                updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
              <p>
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">11. Contact Us</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">privacy@ziontechgroup.com</p>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
