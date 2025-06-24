import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

export const AvatarMenu: React.FC = () => {
  const { user, logout, avatarUrl } = useAuth();

  if (!user) return null;

  const initials = (user.displayName || user.name || 'U').charAt(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="h-8 w-8 cursor-pointer rounded-full focus:outline-none"
          aria-label="User menu"
          title="User menu"
        >
          <Avatar>
            {avatarUrl ? (
              <AvatarImage
                src={avatarUrl}
                alt={user.displayName || user.name || 'User'}
              />
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile" passHref>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders" passHref>Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
