import React, { SVGProps } from 'react';
import Home from 'lucide-react/dist/esm/icons/home';
import Bot from 'lucide-react/dist/esm/icons/bot'; // Changed BotMessageSquare to Bot
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import User from 'lucide-react/dist/esm/icons/user';

// Define the props for your Icon component
export type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof iconMap;
  size?: number | string;
  className?: string;
};

// Create a map of icon names to component references
const iconMap = {
  home: Home,
  'bot-message-square': Bot, // Changed BotMessageSquare to Bot
  sparkles: Sparkles,
  user: User,
  // Add other icons here as needed, importing them individually like above
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24, // Default size
  className,
  ...props
}) => {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  // Render the dynamically selected Lucide icon component
  return <LucideIconComponent size={size} className={className} {...props} />;
};

export default Icon; // Default export the Icon component
export const Icons = iconMap; // Export the map if you need to refer to available icons