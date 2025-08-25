import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ErrorBoundary } from './components/ErrorBoundary';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));
// Newly added service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));

// Our enhanced service pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));
const InnovativeNewServices = lazy(() => import('./pages/services/InnovativeNewServices'));
const SpecializedITInfrastructure = lazy(() => import('./pages/services/SpecializedITInfrastructure'));

// Solutions pages
const EnterpriseSolutions = lazy(() => import('./pages/solutions/Enterprise'));
const HealthcareSolutions = lazy(() => import('./pages/solutions/Healthcare'));

// Missing pages that were causing 404 errors
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/services/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/services/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/services/AIPoweredITAssetManagement'));
const AgenticRAG = lazy(() => import('./pages/services/AgenticRAG'));
const AgenticSalesOutreach = lazy(() => import('./pages/services/AgenticSalesOutreach'));
const AIAdCreativeGenerator = lazy(() => import('./pages/services/AIAdCreativeGenerator'));
const AIAgentOrchestrator = lazy(() => import('./pages/services/AIAgentOrchestrator'));
const AIAgents = lazy(() => import('./pages/services/AIAgents'));
const AIAnalyticsCopilot = lazy(() => import('./pages/services/AIAnalyticsCopilot'));
const AIAssistant = lazy(() => import('./pages/services/AIAssistant'));
const AIAutomationServices = lazy(() => import('./pages/services/AIAutomationServices'));
const AIAutonomousBusinessManager2029 = lazy(() => import('./pages/services/AIAutonomousBusinessManager2029'));
const AIAutonomousBusinessManager = lazy(() => import('./pages/services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessOperations = lazy(() => import('./pages/services/AIAutonomousBusinessOperations'));
const AIAutonomousBusinessPlatform2026 = lazy(() => import('./pages/services/AIAutonomousBusinessPlatform2026'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/services/AIAutonomousBusinessPlatform'));
const AIAutonomousBusinessProcessAutomation = lazy(() => import('./pages/services/AIAutonomousBusinessProcessAutomation'));
const AIAutonomousCodeReview = lazy(() => import('./pages/services/AIAutonomousCodeReview'));
const AIAutonomousCreativeDirector = lazy(() => import('./pages/services/AIAutonomousCreativeDirector'));
const AIAutonomousData = lazy(() => import('./pages/services/AIAutonomousData'));
const AIAutonomousDecisionEngine = lazy(() => import('./pages/services/AIAutonomousDecisionEngine'));
const AIAutonomousDecisionPlatform = lazy(() => import('./pages/services/AIAutonomousDecisionPlatform'));
const AIAutonomousDevOps = lazy(() => import('./pages/services/AIAutonomousDevOps'));
const AIAutonomousEcosystemManager = lazy(() => import('./pages/services/AIAutonomousEcosystemManager'));
const AIAutonomousEcosystem = lazy(() => import('./pages/services/AIAutonomousEcosystem'));
const AIAutonomousEducationProfessor = lazy(() => import('./pages/services/AIAutonomousEducationProfessor'));
const AIAutonomousHealthcarePhysician = lazy(() => import('./pages/services/AIAutonomousHealthcarePhysician'));
const AIAutonomousLearningSystem = lazy(() => import('./pages/services/AIAutonomousLearningSystem'));
const AIAutonomousLegalCounsel = lazy(() => import('./pages/services/AIAutonomousLegalCounsel'));
const AIAutonomousLogistics = lazy(() => import('./pages/services/AIAutonomousLogistics'));
const AIAutonomousManufacturing = lazy(() => import('./pages/services/AIAutonomousManufacturing'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AIAutonomousResearch = lazy(() => import('./pages/services/AIAutonomousResearch'));
const AIAutonomousRobotics = lazy(() => import('./pages/services/AIAutonomousRobotics'));
const AIAutonomousScientificResearcher = lazy(() => import('./pages/services/AIAutonomousScientificResearcher'));
const AIAutonomousSecurity = lazy(() => import('./pages/services/AIAutonomousSecurity'));
const AIAutonomousSystemsPlatform = lazy(() => import('./pages/services/AIAutonomousSystemsPlatform'));
const AIAutonomousTesting = lazy(() => import('./pages/services/AIAutonomousTesting'));
const AIAutonomousVehiclePlatform = lazy(() => import('./pages/services/AIAutonomousVehiclePlatform'));
const AIAutonomousVehicle = lazy(() => import('./pages/services/AIAutonomousVehicle'));
const AIAutonomousVehiclesPlatform = lazy(() => import('./pages/services/AIAutonomousVehiclesPlatform'));
const AIAutonomousVehicles = lazy(() => import('./pages/services/AIAutonomousVehicles'));
const AIAutonomousVentureCapitalist = lazy(() => import('./pages/services/AIAutonomousVentureCapitalist'));
const AIBiomedicalResearch = lazy(() => import('./pages/services/AIBiomedicalResearch'));
const AIBiotechDrugDiscovery = lazy(() => import('./pages/services/AIBiotechDrugDiscovery'));
const AIBlockchainAnalytics = lazy(() => import('./pages/services/AIBlockchainAnalytics'));
const AIBlockchainGovernance = lazy(() => import('./pages/services/AIBlockchainGovernance'));
const AIBrainComputerInterface = lazy(() => import('./pages/services/AIBrainComputerInterface'));
const AIBrainInterface = lazy(() => import('./pages/services/AIBrainInterface'));
const AIBrandPersonalityGenerator = lazy(() => import('./pages/services/AIBrandPersonalityGenerator'));
const AIBusinessIntelligenceElite2026 = lazy(() => import('./pages/services/AIBusinessIntelligenceElite2026'));
const AIBusinessIntelligencePro = lazy(() => import('./pages/services/AIBusinessIntelligencePro'));
const AIBusinessIntelligenceSuite2029 = lazy(() => import('./pages/services/AIBusinessIntelligenceSuite2029'));
const AIBusinessIntelligenceSuite = lazy(() => import('./pages/services/AIBusinessIntelligenceSuite'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIClimatePredictionEngine = lazy(() => import('./pages/services/AIClimatePredictionEngine'));
const AIClimatePredictionPlatform = lazy(() => import('./pages/services/AIClimatePredictionPlatform'));
const AIClimatePrediction = lazy(() => import('./pages/services/AIClimatePrediction'));
const AICodeGenerationEnterprise = lazy(() => import('./pages/services/AICodeGenerationEnterprise'));
const AICodeReviewCopilot = lazy(() => import('./pages/services/AICodeReviewCopilot'));
const AICodeReview = lazy(() => import('./pages/services/AICodeReview'));
const AIComplianceAutomation = lazy(() => import('./pages/services/AIComplianceAutomation'));
const AIComputerVisionPlatform = lazy(() => import('./pages/services/AIComputerVisionPlatform'));
const AIConsciousnessEvolution2025 = lazy(() => import('./pages/services/AIConsciousnessEvolution2025'));
const AIConsciousnessEvolution2029 = lazy(() => import('./pages/services/AIConsciousnessEvolution2029'));
const AIConsciousnessEvolutionPlatform = lazy(() => import('./pages/services/AIConsciousnessEvolutionPlatform'));
const AIConsciousnessEvolution = lazy(() => import('./pages/services/AIConsciousnessEvolution'));
const AIConsciousnessSimulationPlatform = lazy(() => import('./pages/services/AIConsciousnessSimulationPlatform'));
const AIConsciousnessSimulation = lazy(() => import('./pages/services/AIConsciousnessSimulation'));
const AIConsciousnessSimulator = lazy(() => import('./pages/services/AIConsciousnessSimulator'));
const AIContentCreationRevolution = lazy(() => import('./pages/services/AIContentCreationRevolution'));
const AIContentCreation = lazy(() => import('./pages/services/AIContentCreation'));
const AIContentFactory = lazy(() => import('./pages/services/AIContentFactory'));
const AIContentGenerationAutomation2033 = lazy(() => import('./pages/services/AIContentGenerationAutomation2033'));
const AIContentGenerationPro2029 = lazy(() => import('./pages/services/AIContentGenerationPro2029'));
const AIContentGenerator = lazy(() => import('./pages/services/AIContentGenerator'));
const AIContentMarketingAutomation = lazy(() => import('./pages/services/AIContentMarketingAutomation'));
const AIContentPersonalizationEngine = lazy(() => import('./pages/services/AIContentPersonalizationEngine'));
const AICreativityStudio = lazy(() => import('./pages/services/AICreativityStudio'));
const AIMarketResearch = lazy(() => import('./pages/services/AIMarketResearch'));
const AIPoweredEnterpriseSecurity = lazy(() => import('./pages/services/AIPoweredEnterpriseSecurity'));
const AutonomousDevOpsPlatform = lazy(() => import('./pages/services/AutonomousDevOpsPlatform'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Docs = lazy(() => import('./pages/Docs'));
const EnterpriseIT = lazy(() => import('./pages/EnterpriseIT'));
const Events = lazy(() => import('./pages/Events'));
const MicroSAAS = lazy(() => import('./pages/MicroSAAS'));
const NewsPage = lazy(() => import('./pages/News'));
const QuantumCloudInfrastructure = lazy(() => import('./pages/services/QuantumCloudInfrastructure'));
const QuantumFinancialTrading = lazy(() => import('./pages/services/QuantumFinancialTrading'));
const QuantumServices = lazy(() => import('./pages/services/QuantumServices'));
const ResearchDevelopment = lazy(() => import('./pages/ResearchDevelopment'));
const ServicesPage = lazy(() => import('./pages/Services'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const Webinars = lazy(() => import('./pages/Webinars'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const App = () => {
  useScrollToTop();

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              <Sidebar isOpen={false} onClose={() => {}} />
              
              {/* Main Content with enhanced Suspense */}
              <main className="ml-64 pt-20 min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/services-showcase" element={<ServicesShowcase />} />
                    <Route path="/match" element={<AIMatcherPage />} />
                    <Route path="/talent" element={<TalentDirectory />} />
                    <Route path="/talents" element={<TalentsPage />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/comprehensive-services" element={<Services />} />
                    <Route path="/services-comparison" element={<Services />} />
                    <Route path="/it-onsite-services" element={<Services />} />
                    {/* Newly added explicit service routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    
                    {/* Our enhanced service routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                    <Route path="/services/innovative-new-services" element={<InnovativeNewServices />} />
                    <Route path="/services/specialized-it-infrastructure" element={<SpecializedITInfrastructure />} />
                    
                    {/* Solutions Routes */}
                    <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                    <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />

                    {/* Missing pages that were causing 404 errors */}
                    <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                    <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                    <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                    <Route path="/agentic-rag" element={<AgenticRAG />} />
                    <Route path="/agentic-sales-outreach" element={<AgenticSalesOutreach />} />
                    <Route path="/ai-ad-creative-generator" element={<AIAdCreativeGenerator />} />
                    <Route path="/ai-agent-orchestrator" element={<AIAgentOrchestrator />} />
                    <Route path="/ai-agents" element={<AIAgents />} />
                    <Route path="/ai-analytics-copilot" element={<AIAnalyticsCopilot />} />
                    <Route path="/ai-assistant" element={<AIAssistant />} />
                    <Route path="/ai-automation-services" element={<AIAutomationServices />} />
                    <Route path="/ai-autonomous-business-manager-2029" element={<AIAutonomousBusinessManager2029 />} />
                    <Route path="/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                    <Route path="/ai-autonomous-business-operations" element={<AIAutonomousBusinessOperations />} />
                    <Route path="/ai-autonomous-business-platform-2026" element={<AIAutonomousBusinessPlatform2026 />} />
                    <Route path="/ai-autonomous-business-platform" element={<AIAutonomousBusinessPlatform />} />
                    <Route path="/ai-autonomous-business-process-automation" element={<AIAutonomousBusinessProcessAutomation />} />
                    <Route path="/ai-autonomous-code-review" element={<AIAutonomousCodeReview />} />
                    <Route path="/ai-autonomous-creative-director" element={<AIAutonomousCreativeDirector />} />
                    <Route path="/ai-autonomous-data" element={<AIAutonomousData />} />
                    <Route path="/ai-autonomous-decision-engine" element={<AIAutonomousDecisionEngine />} />
                    <Route path="/ai-autonomous-decision-platform" element={<AIAutonomousDecisionPlatform />} />
                    <Route path="/ai-autonomous-devops" element={<AIAutonomousDevOps />} />
                    <Route path="/ai-autonomous-ecosystem-manager" element={<AIAutonomousEcosystemManager />} />
                    <Route path="/ai-autonomous-ecosystem" element={<AIAutonomousEcosystem />} />
                    <Route path="/ai-autonomous-education-professor" element={<AIAutonomousEducationProfessor />} />
                    <Route path="/ai-autonomous-healthcare-physician" element={<AIAutonomousHealthcarePhysician />} />
                    <Route path="/ai-autonomous-learning-system" element={<AIAutonomousLearningSystem />} />
                    <Route path="/ai-autonomous-legal-counsel" element={<AIAutonomousLegalCounsel />} />
                    <Route path="/ai-autonomous-logistics" element={<AIAutonomousLogistics />} />
                    <Route path="/ai-autonomous-manufacturing" element={<AIAutonomousManufacturing />} />
                    <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/ai-autonomous-research" element={<AIAutonomousResearch />} />
                    <Route path="/ai-autonomous-robotics" element={<AIAutonomousRobotics />} />
                    <Route path="/ai-autonomous-scientific-researcher" element={<AIAutonomousScientificResearcher />} />
                    <Route path="/ai-autonomous-security" element={<AIAutonomousSecurity />} />
                    <Route path="/ai-autonomous-systems-platform" element={<AIAutonomousSystemsPlatform />} />
                    <Route path="/ai-autonomous-testing" element={<AIAutonomousTesting />} />
                    <Route path="/ai-autonomous-vehicle-platform" element={<AIAutonomousVehiclePlatform />} />
                    <Route path="/ai-autonomous-vehicle" element={<AIAutonomousVehicle />} />
                    <Route path="/ai-autonomous-vehicles-platform" element={<AIAutonomousVehiclesPlatform />} />
                    <Route path="/ai-autonomous-vehicles" element={<AIAutonomousVehicles />} />
                    <Route path="/ai-autonomous-venture-capitalist" element={<AIAutonomousVentureCapitalist />} />
                    <Route path="/ai-biomedical-research" element={<AIBiomedicalResearch />} />
                    <Route path="/ai-biotech-drug-discovery" element={<AIBiotechDrugDiscovery />} />
                    <Route path="/ai-blockchain-analytics" element={<AIBlockchainAnalytics />} />
                    <Route path="/ai-blockchain-governance" element={<AIBlockchainGovernance />} />
                    <Route path="/ai-brain-computer-interface" element={<AIBrainComputerInterface />} />
                    <Route path="/ai-brain-interface" element={<AIBrainInterface />} />
                    <Route path="/ai-brand-personality-generator" element={<AIBrandPersonalityGenerator />} />
                    <Route path="/ai-business-intelligence-elite-2026" element={<AIBusinessIntelligenceElite2026 />} />
                    <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligencePro />} />
                    <Route path="/ai-business-intelligence-suite-2029" element={<AIBusinessIntelligenceSuite2029 />} />
                    <Route path="/ai-business-intelligence-suite" element={<AIBusinessIntelligenceSuite />} />
                    <Route path="/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEngine />} />
                    <Route path="/ai-climate-prediction-platform" element={<AIClimatePredictionPlatform />} />
                    <Route path="/ai-climate-prediction" element={<AIClimatePrediction />} />
                    <Route path="/ai-code-generation-enterprise" element={<AICodeGenerationEnterprise />} />
                    <Route path="/ai-code-review-copilot" element={<AICodeReviewCopilot />} />
                    <Route path="/ai-code-review" element={<AICodeReview />} />
                    <Route path="/ai-compliance-automation" element={<AIComplianceAutomation />} />
                    <Route path="/ai-computer-vision-platform" element={<AIComputerVisionPlatform />} />
                    <Route path="/ai-consciousness-evolution-2025" element={<AIConsciousnessEvolution2025 />} />
                    <Route path="/ai-consciousness-evolution-2029" element={<AIConsciousnessEvolution2029 />} />
                    <Route path="/ai-consciousness-evolution-platform" element={<AIConsciousnessEvolutionPlatform />} />
                    <Route path="/ai-consciousness-evolution" element={<AIConsciousnessEvolution />} />
                    <Route path="/ai-consciousness-simulation-platform" element={<AIConsciousnessSimulationPlatform />} />
                    <Route path="/ai-consciousness-simulation" element={<AIConsciousnessSimulation />} />
                    <Route path="/ai-consciousness-simulator" element={<AIConsciousnessSimulator />} />
                    <Route path="/ai-content-creation-revolution" element={<AIContentCreationRevolution />} />
                    <Route path="/ai-content-creation" element={<AIContentCreation />} />
                    <Route path="/ai-content-factory" element={<AIContentFactory />} />
                    <Route path="/ai-content-generation-automation-2033" element={<AIContentGenerationAutomation2033 />} />
                    <Route path="/ai-content-generation-pro-2029" element={<AIContentGenerationPro2029 />} />
                    <Route path="/ai-content-generator" element={<AIContentGenerator />} />
                    <Route path="/ai-content-marketing-automation" element={<AIContentMarketingAutomation />} />
                    <Route path="/ai-content-personalization-engine" element={<AIContentPersonalizationEngine />} />
                    <Route path="/ai-creativity-studio" element={<AICreativityStudio />} />
                    <Route path="/ai-market-research" element={<AIMarketResearch />} />
                    <Route path="/ai-powered-enterprise-security" element={<AIPoweredEnterpriseSecurity />} />
                    <Route path="/autonomous-devops-platform" element={<AutonomousDevOpsPlatform />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/enterprise-it" element={<EnterpriseIT />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/micro-saas" element={<MicroSAAS />} />
                    <Route path="/quantum-cloud-infrastructure" element={<QuantumCloudInfrastructure />} />
                    <Route path="/quantum-financial-trading" element={<QuantumFinancialTrading />} />
                    <Route path="/quantum-services" element={<QuantumServices />} />
                    <Route path="/research-development" element={<ResearchDevelopment />} />
                    <Route path="/space-tech" element={<SpaceTech />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              
              {/* Enhanced Accessibility Controls */}
              <AccessibilityControls position="bottom-right" />
              
              {/* AI Chatbot - Always Available */}
              <AIChatbot />
              
              {/* Collaborative Text Editor - Development Mode */}
              {import.meta.env.DEV && (
                <div className="fixed bottom-24 left-6 z-40 w-96">
                  <CollaborativeTextEditor
                    roomId="dev-editor"
                    userId="dev-user"
                    userName="Developer"
                    initialContent="Welcome to the collaborative text editor! Start typing to see AI suggestions and real-time collaboration features."
                    enableAI={true}
                    enableCollaboration={true}
                    enableVersioning={true}
                  />
                </div>
              )}
              
              {/* AI Code Generator - Development Mode */}
              {import.meta.env.DEV && (
                <div className="fixed bottom-24 right-6 z-40 w-96">
                  <AICodeGenerator />
                </div>
              )}
              
              {/* Development Dashboards */}
              {import.meta.env.DEV && (
                <>
                  {/* Performance Dashboard */}
                  <div className="fixed top-4 left-4 z-40">
                    <PerformanceDashboard />
                  </div>
                  
                  {/* Analytics Dashboard */}
                  <div className="fixed top-4 right-4 z-40">
                    <AnalyticsDashboard />
                  </div>
                  
                  {/* Enterprise Dashboard */}
                  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                    <EnterpriseDashboard />
                  </div>
                  
                  {/* Security & Compliance Dashboard */}
                  <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                    <SecurityComplianceDashboard />
                  </div>
                  
                  {/* Machine Learning Dashboard */}
                  <div className="fixed top-4 right-4 z-40">
                    <MachineLearningDashboard />
                  </div>
                </>
              )}
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;