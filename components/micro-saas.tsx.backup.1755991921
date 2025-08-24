import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ExternalLink, Check, Star, Zap, Shield, Users, Globe, BarChart3, Bot, Cloud, Lock, Database, Code, Palette, Search, Mail, Calendar, CreditCard, FileText, Video, Music, Image, Globe2, Smartphone, Monitor, Server, Cpu, HardDrive, Brain } from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      category: 'Developer Tools',
      services: [
        {
          name: 'Vercel',
          description: 'Deploy, scale, and secure your web applications with zero configuration.',
          features: ['Automatic deployments', 'Edge functions', 'Analytics', 'CDN', 'SSL certificates'],
          pricing: 'Free - $20/month',
          website: 'https://vercel.com',
          icon: <Zap className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-purple-600',
          popular: true
        },
        {
          name: 'Netlify',
          description: 'Build, deploy, and manage modern web projects with continuous deployment.',
          features: ['Git-based workflow', 'Form handling', 'Serverless functions', 'Split testing'],
          pricing: 'Free - $19/month',
          website: 'https://netlify.com',
          icon: <Globe className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-green-500 to-teal-600'
        },
        {
          name: 'Railway',
          description: 'Deploy your code in seconds with automatic scaling and zero configuration.',
          features: ['Auto-scaling', 'Database hosting', 'Custom domains', 'Team collaboration'],
          pricing: '$5/month - $20/month',
          website: 'https://railway.app',
          icon: <Server className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        }
      ]
    },
    {
      category: 'Design & Creative',
      services: [
        {
          name: 'Figma',
          description: 'Collaborative interface design tool for teams building digital products.',
          features: ['Real-time collaboration', 'Design systems', 'Prototyping', 'Developer handoff'],
          pricing: 'Free - $12/month',
          website: 'https://figma.com',
          icon: <Palette className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-purple-500 to-pink-600',
          popular: true
        },
        {
          name: 'Canva',
          description: 'Create professional designs with drag-and-drop simplicity.',
          features: ['Templates library', 'Stock photos', 'Brand kit', 'Team collaboration'],
          pricing: 'Free - $12.99/month',
          website: 'https://canva.com',
          icon: <Image className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        },
        {
          name: 'Notion',
          description: 'All-in-one workspace for notes, docs, projects, and team collaboration.',
          features: ['Templates', 'Database views', 'Real-time editing', 'Integrations'],
          pricing: 'Free - $8/month',
          website: 'https://notion.so',
          icon: <FileText className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-gray-800 to-black'
        }
      ]
    },
    {
      category: 'Marketing & Analytics',
      services: [
        {
          name: 'Mailchimp',
          description: 'Email marketing platform for growing businesses and creators.',
          features: ['Email templates', 'Automation', 'Analytics', 'Audience segmentation'],
          pricing: 'Free - $13/month',
          website: 'https://mailchimp.com',
          icon: <Mail className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
        },
        {
          name: 'Google Analytics',
          description: 'Free web analytics service that tracks and reports website traffic.',
          features: ['Real-time data', 'Audience insights', 'Conversion tracking', 'E-commerce'],
          pricing: 'Free',
          website: 'https://analytics.google.com',
          icon: <BarChart3 className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-green-600',
          popular: true
        },
        {
          name: 'Hotjar',
          description: 'Understand how users behave on your website with heatmaps and recordings.',
          features: ['Heatmaps', 'Session recordings', 'Feedback polls', 'Conversion funnels'],
          pricing: 'Free - $32/month',
          website: 'https://hotjar.com',
          icon: <Search className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-red-500 to-pink-600'
        }
      ]
    },
    {
      category: 'Productivity & Business',
      services: [
        {
          name: 'Stripe',
          description: 'Payment processing platform for internet businesses.',
          features: ['Global payments', 'Subscription billing', 'Fraud prevention', 'Developer APIs'],
          pricing: '2.9% + 30¢ per transaction',
          website: 'https://stripe.com',
          icon: <CreditCard className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-purple-500 to-blue-600',
          popular: true
        },
        {
          name: 'Calendly',
          description: 'Eliminate the back-and-forth emails for scheduling meetings.',
          features: ['Calendar integration', 'Custom booking pages', 'Team scheduling', 'Analytics'],
          pricing: 'Free - $8/month',
          website: 'https://calendly.com',
          icon: <Calendar className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
          name: 'Zapier',
          description: 'Automate workflows by connecting your favorite apps and services.',
          features: ['5,000+ app integrations', 'Multi-step workflows', 'Filters & logic', 'Scheduling'],
          pricing: 'Free - $19.99/month',
          website: 'https://zapier.com',
          icon: <Bot className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        }
      ]
    },
    {
      category: 'AI & Machine Learning',
      services: [
        {
          name: 'OpenAI API',
          description: 'Access to GPT-4, DALL-E, and other advanced AI models.',
          features: ['Text generation', 'Image creation', 'Code assistance', 'Fine-tuning'],
          pricing: '$0.03 per 1K tokens',
          website: 'https://openai.com/api',
          icon: <Cpu className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          popular: true
        },
        {
          name: 'Hugging Face',
          description: 'Platform for machine learning models, datasets, and AI applications.',
          features: ['Model hosting', 'Inference API', 'Dataset management', 'Community models'],
          pricing: 'Free - $9/month',
          website: 'https://huggingface.co',
          icon: <Brain className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
        },
        {
          name: 'Anthropic Claude',
          description: 'AI assistant with advanced reasoning and safety features.',
          features: ['Long context', 'Code generation', 'Document analysis', 'Safety-first approach'],
          pricing: '$15/month',
          website: 'https://claude.ai',
          icon: <Bot className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
        }
      ]
    },
    {
      category: 'Database & Storage',
      services: [
        {
          name: 'Supabase',
          description: 'Open source Firebase alternative with real-time database and auth.',
          features: ['PostgreSQL database', 'Real-time subscriptions', 'Authentication', 'Storage'],
          pricing: 'Free - $25/month',
          website: 'https://supabase.com',
          icon: <Database className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          popular: true
        },
        {
          name: 'PlanetScale',
          description: 'Serverless MySQL platform with branching and zero-downtime deployments.',
          features: ['Database branching', 'Zero-downtime schema changes', 'Connection pooling', 'Insights'],
          pricing: 'Free - $29/month',
          website: 'https://planetscale.com',
          icon: <HardDrive className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-purple-500 to-pink-600'
        },
        {
          name: 'Upstash Redis',
          description: 'Serverless Redis with pay-per-request pricing and global edge locations.',
          features: ['Serverless pricing', 'Global edge', 'REST API', 'Real-time data'],
          pricing: '$0.40 per million requests',
          website: 'https://upstash.com',
          icon: <Server className="w-6 h-6" />,
          color: 'bg-gradient-to-br from-red-500 to-orange-600'
        }
      ]
    }
  ];

  const marketInsights = [
    {
      title: 'Developer Tools Market',
      description: 'Growing at 18% annually with increasing demand for no-code and low-code solutions.',
      trend: '📈 Rising',
      color: 'text-green-400'
    },
    {
      title: 'Design Software',
      description: 'Collaborative design tools are becoming essential for remote teams.',
      trend: '🚀 High Growth',
      color: 'text-blue-400'
    },
    {
      title: 'AI Services',
      description: 'AI APIs and tools are experiencing explosive growth with 300%+ annual increase.',
      trend: '🔥 Explosive',
      color: 'text-orange-400'
    },
    {
      title: 'Payment Processing',
      description: 'Digital payments continue to grow with increasing e-commerce adoption.',
      trend: '💳 Stable Growth',
      color: 'text-purple-400'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover the best micro SaaS services for developers, designers, and businesses. Real pricing, features, and market insights." />
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Curated selection of micro SaaS services with real pricing and market analysis." />
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
            Micro SaaS Directory
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            Essential Micro SaaS Services
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Curated selection of the most valuable micro SaaS tools for developers, designers, and businesses. 
            Real pricing, market insights, and direct links to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Market Trends & Insights
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our analysis of the micro SaaS landscape and emerging opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-blue text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{insight.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${insight.color} bg-gray-800/50`}>
                  {insight.trend}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Curated Micro SaaS Services
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hand-picked services that deliver real value for your business needs. Each service has been evaluated 
              for features, pricing, and market fit.
            </p>
          </div>

          {microSaasServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{category.category}</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className={`card-hover border-gradient-blue group ${service.popular ? 'ring-2 ring-cursor-blue/50' : ''}`}
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (serviceIndex * 0.1)}s` }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium">
                          <Star className="w-3 h-3 mr-1" />
                          Popular Choice
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-cursor-blue">{service.pricing}</span>
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-cursor-blue mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href={service.website}
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8">
            Ready to Optimize Your Tech Stack?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            These micro SaaS services can transform your business operations and boost productivity. 
            Start with the free tiers and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Get Expert Advice
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl"
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}