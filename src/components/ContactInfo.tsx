import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  MessageSquare,
  ExternalLink,
  Star
} from "lucide-react";

export function ContactInfo() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Contact our experts today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                  Contact Details
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-zion-cyan">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Website</p>
                    <a 
                      href="https://ziontechgroup.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center gap-1"
                    >
                      ziontechgroup.com
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5 text-zion-cyan" />
                  Business Hours
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We're available when you need us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-zion-cyan">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-zion-cyan">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-zion-cyan">By Appointment</span>
                  </div>
                  <div className="pt-2 border-t border-zion-blue-light">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan font-medium">24/7 Support</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Available
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick Actions & Services */}
          <div className="space-y-6">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-zion-cyan" />
                  Quick Actions
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Get started with our most popular services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Request Free Quote
                  </Button>
                </Link>
                
                <Link to="/comprehensive-services">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    View All Services
                  </Button>
                </Link>
                
                <Link to="/it-onsite-services">
                  <Button variant="outline" className="w-full border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10">
                    IT Onsite Services
                  </Button>
                </Link>
                
                <div className="pt-4 border-t border-zion-blue-light">
                  <p className="text-zion-slate-light text-sm mb-3">Need immediate assistance?</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-zion-cyan" />
                    <span className="text-zion-cyan font-medium">Call us now: +1 302 464 0950</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star className="h-5 w-5 text-zion-cyan" />
                  Why Choose Zion Tech Group?
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  What makes us different from the competition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Global reach with local expertise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 support and monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Certified professionals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Competitive pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proven track record</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Join hundreds of satisfied clients who have transformed their businesses with our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="tel:+13024640950">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
                  Call Now: +1 302 464 0950
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}