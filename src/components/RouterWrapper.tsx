import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function RouterWrapper({ children }: Props) {
  return <>{children}</>;
}
