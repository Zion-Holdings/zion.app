import React, { SVGProps } from 'react';
import { logWarn } from '@/utils/productionLogger';
import { Home as LucideHome, Bot as LucideBot, Sparkles as LucideSparkles, User as LucideUser, ArrowRight as LucideArrowRight, BarChart3 as LucideBarChart3, Briefcase as LucideBriefcase, Monitor as LucideMonitor, Server as LucideServer, Bell as LucideBell, Calendar as LucideCalendar, Check as LucideCheck, ChevronDown as LucideChevronDown, ChevronUp as LucideChevronUp, ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight, Plus as LucidePlus, Minus as LucideMinus, X as LucideX, Edit as LucideEdit, Trash as LucideTrash, Settings as LucideSettings, Search as LucideSearch, Filter as LucideFilter, UploadCloud as LucideUploadCloud, DownloadCloud as LucideDownloadCloud, Copy as LucideCopy, ExternalLink as LucideExternalLink, Link as LucideLink, MessageSquare as LucideMessageSquare, Users as LucideUsers, FileText as LucideFileText, Image as LucideImage, AlertTriangle as LucideAlertTriangle, Info as LucideInfo, Mail as LucideMail, Lock as LucideLock, LogOut as LucideLogOut, LogIn as LucideLogIn, ShoppingCart as LucideShoppingCart, CreditCard as LucideCreditCard, DollarSign as LucideDollarSign, Percent as LucidePercent, Award as LucideAward, Activity as LucideActivity, Airplay as LucideAirplay, AlignCenter as LucideAlignCenter, AlignJustify as LucideAlignJustify, AlignLeft as LucideAlignLeft, AlignRight as LucideAlignRight, Anchor as LucideAnchor, Aperture as LucideAperture, Archive as LucideArchive, ArrowDownCircle as LucideArrowDownCircle, ArrowDownLeft as LucideArrowDownLeft, ArrowDownRight as LucideArrowDownRight, ArrowLeftCircle as LucideArrowLeftCircle, ArrowRightCircle as LucideArrowRightCircle, ArrowUpCircle as LucideArrowUpCircle, ArrowUpLeft as LucideArrowUpLeft, ArrowUpRight as LucideArrowUpRight, AtSign as LucideAtSign, BarChart as LucideBarChart, BarChart2 as LucideBarChart2, BatteryCharging as LucideBatteryCharging, Battery as LucideBattery, BellOff as LucideBellOff, Bluetooth as LucideBluetooth, Bold as LucideBold, BookOpen as LucideBookOpen, Book as LucideBook, Bookmark as LucideBookmark, Box as LucideBox, CameraOff as LucideCameraOff, Camera as LucideCamera, Cast as LucideCast, CheckCircle as LucideCheckCircle, CheckSquare as LucideCheckSquare, ChevronDownSquare as LucideChevronDownSquare, ChevronLeftSquare as LucideChevronLeftSquare, ChevronRightSquare as LucideChevronRightSquare, ChevronUpSquare as LucideChevronUpSquare, ChevronsDown as LucideChevronsDown, ChevronsLeft as LucideChevronsLeft, ChevronsRight as LucideChevronsRight, ChevronsUp as LucideChevronsUp, Chrome as LucideChrome, Circle as LucideCircle, Clipboard as LucideClipboard, Clock as LucideClock, CloudDrizzle as LucideCloudDrizzle, CloudLightning as LucideCloudLightning, CloudOff as LucideCloudOff, CloudRain as LucideCloudRain, CloudSnow as LucideCloudSnow, Cloud as LucideCloud, Code as LucideCode, Codepen as LucideCodepen, Codesandbox as LucideCodesandbox, Coffee as LucideCoffee, Columns as LucideColumns, Command as LucideCommand, Compass as LucideCompass, Copyleft as LucideCopyleft, Copyright as LucideCopyright, CornerDownLeft as LucideCornerDownLeft, CornerDownRight as LucideCornerDownRight, CornerLeftDown as LucideCornerLeftDown, CornerLeftUp as LucideCornerLeftUp, CornerRightDown as LucideCornerRightDown, CornerRightUp as LucideCornerRightUp, CornerUpLeft as LucideCornerUpLeft, CornerUpRight as LucideCornerUpRight, Cpu as LucideCpu, Crop as LucideCrop, Crosshair as LucideCrosshair, Database as LucideDatabase, Delete as LucideDelete, Disc as LucideDisc, DivideCircle as LucideDivideCircle, DivideSquare as LucideDivideSquare, Divide as LucideDivide, Download as LucideDownload, Dribbble as LucideDribbble, Droplet as LucideDroplet, Edit2 as LucideEdit2, Edit3 as LucideEdit3, EyeOff as LucideEyeOff, Eye as LucideEye, Facebook as LucideFacebook, FastForward as LucideFastForward, Feather as LucideFeather, Figma as LucideFigma, FileMinus as LucideFileMinus, FilePlus as LucideFilePlus, File as LucideFile, Film as LucideFilm, Flag as LucideFlag, FolderMinus as LucideFolderMinus, FolderPlus as LucideFolderPlus, Folder as LucideFolder, Framer as LucideFramer, Frown as LucideFrown, Gift as LucideGift, GitBranch as LucideGitBranch, GitCommit as LucideGitCommit, GitMerge as LucideGitMerge, GitPullRequest as LucideGitPullRequest, Github as LucideGithub, Gitlab as LucideGitlab, Globe as LucideGlobe, Grid as LucideGrid, HardDrive as LucideHardDrive, Hash as LucideHash, Headphones as LucideHeadphones, Heart as LucideHeart, HelpCircle as LucideHelpCircle, Hexagon as LucideHexagon, Inbox as LucideInbox, Instagram as LucideInstagram, Italic as LucideItalic, Key as LucideKey, Layers as LucideLayers, Layout as LucideLayout, LifeBuoy as LucideLifeBuoy, Link2 as LucideLink2, Linkedin as LucideLinkedin, List as LucideList, Loader as LucideLoader, Loader2 as LucideLoader2, MapPin as LucideMapPin, Map as LucideMap, Maximize2 as LucideMaximize2, Maximize as LucideMaximize, Meh as LucideMeh, Menu as LucideMenu, MessageCircle as LucideMessageCircle, MicOff as LucideMicOff, Mic as LucideMic, Minimize2 as LucideMinimize2, Minimize as LucideMinimize, Moon as LucideMoon, MoreHorizontal as LucideMoreHorizontal, MoreVertical as LucideMoreVertical, MousePointer as LucideMousePointer, Move as LucideMove, Music as LucideMusic, Megaphone as LucideMegaphone, Navigation2 as LucideNavigation2, Navigation as LucideNavigation, Network as LucideNetwork, Octagon as LucideOctagon, Package as LucidePackage, Paperclip as LucidePaperclip, PauseCircle as LucidePauseCircle, Pause as LucidePause, PenTool as LucidePenTool, PhoneCall as LucidePhoneCall, PhoneForwarded as LucidePhoneForwarded, PhoneIncoming as LucidePhoneIncoming, PhoneMissed as LucidePhoneMissed, PhoneOff as LucidePhoneOff, PhoneOutgoing as LucidePhoneOutgoing, Phone as LucidePhone, PieChart as LucidePieChart, PlayCircle as LucidePlayCircle, Play as LucidePlay, Pocket as LucidePocket, Power as LucidePower, PowerOff as LucidePowerOff, Printer as LucidePrinter, Radio as LucideRadio, RefreshCcw as LucideRefreshCcw, RefreshCw as LucideRefreshCw, Repeat as LucideRepeat, Rewind as LucideRewind, RotateCcw as LucideRotateCcw, RotateCw as LucideRotateCw, Recycle as LucideRecycle, Rss as LucideRss, Save as LucideSave, Scissors as LucideScissors, ScreenShare as LucideScreenShare, ScreenShareOff as LucideScreenShareOff, Send as LucideSend, Share2 as LucideShare2, Share as LucideShare, ShieldOff as LucideShieldOff, Shield as LucideShield, ShoppingBag as LucideShoppingBag, Shuffle as LucideShuffle, Sidebar as LucideSidebar, SkipBack as LucideSkipBack, SkipForward as LucideSkipForward, Slack as LucideSlack, Slash as LucideSlash, Sliders as LucideSliders, Smartphone as LucideSmartphone, Smile as LucideSmile, Speaker as LucideSpeaker, Square as LucideSquare, Star as LucideStar, StopCircle as LucideStopCircle, Sun as LucideSun, Sunrise as LucideSunrise, Sunset as LucideSunset, Table as LucideTable, Tablet as LucideTablet, Tag as LucideTag, Target as LucideTarget, Terminal as LucideTerminal, ThumbsDown as LucideThumbsDown, ThumbsUp as LucideThumbsUp, ToggleLeft as LucideToggleLeft, ToggleRight as LucideToggleRight, Trash2 as LucideTrash2, Trello as LucideTrello, TrendingDown as LucideTrendingDown, TrendingUp as LucideTrendingUp, Triangle as LucideTriangle, Truck as LucideTruck, Tv as LucideTv, Twitch as LucideTwitch, Twitter as LucideTwitter, Type as LucideType, Umbrella as LucideUmbrella, Underline as LucideUnderline, Unlock as LucideUnlock, Upload as LucideUpload, UserCheck as LucideUserCheck, UserMinus as LucideUserMinus, UserPlus as LucideUserPlus, UserX as LucideUserX, VideoOff as LucideVideoOff, Video as LucideVideo, Voicemail as LucideVoicemail, Wallet as LucideWallet, Volume1 as LucideVolume1, Volume2 as LucideVolume2, VolumeX as LucideVolumeX, Volume as LucideVolume, Watch as LucideWatch, WifiOff as LucideWifiOff, Wifi as LucideWifi, Wind as LucideWind, XCircle as LucideXCircle, XOctagon as LucideXOctagon, XSquare as LucideXSquare, Youtube as LucideYoutube, ZapOff as LucideZapOff, Zap as LucideZap, ZoomIn as LucideZoomIn, ZoomOut as LucideZoomOut } from 'lucide-react';






































































































































































































































































































