import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const defaultWhitelabelContext = {
    isWhitelabel: false,
    brandName: 'Zion Tech Group',
    brandLogo: '/logo.png',
    primaryColor: '#3B82F6'
};
const WhitelabelContext = createContext(defaultWhitelabelContext);
export const useWhitelabel = () => {
    const context = useContext(WhitelabelContext);
    if (!context) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
};
export const WhitelabelProvider = ({ children, value = {} }) => {
    const contextValue = Object.assign(Object.assign({}, defaultWhitelabelContext), value);
    return (_jsx(WhitelabelContext.Provider, { value: contextValue, children: children }));
};
