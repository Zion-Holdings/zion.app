import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Box, 
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
  Signal,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize
} from 'lucide-react';

interface VRExperience {
  id: string;
  title: string;
  type: 'game' | 'simulation' | 'training' | 'entertainment' | 'education';
  status: 'active' | 'maintenance' | 'updating' | 'offline';
  duration: number;
  users: number;
  rating: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  lastUpdated: string;
  tags: string[];
}

interface VRDevice {
  id: string;
  name: string;
  type: 'headset' | 'controller' | 'tracker' | 'haptic' | 'accessory';
  status: 'connected' | 'disconnected' | 'charging' | 'error';
  battery: number;
  firmware: string;
  lastConnected: string;
  user: string;
}

interface VRContent {
  id: string;
  title: string;
  category: '3D Models' | 'Textures' | 'Animations' | 'Audio' | 'Scripts';
  size: number;
  format: string;
  downloads: number;
  rating: number;
  creator: string;
  lastUpdated: string;
}

const vrExperiences: VRExperience[] = [
  {
    id: '1',
    title: 'Virtual Office Training',
    type: 'training',
    status: 'active',
    duration: 45,
    users: 1250,
    rating: 4.8,
    difficulty: 'intermediate',
    lastUpdated: '2025-01-27 15:00',
    tags: ['business', 'training', 'collaboration', 'office']
  },
  {
    id: '2',
    title: '3D Design Workshop',
    type: 'education',
    status: 'active',
    duration: 90,
    users: 890,
    rating: 4.9,
    difficulty: 'advanced',
    lastUpdated: '2025-01-27 14:30',
    tags: ['design', '3D modeling', 'creative', 'workshop']
  },
  {
    id: '3',
    title: 'Virtual Team Building',
    type: 'simulation',
    status: 'active',
    duration: 60,
    users: 2100,
    rating: 4.7,
    difficulty: 'beginner',
    lastUpdated: '2025-01-27 16:00',
    tags: ['team building', 'collaboration', 'fun', 'interactive']
  }
];

const vrDevices: VRDevice[] = [
  {
    id: '1',
    name: 'Meta Quest 3',
    type: 'headset',
    status: 'connected',
    battery: 85,
    firmware: 'v2.1.0',
    lastConnected: '2025-01-27 16:00',
    user: 'John Doe'
  },
  {
    id: '2',
    name: 'Valve Index Controllers',
    type: 'controller',
    status: 'connected',
    battery: 92,
    firmware: 'v1.8.2',
    lastConnected: '2025-01-27 16:00',
    user: 'Jane Smith'
  },
  {
    id: '3',
    name: 'HTC Vive Trackers',
    type: 'tracker',
    status: 'connected',
    battery: 78,
    firmware: 'v2.0.1',
    lastConnected: '2025-01-27 15:45',
    user: 'Mike Johnson'
  }
];

const vrContent: VRContent[] = [
  {
    id: '1',
    title: 'Office Environment Pack',
    category: '3D Models',
    size: 250,
    format: 'FBX',
    downloads: 1250,
    rating: 4.8,
    creator: 'Zion Studios',
    lastUpdated: '2025-01-27 15:00'
  },
  {
    id: '2',
    title: 'Professional Textures Collection',
    category: 'Textures',
    size: 180,
    format: 'PNG',
    downloads: 890,
    rating: 4.9,
    creator: 'Texture Masters',
    lastUpdated: '2025-01-27 14:30'
  }
];

const experienceTypeColors = {
  'game': 'from-blue-500 to-cyan-500',
  'simulation': 'from-green-500 to-emerald-500',
  'training': 'from-purple-500 to-pink-500',
  'entertainment': 'from-yellow-500 to-orange-500',
  'education': 'from-indigo-500 to-purple-500'
};

const deviceTypeColors = {
  'headset': 'from-blue-500 to-cyan-500',
  'controller': 'from-green-500 to-emerald-500',
  'tracker': 'from-purple-500 to-pink-500',
  'haptic': 'from-yellow-500 to-orange-500',
  'accessory': 'from-indigo-500 to-purple-500'
};

const statusColors = {
  'active': 'from-green-500 to-emerald-500',
  'maintenance': 'from-yellow-500 to-orange-500',
  'updating': 'from-blue-500 to-cyan-500',
  'offline': 'from-red-500 to-pink-500',
  'connected': 'from-green-500 to-emerald-500',
  'disconnected': 'from-red-500 to-pink-500',
  'charging': 'from-yellow-500 to-orange-500',
  'error': 'from-red-500 to-pink-500'
};

const difficultyColors = {
  'beginner': 'from-green-500 to-emerald-500',
  'intermediate': 'from-yellow-500 to-orange-500',
  'advanced': 'from-orange-500 to-red-500',
  'expert': 'from-red-500 to-pink-500'
};

const AdvancedVirtualRealityHub: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'experiences' | 'devices' | 'content'>('overview');
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
            Virtual Reality Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced virtual reality hub with immersive experiences, 3D visualization, 
            and comprehensive VR content management for next-generation digital experiences.
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
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+25%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{vrExperiences.length}</h3>
            <p className="text-gray-400 text-sm">VR Experiences</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Box className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-medium">+32%</div>
                <div className="text-gray-400 text-xs">vs last month</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{vrDevices.length}</h3>
            <p className="text-gray-400 text-sm">Connected Devices</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">4.8</h3>
            <p className="text-gray-400 text-sm">Avg Rating</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">4.2K</h3>
            <p className="text-gray-400 text-sm">Active Users</p>
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
          {(['overview', 'experiences', 'devices', 'content'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'overview' && <Eye className="w-4 h-4 inline mr-2" />}
              {view === 'experiences' && <Box className="w-4 h-4 inline mr-2" />}
              {view === 'devices' && <Cpu className="w-4 h-4 inline mr-2" />}
              {view === 'content' && <Layers className="w-4 h-4 inline mr-2" />}
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
                {/* VR Experiences Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">VR Experiences</h3>
                  {vrExperiences.slice(0, 2).map((experience) => (
                    <motion.div
                      key={experience.id}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 bg-gradient-to-r ${statusColors[experience.status]} rounded-full`} />
                            <h4 className="text-white font-semibold">{experience.title}</h4>
                            <div className={`px-2 py-1 bg-gradient-to-r ${experienceTypeColors[experience.type]} rounded-full text-white text-xs font-medium`}>
                              {experience.type}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`px-2 py-1 bg-gradient-to-r ${difficultyColors[experience.difficulty]} rounded-full text-white text-xs font-medium`}>
                              {experience.difficulty}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white text-sm">{experience.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{experience.duration}min</div>
                          <div className="text-gray-400 text-sm">Duration</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Users</div>
                          <div className="text-white font-medium">{experience.users.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Status</div>
                          <div className="text-white font-medium capitalize">{experience.status}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Tags</div>
                        <div className="flex flex-wrap gap-2">
                          {experience.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Updated: {experience.lastUpdated}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* VR Devices Overview */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Connected Devices</h3>
                  {vrDevices.map((device) => (
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
                          <p className="text-gray-400 text-sm mb-3">User: {device.user}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-lg">{device.battery}%</div>
                          <div className="text-gray-400 text-sm">Battery</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-400">Firmware</div>
                          <div className="text-white font-medium">{device.firmware}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Status</div>
                          <div className="text-white font-medium capitalize">{device.status}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">
                        Last connected: {device.lastConnected}
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
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you create immersive virtual reality experiences 
              that revolutionize how people interact with digital content.
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

export default AdvancedVirtualRealityHub;