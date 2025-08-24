import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  Lock,
  Eye,
  Heart
} from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = "December 15, 2024";

  const keyTerms = [
    {
      term: "Services",
      definition: "All products, services, and features provided by Zion Tech Group through our platform"
    },
    {
      term: "User",
      definition: "Any individual or entity that accesses or uses our services"
    },
    {
      term: "Content",
      definition: "Any information, data, text, software, graphics, or other materials uploaded or shared"
    },
    {
      term: "Platform",
      definition: "Our website, applications, and any related technology infrastructure"
    }
  ];

  const userObligations = [
    {
      title: "Account Security",
      description: "Maintain the confidentiality of your account credentials and notify us of any unauthorized access",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "Acceptable Use",
      description: "Use our services only for lawful purposes and in accordance with these terms",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: "Content Standards",
      description: "Ensure all content you upload complies with our community guidelines and applicable laws",
      icon: <Eye className="h-5 w-5" />
    },
    {
      title: "Respectful Behavior",
      description: "Treat other users with respect and refrain from harassment or discriminatory behavior",
      icon: <Heart className="h-5 w-5" />
    }
  ];

  const prohibitedActivities = [
    "Violating any applicable laws or regulations",
    "Infringing on intellectual property rights",
    "Transmitting malware, viruses, or harmful code",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with the proper functioning of our services",
    "Collecting personal information without consent",
    "Engaging in fraudulent or deceptive practices",
    "Spamming or sending unsolicited communications"
  ];

  const intellectualProperty = [
    {
      category: "Our IP",
      description: "All content, trademarks, logos, and software on our platform are owned by Zion Tech Group",
      rights: ["Copyright protection", "Trademark rights", "Patent rights", "Trade secret protection"]
    },
    {
      category: "Your Content",
      description: "You retain ownership of content you upload, but grant us a license to use it",
      rights: ["Non-exclusive license", "Worldwide distribution", "Modification rights", "Commercial use"]
    },
    {
      category: "Third-Party IP",
      description: "We respect third-party intellectual property and expect users to do the same",
      rights: ["Copyright compliance", "Trademark respect", "License adherence", "Attribution requirements"]
    }
  ];

  const privacyAndData = [
    "We collect and process personal data as described in our Privacy Policy",
    "By using our services, you consent to our data practices",
    "We implement appropriate security measures to protect your information",
    "We may share data with service providers and as required by law",
    "You have rights regarding your personal data as outlined in our Privacy Policy",
    "We retain data for as long as necessary to provide our services"
  ];

  const terminationConditions = [
    "Breach of these terms of service",
    "Violation of applicable laws or regulations",
    "Engagement in fraudulent or harmful activities",
    "Non-payment of applicable fees",
    "Extended period of account inactivity",
    "Request for account deletion by the user"
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <FileText className="h-10 w-10 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            These terms govern your use of Zion Tech Group's services. By using our platform, 
            you agree to be bound by these terms and our Privacy Policy.
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
              <a href="#definitions" className="text-zion-cyan hover:text-zion-purple-light transition-colors">2. Definitions</a>
              <a href="#acceptance" className="text-zion-cyan hover:text-zion-purple-light transition-colors">3. Acceptance of Terms</a>
              <a href="#services" className="text-zion-cyan hover:text-zion-purple-light transition-colors">4. Description of Services</a>
              <a href="#user-accounts" className="text-zion-cyan hover:text-zion-purple-light transition-colors">5. User Accounts</a>
              <a href="#user-obligations" className="text-zion-cyan hover:text-zion-purple-light transition-colors">6. User Obligations</a>
              <a href="#prohibited-activities" className="text-zion-cyan hover:text-zion-purple-light transition-colors">7. Prohibited Activities</a>
              <a href="#intellectual-property" className="text-zion-cyan hover:text-zion-purple-light transition-colors">8. Intellectual Property</a>
              <a href="#privacy-data" className="text-zion-cyan hover:text-zion-purple-light transition-colors">9. Privacy & Data</a>
              <a href="#termination" className="text-zion-cyan hover:text-zion-purple-light transition-colors">10. Termination</a>
              <a href="#disclaimers" className="text-zion-cyan hover:text-zion-purple-light transition-colors">11. Disclaimers</a>
              <a href="#limitation-liability" className="text-zion-cyan hover:text-zion-purple-light transition-colors">12. Limitation of Liability</a>
              <a href="#governing-law" className="text-zion-cyan hover:text-zion-purple-light transition-colors">13. Governing Law</a>
              <a href="#contact" className="text-zion-cyan hover:text-zion-purple-light transition-colors">14. Contact Information</a>
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
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your access to and use of 
                our website, applications, and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                If you disagree with any part of these terms, you may not access our Services.
              </p>
              <p>
                These Terms apply to all users of our Services, including without limitation users who are 
                browsers, vendors, customers, merchants, and contributors of content.
              </p>
              <p>
                We reserve the right to update or change these Terms at any time. Your continued use of the 
                Services following the posting of any changes constitutes acceptance of those changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section id="definitions" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2. Definitions</h2>
            <p className="text-zion-slate-light mb-8">
              For the purposes of these Terms, the following terms have the following meanings:
            </p>
            
            <div className="space-y-6">
              {keyTerms.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.term}</h3>
                  <p className="text-zion-slate-light">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section id="acceptance" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">3. Acceptance of Terms</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                By accessing or using our Services, you confirm that you have read, understood, and agree to 
                be bound by these Terms. If you are using our Services on behalf of a company or other legal 
                entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
              <p>
                You must be at least 18 years old to use our Services. If you are under 18, you may only use 
                our Services with the involvement and consent of a parent or guardian.
              </p>
              <p>
                If you do not agree to these Terms, you must not use our Services. Your continued use of our 
                Services constitutes acceptance of these Terms and any amendments thereto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description of Services */}
      <section id="services" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">4. Description of Services</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Zion Tech Group provides a comprehensive platform for technology services, including but not 
                limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI and autonomous systems solutions</li>
                <li>Quantum computing infrastructure and services</li>
                <li>Cybersecurity and zero-trust architecture</li>
                <li>IT infrastructure and cloud migration services</li>
                <li>Data analytics and business intelligence</li>
                <li>Professional consulting and advisory services</li>
                <li>Marketplace for technology talent and equipment</li>
                <li>Educational resources and training programs</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time 
                with or without notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts */}
      <section id="user-accounts" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5. User Accounts</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                To access certain features of our Services, you may be required to create an account. You are 
                responsible for maintaining the confidentiality of your account credentials and for all activities 
                that occur under your account.
              </p>
              <p>
                You agree to provide accurate, current, and complete information during the registration process 
                and to update such information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for any activities or actions under your 
                account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              <p>
                We reserve the right to refuse service, terminate accounts, or remove or edit content at our 
                sole discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section id="user-obligations" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">6. User Obligations</h2>
            <p className="text-zion-slate-light mb-8">
              As a user of our Services, you agree to comply with the following obligations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-zion-cyan">{obligation.icon}</div>
                    <h3 className="text-lg font-semibold">{obligation.title}</h3>
                  </div>
                  <p className="text-zion-slate-light">{obligation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section id="prohibited-activities" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">7. Prohibited Activities</h2>
            <p className="text-zion-slate-light mb-8">
              You agree not to engage in any of the following prohibited activities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{activity}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zion-slate-light">
              Violation of these prohibitions may result in immediate termination of your account and access 
              to our Services, and may also result in legal action.
            </p>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section id="intellectual-property" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">8. Intellectual Property Rights</h2>
            <p className="text-zion-slate-light mb-8">
              Our Services and their original content, features, and functionality are and will remain the 
              exclusive property of Zion Tech Group and its licensors.
            </p>
            
            <div className="space-y-6">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.category}</h3>
                  <p className="text-zion-slate-light mb-3">{item.description}</p>
                  <div>
                    <h4 className="font-medium text-white mb-2">Key Rights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.rights.map((right, idx) => (
                        <span key={idx} className="bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm">
                          {right}
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

      {/* Privacy and Data */}
      <section id="privacy-data" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">9. Privacy and Data Protection</h2>
            <p className="text-zion-slate-light mb-8">
              Your privacy is important to us. Our collection and use of personal information is governed by 
              our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {privacyAndData.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zion-slate-light">
              By using our Services, you consent to our collection and use of information as detailed in our 
              Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section id="termination" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">10. Termination</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                We may terminate or suspend your account and access to our Services immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use the Services will cease immediately. If you wish to terminate 
                your account, you may simply discontinue using the Services or contact us to delete your account.
              </p>
              <p>
                <strong>Grounds for termination include:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {terminationConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive 
                termination, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">11. Disclaimers</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ZION TECH GROUP MAKES NO 
                WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES, 
                INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
              </p>
              <p>
                We do not warrant that the Services will be uninterrupted or error-free, that defects will be 
                corrected, or that the Services or the servers that make them available are free of viruses 
                or other harmful components.
              </p>
              <p>
                We do not warrant or make any representations regarding the use or the results of the use of 
                the Services in terms of their correctness, accuracy, reliability, or otherwise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section id="limitation-liability" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">12. Limitation of Liability</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                IN NO EVENT SHALL ZION TECH GROUP, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
                OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
                INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
              </p>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, 
                IF ANY, FOR ACCESSING OUR SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING 
                RISE TO THE CLAIM.
              </p>
              <p>
                The limitations set forth in this section will survive and apply even if any limited remedy 
                specified in these Terms is found to have failed of its essential purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section id="governing-law" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">13. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                California, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or the Services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                The arbitration shall be conducted in San Francisco, California, and the decision of the 
                arbitrator shall be final and binding.
              </p>
              <p>
                Notwithstanding the foregoing, we may seek injunctive or other equitable relief to protect 
                our intellectual property rights in any court of competent jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">14. Contact Information</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">legal@ziontechgroup.com</p>
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

export default TermsPage;
