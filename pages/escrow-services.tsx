import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import { useState, useEffect }  from "react";
import Link from "next/link";

interface EscrowTransaction {
  id: string;
  buyer: string;
  seller: string;'
  amount: number;
  status: 'pending' | 'funded' | 'in_progress' | 'completed' | 'disputed' | 'refunded";
  service: string;
  createdAt: Date;
  deadline: Date;
  description: string;}
interface EscrowAccount {
  id: string;
  balance: number;
  pendingAmount: number;
  completedTransactions: number;
  totalVolume: number;}
const EscrowServicesPage: NextPage = () => {'
  const [activeTab, setActiveTab] = useState('overview'
  const [transactions, setTransactions] = useState<EscrowTransaction[]>(['
    {
      id: 'ESC-001',
      buyer: 'TechCorp Inc.',
      seller: 'AI Solutions Pro','
      amount: 5000,
      status: 'in_progress',
      service: 'AI Model Development',
      createdAt: new Date('2024-01-15'),
      deadline: new Date('2024-02-15'),
      description: 'Custom machine learning model for predictive analytics'}
    },'
{
      id: 'ESC-002',
      buyer: 'StartupXYZ',
      seller: 'CloudTech Experts','
      amount: 15000,
      status: 'funded',
      service: 'Cloud Migration',
      createdAt: new Date('2024-01-20'),
      deadline: new Date('2024-03-20'),
      description: 'Complete AWS migration with security implementation'
    },'
    {
      id: 'ESC-003',
      buyer: 'Enterprise Solutions',
      seller: 'BlockChain Solutions','
      amount: 25000,
      status: 'completed',
      service: 'Blockchain Integration',
      createdAt: new Date('2024-01-10'),
      deadline: new Date('2024-02-10'),
      description: 'Smart contract development and blockchain integration'
    }]'
  const [escrowAccount, setEscrowAccount] = useState<EscrowAccount>({
    id: 'ACC-001',
    balance: 45000,
    pendingAmount: 20000,
    completedTransactions: 15,
    totalVolume: 125000}
  const [disputes, setDisputes] = useState(['
    {
      id: 'DISP-001',
      transactionId: 'ESC-001',
      reason: 'Delayed delivery',
      status: 'under_review',
      createdAt: new Date('2024-01-25'),
      resolution: null
    }]
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'pending': return 'text-yellow-400
      case 'funded': return 'text-blue-400
      case 'in_progress': return 'text-purple-400
      case 'completed': return 'text-green-400
      case 'disputed': return 'text-red-400
      case 'refunded': return 'text-gray-400
      default: return 'text-gray-400'}}
  const getStatusBadge = (status: string) => {'
    const colors = {
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      funded: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      in_progress: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      completed: 'bg-green-500/20 text-green-400 border-green-500/30',
      disputed: 'bg-red-500/20 text-red-400 border-red-500/30',
      refunded: 'bg-gray-500/20 text-gray-400 border-gray-500/30'}
    return colors[status as keyof typeof colors] || colors.pending}
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
        <title>Escrow Services - Zion Marketplace</title>
        <meta name="description content=Secure escrow services for marketplace transactions. Protected payments, dispute resolution, and transaction security. > </meta" name="description" content="Secure escrow services for marketplace transactions. Protected payments, dispute resolution, and transaction" security." ><meta name="keywords content=escrow services, secure payments, dispute resolution, marketplace security, transaction protection > </meta" name="keywords" content="escrow services, secure payments, dispute resolution, marketplace security, transaction" protection" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
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
              <Link href=/payment-processing className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Payments
              </Link href=/payment-processing className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
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
              Escrow Services
            </span>
          </h1 >
          <p className="text-xl" text-gray-300 mb-8 max-w-3xl" mx-auto>
            Secure your marketplace transactions with our advanced escrow system. "
            Protected payments, automated dispute resolution, and complete transaction security.
          </p>
          <div className="flex  flex-wrap justify-center gap-4>
            <Link href=#features" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Learn More
            </Link href=#features  className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"></Link>
            <Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Start Trading
            </Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm" ></Link>
          </div>
        </div>
"
        {/* Stats */}
        <div className="grid"  grid-cols-1 md:grid-cols-4 gap-6 mb-12>
          </div><div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6" text-center>
            <div className="text-3xl" font-bold text-white mb-2>$2.5M+</div>
            <p className="text-gray-300" text-sm>Protected Transactions</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg p-6 text-center >
            </div><div className="text-3xl" font-bold text-white mb-2>99.8%</div>
            <p className="text-gray-300" text-sm>Success Rate</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6 text-center>
            </div><div className="text-3xl" font-bold text-white mb-2 >24/7</div>
            <p className="text-gray-300" text-sm>Support Available</p>
          </div>
          <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6" text-center>
            </div><div className="text-3xl" font-bold text-white mb-2>48hrs</div>
            <p className="text-gray-300" text-sm >Dispute Resolution</p>
          </div>
        </div>
      </div>

      {/* Main Content */}"
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 pb-12>
        {/* Tabs */}
        </div><div className=" flex flex-wrap gap-2" mb-8>"
          {["'
            { id: 'overview', label: 'Overview' },
{ id: 'transactions', label: 'Transactions' },
    { id: 'disputes', label  'Disputes' },
{ id  'account', label  'Account'}"
          ].map((tab) => (
            "
              onClick={() => setActiveTab(tab.id)}
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
        {/* Tab Content */},
{activeTab === 'overview' && ("
          <div className="space-y-8>" 
            {/* Features */}
            </div><div className="grid grid-cols-1 md:grid-cols-2 lg grid-cols-3" gap-6>
              <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6>
                </div><div className="text-3xl:mb-4>🔒</div>"
                <h3 className="text-xl" font-semibold text-white mb-3 >Secure Escrow</h3>
                <p className="text-gray-300>"
                  Funds are held securely in escrow until both parties are satisfied with the transaction.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6>
                </div><div className="text-3xl:mb-4>⚡</div>"
                <h3 className="text-xl" font-semibold text-white mb-3 >Instant Protection</h3>
                <p className="text-gray-300>"
                  Automatic protection for all marketplace transactions with instant escrow activation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6>
                </div><div className="text-3xl:mb-4>🤝</div>"
                <h3 className="text-xl" font-semibold text-white mb-3 >Dispute Resolution</h3>
                <p className="text-gray-300>"
                  AI-powered dispute resolution with human oversight for fair outcomes.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6>
                </div><div className="text-3xl:mb-4>📊</div>"
                <h3 className="text-xl" font-semibold text-white mb-3 >Transparent Tracking</h3>
                <p className="text-gray-300>"
                  Real-time transaction tracking with detailed status updates and notifications.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6>
                </div><div className="text-3xl:mb-4>🌍</div>"
                <h3 className="text-xl" font-semibold text-white mb-3 >Global Support</h3>
                <p className="text-gray-300>"
                  Multi-currency support with international transaction protection.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6>
                </div><div className="text-3xl:mb-4>🔐</div>"
                <h3 className="text-xl" font-semibold text-white mb-3 >Bank-Level Security</h3>
                <p className="text-gray-300>"
                  Enterprise-grade security with encryption and fraud protection.
                </p>
              </div>
            </div>
            {/* How It Works */}
            <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-8>
              <h2 className="text-2xl" font-bold text-white mb-6>How Escrow Works</h2>
              <div className="grid" grid-cols-1 md grid-cols-4 gap-6 > 
                </div><div className="text-center">
                  <div className="w-16" h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>1</div>
                  <h3 className="text-lg" font-semibold text-white mb-2>Agreement</h3>
                  <p className="text-gray-300" text-sm >Buyer and seller agree on terms and payment amount</p>
                </div>
                <div className="text-center>"
                  </div><div className="w-16" h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>2</div>
                  <h3 className="text-lg" font-semibold text-white mb-2>Payment</h3>
                  <p className="text-gray-300" text-sm >Buyer pays into secure escrow account</p>
                </div>
                <div className="text-center>"
                  </div><div className="w-16" h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>3</div>
                  <h3 className="text-lg" font-semibold text-white mb-2>Delivery</h3>
                  <p className="text-gray-300" text-sm >Seller delivers service or product as agreed</p>
                </div>
                <div className="text-center>"
                  </div><div className="w-16" h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>4</div>
                  <h3 className="text-lg" font-semibold text-white mb-2>Release</h3>
                  <p className="text-gray-300" text-sm >Funds are released to seller upon completion</p>
                </div>
              </div>
            </div>
          </div>
        )}'
'"'
        {activeTab === 'transactions' && (
          <div className="space-y-6>" 
            </div><div className="flex justify-between" items-center>
              <h2 className="text-2xl" font-bold text-white>Recent Transactions</h2>
              <Link href=/marketplace" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 >New Transaction
              </Link href=/marketplace  className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"></Link>
            </div>
            <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg overflow-hidden>
              </div><div className="overflow-x-auto >
                <table className="w-full"">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6" py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>ID</th>
                      <th className="px-6" py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Service</th>
                      <th className="px-6" py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider >Amount</th>
                      <th className="px-6" py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Status</th>
                      <th className="px-6" py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Deadline</th>
                      <th className="px-6" py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">"
                    {transactions.map((transaction) => ("
                      <tr key={transaction.id} className=" hover" bg-white/5>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium> 
                          {transaction.id}
                        </td>
                        <td className="px-6" py-4 whitespace-nowrap>
                          <div>
                            </div><div className="text-sm" text-white font-medium >{transaction.service}</div>
                            <div className="text-sm" text-gray-300>{transaction.description}</div>
                          </div>
                        </td>
                        <td className="px-6" py-4 whitespace-nowrap text-sm text-white>
                          ${transaction.amount.toLocaleString()}
                        </td>'`
                        <td className="px-6" py-4 whitespace-nowrap>''``
                          <span className="{`inline-flex" px-3 py-3 rounded-full text-xs font-medium border ${getStatusBadge(transaction.status)}`}>
                            {transaction.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6" py-4 whitespace-nowrap text-sm text-gray-300>
                          {transaction.deadline.toLocaleDateString()} 
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap" text-sm>
                          <button className="text-purple-400" hover:text-purple-300 mr-3>View</button>
                          <button className="text-blue-400" hover text-blue-300 >Update</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}'
'"'
        {activeTab === 'disputes' && (
          <div className="space-y-6>" 
            </div><div className="flex justify-between" items-center>
              <h2 className="text-2xl" font-bold text-white>Dispute Resolution</h2>
              <Link href=/ai-powered-contract-legal" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 >Legal Support
              </Link href=/ai-powered-contract-legal  className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"></Link>
            </div>
            <div className=" grid grid-cols-1 md grid-cols-2 gap-6>
              </div><div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6>
                <h3 className="text-lg" font-semibold text-white mb-4 >Active Disputes</h3>
                {disputes.map((dispute) => (
                  <div key={dispute.id} className="border" border-white/10 rounded-lg p-4 mb-4> 
                    </div><div className="flex justify-between items-start" mb-2>
                      <span className="text-sm:text-white" font-medium>{dispute.id}</span>'
                      <span className="text-xs" text-yellow-400 bg-yellow-500/20 px-4 py-3 rounded >
                        {dispute.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm" text-gray-300 mb-2>{dispute.reason}</p>
                    <p className="text-xs" text-gray-400>Created  {dispute.createdAt.toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6>
                <h3 className="text-lg" font-semibold text-white mb-4 >Resolution Process</h3>
                <div className="space-y-4>" 
                  </div><div className="flex" items-start>
                    <div className="w-12" h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm:font-bold mr-3 mt-1>1</div>
                    <div>
                      <h4 className="text-white" font-medium >Submit Dispute</h4>
                      <p className="text-sm" text-gray-300>File a dispute with detailed evidence</p>
                    </div>
                  </div>
                  <div className=" flex" items-start>
                    </div><div className="w-12" h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm:font-bold mr-3 mt-1>2</div>
                    <div>
                      <h4 className="text-white" font-medium >AI Review</h4>
                      <p className="text-sm" text-gray-300>AI analyzes evidence and transaction history</p>
                    </div>
                  </div>
                  <div className=" flex" items-start>
                    </div><div className="w-12" h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm:font-bold mr-3 mt-1>3</div>
                    <div>
                      <h4 className="text-white" font-medium >Human Oversight</h4>
                      <p className="text-sm" text-gray-300>Expert review for complex cases</p>
                    </div>
                  </div>
                  <div className=" flex" items-start>
                    </div><div className="w-12" h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm:font-bold mr-3 mt-1>4</div>
                    <div>
                      <h4 className="text-white" font-medium >Resolution</h4>
                      <p className="text-sm" text-gray-300>Fair outcome within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}'
"''
        {activeTab === 'account' && (
          <div className="space-y-6">
            <h2 className="text-2xl" font-bold text-white>Escrow Account</h2>
            <div className="grid"  grid-cols-1 md:grid-cols-3 gap-6>
              </div><div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
                <h3 className="text-lg" font-semibold text-white mb-4>Account Balance</h3>
                <div className="text-3xl" font-bold text-white mb-2>${escrowAccount.balance.toLocaleString()}</div>
                <p className="text-gray-300" text-sm >Available for transactions</p>
              </div>
              <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
                <h3 className="text-lg" font-semibold text-white mb-4>Pending Amount</h3>
                <div className="text-3xl" font-bold text-white mb-2>${escrowAccount.pendingAmount.toLocaleString()}</div>
                <p className="text-gray-300" text-sm >In active transactions</p>
              </div>
              <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
                <h3 className="text-lg" font-semibold text-white mb-4>Total Volume</h3>
                <div className="text-3xl" font-bold text-white mb-2>${escrowAccount.totalVolume.toLocaleString()}</div>
                <p className="text-gray-300" text-sm >All-time transaction volume</p>
              </div>
            </div>
            <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
              <h3 className="text-lg" font-semibold text-white mb-4>Account Statistics</h3>
              <div className="grid" grid-cols-1 md:grid-cols-2 gap-6>
                </div><div>
                  <div className="flex" justify-between items-center mb-2 >
                    <span className="text-gray-300>Completed" Transactions</span>
                    <span className="text-white" font-semibold>{escrowAccount.completedTransactions}</span>
                  </div>'
                  <div className="w-full" bg-gray-700 rounded-full h-2>
                    </div><div className="bg-gradient-to-r" from-purple-600 to-pink-600 h-2 rounded-full  style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div> 
                  </div><div className="flex justify-between items-center" mb-2>
                    <span className=" text-gray-300>Success Rate</span>
                    <span className="text-white" font-semibold>99.8%</span> 
                  </div>'
                  <div className="w-full" bg-gray-700 rounded-full h-2>
                    </div><div className="bg-gradient-to-r" from-green-600 to-emerald-600 h-2 rounded-full style={{ width  '99.8%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div> 
      {/* CTA Section */}"
      <div className="bg-gradient-to-r" from-purple-900/50 to-pink-900/50 border-t border-white/10> 
        </div><div className="max-w-7xl"" mx-auto px-4 sm:px-6 lg:px-8 py-32>
          <div className="text-center>"
            <h2 className="text-3xl" font-bold text-white mb-4>
              Ready to Trade Securely?
            </h2>
            <p className="text-xl" text-gray-300 mb-8>
              Start using our escrow services for protected marketplace transactions. 
            </p>
            <div className="flex"" flex-wrap justify-center gap-4>
              <Link href=/marketplace" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Start Trading
              </Link href=/marketplace  className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"></Link>
              <Link href=/payment-processing className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Learn About Payments
              </Link href=/payment-processing className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
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
              <h4 className="text-white" font-semibold mb-4>Services</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/marketplace" className="text-gray-400" hover text-white transition-colors >Marketplace</Link href=/marketplace  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/escrow-services className="text-gray-400" hover text-white transition-colors >Escrow Services</Link href=/escrow-services className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/payment-processing" className="text-gray-400" hover text-white transition-colors >Payment Processing</Link href=/payment-processing  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/ai-virtual-assistant className="text-gray-400" hover text-white transition-colors >AI Assistant</Link href=/ai-virtual-assistant className="text-gray-400" hover text-white transition-colors" ></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white" font-semibold mb-4>Support</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/contact className="text-gray-400" hover text-white transition-colors >Contact Us</Link href=/contact className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/ai-powered-contract-legal" className="text-gray-400" hover text-white transition-colors >Legal Support</Link href=/ai-powered-contract-legal  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/real-time-chat className="text-gray-400" hover text-white transition-colors >Live Chat</Link href=/real-time-chat className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/notifications" className="text-gray-400" hover text-white transition-colors >Notifications</Link href=/notifications  className="text-gray-400" hover text-white transition-colors ></Link></li> </ul>
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
export default EscrowServicesPage )))))"'"'`