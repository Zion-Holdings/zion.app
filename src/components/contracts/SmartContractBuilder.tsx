
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Save, FileText, Download, CheckCircle, XCircle, Loader2, ExternalLink } from "lucide-react"; // Added more icons
import { TalentProfile } from "@/types/talent";
import { ContractForm, ContractFormValues, Milestone } from "./components/ContractForm";
import { ContractPreview } from "./components/ContractPreview"; // This might need adjustments or be specific to Solidity preview
import { TemplateManager } from "./templates/TemplateManager";
import { DeploymentOptions, SmartContractInfo, ContractType } from "@/types/smart-contracts"; // Added ContractType
import { useSmartContracts } from "@/hooks/useSmartContracts"; // This hook might be for Solidity templates, review usage
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';
import { ethers } from 'ethers'; // Import ethers
import { Input } from "@/components/ui/input"; // For wallet inputs
import { Label } from "@/components/ui/label"; // For labels
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // For network selection
import { Switch } from "@/components/ui/switch"; // For enable on-chain toggle

// Placeholder ABIs - these should be generated from compiled contracts
const SIMPLE_AGREEMENT_ABI: ethers.InterfaceAbi = [
  "constructor(address client, address talent, string projectDetailsIPFSHash)",
  "function client() view returns (address)",
  "function talent() view returns (address)",
  "function projectDetailsIPFSHash() view returns (string)",
];

const ESCROW_AGREEMENT_ABI: ethers.InterfaceAbi = [
  // From Ownable
  "constructor(address initialOwner)",
  "function owner() view returns (address)",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
  "function renounceOwnership()",
  "function transferOwnership(address newOwner)",
  // From Escrow
  "event Deposited(address indexed payee, uint256 weiAmount)",
  "event Withdrawn(address indexed payee, uint256 weiAmount)",
  // EscrowAgreement specific (based on previous subtask's template)
  "constructor(address _talent, address _client, string memory _projectDetailsIPFSHash)", // Note: Ownable takes _client
  "function talent() view returns (address)",
  "function projectDetailsIPFSHash() view returns (string)",
  "function currentState() view returns (uint8)", // Enum EscrowState
  "function depositFunds() payable",
  "function releaseFunds()",
  "function markAsDelivered()",
  "function raiseDispute()",
];


interface SmartContractBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string; // Assuming clientName is passed as a prop
  onContractGenerated?: (contractContent: string) => void; // For Solidity
  onLegalDraftGenerated?: (markdownContent: string) => void; // For Markdown
  onDeploy?: (contractContent: string) => void;
}

// Helper to ensure milestones are always an array
const ensureMilestonesArray = (milestones: any): Milestone[] => {
  if (Array.isArray(milestones)) {
    return milestones.map(m => ({
      description: m.description || '',
      dueDate: m.dueDate || '',
      amount: m.amount || 0,
      // Ensure other required fields of Milestone are present
    }));
  }
  return [];
};


