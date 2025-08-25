import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Target,
  Palette,
  FileText,
  Video,
  MessageSquare,
  Calendar,
  CreditCard,
  ShoppingCart,
  Truck,
  Heart,
  GraduationCap,
  Home,
  Car,
  Plane,
  Ship,
  Eye,
  Ear,
  Mic,
  Camera,
  Network,
  Server,
  Code,
  Database,
  Chart,
  PieChart,
  Activity,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Speaker,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Router,
  Switch,
  Hub,
  Modem,
  Firewall,
  Antivirus,
  Backup,
  Recovery,
  Archive,
  Compress,
  Encrypt,
  Decrypt,
  Hash,
  Sign,
  Verify,
  Validate,
  Test,
  Debug,
  Deploy,
  Monitor,
  Log,
  Alert,
  Notify,
  Schedule,
  Cron,
  Queue,
  Cache,
  Load,
  Balance,
  Scale,
  Optimize,
  Tune,
  Profile,
  Benchmark,
  Stress,
  Load,
  Test,
  Simulate,
  Model,
  Predict,
  Forecast,
  Analyze,
  Process,
  Transform,
  Extract,
  Load,
  Transform,
  Clean,
  Validate,
  Enrich,
  Aggregate,
  Summarize,
  Visualize,
  Report,
  Dashboard,
  Alert,
  Monitor,
  Track,
  Trace,
  Audit,
  Log,
  History,
  Version,
  Branch,
  Merge,
  Commit,
  Push,
  Pull,
  Clone,
  Fork,
  Star,
  Watch,
  Issue,
  Pull,
  Request,
  Review,
  Comment,
  Discussion,
  Wiki,
  Documentation,
  Guide,
  Tutorial,
  Example,
  Sample,
  Template,
  Boilerplate,
  Scaffold,
  Generator,
  CLI,
  Tool,
  Utility,
  Library,
  Framework,
  SDK,
  API,
  REST,
  GraphQL,
  WebSocket,
  gRPC,
  Protocol,
  Format,
  Standard,
  Specification,
  Schema,
  Validation,
  Serialization,
  Deserialization,
  Encoding,
  Decoding,
  Compression,
  Encryption,
  Hashing,
  Signing,
  Verification,
  Authentication,
  Authorization,
  Identity,
  Access,
  Control,
  Permission,
  Role,
  Group,
  User,
  Account,
  Profile,
  Settings,
  Configuration,
  Preference,
  Option,
  Choice,
  Selection,
  Input,
  Output,
  Form,
  Field,
  Label,
  Button,
  Link,
  Image,
  Icon,
  Logo,
  Banner,
  Header,
  Footer,
  Sidebar,
  Navigation,
  Menu,
  Tab,
  Panel,
  Card,
  Modal,
  Dialog,
  Popup,
  Tooltip,
  Alert,
  Notification,
  Message,
  Error,
  Warning,
  Info,
  Success,
  Loading,
  Spinner,
  Progress,
  Bar,
  Slider,
  Toggle,
  Switch,
  Checkbox,
  Radio,
  Select,
  Dropdown,
  Autocomplete,
  Search,
  Filter,
  Sort,
  Pagination,
  Table,
  List,
  Grid,
  Flexbox,
  CSS,
  HTML,
  JavaScript,
  TypeScript,
  React,
  Vue,
  Angular,
  Node,
  Python,
  Java,
  C,
  Cpp,
  CSharp,
  Go,
  Rust,
  Swift,
  Kotlin,
  PHP,
  Ruby,
  Perl,
  Bash,
  Shell,
  PowerShell,
  SQL,
  NoSQL,
  MongoDB,
  PostgreSQL,
  MySQL,
  Redis,
  Elasticsearch,
  Cassandra,
  DynamoDB,
  S3,
  Lambda,
  EC2,
  RDS,
  CloudFormation,
  Terraform,
  Docker,
  Kubernetes,
  Jenkins,
  GitLab,
  GitHub,
  Bitbucket,
  Jira,
  Confluence,
  Slack,
  Teams,
  Zoom,
  Webex,
  Skype,
  Discord,
  Telegram,
  WhatsApp,
  Email,
  SMS,
  Push,
  Webhook
} from 'lucide-react';

