
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-90"></div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary opacity-30 animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-primary opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-secondary opacity-20 animate-pulse hidden sm:block"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <GradientHeading className="mb-6 text-4xl sm:text-5xl md:text-7xl font-bold animate-typing">
          {t('home.hero_title')}
        </GradientHeading>

        <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-3xl mx-auto">
          {t('home.hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground text-base py-3 px-6 sm:text-lg transition-transform hover:scale-105"
            size="lg" // size="lg" might control some default padding, check if override is enough
            asChild
          >
            <Link
              href="/signup"
              role="button"
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              {t('auth.signup')}
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            href="/marketplace"
            className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary/90 text-base py-4 px-4 sm:text-lg sm:py-6 sm:px-6 rounded-md inline-flex items-center justify-center"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>
      </div>
    </section>
  );
}
