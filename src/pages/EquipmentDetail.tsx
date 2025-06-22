
import { useState } from "react";
import { useRouter } from 'next/router';
import { NextSeo } from '@/components/NextSeo';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { getStripe } from "@/utils/getStripe";
import { useCart } from '@/context/CartContext';
import { equipmentListings } from '@/data/equipmentData';

interface EquipmentSpecification {
  name: string;
  value: string;
}

interface EquipmentDetails {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  expectedShipping?: string;
  specifications: EquipmentSpecification[];
  features: string[];
  warranty?: string;
  returnPolicy?: string;
}

// Build sample data from the shared equipment listings
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipmentListings.reduce((acc, item) => {
    acc[item.id] = {
      id: item.id,
      name: item.title,
      description: item.description,
      brand: item.brand ?? '',
      category: item.category,
      subcategory: item.subcategory,
      images: item.images,
      price: item.price ?? 0,
      currency: item.currency,
      rating: item.rating,
      reviewCount: item.reviewCount,
      inStock: true,
      expectedShipping: item.availability,
      specifications: (item.specifications || []).map((s) => ({ name: s, value: '' })),
      features: [],
    };
    return acc;
  }, {} as { [key: string]: EquipmentDetails });

export default function EquipmentDetail() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const { isAuthenticated, user } = useAuth();
  const { items, dispatch } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  
  // In a real app, this would fetch from an API
  const equipment = id ? SAMPLE_EQUIPMENT[id] : undefined;
  
  if (!equipment) {
    return (
      <>
        <NextSeo
          title="Equipment Not Found"
          description="The equipment you're looking for doesn't exist or has been removed."
        />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const inCart = items.some(i => i.id === equipment.id);

  const handleAddToCart = () => {
    if (inCart) return;
    setIsAdding(true);
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: equipment.id, name: equipment.name, price: equipment.price, quantity }
    });
    const message = isAuthenticated
      ? `${quantity}× ${equipment.name} added`
      : 'Item added. Login to checkout.';
    const fn = isAuthenticated ? toast.success : toast.info;
    fn(message, {
      action: {
        label: 'View Cart',
        onClick: () => router.push('/cart'),
      },
    });
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleBuyNow = async () => {
    if (!isAuthenticated) {
      const next = encodeURIComponent(router.asPath); // Capture full current path
      router.push(`/login?next=${next}`);
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: { id: id ?? "", name: equipment.name ?? "", price: equipment.price, quantity }
    });
    router.push('/checkout');
  };

  return (
    <>
      <NextSeo
        title={equipment.name}
        description={equipment.description}
        openGraph={{ title: equipment.name, description: equipment.description }}
      />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">
                  <img
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                    loading="lazy"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {equipment.images.map((image, index) => (
                      <div
                        key={image + index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${equipment.name} - image ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Description
                    </TabsTrigger>
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Features
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <p className="text-zion-slate-light whitespace-pre-line">
                        {equipment.description}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-4" data-testid="specs-section">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {equipment.specifications.map((spec, index) => (
                          <div key={spec.name + index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">
                            <div className="flex justify-between">
                              <span className="text-zion-slate-light">{spec.name}</span>
                              <span className="text-white font-medium">{spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <ul className="space-y-2">
                        {equipment.features.map((feature, index) => (
                          <li key={feature + index} className="flex items-start gap-2">
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>
                            <span className="text-zion-slate-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right Column - Purchase Info */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                {/* Category and Brand */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                    {equipment.category}
                  </Badge>
                  {equipment.subcategory && (
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                      {equipment.subcategory}
                    </Badge>
                  )}
                </div>
                
                {/* Product Title */}
                <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>
                <p className="text-zion-cyan mb-4">Brand: {equipment.brand}</p>
                
                {/* Rating */}
                {equipment.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 
                              : "text-zion-slate-light"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {equipment.rating.toFixed(1)} ({equipment.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {/* Price */}
                <div className="text-3xl font-bold text-white mb-4">
                  {equipment.currency}{equipment.price.toLocaleString()}
                </div>
                
                {/* Stock Status */}
                <div className="mb-6">
                  {equipment.inStock ? (
                    <div className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>In Stock</span>
                      {equipment.expectedShipping && (
                        <span className="text-zion-slate-light ml-1 text-sm">
                          (Ships in {equipment.expectedShipping})
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="text-rose-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                      <span>Out of Stock</span>
                    </div>
                  )}
                </div>
                
                {/* Quantity */}
                <div className="mb-6">
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">
                    <button
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1 || !equipment.inStock}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      onClick={() => setQuantity(prev => prev + 1)}
                      disabled={!equipment.inStock}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Purchase Buttons */}
                <div className="space-y-3 mb-6">
                  <Button 
                    onClick={handleBuyNow}
                    disabled={isAdding || !equipment.inStock}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                  >
                    {isAdding ? "Processing..." : "Buy Now"}
                  </Button>
                  
                  <Button
                    onClick={handleAddToCart}
                    disabled={isAdding || !equipment.inStock || inCart}
                    variant="outline"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {inCart ? 'In Cart' : 'Add to Cart'}
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">
                  {/* Shipping */}
                  <div className="flex gap-3 text-zion-slate-light">
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Free Shipping</p>
                      <p className="text-xs">For orders over $100 within the US</p>
                    </div>
                  </div>
                  
                  {/* Warranty */}
                  {equipment.warranty && (
                    <div className="flex gap-3 text-zion-slate-light">
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">Warranty</p>
                        <p className="text-xs">{equipment.warranty}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Return Policy */}
                  {equipment.returnPolicy && (
                    <div className="flex gap-3 text-zion-slate-light">
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">Returns</p>
                        <p className="text-xs">{equipment.returnPolicy}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

