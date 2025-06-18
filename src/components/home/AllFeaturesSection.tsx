import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AllFeaturesSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const features = [
  { title: "AI Talent Matching", link: "/match" },
  { title: "Talent Directory", link: "/talents" },
  { title: "Services Marketplace", link: "/services" },
  { title: "Equipment Catalog", link: "/equipment" },
  { title: "Community Hub", link: "/community" },
  { title: "Mobile App", link: "/mobile-launch" },
  { title: "Enterprise Solutions", link: "/enterprise" },
  { title: "Developer Tools", link: "/developers" },
  { title: "Learning Resources", link: "/blog" },
  { title: "Project Management", link: "/dashboard/projects" },
  { title: "Zion Hire AI", link: "/zion-hire-ai" },
  { title: "Admin Dashboard", link: "/features/admin-dashboard" },
  { title: "Talent Marketplace", link: "/features/talent-marketplace" },
  { title: "Instant Messaging", link: "/features/instant-messaging" },
  { title: "Search", link: "/features/search" },
  { title: "E-commerce Platform", link: "/features/e-commerce" },
  { title: "Integrations", link: "/features/integrations" },
  { title: "Internationalization", link: "/features/internationalization" },
  { title: "AI Content Generation", link: "/features/ai-content-generation" },
];

export function AllFeaturesSection({ className, style }: AllFeaturesSectionProps) {
  return (
    <section className={cn("py-16 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
          Explore All Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.link}
              className="block bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 text-center transition-all"
            >
              {feature.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllFeaturesSection;
