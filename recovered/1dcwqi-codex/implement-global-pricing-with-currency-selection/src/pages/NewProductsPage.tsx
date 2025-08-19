import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { NEW_PRODUCTS } from "@/data/newProductsData";

const CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));

export default function NewProductsPage() {
  const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]);

  return (
    <DynamicListingPage
      title="New Products"
      description="Explore our latest products priced for today's market."
      categorySlug="new-products"
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
      detailBasePath="/product"
    />
  );
}
