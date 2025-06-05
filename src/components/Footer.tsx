import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";
import config from "../config/default.json";

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-foreground/80 mb-4 max-w-xs">
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href={config.socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href={config.socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
              <a
                href={config.socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href={config.socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href={config.socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-label="GitHub" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-foreground/80 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/talent" className="text-foreground/80 hover:text-primary transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-foreground/80 hover:text-primary transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-foreground/80 hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-foreground/80 hover:text-primary transition-colors">Green IT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/innovation" className="text-foreground/80 hover:text-primary transition-colors">Innovation</Link></li>
              <li><Link to="/partners" className="text-foreground/80 hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-foreground/80 hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-foreground/80 mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-foreground/80 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <Link to="/terms" className="text-foreground/80 hover:text-primary text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}