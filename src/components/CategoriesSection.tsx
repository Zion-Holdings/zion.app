
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, HelpCircle } from "lucide-react"; // Added HelpCircle for default icon
import { cn } from "@/lib/utils";

// This is the type definition copied from Categories.tsx for consistency.
// Ideally, this would be in a shared types file.
interface CategoryType {
  id: string;
  name: string;
  description?: string;
  iconName?: string; // Example field if categories have icons
  itemCount?: number; // Example field for number of items in a category
  // Add a 'link' property if your API provides it, or construct it.
  link?: string;
}

// Default static categories, used if no categories are passed via props
const defaultCategories = [
  {
    id: "services",
    name: "Services",
    description: "On-demand IT support, consulting, development, and more",
    iconName: "Briefcase", // Corresponds to lucide icon name
    link: "/services",
    color: "from-purple-500 to-indigo-600", // Keep color for styling
  },
  {
    id: "talents",
    name: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    iconName: "Users",
    link: "/talent",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "equipment",
    name: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    iconName: "HardDrive",
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "innovation",
    name: "Innovation",
    description: "Discover cutting-edge solutions and tech breakthroughs",
    iconName: "Lightbulb",
    link: "/innovation",
    color: "from-emerald-500 to-green-600",
  },
];

// Helper to get icon component from name
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case "Briefcase": return <Briefcase className="w-10 h-10" />;
    case "Users": return <Users className="w-10 h-10" />;
    case "HardDrive": return <HardDrive className="w-10 h-10" />;
    case "Lightbulb": return <Lightbulb className="w-10 h-10" />;
    default: return <HelpCircle className="w-10 h-10" />; // Default icon
  }
};

const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
  categories?: CategoryType[]; // Accept categories as a prop
}

export function CategoriesSection({
  showTitle = true,
  className,
  style,
  categories: fetchedCategories, // Rename prop for clarity
}: CategoriesSectionProps) {
  // Use fetchedCategories if provided, otherwise fallback to defaultCategories
  const displayCategories = fetchedCategories && fetchedCategories.length > 0
    ? fetchedCategories.map(cat => ({
        id: cat.id,
        title: cat.name, // Map name to title
        description: cat.description || "No description available.",
        icon: getIcon(cat.iconName), // Get icon component
        link: cat.link || `/category/${cat.id}`, // Construct link if not provided
        // Assign a default color or implement logic to assign colors
        color: defaultCategories.find(dc => dc.id === cat.id)?.color || "from-gray-500 to-gray-600",
      }))
    : defaultCategories.map(cat => ({
        ...cat,
        title: cat.name,
        icon: getIcon(cat.iconName),
      }));

  // If fetchedCategories is an empty array, and we want to show nothing:
  if (fetchedCategories && fetchedCategories.length === 0) {
    return (
      <section className={cn("py-20 bg-zion-blue text-center", className)} style={style}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">No Categories Found</h2>
          <p className="text-zion-slate-light text-lg mb-2">
            We couldn&apos;t find any categories to display at this time.
          </p>
          <p className="text-zion-slate-light text-md">
            Please check back later, or if you believe this is an error, contact support.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              to={category.link || '#'}
              className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 group-hover:border-zion-purple/50 group-focus:border-zion-purple/50 hover:translate-y-[-5px] group-hover:shadow-lg">
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Keep special services and view all categories link as they are, unless they also need to be dynamic */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialServices.map((service) => (
              <Link
                key={service.title} // Key was already here, ensure 'to' is used
                to={service.link} // Changed href to to
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link
            to="/categories/all" // Changed href to to
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
