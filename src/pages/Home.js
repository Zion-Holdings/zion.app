import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Zion Tech Group - The Future of Tech Services", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide for 24/7 IT support and innovative solutions.", keywords: "AI, technology, marketplace, services, talent, IT support, global services, tech professionals", canonical: "https://ziontechgroup.com/" }), _jsx(ITServiceRequestHero, {}), _jsx(HeroSection, {}), _jsx(QuickAccess, {}), _jsx(FeatureHighlights, {}), _jsx(TestimonialsSection, {}), _jsx(CategoriesSection, {}), _jsx(BenefitsSection, {}), _jsx(HowItWorksSection, {}), _jsx(FeaturedListingsSection, {}), _jsx(NewsletterSection, {})] }));
}
