declare module "cmdk";
declare module "@radix-ui/react-context-menu";
declare module "vaul";
declare module "@radix-ui/react-hover-card";
declare module "input-otp";
declare module "react-markdown";
declare module "@radix-ui/react-menubar";
declare module "@radix-ui/react-navigation-menu";
declare module "react-resizable-panels";
declare module "@radix-ui/react-toggle-group";
declare module "@radix-ui/react-toggle";

declare module '@tanstack/react-query';
declare module 'react-day-picker' {
  export interface DateRange {
    from?: Date;
    to?: Date;
  }

  // Minimal placeholder for the DayPicker component used in the app
  // The actual library provides full typings but we stub them here so the
  // TypeScript compiler can understand the imports without requiring the real
  // type definitions.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const DayPicker: any;
}
declare module 'sonner';
declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export type LucideProps = SVGProps<SVGSVGElement>;
  export type LucideIcon = FC<LucideProps>;

  export const AlertCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const Apple: LucideIcon;
  export const Archive: LucideIcon;
  export const ArchiveIcon: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const ArrowDownAZ: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpDown: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const ArrowUpZA: LucideIcon;
  export const AtSign: LucideIcon;
  export const Award: LucideIcon;
  export const Badge: LucideIcon;
  export const BadgeCheck: LucideIcon;
  export const BadgeDollarSign: LucideIcon;
  export const BadgePlus: LucideIcon;
  export const Ban: LucideIcon;
  export const BarChart: LucideIcon;
  export const BarChart2: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Bell: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Bookmark: LucideIcon;
  export const BookmarkCheck: LucideIcon;
  export const Bot: LucideIcon;
  export const Brain: LucideIcon;
  export const Briefcase: LucideIcon;
  export const BriefcaseIcon: LucideIcon;
  export const Building: LucideIcon;
  export const Calendar: LucideIcon;
  export const CalendarCheck: LucideIcon;
  export const CalendarIcon: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const CheckIcon: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Circle: LucideIcon;
  export const CircleDot: LucideIcon;
  export const ClipboardCopy: LucideIcon;
  export const Clock: LucideIcon;
  export const Cloud: LucideIcon;
  export const Code: LucideIcon;
  export const Copy: LucideIcon;
  export const CreditCard: LucideIcon;
  export const Crown: LucideIcon;
  export const Database: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Dot: LucideIcon;
  export const Download: LucideIcon;
  export const Edit: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Facebook: LucideIcon;
  export const FileDown: LucideIcon;
  export const FileImage: LucideIcon;
  export const FilePlus: LucideIcon;
  export const FileText: LucideIcon;
  export const FileType: LucideIcon;
  export const FileVideo: LucideIcon;
  export const Filter: LucideIcon;
  export const Flag: LucideIcon;
  export const Gift: LucideIcon;
  export const Github: LucideIcon;
  export const GithubIcon: LucideIcon;
  export const Globe: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Grid3X3: LucideIcon;
  export const GripVertical: LucideIcon;
  export const Handshake: LucideIcon;
  export const HardDrive: LucideIcon;
  export const Heart: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Home: LucideIcon;
  export const Image: LucideIcon;
  export const Inbox: LucideIcon;
  export const InboxIcon: LucideIcon;
  export const Info: LucideIcon;
  export const InfoIcon: LucideIcon;
  export const Instagram: LucideIcon;
  export const Kanban: LucideIcon;
  export const Key: LucideIcon;
  export const LayoutGrid: LucideIcon;
  export const LayoutDashboard: LucideIcon;
  export const Layers: LucideIcon;
  export const Leaf: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const LineChart: LucideIcon;
  export const Link: LucideIcon;
  export const Linkedin: LucideIcon;
  export const List: LucideIcon;
  export const ListFilter: LucideIcon;
  export const Loader: LucideIcon;
  export const Loader2: LucideIcon;
  export const Lock: LucideIcon;
  export const LockKeyhole: LucideIcon;
  export const LogIn: LucideIcon;
  export const LogOut: LucideIcon;
  export const LucideIcon: LucideIcon;
  export const Mail: LucideIcon;
  export const Map: LucideIcon;
  export const MapPin: LucideIcon;
  export const Medal: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Mic: LucideIcon;
  export const MicOff: LucideIcon;
  export const Monitor: LucideIcon;
  export const Network: LucideIcon;
  export const Moon: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const MoreVertical: LucideIcon;
  export const PanelLeft: LucideIcon;
  export const PaperclipIcon: LucideIcon;
  export const PenLine: LucideIcon;
  export const PenTool: LucideIcon;
  export const Pencil: LucideIcon;
  export const Phone: LucideIcon;
  export const PieChart: LucideIcon;
  export const Pin: LucideIcon;
  export const Play: LucideIcon;
  export const PlayCircle: LucideIcon;
  export const Plus: LucideIcon;
  export const PlusCircle: LucideIcon;
  export const Power: LucideIcon;
  export const PowerOff: LucideIcon;
  export const QrCode: LucideIcon;
  export const QrCodeIcon: LucideIcon;
  export const Quote: LucideIcon;
  export const Recycle: LucideIcon;
  export const RefreshCcw: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Recycle: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const Save: LucideIcon;
  export const Search: LucideIcon;
  export const SearchIcon: LucideIcon;
  export const ScreenShare: LucideIcon;
  export const ScreenShareOff: LucideIcon;
  export const Send: LucideIcon;
  export const SendIcon: LucideIcon;
  export const Server: LucideIcon;
  export const Settings: LucideIcon;
  export const Share: LucideIcon;
  export const Share2: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldAlert: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const ShoppingCart: LucideIcon;
  export const Sliders: LucideIcon;
  export const Smartphone: LucideIcon;
  export const SortDesc: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const StarIcon: LucideIcon;
  export const StarOff: LucideIcon;
  export const Sun: LucideIcon;
  export const Terminal: LucideIcon;
  export const ThumbsDown: LucideIcon;
  export const ThumbsUp: LucideIcon;
  export const Trash: LucideIcon;
  export const Trash2: LucideIcon;
  export const TrendingDown: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Trophy: LucideIcon;
  export const Truck: LucideIcon;
  export const Twitter: LucideIcon;
  export const Upload: LucideIcon;
  export const User: LucideIcon;
  export const UserCheck: LucideIcon;
  export const UserIcon: LucideIcon;
  export const UserPlus: LucideIcon;
  export const UserRound: LucideIcon;
  export const Users: LucideIcon;
  export const Video: LucideIcon;
  export const VideoOff: LucideIcon;
  export const Volume: LucideIcon;
  export const Volume2: LucideIcon;
  export const VolumeX: LucideIcon;
  export const Wallet: LucideIcon;
  export const Webhook: LucideIcon;
  export const X: LucideIcon;
  export const XCircle: LucideIcon;
  export const Zap: LucideIcon;
  const icons: { [key: string]: LucideIcon };
  export default icons;
}
declare module 'child_process';
declare module 'date-fns';
declare module 'jspdf' {
  export const jsPDF: any;
  export default jsPDF;
}
declare module '@hookform/resolvers/zod';
declare module '@radix-ui/react-accordion';
declare module '@radix-ui/react-alert-dialog';
declare module '@radix-ui/react-aspect-ratio';
declare module '@radix-ui/react-avatar';
declare module '@radix-ui/react-checkbox';
declare module '@radix-ui/react-collapsible';
declare module '@radix-ui/react-dialog';
declare module '@radix-ui/react-dropdown-menu';
declare module '@radix-ui/react-label';
declare module '@radix-ui/react-popover';
declare module '@radix-ui/react-progress';
declare module '@radix-ui/react-radio-group';
declare module '@radix-ui/react-scroll-area';
declare module '@radix-ui/react-select';
declare module '@radix-ui/react-separator';
declare module '@radix-ui/react-slider';
declare module '@radix-ui/react-slot';
declare module '@radix-ui/react-switch';
declare module '@radix-ui/react-tabs';
declare module '@radix-ui/react-toast';
declare module '@radix-ui/react-tooltip';
declare module '@supabase/supabase-js';
declare module 'class-variance-authority' {
  export function cva(...inputs: any[]): any
  export type VariantProps<T extends (...args: any) => any> = any
}
declare module 'clsx' {
  export type ClassValue = any;
  export default function clsx(...classes: ClassValue[]): string;
}
declare module 'embla-carousel-react';
declare module 'framer-motion';
declare module 'i18next';
declare module 'i18next-browser-languagedetector';
declare module 'react-helmet-async';
declare module 'react-hook-form' {
  import type { ComponentType, ReactElement, ReactNode } from 'react'

