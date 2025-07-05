import type { ComponentType } from 'react';

export interface DynamicOptions {
  ssr?: boolean;
  loading?: ComponentType<any>;
}

export default function dynamic<T extends ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
  options?: DynamicOptions
): ComponentType<any>;