export default function ComprehensiveAIServices() {
  const aiServices = [
    {
      id: "ai-business-intelligence",
      title: "AI Business Intelligence Platform",
      description: "Advanced business intelligence powered by artificial intelligence with predictive analytics, automated reporting, and real-time insights",
      price: "$2,500/month",
      features: ["Predictive Analytics", "Automated Reporting", "Real-time Dashboards", "Natural Language Queries", "Data Visualization", "Advanced Forecasting"],
      icon: Brain,
      category: "Business Intelligence",
      rating: 4.9,
      reviewCount: 456,
      path: "/services/ai-business-intelligence",
      marketPrice: "$4,200/month",
      savings: "40% savings",
      benefits: ["Increase decision speed by 60%", "Reduce reporting time by 80%", "Improve forecast accuracy by 45%"]
    },
    {
      id: "ai-marketing-automation",
      title: "AI Marketing Automation Suite",
      description: "Complete marketing automation platform with AI-powered content generation, audience targeting, and campaign optimization",
      price: "$1,800/month",
      features: ["AI Content Generation", "Smart Audience Targeting", "Campaign Optimization", "A/B Testing", "ROI Tracking", "Multi-channel Integration"],
      icon: Target,
      category: "Marketing",
      rating: 4.8,
      reviewCount: 234,
      path: "/services/ai-marketing-automation",
      marketPrice: "$3,100/month",
      savings: "42% savings",
      benefits: ["3x faster content creation", "Increase ROI by 45%", "Automated campaign management"]
    },
    {
      id: "ai-customer-service",
      title: "AI Customer Service Platform",
      description: "Intelligent customer service automation with chatbots, sentiment analysis, and automated ticket routing",
      price: "$1,200/month",
      features: ["AI Chatbots", "Sentiment Analysis", "Automated Routing", "Knowledge Base", "Multi-language Support", "24/7 Availability"],
      icon: MessageSquare,
      category: "Customer Service",
      rating: 4.7,
      reviewCount: 189,
      path: "/services/ai-customer-service",
      marketPrice: "$2,100/month",
      savings: "43% savings",
      benefits: ["Reduce response time by 70%", "Handle 80% of queries automatically", "Improve customer satisfaction by 35%"]
    },
    {
      id: "ai-hr-recruitment",
      title: "AI HR & Recruitment Platform",
      description: "Intelligent human resources management with AI-powered candidate screening, skill matching, and automated onboarding",
      price: "$1,500/month",
      features: ["AI Candidate Screening", "Skill Matching", "Automated Onboarding", "Performance Analytics", "Compliance Management", "Employee Portal"],
      icon: Users,
      category: "Human Resources",
      rating: 4.8,
      reviewCount: 167,
      path: "/services/ai-hr-recruitment",
      marketPrice: "$2,600/month",
      savings: "42% savings",
      benefits: ["Reduce hiring time by 50%", "Improve candidate quality by 40%", "Automated compliance tracking"]
    },
    {
      id: "ai-legal-tech",
      title: "AI Legal Technology Platform",
      description: "AI-powered legal technology platform for contract analysis, legal research, and compliance automation",
      price: "$2,200/month",
      features: ["Contract Analysis", "Legal Research", "Compliance Automation", "Document Generation", "Risk Assessment", "Case Management"],
      icon: FileText,
      category: "Legal Technology",
      rating: 4.9,
      reviewCount: 98,
      path: "/services/ai-legal-tech",
      marketPrice: "$3,800/month",
      savings: "42% savings",
      benefits: ["90% faster contract review", "Reduce legal costs by 35%", "Automated compliance monitoring"]
    },
    {
      id: "ai-supply-chain",
      title: "AI Supply Chain Intelligence",
      description: "Intelligent supply chain management with predictive analytics, demand forecasting, and automated optimization",
      price: "$1,800/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Optimization", "Supplier Management", "Risk Assessment", "Real-time Tracking"],
      icon: Truck,
      category: "Supply Chain",
      rating: 4.7,
      reviewCount: 145,
      path: "/services/ai-supply-chain",
      marketPrice: "$3,100/month",
      savings: "42% savings",
      benefits: ["Reduce inventory costs by 25%", "Improve delivery times by 30%", "Predictive demand planning"]
    },
    {
      id: "ai-healthcare-platform",
      title: "AI Healthcare Platform",
      description: "HIPAA-compliant healthcare AI platform for patient care, diagnosis assistance, and medical record management",
      price: "$3,500/month",
      features: ["Patient Care AI", "Diagnosis Assistance", "Medical Records", "HIPAA Compliance", "Telemedicine Integration", "Analytics Dashboard"],
      icon: Heart,
      category: "Healthcare",
      rating: 4.9,
      reviewCount: 89,
      path: "/services/ai-healthcare-platform",
      marketPrice: "$5,800/month",
      savings: "40% savings",
      benefits: ["Improve diagnosis accuracy by 25%", "Reduce administrative overhead by 40%", "Enhanced patient outcomes"]
    },
    {
      id: "ai-education-platform",
      title: "AI Education Platform",
      description: "Intelligent learning management system with personalized learning paths, AI tutoring, and progress analytics",
      price: "$950/month",
      features: ["Personalized Learning", "AI Tutoring", "Progress Analytics", "Content Creation", "Assessment Tools", "Mobile Learning"],
      icon: GraduationCap,
      category: "Education",
      rating: 4.8,
      reviewCount: 134,
      path: "/services/ai-education-platform",
      marketPrice: "$1,600/month",
      savings: "41% savings",
      benefits: ["Improve learning outcomes by 35%", "Reduce course creation time by 60%", "Personalized student experience"]
    },
    {
      id: "ai-financial-platform",
      title: "AI Financial Services Platform",
      description: "AI-powered financial platform for risk assessment, fraud detection, and automated trading strategies",
      price: "$2,800/month",
      features: ["Risk Assessment", "Fraud Detection", "Trading Strategies", "Portfolio Management", "Compliance Monitoring", "Real-time Analytics"],
      icon: CreditCard,
      category: "Financial Services",
      rating: 4.8,
      reviewCount: 178,
      path: "/services/ai-financial-platform",
      marketPrice: "$4,600/month",
      savings: "39% savings",
      benefits: ["Reduce fraud by 90%", "Improve trading performance by 25%", "Automated compliance reporting"]
    },
    {
      id: "ai-manufacturing-platform",
      title: "AI Manufacturing Platform",
      description: "Intelligent manufacturing platform with predictive maintenance, quality control, and production optimization",
      price: "$2,200/month",
      features: ["Predictive Maintenance", "Quality Control", "Production Optimization", "Supply Chain Integration", "IoT Connectivity", "Analytics Dashboard"],
      icon: Building,
      category: "Manufacturing",
      rating: 4.7,
      reviewCount: 112,
      path: "/services/ai-manufacturing-platform",
      marketPrice: "$3,700/month",
      savings: "41% savings",
      benefits: ["Reduce downtime by 40%", "Improve quality by 30%", "Increase production efficiency by 25%"]
    },
    {
      id: "ai-real-estate-platform",
      title: "AI Real Estate Platform",
      description: "Intelligent real estate platform with property valuation, market analysis, and automated client management",
      price: "$1,300/month",
      features: ["Property Valuation", "Market Analysis", "Client Management", "Lead Generation", "Document Automation", "Virtual Tours"],
      icon: Home,
      category: "Real Estate",
      rating: 4.7,
      reviewCount: 98,
      path: "/services/ai-real-estate-platform",
      marketPrice: "$2,200/month",
      savings: "41% savings",
      benefits: ["Increase sales by 30%", "Reduce time to close by 25%", "Automated lead qualification"]
    },
    {
      id: "ai-retail-platform",
      title: "AI Retail Intelligence Platform",
      description: "E-commerce optimization, inventory management, and customer experience automation powered by AI",
      price: "$1,600/month",
      features: ["Inventory Management", "Customer Analytics", "E-commerce AI", "Supply Chain", "Personalization", "Demand Forecasting"],
      icon: ShoppingCart,
      category: "Retail",
      rating: 4.6,
      reviewCount: 156,
      path: "/services/ai-retail-platform",
      marketPrice: "$2,700/month",
      savings: "41% savings",
      benefits: ["Increase sales by 25%", "Reduce inventory costs by 30%", "Personalized customer experience"]
    }
  ];

  const aiTechnologies = [
    {
      name: "Machine Learning",
      description: "Advanced algorithms for pattern recognition, predictive modeling, and automated decision making",
      icon: Brain,
      applications: ["Predictive Analytics", "Recommendation Systems", "Fraud Detection", "Image Recognition"]
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered text and speech understanding for chatbots, content analysis, and automated communication",
      icon: MessageSquare,
      applications: ["Chatbots", "Content Analysis", "Translation", "Sentiment Analysis"]
    },
    {
      name: "Computer Vision",
      description: "Image and video analysis for quality control, security monitoring, and automated inspection",
      icon: Eye,
      applications: ["Quality Control", "Security Monitoring", "Object Detection", "Facial Recognition"]
    },
    {
      name: "Robotic Process Automation",
      description: "Automated workflow processes for repetitive tasks, data entry, and business process optimization",
      icon: Zap,
      applications: ["Data Entry", "Process Automation", "Workflow Optimization", "Report Generation"]
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis for business planning and risk management",
      icon: TrendingUp,
      applications: ["Demand Forecasting", "Risk Assessment", "Trend Analysis", "Performance Prediction"]
    },
    {
      name: "Deep Learning",
      description: "Neural network architectures for complex pattern recognition and advanced AI applications",
      icon: Network,
      applications: ["Image Recognition", "Speech Processing", "Natural Language", "Autonomous Systems"]
    }
  ];

  const industrySolutions = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant AI solutions for patient care, diagnosis, and medical research",
      icon: Heart,
      solutions: ["Diagnosis AI", "Patient Monitoring", "Drug Discovery", "Medical Imaging"]
    },
    {
      name: "Finance",
      description: "AI-powered financial services with fraud detection, risk assessment, and automated trading",
      icon: CreditCard,
      solutions: ["Fraud Detection", "Risk Assessment", "Trading AI", "Compliance Automation"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing with predictive maintenance, quality control, and production optimization",
      icon: Building,
      solutions: ["Predictive Maintenance", "Quality Control", "Production Optimization", "Supply Chain AI"]
    },
    {
      name: "Retail",
      description: "Customer experience optimization with personalized recommendations and inventory management",
      icon: ShoppingCart,
      solutions: ["Personalization", "Inventory Management", "Customer Analytics", "Demand Forecasting"]
    },
    {
      name: "Education",
      description: "Personalized learning experiences with AI tutoring and adaptive curriculum",
      icon: GraduationCap,
      solutions: ["Personalized Learning", "AI Tutoring", "Content Creation", "Progress Analytics"]
    },
    {
      name: "Real Estate",
      description: "Property valuation, market analysis, and automated client relationship management",
      icon: Home,
      solutions: ["Property Valuation", "Market Analysis", "Client Management", "Lead Generation"]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline business processes for maximum productivity",
      icon: Zap,
      details: "Reduce manual work by 60-80%"
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights and predictive analytics for informed business decisions",
      icon: Brain,
      details: "Improve decision accuracy by 40%"
    },
    {
      title: "Cost Reduction",
      description: "Optimize operations and reduce costs through intelligent automation and resource management",
      icon: BarChart3,
      details: "Average 30-50% cost savings"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Personalized interactions and 24/7 availability through AI-powered automation",
      icon: Users,
      details: "Improve customer satisfaction by 35%"
    },
    {
      title: "Scalability",
      description: "AI solutions that grow with your business and handle increasing workloads automatically",
      icon: TrendingUp,
      details: "Scale from 100 to 100,000+ users"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technology and innovation",
      icon: Rocket,
      details: "First-mover advantage in your industry"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive AI Services - Zion Tech Group" 
        description="Advanced AI services and solutions powered by cutting-edge artificial intelligence. From machine learning to computer vision, transform your business with our comprehensive AI platform."
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
              Transform your business with cutting-edge artificial intelligence
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI services designed to revolutionize your business operations. 
              From machine learning and natural language processing to computer vision and predictive analytics, 
              we deliver enterprise-grade AI solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading AI platforms with advanced automation and intelligent insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.id}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Price Comparison Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.savings}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 text-yellow-400 fill-current">★</div>
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  <div className="flex items-center space-x-3 mt-2">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-500 line-through">{service.marketPrice}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-4 h-4 text-green-400 flex-shrink-0">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-4 h-4 text-blue-400 flex-shrink-0">→</div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full futuristic-btn text-center group">
                  <span>Get Started</span>
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Technologies & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence technologies powering our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tech.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.applications.map((app, appIndex) => (
                    <div key={appIndex} className="text-sm text-gray-400">
                      • {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI platforms designed for your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <industry.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="text-sm text-gray-400">
                      • {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm text-cyan-400 font-medium">
                  {benefit.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="futuristic-btn text-lg px-8 py-4 group">
                  <span>Start AI Transformation</span>
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group">
                  <span>Schedule AI Demo</span>
                  <Calendar className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}