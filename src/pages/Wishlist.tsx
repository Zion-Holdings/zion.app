import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToWishlist, loadWishlistFromDB, removeFromWishlist, getApiUrl } from '@/store/wishlistSlice';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.wishlist.items);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
    dispatch(loadWishlistFromDB(user.id!));
  }, [user, dispatch, navigate, location]);

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist({ id }));
    fetch(`${getApiUrl()}/wishlist/${id}`, {
      method: 'DELETE',
    }).catch(() => {});
  };

  const pathForItem = (item: { id: string; type: string }) => {
    switch (item.type) {
      case 'product':
        return `/marketplace/listing/${item.id}`;
      case 'service':
        return `/services/${item.id}`;
      case 'talent':
        return `/talent/${item.id}`;
      default:
        return '#';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>
      {items.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={`${item.type}-${item.id}`} className="border border-zion-blue-light p-4 rounded-lg flex justify-between items-center">
              <div>{item.data?.title || item.data?.full_name || item.id}</div>
              <div className="flex gap-2">
                <Link to={pathForItem(item)} className="text-zion-cyan underline">
                  Go to item
                </Link>
                <Button size="sm" variant="outline" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
