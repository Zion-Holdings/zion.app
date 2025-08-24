import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  Zap,
  Shield,
  Cloud,
  Database,
  Smartphone,
  Link as LinkIcon,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { EXPANDED_SERVICES } from '../data/expandedServices';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const ServiceDetailPage: React.FC = () => {
  const params = useParams();
  const serviceId = params.serviceId;
  
  const service = EXPANDED_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/expanded-services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Zap className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'Data & Analytics': return <Database className="w-6 h-6" />;
      case 'Digital Transformation': return <Target className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Smartphone className="w-6 h-6" />;
      case 'Blockchain & Web3': return <LinkIcon className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case 'subscription': return 'bg-blue-100 text-blue-800';
      case 'project-based': return 'bg-purple-100 text-purple-800';
      case 'one-time': return 'bg-green-100 text-green-800';
      case 'usage-based': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleContactClick = () => {
    window.open('https://ziontechgroup.com/contact', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/expanded-services" className="hover:text-blue-600">Enterprise Services</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              {getCategoryIcon(service.category)}
              <Badge variant="secondary" className="text-sm">
                {service.category}
              </Badge>
              {service.isNew && (
                <Badge className="bg-green-500 text-white text-sm">New</Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-4xl">
              {service.description}
            </p>

            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">${service.price.toLocaleString()}</div>
                  <div className="text-sm text-blue-200">
                    {service.pricingModel.replace('-', ' ')}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{service.rating}</span>
                  <span className="text-blue-200">({service.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-lg font-semibold">AI Score: {service.aiScore}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={handleContactClick}
                  className="text-lg px-8 py-3"
                >
                  Get Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Key Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Target className="w-6 h-6 text-blue-500" />
                  <span>Business Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Use Cases Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  <span>Use Cases & Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl">Pricing & Plans</CardTitle>
                <CardDescription>Choose the right plan for your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">${service.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">
                    {service.pricingModel === 'subscription' ? 'per month' : 'one-time'}
                  </div>
                </div>
                
                <Badge className={`w-full justify-center text-sm py-2 ${getPricingModelColor(service.pricingModel)}`}>
                  {service.pricingModel.replace('-', ' ')}
                </Badge>

                <div className="text-center text-sm text-gray-600">
                  <p>Market Price: {service.marketPrice}</p>
                  <p className="text-green-600 font-medium">Save with Zion Tech Group</p>
                </div>

                <Button 
                  onClick={handleContactClick}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <a href="tel:+13024640950" className="text-blue-600 hover:underline">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleContactClick}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>

            {/* Service Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Service Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{service.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reviews</span>
                  <span className="font-semibold">{service.reviewCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AI Score</span>
                  <span className="font-semibold">{service.aiScore}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Created</span>
                  <span className="font-semibold">
                    {new Date(service.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Contact our experts for a personalized consultation and custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleContactClick}
              className="text-lg px-8 py-3"
            >
              Contact Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;