  // Minimal generic typings to satisfy local usage without full type defs
  export type FieldValues = Record<string, any>
  export type FieldPath<TFieldValues extends FieldValues> =
    keyof TFieldValues & string

  export type Control<TFieldValues extends FieldValues = FieldValues> = any

  export interface UseFormReturn<
    TFieldValues extends FieldValues = FieldValues,
  > {
    control: Control<TFieldValues>
    handleSubmit: any
    register: any
    formState: any
    [key: string]: any
  }

  export function useForm<
    TFieldValues extends FieldValues = FieldValues,
  >(options?: any): UseFormReturn<TFieldValues>

  export function useFieldArray<
    TFieldValues extends FieldValues = FieldValues,
  >(options: any): any

  export interface ControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  > {
    name: TName
    control?: Control<TFieldValues>
    rules?: any
    defaultValue?: any
    render: (props: any) => ReactElement
  }

  export const Controller: ComponentType<ControllerProps<any, any>>

  export interface FormProviderProps<
    TFieldValues extends FieldValues = FieldValues,
  > {
    children?: ReactNode
    [key: string]: any
  }

  export const FormProvider: ComponentType<FormProviderProps<any>>
  export function useFormContext<
    TFieldValues extends FieldValues = FieldValues,
  >(): UseFormReturn<TFieldValues>
}
declare module 'react-i18next';
declare module 'react-dom/client';
declare module 'react-dom';
declare module 'react-beautiful-dnd';
declare module 'react-redux';
declare module 'semver';
declare module 'ws';
declare module 'recharts';
declare module 'next-themes';
declare module 'tailwind-merge';
