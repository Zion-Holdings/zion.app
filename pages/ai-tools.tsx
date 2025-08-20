import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Bot, 
  Brain, 
  MessageSquare, 
  Image, 
  Video, 
  FileText, 
  BarChart3, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Play,
  BookOpen,
  Github,
  Sparkles,
  Cpu,
  Eye,
  Mic,
  Palette
} from 'lucide-react';

export default function AiToolsPage() {
  const aiTools = [
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AutoGPT Studio - Autonomous AI Agents',
      description: 'Create and deploy intelligent AI agents that can autonomously complete complex tasks and workflows.',
      features: [
        'Visual agent builder with drag-and-drop interface',
        'Multi-step task automation and planning',
        'Integration with 100+ business tools and APIs',
        'Custom knowledge base and training data',
        'Real-time monitoring and performance analytics'
      ],
      pricing: {
        free: '5 agents/month',
        pro: '$99/month',
        enterprise: 'Custom'
      },
      category: 'Automation',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      website: 'https://autogpt.studio',
      demo: 'https://demo.autogpt.studio',
      github: 'https://github.com/autogpt-studio',
      status: 'Live',
      users: '8,500+',
      rating: 4.9,
      accuracy: '95%'
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'NeuralFlow - Custom AI Model Training',
      description: 'Train and deploy custom AI models for your specific business needs with enterprise-grade infrastructure.',
      features: [
        'No-code model training interface',
        'Support for multiple AI frameworks (PyTorch, TensorFlow)',
        'Automated hyperparameter optimization',
        'Model versioning and deployment management',
        'Real-time model performance monitoring'
      ],
      pricing: {
        free: '1 model/month',
        pro: '$199/month',
        enterprise: 'Custom'
      },
      category: 'Training',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      gradient: 'from-purple-400 to-pink-500',
      website: 'https://neuralflow.ai',
      demo: 'https://demo.neuralflow.ai',
      github: 'https://github.com/neuralflow-ai',
      status: 'Live',
      users: '3,200+',
      rating: 4.8,
      accuracy: '92%'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: 'ChatGenius - Advanced Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants with context awareness and emotional intelligence.',
      features: [
        'Multi-turn conversation management',
        'Emotion detection and response adaptation',
        'Multi-language support (50+ languages)',
        'Integration with CRM and support systems',
        'Advanced analytics and conversation insights'
      ],
      pricing: {
        free: '1,000 conversations/month',
        pro: '$79/month',
        enterprise: 'Custom'
      },
      category: 'Conversation',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      website: 'https://chatgenius.ai',
      demo: 'https://demo.chatgenius.ai',
      github: 'https://github.com/chatgenius-ai',
      status: 'Live',
      users: '12,800+',
      rating: 4.7,
      accuracy: '89%'
    },
    {
      icon: <Image className="w-8 h-8 text-white" />,
      title: 'ImageForge - AI Image Generation & Editing',
      description: 'Create stunning images, edit photos, and generate visual content using advanced AI models.',
      features: [
        'Text-to-image generation with multiple styles',
        'AI-powered photo editing and enhancement',
        'Object removal and background replacement',
        'Custom model fine-tuning for brand consistency',
        'Batch processing and API integration'
      ],
      pricing: {
        free: '50 images/month',
        pro: '$49/month',
        enterprise: 'Custom'
      },
      category: 'Visual',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      website: 'https://imageforge.ai',
      demo: 'https://demo.imageforge.ai',
      github: 'https://github.com/imageforge-ai',
      status: 'Live',
      users: '18,500+',
      rating: 4.8,
      accuracy: '91%'
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: 'VideoMaster - AI Video Production',
      description: 'Automate video creation, editing, and optimization with intelligent AI-powered tools.',
      features: [
        'Text-to-video generation from scripts',
        'Automated video editing and transitions',
        'AI-powered subtitle generation and translation',
        'Video enhancement and quality improvement',
        'Multi-format export and optimization'
      ],
      pricing: {
        free: '10 minutes/month',
        pro: '$89/month',
        enterprise: 'Custom'
      },
      category: 'Video',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      website: 'https://videomaster.ai',
      demo: 'https://demo.videomaster.ai',
      github: 'https://github.com/videomaster-ai',
      status: 'Live',
      users: '6,800+',
      rating: 4.6,
      accuracy: '87%'
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'DocuAI - Intelligent Document Processing',
      description: 'Extract, analyze, and process documents automatically with advanced AI and machine learning.',
      features: [
        'OCR and text extraction from any format',
        'Intelligent form processing and data extraction',
        'Document classification and organization',
        'Multi-language document support',
        'Compliance and audit trail management'
      ],
      pricing: {
        free: '100 pages/month',
        pro: '$69/month',
        enterprise: 'Custom'
      },
      category: 'Document',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      website: 'https://docuai.com',
      demo: 'https://demo.docuai.com',
      github: 'https://github.com/docuai',
      status: 'Live',
      users: '9,200+',
      rating: 4.9,
      accuracy: '96%'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'PredictAI - Predictive Analytics Platform',
      description: 'Forecast trends, identify patterns, and make data-driven decisions with AI-powered analytics.',
      features: [
        'Time series forecasting and trend analysis',
        'Anomaly detection and alerting',
        'Custom model development and training',
        'Real-time data processing and insights',
        'Interactive dashboards and reporting'
      ],
      pricing: {
        free: '1,000 predictions/month',
        pro: '$129/month',
        enterprise: 'Custom'
      },
      category: 'Analytics',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500',
      website: 'https://predictai.io',
      demo: 'https://demo.predictai.io',
      github: 'https://github.com/predictai',
      status: 'Live',
      users: '5,600+',
      rating: 4.7,
      accuracy: '88%'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'WorkflowAI - Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered decision making and optimization.',
      features: [
        'Visual workflow designer with AI suggestions',
        'Intelligent routing and decision making',
        'Process optimization and bottleneck detection',
        'Integration with enterprise systems',
        'Real-time performance monitoring and analytics'
      ],
      pricing: {
        free: '5 workflows/month',
        pro: '$149/month',
        enterprise: 'Custom'
      },
      category: 'Workflow',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      gradient: 'from-red-400 to-pink-500',
      website: 'https://workflowai.com',
      demo: 'https://demo.workflowai.com',
      github: 'https://github.com/workflowai',
      status: 'Live',
      users: '7,400+',
      rating: 4.8,
      accuracy: '93%'
    }
  ];

  const categories = ['All', 'Automation', 'Training', 'Conversation', 'Visual', 'Video', 'Document', 'Analytics', 'Workflow'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>AI Tools & Automation | Zion Tech Group - Cutting-Edge Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover powerful AI tools and automation solutions that transform how you work. From autonomous agents to custom model training, unlock the full potential of artificial intelligence." />
        <meta property="og:title" content="AI Tools & Automation | Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI tools and automation solutions for modern businesses. Transform your workflow with intelligent technology." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation AI Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            AI Tools & Automation
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Harness the power of artificial intelligence to automate tasks, generate content, and make smarter decisions. Our AI tools are designed to work for you, not against you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {selectedCategory === 'All' ? 'All AI Tools' : `${selectedCategory} AI Tools`}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {filteredTools.length} AI tools available. Each solution is powered by state-of-the-art machine learning models and designed for real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {tool.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          {tool.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-purple-400">{tool.users}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-green-400">{tool.accuracy}</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-sm font-medium text-gray-300">Starting at</div>
                        <div className="text-lg font-bold text-green-400">{tool.pricing.free}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        href={tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Tool
                      </Button>
                      <Button
                        href={tool.demo}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try Demo
                      </Button>
                      <Button
                        href={tool.github}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-purple-400"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              AI Capabilities & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI tools leverage cutting-edge technologies to deliver exceptional results across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border border-gray-700 hover:border-purple-500/30">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deep Learning</h3>
              <p className="text-gray-400">
                Advanced neural networks for complex pattern recognition and decision making.
              </p>
            </Card>

            <Card className="text-center border border-gray-700 hover:border-purple-500/30">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-400">
                Sophisticated algorithms that learn and improve from data and experience.
              </p>
            </Card>

            <Card className="text-center border border-gray-700 hover:border-purple-500/30">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-400">
                Advanced image and video analysis for visual understanding and processing.
              </p>
            </Card>

            <Card className="text-center border border-gray-700 hover:border-purple-500/30">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Natural Language</h3>
              <p className="text-gray-400">
                Understanding and generation of human language with context awareness.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start automating tasks, generating content, and making smarter decisions with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl"
            >
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/micro-saas"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl"
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}