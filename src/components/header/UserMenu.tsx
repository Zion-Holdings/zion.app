<<<<<<< HEAD
import React from 'react';;
import { useSelector } from 'react-redux;;
import type { RootState } from '@/store;;
import { AvatarMenu } from './AvatarMenu;'

export const UserMenu: unknown React.FC = () => {;
  const isLoggedIn: unknown = useSelector((state: RootState) => state.auth.isLoggedIn);
  if (!isLoggedIn) return null;
  return <AvatarMenu />;''
};

export default UserMenu;''
''''''
=======
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import { AvatarMenu } from './AvatarMenu'

export const UserMenu: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  if (!isLoggedIn) return null;
  return <AvatarMenu />'
}'

export default UserMenu'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
