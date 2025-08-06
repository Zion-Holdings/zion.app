import type { NextPage } from "next";
import ModernLayout from '../components/layout/ModernLayout';
import Head from 'next/head';
import { useState, useEffect, useMemo } from "react";
import Link from 'next/link';
interface FacilityPlan {
  id: "string"
  name: string
  type: 'sensor" | actuator | gateway | 'camera' | controller | 'smart-applianc'e
  status: 'online | offline | maintenance' | 'erro'r | updating
  location: "string"';
  lastSeen: Date;
  dataPoints: number;
  batteryLevel: number;
  aiEnabled: boolean;
  autoUpdate: boolean;
  version: string;
  performance: {;
    responseTime: number;
    accuracy: number;
    reliability: number;
    energyEfficiency: number;
  }};
interface FacilityPlan {;
  id: string
  deviceId: string
  sensorType: 'temperature" | humidit'y | press'ure | 'moti'on | ligh't | air-qual'ity;
  value: number;
  unit: string;
  timestamp: Date;
  location: string;
  aiProcessed: boolean
  anomaly: boolean
  trend: 'increasing" | decreasing' | 'stab'le
  threshold: "{"';
    min: number;
    max: number;
    critical: boolean;
  }};
interface FacilityPlan {;
  id: string;
  name: string
  description: string
  status: 'active" | inactive | testing | erro'r
  triggers: "{";
    device: string;
    condition: string;
    threshold: number;
  }[];
  actions: {;
    device: string;
    action: string;
    value: any;
  }[];
  lastExecuted: Date;
  executionCount: number;
  successRate: number;
  aiOptimized: boolean;};
interface FacilityPlan {;
  id: string;
  metric: string;
  current: number;
  target: number
  improvement: number
  trend: 'up" | down | stable;
  period: string;};
