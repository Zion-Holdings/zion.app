// Helper function to generate IDs;
const generateId = (label: string) => {
  return label.toLowerCase().replace(/[^\w]+/g, '-');'
};
;
const GenesisPage: React.FC = () => {
  const autoDeployModules = [
    "/marketplace (Jobs, Talent, Quotes)","
    "/gpt (ZionGPT Core + Prompt Router)","
    "/academy (Courses, AI Tutors, Certification)","
    "/token (ZION$ economy, escrow, staking)","
    "/dao (Voting, Proposals, Governance Constitution)","
    "/nation-builder (Multiverse + Digital Country Creator)","
    "/launch-kit (Media, Press, Legal)","
    "/book-builder (Founder Story + System Manifesto)","
    "/roadmap + /whitepaper (Public docs)","
    "/api-docs + /wiki (Public & partner dev guides)","
    "/zion-brain (Auto-agent monitor + reflex logic)""