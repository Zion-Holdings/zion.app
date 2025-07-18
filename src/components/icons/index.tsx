import React from 'react';'
import type { SVGProps } from 'react';'
import { logWarn } from '@/utils/productionLogger';
import {;
  Home as LucideHome,;
  Bot as LucideBot,;
  Sparkles as LucideSparkles,;
  User as LucideUser,;
  ArrowRight as LucideArrowRight,;
  BarChart3 as LucideBarChart3,;
  Briefcase as LucideBriefcase,;
  Monitor as LucideMonitor,;
  Server as LucideServer,;
  Bell as LucideBell,;
  Calendar as LucideCalendar,;
  Check as LucideCheck,;
  ChevronDown as LucideChevronDown,;
  ChevronUp as LucideChevronUp,;
  ChevronLeft as LucideChevronLeft,;
  ChevronRight as LucideChevronRight,;
  Plus as LucidePlus,;
  Minus as LucideMinus,;
  X as LucideX,;
  Edit as LucideEdit,;
  Trash as LucideTrash,;
  Settings as LucideSettings,;
  Search as LucideSearch,;
  Filter as LucideFilter,;
  UploadCloud as LucideUploadCloud,;
  DownloadCloud as LucideDownloadCloud,;
  Copy as LucideCopy,;
  ExternalLink as LucideExternalLink,;
  Link as LucideLink,;
  MessageSquare as LucideMessageSquare,;
  Users as LucideUsers,;
  FileText as LucideFileText,;
  Image as LucideImage,;
  AlertTriangle as LucideAlertTriangle,;
  Info as LucideInfo,;
  Mail as LucideMail,;
  Lock as LucideLock,;
  LogOut as LucideLogOut,;
  LogIn as LucideLogIn,;
  ShoppingCart as LucideShoppingCart,;
  CreditCard as LucideCreditCard,;
  DollarSign as LucideDollarSign,;
  Percent as LucidePercent,;
  Award as LucideAward,;
  Activity as LucideActivity,;
  Airplay as LucideAirplay,;
  AlignCenter as LucideAlignCenter,;
  AlignJustify as LucideAlignJustify,;
  AlignLeft as LucideAlignLeft,;
  AlignRight as LucideAlignRight,;
  Anchor as LucideAnchor,;
  Aperture as LucideAperture,;
  Archive as LucideArchive,;
  ArrowDownCircle as LucideArrowDownCircle,;
  ArrowDownLeft as LucideArrowDownLeft,;
  ArrowDownRight as LucideArrowDownRight,;
  ArrowLeftCircle as LucideArrowLeftCircle,;
  ArrowRightCircle as LucideArrowRightCircle,;
  ArrowUpCircle as LucideArrowUpCircle,;
  ArrowUpLeft as LucideArrowUpLeft,;
  ArrowUpRight as LucideArrowUpRight,;
  AtSign as LucideAtSign,;
  BarChart as LucideBarChart,;
  BarChart2 as LucideBarChart2,;
  BatteryCharging as LucideBatteryCharging,;
  Battery as LucideBattery,;
  BellOff as LucideBellOff,;
  Bluetooth as LucideBluetooth,;
  Bold as LucideBold,;
  BookOpen as LucideBookOpen,;
  Book as LucideBook,;
  Bookmark as LucideBookmark,;
  Box as LucideBox,;
  CameraOff as LucideCameraOff,;
  Camera as LucideCamera,;
  Cast as LucideCast,;
  CheckCircle as LucideCheckCircle,;
  CheckSquare as LucideCheckSquare,;
  ChevronDownSquare as LucideChevronDownSquare,;
  ChevronLeftSquare as LucideChevronLeftSquare,;
  ChevronRightSquare as LucideChevronRightSquare,;
  ChevronUpSquare as LucideChevronUpSquare,;
  ChevronsDown as LucideChevronsDown,;
  ChevronsLeft as LucideChevronsLeft,;
  ChevronsRight as LucideChevronsRight,;
  ChevronsUp as LucideChevronsUp,;
  Chrome as LucideChrome,;
  Circle as LucideCircle,;
  Clipboard as LucideClipboard,;
  Clock as LucideClock,;
  CloudDrizzle as LucideCloudDrizzle,;
  CloudLightning as LucideCloudLightning,;
  CloudOff as LucideCloudOff,;
  CloudRain as LucideCloudRain,;
  CloudSnow as LucideCloudSnow,;
  Cloud as LucideCloud,;
  Code as LucideCode,;
  Codepen as LucideCodepen,;
  Codesandbox as LucideCodesandbox,;
  Coffee as LucideCoffee,;
  Columns as LucideColumns,;
  Command as LucideCommand,;
  Compass as LucideCompass,;
  Copyleft as LucideCopyleft,;
  Copyright as LucideCopyright,;
  CornerDownLeft as LucideCornerDownLeft,;
  CornerDownRight as LucideCornerDownRight,;
  CornerLeftDown as LucideCornerLeftDown,;
  CornerLeftUp as LucideCornerLeftUp,;
  CornerRightDown as LucideCornerRightDown,;
  CornerRightUp as LucideCornerRightUp,;
  CornerUpLeft as LucideCornerUpLeft,;
  CornerUpRight as LucideCornerUpRight,;
  Cpu as LucideCpu,;
  Crop as LucideCrop,;
  Crosshair as LucideCrosshair,;
  Database as LucideDatabase,;
  Delete as LucideDelete,;
  Disc as LucideDisc,;
  DivideCircle as LucideDivideCircle,;
  DivideSquare as LucideDivideSquare,;
  Divide as LucideDivide,;
  Download as LucideDownload,;
  Dribbble as LucideDribbble,;
  Droplet as LucideDroplet,;
  Edit2 as LucideEdit2,;
  Edit3 as LucideEdit3,;
  EyeOff as LucideEyeOff,;
  Eye as LucideEye,;
  Facebook as LucideFacebook,;
  FastForward as LucideFastForward,;
  Feather as LucideFeather,;
  Figma as LucideFigma,;
  FileMinus as LucideFileMinus,;
  FilePlus as LucideFilePlus,;
  File as LucideFile,;
  Film as LucideFilm,;
  Flag as LucideFlag,;
  FolderMinus as LucideFolderMinus,;
  FolderPlus as LucideFolderPlus,;
  Folder as LucideFolder,;
  Framer as LucideFramer,;
  Frown as LucideFrown,;
  Gift as LucideGift,;
  GitBranch as LucideGitBranch,;
  GitCommit as LucideGitCommit,;
  GitMerge as LucideGitMerge,;
  GitPullRequest as LucideGitPullRequest,;
  Github as LucideGithub,;
  Gitlab as LucideGitlab,;
  Globe as LucideGlobe,;
  Grid as LucideGrid,;
  HardDrive as LucideHardDrive,;
  Hash as LucideHash,;
  Headphones as LucideHeadphones,;
  Heart as LucideHeart,;
  HelpCircle as LucideHelpCircle,;
  Hexagon as LucideHexagon,;
  Inbox as LucideInbox,;
  Instagram as LucideInstagram,;
  Italic as LucideItalic,;
  Key as LucideKey,;
  Layers as LucideLayers,;
  Layout as LucideLayout,;
  LifeBuoy as LucideLifeBuoy,;
  Link2 as LucideLink2,;
  Linkedin as LucideLinkedin,;
  List as LucideList,;
  Loader as LucideLoader,;
  Loader2 as LucideLoader2,;
  MapPin as LucideMapPin,;
  Map as LucideMap,;
  Maximize2 as LucideMaximize2,;
  Maximize as LucideMaximize,;
  Meh as LucideMeh,;
  Menu as LucideMenu,;
  MessageCircle as LucideMessageCircle,;
  MicOff as LucideMicOff,;
  Mic as LucideMic,;
  Minimize2 as LucideMinimize2,;
  Minimize as LucideMinimize,;
  Moon as LucideMoon,;
  MoreHorizontal as LucideMoreHorizontal,;
  MoreVertical as LucideMoreVertical,;
  MousePointer as LucideMousePointer,;
  Move as LucideMove,;
  Music as LucideMusic,;
  Megaphone as LucideMegaphone,;
  Navigation2 as LucideNavigation2,;
  Navigation as LucideNavigation,;
  Network as LucideNetwork,;
  Octagon as LucideOctagon,;
  Package as LucidePackage,;
  Paperclip as LucidePaperclip,;
  PauseCircle as LucidePauseCircle,;
  Pause as LucidePause,;
  PenTool as LucidePenTool,;
  PhoneCall as LucidePhoneCall,;
  PhoneForwarded as LucidePhoneForwarded,;
  PhoneIncoming as LucidePhoneIncoming,;
  PhoneMissed as LucidePhoneMissed,;
  PhoneOff as LucidePhoneOff,;
  PhoneOutgoing as LucidePhoneOutgoing,;
  Phone as LucidePhone,;
  PieChart as LucidePieChart,;
  PlayCircle as LucidePlayCircle,;
  Play as LucidePlay,;
  Pocket as LucidePocket,;
  Power as LucidePower,;
  PowerOff as LucidePowerOff,;
  Printer as LucidePrinter,;
  Radio as LucideRadio,;
  RefreshCcw as LucideRefreshCcw,;
  RefreshCw as LucideRefreshCw,;
  Repeat as LucideRepeat,;
  Rewind as LucideRewind,;
  RotateCcw as LucideRotateCcw,;
  RotateCw as LucideRotateCw,;
  Recycle as LucideRecycle,;
  Rss as LucideRss,;
  Save as LucideSave,;
  Scissors as LucideScissors,;
  ScreenShare as LucideScreenShare,;
  ScreenShareOff as LucideScreenShareOff,;
  Send as LucideSend,;
  Share2 as LucideShare2,;
  Share as LucideShare,;
  ShieldOff as LucideShieldOff,;
  Shield as LucideShield,;
  ShoppingBag as LucideShoppingBag,;
  Shuffle as LucideShuffle,;
  Sidebar as LucideSidebar,;
  SkipBack as LucideSkipBack,;
  SkipForward as LucideSkipForward,;
  Slack as LucideSlack,;
  Slash as LucideSlash,;
  Sliders as LucideSliders,;
  Smartphone as LucideSmartphone,;
  Smile as LucideSmile,;
  Speaker as LucideSpeaker,;
  Square as LucideSquare,;
  Star as LucideStar,;
  StopCircle as LucideStopCircle,;
  Sun as LucideSun,;
  Sunrise as LucideSunrise,;
  Sunset as LucideSunset,;
  Table as LucideTable,;
  Tablet as LucideTablet,;
  Tag as LucideTag,;
  Target as LucideTarget,;
  Terminal as LucideTerminal,;
  ThumbsDown as LucideThumbsDown,;
  ThumbsUp as LucideThumbsUp,;
  ToggleLeft as LucideToggleLeft,;
  ToggleRight as LucideToggleRight,;
  Trash2 as LucideTrash2,;
  Trello as LucideTrello,;
  TrendingDown as LucideTrendingDown,;
  TrendingUp as LucideTrendingUp,;
  Triangle as LucideTriangle,;
  Truck as LucideTruck,;
  Tv as LucideTv,;
  Twitch as LucideTwitch,;
  Twitter as LucideTwitter,;
  Type as LucideType,;
  Umbrella as LucideUmbrella,;
  Underline as LucideUnderline,;
  Unlock as LucideUnlock,;
  Upload as LucideUpload,;
  UserCheck as LucideUserCheck,;
  UserMinus as LucideUserMinus,;
  UserPlus as LucideUserPlus,;
  UserX as LucideUserX,;
  VideoOff as LucideVideoOff,;
  Video as LucideVideo,;
  Voicemail as LucideVoicemail,;
  Wallet as LucideWallet,;
  Volume1 as LucideVolume1,;
  Volume2 as LucideVolume2,;
  VolumeX as LucideVolumeX,;
  Volume as LucideVolume,;
  Watch as LucideWatch,;
  WifiOff as LucideWifiOff,;
  Wifi as LucideWifi,;
  Wind as LucideWind,;
  XCircle as LucideXCircle,;
  XOctagon as LucideXOctagon,;
  XSquare as LucideXSquare,;
  Youtube as LucideYoutube,;
  ZapOff as LucideZapOff,;
  Zap as LucideZap,;
  ZoomIn as LucideZoomIn,;
  ZoomOut as LucideZoomOut,;'
} from 'lucide-react';
;
export const Home: unknown unknown = LucideHome;
export const Bot: unknown unknown = LucideBot;
export const Sparkles: unknown unknown = LucideSparkles;
export const User: unknown unknown = LucideUser;
export const ArrowRight: unknown unknown = LucideArrowRight;
export const BarChart3: unknown unknown = LucideBarChart3;
export const Briefcase: unknown unknown = LucideBriefcase;
export const _BriefcaseIcon: unknown unknown = LucideBriefcase;
export const Monitor: unknown unknown = LucideMonitor;
export const Server: unknown unknown = LucideServer;
export const Bell: unknown unknown = LucideBell;
export const Calendar: unknown unknown = LucideCalendar;
export const _CalendarIcon: unknown unknown = LucideCalendar;
export const Check: unknown unknown = LucideCheck;
export const _CheckIcon: unknown unknown = LucideCheck;
export const ChevronDown: unknown unknown = LucideChevronDown;
export const ChevronUp: unknown unknown = LucideChevronUp;
export const ChevronLeft: unknown unknown = LucideChevronLeft;
export const ChevronRight: unknown unknown = LucideChevronRight;
export const _ChevronRightIcon: unknown unknown = LucideChevronRight;
export const Plus: unknown unknown = LucidePlus;
export const Minus: unknown unknown = LucideMinus;
export const X: unknown unknown = LucideX;
export const Edit: unknown unknown = LucideEdit;
export const Trash: unknown unknown = LucideTrash;
export const Settings: unknown unknown = LucideSettings;
export const Search: unknown unknown = LucideSearch;
export const Filter: unknown unknown = LucideFilter;
export const UploadCloud: unknown unknown = LucideUploadCloud;
export const DownloadCloud: unknown unknown = LucideDownloadCloud;
export const Copy: unknown unknown = LucideCopy;
export const ExternalLink: unknown unknown = LucideExternalLink;
export const _ExternalLinkIcon: unknown unknown = LucideExternalLink;
export const Link: unknown unknown = LucideLink;
export const MessageSquare: unknown unknown = LucideMessageSquare;
export const _MessageSquareIcon: unknown unknown = LucideMessageSquare;
export const Users: unknown unknown = LucideUsers;
export const FileText: unknown unknown = LucideFileText;
export const Image: unknown unknown = LucideImage;
export const AlertTriangle: unknown unknown = LucideAlertTriangle;
export const Info: unknown unknown = LucideInfo;
export const Mail: unknown unknown = LucideMail;
export const Lock: unknown unknown = LucideLock;
export const LogOut: unknown unknown = LucideLogOut;
export const LogIn: unknown unknown = LucideLogIn;
export const ShoppingCart: unknown unknown = LucideShoppingCart;
export const CreditCard: unknown unknown = LucideCreditCard;
export const DollarSign: unknown unknown = LucideDollarSign;
export const Percent: unknown unknown = LucidePercent;
export const Award: unknown unknown = LucideAward;
export const Activity: unknown unknown = LucideActivity;
export const Airplay: unknown unknown = LucideAirplay;
export const AlignCenter: unknown unknown = LucideAlignCenter;
export const AlignJustify: unknown unknown = LucideAlignJustify;
export const AlignLeft: unknown unknown = LucideAlignLeft;
export const AlignRight: unknown unknown = LucideAlignRight;
export const Anchor: unknown unknown = LucideAnchor;
export const Aperture: unknown unknown = LucideAperture;
export const Archive: unknown unknown = LucideArchive;
export const ArrowDownCircle: unknown unknown = LucideArrowDownCircle;
export const ArrowDownLeft: unknown unknown = LucideArrowDownLeft;
export const ArrowDownRight: unknown unknown = LucideArrowDownRight;
export const ArrowLeftCircle: unknown unknown = LucideArrowLeftCircle;
export const ArrowRightCircle: unknown unknown = LucideArrowRightCircle;
export const ArrowUpCircle: unknown unknown = LucideArrowUpCircle;
export const ArrowUpLeft: unknown unknown = LucideArrowUpLeft;
export const ArrowUpRight: unknown unknown = LucideArrowUpRight;
export const AtSign: unknown unknown = LucideAtSign;
export const BarChart: unknown unknown = LucideBarChart;
export const BarChart2: unknown unknown = LucideBarChart2;
export const BatteryCharging: unknown unknown = LucideBatteryCharging;
export const Battery: unknown unknown = LucideBattery;
export const BellOff: unknown unknown = LucideBellOff;
export const Bluetooth: unknown unknown = LucideBluetooth;
export const Bold: unknown unknown = LucideBold;
export const BookOpen: unknown unknown = LucideBookOpen;
export const Book: unknown unknown = LucideBook;
export const Bookmark: unknown unknown = LucideBookmark;
export const Box: unknown unknown = LucideBox;
export const CameraOff: unknown unknown = LucideCameraOff;
export const Camera: unknown unknown = LucideCamera;
export const Cast: unknown unknown = LucideCast;
export const CheckCircle: unknown unknown = LucideCheckCircle;
export const CheckSquare: unknown unknown = LucideCheckSquare;
export const ChevronDownSquare: unknown unknown = LucideChevronDownSquare;
export const ChevronLeftSquare: unknown unknown = LucideChevronLeftSquare;
export const ChevronRightSquare: unknown unknown = LucideChevronRightSquare;
export const ChevronUpSquare: unknown unknown = LucideChevronUpSquare;
export const ChevronsDown: unknown unknown = LucideChevronsDown;
export const ChevronsLeft: unknown unknown = LucideChevronsLeft;
export const ChevronsRight: unknown unknown = LucideChevronsRight;
export const ChevronsUp: unknown unknown = LucideChevronsUp;
export const Chrome: unknown unknown = LucideChrome;
export const Circle: unknown unknown = LucideCircle;
export const Clipboard: unknown unknown = LucideClipboard;
export const Clock: unknown unknown = LucideClock;
export const CloudDrizzle: unknown unknown = LucideCloudDrizzle;
export const CloudLightning: unknown unknown = LucideCloudLightning;
export const CloudOff: unknown unknown = LucideCloudOff;
export const CloudRain: unknown unknown = LucideCloudRain;
export const CloudSnow: unknown unknown = LucideCloudSnow;
export const Cloud: unknown unknown = LucideCloud;
export const Code: unknown unknown = LucideCode;
export const Codepen: unknown unknown = LucideCodepen;
export const Codesandbox: unknown unknown = LucideCodesandbox;
export const Coffee: unknown unknown = LucideCoffee;
export const Columns: unknown unknown = LucideColumns;
export const Command: unknown unknown = LucideCommand;
export const Compass: unknown unknown = LucideCompass;
export const Copyleft: unknown unknown = LucideCopyleft;
export const Copyright: unknown unknown = LucideCopyright;
export const CornerDownLeft: unknown unknown = LucideCornerDownLeft;
export const CornerDownRight: unknown unknown = LucideCornerDownRight;
export const CornerLeftDown: unknown unknown = LucideCornerLeftDown;
export const CornerLeftUp: unknown unknown = LucideCornerLeftUp;
export const CornerRightDown: unknown unknown = LucideCornerRightDown;
export const CornerRightUp: unknown unknown = LucideCornerRightUp;
export const CornerUpLeft: unknown unknown = LucideCornerUpLeft;
export const CornerUpRight: unknown unknown = LucideCornerUpRight;
export const Cpu: unknown unknown = LucideCpu;
export const Crop: unknown unknown = LucideCrop;
export const Crosshair: unknown unknown = LucideCrosshair;
export const Database: unknown unknown = LucideDatabase;
export const Delete: unknown unknown = LucideDelete;
export const Disc: unknown unknown = LucideDisc;
export const DivideCircle: unknown unknown = LucideDivideCircle;
export const DivideSquare: unknown unknown = LucideDivideSquare;
export const Divide: unknown unknown = LucideDivide;
export const Download: unknown unknown = LucideDownload;
export const Dribbble: unknown unknown = LucideDribbble;
export const Droplet: unknown unknown = LucideDroplet;
export const Edit2: unknown unknown = LucideEdit2;
export const Edit3: unknown unknown = LucideEdit3;
export const EyeOff: unknown unknown = LucideEyeOff;
export const Eye: unknown unknown = LucideEye;
export const Facebook: unknown unknown = LucideFacebook;
export const FastForward: unknown unknown = LucideFastForward;
export const Feather: unknown unknown = LucideFeather;
export const Figma: unknown unknown = LucideFigma;
export const FileMinus: unknown unknown = LucideFileMinus;
export const FilePlus: unknown unknown = LucideFilePlus;
export const File: unknown unknown = LucideFile;
export const Film: unknown unknown = LucideFilm;
export const Flag: unknown unknown = LucideFlag;
export const FolderMinus: unknown unknown = LucideFolderMinus;
export const FolderPlus: unknown unknown = LucideFolderPlus;
export const Folder: unknown unknown = LucideFolder;
export const Framer: unknown unknown = LucideFramer;
export const Frown: unknown unknown = LucideFrown;
export const Gift: unknown unknown = LucideGift;
export const GitBranch: unknown unknown = LucideGitBranch;
export const GitCommit: unknown unknown = LucideGitCommit;
export const GitMerge: unknown unknown = LucideGitMerge;
export const GitPullRequest: unknown unknown = LucideGitPullRequest;
export const Github: unknown unknown = LucideGithub;
export const Gitlab: unknown unknown = LucideGitlab;
export const Globe: unknown unknown = LucideGlobe;
export const Grid: unknown unknown = LucideGrid;
export const HardDrive: unknown unknown = LucideHardDrive;
export const Hash: unknown unknown = LucideHash;
export const Headphones: unknown unknown = LucideHeadphones;
export const Heart: unknown unknown = LucideHeart;
export const HelpCircle: unknown unknown = LucideHelpCircle;
export const Hexagon: unknown unknown = LucideHexagon;
export const Inbox: unknown unknown = LucideInbox;
export const Instagram: unknown unknown = LucideInstagram;
export const Italic: unknown unknown = LucideItalic;
export const Key: unknown unknown = LucideKey;
export const Layers: unknown unknown = LucideLayers;
export const Layout: unknown unknown = LucideLayout;
export const LifeBuoy: unknown unknown = LucideLifeBuoy;
export const Link2: unknown unknown = LucideLink2;
export const Linkedin: unknown unknown = LucideLinkedin;
export const List: unknown unknown = LucideList;
export const Loader: unknown unknown = LucideLoader;
export const Loader2: unknown unknown = LucideLoader2;
export const MapPin: unknown unknown = LucideMapPin;
export const Map: unknown unknown = LucideMap;
export const Maximize2: unknown unknown = LucideMaximize2;
export const Maximize: unknown unknown = LucideMaximize;
export const Meh: unknown unknown = LucideMeh;
export const Menu: unknown unknown = LucideMenu;
export const MessageCircle: unknown unknown = LucideMessageCircle;
export const MicOff: unknown unknown = LucideMicOff;
export const Mic: unknown unknown = LucideMic;
export const Minimize2: unknown unknown = LucideMinimize2;
export const Minimize: unknown unknown = LucideMinimize;
export const Moon: unknown unknown = LucideMoon;
export const MoreHorizontal: unknown unknown = LucideMoreHorizontal;
export const _MoreHorizontalIcon: unknown unknown = LucideMoreHorizontal;
export const MoreVertical: unknown unknown = LucideMoreVertical;
export const MousePointer: unknown unknown = LucideMousePointer;
export const Move: unknown unknown = LucideMove;
export const Music: unknown unknown = LucideMusic;
export const Megaphone: unknown unknown = LucideMegaphone;
export const Navigation2: unknown unknown = LucideNavigation2;
export const Navigation: unknown unknown = LucideNavigation;
export const Network: unknown unknown = LucideNetwork;
export const Octagon: unknown unknown = LucideOctagon;
export const Package: unknown unknown = LucidePackage;
export const Paperclip: unknown unknown = LucidePaperclip;
export const PauseCircle: unknown unknown = LucidePauseCircle;
export const Pause: unknown unknown = LucidePause;
export const PenTool: unknown unknown = LucidePenTool;
export const PhoneCall: unknown unknown = LucidePhoneCall;
export const PhoneForwarded: unknown unknown = LucidePhoneForwarded;
export const PhoneIncoming: unknown unknown = LucidePhoneIncoming;
export const PhoneMissed: unknown unknown = LucidePhoneMissed;
export const PhoneOff: unknown unknown = LucidePhoneOff;
export const PhoneOutgoing: unknown unknown = LucidePhoneOutgoing;
export const Phone: unknown unknown = LucidePhone;
export const PieChart: unknown unknown = LucidePieChart;
export const PlayCircle: unknown unknown = LucidePlayCircle;
export const Play: unknown unknown = LucidePlay;
export const Pocket: unknown unknown = LucidePocket;
export const Power: unknown unknown = LucidePower;
export const PowerOff: unknown unknown = LucidePowerOff;
export const Printer: unknown unknown = LucidePrinter;
export const Radio: unknown unknown = LucideRadio;
export const RefreshCcw: unknown unknown = LucideRefreshCcw;
export const RefreshCw: unknown unknown = LucideRefreshCw;
export const Repeat: unknown unknown = LucideRepeat;
export const Rewind: unknown unknown = LucideRewind;
export const RotateCcw: unknown unknown = LucideRotateCcw;
export const RotateCw: unknown unknown = LucideRotateCw;
export const Recycle: unknown unknown = LucideRecycle;
export const Rss: unknown unknown = LucideRss;
export const Save: unknown unknown = LucideSave;
export const Scissors: unknown unknown = LucideScissors;
export const ScreenShare: unknown unknown = LucideScreenShare;
export const ScreenShareOff: unknown unknown = LucideScreenShareOff;
export const _ScreenShareOffIcon: unknown unknown = LucideScreenShareOff;
export const Send: unknown unknown = LucideSend;
export const Share2: unknown unknown = LucideShare2;
export const Share: unknown unknown = LucideShare;
export const ShieldOff: unknown unknown = LucideShieldOff;
export const Shield: unknown unknown = LucideShield;
export const ShoppingBag: unknown unknown = LucideShoppingBag;
export const Shuffle: unknown unknown = LucideShuffle;
export const Sidebar: unknown unknown = LucideSidebar;
export const SkipBack: unknown unknown = LucideSkipBack;
export const SkipForward: unknown unknown = LucideSkipForward;
export const Slack: unknown unknown = LucideSlack;
export const Slash: unknown unknown = LucideSlash;
export const Sliders: unknown unknown = LucideSliders;
export const Smartphone: unknown unknown = LucideSmartphone;
export const Smile: unknown unknown = LucideSmile;
export const Speaker: unknown unknown = LucideSpeaker;
export const Square: unknown unknown = LucideSquare;
export const Star: unknown unknown = LucideStar;
export const StopCircle: unknown unknown = LucideStopCircle;
export const Sun: unknown unknown = LucideSun;
export const Sunrise: unknown unknown = LucideSunrise;
export const Sunset: unknown unknown = LucideSunset;
export const Table: unknown unknown = LucideTable;
export const Tablet: unknown unknown = LucideTablet;
export const Tag: unknown unknown = LucideTag;
export const Target: unknown unknown = LucideTarget;
export const Terminal: unknown unknown = LucideTerminal;
export const ThumbsDown: unknown unknown = LucideThumbsDown;
export const ThumbsUp: unknown unknown = LucideThumbsUp;
export const ToggleLeft: unknown unknown = LucideToggleLeft;
export const ToggleRight: unknown unknown = LucideToggleRight;
export const Trash2: unknown unknown = LucideTrash2;
export const Trello: unknown unknown = LucideTrello;
export const TrendingDown: unknown unknown = LucideTrendingDown;
export const TrendingUp: unknown unknown = LucideTrendingUp;
export const Triangle: unknown unknown = LucideTriangle;
export const Truck: unknown unknown = LucideTruck;
export const Tv: unknown unknown = LucideTv;
export const Twitch: unknown unknown = LucideTwitch;
export const Twitter: unknown unknown = LucideTwitter;
export const Type: unknown unknown = LucideType;
export const Umbrella: unknown unknown = LucideUmbrella;
export const Underline: unknown unknown = LucideUnderline;
export const Unlock: unknown unknown = LucideUnlock;
export const Upload: unknown unknown = LucideUpload;
export const UserCheck: unknown unknown = LucideUserCheck;
export const UserMinus: unknown unknown = LucideUserMinus;
export const UserPlus: unknown unknown = LucideUserPlus;
export const UserX: unknown unknown = LucideUserX;
export const VideoOff: unknown unknown = LucideVideoOff;
export const Video: unknown unknown = LucideVideo;
export const Voicemail: unknown unknown = LucideVoicemail;
export const Wallet: unknown unknown = LucideWallet;
export const Volume1: unknown unknown = LucideVolume1;
export const Volume2: unknown unknown = LucideVolume2;
export const VolumeX: unknown unknown = LucideVolumeX;
export const Volume: unknown unknown = LucideVolume;
export const Watch: unknown unknown = LucideWatch;
export const WifiOff: unknown unknown = LucideWifiOff;
export const Wifi: unknown unknown = LucideWifi;
export const Wind: unknown unknown = LucideWind;
export const XCircle: unknown unknown = LucideXCircle;
export const XOctagon: unknown unknown = LucideXOctagon;
export const XSquare: unknown unknown = LucideXSquare;
export const Youtube: unknown unknown = LucideYoutube;
export const ZapOff: unknown unknown = LucideZapOff;
export const Zap: unknown unknown = LucideZap;
export const ZoomIn: unknown unknown = LucideZoomIn;
export const ZoomOut: unknown unknown = LucideZoomOut;
;
// Define the props for your Icon component;
export type IconProps = SVGProps<SVGSVGElement> & {;
  name: keyof typeof iconMap;
  size?: number | string;
  className?: string;
};
;
// Create a map of icon names to component references;
const iconMap: unknown unknown = {;'
  home: "LucideHome",;"
  'bot-message-square': LucideBot, // Assuming Bot is used for bot-message-square;'
  sparkles: "LucideSparkles",;"
  user: "LucideUser",;"
  briefcase: "LucideBriefcase",;"
  server: "LucideServer",;"
  bell: "LucideBell",;"
  calendar: "LucideCalendar",;"
  check: "LucideCheck",;"
  'chevron-down': LucideChevronDown,;'
  'chevron-up': LucideChevronUp,;'
  'chevron-left': LucideChevronLeft,;'
  'chevron-right': LucideChevronRight,;'
  plus: "LucidePlus",;"
  minus: "LucideMinus",;"
  x: "LucideX",;"
  edit: "LucideEdit",;"
  trash: "LucideTrash",;"
  settings: "LucideSettings",;"
  search: "LucideSearch",;"
  filter: "LucideFilter",;"
  'upload-cloud': LucideUploadCloud,;'
  'download-cloud': LucideDownloadCloud,;'
  copy: "LucideCopy",;"
  'external-link': LucideExternalLink,;'
  link: "LucideLink",;"
  'message-square': LucideMessageSquare,;'
  users: "LucideUsers",;"
  'file-text': LucideFileText,;'
  image: "LucideImage",;"
  'alert-triangle': LucideAlertTriangle,;'
  info: "LucideInfo",;"
  mail: "LucideMail",;"
  lock: "LucideLock",;"
  'log-out': LucideLogOut,;'
  'log-in': LucideLogIn,;'
  'shopping-cart': LucideShoppingCart,;'
  'credit-card': LucideCreditCard,;'
  'dollar-sign': LucideDollarSign,;'
  percent: "LucidePercent",;"
  award: "LucideAward",;"
  activity: "LucideActivity",;"
  airplay: "LucideAirplay",;"
  'align-center': LucideAlignCenter,;'
  'align-justify': LucideAlignJustify,;'
  'align-left': LucideAlignLeft,;'
  'align-right': LucideAlignRight,;'
  anchor: "LucideAnchor",;"
  aperture: "LucideAperture",;"
  archive: "LucideArchive",;"
  'arrow-down-circle': LucideArrowDownCircle,;'
  'arrow-down-left': LucideArrowDownLeft,;'
  'arrow-down-right': LucideArrowDownRight,;'
  'arrow-left-circle': LucideArrowLeftCircle,;'
  'arrow-right': LucideArrowRight,;'
  'arrow-right-circle': LucideArrowRightCircle,;'
  'arrow-up-circle': LucideArrowUpCircle,;'
  'arrow-up-left': LucideArrowUpLeft,;'
  'arrow-up-right': LucideArrowUpRight,;'
  'at-sign': LucideAtSign,;'
  'bar-chart': LucideBarChart,;'
  'bar-chart-2': LucideBarChart2,;'
  'bar-chart-3': LucideBarChart3,;'
  'battery-charging': LucideBatteryCharging,;'
  battery: "LucideBattery",;"
  'bell-off': LucideBellOff,;'
  bluetooth: "LucideBluetooth",;"
  bold: "LucideBold",;"
  'book-open': LucideBookOpen,;'
  book: "LucideBook",;"
  bookmark: "LucideBookmark",;"
  box: "LucideBox",;"
  'camera-off': LucideCameraOff,;'
  camera: "LucideCamera",;"
  cast: "LucideCast",;"
  'check-circle': LucideCheckCircle,;'
  'check-square': LucideCheckSquare,;'
  'chevron-down-square': LucideChevronDownSquare,;'
  'chevron-left-square': LucideChevronLeftSquare,;'
  'chevron-right-square': LucideChevronRightSquare,;'
  'chevron-up-square': LucideChevronUpSquare,;'
  'chevrons-down': LucideChevronsDown,;'
  'chevrons-left': LucideChevronsLeft,;'
  'chevrons-right': LucideChevronsRight,;'
  'chevrons-up': LucideChevronsUp,;'
  chrome: "LucideChrome",;"
  circle: "LucideCircle",;"
  clipboard: "LucideClipboard",;"
  clock: "LucideClock",;"
  'cloud-drizzle': LucideCloudDrizzle,;'
  'cloud-lightning': LucideCloudLightning,;'
  'cloud-off': LucideCloudOff,;'
  'cloud-rain': LucideCloudRain,;'
  'cloud-snow': LucideCloudSnow,;'
  cloud: "LucideCloud",;"
  code: "LucideCode",;"
  codepen: "LucideCodepen",;"
  codesandbox: "LucideCodesandbox",;"
  coffee: "LucideCoffee",;"
  columns: "LucideColumns",;"
  command: "LucideCommand",;"
  compass: "LucideCompass",;"
  copyleft: "LucideCopyleft",;"
  copyright: "LucideCopyright",;"
  'corner-down-left': LucideCornerDownLeft,;'
  'corner-down-right': LucideCornerDownRight,;'
  'corner-left-down': LucideCornerLeftDown,;'
  'corner-left-up': LucideCornerLeftUp,;'
  'corner-right-down': LucideCornerRightDown,;'
  'corner-right-up': LucideCornerRightUp,;'
  'corner-up-left': LucideCornerUpLeft,;'
  'corner-up-right': LucideCornerUpRight,;'
  cpu: "LucideCpu",;"
  crop: "LucideCrop",;"
  crosshair: "LucideCrosshair",;"
  database: "LucideDatabase",;"
  delete: "LucideDelete",;"
  disc: "LucideDisc",;"
  'divide-circle': LucideDivideCircle,;'
  'divide-square': LucideDivideSquare,;'
  divide: "LucideDivide",;"
  download: "LucideDownload",;"
  dribbble: "LucideDribbble",;"
  droplet: "LucideDroplet",;"
  'edit-2': LucideEdit2,;'
  'edit-3': LucideEdit3,;'
  'eye-off': LucideEyeOff,;'
  eye: "LucideEye",;"
  facebook: "LucideFacebook",;"
  'fast-forward': LucideFastForward,;'
  feather: "LucideFeather",;"
  figma: "LucideFigma",;"
  'file-minus': LucideFileMinus,;'
  'file-plus': LucideFilePlus,;'
  file: "LucideFile",;"
  film: "LucideFilm",;"
  flag: "LucideFlag",;"
  'folder-minus': LucideFolderMinus,;'
  'folder-plus': LucideFolderPlus,;'
  folder: "LucideFolder",;"
  framer: "LucideFramer",;"
  frown: "LucideFrown",;"
  gift: "LucideGift",;"
  'git-branch': LucideGitBranch,;'
  'git-commit': LucideGitCommit,;'
  'git-merge': LucideGitMerge,;'
  'git-pull-request': LucideGitPullRequest,;'
  github: "LucideGithub",;"
  gitlab: "LucideGitlab",;"
  globe: "LucideGlobe",;"
  grid: "LucideGrid",;"
  'hard-drive': LucideHardDrive,;'
  hash: "LucideHash",;"
  headphones: "LucideHeadphones",;"
  heart: "LucideHeart",;"
  'help-circle': LucideHelpCircle,;'
  hexagon: "LucideHexagon",;"
  inbox: "LucideInbox",;"
  instagram: "LucideInstagram",;"
  italic: "LucideItalic",;"
  key: "LucideKey",;"
  layers: "LucideLayers",;"
  layout: "LucideLayout",;"
  'life-buoy': LucideLifeBuoy,;'
  'link-2': LucideLink2,;'
  linkedin: "LucideLinkedin",;"
  list: "LucideList",;"
  loader: "LucideLoader",;"
  'loader-2': LucideLoader2,;'
  'map-pin': LucideMapPin,;'
  map: "LucideMap",;"
  'maximize-2': LucideMaximize2,;'
  maximize: "LucideMaximize",;"
  meh: "LucideMeh",;"
  menu: "LucideMenu",;"
  'message-circle': LucideMessageCircle,;'
  'mic-off': LucideMicOff,;'
  mic: "LucideMic",;"
  'minimize-2': LucideMinimize2,;'
  minimize: "LucideMinimize",;"
  monitor: "LucideMonitor",;"
  moon: "LucideMoon",;"
  'more-horizontal': LucideMoreHorizontal,;'
  'more-vertical': LucideMoreVertical,;'
  'mouse-pointer': LucideMousePointer,;'
  move: "LucideMove",;"
  music: "LucideMusic",;"
  megaphone: "LucideMegaphone",;"
  'navigation-2': LucideNavigation2,;'
  navigation: "LucideNavigation",;"
  network: "LucideNetwork",;"
  octagon: "LucideOctagon",;"
  package: "LucidePackage",;"
  paperclip: "LucidePaperclip",;"
  'pause-circle': LucidePauseCircle,;'
  pause: "LucidePause",;"
  'pen-tool': LucidePenTool,;'
  'phone-call': LucidePhoneCall,;'
  'phone-forwarded': LucidePhoneForwarded,;'
  'phone-incoming': LucidePhoneIncoming,;'
  'phone-missed': LucidePhoneMissed,;'
  'phone-off': LucidePhoneOff,;'
  'phone-outgoing': LucidePhoneOutgoing,;'
  phone: "LucidePhone",;"
  'pie-chart': LucidePieChart,;'
  'play-circle': LucidePlayCircle,;'
  play: "LucidePlay",;"
  pocket: "LucidePocket",;"
  power: "LucidePower",;"
  'power-off': LucidePowerOff,;'
  printer: "LucidePrinter",;"
  radio: "LucideRadio",;"
  'refresh-ccw': LucideRefreshCcw,;'
  'refresh-cw': LucideRefreshCw,;'
  repeat: "LucideRepeat",;"
  rewind: "LucideRewind",;"
  'rotate-ccw': LucideRotateCcw,;'
  'rotate-cw': LucideRotateCw,;'
  recycle: "LucideRecycle",;"
  rss: "LucideRss",;"
  save: "LucideSave",;"
  scissors: "LucideScissors",;"
  'screen-share': LucideScreenShare,;'
  'screen-share-off': LucideScreenShareOff,;'
  send: "LucideSend",;"
  share2: "LucideShare2",;"
  share: "LucideShare",;"
  'shield-off': LucideShieldOff,;'
  shield: "LucideShield",;"
  'shopping-bag': LucideShoppingBag,;'
  shuffle: "LucideShuffle",;"
  sidebar: "LucideSidebar",;"
  'skip-back': LucideSkipBack,;'
  'skip-forward': LucideSkipForward,;'
  slack: "LucideSlack",;"
  slash: "LucideSlash",;"
  sliders: "LucideSliders",;"
  smartphone: "LucideSmartphone",;"
  smile: "LucideSmile",;"
  speaker: "LucideSpeaker",;"
  square: "LucideSquare",;"
  star: "LucideStar",;"
  'stop-circle': LucideStopCircle,;'
  sun: "LucideSun",;"
  sunrise: "LucideSunrise",;"
  sunset: "LucideSunset",;"
  table: "LucideTable",;"
  tablet: "LucideTablet",;"
  tag: "LucideTag",;"
  target: "LucideTarget",;"
  terminal: "LucideTerminal",;"
  'thumbs-down': LucideThumbsDown,;'
  'thumbs-up': LucideThumbsUp,;'
  'toggle-left': LucideToggleLeft,;'
  'toggle-right': LucideToggleRight,;'
  'trash-2': LucideTrash2,;'
  trello: "LucideTrello",;"
  'trending-down': LucideTrendingDown,;'
  'trending-up': LucideTrendingUp,;'
  triangle: "LucideTriangle",;"
  truck: "LucideTruck",;"
  tv: "LucideTv",;"
  twitch: "LucideTwitch",;"
  twitter: "LucideTwitter",;"
  type: "LucideType",;"
  umbrella: "LucideUmbrella",;"
  underline: "LucideUnderline",;"
  unlock: "LucideUnlock",;"
  upload: "LucideUpload",;"
  'user-check': LucideUserCheck,;'
  'user-minus': LucideUserMinus,;'
  'user-plus': LucideUserPlus,;'
  'user-x': LucideUserX,;'
  'video-off': LucideVideoOff,;'
  video: "LucideVideo",;"
  voicemail: "LucideVoicemail",;"
  wallet: "LucideWallet",;"
  'volume-1': LucideVolume1,;'
  'volume-2': LucideVolume2,;'
  'volume-x': LucideVolumeX,;'
  volume: "LucideVolume",;"
  watch: "LucideWatch",;"
  'wifi-off': LucideWifiOff,;'
  wifi: "LucideWifi",;"
  wind: "LucideWind",;"
  'x-circle': LucideXCircle,;'
  'x-octagon': LucideXOctagon,;'
  'x-square': LucideXSquare,;'
  youtube: "LucideYoutube",;"
  'zap-off': LucideZapOff,;'
  zap: "LucideZap",;"
  'zoom-in': LucideZoomIn,;'
  'zoom-out': LucideZoomOut,;
};
;
export const Icon: unknown React.FC<IconProps> = ({;
  name,;
  size = 24, // Default size;
  className,;
  ...props;
}) => {;
  const LucideIconComponent: unknown unknown = iconMap[name];
;
  if (!LucideIconComponent) {;'
    logWarn(`Icon "${name}" not found.`);
    return null;
  };
;
  // Render the dynamically selected Lucide icon component;
  return <LucideIconComponent size={size} className={className} {...props} />;
};
;
export default Icon; // Default export the Icon component;
export const _Icons: unknown unknown = iconMap; // Export the map if you need to refer to available icons;
"