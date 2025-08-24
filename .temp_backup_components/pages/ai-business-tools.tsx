import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Brain, 
  MessageSquare, 
  Image, 
  Video, 
  FileText, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  Star,
  Check,
  ExternalLink,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

export default function AIBusinessToolsPage() {
  const aiTools = [
    {
      name: 'ChatGPT',
      description: 'Advanced AI language model that can help with writing, analysis, coding, and creative tasks. Perfect for content creation and problem-solving.',
      category: 'AI Assistant',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100M+',
      icon: <Brain className="w-8 h-8 text-green-400" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Natural language processing',
        'Code generation & debugging',
        'Content creation',
        'Data analysis',
        'Creative writing',
        'Multi-language support'
      ],
      website: 'https://chat.openai.com',
      useCase: 'Ideal for writers, developers, researchers, and anyone who needs AI assistance with complex tasks.',
      pros: ['Powerful capabilities', 'Easy to use', 'Regular updates', 'Good free tier'],
      cons: ['Sometimes inaccurate', 'Limited context', 'Privacy concerns'],
      bestFor: 'Content creators, developers, researchers'
    },
    {
      name: 'Midjourney',
      description: 'AI-powered image generation tool that creates stunning artwork, illustrations, and designs from text descriptions.',
      category: 'AI Art',
      pricing: '$10 - $30/month',
      rating: 4.7,
      users: '1M+',
      icon: <Image className="w-8 h-8 text-purple-400" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: [
        'Text-to-image generation',
        'High-resolution output',
        'Artistic styles',
        'Commercial usage rights',
        'Community features',
        'Discord integration'
      ],
      website: 'https://midjourney.com',
      useCase: 'Perfect for designers, marketers, content creators, and businesses needing custom visual content.',
      pros: ['High-quality output', 'Creative control', 'Commercial rights', 'Active community'],
      cons: ['Discord-only interface', 'Limited customization', 'Monthly subscription'],
      bestFor: 'Designers, marketers, content creators'
    },
    {
      name: 'Jasper',
      description: 'AI writing assistant that helps create marketing copy, blog posts, social media content, and more.',
      category: 'AI Writing',
      pricing: '$39 - $125/month',
      rating: 4.6,
      users: '100K+',
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Marketing copy generation',
        'Blog post writing',
        'Social media content',
        'SEO optimization',
        'Brand voice training',
        'Team collaboration'
      ],
      website: 'https://jasper.ai',
      useCase: 'Essential for marketing teams, content creators, and businesses that need high-quality written content at scale.',
      pros: ['Specialized for marketing', 'Brand voice training', 'SEO optimization', 'Team features'],
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],
      bestFor: 'Marketing teams, content creators, businesses'
    },
    {
      name: 'Synthesia',
      description: 'AI video generation platform that creates professional videos with AI avatars and voice synthesis.',
      category: 'AI Video',
      pricing: '$30 - $89/month',
      rating: 4.5,
      users: '50K+',
      icon: <Video className="w-8 h-8 text-red-400" />,
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      features: [
        'AI avatar generation',
        'Text-to-speech',
        'Video templates',
        'Multi-language support',
        'Custom branding',
        'API access'
      ],
      website: 'https://synthesia.io',
      useCase: 'Perfect for creating training videos, marketing content, and presentations without hiring actors or video crews.',
      pros: ['Professional quality', 'Multiple languages', 'Custom avatars', 'Easy to use'],
      cons: ['Limited avatar options', 'Expensive', 'Subscription required'],
      bestFor: 'Training departments, marketers, educators'
    },
    {
      name: 'Copy.ai',
      description: 'AI copywriting tool that generates marketing copy, product descriptions, and creative content for businesses.',
      category: 'AI Copywriting',
      pricing: 'Free - $49/month',
      rating: 4.4,
      users: '200K+',
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        'Marketing copy generation',
        'Product descriptions',
        'Social media posts',
        'Email campaigns',
        'Blog content',
        'Free tier available'
      ],
      website: 'https://copy.ai',
      useCase: 'Great for small businesses, entrepreneurs, and marketers who need quality copy without hiring writers.',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited customization', 'Quality varies', 'Basic features'],
      bestFor: 'Small businesses, entrepreneurs, marketers'
    },
    {
      name: 'Grammarly',
      description: 'AI-powered writing assistant that checks grammar, spelling, tone, and style to improve your writing.',
      category: 'AI Writing',
      pricing: 'Free - $12/month',
      rating: 4.7,
      users: '30M+',
      icon: <Check className="w-8 h-8 text-green-400" />,
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      features: [
        'Grammar & spelling check',
        'Tone analysis',
        'Style suggestions',
        'Plagiarism detection',
        'Browser extension',
        'Mobile apps'
      ],
      website: 'https://grammarly.com',
      useCase: 'Essential for anyone who writes professionally, including students, professionals, and content creators.',
      pros: ['Excellent accuracy', 'Multiple platforms', 'Free tier', 'User-friendly'],
      cons: ['Limited free features', 'Privacy concerns', 'Can be overzealous'],
      bestFor: 'Students, professionals, content creators'
    },
    {
      name: 'Lumen5',
      description: 'AI video maker that transforms text content into engaging videos for social media and marketing.',
      category: 'AI Video',
      pricing: 'Free - $79/month',
      rating: 4.3,
      users: '100K+',
      icon: <Video className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [
        'Text-to-video conversion',
        'Video templates',
        'Music library',
        'Brand customization',
        'Social media formats',
        'Free tier available'
      ],
      website: 'https://lumen5.com',
      useCase: 'Perfect for marketers, social media managers, and businesses that want to create video content from existing text.',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited customization', 'Basic features', 'Watermark on free'],
      bestFor: 'Marketers, social media managers, small businesses'
    },
    {
      name: 'Surfer SEO',
      description: 'AI-powered SEO tool that helps optimize content for search engines using data-driven insights.',
      category: 'AI SEO',
      pricing: '$59 - $199/month',
      rating: 4.6,
      users: '25K+',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Content optimization',
        'Keyword research',
        'Competitor analysis',
        'SERP analysis',
        'Content editor',
        'Rank tracking'
      ],
      website: 'https://surferseo.com',
      useCase: 'Essential for content marketers, SEO specialists, and businesses that want to improve their search rankings.',
      pros: ['Data-driven insights', 'Content optimization', 'Competitor analysis', 'Good support'],
      cons: ['Expensive', 'Complex interface', 'Steep learning curve'],
      bestFor: 'SEO specialists, content marketers, businesses'
    }
  ];

  const categories = ['All', 'AI Assistant', 'AI Art', 'AI Writing', 'AI Video', 'AI Copywriting', 'AI SEO'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>AI Business Tools - Zion Tech Group</title>
        <meta name="description" content="Discover the best AI-powered business tools for automation, content creation, and productivity. Expert-curated selection of AI SaaS services." />
        <meta property="og:title" content="AI Business Tools - Zion Tech Group" />
        <meta property="og:description" content="Expert-curated selection of AI-powered business tools and SaaS services." />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 animate-scale-in">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Business Solutions
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              AI Business Tools
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Transform your business with cutting-edge AI tools. 
              Expert-curated selection of the best AI-powered SaaS services for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#tools"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-green-500/25 hover:shadow-green-500/40"
                style={{ animationDelay: '0.2s' }}
              >
                Explore AI Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={{ animationDelay: '0.4s' }}
              >
                Get AI Consultation
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                {aiTools.length}+
              </div>
              <div className="text-gray-400 text-sm">AI Tools</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                4.6+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
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
                    ? 'bg-green-600 text-white shadow-lg'
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
              {selectedCategory === 'All' ? 'All AI Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {selectedCategory === 'All' 
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
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
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
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
                        className="group-hover:border-green-500 group-hover:text-green-400"
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

      {/* AI Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Why Choose AI Tools?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              AI-powered tools are revolutionizing how businesses operate, create content, and serve customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">10x Productivity</h3>
              <p className="text-gray-400">
                AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data-Driven Decisions</h3>
              <p className="text-gray-400">
                AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision-making.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Enhanced Customer Experience</h3>
              <p className="text-gray-400">
                AI-powered chatbots, personalization, and automation create seamless, personalized experiences for your customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our AI experts can help you identify the right tools, implement them effectively, and maximize their impact on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
            >
              Get AI Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}