import React from 'react';
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Shield, Cookie, Settings, Eye, Lock, Database, Globe, Clock } from 'lucide-react';

interface CookieType {
  name: string;
  purpose: string;
  duration: string;
  category: 'essential' | 'functional' | 'analytics' | 'marketing';
  description: string;
}

const cookieTypes: CookieType[] = [
  {
    name: 'session_id',
    purpose: 'Maintains user session and authentication',
    duration: 'Session',
    category: 'essential',
    description: 'This cookie is essential for the website to function properly and cannot be disabled.'
  },
  {
    name: 'preferences',
    purpose: 'Stores user preferences and settings',
    duration: '1 year',
    category: 'functional',
    description: 'Remembers your language preference, theme choice, and other personalized settings.'
  },
  {
    name: 'analytics_id',
    purpose: 'Tracks website usage and performance',
    duration: '2 years',
    category: 'analytics',
    description: 'Helps us understand how visitors use our website to improve user experience.'
  },
  {
    name: 'marketing_tracker',
    purpose: 'Enables personalized marketing content',
    duration: '90 days',
    category: 'marketing',
    description: 'Used to deliver relevant advertisements and content based on your interests.'
  }
];

const cookieCategories = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    icon: <Shield className="w-6 h-6" />,
    color: 'text-green-400'
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    icon: <Settings className="w-6 h-6" />,
    color: 'text-blue-400'
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    icon: <Eye className="w-6 h-6" />,
    color: 'text-purple-400'
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'These cookies are used to deliver relevant advertisements and content.',
    icon: <Globe className="w-6 h-6" />,
    color: 'text-orange-400'
  }
];

export default function Cookies() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'essential': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'functional': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'analytics': return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      case 'marketing': return 'bg-orange-500/20 text-orange-400 border-orange-400/30';
      default: return 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30';
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to enhance your browsing experience and improve our services."
        url="https://ziontechgroup.com/cookies"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">
            <Cookie className="w-8 h-8 text-zion-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            This policy explains how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience, 
            improve our services, and provide personalized content.
          </p>
        </div>

        {/* What Are Cookies Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Database className="w-6 h-6 text-zion-cyan" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
                They help websites remember information about your visit, such as your preferred language and other settings, 
                which can make your next visit easier and the site more useful to you.
              </p>
              <p>
                At Zion Tech Group, we use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze how our website is used to improve performance</li>
                <li>Provide personalized content and advertisements</li>
                <li>Ensure security and prevent fraud</li>
                <li>Enable certain website functionality</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieCategories.map((category) => (
              <Card key={category.id} className="border-zion-purple/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Cookie Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Clock className="w-6 h-6 text-zion-cyan" />
              Detailed Cookie Information
            </CardTitle>
            <CardDescription>
              Below is a detailed list of cookies we use, their purpose, and duration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {cookieTypes.map((cookie) => (
                <div key={cookie.name} className="border border-zion-purple/20 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {cookie.name}
                      </h4>
                      <p className="text-zion-slate-light text-sm mb-2">
                        {cookie.purpose}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(cookie.category)}>
                        {cookie.category}
                      </Badge>
                      <span className="text-zion-slate-light text-sm">
                        {cookie.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    {cookie.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookie Management */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Settings className="w-6 h-6 text-zion-cyan" />
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                You have several options for managing cookies on our website:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-zion-cyan pl-4">
                  <h4 className="font-semibold text-white mb-2">Browser Settings</h4>
                  <p className="text-sm">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies, delete cookies, or notify you when cookies are being sent.
                  </p>
                </div>
                
                <div className="border-l-4 border-zion-purple pl-4">
                  <h4 className="font-semibold text-white mb-2">Cookie Consent Tool</h4>
                  <p className="text-sm">
                    Use our cookie consent tool to manage your preferences for non-essential cookies. 
                    You can update these settings at any time.
                  </p>
                </div>
                
                <div className="border-l-4 border-zion-cyan pl-4">
                  <h4 className="font-semibold text-white mb-2">Third-Party Opt-Out</h4>
                  <p className="text-sm">
                    For third-party cookies (like analytics and marketing), you can opt out through 
                    the respective service providers' opt-out mechanisms.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-zion-purple/10 border border-zion-purple/20 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> Disabling certain cookies may limit your ability to use some features of our website 
                  or affect the overall user experience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Globe className="w-6 h-6 text-zion-cyan" />
              Third-Party Cookies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Some cookies on our website are set by third-party services that we use to enhance functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Helps us understand website traffic and user behavior</li>
                <li><strong>Social Media Platforms:</strong> Enable social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> Secure payment processing and fraud prevention</li>
                <li><strong>Content Delivery Networks:</strong> Improve website loading speed and performance</li>
              </ul>
              <p className="mt-4">
                These third-party services have their own privacy policies and cookie practices. 
                We recommend reviewing their policies for more information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates and Contact */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lock className="w-6 h-6 text-zion-cyan" />
              Policy Updates and Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
              </p>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-zion-purple/10 border border-zion-purple/20 rounded-lg">
                <p className="text-sm">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center text-zion-slate-light text-sm">
          <p>Last updated: January 15, 2024</p>
          <p className="mt-2">
            This Cookie Policy is effective as of the date listed above.
          </p>
        </div>
      </div>
    </div>
  );
}