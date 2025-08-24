import { useState, useEffect } from 'react';
export function useTenantAdminStatus(tenantId) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!tenantId) {
            setIsAdmin(false);
            setIsLoading(false);
            return;
        }
        // Simulate API call to check tenant admin status
        const checkAdminStatus = async () => {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));
                // For demo purposes, assume user is admin if tenantId exists
                setIsAdmin(true);
            }
            catch (error) {
                setIsAdmin(false);
            }
            finally {
                setIsLoading(false);
            }
        };
        checkAdminStatus();
    }, [tenantId]);
    return { isAdmin, isLoading };
}
