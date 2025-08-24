import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  MapPin, 
  Shield,
  Zap,
  Users,
  Globe,
  Award,
  Phone,
  Mail,
  Globe as GlobeIcon
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function EnhancedServicesPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>("rating");

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" ||
      SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service.id));
    
    const matchesSearch = searchTerm === "" ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price":
        return a.price - b.price;
      case "aiScore":
        return b.aiScore - a.aiScore;
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  const featuredServices = ENHANCED_SERVICES.filter(service => service.aiScore >= 95);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('services.hero.title') || "Innovative Tech Solutions"}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              {t('services.hero.description') || "Discover cutting-edge technology solutions that transform businesses and drive innovation across industries."}
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                  <Input
                    placeholder={t('services.search.placeholder') || "Search services..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-zion-slate-light"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder={t('services.filter.category') || "All Categories"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('services.filter.all') || "All Categories"}</SelectItem>
                    {SERVICE_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder={t('services.sort.placeholder') || "Sort by"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">{t('services.sort.rating') || "Highest Rating"}</SelectItem>
                    <SelectItem value="price">{t('services.sort.price') || "Lowest Price"}</SelectItem>
                    <SelectItem value="aiScore">{t('services.sort.aiScore') || "AI Score"}</SelectItem>
                    <SelectItem value="newest">{t('services.sort.newest') || "Newest"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('services.featured.title') || "Featured Solutions"}
            </h2>
            <p className="text-zion-slate-light text-lg">
              {t('services.featured.description') || "Our top-rated, AI-powered solutions trusted by industry leaders"}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                        {service.aiScore} AI Score
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                        <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                          {service.pricingModel}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/10 text-zion-slate-light">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.availability}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {service.location}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                        {t('services.cta.learn_more') || "Learn More"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* All Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.all.title') || "All Services"}
          </h2>
          <p className="text-zion-slate-light text-lg">
            {t('services.all.description') || `Explore our comprehensive collection of ${ENHANCED_SERVICES.length} innovative solutions`}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-zion-blue/20 text-zion-blue-light border-zion-blue/30">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <Badge variant="outline" className="border-zion-purple/30 text-zion-purple text-xs">
                        {service.pricingModel}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {service.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 text-zion-slate-light text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10">
                      {t('services.cta.view_details') || "View Details"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.contact.title') || "Ready to Get Started?"}
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              {t('services.contact.description') || "Let's discuss how our innovative solutions can transform your business. Get in touch with our experts today."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white">
                <Phone className="h-5 w-5 mr-2" />
                {t('services.contact.call') || "Call Us"}
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Mail className="h-5 w-5 mr-2" />
                {t('services.contact.email') || "Send Email"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
