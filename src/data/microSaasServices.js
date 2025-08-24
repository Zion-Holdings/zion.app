export const MICRO_SAAS_SERVICES = [
    {
        id: "ai-content-optimizer",
        title: "AI Content Optimizer Pro",
        description: "Advanced AI-powered content optimization tool that analyzes, improves, and optimizes your content for SEO, readability, and engagement. Features real-time suggestions, competitor analysis, and performance tracking.",
        category: "AI & ML",
        pricing: { starter: 29, professional: 79, enterprise: 199, currency: "$", billing: "monthly" },
        features: ["AI-powered content analysis", "SEO optimization suggestions", "Readability scoring", "Competitor content analysis", "Performance tracking", "Multi-language support", "API access", "Custom templates"],
        benefits: ["Improve SEO rankings by 40%", "Increase content engagement by 60%", "Save 5+ hours per content piece", "Reduce bounce rate by 25%", "Optimize for multiple platforms"],
        useCases: ["Blog content optimization", "Marketing copy improvement", "Product description enhancement", "Social media content", "Email marketing optimization"],
        targetAudience: ["Content creators", "Marketing teams", "SEO specialists", "Small businesses", "Agencies"],
        integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Zapier", "REST API"],
        support: ["24/7 chat support", "Email support", "Video tutorials", "Live webinars", "Dedicated account manager"],
        deployment: ["Cloud-based", "SaaS", "Mobile responsive", "Progressive Web App"],
        compliance: ["GDPR", "CCPA", "SOC 2", "ISO 27001"],
        rating: 4.8,
        reviewCount: 1247,
        featured: true,
        launchDate: "2024-01-15",
        website: "https://ziontechgroup.com/ai-content-optimizer",
        demo: "https://ziontechgroup.com/demo/ai-content-optimizer",
        documentation: "https://ziontechgroup.com/docs/ai-content-optimizer",
        tags: ["AI", "Content Optimization", "SEO", "Marketing", "Analytics"],
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500",
        author: { name: "Zion AI Labs", id: "zion-ai-labs", avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100" }
    },
    {
        id: "cyber-threat-monitor",
        title: "Cyber Threat Monitor",
        description: "Real-time cybersecurity threat detection and monitoring system with AI-powered analysis and automated response capabilities. Provides comprehensive security insights and threat intelligence.",
        category: "Security",
        pricing: { starter: 99, professional: 299, enterprise: 799, currency: "$", billing: "monthly" },
        features: ["Real-time threat detection", "AI-powered analysis", "Automated response", "Threat intelligence", "Vulnerability scanning", "Compliance reporting", "24/7 monitoring", "Custom alerts"],
        benefits: ["Detect threats 3x faster", "Reduce false positives by 70%", "Automated incident response", "Compliance automation", "Cost-effective security"],
        useCases: ["Enterprise security", "SMB cybersecurity", "Compliance monitoring", "Incident response", "Security operations"],
        targetAudience: ["Security teams", "IT administrators", "Compliance officers", "Small businesses", "Enterprises"],
        integration: ["SIEM systems", "Firewalls", "IDS/IPS", "Cloud platforms", "API integration"],
        support: ["24/7 security support", "Dedicated security engineer", "Emergency response", "Training programs"],
        deployment: ["Cloud-native", "On-premise", "Hybrid", "Multi-cloud"],
        compliance: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA", "GDPR"],
        rating: 4.9,
        reviewCount: 892,
        featured: true,
        launchDate: "2024-02-01",
        website: "https://ziontechgroup.com/cyber-threat-monitor",
        demo: "https://ziontechgroup.com/demo/cyber-threat-monitor",
        documentation: "https://ziontechgroup.com/docs/cyber-threat-monitor",
        tags: ["Cybersecurity", "Threat Detection", "AI", "Compliance", "Monitoring"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500",
        author: { name: "Zion Security", id: "zion-security", avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100" }
    }
];
export const getMicroSaasServicesByCategory = (category) => {
    if (category === 'all')
        return MICRO_SAAS_SERVICES;
    return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};
export const getFeaturedMicroSaasServices = () => {
    return MICRO_SAAS_SERVICES.filter(service => service.featured);
};
export const getMicroSaasServicesByPriceRange = (min, max) => {
    return MICRO_SAAS_SERVICES.filter(service => service.pricing.starter >= min && service.pricing.starter <= max);
};
