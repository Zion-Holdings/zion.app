import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Eye, 
  DollarSign,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Users,
  X,
  BarChart3,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceHighlights = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions that automate processes, provide intelligent insights, and drive business transformation.",
    benefits: ["80% reduction in manual work", "95% prediction accuracy", "Real-time decision making"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity Excellence",
    description: "Comprehensive security solutions including zero trust architecture, threat intelligence, and compliance automation.",
    benefits: ["90% reduction in security incidents", "99.9% threat detection accuracy", "Automated compliance"],
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description: "Multi-cloud orchestration, DevOps automation, and serverless architecture for scalable, efficient operations.",
    benefits: ["80% faster deployment", "Multi-cloud optimization", "Auto-scaling infrastructure"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    description: "Real-time analytics, data governance, and predictive maintenance using advanced ML algorithms.",
    benefits: ["Sub-second latency", "60% downtime reduction", "Predictive insights"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Blockchain & Web3",
    description: "Enterprise blockchain solutions and DeFi platforms with audited smart contracts and security best practices.",
    benefits: ["Supply chain transparency", "Decentralized finance", "Audited security"],
    color: "from-orange-500 to-yellow-600"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Edge & Quantum Computing",
    description: "Edge computing for ultra-low latency and quantum algorithms for complex optimization problems.",
    benefits: ["Ultra-low latency", "Quantum advantage", "5G integration"],
    color: "from-indigo-500 to-purple-600"
  }
];

const competitiveAdvantages = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Industry Expertise",
    description: "15+ years of experience in cutting-edge technologies with proven track record across industries."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Implementation",
    description: "Average delivery time of 3-6 weeks with agile methodology and continuous deployment."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Services available worldwide with local support teams and 24/7 customer service."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Personal account managers, technical support, and ongoing maintenance for all solutions."
  },
  {
    icon: <X className="w-6 h-6" />,
    title: "Custom Solutions",
    description: "Tailored implementations designed specifically for your business needs and industry requirements."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "ROI Guarantee",
    description: "Measurable business outcomes with performance metrics and continuous optimization."
  }
];

const pricingComparison = [
  {
    feature: "AI Process Automation",
    market: "$8,000 - $15,000",
    ziontech: "$2,999",
    savings: "63% savings"
  },
  {
    feature: "Zero Trust Security",
    market: "$15,000 - $25,000",
    ziontech: "$8,999",
    savings: "44% savings"
  },
  {
    feature: "Multi-Cloud Orchestration",
    market: "$10,000 - $18,000",
    ziontech: "$5,499",
    savings: "45% savings"
  },
  {
    feature: "Real-Time Analytics",
    market: "$12,000 - $20,000",
    ziontech: "$7,999",
    savings: "40% savings"
  },
  {
    feature: "Enterprise Blockchain",
    market: "$25,000 - $40,000",
    ziontech: "$14,999",
    savings: "40% savings"
  }
];

export function ServicesOverview() {
  return (
    <div className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose ZionTech Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our comprehensive suite of technology services delivers measurable business outcomes, 
            competitive pricing, and world-class support to help you stay ahead of the competition.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceHighlights.map((service, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-zion-cyan">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                <div className="p-2 bg-zion-purple/20 rounded-lg flex-shrink-0">
                  <div className="text-zion-cyan">
                    {advantage.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{advantage.title}</h4>
                  <p className="text-zion-slate-light text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Pricing Comparison
          </h3>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-zion-blue-light border-b border-zion-blue-light">
              <div className="font-semibold text-white">Service Feature</div>
              <div className="font-semibold text-white text-center">Market Average</div>
              <div className="font-semibold text-zion-cyan text-center">ZionTech Price</div>
              <div className="font-semibold text-green-400 text-center">Your Savings</div>
            </div>
            {pricingComparison.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-zion-blue-light last:border-b-0">
                <div className="text-white">{item.feature}</div>
                <div className="text-zion-slate-light text-center">{item.market}</div>
                <div className="text-zion-cyan text-center font-semibold">{item.ziontech}</div>
                <div className="text-green-400 text-center font-semibold">{item.savings}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Badge className="bg-green-500 text-white text-lg px-6 py-2">
              Average 46% Cost Savings
            </Badge>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-12 mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enhanced-services">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                                <ArrowUpRight className="w-5 h-5 mr-2" />
              Explore All Services
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Lock className="w-5 h-5 mr-2" />
                  Get Free Security Audit
              </Button>
            </div>
          </div>
          
          <div className="text-zion-slate-light">
            <p className="mb-2">Contact us today for a free consultation and custom quote</p>
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan">
              <span>📞 +1 302 464 0950</span>
              <span>✉️ kleber@ziontechgroup.com</span>
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}