import { useEffect, useState } from 'react';
import { ProductListingCard } from '@/components/ProductListingCard';
import { useAuth } from '@/hooks/useAuth';
import { fetchRecommendations } from '@/api/recommendations';
import type { ProductListing } from '@/types/listings';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';

export default function EquipmentRecommendations() {
  const { isAuthenticated, user } = useAuth();
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return (
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
        </div>
      )}
      {error && <ErrorState error="Failed to load recommendations." />}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {listings.map((listing) => (
          <div key={listing.id} className="break-inside-avoid mb-4">
            <ProductListingCard listing={listing} />
          </div>
        ))}
      </div>
    </div>
  );
}
