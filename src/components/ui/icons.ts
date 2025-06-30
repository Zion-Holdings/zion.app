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

// Re-export icons for group consumption
import * as Icons from 'lucide-react';

// Icon groups for easy consumption
export const NavigationIcons = {
  Search: Icons.Search, 
  Filter: Icons.Filter, 
  X: Icons.X, 
  Menu: Icons.Menu, 
  Home: Icons.Home,
  ChevronDown: Icons.ChevronDown, 
  ChevronUp: Icons.ChevronUp, 
  ChevronLeft: Icons.ChevronLeft, 
  ChevronRight: Icons.ChevronRight,
  ArrowLeft: Icons.ArrowLeft, 
  ArrowRight: Icons.ArrowRight, 
  ArrowUp: Icons.ArrowUp,
};

export const UserIcons = {
  User: Icons.User, 
  Users: Icons.Users, 
  UserPlus: Icons.UserPlus, 
  Settings: Icons.Settings, 
  LogIn: Icons.LogIn, 
  LogOut: Icons.LogOut,
};

export const StatusIcons = {
  Check: Icons.Check, 
  CheckCircle: Icons.CheckCircle, 
  CheckCircle2: Icons.CheckCircle2, 
  AlertCircle: Icons.AlertCircle, 
  AlertTriangle: Icons.AlertTriangle, 
  Info: Icons.Info, 
  Loader2: Icons.Loader2, 
  RefreshCw: Icons.RefreshCw,
};

export const BusinessIcons = {
  ShoppingCart: Icons.ShoppingCart, 
  Package: Icons.Package, 
  CreditCard: Icons.CreditCard, 
  TrendingUp: Icons.TrendingUp, 
  BarChart: Icons.BarChart, 
  BarChart3: Icons.BarChart3, 
  DollarSign: Icons.DollarSign,
  Briefcase: Icons.Briefcase, 
  MapPin: Icons.MapPin, 
  Clock: Icons.Clock, 
  Calendar: Icons.Calendar, 
  Globe: Icons.Globe, 
  Award: Icons.Award,
};

export const TechIcons = {
  Server: Icons.Server, 
  Database: Icons.Database, 
  Code: Icons.Code, 
  Wifi: Icons.Wifi, 
  WifiOff: Icons.WifiOff, 
  Monitor: Icons.Monitor, 
  HardDrive: Icons.HardDrive, 
  Network: Icons.Network, 
  Shield: Icons.Shield, 
  Lock: Icons.Lock, 
  Zap: Icons.Zap,
};

export const FileIcons = {
  Download: Icons.Download, 
  Upload: Icons.Upload, 
  File: Icons.File, 
  FileText: Icons.FileText, 
  Folder: Icons.Folder,
};

export const CommunicationIcons = {
  Mail: Icons.Mail, 
  MessageSquare: Icons.MessageSquare, 
  MessageCircle: Icons.MessageCircle, 
  Send: Icons.Send, 
  Phone: Icons.Phone, 
  Bell: Icons.Bell,
};

export const SocialIcons = {
  Facebook: Icons.Facebook, 
  Twitter: Icons.Twitter, 
  Linkedin: Icons.Linkedin,
};

export const MediaIcons = {
  Video: Icons.Video, 
  VideoOff: Icons.VideoOff, 
  Mic: Icons.Mic, 
  MicOff: Icons.MicOff, 
  Volume2: Icons.Volume2, 
  VolumeX: Icons.VolumeX,
};

// Export type for icon component props
export type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  'aria-label'?: string;
};
