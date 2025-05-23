import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { AppLayout } from "@/layout/AppLayout";

// Sample datacenter equipment listings
const EQUIPMENT_LISTINGS: ProductListing[] = [
  {
    id: "rack-server-2u",
    title: "2U Rack Mount Server",
    description:
      "High‑density server optimized for virtualization and private cloud deployments.",
    category: "Servers",
    price: 4200,
    currency: "$",
    tags: ["Xeon", "64GB RAM", "Dual PSU"],
    author: {
      name: "DataCore",
      id: "datacore",
      avatarUrl:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "/images/equipment-placeholder.svg",
    ],
    createdAt: "2024-03-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: "10gbe-switch",
    title: "48‑Port 10GbE Switch",
    description:
      "Enterprise switch delivering ultra‑low latency for mission critical applications.",
    category: "Networking",
    price: 6800,
    currency: "$",
    tags: ["Layer 3", "SFP+", "Managed"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "/images/equipment-placeholder.svg",
    ],
    createdAt: "2024-03-05T12:30:00.000Z",
    rating: 4.7,
    reviewCount: 15,
  },
  {
    id: "intelligent-pdu",
    title: "Intelligent Rack PDU",
    description:
      "Remotely monitor power consumption with per‑outlet switching and metering.",
    category: "Power",
    price: 950,
    currency: "$",
    tags: ["Remote", "Metered", "24 Outlets"],
    author: {
      name: "PowerHub",
      id: "powerhub",
    },
    images: [
      "/images/equipment-placeholder.svg",
    ],
    createdAt: "2024-02-18T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 32,
  },
  {
    id: "modular-ups",
    title: "Modular Online UPS",
    description:
      "Scalable uninterrupted power supply with hot‑swappable battery modules.",
    category: "Power",
    price: 8200,
    currency: "$",
    tags: ["Hot Swap", "Scalable", "LCD"],
    author: {
      name: "VoltSecure",
      id: "voltsecure",
      avatarUrl:
        "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "/images/equipment-placeholder.svg",
    ],
    createdAt: "2024-01-22T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 12,
  },
  {
    id: "fiber-patch-panel",
    title: "24‑Port Fiber Patch Panel",
    description:
      "Rack mount patch panel with LC connectors for organized fiber management.",
    category: "Networking",
    price: 480,
    currency: "$",
    tags: ["LC", "1U", "Cable Management"],
    author: {
      name: "FiberLink",
      id: "fiberlink",
    },
    images: [
      "/images/equipment-placeholder.svg",
    ],
    createdAt: "2024-02-02T14:20:00.000Z",
    rating: 4.5,
    reviewCount: 9,
  },
  {
    id: "precision-cooling",
    title: "Precision Airflow Cooling Unit",
    description:
      "Efficient cooling system designed to maintain optimal rack temperature.",
    category: "Cooling",
    price: 5400,
    currency: "$",
    tags: ["Rack Mount", "Variable Speed", "Energy Efficient"],
    author: {
      name: "CoolWorks",
      id: "coolworks",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "/images/equipment-placeholder.svg",
    ],
    createdAt: "2024-03-10T08:10:00.000Z",
    rating: 4.7,
    reviewCount: 18,
  },
];

const EQUIPMENT_FILTERS = [
  { label: "Servers", value: "Servers" },
  { label: "Networking", value: "Networking" },
  { label: "Power", value: "Power" },
  { label: "Cooling", value: "Cooling" },
];

export default function EquipmentPage() {
  return (
    <AppLayout>
      <DynamicListingPage
        title="Datacenter Equipment"
        description="Browse professional hardware for modern datacenter and network deployments."
        categorySlug="equipment"
        listings={EQUIPMENT_LISTINGS}
        categoryFilters={EQUIPMENT_FILTERS}
        initialPrice={{ min: 400, max: 9000 }}
      />
    </AppLayout>
  );
}
