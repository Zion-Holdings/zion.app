import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Brain,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Monitor,
  Eye,
  Star,
  TrendingUp,
  DollarSign,
  CheckCircle
} from "lucide-react";

interface ServiceComparison {
  category: string;
  icon: React.ReactNode;
  description: string;
  bestFor: string[];
  startingPrice: number;
  timeToDeploy: string;
  complexity: string;
  scalability: string;
  security: string;
  support: string;
  features: string[];
  limitations: string[];
}

const SERVICE_COMPARISONS: ServiceComparison[] = [
  {
    category: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6 text-blue-500" />,
    description: "Cutting-edge artificial intelligence and machine learning solutions",
    bestFor: ["Data-driven businesses", "Process automation", "Customer insights", "Predictive analytics"],
    startingPrice: 5000,
    timeToDeploy: "4-8 weeks",
    complexity: "High",
    scalability: "Excellent",
    security: "High",
    support: "24/7",
    features: [
      "Custom ML model development",
      "AI integration",
      "Real-time processing",
      "Model optimization",
      "Advanced analytics"
    ],
    limitations: [
      "Requires quality data",
      "Initial setup complexity",
      "Ongoing maintenance needed"
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-green-500" />,
    description: "Scalable cloud solutions and modern infrastructure management",
    bestFor: ["Growing businesses", "Remote teams", "High availability needs", "Cost optimization"],
    startingPrice: 3000,
    timeToDeploy: "2-4 weeks",
    complexity: "Medium",
    scalability: "Excellent",
    security: "High",
    support: "24/7",
    features: [
      "Infrastructure monitoring",
      "Cost optimization",
      "Security management",
      "Disaster recovery",
      "Performance tuning"
    ],
    limitations: [
      "Monthly recurring costs",
      "Vendor lock-in risks",
      "Internet dependency"
    ]
  },
  {
    category: "Cybersecurity & Compliance",
    icon: <Shield className="h-6 w-6 text-red-500" />,
    description: "Comprehensive security solutions and regulatory compliance",
    bestFor: ["Financial services", "Healthcare", "E-commerce", "Government agencies"],
    startingPrice: 6000,
    timeToDeploy: "3-6 weeks",
    complexity: "High",
    scalability: "Good",
    security: "Excellent",
    support: "24/7",
    features: [
      "Security assessment",
      "Penetration testing",
      "Compliance preparation",
      "Incident response",
      "Security training"
    ],
    limitations: [
      "One-time setup cost",
      "Ongoing maintenance",
      "Staff training required"
    ]
  },
  {
    category: "Business Automation & RPA",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    description: "Intelligent automation solutions to streamline operations",
    bestFor: ["Repetitive tasks", "Process optimization", "Cost reduction", "Efficiency improvement"],
    startingPrice: 299,
    timeToDeploy: "1-2 weeks",
    complexity: "Low",
    scalability: "Good",
    security: "Medium",
    support: "Business hours",
    features: [
      "Workflow automation",
      "No-code platform",
      "App integrations",
      "Real-time monitoring",
      "Analytics dashboard"
    ],
    limitations: [
      "Limited custom development",
      "Standard integrations only",
      "Basic support tier"
    ]
  },
  {
    category: "Data Analytics & Business Intelligence",
    icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
    description: "Transform raw data into actionable insights",
    bestFor: ["Data-rich businesses", "Decision making", "Performance tracking", "Market analysis"],
    startingPrice: 199,
    timeToDeploy: "1-3 weeks",
    complexity: "Medium",
    scalability: "Good",
    security: "Medium",
    support: "Business hours",
    features: [
      "Data visualization",
      "Custom dashboards",
      "Predictive modeling",
      "Real-time insights",
      "Data integration"
    ],
    limitations: [
      "Data quality dependent",
      "Limited custom development",
      "Standard reporting only"
    ]
  },
  {
    category: "Blockchain Development",
    icon: <Monitor className="h-6 w-6 text-indigo-500" />,
    description: "Custom blockchain solutions and smart contract development",
    bestFor: ["Decentralized applications", "Smart contracts", "Token systems", "Supply chain"],
    startingPrice: 12000,
    timeToDeploy: "8-16 weeks",
    complexity: "Very High",
    scalability: "Excellent",
    security: "Very High",
    support: "24/7",
    features: [
      "Custom blockchain",
      "Smart contracts",
      "DeFi applications",
      "Token development",
      "Security auditing"
    ],
    limitations: [
      "High development cost",
      "Long development time",
      "Regulatory uncertainty"
    ]
  },
  {
    category: "IoT Solutions",
    icon: <Eye className="h-6 w-6 text-green-500" />,
    description: "End-to-end IoT development and smart city integration",
    bestFor: ["Smart cities", "Industrial IoT", "Connected devices", "Real-time monitoring"],
    startingPrice: 18000,
    timeToDeploy: "12-24 weeks",
    complexity: "Very High",
    scalability: "Excellent",
    security: "High",
    support: "24/7",
    features: [
      "Sensor networks",
      "Data collection",
      "Real-time processing",
      "Smart city integration",
      "Edge computing"
    ],
    limitations: [
      "High infrastructure cost",
      "Complex deployment",
      "Ongoing maintenance"
    ]
  },
  {
    category: "AR/VR Development",
    icon: <Eye className="h-6 w-6 text-purple-500" />,
    description: "Immersive technology solutions for training and marketing",
    bestFor: ["Training & education", "Marketing campaigns", "Product visualization", "Entertainment"],
    startingPrice: 22000,
    timeToDeploy: "10-20 weeks",
    complexity: "High",
    scalability: "Good",
    security: "Medium",
    support: "24/7",
    features: [
      "3D modeling",
      "Interactive experiences",
      "Multi-platform support",
      "Content creation",
      "User experience design"
    ],
    limitations: [
      "High development cost",
      "Hardware requirements",
      "Content creation needed"
    ]
  }
];

export default function ServicesComparison() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'very high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScalabilityColor = (scalability: string) => {
    switch (scalability.toLowerCase()) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSecurityColor = (security: string) => {
    switch (security.toLowerCase()) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'very high': return 'text-green-600 bg-green-100';
      case 'high': return 'text-blue-600 bg-blue-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Comparison
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Compare our comprehensive range of IT and AI services to find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Services
            </Button>
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

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Service Category
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Click on any service category to see detailed comparison and make an informed decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICE_COMPARISONS.map((service) => (
            <div
              key={service.category}
              className={`cursor-pointer hover:shadow-lg transition-all ${
                selectedCategory === service.category 
                  ? 'ring-2 ring-zion-blue shadow-lg' 
                  : ''
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === service.category ? null : service.category
              )}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.category}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.slice(0, 2).map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {service.bestFor.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.bestFor.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Starting Price</p>
                      <p className="text-xl font-bold text-zion-blue">
                        ${service.startingPrice.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Deploy Time</p>
                      <p className="text-sm font-medium">{service.timeToDeploy}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Badge className={`text-xs ${getComplexityColor(service.complexity)}`}>
                      {service.complexity} Complexity
                    </Badge>
                    <Badge className={`text-xs ${getScalabilityColor(service.scalability)}`}>
                      {service.scalability} Scalability
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        {selectedCategory && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Detailed Comparison: {selectedCategory}
            </h3>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Description</TableCell>
                      <TableCell>
                        {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Best For</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.bestFor.map((item, index) => (
                            <Badge key={index} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Starting Price</TableCell>
                      <TableCell className="text-xl font-bold text-zion-blue">
                        ${SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.startingPrice.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Time to Deploy</TableCell>
                      <TableCell>
                        {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.timeToDeploy}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Complexity</TableCell>
                      <TableCell>
                        <Badge className={getComplexityColor(
                          SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.complexity || ''
                        )}>
                          {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.complexity}
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Scalability</TableCell>
                      <TableCell>
                        <Badge className={getScalabilityColor(
                          SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.scalability || ''
                        )}>
                          {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.scalability}
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Security</TableCell>
                      <TableCell>
                        <Badge className={getSecurityColor(
                          SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.security || ''
                        )}>
                          {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.security}
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Support</TableCell>
                      <TableCell>
                        {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.support}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Key Features</TableCell>
                      <TableCell>
                        <ul className="space-y-1">
                          {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Limitations</TableCell>
                      <TableCell>
                        <ul className="space-y-1">
                          {SERVICE_COMPARISONS.find(s => s.category === selectedCategory)?.limitations.map((limitation, index) => (
                            <li key={index} className="flex items-center">
                              <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Decision Guide */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Quick Decision Guide</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Budget Conscious?</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Start with Business Automation ($299/month) or Data Analytics ($199/month)
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Need Fast Results?</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Choose Business Automation (1-2 weeks) or Data Analytics (1-3 weeks)
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Want Innovation?</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Consider AI/ML ($5,000+) or Blockchain ($12,000+) for cutting-edge solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you choose the right services and implement them successfully.
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