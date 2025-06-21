import React from "react";
import DeveloperPortal from "@/pages/DeveloperPortal";
// Router components removed - convert to Next.js pages structure
import ApiDocsHub from "@/pages/ApiDocsHub";
import ApiReference from "@/pages/ApiReference";
import ApiGettingStarted from "@/pages/ApiGettingStarted";
import ApiWebhooks from "@/pages/ApiWebhooks";
import ApiSampleCode from "@/pages/ApiSampleCode";
import ApiErrorCodes from "@/pages/ApiErrorCodes";

export default function DeveloperRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate href="portal" replace />} />
      <Route path="portal" element={<DeveloperPortal />} />
      <Route path="docs" element={<ApiDocsHub />} />
      <Route path="docs/getting-started" element={<ApiGettingStarted />} />
      <Route path="docs/reference" element={<ApiReference />} />
      <Route path="docs/webhooks" element={<ApiWebhooks />} />
      <Route path="docs/samples" element={<ApiSampleCode />} />
      <Route path="docs/errors" element={<ApiErrorCodes />} />
    </Routes>
  );
}