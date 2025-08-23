import React from 'react';

type EnhancedLayoutProps = {
  children?: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return <>{children}</>;
}