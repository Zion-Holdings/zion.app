import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Server, 
  Star, 
  CheckCircle, 
  Truck, 
  Shield, 
  Clock, 
  MapPin, 
  Phone,
  Mail,
  MessageSquare,
  Download,
  Share2,
  Heart,
  ShoppingCart,
  ExternalLink
} from 'lucide-react';

const EquipmentDetail = () => {
  const equipment = {
    id: "DELL-R750-001",
    name: "Dell PowerEdge R750 Server",
    category: "Servers & Storage",
    price: "$4,299",
    originalPrice: "$5,199",
    rating: 4.9,
    reviewCount: 127,
    availability: "In Stock",
    shipping: "Free Shipping",
    warranty: "3 Years Dell Warranty",
    images: [
      "https://images.unsplash.com/photo-1599305445671-ac291c1aaa9f?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=600"
    ],
    description: "The Dell PowerEdge R750 is a high-performance 2U rack server designed for demanding workloads. Featuring the latest Intel Xeon processors, this server delivers exceptional performance for virtualization, database, and high-performance computing applications.",
    specifications: {
      "Processor": "Intel Xeon Silver 4314 (2.4GHz, 16-core)",
      "Memory": "128GB DDR4 ECC Registered",
      "Storage": "2TB NVMe SSD",
      "Power Supply": "Dual 750W Platinum",
      "Form Factor": "2U Rack Mount",
      "Network": "4x 1GbE + 2x 10GbE",
      "Expansion": "8x PCIe Gen4 slots",
      "Management": "iDRAC9 Enterprise"
    },
    features: [
      "Latest Intel Xeon Scalable processors",
      "High-performance DDR4 memory",
      "NVMe storage for fast data access",
      "Redundant power supplies",
      "Advanced management capabilities",
      "Enterprise-grade reliability",
      "Scalable architecture",
      "Energy efficient design"
    ],
    included: [
      "Dell PowerEdge R750 Server",
      "Power cables",
      "Rack mounting kit",
      "Documentation",
      "iDRAC9 license",
      "3-year Dell warranty"
    ],
    services: [
      {
        title: "Professional Installation",
        description: "Expert installation and configuration",
        price: "$299",
        duration: "4-6 hours"
      },
      {
        title: "Extended Warranty",
        description: "5-year warranty extension",
        price: "$599",
        duration: "5 years"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock technical support",
        price: "$199/month",
        duration: "Monthly"
      }
    ],
    reviews: [
      {
        name: "John Smith",
        rating: 5,
        date: "2024-01-15",
        comment: "Excellent server performance. The installation was smooth and the support team was very helpful."
      },
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2024-01-10",
        comment: "Great value for money. The server handles our virtualization workload perfectly."
      },
      {
        name: "Mike Davis",
        rating: 4,
        date: "2024-01-05",
        comment: "Solid server with good performance. Would recommend for medium-sized businesses."
      }
    ]
  };

  const relatedProducts = [
    {
      name: "Dell PowerEdge R750 Server",
      price: "$4,299",
      image: "https://images.unsplash.com/photo-1599305445671-ac291c1aaa9f?auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "HP ProLiant DL380 Gen10",
      price: "$3,999",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Cisco UCS C220 M6",
      price: "$4,599",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-zion-slate-light">
            <span>Equipment</span>
            <span className="mx-2">/</span>
            <span>Servers & Storage</span>
            <span className="mx-2">/</span>
            <span className="text-white">{equipment.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div>
            <div className="mb-6">
              <img
                src={equipment.images[0]}
                alt={equipment.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {equipment.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${equipment.name} ${index + 2}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-3">{equipment.category}</Badge>
              <h1 className="text-3xl font-bold text-white mb-4">{equipment.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(equipment.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-zion-slate-light'}`} />
                  ))}
                </div>
                <span className="text-zion-slate-light">{equipment.rating} ({equipment.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-white">{equipment.price}</span>
                <span className="text-zion-slate-light line-through">{equipment.originalPrice}</span>
                <Badge className="bg-green-500 text-white">Save $900</Badge>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{equipment.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Truck className="h-4 w-4 text-zion-cyan" />
                  <span>{equipment.shipping}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Shield className="h-4 w-4 text-zion-cyan" />
                  <span>{equipment.warranty}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-3">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Sales
                </Button>
                <Button variant="outline" className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>

            <div className="border-t border-zion-cyan/20 pt-6">
              <h3 className="text-white font-medium mb-3">Share this product:</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                  <Download className="h-4 w-4 mr-2" />
                  Spec Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-6">{equipment.description}</p>
                  
                  <h3 className="text-white font-medium mb-4">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {equipment.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-white font-medium mb-4">What's Included:</h3>
                  <div className="space-y-2">
                    {equipment.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Specifications */}
            <div>
              <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(equipment.specifications).map(([key, value]) => (
                      <div key={key} className="border-b border-zion-cyan/10 pb-2">
                        <div className="text-zion-slate-light text-sm font-medium">{key}</div>
                        <div className="text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-zion-cyan text-sm">{service.duration}</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Add Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.reviews.map((review, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-zion-slate-light'}`} />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{review.comment}"</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{review.name}</span>
                    <span className="text-zion-slate-light text-sm">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-white font-medium mb-2">{product.name}</h3>
                  <div className="text-zion-cyan font-bold mb-3">{product.price}</div>
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help Choosing the Right Equipment?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Our technical experts can help you find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Expert
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetail;