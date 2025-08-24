import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Share2, 
  FileText, 
  Mail, 
  BarChart3, 
  CheckCircle, 
  Users,
  Globe,
  Eye,
  Video,
  Mic,
  MessageSquare,
  Zap,
  Smartphone,
  Monitor,
  PieChart,
  ArrowUpRight,
  Calendar,
  ShoppingCart
} from 'lucide-react';

const MarketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility and rank higher in search results",
    price: "$1,500 - $8,000/month",
    features: ["Keyword research", "On-page optimization", "Technical SEO", "Link building"],
    icon: <Search className="h-8 w-8 text-zion-cyan" />,
    category: "SEO",
    badge: "Popular",
    link: "/request-quote?service=seo"
  },
  {
    title: "Pay-Per-Click (PPC) Management",
    description: "Strategic PPC campaigns across Google, Facebook, and other platforms",
    price: "$1,000 - $5,000/month + 10-15% ad spend",
    features: ["Campaign strategy", "Ad creation", "Bid management", "Performance tracking"],
    icon: <TrendingUp className="h-8 w-8 text-zion-purple" />,
    category: "PPC",
    badge: "Premium",
    link: "/request-quote?service=ppc"
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience across all major social platforms",
    price: "$800 - $4,000/month",
    features: ["Content creation", "Community management", "Paid social ads", "Analytics reporting"],
    icon: <Share2 className="h-8 w-8 text-zion-blue" />,
    category: "Social Media",
    link: "/request-quote?service=social-media"
  },
  {
    title: "Content Marketing Strategy",
    description: "Create valuable content that attracts and converts your audience",
    price: "$2,000 - $10,000/month",
    features: ["Content planning", "Blog writing", "Infographics", "Content distribution"],
    icon: <FileText className="h-8 w-8 text-zion-cyan" />,
    category: "Content",
    link: "/request-quote?service=content-marketing"
  },
  {
    title: "Email Marketing Campaigns",
    description: "Build relationships and drive sales through targeted email campaigns",
    price: "$500 - $3,000/month",
    features: ["List building", "Template design", "Automation", "A/B testing"],
    icon: <Mail className="h-8 w-8 text-zion-purple" />,
    category: "Email",
    link: "/request-quote?service=email-marketing"
  },
  {
    title: "Marketing Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing performance",
    price: "$800 - $3,000/month",
    features: ["Performance tracking", "ROI analysis", "Custom dashboards", "Monthly reports"],
    icon: <BarChart3 className="h-8 w-8 text-zion-blue" />,
    category: "Analytics",
    link: "/request-quote?service=marketing-analytics"
  },
  {
    title: "Conversion Rate Optimization",
    description: "Improve your website's ability to convert visitors into customers",
    price: "$1,500 - $6,000/month",
    features: ["A/B testing", "User experience", "Landing page optimization", "Funnel analysis"],
          icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
    category: "CRO",
    link: "/request-quote?service=conversion-optimization"
  },
  {
    title: "Influencer Marketing",
    description: "Partner with influencers to reach new audiences and build trust",
    price: "$2,000 - $15,000 per campaign",
    features: ["Influencer research", "Campaign management", "Content coordination", "Performance tracking"],
    icon: <Users className="h-8 w-8 text-zion-purple" />,
    category: "Influencer",
    link: "/request-quote?service=influencer-marketing"
  },
  {
    title: "Video Marketing & Production",
    description: "Create engaging video content for multiple platforms",
    price: "$1,000 - $8,000 per video",
    features: ["Script writing", "Video production", "Editing", "Distribution strategy"],
    icon: <Video className="h-8 w-8 text-zion-blue" />,
    category: "Video",
    link: "/request-quote?service=video-marketing"
  },
  {
    title: "Graphic Design Services",
    description: "Professional design for marketing materials and branding",
    price: "$50 - $300 per design",
    features: ["Logo design", "Marketing materials", "Social media graphics", "Brand guidelines"],
          icon: <FileText className="h-8 w-8 text-zion-cyan" />,
    category: "Design",
    link: "/request-quote?service=graphic-design"
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing processes with automation tools",
    price: "$1,000 - $5,000/month",
    features: ["Workflow setup", "Lead nurturing", "CRM integration", "Performance monitoring"],
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    category: "Automation",
    link: "/request-quote?service=marketing-automation"
  },
  {
    title: "Local SEO & Google My Business",
    description: "Optimize your business for local search results",
    price: "$500 - $2,500/month",
    features: ["Local keyword optimization", "Review management", "Citation building", "Local content"],
    icon: <Globe className="h-8 w-8 text-zion-blue" />,
    category: "Local SEO",
    link: "/request-quote?service=local-seo"
  },
  {
    title: "E-commerce Marketing",
    description: "Specialized marketing strategies for online stores",
    price: "$1,500 - $8,000/month",
    features: ["Product optimization", "Shopping campaigns", "Retargeting", "Customer retention"],
    icon: <ShoppingCart className="h-8 w-8 text-zion-cyan" />,
    category: "E-commerce",
    link: "/request-quote?service=ecommerce-marketing"
  },
  {
    title: "Marketing Strategy Consulting",
    description: "Strategic guidance for your overall marketing approach",
    price: "$150 - $300/hour",
    features: ["Market analysis", "Competitive research", "Strategy development", "Implementation planning"],
          icon: <CheckCircle className="h-8 w-8 text-zion-purple" />,
    category: "Consulting",
    link: "/request-quote?service=marketing-consulting"
  },
  {
    title: "Brand Development & Positioning",
    description: "Develop a strong brand identity and market position",
    price: "$5,000 - $25,000",
    features: ["Brand strategy", "Visual identity", "Messaging framework", "Brand guidelines"],
    icon: <Eye className="h-8 w-8 text-zion-blue" />,
    category: "Branding",
    link: "/request-quote?service=brand-development"
  },
  {
    title: "Marketing Technology Stack",
    description: "Audit and optimize your marketing technology infrastructure",
    price: "$2,000 - $10,000",
    features: ["Tool assessment", "Integration planning", "Implementation", "Training"],
    icon: <Monitor className="h-8 w-8 text-zion-cyan" />,
    category: "MarTech",
    link: "/request-quote?service=marketing-technology"
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "SEO", value: "seo", icon: <Search className="h-4 w-4" /> },
  { name: "PPC", value: "ppc", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "Social Media", value: "social media", icon: <Share2 className="h-4 w-4" /> },
  { name: "Content", value: "content", icon: <FileText className="h-4 w-4" /> },
  { name: "Email", value: "email", icon: <Mail className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "CRO", value: "cro", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Influencer", value: "influencer", icon: <Users className="h-4 w-4" /> },
  { name: "Video", value: "video", icon: <Video className="h-4 w-4" /> },
  { name: "Design", value: "design", icon: <FileText className="h-4 w-4" /> },
  { name: "Automation", value: "automation", icon: <Zap className="h-4 w-4" /> },
  { name: "Local SEO", value: "local seo", icon: <Globe className="h-4 w-4" /> },
  { name: "E-commerce", value: "ecommerce", icon: <ShoppingCart className="h-4 w-4" /> },
  { name: "Consulting", value: "consulting", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Branding", value: "branding", icon: <Eye className="h-4 w-4" /> },
  { name: "MarTech", value: "martech", icon: <Monitor className="h-4 w-4" /> }
];

export default function DigitalMarketingServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredServices = selectedCategory === "all" 
    ? MarketingServices 
    : MarketingServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-purple-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Drive growth and engagement with our comprehensive digital marketing solutions. 
            From SEO to social media, we help businesses thrive online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Audit
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center gap-2 ${
                selectedCategory === category.value 
                  ? "bg-zion-purple text-white" 
                  : "border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-zion-purple-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert marketing team can create a customized strategy to help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <BarChart3 className="h-5 w-5 mr-2" />
              Get Free Marketing Audit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}