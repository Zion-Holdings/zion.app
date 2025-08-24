<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
=======
import React from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
  children: React.ReactNode;
  className?: string;
}

<<<<<<< HEAD
export function Tabs({ value, onValueChange, children, className = '' }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-zion-blue-dark/50 p-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ 
  value, 
  children, 
  className = '' 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  
  const isActive = context.value === value;
  
  return (
    <button
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium 
        transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan 
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        ${isActive 
          ? 'bg-zion-blue text-white shadow-sm' 
          : 'text-zion-slate-light hover:text-white hover:bg-zion-blue/20'
        }
        ${className}
      `}
      onClick={() => context.onValueChange(value)}
=======
interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children, className }) => {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className, disabled }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      disabled={disabled}
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
    >
      {children}
    </button>
  );
<<<<<<< HEAD
}

export function TabsContent({ 
  value, 
  children, 
  className = '' 
}: { 
  value: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');
  
  if (context.value !== value) return null;
  
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2 ${className}`}>
      {children}
    </div>
  );
}
=======
};

export const TabsContent: React.FC<TabsContentProps> = ({ value, children, className }) => {
  return (
    <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>
      {children}
    </div>
  );
};
>>>>>>> 0b9a118024123a3c2f448bf2a162454cb5d4ae95
