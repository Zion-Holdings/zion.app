import React from 'react';

const V1026V1030Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V1026',
      name: 'Email Auto-Categorizer',
      icon: '📧',
      description: 'AI automatically categorizes emails by type, priority, and department with zero manual sorting',
      features: [
        'Smart email classification (95%+ accuracy)',
        'Priority detection (urgent/high/normal/low)',
        'Department routing (sales, support, billing, HR, legal)',
        'Custom category rules',
        'SLA tracking and escalation',
        'Learning from user feedback'
      ],
      benefit: 'Zero manual sorting',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      version: 'V1027',
      name: 'Email Signature Manager',
      icon: '✍️',
      description: 'Professional email signatures with dynamic content, tracking, and compliance for brand consistency',
      features: [
        'Professional signature templates',
        'Dynamic content personalization',
        'Brand consistency enforcement',
        'GDPR and CAN-SPAM compliance',
        'Click and impression tracking',
        'Bulk signature management'
      ],
      benefit: 'Brand consistency',
      color: 'from-purple-500 to-pink-500'
    },
    {
      version: 'V1028',
      name: 'Email Migration Assistant',
      icon: '🔄',
      description: 'Seamless migration between email platforms (Gmail, Outlook, Exchange) with zero data loss',
      features: [
        'Multi-platform support (Gmail, Outlook, Exchange, IMAP)',
        'Zero data loss guarantee',
        'Folder and label mapping',
        'Contact and calendar migration',
        'Real-time progress monitoring',
        'Post-migration verification'
      ],
      benefit: 'Risk-free migration',
      color: 'from-green-500 to-teal-500'
    },
    {
      version: 'V1029',
      name: 'Mobile Email Optimizer',
      icon: '📱',
      description: 'AI optimizes emails for mobile viewing and interaction with responsive design and touch-friendly CTAs',
      features: [
        'Responsive design conversion',
        'Touch-friendly button optimization',
        'Mobile-first email scoring',
        '50+ device testing',
        'Performance optimization',
        'Mobile engagement analytics'
      ],
      benefit: '+60% mobile engagement',
      color: 'from-orange-500 to-red-500'
    },
    {
      version: 'V1030',
      name: 'Email Training Platform',
      icon: '🎓',
      description: 'Interactive training modules to improve team email skills with assessments and progress tracking',
      features: [
        '6 comprehensive training modules',
        'Skill assessments and scoring',
        'Personalized learning paths',
        'Progress tracking and certifications',
        'Team analytics dashboard',
        'Practical exercises and simulations'
      ],
      benefit: 'Better communication',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    // V1026 Services
    { name: 'Smart Email Classification', price: 149, icon: '🤖' },
    { name: 'Intelligent Email Routing', price: 199, icon: '🔀' },
    { name: 'Email Priority Detection', price: 129, icon: '⚡' },
    { name: 'Email Tag Automation', price: 99, icon: '🏷️' },
    { name: 'Email Department Sorting', price: 179, icon: '📂' },
    
    // V1027 Services
    { name: 'Professional Email Signatures', price: 89, icon: '✍️' },
    { name: 'Signature Template Manager', price: 119, icon: '📋' },
    { name: 'Signature Compliance Tracker', price: 149, icon: '✓' },
    { name: 'Signature Analytics Platform', price: 129, icon: '📊' },
    { name: 'Dynamic Signature Content', price: 159, icon: '🎯' },
    
    // V1028 Services
    { name: 'Email Platform Migration', price: 499, icon: '🔄' },
    { name: 'Email Migration Planner', price: 299, icon: '📝' },
    { name: 'Email Data Validation', price: 199, icon: '✓' },
    { name: 'Migration Progress Monitor', price: 179, icon: '📈' },
    { name: 'Post-Migration Verification', price: 249, icon: '🔍' },
    
    // V1029 Services
    { name: 'Mobile Email Optimization', price: 169, icon: '📱' },
    { name: 'Email Responsive Design', price: 199, icon: '🎨' },
    { name: 'Mobile Email Testing', price: 149, icon: '🧪' },
    { name: 'Touch Target Optimization', price: 129, icon: '👆' },
    { name: 'Mobile Email Analytics', price: 159, icon: '📊' },
    
    // V1030 Services
    { name: 'Email Skills Training Platform', price: 299, icon: '🎓' },
    { name: 'Email Etiquette Course', price: 149, icon: '📚' },
    { name: 'Email Security Awareness Training', price: 199, icon: '🔒' },
    { name: 'Email Productivity Training', price: 179, icon: '⚡' },
    { name: 'Advanced Email Communication', price: 229, icon: '💬' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
              V1026-V1030 • 5 New Engines
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Advanced Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Five breakthrough engines that automate categorization, manage signatures professionally,
            migrate platforms seamlessly, optimize for mobile perfectly, and train teams effectively
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white">4,983</div>
              <div className="text-sm text-gray-400">Total Services</div>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-gray-400">New Engines</div>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white">25</div>
              <div className="text-sm text-gray-400">New Services</div>
            </div>
          </div>
        </div>

        {/* Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.version}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${engine.color} mb-6`}>
                <span className="text-4xl">{engine.icon}</span>
              </div>
              <div className="mb-2">
                <span className="text-sm font-mono text-gray-400">{engine.version}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{engine.description}</p>
              
              <div className="space-y-3 mb-6">
                {engine.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Key Benefit</span>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${engine.color} bg-clip-text text-transparent`}>
                    {engine.benefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            25 New Professional Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{service.name}</div>
                <div className="text-xs text-gray-400">${service.price}/mo</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email Workflow?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get V1026-V1030 engines and 25 professional services to automate, optimize, and improve your email operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                View All Services
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <div>📞 +1 302 464 0950</div>
              <div>✉️ kleber@ziontechgroup.com</div>
              <div>📍 364 E Main St STE 1008 Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V1026V1030Showcase;
