import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  DollarSign, 
  Calendar, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Clock,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings,
  Bell,
  Star,
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Code,
  Rocket,
  Timer,
  Activity,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal,
  CreditCard,
  Banknote,
  Receipt,
  Calculator,
  Send,
  Mail,
  Phone,
  MapPin,
  Building,
  User,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  X
} from 'lucide-react';

interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  issueDate: string;
  dueDate: string;
  status: 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'cancelled';
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  currency: string;
  paymentMethod: string;
  items: InvoiceItem[];
  notes: string;
  terms: string;
  sentAt?: string;
  viewedAt?: string;
  paidAt?: string;
}

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  category: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  industry: string;
  totalInvoiced: number;
  totalPaid: number;
  outstandingBalance: number;
  lastInvoiceDate: string;
}

const invoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2025-001',
    client: 'TechFlow Solutions',
    clientEmail: 'billing@techflow.com',
    clientPhone: '+1 (555) 123-4567',
    clientAddress: '123 Tech Street, Silicon Valley, CA 94025',
    issueDate: '2025-01-15',
    dueDate: '2025-02-15',
    status: 'paid',
    subtotal: 15000,
    tax: 1500,
    discount: 500,
    total: 16000,
    currency: 'USD',
    paymentMethod: 'Credit Card',
    items: [
      { id: '1', description: 'E-commerce Platform Development', quantity: 1, unitPrice: 12000, total: 12000, category: 'Development' },
      { id: '2', description: 'UI/UX Design Services', quantity: 1, unitPrice: 3000, total: 3000, category: 'Design' }
    ],
    notes: 'Thank you for your business. Please contact us if you have any questions.',
    terms: 'Net 30 days. Late payments subject to 1.5% monthly interest.',
    paidAt: '2025-01-20'
  },
  {
    id: '2',
    invoiceNumber: 'INV-2025-002',
    client: 'GreenEnergy Corp',
    clientEmail: 'finance@greenenergy.com',
    clientPhone: '+1 (555) 987-6543',
    clientAddress: '456 Green Avenue, Austin, TX 73301',
    issueDate: '2025-01-20',
    dueDate: '2025-02-20',
    status: 'sent',
    subtotal: 25000,
    tax: 2500,
    discount: 0,
    total: 27500,
    currency: 'USD',
    paymentMethod: 'Bank Transfer',
    items: [
      { id: '1', description: 'Mobile App Development', quantity: 1, unitPrice: 20000, total: 20000, category: 'Development' },
      { id: '2', description: 'API Integration Services', quantity: 1, unitPrice: 5000, total: 5000, category: 'Integration' }
    ],
    notes: 'Project completed successfully. Looking forward to future collaborations.',
    terms: 'Net 30 days. Early payment discount of 2% if paid within 15 days.',
    sentAt: '2025-01-20'
  },
  {
    id: '3',
    invoiceNumber: 'INV-2025-003',
    client: 'HealthTech Innovations',
    clientEmail: 'accounts@healthtech.com',
    clientPhone: '+1 (555) 456-7890',
    clientAddress: '789 Health Boulevard, Boston, MA 02101',
    issueDate: '2025-01-25',
    dueDate: '2025-02-25',
    status: 'overdue',
    subtotal: 35000,
    tax: 3500,
    discount: 1000,
    total: 37500,
    currency: 'USD',
    paymentMethod: 'Check',
    items: [
      { id: '1', description: 'AI Analytics Platform', quantity: 1, unitPrice: 30000, total: 30000, category: 'AI/ML' },
      { id: '2', description: 'Data Processing Services', quantity: 1, unitPrice: 5000, total: 5000, category: 'Data' }
    ],
    notes: 'Advanced analytics platform delivered on time and within budget.',
    terms: 'Net 30 days. Late payment fees apply after due date.',
    sentAt: '2025-01-25'
  }
];

