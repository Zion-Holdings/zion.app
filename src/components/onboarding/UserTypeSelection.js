import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Users, Briefcase, Building } from 'lucide-react';
export const UserTypeSelection = ({ onSelect }) => {
    const userTypes = [
        {
            type: 'serviceProvider',
            title: 'Service Provider',
            description: 'I offer technology services and solutions',
            icon: _jsx(Briefcase, { className: "w-8 h-8" }),
            color: 'from-blue-500 to-blue-600'
        },
        {
            type: 'talent',
            title: 'Talent',
            description: 'I\'m looking for job opportunities',
            icon: _jsx(Users, { className: "w-8 h-8" }),
            color: 'from-green-500 to-green-600'
        },
        {
            type: 'client',
            title: 'Client',
            description: 'I need technology services',
            icon: _jsx(Building, { className: "w-8 h-8" }),
            color: 'from-purple-500 to-purple-600'
        }
    ];
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Choose Your Path" }), _jsx("p", { className: "text-lg text-gray-600", children: "Select how you'd like to use Zion Tech Group" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: userTypes.map((userType) => (_jsxs(Card, { className: "hover:shadow-lg transition-shadow duration-200", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${userType.color} rounded-full mb-4`, children: _jsx("div", { className: "text-white", children: userType.icon }) }), _jsx(CardTitle, { className: "text-xl", children: userType.title })] }), _jsxs(CardContent, { className: "text-center", children: [_jsx("p", { className: "text-gray-600 mb-6", children: userType.description }), _jsxs(Button, { onClick: () => onSelect(userType.type), className: "w-full bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-blue-dark hover:to-zion-blue text-white", children: ["Continue as ", userType.title] })] })] }, userType.type))) })] }));
};
