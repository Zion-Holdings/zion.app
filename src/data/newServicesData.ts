import { ProductListing } from "@/types/listings";

export const NEW_SERVICES: ProductListing[] = [
  {
    id: "ns-web-app-dev",
    title: "Full-stack Web App Development",
    description: "Design and build scalable web applications tailored to your business needs.",
    category: "Development",
    price: 5200,
    currency: "$",
    tags: ["Web", "Full-stack", "Scaling"],
    author: { name: "WebWorks", id: "webworks" },
    images: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-11T10:00:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 12
  },
  {
    id: "ns-security-audit",
    title: "IT Security Auditing",
    description: "Comprehensive assessment of your systems to identify and mitigate vulnerabilities.",
    category: "Security",
    price: 5800,
    currency: "$",
    tags: ["Security", "Audit", "Compliance"],
    author: { name: "SecureCheck", id: "securecheck" },
    images: [
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-12T11:30:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 15
  },
  {
    id: "ns-data-warehouse",
    title: "Data Warehouse Implementation",
    description: "Plan and deploy robust data warehouses for advanced analytics and reporting.",
    category: "Analytics",
    price: 7200,
    currency: "$",
    tags: ["Data", "Warehouse", "ETL"],
    author: { name: "DataArchitects", id: "dataarchitects" },
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-13T09:45:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 9
  },
  {
    id: "ns-cloud-optimization",
    title: "Cloud Cost Optimization",
    description: "Analyze and optimize your cloud infrastructure to reduce operational expenses.",
    category: "Management",
    price: 4700,
    currency: "$",
    tags: ["Cloud", "Optimization", "DevOps"],
    author: { name: "CloudEconomy", id: "cloudeconomy" },
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-14T13:20:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 11
  },
  {
    id: "ns-process-automation",
    title: "Business Process Automation",
    description: "Streamline repetitive tasks with tailored automation solutions for your team.",
    category: "Consulting",
    price: 6500,
    currency: "$",
    tags: ["Automation", "Workflow", "Efficiency"],
    author: { name: "AutoBiz", id: "autobiz" },
    images: [
      "https://images.unsplash.com/photo-1581093448793-6a26cc2f6d9b?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-15T08:10:00.000Z",
    aiScore: 88,
    rating: 4.5,
    reviewCount: 8
  },
  {
    id: "ns-chatbot-integration",
    title: "AI Chatbot Integration",
    description: "Deploy conversational AI chatbots to enhance customer engagement across channels.",
    category: "Development",
    price: 5300,
    currency: "$",
    tags: ["AI", "Chatbot", "Customer Service"],
    author: { name: "BotMakers", id: "botmakers" },
    images: [
      "https://images.unsplash.com/photo-1557555187-807fa78b1c7e?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-16T12:00:00.000Z",
    aiScore: 93,
    rating: 4.6,
    reviewCount: 14
  },
  {
    id: "ns-disaster-recovery",
    title: "Disaster Recovery Planning",
    description: "Prepare comprehensive strategies to ensure business continuity during outages.",
    category: "Strategy",
    price: 6000,
    currency: "$",
    tags: ["Recovery", "Planning", "Continuity"],
    author: { name: "ContinuITy", id: "continuity" },
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-17T07:55:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 10
  },
  {
    id: "ns-ux-consulting",
    title: "User Experience Consulting",
    description: "Improve product usability through expert UX review and user research.",
    category: "Consulting",
    price: 4900,
    currency: "$",
    tags: ["UX", "Design", "Research"],
    author: { name: "UXAdvise", id: "uxadvise" },
    images: [
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-18T10:40:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 7
  },
  {
    id: "ns-network-setup",
    title: "Network Infrastructure Setup",
    description: "Deploy reliable network infrastructure for secure and fast connectivity.",
    category: "Management",
    price: 5500,
    currency: "$",
    tags: ["Network", "Infrastructure", "Setup"],
    author: { name: "NetBuilders", id: "netbuilders" },
    images: [
      "https://images.unsplash.com/photo-1556485687-b8553ddfbc05?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-19T14:30:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 9
  },
  {
    id: "ns-threat-monitoring",
    title: "Advanced Threat Monitoring",
    description: "Ongoing monitoring service to detect and respond to cyber threats in real time.",
    category: "Security",
    price: 7000,
    currency: "$",
    tags: ["Monitoring", "Security", "Threat Detection"],
    author: { name: "GuardVision", id: "guardvision" },
    images: [
      "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-20T16:15:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 13
  }
];
