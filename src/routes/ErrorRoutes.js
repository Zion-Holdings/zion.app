import { jsx as _jsx } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
export default function ErrorRoutes() {
    return (_jsx(Route, { path: "*", element: _jsx(NotFound, {}) }));
}
