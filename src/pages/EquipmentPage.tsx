
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { AppLayout } from "@/components/layout/AppLayout";

// Sample equipment listings
const EQUIPMENT_LISTINGS: ProductListing[] = [
  {
    id: "equipment-1",
    title: "High-Performance AI Workstation",
    description: "Professional-grade workstation optimized for machine learning and AI model training with NVIDIA RTX GPUs.",
    category: "Workstations",
    price: 4999,
    currency: "$",
    tags: ["GPU", "Machine Learning", "Workstation"],
    author: {
      name: "TechGear Solutions",
      id: "techgear",
      avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T12:30:00.000Z",
    rating: 4.8,
    reviewCount: 32,
    featured: true
  },
  {
    id: "equipment-2",
    title: "Enterprise GPU Server Rack",
    description: "Scalable server rack solution with multiple NVIDIA A100 GPUs ideal for large-scale AI model training and deployment.",
    category: "Servers",
    price: 24999,
    currency: "$",
    tags: ["Server", "Enterprise", "GPU Cluster"],
    author: {
      name: "ServerPro Systems",
      id: "serverpro",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-15T09:45:00.000Z",
    rating: 4.9,
    reviewCount: 18,
    featured: true
  },
  {
    id: "equipment-3",
    title: "Edge AI Computing Device",
    description: "Compact, energy-efficient computing device designed for deploying AI models at the edge with real-time processing capabilities.",
    category: "Edge Devices",
    price: 899,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Embedded AI"],
    author: {
      name: "EdgeTech Innovations",
      id: "edgetech",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T14:20:00.000Z",
    rating: 4.7,
    reviewCount: 45,
  },
  {
    id: "equipment-4",
    title: "AI Development Kit",
    description: "All-in-one development kit for AI projects including specialized hardware accelerators and comprehensive software tools.",
    category: "Development",
    price: 1499,
    currency: "$",
    tags: ["Development", "Hardware", "ML Tools"],
    author: {
      name: "DevKit Systems",
      id: "devkit",
    },
    images: ["https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-10-20T11:15:00.000Z",
    rating: 4.6,
    reviewCount: 27,
  },
  {
    id: "equipment-5",
    title: "High-Speed Data Storage Array",
    description: "Specialized storage solution optimized for AI workloads with ultra-fast read/write speeds and massive capacity.",
    category: "Storage",
    price: 7999,
    currency: "$",
    tags: ["Storage", "Data Management", "High Performance"],
    author: {
      name: "DataStore Solutions",
      id: "datastore",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    rating: 4.8,
    reviewCount: 22,
  },
  {
    id: "equipment-6",
    title: "AI Vision Camera System",
    description: "Advanced camera system with integrated AI processing for computer vision applications like object detection and tracking.",
    category: "Cameras",
    price: 2499,
    currency: "$",
    tags: ["Computer Vision", "Cameras", "Real-time Processing"],
    author: {
      name: "VisionTech Experts",
      id: "visiontech",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-28T15:45:00.000Z",
    rating: 4.7,
    reviewCount: 34,
  },
];

// Filter options specific to equipment
const EQUIPMENT_FILTERS = [
  { label: 'Workstations', value: 'Workstations' },
  { label: 'Servers', value: 'Servers' },
  { label: 'Edge Devices', value: 'Edge Devices' },
  { label: 'Storage', value: 'Storage' },
  { label: 'Cameras', value: 'Cameras' },
  { label: 'Development', value: 'Development' },
];

export default function EquipmentPage() {
  return (
    <AppLayout>
      <DynamicListingPage 
        title="AI & Tech Equipment"
        description="Discover high-performance hardware solutions for AI development, model training, and deployment."
        categorySlug="equipment"
        listings={EQUIPMENT_LISTINGS}
        categoryFilters={EQUIPMENT_FILTERS}
        initialPrice={{ min: 500, max: 25000 }}
      />
    </AppLayout>
  );
}
