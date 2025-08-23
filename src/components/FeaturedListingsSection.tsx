
import { ProductListingCard } from "@/components/ProductListingCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeaturedListingsSectionProps {
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FeaturedListingsSection({
  showTitle = true,
  className,
  style,
}: FeaturedListingsSectionProps) {
  const featuredListings = [
    {
      id: "ai-innovation-bootcamp",
      title: "AI Innovation Bootcamp",
      uspHeadline: "Master AI Skills Fast",
      description:
        "Join a focused, project-based bootcamp where industry mentors guide you through building real AI solutions. Perfect for jump-starting your career or expanding your capabilities in just weeks.",
      price: 4999,
      currency: "$",
      category: "Training",
      tags: ["AI", "Bootcamp"],
      images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2024-05-01T09:00:00.000Z",
      rating: 4.8,
      reviewCount: 124,
      author: {
        name: "Zion Academy",
        id: "zion-academy"
      }
    },
    {
      id: "freelance-ai-engineer",
      title: "Freelance AI Engineer",
      uspHeadline: "Expert Dev, On Demand",
      description:
        "Hire a seasoned AI engineer who integrates seamlessly with your team. From model design to deployment, get top-tier skills without the overhead of a full-time hire.",
      price: null,
      currency: "$",
      category: "Services",
      tags: ["AI", "Freelance"],
      images: ["https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2024-06-10T10:30:00.000Z",
      rating: 4.9,
      reviewCount: 56,
      author: {
        name: "TopTalent",
        id: "toptalent"
      }
    },
    {
      id: "cloud-gpu-rental",
      title: "Cloud GPU Rental",
      uspHeadline: "Powerful GPUs, Anytime, Anywhere",
      description:
        "Access high-performance GPU instances in the cloud whenever you need them. Scale effortlessly for training, inference, or rendering tasks and only pay for what you use.",
      price: 1299,
      currency: "$",
      category: "Infrastructure",
      tags: ["GPU", "Cloud"],
      images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2024-03-20T11:15:00.000Z",
      rating: 4.7,
      reviewCount: 89,
      author: {
        name: "ComputeHub",
        id: "computehub"
      }
    },
    {
      id: "ai-optimized-cloud-storage",
      title: "AI-Optimized Cloud Storage",
      uspHeadline: "Secure Storage for AI Workloads",
      description:
        "Store and retrieve massive datasets with lightning-fast throughput. Our AI-optimized cloud storage ensures efficient pipeline performance, built-in redundancy, and encryption for your machine learning workflows.",
      price: 299,
      currency: "$",
      category: "Infrastructure",
      tags: ["Storage", "Cloud"],
      images: ["https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2024-04-05T08:00:00.000Z",
      rating: 4.6,
      reviewCount: 72,
      author: {
        name: "DataCloud",
        id: "datacloud"
      }
    }
  ];

  return (
    <section
      id="featured"
      className={cn("py-12 px-4 bg-background", className)}
      style={style}
    >
      <div className="container mx-auto">
        {showTitle && (
          <div className="text-center mb-12">
            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Discover our handpicked selection of top AI products and services
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}
              view="grid"
              onRequestQuote={() => {}}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-6"
            asChild
          >
            <Link href="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
