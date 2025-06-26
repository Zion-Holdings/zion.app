import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth();

  if (!user) return null;

  const initials = (user.displayName || user.name || 'U').charAt(0);

  return (
    <div className="flex items-center gap-2" data-testid="avatar-menu">
      <Avatar className="h-8 w-8">
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} alt={user.displayName || user.name || 'User'} />
        ) : (
          <AvatarFallback>{initials}</AvatarFallback>
        )}
      </Avatar>
      <Link href="/profile" className="text-sm text-white hover:text-zion-cyan">
        Profile
      </Link>
      <Link href="/orders" className="text-sm text-white hover:text-zion-cyan">
        Orders
      </Link>
      <button
        onClick={logout}
        className="text-sm text-white hover:text-zion-cyan"
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default AvatarMenu;
