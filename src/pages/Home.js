import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(HeroSection, {}), _jsx(FeaturedListingsSection, {}), _jsx(NewsletterSection, {})] }));
}
