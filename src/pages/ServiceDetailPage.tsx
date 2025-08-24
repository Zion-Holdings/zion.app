import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '@/data/comprehensiveServices';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle, 
  Users, 
  Award,
  ArrowLeft,
  Calendar,
  Shield,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const [service, setService] = useState<any>(null);
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('smb');

  useEffect(() => {
    const foundService = COMPREHENSIVE_SERVICES.find(s => s.id === id);
    setService(foundService);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-zion-slate mb-2">Service Not Found</h1>
          <p className="text-zion-slate-light mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/comprehensive-services">Browse All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier) {
      return price * (1 - pricingTier.discount);
    }
    return price;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getOriginalPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier && pricingTier.discount > 0) {
      return price;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title={`${service.title} - Zion Tech Group`}
        description={service.description}
        keywords={service.tags.join(', ')}
        canonical={`https://ziontechgroup.com/services/${service.id}`}
      />

      {/* Breadcrumb */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-zion-slate">
            <Link to="/" className="hover:text-zion-blue">Home</Link>
            <span>/</span>
            <Link to="/comprehensive-services" className="hover:text-zion-blue">Services</Link>
            <span>/</span>
            <span className="text-zion-blue font-semibold">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Service Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Image */}
            <div className="space-y-4">
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-zion-cyan text-white mb-3">
                  {service.subcategory}
                </Badge>
                <h1 className="text-4xl font-bold text-zion-blue mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-zion-slate leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(service.rating || 0)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-zion-blue">
                    {service.rating}
                  </span>
                  <span className="text-zion-slate">
                    ({service.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* AI Score */}
              <div className="flex items-center gap-3">
                <span className="text-zion-slate font-semibold">AI Score:</span>
                <div className="w-16 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{service.aiScore}</span>
                </div>
                <span className="text-sm text-zion-slate">/ 100</span>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-zion-slate">
                  <Clock className="w-5 h-5" />
                  <span>{service.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate">
                  <MapPin className="w-5 h-5" />
                  <span>{service.location}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-zion-slate-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-zion-blue mb-4">Pricing</h3>
                <div className="space-y-3">
                  {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => {
                    const discountedPrice = getDiscountedPrice(service.price || 0, key);
                    const originalPrice = getOriginalPrice(service.price || 0, key);
                    
                    return (
                      <div key={key} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <div className="font-semibold text-zion-blue">{tier.name}</div>
                          <div className="text-sm text-zion-slate">{tier.description}</div>
                        </div>
                        <div className="text-right">
                          {originalPrice && (
                            <div className="text-sm text-zion-slate line-through">
                              {formatPrice(originalPrice)}
                            </div>
                          )}
                          <div className="text-2xl font-bold text-zion-purple">
                            {formatPrice(discountedPrice)}
                          </div>
                          {tier.discount > 0 && (
                            <div className="text-sm text-green-600">
                              {tier.discount * 100}% off
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white flex-1">
                  <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                    Get Free Quote
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                  <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">What's Included</h2>
            <p className="text-lg text-zion-slate max-w-2xl mx-auto">
              Our comprehensive service includes everything you need for successful implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Quality Assurance</h3>
              <p className="text-zion-slate">
                Rigorous testing and quality control processes
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Ongoing Support</h3>
              <p className="text-zion-slate">
                24/7 technical support and maintenance
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Performance Optimization</h3>
              <p className="text-zion-slate">
                Continuous improvement and optimization
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Flexible Scheduling</h3>
              <p className="text-zion-slate">
                Work around your business schedule
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Certified Solutions</h3>
              <p className="text-zion-slate">
                Industry-standard certifications and compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="bg-zion-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We stand behind our work with comprehensive guarantees and ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark rounded-lg">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and customized proposal for your {service.title} needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                Get Free Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
              <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-zion-slate-light">Enterprise-grade security and reliability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="bg-zion-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a href={CONTACT_INFO.website} className="hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>{CONTACT_INFO.businessHours}</p>
                <p className="text-zion-cyan font-semibold">{CONTACT_INFO.emergencySupport}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/comprehensive-services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>
                <a href={CONTACT_INFO.website} className="block hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                  Main Website
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2 text-sm">
                <p>✓ Certified professionals</p>
                <p>✓ Industry experience</p>
                <p>✓ Proven methodologies</p>
                <p>✓ Ongoing support</p>
                <p>✓ Competitive pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}