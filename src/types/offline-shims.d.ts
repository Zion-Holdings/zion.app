// React type declarations
declare module 'react' {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P) => any;
  export type FormEvent<T = Element> = any;
  export type KeyboardEvent<T = Element> = any;
  export type ChangeEvent<T = Element> = any;
  export type MouseEvent<T = Element> = any;
  export type SyntheticEvent<T = Element> = any;
  export type CSSProperties = any;
  export type RefObject<T = any> = any;
  export type LegacyRef<T = any> = any;
  export type Ref<T = any> = any;
  export const createElement: any;
  export const Fragment: any;
  
  // Export React hooks
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T = any>(initialValue: T): RefObject<T>;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useContext<T>(context: any): T;
  export function useReducer<R extends (state: any, action: any) => any>(
    reducer: R,
    initialState: any,
    initializer?: (arg: any) => any
  ): [any, (action: any) => void];

  // Add JSX namespace
  export namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      div: any;
      span: any;
      p: any;
      a: any;
      button: any;
      input: any;
      form: any;
      img: any;
      ul: any;
      li: any;
      section: any;
      article: any;
      nav: any;
      header: any;
      footer: any;
      aside: any;
      main: any;
      textarea: any;
      select: any;
      option: any;
      label: any;
      table: any;
      tr: any;
      td: any;
      th: any;
      thead: any;
      tbody: any;
    }
  }
}

// React JSX declarations
declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    h5: any;
    h6: any;
    div: any;
    span: any;
    p: any;
    a: any;
    button: any;
    input: any;
    form: any;
    img: any;
    ul: any;
    li: any;
    section: any;
    article: any;
    nav: any;
    header: any;
    footer: any;
    aside: any;
    main: any;
    textarea: any;
    select: any;
    option: any;
    label: any;
    table: any;
    tr: any;
    td: any;
    th: any;
    thead: any;
    tbody: any;
  }
}

// React DOM declarations
declare module 'react-dom/client' {
  export function createRoot(container: any): {
    render(element: any): void;
  };
}

// JSX runtime module for React 17+
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export const Fragment: any;
}

// Minimal Node.js declarations used by scripts
declare module 'child_process' {
  export function exec(cmd: string, callback: (error: any, stdout: any, stderr: any) => void): void;
}

declare module 'path' {
  export function join(...paths: string[]): string;
  export function resolve(...paths: string[]): string;
  export const sep: string;
  export const dirname: (path: string) => string;
}

// React Router DOM declarations
declare module 'react-router-dom' {
  export const BrowserRouter: any;
  export const Route: any;
  export const Routes: any;
  export const Navigate: any;
  export const Link: any;
  export const useNavigate: () => any;
  export const useParams: () => any;
  export const useLocation: () => any;
}

// Lucide React Icons
declare module 'lucide-react' {
  export interface LucideProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    absoluteStrokeWidth?: boolean;
    [key: string]: any;
  }
  
  export type LucideIcon = (props: LucideProps) => any;
  
  export const Icon: any;
  export const icons: any;
  
  // Define all used icons
  export const User: LucideIcon;
  export const Users: LucideIcon;
  export const LayoutGrid: LucideIcon;
  export const List: LucideIcon;
  export const Zap: LucideIcon;
  export const Settings: LucideIcon;
  export const Plus: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Twitter: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Facebook: LucideIcon;
  export const Instagram: LucideIcon;
  export const Github: LucideIcon;
  export const Server: LucideIcon;
  export const Network: LucideIcon;
  export const Recycle: LucideIcon;
  export const Truck: LucideIcon;
  export const HardDrive: LucideIcon;
  export const Check: LucideIcon;
  export const CheckIcon: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Handshake: LucideIcon;
  export const Star: LucideIcon;
  export const StarIcon: LucideIcon;
  export const Moon: LucideIcon;
  export const Sun: LucideIcon;
  export const Bell: LucideIcon;
  export const Calendar: LucideIcon;
  export const CalendarIcon: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const MoreVertical: LucideIcon;
  export const Quote: LucideIcon;
  export const Info: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Ban: LucideIcon;
  export const ShieldAlert: LucideIcon;
  export const Archive: LucideIcon;
  export const Trash2: LucideIcon;
  export const Trash: LucideIcon;
  export const Power: LucideIcon;
  export const PowerOff: LucideIcon;
  export const RefreshCcw: LucideIcon;
  export const RefreshCw: LucideIcon;
  export const Loader2: LucideIcon;
  export const Copy: LucideIcon;
  export const ClipboardCopy: LucideIcon;
  export const Download: LucideIcon;
  export const LogIn: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Eye: LucideIcon;
  export const XCircle: LucideIcon;
  export const Wallet: LucideIcon;
  export const Code: LucideIcon;
  export const Megaphone: LucideIcon;
  export const Terminal: LucideIcon;
  export const ThumbsUp: LucideIcon;
  export const ThumbsDown: LucideIcon;
  export const Pin: LucideIcon;
  export const Lock: LucideIcon;
  export const Clock: LucideIcon;
  export const Trophy: LucideIcon;
  export const Award: LucideIcon;
  export const BadgeCheck: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const MessageSquareIcon: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Link: LucideIcon;
  export const Briefcase: LucideIcon;
  export const BriefcaseIcon: LucideIcon;
  export const FileText: LucideIcon;
  export const Save: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const StarOff: LucideIcon;
  export const LayoutDashboard: LucideIcon;
  export const BarChart: LucideIcon;
  export const BarChart3: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Key: LucideIcon;
  export const Filter: LucideIcon;
  export const ArrowDownAZ: LucideIcon;
  export const ArrowUpZA: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const Monitor: LucideIcon;
  export const Play: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const QrCode: LucideIcon;
  export const QrCodeIcon: LucideIcon;
  export const Smartphone: LucideIcon;
  export const X: LucideIcon;
  export const Bot: LucideIcon;
  export const Globe: LucideIcon;
  export const TrendingDown: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Send: LucideIcon;
  export const Search: LucideIcon;
  export const Sparkles: LucideIcon;
}

