export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  category?: string;
  status?: 'active' | 'beta' | 'development';
  children?: NavigationItem[];
  priority?: number;
  isExternal?: boolean;
  description?: string;
  technologyStack?: string[];
  pricing?: string;
  performance?: {
    uptime?: string;
    response?: string;
    users?: string;
  };
  lastUpdated?: string;
}

export interface NavigationCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  serviceCount: number;
  icon?: string;
  color?: string;
}

export interface NavigationConfig {
  header: NavigationItem[];
  footer: NavigationItem[];
  sidebar: NavigationItem[];
  services: NavigationItem[];
  categories: NavigationCategory[];
  pages: NavigationItem[];
  importantLinks: NavigationItem[];
}

export interface UserNavigationPreferences {
  userId?: string;
  favoriteServices: string[];
  recentPages: string[];
  navigationLayout: 'compact' | 'detailed' | 'minimal';
  showBetaServices: boolean;
  showDevelopmentServices: boolean;
}

export interface NavigationContext {
  pageType: 'home' | 'service' | 'category' | 'dashboard' | 'search' | 'explore';
  currentService?: string;
  currentCategory?: string;
  userRole?: 'guest' | 'user' | 'admin';
}