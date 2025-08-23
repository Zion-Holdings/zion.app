import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BookOpen, FileText, Video, BarChart3, Code, GraduationCap, 
  Brain, Atom, Shield, Rocket, Cpu, Database, Globe, Users,
  ArrowRight, Star, Zap, TrendingUp, Lightbulb, Award, CheckCircle
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500',
      href: '/resources/documentation',
      features: ['API Documentation', 'Integration Guides', 'Best Practices', 'Code Examples']
    },
    {
      title: 'Webinars',
      description: 'Live and recorded sessions on cutting-edge technology',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      href: '/webinars',
      features: ['Live Sessions', 'Expert Interviews', 'Product Demos', 'Q&A Sessions']
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementations',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      href: '/case-studies',
      features: ['Success Stories', 'ROI Analysis', 'Implementation Details', 'Client Testimonials']
    },
    {
      title: 'API Reference',
      description: 'Developer documentation and integration tools',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      href: '/resources/api',
      features: ['REST APIs', 'SDKs', 'Authentication', 'Rate Limits']
    },
    {
      title: 'Training',
      description: 'Certification programs and skill development',
      icon: GraduationCap,
      color: 'from-yellow-500 to-orange-500',
      href: '/training',
      features: ['Online Courses', 'Certifications', 'Workshops', 'Skill Assessments']
    }
  ];

  const featuredResources = [
    {
      title: 'AI Consciousness Evolution Guide',
      description: 'Comprehensive guide to implementing AI consciousness in your applications',
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      href: '/ai-consciousness-evolution-2045'
    },
    {
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing and its applications',
      category: 'Quantum Technology',
      icon: Atom,
      color: 'from-blue-500 to-indigo-500',
      href: '/quantum-neural-network-platform'
    },
    {
      title: 'Space Technology Implementation',
      description: 'Practical guide to space technology applications',
      category: 'Space Technology',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      href: '/space-resource-intelligence-2045'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Advanced security implementation strategies',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/quantum-cybersecurity-platform-2045'
    }
  ];

  const quickLinks = [
    { name: 'Getting Started', href: '/get-started', icon: Rocket },
    { name: 'API Documentation', href: '/docs', icon: Code },
    { name: 'Support Center', href: '/support', icon: Users },
    { name: 'Community Forum', href: '/community', icon: Globe },
    { name: 'Developer Tools', href: '/developer', icon: Cpu },
    { name: 'Performance Metrics', href: '/reports', icon: TrendingUp }
  ];

  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group | Knowledge Base & Learning</title>
        <meta name="description" content="Access comprehensive resources including documentation, webinars, case studies, and training materials to accelerate your technology adoption." />
        <meta name="keywords" content="resources, documentation, webinars, case studies, training, API reference, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-cyan-500/25 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Resources
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive knowledge base, documentation, and learning resources 
              to accelerate your technology adoption and success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources/documentation" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Browse Documentation
              </Link>
              <Link href="/webinars" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Watch Webinars
              </Link>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by topic and type.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <Link key={index} href={category.href} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Start with these essential guides and tutorials to get up and running quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredResources.map((resource, index) => (
                <Link key={index} href={resource.href} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30 mb-2">
                          {resource.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">{resource.description}</p>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Read Guide</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get to the resources you need quickly with these direct links.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our team is here to help you find the right resources for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Contact Support
              </Link>
              <Link href="/support" className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Support Center
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesPage;