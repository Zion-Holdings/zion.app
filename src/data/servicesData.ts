import { ProductListing } from "@/types/listings";

export const SERVICES: ProductListing[] = [
  {
    id: "service-1",
    title: "AI Development & Integration",
    description:
      "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
    author: {
      name: "TechSolutions Inc.",
      id: "tech-solutions",
      avatarUrl:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2023-12-10T14:48:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 124,
  },
  {
    id: "service-2",
    title: "Cloud Infrastructure Management",
    description:
      "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro",
    },
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2023-11-20T09:30:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 92,
  },
  {
    id: "service-3",
    title: "Big Data Analysis & Insights",
    description:
      "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"],
    author: {
      name: "DataMind Solutions",
      id: "datamind",
      avatarUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-05T11:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78,
  },
  {
    id: "service-4",
    title: "Cybersecurity Assessment & Protection",
    description:
      "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],
    author: {
      name: "SecureNet Team",
      id: "secure-net",
    },
    images: [
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2023-12-28T16:22:00.000Z",
    aiScore: 89,
    rating: 4.9,
    reviewCount: 103,
  },
  {
    id: "service-5",
    title: "IT Infrastructure Modernization",
    description:
      "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],
    author: {
      name: "ModernizeIT Consulting",
      id: "modernize-it",
    },
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2023-11-10T08:45:00.000Z",
    aiScore: 86,
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "service-6",
    title: "AI Strategy & Implementation",
    description:
      "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],
    author: {
      name: "AI Future Consulting",
      id: "ai-future",
      avatarUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85,
  },
  {
    id: "service-7",
    title: "DevOps Automation Setup",
    description:
      "Implement CI/CD pipelines and infrastructure automation to streamline deployments and reduce downtime.",
    category: "Management",
    price: 5500,
    currency: "$",
    tags: ["DevOps", "Automation", "CI/CD"],
    author: {
      name: "Pipeline Pros",
      id: "pipeline-pros",
    },
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-20T09:00:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 58,
  },
  {
    id: "service-8",
    title: "Enterprise SaaS Deployment",
    description:
      "End-to-end deployment of scalable SaaS applications with ongoing maintenance and support.",
    category: "Development",
    price: 6500,
    currency: "$",
    tags: ["SaaS", "Cloud", "Scaling"],
    author: {
      name: "SaaSify Corp",
      id: "saasify",
    },
    images: [
      "https://images.unsplash.com/photo-1556485687-b8553ddfbc05?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-01T12:00:00.000Z",
    aiScore: 91,
    rating: 4.6,
    reviewCount: 42,
  },
  {
    id: "service-9",
    title: "Machine Learning Model Optimization",
    description:
      "Improve existing ML models for better accuracy and performance using best-practice tuning techniques.",
    category: "Analytics",
    price: 4800,
    currency: "$",
    tags: ["Machine Learning", "Optimization", "Tuning"],
    author: {
      name: "ModelTune Labs",
      id: "modeltune",
    },
    images: [
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-10T08:00:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 69,
  },
  {
    id: "service-10",
    title: "Blockchain Integration Consulting",
    description:
      "Consulting services to integrate blockchain technology into existing business processes and applications.",
    category: "Consulting",
    price: 7000,
    currency: "$",
    tags: ["Blockchain", "Integration", "Consulting"],
    author: {
      name: "BlockAdvisors",
      id: "block-advisors",
    },
    images: [
      "https://images.unsplash.com/photo-1518544881698-88d0d5b4b04b?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-25T15:30:00.000Z",
    aiScore: 89,
    rating: 4.5,
    reviewCount: 36,
  },
];
