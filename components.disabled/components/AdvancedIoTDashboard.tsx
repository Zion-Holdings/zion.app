import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Bluetooth, 
  Zap, 
  Target, 
  ArrowRight, 
  Plus, 
  Search, 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  Activity,
  Users,
  Database,
  Network,
  Server,
  Smartphone,
  Globe,
  TrendingUp,
  AlertCircle,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Shield,
  Eye,
  Lock,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  Cpu,
  HardDrive,
  Thermometer,
  Gauge,
  Battery,
  Signal
} from 'lucide-react';

interface IoTDevice {
  id: string;
  name: string;
  type: 'sensor' | 'actuator' | 'gateway' | 'controller' | 'monitor';
  status: 'online' | 'offline' | 'maintenance' | 'error' | 'sleeping';
  location: string;
  lastSeen: string;
  battery: number;
  signal: number;
  temperature: number;
  humidity: number;
  dataPoints: number;
}

interface DeviceData {
  id: string;
  deviceId: string;
  timestamp: string;
  temperature: number;
  humidity: number;
  pressure: number;
  light: number;
  motion: boolean;
  battery: number;
  signal: number;
}

interface IoTAlert {
  id: string;
  deviceId: string;
  type: 'temperature' | 'battery' | 'signal' | 'maintenance' | 'security';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: string;
  acknowledged: boolean;
  resolved: boolean;
}

const iotDevices: IoTDevice[] = [
  {
    id: '1',
    name: 'Temperature Sensor 01',
    type: 'sensor',
    status: 'online',
    location: 'Building A - Floor 1',
    lastSeen: '2025-01-27 16:00',
    battery: 85,
    signal: 92,
    temperature: 22.5,
    humidity: 45,
    dataPoints: 1250
  },
  {
    id: '2',
    name: 'Smart Thermostat 01',
    type: 'controller',
    status: 'online',
    location: 'Building A - Floor 1',
    lastSeen: '2025-01-27 16:00',
    battery: 95,
    signal: 88,
    temperature: 21.8,
    humidity: 42,
    dataPoints: 890
  },
  {
    id: '3',
    name: 'Motion Detector 01',
    type: 'sensor',
    status: 'online',
    location: 'Building A - Floor 1',
    lastSeen: '2025-01-27 16:00',
    battery: 78,
    signal: 95,
    temperature: 23.1,
    humidity: 48,
    dataPoints: 2100
  },
  {
    id: '4',
    name: 'Gateway Hub 01',
    type: 'gateway',
    status: 'online',
    location: 'Building A - Server Room',
    lastSeen: '2025-01-27 16:00',
    battery: 100,
    signal: 100,
    temperature: 18.5,
    humidity: 35,
    dataPoints: 5000
  }
];

const deviceData: DeviceData[] = [
  {
    id: '1',
    deviceId: '1',
    timestamp: '2025-01-27 16:00',
    temperature: 22.5,
    humidity: 45,
    pressure: 1013.25,
    light: 450,
    motion: false,
    battery: 85,
    signal: 92
  },
  {
    id: '2',
    deviceId: '2',
    timestamp: '2025-01-27 16:00',
    temperature: 21.8,
    humidity: 42,
    pressure: 1013.20,
    light: 380,
    motion: true,
    battery: 95,
    signal: 88
  }
];

const iotAlerts: IoTAlert[] = [
  {
    id: '1',
    deviceId: '3',
    type: 'battery',
    severity: 'medium',
    message: 'Battery level below 20% - consider replacement',
    timestamp: '2025-01-27 15:45',
    acknowledged: false,
    resolved: false
  },
  {
    id: '2',
    deviceId: '1',
    type: 'temperature',
    severity: 'low',
    message: 'Temperature reading outside normal range',
    timestamp: '2025-01-27 15:30',
    acknowledged: true,
    resolved: false
  }
];

