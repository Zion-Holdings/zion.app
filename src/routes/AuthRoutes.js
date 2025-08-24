import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
export default function AuthRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "login", element: _jsx(Login, {}) }), _jsx(Route, { path: "signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "forgot-password", element: _jsx(ForgotPassword, {}) })] }));
}