export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated, // This is for Solidity
  onLegalDraftGenerated, // New prop for the markdown draft
  onDeploy
}: SmartContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form");

  // State for Solidity contract (existing)
  const [generatedSolidityContract, setGeneratedSolidityContract] = useState<string | null>(null);

  // New state for Markdown legal draft
  const [generatedMarkdownContract, setGeneratedMarkdownContract] = useState<string | null>(null);
  const [isLoadingLegalDraft, setIsLoadingLegalDraft] = useState<boolean>(false);
  const [legalDraftError, setLegalDraftError] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);

  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum', // Default network
    useEscrow: true,
    deployToChain: false // Default to not deploying to chain immediately
  });
  const [deployStatus, setDeployStatus] = useState<string>(''); // e.g., 'deploying', 'deployed', 'error'
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null); // Existing from Solidity part
  const legalDraftPreviewRef = useRef<HTMLDivElement>(null);

  // States for on-chain agreement UI and deployment
  const [enableOnChainAgreement, setEnableOnChainAgreement] = useState<boolean>(false);
  const [selectedNetwork, setSelectedNetwork] = useState<'ethereum' | 'polygon' | ''>('');
  // clientWalletAddress and talentWalletAddress might be part of formValues or separate state
  // For now, let's assume they can be part of formValues or derived if prefilled.
  // We'll use formValues.clientWalletAddress and formValues.talentWalletAddress

  const [onChainDeploymentStatus, setOnChainDeploymentStatus] = useState<'idle' | 'connecting' | 'fetching_code' | 'deploying' | 'success' | 'error'>('idle');
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [deployedContractAddress, setDeployedContractAddress] = useState<string | null>(null);
  const [deploymentError, setDeploymentError] = useState<string | null>(null);
  
  const [populatedSolidityCode, setPopulatedSolidityCode] = useState<string | null>(null); // Bytecode from generate-smart-contract
  const [contractAbi, setContractAbi] = useState<any | null>(null); // ABI based on contractType

  // This hook might be for the older Solidity template system.
  // We are now using supabase function 'generate-smart-contract' for Solidity for deployment.
  const { generateSolidityContract: generateSolidityFromHook, deploySmartContract: deployViaHook } = useSmartContracts();

  // Prefill form with talent and client name (existing useEffect)
  useEffect(() => {
    if (talent && clientName && !formValues) { // Only prefill if formValues is not already set (e.g., by a template)
      setFormValues(prev => ({
        ...prev,
        projectTitle: prev?.projectTitle || '', // Keep existing or empty
        clientName: clientName,
        talentName: talent.full_name || talent.user_id, // Use full_name or fallback
        deliverables: prev?.deliverables || '',
        paymentStructure: prev?.paymentStructure || '',
        milestones: ensureMilestonesArray(prev?.milestones), // Ensure milestones is an array
        clientWalletAddress: prev?.clientWalletAddress || '',
        talentWalletAddress: prev?.talentWalletAddress || '',
        // Initialize other fields from ContractFormValues as needed
        scopeSummary: prev?.scopeSummary || '',
        paymentAmount: prev?.paymentAmount || 0,
        currency: prev?.currency || 'USD',
        deadline: prev?.deadline || '',
        governingLaw: prev?.governingLaw || '',
        disputeResolution: prev?.disputeResolution || '',
      }));
    }
  }, [talent, clientName, isOpen]); // Re-run if talent, clientName, or isOpen changes and formValues not set.


  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData);
    // Clear any previously generated contracts when a new template is loaded
    setGeneratedMarkdownContract(null);
    setGeneratedSolidityContract(null);
    setLegalDraftError(null);
    setActiveTab("form");
  };

  // For generating Solidity (existing logic, adapted)
  const handleGenerateSolidity = async () => {
    if (!formValues) {
      toast.error("Please fill in the contract details first.");
      return;
    }
    try {
      // Assuming generateSolidityContract now primarily uses formValues
      // and talent/clientName are for context or specific template variables.
      const solidityCode = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedSolidityContract(solidityCode);
      if (onContractGenerated) { // Existing prop for Solidity
        onContractGenerated(solidityCode);
      }
      // Potentially switch to a Solidity preview tab if that's different
      // For now, let's assume the main "Preview" tab can show Solidity if deployOptions.deployToChain is true
      // Or if there's a specific action for "Preview Solidity"
      toast.success("Solidity code generated (simulated).");
      // setActiveTab("preview"); // Or a specific solidity preview tab
    } catch (error) {
      console.error("Error generating Solidity contract:", error);
      toast.error("Failed to generate Solidity contract.");
    }
  };
  
  // New function for generating Markdown legal draft
  const handleGenerateLegalDraft = async () => {
    if (!formValues) {
      toast.error("Please fill in the contract details first.");
      return;
    }
    setIsLoadingLegalDraft(true);
    setLegalDraftError(null);
    setGeneratedMarkdownContract(null);

    try {
      const payload = {
        // These field names must match the Supabase function's expected body
        projectName: formValues.projectTitle,
        clientName: formValues.clientName,
        talentName: formValues.talentName,
        scopeSummary: formValues.deliverables, // Or a dedicated scopeSummary field if available in ContractFormValues
        paymentTerms: formValues.paymentStructure, // Or map milestones to a payment terms string
        paymentAmount: formValues.paymentAmount, // This might be a total or derived from milestones
        milestones: ensureMilestonesArray(formValues.milestones), // Ensure milestones is an array
        // Add other fields as required by your 'generate-contract' Supabase function
        // e.g., clientWalletAddress, talentWalletAddress, etc. if they are part of the text prompt
        // deliverables: formValues.deliverables,
        // additionalClauses: formValues.additionalClauses // if you add this to form
      };

      const { data, error } = await supabase.functions.invoke('generate-contract', {
        body: payload,
      });

      if (error) {
        throw error;
      }

      if (data && data.markdownContent) { // Assuming your Supabase func returns { markdownContent: "..." }
        setGeneratedMarkdownContract(data.markdownContent);
        if (onLegalDraftGenerated) {
          onLegalDraftGenerated(data.markdownContent);
        }
        setActiveTab("preview_markdown"); // Switch to a new tab for Markdown preview
        toast.success("Legal draft generated successfully!");
      } else {
        throw new Error("No content received from draft generator.");
      }
    } catch (err: any) {
      console.error("Error generating legal draft:", err);
      setLegalDraftError(err.message || "Failed to generate legal draft.");
      toast.error(err.message || "Failed to generate legal draft.");
    } finally {
      setIsLoadingLegalDraft(false);
    }
  };

  const handleDownloadPdf = () => {
    if (legalDraftPreviewRef.current && formValues) {
      const element = legalDraftPreviewRef.current;
      const opt = {
        margin:       10,
        filename:     `${formValues.projectTitle || 'contract'}_legal_draft.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      toast.info("Generating PDF...");
      html2pdf().from(element).set(opt).save()
        .then(() => toast.success("PDF downloaded successfully!"))
        .catch((err) => {
          toast.error("PDF generation failed.");
          console.error("Error generating PDF:", err);
        });
    } else {
      toast.warn("No draft content available to download or form values missing.");
    }
  };

  const handleDeployOnChainContract = async () => {
    if (!formValues || !selectedNetwork || !formValues.clientWalletAddress || !formValues.talentWalletAddress) {
      toast.error("Missing required fields for on-chain deployment: network, client/talent wallet addresses.");
      return;
    }

    setOnChainDeploymentStatus('connecting');
    setDeploymentError(null);
    setTransactionHash(null);
    setDeployedContractAddress(null);
    setPopulatedSolidityCode(null);

    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install it to continue.");
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const currentNetwork = await provider.getNetwork();
      const targetChainId = selectedNetwork === 'ethereum' ? '0x1' : '0x89'; // 1 for Ethereum Mainnet, 137 for Polygon

      if (currentNetwork.chainId.toString() !== BigInt(targetChainId).toString()) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: targetChainId }],
          });
          // Re-initialize provider and signer after network switch
          // const newProvider = new ethers.BrowserProvider(window.ethereum);
          // signer = await newProvider.getSigner();
        } catch (switchError: any) {
          if (switchError.code === 4902) { // Chain not added
            throw new Error(`Please add ${selectedNetwork} to MetaMask and switch to it.`);
          }
          throw new Error(`Failed to switch network: ${switchError.message}`);
        }
      }

      setOnChainDeploymentStatus('fetching_code');
      // Determine contractType (e.g. from a form field if it's selectable, or default)
      // For now, let's assume it's part of formValues or a fixed choice for this flow.
      const contractTypeToDeploy: ContractType = formValues.contractType || 'simple'; // Default to 'simple'

      // Create a temporary projectDetailsIPFSHash (replace with actual IPFS hashing later)
      const projectDetailsString = JSON.stringify({
        title: formValues.projectTitle,
        deliverables: formValues.deliverables,
        milestones: formValues.milestones,
      });
      const projectDetailsIPFSHash = ethers.id(projectDetailsString); // Simple hash

      const { data, error: funcError } = await supabase.functions.invoke('generate-smart-contract', {
        body: {
          contractType: contractTypeToDeploy,
          clientAddress: formValues.clientWalletAddress,
          talentAddress: formValues.talentWalletAddress,
          projectDetailsIPFSHash: projectDetailsIPFSHash,
        },
      });

      if (funcError) throw new Error(`Failed to fetch contract code: ${funcError.message}`);
      if (!data || !data.solidityCode) throw new Error("No Solidity code received from generator.");

      setPopulatedSolidityCode(data.solidityCode); // This is actually bytecode if Supabase func compiles
      // For now, assuming data.solidityCode IS the bytecode. This is a placeholder.
      // In reality, the Supabase function should return bytecode and ABI.
      // Or, if it returns Solidity, we'd compile it client-side (not recommended for production).

      const currentAbi = contractTypeToDeploy === 'simple' ? SIMPLE_AGREEMENT_ABI : ESCROW_AGREEMENT_ABI;
      setContractAbi(currentAbi);

      setOnChainDeploymentStatus('deploying');
      toast.info("Deploying contract... This may take a moment. Please confirm in MetaMask.");

      // IMPORTANT: populatedSolidityCode here should be BYTECODE.
      // The current 'generate-smart-contract' returns Solidity source. This will not work.
      // This is a placeholder for the actual deployment flow.
      // We need a compile step or the Supabase function must return bytecode.
      // For now, this will fail if populatedSolidityCode is not bytecode.
      const factory = new ethers.ContractFactory(currentAbi, populatedSolidityCode /* THIS MUST BE BYTECODE */, signer);

      let contract;
      // Adjust constructor arguments based on contractTypeToDeploy
      if (contractTypeToDeploy === 'simple') {
        contract = await factory.deploy(formValues.clientWalletAddress, formValues.talentWalletAddress, projectDetailsIPFSHash);
      } else { // escrow
        // EscrowAgreement constructor: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client)
        // The Ownable(_client) is handled by OpenZeppelin's constructor if `initialOwner` is the first arg to Ownable's constructor.
        // Or, if our EscrowAgreement's constructor directly calls Ownable(_client), then that's fine.
        // Based on EscrowAgreement.sol: constructor(address _talent, address _client, string memory _projectDetailsIPFSHash) Ownable(_client)
        // The ethers.js deploy will pass these args to the Solidity constructor.
        contract = await factory.deploy(formValues.talentWalletAddress, formValues.clientWalletAddress, projectDetailsIPFSHash);
      }

      await contract.waitForDeployment();
      const deployedAddr = await contract.getAddress();
      setDeployedContractAddress(deployedAddr);
      setTransactionHash(contract.deploymentTransaction()?.hash || null);
      setOnChainDeploymentStatus('success');
      toast.success(`Contract deployed successfully at ${deployedAddr}`);

    } catch (err: any) {
      console.error("Deployment error:", err);
      setDeploymentError(err.message || "An unknown error occurred during deployment.");
      setOnChainDeploymentStatus('error');
      toast.error(err.message || "Deployment failed.");
    }
  };

  // This function is passed to ContractForm.
  // We now decide what "generate" means in this context.
  // The subtask asks for a "Generate Legal Draft" button.
  // Let's assume ContractForm's onContractGenerated is for the primary action, which could be Solidity or data pass-through.
  // For clarity, we will add a dedicated "Generate Legal Draft" button in SmartContractBuilder's JSX.
  // The onContractGenerated from ContractForm might be re-purposed or trigger our Solidity generation.
  const handleFormSubmitFromContractForm = (values: ContractFormValues) => {
    // This is called by ContractForm's own submit/generate button.
    // Let's make this one generate the Solidity code, as per existing flow.
    setFormValues(values); // Update formValues state first
    handleGenerateSolidity(); // Then generate Solidity.
  };


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
          <DialogDescription>
            Create, customize, and deploy your smart contract or generate a legal draft.
          </DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}
              <TabsTrigger value="form">1. Details</TabsTrigger>
              <TabsTrigger value="preview_markdown" disabled={!generatedMarkdownContract}>2. Legal Draft</TabsTrigger>
              <TabsTrigger value="preview_solidity" disabled={!enableOnChainAgreement && !generatedSolidityContract}>3. On-Chain Contract</TabsTrigger>
            </TabsList>
            
            {/* This button seems out of place if it's just for templates, maybe move into "form" tab? */}
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => setTemplateManagerOpen(true)}
              className="flex gap-1"
            >
              <Save className="h-4 w-4" />
              Templates
            </Button>
          </div>
          
          <TabsContent value="form" className="pt-4 space-y-6">
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues} // Pass the potentially prefilled/template-loaded values
              onFormValuesChange={setFormValues} // Keep SmartContractBuilder's state in sync
              onContractGenerated={handleFormSubmitFromContractForm} // This will now trigger Solidity generation
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
            />
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleGenerateLegalDraft}
                disabled={isLoadingLegalDraft || !formValues}
                size="lg"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <FileText className="h-5 w-5" />
                {isLoadingLegalDraft ? "Generating Draft..." : "Generate Legal Draft (GPT)"}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="preview_markdown" className="pt-4">
            {isLoadingLegalDraft && <p>Loading draft...</p>}
            {legalDraftError && <p className="text-red-500">Error: {legalDraftError}</p>}
            {generatedMarkdownContract && (
              <div>
                <div ref={legalDraftPreviewRef} className="prose dark:prose-invert max-w-none p-6 border rounded-md bg-background shadow-sm">
                  {/* Content to be PDF'd is wrapped by the ref div */}
                  <ReactMarkdown>{generatedMarkdownContract}</ReactMarkdown>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleDownloadPdf} variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download as PDF
                  </Button>
                </div>
              </div>
            )}
            {!generatedMarkdownContract && !isLoadingLegalDraft && <p>Generate a legal draft to preview and download.</p>}
          </TabsContent>

          <TabsContent value="preview_solidity" className="pt-4 space-y-6">
            <div className="flex items-center space-x-2 p-4 border rounded-md">
              <Switch
                id="enable-on-chain"
                checked={enableOnChainAgreement}
                onCheckedChange={setEnableOnChainAgreement}
              />
              <Label htmlFor="enable-on-chain" className="text-lg font-medium">Enable On-Chain Agreement</Label>
            </div>

            {enableOnChainAgreement && formValues && ( // Only show if toggled and formValues exist
              <>
                <div>
                  <Label className="text-base font-semibold">Network</Label>
                  <RadioGroup
                    value={selectedNetwork}
                    onValueChange={(value: 'ethereum' | 'polygon' | '') => setSelectedNetwork(value as any)}
                    className="mt-2 flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ethereum" id="ethereum" />
                      <Label htmlFor="ethereum">Ethereum</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="polygon" id="polygon" />
                      <Label htmlFor="polygon">Polygon</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="clientWalletAddress" className="text-base font-semibold">Client Wallet Address</Label>
                  <Input
                    id="clientWalletAddress"
                    value={formValues.clientWalletAddress || ''}
                    onChange={(e) => setFormValues(prev => ({...prev!, clientWalletAddress: e.target.value}))}
                    placeholder="0x..."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="talentWalletAddress" className="text-base font-semibold">Talent Wallet Address</Label>
                  <Input
                    id="talentWalletAddress"
                    value={formValues.talentWalletAddress || ''}
                    onChange={(e) => setFormValues(prev => ({...prev!, talentWalletAddress: e.target.value}))}
                    placeholder="0x..."
                    className="mt-1"
                  />
                </div>
                
                <Button
                  onClick={handleDeployOnChainContract}
                  disabled={onChainDeploymentStatus === 'connecting' || onChainDeploymentStatus === 'fetching_code' || onChainDeploymentStatus === 'deploying' || !selectedNetwork || !formValues.clientWalletAddress || !formValues.talentWalletAddress}
                  className="w-full py-3 text-base bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  {onChainDeploymentStatus === 'connecting' && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Connecting to Wallet...</>}
                  {onChainDeploymentStatus === 'fetching_code' && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Preparing Contract...</>}
                  {onChainDeploymentStatus === 'deploying' && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Deploying Contract...</>}
                  {onChainDeploymentStatus === 'idle' && "Deploy Contract"}
                  {onChainDeploymentStatus === 'success' && "Contract Deployed!"}
                  {onChainDeploymentStatus === 'error' && "Retry Deployment"}
                </Button>

                {onChainDeploymentStatus !== 'idle' && (
                  <div className="mt-4 p-4 border rounded-md space-y-2 bg-muted/50">
                    <h4 className="font-semibold">Deployment Status:</h4>
                    <p className="flex items-center">
                      {onChainDeploymentStatus === 'connecting' && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Connecting to wallet...</>}
                      {onChainDeploymentStatus === 'fetching_code' && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Fetching contract code...</>}
                      {onChainDeploymentStatus === 'deploying' && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Deploying to {selectedNetwork}...</>}
                      {onChainDeploymentStatus === 'success' && <CheckCircle className="mr-2 h-4 w-4 text-green-500" />}
                      {onChainDeploymentStatus === 'error' && <XCircle className="mr-2 h-4 w-4 text-red-500" />}
                      {onChainDeploymentStatus.charAt(0).toUpperCase() + onChainDeploymentStatus.slice(1).replace('_', ' ')}
                    </p>
                    {transactionHash && (
                      <p>Transaction Hash: <a href={selectedNetwork === 'ethereum' ? `https://etherscan.io/tx/${transactionHash}` : `https://polygonscan.com/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">{transactionHash.substring(0,10)}...{transactionHash.substring(transactionHash.length - 8)} <ExternalLink className="h-3 w-3"/></a></p>
                    )}
                    {deployedContractAddress && (
                      <p>Contract Address: <a href={selectedNetwork === 'ethereum' ? `https://etherscan.io/address/${deployedContractAddress}` : `https://polygonscan.com/address/${deployedContractAddress}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">{deployedContractAddress} <ExternalLink className="h-3 w-3"/></a></p>
                    )}
                    {deploymentError && (
                      <p className="text-red-500">Error: {deploymentError}</p>
                    )}
                    {onChainDeploymentStatus === 'success' && populatedSolidityCode && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sm text-muted-foreground">View Deployed Contract Code (Source)</summary>
                        <pre className="mt-1 p-2 bg-gray-800 text-white text-xs rounded-md overflow-x-auto">{populatedSolidityCode}</pre>
                      </details>
                    )}
                  </div>
                )}
              </>
            )}
            {!enableOnChainAgreement && <p className="text-muted-foreground p-4 text-center">Enable on-chain agreement to deploy this contract to a blockchain.</p>}

            {/* Fallback for old Solidity preview if needed, or remove if fully replaced by on-chain flow */}
            {/* {generatedSolidityContract && !deployOptions.deployToChain && !enableOnChainAgreement && ( ... )} */}
          </TabsContent>
        </Tabs>
        
        <TemplateManager
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />
      </DialogContent>
    </Dialog>
  );
}
