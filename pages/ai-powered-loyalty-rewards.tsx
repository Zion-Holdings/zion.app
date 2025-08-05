import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  level: number;
  experience: number;
  points: number;
  rank: string;
  badges: Badge[];
  achievements: Achievement[];
  streak: number;
  totalTransactions: number;
  totalValue: number;
  memberSince: Date;
  lastActive: Date;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'transaction' | 'social' | 'skill' | 'milestone' | 'special';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
  progress?: number;
  maxProgress?: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  points: number;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
  aiRecommended: boolean;
}

interface Reward {
  id: string;
  name: string;
  description: string;
  type: 'discount' | 'bonus' | 'feature' | 'exclusive' | 'cashback';
  value: number;
  currency?: string;
  pointsCost: number;
  available: boolean;
  expiresAt?: Date;
  aiRecommended: boolean;
  usageCount: number;
  maxUsage?: number;
}

interface Leaderboard {
  id: string;
  name: string;
  category: 'points' | 'transactions' | 'streak' | 'reviews' | 'referrals';
  period: 'daily' | 'weekly' | 'monthly' | 'all-time';
  entries: LeaderboardEntry[];
  userRank: number;
  totalParticipants: number;
}

interface LeaderboardEntry {
  rank: number;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  score: number;
  change: number;
}

interface GamificationEvent {
  id: string;
  name: string;
  description: string;
  type: 'challenge' | 'competition' | 'quest' | 'seasonal';
  startDate: Date;
  endDate: Date;
  rewards: Reward[];
  participants: number;
  maxParticipants?: number;
  aiOptimized: boolean;
}

interface PointsHistory {
  id: string;
  action: string;
  points: number;
  category: string;
  timestamp: Date;
  description: string;
  multiplier: number;
}