export const Home = LucideHome;
export const Bot = LucideBot;
export const Sparkles = LucideSparkles;
export const User = LucideUser;
export const ArrowRight = LucideArrowRight;
export const BarChart3 = LucideBarChart3;
export const Briefcase = LucideBriefcase;
export const BriefcaseIcon = LucideBriefcase;
export const Monitor = LucideMonitor;
export const Server = LucideServer;
export const Bell = LucideBell;
export const Calendar = LucideCalendar;
export const CalendarIcon = LucideCalendar;
export const Check = LucideCheck;
export const CheckIcon = LucideCheck;
export const ChevronDown = LucideChevronDown;
export const ChevronUp = LucideChevronUp;
export const ChevronLeft = LucideChevronLeft;
export const ChevronRight = LucideChevronRight;
export const ChevronRightIcon = LucideChevronRight;
export const Plus = LucidePlus;
export const Minus = LucideMinus;
export const X = LucideX;
export const Edit = LucideEdit;
export const Trash = LucideTrash;
export const Settings = LucideSettings;
export const Search = LucideSearch;
export const Filter = LucideFilter;
export const UploadCloud = LucideUploadCloud;
export const DownloadCloud = LucideDownloadCloud;
export const Copy = LucideCopy;
export const ExternalLink = LucideExternalLink;
export const ExternalLinkIcon = LucideExternalLink;
export const Link = LucideLink;
export const MessageSquare = LucideMessageSquare;
export const MessageSquareIcon = LucideMessageSquare;
export const Users = LucideUsers;
export const FileText = LucideFileText;
export const Image = LucideImage;
export const AlertTriangle = LucideAlertTriangle;
export const Info = LucideInfo;
export const Mail = LucideMail;
export const Lock = LucideLock;
export const LogOut = LucideLogOut;
export const LogIn = LucideLogIn;
export const ShoppingCart = LucideShoppingCart;
export const CreditCard = LucideCreditCard;
export const DollarSign = LucideDollarSign;
export const Percent = LucidePercent;
export const Award = LucideAward;
export const Activity = LucideActivity;
export const Airplay = LucideAirplay;
export const AlignCenter = LucideAlignCenter;
export const AlignJustify = LucideAlignJustify;
export const AlignLeft = LucideAlignLeft;
export const AlignRight = LucideAlignRight;
export const Anchor = LucideAnchor;
export const Aperture = LucideAperture;
export const Archive = LucideArchive;
export const ArrowDownCircle = LucideArrowDownCircle;
export const ArrowDownLeft = LucideArrowDownLeft;
export const ArrowDownRight = LucideArrowDownRight;
export const ArrowLeftCircle = LucideArrowLeftCircle;
export const ArrowRightCircle = LucideArrowRightCircle;
export const ArrowUpCircle = LucideArrowUpCircle;
export const ArrowUpLeft = LucideArrowUpLeft;
export const ArrowUpRight = LucideArrowUpRight;
export const AtSign = LucideAtSign;
export const BarChart = LucideBarChart;
export const BarChart2 = LucideBarChart2;
export const BatteryCharging = LucideBatteryCharging;
export const Battery = LucideBattery;
export const BellOff = LucideBellOff;
export const Bluetooth = LucideBluetooth;
export const Bold = LucideBold;
export const BookOpen = LucideBookOpen;
export const Book = LucideBook;
export const Bookmark = LucideBookmark;
export const Box = LucideBox;
export const CameraOff = LucideCameraOff;
export const Camera = LucideCamera;
export const Cast = LucideCast;
export const CheckCircle = LucideCheckCircle;
export const CheckSquare = LucideCheckSquare;
export const ChevronDownSquare = LucideChevronDownSquare;
export const ChevronLeftSquare = LucideChevronLeftSquare;
export const ChevronRightSquare = LucideChevronRightSquare;
export const ChevronUpSquare = LucideChevronUpSquare;
export const ChevronsDown = LucideChevronsDown;
export const ChevronsLeft = LucideChevronsLeft;
export const ChevronsRight = LucideChevronsRight;
export const ChevronsUp = LucideChevronsUp;
export const Chrome = LucideChrome;
export const Circle = LucideCircle;
export const Clipboard = LucideClipboard;
export const Clock = LucideClock;
export const CloudDrizzle = LucideCloudDrizzle;
export const CloudLightning = LucideCloudLightning;
export const CloudOff = LucideCloudOff;
export const CloudRain = LucideCloudRain;
export const CloudSnow = LucideCloudSnow;
export const Cloud = LucideCloud;
export const Code = LucideCode;
export const Codepen = LucideCodepen;
export const Codesandbox = LucideCodesandbox;
export const Coffee = LucideCoffee;
export const Columns = LucideColumns;
export const Command = LucideCommand;
export const Compass = LucideCompass;
export const Copyleft = LucideCopyleft;
export const Copyright = LucideCopyright;
export const CornerDownLeft = LucideCornerDownLeft;
export const CornerDownRight = LucideCornerDownRight;
export const CornerLeftDown = LucideCornerLeftDown;
export const CornerLeftUp = LucideCornerLeftUp;
export const CornerRightDown = LucideCornerRightDown;
export const CornerRightUp = LucideCornerRightUp;
export const CornerUpLeft = LucideCornerUpLeft;
export const CornerUpRight = LucideCornerUpRight;
export const Cpu = LucideCpu;
export const Crop = LucideCrop;
export const Crosshair = LucideCrosshair;
export const Database = LucideDatabase;
export const Delete = LucideDelete;
export const Disc = LucideDisc;
export const DivideCircle = LucideDivideCircle;
export const DivideSquare = LucideDivideSquare;
export const Divide = LucideDivide;
export const Download = LucideDownload;
export const Dribbble = LucideDribbble;
export const Droplet = LucideDroplet;
export const Edit2 = LucideEdit2;
export const Edit3 = LucideEdit3;
export const EyeOff = LucideEyeOff;
export const Eye = LucideEye;
export const Facebook = LucideFacebook;
export const FastForward = LucideFastForward;
export const Feather = LucideFeather;
export const Figma = LucideFigma;
export const FileMinus = LucideFileMinus;
export const FilePlus = LucideFilePlus;
export const File = LucideFile;
export const Film = LucideFilm;
export const Flag = LucideFlag;
export const FolderMinus = LucideFolderMinus;
export const FolderPlus = LucideFolderPlus;
export const Folder = LucideFolder;
export const Framer = LucideFramer;
export const Frown = LucideFrown;
export const Gift = LucideGift;
export const GitBranch = LucideGitBranch;
export const GitCommit = LucideGitCommit;
export const GitMerge = LucideGitMerge;
export const GitPullRequest = LucideGitPullRequest;
export const Github = LucideGithub;
export const Gitlab = LucideGitlab;
export const Globe = LucideGlobe;
export const Grid = LucideGrid;
export const HardDrive = LucideHardDrive;
export const Hash = LucideHash;
export const Headphones = LucideHeadphones;
export const Heart = LucideHeart;
export const HelpCircle = LucideHelpCircle;
export const Hexagon = LucideHexagon;
export const Inbox = LucideInbox;
export const Instagram = LucideInstagram;
export const Italic = LucideItalic;
export const Key = LucideKey;
export const Layers = LucideLayers;
export const Layout = LucideLayout;
export const LifeBuoy = LucideLifeBuoy;
export const Link2 = LucideLink2;
export const Linkedin = LucideLinkedin;
export const List = LucideList;
export const Loader = LucideLoader;
export const Loader2 = LucideLoader2;
export const MapPin = LucideMapPin;
export const Map = LucideMap;
export const Maximize2 = LucideMaximize2;
export const Maximize = LucideMaximize;
export const Meh = LucideMeh;
export const Menu = LucideMenu;
export const MessageCircle = LucideMessageCircle;
export const MicOff = LucideMicOff;
export const Mic = LucideMic;
export const Minimize2 = LucideMinimize2;
export const Minimize = LucideMinimize;
export const Moon = LucideMoon;
export const MoreHorizontal = LucideMoreHorizontal;
export const MoreHorizontalIcon = LucideMoreHorizontal;
export const MoreVertical = LucideMoreVertical;
export const MousePointer = LucideMousePointer;
export const Move = LucideMove;
export const Music = LucideMusic;
export const Megaphone = LucideMegaphone;
export const Navigation2 = LucideNavigation2;
export const Navigation = LucideNavigation;
export const Network = LucideNetwork;
export const Octagon = LucideOctagon;
export const Package = LucidePackage;
export const Paperclip = LucidePaperclip;
export const PauseCircle = LucidePauseCircle;
export const Pause = LucidePause;
export const PenTool = LucidePenTool;
export const PhoneCall = LucidePhoneCall;
export const PhoneForwarded = LucidePhoneForwarded;
export const PhoneIncoming = LucidePhoneIncoming;
export const PhoneMissed = LucidePhoneMissed;
export const PhoneOff = LucidePhoneOff;
export const PhoneOutgoing = LucidePhoneOutgoing;
export const Phone = LucidePhone;
export const PieChart = LucidePieChart;
export const PlayCircle = LucidePlayCircle;
export const Play = LucidePlay;
export const Pocket = LucidePocket;
export const Power = LucidePower;
export const PowerOff = LucidePowerOff;
export const Printer = LucidePrinter;
export const Radio = LucideRadio;
export const RefreshCcw = LucideRefreshCcw;
export const RefreshCw = LucideRefreshCw;
export const Repeat = LucideRepeat;
export const Rewind = LucideRewind;
export const RotateCcw = LucideRotateCcw;
export const RotateCw = LucideRotateCw;
export const Recycle = LucideRecycle;
export const Rss = LucideRss;
export const Save = LucideSave;
export const Scissors = LucideScissors;
export const ScreenShare = LucideScreenShare;
export const ScreenShareOff = LucideScreenShareOff;
export const ScreenShareOffIcon = LucideScreenShareOff;
export const Send = LucideSend;
export const Share2 = LucideShare2;
export const Share = LucideShare;
export const ShieldOff = LucideShieldOff;
export const Shield = LucideShield;
export const ShoppingBag = LucideShoppingBag;
export const Shuffle = LucideShuffle;
export const Sidebar = LucideSidebar;
export const SkipBack = LucideSkipBack;
export const SkipForward = LucideSkipForward;
export const Slack = LucideSlack;
export const Slash = LucideSlash;
export const Sliders = LucideSliders;
export const Smartphone = LucideSmartphone;
export const Smile = LucideSmile;
export const Speaker = LucideSpeaker;
export const Square = LucideSquare;
export const Star = LucideStar;
export const StopCircle = LucideStopCircle;
export const Sun = LucideSun;
export const Sunrise = LucideSunrise;
export const Sunset = LucideSunset;
export const Table = LucideTable;
export const Tablet = LucideTablet;
export const Tag = LucideTag;
export const Target = LucideTarget;
export const Terminal = LucideTerminal;
export const ThumbsDown = LucideThumbsDown;
export const ThumbsUp = LucideThumbsUp;
export const ToggleLeft = LucideToggleLeft;
export const ToggleRight = LucideToggleRight;
export const Trash2 = LucideTrash2;
export const Trello = LucideTrello;
export const TrendingDown = LucideTrendingDown;
export const TrendingUp = LucideTrendingUp;
export const Triangle = LucideTriangle;
export const Truck = LucideTruck;
export const Tv = LucideTv;
export const Twitch = LucideTwitch;
export const Twitter = LucideTwitter;
export const Type = LucideType;
export const Umbrella = LucideUmbrella;
export const Underline = LucideUnderline;
export const Unlock = LucideUnlock;
export const Upload = LucideUpload;
export const UserCheck = LucideUserCheck;
export const UserMinus = LucideUserMinus;
export const UserPlus = LucideUserPlus;
export const UserX = LucideUserX;
export const VideoOff = LucideVideoOff;
export const Video = LucideVideo;
export const Voicemail = LucideVoicemail;
export const Wallet = LucideWallet;
export const Volume1 = LucideVolume1;
export const Volume2 = LucideVolume2;
export const VolumeX = LucideVolumeX;
export const Volume = LucideVolume;
export const Watch = LucideWatch;
export const WifiOff = LucideWifiOff;
export const Wifi = LucideWifi;
export const Wind = LucideWind;
export const XCircle = LucideXCircle;
export const XOctagon = LucideXOctagon;
export const XSquare = LucideXSquare;
export const Youtube = LucideYoutube;
export const ZapOff = LucideZapOff;
export const Zap = LucideZap;
export const ZoomIn = LucideZoomIn;
export const ZoomOut = LucideZoomOut;

