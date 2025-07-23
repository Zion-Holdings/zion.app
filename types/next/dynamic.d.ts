import type { ComponentType } from react';;
export ;interface DynamicOptions {
  ssr?: boolean;
  loading?: ComponentType<unknown>;
}
;
export ;default function dynamic<T extends ComponentType<unknown>>(
  importer: () => Promise<{ default: T }>,
  options?: DynamicOptions
): ComponentType<unknown>;
