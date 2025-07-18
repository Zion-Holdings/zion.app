import { Button } from '@/components/ui/button;'
import { ArrowRight, Zap, Target, Sparkles } from 'lucide-react;'
import { GradientHeading } from '@/components/GradientHeading;'
import Link from 'next/link;'
import { useTranslation } from 'react-i18next;'
import { HowItWorksVideo } from '@/components/HowItWorksVideo;'
'
export function HeroSection(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { t } = useTranslation();'
  return (;'
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-background via-background to-muted/20>;"";
      {/* Enhanced background effects */};"";
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background opacity-90"></div>;"
;";"
      {/* Animated floating elements with better positioning */};";";"
      <div className=absolute inset-0>";";"
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary opacity-40 animate-pulse></div>;"";
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary opacity-30 animate-pulse hidden sm:block"></div>;";"
        <div className=absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-primary opacity-30 animate-pulse"></div>";;""
        <div className=absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-secondary opacity-20 animate-pulse hidden sm:block></div>";"
;";"
        {/* New animated elements */};";";
        <div className="absolute top-1/6 right-1/6 w-1 h-1 rounded-full bg-accent opacity-50 animate-bounce"></div>;";"
        <div className=absolute bottom-1/3 left-1/6 w-2 h-2 rounded-full bg-primary opacity-25 animate-ping"></div>";
      </div>;""
;;""
      {/* Grid pattern overlay */};;"";
      <div className=absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>";;"
";;""
      <div className=container relative z-10 px-4 mx-auto text-center flex flex-col justify-center min-h-[500px] md:min-h-[600px]>";";
        {/* Enhanced hero title with better spacing */}";";"
        <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center mb-8>;"";
          <div className="relative">;";"
            <GradientHeading className=text-4xl sm:text-5xl md:text-7xl font-bold animate-typing leading-tight">";;""
              {t('home.hero_title')}'
            </GradientHeading>;'
            {/* Decorative elements */};'
            <div className=absolute -top-4 -right-4 text-primary animate-bounce>";";"
              <Sparkles className="w-6 h-6 />;"";
            </div>;"";
            <div className="absolute -bottom-4 -left-4 text-secondary animate-pulse">;";"
              <Zap className=w-6 h-6" />"
            </div>
          </div>;"
        </div>;";
";";
        {/* Enhanced subtitle with better typography */}";";"
        <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-12>;"";
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">;";"
            {t('home.hero_subtitle')};'
          </p>'
        </div>;
;'
        {/* Enhanced CTA buttons with modern styling */};'
        <div className=min-h-[60px] md:min-h-[70px] flex items-center justify-center mb-8">";;""
          <div className=flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md sm:max-w-lg>";";
            <Button";";"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground text-base py-3 px-6 sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[48px] font-semibold;"";
              size="lg";
              asChild";"
            >;";"
              <Link;";";
                href="/signup";";"
                role=button"";;""
                aria-label={t('auth.signup')};'
                tabIndex={0};'
                data-testid=hero-signup-btn";";"
                className="flex items-center justify-center gap-2;"";
              >;"";
                {t('auth.signup')};'
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>;"
            </Button>;";
";";
            <Button";";"
              variant="outline;"";
              size="lg";";"
              className=group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary/90 text-base py-3 px-6 sm:text-lg transition-all duration-300 hover:scale-105 min-h-[48px] font-semibold"";
              asChild;""
            >;;""
              <Link;;"";
                id=browse-marketplace"";;""
                href=/marketplace";";"
                className="flex items-center justify-center gap-2;"";
              >;"";
                <Target className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />;";"
                {t('home.browse_marketplace')}'
              </Link>;
            </Button>;'
          </div>'
        </div>;
;'
        {/* Enhanced stats or features section */};'
        <div className=grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">";;""
          <div className=flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50>";";"
            <div className="text-2xl font-bold text-primary mb-1>10K+</div>;"";
            <div className="text-sm text-muted-foreground">Active Users</div>;";"
          </div>;";"
          <div className=flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">";;""
            <div className=text-2xl font-bold text-secondary mb-1>500+</div>";";"
            <div className="text-sm text-muted-foreground>Products</div>;"";
          </div>;"";
          <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">;";"
            <div className=text-2xl font-bold text-accent mb-1">24/7</div>";;""
            <div className=text-sm text-muted-foreground>Support</div>"
          </div>;"
        </div>;";"
;";"
        {/* Enhanced video section */};";"
        <div className=mt-8">"
          <HowItWorksVideo />;
        </div>;
      </div>
    </section>;"
  );";
}";";
"";
}"";
}"
}"
}"