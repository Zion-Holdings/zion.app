export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  price: string;
  duration: string;
  icon: string;
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    category: "Development",
    description: "Custom web applications built with modern technologies and best practices",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Security implementation"
    ],
    tags: ["React", "Node.js", "TypeScript", "Web"],
    price: "$5,000+",
    duration: "4-8 weeks",
    icon: "🌐"
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    category: "Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "Cross-platform development",
      "Native performance",
      "App store optimization",
      "Push notifications"
    ],
    tags: ["React Native", "Flutter", "iOS", "Android"],
    price: "$8,000+",
    duration: "6-12 weeks",
    icon: "📱"
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    category: "Infrastructure",
    description: "Scalable cloud solutions using AWS, Azure, and Google Cloud",
    features: [
      "Auto-scaling",
      "Load balancing",
      "Monitoring & alerting",
      "Disaster recovery"
    ],
    tags: ["AWS", "Azure", "GCP", "DevOps"],
    price: "$3,000+",
    duration: "2-4 weeks",
    icon: "☁️"
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    category: "Analytics",
    description: "Turn your data into actionable insights with advanced analytics",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Real-time dashboards",
      "Custom reporting"
    ],
    tags: ["Python", "SQL", "Tableau", "ML"],
    price: "$6,000+",
    duration: "4-6 weeks",
    icon: "📊"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "Security",
    description: "Comprehensive security solutions to protect your digital assets",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance consulting",
      "Incident response"
    ],
    tags: ["Security", "Compliance", "Audit", "Testing"],
    price: "$4,000+",
    duration: "2-6 weeks",
    icon: "🔒"
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    category: "AI/ML",
    description: "Intelligent solutions that learn and adapt to your business needs",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Computer vision",
      "Predictive modeling"
    ],
    tags: ["Python", "TensorFlow", "PyTorch", "AI"],
    price: "$10,000+",
    duration: "8-16 weeks",
    icon: "🤖"
  }
];