
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Cloud,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Users,
  Zap,
  Code,
  Building,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: "AI Content Generator",
    description: "Advanced AI-powered content creation for blogs, marketing, and documentation",
    icon: <Bot className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
    link: "/services-showcase",
    badge: "Popular",
    details: "Generate high-quality, SEO-optimized content using state-of-the-art language models",
    price: "$99/month",
    marketPrice: "$299/month"
  },
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audit and vulnerability assessment for your organization",
    icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
    link: "/services-showcase",
    badge: "Critical",
    details: "Identify security gaps and implement robust protection measures",
    price: "$499/assessment",
    marketPrice: "$1500/assessment"
  },
  {
    title: "Cloud Migration Service",
    description: "Seamless migration to cloud platforms with minimal downtime",
    icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
    link: "/services-showcase",
    badge: "Trending",
    details: "Migrate your infrastructure to AWS, Azure, or GCP with expert guidance",
    price: "$1999/project",
    marketPrice: "$5000/project"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Custom business intelligence dashboards and reporting solutions",
    icon: <Database className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
    link: "/services-showcase",
    badge: "Hot",
    details: "Transform raw data into actionable insights with interactive visualizations",
    price: "$299/month",
    marketPrice: "$799/month"
  },
  {
    title: "API Development & Integration",
    description: "Custom API development and third-party service integration",
    icon: <Code className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
    link: "/services-showcase",
    badge: "New",
    details: "Build robust APIs and integrate external services seamlessly",
    price: "$399/project",
    marketPrice: "$1200/project"
  },
  {
    title: "Network Infrastructure",
    description: "Design and implement scalable network solutions for enterprises",
    icon: <Globe className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
    link: "/services-showcase",
    badge: "Featured",
    details: "Optimize network performance and security for your business needs",
    price: "$799/project",
    marketPrice: "$2500/project"
  },
  {
    title: "Document Management System",
    description: "Enterprise-grade document organization and collaboration platform",
    icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
    link: "/services-showcase",
    badge: "Essential",
    details: "Streamline document workflows and improve team collaboration",
    price: "$149/month",
    marketPrice: "$399/month"
  },
  {
    title: "Video Production Suite",
    description: "Professional video editing and production services for businesses",
    icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
    link: "/services-showcase",
    badge: "Creative",
    details: "Create engaging video content for marketing and training purposes",
    price: "$299/video",
    marketPrice: "$800/video"
  },
  {
    title: "UI/UX Design Service",
    description: "User-centered design solutions for web and mobile applications",
    icon: <Code className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
    link: "/services-showcase",
    badge: "Design",
    details: "Create intuitive and beautiful user experiences that drive engagement",
    price: "$599/project",
    marketPrice: "$1500/project"
  },
  {
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience",
    icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
    link: "/services-showcase",
    badge: "Performance",
    details: "Optimize loading times and overall application performance",
    price: "$399/audit",
    marketPrice: "$999/audit"
  },
  {
    title: "Startup Launch Package",
    description: "Complete tech stack setup for new business ventures",
    icon: <Building className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
    link: "/services-showcase",
    badge: "Startup",
    details: "Get your startup running with essential tech infrastructure",
    price: "$1999/package",
    marketPrice: "$5000/package"
  },
  {
    title: "Innovation Consulting",
    description: "Strategic guidance for technology adoption and digital transformation",
    icon: <Users className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
    link: "/services-showcase",
    badge: "Strategy",
    details: "Navigate digital transformation with expert consulting services",
    price: "$299/hour",
    marketPrice: "$800/hour"
  },
  {
    title: "IoT Development Platform",
    description: "Build and deploy Internet of Things solutions for your business",
    icon: <Globe className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
    link: "/services-showcase",
    badge: "IoT",
    details: "Connect devices and create smart automation solutions",
    price: "$799/project",
    marketPrice: "$2000/project"
  },
  {
    title: "Server Management",
    description: "24/7 server monitoring, maintenance, and optimization services",
    icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
    link: "/services-showcase",
    badge: "Infrastructure",
    details: "Ensure your servers run smoothly with proactive management",
    price: "$199/month",
    marketPrice: "$499/month"
  },
  {
    title: "Remote Work Solutions",
    description: "Secure and efficient remote work infrastructure setup",
    icon: <Users className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
    link: "/services-showcase",
    badge: "Remote",
    details: "Enable secure and productive remote work environments",
    price: "$399/setup",
    marketPrice: "$999/setup"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile application development",
    icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
    link: "/services-showcase",
    badge: "Mobile",
    details: "Create engaging mobile experiences for iOS and Android",
    price: "$599/app",
    marketPrice: "$1500/app"
  },
  {
    title: "Digital Marketing Automation",
    description: "Automate your marketing campaigns and improve ROI",
    icon: <Zap className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
    link: "/services-showcase",
    badge: "Marketing",
    details: "Streamline marketing processes and increase conversion rates",
    price: "$299/month",
    marketPrice: "$799/month"
  },
  {
    title: "Blockchain Development",
    description: "Smart contract development and blockchain integration services",
    icon: <Code className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
    link: "/services-showcase",
    badge: "Blockchain",
    details: "Build decentralized applications and smart contracts",
    price: "$999/project",
    marketPrice: "$3000/project"
  },
  {
    title: "Machine Learning Platform",
    description: "Custom ML model development and deployment platform",
    icon: <Bot className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
    link: "/services-showcase",
    badge: "AI/ML",
    details: "Deploy and manage machine learning models at scale",
    price: "$799/month",
    marketPrice: "$2000/month"
  },
  {
    title: "DevOps Automation",
    description: "Streamline your development and deployment processes",
    icon: <Settings className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
    link: "/services-showcase",
    badge: "DevOps",
    details: "Automate CI/CD pipelines and infrastructure management",
    price: "$499/month",
    marketPrice: "$1200/month"
  },
  {
    title: "Compliance Management",
    description: "Ensure regulatory compliance for your business operations",
    icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
    link: "/services-showcase",
    badge: "Compliance",
    details: "Meet industry standards and regulatory requirements",
    price: "$399/month",
    marketPrice: "$999/month"
  },
  {
    title: "Data Backup & Recovery",
    description: "Comprehensive data protection and disaster recovery solutions",
    icon: <Database className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
    link: "/services-showcase",
    badge: "Security",
    details: "Protect your data with automated backup and recovery systems",
    price: "$199/month",
    marketPrice: "$499/month"
  },
  {
    title: "Virtual Reality Solutions",
    description: "Immersive VR experiences for training and entertainment",
    icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
    link: "/services-showcase",
    badge: "VR/AR",
    details: "Create engaging virtual reality applications and experiences",
    price: "$899/project",
    marketPrice: "$2500/project"
  },
  {
    title: "Quantum Computing Consulting",
    description: "Expert guidance on quantum computing applications and strategy",
    icon: <Code className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
    link: "/services-showcase",
    badge: "Quantum",
    details: "Explore the future of computing with quantum technology experts",
    price: "$599/hour",
    marketPrice: "$1500/hour"
  }
];

export function FeatureCTAs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Professional Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4 text-white">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-gray-300">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-3">{feature.details}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-400 font-semibold">Zion: {feature.price}</span>
                  <span className="text-gray-500">Market: {feature.marketPrice}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1 group-hover:bg-primary/90 transition-colors">
                  <Link to={feature.link}>
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-medium">All services include 24/7 support and quality guarantee</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-button">
              <Link to="/request-quote">
                <span>Get Custom Quote</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/contact">
                <span>Contact Our Team</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
