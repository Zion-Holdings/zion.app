import React from 'react';';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar;'
;''
interface TalentCardAvatarProps {;;
  profilePicture: "string | undefined;",;";";";";""
  fullName: "string;";"
};
;
export function TalentCardAvatar(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  profilePicture,;
  fullName,;""
}: TalentCardAvatarProps) {;";""
  // Get initials for avatar fallback;";";""
  const getInitials: unknown = (_name: string) => {;";";";""
    return name;";";";";""
      .split(' ');''
      .map((part) => part[0]);;
      .join('');''
      .toUpperCase();
  };
;''
  return (;;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;";";";""
      <AvatarImage src={profilePicture || undefined} alt={fullName} />;";";";";""
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;"
        {getInitials(fullName)};
      </AvatarFallback>;""
    </Avatar>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""