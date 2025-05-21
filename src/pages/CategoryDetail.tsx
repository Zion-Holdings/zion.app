
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";
import { ProductListingCard } from "@/components/ProductListingCard";
import { useState, useEffect } from "react";
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react";
import { MARKETPLACE_LISTINGS } from "@/data/listingData";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({
    title: "",
    description: "",
    icon: <Bot className="w-6 h-6" />
  });

  // Map of category slugs to their display data
  const categoryData = {
    'services': {
      title: "Services",
      description: "On-demand IT support, consulting, development, and more",
      icon: <Briefcase className="w-6 h-6" />
    },
    'talents': {
      title: "Talents",
      description: "Connect with AI experts, developers, and tech specialists",
      icon: <Brain className="w-6 h-6" />
    },
    'equipment': {
      title: "Equipment",
      description: "Rent or buy specialized hardware, servers, and devices",
      icon: <Code className="w-6 h-6" />
    },
    'innovation': {
      title: "Innovation",
      description: "Discover cutting-edge solutions and tech breakthroughs",
      icon: <Bot className="w-6 h-6" />
    },
    'ai-models-apis': {
      title: "AI Models & APIs",
      description: "Access cutting-edge AI models with easy integration",
      icon: <Brain className="w-6 h-6" />
    },
    'content-creation': {
      title: "Content Creation",
      description: "Generate high-quality content for your projects",
      icon: <PenLine className="w-6 h-6" />
    },
    'data-analysis': {
      title: "Data Analysis",
      description: "Extract insights from complex datasets",
      icon: <BarChart className="w-6 h-6" />
    },
    'computer-vision': {
      title: "Computer Vision",
      description: "Image and video processing solutions",
      icon: <Eye className="w-6 h-6" />
    },
    'virtual-assistants': {
      title: "Virtual Assistants",
      description: "Intelligent automation for your workflow",
      icon: <Bot className="w-6 h-6" />
    },
    'voice-speech': {
      title: "Voice & Speech",
      description: "Speech recognition and synthesis tools",
      icon: <Mic className="w-6 h-6" />
    },
    'developer-tools': {
      title: "Developer Tools",
      description: "AI-powered coding assistance and automation",
      icon: <Code className="w-6 h-6" />
    },
    'business-solutions': {
      title: "Business Solutions",
      description: "Enterprise AI integrations and services",
      icon: <Briefcase className="w-6 h-6" />
    }
  };

  useEffect(() => {
    setIsLoading(true);
    
    // Find the category data based on slug
    const currentCategory = categoryData[slug as keyof typeof categoryData] || {
      title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Category",
      description: "Explore our collection in this category",
      icon: <Bot className="w-6 h-6" />
    };
    
    setCategory(currentCategory);

    // Filter listings by category
    const categoryTitle = currentCategory.title;
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing => 
      listing.category.toLowerCase() === categoryTitle.toLowerCase()
    );
    
    // If we don't have real listings for this category, generate placeholder listings
    const listingsToShow = filteredListings.length > 0 ? filteredListings : 
      Array(4).fill(null).map((_, index) => ({
        id: `${slug}-${index}`,
        title: `${currentCategory.title} Product ${index + 1}`,
        description: `A great ${currentCategory.title.toLowerCase()} solution for your needs.`,
        category: currentCategory.title,
        price: Math.floor(Math.random() * 500) + 50,
        currency: "$",
        tags: [`${slug}`, "ai", "tool"],
        author: {
          name: `Provider ${index + 1}`,
          id: `author-${index + 1}`,
          avatarUrl: undefined
        },
        images: [`/placeholder.svg`],
        createdAt: new Date().toISOString(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100)
      }));

    setListings(listingsToShow);
    setIsLoading(false);
  }, [slug]);

  // Handle requesting a quote
  const handleRequestQuote = (listingId: string) => {
    const listing = listings.find(item => item.id === listingId);
    
    if (listing) {
      toast({
        title: "Quote Requested",
        description: `Your quote request for ${listing.title} has been sent.`
      });
      
      // Navigate to the quote request page with the listing information
      navigate("/request-quote", {
        state: { 
          serviceType: listing.category,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0]
          }
        }
      });
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
              ← Back to Categories
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                {category.icon}
              </div>
            </div>
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              {category.title}
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <ProductListingCard 
                  key={listing.id} 
                  listing={listing}
                  onRequestQuote={handleRequestQuote} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
