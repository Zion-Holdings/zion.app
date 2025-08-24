import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES, ENTERPRISE_PRICING, CONTACT_INFO } from '@/data/advancedServices';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Users,
  Globe,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState('ai-automation');

  const comparisonData = {
    'ai-automation': {
      title: 'AI Business Process Automation',
      ourService: {
        name: 'Zion AI Business Process Automation Suite',
        price: '$299/month',
        features: [
          'AI-powered workflow automation',
          '5 pre-built automation templates',
          'Custom workflow builder',
          'Real-time analytics dashboard',
          '24/7 AI monitoring',
          'Multi-platform integration',
          'Advanced error handling',
          'Scalable architecture'
        ],
        benefits: [
          'Reduce manual tasks by 80%',
          'Improve process efficiency by 60%',
          'Real-time insights and reporting',
          'Customizable to any business process'
        ]
      },
      competitors: [
        {
          name: 'UiPath',
          price: '$420/month',
          features: [
            'RPA automation',
            'Basic templates',
            'Limited customization',
            'Standard monitoring',
            'Business hours support',
            'Basic integrations',
            'Standard error handling',
            'Fixed architecture'
          ],
          benefits: [
            'Industry standard RPA',
            'Good for simple processes',
            'Established platform'
          ]
        },
        {
          name: 'Automation Anywhere',
          price: '$750/month',
          features: [
            'RPA automation',
            'Template library',
            'Moderate customization',
            'Enhanced monitoring',
            'Extended support hours',
            'Multiple integrations',
            'Advanced error handling',
            'Scalable options'
          ],
          benefits: [
            'Enterprise-grade RPA',
            'Good support',
            'Multiple deployment options'
          ]
        }
      ]
    },
    'cybersecurity': {
      title: 'AI-Powered Cybersecurity',
      ourService: {
        name: 'Zion AI Threat Detection System',
        price: '$799/month',
        features: [
          'AI-powered threat detection',
          'Real-time monitoring',
          'Behavioral analysis',
          'Automated response',
          '24/7 security operations',
          'Advanced threat intelligence',
          'Compliance reporting',
          'Custom security policies'
        ],
        benefits: [
          'Detect threats 10x faster',
          'Reduce false positives by 90%',
          'Automated incident response',
          'Continuous learning and adaptation'
        ]
      },
      competitors: [
        {
          name: 'CrowdStrike',
          price: '$1,200/month',
          features: [
            'Endpoint protection',
            'Threat detection',
            'Basic AI capabilities',
            'Manual response',
            'Business hours support',
            'Standard intelligence',
            'Basic reporting',
            'Pre-defined policies'
          ],
          benefits: [
            'Established security platform',
            'Good endpoint coverage',
            'Industry recognition'
          ]
        },
        {
          name: 'SentinelOne',
          price: '$950/month',
          features: [
            'Endpoint security',
            'AI threat detection',
            'Automated response',
            '24/7 monitoring',
            'Extended support',
            'Threat intelligence',
            'Compliance features',
            'Policy management'
          ],
          benefits: [
            'Strong AI capabilities',
            'Good automation',
            'Comprehensive coverage'
          ]
        }
      ]
    },
    'cloud-optimization': {
      title: 'AI Cloud Cost Optimization',
      ourService: {
        name: 'Zion AI Cloud Cost Optimization Engine',
        price: '$399/month',
        features: [
          'Multi-cloud optimization',
          'AI-powered cost prediction',
          'Automated resource scaling',
          'Real-time cost monitoring',
          'Custom optimization rules',
          'Cost allocation analysis',
          'Automated cost alerts',
          'ROI tracking and reporting'
        ],
        benefits: [
          'Reduce cloud costs by 30-50%',
          'Automated optimization',
          'Multi-cloud support',
          'Predictive cost management'
        ]
      },
      competitors: [
        {
          name: 'CloudHealth',
          price: '$800/month',
          features: [
            'Cost monitoring',
            'Basic optimization',
            'Manual scaling',
            'Cost reporting',
            'Limited automation',
            'Basic analysis',
            'Standard alerts',
            'Basic ROI tracking'
          ],
          benefits: [
            'Established platform',
            'Good reporting',
            'Multi-cloud support'
          ]
        },
        {
          name: 'CloudCheckr',
          price: '$600/month',
          features: [
            'Cost management',
            'Resource optimization',
            'Automated scaling',
            'Cost monitoring',
            'Policy management',
            'Cost analysis',
            'Alert system',
            'Compliance features'
          ],
          benefits: [
            'Good automation',
            'Policy-based management',
            'Comprehensive monitoring'
          ]
        }
      ]
    }
  };

  const selectedComparison = comparisonData[selectedCategory as keyof typeof comparisonData];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Comparison - Zion Tech Group vs Competitors" 
        description="Compare our AI-powered services with industry competitors. See how Zion Tech Group delivers superior value, features, and ROI for your business."
        keywords="services comparison, AI services, cybersecurity, cloud optimization, Zion Tech Group, competitive analysis"
        canonical="https://ziontechgroup.com/services-comparison"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services Comparison
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            See how Zion Tech Group's AI-powered solutions deliver superior value, 
            features, and ROI compared to industry competitors
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              Choose Service Category
            </h2>
            <p className="text-zion-slate-dark">
              Select a service category to compare features, pricing, and benefits
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(comparisonData).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-zion-cyan text-zion-blue" : "border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white"}
                onClick={() => setSelectedCategory(category)}
              >
                {comparisonData[category as keyof typeof comparisonData].title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">
              {selectedComparison.title} - Feature Comparison
            </h2>
            <p className="text-xl text-zion-slate-dark max-w-3xl mx-auto">
              See how our AI-powered solution stacks up against the competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Zion Tech Group */}
            <Card className="relative border-2 border-zion-cyan shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-zion-cyan text-zion-blue px-4 py-2 text-sm font-semibold">
                  🏆 Zion Tech Group
                </Badge>
              </div>
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl text-zion-blue mb-2">
                  {selectedComparison.ourService.name}
                </CardTitle>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {selectedComparison.ourService.price}
                </div>
                <div className="text-zion-slate-dark">per month</div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-blue mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedComparison.ourService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-zion-slate-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-blue mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedComparison.ourService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-zion-slate-dark">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Competitors */}
            {selectedComparison.competitors.map((competitor, index) => (
              <Card key={index} className="border-zion-blue-light">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-zion-blue mb-2">
                    {competitor.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-zion-slate-dark mb-2">
                    {competitor.price}
                  </div>
                  <div className="text-zion-slate-dark text-sm">per month</div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-blue mb-3">Features</h4>
                    <ul className="space-y-2">
                      {competitor.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-zion-slate-dark mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-zion-slate-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-blue mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {competitor.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <Star className="w-4 h-4 text-zion-slate-dark mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-zion-slate-dark">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Section */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-dark max-w-3xl mx-auto">
              Our AI-first approach and deep industry expertise deliver superior value 
              and results compared to traditional solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">AI-First Design</h3>
              <p className="text-zion-slate-dark">
                Built from the ground up with artificial intelligence, not retrofitted
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Better ROI</h3>
              <p className="text-zion-slate-dark">
                Lower costs with higher performance and faster implementation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Faster Deployment</h3>
              <p className="text-zion-slate-dark">
                Get up and running in days, not months
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Expert Support</h3>
              <p className="text-zion-slate-dark">
                24/7 support from certified AI and IT professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get in touch with our team to discuss how our AI-powered solutions 
              can transform your business and deliver superior ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-slate-light hover:text-zion-cyan">
                      {CONTACT_INFO.mobile}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-slate-light hover:text-zion-cyan">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-zion-slate-light">{CONTACT_INFO.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Website</div>
                    <a 
                      href={CONTACT_INFO.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-slate-light hover:text-zion-cyan flex items-center"
                    >
                      {CONTACT_INFO.website}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-zion-blue mb-6">Request a Demo</h3>
              <p className="text-zion-slate-dark mb-6">
                See our AI-powered solutions in action. Schedule a personalized demo 
                to understand how we can transform your business.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                
                <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Sales Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}