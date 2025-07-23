import type { ComponentType } from react';;
interface DynamicOptions {
  ssr?: boolean;
  loading?: ComponentType<unknown>;
}
;
default function dynamic<T extends ComponentType<unknown>>(
  importer: () => Promise<{ default: T }>,
  options?: DynamicOptions
): ComponentType<unknown>;
