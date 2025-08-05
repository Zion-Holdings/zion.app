import React from "react";
import { NextPage } from 'next';
import Head from "next/head";
import Link from "next/link";
import PageLayout from '../components/layout/PageLayout';
import {
  Car,
  MapPin,
  Clock,
  Users,
  Zap,
  Shield,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

interface AutonomousVehicle {
  id: string;
  name: string;
  type: 'passenger' | 'cargo' | 'emergency' | 'delivery';
  status: 'active' | 'maintenance' | 'offline' | 'charging';
  battery: number;
  location: string;
  lastUpdate: string;
  capacity: number;
}

interface TransportRoute {
  id: string;
  origin: string;
  destination: string;
  vehicleId: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  estimatedTime: string;
  actualTime?: string;
  distance: number;
  passengers: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

const AIPoweredAutonomousVehicleTransportationPage: NextPage = () => {
  const [vehicles, setVehicles] = React.useState<AutonomousVehicle[]>([
    {
      id: 'vehicle-001',
      name: 'AutoCar-1',
      type: 'passenger',
      status: 'active',
      battery: 78,
      location: 'Downtown Hub',
      lastUpdate: '1 min ago',
      capacity: 4
    },
    {
      id: 'vehicle-002',
      name: 'CargoBot-2',
      type: 'cargo',
      status: 'active',
      battery: 65,
      location: 'Industrial Zone',
      lastUpdate: '3 min ago',
      capacity: 8
    },
    {
      id: 'vehicle-003',
      name: 'Emergency-1',
      type: 'emergency',
      status: 'active',
      battery: 92,
      location: 'Emergency Center',
      lastUpdate: '5 min ago',
      capacity: 2
    }
  ]);

  const [routes, setRoutes] = React.useState<TransportRoute[]>([
    {
      id: 'route-001',
      origin: 'Downtown Hub',
      destination: 'Airport Terminal',
      vehicleId: 'vehicle-001',
      status: 'in-progress',
      estimatedTime: '25 min',
      distance: 18.5,
      passengers: 3,
      priority: 'high'
    },
    {
      id: 'route-002',
      origin: 'Industrial Zone',
      destination: 'Warehouse District',
      vehicleId: 'vehicle-002',
      status: 'scheduled',
      estimatedTime: '35 min',
      distance: 22.3,
      passengers: 0,
      priority: 'medium'
    }
  ]);

  const [analytics, setAnalytics] = React.useState({
    totalVehicles: 25,
    activeRoutes: 12,
    completedToday: 89,
    averageTripTime: 28,
    safetyScore: 99.8
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'offline': return 'bg-red-500';
      case 'charging': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'urgent': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getBatteryColor = (battery: number) => {
    if (battery >= 80) return 'text-green-600';
    if (battery >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <PageLayout>
      <Head>
        <title>AI-Powered Autonomous Vehicle Transportation - Bolt.new</title>
        <meta name="description" content="Advanced AI-powered autonomous vehicle transportation system for safe and efficient passenger and cargo transport." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Autonomous Vehicle Transportation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Revolutionizing transportation with intelligent autonomous vehicles powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Ride
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Track Vehicle
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Vehicles</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.totalVehicles}</p>
                  </div>
                  <Car className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Routes</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.activeRoutes}</p>
                  </div>
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed Today</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.completedToday}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Trip Time</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.averageTripTime} min</p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Safety Score</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.safetyScore}%</p>
                  </div>
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Vehicle Fleet */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Vehicle Fleet Status</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Battery</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {vehicles.map((vehicle) => (
                      <tr key={vehicle.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vehicle.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{vehicle.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
                            {vehicle.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-sm font-medium ${getBatteryColor(vehicle.battery)}`}>
                            {vehicle.battery}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.capacity} seats</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.lastUpdate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transport Routes */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Active Transport Routes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origin</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passengers</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {routes.map((route) => (
                      <tr key={route.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{route.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.origin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.destination}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(route.status)}`}>
                            {route.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(route.priority)}`}>
                            {route.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.passengers}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.estimatedTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AIPoweredAutonomousVehicleTransportationPage;