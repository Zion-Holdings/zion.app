import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Sparkles, FileText, Zap, CheckCircle, ArrowRight, Brain, Clock, Target } from 'lucide-react';

export default function AIContentGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI-Powered Generation',
      description: 'Advanced language models trained on millions of high-quality articles and documents.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500',
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'SEO Optimized',
      description: 'Content automatically optimized for search engines with keyword integration and meta descriptions.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: 'Lightning Fast',
      description: 'Generate professional content in seconds, not hours. Save time and boost productivity.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Multiple Formats',
      description: 'Blog posts, articles, product descriptions, social media content, and more.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
    },
  ];

  const useCases = [
    {
      title: 'Content Marketing',
      description: 'Generate blog posts, articles, and social media content that engages your audience.',
      examples: ['Blog posts', 'Newsletters', 'Social media updates', 'Email campaigns']
    },
    {
      title: 'E-commerce',
      description: 'Create compelling product descriptions and category content that converts visitors.',
      examples: ['Product descriptions', 'Category pages', 'Landing pages', 'Ad copy']
    },
    {
      title: 'Business Communication',
      description: 'Generate professional emails, reports, and business documents.',
      examples: ['Business proposals', 'Reports', 'Presentations', 'Client communications']
    },
    {
      title: 'Technical Writing',
      description: 'Create technical documentation, user guides, and API documentation.',
      examples: ['User manuals', 'API docs', 'Technical guides', 'Tutorials']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '100 content generations/month',
        'Basic AI models',
        'SEO optimization',
        'Email support',
        '5 content templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '500 content generations/month',
        'Advanced AI models',
        'Advanced SEO tools',
        'Priority support',
        '25+ content templates',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited generations',
        'Premium AI models',
        'Custom AI training',
        '24/7 dedicated support',
        'Custom templates',
        'Advanced analytics',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      setGeneratedContent(`# AI-Generated Content Sample

## Introduction
This is a sample of AI-generated content that demonstrates the capabilities of our advanced language models. The content is optimized for SEO, engaging for readers, and ready for immediate use.

## Key Benefits
- **SEO Optimized**: Automatically includes relevant keywords and meta descriptions
- **Engaging**: Written to capture and maintain reader attention
- **Professional**: Maintains high quality and professional tone
- **Customizable**: Easily adaptable to your specific needs and brand voice

## How It Works
Our AI analyzes your input, researches relevant topics, and generates content that matches your requirements. The system continuously learns and improves to deliver better results over time.

## Get Started Today
Transform your content creation process with AI-powered generation that saves time while maintaining quality.`);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>AI Content Generator - Zion Tech Group | Professional Content Creation Tool</title>
        <meta name="description" content="Generate high-quality, SEO-optimized content in seconds with our AI-powered content generator. Perfect for blogs, marketing, and business communication." />
        <meta property="og:title" content="AI Content Generator - Zion Tech Group" />
        <meta property="og:description" content="Professional AI content generation tool for blogs, marketing, and business communication." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        <div className="relative z-10 container-cursor text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Content Generation
          </div>
          <h1 className="text-responsive-xl font-black mb-8 gradient-text text-shadow-lg">
            AI Content Generator
          </h1>
          <p className="text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Transform your content creation with AI-powered generation that produces high-quality, SEO-optimized content in seconds. 
            Save time, boost productivity, and maintain consistent quality across all your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleGenerateContent}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-2xl hover-glow"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Try AI Generator
                </>
              )}
            </Button>
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white shadow-2xl"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Powerful Features
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our AI content generator combines cutting-edge technology with user-friendly features to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-purple"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Use Cases
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover how our AI content generator can transform various aspects of your business and content strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="card-hover border-gradient-purple"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      {generatedContent && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
                Generated Content Sample
              </h2>
              <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Here's a sample of AI-generated content. The actual output will be tailored to your specific requirements.
              </p>
            </div>
            
            <Card className="border-gradient-purple">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: generatedContent.replace(/\n/g, '<br/>').replace(/# (.*)/g, '<h1>$1</h1>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              Simple Pricing
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that best fits your content generation needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`card-hover border-gradient-purple ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-responsive-md text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses using AI to create better content faster. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}