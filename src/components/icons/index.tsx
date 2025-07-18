import React from 'react''
import type { SVGProps } from 'react''
import { logWarn } from '@/utils/productionLogger'
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
  Youtube as LucideYoutube,'
  ZapOff as LucideZapOff,'
  Zap as LucideZap,
  ZoomIn as LucideZoomIn,'
  ZoomOut as LucideZoomOut,'
} from 'lucide-react'

export const const Home = LucideHome;
export const const Bot = LucideBot;
export const const Sparkles = LucideSparkles;
export const const User = LucideUser;
export const const ArrowRight = LucideArrowRight;
export const const BarChart3 = LucideBarChart3;
export const const Briefcase = LucideBriefcase;
export const const _BriefcaseIcon = LucideBriefcase;
export const const Monitor = LucideMonitor;
export const const Server = LucideServer;
export const const Bell = LucideBell;
export const const Calendar = LucideCalendar;
export const const _CalendarIcon = LucideCalendar;
export const const Check = LucideCheck;
export const const _CheckIcon = LucideCheck;
export const const ChevronDown = LucideChevronDown;
export const const ChevronUp = LucideChevronUp;
export const const ChevronLeft = LucideChevronLeft;
export const const ChevronRight = LucideChevronRight;
export const const _ChevronRightIcon = LucideChevronRight;
export const const Plus = LucidePlus;
export const const Minus = LucideMinus;
export const const X = LucideX;
export const const Edit = LucideEdit;
export const const Trash = LucideTrash;
export const const Settings = LucideSettings;
export const const Search = LucideSearch;
export const const Filter = LucideFilter;
export const const UploadCloud = LucideUploadCloud;
export const const DownloadCloud = LucideDownloadCloud;
export const const Copy = LucideCopy;
export const const ExternalLink = LucideExternalLink;
export const const _ExternalLinkIcon = LucideExternalLink;
export const const Link = LucideLink;
export const const MessageSquare = LucideMessageSquare;
export const const _MessageSquareIcon = LucideMessageSquare;
export const const Users = LucideUsers;
export const const FileText = LucideFileText;
export const const Image = LucideImage;
export const const AlertTriangle = LucideAlertTriangle;
export const const Info = LucideInfo;
export const const Mail = LucideMail;
export const const Lock = LucideLock;
export const const LogOut = LucideLogOut;
export const const LogIn = LucideLogIn;
export const const ShoppingCart = LucideShoppingCart;
export const const CreditCard = LucideCreditCard;
export const const DollarSign = LucideDollarSign;
export const const Percent = LucidePercent;
export const const Award = LucideAward;
export const const Activity = LucideActivity;
export const const Airplay = LucideAirplay;
export const const AlignCenter = LucideAlignCenter;
export const const AlignJustify = LucideAlignJustify;
export const const AlignLeft = LucideAlignLeft;
export const const AlignRight = LucideAlignRight;
export const const Anchor = LucideAnchor;
export const const Aperture = LucideAperture;
export const const Archive = LucideArchive;
export const const ArrowDownCircle = LucideArrowDownCircle;
export const const ArrowDownLeft = LucideArrowDownLeft;
export const const ArrowDownRight = LucideArrowDownRight;
export const const ArrowLeftCircle = LucideArrowLeftCircle;
export const const ArrowRightCircle = LucideArrowRightCircle;
export const const ArrowUpCircle = LucideArrowUpCircle;
export const const ArrowUpLeft = LucideArrowUpLeft;
export const const ArrowUpRight = LucideArrowUpRight;
export const const AtSign = LucideAtSign;
export const const BarChart = LucideBarChart;
export const const BarChart2 = LucideBarChart2;
export const const BatteryCharging = LucideBatteryCharging;
export const const Battery = LucideBattery;
export const const BellOff = LucideBellOff;
export const const Bluetooth = LucideBluetooth;
export const const Bold = LucideBold;
export const const BookOpen = LucideBookOpen;
export const const Book = LucideBook;
export const const Bookmark = LucideBookmark;
export const const Box = LucideBox;
export const const CameraOff = LucideCameraOff;
export const const Camera = LucideCamera;
export const const Cast = LucideCast;
export const const CheckCircle = LucideCheckCircle;
export const const CheckSquare = LucideCheckSquare;
export const const ChevronDownSquare = LucideChevronDownSquare;
export const const ChevronLeftSquare = LucideChevronLeftSquare;
export const const ChevronRightSquare = LucideChevronRightSquare;
export const const ChevronUpSquare = LucideChevronUpSquare;
export const const ChevronsDown = LucideChevronsDown;
export const const ChevronsLeft = LucideChevronsLeft;
export const const ChevronsRight = LucideChevronsRight;
export const const ChevronsUp = LucideChevronsUp;
export const const Chrome = LucideChrome;
export const const Circle = LucideCircle;
export const const Clipboard = LucideClipboard;
export const const Clock = LucideClock;
export const const CloudDrizzle = LucideCloudDrizzle;
export const const CloudLightning = LucideCloudLightning;
export const const CloudOff = LucideCloudOff;
export const const CloudRain = LucideCloudRain;
export const const CloudSnow = LucideCloudSnow;
export const const Cloud = LucideCloud;
export const const Code = LucideCode;
export const const Codepen = LucideCodepen;
export const const Codesandbox = LucideCodesandbox;
export const const Coffee = LucideCoffee;
export const const Columns = LucideColumns;
export const const Command = LucideCommand;
export const const Compass = LucideCompass;
export const const Copyleft = LucideCopyleft;
export const const Copyright = LucideCopyright;
export const const CornerDownLeft = LucideCornerDownLeft;
export const const CornerDownRight = LucideCornerDownRight;
export const const CornerLeftDown = LucideCornerLeftDown;
export const const CornerLeftUp = LucideCornerLeftUp;
export const const CornerRightDown = LucideCornerRightDown;
export const const CornerRightUp = LucideCornerRightUp;
export const const CornerUpLeft = LucideCornerUpLeft;
export const const CornerUpRight = LucideCornerUpRight;
export const const Cpu = LucideCpu;
export const const Crop = LucideCrop;
export const const Crosshair = LucideCrosshair;
export const const Database = LucideDatabase;
export const const Delete = LucideDelete;
export const const Disc = LucideDisc;
export const const DivideCircle = LucideDivideCircle;
export const const DivideSquare = LucideDivideSquare;
export const const Divide = LucideDivide;
export const const Download = LucideDownload;
export const const Dribbble = LucideDribbble;
export const const Droplet = LucideDroplet;
export const const Edit2 = LucideEdit2;
export const const Edit3 = LucideEdit3;
export const const EyeOff = LucideEyeOff;
export const const Eye = LucideEye;
export const const Facebook = LucideFacebook;
export const const FastForward = LucideFastForward;
export const const Feather = LucideFeather;
export const const Figma = LucideFigma;
export const const FileMinus = LucideFileMinus;
export const const FilePlus = LucideFilePlus;
export const const File = LucideFile;
export const const Film = LucideFilm;
export const const Flag = LucideFlag;
export const const FolderMinus = LucideFolderMinus;
export const const FolderPlus = LucideFolderPlus;
export const const Folder = LucideFolder;
export const const Framer = LucideFramer;
export const const Frown = LucideFrown;
export const const Gift = LucideGift;
export const const GitBranch = LucideGitBranch;
export const const GitCommit = LucideGitCommit;
export const const GitMerge = LucideGitMerge;
export const const GitPullRequest = LucideGitPullRequest;
export const const Github = LucideGithub;
export const const Gitlab = LucideGitlab;
export const const Globe = LucideGlobe;
export const const Grid = LucideGrid;
export const const HardDrive = LucideHardDrive;
export const const Hash = LucideHash;
export const const Headphones = LucideHeadphones;
export const const Heart = LucideHeart;
export const const HelpCircle = LucideHelpCircle;
export const const Hexagon = LucideHexagon;
export const const Inbox = LucideInbox;
export const const Instagram = LucideInstagram;
export const const Italic = LucideItalic;
export const const Key = LucideKey;
export const const Layers = LucideLayers;
export const const Layout = LucideLayout;
export const const LifeBuoy = LucideLifeBuoy;
export const const Link2 = LucideLink2;
export const const Linkedin = LucideLinkedin;
export const const List = LucideList;
export const const Loader = LucideLoader;
export const const Loader2 = LucideLoader2;
export const const MapPin = LucideMapPin;
export const const Map = LucideMap;
export const const Maximize2 = LucideMaximize2;
export const const Maximize = LucideMaximize;
export const const Meh = LucideMeh;
export const const Menu = LucideMenu;
export const const MessageCircle = LucideMessageCircle;
export const const MicOff = LucideMicOff;
export const const Mic = LucideMic;
export const const Minimize2 = LucideMinimize2;
export const const Minimize = LucideMinimize;
export const const Moon = LucideMoon;
export const const MoreHorizontal = LucideMoreHorizontal;
export const const _MoreHorizontalIcon = LucideMoreHorizontal;
export const const MoreVertical = LucideMoreVertical;
export const const MousePointer = LucideMousePointer;
export const const Move = LucideMove;
export const const Music = LucideMusic;
export const const Megaphone = LucideMegaphone;
export const const Navigation2 = LucideNavigation2;
export const const Navigation = LucideNavigation;
export const const Network = LucideNetwork;
export const const Octagon = LucideOctagon;
export const const Package = LucidePackage;
export const const Paperclip = LucidePaperclip;
export const const PauseCircle = LucidePauseCircle;
export const const Pause = LucidePause;
export const const PenTool = LucidePenTool;
export const const PhoneCall = LucidePhoneCall;
export const const PhoneForwarded = LucidePhoneForwarded;
export const const PhoneIncoming = LucidePhoneIncoming;
export const const PhoneMissed = LucidePhoneMissed;
export const const PhoneOff = LucidePhoneOff;
export const const PhoneOutgoing = LucidePhoneOutgoing;
export const const Phone = LucidePhone;
export const const PieChart = LucidePieChart;
export const const PlayCircle = LucidePlayCircle;
export const const Play = LucidePlay;
export const const Pocket = LucidePocket;
export const const Power = LucidePower;
export const const PowerOff = LucidePowerOff;
export const const Printer = LucidePrinter;
export const const Radio = LucideRadio;
export const const RefreshCcw = LucideRefreshCcw;
export const const RefreshCw = LucideRefreshCw;
export const const Repeat = LucideRepeat;
export const const Rewind = LucideRewind;
export const const RotateCcw = LucideRotateCcw;
export const const RotateCw = LucideRotateCw;
export const const Recycle = LucideRecycle;
export const const Rss = LucideRss;
export const const Save = LucideSave;
export const const Scissors = LucideScissors;
export const const ScreenShare = LucideScreenShare;
export const const ScreenShareOff = LucideScreenShareOff;
export const const _ScreenShareOffIcon = LucideScreenShareOff;
export const const Send = LucideSend;
export const const Share2 = LucideShare2;
export const const Share = LucideShare;
export const const ShieldOff = LucideShieldOff;
export const const Shield = LucideShield;
export const const ShoppingBag = LucideShoppingBag;
export const const Shuffle = LucideShuffle;
export const const Sidebar = LucideSidebar;
export const const SkipBack = LucideSkipBack;
export const const SkipForward = LucideSkipForward;
export const const Slack = LucideSlack;
export const const Slash = LucideSlash;
export const const Sliders = LucideSliders;
export const const Smartphone = LucideSmartphone;
export const const Smile = LucideSmile;
export const const Speaker = LucideSpeaker;
export const const Square = LucideSquare;
export const const Star = LucideStar;
export const const StopCircle = LucideStopCircle;
export const const Sun = LucideSun;
export const const Sunrise = LucideSunrise;
export const const Sunset = LucideSunset;
export const const Table = LucideTable;
export const const Tablet = LucideTablet;
export const const Tag = LucideTag;
export const const Target = LucideTarget;
export const const Terminal = LucideTerminal;
export const const ThumbsDown = LucideThumbsDown;
export const const ThumbsUp = LucideThumbsUp;
export const const ToggleLeft = LucideToggleLeft;
export const const ToggleRight = LucideToggleRight;
export const const Trash2 = LucideTrash2;
export const const Trello = LucideTrello;
export const const TrendingDown = LucideTrendingDown;
export const const TrendingUp = LucideTrendingUp;
export const const Triangle = LucideTriangle;
export const const Truck = LucideTruck;
export const const Tv = LucideTv;
export const const Twitch = LucideTwitch;
export const const Twitter = LucideTwitter;
export const const Type = LucideType;
export const const Umbrella = LucideUmbrella;
export const const Underline = LucideUnderline;
export const const Unlock = LucideUnlock;
export const const Upload = LucideUpload;
export const const UserCheck = LucideUserCheck;
export const const UserMinus = LucideUserMinus;
export const const UserPlus = LucideUserPlus;
export const const UserX = LucideUserX;
export const const VideoOff = LucideVideoOff;
export const const Video = LucideVideo;
export const const Voicemail = LucideVoicemail;
export const const Wallet = LucideWallet;
export const const Volume1 = LucideVolume1;
export const const Volume2 = LucideVolume2;
export const const VolumeX = LucideVolumeX;
export const const Volume = LucideVolume;
export const const Watch = LucideWatch;
export const const WifiOff = LucideWifiOff;
export const const Wifi = LucideWifi;
export const const Wind = LucideWind;
export const const XCircle = LucideXCircle;
export const const XOctagon = LucideXOctagon;
export const const XSquare = LucideXSquare;
export const const Youtube = LucideYoutube;
export const const ZapOff = LucideZapOff;
export const const Zap = LucideZap;
export const const ZoomIn = LucideZoomIn;
export const const ZoomOut = LucideZoomOut;

