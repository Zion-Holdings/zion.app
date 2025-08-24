import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const WhitelabelContext = createContext(undefined);
export function WhitelabelProvider({ children }) {
    const [isWhitelabel] = useState(false); // Set to true for white-label instances
    const [primaryColor, setPrimaryColor] = useState('#8B5CF6'); // Default Zion purple
    const [brandName, setBrandName] = useState('Zion Tech Group');
    const [logo, setLogo] = useState('');
    const [tenant] = useState({
        id: 'zion-tech-group',
        name: 'Zion Tech Group',
        domain: 'ziontechgroup.com'
    });
    const value = {
        isWhitelabel,
        primaryColor,
        setPrimaryColor,
        brandName,
        setBrandName,
        logo,
        setLogo,
        tenant,
    };
    return (_jsx(WhitelabelContext.Provider, { value: value, children: children }));
}
export function useWhitelabel() {
    const context = useContext(WhitelabelContext);
    if (context === undefined) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
}
