import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTenantAdminStatus } from '@/hooks/useTenantAdminStatus';
import { useWhitelabel } from '@/hooks/useWhitelabel';
export const ProtectedRoute = ({ children, adminOnly = false, tenantAdminAllowed = false, requiredUserType }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    const { tenant } = useWhitelabel();
    const { isAdmin: isTenantAdmin, isLoading: isCheckingTenantAdmin } = useTenantAdminStatus(tenant === null || tenant === void 0 ? void 0 : tenant.id);
    const isCheckingPermissions = isLoading || isCheckingTenantAdmin;
    // Show loading state if auth or tenant admin status is still being checked
    if (isCheckingPermissions) {
        return _jsx("div", { className: "flex h-screen w-full items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan" }) });
    }
    // Redirect to login if not authenticated
    if (!user) {
        const next = encodeURIComponent(location.pathname + location.search);
        return _jsx(Navigate, { to: `/login?next=${next}` });
    }
    // Check for admin access if required
    if (adminOnly) {
        const hasAdminAccess = user.userType === 'admin' || user.role === 'admin' || (tenantAdminAllowed && isTenantAdmin);
        if (!hasAdminAccess) {
            return _jsx(Navigate, { to: "/unauthorized" });
        }
    }
    // Check for specific user type if required
    if (requiredUserType && user.userType !== requiredUserType) {
        return _jsx(Navigate, { to: "/unauthorized" });
    }
    return _jsx(_Fragment, { children: children });
};
export default ProtectedRoute;
