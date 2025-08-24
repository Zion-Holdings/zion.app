export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted';

export type ProposalIndexItem = {
  id: string;
  title: string;
  targetInstitution: string;
  regionalScope: string;
  type: string;
  status: ProposalStatus;
  createdAt: string;
};