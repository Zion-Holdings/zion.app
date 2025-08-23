
import React from "react";
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';




import { cn } from "@/lib/utils";

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';

interface ProfileBadgeProps {
  type: BadgeType;
  className?: string;
}

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400",
    },
    featured: {
      icon: Star,
      text: "Featured",
      colors: "bg-yellow-500/20 text-yellow-400",
    },
    new: {
      icon: Clock,
      text: "New",
      colors: "bg-green-500/20 text-green-400",
    },
    "top-rated": {
      icon: Award,
      text: "Top Rated",
      colors: "bg-purple-500/20 text-purple-400",
    },
  };

  const { icon: Icon, text, colors } = badgeConfig[type];

  return (
    <div className={cn(
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
      colors,
      className
    )}>
      <Icon className="w-3 h-3" />
      <span>{text}</span>
    </div>
  );
}
