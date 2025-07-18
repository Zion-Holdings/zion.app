<<<<<<< HEAD;

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar;'';
  DropdownMenuContent,;''';
  DropdownMenuSeparator,;''';
} from '@/components/ui/dropdown-menu;'';
export const AvatarMenu: unknown React.FC = () => {;''';
  if (!user) return null;''';
  const initials: unknown = (user.displayName || user.name || 'U');'';
    .charAt(0);''';
  return (;'''