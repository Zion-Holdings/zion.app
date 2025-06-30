import React, { SVGProps } from 'react';
import { logWarn } from '@/utils/productionLogger';
import { Home as LucideHome } from 'lucide-react/dist/esm/icons/home as lucide-home';
import { Bot as LucideBot } from 'lucide-react/dist/esm/icons/bot as lucide-bot';
import { Sparkles as LucideSparkles } from 'lucide-react/dist/esm/icons/sparkles as lucide-sparkles';
import { User as LucideUser } from 'lucide-react/dist/esm/icons/user as lucide-user';
import { ArrowRight as LucideArrowRight } from 'lucide-react/dist/esm/icons/arrow-right as lucide-arrow-right';
import { BarChart3 as LucideBarChart3 } from 'lucide-react/dist/esm/icons/bar-chart3 as lucide-bar-chart3';
import { Briefcase as LucideBriefcase } from 'lucide-react/dist/esm/icons/briefcase as lucide-briefcase';
import { Monitor as LucideMonitor } from 'lucide-react/dist/esm/icons/monitor as lucide-monitor';
import { Server as LucideServer } from 'lucide-react/dist/esm/icons/server as lucide-server';
import { Bell as LucideBell } from 'lucide-react/dist/esm/icons/bell as lucide-bell';
import { Calendar as LucideCalendar } from 'lucide-react/dist/esm/icons/calendar as lucide-calendar';
import { Check as LucideCheck } from 'lucide-react/dist/esm/icons/check as lucide-check';
import { ChevronDown as LucideChevronDown } from 'lucide-react/dist/esm/icons/chevron-down as lucide-chevron-down';
import { ChevronUp as LucideChevronUp } from 'lucide-react/dist/esm/icons/chevron-up as lucide-chevron-up';
import { ChevronLeft as LucideChevronLeft } from 'lucide-react/dist/esm/icons/chevron-left as lucide-chevron-left';
import { ChevronRight as LucideChevronRight } from 'lucide-react/dist/esm/icons/chevron-right as lucide-chevron-right';
import { Plus as LucidePlus } from 'lucide-react/dist/esm/icons/plus as lucide-plus';
import { Minus as LucideMinus } from 'lucide-react/dist/esm/icons/minus as lucide-minus';
import { X as LucideX } from 'lucide-react/dist/esm/icons/x as lucide-x';
import { Edit as LucideEdit } from 'lucide-react/dist/esm/icons/edit as lucide-edit';
import { Trash as LucideTrash } from 'lucide-react/dist/esm/icons/trash as lucide-trash';
import { Settings as LucideSettings } from 'lucide-react/dist/esm/icons/settings as lucide-settings';
import { Search as LucideSearch } from 'lucide-react/dist/esm/icons/search as lucide-search';
import { Filter as LucideFilter } from 'lucide-react/dist/esm/icons/filter as lucide-filter';
import { UploadCloud as LucideUploadCloud } from 'lucide-react/dist/esm/icons/upload-cloud as lucide-upload-cloud';
import { DownloadCloud as LucideDownloadCloud } from 'lucide-react/dist/esm/icons/download-cloud as lucide-download-cloud';
import { Copy as LucideCopy } from 'lucide-react/dist/esm/icons/copy as lucide-copy';
import { ExternalLink as LucideExternalLink } from 'lucide-react/dist/esm/icons/external-link as lucide-external-link';
import { Link as LucideLink } from 'lucide-react/dist/esm/icons/link as lucide-link';
import { MessageSquare as LucideMessageSquare } from 'lucide-react/dist/esm/icons/message-square as lucide-message-square';
import { Users as LucideUsers } from 'lucide-react/dist/esm/icons/users as lucide-users';
import { FileText as LucideFileText } from 'lucide-react/dist/esm/icons/file-text as lucide-file-text';
import { Image as LucideImage } from 'lucide-react/dist/esm/icons/image as lucide-image';
import { AlertTriangle as LucideAlertTriangle } from 'lucide-react/dist/esm/icons/alert-triangle as lucide-alert-triangle';
import { Info as LucideInfo } from 'lucide-react/dist/esm/icons/info as lucide-info';
import { Mail as LucideMail } from 'lucide-react/dist/esm/icons/mail as lucide-mail';
import { Lock as LucideLock } from 'lucide-react/dist/esm/icons/lock as lucide-lock';
import { LogOut as LucideLogOut } from 'lucide-react/dist/esm/icons/log-out as lucide-log-out';
import { LogIn as LucideLogIn } from 'lucide-react/dist/esm/icons/log-in as lucide-log-in';
import { ShoppingCart as LucideShoppingCart } from 'lucide-react/dist/esm/icons/shopping-cart as lucide-shopping-cart';
import { CreditCard as LucideCreditCard } from 'lucide-react/dist/esm/icons/credit-card as lucide-credit-card';
import { DollarSign as LucideDollarSign } from 'lucide-react/dist/esm/icons/dollar-sign as lucide-dollar-sign';
import { Percent as LucidePercent } from 'lucide-react/dist/esm/icons/percent as lucide-percent';
import { Award as LucideAward } from 'lucide-react/dist/esm/icons/award as lucide-award';
import { Activity as LucideActivity } from 'lucide-react/dist/esm/icons/activity as lucide-activity';
import { Airplay as LucideAirplay } from 'lucide-react/dist/esm/icons/airplay as lucide-airplay';
import { AlignCenter as LucideAlignCenter } from 'lucide-react/dist/esm/icons/align-center as lucide-align-center';
import { AlignJustify as LucideAlignJustify } from 'lucide-react/dist/esm/icons/align-justify as lucide-align-justify';
import { AlignLeft as LucideAlignLeft } from 'lucide-react/dist/esm/icons/align-left as lucide-align-left';
import { AlignRight as LucideAlignRight } from 'lucide-react/dist/esm/icons/align-right as lucide-align-right';
import { Anchor as LucideAnchor } from 'lucide-react/dist/esm/icons/anchor as lucide-anchor';
import { Aperture as LucideAperture } from 'lucide-react/dist/esm/icons/aperture as lucide-aperture';
import { Archive as LucideArchive } from 'lucide-react/dist/esm/icons/archive as lucide-archive';
import { ArrowDownCircle as LucideArrowDownCircle } from 'lucide-react/dist/esm/icons/arrow-down-circle as lucide-arrow-down-circle';
import { ArrowDownLeft as LucideArrowDownLeft } from 'lucide-react/dist/esm/icons/arrow-down-left as lucide-arrow-down-left';
import { ArrowDownRight as LucideArrowDownRight } from 'lucide-react/dist/esm/icons/arrow-down-right as lucide-arrow-down-right';
import { ArrowLeftCircle as LucideArrowLeftCircle } from 'lucide-react/dist/esm/icons/arrow-left-circle as lucide-arrow-left-circle';
import { ArrowRightCircle as LucideArrowRightCircle } from 'lucide-react/dist/esm/icons/arrow-right-circle as lucide-arrow-right-circle';
import { ArrowUpCircle as LucideArrowUpCircle } from 'lucide-react/dist/esm/icons/arrow-up-circle as lucide-arrow-up-circle';
import { ArrowUpLeft as LucideArrowUpLeft } from 'lucide-react/dist/esm/icons/arrow-up-left as lucide-arrow-up-left';
import { ArrowUpRight as LucideArrowUpRight } from 'lucide-react/dist/esm/icons/arrow-up-right as lucide-arrow-up-right';
import { AtSign as LucideAtSign } from 'lucide-react/dist/esm/icons/at-sign as lucide-at-sign';
import { BarChart as LucideBarChart } from 'lucide-react/dist/esm/icons/bar-chart as lucide-bar-chart';
import { BarChart2 as LucideBarChart2 } from 'lucide-react/dist/esm/icons/bar-chart2 as lucide-bar-chart2';
import { BatteryCharging as LucideBatteryCharging } from 'lucide-react/dist/esm/icons/battery-charging as lucide-battery-charging';
import { Battery as LucideBattery } from 'lucide-react/dist/esm/icons/battery as lucide-battery';
import { BellOff as LucideBellOff } from 'lucide-react/dist/esm/icons/bell-off as lucide-bell-off';
import { Bluetooth as LucideBluetooth } from 'lucide-react/dist/esm/icons/bluetooth as lucide-bluetooth';
import { Bold as LucideBold } from 'lucide-react/dist/esm/icons/bold as lucide-bold';
import { BookOpen as LucideBookOpen } from 'lucide-react/dist/esm/icons/book-open as lucide-book-open';
import { Book as LucideBook } from 'lucide-react/dist/esm/icons/book as lucide-book';
import { Bookmark as LucideBookmark } from 'lucide-react/dist/esm/icons/bookmark as lucide-bookmark';
import { Box as LucideBox } from 'lucide-react/dist/esm/icons/box as lucide-box';
import { CameraOff as LucideCameraOff } from 'lucide-react/dist/esm/icons/camera-off as lucide-camera-off';
import { Camera as LucideCamera } from 'lucide-react/dist/esm/icons/camera as lucide-camera';
import { Cast as LucideCast } from 'lucide-react/dist/esm/icons/cast as lucide-cast';
import { CheckCircle as LucideCheckCircle } from 'lucide-react/dist/esm/icons/check-circle as lucide-check-circle';
import { CheckSquare as LucideCheckSquare } from 'lucide-react/dist/esm/icons/check-square as lucide-check-square';
import { ChevronDownSquare as LucideChevronDownSquare } from 'lucide-react/dist/esm/icons/chevron-down-square as lucide-chevron-down-square';
import { ChevronLeftSquare as LucideChevronLeftSquare } from 'lucide-react/dist/esm/icons/chevron-left-square as lucide-chevron-left-square';
import { ChevronRightSquare as LucideChevronRightSquare } from 'lucide-react/dist/esm/icons/chevron-right-square as lucide-chevron-right-square';
import { ChevronUpSquare as LucideChevronUpSquare } from 'lucide-react/dist/esm/icons/chevron-up-square as lucide-chevron-up-square';
import { ChevronsDown as LucideChevronsDown } from 'lucide-react/dist/esm/icons/chevrons-down as lucide-chevrons-down';
import { ChevronsLeft as LucideChevronsLeft } from 'lucide-react/dist/esm/icons/chevrons-left as lucide-chevrons-left';
import { ChevronsRight as LucideChevronsRight } from 'lucide-react/dist/esm/icons/chevrons-right as lucide-chevrons-right';
import { ChevronsUp as LucideChevronsUp } from 'lucide-react/dist/esm/icons/chevrons-up as lucide-chevrons-up';
import { Chrome as LucideChrome } from 'lucide-react/dist/esm/icons/chrome as lucide-chrome';
import { Circle as LucideCircle } from 'lucide-react/dist/esm/icons/circle as lucide-circle';
import { Clipboard as LucideClipboard } from 'lucide-react/dist/esm/icons/clipboard as lucide-clipboard';
import { Clock as LucideClock } from 'lucide-react/dist/esm/icons/clock as lucide-clock';
import { CloudDrizzle as LucideCloudDrizzle } from 'lucide-react/dist/esm/icons/cloud-drizzle as lucide-cloud-drizzle';
import { CloudLightning as LucideCloudLightning } from 'lucide-react/dist/esm/icons/cloud-lightning as lucide-cloud-lightning';
import { CloudOff as LucideCloudOff } from 'lucide-react/dist/esm/icons/cloud-off as lucide-cloud-off';
import { CloudRain as LucideCloudRain } from 'lucide-react/dist/esm/icons/cloud-rain as lucide-cloud-rain';
import { CloudSnow as LucideCloudSnow } from 'lucide-react/dist/esm/icons/cloud-snow as lucide-cloud-snow';
import { Cloud as LucideCloud } from 'lucide-react/dist/esm/icons/cloud as lucide-cloud';
import { Code as LucideCode } from 'lucide-react/dist/esm/icons/code as lucide-code';
import { Codepen as LucideCodepen } from 'lucide-react/dist/esm/icons/codepen as lucide-codepen';
import { Codesandbox as LucideCodesandbox } from 'lucide-react/dist/esm/icons/codesandbox as lucide-codesandbox';
import { Coffee as LucideCoffee } from 'lucide-react/dist/esm/icons/coffee as lucide-coffee';
import { Columns as LucideColumns } from 'lucide-react/dist/esm/icons/columns as lucide-columns';
import { Command as LucideCommand } from 'lucide-react/dist/esm/icons/command as lucide-command';
import { Compass as LucideCompass } from 'lucide-react/dist/esm/icons/compass as lucide-compass';
import { Copyleft as LucideCopyleft } from 'lucide-react/dist/esm/icons/copyleft as lucide-copyleft';
import { Copyright as LucideCopyright } from 'lucide-react/dist/esm/icons/copyright as lucide-copyright';
import { CornerDownLeft as LucideCornerDownLeft } from 'lucide-react/dist/esm/icons/corner-down-left as lucide-corner-down-left';
import { CornerDownRight as LucideCornerDownRight } from 'lucide-react/dist/esm/icons/corner-down-right as lucide-corner-down-right';
import { CornerLeftDown as LucideCornerLeftDown } from 'lucide-react/dist/esm/icons/corner-left-down as lucide-corner-left-down';
import { CornerLeftUp as LucideCornerLeftUp } from 'lucide-react/dist/esm/icons/corner-left-up as lucide-corner-left-up';
import { CornerRightDown as LucideCornerRightDown } from 'lucide-react/dist/esm/icons/corner-right-down as lucide-corner-right-down';
import { CornerRightUp as LucideCornerRightUp } from 'lucide-react/dist/esm/icons/corner-right-up as lucide-corner-right-up';
import { CornerUpLeft as LucideCornerUpLeft } from 'lucide-react/dist/esm/icons/corner-up-left as lucide-corner-up-left';
import { CornerUpRight as LucideCornerUpRight } from 'lucide-react/dist/esm/icons/corner-up-right as lucide-corner-up-right';
import { Cpu as LucideCpu } from 'lucide-react/dist/esm/icons/cpu as lucide-cpu';
import { Crop as LucideCrop } from 'lucide-react/dist/esm/icons/crop as lucide-crop';
import { Crosshair as LucideCrosshair } from 'lucide-react/dist/esm/icons/crosshair as lucide-crosshair';
import { Database as LucideDatabase } from 'lucide-react/dist/esm/icons/database as lucide-database';
import { Delete as LucideDelete } from 'lucide-react/dist/esm/icons/delete as lucide-delete';
import { Disc as LucideDisc } from 'lucide-react/dist/esm/icons/disc as lucide-disc';
import { DivideCircle as LucideDivideCircle } from 'lucide-react/dist/esm/icons/divide-circle as lucide-divide-circle';
import { DivideSquare as LucideDivideSquare } from 'lucide-react/dist/esm/icons/divide-square as lucide-divide-square';
import { Divide as LucideDivide } from 'lucide-react/dist/esm/icons/divide as lucide-divide';
import { Download as LucideDownload } from 'lucide-react/dist/esm/icons/download as lucide-download';
import { Dribbble as LucideDribbble } from 'lucide-react/dist/esm/icons/dribbble as lucide-dribbble';
import { Droplet as LucideDroplet } from 'lucide-react/dist/esm/icons/droplet as lucide-droplet';
import { Edit2 as LucideEdit2 } from 'lucide-react/dist/esm/icons/edit2 as lucide-edit2';
import { Edit3 as LucideEdit3 } from 'lucide-react/dist/esm/icons/edit3 as lucide-edit3';
import { EyeOff as LucideEyeOff } from 'lucide-react/dist/esm/icons/eye-off as lucide-eye-off';
import { Eye as LucideEye } from 'lucide-react/dist/esm/icons/eye as lucide-eye';
import { Facebook as LucideFacebook } from 'lucide-react/dist/esm/icons/facebook as lucide-facebook';
import { FastForward as LucideFastForward } from 'lucide-react/dist/esm/icons/fast-forward as lucide-fast-forward';
import { Feather as LucideFeather } from 'lucide-react/dist/esm/icons/feather as lucide-feather';
import { Figma as LucideFigma } from 'lucide-react/dist/esm/icons/figma as lucide-figma';
import { FileMinus as LucideFileMinus } from 'lucide-react/dist/esm/icons/file-minus as lucide-file-minus';
import { FilePlus as LucideFilePlus } from 'lucide-react/dist/esm/icons/file-plus as lucide-file-plus';
import { File as LucideFile } from 'lucide-react/dist/esm/icons/file as lucide-file';
import { Film as LucideFilm } from 'lucide-react/dist/esm/icons/film as lucide-film';
import { Flag as LucideFlag } from 'lucide-react/dist/esm/icons/flag as lucide-flag';
import { FolderMinus as LucideFolderMinus } from 'lucide-react/dist/esm/icons/folder-minus as lucide-folder-minus';
import { FolderPlus as LucideFolderPlus } from 'lucide-react/dist/esm/icons/folder-plus as lucide-folder-plus';
import { Folder as LucideFolder } from 'lucide-react/dist/esm/icons/folder as lucide-folder';
import { Framer as LucideFramer } from 'lucide-react/dist/esm/icons/framer as lucide-framer';
import { Frown as LucideFrown } from 'lucide-react/dist/esm/icons/frown as lucide-frown';
import { Gift as LucideGift } from 'lucide-react/dist/esm/icons/gift as lucide-gift';
import { GitBranch as LucideGitBranch } from 'lucide-react/dist/esm/icons/git-branch as lucide-git-branch';
import { GitCommit as LucideGitCommit } from 'lucide-react/dist/esm/icons/git-commit as lucide-git-commit';
import { GitMerge as LucideGitMerge } from 'lucide-react/dist/esm/icons/git-merge as lucide-git-merge';
import { GitPullRequest as LucideGitPullRequest } from 'lucide-react/dist/esm/icons/git-pull-request as lucide-git-pull-request';
import { Github as LucideGithub } from 'lucide-react/dist/esm/icons/github as lucide-github';
import { Gitlab as LucideGitlab } from 'lucide-react/dist/esm/icons/gitlab as lucide-gitlab';
import { Globe as LucideGlobe } from 'lucide-react/dist/esm/icons/globe as lucide-globe';
import { Grid as LucideGrid } from 'lucide-react/dist/esm/icons/grid as lucide-grid';
import { HardDrive as LucideHardDrive } from 'lucide-react/dist/esm/icons/hard-drive as lucide-hard-drive';
import { Hash as LucideHash } from 'lucide-react/dist/esm/icons/hash as lucide-hash';
import { Headphones as LucideHeadphones } from 'lucide-react/dist/esm/icons/headphones as lucide-headphones';
import { Heart as LucideHeart } from 'lucide-react/dist/esm/icons/heart as lucide-heart';
import { HelpCircle as LucideHelpCircle } from 'lucide-react/dist/esm/icons/help-circle as lucide-help-circle';
import { Hexagon as LucideHexagon } from 'lucide-react/dist/esm/icons/hexagon as lucide-hexagon';
import { Inbox as LucideInbox } from 'lucide-react/dist/esm/icons/inbox as lucide-inbox';
import { Instagram as LucideInstagram } from 'lucide-react/dist/esm/icons/instagram as lucide-instagram';
import { Italic as LucideItalic } from 'lucide-react/dist/esm/icons/italic as lucide-italic';
import { Key as LucideKey } from 'lucide-react/dist/esm/icons/key as lucide-key';
import { Layers as LucideLayers } from 'lucide-react/dist/esm/icons/layers as lucide-layers';
import { Layout as LucideLayout } from 'lucide-react/dist/esm/icons/layout as lucide-layout';
import { LifeBuoy as LucideLifeBuoy } from 'lucide-react/dist/esm/icons/life-buoy as lucide-life-buoy';
import { Link2 as LucideLink2 } from 'lucide-react/dist/esm/icons/link2 as lucide-link2';
import { Linkedin as LucideLinkedin } from 'lucide-react/dist/esm/icons/linkedin as lucide-linkedin';
import { List as LucideList } from 'lucide-react/dist/esm/icons/list as lucide-list';
import { Loader as LucideLoader } from 'lucide-react/dist/esm/icons/loader as lucide-loader';
import { Loader2 as LucideLoader2 } from 'lucide-react/dist/esm/icons/loader2 as lucide-loader2';
import { MapPin as LucideMapPin } from 'lucide-react/dist/esm/icons/map-pin as lucide-map-pin';
import { Map as LucideMap } from 'lucide-react/dist/esm/icons/map as lucide-map';
import { Maximize2 as LucideMaximize2 } from 'lucide-react/dist/esm/icons/maximize2 as lucide-maximize2';
import { Maximize as LucideMaximize } from 'lucide-react/dist/esm/icons/maximize as lucide-maximize';
import { Meh as LucideMeh } from 'lucide-react/dist/esm/icons/meh as lucide-meh';
import { Menu as LucideMenu } from 'lucide-react/dist/esm/icons/menu as lucide-menu';
import { MessageCircle as LucideMessageCircle } from 'lucide-react/dist/esm/icons/message-circle as lucide-message-circle';
import { MicOff as LucideMicOff } from 'lucide-react/dist/esm/icons/mic-off as lucide-mic-off';
import { Mic as LucideMic } from 'lucide-react/dist/esm/icons/mic as lucide-mic';
import { Minimize2 as LucideMinimize2 } from 'lucide-react/dist/esm/icons/minimize2 as lucide-minimize2';
import { Minimize as LucideMinimize } from 'lucide-react/dist/esm/icons/minimize as lucide-minimize';
import { Moon as LucideMoon } from 'lucide-react/dist/esm/icons/moon as lucide-moon';
import { MoreHorizontal as LucideMoreHorizontal } from 'lucide-react/dist/esm/icons/more-horizontal as lucide-more-horizontal';
import { MoreVertical as LucideMoreVertical } from 'lucide-react/dist/esm/icons/more-vertical as lucide-more-vertical';
import { MousePointer as LucideMousePointer } from 'lucide-react/dist/esm/icons/mouse-pointer as lucide-mouse-pointer';
import { Move as LucideMove } from 'lucide-react/dist/esm/icons/move as lucide-move';
import { Music as LucideMusic } from 'lucide-react/dist/esm/icons/music as lucide-music';
import { Megaphone as LucideMegaphone } from 'lucide-react/dist/esm/icons/megaphone as lucide-megaphone';
import { Navigation2 as LucideNavigation2 } from 'lucide-react/dist/esm/icons/navigation2 as lucide-navigation2';
import { Navigation as LucideNavigation } from 'lucide-react/dist/esm/icons/navigation as lucide-navigation';
import { Network as LucideNetwork } from 'lucide-react/dist/esm/icons/network as lucide-network';
import { Octagon as LucideOctagon } from 'lucide-react/dist/esm/icons/octagon as lucide-octagon';
import { Package as LucidePackage } from 'lucide-react/dist/esm/icons/package as lucide-package';
import { Paperclip as LucidePaperclip } from 'lucide-react/dist/esm/icons/paperclip as lucide-paperclip';
import { PauseCircle as LucidePauseCircle } from 'lucide-react/dist/esm/icons/pause-circle as lucide-pause-circle';
import { Pause as LucidePause } from 'lucide-react/dist/esm/icons/pause as lucide-pause';
import { PenTool as LucidePenTool } from 'lucide-react/dist/esm/icons/pen-tool as lucide-pen-tool';
import { PhoneCall as LucidePhoneCall } from 'lucide-react/dist/esm/icons/phone-call as lucide-phone-call';
import { PhoneForwarded as LucidePhoneForwarded } from 'lucide-react/dist/esm/icons/phone-forwarded as lucide-phone-forwarded';
import { PhoneIncoming as LucidePhoneIncoming } from 'lucide-react/dist/esm/icons/phone-incoming as lucide-phone-incoming';
import { PhoneMissed as LucidePhoneMissed } from 'lucide-react/dist/esm/icons/phone-missed as lucide-phone-missed';
import { PhoneOff as LucidePhoneOff } from 'lucide-react/dist/esm/icons/phone-off as lucide-phone-off';
import { PhoneOutgoing as LucidePhoneOutgoing } from 'lucide-react/dist/esm/icons/phone-outgoing as lucide-phone-outgoing';
import { Phone as LucidePhone } from 'lucide-react/dist/esm/icons/phone as lucide-phone';
import { PieChart as LucidePieChart } from 'lucide-react/dist/esm/icons/pie-chart as lucide-pie-chart';
import { PlayCircle as LucidePlayCircle } from 'lucide-react/dist/esm/icons/play-circle as lucide-play-circle';
import { Play as LucidePlay } from 'lucide-react/dist/esm/icons/play as lucide-play';
import { Pocket as LucidePocket } from 'lucide-react/dist/esm/icons/pocket as lucide-pocket';
import { Power as LucidePower } from 'lucide-react/dist/esm/icons/power as lucide-power';
import { PowerOff as LucidePowerOff } from 'lucide-react/dist/esm/icons/power-off as lucide-power-off';
import { Printer as LucidePrinter } from 'lucide-react/dist/esm/icons/printer as lucide-printer';
import { Radio as LucideRadio } from 'lucide-react/dist/esm/icons/radio as lucide-radio';
import { RefreshCcw as LucideRefreshCcw } from 'lucide-react/dist/esm/icons/refresh-ccw as lucide-refresh-ccw';
import { RefreshCw as LucideRefreshCw } from 'lucide-react/dist/esm/icons/refresh-cw as lucide-refresh-cw';
import { Repeat as LucideRepeat } from 'lucide-react/dist/esm/icons/repeat as lucide-repeat';
import { Rewind as LucideRewind } from 'lucide-react/dist/esm/icons/rewind as lucide-rewind';
import { RotateCcw as LucideRotateCcw } from 'lucide-react/dist/esm/icons/rotate-ccw as lucide-rotate-ccw';
import { RotateCw as LucideRotateCw } from 'lucide-react/dist/esm/icons/rotate-cw as lucide-rotate-cw';
import { Recycle as LucideRecycle } from 'lucide-react/dist/esm/icons/recycle as lucide-recycle';
import { Rss as LucideRss } from 'lucide-react/dist/esm/icons/rss as lucide-rss';
import { Save as LucideSave } from 'lucide-react/dist/esm/icons/save as lucide-save';
import { Scissors as LucideScissors } from 'lucide-react/dist/esm/icons/scissors as lucide-scissors';
import { ScreenShare as LucideScreenShare } from 'lucide-react/dist/esm/icons/screen-share as lucide-screen-share';
import { ScreenShareOff as LucideScreenShareOff } from 'lucide-react/dist/esm/icons/screen-share-off as lucide-screen-share-off';
import { Send as LucideSend } from 'lucide-react/dist/esm/icons/send as lucide-send';
import { Share2 as LucideShare2 } from 'lucide-react/dist/esm/icons/share2 as lucide-share2';
import { Share as LucideShare } from 'lucide-react/dist/esm/icons/share as lucide-share';
import { ShieldOff as LucideShieldOff } from 'lucide-react/dist/esm/icons/shield-off as lucide-shield-off';
import { Shield as LucideShield } from 'lucide-react/dist/esm/icons/shield as lucide-shield';
import { ShoppingBag as LucideShoppingBag } from 'lucide-react/dist/esm/icons/shopping-bag as lucide-shopping-bag';
import { Shuffle as LucideShuffle } from 'lucide-react/dist/esm/icons/shuffle as lucide-shuffle';
import { Sidebar as LucideSidebar } from 'lucide-react/dist/esm/icons/sidebar as lucide-sidebar';
import { SkipBack as LucideSkipBack } from 'lucide-react/dist/esm/icons/skip-back as lucide-skip-back';
import { SkipForward as LucideSkipForward } from 'lucide-react/dist/esm/icons/skip-forward as lucide-skip-forward';
import { Slack as LucideSlack } from 'lucide-react/dist/esm/icons/slack as lucide-slack';
import { Slash as LucideSlash } from 'lucide-react/dist/esm/icons/slash as lucide-slash';
import { Sliders as LucideSliders } from 'lucide-react/dist/esm/icons/sliders as lucide-sliders';
import { Smartphone as LucideSmartphone } from 'lucide-react/dist/esm/icons/smartphone as lucide-smartphone';
import { Smile as LucideSmile } from 'lucide-react/dist/esm/icons/smile as lucide-smile';
import { Speaker as LucideSpeaker } from 'lucide-react/dist/esm/icons/speaker as lucide-speaker';
import { Square as LucideSquare } from 'lucide-react/dist/esm/icons/square as lucide-square';
import { Star as LucideStar } from 'lucide-react/dist/esm/icons/star as lucide-star';
import { StopCircle as LucideStopCircle } from 'lucide-react/dist/esm/icons/stop-circle as lucide-stop-circle';
import { Sun as LucideSun } from 'lucide-react/dist/esm/icons/sun as lucide-sun';
import { Sunrise as LucideSunrise } from 'lucide-react/dist/esm/icons/sunrise as lucide-sunrise';
import { Sunset as LucideSunset } from 'lucide-react/dist/esm/icons/sunset as lucide-sunset';
import { Table as LucideTable } from 'lucide-react/dist/esm/icons/table as lucide-table';
import { Tablet as LucideTablet } from 'lucide-react/dist/esm/icons/tablet as lucide-tablet';
import { Tag as LucideTag } from 'lucide-react/dist/esm/icons/tag as lucide-tag';
import { Target as LucideTarget } from 'lucide-react/dist/esm/icons/target as lucide-target';
import { Terminal as LucideTerminal } from 'lucide-react/dist/esm/icons/terminal as lucide-terminal';
import { ThumbsDown as LucideThumbsDown } from 'lucide-react/dist/esm/icons/thumbs-down as lucide-thumbs-down';
import { ThumbsUp as LucideThumbsUp } from 'lucide-react/dist/esm/icons/thumbs-up as lucide-thumbs-up';
import { ToggleLeft as LucideToggleLeft } from 'lucide-react/dist/esm/icons/toggle-left as lucide-toggle-left';
import { ToggleRight as LucideToggleRight } from 'lucide-react/dist/esm/icons/toggle-right as lucide-toggle-right';
import { Trash2 as LucideTrash2 } from 'lucide-react/dist/esm/icons/trash2 as lucide-trash2';
import { Trello as LucideTrello } from 'lucide-react/dist/esm/icons/trello as lucide-trello';
import { TrendingDown as LucideTrendingDown } from 'lucide-react/dist/esm/icons/trending-down as lucide-trending-down';
import { TrendingUp as LucideTrendingUp } from 'lucide-react/dist/esm/icons/trending-up as lucide-trending-up';
import { Triangle as LucideTriangle } from 'lucide-react/dist/esm/icons/triangle as lucide-triangle';
import { Truck as LucideTruck } from 'lucide-react/dist/esm/icons/truck as lucide-truck';
import { Tv as LucideTv } from 'lucide-react/dist/esm/icons/tv as lucide-tv';
import { Twitch as LucideTwitch } from 'lucide-react/dist/esm/icons/twitch as lucide-twitch';
import { Twitter as LucideTwitter } from 'lucide-react/dist/esm/icons/twitter as lucide-twitter';
import { Type as LucideType } from 'lucide-react/dist/esm/icons/type as lucide-type';
import { Umbrella as LucideUmbrella } from 'lucide-react/dist/esm/icons/umbrella as lucide-umbrella';
import { Underline as LucideUnderline } from 'lucide-react/dist/esm/icons/underline as lucide-underline';
import { Unlock as LucideUnlock } from 'lucide-react/dist/esm/icons/unlock as lucide-unlock';
import { Upload as LucideUpload } from 'lucide-react/dist/esm/icons/upload as lucide-upload';
import { UserCheck as LucideUserCheck } from 'lucide-react/dist/esm/icons/user-check as lucide-user-check';
import { UserMinus as LucideUserMinus } from 'lucide-react/dist/esm/icons/user-minus as lucide-user-minus';
import { UserPlus as LucideUserPlus } from 'lucide-react/dist/esm/icons/user-plus as lucide-user-plus';
import { UserX as LucideUserX } from 'lucide-react/dist/esm/icons/user-x as lucide-user-x';
import { VideoOff as LucideVideoOff } from 'lucide-react/dist/esm/icons/video-off as lucide-video-off';
import { Video as LucideVideo } from 'lucide-react/dist/esm/icons/video as lucide-video';
import { Voicemail as LucideVoicemail } from 'lucide-react/dist/esm/icons/voicemail as lucide-voicemail';
import { Wallet as LucideWallet } from 'lucide-react/dist/esm/icons/wallet as lucide-wallet';
import { Volume1 as LucideVolume1 } from 'lucide-react/dist/esm/icons/volume1 as lucide-volume1';
import { Volume2 as LucideVolume2 } from 'lucide-react/dist/esm/icons/volume2 as lucide-volume2';
import { VolumeX as LucideVolumeX } from 'lucide-react/dist/esm/icons/volume-x as lucide-volume-x';
import { Volume as LucideVolume } from 'lucide-react/dist/esm/icons/volume as lucide-volume';
import { Watch as LucideWatch } from 'lucide-react/dist/esm/icons/watch as lucide-watch';
import { WifiOff as LucideWifiOff } from 'lucide-react/dist/esm/icons/wifi-off as lucide-wifi-off';
import { Wifi as LucideWifi } from 'lucide-react/dist/esm/icons/wifi as lucide-wifi';
import { Wind as LucideWind } from 'lucide-react/dist/esm/icons/wind as lucide-wind';
import { XCircle as LucideXCircle } from 'lucide-react/dist/esm/icons/xcircle as lucide-xcircle';
import { XOctagon as LucideXOctagon } from 'lucide-react/dist/esm/icons/xoctagon as lucide-xoctagon';
import { XSquare as LucideXSquare } from 'lucide-react/dist/esm/icons/xsquare as lucide-xsquare';
import { Youtube as LucideYoutube } from 'lucide-react/dist/esm/icons/youtube as lucide-youtube';
import { ZapOff as LucideZapOff } from 'lucide-react/dist/esm/icons/zap-off as lucide-zap-off';
import { Zap as LucideZap } from 'lucide-react/dist/esm/icons/zap as lucide-zap';
import { ZoomIn as LucideZoomIn } from 'lucide-react/dist/esm/icons/zoom-in as lucide-zoom-in';
import { ZoomOut as LucideZoomOut } from 'lucide-react/dist/esm/icons/zoom-out as lucide-zoom-out';

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