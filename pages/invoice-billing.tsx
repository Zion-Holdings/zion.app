import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import { useState, useEffect }  from "react";
import Link from "next/link";

interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;'
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled";
  dueDate: Date;
  issueDate: Date;
  items: InvoiceItem[];
  tax: number;
  total: number;
  currency: string;
  paymentMethod?: string;
  paidDate?: Date;}
interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;}
interface BillingCycle {
  id: string;'
  name: string;
  type: 'monthly' | 'quarterly' | 'yearly' | 'custom";
  startDate: Date;
  endDate: Date;
  totalInvoices: number;
  totalAmount: number;
  paidAmount: number;
  outstandingAmount: number;}
interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  method: string;'
  date: Date;
  status: 'pending' | 'completed' | 'failed' | 'refunded";
  transactionId: string;}
const InvoiceBillingPage: NextPage = () => {'
  const [activeTab, setActiveTab] = useState('invoices
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null
  const [invoices, setInvoices] = useState<Invoice[]>(['
    {
      id: 'INV-001',
      invoiceNumber: 'INV-2024-001',
      client: 'TechCorp Solutions','
      amount: 2500,
      status: 'paid',
      dueDate: new Date('2024-01-15'),
      issueDate: new Date('2024-01-01'),
      items: ['
},
    { id: '1', description: 'AI Development Services', quantity: 1, unitPrice: 2000, total: 2000 },
{ id: '2', description: 'Cloud Infrastructure Setup', quantity: 1, unitPrice: 500, total: 500}
      ],
      tax: 250,'
      total: 2750,
      currency: 'USD',
      paymentMethod: 'Credit Card',
      paidDate: new Date('2024-01-10'}'
    {
      id: 'INV-002',
      invoiceNumber: 'INV-2024-002',
      client: 'InnovateLabs','
      amount: 1800,
      status: 'overdue',
      dueDate: new Date('2024-01-20'),
      issueDate: new Date('2024-01-05'),'
      items: [
        { id: '3', description: 'Mobile App Development', quantity: 1, unitPrice: 1500, total: 1500 },
{ id: '4', description: 'UI/UX Design', quantity: 1, unitPrice: 300, total: 300}
      ],
      tax: 180,'
      total: 1980,
      currency: 'USD'}'
    {
      id: 'INV-003',
      invoiceNumber: 'INV-2024-003',
      client: 'DataFlow Systems','
      amount: 3200,
      status: 'sent',
      dueDate: new Date('2024-02-01'),
      issueDate: new Date('2024-01-15'),'
      items: [
        { id: '5', description: 'Database Migration', quantity: 1, unitPrice: 2000, total: 2000 },
{ id: '6', description: 'API Integration', quantity: 1, unitPrice: 1200, total: 1200}
      ],
      tax: 320,'
      total: 3520,
      currency: 'USD
    }]
  const [billingCycles, setBillingCycles] = useState<BillingCycle[]>(['
    {
      id: 'CYCLE-001',
      name: 'Q1 2024',
      type: 'quarterly',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-03-31'),
      totalInvoices: 15,
      totalAmount: 45000,
      paidAmount: 38000,
      outstandingAmount: 7000
    },'
{
      id: 'CYCLE-002',
      name: 'Q4 2023',
      type: 'quarterly',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2023-12-31'),
      totalInvoices: 12,
      totalAmount: 38000,
      paidAmount: 38000,
      outstandingAmount: 0
    }]
  const [payments, setPayments] = useState<Payment[]>(['
    {
      id: 'PAY-001',
      invoiceId: 'INV-001','
      amount: 2750,
      method: 'Credit Card',
      date: new Date('2024-01-10'),
      status: 'completed',
      transactionId: 'TXN-123456'
    },'
{
      id: 'PAY-002',
      invoiceId: 'INV-003','
      amount: 3520,
      method: 'Bank Transfer',
      date: new Date('2024-01-18'),
      status: 'pending',
      transactionId: 'TXN-789012
    }]
  const getStatusColor = (status: string) => {'
    switch (status) {
      case 'draft': return 'text-gray-400 bg-gray-500/20 border-gray-500/30
      case 'sent': return 'text-blue-400 bg-blue-500/20 border-blue-500/30
      case 'paid': return 'text-green-400 bg-green-500/20 border-green-500/30
      case 'overdue': return 'text-red-400 bg-red-500/20 border-red-500/30
      case 'cancelled': return 'text-orange-400 bg-orange-500/20 border-orange-500/30
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'}}
  const getPaymentStatusColor = (status: string) => {'
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30
      case 'completed': return 'text-green-400 bg-green-500/20 border-green-500/30
      case 'failed': return 'text-red-400 bg-red-500/20 border-red-500/30
      case 'refunded': return 'text-orange-400 bg-orange-500/20 border-orange-500/30
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'}}'
  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount}
  const calculateOutstandingAmount = () => {'
    return invoices
      .filter(inv => inv.status === 'sent' || inv.status === 'overdue
      .reduce((sum, inv) => sum + inv.total, 0}
  const calculateTotalPaid = () => {'
    return invoices
      .filter(inv => inv.status === 'paid
      .reduce((sum, inv) => sum + inv.total, 0}
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
        <title>Invoice & Billing Management - Zion Marketplace</title>
        <meta name="description content=Comprehensive invoice and billing management system for marketplace transactions. Generate invoices, track payments, and manage billing cycles. > </meta" name="description" content="Comprehensive invoice and billing management system for marketplace transactions. Generate invoices, track payments, and manage billing" cycles." ><meta name="keywords content=invoice billing, payment tracking, billing cycles, financial management, marketplace billing > </meta" name="keywords" content="invoice billing, payment tracking, billing cycles, financial management, marketplace" billing" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
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
            <span className="text-transparent" bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400>
              Invoice & Billing
            </span>
          </h1 >
          <p className="text-xl" text-gray-300 mb-8 max-w-3xl" mx-auto>
            Comprehensive invoice and billing management system for marketplace transactions. "
            Generate professional invoices, track payments, and manage billing cycles with ease.
          </p>
          <div className="flex  flex-wrap justify-center gap-4>
            <Link href=#invoices" className="bg-gradient-to-r" from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >View Invoices
            </Link href=#invoices  className="bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"></Link>
            <Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Create Invoice
            </Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm" ></Link>
          </div>
        </div>
"
        {/* Stats */}
        <div className="grid"  grid-cols-1 md:grid-cols-4 gap-6 mb-12>
          </div><div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6" text-center>
            <div className="text-3xl" font-bold text-white mb-2>{invoices.length}</div>
            <p className="text-gray-300" text-sm>Total Invoices</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg p-6 text-center >
            </div><div className="text-3xl" font-bold text-white mb-2>{formatCurrency(calculateOutstandingAmount())}</div>
            <p className="text-gray-300" text-sm>Outstanding Amount</p>
          </div>
          <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6 text-center>
            </div><div className="text-3xl" font-bold text-white mb-2 >{formatCurrency(calculateTotalPaid())}</div>
            <p className="text-gray-300" text-sm>Total Paid</p>
          </div>'
          <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6" text-center>''
            </div><div className="text-3xl" font-bold text-white mb-2>{invoices.filter(inv => inv.status === 'overdue').length}</div>
            <p className="text-gray-300" text-sm >Overdue Invoices</p>
          </div>
        </div>
      </div>

      {/* Main Content */}"
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8 pb-12>
        {/* Tabs */}
        </div><div className=" flex flex-wrap gap-2" mb-8>"
          {["'
            { id: 'invoices', label: 'Invoices' },
{ id: 'billing', label: 'Billing Cycles' },
    { id: 'payments', label  'Payments' },
{ id  'reports', label  'Reports'}"
          ].map((tab) => (
            "
              onClick={() => setActiveTab(tab.id)}
              className="{`px-6" py-3 rounded-lg:font-medium transition-all duration-300 ${'
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'`
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'``
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
'
        {/* Tab Content */},'"'
{activeTab === 'invoices' && (
          <div className="space-y-6>" 
            </div><div className="flex justify-between" items-center>
              <h2 className="text-2xl" font-bold text-white>Invoices</h2>
              <Link href=/marketplace className="bg-gradient-to-r" from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 >Create New Invoice
              </Link href=/marketplace  className="bg-gradient-to-r" from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" ></Link>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6>
              {invoices.map((invoice) => (
                </div><div key={invoice.id} className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6 hover:bg-white/10 transition-all duration-300>
                  <div className="flex" justify-between items-start mb-4 >
                    </div><div>
                      <h3 className="text-lg" font-semibold text-white>{invoice.invoiceNumber}</h3>
                      <p className="text-gray-300" text-sm>{invoice.client}</p> `
                    </div>``
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                      {invoice.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="space-y-3" mb-4 > 
                    </div><div className="flex" justify-between>
                      <span className="text-gray-300>Amount:</span">
                      <span className="text-white" font-semibold>{formatCurrency(invoice.total)}</span>
                    </div>
                    <div className="flex  justify-between">
                      <span className="text-gray-300>Issue" Date </span>
                      <span className="text-white>{invoice.issueDate.toLocaleDateString()}</span">
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300>Due" Date:</span>
                      <span className="text-white>{invoice.dueDate.toLocaleDateString()}</span>" 
                    </div>
                    {invoice.paymentMethod && (
                      <div className="flex" justify-between>
                        <span className="text-gray-300>Payment" Method:</span>
                        <span className="text-white>{invoice.paymentMethod}</span>"
                      </div>
                    )}
                  </div> 
                  <div className=" flex" gap-2>
                    <button className="flex-1 bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm transition-colors> 
                      View Details
                    </button>
                    <button className="flex-1" bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-3 py-4 rounded text-sm:transition-colors>
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}"'
''
        {activeTab === 'billing' && ("
          <div className="space-y-6">
            <h2 className="text-2xl" font-bold text-white>Billing Cycles</h2>
            <div className="grid grid-cols-1 md grid-cols-2 gap-6>
              {billingCycles.map((cycle) => (
                </div><div key={cycle.id} className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-6>
                  <div className="flex" justify-between items-start mb-4 >
                    </div><div>
                      <h3 className="text-lg" font-semibold text-white>{cycle.name}</h3>
                      <p className="text-gray-300" text-sm capitalize>{cycle.type} Cycle</p> 
                    </div>
                    <span className="px-3" py-3 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30>
                      Active
                    </span>
                  </div>
                  
                  <div className="space-y-3" mb-4 > 
                    </div><div className="flex" justify-between>
                      <span className="text-gray-300>Period:</span">
                      <span className="text-white>
                        {cycle.startDate.toLocaleDateString()} - {cycle.endDate.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300>Total" Invoices </span>
                      <span className="text-white>{cycle.totalInvoices}</span">
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300>Total" Amount:</span>
                      <span className="text-white" font-semibold>{formatCurrency(cycle.totalAmount)}</span> 
                    </div>
                    <div className="flex" justify-between>
                      <span className="text-gray-300>Paid" Amount:</span>
                      <span className="text-white>{formatCurrency(cycle.paidAmount)}</span>"
                    </div>
                    <div className=" flex" justify-between>
                      <span className="text-gray-300>Outstanding:</span">
                      <span className="text-white>{formatCurrency(cycle.outstandingAmount)}</span>"
                    </div>
                  </div">
                  <div className="w-full" bg-gray-700 rounded-full h-2 mb-4  >
                    </div>
                    ></div>
                  </div>
                  <div className=" flex" gap-2>"
                    <button className="flex-1" bg-white/10 text-white hover:bg-white/20 px-3 py-4 rounded text-sm:transition-colors>
                      View Details
                    </button>
                    <button className="flex-1" bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-3 py-4 rounded text-sm transition-colors >
                      Generate Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}"'
''
        {activeTab === 'payments' && ("
          <div className="space-y-6">
            <h2 className="text-2xl" font-bold text-white>Payment History</h2>
            <div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:overflow-hidden> 
              </div><div className="overflow-x-auto"">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="text-left" text-gray-300 py-3 px-6>Payment ID</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Invoice</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Amount</th> 
                      <th className="text-left" text-gray-300 py-3 px-6>Method</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Date</th>
                      <th className="text-left" text-gray-300 py-3 px-6 >Status</th>
                      <th className="text-left" text-gray-300 py-3 px-6>Actions</th>
                    </tr> 
                  </thead>
                  <tbody className="divide-y" divide-white/10>
                    {payments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-white/5>"
                        <td className="text-white" py-3 px-6 >{payment.id}</td>
                        <td className="text-white" py-3 px-6>{payment.invoiceId}</td> 
                        <td className="text-white" py-3 px-6>{formatCurrency(payment.amount)}</td>
                        <td className="text-white" py-3 px-6>{payment.method}</td>
                        <td className="text-white" py-3 px-6 >{payment.date.toLocaleDateString()}</td>`
                        <td className="py-3" px-6">``"
                          <span className="{`px-3" py-3 rounded-full text-xs font-medium border  ${getPaymentStatusColor(payment.status)}`}>
                            {payment.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="text-white" py-3 px-6>
                          <button className="text-green-400" hover text-green-300 text-sm >
                            View Details
                          </button>
                        </td>
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
          <div className="space-y-8">
            <h2 className="text-2xl" font-bold text-white>Financial Reports</h2>
            <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6> 
              </div><div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg p-6">
                <h3 className="text-lg" font-semibold text-white mb-4>Revenue Summary</h3>
                <div className="space-y-3>"
                  </div><div className=" flex" justify-between>
                    <span className="text-gray-300>Total" Revenue:</span>
                    <span className="text-white" font-semibold>{formatCurrency(calculateTotalPaid())}</span> 
                  </div>
                  <div className="flex" justify-between>
                    <span className="text-gray-300>This" Month:</span>
                    <span className="text-white>{formatCurrency(12000)}</span>"
                  </div>
                  <div className=" flex" justify-between>
                    <span className=" text-gray-300>Last Month:</span>
                    <span className="text-white>{formatCurrency(9800)}</span>"
                  </div>
                </div>
                <button className="w-full" mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-4 py-4 rounded text-sm transition-colors  >
                  Download Report
                </button>
              </div>
              <div className=" bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
                <h3 className="text-lg" font-semibold text-white mb-4>Payment Methods</h3>
                <div className="space-y-3>" 
                  </div><div className="flex justify-between">
                    <span className="text-gray-300>Credit" Card </span>
                    <span className="text-white>65%</span">
                  </div>
                  <div className="flex" justify-between>
                    <span className="text-gray-300>Bank" Transfer:</span>
                    <span className="text-white>25%</span>" 
                  </div>
                  <div className="flex" justify-between>
                    <span className="text-gray-300>Digital" Wallet:</span>
                    <span className="text-white>10%</span>"
                  </div>
                </div>
                <button className="w-full" mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-4 py-4 rounded text-sm transition-colors>
                  View Details
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg" p-6>
                <h3 className="text-lg" font-semibold text-white mb-4>Outstanding Invoices</h3>
                <div className="space-y-3>" 
                  </div><div className="flex" justify-between>
                    <span className=" text-gray-300>Total Outstanding:</span>
                    <span className="text-white" font-semibold>{formatCurrency(calculateOutstandingAmount())}</span> 
                  </div>
                  <div className="flex"" justify-between">
                    <span className="text-gray-300>Overdue" </span>
                    <span className="text-red-400>{formatCurrency(1980)}</span">
                  </div>
                  <div className="flex" justify-between>
                    <span className="text-gray-300>Due" This Week:</span>
                    <span className="text-yellow-400>{formatCurrency(3520)}</span>"
                  </div>
                </div>
                <button className="w-full" mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-4 py-4 rounded text-sm transition-colors>
                  Send Reminders
                </button>
              </div> 
            </div>
            <div className="bg-white/5"" backdrop-blur-sm:border border-white/10 rounded-lg:p-6>
              <h3 className="text-lg" font-semibold text-white mb-4 >Quick Actions</h3>
              <div className="grid" grid-cols-1 md grid-cols-4" gap-4>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover to-emerald-700 text-white px-4 py-3 rounded-lg text-sm transition-colors> 
                  Generate Invoice
                </button>
                <button className="bg-white/10" text-white hover:bg-white/20 px-4 py-3 rounded-lg:text-sm:transition-colors>
                  Send Reminders
                </button>
                <button className="bg-white/10" text-white hover bg-white/20 px-4 py-3 rounded-lg text-sm transition-colors >
                  Export Data
                </button>
                <button className="bg-white/10" text-white hover bg-white/20 px-4 py-3 rounded-lg text-sm transition-colors>
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div> 
      {/* CTA Section */}"
      <div className="bg-gradient-to-r" from-green-900/50 to-emerald-900/50 border-t border-white/10> 
        </div><div className="max-w-7xl"" mx-auto px-4 sm:px-6 lg:px-8 py-32>
          <div className="text-center>"
            <h2 className="text-3xl" font-bold text-white mb-4>
              Streamline Your Billing
            </h2>
            <p className="text-xl" text-gray-300 mb-8>
              Professional invoice generation, automated payment tracking, and comprehensive financial reporting  
              to help you manage your marketplace transactions efficiently.
            </p>
            <div className="flex  flex-wrap justify-center gap-4>
              <Link href=#invoices" className="bg-gradient-to-r" from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Get Started
              </Link href=#invoices  className="bg-gradient-to-r from-green-600 to-emerald-600 hover from-green-700 hover to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"></Link>
              <Link href=/marketplace className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Explore Marketplace
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
              <h4 className="text-white" font-semibold mb-4>Financial</h4>
              <ul className="space-y-2"" text-sm>
                <li><Link href=/invoice-billing" className="text-gray-400" hover text-white transition-colors >Invoice & Billing</Link href=/invoice-billing  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/payment-processing className="text-gray-400" hover text-white transition-colors >Payment Processing</Link href=/payment-processing className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/escrow-services" className="text-gray-400" hover text-white transition-colors >Escrow Services</Link href=/escrow-services  className="text-gray-400" hover text-white transition-colors" ></Link></li>
                <li><Link href=/warranty-protection className="text-gray-400" hover text-white transition-colors >Warranty Protection</Link href=/warranty-protection className="text-gray-400" hover text-white transition-colors" ></Link></li>
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
export default InvoiceBillingPage ))))))))))))"'"'`