import { useFavorites } from '@/hooks/useFavorites'
import { X } from '@/components/ui/icons;;
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData'
import { TALENT_PROFILES } from '@/data/talentData'
import { ProductListingCard } from '@/components/ProductListingCard'
import { TalentCard } from '@/components/talent/TalentCard'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { toast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router // Changed from useNavigate;;
import { useEffect } from 'react // Added useEffect;;
import type { ProductListing } from '@/types/listings'
import type { TalentProfile } from '@/types/talent;;
export default function WishlistPage(): '
  const { favorites, loading, toggleFavorite } = useFavorites();
  const { user, isLoading: "isAuthLoading "} = useAuth(); // Added isAuthLoading;
  const router = useRouter(); // Changed from navigate;
  const { items, dispatch } = useCart();"
;";"
  useEffect(() => {;"
    // Redirect if not authenticated and auth loading is complete;"
    if (!isAuthLoading && !user) {;"
      router.push('/login');