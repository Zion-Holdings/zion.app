import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { AvatarMenu } from './AvatarMenu';

export const UserMenu: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  if (!isLoggedIn) return null;
  return <AvatarMenu />;
};

export default UserMenu;
