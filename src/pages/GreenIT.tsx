
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Leaf, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users,
  Award,
  Phone,
  Mail,
  CheckCircle,
  Lightbulb,
  Recycle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GreenIT() {
  const { t } = useTranslation();

  const greenITSolutions = [
    {
      id: "energy-efficient-data-centers",
      title: "Energy-Efficient Data Centers",
      description: "Sustainable data center solutions that reduce energy consumption by up to 40% while maintaining performance and reliability.",
      benefits: [
        "40% reduction in energy consumption",
        "Lower operational costs",
        "Improved sustainability metrics",
        "Enhanced corporate reputation"
      ],
      features: [
        "Smart cooling systems",
        "Renewable energy integration",
        "Energy monitoring and optimization",
        "Green building certifications"
      ],
      icon: <Zap className="h-8 w-8" />,
      category: "Infrastructure",
      impact: "High"
    },
    {
      id: "cloud-optimization",
      title: "Cloud Infrastructure Optimization",
      description: "Optimize cloud resources to minimize carbon footprint and reduce costs through intelligent resource management.",
      benefits: [
        "30% reduction in cloud costs",
        "Lower carbon emissions",
        "Improved resource utilization",
        "Automated scaling"
      ],
      features: [
        "Resource monitoring and analytics",
        "Automated scaling policies",
        "Carbon-aware scheduling",
        "Cost optimization algorithms"
      ],
      icon: <Globe className="h-8 w-8" />,
      category: "Cloud",
      impact: "Medium"
    },
    {
      id: "sustainable-software",
      title: "Sustainable Software Development",
      description: "Eco-friendly software development practices that create efficient, low-impact applications and systems.",
      benefits: [
        "Reduced computational requirements",
        "Lower energy consumption",
        "Improved user experience",
        "Longer device lifespan"
      ],
      features: [
        "Efficient algorithms",
        "Optimized code practices",
        "Green hosting options",
        "Performance monitoring"
      ],
      icon: <Leaf className="h-8 w-8" />,
      category: "Development",
      impact: "Medium"
    },
    {
      id: "green-cybersecurity",
      title: "Green Cybersecurity Solutions",
      description: "Security solutions that protect your digital assets while minimizing environmental impact.",
      benefits: [
        "Enhanced security posture",
        "Reduced energy consumption",
        "Compliance with green standards",
        "Cost-effective protection"
      ],
      features: [
        "Efficient threat detection",
        "Green encryption methods",
        "Sustainable security practices",
        "Environmental compliance"
      ],
      icon: <Shield className="h-8 w-8" />,
      category: "Security",
      impact: "High"
    },
    {
      id: "iot-sustainability",
      title: "IoT Sustainability Platform",
      description: "Internet of Things solutions that monitor and optimize environmental impact across your operations.",
      benefits: [
        "Real-time environmental monitoring",
        "Automated optimization",
        "Reduced waste and emissions",
        "Data-driven sustainability"
      ],
      features: [
        "Environmental sensors",
        "Smart automation",
        "Analytics dashboard",
        "Predictive maintenance"
      ],
      icon: <TrendingUp className="h-8 w-8" />,
      category: "IoT",
      impact: "High"
    },
    {
      id: "green-workplace",
      title: "Green Workplace Solutions",
      description: "Digital workplace solutions that promote sustainability and reduce environmental impact.",
      benefits: [
        "Reduced paper usage",
        "Lower travel emissions",
        "Improved collaboration",
        "Cost savings"
      ],
      features: [
        "Digital document management",
        "Virtual collaboration tools",
        "Remote work solutions",
        "Sustainability tracking"
      ],
      icon: <Users className="h-8 w-8" />,
      category: "Workplace",
      impact: "Medium"
    }
  ];

  const categories = [
    { id: "all", name: "All Solutions", count: greenITSolutions.length },
    { id: "infrastructure", name: "Infrastructure", count: greenITSolutions.filter(s => s.category === "Infrastructure").length },
    { id: "cloud", name: "Cloud", count: greenITSolutions.filter(s => s.category === "Cloud").length },
    { id: "development", name: "Development", count: greenITSolutions.filter(s => s.category === "Development").length },
    { id: "security", name: "Security", count: greenITSolutions.filter(s => s.category === "Security").length },
    { id: "iot", name: "IoT", count: greenITSolutions.filter(s => s.category === "IoT").length },
    { id: "workplace", name: "Workplace", count: greenITSolutions.filter(s => s.category === "Workplace").length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('greenit.hero.title') || "Green IT Solutions"}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              {t('greenit.hero.description') || "Transform your technology infrastructure with sustainable, eco-friendly solutions that reduce environmental impact while improving efficiency and reducing costs."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Leaf className="h-5 w-5 mr-2" />
                {t('greenit.hero.cta.learn_more') || "Learn More"}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="h-5 w-5 mr-2" />
                {t('greenit.hero.cta.contact') || "Contact Us"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-gray-600">Energy Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
            <div className="text-gray-600">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
            <div className="text-gray-600">Carbon Footprint</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Monitoring</div>
          </div>
        </motion.div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('greenit.solutions.title') || "Sustainable IT Solutions"}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('greenit.solutions.description') || "Discover our comprehensive range of green IT solutions designed to make your technology infrastructure more sustainable and efficient."}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {greenITSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      {solution.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        solution.impact === 'High' ? 'bg-red-100 text-red-700' :
                        solution.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}
                    >
                      {solution.impact} Impact
                    </Badge>
                  </div>
                  <CardTitle className="text-gray-800 text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {solution.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-green-600" />
                      Features
                    </h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    {t('greenit.solutions.cta.learn_more') || "Learn More"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Green IT */}
      <div className="bg-green-600">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('greenit.why.title') || "Why Choose Green IT?"}
            </h2>
            <p className="text-green-100 text-lg max-w-3xl mx-auto">
              {t('greenit.why.description') || "Green IT solutions offer numerous benefits beyond environmental impact, including cost savings, improved efficiency, and enhanced corporate reputation."}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-green-100 text-sm">Reduce energy costs and operational expenses while improving efficiency</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Responsibility</h3>
              <p className="text-green-100 text-sm">Demonstrate commitment to sustainability and environmental stewardship</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Future-Proofing</h3>
              <p className="text-green-100 text-sm">Prepare for regulatory requirements and market demands for sustainability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('greenit.contact.title') || "Ready to Go Green?"}
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            {t('greenit.contact.description') || "Let's discuss how our green IT solutions can help your organization become more sustainable while improving efficiency and reducing costs."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Phone className="h-5 w-5 mr-2" />
              {t('greenit.contact.call') || "Schedule Consultation"}
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Mail className="h-5 w-5 mr-2" />
              {t('greenit.contact.email') || "Get More Information"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
