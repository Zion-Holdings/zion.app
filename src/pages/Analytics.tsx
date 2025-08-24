import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  LineChart, 
  Activity, 
  Target, 
  CheckCircle, 
  Zap,
  Database,
  Globe,
  Users,
  DollarSign,
  Clock,
  Filter,
  Download,
  Share2
} from 'lucide-react';

const Analytics = () => {
  const analyticsServices = [
    {
      icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />,
      title: "Business Intelligence",
      description: "Transform data into actionable insights",
      features: ["Interactive dashboards", "Custom reports", "Real-time data", "KPI tracking"],
      price: "From $299/month",
      timeline: "2-4 weeks"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-zion-cyan" />,
      title: "Performance Analytics",
      description: "Monitor and optimize system performance",
      features: ["Performance metrics", "Bottleneck detection", "Capacity planning", "Optimization recommendations"],
      price: "From $199/month",
      timeline: "1-3 weeks"
    },
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "User Analytics",
      description: "Understand user behavior and engagement",
      features: ["User journey mapping", "Conversion tracking", "A/B testing", "Behavioral insights"],
      price: "From $149/month",
      timeline: "1-2 weeks"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-zion-cyan" />,
      price: "From $249/month",
      title: "Financial Analytics",
      description: "Track financial performance and trends",
      features: ["Revenue analysis", "Cost tracking", "Profitability metrics", "Forecasting"],
      timeline: "2-3 weeks"
    }
  ];

  const dashboardTypes = [
    {
      name: "Executive Dashboard",
      description: "High-level KPIs and business metrics for leadership",
      features: ["Revenue overview", "Growth metrics", "Market trends", "Strategic insights"],
      price: "$499/month",
      users: "Up to 10"
    },
    {
      name: "Operations Dashboard",
      description: "Real-time operational metrics and performance indicators",
      features: ["System performance", "Resource utilization", "Efficiency metrics", "Alert management"],
      price: "$399/month",
      users: "Up to 25"
    },
    {
      name: "Marketing Dashboard",
      description: "Marketing campaign performance and ROI tracking",
      features: ["Campaign metrics", "Lead generation", "Conversion rates", "ROI analysis"],
      price: "$349/month",
      users: "Up to 15"
    },
    {
      name: "Custom Dashboard",
      description: "Tailored analytics solution for your specific needs",
      features: ["Custom metrics", "Integration support", "White-label options", "Dedicated support"],
      price: "Custom pricing",
      users: "Unlimited"
    }
  ];

  const dataSources = [
    "Google Analytics",
    "Facebook Ads",
    "LinkedIn Analytics",
    "Twitter Analytics",
    "CRM Systems",
    "E-commerce Platforms",
    "Social Media APIs",
    "Custom Databases",
    "Web Analytics",
    "Mobile App Analytics"
  ];

  const benefits = [
    "Make data-driven decisions",
    "Identify growth opportunities",
    "Optimize performance",
    "Improve customer experience",
    "Reduce operational costs",
    "Increase revenue",
    "Monitor competition",
    "Predict market trends"
  ];

  const metrics = [
    { metric: "500+", label: "Dashboards Created" },
    { metric: "50M+", label: "Data Points Processed" },
    { metric: "99.9%", label: "Uptime Guarantee" },
    { metric: "24/7", label: "Real-time Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Analytics</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Transform your data into powerful insights. Our analytics solutions help you understand 
            your business, optimize performance, and make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              View Demo
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-2">
                  {metric.metric}
                </div>
                <div className="text-zion-slate-light">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsServices.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-zion-slate-light">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                    <div className="text-white font-medium">{service.price}</div>
                    <div className="text-zion-cyan text-sm">{service.timeline}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dashboard Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Analytics Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dashboardTypes.map((dashboard, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{dashboard.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {dashboard.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {dashboard.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4 space-y-2 mb-4">
                    <div className="text-white font-medium">{dashboard.price}</div>
                    <div className="text-zion-cyan text-sm">{dashboard.users} users</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Sources and Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Data Sources */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Data Sources We Support</h2>
            <p className="text-zion-slate-light mb-6">
              Connect and analyze data from multiple sources to get a complete view of your business performance.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {dataSources.map((source, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-zion-cyan" />
                  <span className="text-zion-slate-light text-sm">{source}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Analytics?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Analytics Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-zion-slate-light">
                  Monitor your business metrics in real-time with instant alerts and notifications
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6 text-center">
                <Filter className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Advanced Filtering</h3>
                <p className="text-zion-slate-light">
                  Drill down into your data with powerful filtering and segmentation capabilities
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Export & Sharing</h3>
                <p className="text-zion-slate-light">
                  Export reports in multiple formats and share insights with your team
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Goal Tracking</h3>
                <p className="text-zion-slate-light">
                  Set and track business goals with automated progress monitoring
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6 text-center">
                <Share2 className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-zion-slate-light">
                  Work together with your team on shared dashboards and reports
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automation</h3>
                <p className="text-zion-slate-light">
                  Automate report generation and data refresh for consistent insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Start your analytics journey today and transform how you understand and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;