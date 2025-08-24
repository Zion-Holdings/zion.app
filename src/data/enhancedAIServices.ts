export interface AIService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    monthly: number;
    yearly: number;
    custom: string;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technologies: string[];
  integrations: string[];
  support: string[];
  link: string;
  badge?: string;
  icon: string;
  image: string;
}

export const ENHANCED_AI_SERVICES: AIService[] = [
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Intelligent conversational AI platform for customer service, lead generation, and business automation.",
    category: "Conversational AI",
    pricing: {
      monthly: 299,
      yearly: 2990,
      custom: "Enterprise pricing available",
      currency: "$",
      pricingModel: "Monthly subscription with usage-based pricing"
    },
    features: [
      "Natural language processing",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics and reporting",
      "Custom training capabilities",
      "Voice and text support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "Improve response time by 90%",
      "Handle 70% of queries automatically",
      "Increase customer satisfaction by 45%"
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification",
      "FAQ handling",
      "Appointment scheduling",
      "Order processing"
    ],
    targetAudience: ["E-commerce businesses", "Service providers", "Healthcare", "Financial services"],
    technologies: [
      "GPT-4", "BERT", "Transformer models", "NLP libraries",
      "Speech recognition", "Text-to-speech"
    ],
    integrations: [
      "Shopify", "WooCommerce", "Salesforce", "HubSpot",
      "Zendesk", "Intercom", "Slack", "Microsoft Teams"
    ],
    support: [
      "24/7 technical support",
      "Custom training",
      "API documentation",
      "Implementation assistance"
    ],
    link: "https://ziontechgroup.com/ai-chatbot-platform",
    badge: "Popular",
    icon: "💬",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a5ab?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-content-generation-suite",
    title: "AI Content Generation Suite",
    description: "Comprehensive AI-powered content creation platform for marketing, SEO, and creative writing.",
    category: "Content Generation",
    pricing: {
      monthly: 199,
      yearly: 1990,
      custom: "Agency and enterprise plans",
      currency: "$",
      pricingModel: "Monthly subscription with content volume tiers"
    },
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "Product descriptions",
      "SEO optimization",
      "Multi-language support"
    ],
    benefits: [
      "Save 20+ hours weekly on content creation",
      "Improve SEO rankings by 40%",
      "Increase engagement rates by 60%",
      "Reduce content costs by 70%"
    ],
    useCases: [
      "Blog content creation",
      "Social media marketing",
      "Email campaigns",
      "E-commerce content",
      "SEO optimization"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Agencies", "E-commerce businesses"],
    technologies: [
      "GPT-4", "Claude", "BERT", "Transformer models",
      "NLP processing", "SEO algorithms"
    ],
    integrations: [
      "WordPress", "Shopify", "Mailchimp", "Buffer",
      "Hootsuite", "HubSpot", "Salesforce"
    ],
    support: [
      "Content strategy consultation",
      "SEO optimization guidance",
      "Training and workshops",
      "Priority support"
    ],
    link: "https://ziontechgroup.com/ai-content-generation-suite",
    icon: "✍️",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-image-generation-platform",
    title: "AI Image Generation Platform",
    description: "Advanced AI-powered image creation platform for marketing, design, and creative projects.",
    category: "Computer Vision",
    pricing: {
      monthly: 149,
      yearly: 1490,
      custom: "Custom enterprise solutions",
      currency: "$",
      pricingModel: "Monthly subscription with image generation credits"
    },
    features: [
      "Text-to-image generation",
      "Image editing and manipulation",
      "Style transfer capabilities",
      "Batch processing",
      "High-resolution output",
      "Commercial licensing"
    ],
    benefits: [
      "Reduce design costs by 80%",
      "Accelerate creative workflows",
      "Generate unlimited variations",
      "Maintain brand consistency"
    ],
    useCases: [
      "Marketing materials",
      "Product photography",
      "Social media graphics",
      "Website design",
      "Advertising campaigns"
    ],
    targetAudience: ["Designers", "Marketing teams", "E-commerce businesses", "Creative agencies"],
    technologies: [
      "DALL-E", "Midjourney", "Stable Diffusion", "GAN models",
      "Computer vision", "Deep learning"
    ],
    integrations: [
      "Adobe Creative Suite", "Canva", "Figma", "Shopify",
      "WordPress", "Social media platforms"
    ],
    support: [
      "Design consultation",
      "Technical support",
      "Training resources",
      "Custom model training"
    ],
    link: "https://ziontechgroup.com/ai-image-generation-platform",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-predictive-analytics",
    title: "AI Predictive Analytics Platform",
    description: "Advanced predictive analytics and forecasting platform powered by machine learning algorithms.",
    category: "Predictive Analytics",
    pricing: {
      monthly: 399,
      yearly: 3990,
      custom: "Enterprise and custom solutions",
      currency: "$",
      pricingModel: "Monthly subscription with data volume tiers"
    },
    features: [
      "Time series forecasting",
      "Predictive modeling",
      "Anomaly detection",
      "Risk assessment",
      "Real-time predictions",
      "Custom algorithm training"
    ],
    benefits: [
      "Improve decision-making accuracy by 65%",
      "Reduce operational risks by 40%",
      "Optimize resource allocation",
      "Identify new business opportunities"
    ],
    useCases: [
      "Sales forecasting",
      "Demand planning",
      "Risk management",
      "Customer behavior prediction",
      "Operational optimization"
    ],
    targetAudience: ["Data scientists", "Business analysts", "Operations managers", "Financial services"],
    technologies: [
      "TensorFlow", "PyTorch", "Scikit-learn", "XGBoost",
      "Deep learning", "Statistical modeling"
    ],
    integrations: [
      "Salesforce", "HubSpot", "Tableau", "Power BI",
      "SQL databases", "Cloud platforms"
    ],
    support: [
      "Data science consultation",
      "Model optimization",
      "Implementation support",
      "Training and certification"
    ],
    link: "https://ziontechgroup.com/ai-predictive-analytics",
    badge: "Featured",
    icon: "🔮",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-process-automation",
    title: "AI Process Automation Platform",
    description: "Intelligent process automation platform that combines RPA with AI for end-to-end business process optimization.",
    category: "Process Automation",
    pricing: {
      monthly: 249,
      yearly: 2490,
      custom: "Enterprise automation solutions",
      currency: "$",
      pricingModel: "Monthly subscription with process complexity tiers"
    },
    features: [
      "Intelligent document processing",
      "Workflow automation",
      "Decision automation",
      "Process optimization",
      "Real-time monitoring",
      "Custom workflow builder"
    ],
    benefits: [
      "Reduce manual processing by 85%",
      "Improve process efficiency by 60%",
      "Reduce errors by 90%",
      "Accelerate process completion by 70%"
    ],
    useCases: [
      "Invoice processing",
      "Customer onboarding",
      "Claims processing",
      "HR automation",
      "Supply chain optimization"
    ],
    targetAudience: ["Operations managers", "Process improvement teams", "Finance departments", "HR teams"],
    technologies: [
      "RPA tools", "Machine learning", "OCR", "NLP",
      "Workflow engines", "API integration"
    ],
    integrations: [
      "SAP", "Oracle", "Workday", "Salesforce",
      "Microsoft Office", "Google Workspace"
    ],
    support: [
      "Process analysis",
      "Implementation support",
      "Training and certification",
      "Ongoing optimization"
    ],
    link: "https://ziontechgroup.com/ai-process-automation",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-customer-insights-platform",
    title: "AI Customer Insights Platform",
    description: "Advanced customer analytics platform that uses AI to uncover deep insights and predict customer behavior.",
    category: "Customer Analytics",
    pricing: {
      monthly: 299,
      yearly: 2990,
      custom: "Enterprise customer intelligence",
      currency: "$",
      pricingModel: "Monthly subscription with customer data volume tiers"
    },
    features: [
      "Customer segmentation",
      "Behavioral analysis",
      "Churn prediction",
      "Lifetime value calculation",
      "Personalization recommendations",
      "Real-time insights"
    ],
    benefits: [
      "Increase customer retention by 35%",
      "Improve customer lifetime value by 45%",
      "Reduce churn by 50%",
      "Enhance personalization effectiveness"
    ],
    useCases: [
      "Customer retention",
      "Marketing personalization",
      "Product recommendations",
      "Customer service optimization",
      "Revenue optimization"
    ],
    targetAudience: ["Marketing teams", "Customer success teams", "Product managers", "E-commerce businesses"],
    technologies: [
      "Machine learning", "Deep learning", "Statistical analysis",
      "Data mining", "Predictive modeling"
    ],
    integrations: [
      "Shopify", "WooCommerce", "Salesforce", "HubSpot",
      "Google Analytics", "Facebook Pixel"
    ],
    support: [
      "Customer analytics consultation",
      "Implementation support",
      "Training and workshops",
      "Ongoing optimization"
    ],
    link: "https://ziontechgroup.com/ai-customer-insights-platform",
    icon: "👥",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-voice-assistant-platform",
    title: "AI Voice Assistant Platform",
    description: "Enterprise-grade voice assistant platform for customer service, internal operations, and accessibility.",
    category: "Voice AI",
    pricing: {
      monthly: 199,
      yearly: 1990,
      custom: "Custom voice solutions",
      currency: "$",
      pricingModel: "Monthly subscription with usage-based pricing"
    },
    features: [
      "Natural language understanding",
      "Multi-language support",
      "Voice biometrics",
      "Custom voice training",
      "Integration APIs",
      "Analytics dashboard"
    ],
    benefits: [
      "Improve accessibility for all users",
      "Reduce call center costs by 40%",
      "Enhance customer experience",
      "Increase operational efficiency"
    ],
    useCases: [
      "Customer service calls",
      "Internal operations",
      "Accessibility solutions",
      "Smart home integration",
      "Enterprise automation"
    ],
    targetAudience: ["Call centers", "Healthcare providers", "Financial services", "Retail businesses"],
    technologies: [
      "Speech recognition", "Text-to-speech", "NLP",
      "Voice synthesis", "Audio processing"
    ],
    integrations: [
      "Phone systems", "CRM platforms", "Help desk tools",
      "Mobile apps", "Web applications"
    ],
    support: [
      "Voice design consultation",
      "Implementation support",
      "Training and certification",
      "Ongoing optimization"
    ],
    link: "https://ziontechgroup.com/ai-voice-assistant-platform",
    icon: "🎤",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-data-quality-platform",
    title: "AI Data Quality Platform",
    description: "Intelligent data quality management platform that automatically detects, cleans, and validates data.",
    category: "Data Quality",
    pricing: {
      monthly: 179,
      yearly: 1790,
      custom: "Enterprise data solutions",
      currency: "$",
      pricingModel: "Monthly subscription with data volume tiers"
    },
    features: [
      "Automated data cleaning",
      "Quality scoring",
      "Duplicate detection",
      "Data validation rules",
      "Real-time monitoring",
      "Custom quality metrics"
    ],
    benefits: [
      "Improve data accuracy by 90%",
      "Reduce data processing time by 70%",
      "Eliminate duplicate records",
      "Ensure compliance requirements"
    ],
    useCases: [
      "Data migration",
      "CRM data cleaning",
      "Financial data validation",
      "Healthcare data quality",
      "E-commerce data management"
    ],
    targetAudience: ["Data engineers", "IT teams", "Compliance officers", "Business analysts"],
    technologies: [
      "Machine learning", "Data validation", "Pattern recognition",
      "Statistical analysis", "Data profiling"
    ],
    integrations: [
      "SQL databases", "NoSQL databases", "Cloud platforms",
      "ETL tools", "Data warehouses"
    ],
    support: [
      "Data quality assessment",
      "Implementation support",
      "Training and certification",
      "Ongoing optimization"
    ],
    link: "https://ziontechgroup.com/ai-data-quality-platform",
    icon: "🧹",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-translation-platform",
    title: "AI Translation Platform",
    description: "Advanced AI-powered translation platform supporting 100+ languages with industry-specific terminology.",
    category: "Language AI",
    pricing: {
      monthly: 129,
      yearly: 1290,
      custom: "Enterprise translation solutions",
      currency: "$",
      pricingModel: "Monthly subscription with translation volume tiers"
    },
    features: [
      "100+ language support",
      "Industry-specific terminology",
      "Real-time translation",
      "Document translation",
      "Voice translation",
      "Custom training"
    ],
    benefits: [
      "Reduce translation costs by 60%",
      "Accelerate global expansion",
      "Improve communication accuracy",
      "Maintain brand consistency"
    ],
    useCases: [
      "Website localization",
      "Document translation",
      "Customer support",
      "Marketing campaigns",
      "Legal documents"
    ],
    targetAudience: ["Global businesses", "E-commerce companies", "Legal firms", "Healthcare providers"],
    technologies: [
      "Neural machine translation", "Transformer models", "NLP",
      "Speech recognition", "Text-to-speech"
    ],
    integrations: [
      "WordPress", "Shopify", "Salesforce", "Zendesk",
      "Microsoft Office", "Google Workspace"
    ],
    support: [
      "Localization consultation",
      "Implementation support",
      "Training and certification",
      "Ongoing optimization"
    ],
    link: "https://ziontechgroup.com/ai-translation-platform",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-recommendation-engine",
    title: "AI Recommendation Engine",
    description: "Intelligent recommendation system that personalizes user experiences and increases conversion rates.",
    category: "Recommendation Systems",
    pricing: {
      monthly: 349,
      yearly: 3490,
      custom: "Custom recommendation solutions",
      currency: "$",
      pricingModel: "Monthly subscription with recommendation volume tiers"
    },
    features: [
      "Collaborative filtering",
      "Content-based filtering",
      "Real-time recommendations",
      "A/B testing",
      "Performance analytics",
      "Custom algorithms"
    ],
    benefits: [
      "Increase conversion rates by 35%",
      "Improve user engagement by 50%",
      "Reduce bounce rates by 40%",
      "Enhance customer satisfaction"
    ],
    useCases: [
      "E-commerce recommendations",
      "Content personalization",
      "Product suggestions",
      "Service recommendations",
      "Cross-selling opportunities"
    ],
    targetAudience: ["E-commerce businesses", "Content platforms", "Streaming services", "Financial services"],
    technologies: [
      "Machine learning", "Deep learning", "Collaborative filtering",
      "Content-based filtering", "Neural networks"
    ],
    integrations: [
      "Shopify", "WooCommerce", "Magento", "Salesforce",
      "Custom platforms", "Mobile apps"
    ],
    support: [
      "Recommendation strategy",
      "Implementation support",
      "Training and certification",
      "Ongoing optimization"
    ],
    link: "https://ziontechgroup.com/ai-recommendation-engine",
    badge: "Premium",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500"
  }
];

export const getAIServiceById = (id: string): AIService | undefined => {
  return ENHANCED_AI_SERVICES.find(service => service.id === id);
};

export const getAIServicesByCategory = (category: string): AIService[] => {
  return ENHANCED_AI_SERVICES.filter(service => service.category === category);
};

export const getAIServiceCategories = (): string[] => {
  return [...new Set(ENHANCED_AI_SERVICES.map(service => service.category))];
};