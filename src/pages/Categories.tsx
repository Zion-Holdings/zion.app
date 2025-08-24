
import { CategoriesSection } from "@/components/CategoriesSection";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  Monitor, 
  Server,
  Zap,
  Globe,
  Lock,
  BarChart3
} from "lucide-react";

export default function Categories() {
  const mainCategories = [
    {
      title: "Artificial Intelligence",
      description: "Machine learning, deep learning, and AI consulting services",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      count: "500+",
      href: "/categories/ai"
    },
    {
      title: "Software Development",
      description: "Custom software, web apps, and mobile applications",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      count: "800+",
      href: "/categories/software"
    },
    {
      title: "Data & Analytics",
      description: "Data science, business intelligence, and analytics",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      count: "300+",
      href: "/categories/data"
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, CI/CD, and deployment services",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      count: "400+",
      href: "/categories/cloud"
    },
    {
      title: "Cybersecurity",
      description: "Security audits, penetration testing, and compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      count: "200+",
      href: "/categories/security"
    },
    {
      title: "IT Services",
      description: "Onsite support, network management, and consulting",
      icon: Server,
      color: "from-indigo-500 to-purple-500",
      count: "600+",
      href: "/categories/it-services"
    },
    {
      title: "Hardware & Equipment",
      description: "Specialized tech equipment and hardware solutions",
      icon: Monitor,
      color: "from-gray-500 to-slate-500",
      count: "150+",
      href: "/categories/hardware"
    },
    {
      title: "Mobile & IoT",
      description: "Mobile app development and IoT solutions",
      icon: Smartphone,
      color: "from-teal-500 to-blue-500",
      count: "250+",
      href: "/categories/mobile"
    },
    {
      title: "Green IT",
      description: "Sustainable technology and energy-efficient solutions",
      icon: Zap,
      color: "from-green-400 to-emerald-600",
      count: "100+",
      href: "/green-it"
    },
    {
      title: "Digital Transformation",
      description: "Business process optimization and digital strategy",
      icon: Globe,
      color: "from-violet-500 to-purple-600",
      count: "350+",
      href: "/categories/digital-transformation"
    },
    {
      title: "Blockchain & Web3",
      description: "Cryptocurrency, NFTs, and decentralized applications",
      icon: Lock,
      color: "from-yellow-500 to-orange-500",
      count: "120+",
      href: "/categories/blockchain"
    },
    {
      title: "Emerging Tech",
      description: "AR/VR, quantum computing, and cutting-edge innovations",
      icon: Zap,
      color: "from-pink-500 to-rose-500",
      count: "80+",
      href: "/categories/emerging-tech"
    }
  ];

  return (
    <>
      <SEO
        title="Categories - Browse AI & Tech Services | Zion Tech Group"
        description="Explore our comprehensive categories of AI services, software development, IT consulting, and technology solutions. Find the perfect service for your needs."
        keywords="AI categories, tech services, software development, IT consulting, categories"
        canonical="https://ziontechgroup.com/categories"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Browse Categories</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore our extensive range of AI services and products organized by category. 
              Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>
          
          {/* Main Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {mainCategories.map((category, index) => (
              <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group">
                <CardHeader className="text-center pb-3">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-zion-cyan transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-zion-blue text-zion-slate-light">
                      {category.count} services
                    </Badge>
                    <Link 
                      to={category.href}
                      className="text-zion-cyan hover:text-zion-purple text-sm font-medium transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Reuse the Categories Section component for detailed view */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Detailed Category Breakdown</h2>
            <CategoriesSection showTitle={false} />
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Can't find what you're looking for?</h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Our platform is constantly growing with new services and categories. 
                Contact us to discuss custom solutions or request a specific service category.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple/10 font-medium rounded-lg transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
