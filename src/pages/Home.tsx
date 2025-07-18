import React from 'react';
import {;
  ArrowRight,;
  Zap,;
  Users,;
  Globe,;
  Shield,;
  TrendingUp,;
  Star,;
  CheckCircle,;
  Play,;
  Target,;
  Award,;
  Heart,;'
} from '@/components/ui/icons';'
import { useTranslation } from 'react-i18next';'
import { SEO } from '@/components/SEO';'
import { Header } from '@/components/Header';'
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import { Badge } from '@/components/ui/badge';
;
export default function Home(): unknown {) {;
  const { t } = useTranslation();
;
  const features: unknown unknown = [;
    {;'
      icon: <Zap className="h-6 w-6" />,;"
      title: t('home.features.ai.title', 'AI-Powered Matching'),;
      description: t(;'
        'home.features.ai.description',;'
        'Advanced algorithms connect you with the perfect talent and opportunities.',;
      ),;
    },;
    {;'
      icon: <Globe className="h-6 w-6" />,;"
      title: t('home.features.global.title', 'Global Network'),;
      description: t(;'
        'home.features.global.description',;'
        'Access talent and opportunities from around the world.',;
      ),;
    },;
    {;'
      icon: <Shield className="h-6 w-6" />,;"
      title: t('home.features.secure.title', 'Secure & Trusted'),;
      description: t(;'
        'home.features.secure.description',;'
        'Enterprise-grade security with verified profiles and escrow protection.',;
      ),;
    },;
    {;'
      icon: <TrendingUp className="h-6 w-6" />,;"
      title: t('home.features.growth.title', 'Growth Focused'),;
      description: t(;'
        'home.features.growth.description',;'
        'Tools and insights to help you scale and succeed.',;
      ),;
    },;
  ];
;
  const stats: unknown unknown = [;
    {;'
      label: t('home.stats.talent', 'Talent'),;'
      value: '10K+',;'
      icon: <Users className="h-4 w-4" />,;
    },;
    {;"
      label: t('home.stats.projects', 'Projects'),;'
      value: '5K+',;'
      icon: <Target className="h-4 w-4" />,;
    },;
    {;"
      label: t('home.stats.countries', 'Countries'),;'
      value: '50+',;'
      icon: <Globe className="h-4 w-4" />,;
    },;
    {;"
      label: t('home.stats.satisfaction', 'Satisfaction'),;'
      value: '98%',;'
      icon: <Heart className="h-4 w-4" />,;
    },;
  ];
;
  const testimonials: unknown unknown = [;
    {;"
      name: 'Sarah Chen',;'
      role: 'AI Research Lead',;'
      company: 'TechCorp',;
      content: t(;'
        'home.testimonials.sarah',;'
        'Zion connected us with world-class AI researchers. The platform is incredible!',;
      ),;'
      rating: "5",;
    },;
    {;"
      name: 'Marcus Rodriguez',;'
      role: 'Startup Founder',;'
      company: 'InnovateLab',;
      content: t(;'
        'home.testimonials.marcus',;'
        'Found our entire development team through Zion. Game changer for our startup.',;
      ),;'
      rating: "5",;
    },;
    {;"
      name: 'Dr. Emily Watson',;'
      role: 'Data Scientist',;'
      company: 'DataFlow',;
      content: t(;'
        'home.testimonials.emily',;'
        'The quality of opportunities and the professional network is outstanding.',;
      ),;'
      rating: "5",;
    },;
  ];
;
  return (;"
    <div className="min-h-screen bg-background text-foreground">;
      <SEO;"
        title={t('home.meta.title', 'Welcome to Zion')};
        description={t(;'
          'home.meta.description',;'
          "The world's first free marketplace dedicated to high-tech and artificial intelligence",;
        )};
        keywords={t(;"
          'home.meta.keywords',;'
          'AI marketplace, tech services, artificial intelligence',;
        )};
      />;
;
      <Header />;
;
      {/* Hero Section */};'
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">;"
        <div className="container mx-auto px-4 py-20 lg:py-32">;"
          <div className="text-center max-w-4xl mx-auto">;"
            <Badge variant="secondary" className="mb-6">;"
              <Sparkles className="h-3 w-3 mr-2" />;"
              {t('home.hero.badge', 'The Future of Tech & AI')};
            </Badge>;
;'
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">;"
              {t('home.hero.title', 'Welcome to Zion')};
            </h1>;
;'
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">;
              {t(;"
                'home.hero.subtitle',;'
                "The world's first free marketplace dedicated to high-tech and artificial intelligence. Publish, connect, and thrive — all in one place.",;
              )};
            </p>;
;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">;"
              <Button size="lg" className="group">;"
                {t('home.hero.cta.primary', 'Get Started Free')};'
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />;
              </Button>;"
              <Button variant="outline" size="lg" className="group">;"
                <Play className="mr-2 h-4 w-4" />;"
                {t('home.hero.cta.secondary', 'Watch Demo')};
              </Button>;
            </div>;
;'
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">;
              {stats.map((stat, index) => (;"
                <div key={index} className="text-center">;"
                  <div className="flex items-center justify-center mb-2">;
                    {stat.icon};
                  </div>;"
                  <div className="text-2xl font-bold">{stat.value}</div>;"
                  <div className="text-sm text-muted-foreground">;
                    {stat.label};
                  </div>;
                </div>;
              ))};
            </div>;
          </div>;
        </div>;
      </section>;
;
      {/* Features Section */};"
      <section className="py-20 bg-muted/30">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl md:text-4xl font-bold mb-4">;"
              {t('home.features.title', 'Why Choose Zion?')};
            </h2>;'
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
              {t(;"
                'home.features.subtitle',;'
                'Everything you need to succeed in the AI and tech marketplace',;
              )};
            </p>;
          </div>;
;'
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <Card;
                key={index};"
                className="border-0 shadow-lg hover:shadow-xl transition-shadow";
              >;
                <CardHeader>;"
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">;
                    {feature.icon};
                  </div>;"
                  <CardTitle className="text-xl">{feature.title}</CardTitle>;
                </CardHeader>;
                <CardContent>;"
                  <CardDescription className="text-base">;
                    {feature.description};
                  </CardDescription>;
                </CardContent>;
              </Card>;
            ))};
          </div>;
        </div>;
      </section>;
