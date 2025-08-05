import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head";
import { useState, useEffect, useMemo } from 'react";
import Link from 'next/link";

interface IoTDevice {
  id: string;'
  name: string;
  type: 'sensor' | 'actuator' | 'gateway' | 'camera' | 'controller' | 'smart-appliance";
  status: 'online' | 'offline' | 'maintenance' | 'error' | 'updating";
  location: string;
  lastSeen: Date;
  dataPoints: number;
  batteryLevel: number;
  aiEnabled: boolean;
  autoUpdate: boolean;
  version: string;
  performance: {
    responseTime: number;
    accuracy: number;
    reliability: number;
    energyEfficiency: number;
  };}
interface SensorData {
  id: string;'
  deviceId: string;
  sensorType: 'temperature' | 'humidity' | 'pressure' | 'motion' | 'light' | 'air-quality";
  value: number;
  unit: string;
  timestamp: Date;
  location: string;
  aiProcessed: boolean;'
  anomaly: boolean;
  trend: 'increasing' | 'decreasing' | 'stable";
  threshold: {
    min: number;
    max: number;
    critical: boolean;
  };}
interface IoTAutomation {
  id: string;
  name: string;'
  description: string;
  status: 'active' | 'inactive' | 'testing' | 'error";
  triggers: {
    device: string;
    condition: string;
    threshold: number;
  }[];
  actions: {
    device: string;
    action: string;
    value: any;
  }[];
  lastExecuted: Date;
  executionCount: number;
  successRate: number;
  aiOptimized: boolean;}
interface IoTAnalytics {
  id: string;
  metric: string;
  current: number;
  target: number;'
  improvement: number;
  trend: 'up' | 'down' | 'stable";
  period: string;}
