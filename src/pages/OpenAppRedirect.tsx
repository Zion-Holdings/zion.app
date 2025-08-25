import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Download, 
  Smartphone, 
  Globe, 
  CheckCircle, 
  Clock,
  ArrowRight,
  Loader2,
  Phone,
  Mail
} from 'lucide-react';

const OpenAppRedirect = () => {
  const [countdown, setCountdown] = useState<number>(5);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsRedirecting(true);
          // Simulate redirect
          setTimeout(() => {
            window.location.href = 'https://ziontechgroup.com';
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleManualRedirect = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = 'https://ziontechgroup.com';
    }, 500);
  };

  const appInfo = {
    name: "Zion Tech Group",
    description: "Your comprehensive technology solutions partner",
    features: [
      "AI-Powered Services",
      "IT Infrastructure Solutions",
      "Micro SAAS Platforms",
      "24/7 Technical Support",
      "Custom Development",
      "Cloud Migration"
    ],
    platforms: [
      {
        name: "Web Application",
        url: "https://ziontechgroup.com",
        icon: <Globe className="h-6 w-6" />,
        description: "Access all services through our web platform"
      },
      {
        name: "Mobile App",
        url: "#",
        icon: <Smartphone className="h-6 w-6" />,
        description: "Coming soon - Mobile app for iOS and Android"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Opening <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {appInfo.name}
              </span>
            </h1>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Redirecting you to our comprehensive technology platform. Please wait while we prepare your experience.
            </p>
          </div>

          {/* Redirect Status */}
          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
            <CardContent className="p-8">
              {isRedirecting ? (
                <div className="text-center">
                  <Loader2 className="h-12 w-12 text-zion-cyan animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Redirecting...</h3>
                  <p className="text-zion-slate-light">Taking you to Zion Tech Group</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-zion-cyan mb-2">{countdown}</div>
                    <p className="text-zion-slate-light">seconds until automatic redirect</p>
                  </div>
                  <Button 
                    onClick={handleManualRedirect}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white"
                  >
                    Open Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* App Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">What You'll Find</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Comprehensive technology solutions at your fingertips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {appInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Platforms */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">Access Options</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Choose your preferred platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appInfo.platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="text-zion-cyan">
                        {platform.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-white font-medium">{platform.name}</h4>
                        <p className="text-zion-slate-light text-sm">{platform.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white"
                        onClick={() => window.open(platform.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
            <CardHeader>
              <CardTitle className="text-white">Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Our team is here to assist you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-zion-cyan mb-2">
                    <Phone className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan mb-2">
                    <Mail className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan mb-2">
                    <Globe className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Website</h4>
                  <p className="text-zion-slate-light">ziontechgroup.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Manual Redirect Button */}
          {!isRedirecting && (
            <div className="mt-8">
              <Button 
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                onClick={handleManualRedirect}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Open Zion Tech Group
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OpenAppRedirect;
