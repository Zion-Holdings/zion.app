import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrustedBySection } from '@/components/TrustedBySection';
import { QuoteFormSection } from '@/components/QuoteFormSection';
import { 
  BarChart3, 
  Database, 
  TrendingUp, 
  PieChart, 
  Users, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Network,
  HardDrive,
  Smartphone,
  Brain,
  Eye,
  Server
} from 'lucide-react';

const analyticsServices = [
  {
    id: 1,
    title: "Big Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and visualization solutions.",
    features: [
      "Data warehouse design and implementation",
      "ETL pipeline development",
      "Interactive dashboards and reports",
      "Real-time data processing",
      "Advanced analytics and modeling"
    ],
    price: 6500,
    currency: "$",
    duration: "8-12 weeks",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Business Intelligence",
    benefits: [
      "Improve decision-making with data-driven insights",
      "Identify new business opportunities",
      "Optimize operational efficiency",
      "Enhance customer understanding"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Predictive Analytics",
    description: "Leverage machine learning to predict trends, optimize decisions, and reduce business risks.",
    features: [
      "Predictive modeling and forecasting",
      "Machine learning algorithm development",
      "Risk assessment and mitigation",
      "Customer behavior prediction",
      "Market trend analysis"
    ],
    price: 7800,
    currency: "$",
    duration: "10-14 weeks",
    icon: <Brain className="w-8 h-8" />,
    category: "Predictive Analytics",
    benefits: [
      "Improve decision accuracy by 40%",
      "Reduce operational risks",
      "Identify new business opportunities",
      "Optimize resource allocation"
    ]
  },
  {
    id: 3,
    title: "Real-Time Data Streaming & Analytics",
    description: "Process and analyze data in real-time for instant insights and immediate action.",
    features: [
      "Real-time data pipeline development",
      "Stream processing architecture",
      "Live dashboard creation",
      "Event-driven analytics",
      "Performance monitoring and optimization"
    ],
    price: 5500,
    currency: "$",
    duration: "6-10 weeks",
    icon: <Zap className="w-8 h-8" />,
    category: "Real-Time Analytics",
    benefits: [
      "Immediate response to business events",
      "Real-time monitoring and alerting",
      "Improved customer experience",
      "Faster decision-making"
    ]
  },
  {
    id: 4,
    title: "Data Engineering & ETL Solutions",
    description: "Build robust data pipelines and ETL processes for reliable data processing and transformation.",
    features: [
      "Data pipeline architecture design",
      "ETL/ELT process development",
      "Data quality and validation",
      "Performance optimization",
      "Monitoring and alerting systems"
    ],
    price: 4800,
    currency: "$",
    duration: "6-8 weeks",
    icon: <Database className="w-8 h-8" />,
    category: "Data Engineering",
    benefits: [
      "Reliable data processing",
      "Improved data quality",
      "Faster data delivery",
      "Reduced maintenance overhead"
    ]
  },
  {
    id: 5,
    title: "Customer Analytics & Segmentation",
    description: "Deep dive into customer behavior and create targeted segmentation strategies.",
    features: [
      "Customer journey mapping",
      "Behavioral analysis and segmentation",
      "Churn prediction and prevention",
      "Customer lifetime value analysis",
      "Personalization strategies"
    ],
    price: 4200,
    currency: "$",
    duration: "4-6 weeks",
    icon: <Users className="w-8 h-8" />,
    category: "Customer Analytics",
    benefits: [
      "Improved customer retention",
      "Better marketing ROI",
      "Enhanced customer experience",
      "Increased customer lifetime value"
    ]
  },
  {
    id: 6,
    title: "Financial Analytics & Risk Management",
    description: "Comprehensive financial analysis and risk assessment for informed decision-making.",
    features: [
      "Financial performance analysis",
      "Risk modeling and assessment",
      "Fraud detection systems",
      "Compliance monitoring",
      "Financial forecasting"
    ],
    price: 7200,
    currency: "$",
    duration: "8-12 weeks",
    icon: <TrendingUp className="w-8 h-8" />,
    category: "Financial Analytics",
    benefits: [
      "Better financial decision-making",
      "Reduced financial risks",
      "Improved compliance",
      "Enhanced fraud detection"
    ]
  },
  {
    id: 7,
    title: "Marketing Analytics & Attribution",
    description: "Measure marketing effectiveness and optimize campaigns with data-driven insights.",
    features: [
      "Marketing campaign analysis",
      "Attribution modeling",
      "ROI measurement and optimization",
      "A/B testing and experimentation",
      "Marketing automation insights"
    ],
    price: 3800,
    currency: "$",
    duration: "4-6 weeks",
    icon: <PieChart className="w-8 h-8" />,
    category: "Marketing Analytics",
    benefits: [
      "Improved marketing ROI",
      "Better campaign optimization",
      "Enhanced customer targeting",
      "Data-driven marketing decisions"
    ]
  },
  {
    id: 8,
    title: "Operational Analytics & Performance Monitoring",
    description: "Monitor and optimize business operations with real-time performance analytics.",
    features: [
      "KPI dashboard development",
      "Performance monitoring systems",
      "Process optimization analysis",
      "Resource utilization tracking",
      "Operational efficiency metrics"
    ],
    price: 4500,
    currency: "$",
    duration: "6-8 weeks",
    icon: <Server className="w-8 h-8" />,
    category: "Operational Analytics",
    benefits: [
      "Improved operational efficiency",
      "Reduced costs and waste",
      "Better resource allocation",
      "Enhanced productivity"
    ]
  }
];

const analyticsTechnologies = [
  "Apache Spark & Hadoop",
  "Python & R for Analytics",
  "Tableau & Power BI",
  "Apache Kafka & Flink",
  "TensorFlow & PyTorch",
  "SQL & NoSQL Databases",
  "Apache Airflow",
  "Kubernetes & Docker"
];

const dataSources = [
  "Structured Databases",
  "Unstructured Data",
  "Real-Time Streams",
  "Cloud Data Sources",
  "IoT Device Data",
  "Social Media Feeds",
  "API Integrations",
  "Legacy Systems"
];

const industrySolutions = [
  "Healthcare Analytics",
  "Financial Services",
  "Retail & E-commerce",
  "Manufacturing",
  "Transportation & Logistics",
  "Energy & Utilities",
  "Telecommunications",
  "Government & Public Sector"
];

export default function DataAnalyticsServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Analytics &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Business Intelligence
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with data-driven insights and advanced analytics solutions. 
            From predictive modeling to real-time dashboards, we help you unlock the full 
            potential of your data for strategic decision-making and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Get Analytics Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Analytics Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Analytics Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our range of data analytics services designed to address specific 
              business challenges and drive data-driven decision-making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service) => (
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-zion-blue-light pt-4 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-zion-cyan">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Technologies */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Analytics Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We leverage cutting-edge analytics technologies and tools to deliver 
              powerful insights and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {analyticsTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Sources We Handle
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We work with diverse data sources to create comprehensive analytics 
              solutions that provide complete business insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{source}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our analytics solutions are tailored to meet the unique challenges 
              and opportunities across diverse industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZionTech for Analytics */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ZionTech Group for Analytics?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine deep analytics expertise with industry knowledge to deliver 
              solutions that drive measurable business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Data Scientists</h3>
              <p className="text-zion-slate-light">
                PhD-level data scientists and certified analytics professionals 
                with extensive experience in enterprise analytics.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">
                Successfully delivered analytics solutions for 300+ businesses 
                with average ROI improvements of 150%.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">End-to-End Solutions</h3>
              <p className="text-zion-slate-light">
                Complete analytics lifecycle from data collection to insights 
                delivery with ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Pricing */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Analytics Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Competitive pricing for enterprise-grade analytics solutions with 
              flexible payment options and ROI guarantees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Analytics Starter</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $3,800<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Basic analytics setup</li>
                <li>Standard dashboards</li>
                <li>Data visualization</li>
                <li>Email support</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Analytics Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $7,800<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-white space-y-2 mb-8">
                <li>Advanced analytics</li>
                <li>Predictive modeling</li>
                <li>Real-time dashboards</li>
                <li>Priority support</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Analytics Enterprise</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $15,000<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Full analytics transformation</li>
                <li>Custom AI models</li>
                <li>24/7 monitoring</li>
                <li>Dedicated team</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Data?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our analytics experts today to discuss how we can help you 
            unlock the power of your data for strategic growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">
                +1 302 464 0950
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">
                kleber@ziontechgroup.com
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Request Analytics Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Schedule Analytics Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustedBySection />
      <QuoteFormSection />
    </>
  );
}