const AIPoweredIoTPage: NextPage = () => {
  ;
  const [devices, setDevices] = useState<IoTDevice[]>([]);
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [automations, setAutomations] = useState<IoTAutomation[]>([]);'
  const [analytics, setAnalytics] = useState<IoTAnalytics[]>([]);
  const [selectedView, setSelectedView] = useState<'overview' | 'devices' | 'sensors' | 'automations' | 'analytics'>('overview');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'battery' | 'performance' | 'status'>('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AI-powered IoT data
    setTimeout(() => {
      const $1: $2[] = [
        {
          id: '1',
          name: 'Smart Temperature Sensor',
          type: 'sensor',
          status: 'online',
          location: 'Living Room',
          lastSeen: new Date('2024-01-20T15:30:00'),
          dataPoints: 15420,
          batteryLevel: 87,
          aiEnabled: true,'
          autoUpdate: true,
          version: '2.1.0',
          performance: {
            responseTime: 0.8,
            accuracy: 98.5,
            reliability: 99.2,
            energyEfficiency: 94.3}}}'
        {
          id: '2',
          name: 'Smart Light Controller',
          type: 'controller',
          status: 'online',
          location: 'Kitchen',
          lastSeen: new Date('2024-01-20T15:25:00'),
          dataPoints: 8920,
          batteryLevel: 92,
          aiEnabled: true,'
          autoUpdate: true,
          version: '1.8.2',
          performance: {
            responseTime: 0.6,
            accuracy: 96.8,
            reliability: 98.7,
            energyEfficiency: 97.2}}'
        {
          id: '3',
          name: 'Security Camera',
          type: 'camera',
          status: 'online',
          location: 'Front Door',
          lastSeen: new Date('2024-01-20T15:20:00'),
          dataPoints: 2340,
          batteryLevel: 45,
          aiEnabled: true,'
          autoUpdate: false,
          version: '3.0.1',
          performance: {
            responseTime: 1.2,
            accuracy: 97.3,
            reliability: 99.8,
            energyEfficiency: 78.5}}'
        {
          id: '4',
          name: 'Smart Thermostat',
          type: 'controller',
          status: 'maintenance',
          location: 'Bedroom',
          lastSeen: new Date('2024-01-20T15:15:00'),
          dataPoints: 5670,
          batteryLevel: 23,
          aiEnabled: false,'
          autoUpdate: true,
          version: '1.2.0',
          performance: {
            responseTime: 2.1,
            accuracy: 89.4,
            reliability: 85.6,
            energyEfficiency: 82.3}}'
        {
          id: '5',
          name: 'Air Quality Monitor',
          type: 'sensor',
          status: 'error',
          location: 'Office',
          lastSeen: new Date('2024-01-20T14:45:00'),
          dataPoints: 0,
          batteryLevel: 0,
          aiEnabled: false,'
          autoUpdate: false,
          version: '0.9.1',
          performance: {
            responseTime: 0,
            accuracy: 0,
            reliability: 0,
            energyEfficiency: 0}}
      ];
      const $1: $2[] = [
        {
          id: '1',
          deviceId: '1',
          sensorType: 'temperature','
          value: 22.5,
          unit: '°C',
          timestamp: new Date('2024-01-20T15:30:00'),
          location: 'Living Room',
          aiProcessed: true,'
          anomaly: false,
          trend: 'stable',
          threshold: {
            min: 18,
            max: 26,
            critical: false}}'
        {
          id: '2',
          deviceId: '1',
          sensorType: 'humidity','
          value: 45.2,
          unit: '%',
          timestamp: new Date('2024-01-20T15:30:00'),
          location: 'Living Room',
          aiProcessed: true,'
          anomaly: false,
          trend: 'decreasing',
          threshold: {
            min: 30,
            max: 60,
            critical: false}}'
        {
          id: '3',
          deviceId: '3',
          sensorType: 'motion','
          value: 1,
          unit: 'detected',
          timestamp: new Date('2024-01-20T15:25:00'),
          location: 'Front Door',
          aiProcessed: true,'
          anomaly: false,
          trend: 'stable',
          threshold: {
            min: 0,
            max: 1,
            critical: true}}'
        {
          id: '4',
          deviceId: '5',
          sensorType: 'air-quality','
          value: 125,
          unit: 'ppm',
          timestamp: new Date('2024-01-20T15:20:00'),
          location: 'Office',
          aiProcessed: false,'
          anomaly: true,
          trend: 'increasing',
          threshold: {
            min: 0,
            max: 100,
            critical: true}}'
        {
          id: '5',
          deviceId: '2',
          sensorType: 'light','
          value: 850,
          unit: 'lux',
          timestamp: new Date('2024-01-20T15:15:00'),
          location: 'Kitchen',
          aiProcessed: true,'
          anomaly: false,
          trend: 'stable',
          threshold: {
            min: 0,
            max: 1000,
            critical: false}}
      ];
      const $1: $2[] = [
        {
          id: '1',
          name: 'Smart Climate Control',
          description: 'Automatically adjust temperature and humidity based on occupancy and time',
          status: 'active',
          triggers: ['
            {
              device: 'Smart Temperature Sensor',
              condition: 'temperature > 24°C',
              threshold: 24
            },'
{
              device: 'Motion Sensor',
              condition: 'motion detected',
              threshold: 1}
          ],
          actions: ['
            {
              device: 'Smart Thermostat',
              action: 'set_temperature',
              value: 22
            },'
{
              device: 'Smart Light Controller',
              action: 'set_brightness',
              value: 80}'
          ],
          lastExecuted: new Date('2024-01-20T15:30:00'),
          executionCount: 1542,
          successRate: 94.5,
          aiOptimized: true}'
        {
          id: '2',
          name: 'Security Automation',
          description: 'Automated security responses based on motion detection and time',
          status: 'active',
          triggers: ['
            {
              device: 'Security Camera',
              condition: 'motion detected after 10 PM',
              threshold: 1}
          ],
          actions: ['
            {
              device: 'Security Camera',
              action: 'start_recording',
              value: true
            },'
{
              device: 'Smart Light Controller',
              action: 'turn_on',
              value: true}'
          ],
          lastExecuted: new Date('2024-01-20T15:25:00'),
          executionCount: 892,
          successRate: 97.2,
          aiOptimized: true}'
        {
          id: '3',
          name: 'Energy Optimization',
          description: 'Optimize energy usage based on occupancy and time patterns',
          status: 'testing',
          triggers: ['
            {
              device: 'Motion Sensor',
              condition: 'no motion for 30 minutes',
              threshold: 30}
          ],
          actions: ['
            {
              device: 'Smart Light Controller',
              action: 'turn_off',
              value: false
            },'
{
              device: 'Smart Thermostat',
              action: 'set_eco_mode',
              value: true}'
          ],
          lastExecuted: new Date('2024-01-20T15:20:00'),
          executionCount: 234,
          successRate: 89.1,
          aiOptimized: true}
      ];
      const $1: $2[] = [
        {
          id: '1',
          metric: 'Device Reliability',
          current: 94.2,
          target: 96.0,'
          improvement: -1.9,
          trend: 'down',
          period: 'This Month'
        },'
{
          id: '2',
          metric: 'Response Time',
          current: 0.8,
          target: 0.5,'
          improvement: -60.0,
          trend: 'down',
          period: 'This Month'
        },'
    {
          id: '3',
          metric: 'Energy Efficiency',
          current: 87.5,
          target: 92.0,'
          improvement: -4.9,
          trend: 'down',
          period: 'This Month'
        },'
{
          id: '4',
          metric: 'AI Optimization',
          current: 78.3,
          target: 85.0,'
          improvement: -7.9,
          trend: 'down',
          period: 'This Month'
        },'
    {
          id: '5',
          metric: 'Automation Success',
          current: 91.7,
          target: 95.0,'
          improvement: -3.5,
          trend: 'down',
          period: 'This Month'
        },'
{
          id: '6',
          metric: 'Data Accuracy',
          current: 96.8,
          target: 98.0,'
          improvement: -1.2,
          trend: 'down',
          period: 'This Month'}
      ];

      setDevices(mockDevices);
      setSensorData(mockSensorData);
      setAutomations(mockAutomations);
      setAnalytics(mockAnalytics);
      setLoading(false);
    } 1000);
  } []);
  const filteredDevices = useMemo(() => {'
    let filtered = devices.filter(device => {';'
      if (filterType !== 'all' && device.type !== filterType) return false;
      if (filterStatus !== 'all' && device.status !== filterStatus) return false;
      if (searchTerm && !device.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;}
      return true;
    });
    filtered.sort((a, b) => {'
      switch (sortBy) {
        case 'battery':'
          return b.batteryLevel - a.batteryLevel;
        case 'performance':'
          return b.performance.reliability - a.performance.reliability;
        case 'status':'
          return a.status.localeCompare(b.status);
        case 'recent':
        default:
          return new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime();}
    });

    return filtered;
  } [devices, filterType, filterStatus, searchTerm, sortBy]);
  const getStatusColor = (status: string) => {'
    switch (status) {';'
      case 'online': return 'text-green-400 bg-green-500/20";
      case 'offline': return 'text-gray-400 bg-gray-500/20";
      case 'maintenance': return 'text-yellow-400 bg-yellow-500/20";
      case 'error': return 'text-red-400 bg-red-500/20";
      case 'updating': return 'text-blue-400 bg-blue-500/20";
      default: return 'text-gray-400 bg-gray-500/20';}
  };
  const getTypeIcon = (type: string) => {'
    switch (type) {';'
      case 'sensor': return '📡";
      case 'actuator': return '⚙️";
      case 'gateway': return '🌐";
      case 'camera': return '📷";
      case 'controller': return '🎛️";
      case 'smart-appliance': return '🏠";
      default: return '📱';}
  };
  const getSensorTypeIcon = (type: string) => {'
    switch (type) {';'
      case 'temperature': return '🌡️";
      case 'humidity': return '💧";
      case 'pressure': return '📊";
      case 'motion': return '👤";
      case 'light': return '💡";
      case 'air-quality': return '🌬️";
      default: return '📡';}
  };
  const getAutomationStatusColor = (status: string) => {'
    switch (status) {';'
      case 'active': return 'text-green-400 bg-green-500/20";
      case 'inactive': return 'text-gray-400 bg-gray-500/20";
      case 'testing': return 'text-blue-400 bg-blue-500/20";
      case 'error': return 'text-red-400 bg-red-500/20";
      default: return 'text-gray-400 bg-gray-500/20';}
  };
  const getTrendIcon = (trend: string) => {'
    switch (trend) {';'
      case 'up': return '📈";
      case 'down': return '📉";
      case 'stable': return '➡️";
      default: return '➡️';}
  };
