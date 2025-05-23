import { useEffect, useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { generateRandomTalentListing } from "@/utils/generateRandomTalentListing";

// Sample talent listings
const TALENT_LISTINGS: ProductListing[] = [
  {
    id: "talent-1",
    title: "Senior AI Engineer",
    description: "Expert in machine learning algorithms and neural networks with 8+ years of experience building production-ready AI systems.",
    category: "Engineering",
    price: 150,
    currency: "$",
    tags: ["Machine Learning", "TensorFlow", "Python", "Computer Vision"],
    author: {
      name: "Alexandra Chen",
      id: "alexandra-chen",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-15T10:30:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 43,
  },
  {
    id: "talent-2",
    title: "DevOps Specialist",
    description: "Infrastructure automation expert specializing in containerization, CI/CD pipelines, and cloud-native architectures.",
    category: "DevOps",
    price: 135,
    currency: "$",
    tags: ["Kubernetes", "Docker", "AWS", "Terraform"],
    author: {
      name: "Michael Reynolds",
      id: "michael-reynolds",
      avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-22T14:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 37,
  },
  {
    id: "talent-3",
    title: "Data Scientist",
    description: "PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions.",
    category: "Data Science",
    price: 145,
    currency: "$",
    tags: ["Statistical Analysis", "Python", "R", "Tableau"],
    author: {
      name: "Priya Sharma",
      id: "priya-sharma",
    },
    images: ["https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 29,
  },
  {
    id: "talent-4",
    title: "Cybersecurity Expert",
    description: "Certified security professional with 10+ years experience in threat detection, incident response, and security architecture.",
    category: "Security",
    price: 165,
    currency: "$",
    tags: ["Penetration Testing", "Security Analysis", "CISSP", "Risk Management"],
    author: {
      name: "James Wilson",
      id: "james-wilson",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-05T16:20:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 31,
  },
  {
    id: "talent-5",
    title: "Full-Stack Developer",
    description: "Versatile developer proficient in both frontend and backend technologies with a focus on building scalable web applications.",
    category: "Development",
    price: 125,
    currency: "$",
    tags: ["React", "Node.js", "TypeScript", "MongoDB"],
    author: {
      name: "David Martinez",
      id: "david-martinez",
    },
    images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:30:00.000Z",
    aiScore: 89,
    rating: 4.8,
    reviewCount: 42,
  },
  {
    id: "talent-6",
    title: "AI Ethics Consultant",
    description: "Specialized in ensuring AI systems are developed and deployed in an ethical, transparent and fair manner.",
    category: "Consulting",
    price: 180,
    currency: "$",
    tags: ["AI Ethics", "Governance", "Responsible AI", "Policy"],
    author: {
      name: "Sarah Johnson",
      id: "sarah-johnson",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-10-15T13:45:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 21,
  },
];

// Filter options specific to talents
const TALENT_FILTERS = [
  { label: 'Engineering', value: 'engineering' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Security', value: 'security' },
  { label: 'Development', value: 'development' },
  { label: 'Consulting', value: 'consulting' },
];

export default function TalentsPage() {
  const [listings, setListings] = useState<ProductListing[]>([...TALENT_LISTINGS]);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomTalentListing()]);
    }, 120000); // add new talent every 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <DynamicListingPage
      title="AI & Tech Talent"
      description="Connect with highly skilled professionals in AI, software development, data science, and more."
      categorySlug="talents"
      listings={listings}
      categoryFilters={TALENT_FILTERS}
      initialPrice={{ min: 100, max: 200 }}
    />
  );
}
