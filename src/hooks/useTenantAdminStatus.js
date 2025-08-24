import { useState, useEffect } from 'react';
export const useTenantAdminStatus = (tenantId) => {
    const [status, setStatus] = useState({
        isAdmin: false,
        isLoading: true,
    });
    useEffect(() => {
        // In a real app, you would check the user's tenant admin status
        const checkTenantAdminStatus = async () => {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 100));
                setStatus({
                    isAdmin: false, // Default to false for now
                    isLoading: false,
                });
            }
            catch (error) {
                console.error('Error checking tenant admin status:', error);
                setStatus({
                    isAdmin: false,
                    isLoading: false,
                });
            }
        };
        checkTenantAdminStatus();
    }, [tenantId]);
    return status;
};
