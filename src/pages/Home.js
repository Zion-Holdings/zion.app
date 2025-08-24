import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { EnhancedServicesShowcase } from "@/components/services/EnhancedServicesShowcase";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Zion Tech Group - The Future of Tech Services", description: "Discover cutting-edge AI, cloud, cybersecurity, and development services from verified experts. Transform your business with innovative technology solutions.", keywords: "AI, technology, marketplace, services, talent, cloud, cybersecurity, development, blockchain, web3", canonical: "https://ziontechgroup.com/" }), _jsx(EnhancedHeroSection, {}), _jsx(ITServiceRequestHero, {}), _jsx(QuickAccess, {}), _jsx(FeatureCTAs, {}), _jsx(FeatureHighlights, {}), _jsx(EnhancedServicesShowcase, {}), _jsx(CategoriesSection, {}), _jsx(BenefitsSection, {}), _jsx(HowItWorksSection, {}), _jsx(FeaturedListingsSection, {}), _jsx(NewsletterSection, {})] }));
}
