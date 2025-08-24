import React, { useState, useRef, useEffect } from 'react';
import {
  Truck, Brain, Zap, Settings, X, Maximize2, Minimize2, Plus, Search,
  Filter, Calendar, Clock, CheckCircle, AlertCircle, UserPlus, Lock, Unlock,
  BarChart3, TrendingUp, Target, Activity, Users, FileText, GitBranch,
  Workflow, Automation, Bot, Sparkles, Target as TargetIcon, GanttChart, Milestone,
  Flag, AlertTriangle, Info, Star, Award, Trophy, Rocket, Lightbulb,
  DollarSign, Package, Warehouse, ShoppingCart, CreditCard, Receipt,
  Calculator, PieChart, LineChart, BarChart, Eye, EyeOff, Download, RefreshCw,
  MoreVertical, Edit3, Trash2, Database, Server, Network, Cpu, HardDrive,
  MapPin, Globe, Navigation, Route, Box, Palette, Thermometer, AlertCircle as AlertCircleIcon, Factory
} from 'lucide-react';

interface SupplyChainNode {
  id: string;
  name: string;
  type: 'supplier' | 'manufacturer' | 'distributor' | 'retailer' | 'customer';
  location: string;
  status: 'active' | 'inactive' | 'at-risk' | 'critical';
  performance: number;
  leadTime: number;
  cost: number;
  reliability: number;
  aiInsights: string[];
  lastUpdated: string;
}

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  currentStock: number;
  reorderPoint: number;
  maxStock: number;
  unitCost: number;
  supplier: string;
  leadTime: number;
  demand: number;
  aiPrediction: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  lastUpdated: string;
}

interface Shipment {
  id: string;
  trackingNumber: string;
  origin: string;
  destination: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'delayed' | 'lost';
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedDelivery: string;
  actualDelivery?: string;
  carrier: string;
  items: string[];
  totalValue: number;
  aiOptimization: string;
  routeOptimization: string;
}

interface DemandForecast {
  id: string;
  productId: string;
  productName: string;
  historicalDemand: number[];
  predictedDemand: number[];
  confidence: number;
  seasonality: 'low' | 'medium' | 'high';
  trend: 'increasing' | 'decreasing' | 'stable';
  factors: string[];
  lastUpdated: string;
}

const mockSupplyChainNodes: SupplyChainNode[] = [
  {
    id: '1',
    name: 'TechCorp Manufacturing',
    type: 'manufacturer',
    location: 'Shanghai, China',
    status: 'active',
    performance: 92,
    leadTime: 14,
    cost: 15000,
    reliability: 95,
    aiInsights: ['Lead time optimization opportunity', 'Quality metrics improving'],
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Global Logistics Hub',
    type: 'distributor',
    location: 'Rotterdam, Netherlands',
    status: 'active',
    performance: 88,
    leadTime: 3,
    cost: 8000,
    reliability: 92,
    aiInsights: ['Route optimization potential', 'Capacity utilization high'],
    lastUpdated: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    name: 'Premium Electronics',
    type: 'supplier',
    location: 'Seoul, South Korea',
    status: 'at-risk',
    performance: 75,
    leadTime: 21,
    cost: 22000,
    reliability: 78,
    aiInsights: ['Quality issues detected', 'Consider alternative suppliers'],
    lastUpdated: '2024-01-15T08:45:00Z'
  },
  {
    id: '4',
    name: 'Metro Retail Chain',
    type: 'retailer',
    location: 'New York, USA',
    status: 'active',
    performance: 89,
    leadTime: 1,
    cost: 5000,
    reliability: 91,
    aiInsights: ['Demand forecasting accurate', 'Inventory turnover optimal'],
    lastUpdated: '2024-01-15T11:00:00Z'
  }
];

const mockInventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Smartphone X1',
    sku: 'SP-X1-001',
    category: 'Electronics',
    currentStock: 150,
    reorderPoint: 50,
    maxStock: 300,
    unitCost: 450,
    supplier: 'TechCorp Manufacturing',
    leadTime: 14,
    demand: 25,
    aiPrediction: 28,
    riskLevel: 'low',
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Laptop Pro',
    sku: 'LP-PRO-002',
    category: 'Electronics',
    currentStock: 45,
    reorderPoint: 60,
    maxStock: 200,
    unitCost: 1200,
    supplier: 'TechCorp Manufacturing',
    leadTime: 14,
    demand: 15,
    aiPrediction: 18,
    riskLevel: 'medium',
    lastUpdated: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    sku: 'WH-001',
    category: 'Accessories',
    currentStock: 25,
    reorderPoint: 40,
    maxStock: 150,
    unitCost: 180,
    supplier: 'Premium Electronics',
    leadTime: 21,
    demand: 20,
    aiPrediction: 22,
    riskLevel: 'high',
    lastUpdated: '2024-01-15T08:45:00Z'
  }
];

