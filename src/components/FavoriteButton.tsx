import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface FavoriteButtonProps {
  itemId: string;
  itemType: string;
  className?: string;
}

export function FavoriteButton({ itemId, itemType, className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to save items to your favorites',
        variant: 'destructive'
      });
      return;
    }
    toggleFavorite(itemType, itemId);
  };

  const active = isFavorite(itemType, itemId);

  return (
    <button
      className={cn(
        'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',
        className
      )}
      onClick={handleClick}
      aria-label={active ? 'Remove from favorites' : 'Save to favorites'}
    >
      <Heart className={cn('h-4 w-4', active ? 'fill-red-500 text-red-500' : 'text-zion-slate')} />
    </button>
  );
}
