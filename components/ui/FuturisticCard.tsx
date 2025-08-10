import { ElementType } from 'react';

export type FuturisticCardProps = {
  title: string;
  description: string;
  Icon: ElementType;
};

export default function FuturisticCard({ title, description, Icon }: FuturisticCardProps) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md p-5 shadow-neon-high-contrast hover:shadow-high-contrast-lg transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-neon-blue">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
    </div>
  );
}