import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Zap, Shield, Cloud, Brain, Globe, Cpu, Database, Lock, Smartphone, Code, Rocket, Target, Building, Users, TrendingUp, Award } from 'lucide-react';

const Solutions: NextPage = () => {
  const solutionCategories = [
    {
      title: "Enterprise IT Solutions",
      description: "Comprehensive IT infrastructure and digital transformation solutions for large organizations",
      icon: Building,
      features: [
        "Digital Transformation Strategy",
        "Legacy System Modernization",
        "Enterprise Architecture Design",
        "IT Governance & Compliance",
        "Change Management",
        "Performance Optimization"
      ],
      href: "/solutions/enterprise-it",
      category: "Enterprise"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized software-as-a-service solutions for specific business needs and workflows",
      icon: Code,
      features: [
        "Custom SaaS Development",
        "API Integration Services",
        "Multi-tenant Architecture",
        "Subscription Management",
        "Analytics & Reporting",
        "White-label Solutions"
      ],
      href: "/solutions/micro-saas",
      category: "SaaS"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize business processes and operations",
      icon: Rocket,
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Data Migration",
        "Cloud Adoption",
        "Change Management",
        "Training & Support"
      ],
      href: "/solutions/digital-transformation",
      category: "Transformation"
    },
    {
      title: "Research & Development",
      description: "Cutting-edge R&D services in emerging technologies and innovative solutions",
      icon: Brain,
      features: [
        "AI Research & Development",
        "Quantum Computing",
        "Blockchain Innovation",
        "IoT Solutions",
        "Space Technology",
        "Biotech Applications"
      ],
      href: "/solutions/research-development",
      category: "R&D"
    }
  ];

  const industrySolutions = [
    {
      industry: "Financial Services",
      icon: "🏦",
      solutions: [
        "Regulatory Compliance Systems",
        "Risk Management Platforms",
        "Trading & Analytics Tools",
        "Blockchain & DeFi Solutions",
        "Cybersecurity & Fraud Detection",
        "Customer Experience Platforms"
      ],
      href: "/solutions/financial-services"
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      solutions: [
        "Electronic Health Records",
        "Telemedicine Platforms",
        "AI-Powered Diagnostics",
        "Patient Management Systems",
        "Compliance & Security",
        "Data Analytics & Insights"
      ],
      href: "/solutions/healthcare"
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      solutions: [
        "Smart Factory Solutions",
        "IoT & Sensor Networks",
        "Predictive Maintenance",
        "Supply Chain Optimization",
        "Quality Control Systems",
        "Automation & Robotics"
      ],
      href: "/solutions/manufacturing"
    },
    {
      industry: "Government",
      icon: "🏛️",
      solutions: [
        "Digital Government Services",
        "Cybersecurity & Compliance",
        "Data Management Systems",
        "Citizen Engagement Platforms",
        "Process Automation",
        "Analytics & Reporting"
      ],
      href: "/solutions/government"
    },
    {
      industry: "Education",
      icon: "🎓",
      solutions: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Student Information Systems",
        "Analytics & Assessment",
        "Mobile Learning Apps",
        "Administrative Automation"
      ],
      href: "/solutions/education"
    },
    {
      industry: "Retail & E-commerce",
      icon: "🛍️",
      solutions: [
        "E-commerce Platforms",
        "Inventory Management",
        "Customer Analytics",
        "Omnichannel Solutions",
        "AI-Powered Recommendations",
        "Supply Chain Optimization"
      ],
      href: "/solutions/retail-ecommerce"
    }
  ];

  const technologies = [
    "Artificial Intelligence & ML",
    "Cloud Computing",
    "Blockchain & Web3",
    "Internet of Things",
    "Cybersecurity",
    "Data Analytics",
    "Mobile Development",
    "DevOps & Automation"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business challenges, goals, and requirements through comprehensive analysis",
      icon: Target
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a customized roadmap and architecture that aligns with your business objectives",
      icon: Code
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Execute the solution using agile methodologies with regular check-ins and iterations",
      icon: Rocket
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing and quality checks to ensure the solution meets all requirements",
      icon: Shield
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Seamless deployment with comprehensive training and support for your team",
      icon: Zap
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and support to ensure optimal performance",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Solutions - Zion Tech Group | Enterprise IT, Digital Transformation & More</title>
        <meta name="description" content="Comprehensive business solutions from Zion Tech Group including enterprise IT, digital transformation, micro SaaS, and industry-specific solutions." />
        <meta name="keywords" content="business solutions, enterprise IT, digital transformation, micro SaaS, industry solutions, technology consulting" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Business Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Comprehensive technology solutions designed to address your specific business challenges 
            and drive sustainable growth across all industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Started
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View Services
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-sm md:text-base opacity-80">Solution Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-sm md:text-base opacity-80">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-sm md:text-base opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Solution Categories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutionCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="inline-block bg-blue-100/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {category.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link href={category.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:text-blue-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Industry-Specific Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                </div>
                
                <div className="space-y-2 mb-6">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {solution}
                    </div>
                  ))}
                </div>
                
                <Link href={industry.href} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                  Explore Solutions
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Technologies We Leverage
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Solution Development Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-semibold text-white mb-2">Financial Services</h3>
                <p className="text-blue-400 text-sm">Major Bank</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                &quot;Zion Tech Group transformed our legacy systems, reducing processing time by 70% 
                and improving customer satisfaction significantly.&quot;
              </p>
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm text-gray-400">70% Efficiency Improvement</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
                <p className="text-blue-400 text-sm">Global Manufacturer</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                &quot;Their IoT solutions and predictive maintenance systems have saved us millions 
                in operational costs and reduced downtime by 60%.&quot;
              </p>
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm text-gray-400">60% Downtime Reduction</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
                <p className="text-blue-400 text-sm">Hospital Network</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                &quot;The AI-powered diagnostic platform has improved our diagnostic accuracy by 85% 
                and reduced patient wait times dramatically.&quot;
              </p>
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm text-gray-400">85% Accuracy Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how our solutions can address your specific challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
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

export default Solutions;