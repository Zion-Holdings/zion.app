<<<<<<< HEAD
import React from 'react';
import { Heart } from '@/components/ui/icons;

import { cn } from '@/lib/utils;;
import { useWishlist } from '@/hooks/useWishlist;;
import { useAuth } from '@/hooks/useAuth;;
import { toast } from '@/hooks/use-toast;;
import { LoginModal } from '@/components/auth/LoginModal;
import {;''
  Tooltip,''
  TooltipContent,
  TooltipProvider,;''
  TooltipTrigger,;''
} from '@/components/ui/tooltip''

interface FavoriteButtonProps {;
  itemId: string;
  className?: string;
};

=======
import React from 'react'
import { Heart } from '@/components/ui/icons'

import { cn } from '@/lib/utils'
import { useWishlist } from '@/hooks/useWishlist'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'
import { LoginModal } from '@/components/auth/LoginModal'
import {'
  Tooltip,'
  TooltipContent,
  TooltipProvider,'
  TooltipTrigger,'
} from '@/components/ui/tooltip'

interface FavoriteButtonProps {
  itemId: string
  className?: string

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function FavoriteButton(): unknown {): unknown {): unknown {): unknown {): unknown {{ itemId, className }: FavoriteButtonProps) {;
  const { isWishlisted, toggle } = useWishlist();
  const { _isAuthenticated } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleClick = (_e: React.MouseEvent) => {;
    e.stopPropagation();
    if (!isAuthenticated) {;
      setLoginOpen(true);
      return;
    };

<<<<<<< HEAD
    const wasWishlisted: unknown = isWishlisted(itemId);''
    toggle(itemId)''

    // Provide feedback;''
    toast({;''
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist',;''
      description: wasWishlisted;''
        ? 'Item has been removed from your wishlist;''
        : 'Item has been added to your wishlist',''
=======
    const wasWishlisted = isWishlisted(itemId)'
    toggle(itemId)'

    // Provide feedback'
    toast({'
      title: wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist','
      description: wasWishlisted'
        ? 'Item has been removed from your wishlist'
        : 'Item has been added to your wishlist','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    });
  };

  const active = isWishlisted(itemId);

  return (;
    <>;
<<<<<<< HEAD
      <TooltipProvider>;''
        <Tooltip>''
          <TooltipTrigger asChild>;
            <button;''
              className={cn(;''
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors',;''
                className,''
              )};
              onClick={handleClick};''
              aria-label={;''
                active ? 'Remove from favorites' : 'Save to favorites;''
              }''
            >;
              <Heart;''
                className={cn(;''
                  'h-4 w-4 transition-transform duration-200',;''
                  active;''
                    ? 'fill-red-500 text-red-500 scale-110;''
                    : 'text-zion-slate',''
=======
      <TooltipProvider>'
        <Tooltip>'
          <TooltipTrigger asChild>;
            <button'
              className={cn('
                'absolute top-2 right-2 z-10 p-2 rounded-full bg-zion-blue-dark/80 hover:bg-zion-blue-light/30 transition-colors','
                className,'
              )};
              onClick={handleClick}'
              aria-label={'
                active ? 'Remove from favorites' : 'Save to favorites'
              }'
            >;
              <Heart'
                className={cn('
                  'h-4 w-4 transition-transform duration-200','
                  active'
                    ? 'fill-red-500 text-red-500 scale-110'
                    : 'text-zion-slate','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                )};
              />;
            </button>;
          </TooltipTrigger>;
          {!isAuthenticated && <TooltipContent>Login required</TooltipContent>};
        </Tooltip>;
      </TooltipProvider>;
<<<<<<< HEAD
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;''
    </>''
  );
};

};''

}''
}''
=======
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />'
    </>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