// Component UI declarations
declare module '@/components/ui/card' {
  export const Card: any;
  export const CardHeader: any;
  export const CardTitle: any;
  export const CardDescription: any;
  export const CardContent: any;
  export const CardFooter: any;
}

declare module '@/components/ui/button' {
  export const Button: any;
}

declare module '@/components/ui/input' {
  export const Input: any;
}

declare module '@/components/ui/form' {
  export const Form: any;
  export const FormField: any;
  export const FormItem: any;
  export const FormLabel: any;
  export const FormControl: any;
  export const FormDescription: any;
  export const FormMessage: any;
  export const useForm: any;
}

declare module '@/components/ui/textarea' {
  export const Textarea: any;
}

declare module '@/components/ui/aspect-ratio' {
  export const AspectRatio: any;
}

declare module '@/components/ui/tabs' {
  export const Tabs: any;
  export const TabsList: any;
  export const TabsTrigger: any;
  export const TabsContent: any;
}

declare module '@/components/ui/popover' {
  export const Popover: any;
  export const PopoverTrigger: any;
  export const PopoverContent: any;
}

declare module '@/components/ui/avatar' {
  export const Avatar: any;
  export const AvatarImage: any;
  export const AvatarFallback: any;
}

declare module '@/components/ui/table' {
  export const Table: any;
  export const TableHeader: any;
  export const TableBody: any;
  export const TableHead: any;
  export const TableRow: any;
  export const TableCell: any;
}

declare module '@/components/ui/separator' {
  export const Separator: any;
}

declare module '@/components/ui/skeleton' {
  export const Skeleton: any;
}

declare module '@/components/ui/sonner' {
  export const Toaster: any;
}

declare module '@/components/ui/accordion' {
  export const Accordion: any;
  export const AccordionItem: any;
  export const AccordionTrigger: any;
  export const AccordionContent: any;
}

declare module '@/components/ui/select' {
  export const Select: any;
  export const SelectTrigger: any;
  export const SelectValue: any;
  export const SelectContent: any;
  export const SelectItem: any;
}

declare module '@/components/ui/badge' {
  export const Badge: any;
}

declare module '@/components/ui/toaster' {
  export const Toaster: any;
}

// Hook Form declarations
declare module 'react-hook-form' {
  export const useForm: any;
  export type UseFormReturn<T = any> = any;
  export type FieldValues = any;
}

// Zod declarations
declare module 'zod' {
  export const z: {
    object: any;
    string: any;
    number: any;
    boolean: any;
    array: any;
    date: any;
    instanceof: any;
    infer: any;
    optional: any;
    nullable: any;
    refine: any;
  };
  
  export type ZodType = any;
  export type ZodInfer<T> = any;
  export type ZodError = any;
}

