import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import ClientDashboard from '@/pages/ClientDashboard';
import TalentDashboard from '@/pages/TalentDashboard';
export default function DashboardRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "client", element: _jsx(ClientDashboard, {}) }), _jsx(Route, { path: "talent", element: _jsx(TalentDashboard, {}) })] }));
}
