import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";

const ADDITIONAL_TALENT_LISTINGS: ProductListing[] = [
  {
    id: "talent-17",
    title: "Digital Marketing Specialist",
    description: "Strategizes and executes effective online marketing campaigns.",
    category: "Marketing",
    price: 110,
    currency: "$",
    tags: ["SEO", "Google Ads", "Analytics"],
    author: { name: "Grace Miller", id: "grace-miller" },
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-10T09:00:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "talent-18",
    title: "AI Researcher",
    description: "Conducts cutting-edge research in artificial intelligence.",
    category: "Research",
    price: 175,
    currency: "$",
    tags: ["Deep Learning", "Python", "PyTorch"],
    author: { name: "Liam Collins", id: "liam-collins" },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-12T11:15:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 24,
  },
  {
    id: "talent-19",
    title: "Scrum Master",
    description: "Facilitates agile ceremonies and team collaboration.",
    category: "Management",
    price: 150,
    currency: "$",
    tags: ["Agile", "Scrum", "Leadership"],
    author: { name: "Olivia Harris", id: "olivia-harris" },
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-08T10:30:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 16,
  },
  {
    id: "talent-20",
    title: "Technical Writer",
    description: "Produces clear technical documentation and guides.",
    category: "Writing",
    price: 115,
    currency: "$",
    tags: ["Documentation", "API", "Guides"],
    author: { name: "Ethan Wright", id: "ethan-wright" },
    images: [
      "https://images.unsplash.com/photo-1551739440-ef88d8f098b5?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-30T09:45:00.000Z",
    aiScore: 87,
    rating: 4.6,
    reviewCount: 14,
  },
  {
    id: "talent-21",
    title: "Network Engineer",
    description: "Designs and maintains secure network infrastructures.",
    category: "Networking",
    price: 140,
    currency: "$",
    tags: ["Cisco", "Routing", "Switching"],
    author: { name: "Sofia Lopez", id: "sofia-lopez" },
    images: [
      "https://images.unsplash.com/photo-1581091012184-5c65a73c9b98?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-03T13:00:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 20,
  },
  {
    id: "talent-22",
    title: "Game Developer",
    description: "Builds engaging games for desktop and mobile platforms.",
    category: "Development",
    price: 145,
    currency: "$",
    tags: ["Unity", "C#", "3D"],
    author: { name: "Ryan Brooks", id: "ryan-brooks" },
    images: [
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-11T15:20:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 13,
  },
  {
    id: "talent-23",
    title: "AR/VR Designer",
    description: "Creates immersive augmented and virtual reality experiences.",
    category: "Design",
    price: 135,
    currency: "$",
    tags: ["3D Modeling", "AR", "VR"],
    author: { name: "Mia Chen", id: "mia-chen" },
    images: [
      "https://images.unsplash.com/photo-1581276879432-15a9d2e6c534?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-06T12:10:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 18,
  },
  {
    id: "talent-24",
    title: "Big Data Analyst",
    description: "Transforms massive data sets into actionable insights.",
    category: "Data Science",
    price: 155,
    currency: "$",
    tags: ["Hadoop", "Spark", "SQL"],
    author: { name: "Daniel King", id: "daniel-king" },
    images: [
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-28T16:00:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 26,
  },
  {
    id: "talent-25",
    title: "IT Support Specialist",
    description: "Provides technical assistance and troubleshooting.",
    category: "Support",
    price: 105,
    currency: "$",
    tags: ["Help Desk", "Troubleshooting", "Customer Service"],
    author: { name: "Isabella Garcia", id: "isabella-garcia" },
    images: [
      "https://images.unsplash.com/photo-1573495612937-3b263965a1ea?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-02T08:25:00.000Z",
    aiScore: 86,
    rating: 4.5,
    reviewCount: 11,
  },
  {
    id: "talent-26",
    title: "Computer Vision Engineer",
    description: "Develops advanced computer vision solutions.",
    category: "Engineering",
    price: 165,
    currency: "$",
    tags: ["OpenCV", "Machine Learning", "C++"],
    author: { name: "Lucas Brown", id: "lucas-brown" },
    images: [
      "https://images.unsplash.com/photo-1498050108023-4001a3057e4b?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-09T14:40:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 22,
  },
];

const ADDITIONAL_TALENT_FILTERS = Array.from(new Set(ADDITIONAL_TALENT_LISTINGS.map(t => t.category))).map(c => ({ label: c, value: c.toLowerCase().replace(/\s+/g, '-') }));

export default function AdditionalTalentsPage() {
  const [listings] = useState<ProductListing[]>([...ADDITIONAL_TALENT_LISTINGS]);
  return (
    <DynamicListingPage
      title="Additional Talents"
      description="Explore even more professionals priced competitively."
      categorySlug="additional-talents"
      listings={listings}
      categoryFilters={ADDITIONAL_TALENT_FILTERS}
      initialPrice={{ min: 100, max: 200 }}
    />
  );
}
