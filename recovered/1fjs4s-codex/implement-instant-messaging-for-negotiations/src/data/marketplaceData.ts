
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
    price: 15000,
    currency: "$",
    tags: ["Enterprise", "Digital Transformation", "AI Strategy"],
    author: {
      name: "BusinessAI Consultants",
      id: "businessai",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T11:00:00.000Z",
    rating: 4.8,
    reviewCount: 22,
    location: "North America",
    availability: "4-6 Weeks",
    aiScore: 96
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
  {
    id: "ai-storage-13",
    title: "AI-Optimized Cloud Storage",
    description: "Secure and high-speed cloud storage designed for AI workloads with automated backup and scalability.",
    category: "Cloud Services",
    price: 799,
    currency: "$",
    tags: ["Cloud Storage", "Backup", "Scalable"],
    author: {
      name: "CloudMatrix",
      id: "cloudmatrix"
    },
    images: ["https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-18T10:00:00.000Z",
    rating: 4.6,
    reviewCount: 27,
    location: "Global",
    availability: "Immediate",
    aiScore: 87
  },
  {
    id: "ai-edge-14",
    title: "Edge AI Development Kit",
    description: "Compact development kit with built-in AI acceleration for prototyping edge computing applications.",
    category: "Hardware",
    price: 1299,
    currency: "$",
    tags: ["Edge Computing", "Dev Kit", "AI Accelerator"],
    author: {
      name: "EdgeWorks",
      id: "edgeworks"
    },
    images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T09:00:00.000Z",
    rating: 4.7,
    reviewCount: 15,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 90
  },
  {
    id: "ai-labeling-15",
    title: "Managed Data Labeling Service",
    description: "Professional data labeling with quality assurance for training supervised machine learning models.",
    category: "Services",
    price: 1499,
    currency: "$",
    tags: ["Data Labeling", "Annotation", "Machine Learning"],
    author: {
      name: "LabelForce",
      id: "labelforce"
    },
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T11:45:00.000Z",
    rating: 4.5,
    reviewCount: 23,
    location: "Europe",
    availability: "2-3 Weeks",
    aiScore: 85
  },
  {
    id: "ai-security-16",
    title: "AI Security Monitoring Suite",
    description: "Real-time threat detection powered by AI with automated incident response for cloud and on-premise systems.",
    category: "Security",
    price: 2999,
    currency: "$",
    tags: ["Security", "Threat Detection", "Monitoring"],
    author: {
      name: "SecureAI",
      id: "secureai"
    },
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-02T08:40:00.000Z",
    rating: 4.8,
    reviewCount: 34,
    location: "North America",
    availability: "Immediate",
    aiScore: 92
  },
  {
    id: "ai-marketing-17",
    title: "AI Marketing Automation Platform",
    description: "Automate customer segmentation, campaign optimization, and analytics using machine learning.",
    category: "Marketing",
    price: 999,
    currency: "$",
    tags: ["Marketing", "Automation", "Analytics"],
    author: {
      name: "MarketMinds",
      id: "marketminds"
    },
    images: ["https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T12:00:00.000Z",
    rating: 4.6,
    reviewCount: 52,
    location: "Global",
    availability: "Immediate",
    aiScore: 89
  },
  {
    id: "ai-cloudgpu-18",
    title: "Cloud GPU Rental Service",
    description: "On-demand high-performance GPUs for training and inference, billed hourly with flexible plans.",
    category: "Cloud Services",
    price: 4.99,
    currency: "$",
    tags: ["GPU", "Cloud", "Rental"],
    author: {
      name: "GPUCloud",
      id: "gpucloud"
    },
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-20T07:50:00.000Z",
    rating: 4.7,
    reviewCount: 48,
    location: "Global",
    availability: "Immediate",
    aiScore: 93
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