const mockShipments: Shipment[] = [
  {
    id: '1',
    trackingNumber: 'TRK-2024-001',
    origin: 'Shanghai, China',
    destination: 'Rotterdam, Netherlands',
    status: 'in-transit',
    priority: 'high',
    estimatedDelivery: '2024-01-20T00:00:00Z',
    carrier: 'Global Shipping Co.',
    items: ['Smartphone X1', 'Laptop Pro'],
    totalValue: 25000,
    aiOptimization: 'Route optimized using AI algorithms, ETA improved by 12 hours',
    routeOptimization: 'Optimal route selected based on weather and traffic conditions'
  },
  {
    id: '2',
    trackingNumber: 'TRK-2024-002',
    origin: 'Rotterdam, Netherlands',
    destination: 'New York, USA',
    status: 'pending',
    priority: 'medium',
    estimatedDelivery: '2024-01-25T00:00:00Z',
    carrier: 'Express Logistics',
    items: ['Smartphone X1'],
    totalValue: 15000,
    aiOptimization: 'Carrier selection optimized for cost and speed',
    routeOptimization: 'Multi-modal route planned for efficiency'
  },
  {
    id: '3',
    trackingNumber: 'TRK-2024-003',
    origin: 'Seoul, South Korea',
    destination: 'Shanghai, China',
    status: 'delayed',
    priority: 'critical',
    estimatedDelivery: '2024-01-18T00:00:00Z',
    actualDelivery: '2024-01-20T00:00:00Z',
    carrier: 'Asia Express',
    items: ['Wireless Headphones'],
    totalValue: 8000,
    aiOptimization: 'Alternative route suggested due to delays',
    routeOptimization: 'Emergency routing activated for critical components'
  }
];

const mockDemandForecasts: DemandForecast[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Smartphone X1',
    historicalDemand: [120, 135, 110, 145, 130, 140, 125, 150, 135, 140, 130, 145],
    predictedDemand: [150, 155, 160, 165, 170, 175],
    confidence: 87,
    seasonality: 'medium',
    trend: 'increasing',
    factors: ['New model release', 'Holiday season', 'Market expansion'],
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    productId: '2',
    productName: 'Laptop Pro',
    historicalDemand: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135],
    predictedDemand: [140, 145, 150, 155, 160, 165],
    confidence: 92,
    seasonality: 'low',
    trend: 'increasing',
    factors: ['Remote work trend', 'Product improvements', 'Competitive pricing'],
    lastUpdated: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    productId: '3',
    productName: 'Wireless Headphones',
    historicalDemand: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
    predictedDemand: [120, 125, 130, 135, 140, 145],
    confidence: 78,
    seasonality: 'high',
    trend: 'increasing',
    factors: ['Music streaming growth', 'Gaming market expansion', 'Fitness trends'],
    lastUpdated: '2024-01-15T08:45:00Z'
  }
];

