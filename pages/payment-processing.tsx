import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'crypto' | 'bank';
  name: string;
  icon: string;
  last4?: string;
  expiry?: string;
  isDefault: boolean;
  isVerified: boolean;
}

interface Transaction {
  id: string;
  type: 'payment' | 'refund' | 'withdrawal' | 'fee';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  description: string;
  date: Date;
  paymentMethod: string;
  recipient?: string;
  reference?: string;
}

interface PaymentForm {
  amount: string;
  currency: string;
  description: string;
  paymentMethod: string;
  recipient: string;
}

const PaymentProcessingPage: NextPage = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTab, setSelectedTab] = useState<'pay' | 'history' | 'methods' | 'analytics'>('pay');
  const [paymentForm, setPaymentForm] = useState<PaymentForm>({
    amount: '',
    currency: 'USD',
    description: '',
    paymentMethod: '',
    recipient: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    // Simulate loading payment data
    setTimeout(() => {
      const mockPaymentMethods: PaymentMethod[] = [
        {
          id: '1',
          type: 'card',
          name: 'Visa ending in 4242',
          icon: '💳',
          last4: '4242',
          expiry: '12/25',
          isDefault: true,
          isVerified: true
        },
        {
          id: '2',
          type: 'card',
          name: 'Mastercard ending in 8888',
          icon: '💳',
          last4: '8888',
          expiry: '08/26',
          isDefault: false,
          isVerified: true
        },
        {
          id: '3',
          type: 'paypal',
          name: 'PayPal Account',
          icon: '🔵',
          isDefault: false,
          isVerified: true
        },
        {
          id: '4',
          type: 'crypto',
          name: 'Bitcoin Wallet',
          icon: '₿',
          isDefault: false,
          isVerified: true
        },
        {
          id: '5',
          type: 'bank',
          name: 'Bank Account',
          icon: '🏦',
          isDefault: false,
          isVerified: false
        }
      ];

      const mockTransactions: Transaction[] = [
        {
          id: '1',
          type: 'payment',
          amount: 2500,
          currency: 'USD',
          status: 'completed',
          description: 'Payment for AI Development Services',
          date: new Date(Date.now() - 2 * 60 * 60 * 1000),
          paymentMethod: 'Visa ending in 4242',
          recipient: 'Dr. Sarah Chen',
          reference: 'TXN-2024-001'
        },
        {
          id: '2',
          type: 'payment',
          amount: 15000,
          currency: 'USD',
          status: 'completed',
          description: 'Equipment Rental - NVIDIA DGX A100',
          date: new Date(Date.now() - 24 * 60 * 60 * 1000),
          paymentMethod: 'PayPal Account',
          recipient: 'AI Compute Solutions',
          reference: 'TXN-2024-002'
        },
        {
          id: '3',
          type: 'refund',
          amount: -500,
          currency: 'USD',
          status: 'completed',
          description: 'Refund for cancelled service',
          date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          paymentMethod: 'Visa ending in 4242',
          reference: 'TXN-2024-003'
        },
        {
          id: '4',
          type: 'withdrawal',
          amount: -3000,
          currency: 'USD',
          status: 'pending',
          description: 'Withdrawal to bank account',
          date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
          paymentMethod: 'Bank Account',
          reference: 'TXN-2024-004'
        },
        {
          id: '5',
          type: 'fee',
          amount: -25,
          currency: 'USD',
          status: 'completed',
          description: 'Platform transaction fee',
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          paymentMethod: 'Visa ending in 4242',
          reference: 'TXN-2024-005'
        }
      ];

      setPaymentMethods(mockPaymentMethods);
      setTransactions(mockTransactions);
      setLoading(false);
    }, 1000);
  }, []);

  const handlePayment = async () => {
    if (!paymentForm.amount || !paymentForm.paymentMethod || !paymentForm.recipient) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const newTransaction: Transaction = {
        id: `TXN-${Date.now()}`,
        type: 'payment',
        amount: parseFloat(paymentForm.amount),
        currency: paymentForm.currency,
        status: 'completed',
        description: paymentForm.description,
        date: new Date(),
        paymentMethod: paymentMethods.find(pm => pm.id === paymentForm.paymentMethod)?.name || '',
        recipient: paymentForm.recipient,
        reference: `TXN-${Date.now()}`
      };

      setTransactions(prev => [newTransaction, ...prev]);
      setPaymentForm({
        amount: '',
        currency: 'USD',
        description: '',
        paymentMethod: '',
        recipient: ''
      });
      setShowPaymentModal(false);
      setLoading(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      case 'cancelled': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'payment': return '💸';
      case 'refund': return '↩️';
      case 'withdrawal': return '📤';
      case 'fee': return '💰';
      default: return '💳';
    }
  };

  const totalBalance = transactions.reduce((sum, tx) => {
    if (tx.status === 'completed') {
      return sum + tx.amount;
    }
    return sum;
  }, 0);

  const pendingAmount = transactions
    .filter(tx => tx.status === 'pending')
    .reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>Payment Processing - Zion Marketplace</title>
        <meta name="description" content="Secure payment processing for marketplace transactions, multiple payment methods, and financial management" />
        <meta name="keywords" content="payment processing, secure payments, marketplace transactions, Zion" />
        <link rel="icon" href="/favicon.ico" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md flex items-center space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <Link href="/services" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/equipment-rental" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Rent Equipment
              </Link>
              <Link href="/real-time-chat" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Live Chat
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md text-5xl font-bold text-white mb-4">
            Payment Processing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure, fast, and reliable payment processing for all your marketplace transactions. 
            Multiple payment methods, real-time processing, and comprehensive financial management.
          </p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm font-medium">Available Balance</p>
                <p className="text-3xl font-bold text-white">${totalBalance.toLocaleString()}</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-300 text-sm font-medium">Pending Amount</p>
                <p className="text-3xl font-bold text-white">${pendingAmount.toLocaleString()}</p>
              </div>
              <div className="text-4xl">⏳</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm font-medium">Payment Methods</p>
                <p className="text-3xl font-bold text-white">{paymentMethods.length}</p>
              </div>
              <div className="text-4xl">💳</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex space-x-1 mb-6">
            {[
              { id: 'pay', name: 'Make Payment', icon: '💸' },
              { id: 'history', name: 'Transaction History', icon: '📊' },
              { id: 'methods', name: 'Payment Methods', icon: '💳' },
              { id: 'analytics', name: 'Analytics', icon: '📈' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {selectedTab === 'pay' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Make a Payment</h3>
                <p className="text-gray-300 mb-6">Send secure payments to service providers, talents, and equipment rentals.</p>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105"
                >
                  💸 Send Payment
                </button>
              </div>

              {/* Quick Payment Options */}
              <div className="grid grid-cols-1 md grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">👨‍💻</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Service Providers</h4>
                  <p className="text-gray-300 text-sm mb-4">Pay for IT services, AI development, and consulting</p>
                  <button className="bg-purple-600 hover bg-purple-700 text-white px-4 py-4 rounded-lg text-sm font-medium transition-colors">
                    Pay for Services
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Equipment Rental</h4>
                  <p className="text-gray-300 text-sm mb-4">Pay for hardware rentals and computing equipment</p>
                  <button className="bg-purple-600 hover bg-purple-700 text-white px-4 py-4 rounded-lg text-sm font-medium transition-colors">
                    Pay for Equipment
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Talent Payments</h4>
                  <p className="text-gray-300 text-sm mb-4">Pay for AI talents and expert consultants</p>
                  <button className="bg-purple-600 hover bg-purple-700 text-white px-4 py-4 rounded-lg text-sm font-medium transition-colors">
                    Pay for Talents
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'history' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Transaction History</h3>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getTypeIcon(transaction.type)}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{transaction.description}</h4>
                          <p className="text-sm text-gray-400">
                            {transaction.date.toLocaleDateString()} • {transaction.paymentMethod}
                          </p>
                          {transaction.recipient && (
                            <p className="text-sm text-purple-400">To: {transaction.recipient}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${
                          transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {transaction.amount >= 0 ? '+' : ''}${transaction.amount.toLocaleString()}
                        </p>
                        <span className={`px-3 py-3 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'methods' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Payment Methods</h3>
                <button className="bg-purple-600 hover bg-purple-700 text-white px-4 py-4 rounded-lg text-sm font-medium transition-colors">
                  + Add Method
                </button>
              </div>
              <div className="grid grid-cols-1 md grid-cols-2 gap-6">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{method.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{method.name}</h4>
                          {method.last4 && (
                            <p className="text-sm text-gray-400">•••• {method.last4}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.isDefault && (
                          <span className="text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded">
                            Default
                          </span>
                        )}
                        {method.isVerified ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <span className="text-yellow-400">⚠</span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-purple-600 hover bg-purple-700 text-white px-3 py-4 rounded-lg text-sm font-medium transition-colors">
                        Edit
                      </button>
                      <button className="flex-1 bg-red-600 hover bg-red-700 text-white px-3 py-4 rounded-lg text-sm font-medium transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Payment Analytics</h3>
              <div className="grid grid-cols-1 md grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Total Payments</h4>
                  <p className="text-3xl font-bold text-green-400">
                    ${transactions.filter(tx => tx.type === 'payment' && tx.status === 'completed').reduce((sum, tx) => sum + tx.amount, 0).toLocaleString()}
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Success Rate</h4>
                  <p className="text-3xl font-bold text-blue-400">
                    {Math.round((transactions.filter(tx => tx.status === 'completed').length / transactions.length) * 100)}%
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Avg Transaction</h4>
                  <p className="text-3xl font-bold text-purple-400">
                    ${Math.round(transactions.reduce((sum, tx) => sum + tx.amount, 0) / transactions.length).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {transactions.slice(0, 5).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{getTypeIcon(transaction.type)}</span>
                        <span className="text-white">{transaction.description}</span>
                      </div>
                      <span className={`font-semibold ${
                        transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {transaction.amount >= 0 ? '+' : ''}${transaction.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">Bank-Level Security</h3>
            <p className="text-gray-300">
              End-to-end encryption, fraud protection, and secure payment processing with industry-leading security standards.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Processing</h3>
            <p className="text-gray-300">
              Real-time payment processing with instant confirmations and immediate fund availability for verified accounts.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-white mb-3">Global Payments</h3>
            <p className="text-gray-300">
              Support for multiple currencies, international payments, and cross-border transactions with competitive rates.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Processing Payments?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users already using our secure payment processing system for marketplace transactions.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover scale-105">
                Get Started
              </Link>
              <Link href="/marketplace" className="border border-white/20 text-white hover bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-white mb-6">Send Payment</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                <input
                  type="number"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="0.00"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
                <select
                  value={paymentForm.currency}
                  onChange={(e) => setPaymentForm(prev => ({ ...prev, currency: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus border-purple-500 transition-colors"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <input
                  type="text"
                  value={paymentForm.description}
                  onChange={(e) => setPaymentForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Payment for services"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                <select
                  value={paymentForm.paymentMethod}
                  onChange={(e) => setPaymentForm(prev => ({ ...prev, paymentMethod: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus border-purple-500 transition-colors"
                >
                  <option value="">Select payment method</option>
                  {paymentMethods.map(method => (
                    <option key={method.id} value={method.id}>{method.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Recipient</label>
                <input
                  type="text"
                  value={paymentForm.recipient}
                  onChange={(e) => setPaymentForm(prev => ({ ...prev, recipient: e.target.value }))}
                  placeholder="Recipient name or email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus border-purple-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 border border-white/20 text-white hover bg-white/10 px-4 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {loading ? 'Processing...' : 'Send Payment'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default PaymentProcessingPage 