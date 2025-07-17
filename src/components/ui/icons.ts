/**
 * Optimized icon exports for better tree shaking and bundle size
 * This file centralizes all icon imports to reduce bundle size
 */

// Layout & Design Icons
export {
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar,
  Maximize,
  Minimize,
  Move,
  RotateCcw
} from 'lucide-react';

// Utility Icons
export {
  Home,
  MapPin,
  Link,
  ExternalLink,
  RefreshCw,
  RefreshCcw,
  ZoomIn,
  ZoomOut,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

// Status Icons
export {
  Check,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  XCircle,
  Loader2,
  Clock,
  Calendar,
  Bell,
  Ban,
  ShieldAlert
} from 'lucide-react';

// Media Icons
export {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Image,
  Video,
  Camera,
  Mic,
  MicOff
} from 'lucide-react';

// File & Document Icons
export {
  File,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  Folder,
  FolderOpen,
  Save
} from 'lucide-react';

// Social & User Icons
export {
  User,
  Users,
  UserPlus,
  UserMinus,
  Settings,
  LogOut,
  LogIn,
  UserCheck,
  Shield,
  Lock,
  Unlock
} from 'lucide-react';

// Business & Finance Icons
export {
  DollarSign,
  CreditCard,
  Wallet,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Package
} from 'lucide-react';

// Development & Tech Icons
export {
  Code,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Bug,
  Zap,
  Cpu,
  Database,
  Server,
  Globe,
  Wifi,
  WifiOff
} from 'lucide-react';

// Action Icons
export {
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  Share,
  Heart,
  Star,
  Bookmark,
  Flag,
  MoreHorizontal,
  MoreVertical,
  Reply,
  Forward,
  MessageSquare,
  Mail,
  Phone,
  Send
} from 'lucide-react';

// Navigation & UI Icons
export {
  Menu,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// Export type for icon component props
export type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  'aria-label'?: string;
};
