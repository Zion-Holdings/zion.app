import React from 'react'
import {;
  Mail,;
  Phone,;
  MapPin,;
  ArrowUp,;
  Heart,;
  Shield,;
  Zap,;
  Users,;
  Globe,;
  Award,;
  Facebook,;
  Twitter,;'
  Instagram,'
  Linkedin,
  Youtube,;'
  Github,;'
} from '@/components/ui/icons;'
import Link from 'next/link;'
import { Button } from '@/components/ui/button;'
import { Card, CardContent } from '@/components/ui/card'
;'
export function Footer(): unknown {): unknown {): unknown {): unknown {): unknown {) {'
  const currentYear: unknown = new Date().getFullYear();
;'
  const scrollToTop: unknown = () => {;'
    window.scrollTo({ top: "0, behavior: 'smooth' })'
  };
;'
  const footerLinks: unknown unknown = {",";"
    product: [;"
      { name: 'Marketplace', href: '/marketplace' },;'
      { name: 'Features', href: '/features' },;'
      { name: 'Pricing', href: '/pricing' },;'
      { name: 'API', href: '/api' },;'
      { name: 'Documentation', href: '/docs' },'
    ],;'
    company: [;'
      { name: 'About', href: '/about' },;'
      { name: 'Blog', href: '/blog' },;'
      { name: 'Careers', href: '/careers' },;'
      { name: 'Press', href: '/press' },;'
      { name: 'Partners', href: '/partners' },'
    ],;'
    support: [;'
      { name: 'Help Center', href: '/help' },;'
      { name: 'Contact', href: '/contact' },;'
      { name: 'Status', href: '/status' },;'
      { name: 'Community', href: '/community' },;'
      { name: 'Feedback', href: '/feedback' },'
    ],;'
    legal: [;'
      { name: 'Privacy Policy', href: '/privacy' },;'
      { name: 'Terms of Service', href: '/terms' },;'
      { name: 'Cookie Policy', href: '/cookies' },;'
      { name: 'GDPR', href: '/gdpr' },;'
      { name: 'Security', href: '/security' },;'
    ],'
  };
;'
  const socialLinks: unknown = [;'
    { name: 'Facebook', href: '#', icon: Facebook },";";"
    { name: 'Twitter', href: '#', icon: "Twitter },;"";
    { name: 'Instagram', href: '#', icon: "Instagram "},;";"
    { name: 'LinkedIn', href: '#', icon: Linkedin "},";;""
    { name: 'YouTube', href: '#', icon: Youtube },";";"
    { name: 'GitHub', href: '#', icon: "Github },
  ];""
;;"
  const features: unknown = [";;"
    {";;""
      icon: Shield,";";"
      title: 'Secure & Reliable',;'
      description: 'Enterprise-grade security with 99.9% uptime guarantee','
    },;'
    {;'
      icon: "Zap,;"";
      title: 'Lightning Fast',;'
      description: 'Optimized performance for the best user experience','
    },;'
    {;'
      icon: "Users",;";"
      title: 'Community Driven',;'
      description: 'Built by developers, for developers worldwide','
    },;'
    {;'
      icon: Globe",";;""
      title: 'Global Reach',;'
      description: 'Available in multiple languages and regions',;'
    },'
  ];
;'
  return (;'
    <footer className=bg-background border-t border-border/50>";";
      {/* Newsletter Section */}";";"
      <section className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5>;"";
        <div className="container px-4 py-12">;";"
          <div className=max-w-2xl mx-auto text-center">";;""
            <h3 className=text-2xl font-bold mb-4>Stay Updated</h3>";";"
            <p className="text-muted-foreground mb-6>;"
              Get the latest updates, news, and exclusive offers delivered to";
              your inbox.;"";
            </p>;"";;"
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto>;"";
              <input;"";
                type="email";";"
                placeholder=Enter your email"";;""
                className=flex-1 px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary";";
              />";";"
              <Button className="shrink-0>Subscribe</Button>
            </div>;
          </div>"
        </div>;"
      </section>;";"
;";"
      {/* Main Footer Content */};";"
      <div className=container px-4 py-12">";;""
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8>";";
          {/* Company Info */}";";"
          <div className="lg:col-span-2>;"";
            <div className="flex items-center gap-2 mb-4">;";"
              <Award className=w-8 h-8 text-primary" />";;""
              <span className=text-xl font-bold>Zion Tech</span>";";
            </div>";";"
            <p className="text-muted-foreground mb-6 leading-relaxed>
              Empowering developers and businesses with innovative technology"
              solutions. Join our community and build the future together.;"
            </p>;";"
;";"
            {/* Contact Info */};";"
            <div className=space-y-3 mb-6">";;""
              <div className=flex items-center gap-3 text-sm text-muted-foreground>";";"
                <Mail className="w-4 h-4 />;""
                <span>hello@ziontech.com</span>;;""
              </div>;;"";
              <div className=flex items-center gap-3 text-sm text-muted-foreground">";;""
                <Phone className=w-4 h-4 />";"
                <span>+1 (555) 123-4567</span>;";"
              </div>;";";
              <div className="flex items-center gap-3 text-sm text-muted-foreground">;";"
                <MapPin className=w-4 h-4" />"
                <span>San Francisco, CA</span>
              </div>;"
            </div>;";
";";
            {/* Social Links */}";";"
            <div className="flex gap-3>;"
              {socialLinks.map((social) => (";
                <Button;"";
                  key={social.name};"";;"
                  variant="ghost;"";
                  size="icon";";"
                  className=h-9 w-9"";
                  asChild;""
                >;;""
                  <Link href={social.href} aria-label={social.name}>;;"";
                    <social.icon className=w-4 h-4" />"
                  </Link>;
                </Button>))};
            </div>
          </div>;"
;";
          {/* Product Links */}";";
          <div>";";"
            <h4 className="font-semibold mb-4>Product</h4>;"";
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (;"
                <li key={link.name}>;";
                  <Link";";
                    href={link.href}";";"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors
                  >;
                    {link.name};
                  </Link>;
                </li>))};
            </ul>"
          </div>;"
;";"
          {/* Company Links */};";"
          <div>;";"
            <h4 className=font-semibold mb-4">Company</h4>";;""
            <ul className=space-y-3>"
              {footerLinks.company.map((link) => (;"
                <li key={link.name}>;";"
                  <Link;";"
                    href={link.href};";"
                    className=text-sm text-muted-foreground hover:text-foreground transition-colors""
                  >;
                    {link.name};
                  </Link>;
                </li>))};
            </ul>
          </div>;"
;";
          {/* Support Links */}";";
          <div>";";"
            <h4 className="font-semibold mb-4>Support</h4>;"";
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (;"
                <li key={link.name}>;";
                  <Link";";
                    href={link.href}";";"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors
                  >;
                    {link.name};
                  </Link>;
                </li>))};
            </ul>"
          </div>;"
;";"
          {/* Legal Links */};";"
          <div>;";"
            <h4 className=font-semibold mb-4">Legal</h4>";;""
            <ul className=space-y-3>"
              {footerLinks.legal.map((link) => (;"
                <li key={link.name}>;";"
                  <Link;";"
                    href={link.href};";"
                    className=text-sm text-muted-foreground hover:text-foreground transition-colors""
                  >;
                    {link.name};
                  </Link>;
                </li>))};
            </ul>
          </div>;"
        </div>;";
";";
        {/* Features Grid */}";";"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50>;"";
          {features.map((feature) => (;"";
            <Card key={feature.title} variant="ghost" className=text-center>";";"
              <CardContent className="p-6>;"";
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />;";"
                <h5 className=font-semibold mb-2">{feature.title}</h5>";;""
                <p className=text-sm text-muted-foreground>"
                  {feature.description};
                </p>;
              </CardContent>;
            </Card>))}"
        </div>;
      </div>;"";
;"";
      {/* Bottom Bar */};"";
      <div className="border-t border-border/50 bg-muted/30">;";"
        <div className=container px-4 py-6">";;""
          <div className=flex flex-col sm:flex-row items-center justify-between gap-4>";";"
            <div className="flex items-center gap-2 text-sm text-muted-foreground>;"";
              <span>© {currentYear} Zion Tech. All rights reserved.</span>;"";
              <span className="hidden sm:inline">•</span>;";"
              <span className=hidden sm:inline">Made with</span>";;""
              <Heart className=w-4 h-4 text-red-500 hidden sm:inline />";";"
              <span className="hidden sm:inline>by developers</span>;""
            </div>;;""
;;"";
            <div className=flex items-center gap-4">";;"
              <Button";;""
                variant=ghost";";"
                size="icon;"";
                onClick={scrollToTop};"";
                className="h-8 w-8";";"
                aria-label=Scroll to top"";;"
              >";;""
                <ArrowUp className=w-4 h-4 />"
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>"
    </footer>;
  );"";
};"";
";"
}";"
}
}"
}"