import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  Zap,
  DollarSign,
  Clock,
  Users,
  Globe,
  Award,
  X,
  BarChart3,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const competitorComparison = {
  "AI Process Automation": {
    ziontech: {
      price: "$2,999",
      delivery: "2-3 weeks",
      features: ["Process mapping", "RPA integration", "Analytics dashboard", "AI optimization", "24/7 support"],
      rating: 4.9,
      reviews: 156
    },
    competitors: {
      "IBM Automation": {
        price: "$8,500",
        delivery: "6-8 weeks",
        features: ["Process mapping", "RPA integration", "Basic analytics", "Email support"],
        rating: 4.2,
        reviews: 89
      },
      "Microsoft Power Automate": {
        price: "$5,200",
        delivery: "4-6 weeks",
        features: ["Process mapping", "RPA integration", "Analytics", "Phone support"],
        rating: 4.5,
        reviews: 234
      }
    }
  },
  "Zero Trust Security": {
    ziontech: {
      price: "$8,999",
      delivery: "4-6 weeks",
      features: ["Identity verification", "Device trust scoring", "Network segmentation", "Continuous monitoring", "Compliance automation"],
      rating: 4.9,
      reviews: 67
    },
    competitors: {
      "Cisco Zero Trust": {
        price: "$18,500",
        delivery: "8-12 weeks",
        features: ["Identity verification", "Device trust", "Network segmentation", "Basic monitoring"],
        rating: 4.3,
        reviews: 156
      },
      "Palo Alto Networks": {
        price: "$22,000",
        delivery: "10-14 weeks",
        features: ["Identity verification", "Device trust", "Network segmentation", "Advanced monitoring"],
        rating: 4.6,
        reviews: 203
      }
    }
  },
  "Multi-Cloud Orchestration": {
    ziontech: {
      price: "$5,499",
      delivery: "3-4 weeks",
      features: ["AWS integration", "Azure integration", "GCP integration", "Cost optimization", "Performance monitoring"],
      rating: 4.8,
      reviews: 112
    },
    competitors: {
      "HashiCorp Terraform": {
        price: "$12,000",
        delivery: "6-8 weeks",
        features: ["Multi-cloud support", "Infrastructure as code", "Basic monitoring"],
        rating: 4.4,
        reviews: 445
      },
      "VMware vRealize": {
        price: "$15,500",
        delivery: "8-10 weeks",
        features: ["Multi-cloud support", "Advanced monitoring", "Cost management"],
        rating: 4.1,
        reviews: 178
      }
    }
  },
  "Real-Time Analytics": {
    ziontech: {
      price: "$7,999",
      delivery: "5-6 weeks",
      features: ["Streaming analytics", "Sub-second latency", "ML insights", "Custom dashboards", "API access"],
      rating: 4.8,
      reviews: 34
    },
    competitors: {
      "Apache Kafka": {
        price: "$18,000",
        delivery: "8-12 weeks",
        features: ["Streaming platform", "High throughput", "Basic analytics"],
        rating: 4.2,
        reviews: 567
      },
      "AWS Kinesis": {
        price: "$25,000",
        delivery: "6-8 weeks",
        features: ["Streaming analytics", "Managed service", "ML integration"],
        rating: 4.5,
        reviews: 892
      }
    }
  },
  "Enterprise Blockchain": {
    ziontech: {
      price: "$14,999",
      delivery: "8-10 weeks",
      features: ["Custom blockchain", "Smart contracts", "Supply chain integration", "Audited security", "24/7 support"],
      rating: 4.8,
      reviews: 18
    },
    competitors: {
      "IBM Blockchain": {
        price: "$35,000",
        delivery: "16-20 weeks",
        features: ["Hyperledger Fabric", "Smart contracts", "Basic support"],
        rating: 4.1,
        reviews: 89
      },
      "Microsoft Azure Blockchain": {
        price: "$28,500",
        delivery: "12-16 weeks",
        features: ["Ethereum integration", "Smart contracts", "Managed service"],
        rating: 4.3,
        reviews: 156
      }
    }
  }
};

const featureMatrix = [
  {
    feature: "24/7 Support",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Custom Development",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "AI Integration",
    ziontech: true,
    competitors: [false, true, false, false, false]
  },
  {
    feature: "Compliance Automation",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Real-time Monitoring",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Multi-language Support",
    ziontech: true,
    competitors: [true, false, false, false, false]
  },
  {
    feature: "API Access",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Training & Documentation",
    ziontech: true,
    competitors: [false, false, false, false, false]
  }
];

const marketAnalysis = [
  {
    metric: "Average Cost Savings",
    ziontech: "46%",
    industry: "15%",
    advantage: "31% better"
  },
  {
    metric: "Implementation Speed",
    ziontech: "3-6 weeks",
    industry: "8-16 weeks",
    advantage: "2.5x faster"
  },
  {
    metric: "Customer Satisfaction",
    ziontech: "4.9/5",
    industry: "4.2/5",
    advantage: "17% higher"
  },
  {
    metric: "Support Response Time",
    ziontech: "< 2 hours",
    industry: "24-48 hours",
    advantage: "12x faster"
  },
  {
    metric: "Customization Level",
    ziontech: "100%",
    industry: "40-60%",
    advantage: "67% more flexible"
  }
];

