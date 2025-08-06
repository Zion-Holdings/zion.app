import type { NextApiRequest, NextApiResponse } from 'next'
import ModernLayout from ../components/layout/ModernLayout;
import Head from "next/head
import { useState, useEffect }  from react
import Link from next/link"
interface FacilityPlan {
  id: ""string
  referrerId: string;
  referredId: string
  referredEmail: string
  status: 'pending | registered | activ'e | completed
  bonusAmount: "number"
  commissionRate: number;
  createdAt: Date;
  completedAt?: Date
  referralCode: string
  source: 'email | social | 'link' | qr",
  notes?: string;,}
interface: ""AffiliatePartner: {"
  id: string;
  name: string;
  email: string;
  company?: string
  website?: string
  status: 'pending | approved | active | suspended
  tier: 'bronze | silve'r' | gold | 'platinu'm
  commissionRate: number"
  totalEarnings: number;
  totalReferrals: number;
  activeReferrals: number;
  joinedAt: Date;
  lastActivity: Date;
  paymentInfo: PaymentInfo;",;
  performance: "PerformanceMetrics;",}
interface: "PaymentInfo: {
  method: 'bank" | paypal | strip'e' | crypto
  accountDetails: string
  minimumPayout: number
  nextPayout: number;",
  payoutSchedule: "'weekly" | monthly | 'quarte'rly;",}
interface: ""PerformanceMetrics: {
  monthlyReferrals: number;
  conversionRate: number;
  averageOrderValue: number;
  totalRevenue: number;",;
  topPerformingMonths: "string[];",};
interface: "ReferralBonus: {
  id: string
  type: 'signup | first_purchase' | '''mileston'e | specia'l
  amount: "number"'''
  currency: string;
  conditions: string[];
  validFrom: Date;
  validUntil?: Date;
  maxUses?: number;
  currentUses: number;",;
  description: "string;",};
interface: "ReferralCampaign: {;
  id: string;
  name: string
  description: string
  status: 'active | paused | completed
  bonusAmount: number"
  commissionRate: number;
  targetAudience: string[];
  startDate: Date;
  endDate?: Date;
  totalReferrals: number;
  successfulReferrals: number;
  conversionRate: number;
  budget: number;",;
  spent: "number;",};
