// Router components removed - convert to Next.js pages structure
import MobileAppPage from "@/pages/MobileAppPage";
import MobileLaunchPage from "@/pages/MobileLaunchPage";
import OpenAppRedirect from "@/pages/OpenAppRedirect";
import { MobileHome } from "@/mobile/pages/MobileHome";
import { MobileBrowse } from "@/mobile/pages/MobileBrowse";
import { MobileProjects } from "@/mobile/pages/MobileProjects";
import { MobileMessages } from "@/mobile/pages/MobileMessages";
import { MobileJobPost } from "@/mobile/pages/MobileJobPost";
import { MobileResumeBuilder } from "@/mobile/pages/MobileResumeBuilder";
import { MobileOnboarding } from "@/mobile/pages/MobileOnboarding";

const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path="/mobile" element={<MobileHome />} />
      <Route path="/mobile/marketplace" element={<MobileBrowse />} />
      <Route path="/mobile/community" element={<MobileMessages />} />
      <Route path="/mobile/projects" element={<MobileProjects />} />
      <Route path="/mobile/job-post" element={<MobileJobPost />} />
      <Route path="/mobile/resume-builder" element={<MobileResumeBuilder />} />
      <Route path="/mobile/onboarding" element={<MobileOnboarding />} />
      <Route path="/download" element={<MobileAppPage />} />
      <Route path="/mobile-app" element={<MobileAppPage />} />
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />
      <Route path="/open-app" element={<OpenAppRedirect />} />
    </Routes>
  );
};

export default MobileAppRoutes;