export default function ServicesComparisonPage() {
  const [selectedService, setSelectedService] = useState<string>("AI Process Automation");

  const getCompetitorNames = (serviceKey: string) => {
    return Object.keys(competitorComparison[serviceKey as keyof typeof competitorComparison]?.competitors || {});
  };

  const renderFeatureComparison = (serviceKey: string) => {
    const service = competitorComparison[serviceKey as keyof typeof competitorComparison];
    if (!service) return null;

    const competitorNames = getCompetitorNames(serviceKey);
    
    return (
      <div className="space-y-6">
        {/* ZionTech vs Competitors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ZionTech */}
          <Card className="bg-gradient-to-br from-zion-purple to-zion-purple-dark text-white border-zion-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                ZionTech
              </CardTitle>
              <div className="text-3xl font-bold text-zion-cyan">{service.ziontech.price}</div>
              <div className="text-zion-slate-light">Delivery: {service.ziontech.delivery}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {service.ziontech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple-light">
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{service.ziontech.rating}/5</span>
                  <span className="text-zion-slate-light">({service.ziontech.reviews} reviews)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitors */}
          {competitorNames.map((competitor, idx) => (
            <Card key={idx} className="bg-zion-blue-dark border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle>{competitor}</CardTitle>
                <div className="text-3xl font-bold text-zion-slate-light">{service.competitors[competitor].price}</div>
                <div className="text-zion-slate-light">Delivery: {service.competitors[competitor].delivery}</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.competitors[competitor].features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-zion-blue-light">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.competitors[competitor].rating}/5</span>
                    <span className="text-zion-slate-light">({service.competitors[competitor].reviews} reviews)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savings Calculation */}
        <Card className="bg-zion-blue-dark border-zion-blue-light text-white">
          <CardHeader>
            <CardTitle className="text-zion-cyan">Cost Savings Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitorNames.map((competitor, idx) => {
                const ziontechPrice = parseInt(service.ziontech.price.replace('$', '').replace(',', ''));
                const competitorPrice = parseInt(service.competitors[competitor].price.replace('$', '').replace(',', ''));
                const savings = competitorPrice - ziontechPrice;
                const savingsPercent = Math.round((savings / competitorPrice) * 100);
                
                return (
                  <div key={idx} className="text-center p-4 bg-zion-blue rounded-lg">
                    <div className="text-lg font-semibold text-white mb-2">vs {competitor}</div>
                    <div className="text-2xl font-bold text-green-400">${savings.toLocaleString()}</div>
                    <div className="text-zion-cyan">{savingsPercent}% savings</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Services Comparison - ZionTech vs Competitors" 
        description="Compare ZionTech services with industry competitors. See how we deliver better value, faster implementation, and superior support at competitive prices."
        keywords="service comparison, competitive analysis, pricing comparison, IT services comparison, AI services comparison"
        canonical="https://ziontechgroup.com/services-comparison"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ZionTech vs Competitors
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            See how our innovative technology services stack up against industry leaders. 
            Better features, faster delivery, and superior support at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <TrendingUp className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <BarChart3 className="w-5 h-5 mr-2" />
              Download Comparison PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={Object.keys(competitorComparison)[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-zion-blue-dark border-zion-blue-light">
              {Object.keys(competitorComparison).map((service) => (
                <TabsTrigger 
                  key={service} 
                  value={service}
                  className="text-white data-[state=active]:bg-zion-purple data-[state=active]:text-white"
                >
                  {service.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(competitorComparison).map((service) => (
              <TabsContent key={service} value={service} className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{service}</h2>
                  <p className="text-zion-slate-light text-lg">
                    Comprehensive comparison with industry competitors
                  </p>
                </div>
                {renderFeatureComparison(service)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Feature Matrix */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Feature Comparison Matrix</h2>
            <p className="text-zion-slate-light text-lg">
              See how our comprehensive feature set compares to industry standards
            </p>
          </div>

          <Card className="bg-zion-blue border-zion-blue-light text-white">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zion-blue-light border-b border-zion-blue-light">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-zion-cyan">ZionTech</th>
                      <th className="text-center p-4 font-semibold">Industry Average</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureMatrix.map((feature, idx) => (
                      <tr key={idx} className="border-b border-zion-blue-light">
                        <td className="p-4 font-medium">{feature.feature}</td>
                        <td className="p-4 text-center">
                          {feature.ziontech ? (
                            <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-zion-slate-light">
                            {Math.round((feature.competitors.filter(c => c).length / feature.competitors.length) * 100)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Market Performance Analysis</h2>
            <p className="text-zion-slate-light text-lg">
              How ZionTech outperforms industry standards across key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketAnalysis.map((metric, idx) => (
              <Card key={idx} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader>
                  <CardTitle className="text-zion-cyan">{metric.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">ZionTech:</span>
                      <span className="font-bold text-white">{metric.ziontech}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Industry:</span>
                      <span className="font-bold text-zion-slate-light">{metric.industry}</span>
                    </div>
                    <div className="text-center pt-2 border-t border-zion-blue-light">
                      <Badge className="bg-green-500 text-white">{metric.advantage}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the ZionTech Difference?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have chosen ZionTech for superior technology solutions, 
            faster implementation, and better value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <X className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Users className="w-5 h-5 mr-2" />
              Talk to Sales Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}