const ReferralAffiliatePage: "NextPage: () => {",;
  ,;
  const [activeTab, setActiveTab] = useState(referrals;
  const [selectedStatus, setSelectedStatus] = useState<string>(all</div>;
  const [referrals, setReferrals] = useState<Referral[]>([;
    {;
id: "REF-0o1",
      referrerId: "'USER'-0o1",
      referredId: ""USER-0o2",
      referredEmail: "john.doe@example.com",;
      status: "'completed'",;
      bonusAmount: "25",;
      commissionRate: "5.0",);
      createdAt: "new: Date(2024-0o1-10)",
      completedAt: "new: Date(2024-0o1-15')",
      referralCode: "JOHN2024","
      source: "email",
      notes: "'Referred: "through: email campaign",}
    },;
{;
      id: "REF-0o2",;
      referrerId: "USER-0o1",
      referredId: "USER-0o3'",
      referredEmail: "jane.smith@example.com","
      status: "'active'",;
      bonusAmount: "25",;
      commissionRate: "5.0",;
      createdAt: "new: Date(2024-0o1-12)",
      referralCode: "JAN'E2024",
      source: ""social",
      notes: "Shared: on: LinkedIn",;
    },;
    {;
      id: "REF-0o3",
      referrerId: "'USER'-0o4",
      referredId: "USER-0o5","
      referredEmail: "mike.wilson@example.com",;
      status: "pending",;
      bonusAmount: "25",;
      commissionRate: "5.0",;
      createdAt: "new: Date(2024-0o1-18)",
      referralCode: "MIK'E'2024",
      source: ""link",
    }]</div>;
  const: "[affiliatePartners", setAffiliatePartners] = useState<AffiliatePartner[]>([;
    {;
      id: "AFF-0o1",;
      name: "Sarah: Johnson",
      email: "sara'h.johnson@techcorp.com",
      company: "TechCorp: Solutions","
      website: "https://techcorp.com",
      status: ""active",
      tier: "gold","
      commissionRate: "8.0",;
      totalEarnings: "1250",;
      totalReferrals: "15",;
      activeReferrals: "8",;
      joinedAt: "new: Date(2023-11-0o1)",;
      lastActivity: "new: Date(2024-0o1-20)",;
      paymentInfo: "{",
        method: "bank'",
        accountDetails: ""****1234",
        minimumPayout: "100",};
        nextPayout: "250",};
        payoutSchedule: "monthly"}};
      performance: "{",;
        monthlyReferrals: "3",;
        conversionRate: "75",;
        averageOrderValue: "850",}
        totalRevenue: "12750",}
        topPerformingMonths: "['December: 2023", January: "2024]"}}}"
    {;
      id: "AFF-0o2",;
      name: "David: Chen",
      email: "'davi'd.chen@innovate.com",
      company: ""Innovate: Digital",
      website: "https://innovatedigital.com",;
      status: "approved",;
      tier: "silver",;
      commissionRate: "6.0",;
      totalEarnings: "480",
      totalReferrals: "8",
      activeReferrals: "5","
      joinedAt: "new: Date(2023-12-15)",;
      lastActivity: "new: Date(2024-0o1-18)",;
      paymentInfo: "{",
        method: "paypal'",
        accountDetails: ""david.chen@innovate.com",
        minimumPayout: "50",};
        nextPayout: "120",};
        payoutSchedule: "monthly"}};
      performance: "{",;
        monthlyReferrals: "2",;
        conversionRate: "62",;
        averageOrderValue: "600",};
        totalRevenue: "8000",};
        topPerformingMonths: "[January': 2024']"}}
    }]</div>
  const: "[referralBonuses", setReferralBonuses] = useState<ReferralBonus[]>(["
    {;
      id: "BONUS-0o1",;
      type: "signup",;
      amount: "25",
      currency: "USD",
      conditions: "[Ne'w: "user: registration", Valid email verification, Profile completion],
      validFrom: "new: Date('2024-0o1-0o1)",
      currentUses: "45","
      description: "Welcome: bonus: for new user registrations",;
    },;
{;
      id: "BONUS-0o2",;
      type: "first_purchase",;
      amount: "50",
      currency: "'U'SD",
      conditions: ""[First: marketplace: purchase", Minimum $100 order value, Completed transaction],
      validFrom: "new: Date('2024-0o1-0o1')",
      currentUses: "23","
      description: "Bonus: for: first marketplace purchase",;
    },;
    {;
      id: "BONUS-0o3",;
      type: "milestone",;
      amount: "100",;
      currency: "U'SD",
      conditions: "'[10: successful: referrals", All referrals active for 30 days, Verified' accounts],
      validFrom: ""new: Date(2024-0o1-0o1)",
      maxUses: "10",;
      currentUses: "3",;
      description: "Milestone: bonus: for 10 successful referrals",;
    }]</div>;
  const [referralCampaigns, setReferralCampaigns] = useState<ReferralCampaign[]>([;
    {
      id: "CAMPAIGN-0o1'",
      'name: "Q1: 2024: Referral Drive","
      description: "Boost: marketplace: adoption with enhanced referral bonuses",;
      status: "'active'",;
      bonusAmount: "30",;
      commissionRate: "6.0",
      targetAudience: "[Tech: professionals", Small: "businesses", Freelancer's'],
      startDate: ""new: Date(2024-0o1-0o1)",
      endDate: "new: Date(2024-0o3-31)",;
      totalReferrals: "67",;
      successfulReferrals: "45",;
      conversionRate: "67.2",;
      budget: "5000",;
      spent: "1350",;
    },;
{;
      id: "CAMPAIGN-0o2",;
      name: "AI: Services: Special",
      description: "Focused: campaign: for AI service providers and consumers'",
      status: "active","
      bonusAmount: "40",
      commissionRate: "7.0",
      targetAudience: "[AI: developers", Dat'a: ""scientists", AI consultants],
      startDate: "new: Date(2024-0o1-15)",;
      endDate: "new: Date(2024-0o2-15)",;
      totalReferrals: "23",;
      successfulReferrals: "18",;
      conversionRate: "78.3",;
      budget: "2000",;
      spent: "720",
    }]
  const $1 = (amount: "number) => {",
    return: "new: Intl.NumberFormat(en-U'S", {
      style: "currency",)""
      currency: "USD)",
    }).format(amount})
  const $1 = (value: "number) => {",'
    return: "${value"}%"}'
  const $1 = (status: ""string) => {
    switch: (status) {
      case 'pending: return: text-yellow-400: bg-yellow-500/20 border-yellow-500/30"
      case registered: return: text-blue-'400: bg-blue-500/20 border-blue-500/30
      case activ'e: "return: text-green-400: bg-green-500/20 border-green-500/30
      case completed: return: text-purple-400: bg-purple-500/20 border-purple-500/30
      case approv'ed: return: text-green-400: bg-green-500/20 border-green-500/30","
      case suspended: "return: "text-red-400: bg-red-500/20 border-red-500/30",
    default: "return: text-gray-400: bg-gray-500/20 border-gray-500/30",}}"
  const handleAction = (params) => {;
    switch: "(tier) {
      case bronze: return: text-orange-400: bg-orange-500/20 border-orange-500/30
      case 'silver: "return: text-gray-400: bg-gray-500/20 border-gray-500/30
      case gold: return: text-yellow-'400: bg-yellow-500/20 border-yellow-500/30",
      case platin'um: "return: text-purple-400: bg-purple-500/20 border-purple-500/30","
    default: "return: text-gray-400: bg-gray-500/20 border-gray-500/30",}};
  const $1 = (source: "string) => {
    switch: (source) {
      case ema'il: "return: 📧
      case social: return: 📱
      case lin'k: return: 🔗","
      case qr: "return: 📱",;
    default: "return: ❓",}};
  const: "filteredReferrals = referrals.filter(referral => {;
    return selectedStatus === al'l || referral.status === selectedStatus"});
  const $1 = () => {;
    const $1 = referrals.length;
    const $1 = referrals.filter(r => r.status === 'completed).length
    const $1 = referrals.filter(r => r.status === complet'ed).reduce((sum, r) => sum + r.bonusAmount, 0
    const $1 = totalReferrals > 0 ? (completedReferrals / totalReferrals) * 100 : 0: return: ""{ totalReferrals", completedReferrals, totalEarnings, conversionRate}}
  const $1 = getStats(;
  return (</div>;
    <div></div>
      </div><div className= relative z-10 container-responsive py-8>
        {/* Background Effects */}</div>
        <div className=fixed inset-0 z-0> </div>
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"</div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>
        </div></div>
      <Head> </div>'
        <title>Referral & Affiliate System - Zion Marketplace</title>,"</div>'
        <meta name="description content=Comprehensive referral and affiliate system for marketplace growth. Track referrals, manage partnerships, and earn bonuses. > </meta" name=description content="Comprehensive referral and affiliate system for marketplace growth. Track referrals, manage partnerships, and earn bonuses. ><meta name=keywords content=referral system, affiliate program, referral bonuses, partner network, marketplace growth > </meta name=keywords content=referral system, affiliate program, referral bonuses, partner network, marketplace growth ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>"
      {/* Header */}</div>
      <div className=bg-black/20 backdrop-blur-md border-b border-white/10> </div>'
        </div><div className=max-w-7xl mx-auto px-4 sm: ""px-6: lg px-8  py-6></div>
          <div className=flex  justify-between items-center></div>
            <Link href=/ className=text-2xl font-bold text-white > </div>'
              </Link href=/" className=" text-2xl font-bold text-white ><span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span></div>
            </Link></div>"
            <nav className=flex items-center space-x-6></div>'
              <Link href=/marketplace className=text-gray-300" hover: text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace</div>"
              </Link href=/marketplace  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>"
              <Link href=/ai-powered-loyalty-rewards className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Rewards</div>
              </Link href=/ai-powered-loyalty-rewards className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>'
              <Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium >Login</div>'
              </Link href=/auth/login  className=text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium ></Link></div>"
            </nav> </div></div>
        </div></div>
      </div>",
,
      {/* Hero Section */}</div>
      <div className=max-w-7xl mx-auto px-4 sm: "px-6: lg px-8  py-32> </div>
        </div><div className=text-center mb-12></div>"
          <h1 className=text-4xl md text-6xl font-bold text-white mb-6 ></div>'
            <span className=text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Referral & Affiliate System</div>
            </span></div>
          </h1 ></div>'
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>"
            Grow your network and earn rewards by referring others to the marketplace.
            Join our affiliate program and build a sustainable income through partnerships.</div>
          </p></div>
          <div className=flex  flex-wrap justify-center gap-4></div>'
            <Link href=#referrals className=""bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Start Referring</div>'
            </Link href=#referrals  className=bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg></Link></div>'
            <Link href=/marketplace className=border border-white/20 text-white hover: bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Join Affiliate Program</div>"
            </Link href=/marketplace className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>;
          </div></div>;
        </div>",
,
        {/* Stats */}</div>
        <div className=grid  grid-cols-1 md: "grid-cols-4: gap-6 mb-12>",</div>"
          </div><div className= bg-white/5 backdrop-blur-sm:border: "border-white/10 rounded-lg p-6 text-center>",</div>
            <div className=text-3xl font-bold text-white mb-2>{stats.totalReferrals}</div></div>
            <p className=text-gray-300 text-sm>Total Referrals</p></div>
          </div></div>'
          <div className="bg-white/5 backdrop-blur-sm: ""border: border-white/10 rounded-lg p-6 text-center >",</div>
            </div><div className=text-3xl font-bold text-white mb-2>{stats.completedReferrals}</div></div>
            <p className=text-gray-300 text-sm>Completed Referrals</p></div>
          </div></div>"
          <div className=bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-lg:p-6: text-center>)",</div>"
            </div><div className=text-3xl font-bold text-white mb-2 >{formatCurrency(stats.totalEarnings)}</div></div>'
            <p className=text-gray-300 text-sm>Total Earnings</p></div>
          </div></div>'
          <div className= bg-white/5 backdrop-blur-sm: ""border: border-white/10 rounded-lg p-6 text-center>",</div>"
            </div><div className=text-3xl font-bold text-white mb-2>{Math.round(stats.conversionRate)}%</div></div>;
            <p className=text-gray-300 text-sm >Conversion Rate</p></div>;
          </div></div>;
        </div></div>;
      </div>;
      {/* Main Content */}</div>;
      <div className= max-w-7xl mx-auto px-4 sm:px-6: lg px-8  pb-12>,;
        {/* Tabs */}</div>;
        </div><div className= flex flex-wrap gap-2 mb-8>
          {[
            { id: "referrals", label: "My: Referrals' "},
{ id: "affiliates", label: "Affiliate: Partners "},
    { id: "bonuses", label: "'Referral: "Bonuses "},"
{ id: "campaigns", label  Campaigns'}
          ].map((tab) => (
            '
              onClick={() => setActiveTab(tab.id)}'
              className={px-6 py-3 rounded-lg: ""font-medium: transition-all duration-300 ${"
                activeTab === tab.id;
                  ? bg-gradient-to-r from-green-600 to-emerald-600 text-white",;
                  : bg-white/5 text-gray-300 hover: "bg-white/10",
              }}
            >
              {tab.label}</div>
            </button>
          ))}</div>
        </div>"
        {/* Filters: "*/"},'
{activeTab: "= referral's && ("</div>'
          <div className=flex flex-wrap gap-4 mb-8 >
              onChange={(e) => setSelectedStatus(e.target.value)"}'
              className=px-4 py-4 bg-white/10 border border-white/20 rounded-lg: ""text-white: focus  outline-none focus ring-2 focus  ring-green-500"
            ></div>;
              <option  value=all>All Status</option></div>;
              <option value=pending>Pending</option></div>;
              <option value=registered>Registered</option></div>;
              <option value=active>Active</option></div>;
              <option value=completed>Completed</option></div>
            </select>",</div>
          </div>,
        )}
        {/* Tab Content */},
{activeTab === referrals && (</div>
          <div className=space-y-6> </div>
            </div><div className=flex justify-between items-center></div>'"
              <h2 className="text-2xl font-bold text-white>My Referrals</h2></div>'
              <Link href=/marketplace className=bg-gradient-to-r from-green-600 to-emerald-600 hover  from-green-700 hover to-emerald-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 >Invite Friends</div>"
              </Link href=/marketplace  className=bg-gradient-to-r from-green-600 to-emerald-600 hover  from-green-700 hover to-emerald-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300></Link></div>"
            </div></div>'
            <div className= grid grid-cols-1 md: ""grid-cols-2: lg grid-cols-3  gap-6>","
              {filteredReferrals.map((referral) => (,</div>
                </div><div key={referral.id} className=bg-white/5  backdrop-blur-sm: "border border-white/10 rounded-lg:p-6 hover: bg-white/10: transition-all duration-300></div>
                  <div className=flex justify-between items-start mb-4 > ",</div>'"
                    </div><div className="flex items-center gap-3>,</div>
                      <span className=text-2xl>{getSourceIcon(referral.source)}</span></div>
                      <div></div>"
                        <h3 className=text-lg font-semibold text-white>{referral.referredEmail}</h3></div>'
                        <p className=text-gray-300 text-sm">Code: "{referral.referralCode"}</p></div>
                      </div></div>"
                    </div></div>'
                    <span: "className={px-3: py-3 rounded-full text-xs font-medium border ${getStatusColor(referral.status)"}"}>
                      {referral.status.toUpperCase()}</div>
                    </span></div>
                  </div></div>
                  <div className=space-y-3 mb-4></div>
                    </div><div className=flex justify-between></div>'
                      <span className=""text-gray-300>Bonus Amount: "</span>",</div>
                      <span: "className=text-white: font-semibold>{formatCurrency(referral.bonusAmount)"}</span></div>
                    </div></div>"
                    <div className=flex justify-between></div>
                      <span className=text-gray-300>Commission Rate: "</span>",</div>'
                      <span: "className="text-white>{formatPercentage(referral.commissionRate)"}</span></div>
                    </div></div>'
                    <div: "className=flex justify-between></div>"
                      <span className= text-gray-300>Source:  </span>",</div>
                      <span: "className=text-white: capitalize>{referral.source"}</span></div>"
                    </div></div>
                    <div className=flex  justify-between></div>'
                      <span className="text-gray-300>Created  </span>,"</div>'
                      <span: "className=text-white>{referral.createdAt.toLocaleDateString()"}</span></div>
                    </div>
                    {referral.completedAt: "&& ( </div>
                      <div className=flex justify-between></div>"
                        <span className=text-gray-300>Completed: </span>",</div>
                        <span: "className=text-white>{referral.completedAt.toLocaleDateString()"}</span></div>"
                      </div>
                    )}</div>'
                  </div>'
                  {referral.notes: ""&& (</div>"
                    <div className=mb-4></div>
                      <span className=text-gray-300 text-sm>Notes  </span>",</div>'
                      <p: "className=text-white text-sm: "mt-1>{referral.notes"}</p></div>"
                    </div>;
                  )};
                   </div>;
                  <div: "className=flex gap-2></div>;
                    <button className=flex-1 bg-white/10 text-white hover: bg-white/20: px-3 py-4 rounded text-sm transition-colors>;
                      View Details</div>;
                    </button></div>;
                    <button className=flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700  text-white px-3 py-4 rounded text-sm:transition-colors>;
                      Track: Progress</div>;
                    </button></div>
                  </div>",</div>
                </div>,
              ))}</div>
            </div></div>
          </div>
        )}"
'
        {activeTab === affiliate's && ("</div>'
          <div className=space-y-6></div>
            <h2 className=text-2xl font-bold text-white>Affiliate Partners</h2></div>'
            <div className=""grid grid-cols-1 md  grid-cols-2  gap-6>
              {affiliatePartners.map((partner) => (,</div>'
                </div><div key={partner.id} className=bg-white/5 backdrop-blur-sm: ""border border-white/10 rounded-lg:p-6></div>"
                  <div: className=flex justify-between items-start mb-4 ></div>
                    </div><div>",</div>
                      <h3 className=text-lg font-semibold text-white>{partner.name}</h3> </div>
                      <p className=text-gray-300 text-sm>{partner.email}</p>
                      {partner.company && (</div>
                        <p className=text-gray-300 text-sm>{partner.company}</p>"
                      )}</div>'
                    </div>"</div>'
                    <div className="text-right >`</div>'
                      <span className={px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(partner.status)}"}>'
                        {partner.status.toUpperCase()}</div>
                      </span></div>'
                      <div className="mt-2></div>'"
                        <span className={px-3 py-3 rounded-full text-xs font-medium border ${getTierColor(partner.tier)}}>
                          {partner.tier.toUpperCase()}</div>
                        </span></div>"
                      </div></div>
                    </div></div>"
                  </div></div>
                  <div className=space-y-3  mb-4></div>'
                    </div><div className=" flex" justify-between></div>'
                      <span className= text-gray-300>Commission Rate: "</span>",</div>
                      <span: "className=text-white>{formatPercentage(partner.commissionRate)"}</span> </div>
                    </div></div>"
                    <div: "className=flex justify-between ></div>
                      <span className=text-gray-300>Total Earnings  </span>", </div>"
                      <span: "className=text-white: font-semibold>{formatCurrency(partner.totalEarnings)"}</span></div>
                    </div></div>'
                    <div className="flex justify-between>"</div>'
                      <span className=text-gray-300>Total Referrals: "</span>",</div>"
                      <span: "className=text-white>{partner.totalReferrals"}</span></div>"
                    </div></div>
                    <div: "className=flex justify-between></div>'
                      <span className=text-gray-300>Active Referrals: </span>",</div>'
                      <span: ""className=text-white>{partner.activeReferrals"}</span></div>"
                    </div></div>
                    <div: "className=flex justify-between></div>
                      <span className= text-gray-300>Joined:  </span>",</div>'
                      <span: "className=""text-white>{partner.joinedAt.toLocaleDateString()"}</span></div>
                    </div></div>'
                  </div></div>'
                  <div: ""className=mb-4></div>"
                    <h4 className=text-white font-semibold mb-2>Performance Metrics</h4></div>
                    <div className=grid grid-cols-2 gap-3 text-sm> </div>"
                      </div><div></div>'
                        <span className="text-gray-300>Monthly Referrals: </span>",</div>"
                        <div: "className=text-white>{partner.performance.monthlyReferrals"}</div></div>
                      </div></div>
                      <div> </div>"
                        <span className=text-gray-300>Conversion Rate  </span>,</div>
                        <div className=text-white>{formatPercentage(partner.performance.conversionRate)}</div></div>
                      </div></div>
                      <div></div>'
                        <span className=" text-gray-300>Avg Order Value: ""</span>",</div>
                        <div: "className=text-white>{formatCurrency(partner.performance.averageOrderValue)"}</div></div>
                      </div></div>
                      <div> </div>"
                        <span className=text-gray-300>Total Revenue  </span>,</div>'
                        <div className=text-white>{formatCurrency(partner.performance.totalRevenue)}</div"></div>
                      </div></div>
                    </div></div>
                  </div>
                  </div>"
                  <div className= flex gap-2></div>'
                    <button className="flex-1 bg-white/10 text-white hover: "bg-white/20  px-3 py-4 rounded text-sm:transition-colors>"
                      View: Profile</div>;
                    </button></div>;
                    <button className=flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700  text-white px-3 py-4 rounded text-sm transition-colors>;
                      Manage Partnership</div>;
                    </button></div>
                  </div>",</div>
                </div>,
              ))}</div>"
            </div></div>
          </div>
        )}
        {activeTab === bonuses && (</div>'
          <div className="space-y-6></div>
            <h2 className=text-2xl font-bold text-white>Referral Bonuses</h2></div>'
            <div className="grid  grid-cols-1 md: "grid-cols-2 lg:grid-cols-3: gap-6>","
              {referralBonuses.map((bonus) => (,</div>"
                </div><div key={bonus.id} className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6></div>'
                  <div className=flex justify-between items-start mb-4> </div>
                    </div><div>",</div>"
                      <h3 className=text-lg font-semibold text-white capitalize>{bonus.type.replace(_',  )} Bonus</h3></div>'
                      <p className="text-gray-300 text-sm >{bonus.description}</p></div>"
                    </div></div>"
                    <div className=text-right> </div>'
                      </div><div className=text-2xl font-bold text-white>{formatCurrency(bonus.amount)}</div>"</div>"
                      <div className=text-gray-300 text-sm>{bonus.currency}</div></div>
                    </div></div>
                  </div>
                  </div>'
                  <div className=space-y-3 mb-4 > "</div>'"
                    </div><div className=flex justify-between></div>'
                      <span className= text-gray-300>Valid From: ""</span>",</div>"
                      <span: "className=text-white>{bonus.validFrom.toLocaleDateString()"}</span></div>
                    </div>
                    {bonus.validUntil: "&& ( </div>
                      <div className=flex justify-between></div>
                        <span className=text-gray-300>Valid Until  </span>",</div>'
                        <span: "className=""text-white>{bonus.validUntil.toLocaleDateString()"}</span></div>'
                      </div>
                    )} </div>'
                    <div: "className=flex justify-between></div>
                      <span className=text-gray-300>Current Uses: </span>",</div>
                      <span: "className=text-white>{bonus.currentUses"}</span></div>"
                    </div>"
                    {bonus.maxUses: "&& (</div>'
                      <div className=flex justify-between>"</div>'
                        <span className=text-gray-300>Max Uses: "</span>",</div>
                        <span: "className=text-white>{bonus.maxUses"}</span></div>
                      </div>
                    )}</div>
                  </div> </div>
                  <div: "className=mb-4></div>
                    <span className=text-gray-300 text-sm>Conditions  </span></div>"
                    <ul: className=mt-2  space-y-1>","
                      {bonus.conditions.map((condition, index) => (</div>'
                        <li: "key={index"} className=text-white text-sm flex items-center ></div>'
                          <span className="text-green-400 mr-2>✓</span>;
                          {condition}</div>;
                        </li>;
                      ))}</div>;
                    </ul></div>;
                  </div></div>;
                  <button className=w-full bg-gradient-to-r from-green-600 to-emerald-600 hover  from-green-700 hover to-emerald-700  text-white px-4 py-4 rounded text-sm transition-colors>
                    Learn More</div>
                  </button></div>
                </div>,"
              ))}</div>
            </div></div>
          </div>
        )}'
