
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark opacity-90"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      {/* Enhanced floating particles with neon effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-purple-light opacity-60 animate-pulse shadow-lg shadow-zion-purple-light/50"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-cyan opacity-50 animate-pulse shadow-lg shadow-zion-cyan/50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-60 animate-pulse shadow-lg shadow-zion-purple/50"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-cyan-light opacity-40 animate-pulse shadow-lg shadow-zion-cyan-light/50"></div>
        <div className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-50 animate-pulse shadow-lg shadow-zion-purple-light/50"></div>
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 rounded-full bg-zion-cyan opacity-40 animate-pulse shadow-lg shadow-zion-cyan/50"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Enhanced title with neon glow */}
        <div className="mb-6">
          <GradientHeading className="text-5xl md:text-7xl font-bold drop-shadow-[0_0_30px_rgba(34,221,210,0.5)]">
            {t('home.hero_title')}
          </GradientHeading>
        </div>

        <p className="text-xl md:text-2xl text-zion-cyan mb-10 max-w-3xl mx-auto font-medium drop-shadow-[0_0_20px_rgba(34,221,210,0.3)]">
          {t('home.hero_subtitle')}
        </p>

        {/* Enhanced CTA buttons with neon effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg shadow-zion-purple/30 hover:shadow-zion-purple/50 transition-all duration-300 transform hover:scale-105"
            size="lg"
            asChild
          >
            <Link
              to="/signup"
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
            to="/marketplace"
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/20 hover:shadow-zion-cyan/40"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>

        {/* Additional hero elements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">48+</span>
            </div>
            <p className="text-zion-cyan font-semibold">Services Available</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">500+</span>
            </div>
            <p className="text-zion-cyan font-semibold">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">98%</span>
            </div>
            <p className="text-zion-cyan font-semibold">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* CSS for grid animation */}
      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}
