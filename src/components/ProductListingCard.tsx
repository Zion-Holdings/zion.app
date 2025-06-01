import { useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductListing } from "@/types/listings";
import { DollarSign } from "lucide-react";
import { RatingStars } from "@/components/RatingStars";
import { FavoriteButton } from "@/components/FavoriteButton";

interface ProductListingCardProps {
  listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
  /**
   * Base path for linking to the detail page. Defaults to
   * `/marketplace/listing` to preserve existing behaviour.
   */
  detailBasePath?: string;
}

export function ProductListingCard({
  listing,
  view = 'grid',
  onRequestQuote,
  detailBasePath = '/marketplace/listing'
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
  const navigate = useNavigate();
  
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg';
    
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`;
  };

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg';
  };
  
  // Handle navigating to listing detail
  const handleViewListing = () => {
    navigate(`${detailBasePath}/${listing.id}`);
  };
  
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onRequestQuote) {
      onRequestQuote(listing.id);
    } else {
      // Default behavior if no handler provided
      navigate(`/request-quote?listing=${listing.id}`);
    }
  };
  
  return (
    <div
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`}
      onClick={handleViewListing}
      tabIndex={0}
    >
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'} onClick={handleViewListing}>
        <div className={`relative ${isGrid ? 'h-48' : 'h-32 w-48'}`}>
          <img
            src={imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          {listing.featured && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
              Featured
            </Badge>
          )}
          <FavoriteButton itemId={listing.id} itemType="product" />
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">
              {listing.category}
            </Badge>
            {listing.rating && (
              <RatingStars value={listing.rating} count={listing.reviewCount} />
            )}
          </div>
          
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}
          </p>
          
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20">
          <div className="text-sm font-medium">
            {listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : (
              <span className="text-foreground/80">
                {formatPrice()}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Link
              to={`${detailBasePath}/${listing.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                Buy Now
              </Button>
            </Link>
            
            {onRequestQuote && (
              <Button 
                size="sm"
                variant="outline" 
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}