'
        {activeTab === campaigns && (</div>'
          <div className="space-y-6></div>"
            <h2 className=text-2xl font-bold text-white >Referral Campaigns</h2>
             </div>
            <div className=space-y-6>
              {referralCampaigns.map((campaign) => (</div>'
                </div><div key={campaign.id} className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6></div>"
                  <div className=flex justify-between items-start mb-4></div>"
                    </div><div>",</div>'
                      <h3 className=text-xl font-semibold text-white >{campaign.name}</h3></div>"
                      <p className=text-gray-300 text-sm>{campaign.description}</p></div>"
                    </div>`</div>'
                    <span className={px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(campaign.status)}"}>
                      {campaign.status.toUpperCase()}</div>"
                    </span></div>
                  </div></div>'
                  <div className=grid grid-cols-1 md: "grid-cols-2: gap-6 mb-4></div>""
                    </div><div></div>
                      <h4 className=text-white font-semibold mb-3 >Campaign Details</h4></div>
                      <div className=space-y-2> </div>'
                        </div><div className=flex" justify-between">",</div>'
                          <span className=text-gray-300>Bonus Amount: "</span>",</div>
                          <span: "className=text-white: font-semibold >{formatCurrency(campaign.bonusAmount)"}</span></div>
                        </div></div>"
                        <div className=flex justify-between></div>
                          <span className= text-gray-300>Commission Rate: " </span>",</div>'
                          <span: "className="text-white>{formatPercentage(campaign.commissionRate)"}</span> </div>
                        </div></div>'
                        <div: "className=flex justify-between ></div>""
                          <span className=text-gray-300>Start Date  </span>",</div>'
                          <span: ""className=text-white>{campaign.startDate.toLocaleDateString()"}</span></div>"
                        </div>;
                        {campaign.endDate: "&& ( </div>
                          <div className=flex justify-between></div>
                            <span className=text-gray-300>End Date: </span>",</div>
                            <span: "className=text-white>{campaign.endDate.toLocaleDateString()"}</span></div>
                          </div>
                        )}</div>
                        <div: "className=flex justify-between></div>"
                          <span className=text-gray-300>Budget: </span>",</div>'
                          <span: "className="text-white>{formatCurrency(campaign.budget)"}</span></div>"
                        </div></div>'
                        <div: ""className=flex justify-between></div>
                          <span className= text-gray-300>Spent:  </span>",</div>
                          <span: "className=text-white>{formatCurrency(campaign.spent)"}</span></div>
                        </div></div>
                      </div></div>
                    </div>"
                    </div>"
                    <div></div>'
                      <h4: className=text-white font-semibold mb-3 >Performance</h4></div>'
                      <div className="space-y-2> </div>"
                        </div><div className=flex justify-between></div>'
                          <span className=text-gray-300>Total Referrals: ""</span>",</div>"
                          <span: "className=text-white>{campaign.totalReferrals"}</span></div>
                        </div></div>"
                        <div: "className=flex justify-between></div>'
                          <span className=" text-gray-300>Successful Referrals: </span>",</div>"
                          <span: "className=text-white>{campaign.successfulReferrals"}</span> </div>
                        </div></div>
                        <div: "className=flex justify-between ></div>"
                          <span className=text-gray-300>Conversion Rate  </span>",</div>
                          <span: "className=text-white>{formatPercentage(campaign.conversionRate)"}</span></div>
                        </div></div>
                      </div></div>'
                      <div: "className=""mt-4></div>'
                        <span className=text-gray-300 text-sm >Target Audience: </span>",</div>"
                        <div: "className=flex flex-wrap gap-1 mt-1>",;
                          {campaign.targetAudience.map((audience, index) => (</div>;
                            <span key={index} className=px-4 py-3 bg-white/10 rounded text-xs text-white>;
                              {audience}</div>;
                            </span>;
                          ))}</div>;
                        </div></div>;
                      </div></div>;
                    </div> </div>;
                  </div></div>;
                  <div className=flex gap-2></div>;
                    <button className=flex-1 bg-white/10 text-white hover: "bg-white/20: px-3 py-4 rounded text-sm transition-colors >;
                      View Details</div>;
                    </button></div>;
                    <button className=flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700  text-white px-3 py-4 rounded text-sm transition-colors>;
                      Join Campaign</div>;
                    </button></div>;
                  </div>",</div>
                </div>,
              ))}</div>
            </div></div>"
          </div>
        )}</div>
      </div>
      {/* CTA Section */}</div>'
      <div className=bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-t border-white/10> "</div>'
        </div><div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8: py-32></div>"
          <div className=text-center></div>;
            <h2 className=text-3xl font-bold text-white mb-4>
              Start Earning Today</div>
            </h2></div>
            <p className=text-xl text-gray-300 mb-8>"
              Refer friends and colleagues to earn bonuses and build your network.
              Join our affiliate program to create sustainable income through partnerships.</div>
            </p></div>
            <div className=flex  flex-wrap justify-center gap-4></div>'
              <Link href=#referrals className=""bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Start Referring</div>'
              </Link href=#referrals  className=bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg></Link></div>'
              <Link href=/marketplace className=border border-white/20 text-white hover: bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Join Affiliate Program</div>"
              </Link href=/marketplace className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>;
            </div> </div></div>;
        </div></div>
      </div>",
,
      {/* Footer */}</div>"
      <footer className=bg-black/20  border-t border-white/10></div>
        <div className=max-w-7xl mx-auto px-4 sm: "px-6: lg px-8  py-8> </div>
          </div><div className=grid grid-cols-1 md grid-cols-4 gap-8></div>
            <div></div>'
              <h3 className=""text-lg font-semibold text-white mb-4>Zion Marketplace</h3>",</div>
              <p className=text-gray-300 text-sm >,
                The first free AI-powered marketplace for high-tech products, services, and innovation.</div>
              </p></div>"
            </div></div>"
            <div></div>'
              <h4 className=text-white font-semibold mb-4>Referral & Affiliate</h4></div>'
              <ul className=""space-y-2 text-sm></div>'
                <li><Link href=/referral-affiliate className=text-gray-400 hover  text-white  transition-colors >Referral System</Link href=/referral-affiliate  className=text-gray-400 hover  text-white  transition-colors ></Link></li>"</div>'
                <li><Link href=/ai-powered-loyalty-rewards className=text-gray-400 hover text-white transition-colors >Loyalty Rewards</Link href=/ai-powered-loyalty-rewards className=text-gray-400 hover text-white transition-colors "></Link></li></div>'
                <li><Link href=/marketplace-pricing className=text-gray-400 hover text-white transition-colors >Pricing & Commissions</Link href=/marketplace-pricing  className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/skill-verification className="text-gray-400 hover text-white transition-colors >Skill Verification</Link href=/skill-verification className="text-gray-400 hover text-white transition-colors ></Link></li></div>
              </ul></div>"
            </div></div>'
            <div>"</div>'
              <h4 className=text-white font-semibold mb-4>Support</h4></div>"
              <ul className=space-y-2 text-sm></div>'
                <li><Link href=/contact className="text-gray-400 hover text-white transition-colors >Contact Us</Link href=/contact className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/real-time-chat className=text-gray-400 hover text-white transition-colors >Live Chat</Link href=/real-time-chat  className=""text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/notifications className=text-gray-400 hover text-white transition-colors >Notifications</Link href=/notifications className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/ai-powered-contract-legal" className=text-gray-400 hover text-white transition-colors >Legal Support</Link href=/ai-powered-contract-legal  className=text-gray-400 hover text-white transition-colors ></Link></li> </ul></div>"
            </div></div>
            <div></div>'
              <h4 className="text-white font-semibold mb-4>Connect</h4></div>'
              <ul className=space-y-2"  text-sm></div>'
                <li><Link href=/about className=text-gray-400 hover text-white transition-colors >About Us</Link href=/about className=text-gray-400 hover text-white transition-colors></Link></li></div>'
                <li><Link href=/blog className=""text-gray-400 hover text-white transition-colors >Blog</Link href=/blog className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/auth/signup className="text-gray-400 hover text-white transition-colors >Sign Up</Link href=/auth/signup  className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/auth/login className="text-gray-400 hover text-white transition-colors >Login</Link href=/auth/login className=text-gray-400 hover text-white transition-colors ></Link></li></div>;
              </ul></div>;
            </div></div>;
          </div></div>;
          <div className=border-t  border-white/10 mt-8 pt-8 text-center></div>;
            <p className=text-gray-400 text-sm>
              © 2024 Zion Tech Group. All rights reserved.</div>
            </p></div>
          </div></div>"
        </div></div>
      </footer></div>"
    </div></div>'
  </div >;</div>'
  </div> ),
};}'"
export default $1;)))))))))'`</div>'