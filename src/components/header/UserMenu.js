import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { User, LogOut, Settings, UserPlus } from 'lucide-react';
export function UserMenu() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = async () => {
        try {
            await logout();
            setIsOpen(false);
        }
        catch (error) {
            console.error('Logout failed:', error);
        }
    };
    if (!user) {
        return (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Link, { to: "/login", children: _jsx(Button, { variant: "ghost", size: "sm", className: "text-zion-cyan hover:bg-zion-cyan/10", children: "Sign In" }) }), _jsx(Link, { to: "/signup", children: _jsxs(Button, { size: "sm", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: [_jsx(UserPlus, { className: "w-4 h-4 mr-2" }), "Sign Up"] }) })] }));
    }
    return (_jsxs("div", { className: "relative", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsOpen(!isOpen), className: "text-zion-cyan hover:bg-zion-cyan/10", "aria-expanded": isOpen, "aria-label": "User menu", children: [_jsx(User, { className: "w-4 h-4 mr-2" }), user.name || user.email] }), isOpen && (_jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50", children: [_jsxs(Link, { to: "/dashboard", className: "flex items-center px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors", onClick: () => setIsOpen(false), children: [_jsx(Settings, { className: "w-4 h-4 mr-3" }), "Dashboard"] }), _jsxs("button", { onClick: handleLogout, className: "flex items-center w-full px-4 py-2 text-zion-slate-light hover:bg-zion-blue hover:text-white transition-colors", children: [_jsx(LogOut, { className: "w-4 h-4 mr-3" }), "Sign Out"] })] }))] }));
}
