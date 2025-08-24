
import { CategoriesSection } from "@/components/CategoriesSection";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";

export default function Categories() {
  return (
    <>
      <SEO 
        title="Browse Categories - Zion AI Marketplace"
        description="Explore our comprehensive categories of AI services, tech solutions, and professional talent. Find the perfect match for your project needs."
        keywords="AI categories, tech services, marketplace categories, AI solutions, technology services, professional categories"
        canonical="https://ziontechgroup.com/categories"
      />
      <Header />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our extensive range of AI services and products organized by category. 
              Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>
          
          {/* Reuse the Categories Section component */}
          <CategoriesSection showTitle={false} />
        </div>
      </div>
    </>
  );
}
