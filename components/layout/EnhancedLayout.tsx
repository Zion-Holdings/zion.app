import type { ReactNode } from 'react';

type Props = { children?: ReactNode };

export default function EnhancedLayout({ children }: Props) {
  return <>{children}</>;
}


