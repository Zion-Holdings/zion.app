import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head";
import { useState, useEffect }  from 'react";
import Link from 'next/link";

interface PricingTier {
  id: string;'
  name: string;
  type: 'basic' | 'premium' | 'enterprise' | 'custom";
  monthlyFee: number;
  yearlyFee: number;
  transactionFee: number; // percentage
  commissionRate: number; // percentage
  features: string[];
  limits: {
    monthlyTransactions: number;
    storageGB: number;
    apiCalls: number;
    supportLevel: string;
  };
  popular?: boolean;}
interface CommissionStructure {
  id: string;
  category: string;
  baseRate: number; // percentage
  volumeDiscounts: VolumeDiscount[];
  specialRates: SpecialRate[];
  minimumThreshold: number;}
interface VolumeDiscount {
  tier: string;
  monthlyVolume: number;
  discountRate: number;
  effectiveRate: number;}
interface SpecialRate {
  id: string;
  category: string;
  rate: number;
  conditions: string[];
  validUntil?: Date;}
interface Transaction {
  id: string;
  amount: number;
  category: string;
  sellerId: string;
  buyerId: string;
  commission: number;
  platformFee: number;
  totalFees: number;
  netAmount: number;'
  date: Date;
  status: 'pending' | 'completed' | 'refunded';}
interface RevenueReport {
  id: string;
  period: string;
  totalRevenue: number;
  commissionRevenue: number;
  platformFees: number;
  transactionCount: number;
  averageTransactionValue: number;
  topCategories: CategoryRevenue[];
  growthRate: number;}
interface CategoryRevenue {
  category: string;
  revenue: number;
  transactionCount: number;
  averageCommission: number;}