const AIPoweredLoyaltyRewardsPage: NextPage = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [badges, setBadges] = useState<Badge[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [rewards, setRewards] = useState<Reward[]>([])
  const [leaderboards, setLeaderboards] = useState<Leaderboard[]>([])
  const [events, setEvents] = useState<GamificationEvent[]>([])
  const [pointsHistory, setPointsHistory] = useState<PointsHistory[]>([])
  const [activeTab, setActiveTab] = useState<'profile' | 'badges' | 'achievements' | 'rewards' | 'leaderboards' | 'events'>('profile')
  const [isLoading, setIsLoading] = useState(true)

  // Mock user profile
  const mockUserProfile: UserProfile = {
    id: '1',
    name: 'Alex Johnson',
    avatar: '/images/avatars/alex-johnson.jpg',
    level: 15,
    experience: 12500,
    points: 28450,
    rank: 'Elite Trader',
    badges: [
      {
        id: '1',
        name: 'First Transaction',
        description: 'Completed your first marketplace transaction',
        icon: '🎯',
        category: 'transaction',
        rarity: 'common',
        unlockedAt: new Date('2024-01-05')
      },
      {
        id: '2',
        name: 'Power User',
        description: 'Reached 100 transactions',
        icon: '⚡',
        category: 'milestone',
        rarity: 'rare',
        unlockedAt: new Date('2024-01-15')
      },
      {
        id: '3',
        name: 'AI Enthusiast',
        description: 'Used AI-powered features 50 times',
        icon: '🤖',
        category: 'skill',
        rarity: 'epic',
        unlockedAt: new Date('2024-01-20')
      }
    ],
    achievements: [
      {
        id: '1',
        name: 'Marketplace Pioneer',
        description: 'Be among the first 1000 users',
        icon: '🏆',
        category: 'milestone',
        points: 500,
        progress: 1,
        maxProgress: 1,
        aiRecommended: true
      },
      {
        id: '2',
        name: 'Skill Master',
        description: 'Complete 10 skill assessments',
        icon: '📚',
        category: 'learning',
        points: 300,
        progress: 7,
        maxProgress: 10,
        aiRecommended: false
      }
    ],
    streak: 28,
    totalTransactions: 156,
    totalValue: 45000,
    memberSince: new Date('2024-01-01'),
    lastActive: new Date()
  }

  // Mock badges
  const mockBadges: Badge[] = [
    {
      id: '1',
      name: 'First Transaction',
      description: 'Completed your first marketplace transaction',
      icon: '🎯',
      category: 'transaction',
      rarity: 'common',
      unlockedAt: new Date('2024-01-05')
    },
    {
      id: '2',
      name: 'Power User',
      description: 'Reached 100 transactions',
      icon: '⚡',
      category: 'milestone',
      rarity: 'rare',
      unlockedAt: new Date('2024-01-15')
    },
    {
      id: '3',
      name: 'AI Enthusiast',
      description: 'Used AI-powered features 50 times',
      icon: '🤖',
      category: 'skill',
      rarity: 'epic',
      unlockedAt: new Date('2024-01-20')
    },
    {
      id: '4',
      name: 'Community Helper',
      description: 'Help 25 other users',
      icon: '🤝',
      category: 'social',
      rarity: 'rare',
      progress: 18,
      maxProgress: 25
    },
    {
      id: '5',
      name: 'Legendary Trader',
      description: 'Complete 1000 transactions',
      icon: '👑',
      category: 'milestone',
      rarity: 'legendary',
      progress: 156,
      maxProgress: 1000
    }
  ]

  // Mock achievements
  const mockAchievements: Achievement[] = [
    {
      id: '1',
      name: 'Marketplace Pioneer',
      description: 'Be among the first 1000 users',
      icon: '🏆',
      category: 'milestone',
      points: 500,
      progress: 1,
      maxProgress: 1,
      aiRecommended: true
    },
    {
      id: '2',
      name: 'Skill Master',
      description: 'Complete 10 skill assessments',
      icon: '📚',
      category: 'learning',
      points: 300,
      progress: 7,
      maxProgress: 10,
      aiRecommended: false
    },
    {
      id: '3',
      name: 'AI Power User',
      description: 'Use all AI-powered features',
      icon: '🧠',
      category: 'technology',
      points: 400,
      progress: 3,
      maxProgress: 5,
      aiRecommended: true
    },
    {
      id: '4',
      name: 'Referral Champion',
      description: 'Refer 50 new users',
      icon: '📢',
      category: 'social',
      points: 600,
      progress: 23,
      maxProgress: 50,
      aiRecommended: false
    }
  ]

  // Mock rewards
  const mockRewards: Reward[] = [
    {
      id: '1',
      name: 'Premium Service Discount',
      description: '20% off on premium services',
      type: 'discount',
      value: 20,
      currency: '%',
      pointsCost: 1000,
      available: true,
      aiRecommended: true,
      usageCount: 0,
      maxUsage: 3
    },
    {
      id: '2',
      name: 'Exclusive AI Consultation',
      description: '1-hour AI strategy consultation',
      type: 'feature',
      value: 1,
      pointsCost: 2500,
      available: true,
      aiRecommended: true,
      usageCount: 0,
      maxUsage: 1
    },
    {
      id: '3',
      name: 'Cashback Bonus',
      description: '$50 cashback on next transaction',
      type: 'cashback',
      value: 50,
      currency: '$',
      pointsCost: 5000,
      available: true,
      aiRecommended: false,
      usageCount: 0,
      maxUsage: 1
    }
  ]

  // Mock leaderboards
  const mockLeaderboards: Leaderboard[] = [
    {
      id: '1',
      name: 'Points Leaderboard',
      category: 'points',
      period: 'monthly',
      userRank: 3,
      totalParticipants: 1247,
      entries: [
        {
          rank: 1,
          user: { id: '1', name: 'Sarah Chen', avatar: '/images/avatars/sarah-chen.jpg' },
          score: 45620,
          change: 2
        },
        {
          rank: 2,
          user: { id: '2', name: 'Mike Rodriguez', avatar: '/images/avatars/mike-rodriguez.jpg' },
          score: 42350,
          change: -1
        },
        {
          rank: 3,
          user: { id: '3', name: 'Alex Johnson', avatar: '/images/avatars/alex-johnson.jpg' },
          score: 28450,
          change: 1
        }
      ]
    }
  ]

  // Mock events
  const mockEvents: GamificationEvent[] = [
    {
      id: '1',
      name: 'AI Innovation Challenge',
      description: 'Complete AI-powered tasks and earn exclusive rewards',
      type: 'challenge',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
      rewards: mockRewards.slice(0, 2),
      participants: 456,
      maxParticipants: 1000,
      aiOptimized: true
    },
    {
      id: '2',
      name: 'Winter Trading Quest',
      description: 'Special seasonal event with bonus points and rewards',
      type: 'seasonal',
      startDate: new Date('2024-12-01'),
      endDate: new Date('2024-12-31'),
      rewards: mockRewards.slice(1, 3),
      participants: 234,
      aiOptimized: false
    }
  ]

  // Mock points history
  const mockPointsHistory: PointsHistory[] = [
    {
      id: '1',
      action: 'Transaction Completed',
      points: 150,
      category: 'transaction',
      timestamp: new Date('2024-01-20 14:30:00'),
      description: 'Completed service purchase',
      multiplier: 1.5
    },
    {
      id: '2',
      action: 'AI Feature Used',
      points: 50,
      category: 'ai-usage',
      timestamp: new Date('2024-01-20 12:15:00'),
      description: 'Used AI-powered recommendations',
      multiplier: 1.0
    },
    {
      id: '3',
      action: 'Achievement Unlocked',
      points: 500,
      category: 'achievement',
      timestamp: new Date('2024-01-19 16:45:00'),
      description: 'Marketplace Pioneer achievement',
      multiplier: 1.0
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setUserProfile(mockUserProfile)
      setBadges(mockBadges)
      setAchievements(mockAchievements)
      setRewards(mockRewards)
      setLeaderboards(mockLeaderboards)
      setEvents(mockEvents)
      setPointsHistory(mockPointsHistory)
      setIsLoading(false)
    }, 1000)
  }, [mockUserProfile, mockBadges, mockAchievements, mockRewards, mockLeaderboards, mockEvents, mockPointsHistory])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500/20 text-gray-300'
      case 'rare': return 'bg-blue-500/20 text-blue-300'
      case 'epic': return 'bg-purple-500/20 text-purple-300'
      case 'legendary': return 'bg-yellow-500/20 text-yellow-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'transaction': return 'bg-green-500/20 text-green-300'
      case 'social': return 'bg-blue-500/20 text-blue-300'
      case 'skill': return 'bg-purple-500/20 text-purple-300'
      case 'milestone': return 'bg-orange-500/20 text-orange-300'
      case 'special': return 'bg-pink-500/20 text-pink-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getRewardTypeColor = (type: string) => {
    switch (type) {
      case 'discount': return 'bg-green-500/20 text-green-300'
      case 'bonus': return 'bg-blue-500/20 text-blue-300'
      case 'feature': return 'bg-purple-500/20 text-purple-300'
      case 'exclusive': return 'bg-yellow-500/20 text-yellow-300'
      case 'cashback': return 'bg-pink-500/20 text-pink-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Loyalty & Rewards | Zion Tech Group</title>
        <meta name="description" content="Earn points, unlock badges, achieve milestones, and redeem rewards with our AI-powered loyalty and gamification system." />
        <meta name="keywords" content="loyalty program, rewards, points, badges, achievements, gamification, marketplace rewards" />
      </Head>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Loyalty & Rewards
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Earn points, unlock badges, achieve milestones, and redeem exclusive rewards 
              with our intelligent gamification system designed to enhance your marketplace experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🎯 Earn Points</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🏆 Unlock Badges</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">🎁 Redeem Rewards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'profile'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('badges')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'badges'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Badges
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'achievements'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Achievements
              </button>
              <button
                onClick={() => setActiveTab('rewards')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'rewards'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Rewards
              </button>
              <button
                onClick={() => setActiveTab('leaderboards')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'leaderboards'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Leaderboards
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'events'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Events
              </button>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && userProfile && (
              <div className="space-y-8">
                {/* User Profile Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {userProfile.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{userProfile.name}</h2>
                      <p className="text-gray-300">{userProfile.rank}</p>
                      <p className="text-sm text-gray-400">Member since {userProfile.memberSince.toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{userProfile.level}</div>
                      <div className="text-gray-400">Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{userProfile.points.toLocaleString()}</div>
                      <div className="text-gray-400">Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{userProfile.streak}</div>
                      <div className="text-gray-400">Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{userProfile.totalTransactions}</div>
                      <div className="text-gray-400">Transactions</div>
                    </div>
                  </div>

                  {/* Experience Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Experience</span>
                      <span className="text-white">{userProfile.experience.toLocaleString()} / 20,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: `${(userProfile.experience / 20000) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* Recent Badges */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Badges</h3>
                    <div className="flex space-x-4">
                      {userProfile.badges.slice(0, 3).map((badge) => (
                        <div key={badge.id} className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                          <span className="text-2xl">{badge.icon}</span>
                          <div>
                            <div className="text-white font-semibold">{badge.name}</div>
                            <div className="text-gray-400 text-sm">{badge.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Points History */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {pointsHistory.map((entry) => (
                      <div key={entry.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">+</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">{entry.action}</div>
                            <div className="text-gray-400 text-sm">{entry.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-semibold">+{entry.points}</div>
                          <div className="text-gray-400 text-xs">{entry.timestamp.toLocaleDateString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Badges Tab */}
            {activeTab === 'badges' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {badges.map((badge) => (
                  <div key={badge.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{badge.icon}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(badge.rarity)}`}>
                        {badge.rarity}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{badge.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{badge.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Category:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(badge.category)}`}>
                          {badge.category}
                        </span>
                      </div>
                      
                      {badge.progress !== undefined && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Progress:</span>
                            <span className="text-white">{badge.progress} / {badge.maxProgress}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${(badge.progress / badge.maxProgress!) * 100}%` }}></div>
                          </div>
                        </div>
                      )}
                      
                      {badge.unlockedAt && (
                        <div className="text-sm text-gray-400">
                          Unlocked: {badge.unlockedAt.toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{achievement.icon}</span>
                      {achievement.aiRecommended && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                          AI Recommended
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Points:</span>
                        <span className="text-white">{achievement.points}</span>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Progress:</span>
                          <span className="text-white">{achievement.progress} / {achievement.maxProgress}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}></div>
                        </div>
                      </div>
                      
                      {achievement.unlockedAt && (
                        <div className="text-sm text-green-400">
                          ✓ Unlocked {achievement.unlockedAt.toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((reward) => (
                  <div key={reward.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">🎁</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRewardTypeColor(reward.type)}`}>
                        {reward.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{reward.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{reward.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Value:</span>
                        <span className="text-white">{reward.value}{reward.currency}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Points Cost:</span>
                        <span className="text-white">{reward.pointsCost.toLocaleString()}</span>
                      </div>
                      
                      {reward.maxUsage && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Usage:</span>
                          <span className="text-white">{reward.usageCount} / {reward.maxUsage}</span>
                        </div>
                      )}
                      
                      {reward.aiRecommended && (
                        <div className="text-sm text-purple-400">
                          🤖 AI Recommended for you
                        </div>
                      )}
                    </div>
                    
                    <button className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      reward.available
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}>
                      {reward.available ? 'Redeem Reward' : 'Not Available'}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Leaderboards Tab */}
            {activeTab === 'leaderboards' && (
              <div className="space-y-6">
                {leaderboards.map((leaderboard) => (
                  <div key={leaderboard.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-white">{leaderboard.name}</h3>
                      <div className="text-sm text-gray-400">
                        Your Rank: #{leaderboard.userRank} of {leaderboard.totalParticipants}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {leaderboard.entries.map((entry) => (
                        <div key={entry.user.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-lg font-bold text-white">#{entry.rank}</div>
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {entry.user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">{entry.user.name}</div>
                              <div className="text-gray-400 text-sm">{entry.score.toLocaleString()} points</div>
                            </div>
                          </div>
                          <div className="text-right">
                            {entry.change > 0 && <div className="text-green-400 text-sm">+{entry.change}</div>}
                            {entry.change < 0 && <div className="text-red-400 text-sm">{entry.change}</div>}
                            {entry.change === 0 && <div className="text-gray-400 text-sm">-</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{event.name}</h3>
                      {event.aiOptimized && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                          AI Optimized
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Type:</span>
                        <span className="text-white capitalize">{event.type}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">
                          {event.startDate.toLocaleDateString()} - {event.endDate.toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Participants:</span>
                        <span className="text-white">
                          {event.participants.toLocaleString()}
                          {event.maxParticipants && ` / ${event.maxParticipants.toLocaleString()}`}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-400 mb-2">Rewards:</div>
                      <div className="flex space-x-2">
                        {event.rewards.slice(0, 3).map((reward, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {reward.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                      Join Event
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Earning Rewards?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our AI-powered loyalty program and start earning points, unlocking badges, 
              and redeeming exclusive rewards for your marketplace activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
                Join Now
              </Link>
              <Link href="/ai-service-matcher" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredLoyaltyRewardsPage 