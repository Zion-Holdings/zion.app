import { Route, Routes } from 'react-router-dom';
import GovernancePage from '@/pages/governance';
import CreateProposalPage from '@/pages/governance/create';
import ProposalDetailPage from '@/pages/governance/[proposalId]';
import MyVotesPage from '@/pages/governance/my-votes';
import ZgpLibraryPage from '@/pages/governance/zgp-library';

const GovernanceRoutes = () => (
  <Routes>
    <Route path="/governance" element={<GovernancePage />} />
    <Route path="/governance/create" element={<CreateProposalPage />} />
    <Route path="/governance/zgp-library" element={<ZgpLibraryPage />} />
    <Route path="/dao/templates" element={<ZgpLibraryPage />} />
    <Route path="/governance/my-votes" element={<MyVotesPage />} />
    <Route path="/governance/:proposalId" element={<ProposalDetailPage />} />
  </Routes>
);

export default GovernanceRoutes;
