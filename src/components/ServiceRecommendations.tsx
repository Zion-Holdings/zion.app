import React, { useState, useMemo } from 'react';
import { EXPANDED_SERVICES, ExpandedService } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Brain, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Database, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface BusinessNeed {
  id: string;
  name: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
}

const BUSINESS_NEEDS: BusinessNeed[] = [
  // AI & Automation
  { id: 'customer-automation', name: 'Customer Service Automation', description: 'Automate customer interactions and support', category: 'AI & Automation', priority: 'medium' },
  { id: 'data-insights', name: 'Data Analytics & Insights', description: 'Get actionable insights from your business data', category: 'AI & Automation', priority: 'medium' },
  { id: 'process-automation', name: 'Business Process Automation', description: 'Streamline and automate workflows', category: 'AI & Automation', priority: 'high' },
  
  // Security & Compliance
  { id: 'cybersecurity', name: 'Cybersecurity Protection', description: 'Protect your business from cyber threats', category: 'Security & Compliance', priority: 'high' },
  { id: 'compliance', name: 'Regulatory Compliance', description: 'Meet industry and government regulations', category: 'Security & Compliance', priority: 'medium' },
  { id: 'data-protection', name: 'Data Protection & Privacy', description: 'Secure sensitive business and customer data', category: 'Security & Compliance', priority: 'high' },
  
  // Digital Transformation
  { id: 'cloud-migration', name: 'Cloud Migration', description: 'Move to cloud-based infrastructure', category: 'Digital Transformation', priority: 'high' },
  { id: 'web-presence', name: 'Modern Web Presence', description: 'Build or upgrade your website and online presence', category: 'Digital Transformation', priority: 'medium' },
  { id: 'mobile-apps', name: 'Mobile Applications', description: 'Develop mobile apps for your business', category: 'Digital Transformation', priority: 'medium' },
  
  // Performance & Scalability
  { id: 'performance', name: 'Performance Optimization', description: 'Improve system and application performance', category: 'Performance & Scalability', priority: 'medium' },
  { id: 'scalability', name: 'Scalability Solutions', description: 'Build systems that grow with your business', category: 'Performance & Scalability', priority: 'high' },
  { id: 'monitoring', name: 'System Monitoring', description: 'Monitor and maintain your IT infrastructure', category: 'Performance & Scalability', priority: 'low' },
  
  // Innovation & Growth
  { id: 'blockchain', name: 'Blockchain Solutions', description: 'Explore blockchain and Web3 opportunities', category: 'Innovation & Growth', priority: 'low' },
  { id: 'iot', name: 'IoT Integration', description: 'Connect and manage smart devices', category: 'Innovation & Growth', priority: 'low' },
  { id: 'ai-strategy', name: 'AI Strategy & Implementation', description: 'Develop and implement AI initiatives', category: 'Innovation & Growth', priority: 'medium' }
];

interface ServiceRecommendationsProps {
  maxRecommendations?: number;
}

