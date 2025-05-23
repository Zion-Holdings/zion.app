import React from 'react';
import * as LucideIcons from 'lucide-react';

// Alias for missing icons or for icons with different names
const iconAliases: Record<string, keyof typeof LucideIcons> = {
  // Grid views
  LayoutGrid: 'LayoutGrid',
  List: 'List',
  
  // UI elements
  Zap: 'Zap',
  Settings: 'Settings',
  Plus: 'Plus',
  HelpCircle: 'HelpCircle',
  
  // Social media
  Twitter: 'Twitter',
  Linkedin: 'Linkedin',
  Facebook: 'Facebook',
  Instagram: 'Instagram',
  Github: 'Github',
  
  // Services
  Server: 'Server',
  Network: 'Network',
  Recycle: 'Recycle',
  Truck: 'Truck',
  HardDrive: 'HardDrive',
  
  // Status and actions
  Check: 'Check',
  CheckIcon: 'Check',
  Handshake: 'Handshake',
  StarIcon: 'Star',
  
  // Theme
  Moon: 'Moon',
  Sun: 'Sun',
  
  // Notifications
  Bell: 'Bell',
  
  // Calendar
  CalendarIcon: 'Calendar',
  Calendar: 'Calendar',
  
  // Navigation
  ChevronRight: 'ChevronRight',
  MoreHorizontal: 'MoreHorizontal',
  MoreVertical: 'MoreVertical',
  
  // Content
  Quote: 'Quote',
  
  // Alerts
  Info: 'Info',
  AlertTriangle: 'AlertTriangle',
  Ban: 'Ban',
  ShieldAlert: 'ShieldAlert',
  
  // Actions
  Archive: 'Archive',
  Trash2: 'Trash2',
  Trash: 'Trash2',
  Power: 'Power',
  PowerOff: 'PowerOff',
  RefreshCw: 'RefreshCcw',
  Copy: 'Copy',
  ClipboardCopy: 'ClipboardCopy',
  Download: 'Download',
  
  // Auth
  LogIn: 'LogIn',
  EyeOff: 'EyeOff',
  Wallet: 'Wallet',
  
  // Development
  Code: 'Code',
  Megaphone: 'Megaphone',
  Terminal: 'Terminal',
  
  // Community
  ThumbsUp: 'ThumbsUp',
  ThumbsDown: 'ThumbsDown',
  Pin: 'Pin',
  Lock: 'Lock',
  Trophy: 'Trophy',
  Award: 'Award',
  BadgeCheck: 'BadgeCheck',
  MessageSquare: 'MessageSquare',
  
  // Misc
  Link: 'Link',
  Briefcase: 'Briefcase',
  FileText: 'FileText',
  Clock: 'Clock',
  Save: 'Save',
  StarOff: 'Star',
  LayoutDashboard: 'LayoutDashboard',
  BarChart: 'BarChart3',
  BookOpen: 'BookOpen',
  Key: 'Key',
  Sparkles: 'Sparkles',
  Loader2: 'Loader2',
  X: 'X',
  CheckCircle: 'CheckCircle',
};

type IconProps = any;

// Create a type safe export for each icon
const createIconComponent = (
  aliasName: string,
  iconName: keyof typeof LucideIcons
) => {
  const IconComponent = (props: IconProps) => {
    const LucideIcon = (LucideIcons as any)[iconName] as React.FC<IconProps>;
    return <LucideIcon {...props} />;
  };
  IconComponent.displayName = aliasName;
  return IconComponent;
};

// Export all of our icon components
const iconExports: Record<string, React.FC<IconProps>> = {};

// Generate icon exports
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if ((LucideIcons as any)[lucideName]) {
    iconExports[alias] = createIconComponent(alias, lucideName);
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle');
  }
});

export const {
  LayoutGrid,
  List,
  Zap,
  Settings,
  Plus,
  HelpCircle,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Server,
  Network,
  Recycle,
  Truck,
  HardDrive,
  Check,
  CheckIcon,
  Handshake,
  StarIcon,
  Moon,
  Sun,
  Bell,
  CalendarIcon,
  Calendar,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  Quote,
  Info,
  AlertTriangle,
  Ban,
  ShieldAlert,
  Archive,
  Trash2,
  Trash,
  Power,
  PowerOff,
  RefreshCw,
  Copy,
  ClipboardCopy,
  Download,
  LogIn,
  EyeOff,
  Wallet,
  Code,
  Megaphone,
  Terminal,
  ThumbsUp,
  ThumbsDown,
  Pin,
  Lock,
  Trophy,
  Award,
  BadgeCheck,
  Sparkles,
  Loader2,
  X,
  CheckCircle,
  MessageSquare,
  Link,
  Briefcase,
  FileText,
  Clock,
  Save,
  StarOff,
  LayoutDashboard,
  BarChart,
  BookOpen,
  Key,
} = iconExports;

// Also export all original icons from lucide-react
export * from 'lucide-react';