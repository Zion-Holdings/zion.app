
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { AppLayout } from "@/layout/AppLayout";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

// Sample service listings
const SERVICE_LISTINGS: ProductListing[] = [
  {
    id: "service-1",
    title: "AI Development & Integration",
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
    author: {
      name: "TechSolutions Inc.",
      id: "tech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T14:48:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 124,
  },
  {
    id: "service-2",
    title: "Cloud Infrastructure Management",
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-20T09:30:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 92,
  },
  {
    id: "service-3",
    title: "Big Data Analysis & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"],
    author: {
      name: "DataMind Solutions",
      id: "datamind",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T11:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78,
  },
  {
    id: "service-4",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],
    author: {
      name: "SecureNet Team",
      id: "secure-net",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-28T16:22:00.000Z",
    aiScore: 89,
    rating: 4.9,
    reviewCount: 103,
  },
  {
    id: "service-5",
    title: "IT Infrastructure Modernization",
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],
    author: {
      name: "ModernizeIT Consulting",
      id: "modernize-it",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T08:45:00.000Z",
    aiScore: 86,
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "service-6",
    title: "AI Strategy & Implementation",
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],
    author: {
      name: "AI Future Consulting",
      id: "ai-future",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85,
  },
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomService(idNum: number): ProductListing {
  const templates = [
    {
      title: "AI Automation Consulting",
      category: "Consulting",
      min: 4000,
      max: 12000,
      tags: ["Automation", "AI Strategy", "Optimization"],
    },
    {
      title: "Cloud Migration & Support",
      category: "Management",
      min: 3000,
      max: 9000,
      tags: ["Cloud", "Migration", "DevOps"],
    },
    {
      title: "Advanced Cybersecurity Suite",
      category: "Security",
      min: 5000,
      max: 15000,
      tags: ["Cybersecurity", "PenTesting", "Compliance"],
    },
    {
      title: "Big Data Engineering",
      category: "Analytics",
      min: 3500,
      max: 11000,
      tags: ["Data Engineering", "Analytics", "ETL"],
    },
    {
      title: "AI Model Training Service",
      category: "Development",
      min: 4500,
      max: 13000,
      tags: ["Machine Learning", "Model Training", "AI"],
    },
    {
      title: "Digital Transformation Strategy",
      category: "Strategy",
      min: 6000,
      max: 14000,
      tags: ["Transformation", "Strategy", "Business"],
    },
  ];

  const authors = [
    "Global AI Experts",
    "InnovateTech",
    "SecureFuture",
    "CloudOps Partners",
    "DataVisor",
    "NexGen Solutions",
  ];

  const images = [
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500",
  ];

  const template = getRandomItem(templates);
  const author = getRandomItem(authors);
  const price = Math.round(
    Math.random() * (template.max - template.min) + template.min
  );

  return {
    id: `auto-service-${idNum}`,
    title: template.title,
    description: `Professional ${template.title.toLowerCase()} with industry-standard practices and tailored solutions for your business.`,
    category: template.category,
    price,
    currency: "$",
    tags: template.tags,
    author: { name: author, id: author.toLowerCase().replace(/\s+/g, "-") },
    images: [getRandomItem(images)],
    createdAt: new Date().toISOString(),
    aiScore: Math.floor(90 + Math.random() * 10),
    rating: parseFloat((4 + Math.random()).toFixed(1)),
    reviewCount: Math.floor(50 + Math.random() * 150),
  };
}

// Filter options specific to services
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppLayout>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <TrustedBySection />
    </AppLayout>
  );
}