;
      {/* CTA Section */};"
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">;"
        <div className="container mx-auto px-4 text-center">;"
          <div className="max-w-3xl mx-auto">;"
            <h2 className="text-3xl md:text-4xl font-bold mb-6">;"
              {t('home.cta.title', 'Ready to Transform Your Tech Journey?')};
            </h2>;'
            <p className="text-xl text-muted-foreground mb-8">;
              {t(;"
                'home.cta.subtitle',;'
                'Join thousands of professionals and companies already thriving on Zion',;
              )};
            </p>;'
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
              <Button size="lg" className="group">;"
                {t('home.cta.primary', 'Start Your Journey')};'
                <Rocket className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />;
              </Button>;"
              <Button variant="outline" size="lg" className="group">;"
                {t('home.cta.secondary', 'Learn More')};'
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />;
              </Button>;
            </div>;
          </div>;
        </div>;
      </section>;
;
      {/* Testimonials Section */};"
      <section className="py-20">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-16">;"
            <h2 className="text-3xl md:text-4xl font-bold mb-4">;"
              {t('home.testimonials.title', 'What Our Community Says')};
            </h2>;'
            <p className="text-xl text-muted-foreground">;"
              {t('home.testimonials.subtitle', 'Real stories from real people')};
            </p>;
          </div>;
;'
          <div className="grid md:grid-cols-3 gap-8">;
            {testimonials.map((testimonial, index) => (;"
              <Card key={index} className="border-0 shadow-lg">;
                <CardHeader>;"
                  <div className="flex items-center gap-2 mb-4">;
                    {[...Array(testimonial.rating)].map((_, i) => (;
                      <Star;
                        key={i};"
                        className="h-4 w-4 fill-yellow-400 text-yellow-400";
                      />;
                    ))};
                  </div>;"
                  <CardDescription className="text-base">;"
                    "{testimonial.content}";
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;"
                  <div className="flex items-center gap-3">;"
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">;"
                      <Award className="h-5 w-5 text-primary" />;
                    </div>;
                    <div>;"
                      <div className="font-semibold">{testimonial.name}</div>;"
                      <div className="text-sm text-muted-foreground">;
                        {testimonial.role} at {testimonial.company};
                      </div>;
                    </div>;
                  </div>;
                </CardContent>;
              </Card>;
            ))};
          </div>;
        </div>;
      </section>;
;
      {/* Final CTA */};"
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">;"
        <div className="container mx-auto px-4 text-center">;"
          <div className="max-w-2xl mx-auto">;"
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-primary" />;"
            <h2 className="text-3xl md:text-4xl font-bold mb-6">;"
              {t('home.final.title', 'Join the Future Today')};
            </h2>;'
            <p className="text-xl text-muted-foreground mb-8">;
              {t(;"
                'home.final.subtitle',;'
                'Be part of the revolution in AI and technology',;
              )};
            </p>;'
            <Button size="lg" className="group">;"
              <CheckCircle className="mr-2 h-4 w-4" />;"
              {t('home.final.cta', 'Get Started Now')};'
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />;
            </Button>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
"