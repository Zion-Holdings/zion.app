import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { HowItWorksVideo } from "@/components/HowItWorksVideo";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[600px] md:min-h-[700px]">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-90"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary opacity-30 animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-primary opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-secondary opacity-20 animate-pulse hidden sm:block"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
        {/* Reserve minimum height for hero title to prevent CLS */}
        <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center mb-6">
          <GradientHeading className="text-4xl sm:text-5xl md:text-7xl font-bold animate-typing leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </div>

        {/* Reserve minimum height for subtitle to prevent CLS */}
        <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-10">
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero_subtitle')}
          </p>
        </div>

        {/* Reserve minimum height for buttons to prevent CLS */}
        <div className="min-h-[60px] md:min-h-[70px] flex items-center justify-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground text-base py-3 px-6 sm:text-lg transition-transform hover:scale-105 min-h-[48px]"
              size="lg"
              asChild
            >
              <Link
                href="/signup"
                role="button"
                aria-label={t('auth.signup')}
                tabIndex={0}
                data-testid="hero-signup-btn"
                className="flex items-center justify-center"
              >
                {t('auth.signup')}
              </Link>
            </Button>
            <Link
              id="browse-marketplace"
              href="/marketplace"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary/90 text-base py-4 px-4 sm:text-lg sm:py-6 sm:px-6 rounded-md inline-flex items-center justify-center min-h-[48px] transition-colors duration-200"
            >
              {t('home.browse_marketplace')}
            </Link>
          </div>
        </div>
        <HowItWorksVideo />
      </div>
    </section>
  );
}
