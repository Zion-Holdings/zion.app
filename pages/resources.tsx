import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Download, BookOpen, Play, FileText, Users, Calendar, Star, ArrowRight } from 'lucide-react';

const Resources: NextPage = () => {
  const resourceCategories = [
    {
      title: "White Papers",
      description: "In-depth research and insights on emerging technologies and industry trends",
      icon: FileText,
      count: "12+",
      href: "/resources/white-papers"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of how we've helped businesses transform and succeed",
      icon: Users,
      count: "25+",
      href: "/resources/case-studies"
    },
    {
      title: "Webinars",
      description: "Live and recorded sessions on technology topics and industry insights",
      icon: Play,
      count: "50+",
      href: "/resources/webinars"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and technical documentation for our products and services",
      icon: BookOpen,
      count: "100+",
      href: "/resources/documentation"
    }
  ];

  const featuredResources = [
    {
      title: "The Future of AI in Business: 2025 Outlook",
      type: "White Paper",
      description: "Comprehensive analysis of AI trends and their impact on business transformation",
      downloadCount: "2,500+",
      rating: 4.8,
      href: "/resources/white-papers/ai-business-outlook-2025",
      category: "AI & ML"
    },
    {
      title: "Cloud Migration Success Story: Financial Services",
      type: "Case Study",
      description: "How we helped a major bank reduce costs by 40% through cloud migration",
      downloadCount: "1,800+",
      rating: 4.9,
      href: "/resources/case-studies/cloud-migration-financial",
      category: "Cloud"
    },
    {
      title: "Cybersecurity Best Practices for 2025",
      type: "White Paper",
      description: "Essential security strategies and practices for modern businesses",
      downloadCount: "3,200+",
      rating: 4.7,
      href: "/resources/white-papers/cybersecurity-best-practices-2025",
      category: "Security"
    },
    {
      title: "Digital Transformation Roadmap Guide",
      type: "Guide",
      description: "Step-by-step guide to planning and executing digital transformation initiatives",
      downloadCount: "4,100+",
      rating: 4.9,
      href: "/resources/guides/digital-transformation-roadmap",
      category: "Transformation"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      time: "2:00 PM EST",
      type: "Virtual Workshop",
      description: "Hands-on workshop covering AI implementation strategies and best practices",
      registration: "Open"
    },
    {
      title: "Cloud Security Summit",
      date: "March 22, 2025",
      time: "10:00 AM EST",
      type: "Virtual Conference",
      description: "Comprehensive overview of cloud security challenges and solutions",
      registration: "Open"
    },
    {
      title: "Digital Transformation Webinar",
      date: "March 29, 2025",
      time: "1:00 PM EST",
      type: "Webinar",
      description: "Strategies for successful digital transformation in enterprise environments",
      registration: "Open"
    }
  ];

  const tools = [
    {
      name: "ROI Calculator",
      description: "Calculate the potential return on investment for technology projects",
      icon: "💰",
      href: "/tools/roi-calculator"
    },
    {
      name: "Technology Assessment",
      description: "Evaluate your current technology stack and identify improvement opportunities",
      icon: "🔍",
      href: "/tools/technology-assessment"
    },
    {
      name: "Security Audit Tool",
      description: "Comprehensive security assessment for your digital infrastructure",
      icon: "🔒",
      href: "/tools/security-audit"
    },
    {
      name: "Cloud Migration Planner",
      description: "Plan and estimate your cloud migration journey",
      icon: "☁️",
      href: "/tools/cloud-migration-planner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Resources - Zion Tech Group | White Papers, Case Studies & Tools</title>
        <meta name="description" content="Access valuable resources from Zion Tech Group including white papers, case studies, webinars, and interactive tools for technology insights." />
        <meta name="keywords" content="resources, white papers, case studies, webinars, documentation, tools, technology insights" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Access valuable insights, tools, and knowledge to help you navigate the complex 
            world of technology and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/resources/white-papers" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Browse Resources
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Custom Content
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-sm md:text-base opacity-80">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-sm md:text-base opacity-80">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4.8</div>
              <div className="text-sm md:text-base opacity-80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-80">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Resource Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6 text-sm">{category.description}</p>
                
                <div className="text-2xl font-bold text-blue-400 mb-4">{category.count}</div>
                
                <Link href={category.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:text-blue-300 transition-colors">
                  Explore {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Featured Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-sm text-gray-400">{resource.type}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-400">{resource.downloadCount}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-400">{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <Link href={resource.href} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                  Download Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Interactive Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300 mb-6 text-sm">{tool.description}</p>
                
                <Link href={tool.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:text-blue-300 transition-colors">
                  Try Tool <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-green-100/20 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {event.registration}
                  </span>
                  <span className="text-sm text-gray-400">{event.type}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Play className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, resources, and updates delivered directly to your inbox. 
              Join thousands of technology professionals who trust Zion Tech Group for industry knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Resources?</h2>
            <p className="text-xl mb-8 opacity-90">
              We can create tailored content and resources specific to your industry and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Custom Content
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;