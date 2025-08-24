import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Building, 
    CheckCircle,
  TrendingUp,
  Users,
  BarChart3,
  FileText,
  Zap,
  Globe,
  Server,
  Eye,
  MessageSquare,
  Code,
  Shield,
  Settings,
  Monitor,
  Smartphone,
  Calendar,
  DollarSign,
  PieChart,
  ArrowUpRight,
  Search,
  Lightbulb,
  Award,
  Clock,
  Star,
  Leaf
} from 'lucide-react';

const BusinessSolutions = [
  {
    title: "Business Strategy Consulting",
    description: "Strategic planning and business model optimization for growth",
    price: "$200 - $500/hour",
    features: ["Market analysis", "Competitive research", "Growth strategy", "Implementation roadmap"],
          icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
    category: "Strategy",
    badge: "Popular",
    link: "/request-quote?service=business-strategy"
  },
  {
    title: "Process Automation & Optimization",
    description: "Streamline operations and eliminate inefficiencies",
    price: "$5,000 - $50,000",
    features: ["Process mapping", "Automation design", "Implementation", "Training & support"],
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    category: "Automation",
    badge: "Premium",
    link: "/request-quote?service=process-automation"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology",
    price: "$25,000 - $200,000",
    features: ["Technology assessment", "Migration planning", "Implementation", "Change management"],
          icon: <Zap className="h-8 w-8 text-zion-blue" />,
    category: "Transformation",
    link: "/request-quote?service=digital-transformation"
  },
  {
    title: "Business Intelligence & Analytics",
    description: "Data-driven insights for better decision making",
    price: "$2,000 - $15,000/month",
    features: ["Dashboard creation", "KPI tracking", "Predictive analytics", "Custom reporting"],
    icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />,
    category: "Analytics",
    link: "/request-quote?service=business-intelligence"
  },
  {
    title: "Change Management",
    description: "Navigate organizational changes successfully",
    price: "$150 - $300/hour",
    features: ["Change strategy", "Communication planning", "Training programs", "Success measurement"],
    icon: <Users className="h-8 w-8 text-zion-purple" />,
    category: "Change Management",
    link: "/request-quote?service=change-management"
  },
  {
    title: "Financial Planning & Analysis",
    description: "Strategic financial guidance and forecasting",
    price: "$1,500 - $8,000/month",
    features: ["Budget planning", "Financial modeling", "Cash flow analysis", "Investment strategy"],
    icon: <DollarSign className="h-8 w-8 text-zion-blue" />,
    category: "Finance",
    link: "/request-quote?service=financial-planning"
  },
  {
    title: "Market Research & Analysis",
    description: "Deep insights into your market and customers",
    price: "$3,000 - $25,000",
    features: ["Customer surveys", "Competitive analysis", "Market sizing", "Trend forecasting"],
    icon: <Search className="h-8 w-8 text-zion-cyan" />,
    category: "Research",
    link: "/request-quote?service=market-research"
  },
  {
    title: "Operational Excellence",
    description: "Optimize your operations for maximum efficiency",
    price: "$5,000 - $40,000",
    features: ["Process improvement", "Quality management", "Lean methodology", "Performance metrics"],
    icon: <CheckCircle className="h-8 w-8 text-zion-purple" />,
    category: "Operations",
    link: "/request-quote?service=operational-excellence"
  },
  {
    title: "Customer Experience Design",
    description: "Create exceptional customer journeys",
    price: "$8,000 - $60,000",
    features: ["Journey mapping", "UX research", "Service design", "Implementation"],
    icon: <Eye className="h-8 w-8 text-zion-blue" />,
    category: "Customer Experience",
    link: "/request-quote?service=customer-experience"
  },
  {
    title: "Supply Chain Optimization",
    description: "Streamline your supply chain for cost and efficiency",
    price: "$10,000 - $75,000",
    features: ["Supply chain audit", "Optimization strategy", "Vendor management", "Implementation"],
    icon: <Globe className="h-8 w-8 text-zion-cyan" />,
    category: "Supply Chain",
    link: "/request-quote?service=supply-chain"
  },
  {
    title: "Risk Management & Compliance",
    description: "Identify and mitigate business risks",
    price: "$2,000 - $20,000",
    features: ["Risk assessment", "Compliance audit", "Policy development", "Training programs"],
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    category: "Risk Management",
    link: "/request-quote?service=risk-management"
  },
  {
    title: "Performance Management Systems",
    description: "Implement effective performance tracking and improvement",
    price: "$3,000 - $25,000",
    features: ["KPI framework", "Performance tracking", "Feedback systems", "Improvement plans"],
    icon: <Star className="h-8 w-8 text-zion-blue" />,
    category: "Performance",
    link: "/request-quote?service=performance-management"
  },
  {
    title: "Innovation & R&D Strategy",
    description: "Drive innovation and research initiatives",
    price: "$5,000 - $50,000",
    features: ["Innovation strategy", "R&D planning", "Partnership development", "IP protection"],
    icon: <Lightbulb className="h-8 w-8 text-zion-cyan" />,
    category: "Innovation",
    link: "/request-quote?service=innovation-strategy"
  },
  {
    title: "Mergers & Acquisitions Support",
    description: "Navigate complex M&A transactions successfully",
    price: "$25,000 - $200,000",
    features: ["Due diligence", "Valuation analysis", "Integration planning", "Post-merger support"],
    icon: <Building className="h-8 w-8 text-zion-purple" />,
    category: "M&A",
    link: "/request-quote?service=mergers-acquisitions"
  },
  {
    title: "International Expansion",
    description: "Expand your business globally with confidence",
    price: "$15,000 - $100,000",
    features: ["Market entry strategy", "Legal compliance", "Local partnerships", "Cultural adaptation"],
    icon: <Globe className="h-8 w-8 text-zion-blue" />,
    category: "Expansion",
    link: "/request-quote?service=international-expansion"
  },
  {
    title: "Sustainability & ESG Consulting",
    description: "Build sustainable business practices and ESG compliance",
    price: "$3,000 - $30,000",
    features: ["Sustainability audit", "ESG strategy", "Implementation planning", "Reporting"],
    icon: <Leaf className="h-8 w-8 text-zion-cyan" />,
    category: "Sustainability",
    badge: "New",
    link: "/request-quote?service=sustainability-consulting"
  }
];

