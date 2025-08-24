import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { ComprehensiveServicesShowcase } from "@/components/home/ComprehensiveServicesShowcase";
import { BottomNavigation } from "@/components/MobileNavigation";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place.", keywords: "AI, technology, marketplace, services, talent", canonical: "https://ziontechgroup.com/" }), _jsx(ITServiceRequestHero, {}), _jsx(HeroSection, {}), _jsx(QuickAccess, {}), _jsx(FeatureCTAs, {}), _jsx(FeatureHighlights, {}), _jsx(ComprehensiveServicesShowcase, {}), _jsx(CategoriesSection, {}), _jsx(BenefitsSection, {}), _jsx(HowItWorksSection, {}), _jsx(FeaturedListingsSection, {}), _jsx(NewsletterSection, {}), _jsx(BottomNavigation, {})] }));
}
