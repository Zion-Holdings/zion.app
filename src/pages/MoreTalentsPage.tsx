import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";

const MORE_TALENT_LISTINGS: ProductListing[] = [
  {
    id: "talent-7",
    title: "Backend Developer",
    description: "Experienced in building scalable APIs and microservices.",
    category: "Development",
    price: 130,
    currency: "$",
    tags: ["Node.js", "Express", "MongoDB", "AWS"],
    author: { name: "Kelly Peterson", id: "kelly-peterson" },
    images: [
      "https://images.unsplash.com/photo-1620912186845-ea760f1850b1?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-15T09:00:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 25,
  },
  {
    id: "talent-8",
    title: "UI/UX Designer",
    description: "Designs intuitive user experiences for web and mobile apps.",
    category: "Design",
    price: 120,
    currency: "$",
    tags: ["Figma", "Prototyping", "User Research"],
    author: { name: "Linda Nguyen", id: "linda-nguyen" },
    images: [
      "https://images.unsplash.com/photo-1559027615-ce3b7d81f40a?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-20T10:30:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "talent-9",
    title: "Cloud Architect",
    description: "Specialist in designing resilient cloud infrastructures.",
    category: "DevOps",
    price: 175,
    currency: "$",
    tags: ["AWS", "Terraform", "Kubernetes"],
    author: { name: "Oscar Ramirez", id: "oscar-ramirez" },
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-02-28T14:00:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 32,
  },
  {
    id: "talent-10",
    title: "Data Engineer",
    description: "Builds robust data pipelines and warehousing solutions.",
    category: "Data Science",
    price: 150,
    currency: "$",
    tags: ["Spark", "Python", "ETL"],
    author: { name: "Aria Gupta", id: "aria-gupta" },
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-05T11:20:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 22,
  },
  {
    id: "talent-11",
    title: "QA Automation Engineer",
    description: "Ensures product quality with automated testing suites.",
    category: "Quality Assurance",
    price: 125,
    currency: "$",
    tags: ["Selenium", "Cypress", "Test Planning"],
    author: { name: "Brian Lee", id: "brian-lee" },
    images: [
      "https://images.unsplash.com/photo-1559027615-5ee8c95ed114?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-01T08:45:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 17,
  },
  {
    id: "talent-12",
    title: "Blockchain Developer",
    description: "Develops smart contracts and decentralized applications.",
    category: "Development",
    price: 160,
    currency: "$",
    tags: ["Solidity", "Ethereum", "Web3"],
    author: { name: "Sara Kim", id: "sara-kim" },
    images: [
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-02-18T13:10:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 30,
  },
  {
    id: "talent-13",
    title: "Mobile App Developer",
    description: "Creates high-performance iOS and Android applications.",
    category: "Development",
    price: 140,
    currency: "$",
    tags: ["React Native", "Swift", "Kotlin"],
    author: { name: "Diego Torres", id: "diego-torres" },
    images: [
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-12T15:25:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 27,
  },
  {
    id: "talent-14",
    title: "Robotics Engineer",
    description: "Designs and builds autonomous robotic systems.",
    category: "Engineering",
    price: 180,
    currency: "$",
    tags: ["ROS", "C++", "Automation"],
    author: { name: "Emily Zhang", id: "emily-zhang" },
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-01-30T10:10:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 34,
  },
  {
    id: "talent-15",
    title: "Systems Administrator",
    description: "Maintains critical infrastructure and network security.",
    category: "DevOps",
    price: 135,
    currency: "$",
    tags: ["Linux", "Networking", "Ansible"],
    author: { name: "Ivan Petrov", id: "ivan-petrov" },
    images: [
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-02-10T09:55:00.000Z",
    aiScore: 90,
    rating: 4.6,
    reviewCount: 20,
  },
  {
    id: "talent-16",
    title: "Product Manager",
    description: "Drives product strategy and agile development cycles.",
    category: "Management",
    price: 170,
    currency: "$",
    tags: ["Agile", "Roadmapping", "Stakeholder Management"],
    author: { name: "Nina Patel", id: "nina-patel" },
    images: [
      "https://images.unsplash.com/photo-1567443026713-9ecb85b0ca00?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-05T12:40:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 28,
  },
];

const MORE_TALENT_FILTERS = Array.from(new Set(MORE_TALENT_LISTINGS.map(t => t.category))).map(c => ({ label: c, value: c.toLowerCase().replace(/\s+/g, '-') }));

export default function MoreTalentsPage() {
  const [listings] = useState<ProductListing[]>([...MORE_TALENT_LISTINGS]);
  return (
    <DynamicListingPage
      title="More Talents"
      description="Discover additional experts available at competitive rates."
      categorySlug="more-talents"
      listings={listings}
      categoryFilters={MORE_TALENT_FILTERS}
      initialPrice={{ min: 100, max: 200 }}
    />
  );
}
