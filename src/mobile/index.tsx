
import React from 'react';
import { MobileApp } from './MobileApp';

export { MobileApp };

// Export all mobile components for potential reuse in other projects
export * from './components/common/BottomNavigation';
export * from './components/common/MobileHeader';
export * from './components/dashboard/ClientDashboard';
export * from './components/dashboard/TalentDashboard';
export * from './components/messaging/MobileChatView';
export * from './components/messaging/MobileConversationList';
export * from './components/browse/BrowseCards';
export * from './components/browse/BrowseFilters';
export * from './components/projects/MobileProjectView';
export * from './theme/MobileThemeProvider';

// Export all mobile pages
export * from './pages/MobileOnboarding';
export * from './pages/MobileHome';
export * from './pages/MobileBrowse';
export * from './pages/MobileProjects';
export * from './pages/MobileMessages';
export * from './pages/MobileResumeBuilder';
export * from './pages/MobileJobPost';