export function ServiceRecommendations({ maxRecommendations = 6 }: ServiceRecommendationsProps) {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [businessSize, setBusinessSize] = useState<string>('small');
  const [industry, setIndustry] = useState<string>('technology');
  const [budget, setBudget] = useState<string>('medium');

  const selectedNeedObjects = useMemo(() => {
    return BUSINESS_NEEDS.filter(need => selectedNeeds.includes(need.id));
  }, [selectedNeeds]);

  const getRecommendations = useMemo(() => {
    if (selectedNeedObjects.length === 0) return [];
    
    // Calculate relevance scores for each service
    const serviceScores = EXPANDED_SERVICES.map(service => {
      let score = 0;
      
      // Match service category with business needs
      selectedNeedObjects.forEach(need => {
        if (need.category === 'AI & Automation' && service.category === 'AI & Machine Learning') {
          score += 10;
        } else if (need.category === 'Security & Compliance' && service.category === 'Cybersecurity') {
          score += 10;
        } else if (need.category === 'Digital Transformation' && 
                  (service.category === 'Web & Mobile Development' || service.category === 'Cloud & DevOps')) {
          score += 10;
        } else if (need.category === 'Performance & Scalability' && 
                  (service.category === 'Cloud & DevOps' || service.category === 'Data & Analytics')) {
          score += 8;
        } else if (need.category === 'Innovation & Growth' && 
                  (service.category === 'Blockchain & Web3' || service.category === 'IoT & Hardware Integration')) {
          score += 8;
        }
        
        // Priority weighting
        if (need.priority === 'high') score += 5;
        else if (need.priority === 'medium') score += 3;
        else score += 1;
      });
      
      // Business size considerations
      if (businessSize === 'enterprise' && service.price > 10000) score += 3;
      else if (businessSize === 'small' && service.price < 5000) score += 3;
      else if (businessSize === 'medium' && service.price >= 5000 && service.price <= 10000) score += 3;
      
      // Budget considerations
      if (budget === 'high' && service.price > 10000) score += 2;
      else if (budget === 'medium' && service.price >= 5000 && service.price <= 10000) score += 2;
      else if (budget === 'low' && service.price < 5000) score += 2;
      
      // Industry-specific recommendations
      if (industry === 'finance' && service.category === 'Cybersecurity') score += 3;
      else if (industry === 'healthcare' && service.category === 'Data & Analytics') score += 3;
      else if (industry === 'retail' && service.category === 'Web & Mobile Development') score += 3;
      else if (industry === 'manufacturing' && service.category === 'IoT & Hardware Integration') score += 3;
      
      return { ...service, relevanceScore: score };
    });
    
    // Sort by relevance score and return top recommendations
    return serviceScores
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxRecommendations);
  }, [selectedNeedObjects, businessSize, industry, budget, maxRecommendations]);

  const handleNeedToggle = (needId: string) => {
    setSelectedNeeds(prev => {
      if (prev.includes(needId)) {
        return prev.filter(id => id !== needId);
      } else {
        return [...prev, needId];
      }
    });
  };

  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, string> = {
      "AI & Machine Learning": "🤖",
      "Cloud & DevOps": "☁️",
      "Cybersecurity": "🔒",
      "Data & Analytics": "📊",
      "Web & Mobile Development": "💻",
      "Blockchain & Web3": "⛓️",
      "IoT & Hardware Integration": "🔌",
      "Business Process Automation": "⚙️"
    };
    return icons[categoryName] || "🔧";
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'High Priority';
      case 'medium': return 'Medium Priority';
      case 'low': return 'Low Priority';
      default: return priority;
    }
  };

  return (
    <div className="py-12 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            <Brain className="inline-block mr-3 h-10 w-10" />
            AI-Powered Service Recommendations
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Tell us about your business needs and get personalized service recommendations. 
            Our AI analyzes your requirements to suggest the most suitable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Profile */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle className="text-xl">Business Profile</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Help us understand your business better
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Business Size</Label>
                  <Select value={businessSize} onValueChange={setBusinessSize}>
                    <SelectTrigger className="bg-white/20 border-zion-blue-light text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small Business (1-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="bg-white/20 border-zion-blue-light text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white">Budget Range</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="bg-white/20 border-zion-blue-light text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">$1,000 - $5,000</SelectItem>
                      <SelectItem value="medium">$5,000 - $15,000</SelectItem>
                      <SelectItem value="high">$15,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Business Needs Selection */}
            <Card className="bg-white/10 border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle className="text-xl">Business Needs</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Select all that apply to your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {BUSINESS_NEEDS.map((need) => (
                    <div key={need.id} className="flex items-start space-x-3">
                      <Checkbox
                        id={need.id}
                        checked={selectedNeeds.includes(need.id)}
                        onCheckedChange={() => handleNeedToggle(need.id)}
                      />
                      <div className="flex-1">
                        <label 
                          htmlFor={need.id} 
                          className="text-sm font-medium cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span>{need.name}</span>
                            <Badge className={getPriorityColor(need.priority)}>
                              {getPriorityLabel(need.priority)}
                            </Badge>
                          </div>
                          <p className="text-xs text-zion-slate-light">
                            {need.description}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl">
              <CardHeader className="bg-zion-purple text-white">
                <CardTitle className="text-2xl">Personalized Recommendations</CardTitle>
                <CardDescription className="text-white/90">
                  Based on your business profile and needs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {selectedNeeds.length > 0 ? (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <Lightbulb className="h-12 w-12 text-zion-purple mx-auto mb-3" />
                      <p className="text-gray-600">
                        We've analyzed your needs and found {getRecommendations.length} services that match your requirements
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getRecommendations.map((service, index) => (
                        <Card key={service.id} className="border-2 hover:border-zion-purple transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                                <div>
                                  <CardTitle className="text-lg text-zion-blue-dark">
                                    {service.title}
                                  </CardTitle>
                                  <CardDescription className="text-sm">
                                    {service.category}
                                  </CardDescription>
                                </div>
                              </div>
                              {index < 3 && (
                                <Badge className="bg-zion-purple text-white">
                                  Top Pick
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold text-zion-purple">
                                {formatPrice(service.price)}
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">Relevance</div>
                                <div className="text-lg font-bold text-zion-cyan">
                                  {service.relevanceScore}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Star className="h-4 w-4 text-amber-500 fill-current" />
                                <span>{service.rating} ({service.reviewCount} reviews)</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                                <span>AI Score: {service.aiScore}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <BarChart3 className="h-4 w-4 text-green-500" />
                                <span>Delivery: {service.deliveryTime}</span>
                              </div>
                            </div>

                            <div className="pt-3 border-t">
                              <div className="flex gap-2">
                                <Link to="/request-quote" className="flex-1">
                                  <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                                    Get Quote
                                  </Button>
                                </Link>
                                <Link to="/expanded-services">
                                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                                    Learn More
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Why These Recommendations */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-zion-blue-dark mb-3">Why These Services?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Matched with your selected business needs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Aligned with your business size and budget</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Industry-specific considerations applied</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>High customer ratings and AI scores</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <div className="bg-zion-purple/10 rounded-lg p-6 border border-zion-purple/20">
                        <h4 className="text-lg font-semibold text-zion-blue-dark mb-3">
                          Ready to Get Started?
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Get detailed quotes and personalized consultation for any of these services
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                          <Link to="/request-quote">
                            <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Get Custom Quotes
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                              Schedule Consultation
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Tell Us About Your Business
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Select your business needs to get personalized service recommendations
                    </p>
                    <div className="text-sm text-gray-400">
                      <p>Our AI will analyze your requirements and suggest</p>
                      <p>the most suitable services for your business</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}