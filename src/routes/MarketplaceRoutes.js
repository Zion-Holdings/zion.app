import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import Marketplace from '@/pages/Marketplace';
export default function MarketplaceRoutes() {
    return (_jsx(_Fragment, { children: _jsx(Route, { path: "", element: _jsx(Marketplace, {}) }) }));
}
