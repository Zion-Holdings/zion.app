
import { Trophy } from 'lucide-react/dist/esm/icons/trophy';
import { Award } from 'lucide-react/dist/esm/icons/award';
import { BadgeCheck } from 'lucide-react/dist/esm/icons/badge-check';
import { Star } from 'lucide-react/dist/esm/icons/star';
import { MessageSquare } from 'lucide-react/dist/esm/icons/message-square';
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UserBadgesProps {
  badges: Badge[];
}

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
};

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
        
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent 
                    style={{ color: badge.color }} 
                    className="w-4 h-4" 
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <div className="font-medium">{badge.name}</div>
                  <div className="text-xs text-gray-500">{badge.description}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default UserBadges;
