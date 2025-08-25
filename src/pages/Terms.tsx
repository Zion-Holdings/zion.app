import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Users, Globe, Lock, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const Terms = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to be bound by these terms and conditions.',
      items: [
        'You must be at least 18 years old',
        'You agree to comply with all applicable laws',
        'You accept responsibility for your account',
        'You agree to our privacy policy'
      ],
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Service Description',
      description: 'We provide technology solutions, consulting, and digital transformation services.',
      items: [
        'AI and machine learning services',
        'Cloud and DevOps solutions',
        'Enterprise technology consulting',
        'Digital transformation services'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'User Responsibilities',
      description: 'Users are responsible for maintaining the security and integrity of their accounts.',
      items: [
        'Keep login credentials secure',
        'Report security incidents',
        'Comply with usage policies',
        'Respect intellectual property rights'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intellectual Property',
      description: 'All content and services are protected by intellectual property laws.',
      items: [
        'Our trademarks and copyrights',
        'Proprietary technology and software',
        'Service methodologies and processes',
        'Confidential business information'
      ],
      icon: Lock,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const prohibitedActivities = [
    {
      title: 'Unauthorized Access',
      description: 'Attempting to gain unauthorized access to our systems or services',
      icon: AlertTriangle
    },
    {
      title: 'Data Misuse',
      description: 'Using our services to store or transmit malicious code or data',
      icon: Shield
    },
    {
      title: 'Service Interference',
      description: 'Interfering with the proper functioning of our services',
      icon: Globe
    },
    {
      title: 'Illegal Activities',
      description: 'Using our services for any illegal or unauthorized purpose',
      icon: FileText
    }
  ];

  const termination = [
    {
      title: 'Breach of Terms',
      description: 'We may terminate access for violations of these terms',
      icon: AlertTriangle
    },
    {
      title: 'Non-Payment',
      description: 'Services may be suspended for non-payment of fees',
      icon: CheckCircle
    },
    {
      title: 'Legal Requirements',
      description: 'We may terminate services to comply with legal obligations',
      icon: Shield
    },
    {
      title: 'Business Changes',
      description: 'Services may be discontinued due to business decisions',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Terms of{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
              <FileText className="w-6 h-6" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Service{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Terms
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group services and outline the rights 
              and responsibilities of both parties.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-zion-slate-light mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Prohibited{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              The following activities are strictly prohibited when using our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prohibitedActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-400">{activity.title}</h3>
                  <p className="text-zion-slate-light">{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Service{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Termination
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We reserve the right to terminate or suspend services under certain circumstances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termination.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{term.title}</h3>
                  <p className="text-zion-slate-light">{term.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Limitation of{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Liability
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Our liability is limited to the extent permitted by applicable law.
            </p>
            
            <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Liability Limits</h3>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, or use.
              </p>
              <p className="text-zion-slate-light">
                Our total liability shall not exceed the amount paid by you for the services in the 
                twelve months preceding the claim.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Governing{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Law
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              These terms are governed by and construed in accordance with applicable laws.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Jurisdiction</h3>
                <p className="text-zion-slate-light">
                  These terms are governed by the laws of the State of Delaware, United States. 
                  Any disputes shall be resolved in the courts of Delaware.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Dispute Resolution</h3>
                <p className="text-zion-slate-light">
                  We encourage resolving disputes through direct communication. If resolution cannot 
                  be reached, disputes may be resolved through arbitration or court proceedings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Questions About{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                These Terms?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              If you have questions about these terms of service, please contact us.
            </p>
            
            <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-zion-slate-light mb-2">Email:</p>
                  <a href="mailto:legal@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                    legal@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <p className="text-zion-slate-light mb-2">General Contact:</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-zion-blue-light/20">
                <p className="text-zion-slate-light">
                  <strong>Address:</strong><br />
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;