// Resolver declarations
declare module '@hookform/resolvers/zod' {
  export const zodResolver: any;
}

// Date FNS declarations
declare module 'date-fns' {
  export const format: any;
  export const formatDistanceToNow: any;
  export const parseISO: any;
  export const addDays: any;
  export const subDays: any;
}

// React Day Picker
declare module 'react-day-picker' {
  export const DayPicker: any;
  export type DateRange = any;
  export const useNavigation: any;
}

// Recharts
declare module 'recharts' {
  export const LineChart: any;
  export const Line: any;
  export const XAxis: any;
  export const YAxis: any;
  export const CartesianGrid: any;
  export const Tooltip: any;
  export const Legend: any;
  export const ResponsiveContainer: any;
  export const BarChart: any;
  export const Bar: any;
  export const PieChart: any;
  export const Pie: any;
  export const Cell: any;
}

// Sonner
declare module 'sonner' {
  export const toast: any;
  export const Toaster: any;
}

// React Query
declare module '@tanstack/react-query' {
  export const useQuery: any;
  export const useMutation: any;
  export const useQueryClient: any;
  export const QueryClient: any;
  export const QueryClientProvider: any;
}

// React i18next
declare module 'react-i18next' {
  export const useTranslation: any;
  export const Trans: any;
  export const initReactI18next: any;
}

// React Helmet
declare module 'react-helmet-async' {
  export const Helmet: any;
  export const HelmetProvider: any;
}

// Project specific types
declare module '@/lib/utils' {
  export const cn: (...args: any[]) => string;
}

declare module '@/hooks/useAuth' {
  export const useAuth: () => {
    user: any;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    loginWithFacebook: () => Promise<void>;
    loginWithTwitter: () => Promise<void>;
    loginWithWeb3: () => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
  };
}

declare module '@/hooks/useProjects' {
  export const useProjects: () => {
    projects: any[];
    isLoading: boolean;
    error: any;
    getProjectById: (id: string) => Promise<any>;
  };
}

declare module '@/hooks/useMilestones' {
  export const useMilestones: (projectId: string) => {
    milestones: any[];
    activities: any[];
    isLoading: boolean;
    isSubmitting: boolean;
    createMilestone: (data: any) => Promise<void>;
    updateMilestoneStatus: (id: string, status: string) => Promise<void>;
    deleteMilestone: (id: string) => Promise<void>;
    uploadDeliverable: (milestoneId: string, file: File) => Promise<void>;
    refetch: () => Promise<void>;
  };
}

declare module '@/hooks/useJobDetails' {
  export const useJobDetails: (jobId: string) => {
    job: any;
    isLoading: boolean;
    error: any;
  };
}

declare module '@/hooks/useDisputeCheck' {
  export const useDisputeCheck: (projectId: string) => {
    isUnderDispute: boolean;
    disputeId: string | null;
  };
}

declare module '@/hooks/use-toast' {
  export const toast: any;
  export const useToast: () => {
    toast: any;
  };
}

declare module '@/integrations/supabase/client' {
  export const supabase: any;
}

declare module '@/types/community' {
  export type ForumCategory = any;
  export interface ForumCategoryInfo extends ForumCategory {
    id: string;
    icon: any;
    title: string;
    description: string;
    postCount: number;
    adminOnly?: boolean;
  }
  export type ForumPost = any;
  export type ForumReply = any;
  export type Badge = any;
}

declare module '@/types/listings' {
  export type ListingView = any;
  export type ProductListing = any;
}

declare module '@/lib/ai-matchmaking' {
  export type MatchResult = any;
  export type MatchResultItem = any;
  export function findMatches(query: string, serviceType: string, limit?: number): Promise<MatchResult[]>;
}

declare module '@/context/LanguageContext' {
  export const useLanguage: any;
  export type SupportedLanguage = any;
}

declare module '@/components/icons' {
  export const Server: any;
  export const HardDrive: any;
  export const Network: any;
  export const Recycle: any;
  export const Truck: any;
  export const Clock: any;
  export const Loader2: any;
}

declare module '@livekit/components-react' {
  export const VideoCall: any;
  export const LiveKitRoom: any;
}

// Add declarations for our components
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    key?: string | number; // Added key prop
  }
  export function FeatureCard(props: FeatureCardProps): JSX.Element;
}

declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {
    role: 'user' | 'assistant';
    message: string;
    timestamp?: Date;
    key?: string | number; // Added key prop
  }
}
