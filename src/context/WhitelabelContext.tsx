// Simple whitelabel context without React context
export interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
}

export function useWhitelabel(): WhitelabelContextType {
  return {
    isWhitelabel: false,
    primaryColor: '#00ffff'
  };
}