const clients: Client[] = [
  {
    id: '1',
    name: 'TechFlow Solutions',
    email: 'billing@techflow.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, Silicon Valley, CA 94025',
    company: 'TechFlow Solutions Inc.',
    industry: 'Technology',
    totalInvoiced: 16000,
    totalPaid: 16000,
    outstandingBalance: 0,
    lastInvoiceDate: '2025-01-15'
  },
  {
    id: '2',
    name: 'GreenEnergy Corp',
    email: 'finance@greenenergy.com',
    phone: '+1 (555) 987-6543',
    address: '456 Green Avenue, Austin, TX 73301',
    company: 'GreenEnergy Corporation',
    industry: 'Energy',
    totalInvoiced: 27500,
    totalPaid: 0,
    outstandingBalance: 27500,
    lastInvoiceDate: '2025-01-20'
  },
  {
    id: '3',
    name: 'HealthTech Innovations',
    email: 'accounts@healthtech.com',
    phone: '+1 (555) 456-7890',
    address: '789 Health Boulevard, Boston, MA 02101',
    company: 'HealthTech Innovations LLC',
    industry: 'Healthcare',
    totalInvoiced: 37500,
    totalPaid: 0,
    outstandingBalance: 37500,
    lastInvoiceDate: '2025-01-25'
  }
];

const statusColors = {
  'draft': 'from-gray-500 to-gray-600',
  'sent': 'from-blue-500 to-cyan-500',
  'viewed': 'from-purple-500 to-pink-500',
  'paid': 'from-green-500 to-emerald-500',
  'overdue': 'from-red-500 to-pink-500',
  'cancelled': 'from-gray-400 to-gray-500'
};

const statusIcons = {
  'draft': <FileText className="w-4 h-4" />,
  'sent': <Send className="w-4 h-4" />,
  'viewed': <Eye className="w-4 h-4" />,
  'paid': <CheckCircle className="w-4 h-4" />,
  'overdue': <AlertCircle className="w-4 h-4" />,
  'cancelled': <X className="w-4 h-4" />
};

