import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Home, Search, User }  from "lucide-react";

interface SubscriptionTier {
  id: string;'
  name: string;
  type: 'free' | 'basic' | 'premium' | 'enterprise' | 'vip';'
  price: number;
  billingCycle: 'monthly' | 'yearly' | 'lifetime";
  features: SubscriptionFeature[];
  aiBenefits: AIBenefit[];
  limitations: string[];
  popular: boolean;
  recommended: boolean;
  aiScore: number;}
interface SubscriptionFeature {
  id: string;
  name: string;'
  description: string;
  category: 'core' | 'ai' | 'premium' | 'enterprise";
  included: boolean;
  usage?: {
    current: number;
    limit: number;
    unit: string;
  };}
interface AIBenefit {
  id: string;
  name: string;
  description: string;'
  value: number;
  category: 'productivity' | 'analytics' | 'support' | 'exclusive";
  aiPowered: boolean;}
interface UserMembership {
  id: string;
  userId: string;'
  tierId: string;
  status: 'active' | 'cancelled' | 'expired' | 'suspended";
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  paymentMethod: PaymentMethod;
  usage: UsageStats;
  aiRecommendations: AIRecommendation[];
  benefits: UserBenefit[];}
interface PaymentMethod {'
  id: string;
  type: 'card' | 'paypal' | 'bank";
  last4?: string;
  brand?: string;
  expiryDate?: string;
  default: boolean;}
interface UsageStats {
  totalUsage: number;
  monthlyUsage: number;
  featureUsage: Record<string, number>;
  costSavings: number;
  roi: number;}
interface AIRecommendation {'
  id: string;
  type: 'upgrade' | 'downgrade' | 'feature' | 'optimization";
  title: string;
  description: string;
  reasoning: string;
  potentialSavings?: number;'
  confidence: number;
  priority: 'low' | 'medium' | 'high';}
interface UserBenefit {
  id: string;
  name: string;
  description: string;
  used: boolean;
  value: number;
  category: string;
  lastUsed?: Date;}
interface BillingHistory {
  id: string;
  userId: string;
  amount: number;'
  currency: string;
  status: 'paid' | 'pending' | 'failed' | 'refunded";
  date: Date;
  description: string;
  invoiceUrl?: string;}
interface MembershipAnalytics {
  totalMembers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  churnRate: number;
  averageLifetime: number;
  topFeatures: string[];
  aiInsights: AIInsight[];}
interface AIInsight {
  id: string;
  title: string;'
  description: string;
  impact: 'positive' | 'negative' | 'neutral";
  confidence: number;
  recommendations: string[];}
