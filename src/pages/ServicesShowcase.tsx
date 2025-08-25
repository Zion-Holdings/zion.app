import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  support: string;
  price: string;
  marketPrice: string;
  link: string;
}

const SERVICES: Service[] = [
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "Advanced AI-powered content creation for blogs, marketing, and documentation",
    category: "AI & Machine Learning",
    icon: <Bot className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
    features: ["Multi-language support", "SEO optimization", "Content templates", "Plagiarism checking"],
    benefits: ["Save 80% time on content creation", "Improve SEO rankings", "Maintain brand voice consistency"],
    rating: 4.9,
    reviewCount: 127,
    deliveryTime: "Instant",
    support: "24/7 AI support + human assistance",
    price: "$99/month",
    marketPrice: "$299/month",
    link: "/services-showcase"
  },
  {
    id: "cybersecurity-assessment",
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audit and vulnerability assessment for your organization",
    category: "Security",
    icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
    features: ["Vulnerability scanning", "Penetration testing", "Compliance checking", "Security reporting"],
    benefits: ["Identify security gaps", "Meet compliance requirements", "Protect customer data"],
    rating: 4.8,
    reviewCount: 89,
    deliveryTime: "5-7 business days",
    support: "Dedicated security specialist",
    price: "$499/assessment",
    marketPrice: "$1500/assessment",
    link: "/services-showcase"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration Service",
    description: "Seamless migration to cloud platforms with minimal downtime",
    category: "Cloud & Infrastructure",
    icon: <Cloud className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
    features: ["AWS/Azure/GCP migration", "Zero-downtime deployment", "Data migration", "Performance optimization"],
    benefits: ["Reduce infrastructure costs", "Improve scalability", "Enhanced security"],
    rating: 4.9,
    reviewCount: 156,
    deliveryTime: "2-4 weeks",
    support: "Migration team + 6 months support",
    price: "$1999/project",
    marketPrice: "$5000/project",
    link: "/services-showcase"
  },
  {
    id: "data-analytics",
    title: "Data Analytics Dashboard",
    description: "Custom business intelligence dashboards and reporting solutions",
    category: "Data & Analytics",
    icon: <Database className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
    features: ["Real-time dashboards", "Custom KPIs", "Automated reporting", "Data visualization"],
    benefits: ["Make data-driven decisions", "Identify business opportunities", "Improve operational efficiency"],
    rating: 4.7,
    reviewCount: 203,
    deliveryTime: "3-5 weeks",
    support: "Analytics consultant + training",
    price: "$299/month",
    marketPrice: "$799/month",
    link: "/services-showcase"
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    description: "Custom API development and third-party service integration",
    category: "Development",
    icon: <Code className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
    features: ["RESTful APIs", "GraphQL support", "API documentation", "Testing & monitoring"],
    benefits: ["Streamline integrations", "Improve system efficiency", "Enable third-party partnerships"],
    rating: 4.8,
    reviewCount: 178,
    deliveryTime: "4-6 weeks",
    support: "Developer support + maintenance",
    price: "$399/project",
    marketPrice: "$1200/project",
    link: "/services-showcase"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design and implement scalable network solutions for enterprises",
    category: "Infrastructure",
    icon: <Globe className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
    features: ["Network design", "Security implementation", "Performance monitoring", "Scalability planning"],
    benefits: ["Improved network performance", "Enhanced security", "Better scalability"],
    rating: 4.6,
    reviewCount: 94,
    deliveryTime: "6-8 weeks",
    support: "Network engineer + monitoring",
    price: "$799/project",
    marketPrice: "$2500/project",
    link: "/services-showcase"
  },
  {
    id: "document-management",
    title: "Document Management System",
    description: "Enterprise-grade document organization and collaboration platform",
    category: "Productivity",
    icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
    features: ["Version control", "Collaboration tools", "Search & indexing", "Security & compliance"],
    benefits: ["Improve team collaboration", "Reduce document loss", "Ensure compliance"],
    rating: 4.5,
    reviewCount: 67,
    deliveryTime: "3-4 weeks",
    support: "Implementation specialist + training",
    price: "$149/month",
    marketPrice: "$399/month",
    link: "/services-showcase"
  },
  {
    id: "video-production",
    title: "Video Production Suite",
    description: "Professional video editing and production services for businesses",
    category: "Creative",
    icon: <Monitor className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
    features: ["Video editing", "Motion graphics", "Color grading", "Audio enhancement"],
    benefits: ["Professional quality videos", "Faster production time", "Cost-effective solutions"],
    rating: 4.7,
    reviewCount: 112,
    deliveryTime: "1-2 weeks",
    support: "Creative director + revisions",
    price: "$299/video",
    marketPrice: "$800/video",
    link: "/services-showcase"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Service",
    description: "User-centered design solutions for web and mobile applications",
    category: "Design",
    icon: <Code className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
    features: ["User research", "Wireframing", "Prototyping", "Usability testing"],
    benefits: ["Better user experience", "Higher conversion rates", "Reduced development costs"],
    rating: 4.9,
    reviewCount: 245,
    deliveryTime: "4-8 weeks",
    support: "Designer + 3 months support",
    price: "$599/project",
    marketPrice: "$1500/project",
    link: "/services-showcase"
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience",
    category: "Performance",
    icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
    features: ["Performance audit", "Code optimization", "Database tuning", "CDN setup"],
    benefits: ["Faster loading times", "Better user engagement", "Improved SEO rankings"],
    rating: 4.8,
    reviewCount: 189,
    deliveryTime: "2-3 weeks",
    support: "Performance engineer + monitoring",
    price: "$399/audit",
    marketPrice: "$999/audit",
    link: "/services-showcase"
  }
];

const categories = [
  "All Categories",
  "AI & Machine Learning",
  "Security",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Development",
  "Infrastructure",
  "Productivity",
  "Creative",
  "Design",
  "Performance"
];

export default function ServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('rating');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'delivery':
        return a.deliveryTime.localeCompare(b.deliveryTime);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Services Showcase</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
              <Input
                placeholder="Search by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue>{selectedCategory}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue>{sortBy}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="rating" className="text-white hover:bg-gray-700">Highest Rated</SelectItem>
                  <SelectItem value="price" className="text-white hover:bg-gray-700">Lowest Price</SelectItem>
                  <SelectItem value="delivery" className="text-white hover:bg-gray-700">Fastest Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Showing <span className="text-white font-semibold">{filteredServices.length}</span> services
            {selectedCategory !== 'All Categories' && (
              <> in <span className="text-white font-semibold">{selectedCategory}</span></>
            )}
          </p>
        </div>

        {/* Services Grid */}
        {sortedServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sortedServices.map((service) => (
              <Card key={service.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-white">{service.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-green-400 font-semibold">Zion: {service.price}</span>
                      <span className="text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span>{service.rating}</span>
                        <span>({service.reviewCount})</span>
                      </div>
                      <span>•</span>
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full gap-1 group-hover:bg-primary/90 transition-colors">
                    <Link to={service.link}>
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your search or category filters.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team for a custom quote tailored to your specific needs. We'll help you choose the right services and create a solution that fits your budget and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-button">
              <Link to="/request-quote">
                <span>Request Custom Quote</span>
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
    </div>
  );
}