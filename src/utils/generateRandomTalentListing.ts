import { ProductListing } from "@/types/listings";

const categories = [
  "Engineering",
  "Data Science",
  "DevOps",
  "Security",
  "Development",
  "Consulting"
];

const names = [
  "Emma Johnson",
  "Liam Smith",
  "Olivia Williams",
  "Noah Brown",
  "Ava Garcia",
  "Ethan Davis",
  "Sophia Miller",
  "Mason Wilson",
  "Isabella Moore",
  "Logan Taylor"
];

const skillsByCategory: Record<string, string[]> = {
  Engineering: ["C++", "Python", "Systems Design", "Embedded"],
  "Data Science": ["Python", "R", "TensorFlow", "Tableau"],
  DevOps: ["Docker", "Kubernetes", "AWS", "Terraform"],
  Security: ["Pen Testing", "Incident Response", "CISSP", "Risk Management"],
  Development: ["React", "Node.js", "TypeScript", "MongoDB"],
  Consulting: ["AI Ethics", "Governance", "Policy", "Risk Assessment"]
};

function randomItem<T>(arr: T[]): T {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === undefined) {
    throw new Error('Cannot get random item from empty array');
  }
  return item;
}

export function generateRandomTalentListing(): ProductListing {
  const timestamp = Date.now();
  const category = randomItem(categories);
  const name = randomItem(names);
  const price = Math.floor(Math.random() * 100) + 100; // $100 - $199
  const rating = parseFloat((Math.random() + 4).toFixed(1));

  return {
    id: `auto-${timestamp}`,
    title: name,
    description: `Professional ${category.toLowerCase()} specialist ready to tackle complex projects and deliver high-quality results.`,
    category,
    price,
    currency: "$",
    tags: (skillsByCategory[category] || ['General']).slice(0, 3),
    author: {
      name,
      id: name.toLowerCase().replace(/\s+/g, "-"),
      avatarUrl: `https://i.pravatar.cc/100?u=${timestamp}`
    },
    images: [`https://source.unsplash.com/random/800x500?${category}&sig=${timestamp}`],
    createdAt: new Date(timestamp).toISOString(),
    aiScore: Math.floor(Math.random() * 20) + 80,
    rating,
    reviewCount: Math.floor(Math.random() * 50) + 1
  };
}

