export const ENHANCED_SERVICES = [
    // AI & Machine Learning Services
    {
        id: "ai-automation-suite",
        title: "AI-Powered Business Process Automation Suite",
        description: "Complete automation solution that uses AI to streamline business processes, reduce manual work by 80%, and increase operational efficiency across departments.",
        category: "AI & Machine Learning",
        subcategory: "Process Automation",
        price: 2500,
        currency: "$",
        pricingModel: "subscription",
        features: [
            "Intelligent document processing with 99.9% accuracy",
            "Automated workflow orchestration",
            "Real-time analytics dashboard",
            "Custom AI model training",
            "Multi-language support",
            "API integration capabilities",
            "24/7 monitoring and alerts"
        ],
        benefits: [
            "Reduce operational costs by 40-60%",
            "Eliminate manual data entry errors",
            "Scale operations without additional staff",
            "Improve customer response times",
            "Ensure compliance and audit trails"
        ],
        useCases: [
            "Invoice processing and accounts payable",
            "Customer service ticket routing",
            "HR onboarding automation",
            "Sales lead qualification",
            "Inventory management optimization"
        ],
        marketPrice: "$2,500/month - Industry standard: $3,000-5,000/month",
        contactInfo: {
            phone: "+1 302 464 0950",
            email: "kleber@ziontechgroup.com",
            website: "https://ziontechgroup.com/ai-automation"
        },
        tags: ["AI Automation", "Process Optimization", "Business Intelligence", "RPA", "Machine Learning"],
        author: {
            name: "Zion Tech Group",
            id: "zion-tech-group",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        aiScore: 98,
        rating: 4.9,
        reviewCount: 156,
        availability: "within-week",
        location: "Global",
        certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant"],
        languages: ["English", "Spanish", "French", "German", "Portuguese"]
    },
    {
        id: "ai-chatbot-platform",
        title: "Enterprise AI Chatbot Platform",
        description: "Advanced conversational AI platform that provides intelligent customer support, lead generation, and business automation through natural language processing.",
        category: "AI & Machine Learning",
        subcategory: "Conversational AI",
        price: 1800,
        currency: "$",
        pricingModel: "subscription",
        features: [
            "Multi-language support with 50+ languages",
            "Advanced NLP and sentiment analysis",
            "Seamless CRM integration",
            "Custom training and fine-tuning",
            "Analytics and performance metrics",
            "Omnichannel deployment",
            "Security and compliance features"
        ],
        benefits: [
            "Reduce customer support costs by 70%",
            "Provide 24/7 customer service",
            "Improve customer satisfaction scores",
            "Generate qualified leads automatically",
            "Scale support operations efficiently"
        ],
        useCases: [
            "Customer service automation",
            "Lead qualification and nurturing",
            "Sales support and product recommendations",
            "HR and internal support",
            "E-commerce customer assistance"
        ],
        marketPrice: "$1,800/month - Industry standard: $2,500-4,000/month",
        contactInfo: {
            phone: "+1 302 464 0950",
            email: "kleber@ziontechgroup.com",
            website: "https://ziontechgroup.com/ai-chatbot"
        },
        tags: ["AI Chatbot", "NLP", "Customer Support", "Lead Generation", "Automation"],
        author: {
            name: "Zion Tech Group",
            id: "zion-tech-group",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
        },
        images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T10:00:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 89,
        availability: "within-week",
        location: "Global",
        certifications: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant"],
        languages: ["English", "Spanish", "French", "German", "Portuguese", "Chinese", "Japanese"]
    }
];
export const SERVICE_CATEGORIES = [
    {
        id: "ai-machine-learning",
        name: "AI & Machine Learning",
        description: "Cutting-edge artificial intelligence and machine learning solutions",
        icon: "🤖",
        services: ["ai-automation-suite", "ai-chatbot-platform"]
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity",
        description: "Advanced security solutions to protect your digital assets",
        icon: "🔒",
        services: []
    },
    {
        id: "cloud-computing",
        name: "Cloud Computing",
        description: "Scalable cloud infrastructure and migration services",
        icon: "☁️",
        services: []
    },
    {
        id: "web-development",
        name: "Web Development",
        description: "Modern web applications and digital experiences",
        icon: "🌐",
        services: []
    },
    {
        id: "mobile-development",
        name: "Mobile Development",
        description: "Native and cross-platform mobile applications",
        icon: "📱",
        services: []
    },
    {
        id: "data-analytics",
        name: "Data Analytics",
        description: "Data-driven insights and business intelligence",
        icon: "📊",
        services: []
    }
];
export const PRICING_TIERS = [
    {
        id: "basic",
        name: "Basic",
        description: "Essential features for small businesses",
        multiplier: 1.0,
        features: ["Core functionality", "Basic support", "Standard updates"]
    },
    {
        id: "professional",
        name: "Professional",
        description: "Advanced features for growing businesses",
        multiplier: 1.5,
        features: ["Advanced features", "Priority support", "Custom integrations", "Analytics dashboard"]
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Full-featured solution for large organizations",
        multiplier: 2.0,
        features: ["All features", "24/7 support", "Custom development", "Dedicated account manager", "SLA guarantees"]
    }
];
