import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { TrendingUp, Users, Briefcase, ShoppingCart, DollarSign, Activity, ArrowUpRight, ArrowDownRight, Calendar, Bell, Settings, BarChart3, PieChart, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
export function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const metrics = [
        {
            title: 'Total Revenue',
            value: '$124,563',
            change: 12.5,
            changeType: 'increase',
            icon: DollarSign,
            color: 'text-green-600'
        },
        {
            title: 'Active Users',
            value: '2,847',
            change: 8.2,
            changeType: 'increase',
            icon: Users,
            color: 'text-blue-600'
        },
        {
            title: 'Services Delivered',
            value: '156',
            change: -2.1,
            changeType: 'decrease',
            icon: Briefcase,
            color: 'text-purple-600'
        },
        {
            title: 'Equipment Sales',
            value: '89',
            change: 15.3,
            changeType: 'increase',
            icon: ShoppingCart,
            color: 'text-orange-600'
        }
    ];
    const recentActivities = [
        {
            id: '1',
            type: 'service',
            title: 'AI Infrastructure Setup',
            description: 'Completed for TechCorp Inc.',
            time: '2 hours ago',
            status: 'completed'
        },
        {
            id: '2',
            type: 'talent',
            title: 'New Talent Hired',
            description: 'Senior AI Engineer - Sarah Chen',
            time: '4 hours ago',
            status: 'completed'
        },
        {
            id: '3',
            type: 'equipment',
            title: 'GPU Server Order',
            description: 'High-performance server for ML workloads',
            time: '6 hours ago',
            status: 'pending'
        },
        {
            id: '4',
            type: 'notification',
            title: 'System Update',
            description: 'Security patch applied successfully',
            time: '8 hours ago',
            status: 'completed'
        }
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case 'service':
                return _jsx(Briefcase, { className: "h-4 w-4" });
            case 'talent':
                return _jsx(Users, { className: "h-4 w-4" });
            case 'equipment':
                return _jsx(ShoppingCart, { className: "h-4 w-4" });
            case 'notification':
                return _jsx(Bell, { className: "h-4 w-4" });
            default:
                return _jsx(Activity, { className: "h-4 w-4" });
        }
    };
    return (_jsxs("div", { className: "p-6 bg-gray-50 min-h-screen", children: [_jsx("div", { className: "mb-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Dashboard" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Welcome back! Here's what's happening with your business." })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Calendar, { className: "h-4 w-4 mr-2" }), "Last 30 Days"] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Settings, { className: "h-4 w-4 mr-2" }), "Settings"] })] })] }) }), _jsx("div", { className: "mb-6", children: _jsx("div", { className: "border-b border-gray-200", children: _jsx("nav", { className: "-mb-px flex space-x-8", children: [
                            { key: 'overview', label: 'Overview', icon: BarChart3 },
                            { key: 'analytics', label: 'Analytics', icon: LineChart },
                            { key: 'reports', label: 'Reports', icon: PieChart }
                        ].map(tab => (_jsxs("button", { onClick: () => setActiveTab(tab.key), className: `py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${activeTab === tab.key
                                ? 'border-zion-blue text-zion-blue'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`, children: [_jsx(tab.icon, { className: "h-4 w-4" }), _jsx("span", { children: tab.label })] }, tab.key))) }) }) }), activeTab === 'overview' && (_jsxs(_Fragment, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: metrics.map((metric, index) => (_jsx(Card, { className: "hover:shadow-lg transition-shadow", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: metric.title }), _jsx("p", { className: "text-2xl font-bold text-gray-900 mt-1", children: metric.value })] }), _jsx("div", { className: `p-3 rounded-full bg-gray-100 ${metric.color}`, children: _jsx(metric.icon, { className: "h-6 w-6" }) })] }), _jsxs("div", { className: "flex items-center mt-4", children: [metric.changeType === 'increase' ? (_jsx(ArrowUpRight, { className: "h-4 w-4 text-green-600 mr-1" })) : (_jsx(ArrowDownRight, { className: "h-4 w-4 text-red-600 mr-1" })), _jsxs("span", { className: `text-sm font-medium ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`, children: [metric.change, "%"] }), _jsx("span", { className: "text-sm text-gray-500 ml-1", children: "from last month" })] })] }) }, index))) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(TrendingUp, { className: "h-5 w-5 text-zion-blue" }), _jsx("span", { children: "Revenue Trend" })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "h-64 bg-gray-100 rounded-lg flex items-center justify-center", children: _jsxs("div", { className: "text-center text-gray-500", children: [_jsx(BarChart3, { className: "h-12 w-12 mx-auto mb-2" }), _jsx("p", { children: "Revenue Chart" }), _jsx("p", { className: "text-sm", children: "Interactive chart would be rendered here" })] }) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Users, { className: "h-5 w-5 text-zion-blue" }), _jsx("span", { children: "User Growth" })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "h-64 bg-gray-100 rounded-lg flex items-center justify-center", children: _jsxs("div", { className: "text-center text-gray-500", children: [_jsx(LineChart, { className: "h-12 w-12 mx-auto mb-2" }), _jsx("p", { children: "User Growth Chart" }), _jsx("p", { className: "text-sm", children: "Interactive chart would be rendered here" })] }) }) })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Activity, { className: "h-5 w-5 text-zion-blue" }), _jsx("span", { children: "Recent Activity" })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: recentActivities.map(activity => (_jsxs("div", { className: "flex items-center space-x-4 p-4 bg-gray-50 rounded-lg", children: [_jsx("div", { className: "p-2 bg-white rounded-lg shadow-sm", children: getTypeIcon(activity.type) }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-medium text-gray-900", children: activity.title }), _jsx("p", { className: "text-sm text-gray-600", children: activity.description })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Badge, { className: getStatusColor(activity.status), children: activity.status }), _jsx("span", { className: "text-sm text-gray-500", children: activity.time })] })] }, activity.id))) }) })] })] })), activeTab === 'analytics' && (_jsxs("div", { className: "text-center py-12", children: [_jsx(BarChart3, { className: "h-16 w-16 text-gray-400 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Analytics Dashboard" }), _jsx("p", { className: "text-gray-600", children: "Advanced analytics and insights would be displayed here." })] })), activeTab === 'reports' && (_jsxs("div", { className: "text-center py-12", children: [_jsx(PieChart, { className: "h-16 w-16 text-gray-400 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Reports & Insights" }), _jsx("p", { className: "text-gray-600", children: "Detailed reports and business insights would be displayed here." })] }))] }));
}
