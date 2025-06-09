import { Route, Routes } from 'react-router-dom';
import GenesisDeployPage from '@/pages/deploy/GenesisDeployPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';

const DeployRoutes = () => (
  <Routes>
    <Route
      path="/deploy/genesis"
      element={
        <ProtectedRoute> {/* Or remove ProtectedRoute if not needed */}
          <GenesisDeployPage />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default DeployRoutes;
