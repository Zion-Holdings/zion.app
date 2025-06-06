import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';

interface FavoriteButtonProps {
  itemId: string;
  itemType: string;
  className?: string;
}

export function FavoriteButton({ itemId, itemType, className }: FavoriteButtonProps) {
  const { isWishlisted, toggle } = useWishlist();
  const { isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }
    toggle(itemId);
  };

  const active = isWishlisted(itemId);

  return (
    <>
    <button
      className={cn(
        'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',
        className
      )}
      onClick={handleClick}
      aria-label={active ? 'Remove from favorites' : 'Save to favorites'}
    >
      <Heart
        className={cn(
          'h-4 w-4 transition-transform duration-200',
          active ? 'fill-red-500 text-red-500 scale-110' : 'text-zion-slate'
        )}
      />
    </button>
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