const MarketplacePricingPage: NextPage = () => {'
  const [activeTab, setActiveTab] = useState('pricing
  const [selectedPeriod, setSelectedPeriod] = useState('monthly'
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>(['
    {
      id: 'TIER-001',
      name: 'Basic',
      type: 'basic',
      monthlyFee: 0,
      yearlyFee: 0,
      transactionFee: 5.0,
      commissionRate: 3.5,'
      features: [
        'Basic marketplace access',
        'Standard listing tools',
        'Email support',
        'Basic analytics',
        'Mobile app access
      ],
      limits: {
        monthlyTransactions: 50,
        storageGB: 5,'
        apiCalls: 1000,
        supportLevel: 'Email'}}}'
    {
      id: 'TIER-002',
      name: 'Premium',
      type: 'premium',
      monthlyFee: 29,
      yearlyFee: 290,
      transactionFee: 3.5,
      commissionRate: 2.5,'
      features: [
        'All Basic features',
        'Advanced listing tools',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom branding',
        'Bulk operations
      ],
      limits: {
        monthlyTransactions: 500,
        storageGB: 50,'
        apiCalls: 10000,
        supportLevel: 'Priority'}
      popular: true}'
    {
      id: 'TIER-003',
      name: 'Enterprise',
      type: 'enterprise',
      monthlyFee: 99,
      yearlyFee: 990,
      transactionFee: 2.0,
      commissionRate: 1.5,'
      features: [
        'All Premium features',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees',
        'Onboarding assistance
      ],
      limits: {
        monthlyTransactions: 5000,
        storageGB: 500,'
        apiCalls: 100000,
        supportLevel: 'Dedicated'}
}]
  const [commissionStructures, setCommissionStructures] = useState<CommissionStructure[]>(['
    {
      id: 'COMM-001',
      category: 'Technology Services',
      baseRate: 3.5,'
      volumeDiscounts: [
        { tier: 'Bronze', monthlyVolume: 10000, discountRate: 0, effectiveRate: 3.5 },
{ tier: 'Silver', monthlyVolume: 50000, discountRate: 0.5, effectiveRate: 3.0 },
    { tier: 'Gold', monthlyVolume: 100000, discountRate: 1.0, effectiveRate: 2.5}
      ],
      specialRates: ['
        {
          id: 'SPEC-001',
          category: 'AI Services','
          rate: 2.5,
          conditions: ['Minimum $10K monthly volume', 'Verified AI provider'],
          validUntil: new Date('2024-12-31'}
      ],
      minimumThreshold: 100}'
    {
      id: 'COMM-002',
      category: 'Consulting Services',
      baseRate: 4.0,'
      volumeDiscounts: [
        { tier: 'Bronze', monthlyVolume: 5000, discountRate: 0, effectiveRate: 4.0 },
{ tier: 'Silver', monthlyVolume: 25000, discountRate: 0.5, effectiveRate: 3.5 },
    { tier: 'Gold', monthlyVolume: 50000, discountRate: 1.0, effectiveRate: 3.0}
      ],
      specialRates: [],
      minimumThreshold: 200}'
    {
      id: 'COMM-003',
      category: 'Digital Products',
      baseRate: 2.5,'
      volumeDiscounts: [
        { tier: 'Bronze', monthlyVolume: 20000, discountRate: 0, effectiveRate: 2.5 },
{ tier: 'Silver', monthlyVolume: 100000, discountRate: 0.5, effectiveRate: 2.0 },
    { tier: 'Gold', monthlyVolume: 200000, discountRate: 1.0, effectiveRate: 1.5}
      ],
      specialRates: [],
      minimumThreshold: 50
    }]
  const [transactions, setTransactions] = useState<Transaction[]>(['
    {
      id: 'TXN-001','
      amount: 2500,
      category: 'Technology Services',
      sellerId: 'SELLER-001',
      buyerId: 'BUYER-001',
      commission: 87.5,
      platformFee: 125,
      totalFees: 212.5,'
      netAmount: 2287.5,
      date: new Date('2024-01-15'),
      status: 'completed'
    },'
{
      id: 'TXN-002','
      amount: 1800,
      category: 'Consulting Services',
      sellerId: 'SELLER-002',
      buyerId: 'BUYER-002',
      commission: 72,
      platformFee: 90,
      totalFees: 162,'
      netAmount: 1638,
      date: new Date('2024-01-16'),
      status: 'completed'
    },'
    {
      id: 'TXN-003','
      amount: 500,
      category: 'Digital Products',
      sellerId: 'SELLER-003',
      buyerId: 'BUYER-003',
      commission: 12.5,
      platformFee: 25,
      totalFees: 37.5,'
      netAmount: 462.5,
      date: new Date('2024-01-17'),
      status: 'pending
    }]
  const [revenueReports, setRevenueReports] = useState<RevenueReport[]>(['
    {
      id: 'REPORT-001',
      period: 'January 2024',
      totalRevenue: 4800,
      commissionRevenue: 172,
      platformFees: 240,
      transactionCount: 3,
      averageTransactionValue: 1600,'
      topCategories: [
        { category: 'Technology Services', revenue: 2500, transactionCount: 1, averageCommission: 87.5 },
{ category: 'Consulting Services', revenue: 1800, transactionCount: 1, averageCommission: 72 },
    { category: 'Digital Products', revenue: 500, transactionCount: 1, averageCommission: 12.5}
      ],
      growthRate: 15.2
    }]'
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD
    }).format(amount}
  const formatPercentage = (value: number) => {
    return `${value}%`}
  const getTierColor = (type: string) => {'
    switch (type) {
      case 'basic': return 'text-blue-400 bg-blue-500/20 border-blue-500/30
      case 'premium': return 'text-purple-400 bg-purple-500/20 border-purple-500/30
      case 'enterprise': return 'text-green-400 bg-green-500/20 border-green-500/30
      case 'custom': return 'text-orange-400 bg-orange-500/20 border-orange-500/30
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'}}
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20 border-green-500/30
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30
      case 'refunded': return 'text-red-400 bg-red-500/20 border-red-500/30
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'}}
  const calculateSavings = (monthlyFee: number, yearlyFee: number) => {
    const monthlyTotal = monthlyFee * 12
    return monthlyTotal - yearlyFee}
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
        <title>Marketplace Pricing & Commission System - Zion Marketplace</title>
        <meta name="description content=Comprehensive marketplace pricing and commission system. Transparent fee structure, revenue sharing, and tiered pricing for marketplace participants. > </meta" name="description" content="Comprehensive marketplace pricing and commission system. Transparent fee structure, revenue sharing, and tiered pricing for marketplace" participants." ><meta name="keywords content=marketplace pricing, commission system, revenue sharing, tiered pricing, marketplace fees > </meta" name="keywords" content="marketplace pricing, commission system, revenue sharing, tiered pricing, marketplace" fees" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      {/* Header */}
      <div className="bg-black/20" backdrop-blur-md border-b border-white/10> 
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-6>
          <div className="flex  justify-between items-center>
            <Link href=/" className="text-2xl" font-bold text-white > 
              </Link href=/" className=" text-2xl font-bold text-white ><span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
            </Link>
            <nav className="flex"" items-center space-x-6>
              <Link href=/marketplace" className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace
              </Link href=/marketplace  className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors"></Link>
              <Link href=/invoice-billing className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Billing
              </Link href=/invoice-billing className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium >Login
              </Link href=/auth/login  className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium ></Link>
            </nav> </div>
        </div>
      </div>
      {/* Hero Section */}"
      <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg px-8 py-32> 
        </div><div className="text-center"" mb-12>
          <h1 className="text-4xl" md text-6xlfont-bold text-white mb-6 >
            <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>
              Marketplace Pricing & Commission
            </span>
          </h1 >
          <p className="text-xl" text-gray-300 mb-8 max-w-3xl" mx-auto>
            Transparent pricing structure and commission system for marketplace participants. "
            Choose the right tier for your business needs and maximize your revenue potential.
          </p>
          <div className="flex  flex-wrap justify-center gap-4>
            <Link href=#pricing" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >View Pricing
            </Link href=#pricing  className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"></Link>
            <Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Calculate Fees
            </Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm" ></Link>
          </div>
        </div>
"
        {/* Stats */}
        <div className="grid"  grid-cols-1 md:grid-cols-4 gap-6 mb-12>
          </div><div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6" text-center>
            <div className="text-3xl" font-bold text-white mb-2>{formatCurrency(4800)}</div>
            <p className="text-gray-300" text-sm>Total Revenue</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg p-6 text-center >
            </div><div className="text-3xl" font-bold text-white mb-2>{formatCurrency(172)}</div>
            <p className="text-gray-300" text-sm>Commission Revenue</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6 text-center>
            </div><div className="text-3xl" font-bold text-white mb-2 >3</div>
            <p className="text-gray-300" text-sm>Active Tiers</p>
          </div>
          <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6" text-center>
            </div><div className="text-3xl" font-bold text-white mb-2>15.2%</div>
            <p className="text-gray-300" text-sm >Growth Rate</p>
          </div>
        </div>
      </div>

      {/* Main Content */}"
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 pb-12>
        {/* Tabs */}
        </div><div className=" flex flex-wrap gap-2" mb-8>"
          {["'
            { id: 'pricing', label: 'Pricing Tiers' },
{ id: 'commissions', label: 'Commission Structure' },
    { id: 'transactions', label  'Transactions' },
{ id  'reports', label  'Revenue Reports'}"
          ].map((tab) => (
            "`
              onClick={() => setActiveTab(tab.id)}'``
              className="{`px-6" py-3 rounded-lg:font-medium transition-all duration-300 ${'
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'``
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
'
        {/* Period Toggle */},'"'
{activeTab === 'pricing' && (
          <div className="flex" justify-center mb-8 > 
            </div><div className="bg-white/10 rounded-lg" p-1>'
              "'''`
                onClick={() => setSelectedPeriod('monthly')}"''``
                className="{`px-4" py-4 rounded-md text-sm font-medium transition-colors ${
                  selectedPeriod === 'monthly
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                      'text-gray-300 hover text-white'``
                }`}
              >
                Monthly
              </button> '
              "'''`
                onClick={() => setSelectedPeriod('yearly')}''``
                className="{`px-4" py-4 rounded-md:text-sm font-medium transition-colors ${
                  selectedPeriod === 'yearly
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'`
                    : 'text-gray-300 hover:text-white'``
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        )}"'
        {/* Tab Content */},''
{activeTab === 'pricing' && ("
          <div className="space-y-6">
            <h2 className="text-2xl" font-bold text-white text-center mb-8>Choose Your Plan</h2>
            <div className="grid grid-cols-1 md grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (`
                </div>``
                }`}>
                  {tier.popular && ("
                    <div className=" absolute -top-4 left-1/2 transform -translate-x-1/2 >
                      <span className="bg-gradient-to-r" from-purple-600 to-pink-600 text-white px-4 py-3 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}"
                  
                  <div className=" text-center" mb-6>
                    <h3 className="text-2xl" font-bold text-white mb-2>{tier.name}</h3>
                    <div className="mb-4"">'
                      <span className="text-4xl:font-bold text-white>' '
                        {selectedPeriod === 'monthly' ? formatCurrency(tier.monthlyFee)   formatCurrency(tier.yearlyFee)}'
                      </span>''
                      <span className=" text-gray-300>/{selectedPeriod === 'monthly' ? 'month' : 'year'}</span>'
                    </div>
                    {selectedPeriod === 'yearly' && tier.monthlyFee > 0 && (
                      <p className="text-green-400" text-sm>
                        Save {formatCurrency(calculateSavings(tier.monthlyFee, tier.yearlyFee))} yearly
                      </p>
                    )} 
                  </div>
                  <div className="space-y-4" mb-6>
                    </div><div className=" flex" justify-between>
                      <span className=" text-gray-300>Transaction Fee:</span>
                      <span className="text-white" font-semibold>{formatPercentage(tier.transactionFee)}</span> 
                    </div>
                    <div className="flex"" justify-between>
                      <span className="text-gray-300>Commission" Rate </span>
                      <span className="text-white" font-semibold>{formatPercentage(tier.commissionRate)}</span> 
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300>Monthly" Transactions:</span>
                      <span className="text-white>{tier.limits.monthlyTransactions.toLocaleString()}</span>"
                    </div>
                    <div className=" flex" justify-between>"
                      <span className="text-gray-300>Storage:</span>"
                      <span className="text-white>{tier.limits.storageGB}" GB</span>
                    </div>
                    <div className=" flex" justify-between>
                      <span className=" text-gray-300>API Calls:</span>
                      <span className="text-white>{tier.limits.apiCalls.toLocaleString()}</span">
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300>Support" </span>
                      <span className="text-white>{tier.limits.supportLevel}</span">
                    </div>
                  </div> 
                  <div className=" space-y-3" mb-6>
                    <h4 className="text-white" font-semibold>Features:</h4>
                    <ul className="space-y-2"">
                      {tier.features.map((feature, index) => (
                        <li key={index} className=" text-gray-300 text-sm flex" items-center>
                          <span className="text-green-400" mr-2>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  '`
                  ''``
                  }`}>
                    {tier.type === 'basic' ? 'Get Started Free' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}"'
''
        {activeTab === 'commissions' && ("
          <div className="space-y-6">
            <h2 className="text-2xl" font-bold text-white>Commission Structure</h2>
            <div className="space-y-8>" 
              {commissionStructures.map((structure) => (
                </div><div key={structure.id} className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6">
                  <div className="flex" justify-between items-start mb-6>
                    </div><div>
                      <h3 className="text-xl" font-semibold text-white mb-2>{structure.category}</h3>
                      <p className="text-gray-300>Base" Commission Rate: {formatPercentage(structure.baseRate)}</p>''`
                    </div>``
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium border ${getTierColor('premium')}`}>
                      Active
                    </span>
                  </div>
                  
                  <div className="grid" grid-cols-1 md grid-cols-2 gap-6>
                    </div><div>
                      <h4 className="text-white" font-semibold mb-4>Volume Discounts</h4>
                      <div className="space-y-3>"
                        {structure.volumeDiscounts.map((discount, index) => (
                          </div><div key={index} className="flex" justify-between items-center p-3 bg-white/5 rounded >
                            <div>
                              </div><div className="text-white" font-medium>{discount.tier}</div>
                              <div className="text-gray-300" text-sm>${discount.monthlyVolume.toLocaleString()}/month</div>
                            </div>
                            <div className="text-right>"
                              </div><div className="text-white" font-semibold >{formatPercentage(discount.effectiveRate)}</div>
                              <div className="text-green-400" text-sm>-{formatPercentage(discount.discountRate)}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white" font-semibold mb-4>Special Rates</h4>
                      {structure.specialRates.length > 0 ? (
                        <div className="space-y-3>" 
                          {structure.specialRates.map((rate) => (
                            </div><div key={rate.id} className="p-3 bg-white/5 rounded">
                              <div className="flex" justify-between items-start mb-2> 
                                </div><div className="text-white" font-medium>{rate.category}</div>
                                <div className="text-green-400" font-semibold>{formatPercentage(rate.rate)}</div>
                              </div>
                              <div className="text-gray-300" text-sm >
                                {rate.conditions.map((condition, index) => (
                                  </div><div key={index}>• {condition}</div>
                                ))}
                              </div>
                              {rate.validUntil && (
                                <div className="text-gray-400" text-xs mt-2>
                                  Valid until {rate.validUntil.toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          ))} 
                        </div>
                      )   (
                        <p className="text-gray-300" text-sm>No special rates available</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6" pt-6 border-t border-white/10>
                    </div><div className="flex" justify-between items-center >
                      <span className="text-gray-300>Minimum" Transaction Threshold </span>
                      <span className="text-white" font-semibold>{formatCurrency(structure.minimumThreshold)}</span>
                    </div>
                  </div>
                </div >
              ))}
            </div>
          </div>
        )}'
"''
        {activeTab === 'transactions' && (
          <div className="space-y-6>"
            <h2 className="text-2xl" font-bold text-white >Recent Transactions</h2>
            
            <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg overflow-hidden> 
              </div><div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10>"
                    <tr>
                      <th className="text-left" text-gray-300 py-3 px-6>Transaction ID</th> 
                      <th className="text-left" text-gray-300 py-3 px-6>Amount</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Category</th>
                      <th className="text-left" text-gray-300 py-3 px-6 >Commission</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Platform Fee</th> 
                      <th className="text-left" text-gray-300 py-3 px-6>Net Amount</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Status</th>
                      <th className="text-left" text-gray-300 py-3 px-6 >Date</th>
                    </tr> 
                  </thead>
                  <tbody className="divide-y" divide-white/10>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className=" hover" bg-white/5">
                        <td className="text-white" py-3 px-6>{transaction.id}</td>
                        <td className="text-white" py-3 px-6>{formatCurrency(transaction.amount)}</td>
                        <td className="text-white" py-3 px-6>{transaction.category}</td> 
                        <td className="text-white" py-3 px-6>{formatCurrency(transaction.commission)}</td>
                        <td className="text-white" py-3 px-6>{formatCurrency(transaction.platformFee)}</td>
                        <td className="text-white" py-3 px-6 >{formatCurrency(transaction.netAmount)}</td>`
                        <td className="py-3" px-6">``"
                          <span className="{`px-3" py-3 rounded-full text-xs font-medium border  ${getStatusColor(transaction.status)}`}>
                            {transaction.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="text-white" py-3 px-6>{transaction.date.toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}"'
''
        {activeTab === 'reports' && ("
          <div className="space-y-6">
            <h2 className="text-2xl" font-bold text-white>Revenue Reports</h2>
            <div className="space-y-6>
              {revenueReports.map((report) => (
                </div><div key={report.id} className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
                  <div className="flex" justify-between items-start mb-6>
                    </div><div> 
                      <h3 className="text-xl" font-semibold text-white mb-2>{report.period}</h3>
                      <p className="text-gray-300>Revenue Analysis Report</p>
                    </div>
                    <div className="text-right>"
                      </div><div className="text-2xl" font-bold text-white >{formatCurrency(report.totalRevenue)}</div>
                      <div className="text-green-400" text-sm>+{report.growthRate}% growth</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md grid-cols-4 gap-4 mb-6>
                    </div><div className="text-center>"
                      <div className="text-white" font-semibold >{formatCurrency(report.commissionRevenue)}</div>
                      <div className="text-gray-300" text-sm>Commission Revenue</div> 
                    </div>
                    <div className="text-center>
                      </div><div className="text-white" font-semibold>{formatCurrency(report.platformFees)}</div>
                      <div className="text-gray-300" text-sm>Platform Fees</div>
                    </div>
                    <div className="text-center>" 
                      </div><div className="text-white" font-semibold>{report.transactionCount}</div>
                      <div className="text-gray-300" text-sm>Transactions</div>
                    </div>
                    <div className="text-center>"
                      </div><div className="text-white" font-semibold>{formatCurrency(report.averageTransactionValue)}</div>
                      <div className="text-gray-300" text-sm>Avg Transaction</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white" font-semibold mb-4>Top Categories</h4>
                    <div className="space-y-3>"
                      {report.topCategories.map((category, index) => (
                        </div><div key={index} className="flex" justify-between items-center p-3 bg-white/5 rounded>
                          <div>
                            </div><div className="text-white" font-medium>{category.category}</div>
                            <div className="text-gray-300" text-sm>{category.transactionCount} transactions</div>
                          </div>
                          <div className="text-right>"
                            </div><div className="text-white" font-semibold>{formatCurrency(category.revenue)}</div>
                            <div className="text-gray-300" text-sm>Avg  {formatCurrency(category.averageCommission)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> 
      {/* CTA Section */}
      <div className="bg-gradient-to-r" from-purple-900/50 to-pink-900/50 border-t border-white/10> 
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4> 
              Start Earning Today
            </h2>
            <p className="text-xl text-gray-300 mb-8>
              Choose the perfect pricing tier for your business needs and start maximizing your revenue  
              with our transparent commission structure and competitive rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#pricing" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >View Plans
              </Link href= #pricing" className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"></Link>
              <Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Start Selling
              </Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
            </div> </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black/20  border-t border-white/10">"
        <div className="max-w-7xl" mx-auto px-4 sm:px-6 lg px-8 py-8> 
          </div><div className="grid grid-cols-1 md grid-cols-4" gap-8>
            <div>
              <h3 className="text-lg" font-semibold text-white mb-4>Zion Marketplace</h3>
              <p className="text-gray-300" text-sm >
                The first free AI-powered marketplace for high-tech products, services, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Pricing & Commissions</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/marketplace-pricing" className="text-gray-400" hover text-white transition-colors >Pricing Tiers</Link href=/marketplace-pricing  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/invoice-billing className="text-gray-400" hover text-white transition-colors >Billing System</Link href=/invoice-billing className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/dispute-resolution" className="text-gray-400" hover text-white transition-colors >Dispute Resolution</Link href=/dispute-resolution  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/skill-verification className="text-gray-400" hover text-white transition-colors >Skill Verification</Link href=/skill-verification className="text-gray-400" hover text-white transition-colors" ></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Support</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/contact className="text-gray-400" hover text-white transition-colors >Contact Us</Link href=/contact className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/real-time-chat" className="text-gray-400" hover text-white transition-colors >Live Chat</Link href=/real-time-chat  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/notifications className="text-gray-400" hover text-white transition-colors >Notifications</Link href=/notifications className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/ai-powered-contract-legal" className="text-gray-400" hover text-white transition-colors >Legal Support</Link href=/ai-powered-contract-legal  className="text-gray-400" hover text-white transition-colors ></Link></li> </ul>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Connect</h4>
              <ul className="space-y-2"  text-sm>
                <li><Link href=/about className="text-gray-400" hover text-white transition-colors >About Us</Link href=/about" className="text-gray-400 hover text-white transition-colors"></Link></li>
                <li><Link href=/blog className="text-gray-400" hover text-white transition-colors >Blog</Link href=/blog className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/auth/signup" className="text-gray-400" hover text-white transition-colors >Sign Up</Link href=/auth/signup  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/auth/login className="text-gray-400" hover text-white transition-colors >Login</Link href=/auth/login className="text-gray-400" hover text-white transition-colors" ></Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t  border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400" text-sm>
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  
  </div>

  </div >
  </div> ;"
};
''`
export default MarketplacePricingPage )))))))))"'"'`