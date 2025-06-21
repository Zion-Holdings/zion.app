import { Fragment } from "react";
import EnterprisePlans from "@/pages/EnterprisePlans";
// Router components removed - convert to Next.js pages structure
import EnterpriseAdmin from "@/pages/EnterpriseAdmin";
import CompanyWorkspace from "@/pages/CompanyWorkspace";
import EnterpriseBilling from "@/pages/EnterpriseBilling";

const EnterpriseRoutes = () => {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
      
    </Routes>
  );
};

export default EnterpriseRoutes;