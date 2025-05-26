import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { useEffect, useState } from "react";
import { generateRandomEquipment } from "@/utils/generateRandomEquipment";
import { EQUIPMENT_LISTINGS } from "@/data/equipmentListings";
const EQUIPMENT_FILTERS = [
  { label: "Servers", value: "Servers" },
  { label: "Networking", value: "Networking" },
  { label: "Power", value: "Power" },
  { label: "Cooling", value: "Cooling" },
  { label: "Storage", value: "Storage" },
  { label: "Security", value: "Security" },
  { label: "Management", value: "Management" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "AI", value: "AI" },
  { label: "Robotics", value: "Robotics" },
];

export default function EquipmentPage() {
  const [listings, setListings] = useState<ProductListing[]>([
    ...EQUIPMENT_LISTINGS,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings((prev) => [...prev, generateRandomEquipment()]);
    }, 120000); // add new equipment every 2 minutes
    return () => clearInterval(interval);
  }, []);

  return (
      <DynamicListingPage
        title="Datacenter Equipment"
        description="Browse professional hardware for modern datacenter and network deployments."
        categorySlug="equipment"
        listings={listings}
        categoryFilters={EQUIPMENT_FILTERS}
        initialPrice={{ min: 400, max: 50000 }}
        detailBasePath="/equipment"
      />
  );
}
