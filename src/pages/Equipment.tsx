import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Server, 
  Monitor, 
  Network, 
  Shield, 
  CheckCircle, 
  Star, 
  Zap, 
  Globe,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  HardDrive,
  Router,
  Switch,
  Firewall
} from 'lucide-react';

const Equipment = () => {
  const equipmentCategories = [
    {
      icon: <Server className="h-8 w-8 text-zion-cyan" />,
      title: "Servers & Storage",
      description: "High-performance servers and storage solutions",
      items: [
        "Dell PowerEdge Servers",
        "HP ProLiant Servers",
        "NetApp Storage Arrays",
        "Dell EMC Storage",
        "Backup Solutions",
        "RAID Controllers"
      ],
      price: "From $2,500"
    },
    {
      icon: <Network className="h-8 w-8 text-zion-cyan" />,
      title: "Networking Equipment",
      description: "Enterprise-grade networking infrastructure",
      items: [
        "Cisco Switches & Routers",
        "Juniper Networks",
        "Aruba Wireless",
        "Network Cables",
        "Load Balancers",
        "Network Security"
      ],
      price: "From $800"
    },
    {
      icon: <Monitor className="h-8 w-8 text-zion-cyan" />,
      title: "Workstations & PCs",
      description: "Professional workstations and desktop computers",
      items: [
        "Dell Precision Workstations",
        "HP Z Series",
        "Custom Gaming PCs",
        "All-in-One Desktops",
        "Thin Clients",
        "Peripherals"
      ],
      price: "From $600"
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-cyan" />,
      title: "Security Hardware",
      description: "Advanced security and protection solutions",
      items: [
        "Firewalls",
        "VPN Appliances",
        "Intrusion Detection",
        "Access Control",
        "Surveillance Systems",
        "Security Cameras"
      ],
      price: "From $1,200"
    }
  ];

  const featuredProducts = [
    {
      name: "Dell PowerEdge R750 Server",
      description: "High-performance 2U rack server with latest Intel processors",
      category: "Servers",
      price: "$4,299",
      rating: 4.9,
      specs: ["Intel Xeon", "128GB RAM", "2TB SSD", "Dual Power Supply"],
      image: "https://images.unsplash.com/photo-1599305445671-ac291c1aaa9f?auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Cisco Catalyst 9300 Switch",
      description: "Enterprise-grade access switch with advanced features",
      category: "Networking",
      price: "$2,899",
      rating: 4.8,
      specs: ["48 Ports", "PoE+", "Stackable", "Advanced Security"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Dell Precision 7760 Workstation",
      description: "Professional workstation for demanding applications",
      category: "Workstations",
      price: "$3,199",
      rating: 4.9,
      specs: ["Intel Xeon", "32GB RAM", "RTX Graphics", "1TB NVMe"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&h=300"
    }
  ];

  const services = [
    {
      title: "Equipment Installation",
      description: "Professional installation and setup of all equipment",
      features: ["Site preparation", "Hardware installation", "Configuration", "Testing & validation"],
      price: "From $150/hour"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance and technical support",
      features: ["Preventive maintenance", "24/7 support", "Remote monitoring", "Performance optimization"],
      price: "From $99/month"
    },
    {
      title: "Equipment Rental",
      description: "Short-term equipment rental for projects",
      features: ["Flexible terms", "Delivery & pickup", "Technical support", "Insurance included"],
      price: "From $50/day"
    },
    {
      title: "Equipment Financing",
      description: "Flexible financing options for equipment purchases",
      features: ["Low monthly payments", "Quick approval", "No hidden fees", "Flexible terms"],
      price: "Starting at 0% APR"
    }
  ];

  const benefits = [
    "Genuine manufacturer warranties",
    "Professional installation services",
    "24/7 technical support",
    "Competitive pricing",
    "Fast delivery nationwide",
    "Equipment certification",
    "Trade-in programs",
    "Extended warranty options"
  ];

  const brands = [
    "Dell",
    "HP",
    "Cisco",
    "Juniper",
    "NetApp",
    "Intel",
    "AMD",
    "NVIDIA",
    "Samsung",
    "Western Digital"
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Equipment</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Premium IT equipment and hardware solutions for businesses of all sizes. 
            From servers and networking to workstations and security, we have everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Browse Equipment
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              Get Quote
            </Button>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Equipment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentCategories.map((category, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.items.slice(0, 4).map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-zion-slate-light">
                        • {item}
                      </div>
                    ))}
                    {category.items.length > 4 && (
                      <div className="text-zion-cyan text-sm font-medium">
                        +{category.items.length - 4} more items
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4">
                    <div className="text-white font-medium mb-2">{category.price}</div>
                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                      View Category
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-zion-cyan/90 text-white">
                    {product.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold text-xl">{product.price}</span>
                    <Badge variant="secondary">In Stock</Badge>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-zion-slate-light">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4">
                    <div className="text-white font-medium mb-3">{service.price}</div>
                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits and Brands */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Equipment?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Brands */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Trusted Brands</h2>
            <p className="text-zion-slate-light mb-6">
              We partner with leading manufacturers to provide you with the highest quality equipment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need IT Equipment for Your Business?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Our team of experts can help you find the right equipment for your needs and budget. 
                Get personalized recommendations and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Get Equipment Quote
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Contact Sales Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Equipment;