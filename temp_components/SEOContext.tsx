import React, { createContext, useContext, MutableRefObject } from 'react';

export interface SEOContextValue {
  renderedRef: MutableRefObject<boolean>;
}

export const SEOContext = createContext<SEOContextValue | null>(null);

export function useSEOContext(): SEOContextValue | null {
  return useContext(SEOContext);
}