const deviceTypeColors = {
  'sensor': 'from-blue-500 to-cyan-500',
  'actuator': 'from-green-500 to-emerald-500',
  'gateway': 'from-purple-500 to-pink-500',
  'controller': 'from-yellow-500 to-orange-500',
  'monitor': 'from-indigo-500 to-purple-500'
};

const statusColors = {
  'online': 'from-green-500 to-emerald-500',
  'offline': 'from-red-500 to-pink-500',
  'maintenance': 'from-yellow-500 to-orange-500',
  'error': 'from-red-500 to-pink-500',
  'sleeping': 'from-gray-500 to-gray-600'
};

const alertTypeColors = {
  'temperature': 'from-red-500 to-pink-500',
  'battery': 'from-yellow-500 to-orange-500',
  'signal': 'from-blue-500 to-cyan-500',
  'maintenance': 'from-purple-500 to-pink-500',
  'security': 'from-red-500 to-pink-500'
};

const AdvancedIoTDashboard: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'devices' | 'data' | 'alerts'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

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
            IoT Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced Internet of Things dashboard with comprehensive device management, 
            real-time monitoring, and intelligent automation for smart environments.
          </p>
        </motion.div>

        {/* Quick Stats */}
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
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+15%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{iotDevices.length}</h3>
            <p className="text-gray-400 text-sm">Connected Devices</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+28%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{iotDevices.filter(device => device.status === 'online').length}</h3>
            <p className="text-gray-400 text-sm">Online Devices</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">22.5°C</h3>
            <p className="text-gray-400 text-sm">Avg Temperature</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{iotAlerts.filter(alert => !alert.resolved).length}</h3>
            <p className="text-gray-400 text-sm">Active Alerts</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-lg mx-auto"
        >
          {(['overview', 'devices', 'data', 'alerts'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Wifi className="w-4 h-4 inline mr-2" />}
              {view === 'devices' && <Cpu className="w-4 h-4 inline mr-2" />}
              {view === 'data' && <Activity className="w-4 h-4 inline mr-2" />}
              {view === 'alerts' && <AlertTriangle className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'overview' && (
            <motion.div
              key="overview"
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* IoT Devices Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Connected Devices</h3>
                  {iotDevices.slice(0, 2).map((device) => (
                    <motion.div
                      key={device.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[device.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{device.name}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${deviceTypeColors[device.type]} rounded-full text-white text-xs font-medium`}>
                              {device.type}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{device.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{device.temperature}°C</div>
                          <div className="text-gray-400 text-sm">Temperature</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Battery</div>
                          <div className="text-white font-medium">{device.battery}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Signal</div>
                          <div className="text-white font-medium">{device.signal}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Humidity</div>
                          <div className="text-white font-medium">{device.humidity}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Data Points</div>
                          <div className="text-white font-medium">{device.dataPoints.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Last seen: {device.lastSeen}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* IoT Alerts Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Active Alerts</h3>
                  {iotAlerts.map((alert) => (
                    <motion.div
                      key={alert.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${alertTypeColors[alert.type]} rounded-full`} />
                            <h4 className="text-white font-semibold">{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Alert</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${alert.severity === 'critical' ? 'from-red-500 to-pink-500' : alert.severity === 'high' ? 'from-orange-500 to-red-500' : alert.severity === 'medium' ? 'from-yellow-500 to-orange-500' : 'from-green-500 to-emerald-500'} rounded-full text-white text-xs font-medium`}>
                              {alert.severity}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{alert.message}</p>
                        </div>
                        <div className="text-right">
                          <div className={`w-3 h-3 ${alert.acknowledged ? 'bg-green-500' : 'bg-yellow-500'} rounded-full`} />
                          <div className="text-gray-400 text-xs mt-1">
                            {alert.acknowledged ? 'Acknowledged' : 'Pending'}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Device ID: {alert.deviceId} | Time: {alert.timestamp}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
              Ready to Build Smart Environments?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you implement cutting-edge IoT solutions 
              that create intelligent, connected, and automated environments.
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
    </section>
  );
};

export default AdvancedIoTDashboard;