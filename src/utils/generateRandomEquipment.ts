import { ProductListing } from "@/types/listings";

const EQUIPMENT_POOL: ProductListing[] = [
  {
    id: "gpu-training-server",
    title: "GPU Optimized AI Training Server",
    description:
      "Purpose-built server packed with eight NVIDIA A100 GPUs and high-bandwidth NVLink for demanding deep learning workloads.",
    category: "AI",
    subcategory: "Servers",
    price: 48000,
    currency: "$",
    brand: "DeepCompute",
    specifications: ["8x A100", "2TB RAM"],
    tags: ["8x A100", "2TB RAM", "NVLink", "Liquid Cooling"],
    author: {
      name: "DeepCompute",
      id: "deepcompute",
      avatarUrl:
        "https://images.unsplash.com/photo-1541185933-ec28b26c7ecd?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "",
    rating: 4.9,
    reviewCount: 21,
    location: "Global",
    availability: "In Stock",
  },
  {
    id: "edge-ai-camera",
    title: "Edge AI Camera Kit",
    description:
      "Compact camera with integrated GPU for on-device computer vision and analytics at the network edge.",
    category: "AI",
    subcategory: "Imaging",
    price: 890,
    currency: "$",
    brand: "VisionEdge",
    specifications: ["4K", "Jetson"],
    tags: ["4K", "Jetson", "PoE"],
    author: {
      name: "VisionEdge",
      id: "visionedge",
    },
    images: [
      "https://images.unsplash.com/photo-1555617980-dac388a08846?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "",
    rating: 4.6,
    reviewCount: 8,
    location: "Global",
    availability: "Preorder",
  },
  {
    id: "robot-arm",
    title: "6-Axis Industrial Robot Arm",
    description:
      "High precision robotic arm supporting 10kg payloads for assembly and material handling automation.",
    category: "Robotics",
    price: 22000,
    currency: "$",
    brand: "RoboWorks",
    specifications: ["6-Axis", "Teach Pendant"],
    tags: ["6-Axis", "10kg Payload", "Teach Pendant"],
    author: {
      name: "RoboWorks",
      id: "roboworks",
    },
    images: [
      "https://images.unsplash.com/photo-1527434082830-943caa741c5c?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "",
    rating: 4.7,
    reviewCount: 14,
    location: "Global",
    availability: "In Stock",
  },
  {
    id: "ai-inference-appliance",
    title: "AI Inference Appliance",
    description:
      "Standalone appliance optimized for real-time AI inference with low power consumption.",
    category: "AI",
    price: 6200,
    currency: "$",
    brand: "InferEdge",
    specifications: ["A30 GPU", "NVMe"],
    tags: ["A30 GPU", "NVMe", "Quiet"],
    author: {
      name: "InferEdge",
      id: "inferedge",
    },
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "",
    rating: 4.5,
    reviewCount: 9,
    location: "Global",
    availability: "In Stock",
  },
  {
    id: "autonomous-drone-kit",
    title: "Autonomous Drone Kit",
    description:
      "Complete drone platform featuring AI autopilot, obstacle avoidance, and HD camera system.",
    category: "Robotics",
    price: 4500,
    currency: "$",
    brand: "SkyLogic",
    specifications: ["AI Pilot", "HD Camera"],
    tags: ["Quadcopter", "AI Pilot", "HD Camera"],
    author: {
      name: "SkyLogic",
      id: "skylogic",
    },
    images: [
      "https://images.unsplash.com/photo-1508612761958-e931728bd3eb?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "",
    rating: 4.4,
    reviewCount: 11,
    location: "Global",
    availability: "In Stock",
  },
  {
    id: "hpc-cluster-node",
    title: "HPC Cluster Compute Node",
    description:
      "Scalable compute node designed for high-performance computing clusters and scientific workloads.",
    category: "Servers",
    price: 13500,
    currency: "$",
    brand: "HPC Solutions",
    specifications: ["EPYC", "InfiniBand"],
    tags: ["EPYC", "256GB RAM", "InfiniBand"],
    author: {
      name: "HPC Solutions",
      id: "hpcsolutions",
    },
    images: [
      "https://images.unsplash.com/photo-1627602500429-eed2ca977c0b?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "",
    rating: 4.8,
    reviewCount: 6,
    location: "Global",
    availability: "Built to Order",
  },
];

export function generateRandomEquipment(): ProductListing {
  const base = EQUIPMENT_POOL[Math.floor(Math.random() * EQUIPMENT_POOL.length)];
  const timestamp = Date.now();
  
  if (!base) {
    // Fallback equipment if pool is empty (shouldn't happen but for type safety)
    return {
      id: `fallback-${timestamp}`,
      title: 'Equipment',
      description: 'Professional equipment',
      category: 'Equipment',
      price: 1000,
      currency: '$',
      tags: ['equipment'],
      author: { name: 'Unknown', id: 'unknown' },
      images: ['/placeholder.svg'],
      createdAt: new Date(timestamp).toISOString(),
    } as ProductListing;
  }
  
  return {
    ...base,
    id: `${base.id}-${timestamp}`,
    title: base.title || 'Equipment',
    description: base.description || 'Professional equipment',
    category: base.category || 'Equipment',
    createdAt: new Date(timestamp).toISOString(),
  } as ProductListing;
}
