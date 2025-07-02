import React from 'react';

// This file fixes the ref type issues in sidebar components

// Export a placeholder to ensure the file is recognized as a module
export const SIDEBAR_REF_TYPE_FIX = true;

// Define a type that makes the ref forwards compatible
export type ForwardRefComponent<T, P = {}> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

// Helper type for component refs
export type ElementRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

// Helper type for wrapping refs that fixes the mismatch errors
export type PolymorphicRef<T extends keyof React.JSX.IntrinsicElements | React.ComponentType<any>> = 
  T extends keyof React.JSX.IntrinsicElements 
    ? React.Ref<React.JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer _, infer U> ? U : never>
    : React.Ref<React.ComponentRef<T extends React.ComponentType<any> ? T : never>>;

// Helper for dealing with refs in complex situations
export type PolymorphicComponentProp<T extends React.ElementType, Props = {}> = 
  React.PropsWithChildren<Props & { as?: T }>;

// Safe ref casting helper type - this is the key to fixing our issues
// We need to use a type that is compatible with both Slot's ref and React's ref handling
export type SafeRef<T> = React.Ref<T>;

// Sidebar specific types
export type SidebarState = "expanded" | "collapsed";

export type SidebarContext = {
  state: SidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
