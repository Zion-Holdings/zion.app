import { ProductListing } from "@/types/listings";
import { REGIONS } from "@/data/filterConstants";

// Category definitions with average price ranges
const categories = [
  { name: "AI Models & APIs", priceRange: [1000, 3000] },
  { name: "Services", priceRange: [3000, 8000] },
  { name: "Content Creation", priceRange: [200, 800] },
  { name: "Data Analysis", priceRange: [1500, 4000] },
  { name: "Computer Vision", priceRange: [700, 1500] },
  { name: "Virtual Assistants", priceRange: [2000, 4000] },
  { name: "Voice & Speech", priceRange: [1000, 2000] },
  { name: "Developer Tools", priceRange: [300, 1000] },
  { name: "Business Solutions", priceRange: [8000, 20000] },
  { name: "Research", priceRange: [200, 500] },
  { name: "Robotics", priceRange: [5000, 10000] },
  { name: "Workstations", priceRange: [4000, 7000] },
  { name: "Servers", priceRange: [15000, 30000] }
];

const titlePhrases = [
  "Professional Suite",
  "Enterprise Package",
  "Starter Kit",
  "Integration Service",
  "Optimization Tools",
  "Automation Platform",
  "Consulting Bundle",
  "Deployment Toolkit",
  "Managed Solution",
  "Cloud Edition"
];

const providers = [
  "AI Solutions Inc.",
  "DataMinds",
  "TechGear Pro",
  "ContentGenius",
  "InsightAnalytica",
  "VisionTech",
  "AssistantCraft",
  "VoiceIntelligence",
  "CodeGenius",
  "BusinessAI Consultants",
  "RoboticsMind",
  "CloudWorks",
  "DataAnalyticsPro",
  "AIVault",
  "DevOps Masters"
];

const tags = [
  "AI",
  "Machine Learning",
  "Analytics",
  "Cloud",
  "Automation",
  "GPU",
  "DevOps",
  "NLP",
  "Data",
  "Security",
  "Vision",
  "Robotics"
];

const availabilityOptions = [
  "Immediate",
  "1-2 Weeks",
  "2-4 Weeks",
  "4-6 Weeks"
];

export function generateRandomListing(): ProductListing {
  const timestamp = Date.now();
  const category = categories[Math.floor(Math.random() * categories.length)];
  const provider = providers[Math.floor(Math.random() * providers.length)];
  const price = Math.floor(
    (category?.priceRange?.[0] || 100) +
      Math.random() * ((category?.priceRange?.[1] || 1000) - (category?.priceRange?.[0] || 100))
  );

  const title = `${category?.name || 'Service'} ${
    titlePhrases[Math.floor(Math.random() * titlePhrases.length)]
  }`;

  const randomTags = Array.from({ length: 3 }, () =>
    tags[Math.floor(Math.random() * tags.length)] || 'misc'
  );

  return {
    id: `auto-${timestamp}`,
    title,
    description: `Professional ${title.toLowerCase()} generated on ${new Date(
      timestamp
    ).toLocaleDateString()} to accelerate your projects with expert support and modern tooling.`,
    category: category?.name || 'Service',
    price,
    currency: "$",
    tags: randomTags,
    author: {
      name: provider || 'Unknown Provider',
      id: (provider || 'unknown').toLowerCase().replace(/\s+/g, "-")
    },
    images: [
      `https://source.unsplash.com/random/800x500?technology,${(category?.name?.split(" ")[0]) || 'tech'}`
    ],
    createdAt: new Date(timestamp).toISOString(),
    rating: Math.round((4 + Math.random()) * 10) / 10,
    reviewCount: Math.floor(Math.random() * 50) + 1,
    featured: Math.random() < 0.3,
    location: REGIONS[Math.floor(Math.random() * REGIONS.length)],
    availability: availabilityOptions[Math.floor(Math.random() * availabilityOptions.length)],
    aiScore: Math.floor(80 + Math.random() * 20)
  };
}