// Define the props for your Icon component
export type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof iconMap;
  size?: number | string;
  className?: string;
};

// Create a map of icon names to component references
const iconMap = {
  home: LucideHome,
  'bot-message-square': LucideBot, // Assuming Bot is used for bot-message-square
  sparkles: LucideSparkles,
  user: LucideUser,
  briefcase: LucideBriefcase,
  server: LucideServer,
  bell: LucideBell,
  calendar: LucideCalendar,
  check: LucideCheck,
  'chevron-down': LucideChevronDown,
  'chevron-up': LucideChevronUp,
  'chevron-left': LucideChevronLeft,
  'chevron-right': LucideChevronRight,
  plus: LucidePlus,
  minus: LucideMinus,
  x: LucideX,
  edit: LucideEdit,
  trash: LucideTrash,
  settings: LucideSettings,
  search: LucideSearch,
  filter: LucideFilter,
  'upload-cloud': LucideUploadCloud,
  'download-cloud': LucideDownloadCloud,
  copy: LucideCopy,
  'external-link': LucideExternalLink,
  link: LucideLink,
  'message-square': LucideMessageSquare,
  users: LucideUsers,
  'file-text': LucideFileText,
  image: LucideImage,
  'alert-triangle': LucideAlertTriangle,
  info: LucideInfo,
  mail: LucideMail,
  lock: LucideLock,
  'log-out': LucideLogOut,
  'log-in': LucideLogIn,
  'shopping-cart': LucideShoppingCart,
  'credit-card': LucideCreditCard,
  'dollar-sign': LucideDollarSign,
  percent: LucidePercent,
  award: LucideAward,
  activity: LucideActivity,
  airplay: LucideAirplay,
  'align-center': LucideAlignCenter,
  'align-justify': LucideAlignJustify,
  'align-left': LucideAlignLeft,
  'align-right': LucideAlignRight,
  anchor: LucideAnchor,
  aperture: LucideAperture,
  archive: LucideArchive,
  'arrow-down-circle': LucideArrowDownCircle,
  'arrow-down-left': LucideArrowDownLeft,
  'arrow-down-right': LucideArrowDownRight,
  'arrow-left-circle': LucideArrowLeftCircle,
  'arrow-right': LucideArrowRight,
  'arrow-right-circle': LucideArrowRightCircle,
  'arrow-up-circle': LucideArrowUpCircle,
  'arrow-up-left': LucideArrowUpLeft,
  'arrow-up-right': LucideArrowUpRight,
  'at-sign': LucideAtSign,
  'bar-chart': LucideBarChart,
  'bar-chart-2': LucideBarChart2,
  'bar-chart-3': LucideBarChart3,
  'battery-charging': LucideBatteryCharging,
  battery: LucideBattery,
  'bell-off': LucideBellOff,
  bluetooth: LucideBluetooth,
  bold: LucideBold,
  'book-open': LucideBookOpen,
  book: LucideBook,
  bookmark: LucideBookmark,
  box: LucideBox,
  'camera-off': LucideCameraOff,
  camera: LucideCamera,
  cast: LucideCast,
  'check-circle': LucideCheckCircle,
  'check-square': LucideCheckSquare,
  'chevron-down-square': LucideChevronDownSquare,
  'chevron-left-square': LucideChevronLeftSquare,
  'chevron-right-square': LucideChevronRightSquare,
  'chevron-up-square': LucideChevronUpSquare,
  'chevrons-down': LucideChevronsDown,
  'chevrons-left': LucideChevronsLeft,
  'chevrons-right': LucideChevronsRight,
  'chevrons-up': LucideChevronsUp,
  chrome: LucideChrome,
  circle: LucideCircle,
  clipboard: LucideClipboard,
  clock: LucideClock,
  'cloud-drizzle': LucideCloudDrizzle,
  'cloud-lightning': LucideCloudLightning,
  'cloud-off': LucideCloudOff,
  'cloud-rain': LucideCloudRain,
  'cloud-snow': LucideCloudSnow,
  cloud: LucideCloud,
  code: LucideCode,
  codepen: LucideCodepen,
  codesandbox: LucideCodesandbox,
  coffee: LucideCoffee,
  columns: LucideColumns,
  command: LucideCommand,
  compass: LucideCompass,
  copyleft: LucideCopyleft,
  copyright: LucideCopyright,
  'corner-down-left': LucideCornerDownLeft,
  'corner-down-right': LucideCornerDownRight,
  'corner-left-down': LucideCornerLeftDown,
  'corner-left-up': LucideCornerLeftUp,
  'corner-right-down': LucideCornerRightDown,
  'corner-right-up': LucideCornerRightUp,
  'corner-up-left': LucideCornerUpLeft,
  'corner-up-right': LucideCornerUpRight,
  cpu: LucideCpu,
  crop: LucideCrop,
  crosshair: LucideCrosshair,
  database: LucideDatabase,
  delete: LucideDelete,
  disc: LucideDisc,
  'divide-circle': LucideDivideCircle,
  'divide-square': LucideDivideSquare,
  divide: LucideDivide,
  download: LucideDownload,
  dribbble: LucideDribbble,
  droplet: LucideDroplet,
  'edit-2': LucideEdit2,
  'edit-3': LucideEdit3,
  'eye-off': LucideEyeOff,
  eye: LucideEye,
  facebook: LucideFacebook,
  'fast-forward': LucideFastForward,
  feather: LucideFeather,
  figma: LucideFigma,
  'file-minus': LucideFileMinus,
  'file-plus': LucideFilePlus,
  file: LucideFile,
  film: LucideFilm,
  flag: LucideFlag,
  'folder-minus': LucideFolderMinus,
  'folder-plus': LucideFolderPlus,
  folder: LucideFolder,
  framer: LucideFramer,
  frown: LucideFrown,
  gift: LucideGift,
  'git-branch': LucideGitBranch,
  'git-commit': LucideGitCommit,
  'git-merge': LucideGitMerge,
  'git-pull-request': LucideGitPullRequest,
  github: LucideGithub,
  gitlab: LucideGitlab,
  globe: LucideGlobe,
  grid: LucideGrid,
  'hard-drive': LucideHardDrive,
  hash: LucideHash,
  headphones: LucideHeadphones,
  heart: LucideHeart,
  'help-circle': LucideHelpCircle,
  hexagon: LucideHexagon,
  inbox: LucideInbox,
  instagram: LucideInstagram,
  italic: LucideItalic,
  key: LucideKey,
  layers: LucideLayers,
  layout: LucideLayout,
  'life-buoy': LucideLifeBuoy,
  'link-2': LucideLink2,
  linkedin: LucideLinkedin,
  list: LucideList,
  loader: LucideLoader,
  'loader-2': LucideLoader2,
  'map-pin': LucideMapPin,
  map: LucideMap,
  'maximize-2': LucideMaximize2,
  maximize: LucideMaximize,
  meh: LucideMeh,
  menu: LucideMenu,
  'message-circle': LucideMessageCircle,
  'mic-off': LucideMicOff,
  mic: LucideMic,
  'minimize-2': LucideMinimize2,
  minimize: LucideMinimize,
  monitor: LucideMonitor,
  moon: LucideMoon,
  'more-horizontal': LucideMoreHorizontal,
  'more-vertical': LucideMoreVertical,
  'mouse-pointer': LucideMousePointer,
  move: LucideMove,
  music: LucideMusic,
  megaphone: LucideMegaphone,
  'navigation-2': LucideNavigation2,
  navigation: LucideNavigation,
  network: LucideNetwork,
  octagon: LucideOctagon,
  package: LucidePackage,
  paperclip: LucidePaperclip,
  'pause-circle': LucidePauseCircle,
  pause: LucidePause,
  'pen-tool': LucidePenTool,
  'phone-call': LucidePhoneCall,
  'phone-forwarded': LucidePhoneForwarded,
  'phone-incoming': LucidePhoneIncoming,
  'phone-missed': LucidePhoneMissed,
  'phone-off': LucidePhoneOff,
  'phone-outgoing': LucidePhoneOutgoing,
  phone: LucidePhone,
  'pie-chart': LucidePieChart,
  'play-circle': LucidePlayCircle,
  play: LucidePlay,
  pocket: LucidePocket,
  power: LucidePower,
  'power-off': LucidePowerOff,
  printer: LucidePrinter,
  radio: LucideRadio,
  'refresh-ccw': LucideRefreshCcw,
  'refresh-cw': LucideRefreshCw,
  repeat: LucideRepeat,
  rewind: LucideRewind,
  'rotate-ccw': LucideRotateCcw,
  'rotate-cw': LucideRotateCw,
  recycle: LucideRecycle,
  rss: LucideRss,
  save: LucideSave,
  scissors: LucideScissors,
  'screen-share': LucideScreenShare,
  'screen-share-off': LucideScreenShareOff,
  send: LucideSend,
  share2: LucideShare2,
  share: LucideShare,
  'shield-off': LucideShieldOff,
  shield: LucideShield,
  'shopping-bag': LucideShoppingBag,
  shuffle: LucideShuffle,
  sidebar: LucideSidebar,
  'skip-back': LucideSkipBack,
  'skip-forward': LucideSkipForward,
  slack: LucideSlack,
  slash: LucideSlash,
  sliders: LucideSliders,
  smartphone: LucideSmartphone,
  smile: LucideSmile,
  speaker: LucideSpeaker,
  square: LucideSquare,
  star: LucideStar,
  'stop-circle': LucideStopCircle,
  sun: LucideSun,
  sunrise: LucideSunrise,
  sunset: LucideSunset,
  table: LucideTable,
  tablet: LucideTablet,
  tag: LucideTag,
  target: LucideTarget,
  terminal: LucideTerminal,
  'thumbs-down': LucideThumbsDown,
  'thumbs-up': LucideThumbsUp,
  'toggle-left': LucideToggleLeft,
  'toggle-right': LucideToggleRight,
  'trash-2': LucideTrash2,
  trello: LucideTrello,
  'trending-down': LucideTrendingDown,
  'trending-up': LucideTrendingUp,
  triangle: LucideTriangle,
  truck: LucideTruck,
  tv: LucideTv,
  twitch: LucideTwitch,
  twitter: LucideTwitter,
  type: LucideType,
  umbrella: LucideUmbrella,
  underline: LucideUnderline,
  unlock: LucideUnlock,
  upload: LucideUpload,
  'user-check': LucideUserCheck,
  'user-minus': LucideUserMinus,
  'user-plus': LucideUserPlus,
  'user-x': LucideUserX,
  'video-off': LucideVideoOff,
  video: LucideVideo,
  voicemail: LucideVoicemail,
  wallet: LucideWallet,
  'volume-1': LucideVolume1,
  'volume-2': LucideVolume2,
  'volume-x': LucideVolumeX,
  volume: LucideVolume,
  watch: LucideWatch,
  'wifi-off': LucideWifiOff,
  wifi: LucideWifi,
  wind: LucideWind,
  'x-circle': LucideXCircle,
  'x-octagon': LucideXOctagon,
  'x-square': LucideXSquare,
  youtube: LucideYoutube,
  'zap-off': LucideZapOff,
  zap: LucideZap,
  'zoom-in': LucideZoomIn,
  'zoom-out': LucideZoomOut,
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24, // Default size
  className,
  ...props
}) => {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) {
    logWarn(`Icon "${name}" not found.`);
    return null;
  }

  // Render the dynamically selected Lucide icon component
  return <LucideIconComponent size={size} className={className} {...props} />;
};

export default Icon; // Default export the Icon component
export const Icons = iconMap; // Export the map if you need to refer to available icons