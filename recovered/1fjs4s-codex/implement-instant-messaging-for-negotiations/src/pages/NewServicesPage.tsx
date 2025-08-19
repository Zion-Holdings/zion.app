import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { NEW_SERVICES } from "@/data/newServicesData";

const CATEGORY_FILTERS = Array.from(new Set(NEW_SERVICES.map(p => p.category))).map(c => ({ label: c, value: c }));

export default function NewServicesPage() {
  const [listings] = useState<ProductListing[]>([...NEW_SERVICES]);

  return (
    <DynamicListingPage
      title="New Services"
      description="Browse our latest service offerings at competitive market prices."
      categorySlug="new-services"
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 3000, max: 10000 }}
    />
  );
}
