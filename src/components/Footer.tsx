import { FooterNewsletter } from "@/components/FooterNewsletter";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ChevronUp,
} from "lucide-react";
import Link from "next/link"; // Changed from react-router-dom
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget";
import { useTranslation } from "react-i18next";

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "" || envVar === "#" || envVar === "/") {
    return fallback;
  }
  return envVar;
}

const TWITTER_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
  "https://twitter.com/ZionTechGroup"
);
const LINKEDIN_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  "https://linkedin.com/company/ziontechgroup"
);
const FACEBOOK_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  "https://facebook.com/ZionTechGroup"
);
const INSTAGRAM_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  "https://instagram.com/ZionTechGroup"
);
const GITHUB_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  "https://github.com/ZionTechGroup"
);

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-foreground/80 mb-4" style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}>
              {t('footer.tagline')}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">{t('footer.sections.marketplace.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.marketplace.products')}</Link></li>
              {/* Ensure the services link routes to the main services page */}
              <li>
                <Link
                  href="/services"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {t('footer.sections.marketplace.services')}
                </Link>
              </li>
              <li><Link href="/talent" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.marketplace.talent')}</Link></li>
              <li>
                <Link
                  href="/equipment"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                  target="_self"
                >
                  {t('footer.sections.marketplace.equipment')}
                </Link>
              </li>
              <li><Link href="/categories" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.marketplace.categories')}</Link></li>
              <li><Link href="/green-it" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.marketplace.green_it')}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">{t('footer.sections.company.title')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.company.about_us')}</Link></li>
              <li><Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.company.blog')}</Link></li>
              <li><Link href="/innovation" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.company.innovation')}</Link></li>
              <li><Link href="/partners" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.company.partners')}</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.company.careers')}</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">{t('footer.sections.company.contact')}</Link></li>
              <li>
                <Link
                  href="/sitemap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  {t('footer.sections.company.sitemap')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg">{t('footer.sections.newsletter.title')}</h3>
            <p className="text-foreground/80 mb-4 text-sm">
              {t('footer.sections.newsletter.description')}
            </p>
            <div className="max-w-sm">
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
              });
            }}
            className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span>{t('footer.back_to_top')}</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/80 text-sm">
              {t('footer.bottom.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                {t('footer.bottom.privacy_policy')}
              </Link>
              <Link
                href="/terms"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                {t('footer.bottom.terms_of_service')}
              </Link>
              <Link
                href="/status"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                {t('footer.bottom.api_status')}
              </Link>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </div>
    </footer>
  );
}
