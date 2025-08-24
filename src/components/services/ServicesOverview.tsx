import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { getFeaturedServices, getServicesByCategory } from '@/data/microSaasServices';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';

const categoryIcons = {
  'AI Services': <Brain className="w-6 h-6" />,
  'IT Services': <Cloud className="w-6 h-6" />,
  'Innovative Solutions': <Zap className="w-6 h-6" />
};

const categoryColors = {
  'AI Services': 'from-purple-500 to-indigo-600',
  'IT Services': 'from-blue-500 to-cyan-600',
  'Innovative Solutions': 'from-green-500 to-emerald-600'
};

const categoryDescriptions = {
  'AI Services': 'Cutting-edge artificial intelligence solutions to automate, optimize, and transform your business operations.',
  'IT Services': 'Professional IT consulting, infrastructure management, and digital transformation services.',
  'Innovative Solutions': 'Next-generation technology solutions including blockchain, IoT, and AR/VR applications.'
};

export function ServicesOverview() {
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 3);
  const aiServices = COMPREHENSIVE_SERVICES.filter(service => service.category === 'ai-ml').slice(0, 3);
  const itServices = COMPREHENSIVE_SERVICES.filter(service => service.category === 'cloud-devops').slice(0, 3);
  const innovativeServices = COMPREHENSIVE_SERVICES.filter(service => service.category === 'cybersecurity').slice(0, 3);

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price}/month`;
    if (model === 'yearly') return `$${price}/year`;
    if (model === 'per-user') return `$${price}/user`;
    if (model === 'usage-based') return `$${price}/usage`;
    return `$${price}`;
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            From AI-powered automation to enterprise IT solutions, we provide the technology services 
            your business needs to thrive in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                Compare Pricing
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
                      <div className="text-white">
                        {categoryIcons[service.category as keyof typeof categoryColors]}
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-zion-purple/10 text-zion-purple border-zion-purple/20">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-3 text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      {formatPrice(service.price, service.pricingModel)}
                    </div>
                    {service.freeTrial && (
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {service.freeTrialDays}-day free trial
                      </div>
                    )}
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      Get Started
                    </Button>
                    <div className="flex gap-2">
                      {service.website && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Website
                        </Button>
                      )}
                      {service.demoUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10">
            <TabsTrigger value="ai" className="text-white data-[state=active]:bg-zion-purple">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </TabsTrigger>
            <TabsTrigger value="it" className="text-white data-[state=active]:bg-zion-purple">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </TabsTrigger>
            <TabsTrigger value="innovative" className="text-white data-[state=active]:bg-zion-purple">
              <Zap className="w-5 h-5 mr-2" />
              Innovative Solutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                {categoryDescriptions['AI Services']}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="it" className="mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                {categoryDescriptions['IT Services']}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="innovative" className="mt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Innovative Solutions</h3>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                {categoryDescriptions['Innovative Solutions']}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovativeServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our expert team can create tailored technology solutions that perfectly fit your business needs. 
              Get in touch for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-purple hover:underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price}/month`;
    if (model === 'yearly') return `$${price}/year`;
    if (model === 'per-user') return `$${price}/user`;
    if (model === 'usage-based') return `$${price}/usage`;
    return `$${price}`;
  };

  return (
    <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${categoryColors[service.category as keyof typeof categoryColors]} flex items-center justify-center`}>
            <div className="text-white">
              {categoryIcons[service.category as keyof typeof categoryColors]}
            </div>
          </div>
          <Badge variant="secondary" className="bg-zion-purple/10 text-zion-purple border-zion-purple/20">
            {service.subcategory}
          </Badge>
        </div>
        
        <CardTitle className="text-lg mb-2 text-gray-900">{service.title}</CardTitle>
        <CardDescription className="text-gray-600 text-sm line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Pricing */}
        <div className="mb-3">
          <div className="text-xl font-bold text-zion-purple">
            {formatPrice(service.price, service.pricingModel)}
          </div>
          {service.freeTrial && (
            <div className="text-sm text-green-600 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              {service.freeTrialDays}-day free trial
            </div>
          )}
        </div>

        {/* Setup Time */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          <span>Setup: {service.setupTime}</span>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button size="sm" className="w-full bg-zion-purple hover:bg-zion-purple-dark">
            Get Started
          </Button>
          <Link to={`/micro-saas-services#${service.id}`}>
            <Button size="sm" variant="outline" className="w-full">
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}