const AdvancedInvoiceManagement: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'invoices' | 'clients' | 'reports'>('invoices');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedClient, setSelectedClient] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesStatus = selectedStatus === 'all' || invoice.status === selectedStatus;
    const matchesClient = selectedClient === 'all' || invoice.client === selectedClient;
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         invoice.client.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesClient && matchesSearch;
  });

  const filteredClients = clients.filter(client => {
    return client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
           client.industry.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const totalInvoiced = invoices.reduce((total, invoice) => total + invoice.total, 0);
  const totalPaid = invoices.filter(inv => inv.status === 'paid').reduce((total, invoice) => total + invoice.total, 0);
  const totalOutstanding = totalInvoiced - totalPaid;
  const overdueInvoices = invoices.filter(inv => inv.status === 'overdue').length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Invoice & Billing Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive invoice management, payment tracking, and financial reporting. 
            Create professional invoices, track payments, and manage client relationships.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">${(totalInvoiced / 1000).toFixed(1)}K</h3>
            <p className="text-gray-400 text-sm">Total Invoiced</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">${(totalPaid / 1000).toFixed(1)}K</h3>
            <p className="text-gray-400 text-sm">Total Paid</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">${(totalOutstanding / 1000).toFixed(1)}K</h3>
            <p className="text-gray-400 text-sm">Outstanding</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{overdueInvoices}</h3>
            <p className="text-gray-400 text-sm">Overdue</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-md mx-auto"
        >
          {(['invoices', 'clients', 'reports'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'invoices' && <FileText className="w-4 h-4 inline mr-2" />}
              {view === 'clients' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'reports' && <BarChart3 className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search invoices, clients, or reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {selectedView === 'invoices' && (
              <>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                >
                  <option value="all">All Status</option>
                  <option value="draft">Draft</option>
                  <option value="sent">Sent</option>
                  <option value="viewed">Viewed</option>
                  <option value="paid">Paid</option>
                  <option value="overdue">Overdue</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                >
                  <option value="all">All Clients</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.name}>{client.name}</option>
                  ))}
                </select>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Export
            </motion.button>
            
            <motion.button
              onClick={() => setShowCreateInvoice(true)}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Invoice
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'invoices' && (
            <motion.div
              key="invoices"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {filteredInvoices.map((invoice) => (
                  <motion.div
                    key={invoice.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => setSelectedInvoice(invoice)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{invoice.invoiceNumber}</h3>
                        <p className="text-gray-400 text-sm mb-3">{invoice.client}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(invoice.issueDate).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Due: {new Date(invoice.dueDate).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            ${invoice.total.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 bg-gradient-to-r ${statusColors[invoice.status]} rounded-full text-white text-sm font-medium mb-2`}>
                          {invoice.status}
                        </div>
                        <div className="text-white font-bold text-lg">${invoice.total.toLocaleString()}</div>
                        <div className="text-gray-400 text-sm">{invoice.currency}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {invoice.items.length} items • {invoice.paymentMethod}
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.button
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Edit className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'clients' && (
            <motion.div
              key="clients"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filteredClients.map((client) => (
                  <motion.div
                    key={client.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{client.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {client.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {client.phone}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">${(client.outstandingBalance / 1000).toFixed(1)}K</div>
                        <div className="text-gray-400 text-sm">Outstanding</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-white font-bold text-lg">${(client.totalInvoiced / 1000).toFixed(1)}K</div>
                        <div className="text-gray-400 text-xs">Total Invoiced</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <div className="text-white font-bold text-lg">${(client.totalPaid / 1000).toFixed(1)}K</div>
                        <div className="text-gray-400 text-xs">Total Paid</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Industry: <span className="text-white">{client.industry}</span></span>
                      <span className="text-gray-400">Last Invoice: {new Date(client.lastInvoiceDate).toLocaleDateString()}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {selectedView === 'reports' && (
            <motion.div
              key="reports"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-white mb-6">Payment Status Distribution</h4>
                  <div className="space-y-4">
                    {Object.entries(statusColors).map(([status, colors]) => {
                      const count = invoices.filter(inv => inv.status === status).length;
                      const percentage = (count / invoices.length) * 100;
                      return (
                        <div key={status} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 bg-gradient-to-r ${colors} rounded-full`} />
                            <span className="text-gray-300 capitalize">{status}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-medium">{count}</div>
                            <div className="text-gray-400 text-sm">{percentage.toFixed(1)}%</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-white mb-6">Revenue Overview</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Total Revenue</span>
                      <span className="text-white font-bold">${(totalInvoiced / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Collected</span>
                      <span className="text-green-400 font-bold">${(totalPaid / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Outstanding</span>
                      <span className="text-yellow-400 font-bold">${(totalOutstanding / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Collection Rate</span>
                      <span className="text-blue-400 font-bold">{((totalPaid / totalInvoiced) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Streamline Your Billing Process?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you manage invoices, track payments, and 
              maintain healthy cash flow with our comprehensive billing system.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Invoice Detail Modal */}
      <AnimatePresence>
        {selectedInvoice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedInvoice(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedInvoice.invoiceNumber}</h3>
                    <p className="text-gray-400 text-lg">{selectedInvoice.client}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${statusColors[selectedInvoice.status]} rounded-full text-white text-sm font-medium`}>
                        {selectedInvoice.status}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {new Date(selectedInvoice.issueDate).toLocaleDateString()} - {new Date(selectedInvoice.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedInvoice(null)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Client Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Client Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building className="w-4 h-4" />
                        <span className="text-white">{selectedInvoice.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span className="text-white">{selectedInvoice.clientEmail}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span className="text-white">{selectedInvoice.clientPhone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-white">{selectedInvoice.clientAddress}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Invoice Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Subtotal:</span>
                        <span className="text-white">${selectedInvoice.subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tax:</span>
                        <span className="text-white">${selectedInvoice.tax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Discount:</span>
                        <span className="text-white">-${selectedInvoice.discount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-3">
                        <span className="text-white">Total:</span>
                        <span className="text-white">${selectedInvoice.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invoice Items */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-6">Invoice Items</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700/50">
                          <th className="text-left text-gray-400 font-medium py-3">Description</th>
                          <th className="text-left text-gray-400 font-medium py-3">Category</th>
                          <th className="text-left text-gray-400 font-medium py-3">Quantity</th>
                          <th className="text-left text-gray-400 font-medium py-3">Unit Price</th>
                          <th className="text-left text-gray-400 font-medium py-3">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedInvoice.items.map((item) => (
                          <tr key={item.id} className="border-b border-gray-700/30">
                            <td className="py-4">
                              <div className="text-white font-medium">{item.description}</div>
                            </td>
                            <td className="py-4 text-gray-300">{item.category}</td>
                            <td className="py-4 text-gray-300">{item.quantity}</td>
                            <td className="py-4 text-gray-300">${item.unitPrice.toLocaleString()}</td>
                            <td className="py-4 text-white font-medium">${item.total.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Notes and Terms */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Notes</h4>
                    <p className="text-gray-300">{selectedInvoice.notes}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Terms</h4>
                    <p className="text-gray-300">{selectedInvoice.terms}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-700/50">
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Edit className="w-4 h-4" />
                    Edit Invoice
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Invoice
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedInvoiceManagement;