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
  Monitor,
  PowerOff
} from 'lucide-react';

// Status Icons
export {
  Check,
  CheckCircle,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  XCircle,
  Loader2,
  Clock,
  Calendar,
  Bell,
  Ban,
  ShieldAlert,
  HelpCircle
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
  FilePlus,
  Folder,
  FolderOpen,
  Save,
  Clipboard,
  PaperclipIcon,
  Archive
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
  Unlock,
  LockKeyhole
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
  Package,
  Briefcase,
  BriefcaseIcon,
  Gift,
  BadgeDollarSign,
  Badge,
  BadgeCheck,
  Crown,
  Medal,
  Trophy,
  Handshake,
  ShoppingCart
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
  WifiOff,
  BookOpen,
  Terminal,
  Sparkles,
  Bot,
  HardDrive,
  Lightbulb
} from 'lucide-react';

// Action Icons
export {
  Plus,
  PlusCircle,
  Minus,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  Share,
  Heart,
  Star,
  StarIcon,
  Bookmark,
  Flag,
  MoreHorizontal,
  MoreVertical,
  Reply,
  Forward,
  MessageSquare,
  MessageCircle,
  Mail,
  Phone,
  Send,
  Inbox,
  Kanban,
  CalendarIcon,
  ThumbsUp,
  ThumbsDown,
  Quote,
  InfoIcon,
  QrCode,
  QrCodeIcon,
  Apple,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Megaphone,
  Pin
} from 'lucide-react';

// Navigation & UI Icons
export {
  Menu,
  X,
  Search,
  SearchIcon,
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
  ArrowDown,
  ArrowDownAZ,
  ArrowUpZA,
  Circle,
  CircleDot,
  Dot,
  GripVertical,
  PanelLeft,
  ImageIcon
} from 'lucide-react';

// Export type for icon component props
export type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  'aria-label'?: string;
};
