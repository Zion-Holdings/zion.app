import { useState } from 'react';
import { SEO } from '@/components/SEO';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      subcategories: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Machine Learning Models',
        'AI Consulting'
      ],
      featured: 'Custom AI Solutions'
    },
    {
      id: 'web',
      name: 'Web Development',
      icon: '🌐',
      description: 'Modern, responsive web applications and websites',
      subcategories: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Solutions',
        'E-commerce Platforms',
        'Progressive Web Apps',
        'Web Maintenance'
      ],
      featured: 'Full-Stack Web Solutions'
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications',
      subcategories: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'Mobile UI/UX',
        'App Maintenance'
      ],
      featured: 'Cross-Platform Mobile Apps'
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      icon: '🎨',
      description: 'User-centered design solutions for digital products',
      subcategories: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing',
        'Design Consulting'
      ],
      featured: 'User-Centered Design'
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      icon: '☁️',
      description: 'Scalable cloud infrastructure and services',
      subcategories: [
        'AWS Solutions',
        'Azure Services',
        'Google Cloud',
        'Cloud Migration',
        'DevOps & CI/CD',
        'Cloud Security'
      ],
      featured: 'Multi-Cloud Solutions'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: '🔒',
      description: 'Comprehensive security solutions and consulting',
      subcategories: [
        'Security Audits',
        'Penetration Testing',
        'Security Training',
        'Incident Response',
        'Compliance & Governance',
        'Security Monitoring'
      ],
      featured: '360° Security Solutions'
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: '📊',
      description: 'Data-driven insights and business intelligence',
      subcategories: [
        'Data Engineering',
        'Business Intelligence',
        'Data Visualization',
        'Big Data Solutions',
        'Data Migration',
        'Analytics Consulting'
      ],
      featured: 'Data-Driven Decisions'
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      icon: '⛓️',
      description: 'Distributed ledger technology solutions',
      subcategories: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Platforms',
        'Blockchain Consulting',
        'DApp Development',
        'Web3 Solutions'
      ],
      featured: 'Web3 Innovation'
    },
    {
      id: 'it',
      name: 'IT Services',
      icon: '💻',
      description: 'Comprehensive IT support and infrastructure',
      subcategories: [
        'IT Consulting',
        'Infrastructure Setup',
        'System Administration',
        'Network Management',
        'IT Support',
        'Onsite Services'
      ],
      featured: 'End-to-End IT Solutions'
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: '📈',
      description: 'Digital marketing and growth strategies',
      subcategories: [
        'SEO Optimization',
        'Content Marketing',
        'Social Media Management',
        'PPC Campaigns',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      featured: 'Growth-Focused Marketing'
    },
    {
      id: 'business',
      name: 'Business Solutions',
      icon: '💼',
      description: 'Technology solutions for business growth',
      subcategories: [
        'Process Automation',
        'CRM Implementation',
        'ERP Solutions',
        'Business Intelligence',
        'Digital Transformation',
        'Strategy Consulting'
      ],
      featured: 'Business Process Optimization'
    },
    {
      id: 'consulting',
      name: 'Technology Consulting',
      icon: '🎯',
      description: 'Strategic technology guidance and planning',
      subcategories: [
        'Technology Strategy',
        'Digital Transformation',
        'Vendor Selection',
        'Project Management',
        'Technology Audits',
        'Innovation Consulting'
      ],
      featured: 'Strategic Tech Guidance'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <>
      <SEO 
        title="Service Categories - Complete Technology Solutions"
        description="Explore our comprehensive range of technology services. From AI and web development to cybersecurity and consulting, find the perfect solution for your business needs."
        canonical="/categories"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Discover our comprehensive range of technology services designed to meet every business need. 
                From cutting-edge AI solutions to essential IT support, we've got you covered.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-blue-100 hover:bg-white/20'
                  }`}
                >
                  All Services
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-blue-100 hover:bg-white/20'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredCategories.map((category) => (
                <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                  <div className="text-4xl mb-4 text-center">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {category.name}
                  </h3>
                  <p className="text-blue-100 mb-4 text-sm text-center">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {category.featured}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Services Include:</h4>
                    <ul className="space-y-2">
                      {category.subcategories.map((subcategory, index) => (
                        <li key={index} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">•</span>
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={`/contact?service=${category.id}`}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  We offer custom solutions tailored to your specific needs. Let's discuss how we can help 
                  transform your business with technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/request-quote"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Categories;