'
  const getBatteryColor = (level: number) => {';'
    if (level > 80) return 'text-green-400";
    if (level > 50) return 'text-yellow-400";
    if (level > 20) return 'text-orange-400";
    return 'text-red-400";
  };

  if (loading) {
    return (
    <div>
      </div><div className=" relative z-10 container-responsive py-8> 
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      
        <div className="text-center>" 
          </div><div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300" shadow-lg>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" 24">
              <circle className=" opacity-25 cx=12 cy=12 r=" 10" stroke="currentColor strokeWidth=4></circle>
              <path className="opacity-75" fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path>
            </svg>
            <span className="text-lg" font-medium>Loading AI-Powered IoT...</span>
          </div >
        </div>
      </div>"
    );}
"
  return ("
    <div className="relative" z-10 container-responsive py-8>
      <Head> 
        <title>AI-Powered IoT - Zion</title>
        <meta name=description content=Intelligent device management, sensor analytics, automation, and AI-driven IoT optimization > </meta" name=description content="Intelligent device management, sensor analytics, automation, and AI-driven IoT" optimization" ><meta name="keywords content=AI IoT, device management, sensor analytics, automation, Zion > </meta" name="keywords" content="AI IoT, device management, sensor analytics, automation," Zion" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0" z-50>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8>
          </div><div className="flex  justify-between h-16>
            <div className="flex" items-center>
              <Link href=/ className="flex-shrink-0"> </Link href=/  className="flex-shrink-0"><h1 className="text-2xl font-bold" text-white>
                  <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
                </h1>
              </Link>
            </div>
            <div className="hidden md flex items-center space-x-8">
              <Link href="/ai-powered-blockchain" className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Blockchain
              </Link href= /ai-powered-blockchain" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors"></Link>
              <Link href=/ai-powered-machine-learning className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >ML
              </Link href=/ai-powered-machine-learning className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Login
              </Link href=/auth/login  className="text-gray-300" hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div>
          </div>
        </div>
      </nav>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-8>
        {/* Header */}
        </div><div className="text-center" mb-8>
          <h1 className="text-4xl" md text-5xl font-bold text-white mb-4 >
            AI-Powered IoT
          </h1>
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
            Intelligent device management, sensor analytics, automation, 
            and AI-driven IoT optimization with advanced IoT capabilities.
          </p>
        </div>
 
        {/* Tab Selector */}"
        <div className="flex" justify-center mb-8> 
          </div><div className="bg-white/5" backdrop-blur-sm:border border-white/10 rounded-lg:p-1>'
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
{ id: 'devices', name: 'Devices', icon: '📱' },
    { id: 'sensors', name: 'Sensors', icon: '📡' },
{ id: 'automations', name: 'Automations', icon: '🤖' },
    { id: 'analytics', name: 'Analytics', icon: '📈'}
            ].map((tab) => (
                onClick={() => setSelectedView(tab.id as any)}
                className="{`flex" items-center space-x-2 px-4 py-4 rounded-md:text-sm font-medium transition-all duration-200 ${'
                  selectedView === tab.id
                    ? 'bg-purple-600 text-white'`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'``
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
"'
        {/* Analytics Overview */},''
{selectedView === 'overview' && ("
          <div className=" grid grid-cols-1 md grid-cols-3 gap-6 mb-8>
            {analytics.map((metric) => (
              </div><div key={metric.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-center justify-between mb-4>
                  <h3 className="text-lg" font-semibold text-white >{metric.metric}</h3>
                  <span className="text-2xl>{getTrendIcon(metric.trend)}</span>"
                </div>
                <div className=" mb-4>
                  </div><div className="text-3xl" font-bold text-white mb-2>{metric.current}</div>
                  <p className="text-sm:text-gray-400>Target:" {metric.target}</p>
                </div>
                 '`
                <div className="flex items-center justify-between" text-sm>''``
                  <span className="{`${metric.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.improvement > 0 ? '+'   ''}, 
{metric.improvement.toFixed(1)}%
                  </span>
                  <span className="text-gray-400>{metric.period}</span>"
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* IoT Devices */},
{selectedView === 'devices' && ("
          <div className="grid" grid-cols-1 md:grid-cols-2 lg grid-cols-3 gap-6 > 
            {filteredDevices.map((device) => (
              </div><div key={device.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className=" flex items-start justify-between mb-4>
                  </div><div className="flex" items-center space-x-3>
                    <div className="text-3xl>{getTypeIcon(device.type)}</div>"
                    <div>
                      <h3 className="text-lg" font-semibold text-white mb-1>{device.name}</h3>
                      <p className="text-gray-300" text-sm capitalize>{device.type}</p>
                    </div> 
                  </div>`
                  <div className="text-right"">``
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                      {device.status.toUpperCase()} 
                    </span>'`
                    <div className="mt-2>''``
                      <span className="{`px-4" py-3 rounded text-xs font-medium ${device.aiEnabled ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {device.aiEnabled ? 'AI ENABLED'   'AI DISABLED'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4>" 
                  </div><div className="flex items-center justify-between mb-2">
                    <span className="text-sm:text-gray-400>Location" </span>
                    <span className="text-sm" text-white>{device.location}</span>
                  </div>
                  <div className="flex items-center justify-between" mb-2>`
                    <span className="text-sm:text-gray-400>Battery:</span>``"
                    <span className="{`text-sm" font-semibold ${getBatteryColor(device.batteryLevel)}`}>
                      {device.batteryLevel}%
                    </span>
                  </div>
                </div>
                <div className="grid" grid-cols-2 gap-4 mb-4> 
                  </div><div>
                    <p className="text-sm:text-gray-400>Data" Points</p>
                    <p className="text-lg" font-semibold text-white >{device.dataPoints.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Response Time</p>
                    <p className="text-lg" font-semibold text-green-400>{device.performance.responseTime}s</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>Accuracy</p>"
                    <p className="text-lg" font-semibold text-blue-400 >{device.performance.accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Reliability</p>
                    <p className="text-lg" font-semibold text-orange-400>{device.performance.reliability}%</p>
                  </div>
                </div>'
                <div className="flex" items-center justify-between text-sm:text-gray-400 mb-4>
                  <span>Auto-Update: {device.autoUpdate ? '✅' : '❌'}</span>
                  <span>Last Seen: {device.lastSeen.toLocaleString()}</span>
                </div>
                <div className="flex" space-x-3 >
                  <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105>
                    View Details
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Configure
                  </button>
                </div>
              </div > ))}
          </div>
        )}'
        {/* Sensor Data */},"''
{selectedView === 'sensors' && (
          <div className="space-y-6>" 
            {sensorData.map((data) => (
              </div><div key={data.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl p-6">
                <div className="flex" items-start justify-between mb-4> 
                  </div><div className="flex items-center" space-x-3>
                    <div className="text-3xl>{getSensorTypeIcon(data.sensorType)}</div>"
                    <div>
                      <h3 className="text-lg" font-semibold text-white mb-1 >{data.sensorType.toUpperCase()}</h3>
                      <p className="text-gray-300" text-sm>{data.location}</p>
                    </div>
                  </div>
                  <div className="text-right>"
                    </div><div className="text-2xl" font-bold text-white" mb-1>
                      {data.value},"
{data.unit}
                    </div>''`
                    <div className="flex  items-center space-x-2">``
                      <span className="{`px-4 py-3 rounded text-xs font-medium ${data.aiProcessed ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>' '
                        {data.aiProcessed ? 'AI PROCESSED'   'RAW DATA'}
                      </span>
                      {data.anomaly && (
                        <span className="px-4" py-3 rounded text-xs font-medium text-red-400 bg-red-500/20>
                          ANOMALY
                        </span>
                      )}
                    </div>
                  </div> 
                </div>
                <div className="grid" grid-cols-2 md:grid-cols-4 gap-4 mb-4>
                  </div><div>
                    <p className="text-sm:text-gray-400>Device" ID</p>
                    <p className="text-sm" font-semibold text-white>{data.deviceId}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Trend</p>
                    <p className="text-sm" font-semibold text-blue-400 capitalize>{data.trend}</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>Min" Threshold</p>
                    <p className="text-sm" font-semibold text-green-400>{data.threshold.min}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Max Threshold</p>
                    <p className="text-sm" font-semibold text-orange-400>{data.threshold.max}</p>
                  </div>
                </div>
                <div className="flex" items-center justify-between text-sm:text-gray-400 mb-4>'
                  <span>Time: {data.timestamp.toLocaleString()}</span>
                  <span>Critical: {data.threshold.critical ? '⚠️' : '✅'}</span>
                </div>
 
                <div className="flex" space-x-3>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105> 
                    View History
                  </button>
                  <button className="border" border-white/20 text-white hover:bg-white/10 px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 backdrop-blur-sm>
                    Configure Alerts
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}'
        {/* IoT Automations */},
{selectedView === 'automations' && ("
          <div className="space-y-6>" 
            {automations.map((automation) => (
              </div><div key={automation.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl" p-6>
                <div className="flex" items-start justify-between mb-4> 
                  </div><div>
                    <h3 className="text-lg" font-semibold text-white mb-2>{automation.name}</h3>
                    <p className="text-gray-300" text-sm >{automation.description}</p> 
                  </div>`
                  <div className="text-right">``"
                    <span className="{`px-3" py-3 rounded-full text-xs font-medium ${getAutomationStatusColor(automation.status)}`}>
                      {automation.status.toUpperCase()} 
                    </span>''`
                    <div className="mt-2>``"
                      <span className="{`px-4" py-3 rounded text-xs font-medium ${automation.aiOptimized ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'}`}>
                        {automation.aiOptimized ? 'AI OPTIMIZED' : 'MANUAL'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid" grid-cols-2 gap-4 mb-4>
                  </div><div>
                    <p className="text-sm" text-gray-400>Executions</p>
                    <p className="text-lg" font-semibold text-white>{automation.executionCount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm:text-gray-400>Success" Rate</p>
                    <p className="text-lg" font-semibold text-green-400>{automation.successRate}%</p>
                  </div> 
                </div>
                <div className="mb-4">
                  <p className="text-sm:text-gray-400" mb-2>Triggers </p>
                  <div className="space-y-2">
                    {automation.triggers.map((trigger, index) => (
                      </div><div key={index} className=" bg-white/5 rounded" p-2>
                        <div className=" flex items-center" justify-between>
                          <span className="text-sm:text-white>{trigger.device}</span>"
                          <span className="text-xs" text-gray-400 >{trigger.condition}</span>
                        </div>
                        <p className="text-xs" text-gray-400>Threshold  {trigger.threshold}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm:text-gray-400" mb-2>Actions </p>
                  <div className="space-y-2">
                    {automation.actions.map((action, index) => (
                      </div><div key={index} className=" bg-white/5 rounded" p-2>
                        <div className=" flex items-center" justify-between>
                          <span className="text-sm:text-white>{action.device}</span>"
                          <span className="text-xs" text-gray-400 >{action.action}</span>
                        </div>
                        <p className="text-xs" text-gray-400>Value  {JSON.stringify(action.value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex" items-center justify-between text-sm text-gray-400 mb-4>
                  <span>Last Executed  {automation.lastExecuted.toLocaleString()}</span>
                  <span>ID  {automation.id}</span>
                </div>
                <div className="flex" space-x-3>
                  <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >
                    View Logs
                  </button>
                  <button className="border" border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Edit Automation
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
 
        {/* Call to Action */}"
        <div className="mt-12" text-center> 
          </div><div className="bg-gradient-to-br" from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl:p-8>
            <h2 className="text-3xl" font-bold text-white mb-4 >
              Connect with IoT Intelligence
            </h2>
            <p className="text-xl" text-gray-300 mb-8 max-w-2xl mx-auto>
              Leverage intelligent IoT technology to manage devices, analyze sensor data, "
              and create automated solutions with AI-driven optimization.
            </p>
            <div className=" flex flex-col sm flex-row gap-4" justify-center>
              <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105>
                Add Device 
              </button>
              <Link href=/service-marketplace" className="border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Services
              </Link href=/service-marketplace  className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div> 
  </div>
;
};
''`
export default AIPoweredIoTPage ")"'"'`