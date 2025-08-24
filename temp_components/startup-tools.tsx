import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Rocket, 
  DollarSign, 
  Users, 
  BarChart3, 
  Mail, 
  Calendar, 
  Shield, 
  Globe,
  ArrowRight,
  Star,
  Check,
  ExternalLink,
  TrendingUp,
  Zap,
  Target,
  Lightbulb,
  BookOpen
} from 'lucide-react';

export default function StartupToolsPage() {
  const startupTools = [
    {
      name: 'HubSpot',
      description: 'All-in-one inbound marketing, sales, and customer service platform designed to help businesses grow better.',
      category: 'Marketing & Sales',
      pricing: 'Free - $45/month',
      rating: 4.7,
      users: '135K+',
      icon: <Target className="w-8 h-8 text-orange-400" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        'CRM system',
        'Email marketing',
        'Lead generation',
        'Analytics & reporting',
        'Marketing automation',
        'Free tier available'
      ],
      website: 'https://hubspot.com',
      useCase: 'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.',
      pros: ['Free tier', 'All-in-one solution', 'Great for beginners', 'Excellent support'],
      cons: ['Can get expensive', 'Complex for small teams', 'Limited customization'],
      bestFor: 'B2B startups, SaaS companies, marketing teams'
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing platform that helps businesses create, send, and track email campaigns with ease.',
      category: 'Email Marketing',
      pricing: 'Free - $59/month',
      rating: 4.5,
      users: '12M+',
      icon: <Mail className="w-8 h-8 text-yellow-400" />,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      features: [
        'Email templates',
        'Automation workflows',
        'A/B testing',
        'Analytics & reporting',
        'Integration ecosystem',
        'Free tier available'
      ],
      website: 'https://mailchimp.com',
      useCase: 'Ideal for startups that need to build email lists, nurture leads, and communicate with customers.',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited free features', 'Basic automation', 'Can be expensive'],
      bestFor: 'E-commerce, content creators, small businesses'
    },
    {
      name: 'Calendly',
      description: 'Scheduling automation platform that eliminates the back-and-forth of scheduling meetings and calls.',
      category: 'Productivity',
      pricing: 'Free - $12/month',
      rating: 4.8,
      users: '10M+',
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Automated scheduling',
        'Calendar integration',
        'Custom booking pages',
        'Team scheduling',
        'Analytics & reporting',
        'Free tier available'
      ],
      website: 'https://calendly.com',
      useCase: 'Essential for startups that need to schedule sales calls, investor meetings, and team collaborations efficiently.',
      pros: ['Free tier', 'Easy integration', 'Professional appearance', 'Time-saving'],
      cons: ['Limited free features', 'Basic customization', 'Can be expensive'],
      bestFor: 'Sales teams, consultants, remote teams'
    },
    {
      name: 'Canva',
      description: 'Graphic design platform that makes it easy to create professional designs without design skills.',
      category: 'Design',
      pricing: 'Free - $12.99/month',
      rating: 4.6,
      users: '100M+',
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [
        'Design templates',
        'Stock photos & icons',
        'Brand kit',
        'Team collaboration',
        'Social media formats',
        'Free tier available'
      ],
      website: 'https://canva.com',
      useCase: 'Perfect for startups that need to create marketing materials, social media content, and presentations.',
      pros: ['Free tier', 'Easy to use', 'Great templates', 'Affordable'],
      cons: ['Limited customization', 'Watermark on free', 'Basic features'],
      bestFor: 'Marketing teams, content creators, small businesses'
    },
    {
      name: 'Buffer',
      description: 'Social media management platform that helps businesses schedule posts, analyze performance, and manage multiple accounts.',
      category: 'Social Media',
      pricing: 'Free - $15/month',
      rating: 4.4,
      users: '140K+',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Social media scheduling',
        'Analytics & reporting',
        'Team collaboration',
        'Content calendar',
        'Multiple platforms',
        'Free tier available'
      ],
      website: 'https://buffer.com',
      useCase: 'Ideal for startups that want to maintain a consistent social media presence and grow their audience.',
      pros: ['Free tier', 'Easy to use', 'Good analytics', 'Affordable'],
      cons: ['Limited free features', 'Basic scheduling', 'Limited platforms'],
      bestFor: 'Social media managers, small businesses, content creators'
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace for notes, docs, projects, and team collaboration. Organize everything in one place.',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      icon: <Zap className="w-8 h-8 text-gray-400" />,
      color: 'bg-gradient-to-br from-gray-500 to-gray-700',
      features: [
        'Note-taking & docs',
        'Project management',
        'Team collaboration',
        'Database & tables',
        'Templates library',
        'API integration'
      ],
      website: 'https://notion.so',
      useCase: 'Perfect for startup teams that need a flexible workspace for documentation, project management, and knowledge sharing.',
      pros: ['Highly flexible', 'Beautiful interface', 'Great templates', 'Free tier'],
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],
      bestFor: 'Remote teams, project managers, knowledge workers'
    },
    {
      name: 'Stripe',
      description: 'Complete payment processing platform for online businesses. Accept payments, manage subscriptions, and handle compliance.',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Global payment methods',
        'Subscription billing',
        'Fraud protection',
        'Compliance tools',
        'Developer-friendly API',
        'Analytics dashboard'
      ],
      website: 'https://stripe.com',
      useCase: 'Essential for any startup that needs to accept payments, especially SaaS companies and e-commerce businesses.',
      pros: ['Developer-friendly', 'Global reach', 'Excellent docs', 'Reliable'],
      cons: ['Higher fees than some alternatives', 'Complex for beginners', 'Strict requirements'],
      bestFor: 'SaaS companies, e-commerce, online businesses'
    },
    {
      name: 'Intercom',
      description: 'Customer messaging platform that helps businesses build better customer relationships through personalized experiences.',
      category: 'Customer Support',
      pricing: '$39 - $999/month',
      rating: 4.6,
      users: '25K+',
      icon: <Users className="w-8 h-8 text-green-400" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Live chat',
        'Customer messaging',
        'Help desk',
        'User onboarding',
        'Analytics & reporting',
        'Integration ecosystem'
      ],
      website: 'https://intercom.com',
      useCase: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
      pros: ['Great UX', 'Powerful features', 'Good integrations', 'Mobile apps'],
      cons: ['Expensive', 'Complex pricing', 'Can be overwhelming'],
      bestFor: 'SaaS companies, online businesses, customer support teams'
    },
    {
      name: 'Mixpanel',
      description: 'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.',
      category: 'Analytics',
      pricing: 'Free - $25/month',
      rating: 4.5,
      users: '26K+',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: [
        'User behavior tracking',
        'Funnel analysis',
        'A/B testing',
        'Real-time data',
        'Custom events',
        'Mobile analytics'
      ],
      website: 'https://mixpanel.com',
      useCase: 'Essential for product teams that need to understand user behavior, optimize conversion funnels, and make data-driven decisions.',
      pros: ['Powerful analytics', 'Real-time data', 'Good documentation', 'Flexible'],
      cons: ['Complex setup', 'Expensive at scale', 'Steep learning curve'],
      bestFor: 'Product teams, growth hackers, data analysts'
    },
    {
      name: 'Vercel',
      description: 'Platform for deploying and hosting frontend applications with automatic scaling, global CDN, and zero configuration.',
      category: 'Development',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100K+',
      icon: <Rocket className="w-8 h-8 text-black" />,
      color: 'bg-gradient-to-br from-gray-800 to-black',
      features: [
        'Zero-config deployment',
        'Global CDN',
        'Automatic scaling',
        'Git integration',
        'Preview deployments',
        'Edge functions'
      ],
      website: 'https://vercel.com',
      useCase: 'Ideal for startup development teams that want to deploy modern web applications quickly with excellent performance.',
      pros: ['Zero config', 'Excellent performance', 'Great DX', 'Free tier'],
      cons: ['Limited backend features', 'Can be expensive for high traffic', 'Vendor lock-in'],
      bestFor: 'Frontend developers, startup teams, modern web apps'
    }
  ];

  const categories = ['All', 'Marketing & Sales', 'Email Marketing', 'Productivity', 'Design', 'Social Media', 'Payments', 'Customer Support', 'Analytics', 'Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? startupTools 
    : startupTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Startup Tools & Resources - Zion Tech Group</title>
        <meta name="description" content="Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow." />
        <meta property="og:title" content="Startup Tools & Resources - Zion Tech Group" />
        <meta property="og:description" content="Essential tools and resources for startups and entrepreneurs to accelerate growth." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-scale-in">
                <Rocket className="w-4 h-4 mr-2" />
                Startup Growth Tools
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              Startup Tools & Resources
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Essential tools and resources to help your startup grow faster. 
              Expert-curated selection of SaaS services for entrepreneurs and growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#tools"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40"
                style={{ animationDelay: '0.2s' }}
              >
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={{ animationDelay: '0.4s' }}
              >
                Get Startup Advice
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                {startupTools.length}+
              </div>
              <div className="text-gray-400 text-sm">Essential Tools</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                10
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                4.6+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                130M+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              {selectedCategory === 'All' ? 'All Startup Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {selectedCategory === 'All' 
                ? 'Discover the essential tools that successful startups use to grow and scale their businesses.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to accelerate your startup's growth.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-orange-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{tool.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{tool.category}</span>
                      <span>{tool.users} users</span>
                      <span className="text-green-400">{tool.pricing}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-4">
                      {tool.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {tool.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h4>
                      <p className="text-sm text-gray-400">{tool.bestFor}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button
                        href={tool.website}
                        variant="outline"
                        size="sm"
                        className="group-hover:border-orange-500 group-hover:text-orange-400"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>
                        <div className="text-sm text-gray-300 max-w-xs">{tool.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Resources Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Additional Startup Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Beyond tools, here are additional resources to help your startup succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Startup Communities</h3>
              <p className="text-gray-400 mb-4">
                Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups.
              </p>
              <Button href="https://www.startupschool.org" variant="outline" size="sm">
                Explore Communities
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Educational Resources</h3>
              <p className="text-gray-400 mb-4">
                Access free courses from platforms like Coursera, edX, and startup-specific learning resources.
              </p>
              <Button href="https://www.coursera.org" variant="outline" size="sm">
                Start Learning
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Growth Strategies</h3>
              <p className="text-gray-400 mb-4">
                Learn proven growth strategies from successful entrepreneurs and growth hackers.
              </p>
              <Button href="/resources" variant="outline" size="sm">
                View Resources
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our startup experts can help you choose the right tools, implement growth strategies, and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl"
            >
              Get Startup Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600 shadow-2xl"
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}