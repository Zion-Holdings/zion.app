import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import Analytics from '@/pages/Analytics';
export default function AdminRoutes() {
    return (_jsx(_Fragment, { children: _jsx(Route, { path: "analytics", element: _jsx(Analytics, {}) }) }));
}
