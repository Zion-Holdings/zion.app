import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Code, 
  GitBranch, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Star,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Cpu,
  Globe
} from 'lucide-react';

export default function DeveloperToolsPage() {
  const developerTools = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'GitHub Copilot',
      description: 'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.',
      features: [
        'Intelligent code completion',
        'Multi-language support',
        'IDE integration',
        'Code explanation',
        'Security vulnerability detection'
      ],
      pricing: '$10/month',
      marketPrice: '$10-20/month',
      website: 'https://github.com/features/copilot',
      color: 'bg-gradient-to-br from-gray-500 to-black',
      textColor: 'text-gray-400',
      gradient: 'from-gray-400 to-black',
      popular: true,
      category: 'Code Generation'
    },
    {
      icon: <GitBranch className="w-8 h-8 text-white" />,
      title: 'GitHub Pro',
      description: 'Advanced GitHub features for professional developers including private repositories, advanced tools, and priority support.',
      features: [
        'Unlimited private repositories',
        'Advanced code review tools',
        'Priority support',
        'Advanced insights',
        'Team management features'
      ],
      pricing: '$4/month',
      marketPrice: '$4/month',
      website: 'https://github.com/pricing',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      popular: true,
      category: 'Version Control'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'MongoDB Atlas',
      description: 'Fully managed cloud database service with automatic scaling, backup, and monitoring for modern applications.',
      features: [
        'Fully managed MongoDB',
        'Auto-scaling & optimization',
        'Global distribution',
        'Advanced security',
        'Real-time analytics'
      ],
      pricing: '$9/month',
      marketPrice: '$9-57/month',
      website: 'https://www.mongodb.com/atlas',
      color: 'bg-gradient-to-br from-green-500 to-blue-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-blue-500',
      popular: false,
      category: 'Database'
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Vercel Pro',
      description: 'Next.js deployment platform with automatic deployments, preview deployments, and advanced analytics.',
      features: [
        'Zero-config deployments',
        'Preview deployments',
        'Advanced analytics',
        'Team collaboration',
        'Custom domains'
      ],
      pricing: '$20/month',
      marketPrice: '$20/month',
      website: 'https://vercel.com/pricing',
      color: 'bg-gradient-to-br from-black to-gray-600',
      textColor: 'text-gray-400',
      gradient: 'from-black to-gray-500',
      popular: false,
      category: 'Deployment'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Snyk',
      description: 'Developer security platform that finds and fixes vulnerabilities in code, dependencies, and containers.',
      features: [
        'Vulnerability scanning',
        'Dependency monitoring',
        'Container security',
        'Infrastructure as Code',
        'CI/CD integration'
      ],
      pricing: '$25/month',
      marketPrice: '$25-100/month',
      website: 'https://snyk.io/pricing',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Postman',
      description: 'Complete API development platform for building, testing, and documenting APIs with team collaboration.',
      features: [
        'API design & testing',
        'Team collaboration',
        'API documentation',
        'Mock servers',
        'Monitoring & analytics'
      ],
      pricing: '$12/month',
      marketPrice: '$12-99/month',
      website: 'https://www.postman.com/pricing',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      popular: false,
      category: 'API Development'
    }
  ];

  const devMarketStats = [
    {
      title: 'Dev Tools Market',
      value: '$8.2B',
      growth: '+24% YoY',
      description: 'Global developer tools market size'
    },
    {
      title: 'AI Code Tools',
      value: '$2.1B',
      growth: '+45% YoY',
      description: 'AI-powered development tools market'
    },
    {
      title: 'Cloud Dev Tools',
      value: '$4.8B',
      growth: '+32% YoY',
      description: 'Cloud-based development platforms'
    },
    {
      title: 'Dev Productivity',
      value: '35%',
      growth: '+18% YoY',
      description: 'Average productivity improvement'
    }
  ];

  const devCategories = [
    {
      name: 'Code Generation',
      description: 'AI-powered coding assistants and code completion tools',
      tools: 1,
      avgPrice: '$10/month'
    },
    {
      name: 'Version Control',
      description: 'Git platforms and collaboration tools for code management',
      tools: 1,
      avgPrice: '$4/month'
    },
    {
      name: 'Database',
      description: 'Managed database services and database tools',
      tools: 1,
      avgPrice: '$33/month'
    },
    {
      name: 'Deployment',
      description: 'Platforms for deploying and hosting applications',
      tools: 1,
      avgPrice: '$20/month'
    },
    {
      name: 'Security',
      description: 'Security scanning and vulnerability detection tools',
      tools: 1,
      avgPrice: '$62/month'
    },
    {
      name: 'API Development',
      description: 'Tools for building, testing, and managing APIs',
      tools: 1,
      avgPrice: '$55/month'
    }
  ];

  const devWorkflow = [
    {
      phase: 'Development',
      tools: ['GitHub Copilot', 'VS Code', 'Git'],
      description: 'Write and manage code with AI assistance'
    },
    {
      phase: 'Testing',
      tools: ['Jest', 'Cypress', 'Postman'],
      description: 'Test code quality and API functionality'
    },
    {
      phase: 'Security',
      tools: ['Snyk', 'GitHub Advanced Security'],
      description: 'Scan for vulnerabilities and security issues'
    },
    {
      phase: 'Deployment',
      tools: ['Vercel', 'GitHub Actions', 'Docker'],
      description: 'Deploy and host applications'
    }
  ];

  return (
    <>
      <Head>
        <title>Developer Tools & Services | Zion Tech Group - Real Dev Tools with Pricing</title>
        <meta name="description" content="Discover real developer tools and services including GitHub Copilot, MongoDB Atlas, Vercel, and more. All tools include pricing, features, and direct links." />
        <meta property="og:title" content="Developer Tools & Services | Zion Tech Group" />
        <meta property="og:description" content="Real developer tools with pricing and direct links to boost your development workflow." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
            Developer Tools & Services
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Professional Developer Tools That Actually Work
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated developer tools and services that professionals use daily. Each tool has been tested and verified 
            to provide real value for developers and development teams.
          </p>
        </div>
      </section>

      {/* Developer Market Statistics */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Developer Tools Market Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the developer tools landscape helps you make informed decisions about your development stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {devMarketStats.map((stat, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.title}</h3>
                  <div className="text-2xl font-bold text-cursor-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-green-400 mb-3">{stat.growth}</div>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools Grid */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Curated Developer Tools & Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Each tool has been carefully selected based on performance, reliability, and real-world developer usage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developerTools.map((tool, index) => (
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl font-bold ${tool.textColor}`}>
                        {tool.title}
                      </h3>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Service Price:</span>
                        <span className="text-lg font-semibold text-cursor-blue">{tool.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Market Average:</span>
                        <span className="text-sm text-gray-400">{tool.marketPrice}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <Button
                        href={tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-cursor-blue hover:bg-cursor-blue-dark"
                      >
                        Try Tool
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Direct Link</div>
                        <div className="text-xs text-cursor-blue font-mono">{tool.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Workflow */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Complete Developer Workflow
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Build a complete development pipeline with these essential tools that work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devWorkflow.map((phase, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-cursor-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{phase.phase}</h3>
                  <p className="text-gray-400 mb-4">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-sm text-cursor-blue font-medium">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Developer Tool Categories
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Understanding the different types of developer tools helps you build a comprehensive development stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devCategories.map((category, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tools Available: <span className="text-white">{category.tools}</span></span>
                    <span className="text-cursor-blue font-semibold">{category.avgPrice}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor text-center">
          <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
            Ready to Level Up Your Development?
          </h2>
          <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Start with one tool or build a complete development stack. Each tool is designed to work independently 
            and integrate seamlessly with your existing workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/ai-tools"
              variant="primary"
              size="lg"
              className="bg-cursor-blue hover:bg-cursor-blue-dark"
            >
              Explore AI Tools
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white"
            >
              Get Dev Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}