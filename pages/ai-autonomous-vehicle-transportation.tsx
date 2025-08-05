import React, { useState, useEffect } from 'react;
import type { NextPage } from ne'x't;
import Head from next/head';
import Link from 'next/link;

interface AutonomousVehicle {
  id: string;
  name: string;
  type: ''passenger' | 'delivery' | 'logistic's' | emergen'c'y | agricultur'a'l;
  status: ''active' | 'maintenance' | 'offlin'e' | chargi'n'g | 'in-trans'it;
  location: string;
  battery: number;
  speed: number;
  destination?: string;
  eta?: string;
}

interface FleetMetrics {
  totalVehicles: number;
  activeVehicles: number;
  averageSpeed: number;
  totalDistance: number;
  efficiency: number;
}

const AIAutonomousVehicleTransportationPage: NextPage = () => {
  const [vehicles, setVehicles] = useState<AutonomousVehicle[]>([]);
  const [metrics, setMetrics] = useState<FleetMetrics>({
    totalVehicles: 0,
    activeVehicles: 0,
    averageSpeed: 0,
    totalDistance: 0,
    efficiency: 0
  });
  const [selectedVehicle, setSelectedVehicle] = useState<AutonomousVehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading fleet data
    setTimeout(() => {
      const mockVehicles: AutonomousVehicle[] = [
        {
          id: '1',
          name: Tesla' Model S AV-001',
          type: passenge'r',
          status: activ'e',
          location: San' Francisco, CA',
          battery: 85,
          speed: 45,
          destination: Mountain' View, CA',
          eta: 15 min
        },
        {
          id: '2',
          name: Waymo' Pacifica AV-002',
          type: passenge'r',
          status: activ'e',
          location: Phoenix', AZ',
          battery: 92,
          speed: 38,
          destination: Tempe', AZ',
          eta: 22 min
        },
        {
          id: '3',
          name: Nuro' R2 AV-003',
          type: deliver'y',
          status: in-transi't',
          location: Houston', TX',
          battery: 78,
          speed: 25,
          destination: Downtown' Houston',
          eta: 8 min
        },
        {
          id: '4',
          name: Cruise' Origin AV-004',
          type: passenge'r',
          status: chargin'g',
          location: San' Francisco, CA',
          battery: 15,
          speed: 0
        },
        {
          id: 5,
          name: 'Auror'a Driver AV-005,
          type: 'logisti'cs,
          status: 'maintenan'ce,
          location: 'Pittsburg'h, PA,
          battery: 45,
          speed: 0
        }
      ];

      setVehicles(mockVehicles);
      setMetrics({
        totalVehicles: mockVehicles.length,
        activeVehicles: mockVehicles.filter(v => v.status === 'acti've).length,
        averageSpeed: Math.round(mockVehicles.reduce((sum, v) => sum + v.speed, 0) / mockVehicles.length),
        totalDistance: 1250,
        efficiency: 94
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'acti've: return 'bg-green'-500;
      case 'maintenan'ce: return 'bg-yellow'-500;
      case 'offli'ne: return 'bg-red'-500;
      case 'chargi'ng: return 'bg-blue'-500;
      case 'in-trans'it: return 'bg-purple'-500;
      default: return 'bg-gray'-500;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'passeng'er: return '🚗';
      case deliver'y': return 📦;
      case 'logisti'cs: return '🚛';
      case emergenc'y': return 🚑;
      case 'agricultur'al: return '🚜';
      default: return '🚗';
    }
  };

  return (
    <>
      <Head>
        <title>AI Autonomous Vehicle Transportation - Zion App</title>
        <meta name="description content=AI-powered autonomous vehicle fleet management and monitoring" />
      </Head>

      <div className="min-h-screen bg-gray-50>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8>
            <h1 className=text-3xl font-bold text-gray-900 mb-4">AI Autonomous Vehicle Transportation</h1>
            <p className="text-gray-600>Real-time monitoring and management of autonomous vehicle fleet</p>
          </div>

          {/* Metrics Dashboard */}
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6>
              <div className=flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg>
                  <span className=text-2xl">🚗</span>
                </div>
                <div className="ml-4>
                  <p className=text-sm font-medium text-gray-600">Total Vehicles</p>
                  <p className="text-2xl font-bold text-gray-900>{metrics.totalVehicles}</p>
                </div>
              </div>
            </div>

            <div className=bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center>
                <div className=p-2 bg-green-100 rounded-lg">
                  <span className="text-2xl>✅</span>
                </div>
                <div className=ml-4">
                  <p className="text-sm font-medium text-gray-600>Active Vehicles</p>
                  <p className=text-2xl font-bold text-gray-900">{metrics.activeVehicles}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6>
              <div className=flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg>
                  <span className=text-2xl">⚡</span>
                </div>
                <div className="ml-4>
                  <p className=text-sm font-medium text-gray-600">Avg Speed</p>
                  <p className="text-2xl font-bold text-gray-900>{metrics.averageSpeed} mph</p>
                </div>
              </div>
            </div>

            <div className=bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center>
                <div className=p-2 bg-orange-100 rounded-lg">
                  <span className="text-2xl>📏</span>
                </div>
                <div className=ml-4">
                  <p className="text-sm font-medium text-gray-600>Total Distance</p>
                  <p className=text-2xl font-bold text-gray-900">{metrics.totalDistance} mi</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6>
              <div className=flex items-center">
                <div className="p-2 bg-green-100 rounded-lg>
                  <span className=text-2xl">📈</span>
                </div>
                <div className="ml-4>
                  <p className=text-sm font-medium text-gray-600">Efficiency</p>
                  <p className="text-2xl font-bold text-gray-900>{metrics.efficiency}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Fleet */}
          <div className=bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200>
              <h2 className=text-lg font-semibold text-gray-900">Vehicle Fleet</h2>
            </div>
            <div className="p-6>
              {loading ? (
                <div className=text-center py-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800>
                    <div className=animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    Loading fleet data...
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>
                  {vehicles.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className=border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedVehicle(vehicle)}
                    >
                      <div className="flex items-start justify-between mb-3>
                        <div className=flex items-center space-x-2">
                          <span className="text-2xl>{getTypeIcon(vehicle.type)}</span>
                          <div>
                            <h3 className=font-semibold text-gray-900">{vehicle.name}</h3>
                            <p className="text-sm text-gray-500 capitalize>{vehicle.type}</p>
                          </div>
                        </div>
                        <span className={`w-3 h-3 rounded-full ${getStatusColor(vehicle.status)}`}></span>
                      </div>

                      <div className=space-y-2">
                        <div className="flex justify-between text-sm>
                          <span className=text-gray-600">Location:</span>
                          <span className="text-gray-900>{vehicle.location}</span>
                        </div>
                        <div className=flex justify-between text-sm">
                          <span className="text-gray-600>Battery:</span>
                          <span className=text-gray-900">{vehicle.battery}%</span>
                        </div>
                        <div className="flex justify-between text-sm>
                          <span className=text-gray-600">Speed:</span>
                          <span className="text-gray-900>{vehicle.speed} mph</span>
                        </div>
                        {vehicle.destination && (
                          <div className=flex justify-between text-sm">
                            <span className="text-gray-600>Destination:</span>
                            <span className=text-gray-900">{vehicle.destination}</span>
                          </div>
                        )}
                        {vehicle.eta && (
                          <div className="flex justify-between text-sm>
                            <span className=text-gray-600">ETA:</span>
                            <span className="text-gray-900>{vehicle.eta}</span>
                          </div>
                        )}
                      </div>

                      <div className=mt-4 pt-3 border-t border-gray-200">
                        <div className="flex items-center justify-between>
                          <span className=text-xs text-gray-500 capitalize">{vehicle.status}</span>
                          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Details Modal */}
          {selectedVehicle && (
            <div className=fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-md w-full p-6>
                <div className=flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900>Vehicle Details</h3>
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className=text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4>
                  <div className=flex items-center space-x-3">
                    <span className="text-3xl>{getTypeIcon(selectedVehicle.type)}</span>
                    <div>
                      <h4 className=font-semibold text-gray-900">{selectedVehicle.name}</h4>
                      <p className="text-sm text-gray-500 capitalize>{selectedVehicle.type}</p>
                    </div>
                  </div>
                  <div className=grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600>Status:</span>
                      <p className=font-medium capitalize">{selectedVehicle.status}</p>
                    </div>
                    <div>
                      <span className="text-gray-600>Location:</span>
                      <p className=font-medium">{selectedVehicle.location}</p>
                    </div>
                    <div>
                      <span className="text-gray-600>Battery:</span>
                      <p className=font-medium">{selectedVehicle.battery}%</p>
                    </div>
                    <div>
                      <span className="text-gray-600>Speed:</span>
                      <p className=font-medium">{selectedVehicle.speed} mph</p>
                    </div>
                  </div>
                  {selectedVehicle.destination && (
                    <div className="pt-4 border-t border-gray-200>
                      <span className=text-gray-600 text-sm">Destination:</span>
                      <p className="font-medium>{selectedVehicle.destination}</p>
                      {selectedVehicle.eta && (
                        <p className=text-sm text-gray-500">ETA: {selectedVehicle.eta}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIAutonomousVehicleTransportationPage;