import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const WhitelabelContext = createContext({
    isWhitelabel: false,
    primaryColor: '#22ddd2', // Default Zion cyan
});
export const useWhitelabel = () => {
    const context = useContext(WhitelabelContext);
    if (context === undefined) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
};
export const WhitelabelProvider = ({ children }) => {
    const value = {
        isWhitelabel: false,
        primaryColor: '#22ddd2',
    };
    return (_jsx(WhitelabelContext.Provider, { value: value, children: children }));
};
