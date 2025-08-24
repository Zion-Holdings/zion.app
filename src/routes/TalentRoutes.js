import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import TalentDirectory from '@/pages/TalentDirectory';
import TalentsPage from '@/pages/TalentsPage';
export default function TalentRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "directory", element: _jsx(TalentDirectory, {}) }), _jsx(Route, { path: "list", element: _jsx(TalentsPage, {}) })] }));
}
