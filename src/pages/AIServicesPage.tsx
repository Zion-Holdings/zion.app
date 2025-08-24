import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Bot, 
  BarChart3, 
  Code, 
  MessageSquare, 
  Zap, 
  Shield, 
  Globe,
  Database,
  Server,
  Eye,
  TrendingUp,
  Users,
  Lock,
  Palette,
  Search,
  FileText,
  Video,
  Music,
  Camera
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AI_SERVICES = [
  {
    id: 'ai-development',
    title: 'AI Development & Integration',
    description: 'Custom AI solutions development, model training, and system integration',
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    features: ['Custom ML Models', 'API Integration', 'Model Training', 'Performance Optimization'],
    pricing: { starting: '$5,000', average: '$15,000', enterprise: '$50,000+' },
    category: 'Development',
    badge: 'Popular',
    link: '/services/ai-development'
  },
  {
    id: 'ai-automation',
    title: 'AI Process Automation',
    description: 'Intelligent automation for business processes and workflows',
    icon: <Bot className="h-8 w-8 text-green-500" />,
    features: ['Workflow Automation', 'Document Processing', 'Customer Service Bots', 'Process Optimization'],
    pricing: { starting: '$3,000', average: '$12,000', enterprise: '$35,000+' },
    category: 'Automation',
    badge: 'Trending',
    link: '/services/ai-automation'
  },
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics and business intelligence with AI insights',
    icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
    features: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Real-time Insights'],
    pricing: { starting: '$4,500', average: '$18,000', enterprise: '$45,000+' },
    category: 'Analytics',
    badge: 'Featured',
    link: '/services/ai-analytics'
  },
  {
    id: 'ai-chatbots',
    title: 'Intelligent Chatbots',
    description: 'AI-powered conversational agents for customer engagement',
    icon: <MessageSquare className="h-8 w-8 text-cyan-500" />,
    features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: { starting: '$2,500', average: '$8,000', enterprise: '$25,000+' },
    category: 'Communication',
    badge: 'Best Value',
    link: '/services/ai-chatbots'
  },
  {
    id: 'ai-security',
    title: 'AI Cybersecurity',
    description: 'Intelligent threat detection and security automation',
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Security Monitoring'],
    pricing: { starting: '$6,000', average: '$20,000', enterprise: '$60,000+' },
    category: 'Security',
    badge: 'Critical',
    link: '/services/ai-security'
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing and communication',
    icon: <FileText className="h-8 w-8 text-orange-500" />,
    features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
    pricing: { starting: '$1,500', average: '$6,000', enterprise: '$20,000+' },
    category: 'Content',
    badge: 'New',
    link: '/services/ai-content-generation'
  },
  {
    id: 'ai-video-processing',
    title: 'AI Video Processing',
    description: 'Intelligent video editing, analysis, and enhancement',
    icon: <Video className="h-8 w-8 text-pink-500" />,
    features: ['Video Enhancement', 'Object Detection', 'Auto-editing', 'Content Moderation'],
    pricing: { starting: '$3,500', average: '$14,000', enterprise: '$40,000+' },
    category: 'Media',
    badge: 'Innovative',
    link: '/services/ai-video-processing'
  },
  {
    id: 'ai-data-processing',
    title: 'AI Data Processing',
    description: 'Intelligent data cleaning, transformation, and enrichment',
    icon: <Database className="h-8 w-8 text-indigo-500" />,
    features: ['Data Cleaning', 'ETL Pipelines', 'Data Enrichment', 'Quality Assurance'],
    pricing: { starting: '$4,000', average: '$16,000', enterprise: '$45,000+' },
    category: 'Data',
    badge: 'Essential',
    link: '/services/ai-data-processing'
  },
  {
    id: 'ai-recommendation-engines',
    title: 'AI Recommendation Systems',
    description: 'Personalized recommendation engines for products and content',
    icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
    features: ['Personalization', 'A/B Testing', 'Performance Analytics', 'Multi-channel Support'],
    pricing: { starting: '$5,500', average: '$22,000', enterprise: '$55,000+' },
    category: 'Personalization',
    badge: 'Premium',
    link: '/services/ai-recommendation-engines'
  },
  {
    id: 'ai-computer-vision',
    title: 'AI Computer Vision',
    description: 'Advanced image and video analysis capabilities',
    icon: <Eye className="h-8 w-8 text-teal-500" />,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Inspection'],
    pricing: { starting: '$7,000', average: '$25,000', enterprise: '$70,000+' },
    category: 'Vision',
    badge: 'Advanced',
    link: '/services/ai-computer-vision'
  },
  {
    id: 'ai-nlp-services',
    title: 'AI Natural Language Processing',
    description: 'Text analysis, translation, and language understanding',
    icon: <Search className="h-8 w-8 text-yellow-500" />,
    features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Entity Extraction'],
    pricing: { starting: '$4,500', average: '$18,000', enterprise: '$50,000+' },
    category: 'Language',
    badge: 'Popular',
    link: '/services/ai-nlp-services'
  },
  {
    id: 'ai-iot-solutions',
    title: 'AI IoT Solutions',
    description: 'Intelligent Internet of Things integration and management',
    icon: <Server className="h-8 w-8 text-gray-500" />,
    features: ['Device Management', 'Predictive Maintenance', 'Data Analytics', 'Edge Computing'],
    pricing: { starting: '$8,000', average: '$30,000', enterprise: '$80,000+' },
    category: 'IoT',
    badge: 'Enterprise',
    link: '/services/ai-iot-solutions'
  }
];

const AI_SERVICE_CATEGORIES = [
  { name: 'Development', count: 3, color: 'bg-blue-500' },
  { name: 'Automation', count: 2, color: 'bg-green-500' },
  { name: 'Analytics', count: 2, color: 'bg-purple-500' },
  { name: 'Security', count: 1, color: 'bg-red-500' },
  { name: 'Content', count: 2, color: 'bg-orange-500' },
  { name: 'Media', count: 1, color: 'bg-pink-500' },
  { name: 'Data', count: 2, color: 'bg-indigo-500' },
  { name: 'Vision', count: 1, color: 'bg-teal-500' },
  { name: 'Language', count: 1, color: 'bg-yellow-500' },
  { name: 'IoT', count: 1, color: 'bg-gray-500' }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="AI Services & Solutions - Zion Tech Group" 
        description="Comprehensive AI services including development, automation, analytics, chatbots, security, and more. Expert AI solutions for businesses."
        keywords="AI services, artificial intelligence, machine learning, AI development, AI automation, AI analytics, AI chatbots, AI security"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence services. 
            From development to deployment, we provide comprehensive AI solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Get AI Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Consult with Experts</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">AI Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {AI_SERVICE_CATEGORIES.map((category) => (
              <div key={category.name} className="text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <p className="text-zion-cyan font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive AI Solutions</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Choose from our extensive range of AI services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_SERVICES.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    {service.icon}
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan/80">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                    <div className="text-sm text-zion-cyan/70 space-y-1">
                      <p>Starting: {service.pricing.starting}</p>
                      <p>Average: {service.pricing.average}</p>
                      <p>Enterprise: {service.pricing.enterprise}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our AI experts are ready to help you implement cutting-edge solutions that drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Request Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}