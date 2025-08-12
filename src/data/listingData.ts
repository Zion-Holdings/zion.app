
import { ProductListing } from "@/types/listings";
import { SearchSuggestion } from "@/types/search";
import { slugify } from "@/lib/slugify";

// Shared data source for marketplace listings
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
    aiScore: 98,
    stock: 12
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
    aiScore: 92,
    stock: 3
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
    aiScore: 95,
    stock: 0
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
    aiScore: 88,
    stock: 7
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
    aiScore: 90,
    stock: 15
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
    aiScore: 94,
    stock: 0
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
    aiScore: 87,
    stock: 8
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
    aiScore: 90,
    stock: 6
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
    aiScore: 85,
    stock: 2
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
    aiScore: 92,
    stock: 5
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
    stock: 8,
    aiScore: 89,
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
    aiScore: 93,
    stock: 4
  },
  {
    id: "talent-19",
    title: "Freelance AI Engineer",
    description:
      "Contract-based AI engineer specializing in model development and deployment.",
    category: "Talents",
    price: 120,
    currency: "$",
    tags: ["AI", "Machine Learning", "Freelance"],
    author: {
      name: "ExpertAI Freelancers",
      id: "expertai"
    },
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-25T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 20,
    location: "Remote",
    availability: "Immediate",
    stock: 9,
    aiScore: 91,
  },
  {
    id: "innovation-20",
    title: "AI Innovation Bootcamp",
    description:
      "Four-week program turning AI ideas into prototypes with expert mentorship.",
    category: "Innovation",
    price: 3000,
    currency: "$",
    tags: ["Innovation", "Prototype", "Bootcamp"],
    author: {
      name: "InnovateLabs",
      id: "innovate-labs"
    },
    images: [
      "https://images.unsplash.com/photo-1532619187600-fb0b141abd59?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-30T09:00:00.000Z",
    rating: 4.7,
    reviewCount: 12,
    location: "Global",
    availability: "Scheduled",
    aiScore: 88,
    stock: 1
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
    "Enterprise AI solutions"
  ];
  
  return suggestions.map(text => ({
    text,
    slug: slugify(text),
    type: 'product' // Use a valid type from the SearchSuggestion interface
  }));
};

// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings
  const productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort();
  const locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort();
  const availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort();
  
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
    ratingOptions: [1, 2, 3, 4, 5]
  };
};

export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
