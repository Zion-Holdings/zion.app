import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, CheckCircle, 
  ArrowRight, Users, Globe, Database, 
  Calendar, Phone, Mail, MapPin,
  Clock
} from 'lucide-react';
import Link from 'next/link';

const Privacy: React.FC = () => {
  const privacyPrinciples = [
    {
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Control',
      description: 'You have full control over your personal information',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Security',
      description: 'We implement robust security measures to protect your data',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Compliance',
      description: 'We adhere to all applicable privacy laws and regulations',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email, phone number', 'Company and job title', 'Contact preferences'],
      purpose: 'To provide services and communicate with you',
      retention: 'As long as you are a customer, plus 7 years for legal compliance'
    },
    {
      category: 'Technical Data',
      examples: ['IP address, device information', 'Browser type and version', 'Usage analytics'],
      purpose: 'To improve our services and ensure security',
      retention: '12 months for analytics, 90 days for security logs'
    },
    {
      category: 'Service Data',
      examples: ['Service usage patterns', 'Performance metrics', 'Support interactions'],
      purpose: 'To optimize service delivery and provide support',
      retention: 'Duration of service plus 3 years for business records'
    },
    {
      category: 'Marketing Data',
      examples: ['Marketing preferences', 'Campaign interactions', 'Event attendance'],
      purpose: 'To provide relevant marketing communications',
      retention: 'Until you opt out or 3 years of inactivity'
    }
  ];

  const yourRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data',
      icon: <Eye className="w-5 h-5" />
    },
    {
      right: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const dataProtection = [
    {
      measure: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols',
      details: ['AES-256 encryption', 'TLS 1.3 for data transmission', 'Encrypted database storage']
    },
    {
      measure: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms',
      details: ['Multi-factor authentication', 'Role-based access control', 'Regular access reviews']
    },
    {
      measure: 'Data Minimization',
      description: 'We only collect data that is necessary for our services',
      details: ['Purpose-limited collection', 'Regular data audits', 'Automatic data cleanup']
    },
    {
      measure: 'Third-Party Security',
      description: 'Careful vetting of third-party service providers',
      details: ['Security assessments', 'Data processing agreements', 'Regular compliance audits']
    }
  ];

  const complianceFrameworks = [
    {
      framework: 'GDPR',
      region: 'European Union',
      status: 'Fully Compliant',
      description: 'General Data Protection Regulation compliance for EU residents'
    },
    {
      framework: 'CCPA',
      region: 'California, USA',
      status: 'Fully Compliant',
      description: 'California Consumer Privacy Act compliance'
    },
    {
      framework: 'SOC 2 Type II',
      region: 'Global',
      status: 'Certified',
      description: 'Security, availability, and confidentiality controls'
    },
    {
      framework: 'ISO 27001',
      region: 'Global',
      status: 'Certified',
      description: 'Information security management system'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="Privacy Policy | Zion Tech Group" description="Zion Tech Group Privacy Policy: data collection, usage, security, and contact details." url="https://ziontechgroup.com/privacy/" />
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: 2025-02-07</p>
          <section className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              We respect your privacy. This policy explains what information we collect, how we use it, and your choices. We collect minimal personal information necessary to provide our services and improve your experience.
            </p>
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Contact details you provide (name, email, phone) when reaching out or subscribing.</li>
              <li>Service usage data (pages viewed, events) for analytics and product improvement.</li>
              <li>Technical data (IP address, browser) for security and reliability.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white">How We Use Information</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Provide, maintain, and improve our services.</li>
              <li>Communicate about updates, offers, and support.</li>
              <li>Ensure security, prevent fraud, and comply with legal obligations.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white">Sharing</h2>
            <p>We do not sell personal information. We may share with trusted processors (e.g., hosting, analytics) under DPAs and access controls.</p>
            <h2 className="text-2xl font-semibold text-white">Data Retention & Security</h2>
            <p>We retain data for as long as necessary to provide services and meet legal requirements. We employ encryption in transit, access controls, audit logs, and regular reviews.</p>
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p>Depending on your jurisdiction, you may request access, correction, deletion, or restriction of your data. Contact us to exercise rights.</p>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p>
              Email: <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · Phone: <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a><br/>
              Address: 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

 