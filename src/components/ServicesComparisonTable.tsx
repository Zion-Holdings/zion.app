import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Check, X, Star, Clock, Globe, Phone, Mail } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, CONTACT_INFO } from '@/data/comprehensiveServices';

export function ServicesComparisonTable() {
  const serviceCategories = ['AI Services', 'IT Services', 'Micro SAAS'];
  
  const getCategoryServices = (category: string) => {
    return COMPREHENSIVE_SERVICES.filter(service => service.category === category);
  };

  const getFeatureIcon = (hasFeature: boolean) => {
    return hasFeature ? (
      <Check className="w-4 h-4 text-green-500" />
    ) : (
      <X className="w-4 h-4 text-red-500" />
    );
  };

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Services Comparison
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Compare our comprehensive service offerings to find the perfect solution for your business needs
          </p>
        </div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((category) => {
            const services = getCategoryServices(category);
            const avgPrice = services.reduce((sum, service) => sum + (service.price || 0), 0) / services.length;
            
            return (
              <Card key={category} className="border-2 border-slate-200 dark:border-slate-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-slate-900 dark:text-white">{category}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {services.length} services available
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    ${Math.round(avgPrice).toLocaleString()}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Average starting price</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                  >
                    View {category}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-100 dark:bg-slate-700">
                  <TableHead className="text-slate-900 dark:text-white font-semibold">Service Features</TableHead>
                  <TableHead className="text-center text-slate-900 dark:text-white font-semibold">AI Services</TableHead>
                  <TableHead className="text-center text-slate-900 dark:text-white font-semibold">IT Services</TableHead>
                  <TableHead className="text-center text-slate-900 dark:text-white font-semibold">Micro SAAS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Starting Price Range</TableCell>
                  <TableCell className="text-center">$299 - $8,999</TableCell>
                  <TableCell className="text-center">$4,499 - $12,999</TableCell>
                  <TableCell className="text-center">$199 - $799</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Implementation Time</TableCell>
                  <TableCell className="text-center">1-6 weeks</TableCell>
                  <TableCell className="text-center">2-6 weeks</TableCell>
                  <TableCell className="text-center">Immediate - 3 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">24/7 Support</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Custom Development</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">API Access</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Training & Documentation</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Compliance Certifications</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(false)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Scalability</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                  <TableCell className="text-center">{getFeatureIcon(true)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Our expert team is here to help you select the perfect service for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Call Us</h4>
              <p className="text-blue-600 dark:text-blue-400">{CONTACT_INFO.mobile}</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email Us</h4>
              <p className="text-blue-600 dark:text-blue-400">{CONTACT_INFO.email}</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Response Time</h4>
              <p className="text-blue-600 dark:text-blue-400">{CONTACT_INFO.responseTime}</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Service Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPREHENSIVE_SERVICES.filter(service => service.featured).map((service) => (
              <Card key={service.id} className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      Featured
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                    {service.description.substring(0, 100)}...
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <Badge variant="outline" className="border-blue-500 text-blue-600">
                      {service.category}
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}