/**
 * Optimized icon imports - reduces bundle size by using tree-shaking
 * Uses Next.js modularizeImports optimization for lucide-react
 * Expected bundle reduction: 60-80% from lucide-react
 */

// All icon exports using standard lucide-react imports
// Next.js modularizeImports config will automatically tree-shake these
export {
  // Core navigation icons - frequently used across the app
  Search,
  Filter,
  X,
  Menu,
  Home,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  
  // User interface icons
  User,
  Users,
  UserPlus,
  Settings,
  LogIn,
  LogOut,
  Plus,
  Minus,
  Edit,
  Trash2,
  Trash,
  Eye,
  EyeOff,
  
  // Status and feedback icons
  Check,
  CheckCircle,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  RefreshCw,
  
  // Theme icons
  Sun,
  Moon,
  
  // Business and marketplace icons
  ShoppingCart,
  Package,
  CreditCard,
  TrendingUp,
  BarChart,
  BarChart3,
  DollarSign,
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  Globe,
  Award,
  
  // Technology icons
  Server,
  Database,
  Code,
  Wifi,
  WifiOff,
  Monitor,
  HardDrive,
  Network,
  Shield,
  Lock,
  Zap,
  
  // File and document icons
  Download,
  Upload,
  File,
  FileText,
  Folder,
  
  // Communication icons
  Mail,
  MessageSquare,
  MessageCircle,
  Send,
  Phone,
  Bell,
  
  // Social media icons
  Facebook,
  Twitter,
  Linkedin,
  
  // Media icons
  Video,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  
  // Rating and favorites
  Heart,
  Star,
  StarHalf,
  
  // Layout icons
  LayoutGrid,
  List,
  Grid,
  
  // Enhanced UI icons
  Sparkles,
} from 'lucide-react';

// Simplified approach - use only the already optimized named exports
// The Next.js modularizeImports config will handle tree-shaking automatically

// Export type for icon component props
export type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  'aria-label'?: string;
};
