import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  X, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Brain,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Users,
  Settings,
  Globe,
  Lock,
  Database,
  Monitor,
  Eye,
  MessageSquare,
  FileText,
  TrendingUp,
  Zap as ZapIcon
} from "lucide-react";

interface PricingTier {
  name: string;
  price: number;
  billing: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  category: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tiers: PricingTier[];
}

const PRICING_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    icon: <Brain className="h-6 w-6 text-blue-500" />,
    tiers: [
      {
        name: "AI Development Starter",
        price: 5000,
        billing: "one-time",
        description: "Basic AI integration and custom model development",
        category: "AI/ML",
        icon: <Brain className="h-5 w-5 text-blue-500" />,
        features: [
          "Custom ML model development",
          "Basic AI integration",
          "Data preprocessing",
          "Model training",
          "Basic documentation",
          "2 months support"
        ],
        notIncluded: [
          "Advanced optimization",
          "Real-time processing",
          "Scalability planning",
          "Advanced monitoring"
        ]
      },
      {
        name: "AI Development Professional",
        price: 15000,
        billing: "one-time",
        description: "Advanced AI solutions with enterprise features",
        category: "AI/ML",
        icon: <Brain className="h-5 w-5 text-blue-500" />,
        popular: true,
        features: [
          "Advanced ML model development",
          "Real-time AI integration",
          "Scalable infrastructure",
          "Advanced optimization",
          "Comprehensive monitoring",
          "6 months support",
          "Performance tuning",
          "Security implementation"
        ],
        notIncluded: [
          "Ongoing maintenance",
          "Custom hardware",
          "Advanced analytics"
        ]
      },
      {
        name: "AI Development Enterprise",
        price: 35000,
        billing: "one-time",
        description: "Full-scale AI transformation with ongoing support",
        category: "AI/ML",
        icon: <Brain className="h-5 w-5 text-blue-500" />,
        features: [
          "Enterprise AI strategy",
          "Full AI transformation",
          "Custom hardware integration",
          "Advanced analytics",
          "Ongoing maintenance",
          "24/7 support",
          "Staff training",
          "Performance optimization"
        ],
        notIncluded: [
          "Third-party licenses",
          "Custom hardware costs"
        ]
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and modern infrastructure management",
    icon: <Cloud className="h-6 w-6 text-green-500" />,
    tiers: [
      {
        name: "Cloud Management Basic",
        price: 3000,
        billing: "monthly",
        description: "Essential cloud infrastructure monitoring and management",
        category: "Cloud",
        icon: <Cloud className="h-5 w-5 text-green-500" />,
        features: [
          "24/7 infrastructure monitoring",
          "Basic security management",
          "Performance monitoring",
          "Cost analysis reports",
          "Email support",
          "Monthly optimization"
        ],
        notIncluded: [
          "Advanced security features",
          "Disaster recovery",
          "Custom automation",
          "Priority support"
        ]
      },
      {
        name: "Cloud Management Professional",
        price: 8000,
        billing: "monthly",
        description: "Advanced cloud management with security and automation",
        category: "Cloud",
        icon: <Cloud className="h-5 w-5 text-green-500" />,
        popular: true,
        features: [
          "Advanced monitoring & alerting",
          "Security automation",
          "Cost optimization",
          "Disaster recovery",
          "Performance tuning",
          "Priority support",
          "Custom automation",
          "Compliance reporting"
        ],
        notIncluded: [
          "Custom development",
          "Advanced analytics",
          "Dedicated team"
        ]
      },
      {
        name: "Cloud Management Enterprise",
        price: 20000,
        billing: "monthly",
        description: "Full-service cloud management with dedicated team",
        category: "Cloud",
        icon: <Cloud className="h-5 w-5 text-green-500" />,
        features: [
          "Dedicated cloud team",
          "Custom automation",
          "Advanced analytics",
          "Multi-cloud management",
          "24/7 priority support",
          "Custom reporting",
          "Strategic planning",
          "Performance optimization"
        ],
        notIncluded: [
          "Custom software development",
          "Hardware procurement"
        ]
      }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions and regulatory compliance",
    icon: <Shield className="h-6 w-6 text-red-500" />,
    tiers: [
      {
        name: "Security Assessment Basic",
        price: 6000,
        billing: "one-time",
        description: "Comprehensive security assessment and basic protection",
        category: "Security",
        icon: <Shield className="h-5 w-5 text-red-500" />,
        features: [
          "Security vulnerability assessment",
          "Penetration testing",
          "Security report",
          "Basic remediation plan",
          "Security awareness training",
          "3 months support"
        ],
        notIncluded: [
          "Advanced security tools",
          "Ongoing monitoring",
          "Incident response",
          "Compliance certification"
        ]
      },
      {
        name: "Security Assessment Professional",
        price: 15000,
        billing: "one-time",
        description: "Advanced security assessment with implementation",
        category: "Security",
        icon: <Shield className="h-5 w-5 text-red-500" />,
        popular: true,
        features: [
          "Advanced security assessment",
          "Security implementation",
          "Ongoing monitoring",
          "Incident response planning",
          "Compliance preparation",
          "6 months support",
          "Security tools setup",
          "Staff training"
        ],
        notIncluded: [
          "Ongoing security operations",
          "Advanced compliance",
          "Custom security tools"
        ]
      },
      {
        name: "Security Assessment Enterprise",
        price: 35000,
        billing: "one-time",
        description: "Full security transformation with ongoing operations",
        category: "Security",
        icon: <Shield className="h-5 w-5 text-red-500" />,
        features: [
          "Full security transformation",
          "Advanced security tools",
          "Ongoing operations",
          "Compliance certification",
          "24/7 monitoring",
          "Incident response team",
          "Custom security solutions",
          "Ongoing support"
        ],
        notIncluded: [
          "Custom hardware",
          "Third-party licenses"
        ]
      }
    ]
  },
  {
    id: "business-automation",
    name: "Business Automation & RPA",
    description: "Intelligent automation solutions to streamline operations",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    tiers: [
      {
        name: "Workflow Automation Basic",
        price: 299,
        billing: "monthly",
        description: "Essential workflow automation for small teams",
        category: "Automation",
        icon: <Zap className="h-5 w-5 text-yellow-500" />,
        features: [
          "Unlimited workflows",
          "Standard integrations",
          "Basic automation",
          "Email support",
          "Community forum",
          "Basic analytics"
        ],
        notIncluded: [
          "Advanced integrations",
          "Custom development",
          "Priority support",
          "Advanced analytics"
        ]
      },
      {
        name: "Workflow Automation Professional",
        price: 799,
        billing: "monthly",
        description: "Advanced automation with custom integrations",
        category: "Automation",
        icon: <Zap className="h-5 w-5 text-yellow-500" />,
        popular: true,
        features: [
          "Advanced integrations",
          "Custom automation",
          "Priority support",
          "Advanced analytics",
          "Custom workflows",
          "API access",
          "Team collaboration",
          "Advanced reporting"
        ],
        notIncluded: [
          "Custom development",
          "Dedicated support",
          "Enterprise features"
        ]
      },
      {
        name: "Workflow Automation Enterprise",
        price: 1999,
        billing: "monthly",
        description: "Enterprise automation with dedicated support",
        category: "Automation",
        icon: <Zap className="h-5 w-5 text-yellow-500" />,
        features: [
          "Custom development",
          "Dedicated support",
          "Enterprise features",
          "Advanced security",
          "Custom integrations",
          "24/7 support",
          "Custom reporting",
          "Staff training"
        ],
        notIncluded: [
          "Custom hardware",
          "Third-party services"
        ]
      }
    ]
  },
  {
    id: "data-analytics",
    name: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights",
    icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
    tiers: [
      {
        name: "Analytics Basic",
        price: 199,
        billing: "monthly",
        description: "Essential analytics and reporting tools",
        category: "Analytics",
        icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
        features: [
          "Basic data analysis",
          "Standard reports",
          "Data visualization",
          "Email support",
          "Basic dashboards",
          "Data export"
        ],
        notIncluded: [
          "Advanced analytics",
          "Custom dashboards",
          "Predictive modeling",
          "Priority support"
        ]
      },
      {
        name: "Analytics Professional",
        price: 599,
        billing: "monthly",
        description: "Advanced analytics with custom dashboards",
        category: "Analytics",
        icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
        popular: true,
        features: [
          "Advanced analytics",
          "Custom dashboards",
          "Predictive modeling",
          "Priority support",
          "API access",
          "Custom reports",
          "Data integration",
          "Advanced visualization"
        ],
        notIncluded: [
          "Custom development",
          "Dedicated support",
          "Enterprise features"
        ]
      },
      {
        name: "Analytics Enterprise",
        price: 1499,
        billing: "monthly",
        description: "Enterprise analytics with custom solutions",
        category: "Analytics",
        icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
        features: [
          "Custom development",
          "Dedicated support",
          "Enterprise features",
          "Advanced security",
          "Custom integrations",
          "24/7 support",
          "Staff training",
          "Custom solutions"
        ],
        notIncluded: [
          "Custom hardware",
          "Third-party services"
        ]
      }
    ]
  }
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(false);

  const getDiscountedPrice = (price: number) => {
    return annualBilling ? Math.round(price * 0.8) : price;
  };

  const getBillingText = (billing: string) => {
    if (billing === "monthly") {
      return annualBilling ? "/month (billed annually)" : "/month";
    }
    return billing === "one-time" ? "one-time" : billing;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All our services come with transparent pricing and no hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-lg">Monthly Billing</span>
            <Switch
              checked={annualBilling}
              onCheckedChange={setAnnualBilling}
            />
            <span className="text-lg">
              Annual Billing
              <Badge className="ml-2 bg-green-500">Save 20%</Badge>
            </span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-zinc-800 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 text-zion-blue mb-2" />
              <h3 className="font-semibold">Phone</h3>
              <p className="text-zinc-600 dark:text-zinc-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 text-zion-blue mb-2" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-zinc-600 dark:text-zinc-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 text-zion-blue mb-2" />
              <h3 className="font-semibold">Address</h3>
              <p className="text-zinc-600 dark:text-zinc-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Service Category
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We offer comprehensive solutions across multiple technology domains. Select the category that best fits your needs.
          </p>
        </div>

        {PRICING_CATEGORIES.map((category) => (
          <div key={category.id} className="mb-20">
            <div className="flex items-center mb-8">
              {category.icon}
              <div className="ml-4">
                <h3 className="text-2xl md:text-3xl font-bold">{category.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.tiers.map((tier, index) => (
                <Card 
                  key={tier.name} 
                  className={`relative hover:shadow-lg transition-shadow ${
                    tier.popular ? 'ring-2 ring-zion-blue shadow-lg' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-zion-blue text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {tier.icon}
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Pricing */}
                    <div className="text-center">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-zion-blue">
                          ${getDiscountedPrice(tier.price).toLocaleString()}
                        </span>
                        <span className="ml-2 text-zinc-600 dark:text-zinc-400">
                          {getBillingText(tier.billing)}
                        </span>
                      </div>
                      {annualBilling && tier.billing === "monthly" && (
                        <p className="text-sm text-zinc-500 line-through">
                          ${tier.price.toLocaleString()}/month
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">What's Included</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    <div>
                      <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Not Included</h4>
                      <ul className="space-y-2">
                        {tier.notIncluded.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm">
                            <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                            <span className="text-zinc-500">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                      <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                        <Phone className="h-4 w-4 mr-2" />
                        Get Started
                      </Button>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="bg-white dark:bg-zinc-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We also offer specialized services for unique business requirements and emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Monitor className="h-6 w-6 text-indigo-500 mr-3" />
                  <CardTitle className="text-lg">Blockchain Development</CardTitle>
                </div>
                <CardDescription>
                  Custom blockchain solutions and smart contract development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zion-blue mb-2">$12,000+</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Project-based pricing</p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Eye className="h-6 w-6 text-green-500 mr-3" />
                  <CardTitle className="text-lg">IoT Solutions</CardTitle>
                </div>
                <CardDescription>
                  End-to-end IoT development and smart city integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zion-blue mb-2">$18,000+</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Project-based pricing</p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Eye className="h-6 w-6 text-purple-500 mr-3" />
                  <CardTitle className="text-lg">AR/VR Development</CardTitle>
                </div>
                <CardDescription>
                  Immersive technology solutions for training and marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zion-blue mb-2">$22,000+</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Project-based pricing</p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-6 w-6 text-blue-500 mr-3" />
                  <CardTitle className="text-lg">NLP Solutions</CardTitle>
                </div>
                <CardDescription>
                  Advanced natural language processing and chatbots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zion-blue mb-2">$9,500+</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Project-based pricing</p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <ZapIcon className="h-6 w-6 text-yellow-500 mr-3" />
                  <CardTitle className="text-lg">DevOps & CI/CD</CardTitle>
                </div>
                <CardDescription>
                  Streamline development workflow and deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zion-blue mb-2">$7,000+</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Project-based pricing</p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-6 w-6 text-red-500 mr-3" />
                  <CardTitle className="text-lg">Quantum Computing</CardTitle>
                </div>
                <CardDescription>
                  Expert guidance on quantum computing applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zion-blue mb-2">$25,000+</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Project-based pricing</p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see exactly what you need? We offer custom development and consulting services tailored to your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="h-5 w-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}