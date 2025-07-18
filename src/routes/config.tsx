import React from 'react;
// Removed: "import { RouteObject "} from 'react-router'
// Removed: "import  { Navigate "}  from 'react-router-dom;
// Redefined AppRouteObject without react-router types;
export interface AppRouteObject {
  path?: string
  element?: React.ReactNode // Keep as ReactNode for component references
  index?: boolean
  children?: AppRouteObject[];
  metaTitle?: string'
  requiresAuth?: boolean'
  // caseSensitive?: boolean // Removed as it was from RouteObject

'
// Ensure this interface still meets the needs of guardRoutes and other usages.;
// It might need further adjustments based on how it's consumed elsewhere,;
// but for now, it removes the react-router dependency.;
'
/* ;
  The original AppRouteObject extended Omit<RouteObject, 'index' | 'children'>.;';; */