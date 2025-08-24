import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { EnhancedQuickAccess } from "@/components/home/EnhancedQuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { ServicesShowcase } from "@/components/ServicesShowcase";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place.", keywords: "AI, technology, marketplace, services, talent", canonical: "https://ziontechgroup.com/" }), _jsx(EnhancedHeroSection, {}), _jsx(ITServiceRequestHero, {}), _jsx(EnhancedQuickAccess, {}), _jsx(FeatureCTAs, {}), _jsx(FeatureHighlights, {}), _jsx(ServicesShowcase, {}), _jsx(CategoriesSection, {}), _jsx(BenefitsSection, {}), _jsx(HowItWorksSection, {}), _jsx(FeaturedListingsSection, {}), _jsx(TestimonialsSection, {}), _jsx(NewsletterSection, {})] }));
}
