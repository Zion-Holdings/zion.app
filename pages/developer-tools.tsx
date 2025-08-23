import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ExternalLink, Check, Star, Zap, Code, Database, Server, Cpu, HardDrive, Globe, Shield, Bot, Palette, Search, BarChart3, GitBranch, Terminal, Package, TestTube, Bug, Rocket, Monitor, Cloud, Lock, Database as DatabaseIcon, Code2 } from 'lucide-react';

export default function DeveloperToolsPage() {
  const developerTools = [
    {
      category: 'Code Editors & IDEs',
      tools: [
        {
          name: 'Visual Studio Code',
          description: 'Free, open-source code editor with extensive extensions and Git integration.',
          features: ['IntelliSense', 'Git integration', 'Extensions marketplace', 'Debugging', 'Terminal'],
          pricing: 'Free',
          website: 'https://code.visualstudio.com',
          icon: <Code className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-purple-600',
          popular: true
        },
        {
          name: 'JetBrains IntelliJ',
          description: 'Professional Java IDE with advanced code analysis and refactoring tools.',
          features: ['Smart code completion', 'Refactoring tools', 'Built-in tools', 'Database tools', 'Version control'],
          pricing: '$149/year',
          website: 'https://jetbrains.com/idea',
          icon: <Code2 className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        },
        {
          name: 'Sublime Text',
          description: 'Fast, lightweight text editor with powerful search and replace capabilities.',
          features: ['Multiple selections', 'Command palette', 'Split editing', 'Plugin ecosystem', 'Performance'],
          pricing: '$99 (one-time)',
          website: 'https://sublimetext.com',
          icon: <Terminal className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
        }
      ]
    },
    {
      category: 'Version Control & Collaboration',
      tools: [
        {
          name: 'GitHub',
          description: 'Platform for hosting and collaborating on Git repositories with project management.',
          features: ['Git hosting', 'Pull requests', 'Issues & projects', 'Actions CI/CD', 'Packages'],
          pricing: 'Free - $4/month',
          website: 'https://github.com',
          icon: <GitBranch className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-gray-800 to-black',
          popular: true
        },
        {
          name: 'GitLab',
          description: 'Complete DevOps platform with Git repository management and CI/CD pipelines.',
          features: ['Git hosting', 'CI/CD pipelines', 'Container registry', 'Security scanning', 'Monitoring'],
          pricing: 'Free - $19/month',
          website: 'https://gitlab.com',
          icon: <GitBranch className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        },
        {
          name: 'Bitbucket',
          description: 'Git code hosting service with built-in CI/CD and project management.',
          features: ['Git hosting', 'Pipelines', 'Jira integration', 'Code review', 'Security'],
          pricing: 'Free - $3/month',
          website: 'https://bitbucket.org',
          icon: <GitBranch className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        }
      ]
    },
    {
      category: 'Testing & Quality',
      tools: [
        {
          name: 'Jest',
          description: 'Delightful JavaScript testing framework with a focus on simplicity.',
          features: ['Unit testing', 'Mocking', 'Code coverage', 'Snapshot testing', 'Parallel execution'],
          pricing: 'Free',
          website: 'https://jestjs.io',
          icon: <TestTube className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          popular: true
        },
        {
          name: 'Cypress',
          description: 'Modern web testing framework for end-to-end testing of web applications.',
          features: ['E2E testing', 'Component testing', 'Real-time reload', 'Debugging', 'Network stubbing'],
          pricing: 'Free - $75/month',
          website: 'https://cypress.io',
          icon: <Bug className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-green-500 to-blue-600'
        },
        {
          name: 'SonarQube',
          description: 'Code quality and security analysis platform for continuous code inspection.',
          features: ['Code quality', 'Security analysis', 'Technical debt', 'Multi-language', 'CI/CD integration'],
          pricing: 'Free - $20/month',
          website: 'https://sonarqube.org',
          icon: <Search className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        }
      ]
    },
    {
      category: 'Database & Backend',
      tools: [
        {
          name: 'PostgreSQL',
          description: 'Advanced open-source relational database with extensibility and SQL compliance.',
          features: ['ACID compliance', 'JSON support', 'Full-text search', 'Extensions', 'Replication'],
          pricing: 'Free',
          website: 'https://postgresql.org',
          icon: <DatabaseIcon className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
          popular: true
        },
        {
          name: 'MongoDB',
          description: 'Document database with the scalability and flexibility that modern applications require.',
          features: ['Document model', 'Horizontal scaling', 'Aggregation pipeline', 'Real-time analytics', 'Cloud Atlas'],
          pricing: 'Free - $57/month',
          website: 'https://mongodb.com',
          icon: <Database className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-green-500 to-emerald-600'
        },
        {
          name: 'Redis',
          description: 'In-memory data structure store used as database, cache, and message broker.',
          features: ['In-memory storage', 'Data structures', 'Persistence', 'Replication', 'Clustering'],
          pricing: 'Free - $15/month',
          website: 'https://redis.io',
          icon: <HardDrive className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-red-500 to-orange-600'
        }
      ]
    },
    {
      category: 'DevOps & Deployment',
      tools: [
        {
          name: 'Docker',
          description: 'Platform for developing, shipping, and running applications in containers.',
          features: ['Containerization', 'Image management', 'Docker Compose', 'Registry', 'Swarm'],
          pricing: 'Free - $7/month',
          website: 'https://docker.com',
          icon: <Package className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
          popular: true
        },
        {
          name: 'Kubernetes',
          description: 'Open-source container orchestration platform for automating deployment and scaling.',
          features: ['Container orchestration', 'Auto-scaling', 'Load balancing', 'Service discovery', 'Rolling updates'],
          pricing: 'Free',
          website: 'https://kubernetes.io',
          icon: <Server className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
          name: 'Terraform',
          description: 'Infrastructure as code tool for building, changing, and versioning infrastructure.',
          features: ['Infrastructure as code', 'Multi-cloud', 'State management', 'Modules', 'Providers'],
          pricing: 'Free - $20/month',
          website: 'https://terraform.io',
          icon: <Cloud className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-purple-500 to-pink-600'
        }
      ]
    },
    {
      category: 'Monitoring & Analytics',
      tools: [
        {
          name: 'Prometheus',
          description: 'Open-source monitoring and alerting toolkit designed for reliability and scalability.',
          features: ['Time series database', 'PromQL query language', 'Alerting', 'Service discovery', 'Exporters'],
          pricing: 'Free',
          website: 'https://prometheus.io',
          icon: <Monitor className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-red-500 to-orange-600',
          popular: true
        },
        {
          name: 'Grafana',
          description: 'Open-source analytics and monitoring solution for databases, servers, and applications.',
          features: ['Data visualization', 'Dashboard creation', 'Alerting', 'Plugin ecosystem', 'Multi-data source'],
          pricing: 'Free - $49/month',
          website: 'https://grafana.com',
          icon: <BarChart3 className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        },
        {
          name: 'Sentry',
          description: 'Application monitoring platform that helps developers identify and fix errors in real-time.',
          features: ['Error tracking', 'Performance monitoring', 'Release tracking', 'Issue assignment', 'Integrations'],
          pricing: 'Free - $26/month',
          website: 'https://sentry.io',
          icon: <Bug className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
        }
      ]
    }
  ];

  const learningResources = [
    {
      title: 'Free Learning Platforms',
      resources: [
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org', description: 'Free coding tutorials and certifications' },
        { name: 'The Odin Project', url: 'https://theodinproject.com', description: 'Free full-stack curriculum' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Comprehensive web development documentation' }
      ]
    },
    {
      title: 'Paid Learning Platforms',
      resources: [
        { name: 'Udemy', url: 'https://udemy.com', description: 'Affordable online courses from experts' },
        { name: 'Pluralsight', url: 'https://pluralsight.com', description: 'Professional development courses' },
        { name: 'Frontend Masters', url: 'https://frontendmasters.com', description: 'Advanced frontend development courses' }
      ]
    },
    {
      title: 'Documentation & References',
      resources: [
        { name: 'DevDocs', url: 'https://devdocs.io', description: 'Fast, offline, and free documentation browser' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Q&A community for developers' },
        { name: 'GitHub Guides', url: 'https://guides.github.com', description: 'Git and GitHub tutorials' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Developer Tools & Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive collection of developer tools, IDEs, testing frameworks, databases, and learning resources with real pricing and features." />
        <meta property="og:title" content="Developer Tools & Resources - Zion Tech Group" />
        <meta property="og:description" content="Essential developer tools and resources for building modern applications." />
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
            Developer Resources
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Essential Developer Tools & Resources
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated collection of the most powerful and essential developer tools, frameworks, and learning resources. 
            From free open-source solutions to premium professional tools, find everything you need to build amazing applications.
          </p>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Professional Developer Tools
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hand-picked tools that professional developers use daily. Each tool has been evaluated for features, 
              performance, and value for money.
            </p>
          </div>

          {developerTools.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{category.category}</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <Card
                    key={toolIndex}
                    className={`card-hover border-gradient-blue group ${tool.popular ? 'ring-2 ring-cursor-blue/50' : ''}`}
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (toolIndex * 0.1)}s` }}
                  >
                    {tool.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                          Popular Choice
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {tool.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-cursor-blue">{tool.pricing}</span>
                      </div>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-cursor-blue mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href={tool.website}
                      variant="primary"
                      size="sm"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                      external
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Learning & Development Resources
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Accelerate your learning journey with these carefully selected resources for developers at all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningResources.map((category, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors duration-300">
                      <h4 className="font-semibold text-white mb-2">{resource.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{resource.description}</p>
                      <Button
                        href={resource.url}
                        variant="outline"
                        size="sm"
                        className="w-full"
                        external
                      >
                        Visit Resource
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8">
            Ready to Level Up Your Development Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            These tools and resources can transform your development workflow and accelerate your career growth. 
            Start with the free options and invest in premium tools as you advance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/micro-saas"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Explore Micro SaaS
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              Get Expert Guidance
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}