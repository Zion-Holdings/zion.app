import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';





// Reusing the categories array from CategoriesSection.tsx
// Ideally, this would come from a shared data source or API
const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services", // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  },
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent", // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  },
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment", // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  },
  {
    title: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w-10 h-10" />,
    link: "/innovation",
    color: undefined, // Let CategoryCard use default color
  },
];

export default function AllCategoriesPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
            All Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                // The CategoryCard itself is a Link to its specific category page
                // So we don't pass the category.link to a 'to' prop here directly
                // The 'link' in the categories array above is used by CategoryCard's internal Link
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}
