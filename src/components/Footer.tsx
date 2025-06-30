import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
import Link from "next/link"; // Changed from react-router-dom
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget";

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
  return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-foreground/80 mb-4" style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}>
              The world&apos;s first free marketplace dedicated to high-tech and artificial intelligence.
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
                <span className="sr-only">Twitter</span>
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
                <span className="sr-only">LinkedIn</span>
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
                <span className="sr-only">Facebook</span>
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
                <span className="sr-only">Instagram</span>
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
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-foreground/80 hover:text-primary transition-colors text-sm">Products</Link></li>
              {/* Ensure the services link routes to the main services page */}
              <li>
                <Link
                  href="/services"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li><Link href="/talent" className="text-foreground/80 hover:text-primary transition-colors text-sm">Talent</Link></li>
              <li>
                <Link
                  href="/equipment"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                  target="_self"
                >
                  Equipment
                </Link>
              </li>
              <li><Link href="/categories" className="text-foreground/80 hover:text-primary transition-colors text-sm">Categories</Link></li>
              <li><Link href="/green-it" className="text-foreground/80 hover:text-primary transition-colors text-sm">Green IT</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/innovation" className="text-foreground/80 hover:text-primary transition-colors text-sm">Innovation</Link></li>
              <li><Link href="/partners" className="text-foreground/80 hover:text-primary transition-colors text-sm">Partners</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li>
                <Link
                  href="/sitemap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-foreground/80 mb-4 text-sm">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
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
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/status"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                API Status
              </Link>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </div>
    </footer>
  );
}
