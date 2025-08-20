import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Globe,
  Rocket
} from 'lucide-react';

export default function ToolComparisonPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('rating');

  const allTools = [
    // AI Tools
    {
      name: 'ChatGPT',
      category: 'AI Assistant',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100M+',
      bestFor: 'Content creators, developers, researchers',
      pros: ['Powerful capabilities', 'Easy to use', 'Regular updates', 'Good free tier'],
      cons: ['Sometimes inaccurate', 'Limited context', 'Privacy concerns'],
      website: 'https://chat.openai.com',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      name: 'Midjourney',
      category: 'AI Art',
      pricing: '$10 - $30/month',
      rating: 4.7,
      users: '1M+',
      bestFor: 'Designers, marketers, content creators',
      pros: ['High-quality output', 'Creative control', 'Commercial rights', 'Active community'],
      cons: ['Discord-only interface', 'Limited customization', 'Monthly subscription'],
      website: 'https://midjourney.com',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      name: 'Jasper',
      category: 'AI Writing',
      pricing: '$39 - $125/month',
      rating: 4.6,
      users: '100K+',
      bestFor: 'Marketing teams, content creators, businesses',
      pros: ['Specialized for marketing', 'Brand voice training', 'SEO optimization', 'Team features'],
      cons: ['Expensive', 'Limited free trial', 'Can be repetitive'],
      website: 'https://jasper.ai',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    // SaaS Tools
    {
      name: 'Zapier',
      category: 'Automation',
      pricing: 'Free - $19.99/month',
      rating: 4.8,
      users: '2M+',
      bestFor: 'Businesses looking to automate workflows',
      pros: ['Easy to use', 'Extensive integrations', 'Reliable', 'Great support'],
      cons: ['Can get expensive', 'Limited customization'],
      website: 'https://zapier.com',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-orange-400'
    },
    {
      name: 'Notion',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      bestFor: 'Teams that need flexible workspace',
      pros: ['Highly flexible', 'Beautiful interface', 'Great templates', 'Free tier'],
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],
      website: 'https://notion.so',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-gray-400'
    },
    {
      name: 'Stripe',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',
      bestFor: 'Online businesses, SaaS companies, e-commerce',
      pros: ['Developer-friendly', 'Global reach', 'Excellent docs', 'Reliable'],
      cons: ['Higher fees than some alternatives', 'Complex for beginners', 'Strict requirements'],
      website: 'https://stripe.com',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    // Startup Tools
    {
      name: 'HubSpot',
      category: 'Marketing & Sales',
      pricing: 'Free - $45/month',
      rating: 4.7,
      users: '135K+',
      bestFor: 'B2B startups, SaaS companies, marketing teams',
      pros: ['Free tier', 'All-in-one solution', 'Great for beginners', 'Excellent support'],
      cons: ['Can get expensive', 'Complex for small teams', 'Limited customization'],
      website: 'https://hubspot.com',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-orange-400'
    },
    {
      name: 'Mailchimp',
      category: 'Email Marketing',
      pricing: 'Free - $59/month',
      rating: 4.5,
      users: '12M+',
      bestFor: 'E-commerce, content creators, small businesses',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited free features', 'Basic automation', 'Can be expensive'],
      website: 'https://mailchimp.com',
      icon: <Users className="w-6 h-6" />,
      color: 'text-yellow-400'
    },
    {
      name: 'Calendly',
      category: 'Productivity',
      pricing: 'Free - $12/month',
      rating: 4.8,
      users: '10M+',
      bestFor: 'Sales teams, consultants, remote teams',
      pros: ['Free tier', 'Easy integration', 'Professional appearance', 'Time-saving'],
      cons: ['Limited free features', 'Basic customization', 'Can be expensive'],
      website: 'https://calendly.com',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-blue-400'
    }
  ];

  const categories = ['All', 'AI Assistant', 'AI Art', 'AI Writing', 'Automation', 'Productivity', 'Payments', 'Marketing & Sales', 'Email Marketing'];

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.bestFor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const getPricingColor = (pricing: string) => {
    if (pricing.includes('Free')) return 'text-green-400';
    if (pricing.includes('$')) return 'text-blue-400';
    return 'text-gray-400';
  };

  return (
    <>
      <Head>
        <title>Tool Comparison - Zion Tech Group</title>
        <meta name="description" content="Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison." />
        <meta property="og:title" content="Tool Comparison - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive comparison of SaaS tools and AI services to help you make informed decisions." />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in">
                <Search className="w-4 h-4 mr-2" />
                Smart Tool Selection
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              Tool Comparison
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Compare SaaS tools, AI services, and business solutions. 
              Make informed decisions with our comprehensive analysis and expert insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#comparison"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
                style={{ animationDelay: '0.2s' }}
              >
                Start Comparing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={{ animationDelay: '0.4s' }}
              >
                Get Expert Advice
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {allTools.length}+
              </div>
              <div className="text-gray-400 text-sm">Tools Analyzed</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                9
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                4.7+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                250M+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools, categories, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="users">Sort by Users</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Tool Comparison
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Compare features, pricing, and user ratings to find the perfect tools for your business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Tool</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Category</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Pricing</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Rating</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Users</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Best For</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedTools.map((tool, index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool.color}`}>
                          {tool.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{tool.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {tool.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`font-medium ${getPricingColor(tool.pricing)}`}>
                        {tool.pricing}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{tool.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-300">{tool.users}</td>
                    <td className="py-4 px-6">
                      <div className="max-w-xs text-sm text-gray-400">{tool.bestFor}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <Button
                          href={tool.website}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Visit
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                        <Button
                          href={`/tool-details/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                        >
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {sortedTools.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Comparison Cards */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Detailed Analysis
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Deep dive into each tool's pros, cons, and use cases to make the best decision for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedTools.slice(0, 6).map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool.color}`}>
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{tool.category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h4>
                  <p className="text-sm text-gray-400">{tool.bestFor}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                      <Check className="w-4 h-4 mr-1" />
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {tool.pros.slice(0, 3).map((pro, proIndex) => (
                        <li key={proIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                      <X className="w-4 h-4 mr-1" />
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {tool.cons.slice(0, 3).map((con, conIndex) => (
                        <li key={conIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                    {tool.pricing}
                  </span>
                  <Button
                    href={tool.website}
                    variant="outline"
                    size="sm"
                    className="group-hover:border-purple-500 group-hover:text-purple-400"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our experts can analyze your business needs and recommend the perfect combination of tools to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl"
            >
              Get Expert Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl"
            >
              Explore All Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}