const AIPoweredSubscriptionMembershipPage: NextPage = () => {
  const [subscriptionTiers, setSubscriptionTiers] = useState<SubscriptionTier[]>([]
  const [userMembership, setUserMembership] = useState<UserMembership | null>(null
  const [billingHistory, setBillingHistory] = useState<BillingHistory[]>([]'
  const [analytics, setAnalytics] = useState<MembershipAnalytics | null>(null
  const [activeTab, setActiveTab] = useState<'overview' | 'tiers' | 'billing' | 'analytics'>('overview
  const [isLoading, setIsLoading] = useState(true
  // Mock subscription tiers
  const $1: $2[] = [
    {
      id: '1',
      name: 'Free',
      type: 'free','
      price: 0,
      billingCycle: 'monthly',
      features: ['
        {
          id: '1',
          name: 'Basic AI Recommendations',
          description: 'Limited AI-powered service recommendations',
          category: 'ai',
          included: true,'
}
          usage: { current: 5, limit: 10, unit: 'recommendations/month'}}'
        {
          id: '2',
          name: 'Standard Support',
          description: 'Email support with 48-hour response time',
          category: 'core',
          included: true}
      ],
      aiBenefits: ['
        {
          id: '1',
          name: 'Basic AI Insights',
          description: 'Limited AI-powered marketplace insights','
          value: 50,
          category: 'analytics',
          aiPowered: true}'
      ],
      limitations: ['Limited AI features', 'No priority support', 'Basic analytics'],
      popular: false,
      recommended: false,
      aiScore: 60}'
    {
      id: '2',
      name: 'Basic',
      type: 'basic','
      price: 29,
      billingCycle: 'monthly',
      features: ['
        {
          id: '3',
          name: 'Advanced AI Recommendations',
          description: 'Unlimited AI-powered service recommendations',
          category: 'ai','
          included: true,
          usage: { current: 25, limit: 100, unit: 'recommendations/month'}}'
        {
          id: '4',
          name: 'Priority Support',
          description: 'Email and chat support with 24-hour response',
          category: 'core',
          included: true
        },'
{
          id: '5',
          name: 'AI-Powered Pricing Analysis',
          description: 'Access to AI-powered pricing estimation tools',
          category: 'ai',
          included: true}
      ],
      aiBenefits: ['
        {
          id: '2',
          name: 'Advanced AI Insights',
          description: 'Comprehensive AI-powered marketplace analytics','
          value: 150,
          category: 'analytics',
          aiPowered: true
        },'
{
          id: '3',
          name: 'AI Contract Assistant',
          description: 'Basic AI-powered contract generation','
          value: 200,
          category: 'productivity',
          aiPowered: true}'
      ],
      limitations: ['No enterprise features', 'Limited integrations'],
      popular: true,
      recommended: false,
      aiScore: 75}'
    {
      id: '3',
      name: 'Premium',
      type: 'premium','
      price: 79,
      billingCycle: 'monthly',
      features: ['
        {
          id: '6',
          name: 'Unlimited AI Recommendations',
          description: 'Unlimited AI-powered recommendations with priority',
          category: 'ai','
          included: true,
          usage: { current: 150, limit: -1, unit: 'recommendations/month'}}'
        {
          id: '7',
          name: 'VIP Support',
          description: '24/7 priority support with dedicated account manager',
          category: 'premium',
          included: true
        },'
{
          id: '8',
          name: 'Advanced AI Tools',
          description: 'Full access to all AI-powered marketplace tools',
          category: 'ai',
          included: true
        },'
    {
          id: '9',
          name: 'Learning Platform Access',
          description: 'Full access to AI-powered learning platform',
          category: 'premium',
          included: true}
      ],
      aiBenefits: ['
        {
          id: '4',
          name: 'Premium AI Insights',
          description: 'Advanced AI analytics with predictive modeling','
          value: 300,
          category: 'analytics',
          aiPowered: true
        },'
{
          id: '5',
          name: 'AI Legal Assistant',
          description: 'Full AI-powered contract and legal management','
          value: 500,
          category: 'productivity',
          aiPowered: true
        },'
    {
          id: '6',
          name: 'Exclusive AI Features',
          description: 'Access to beta AI features and early releases','
          value: 250,
          category: 'exclusive',
          aiPowered: true}'
      ],
      limitations: ['No enterprise integrations', 'Limited team features'],
      popular: false,
      recommended: true,
      aiScore: 90}'
    {
      id: '4',
      name: 'Enterprise',
      type: 'enterprise','
      price: 199,
      billingCycle: 'monthly',
      features: ['
        {
          id: '10',
          name: 'Enterprise AI Suite',
          description: 'Complete AI-powered enterprise solution',
          category: 'enterprise',
          included: true
        },'
{
          id: '11',
          name: 'Dedicated Support Team',
          description: '24/7 dedicated support team with custom solutions',
          category: 'enterprise',
          included: true
        },'
    {
          id: '12',
          name: 'Custom AI Integration',
          description: 'Custom AI integration with your existing systems',
          category: 'enterprise',
          included: true}
      ],
      aiBenefits: ['
        {
          id: '7',
          name: 'Enterprise AI Analytics',
          description: 'Custom AI analytics and reporting','
          value: 800,
          category: 'analytics',
          aiPowered: true
        },'
{
          id: '8',
          name: 'Custom AI Solutions',
          description: 'Tailored AI solutions for your business needs','
          value: 1200,
          category: 'exclusive',
          aiPowered: true}
      ],
      limitations: [],
      popular: false,
      recommended: false,
      aiScore: 95
    }]
  // Mock user membership'
  const mockUserMembership: UserMembership = {
    id: '1',
    userId: 'user123',
    tierId: '2',
    status: 'active',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    autoRenew: true,'
    paymentMethod: {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryDate: '12/25',
      default: true}
    usage: {
      totalUsage: 85,
      monthlyUsage: 25,'
      featureUsage: {
        'AI Recommendations': 25,
        'Pricing Analysis': 15,
        'Contract Tools': 10}
      costSavings: 1250,
      roi: 3.2}
    aiRecommendations: ['
      {
        id: '1',
        type: 'upgrade',
        title: 'Upgrade to Premium',
        description: 'Consider upgrading to Premium for unlimited AI features',
        reasoning: 'You\'re using 25% of your monthly AI recommendations. Premium offers unlimited access.',
        potentialSavings: 500,'
        confidence: 0.85,
        priority: 'medium'
      },'
{
        id: '2',
        type: 'feature',
        title: 'Try Learning Platform',
        description: 'Access the AI-powered learning platform for skill development',
        reasoning: "Based on your usage patterns", you would benefit from skill development features.','
        confidence: 0.72,
        priority: 'low'}
    ],
    benefits: ['
      {
        id: '1',
        name: 'Advanced AI Insights',
        description: 'Comprehensive AI-powered marketplace analytics',
        used: true,'
        value: 150,
        category: 'analytics',
        lastUsed: new Date('2024-01-15'
      },'
{
        id: '2',
        name: 'AI Contract Assistant',
        description: 'Basic AI-powered contract generation',
        used: false,'
        value: 200,
        category: 'productivity
      }]}
  // Mock billing history
  const $1: $2[] = [
    {
      id: '1',
      userId: 'user123','
      amount: 29,
      currency: 'USD',
      status: 'paid',
      date: new Date('2024-01-01'),
      description: 'Basic Plan - Monthly Subscription'
    },'
{
      id: '2',
      userId: 'user123','
      amount: 29,
      currency: 'USD',
      status: 'paid',
      date: new Date('2023-12-01'),
      description: 'Basic Plan - Monthly Subscription'
    },'
    {
      id: '3',
      userId: 'user123','
      amount: 29,
      currency: 'USD',
      status: 'paid',
      date: new Date('2023-11-01'),
      description: 'Basic Plan - Monthly Subscription
    }]
  // Mock analytics
  const mockAnalytics: MembershipAnalytics = {
    totalMembers: 15420,
    activeSubscriptions: 12850,
    monthlyRevenue: 385000,
    churnRate: 0.08,'
    averageLifetime: 18,
    topFeatures: ['AI Recommendations', 'Pricing Analysis', 'Contract Tools'],
    aiInsights: ['
      {
        id: '1',
        title: 'High Engagement with AI Features',
        description: Users are highly engaged with AI-powered features, showing 85% usage rate',
        impact: 'positive','
        confidence: 0.92,
        recommendations: ['Consider expanding AI features', 'Add more AI-powered tools']
      },'
{
        id: '2',
        title: 'Premium Tier Conversion Opportunity',
        description: 'Basic tier users show high potential for premium upgrade based on usage patterns',
        impact: 'positive','
        confidence: 0.78,
        recommendations: ['Target upgrade campaigns', 'Highlight premium benefits']
      }]}
  useEffect(() => {
    setTimeout(() => {
      setSubscriptionTiers(mockSubscriptionTiers
      setUserMembership(mockUserMembership
      setBillingHistory(mockBillingHistory
      setAnalytics(mockAnalytics
      setIsLoading(false
    } 1000
  } []
  const getTierColor = (type: string) => {'
    switch (type) {
      case 'free': return 'bg-gray-500/20 text-gray-300
      case 'basic': return 'bg-blue-500/20 text-blue-300
      case 'premium': return 'bg-purple-500/20 text-purple-300
      case 'enterprise': return 'bg-green-500/20 text-green-300
      case 'vip': return 'bg-yellow-500/20 text-yellow-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300
      case 'cancelled': return 'bg-red-500/20 text-red-300
      case 'expired': return 'bg-yellow-500/20 text-yellow-300
      case 'suspended': return 'bg-orange-500/20 text-orange-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  const getPriorityColor = (priority: string) => {'
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300
      case 'medium': return 'bg-yellow-500/20 text-yellow-300
      case 'low': return 'bg-green-500/20 text-green-300
      default: return 'bg-gray-500/20 text-gray-300'}}
  return (
    <div>
      </div><div className=" relative z-10 container-responsive" py-8>
        "
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head> 
        <title>AI-Powered Subscription & Membership | Zion Tech Group</title>
        <meta name="description content=Choose from tiered memberships with AI-powered benefits, automated billing, and intelligent upgrade recommendations. > </meta" name="description" content="Choose from tiered memberships with AI-powered benefits, automated billing, and intelligent upgrade" recommendations." ><meta name="keywords content=subscription, membership, premium, billing, AI benefits, tiered pricing > </meta" name="keywords" content="subscription, membership, premium, billing, AI benefits, tiered" pricing" ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head> 
      {/* Header */}"
      <div className="relative" overflow-hidden>
        </div><div className="absolute" inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20></div>
        <div className="relative" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44> 
          </div><div className="text-center>"
            <h1 className="text-5xl" md text-6xl font-bold text-white mb-6>
              AI-Powered Subscription & Membership
            </h1>
            <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>
              Choose from tiered memberships with AI-powered benefits, automated billing, "
              and intelligent upgrade recommendations designed to maximize your marketplace success.
            </p>
            <div className="flex" flex-wrap justify-center gap-4> 
              </div><div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className="text-white" font-semibold>🎯 Tiered Plans</span> 
              </div>
              <div className="bg-white/10 backdrop-blur-sm:rounded-lg px-6" py-3>
                <span className="text-white" font-semibold>🤖 AI Benefits</span>
              </div>
              <div className="bg-white/10" backdrop-blur-sm:rounded-lg px-6 py-3 >
                <span className="text-white" font-semibold>💰 Smart Billing</span>
              </div>
            </div">
          </div>
        </div>
      </div>
"
      {/* Main Content */}
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
        {isLoading ? (
          </div><div className="flex" justify-center items-center py-40>
            <div className="animate-spin" rounded-full h-12 w-12 border-b-2 border-purple-500 ></div>
          </div>
        ) : ("
          </>
            {/* Tabs */}"
            <div className=" flex flex-wrap justify-center" mb-8>'
              "''
                onClick={() => setActiveTab('overview')}"'
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'overview
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                My Membership
              </button> '
              "'''`
                onClick={() => setActiveTab('tiers')}''``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'tiers
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Plans & Pricing
              </button>'
              `
                onClick={() => setActiveTab('billing')}''``
                className="{`px-6" py-3 rounded-lg:font-semibold transition-all duration-300 ${
                  activeTab === 'billing
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'``
                }`}
              >
                Billing History
              </button>'
              `
                onClick={() => setActiveTab('analytics')}''``
                className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'analytics
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                      'bg-white/10 text-gray-300 hover bg-white/20'``
                }`}
              >
                Analytics
              </button>
            </div>
'
            {/* Overview Tab */},"''
{activeTab === 'overview' && userMembership && (
              <div className=" space-y-8>
                {/* Current Membership */}
                </div><div className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>
                  <div className="flex" items-start justify-between mb-6>
                    </div><div> 
                      <h3 className="text-2xl" font-bold text-white mb-2>Current Membership</h3>
                      <p className="text-gray-300>Manage" your subscription and view benefits</p>`
                    </div">``"
                    <span className="{`px-3" py-3 rounded-full text-sm font-medium  ${getStatusColor(userMembership.status)}`}>
                      {userMembership.status}
                    </span>
                  </div>
                  <div className="grid"" grid-cols-1 md:grid-cols-3 gap-6 mb-6>
                    </div><div className=" bg-white/5 rounded-lg" p-4>
                      <div className="text-sm" text-gray-400 mb-1>Current Plan</div>
                      <div className="text-white" font-semibold>Basic Plan</div>
                      <div className="text-gray-300" text-sm >$29/month</div>
                    </div>
                    <div className="bg-white/5" rounded-lg p-4>
                      </div><div className="text-sm" text-gray-400 mb-1>Next Billing</div>
                      <div className="text-white" font-semibold>Feb 1, 2024</div>
                      <div className="text-gray-300" text-sm >Auto-renewal enabled</div>
                    </div>
                    <div className="bg-white/5" rounded-lg p-4>
                      </div><div className="text-sm" text-gray-400 mb-1>Total Savings</div>
                      <div className="text-white" font-semibold>${userMembership.usage.costSavings}</div>
                      <div className="text-gray-300" text-sm >ROI: {userMembership.usage.roi}x</div>
                    </div>
                  </div>

                  {/* AI Recommendations */}"
                  <div className="mb-6">
                    <h4 className="text-lg" font-semibold text-white mb-4>AI Recommendations</h4>
                    <div className="space-y-3>" 
                      {userMembership.aiRecommendations.map((rec) => (
                        </div><div key={rec.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                          <div className=" flex items-start justify-between" mb-2>`
                            <h5 className="text-white" font-semibold>{rec.title}</h5>``
                            <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                              {rec.priority} priority
                            </span>
                          </div>
                          <p className="text-gray-300" text-sm mb-2 >{rec.description}</p>
                          <p className="text-gray-400" text-xs mb-2>{rec.reasoning}</p>
                          {rec.potentialSavings && (
                            <div className="text-sm" text-green-300>
                              Potential savings: ${rec.potentialSavings}
                            </div>
                          )}
                          <div className="text-xs" text-gray-400 mt-2>
                            Confidence  {Math.round(rec.confidence * 100)}%
                          </div>
                        </div>
                      ))}
                    </div >
                  </div>
                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg" font-semibold text-white mb-4>Your Benefits</h4>
                    <div className="grid" grid-cols-1 md grid-cols-2 gap-4>
                      {userMembership.benefits.map((benefit) => (
                        </div><div key={benefit.id} className=" bg-white/5 rounded-lg" p-4>
                          <div className="flex" items-center justify-between mb-2>
                            <h5 className="text-white" font-semibold >{benefit.name}</h5>'`
                            ''``
                            }`}>
                              {benefit.used ? 'Used'   'Available'}
                            </span>
                          </div> 
                          <p className="text-gray-300" text-sm mb-2>{benefit.description}</p>
                          <div className="flex" justify-between text-sm>
                            <span className="text-gray-400>Value:</span>"
                            <span className="text-white>${benefit.value}</span>"
                          </div>
                          {benefit.lastUsed && (
                            <div className="text-xs" text-gray-400 mt-1>
                              Last used  {benefit.lastUsed.toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}'
            {/* Tiers Tab */}, ''
{activeTab === 'tiers' && (
              <div className="space-y-8>"
                </div><div className=" grid grid-cols-1 md:grid-cols-2 lg grid-cols-4 gap-6 >`
                  {subscriptionTiers.map((tier) => (``
                    }`}>
                      {tier.recommended && (
                        </div><div className="bg-gradient-to-r" from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-3 rounded-full mb-4  inline-block>
                          AI Recommended
                        </div>
                      )},"
{tier.popular && (
                        <div className="bg-blue-500/20" text-blue-300 text-xs font-semibold px-3 py-3 rounded-full mb-4 inline-block>
                          Most Popular
                        </div>
                      )}"
                      <h3 className="text-xl" font-bold text-white mb-2 >{tier.name}</h3>
                      <div className="mb-4"">
                        <span className="text-3xl" font-bold text-white>${tier.price}</span>
                        <span className="text-gray-400>/{tier.billingCycle}</span>"
                      </div>`
                      <div className="mb-4">``
                        <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getTierColor(tier.type)}`}>
                          AI Score  {tier.aiScore}%
                        </span>
                      </div>
                      <div className="space-y-3 mb-6>
                        {tier.features.slice(0, 3).map((feature) => (
                          </div><div key={feature.id} className="flex" items-center text-sm>
                            <span className="text-green-400" mr-2 >✓</span>
                            <span className="text-white>{feature.name}</span>"
                          </div>
                        ))} 
                        {tier.features.length > 3 && (
                          <div className="text-gray-400" text-sm>+{tier.features.length - 3} more features</div>
                        )}
                      </div>
                      <div className="mb-6">
                        <h4 className="text-sm" font-semibold text-gray-400 mb-2 >AI Benefits</h4>
                        <div className="space-y-2>
                          {tier.aiBenefits.slice(0, 2).map((benefit) => (
                            </div><div key={benefit.id} className="text-xs">
                              <div className="text-white" font-medium>{benefit.name}</div>
                              <div className="text-gray-400>Value:" ${benefit.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
'`
                      ''``
                      }`}>
                        {tier.type === 'free' ? 'Current Plan'   'Choose Plan'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}'
            {/* Billing Tab */}, ''
{activeTab === 'billing' && (
              <div className="space-y-8>
                </div><div className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>
                  <h3 className="text-xl" font-semibold text-white mb-6>Billing History</h3>
                  <div className="space-y-4>"
                    {billingHistory.map((bill) => (
                      </div><div key={bill.id} className="flex" items-center justify-between bg-white/5 rounded-lg p-4> 
                        <div>
                          </div><div className="text-white" font-semibold>{bill.description}</div>
                          <div className="text-gray-400" text-sm >{bill.date.toLocaleDateString()}</div>
                        </div>
                        <div className="text-right>"
                          </div><div className="text-white" font-semibold>${bill.amount}</div>`
                          ``
                          }`}>
                            {bill.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}'
            {/* Analytics Tab */},'"'
{activeTab === 'analytics' && analytics && (
              <div className="space-y-8>" 
                </div><div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-4" gap-6>
                  <div className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.totalMembers.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm >Total Members</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2>{analytics.activeSubscriptions.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm>Active Subscriptions</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl p-6 border border-white/10 >
                    </div><div className="text-3xl" font-bold text-white mb-2>${analytics.monthlyRevenue.toLocaleString()}</div>
                    <div className="text-gray-400" text-sm>Monthly Revenue</div>
                  </div>
                  <div className="bg-white/10" backdrop-blur-sm:rounded-xl:p-6 border border-white/10>
                    </div><div className="text-3xl" font-bold text-white mb-2 >{(analytics.churnRate * 100).toFixed(1)}%</div>
                    <div className="text-gray-400" text-sm>Churn Rate</div>
                  </div>
                </div>
                <div className=" bg-white/10 backdrop-blur-sm:rounded-xl p-6 border" border-white/10>"
                  <h3 className="text-xl" font-semibold text-white mb-6>AI Insights</h3>
                  <div className="space-y-4>"
                    {analytics.aiInsights.map((insight) => (
                      </div><div key={insight.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg" p-4>
                        <div className=" flex items-start justify-between" mb-2>
                          <h4 className="text-white" font-semibold>{insight.title}</h4>`
                          ``
                          }`}>
                            {insight.impact}
                          </span>
                        </div>
                        <p className="text-gray-300" text-sm mb-3>{insight.description}</p>
                        <div className="text-xs" text-gray-400 mb-2>
                          Confidence  {Math.round(insight.confidence * 100)}%
                        </div>'
                        <div className="text-xs" text-gray-400>
                          <strong>Recommendations:</strong> {insight.recommendations.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r" from-purple-600/20 to-pink-600/20 mt-16 >
        </div><div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-36>
          <div className="text-center">
            <h2 className="text-3xl" font-bold text-white mb-4>
              Ready to Unlock Premium Benefits? 
            </h2>
            <p className="text-xl"" text-gray-300 mb-8 max-w-2xl:mx-auto>
              Upgrade your membership to access advanced AI features, "
              priority support, and exclusive marketplace benefits.
            </p>
            <div className=" flex flex-col sm flex-row gap-4" justify-center>
              <Link href=/ai-service-matcher className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >View Plans
              </Link href=/ai-service-matcher className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105" ></Link>
              <Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Contact Sales
              </Link href=/talent-directory  className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div> 
  </div>
;
};
''`
export default AIPoweredSubscriptionMembershipPage ")))))))))))))))"'"'`