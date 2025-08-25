import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  BarChart3, 
  LineChart,
  Calendar,
  Download,
  Upload,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  FileText,
  CreditCard,
  Banknote,
  Receipt,
  Calculator,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign as DollarIcon,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';

interface FinancialTransaction {
  id: string;
  type: 'revenue' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: Date;
  status: 'completed' | 'pending' | 'cancelled';
  paymentMethod: string;
  reference: string;
  tags: string[];
}

interface Invoice {
  id: string;
  clientName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'draft';
  dueDate: Date;
  issueDate: Date;
  invoiceNumber: string;
  items: InvoiceItem[];
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface Budget {
  id: string;
  category: string;
  allocated: number;
  spent: number;
  remaining: number;
  period: string;
}

interface FinancialManagementDashboardProps {
  className?: string;
}

export const FinancialManagementDashboard: React.FC<FinancialManagementDashboardProps> = ({
  className = ''
}) => {
  const [transactions, setTransactions] = useState<FinancialTransaction[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [filterPeriod, setFilterPeriod] = useState<string>('month');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
  const [showNewTransactionModal, setShowNewTransactionModal] = useState(false);
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockTransactions: FinancialTransaction[] = [
      {
        id: '1',
        type: 'revenue',
        category: 'Web Development',
        amount: 25000,
        description: 'E-commerce website development for Client A',
        date: new Date('2024-01-15'),
        status: 'completed',
        paymentMethod: 'Bank Transfer',
        reference: 'INV-2024-001',
        tags: ['Web Development', 'E-commerce', 'Client A']
      },
      {
        id: '2',
        type: 'revenue',
        category: 'AI Solutions',
        amount: 15000,
        description: 'Machine learning model development for Client B',
        date: new Date('2024-01-14'),
        status: 'completed',
        paymentMethod: 'Credit Card',
        reference: 'INV-2024-002',
        tags: ['AI Solutions', 'Machine Learning', 'Client B']
      },
      {
        id: '3',
        type: 'expense',
        category: 'Software Licenses',
        amount: 2500,
        description: 'Annual subscription for development tools',
        date: new Date('2024-01-13'),
        status: 'completed',
        paymentMethod: 'Credit Card',
        reference: 'EXP-2024-001',
        tags: ['Software', 'Licenses', 'Development Tools']
      },
      {
        id: '4',
        type: 'expense',
        category: 'Office Rent',
        amount: 5000,
        description: 'Monthly office rent payment',
        date: new Date('2024-01-10'),
        status: 'completed',
        paymentMethod: 'Bank Transfer',
        reference: 'EXP-2024-002',
        tags: ['Office', 'Rent', 'Monthly']
      },
      {
        id: '5',
        type: 'revenue',
        category: 'Cybersecurity',
        amount: 18000,
        description: 'Security audit and penetration testing for Client C',
        date: new Date('2024-01-12'),
        status: 'pending',
        paymentMethod: 'Bank Transfer',
        reference: 'INV-2024-003',
        tags: ['Cybersecurity', 'Security Audit', 'Client C']
      }
    ];

    const mockInvoices: Invoice[] = [
      {
        id: '1',
        clientName: 'Client A',
        amount: 25000,
        status: 'paid',
        dueDate: new Date('2024-01-15'),
        issueDate: new Date('2024-01-01'),
        invoiceNumber: 'INV-2024-001',
        items: [
          { id: '1', description: 'E-commerce website development', quantity: 1, unitPrice: 25000, total: 25000 }
        ]
      },
      {
        id: '2',
        clientName: 'Client B',
        amount: 15000,
        status: 'paid',
        dueDate: new Date('2024-01-14'),
        issueDate: new Date('2024-01-01'),
        invoiceNumber: 'INV-2024-002',
        items: [
          { id: '2', description: 'Machine learning model development', quantity: 1, unitPrice: 15000, total: 15000 }
        ]
      },
      {
        id: '3',
        clientName: 'Client C',
        amount: 18000,
        status: 'pending',
        dueDate: new Date('2024-01-25'),
        issueDate: new Date('2024-01-10'),
        invoiceNumber: 'INV-2024-003',
        items: [
          { id: '3', description: 'Security audit and penetration testing', quantity: 1, unitPrice: 18000, total: 18000 }
        ]
      }
    ];

    const mockBudgets: Budget[] = [
      {
        id: '1',
        category: 'Software Licenses',
        allocated: 5000,
        spent: 2500,
        remaining: 2500,
        period: '2024'
      },
      {
        id: '2',
        category: 'Office Expenses',
        allocated: 60000,
        spent: 5000,
        remaining: 55000,
        period: '2024'
      },
      {
        id: '3',
        category: 'Marketing',
        allocated: 25000,
        spent: 8000,
        remaining: 17000,
        period: '2024'
      },
      {
        id: '4',
        category: 'Employee Benefits',
        allocated: 100000,
        spent: 45000,
        remaining: 55000,
        period: '2024'
      }
    ];

    setTransactions(mockTransactions);
    setInvoices(mockInvoices);
    setBudgets(mockBudgets);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'revenue' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getTypeIcon = (type: string) => {
    return type === 'revenue' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
    const matchesSearch = 
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalRevenue = transactions
    .filter(t => t.type === 'revenue' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const netIncome = totalRevenue - totalExpenses;
  const profitMargin = totalRevenue > 0 ? (netIncome / totalRevenue) * 100 : 0;

  const pendingInvoices = invoices.filter(i => i.status === 'pending');
  const overdueInvoices = invoices.filter(i => i.status === 'overdue');
  const totalPendingAmount = pendingInvoices.reduce((sum, i) => sum + i.amount, 0);
  const totalOverdueAmount = overdueInvoices.reduce((sum, i) => sum + i.amount, 0);

  const totalBudget = budgets.reduce((sum, b) => sum + b.allocated, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalRemaining = budgets.reduce((sum, b) => sum + b.remaining, 0);

  const renderTransactionRow = (transaction: FinancialTransaction) => (
    <tr key={transaction.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg ${transaction.type === 'revenue' ? 'bg-green-100' : 'bg-red-100'}`}>
            {getTypeIcon(transaction.type)}
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
            <div className="text-sm text-gray-500">{transaction.reference}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(transaction.type)}`}>
          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {transaction.category}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        <span className={transaction.type === 'revenue' ? 'text-green-600' : 'text-red-600'}>
          {transaction.type === 'revenue' ? '+' : '-'}${transaction.amount.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {transaction.date.toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {transaction.paymentMethod}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-900">
            <Eye className="w-4 h-4" />
          </button>
          <button className="text-indigo-600 hover:text-indigo-900">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  const renderInvoiceRow = (invoice: Invoice) => (
    <tr key={invoice.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{invoice.invoiceNumber}</div>
        <div className="text-sm text-gray-500">{invoice.clientName}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${invoice.amount.toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {invoice.issueDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {invoice.dueDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-900">
            <Eye className="w-4 h-4" />
          </button>
          <button className="text-indigo-600 hover:text-indigo-900">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-green-600 hover:text-green-900">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className={`financial-management-dashboard ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Management</h1>
        <p className="text-gray-600">Track revenue, expenses, and financial performance</p>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
                <div className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  +12.5%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                <p className="text-2xl font-bold text-gray-900">${totalExpenses.toLocaleString()}</p>
                <div className="flex items-center text-sm text-red-600">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  +8.2%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Net Income</p>
                <p className={`text-2xl font-bold ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${netIncome.toLocaleString()}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Percent className="w-4 h-4 mr-1" />
                  {profitMargin.toFixed(1)}% margin
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Budget Remaining</p>
                <p className="text-2xl font-bold text-gray-900">${totalRemaining.toLocaleString()}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  {((totalRemaining / totalBudget) * 100).toFixed(1)}% left
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="p-3 bg-yellow-100 rounded-lg inline-block mb-3">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Invoices</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">{pendingInvoices.length}</p>
              <p className="text-sm text-gray-600">${totalPendingAmount.toLocaleString()} pending</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="p-3 bg-red-100 rounded-lg inline-block mb-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Overdue Invoices</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">{overdueInvoices.length}</p>
              <p className="text-sm text-gray-600">${totalOverdueAmount.toLocaleString()} overdue</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-lg inline-block mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paid This Month</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">
                ${invoices.filter(i => i.status === 'paid' && i.date.getMonth() === new Date().getMonth()).reduce((sum, i) => sum + i.amount, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total collected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={filterPeriod}
            onChange={(e) => setFilterPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Software Licenses">Software Licenses</option>
            <option value="Office Rent">Office Rent</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowNewTransactionModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Transaction</span>
          </button>
          
          <button
            onClick={() => setShowNewInvoiceModal(true)}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Recent Transactions</span>
            <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.slice(0, 10).map(renderTransactionRow)}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Invoices and Budgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Invoices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Invoices</span>
              <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoices.slice(0, 5).map(renderInvoiceRow)}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Budget Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Budget Overview</span>
              <button className="text-sm text-blue-600 hover:text-blue-800">Manage Budgets</button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgets.map(budget => {
                const spentPercentage = (budget.spent / budget.allocated) * 100;
                const remainingPercentage = (budget.remaining / budget.allocated) * 100;
                
                return (
                  <div key={budget.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900">{budget.category}</span>
                      <span className="text-gray-600">
                        ${budget.spent.toLocaleString()} / ${budget.allocated.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${spentPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Spent: {spentPercentage.toFixed(1)}%</span>
                      <span>Remaining: ${budget.remaining.toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center">
          <Download className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Export Report</span>
        </button>
        
        <button className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-center">
          <Upload className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Import Data</span>
        </button>
        
        <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors text-center">
          <Calculator className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Run Analysis</span>
        </button>
        
        <button className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors text-center">
          <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Generate Report</span>
        </button>
      </div>
    </div>
  );
};

export default FinancialManagementDashboard;