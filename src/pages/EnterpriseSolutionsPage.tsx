import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, TrendingUp, Clock, Shield, Zap, Cloud, BarChart3, Smartphone, Link as LinkIcon, Phone, Mail, MapPin, ArrowRight, Users, Award, Globe } from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, FEATURED_SERVICES } from '@/data/expandedServices';
import { SEO } from '@/components/SEO';
import { TrustedBySection } from '@/components/TrustedBySection';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Automation": <Zap className="w-6 h-6" />,
  "Cybersecurity": <Shield className="w-6 h-6" />,
  "Cloud & DevOps": <Cloud className="w-6 h-6" />,
  "Data & Analytics": <BarChart3 className="w-6 h-6" />,
  "Digital Transformation": <TrendingUp className="w-6 h-6" />,
  "IoT & Edge Computing": <Smartphone className="w-6 h-6" />,
  "Blockchain & Web3": <LinkIcon className="w-6 h-6" />,
};

const stats = [
  { label: "Years of Experience", value: "10+", icon: <Award className="w-8 h-8" /> },
  { label: "Projects Delivered", value: "500+", icon: <Check className="w-8 h-8" /> },
  { label: "Happy Clients", value: "200+", icon: <Users className="w-8 h-8" /> },
  { label: "Countries Served", value: "25+", icon: <Globe className="w-8 h-8" /> },
];

const caseStudies = [
  {
    title: "AI-Powered Process Automation",
    industry: "Manufacturing",
    description: "Implemented intelligent automation that reduced operational costs by 40% and improved efficiency by 300%.",
    results: ["40% cost reduction", "300% efficiency improvement", "24/7 automated operations"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"
  },
  {
    title: "Zero Trust Security Implementation",
    industry: "Financial Services",
    description: "Deployed comprehensive zero trust security framework protecting $2B+ in assets with 99.9% uptime.",
    results: ["99.9% security uptime", "Zero security breaches", "SOC 2 compliance achieved"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    title: "Multi-Cloud Optimization",
    industry: "E-commerce",
    description: "Optimized cloud infrastructure across AWS, Azure, and Google Cloud reducing costs by 30%.",
    results: ["30% cost reduction", "Improved performance", "Unified management"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"
  }
];

export default function EnterpriseSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Enterprise Technology Solutions | Zion Tech Group" 
        description="Transform your business with our comprehensive enterprise technology solutions including AI automation, cybersecurity, cloud optimization, and digital transformation services."
        keywords="enterprise technology solutions, AI automation, cybersecurity, cloud optimization, digital transformation, enterprise consulting"
        canonical="https://ziontechgroup.com/enterprise-solutions"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Technology Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology solutions designed for enterprise-scale operations. 
            From AI automation to cybersecurity, we deliver results that drive growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Zap className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-zion-blue">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-zion-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Enterprise Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology services designed to address enterprise challenges and drive digital transformation
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-8 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              {SERVICE_CATEGORIES.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.icon} {category.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceOverviewCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            {SERVICE_CATEGORIES.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <ServiceOverviewCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped enterprises transform their operations and achieve remarkable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Key Results:</p>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We combine deep technical expertise with proven business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Expertise</h3>
              <p className="text-zion-slate-light">
                Over a decade of experience delivering enterprise technology solutions across industries
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Results-Driven</h3>
              <p className="text-zion-slate-light">
                We focus on measurable outcomes and ROI, ensuring every solution delivers tangible business value
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Dedicated Support</h3>
              <p className="text-zion-slate-light">
                24/7 support and maintenance with dedicated account managers for enterprise clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful delivery and maximum value for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of your current state and business objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Custom roadmap and solution design aligned with your business goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Agile delivery with continuous feedback and quality assurance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support, monitoring, and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let our enterprise technology experts help you navigate the digital transformation journey. 
            Get started with a free consultation and customized solution proposal.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Zap className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>

          <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Our Enterprise Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="text-zion-cyan hover:underline">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </>
  );
}

interface ServiceOverviewCardProps {
  service: any;
}

function ServiceOverviewCard({ service }: ServiceOverviewCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {categoryIcons[service.category]}
            <Badge variant="secondary" className="text-xs">
              {service.subcategory}
            </Badge>
          </div>
          {service.isNew && (
            <Badge className="bg-green-500 text-white text-xs">
              <Clock className="w-3 h-3 mr-1" />
              New
            </Badge>
          )}
          {service.isFeatured && (
            <Badge className="bg-yellow-500 text-white text-xs">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-zion-blue">
              {service.currency}{service.price.toLocaleString()}
            </span>
            <Badge variant="outline" className="text-xs">
              {service.pricingModel.replace('-', ' ')}
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{service.rating}</span>
              <span className="text-gray-400">({service.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>AI Score: {service.aiScore}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.slice(0, 2).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardContent className="pt-0">
        <div className="flex gap-2">
          <Link to={`/service/${service.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Link>
          <Button 
            className="flex-1 bg-zion-blue hover:bg-zion-blue-dark text-white"
            onClick={() => window.open(service.contactLink, '_blank')}
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}