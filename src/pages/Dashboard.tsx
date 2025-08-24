import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Settings, 
  Bell, 
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Eye,
  Download,
  Share2
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      changeType: "positive",
      icon: <DollarSign className="h-8 w-8" />
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      changeType: "positive",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+2.1%",
      changeType: "positive",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Avg. Response Time",
      value: "2.4h",
      change: "-15.3%",
      changeType: "negative",
      icon: <Clock className="h-8 w-8" />
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "service_created",
      title: "AI Content Generation Service",
      description: "New micro SAAS service created",
      time: "2 hours ago",
      status: "active"
    },
    {
      id: 2,
      type: "user_registered",
      title: "Sarah Chen",
      description: "New user registration",
      time: "4 hours ago",
      status: "completed"
    },
    {
      id: 3,
      type: "payment_received",
      title: "Enterprise Plan Subscription",
      description: "Payment received from TechCorp Inc.",
      time: "6 hours ago",
      status: "completed"
    },
    {
      id: 4,
      type: "support_ticket",
      title: "API Integration Issue",
      description: "New support ticket opened",
      time: "8 hours ago",
      status: "pending"
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "Review Q4 Analytics Report",
      dueDate: "Today",
      priority: "high",
      category: "Analytics"
    },
    {
      id: 2,
      title: "Update Service Pricing",
      dueDate: "Tomorrow",
      priority: "medium",
      category: "Business"
    },
    {
      id: 3,
      title: "Client Meeting - TechStart Inc.",
      dueDate: "Dec 20",
      priority: "high",
      category: "Sales"
    },
    {
      id: 4,
      title: "System Maintenance",
      dueDate: "Dec 22",
      priority: "low",
      category: "IT"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-zion-slate-light">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-zion-cyan">
                    {stat.icon}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${
                      stat.changeType === 'positive' 
                        ? 'text-green-400 border-green-500/30' 
                        : 'text-red-400 border-red-500/30'
                    }`}
                  >
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-zion-slate-light text-sm">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Recent Activities</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Latest updates from your business
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="mt-1">
                        {getStatusIcon(activity.status)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{activity.title}</h4>
                        <p className="text-zion-slate-light text-sm mb-2">{activity.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-zion-slate-light text-xs">{activity.time}</span>
                          <Badge 
                            variant="outline" 
                            className={`${
                              activity.status === 'active' 
                                ? 'text-green-400 border-green-500/30' 
                                : activity.status === 'completed'
                                ? 'text-blue-400 border-blue-500/30'
                                : 'text-yellow-400 border-yellow-500/30'
                            }`}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Tasks */}
          <div>
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Tasks</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Tasks due soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-medium text-sm line-clamp-2">{task.title}</h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(task.priority)}`}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zion-slate-light">{task.category}</span>
                        <span className="text-zion-cyan">{task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  View All Tasks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="text-sm">Add User</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  <span className="text-sm">View Reports</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <Settings className="h-6 w-6 mb-2" />
                  <span className="text-sm">Settings</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <Download className="h-6 w-6 mb-2" />
                  <span className="text-sm">Export Data</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;