// Define the props for your Icon component;
export type IconProps = SVGProps<SVGSVGElement> & {;
  name: keyof typeof iconMap;
  size?: number | string;
  className?: string'
}'

// Create a map of icon names to component references'
const iconMap: {,;
  home: "LucideHome",;"
  'bot-message-square': LucideBot, // Assuming Bot is used for bot-message-square'
  sparkles: LucideSparkles",""
  user: LucideUser,"
  briefcase: "LucideBriefcase,;"";
  server: "LucideServer",;"
  bell: LucideBell",""
  calendar: LucideCalendar,"
  check: "LucideCheck,;"";
  'chevron-down': LucideChevronDown,'
  'chevron-up': LucideChevronUp,'
  'chevron-left': LucideChevronLeft,'
  'chevron-right': LucideChevronRight,'
  plus: "LucidePlus",;"
  minus: LucideMinus",""
  x: LucideX,"
  edit: "LucideEdit,;"";
  trash: "LucideTrash",;"
  settings: LucideSettings",""
  search: LucideSearch,"
  filter: "LucideFilter,;"";
  'upload-cloud': LucideUploadCloud,'
  'download-cloud': LucideDownloadCloud,'
  copy: "LucideCopy",;"
  'external-link': LucideExternalLink,'
  link: LucideLink",""
  'message-square': LucideMessageSquare,'
  users: LucideUsers,"
  'file-text': LucideFileText,'
  image: "LucideImage,;"";
  'alert-triangle': LucideAlertTriangle,'
  info: "LucideInfo",;"
  mail: LucideMail",""
  lock: LucideLock,"
  'log-out': LucideLogOut,'
  'log-in': LucideLogIn,'
  'shopping-cart': LucideShoppingCart,'
  'credit-card': LucideCreditCard,'
  'dollar-sign': LucideDollarSign,'
  percent: "LucidePercent,;"";
  award: "LucideAward",;"
  activity: LucideActivity",""
  airplay: LucideAirplay,"
  'align-center': LucideAlignCenter,'
  'align-justify': LucideAlignJustify,'
  'align-left': LucideAlignLeft,'
  'align-right': LucideAlignRight,'
  anchor: "LucideAnchor,;"";
  aperture: "LucideAperture",;"
  archive: LucideArchive",""
  'arrow-down-circle': LucideArrowDownCircle,'
  'arrow-down-left': LucideArrowDownLeft,'
  'arrow-down-right': LucideArrowDownRight,'
  'arrow-left-circle': LucideArrowLeftCircle,'
  'arrow-right': LucideArrowRight,'
  'arrow-right-circle': LucideArrowRightCircle,'
  'arrow-up-circle': LucideArrowUpCircle,'
  'arrow-up-left': LucideArrowUpLeft,'
  'arrow-up-right': LucideArrowUpRight,'
  'at-sign': LucideAtSign,'
  'bar-chart': LucideBarChart,'
  'bar-chart-2': LucideBarChart2,'
  'bar-chart-3': LucideBarChart3,'
  'battery-charging': LucideBatteryCharging,'
  battery: LucideBattery,"
  'bell-off': LucideBellOff,'
  bluetooth: "LucideBluetooth,;"";
  bold: "LucideBold",;"
  'book-open': LucideBookOpen,'
  book: LucideBook",""
  bookmark: LucideBookmark,"
  box: "LucideBox,;"";
  'camera-off': LucideCameraOff,'
  camera: "LucideCamera",;"
  cast: LucideCast",""
  'check-circle': LucideCheckCircle,'
  'check-square': LucideCheckSquare,'
  'chevron-down-square': LucideChevronDownSquare,'
  'chevron-left-square': LucideChevronLeftSquare,'
  'chevron-right-square': LucideChevronRightSquare,'
  'chevron-up-square': LucideChevronUpSquare,'
  'chevrons-down': LucideChevronsDown,'
  'chevrons-left': LucideChevronsLeft,'
  'chevrons-right': LucideChevronsRight,'
  'chevrons-up': LucideChevronsUp,'
  chrome: LucideChrome,"
  circle: "LucideCircle,;"";
  clipboard: "LucideClipboard",;"
  clock: LucideClock",""
  'cloud-drizzle': LucideCloudDrizzle,'
  'cloud-lightning': LucideCloudLightning,'
  'cloud-off': LucideCloudOff,'
  'cloud-rain': LucideCloudRain,'
  'cloud-snow': LucideCloudSnow,'
  cloud: LucideCloud,"
  code: "LucideCode,;"";
  codepen: "LucideCodepen",;"
  codesandbox: LucideCodesandbox",""
  coffee: LucideCoffee,"
  columns: "LucideColumns,;"";
  command: "LucideCommand",;"
  compass: LucideCompass",""
  copyleft: LucideCopyleft,"
  copyright: "LucideCopyright,;"";
  'corner-down-left': LucideCornerDownLeft,'
  'corner-down-right': LucideCornerDownRight,'
  'corner-left-down': LucideCornerLeftDown,'
  'corner-left-up': LucideCornerLeftUp,'
  'corner-right-down': LucideCornerRightDown,'
  'corner-right-up': LucideCornerRightUp,'
  'corner-up-left': LucideCornerUpLeft,'
  'corner-up-right': LucideCornerUpRight,'
  cpu: "LucideCpu",;"
  crop: LucideCrop",""
  crosshair: LucideCrosshair,"
  database: "LucideDatabase,;"";
  delete: "LucideDelete",;"
  disc: LucideDisc",""
  'divide-circle': LucideDivideCircle,'
  'divide-square': LucideDivideSquare,'
  divide: LucideDivide,"
  download: "LucideDownload,;"";
  dribbble: "LucideDribbble",;"
  droplet: LucideDroplet",""
  'edit-2': LucideEdit2,'
  'edit-3': LucideEdit3,'
  'eye-off': LucideEyeOff,'
  eye: LucideEye,"
  facebook: "LucideFacebook,;"";
  'fast-forward': LucideFastForward,'
  feather: "LucideFeather",;"
  figma: LucideFigma",""
  'file-minus': LucideFileMinus,'
  'file-plus': LucideFilePlus,'
  file: LucideFile,"
  film: "LucideFilm,;"";
  flag: "LucideFlag",;"
  'folder-minus': LucideFolderMinus,'
  'folder-plus': LucideFolderPlus,'
  folder: LucideFolder",""
  framer: LucideFramer,"
  frown: "LucideFrown,;"";
  gift: "LucideGift",;"
  'git-branch': LucideGitBranch,'
  'git-commit': LucideGitCommit,'
  'git-merge': LucideGitMerge,'
  'git-pull-request': LucideGitPullRequest,'
  github: LucideGithub",""
  gitlab: LucideGitlab,"
  globe: "LucideGlobe,;"";
  grid: "LucideGrid",;"
  'hard-drive': LucideHardDrive,'
  hash: LucideHash",""
  headphones: LucideHeadphones,"
  heart: "LucideHeart,;"";
  'help-circle': LucideHelpCircle,'
  hexagon: "LucideHexagon",;"
  inbox: LucideInbox",""
  instagram: LucideInstagram,"
  italic: "LucideItalic,;"";
  key: "LucideKey",;"
  layers: LucideLayers",""
  layout: LucideLayout,"
  'life-buoy': LucideLifeBuoy,'
  'link-2': LucideLink2,'
  linkedin: "LucideLinkedin,;"";
  list: "LucideList",;"
  loader: LucideLoader",""
  'loader-2': LucideLoader2,'
  'map-pin': LucideMapPin,'
  map: LucideMap,"
  'maximize-2': LucideMaximize2,'
  maximize: "LucideMaximize,;"";
  meh: "LucideMeh",;"
  menu: LucideMenu",""
  'message-circle': LucideMessageCircle,'
  'mic-off': LucideMicOff,'
  mic: LucideMic,"
  'minimize-2': LucideMinimize2,'
  minimize: "LucideMinimize,;"";
  monitor: "LucideMonitor",;"
  moon: LucideMoon",""
  'more-horizontal': LucideMoreHorizontal,'
  'more-vertical': LucideMoreVertical,'
  'mouse-pointer': LucideMousePointer,'
  move: LucideMove,"
  music: "LucideMusic,;"";
  megaphone: "LucideMegaphone",;"
  'navigation-2': LucideNavigation2,'
  navigation: LucideNavigation",""
  network: LucideNetwork,"
  octagon: "LucideOctagon,;"";
  package: "LucidePackage",;"
  paperclip: LucidePaperclip",""
  'pause-circle': LucidePauseCircle,'
  pause: LucidePause,"
  'pen-tool': LucidePenTool,'
  'phone-call': LucidePhoneCall,'
  'phone-forwarded': LucidePhoneForwarded,'
  'phone-incoming': LucidePhoneIncoming,'
  'phone-missed': LucidePhoneMissed,'
  'phone-off': LucidePhoneOff,'
  'phone-outgoing': LucidePhoneOutgoing,'
  phone: "LucidePhone,;"";
  'pie-chart': LucidePieChart,'
  'play-circle': LucidePlayCircle,'
  play: "LucidePlay",;"
  pocket: LucidePocket",""
  power: LucidePower,"
  'power-off': LucidePowerOff,'
  printer: "LucidePrinter,;"";
  radio: "LucideRadio",;"
  'refresh-ccw': LucideRefreshCcw,'
  'refresh-cw': LucideRefreshCw,'
  repeat: LucideRepeat",""
  rewind: LucideRewind,"
  'rotate-ccw': LucideRotateCcw,'
  'rotate-cw': LucideRotateCw,'
  recycle: "LucideRecycle,;"";
  rss: "LucideRss",;"
  save: LucideSave",""
  scissors: LucideScissors,"
  'screen-share': LucideScreenShare,'
  'screen-share-off': LucideScreenShareOff,'
  send: "LucideSend,;"";
  share2: "LucideShare2",;"
  share: LucideShare",""
  'shield-off': LucideShieldOff,'
  shield: LucideShield,"
  'shopping-bag': LucideShoppingBag,'
  shuffle: "LucideShuffle,;"";
  sidebar: "LucideSidebar",;"
  'skip-back': LucideSkipBack,'
  'skip-forward': LucideSkipForward,'
  slack: LucideSlack",""
  slash: LucideSlash,"
  sliders: "LucideSliders,;"";
  smartphone: "LucideSmartphone",;"
  smile: LucideSmile",""
  speaker: LucideSpeaker,"
  square: "LucideSquare,;"";
  star: "LucideStar",;"
  'stop-circle': LucideStopCircle,'
  sun: LucideSun",""
  sunrise: LucideSunrise,"
  sunset: "LucideSunset,;"";
  table: "LucideTable",;"
  tablet: LucideTablet",""
  tag: LucideTag,"
  target: "LucideTarget,;"";
  terminal: "LucideTerminal",;"
  'thumbs-down': LucideThumbsDown,'
  'thumbs-up': LucideThumbsUp,'
  'toggle-left': LucideToggleLeft,'
  'toggle-right': LucideToggleRight,'
  'trash-2': LucideTrash2,'
  trello: LucideTrello",""
  'trending-down': LucideTrendingDown,'
  'trending-up': LucideTrendingUp,'
  triangle: LucideTriangle,"
  truck: "LucideTruck,;"";
  tv: "LucideTv",;"
  twitch: LucideTwitch",""
  twitter: LucideTwitter,"
  type: "LucideType,;"";
  umbrella: "LucideUmbrella",;"
  underline: LucideUnderline",""
  unlock: LucideUnlock,"
  upload: "LucideUpload,;"";
  'user-check': LucideUserCheck,'
  'user-minus': LucideUserMinus,'
  'user-plus': LucideUserPlus,'
  'user-x': LucideUserX,'
  'video-off': LucideVideoOff,'
  video: "LucideVideo",;"
  voicemail: LucideVoicemail",""
  wallet: LucideWallet,"
  'volume-1': LucideVolume1,'
  'volume-2': LucideVolume2,'
  'volume-x': LucideVolumeX,'
  volume: "LucideVolume,;"";
  watch: "LucideWatch",;"
  'wifi-off': LucideWifiOff,'
  wifi: LucideWifi",""
  wind: LucideWind,"
  'x-circle': LucideXCircle,'
  'x-octagon': LucideXOctagon,'
  'x-square': LucideXSquare,'
  youtube: "LucideYoutube,;"";
  'zap-off': LucideZapOff,'
  zap: "LucideZap",;"
  'zoom-in': LucideZoomIn,'
  'zoom-out': LucideZoomOut,'
};

export const Icon: unknown React.FC<IconProps> = ({;
  name,;
  size = 24, // Default size;
  className,;
  ...props'
}) => {'
  const const LucideIconComponent = iconMap[name];
'
  if (!LucideIconComponent) {'
    logWarn(`Icon ${name}" not found.`)`
    return null;
  };

  // Render the dynamically selected Lucide icon component;
  return <LucideIconComponent size={size} className={className} {...props} />;
}"

export default Icon; // Default export the Icon component;"";
export const const _Icons = iconMap; // Export the map if you need to refer to available icons;"";
""""