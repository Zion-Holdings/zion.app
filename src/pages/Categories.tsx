import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Code, 
  Users, 
  Database, 
  Zap, 
  Globe, 
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Palette,
  Search,
  CheckCircle
} from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Content Generation',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Recommendation Systems',
        'Data Mining'
      ],
      price: 'From $99/month',
      features: ['Custom AI models', 'API integration', 'Scalable infrastructure', '24/7 support']
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services',
      icon: <Cloud className="h-12 w-12 text-zion-cyan" />,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Serverless Architecture',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Disaster Recovery',
        'Auto-scaling',
        'Monitoring & Alerting'
      ],
      price: 'From $150/month',
      features: ['Multi-cloud support', 'Automated deployment', 'Cost monitoring', 'Security compliance']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: <Shield className="h-12 w-12 text-zion-cyan" />,
      color: 'from-red-500 to-orange-500',
      services: [
        'Security Audits',
        'Penetration Testing',
        'Firewall Management',
        'Identity & Access Management',
        'Threat Detection',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      price: 'From $200/month',
      features: ['24/7 monitoring', 'Real-time alerts', 'Compliance reporting', 'Expert security team']
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment processes',
      icon: <Zap className="h-12 w-12 text-zion-cyan" />,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'CI/CD Pipelines',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Logging',
        'Performance Optimization',
        'Release Management',
        'Configuration Management',
        'Testing Automation'
      ],
      price: 'From $175/month',
      features: ['Automated workflows', 'Performance metrics', 'Rollback capabilities', 'Team collaboration']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern web applications and digital experiences',
      icon: <Code className="h-12 w-12 text-zion-cyan" />,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Frontend Development',
        'Backend Development',
        'Full-stack Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization',
        'SEO Optimization'
      ],
      price: 'From $125/month',
      features: ['Responsive design', 'Cross-browser compatibility', 'Performance optimization', 'SEO friendly']
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: <Smartphone className="h-12 w-12 text-zion-cyan" />,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'iOS Development',
        'Android Development',
        'Cross-platform Apps',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Performance Optimization',
        'App Maintenance'
      ],
      price: 'From $150/month',
      features: ['Native performance', 'Cross-platform', 'App store optimization', 'Regular updates']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable business insights',
      icon: <BarChart3 className="h-12 w-12 text-zion-cyan" />,
      color: 'from-teal-500 to-blue-500',
      services: [
        'Data Warehousing',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Data Integration',
        'Performance Metrics',
        'Custom Reporting'
      ],
      price: 'From $180/month',
      features: ['Real-time data', 'Interactive dashboards', 'Custom reports', 'Data governance']
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Optimize and maintain your database infrastructure',
      icon: <Database className="h-12 w-12 text-zion-cyan" />,
      color: 'from-pink-500 to-rose-500',
      services: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Services',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning',
        'Maintenance Support'
      ],
      price: 'From $160/month',
      features: ['Performance optimization', 'Automated backups', 'Security compliance', '24/7 monitoring']
    }
  ];

  const featuredServices = [
    {
      title: "AI Content Generation Platform",
      description: "Generate high-quality content with advanced AI models",
      category: "AI & ML",
      price: "$99/month",
      rating: 4.9,
      users: "2,500+"
    },
    {
      title: "Cloud Migration Suite",
      description: "Complete cloud migration and management solution",
      category: "Cloud Computing",
      price: "$299/month",
      rating: 4.8,
      users: "1,200+"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Comprehensive security monitoring and threat detection",
      category: "Cybersecurity",
      price: "$199/month",
      rating: 4.9,
      users: "800+"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Categories</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of technology services and solutions. 
            From AI and cloud computing to cybersecurity and development, we have everything you need.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
            />
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{service.category}</Badge>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold">{service.price}</span>
                    <span className="text-zion-slate-light text-sm">{service.users} users</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{category.price}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Services Include:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {category.services.slice(0, 4).map((service, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 4 && (
                        <div className="text-zion-cyan text-sm font-medium">
                          +{category.services.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Our team of experts can create custom solutions tailored to your specific needs. 
                Let's discuss your requirements and find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Contact Our Team
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Request Custom Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Categories;