export function AdvancedAISupplyChain() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'nodes' | 'inventory' | 'shipments' | 'forecasting'>('overview');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAIInsights, setShowAIInsights] = useState(true);
  const [showOptimization, setShowOptimization] = useState(true);
  const [supplyChainNodes, setSupplyChainNodes] = useState<SupplyChainNode[]>(mockSupplyChainNodes);
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>(mockInventoryItems);
  const [shipments, setShipments] = useState<Shipment[]>(mockShipments);
  const [demandForecasts, setDemandForecasts] = useState<DemandForecast[]>(mockDemandForecasts);
  const containerRef = useRef<HTMLDivElement>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'inactive': return 'text-red-500';
      case 'at-risk': return 'text-yellow-500';
      case 'critical': return 'text-red-600';
      case 'pending': return 'text-yellow-500';
      case 'in-transit': return 'text-blue-500';
      case 'delivered': return 'text-green-500';
      case 'delayed': return 'text-orange-500';
      case 'lost': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'supplier': return <Package className="w-5 h-5" />;
      case 'manufacturer': return <Factory className="w-5 h-5" />;
      case 'distributor': return <Warehouse className="w-5 h-5" />;
      case 'retailer': return <ShoppingCart className="w-5 h-5" />;
      case 'customer': return <Users className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        title="Advanced AI Supply Chain"
      >
        <Truck className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Advanced AI Supply Chain
        </span>
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg z-50">
        <div className="flex items-center justify-between p-3 border-b border-zion-slate-light">
          <h3 className="text-sm font-semibold text-zion-slate-dark dark:text-white">AI Supply Chain</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="text-zion-slate-dark dark:text-white hover:text-zion-blue transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zion-slate-dark dark:text-white hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
    }`} ref={containerRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="flex items-center space-x-3">
          <Truck className="w-6 h-6" />
          <h2 className="text-xl font-bold">Advanced AI-Powered Supply Chain</h2>
          <span className="bg-white/20 px-2 py-1 rounded-full text-sm">Global</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-zion-slate-50 dark:bg-zion-slate-dark">
        <div className="flex items-center space-x-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate-dark dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="supplier">Supplier</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="distributor">Distributor</option>
            <option value="retailer">Retailer</option>
            <option value="customer">Customer</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate-dark dark:text-white"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="at-risk">At Risk</option>
            <option value="critical">Critical</option>
            <option value="pending">Pending</option>
            <option value="in-transit">In Transit</option>
            <option value="delivered">Delivered</option>
            <option value="delayed">Delayed</option>
            <option value="lost">Lost</option>
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate-dark dark:text-white w-64"
            />
            <Search className="w-5 h-5 text-zion-slate-dark dark:text-white" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showAIInsights}
              onChange={(e) => setShowAIInsights(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-zion-slate-dark dark:text-white">AI Insights</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showOptimization}
              onChange={(e) => setShowOptimization(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-zion-slate-dark dark:text-white">Optimization</span>
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zion-slate-light">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'nodes', label: 'Supply Chain Nodes', icon: Network },
          { id: 'inventory', label: 'Inventory Management', icon: Warehouse },
          { id: 'shipments', label: 'Shipments & Logistics', icon: Truck },
          { id: 'forecasting', label: 'Demand Forecasting', icon: TrendingUp }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-6 py-3 border-b-2 transition-colors ${
              activeTab === id
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-zion-slate-dark dark:text-white hover:text-green-600'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Supply Chain Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supplyChainNodes.map((node) => (
                <div key={node.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        {getTypeIcon(node.type)}
                      </div>
                      <h3 className="font-semibold text-zion-slate-dark dark:text-white">{node.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(node.status)}`}>
                      {node.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate-dark dark:text-white">Performance</span>
                      <span className="text-sm font-semibold">{node.performance}%</span>
                    </div>
                    <div className="w-full bg-zion-slate-light rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          node.performance >= 80 ? 'bg-green-500' : node.performance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${node.performance}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-zion-slate-dark dark:text-white">
                      <span>Lead Time: {node.leadTime}d</span>
                      <span>Reliability: {node.reliability}%</span>
                    </div>
                  </div>
                  {showAIInsights && node.aiInsights.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-zion-slate-light">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-semibold text-green-600">AI Insights</span>
                      </div>
                      <ul className="space-y-1">
                        {node.aiInsights.slice(0, 2).map((insight, index) => (
                          <li key={index} className="text-xs text-zion-slate-dark dark:text-white">
                            • {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Plus, label: 'New Node', color: 'bg-green-500' },
                  { icon: Route, label: 'Optimize Routes', color: 'bg-blue-500' },
                  { icon: BarChart3, label: 'Generate Report', color: 'bg-purple-500' },
                  { icon: RefreshCw, label: 'Sync Data', color: 'bg-orange-500' }
                ].map(({ icon: Icon, label, color }, index) => (
                  <button
                    key={index}
                    className={`${color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center space-y-2`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nodes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Supply Chain Nodes</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Node</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {supplyChainNodes.map((node) => (
                <div key={node.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        {getTypeIcon(node.type)}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{node.name}</h4>
                        <p className="text-sm text-zion-slate-dark dark:text-white">{node.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(node.status)}`}>
                        {node.status}
                      </span>
                      <button className="text-zion-slate-dark dark:text-white hover:text-green-600 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Performance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-zion-slate-light rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              node.performance >= 80 ? 'bg-green-500' : node.performance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${node.performance}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{node.performance}%</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Reliability</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-zion-slate-light rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              node.reliability >= 80 ? 'bg-green-500' : node.reliability >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${node.reliability}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{node.reliability}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-dark dark:text-white mb-4">
                    <span>Lead Time: {node.leadTime} days</span>
                    <span>Cost: {formatCurrency(node.cost)}</span>
                  </div>
                  {showAIInsights && node.aiInsights.length > 0 && (
                    <div className="border-t border-zion-slate-light pt-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">AI Insights</span>
                      </div>
                      <ul className="space-y-2">
                        {node.aiInsights.map((insight, index) => (
                          <li key={index} className="text-sm text-zion-slate-dark dark:text-white flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Inventory Management</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            </div>
            <div className="space-y-4">
              {inventoryItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{item.name}</h4>
                      <p className="text-sm text-zion-slate-dark dark:text-white">SKU: {item.sku}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelColor(item.riskLevel)}`}>
                        {item.riskLevel}
                      </span>
                      <button className="text-zion-slate-dark dark:text-white hover:text-green-600 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Current Stock</span>
                      <p className="text-sm font-medium">{item.currentStock}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Reorder Point</span>
                      <p className="text-sm font-medium">{item.reorderPoint}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Unit Cost</span>
                      <p className="text-sm font-medium">{formatCurrency(item.unitCost)}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Lead Time</span>
                      <p className="text-sm font-medium">{item.leadTime} days</p>
                    </div>
                  </div>
                  <div className="border-t border-zion-slate-light pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">AI Demand Prediction</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate-dark dark:text-white">Current Demand: {item.demand}/day</span>
                      <span className="text-sm font-semibold text-green-600">AI Prediction: {item.aiPrediction}/day</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shipments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Shipments & Logistics</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Shipment</span>
              </button>
            </div>
            <div className="space-y-4">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">
                        {shipment.trackingNumber}
                      </h4>
                      <p className="text-sm text-zion-slate-dark dark:text-white">
                        {shipment.origin} → {shipment.destination}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(shipment.priority)}`}>
                        {shipment.priority}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Carrier</span>
                      <p className="text-sm font-medium">{shipment.carrier}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Items</span>
                      <p className="text-sm font-medium">{shipment.items.length}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">Total Value</span>
                      <p className="text-sm font-medium">{formatCurrency(shipment.totalValue)}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">ETA</span>
                      <p className="text-sm font-medium">{formatDate(shipment.estimatedDelivery)}</p>
                    </div>
                  </div>
                  {showOptimization && (
                    <div className="border-t border-zion-slate-light pt-4 space-y-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Sparkles className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-semibold text-green-600">AI Optimization</span>
                        </div>
                        <p className="text-sm text-zion-slate-dark dark:text-white">{shipment.aiOptimization}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Route className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-semibold text-blue-600">Route Optimization</span>
                        </div>
                        <p className="text-sm text-zion-slate-dark dark:text-white">{shipment.routeOptimization}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'forecasting' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">Demand Forecasting</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Update Forecasts</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {demandForecasts.map((forecast) => (
                <div key={forecast.id} className="bg-white dark:bg-zion-slate-dark border border-zion-slate-light rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white">{forecast.productName}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        forecast.trend === 'increasing' ? 'bg-green-100 text-green-800' :
                        forecast.trend === 'decreasing' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {forecast.trend}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        forecast.seasonality === 'high' ? 'bg-purple-100 text-purple-800' :
                        forecast.seasonality === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {forecast.seasonality} seasonality
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm text-zion-slate-dark dark:text-white">AI Confidence</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-zion-slate-light rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              forecast.confidence >= 80 ? 'bg-green-500' : forecast.confidence >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${forecast.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{forecast.confidence}%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-zion-slate-dark dark:text-white">Historical Avg</span>
                        <p className="font-medium">
                          {Math.round(forecast.historicalDemand.reduce((a, b) => a + b, 0) / forecast.historicalDemand.length)}
                        </p>
                      </div>
                      <div>
                        <span className="text-zion-slate-dark dark:text-white">Predicted Avg</span>
                        <p className="font-medium">
                          {Math.round(forecast.predictedDemand.reduce((a, b) => a + b, 0) / forecast.predictedDemand.length)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-zion-slate-light pt-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">Key Factors</span>
                    </div>
                    <ul className="space-y-2">
                      {forecast.factors.map((factor, index) => (
                        <li key={index} className="text-sm text-zion-slate-dark dark:text-white flex items-start space-x-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}