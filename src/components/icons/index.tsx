import React, { SVGProps } from 'react';
// Direct exports for icons needed by AIListingGenerator and AIMatchingResults
export { default as Home } from 'lucide-react/dist/esm/icons/home';
export { default as Bot } from 'lucide-react/dist/esm/icons/bot';
export { default as Sparkles } from 'lucide-react/dist/esm/icons/sparkles';
export { default as User } from 'lucide-react/dist/esm/icons/user';
export { default as ArrowRight } from 'lucide-react/dist/esm/icons/arrow-right';
export { default as BarChart3 } from 'lucide-react/dist/esm/icons/bar-chart-3';
export { default as Briefcase } from 'lucide-react/dist/esm/icons/briefcase';
export { default as Monitor } from 'lucide-react/dist/esm/icons/monitor';

// Original imports for the generic Icon component - these are now effectively duplicates
// but harmless and ensure the generic Icon component still works as before.
import HomeIcon from 'lucide-react/dist/esm/icons/home';
import BotIcon from 'lucide-react/dist/esm/icons/bot'; // Changed BotMessageSquare to Bot
import SparklesIcon from 'lucide-react/dist/esm/icons/sparkles';
import UserIcon from 'lucide-react/dist/esm/icons/user';

// Define the props for your Icon component
export type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof iconMap;
  size?: number | string;
  className?: string;
};

// Create a map of icon names to component references
const iconMap = {
  home: HomeIcon, // Use the aliased import for clarity
  'bot-message-square': BotIcon, // Use the aliased import for clarity
  sparkles: SparklesIcon, // Use the aliased import for clarity
  user: UserIcon, // Use the aliased import for clarity
  // Add other icons here as needed, importing them individually like above
  // Note: The direct exports above do not affect this map.
  // This map is for the generic <Icon name="..."/> component.
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