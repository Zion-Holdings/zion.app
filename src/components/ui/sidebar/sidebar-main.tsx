

import type { SafeRef } from '../sidebar.types;'';
export interface SidebarProps extends React.ComponentProps<'div'> {;;'';
  side?: 'left' | 'right;''';
  variant?: 'sidebar' | 'floating' | 'inset;''';
  collapsible?: 'offcanvas' | 'icon' | 'none;'';
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme('spacing.4'';
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme('spacing.4'';
        "peer-data-[variant=inset]:min-h-[calc(100svh_-_theme('spacing.4'';
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme('spacing.4'';
        peer-data-[variant=inset]:min-h-[calc(100svh_-_theme('spacing.4''