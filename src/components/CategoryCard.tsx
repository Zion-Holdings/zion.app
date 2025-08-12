import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/slugify";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode | string;
  /**
   * Optional color to use for the icon. If not provided the default cyan
   * accent colour is used. Previously this prop was ignored which meant
   * callers could not customise the icon colour as intended.
   */
  color?: string;
  count?: number;
  className?: string;
}

export function CategoryCard({ title, description, icon, color, count, className }: CategoryCardProps) {
  // Create a URL-friendly slug from the category title
  const slug = slugify(title);

  return (
    <Link
      href={`/category/${slug}`}
      tabIndex={0}
      data-testid="category-card" // Added data-testid
      className={cn(
        "flex flex-col items-center p-6 bg-card/60 backdrop-blur-md rounded-lg border border-primary/10 sm:border-primary/20 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 p-3 bg-background rounded-full", // Changed background for icon container
          !color && "text-primary" // Changed default icon color
        )}
        style={color ? { color } : undefined}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-foreground/80 text-center">{description}</p>
      {count !== undefined && (
        <div className="mt-3 text-sm text-primary">{count} listings</div>
      )}
    </Link>
  );
}