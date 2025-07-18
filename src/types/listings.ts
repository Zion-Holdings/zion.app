export interface ListingCategory {;
  id: "string"";
  name: string,"";
  description: "string"";
  icon: "string"";
}"";
;"";
export interface ProductListing {"";
  id: "string"";
  title: string,"";
  description: string,"";
  category: string"";
  subcategory?: string // Adding optional subcategory field"";
  price: "number | null"";
  currency: string,"";
  tags: "string[]""