const categories = [
  { name: "All", value: "all", icon: <Building className="h-4 w-4" /> },
  { name: "Strategy", value: "strategy", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Automation", value: "automation", icon: <Zap className="h-4 w-4" /> },
  { name: "Transformation", value: "transformation", icon: <Zap className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Change Management", value: "change management", icon: <Users className="h-4 w-4" /> },
  { name: "Finance", value: "finance", icon: <DollarSign className="h-4 w-4" /> },
  { name: "Research", value: "research", icon: <Search className="h-4 w-4" /> },
  { name: "Operations", value: "operations", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Customer Experience", value: "customer experience", icon: <Eye className="h-4 w-4" /> },
  { name: "Supply Chain", value: "supply chain", icon: <Globe className="h-4 w-4" /> },
  { name: "Risk Management", value: "risk management", icon: <Shield className="h-4 w-4" /> },
  { name: "Performance", value: "performance", icon: <Star className="h-4 w-4" /> },
  { name: "Innovation", value: "innovation", icon: <Lightbulb className="h-4 w-4" /> },
  { name: "M&A", value: "m&a", icon: <Building className="h-4 w-4" /> },
  { name: "Expansion", value: "expansion", icon: <Globe className="h-4 w-4" /> },
  { name: "Sustainability", value: "sustainability", icon: <Leaf className="h-4 w-4" /> }
];

export default function BusinessSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredSolutions = selectedCategory === "all" 
    ? BusinessSolutions 
    : BusinessSolutions.filter(solution => solution.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Business Solutions & Consulting
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Transform your business with strategic consulting, process optimization, and innovative solutions. 
            We help organizations achieve sustainable growth and operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Assessment
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
                  ? "bg-zion-blue text-white" 
                  : "border-zion-blue text-zion-blue hover:bg-zion-blue/10"
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSolutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-blue/20 hover:border-zion-blue/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors">
                    {solution.icon}
                  </div>
                  {solution.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {solution.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{solution.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={solution.link}>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert consultants can help you identify opportunities, optimize processes, and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <BarChart3 className="h-5 w-5 mr-2" />
              Get Free Business Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}