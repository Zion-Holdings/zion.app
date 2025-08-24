import React, { useState } from 'react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  XCircle,
  Phone,
  Mail,
  ExternalLink,
  Play,
  FileText
} from 'lucide-react';

export function ServiceComparisonTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'AI Services', label: 'AI Services' },
    { value: 'IT Services', label: 'IT Services' },
    { value: 'Business Solutions', label: 'Business Solutions' },
    { value: 'Specialized Services', label: 'Specialized Services' }
  ];

  const pricingModels = [
    { value: 'all', label: 'All Pricing' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'one-time', label: 'One-time' },
    { value: 'usage-based', label: 'Usage-based' }
  ];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getPricingDisplay = (service: any) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${service.price}/year`;
    } else if (service.pricingModel === 'one-time') {
      return `${service.currency}${service.price}`;
    } else {
      return `${service.currency}${service.price}`;
    }
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
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 w-full">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <Input
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
            <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
              <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
              {pricingModels.map(model => (
                <SelectItem key={model.value} value={model.value}>
                  {model.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-zion-slate-light">
          Showing {filteredServices.length} of {MICRO_SAAS_SERVICES.length} services
        </p>
      </div>

      {/* Comparison Table */}
      <div className="rounded-md border border-zion-blue-light overflow-hidden">
        <Table>
          <TableHeader className="bg-zion-blue">
            <TableRow>
              <TableHead className="text-zion-cyan font-medium">Service</TableHead>
              <TableHead className="text-zion-cyan font-medium">Category</TableHead>
              <TableHead className="text-zion-cyan font-medium">Pricing</TableHead>
              <TableHead className="text-zion-cyan font-medium">Rating</TableHead>
              <TableHead className="text-zion-cyan font-medium">Support</TableHead>
              <TableHead className="text-zion-cyan font-medium">Features</TableHead>
              <TableHead className="text-zion-cyan font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-zion-blue-dark">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <TableRow key={service.id} className="border-b border-zion-blue-light hover:bg-zion-blue/50">
                  <TableCell className="py-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        {service.featured && (
                          <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-xs">
                            Featured
                          </Badge>
                        )}
                        <div>
                          <div className="font-medium text-white">{service.title}</div>
                          <div className="text-sm text-zion-slate-light max-w-xs">
                            {service.description}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                      {service.category}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-zion-cyan">{getPricingDisplay(service)}</div>
                      <div className="text-xs text-zion-slate-light">{service.pricingModel}</div>
                      {service.freeTier && (
                        <Badge className="bg-green-600 text-white text-xs">Free Tier</Badge>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge className={getSupportLevelColor(service.supportLevel)}>
                      {service.supportLevel}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm text-zion-slate-light">
                        {service.features.length} features
                      </div>
                      <div className="text-xs text-zion-slate-light">
                        {service.features.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex gap-1">
                        {service.website && (
                          <Button asChild size="sm" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                            <a href={service.website} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                        {service.demoUrl && (
                          <Button asChild size="sm" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                            <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                              <Play className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                        {service.documentation && (
                          <Button asChild size="sm" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                            <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                              <FileText className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                      
                      <div className="flex gap-1">
                        <Button asChild size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                          <a href={`mailto:${service.author.email}?subject=Inquiry about ${service.title}`}>
                            <Mail className="h-3 w-3" />
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                          <a href={`tel:+13024640950`}>
                            <Phone className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-zion-slate-light">
                  No services match your current filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Summary Stats */}
      {filteredServices.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-zion-blue/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-zion-cyan">{filteredServices.length}</div>
            <div className="text-zion-slate-light text-sm">Services Found</div>
          </div>
          
          <div className="bg-zion-blue/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-zion-purple">
              ${Math.round(filteredServices.reduce((sum, s) => sum + s.price, 0) / filteredServices.length)}
            </div>
            <div className="text-zion-slate-light text-sm">Average Price</div>
          </div>
          
          <div className="bg-zion-blue/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-zion-green">
              {Math.round(filteredServices.reduce((sum, s) => sum + (s.rating || 0), 0) / filteredServices.length * 10) / 10}
            </div>
            <div className="text-zion-slate-light text-sm">Average Rating</div>
          </div>
          
          <div className="bg-zion-blue/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-zion-orange">
              {filteredServices.filter(s => s.freeTier).length}
            </div>
            <div className="text-zion-slate-light text-sm">Free Tiers</div>
          </div>
        </div>
      )}
    </div>
  );
}