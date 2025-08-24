
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="main-content">
      <CategoriesSection />
      <ServicesShowcase />
    </div>
  );
}
