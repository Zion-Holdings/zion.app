import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Sparkles, FileText, Zap, CheckCircle, ArrowRight, Copy, RefreshCw } from 'lucide-react';

export default function AIContentGeneratorPage() {
  const [contentType, setContentType] = useState('blog-post');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const contentTypes = [
    { id: 'blog-post', name: 'Blog Post', icon: '📝', description: 'Engaging blog content with SEO optimization' },
    { id: 'social-media', name: 'Social Media', icon: '📱', description: 'Captivating social media posts' },
    { id: 'email', name: 'Email Campaign', icon: '📧', description: 'Professional email marketing content' },
    { id: 'product-description', name: 'Product Description', icon: '🛍️', description: 'Compelling product descriptions' },
    { id: 'landing-page', name: 'Landing Page', icon: '🎯', description: 'High-converting landing page copy' },
    { id: 'press-release', name: 'Press Release', icon: '📰', description: 'Newsworthy press releases' }
  ];

  const tones = [
    { id: 'professional', name: 'Professional', description: 'Formal and business-like' },
    { id: 'casual', name: 'Casual', description: 'Friendly and approachable' },
    { id: 'creative', name: 'Creative', description: 'Imaginative and engaging' },
    { id: 'technical', name: 'Technical', description: 'Detailed and informative' },
    { id: 'persuasive', name: 'Persuasive', description: 'Convincing and compelling' }
  ];

  const lengths = [
    { id: 'short', name: 'Short', description: '100-200 words' },
    { id: 'medium', name: 'Medium', description: '300-500 words' },
    { id: 'long', name: 'Long', description: '800-1200 words' }
  ];

  const generateContent = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI content generation with realistic content
    setTimeout(() => {
      const content = generateSampleContent(contentType, topic, tone, length);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000);
  };

  const generateSampleContent = (type: string, topic: string, tone: string, length: string) => {
    const baseContent = {
      'blog-post': `# ${topic}: A Comprehensive Guide

In today's rapidly evolving digital landscape, ${topic} has emerged as a critical factor for business success. This comprehensive guide explores the key aspects, benefits, and implementation strategies that can transform your approach.

## Why ${topic} Matters

The importance of ${topic} cannot be overstated in our interconnected world. Organizations that embrace this concept are seeing remarkable improvements in efficiency, customer satisfaction, and overall performance.

## Key Benefits

- **Enhanced Efficiency**: Streamlined processes and optimized workflows
- **Improved Decision Making**: Data-driven insights and strategic clarity
- **Cost Reduction**: Significant savings through automation and optimization
- **Competitive Advantage**: Staying ahead in an increasingly competitive market

## Implementation Strategies

Successfully implementing ${topic} requires a strategic approach that considers your organization's unique needs and challenges. Start with a comprehensive assessment, develop a clear roadmap, and ensure buy-in from all stakeholders.

## Best Practices

1. **Start Small**: Begin with pilot projects to demonstrate value
2. **Measure Everything**: Track key metrics and KPIs consistently
3. **Iterate and Improve**: Continuously refine your approach based on results
4. **Train Your Team**: Invest in education and skill development

## Conclusion

${topic} represents a fundamental shift in how we approach business challenges and opportunities. By embracing these principles and implementing proven strategies, you can position your organization for long-term success in an ever-changing landscape.`,
      
      'social-media': `🚀 Exciting news! We're diving deep into ${topic} and the results are incredible!

💡 Here's what we discovered:
• Game-changing insights that will transform your approach
• Practical strategies you can implement today
• Real-world examples of success

🔥 Ready to level up? Drop a comment below with your biggest challenge around ${topic} and we'll share personalized tips!

#${topic.replace(/\s+/g, '')} #Innovation #Growth #Success`,
      
      'email': `Subject: Transform Your Business with ${topic}

Hi [First Name],

I hope this email finds you well. I wanted to share some exciting insights about ${topic} that could significantly impact your business results.

**The Challenge**
Many organizations struggle with ${topic}, often resulting in missed opportunities and unnecessary costs.

**The Solution**
Our proven approach to ${topic} has helped companies achieve:
• 40% improvement in efficiency
• 25% reduction in operational costs
• Enhanced customer satisfaction scores

**What's Next?**
I'd love to schedule a brief call to discuss how ${topic} could benefit your specific situation. Would you be available for a 15-minute conversation this week?

Best regards,
[Your Name]

P.S. If you're interested in learning more right now, check out our comprehensive guide on ${topic}.`,
      
      'product-description': `**${topic} - Transform Your Experience**

Discover the revolutionary ${topic} that's changing how businesses operate and succeed in today's competitive landscape.

**What Makes It Special**
Our ${topic} solution combines cutting-edge technology with proven methodologies to deliver results that exceed expectations. Built by industry experts with decades of experience, it's designed to scale with your business needs.

**Key Features**
✅ Advanced automation capabilities
✅ Real-time analytics and insights
✅ Seamless integration with existing systems
✅ 24/7 support and maintenance
✅ Enterprise-grade security

**Perfect For**
• Growing businesses seeking efficiency gains
• Organizations looking to modernize operations
• Teams wanting to focus on strategic initiatives
• Companies prioritizing customer experience

**Get Started Today**
Join thousands of satisfied customers who have transformed their business with ${topic}. Start your journey toward operational excellence and sustainable growth.`,
      
      'landing-page': `# Transform Your Business with ${topic}

## The Future of Business Success Starts Here

**Stop struggling with outdated processes. Start thriving with ${topic}.**

Our revolutionary ${topic} platform has helped 10,000+ businesses achieve remarkable results:
- 🚀 3x faster operations
- 💰 40% cost reduction
- 📈 60% improvement in customer satisfaction

## Why Choose Our ${topic} Solution?

**Proven Results**
Real businesses, real results. Our customers see measurable improvements within 30 days.

**Expert Support**
Dedicated specialists guide you through every step of your transformation journey.

**Flexible Implementation**
Start small and scale up. Our modular approach fits your timeline and budget.

## Ready to Get Started?

Join the revolution and transform your business today. Limited-time offer: 30-day free trial with full access to all features.

[Start Free Trial] [Schedule Demo]`,
      
      'press-release': `**FOR IMMEDIATE RELEASE**

**Zion Tech Group Launches Revolutionary ${topic} Platform**

*Innovative solution addresses critical business challenges and drives unprecedented growth*

[City, State] - [Date] - Zion Tech Group, a leading technology innovation company, today announced the launch of its groundbreaking ${topic} platform, designed to transform how businesses operate and compete in the digital age.

**Revolutionary Approach**
The new ${topic} platform represents a paradigm shift in business technology, combining artificial intelligence, advanced automation, and predictive analytics to deliver results that were previously unimaginable.

**Key Features and Benefits**
- Advanced AI-powered automation
- Real-time performance monitoring
- Predictive analytics and insights
- Seamless integration capabilities
- Enterprise-grade security

**Industry Impact**
"${topic} is not just another technology solution - it's a fundamental reimagining of how businesses can operate," said [Executive Name], CEO of Zion Tech Group. "We're excited to see how our customers will use this platform to achieve breakthrough results."

**Availability**
The ${topic} platform is now available for immediate deployment. For more information, visit [website] or contact [contact information].

**About Zion Tech Group**
Zion Tech Group is a leading provider of innovative technology solutions that help businesses thrive in the digital economy. With a focus on AI, automation, and cloud infrastructure, the company serves clients worldwide.

**Media Contact**
[Contact Name]
[Company Name]
[Phone]
[Email]`
    };

    const content = baseContent[type as keyof typeof baseContent] || baseContent['blog-post'];
    
    // Adjust content length based on selection
    if (length === 'short') {
      return content.split('\n\n').slice(0, 3).join('\n\n');
    } else if (length === 'medium') {
      return content;
    } else {
      // Add more content for long version
      return content + '\n\n## Additional Insights\n\n' + 
        'This extended version provides deeper insights and more comprehensive coverage of the topic. ' +
        'We explore advanced strategies, case studies, and expert opinions to give you the most complete understanding possible.';
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  return (
    <>
      <Head>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality, engaging content with our AI-powered content generator. Create blog posts, social media content, emails, and more in seconds." />
        <meta property="og:title" content="AI Content Generator - Zion Tech Group" />
        <meta property="og:description" content="Generate high-quality, engaging content with our AI-powered content generator." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Content Creation
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            AI Content Generator
          </h1>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Create engaging, high-quality content in seconds with our advanced AI-powered content generator. 
            From blog posts to social media content, emails to product descriptions - we've got you covered.
          </p>
        </div>
      </section>

      {/* Content Generator Tool */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Generate Content in Seconds
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI understands context, tone, and style to create content that resonates with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-purple-400" />
                Content Settings
              </h3>

              <div className="space-y-6">
                {/* Content Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Content Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {contentTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setContentType(type.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          contentType === type.id
                            ? 'border-purple-500 bg-purple-500/10 text-purple-300'
                            : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="font-medium">{type.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Topic or Subject
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Digital Transformation, AI in Healthcare, Remote Work Strategies"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Tone and Length */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tone
                    </label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {tones.map((t) => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Length
                    </label>
                    <select
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {lengths.map((l) => (
                        <option key={l.id} value={l.id}>{l.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button
                  onClick={generateContent}
                  disabled={!topic.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Generating Content...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Generated Content */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                  Generated Content
                </h3>
                {generatedContent && (
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                )}
              </div>

              {generatedContent ? (
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 max-h-96 overflow-y-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>
              ) : (
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-gray-400">
                    Your AI-generated content will appear here. Fill out the form and click generate to get started.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Content Generator?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI technology combined with human creativity to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400">
                Generate high-quality content in seconds, not hours. Our AI works at incredible speed.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Context Aware</h3>
              <p className="text-gray-400">
                AI that understands your topic, industry, and audience to create relevant content.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-4">Multiple Formats</h3>
              <p className="text-gray-400">
                Blog posts, social media, emails, product descriptions, and more - all in one tool.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your content and data are secure. We never store or share your generated content.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Optimized</h3>
              <p className="text-gray-400">
                Create content on any device. Our tool works perfectly on desktop, tablet, and mobile.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Endless Iterations</h3>
              <p className="text-gray-400">
                Generate multiple versions and refine until you get the perfect content for your needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of content creators, marketers, and businesses who are already using our AI content generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}