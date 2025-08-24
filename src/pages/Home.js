import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { EnhancedQuickAccess } from "@/components/home/EnhancedQuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Zion Tech Group - The Future of Tech Services", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide for 24/7 IT support and innovative solutions.", keywords: "AI, technology, marketplace, services, talent, IT support, global services, tech professionals", canonical: "https://ziontechgroup.com/" }), _jsx(ITServiceRequestHero, {}), _jsx(HeroSection, {}), _jsx(EnhancedQuickAccess, {}), _jsx(FeatureCTAs, {}), _jsx(FeatureHighlights, {}), _jsx(TestimonialsSection, {})] }));
}
