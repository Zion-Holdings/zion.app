import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { BlogSection } from "@/components/BlogSection";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection";
import { SocialShareSection } from "@/components/SocialShareSection";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Users, Zap, Settings, Sparkles, BarChart3, Smartphone } from "lucide-react";
export default function Index() {
    const { t } = useTranslation();
    const { isRTL } = useLanguage();
    // Tools and features showcase
    const toolsFeatures = [
        {
            title: t("home.tool_ai_matcher"),
            description: t("home.tool_ai_matcher_desc"),
            icon: _jsx(Sparkles, { className: "h-6 w-6 text-zion-cyan" }),
            link: "/match"
        },
        {
            title: t("home.tool_talent"),
            description: t("home.tool_talent_desc"),
            icon: _jsx(Users, { className: "h-6 w-6 text-zion-purple" }),
            link: "/talent"
        },
        {
            title: t("home.tool_services"),
            description: t("home.tool_services_desc"),
            icon: _jsx(Zap, { className: "h-6 w-6 text-zion-cyan" }),
            link: "/services"
        },
        {
            title: t("home.tool_equipment"),
            description: t("home.tool_equipment_desc"),
            icon: _jsx(Settings, { className: "h-6 w-6 text-zion-purple" }),
            link: "/equipment"
        },
        {
            title: t("home.tool_analytics"),
            description: t("home.tool_analytics_desc"),
            icon: _jsx(BarChart3, { className: "h-6 w-6 text-zion-cyan" }),
            link: "/analytics"
        },
        {
            title: "Mobile App",
            description: "Take Zion with you on the go with our mobile app for iOS and Android",
            icon: _jsx(Smartphone, { className: "h-6 w-6 text-zion-purple" }),
            link: "/mobile-launch"
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-zion-blue text-white", children: [_jsx(SEO, { title: t("home.seo_title"), description: t("home.seo_description"), keywords: t("home.seo_keywords"), canonical: "https://ziontechgroup.com/" }), _jsx(Header, {}), _jsx(HeroSection, {}), _jsx("section", { className: "py-16 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4", children: t("home.explore_tools") }), _jsx("p", { className: "text-zion-slate-light text-xl max-w-3xl mx-auto", children: t("home.tools_description") })] }), _jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`, children: toolsFeatures.map((feature, index) => (_jsxs(Link, { to: feature.link, className: "bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300", children: [_jsx("div", { className: "bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4", children: feature.icon }), _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-zion-slate-light mb-4", children: feature.description }), _jsxs("div", { className: `flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { children: t("general.explore") }), _jsx(ArrowRight, { className: `${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4` })] })] }, index))) })] }) }), _jsx(CategoriesSection, {}), _jsx(BenefitsSection, {}), _jsx(FeaturesGuideSection, {}), _jsx(HowItWorksSection, {}), _jsx(FeaturedListingsSection, {}), _jsx(TestimonialCarousel, {}), _jsx(TrustedBySection, {}), _jsx(BlogSection, {}), _jsx(SocialShareSection, {}), _jsx(WaitlistSection, {}), _jsx(FloatingCTA, {}), _jsx(Footer, {})] }));
}
