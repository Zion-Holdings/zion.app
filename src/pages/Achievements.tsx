import { AchievementBadges, Achievement } from "@/components/gamification/AchievementBadges";
import { UserProgress } from "@/components/gamification/UserProgress";
import { UserLeaderboard, LeaderboardEntry } from "@/components/gamification/UserLeaderboard";

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "profile",
    title: "Profile Complete",
    description: "Complete your user profile",
    achieved: true,
  },
  {
    id: "first-sale",
    title: "First Purchase",
    description: "Complete your first checkout",
    achieved: false,
  },
  {
    id: "referral",
    title: "Referrer",
    description: "Refer a new user to Zion",
    achieved: false,
  },
];

const LEADERBOARD: LeaderboardEntry[] = [
  { name: "Alice", points: 1200 },
  { name: "Bob", points: 950 },
  { name: "Carol", points: 780 },
];

export default function AchievementsPage() {
  return (
    <div className="container max-w-3xl py-10 space-y-6">
      <h1 className="text-3xl font-bold">Achievements</h1>
      <UserProgress current={650} goal={1000} />
      <AchievementBadges achievements={ACHIEVEMENTS} />
      <UserLeaderboard entries={LEADERBOARD} />
    </div>
  );
}
