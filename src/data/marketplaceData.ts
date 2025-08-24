
import { ProductListing } from "@/types/listings";
import { SearchSuggestion, FilterOptions } from "@/types/search";

// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {
    id: "ai-model-1",
    title: "GPT-4 API Integration Package",
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",
    category: "AI Models & APIs",
    price: 1999,
    currency: "$",
    tags: ["GPT-4", "API Integration", "NLP"],
    author: {
      name: "AI Solutions Inc.",
      id: "ai-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T12:30:00.000Z",
    rating: 4.9,
    reviewCount: 58,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 98
  },
  {
    id: "ai-service-2",
    title: "Custom Machine Learning Model Development",
    description: "End-to-end development of custom ML models tailored to your specific business needs. From data preparation to deployment and monitoring.",
    category: "Services",
    price: 5999,
    currency: "$",
    tags: ["Machine Learning", "Custom Development", "Data Science"],
    author: {
      name: "DataMinds",
      id: "dataminds",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T10:45:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 92
  },
  {
    id: "ai-equipment-3",
    title: "AI Workstation Supercomputer",
    description: "High-performance computing rig optimized for AI model training and deep learning applications. Features NVIDIA A100 GPUs, terabytes of storage, and pre-installed ML frameworks.",
    category: "Equipment",
    price: 12999,
    currency: "$",
    tags: ["Hardware", "Deep Learning", "GPU"],
    author: {
      name: "TechGear Pro",
      id: "techgear",
    },
    images: ["https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 18,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 95
  },
  {
    id: "ai-content-4",
    title: "AI Content Generation Suite",
    description: "Complete toolkit for generating blog posts, social media content, product descriptions, and more using advanced AI. Includes API access and user-friendly interface.",
    category: "Content Creation",
    price: 399,
    currency: "$",
    tags: ["Content Generation", "Copywriting", "Marketing"],
    author: {
      name: "ContentGenius",
      id: "contentgenius",
      avatarUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T14:20:00.000Z",
    rating: 4.6,
    reviewCount: 124,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "ai-analytics-5",
    title: "AI-Powered Business Intelligence Dashboard",
    description: "Comprehensive analytics solution with AI-driven insights, predictive capabilities, and customizable visualization tools for data-driven decision making.",
    category: "Data Analysis",
    price: 2499,
    currency: "$",
    tags: ["Analytics", "Business Intelligence", "Dashboard"],
    author: {
      name: "InsightAnalytica",
      id: "insightanalytica",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T11:30:00.000Z",
    rating: 4.5,
    reviewCount: 47,
    location: "North America",
    availability: "1-2 Weeks",
    aiScore: 90
  },
  {
    id: "ai-vision-6",
    title: "Computer Vision API Bundle",
    description: "Ready-to-use computer vision APIs for object detection, image recognition, facial analysis, and scene understanding with comprehensive documentation.",
    category: "Computer Vision",
    price: 999,
    currency: "$",
    tags: ["Computer Vision", "Object Detection", "Image Recognition"],
    author: {
      name: "VisionTech AI",
      id: "visiontech",
      avatarUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1624355834900-99cd2071585b?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T16:45:00.000Z",
    rating: 4.8,
    reviewCount: 36,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "ai-assistant-7",
    title: "Custom AI Assistant Development",
    description: "End-to-end solution for creating your own branded AI assistant tailored to your specific industry and business needs. Includes voice customization and knowledge base integration.",
    category: "Virtual Assistants",
    price: 3499,
    currency: "$",
    tags: ["Chatbot", "Voice Assistant", "Conversational AI"],
    author: {
      name: "AssistantCraft",
      id: "assistantcraft",
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 29,
    location: "Europe",
    availability: "3-4 Weeks",
    aiScore: 91
  },
  {
    id: "ai-speech-8",
    title: "Advanced Speech Recognition System",
    description: "High-accuracy speech recognition system with multi-language support, noise cancellation, and specialized terminology adaptation for various industries.",
    category: "Voice & Speech",
    price: 1799,
    currency: "$",
    tags: ["Speech Recognition", "Voice Processing", "Transcription"],
    author: {
      name: "VoiceIntelligence",
      id: "voiceintelligence",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1590742084231-a778c92b8842?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T10:20:00.000Z",
    rating: 4.6,
    reviewCount: 41,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 89
  },
  {
    id: "ai-code-9",
    title: "AI Code Assistant & Generator Pro",
    description: "Powerful AI-powered code generation and optimization tool with support for 20+ programming languages, code review capabilities, and IDE plugins.",
    category: "Developer Tools",
    price: 749,
    currency: "$",
    tags: ["Code Generation", "Developer Tools", "Automation"],
    author: {
      name: "CodeGenius",
      id: "codegenius",
    },
    images: ["https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 97
  },
  {
    id: "ai-business-10",
    title: "Enterprise AI Transformation Package",
    description: "Comprehensive solution for businesses looking to integrate AI across operations. Includes AI readiness assessment, strategy development, implementation roadmap, and staff training.",
    category: "Business Solutions",
    price: 15999,
    currency: "$",
    tags: ["Enterprise AI", "Digital Transformation", "Strategy"],
    author: {
      name: "AI Enterprise Solutions",
      id: "ai-enterprise",
    },
    images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T08:30:00.000Z",
    rating: 4.7,
    reviewCount: 23,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 93
  },
  {
    id: "ai-research-11",
    title: "AI Research Papers Database Access",
    description: "Subscription-based access to the world's largest collection of AI research papers with advanced search capabilities, citation tools, and summarization features.",
    category: "Research",
    price: 299,
    currency: "$",
    tags: ["Research", "Academic", "Machine Learning"],
    author: {
      name: "AI Research Hub",
      id: "airesearch",
    },
    images: ["https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T15:30:00.000Z",
    rating: 4.7,
    reviewCount: 65,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "ai-robotics-12",
    title: "Intelligent Robotics Control System",
    description: "Advanced AI-powered control system for industrial and commercial robots with reinforcement learning capabilities, adaptive motion planning, and remote management interface.",
    category: "Robotics",
    price: 8999,
    currency: "$",
    tags: ["Robotics", "Automation", "Control Systems"],
    author: {
      name: "RoboticsMind",
      id: "roboticsmind",
      avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T12:15:00.000Z",
    rating: 4.8,
    reviewCount: 19,
    featured: true,
    location: "Asia",
    availability: "3-4 Weeks",
    aiScore: 93
  },
  // Adding equipment listings so they're available in marketplace too
  {
    id: "equipment-1",
    title: "High-Performance AI Workstation",
    description: "Professional-grade workstation optimized for machine learning and AI model training with NVIDIA RTX GPUs.",
    category: "Workstations",
    price: 4999,
    currency: "$",
    tags: ["GPU", "Machine Learning", "Workstation"],
    author: {
      name: "TechGear Solutions",
      id: "techgear",
      avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    featured: true,
    location: "Global",
    availability: "1-2 Weeks"
  },
  {
    id: "equipment-2",
    title: "Enterprise GPU Server Rack",
    description: "Scalable server rack solution with multiple NVIDIA A100 GPUs ideal for large-scale AI model training and deployment.",
    category: "Servers",
    price: 24999,
    currency: "$",
    tags: ["Server", "Enterprise", "GPU Cluster"],
    author: {
      name: "ServerPro Systems",
      id: "serverpro",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-15T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 18,
    featured: true,
    location: "North America",
    availability: "2-4 Weeks"
  },
  // New Micro SAAS Services
  {
    id: "saas-automation-11",
    title: "Workflow Automation Platform",
    description: "No-code workflow automation platform that connects 500+ apps and services. Automate repetitive tasks, data synchronization, and business processes with drag-and-drop interface.",
    category: "Business Automation",
    price: 299,
    currency: "$",
    tags: ["Workflow Automation", "No-Code", "Integration"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  },
  {
    id: "saas-analytics-12",
    title: "Real-Time Business Intelligence Dashboard",
    description: "Cloud-based BI platform with real-time data visualization, predictive analytics, and automated reporting. Connect to any data source and get instant insights.",
    category: "Business Intelligence",
    price: 199,
    currency: "$",
    tags: ["Business Intelligence", "Real-Time Analytics", "Dashboard"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "saas-crm-13",
    title: "AI-Powered CRM System",
    description: "Intelligent customer relationship management with AI-driven lead scoring, automated follow-ups, and predictive analytics. Boost sales by 40% with smart automation.",
    category: "Customer Management",
    price: 149,
    currency: "$",
    tags: ["CRM", "AI-Powered", "Sales Automation"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-13T11:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "saas-project-14",
    title: "Project Management Suite",
    description: "Comprehensive project management platform with task tracking, team collaboration, resource allocation, and progress monitoring. Perfect for remote teams.",
    category: "Project Management",
    price: 99,
    currency: "$",
    tags: ["Project Management", "Team Collaboration", "Task Tracking"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T09:45:00.000Z",
    rating: 4.6,
    reviewCount: 178,
    location: "Global",
    availability: "Immediate",
    aiScore: 89
  },
  {
    id: "saas-marketing-15",
    title: "Marketing Automation Platform",
    description: "All-in-one marketing automation tool with email campaigns, social media management, lead nurturing, and ROI tracking. Increase conversions by 60%.",
    category: "Marketing",
    price: 179,
    currency: "$",
    tags: ["Marketing Automation", "Email Campaigns", "Lead Nurturing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-11T16:20:00.000Z",
    rating: 4.8,
    reviewCount: 145,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },
  {
    id: "saas-hr-16",
    title: "HR Management System",
    description: "Complete HR solution with employee onboarding, performance tracking, time management, and payroll integration. Streamline HR operations and improve employee satisfaction.",
    category: "Human Resources",
    price: 129,
    currency: "$",
    tags: ["HR Management", "Employee Onboarding", "Performance Tracking"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T13:10:00.000Z",
    rating: 4.7,
    reviewCount: 98,
    location: "Global",
    availability: "Immediate",
    aiScore: 88
  },
  {
    id: "saas-inventory-17",
    title: "Inventory Management System",
    description: "Smart inventory tracking with barcode scanning, demand forecasting, and automated reordering. Reduce stockouts by 80% and optimize inventory costs.",
    category: "Inventory Management",
    price: 159,
    currency: "$",
    tags: ["Inventory Management", "Barcode Scanning", "Demand Forecasting"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-09T10:30:00.000Z",
    rating: 4.6,
    reviewCount: 67,
    location: "Global",
    availability: "Immediate",
    aiScore: 87
  },
  {
    id: "saas-accounting-18",
    title: "Cloud Accounting Software",
    description: "Professional accounting solution with automated bookkeeping, expense tracking, invoice management, and financial reporting. Perfect for small businesses and freelancers.",
    category: "Accounting",
    price: 79,
    currency: "$",
    tags: ["Cloud Accounting", "Bookkeeping", "Financial Reporting"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T15:45:00.000Z",
    rating: 4.9,
    reviewCount: 312,
    location: "Global",
    availability: "Immediate",
    aiScore: 95
  },
  {
    id: "saas-support-19",
    title: "Customer Support Platform",
    description: "Multi-channel customer support system with ticket management, live chat, knowledge base, and customer satisfaction tracking. Improve customer experience and reduce support costs.",
    category: "Customer Support",
    price: 119,
    currency: "$",
    tags: ["Customer Support", "Ticket Management", "Live Chat"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-07T12:00:00.000Z",
    rating: 4.8,
    reviewCount: 189,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
  },
  {
    id: "saas-security-20",
    title: "Cybersecurity Monitoring Service",
    description: "24/7 cybersecurity monitoring with threat detection, vulnerability assessment, and incident response. Protect your business from cyber threats with enterprise-grade security.",
    category: "Cybersecurity",
    price: 399,
    currency: "$",
    tags: ["Cybersecurity", "Threat Detection", "24/7 Monitoring"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-06T08:15:00.000Z",
    rating: 4.9,
    reviewCount: 76,
    location: "Global",
    availability: "Immediate",
    aiScore: 97
  },
  {
    id: "saas-backup-21",
    title: "Cloud Backup & Recovery",
    description: "Automated cloud backup solution with version control, disaster recovery, and compliance features. Ensure business continuity with reliable data protection.",
    category: "Data Protection",
    price: 89,
    currency: "$",
    tags: ["Cloud Backup", "Disaster Recovery", "Data Protection"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 134,
    location: "Global",
    availability: "Immediate",
    aiScore: 90
  },
  {
    id: "saas-api-22",
    title: "API Management Platform",
    description: "Complete API lifecycle management with design, testing, deployment, and monitoring tools. Build, secure, and scale your APIs efficiently.",
    category: "API Development",
    price: 249,
    currency: "$",
    tags: ["API Management", "API Design", "API Testing"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-04T11:30:00.000Z",
    rating: 4.8,
    reviewCount: 87,
    location: "Global",
    availability: "Immediate",
    aiScore: 94
  },
  {
    id: "saas-testing-23",
    title: "Automated Testing Platform",
    description: "AI-powered testing automation platform for web and mobile applications. Reduce testing time by 90% and improve software quality with intelligent test case generation.",
    category: "Software Testing",
    price: 199,
    currency: "$",
    tags: ["Automated Testing", "AI-Powered", "Quality Assurance"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-03T16:45:00.000Z",
    rating: 4.7,
    reviewCount: 156,
    location: "Global",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "saas-monitoring-24",
    title: "Application Performance Monitoring",
    description: "Real-time application performance monitoring with alerting, root cause analysis, and performance optimization recommendations. Keep your applications running smoothly.",
    category: "Performance Monitoring",
    price: 179,
    currency: "$",
    tags: ["Performance Monitoring", "Real-Time", "Root Cause Analysis"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-02T09:15:00.000Z",
    rating: 4.8,
    reviewCount: 98,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },
  {
    id: "saas-compliance-25",
    title: "Compliance Management System",
    description: "Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements. Stay compliant with automated audits and reporting.",
    category: "Compliance",
    price: 299,
    currency: "$",
    tags: ["Compliance", "GDPR", "HIPAA", "SOX"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T13:00:00.000Z",
    rating: 4.9,
    reviewCount: 67,
    location: "Global",
    availability: "Immediate",
    aiScore: 96
  }
];

// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
    "AI models",
    "GPT integration",
    "Machine learning",
    "Computer vision",
    "Speech recognition",
    "Data analysis",
    "Content generation",
    "Code assistant",
    "Virtual assistant",
    "Enterprise AI solutions",
    "Robotics",
    "AI workstation",
    "Business intelligence",
    "Custom model development",
    "Server rack",
    "GPU cluster",
    "Edge computing",
    "High performance storage"
  ];
  
  // Convert strings to SearchSuggestion objects
  return suggestions.map(text => ({
    text,
    type: 'product' // Use a valid type from the updated SearchSuggestion interface
  }));
};

// Generate filter options for sidebar
export const generateFilterOptions = (
  listings: ProductListing[] = MARKETPLACE_LISTINGS
): FilterOptions => {
  // Extract unique categories, locations, and availability options from the provided listings
  const productTypes = [...new Set(listings.map(listing => listing.category))].sort();
  const locations = [...new Set(listings.map(listing => listing.location).filter(Boolean))].sort();
  const availability = [...new Set(listings.map(listing => listing.availability).filter(Boolean))].sort();
  
  return {
    productTypes: productTypes.map(type => ({
      label: type,
      value: type
    })),
    locations: locations.map(location => ({
      label: location,
      value: location
    })),
    availabilityOptions: availability.map(item => ({
      label: item,
      value: item
    })),
    ratingOptions: [1, 2, 3, 4, 5] // Add rating options
  };
};

export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
