
import { LucideIcon } from 'lucide-react/dist/esm/icons/lucide-icon';
import { BadgeCheck } from 'lucide-react/dist/esm/icons/badge-check';
import { // publishing a listing
  Award } from 'lucide-react/dist/esm/icons/// publishing a listing
  award';
import { // top contributor
  Star } from 'lucide-react/dist/esm/icons/// top contributor
  star';
import { // profile complete
  Trophy } from 'lucide-react/dist/esm/icons/// profile complete
  trophy';
import { // featured creator
  BadgePlus } from 'lucide-react/dist/esm/icons/// featured creator
  badge-plus';
import { // first action
  BadgeDollarSign // monetization } from 'lucide-react/dist/esm/icons/// first action
  badge-dollar-sign // monetization';

export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
  | "monetized";

export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export const badgeList: BadgeMeta[] = [
  {
    key: "first_listing",
    name: "First Listing",
    description: "Published your first product, service, or listing.",
    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple
    bg: "#E5DEFF",     // Soft Purple
  },
  {
    key: "top_contributor",
    name: "Top Contributor",
    description: "Recognized as a top contributor in the community.",
    icon: Award,
    color: "#F97316",  // Bright Orange
    bg: "#FEF7CD",     // Soft Yellow
  },
  {
    key: "profile_complete",
    name: "Profile Complete",
    description: "Completed all steps in your profile setup.",
    icon: Star,
    color: "#FFD700", // Gold
    bg: "#FFFBEA",   // Very light yellow
  },
  {
    key: "featured_creator",
    name: "Featured Creator",
    description: "Featured on the Zion homepage.",
    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue
    bg: "#D3E4FD",   // Soft Blue
  },
  {
    key: "first_action",
    name: "First Action",
    description: "Took your first community, posting, or listing action.",
    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue
    bg: "#F3F3F3",   // Light Gray
  },
  {
    key: "monetized",
    name: "Monetized",
    description: "Earned your first AI dollar in the marketplace.",
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  },
];

export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key);