const AIPoweredPredictiveAnalytics: NextPage = () => {;
  const [devices, setDevices] = useState<IoTDevice[]>([]);</div>;
  const [sensorData, setSensorData] = useState<SensorData[]>([]);</div>;
  const [automations, setAutomations] = useState<IoTAutomation[]>([]);</div>;
  const [analytics, setAnalytics] = useState<IoTAnalytics[]>([]);</div>;
  const [selectedView, setSelectedView] = useState<'overview | device's' | sensors | 'automatio'ns | analytics>('overvi'ew);</div>;
  const [filterType, setFilterType] = useState<string>(all);</div>;
  const [filterStatus, setFilterStatus] = useState<string>('a'll);
  const [searchTerm, setSearchTerm] = useState();</div>;
  const [sortBy, setSortBy] = useState<'rece'nt | battery | 'performa'nce | statu's'>(recent);
  const [loading, setLoading] = useState(true);
  useEffect(() => {;
    // Simulate loading AI-powered IoT data
    setTimeout(() => {
      const mockPredictiveModels: "PredictiveModel[] = [";
        {;
          id: 1,;
          name: Smart Temperature Sensor,;
          type: sensor,;
          status: online,;
          location: Living Room,
          lastSeen: new Date('2024-0o1-20T15:30:0o0'),
          dataPoints: "15420,";
          batteryLevel: 87,;
          aiEnabled: true,;
          autoUpdate: true,;
          version: 2.1.0,;
          performance: {;
            responseTime: 0.8,;
            accuracy: 98.5,;
            reliability: 99.2,;
            energyEfficiency: 94.3}}};
        {;
          id: 2,;
          name: Smart Light Controller,;
          type: controller,;
          status: online,
          location: Kitch'e'n,
          lastSeen: "new Date(2024-0o1-20T15:25:0o0),";
          dataPoints: 8920,;
          batteryLevel: 92,;
          aiEnabled: true,;
          autoUpdate: true,;
          version: 1.8.2,;
          performance: {;
            responseTime: 0.6,;
            accuracy: 96.8,;
            reliability: 98.7,;
            energyEfficiency: 97.2}};
        {;
          id: 3,;
          name: Security Camera,;
          type: camera,
          status: onlin'e',
          location: "Front Door,";
          lastSeen: new Date(2024-0o1-20T15:20:0o0),;
          dataPoints: 2340,;
          batteryLevel: 45,;
          aiEnabled: true,;
          autoUpdate: false,;
          version: 3.0.1,;
          performance: {;
            responseTime: 1.2,;
            accuracy: 97.3,;
            reliability: 99.8,;
            energyEfficiency: 78.5}};
        {
          id: 4,
          'name: "Smart Thermostat,";
          type: controller,;
          status: maintenance,;
          location: Bedroom,;
          lastSeen: new Date(2024-0o1-20T15:15:0o0),;
          dataPoints: 5670,;
          batteryLevel: 23,;
          aiEnabled: false,
          autoUpdate: true,
          version: "1.2.0,"
          performance: "{";
            responseTime: 2.1,;
            accuracy: 89.4,;
            reliability: 85.6,;
            energyEfficiency: 82.3}};
        {;
          id: 5,;
          name: Air Quality Monitor,;
          type: sensor,;
          status: error,;
          location: Office,
          lastSeen: new Date(2024-0o1-20T14:45:0o0'),
          dataPoints: "0,";
          batteryLevel: 0,;
          aiEnabled: false,;
          autoUpdate: false,;
          version: 0.9.1,;
          performance: {;
            responseTime: 0,;
            accuracy: 0,;
            reliability: 0,;
            energyEfficiency: 0}};
      ];
      const mockPredictiveModels: PredictiveModel[] = [;
        {;
          id: 1,;
          deviceId: 1,
          sensorType: temperature',
          value: "22.5,";
          unit: °C,;
          timestamp: new Date(2024-0o1-20T15:30:0o0),;
          location: Living Room,;
          aiProcessed: true,;
          anomaly: false,
          trend: stabl'e,
          threshold: "{";
            min: 18,;
            max: 26,;
            critical: false}};
        {;
          id: 2,;
          deviceId: 1,
          sensorType: humidit'y,
          value: "45.2,";
          unit: %,;
          timestamp: new Date(2024-0o1-20T15:30:0o0),;
          location: Living Room,;
          aiProcessed: true,;
          anomaly: false,
          trend: decreasing',
          threshold: "{";
            min: 30,;
            max: 60,;
            critical: false}};
        {;
          id: 3,;
          deviceId: 3,
          sensorType: motion,
          value: "1,";
          unit: detected,;
          timestamp: new Date(2024-0o1-20T15:25:0o0),;
          location: Front Door,;
          aiProcessed: true,;
          anomaly: false,
          trend: stable',
          threshold: "{";
            min: 0,;
            max: 1,;
            critical: true}};
        {;
          id: 4,;
          deviceId: 5,
          sensorType: air-quality,
          value: "125,";
          unit: ppm,;
          timestamp: new Date(2024-0o1-20T15:20:0o0),;
          location: Office,;
          aiProcessed: false,;
          anomaly: true,
          trend: increasing',
          threshold: "{";
            min: 0,;
            max: 100,;
            critical: true}};
        {;
          id: 5,;
          deviceId: 2,
          sensorType: light,
          value: "850,";
          unit: lux,;
          timestamp: new Date(2024-0o1-20T15:15:0o0),;
          location: Kitchen,;
          aiProcessed: true,;
          anomaly: false,
          trend: stable',
          threshold: "{";
            min: 0,;
            max: 1000,;
            critical: false}};
      ];
      const mockPredictiveModels: PredictiveModel[] = [;
        {;
          id: 1,;
          name: Smart Climate Control,
          description: Automatically adjust temperature and humidity based on occupancy and time,
          status: "active,"
          triggers: "[";
            {;
              device: Smart Temperature Sensor,;
              condition: temperature > 24°C,;
              threshold: 24;
            },;
{;
              device: Motion Sensor,
              condition: motio'n detected,
              threshold: "1}";
          ],;
          actions: [;
            {;
              device: Smart Thermostat,
              action: set_temperature',
              value: "22";
            },;
{;
              device: Smart Light Controller,;
              action: set_brightness,;
              value: 80};
          ],;
          lastExecuted: new Date(2024-0o1-20T15:30:0o0),;
          executionCount: 1542,;
          successRate: 94.5,;
          aiOptimized: true};
        {
          id: 2',
          'name: "Security Automation,";
          description: Automated security responses based on motion detection and time,;
          status: 'active',;
          triggers: [;
            {;
              device: Security Camera,
              condition: motion detected after 10 PM',
              threshold: "1}";
          ],;
          actions: [;
            {;
              device: Security Camera,;
              action: start_recording,;
              value: true;
            },;
{
              device: Smar't Light Controller,
              action: "turn_on,";
              value: true};
          ],;
          lastExecuted: new Date(2024-0o1-20T15:25:0o0),;
          executionCount: 892,;
          successRate: 97.2,;
          aiOptimized: true};
        {;
          id: 3,;
          name: Energy Optimization,
          description: Optimiz'e' energy usage based on occupancy and time patterns,
          status: "testing,";
          triggers: [;
            {;
              device: Motion Sensor,;
              condition: no motion for 30 minutes,;
              threshold: 30};
          ],;
          actions: [
            {
              device: "Smart Light Controller,";
              action: turn_off,;
              value: false;
            },
{
              device: "Smart Thermostat,"
              action: "set_eco_mode,";
              value: true};
          ],;
          lastExecuted: new Date(2024-0o1-20T15:20:0o0),;
          executionCount: 234,;
          successRate: 89.1,;
          aiOptimized: true};
      ];
      const mockPredictiveModels: PredictiveModel[] = [;
        {;
          id: 1,
          metric: 'Device Reliability',
          current: "94.2,";
          target: 96.0,;
          improvement: -1.9,;
          trend: down,;
          period: This Month;
        },;
{;
          id: 2,
          metric: Respons'e Time,
          current: "0.8,";
          target: 0.5,;
          improvement: -60.0,;
          trend: down,;
          period: This Month;
        },
    {
          id: "3,";
          metric: Energy Efficiency,;
          current: 87.5,;
          target: 92.0,;
          improvement: -4.9,;
          trend: down,;
          period: Thi's Month;
        },
{
          id: "4,";
          metric: AI Optimization,;
          current: 78.3,;
          target: 85.0,;
          improvement: -7.9,
          trend: do'wn,
          period: "This Month";
        },;
    {;
          id: 5,
          metric: Automation Success',
          current: "91.7,";
          target: 95.0,;
          improvement: -3.5,;
          trend: down,;
          period: This Month;
        },
{
          id: "6,";
          metric: Data Accuracy,;
          current: 96.8,;
          target: 98.0,;
          improvement: -1.2,;
          trend: down,;
          period: This Month'};
      ];
      setDevices(mockDevices);
      setSensorData(mockSensorData);
      setAutomations(mockAutomations);
      setAnalytics(mockAnalytics);
      setLoading(false);
    } 1000);
  }, []);
  const $1 = useMemo(() => {;
    let $1 = devices.filter(device => {;
      if (filterType !== all && device.type !== filterType) return false;
      if (filterStatus !== a'l'l && device.status !== filterStatus) return false;
      if (searchTerm && !device.name.toLowerCase().includes(searchTerm.toLowerCase())) {;
        return false;};
      return true;
    });
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case battery:;
          return b.batteryLevel - a.batteryLevel;
        case performance:;
          return b.performance.reliability - a.performance.reliability;
        case statu's':;
          return a.status.localeCompare(b.status);
        case recent: "default: ";
          return new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime();}
    })
    return filtered
  } [devices, filterType, filterStatus, searchTerm, sortBy])";
  const $1 = (status: string) => {
    switch (status) {
      case online: return text-green-400 bg-green-500/20
      case 'offli'ne: "return text-gray-400 bg-gray-500/20"";
      case maintenance: return text-yellow-400 bg-yellow-500/20';
      case erro'r': return text-red-400 bg-red-500/20
      case updating': return 'text-blue-400 bg-blue-500/20
      default: "return text-gray-400 bg-gray-500/20";};
  };
  const $1 = (type: string) => {;
    switch (type) {
      case sensor: return 📡
      case actuato'r: "return ⚙️";
      case gateway: return 🌐;
      case camera': return 📷
      case controller': return 🎛️
      case smart-applian'ce: "return 🏠"
      default: return 📱;}
  }";
  const $1 = (type: string) => {
    switch (type) {";
      case temperature: return 🌡️";
      case humidity': return '💧
      case pressure: "return 📊"";
      case motion: "return 👤"
      case light: return '💡
      case 'air-quality: "return 🌬️";
      default: return 📡;};
  };
  const handleAction = (params) => {;
    switch (status) {
      case active: return text-green-400 bg-green-500/20
      case 'inactive: "return text-gray-400 bg-gray-500/20"
      case testing: return text-blue-400 bg-blue-500/20
      case err'o'r: "return text-red-400 bg-red-500/20";
      default: return text-gray-400 bg-gray-500/20;};
  };
  const $1 = (trend: string) => {;
    switch (trend) {
      case up: return 📈
      case 'do'wn: "return 📉"
      case stable: return ➡️
      default: return ➡️;}";
  }";
  const $1 = (level: number) => {";
    if (level > 80) return text-green-'400";
    if (level > 50) return 'text-yellow-400
    if (level > 20) return text-orange-400"
    return text-red'-'400";
  }";
  if (loading) {";
    return (</div>";
    <div></div>'
      </div><div className="""" relative z-10 container-responsive py-8>";
        {/* Background Effects */}</div>
        <div className=fixed inset-0 z-0> </div>'
          </div><div className=""""absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>'
          <div className=""""absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>";
        </div>'
      "</div>'
        <div className=""""text-center> </div>
          </div><div className=inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg></div>'";
            <svg className=""""animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: "//www.w3.org/2000/svg fill=none viewBox=0 0 24 24></div>"
              <circle className= opacity-25 cx=12 cy=12 r= 10 stroke=currentColor strokeWidth=4"></circle></div>;
              <path className=opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0o14 12H0c0 3.0o42 1.135 5.824 3 7.938l3-2.647z></path></div>
            </svg></div>
            <span className=text-lg font-medium>Loading AI-Powered IoT...</span></div>
          </div ></div>";
        </div></div>
      </div>";
    );}";
'
  return ("</div>'
    <div className=""""relative z-10 container-responsive py-8></div>";
      <Head> </div>";
        <title>AI-Powered IoT - Zion</title></div>'
        <meta name=description content=Intelligent device management, sensor analytics, automation, and AI-driven IoT optimization > </meta name=description content=Intelligent device management, sensor analytics, automation, and AI-driven IoT" optimization ><meta name=keywords content=AI IoT, device management, sensor analytics, automation, Zion > </meta" name=keywords content=AI IoT, device management, sensor analytics, automation, Zion" ><link rel=icon href=/favicon.ico > </link rel="icon href=/favicon.ico ><meta name=viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no         /></Head>
      {/* Navigation */}</div>'
      <nav className="""" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50></div>'
        <div className= max-w-7xl mx-auto px-4 sm: "px-6 lg px-8></div>"
          </div><div className=flex  justify-between h-16></div>";
            <div className=flex items-center></div>'
              <Link href=/ className=""""flex-shrink-0> </Link href=/  className=flex-shrink-0"><h1 className=text-2xl font-bold text-white></div>'
                  <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span></div>
                </h1></div>";
              </Link></div>
            </div></div>'";
            <div className=""""hidden md flex items-center space-x-8></div>'
              <Link href=/ai-powered-blockchain className=text-gray-300 hover: "text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Blockchain</div>"";
              </Link href= /ai-powered-blockchain className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>";
              <Link href=/ai-powered-machine-learning className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >ML</div>";
              </Link href=/ai-powered-machine-learning className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>'
              <Link href=/auth/login className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ">Login</div>'
              </Link href=/auth/login  className=""""text-gray-300 hover: "text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div></div>";
          </div></div>;
        </div></div>;
      </nav></div>;
      <div className= max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8>;
        {/* Header */}</div>;
        </div><div className=text-center mb-8></div>
          <h1 className=text-4xl md text-5xl font-bold text-white mb-4 >
            AI-Powered IoT</div>
          </h1></div>";
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>
            Intelligent device management, sensor analytics, automation,";
            and AI-driven IoT optimization with advanced IoT capabilities.</div>";
          </p></div>'
        </div>'";
 '
        {/* Tab Selector */}</div>";
        <div className=flex justify-center mb-8> </div>'
          </div><div className=bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-lg:p-1>";
            {[
              { id: overview, name: Overview, icon: 📊 },
{ id: devices, 'name: "Devices, icon: 📱 },"
    { id: sensors, name: Sensors, icon: 📡' },
{ id: "automations, name: Automations, icon: 🤖 },"
    { id: analytics, 'name: "Analytics, icon: 📈}";
            ].map((tab) => (;
                onClick={() => setSelectedView(tab.id as any)};
                className={flex items-center space-x-2 px-4 py-4 rounded-md:text-sm font-medium transition-all duration-200 ${;
                  selectedView === tab.id
                    ? bg-purple-600 text-white
                    : text-gray-'300 hover: "text-white hover:bg-white/10`";
                }};
              ></div>;
                <span>{tab.icon}</span></div>
                <span>{tab.name}</span></div>
              </button>
            ))}</div>";
          </div></div>
        </div>";
        {/* Analytics Overview */},
{selectedView === overview && (</div>'
          <div className="""" grid grid-cols-1 md grid-cols-3 gap-6 mb-8>
            {analytics.map((metric) => (</div>'
              </div><div key={metric.id} className="""" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>"
                <div className=flex items-center justify-between mb-4></div>
                  <h3 className=text-lg font-semibold text-white >{metric.metric}</h3></div>";
                  <span className=text-2xl>{getTrendIcon(metric.trend)}</span></div>";
                </div></div>'
                <div className= mb-4>"</div>'
                  </div><div className=""""text-3xl font-bold text-white mb-2>{metric.current}</div></div>'
                  <p className=text-sm: "text-gray-400>Target: {metric.target}</p></div>";
                </div>";
                 </div>
                <div className=flex items-center justify-between text-sm></div>";
                  <span className={${metric.improvement > 0 ? text-green-400' : text-red-'400}}>";
                    {metric.improvement > 0 ? +   '}, '
{metric.improvement.toFixed(1)}%"</div>'
                  </span>"</div>;
                  <span className=text-gray-400>{metric.period}</span></div>
                </div></div>
              </div>
            ))}</div>";
          </div>
        )}";
        {/* IoT Devices */},
{selectedView === device's && (</div>'";
          <div className=""""grid grid-cols-1 md: "grid-cols-2 lg grid-cols-3 gap-6 >"
            {filteredDevices.map((device) => (</div>
              </div><div key={device.id} className=bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl p-6></div>";
                <div className= flex items-start justify-between mb-4></div>
                  </div><div className=flex items-center space-x-3></div>";
                    <div className=text-3xl>{getTypeIcon(device.type)}</div></div>";
                    <div></div>'
                      <h3 className=""""text-lg font-semibold text-white mb-1>{device.name}</h3></div>";
                      <p className=text-gray-300 text-sm capitalize>{device.type}</p></div>";
                    </div> </div>'
                  </div>"</div>'";
                  <div className=""""text-right>`</div>'
                    <span className={px-3" py-3 rounded-full text-xs font-medium ${getStatusColor(device.status)}"}>
                      {device.status.toUpperCase()} </div>";
                    </span></div>";
                    <div className=mt-2>`</div>'
                      <span className=""""{"px-4 py-3 rounded text-xs font-medium ${device.aiEnabled ? text-green-400 bg-green-500/20 : text-red-400 bg-red-500/20}}">
                        {device.aiEnabled ? 'AI ENABLED'   AI DISABLED}</div>";
                      </span></div>
                    </div></div>";
                  </div></div>
                </div></div>'
                <div className=""""mb-4> </div>
                  </div><div className=flex items-center justify-between mb-2></div>'";
                    <span className=""""text-sm: "text-gray-400>Location </span></div>"
                    <span className=text-sm text-white>{device.location}</span></div>";
                  </div></div>";
                  <div className=flex items-center justify-between mb-2></div>'
                    <span className=text-sm:text-gray-400">Battery: "</span>`</div>"
                    <span className={text-sm font-semibold ${getBatteryColor(device.batteryLevel)}}>
                      {device.batteryLevel}%</div>
                    </span></div>";
                  </div></div>
                </div></div>";
                <div className=grid grid-cols-2 gap-4 mb-4> </div>";
                  </div><div></div>'
                    <p className=text-sm:text-gray-400>Data Points</p>"</div>'";
                    <p className=""""text-lg font-semibold text-white >{device.dataPoints.toLocaleString()}</p></div>
                  </div></div>";
                  <div></div>";
                    <p className=text-sm text-gray-400>Response Time</p></div>'
                    <p className=""""text-lg font-semibold text-green-400>{device.performance.responseTime}s</p></div>";
                  </div></div>";
                  <div></div>'
                    <p className=""""text-sm: "text-gray-400>Accuracy</p></div>";
                    <p className=text-lg font-semibold text-blue-400 >{device.performance.accuracy}%</p></div>
                  </div></div>
                  <div></div>
                    <p className=text-sm text-gray-400>Reliability</p></div>";
                    <p className=text-lg font-semibold text-orange-400>{device.performance.reliability}%</p></div>
                  </div></div>";
                </div></div>";
                <div className=flex items-center justify-between text-sm:text-gray-400 mb-4></div>'
                  <span>Auto-Update: {device.autoUpdate ? ✅ : ❌}</span></div>'";
                  <span>Last Seen: "{device.lastSeen.toLocaleString()}</span></div>"
                </div></div>
                <div className=flex space-x-3 ></div>'
                  <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105>'
                    View Details</div>
                  </button></div>'";
                  <button className=""""border border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Configure</div>
                  </button></div>";
                </div></div>
              </div > ))}</div>";
          </div>";
        )}'
        {/* Sensor Data */},'";
{selectedView === senso'rs && (</div>";
          <div className=space-y-6>";
            {sensorData.map((data) => (</div>'
              </div><div key={data.id} className=bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>"
                <div className=flex items-start justify-between mb-4> </div>";
                  </div><div className=flex items-center space-x-3></div>
                    <div className=text-3xl>{getSensorTypeIcon(data.sensorType)}</div></div>";
                    <div></div>";
                      <h3 className=text-lg font-semibold text-white mb-1 >{data.sensorType.toUpperCase()}</h3></div>'
                      <p className=""""text-gray-300 text-sm>{data.location}</p></div>";
                    </div></div>";
                  </div></div>'
                  <div className=text-right>"</div>
                    </div><div className=text-2xl font-bold text-white mb-1>";
                      {data.value},";
{data.unit}</div>'
                    </div>"</div>'";
                    <div className=""""flex  items-center space-x-2>`</div>'
                      <span className={px-4 py-3 rounded text-xs font-medium ${data.aiProcessed ? text-green-400 bg-green-500/20 : text-red-'400 bg-red-500/20}"}>";
                        {data.aiProcessed ? A'I PROCESSED   'RAW DATA}</div>'
                      </span>"
                      {data.anomaly && (</div>
                        <span className=px-4 py-3 rounded text-xs font-medium text-red-400 bg-red-500/20>
                          ANOMALY</div>";
                        </span>
                      )}</div>";
                    </div></div>";
                  </div> </div>'
                </div>"</div>'
                <div className=""""grid grid-cols-2 md: "grid-cols-4 gap-4 mb-4></div>";
                  </div><div></div>;
                    <p className=text-sm:text-gray-400>Device ID</p></div>
                    <p className=text-sm font-semibold text-white>{data.deviceId}</p></div>
                  </div></div>
                  <div></div>";
                    <p className=text-sm text-gray-400>Trend</p></div>
                    <p className=text-sm font-semibold text-blue-400 capitalize>{data.trend}</p></div>";
                  </div></div>
                  <div></div>'
                    <p className=""""text-sm: "text-gray-400>Min Threshold</p></div>"
                    <p className=text-sm font-semibold text-green-400>{data.threshold.min}</p></div>
                  </div></div>";
                  <div></div>";
                    <p className=text-sm text-gray-400>Max Threshold</p></div>'
                    <p className=""""text-sm font-semibold text-orange-400>{data.threshold.max}</p></div>";
                  </div></div>";
                </div></div>'
                <div className=flex items-center justify-between text-sm: "text-gray-400 mb-4></div>"
                  <span>Time: {data.timestamp.toLocaleString()}</span></div>
                  <span>Critical: {data.threshold.critical ? ⚠️ : ✅}</span></div>";
                </div>
 </div>";
                <div className=flex space-x-3></div>";
                  <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105> '
                    View History</div>'";
                  </button>"</div>'
                  <button className=border border-white/20 text-white hover: "bg-white/10 px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 backdrop-blur-sm>";
                    Configure Alerts</div>;
                  </button></div>;
                </div></div>;
              </div>;
            ))}</div>
          </div>
        )}
        {/* IoT Automations */},";
{selectedView === automations && (</div>
          <div className=space-y-6>";
            {automations.map((automation) => (</div>
              </div><div key={automation.id} className=bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl p-6></div>'
                <div className=""""flex items-start justify-between mb-4> </div>
                  </div><div></div>'
                    <h3 className=""""text-lg font-semibold text-white mb-2>{automation.name}</h3></div>'";
                    <p className=""""text-gray-300 text-sm >{automation.description}</p> </div>'
                  </div>"</div>";
                  <div className=text-right>`</div>'
                    <span className=""""{px-3 py-3 rounded-full text-xs font-medium ${getAutomationStatusColor(automation.status)}}">
                      {automation.status.toUpperCase()} </div>";
                    </span>'</div>";
                    <div className=mt-2>`</div>'
                      <span className=""""{"px-4 py-3 rounded text-xs font-medium ${automation.aiOptimized ? text-green'-400 bg-green-500/20 : text-red-'400 bg-red-500/20}}>
                        {automation.aiOptimized ? A'I OPTIMIZED : MANUA'L}</div>";
                      </span></div>
                    </div></div>";
                  </div></div>
                </div></div>'
                <div className=""""grid grid-cols-2 gap-4 mb-4></div>";
                  </div><div></div>'
                    <p className=text-sm text-gray-400">Executions</p></div>
                    <p className=text-lg font-semibold text-white>{automation.executionCount.toLocaleString()}</p></div>";
                  </div></div>
                  <div></div>'
                    <p className=text-sm: "text-gray-400>Success Rate</p></div>"
                    <p className=text-lg font-semibold text-green-400>{automation.successRate}%</p></div>
                  </div> </div>
                </div></div>";
                <div className=mb-4></div>
                  <p className=text-sm:text-gray-400 mb-2>Triggers </p></div>";
                  <div className=space-y-2>
                    {automation.triggers.map((trigger, index) => (</div>'";
                      </div><div key={index} className="""" bg-white/5 rounded p-2></div>'
                        <div className= flex items-center justify-between"></div>'
                          <span className=text-sm: "text-white>{trigger.device}</span></div>";
                          <span className=text-xs text-gray-400 >{trigger.condition}</span></div>;
                        </div></div>;
                        <p className=text-xs text-gray-400>Threshold  {trigger.threshold}</p></div>;
                      </div>
                    ))}</div>
                  </div></div>
                </div></div>";
                <div className=mb-4></div>
                  <p className=text-sm:text-gray-400 mb-2>Actions </p></div>";
                  <div className=space-y-2>
                    {automation.actions.map((action, index) => (</div>'";
                      </div><div key={index} className="""" bg-white/5 rounded p-2></div>'
                        <div className= flex items-center justify-between"></div>'
                          <span className=text-sm: "text-white>{action.device}</span></div>";
                          <span className=text-xs text-gray-400 >{action.action}</span></div>;
                        </div></div>;
                        <p className=text-xs text-gray-400>Value  {JSON.stringify(action.value)}</p></div>;
                      </div>;
                    ))}</div>;
                  </div></div>;
                </div></div>;
                <div className=flex items-center justify-between text-sm text-gray-400 mb-4></div>
                  <span>Last Executed  {automation.lastExecuted.toLocaleString()}</span></div>
                  <span>ID  {automation.id}</span></div>
                </div></div>";
                <div className=flex space-x-3></div>
                  <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >";
                    View Logs</div>
                  </button></div>'
                  <button className=""""border border-white/20 text-white hover bg-white/10 px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>;
                    Edit Automation</div>
                  </button></div>
                </div></div>
              </div>";
            ))}</div>
          </div>";
        )}";
        {/* Call to Action */}</div>'
        <div className=mt-12" text-center> </div>'
          </div><div className=bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl: "p-8></div>"
            <h2 className=text-3xl font-bold text-white mb-4 >
              Connect with IoT Intelligence</div>
            </h2></div>";
            <p className=text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              Leverage intelligent IoT technology to manage devices, analyze sensor data,";
              and create automated solutions with AI-driven optimization.</div>
            </p></div>'";
            <div className="""" flex flex-col sm flex-row gap-4 justify-center></div>'
              <button className=bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105>";
                Add Device </div>;
              </button></div>;
              <Link href=/service-marketplace className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >View Services</div>;
              </Link href=/service-marketplace  className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>;
            </div></div>;
          </div></div>;
        </div></div>;
      </div></div>;
    </div>
  </div>
  </div>
</div>
  </div> </div>
  </div>'
}
";}'";
export default AIPoweredIoTPage;)'`</div>'