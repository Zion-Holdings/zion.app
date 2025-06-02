import { useFavorites } from '@/hooks/useFavorites';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { TALENT_PROFILES } from '@/data/talentData';
import { ProductListingCard } from '@/components/ProductListingCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function WishlistPage() {
  const { favorites, loading } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const { items, dispatch } = useCart();

  const addToCart = (item: { id: string; title?: string; price?: number }) => {
    if (items.some(i => i.id === item.id)) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.title || 'Item',
        price: item.price || 0,
        quantity: 1
      }
    });
    toast.success(`1× ${item.title || 'Item'} added`);
  };

  const productMap = MARKETPLACE_LISTINGS.reduce<Record<string, any>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
  const talentMap = TALENT_PROFILES.reduce<Record<string, any>>((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <div className="responsive-grid">
          {favorites.map(fav => {
            if (fav.item_type === 'talent') {
              const talent = talentMap[fav.item_id];
              return talent ? (
                <TalentCard
                  key={fav.item_id}
                  talent={talent}
                  onViewProfile={() => {}}
                  onRequestHire={() => {}}
                  isAuthenticated={true}
                />
              ) : null;
            }
            const item = productMap[fav.item_id];
            return item ? (
              <div key={fav.item_id} className="relative">
                <ProductListingCard listing={item} />
                <Button
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={() => addToCart(item)}
                  disabled={items.some(i => i.id === item.id)}
                >
                  {items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
