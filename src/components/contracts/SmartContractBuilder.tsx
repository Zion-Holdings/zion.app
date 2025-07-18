<<<<<<< HEAD
import { useState } from 'react';';
import { Save } from '@/components/ui/icons;';
import {;''
  Dialog,;
  DialogContent,;
  DialogHeader,;''
  DialogTitle,;;
} from '@/components/ui/dialog;'';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs;'';
import { Button } from '@/components/ui/button;'
;;
import type { TalentProfile } from '@/types/talent;'';
import { ContractForm } from './components/ContractForm;'';
import type { ContractFormValues } from './components/ContractForm;'';
import { ContractPreview } from './components/ContractPreview;'';
import { TemplateManager } from './templates/TemplateManager;';
import type {;
  DeploymentOptions,;''
  SmartContractInfo,;;
} from '@/types/smart-contracts;'';
import { useSmartContracts } from '@/hooks/useSmartContracts;'';
import { toast } from 'sonner;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
interface SmartContractBuilderProps {;;
  isOpen: "boolean;",;";";";";""
  onClose: "() => void;",";";";";""
  talent: "TalentProfile;",;";";";""
  clientName: string;";";";";""
  onContractGenerated?: (contractContent: "string) => void;";"
};
;
export function SmartContractBuilder(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isOpen,;
  onClose,;""
  talent,;";""
  clientName,;";";""
  onContractGenerated,;";";";""
}: SmartContractBuilderProps) {;";";";";""
  const [activeTab, setActiveTab] = useState<string>('form');'
=======
import { useState } from 'react''
import { Save } from '@/components/ui/icons'
import {'
  Dialog,'
  DialogContent,
  DialogHeader,'
  DialogTitle,'
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

import type { TalentProfile } from '@/types/talent'
import { ContractForm } from './components/ContractForm'
import type { ContractFormValues } from './components/ContractForm'
import { ContractPreview } from './components/ContractPreview'
import { TemplateManager } from './templates/TemplateManager'
import type {;
  DeploymentOptions,'
  SmartContractInfo,'
} from '@/types/smart-contracts'
import { useSmartContracts } from '@/hooks/useSmartContracts'
import { toast } from 'sonner'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface SmartContractBuilderProps {'
  isOpen: "boolean,"
  onClose: () => void,""
  talent: TalentProfile","
  clientName: string"
  onContractGenerated?: (contractContent: string) => void"

export function SmartContractBuilder(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isOpen,;
  onClose,"
  talent,;
  clientName,;"";
  onContractGenerated,;"";
}: SmartContractBuilderProps) {;"";
  const [activeTab, setActiveTab] = useState<string>('form')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const [generatedContract, setGeneratedContract] = useState<string | null>(;
    null,);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>('
    undefined,'
  );
<<<<<<< HEAD
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;''
    undefined,;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);''
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({;;
    network: 'ethereum',;;'
    useEscrow: "true",;";";";";""
    deployToChain: "false",;";";";""
  });";";";";""
  const [deployStatus, setDeployStatus] = useState<string>('');'
=======
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false)'
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({'
    network: 'ethereum','
    useEscrow: true,;"
    deployToChain: false","
  })";""
  const [deployStatus, setDeployStatus] = useState<string>('')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const [deploymentInfo, setDeploymentInfo] =;
    useState<SmartContractInfo | null>(null);

  const { _deploySmartContract } = useSmartContracts();
  const handleLoadTemplate = (_templateData: ContractFormValues) => {;
    setFormValues(templateData);
  };

  // Convert ContractFormValues to contract content string;
<<<<<<< HEAD
;''
  const handleDeployContract: unknown = async () => {;
    if (!generatedContract) return;
;''
    try {;;
      setDeployStatus('deploying');'
      const contractInfo: unknown = await deploySmartContract(;
        generatedContract,;
        deployOptions,;''
      );
;
      if (contractInfo) {;''
        setDeploymentInfo(contractInfo);;
        setDeployStatus('deployed');;'
        toast.success('Smart contract deployed successfully!');''
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}else {;;
        setDeployStatus('error');;'
        toast.error('Failed to deploy smart contract');'
      };''
    } catch {;;
      logErrorToProduction('Error deploying contract:', { data: "error "});";";";";""
      setDeployStatus('error');;'
      toast.error('Failed to deploy smart contract');'
    };
  };''
;
  // Modified to match the expected interface;
  const handleFormSubmit: unknown = (_contract: string) => {;''
    // This should be a function that takes a string (contract content);;
    // Since we need to adapt the interface, we'll implement the simplest solution that works;''
    if (onContractGenerated) {;
      onContractGenerated(contract);
    };''
    setGeneratedContract(contract);;
    setActiveTab('preview');''
  };
;
  return (;''
    <Dialog open={isOpen} onOpenChange={onClose}>;;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;";""
        <DialogHeader>;";";""
          <DialogTitle>Smart Contract Builder</DialogTitle>;";";";""
        </DialogHeader>;";";";";""
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;";";";";""
          <div className="flex justify-between items-center">;";";";";""
            <TabsList className="grid grid-cols-2">;";";";";""
              <TabsTrigger value="form">Contract Details</TabsTrigger>;";";";";""
              <TabsTrigger value="preview" disabled={!generatedContract}>;""
                Preview;";""
              </TabsTrigger>;";";""
            </TabsList>;";";";""
;";";";";""
            <div className="flex gap-2">;";";";""
              <Button;";";";";""
                variant="outline";";";";";""
                size="sm";";";";""
                onClick={() => setTemplateManagerOpen(true)};";";";";""
                className="flex gap-1";";";";""
              >;";";";";""
                <Save className="h-4 w-4" />;"
                Templates;""
              </Button>;";""
            </div>;";";""
          </div>;";";";""
;";";";";""
          <TabsContent value="form" className="pt-4">;"
            <ContractForm;""
              talent={talent};";""
              clientName={clientName};";";""
              initialValues={;";";";""
                formValues || {;";";";";""
                  projectName: '',;;'
                  startDate: "new Date()",;";";";";""
                  scopeSummary: '',;;'
                  paymentTerms: 'fixed',;;'
                  paymentAmount: '',;;'
                  endDate: "undefined",;";";";";""
                  additionalClauses: "[]",;"
                };
              };
              onFormValuesChange={setFormValues};""
              onContractGenerated={handleFormSubmit};";""
            />;";";""
          </TabsContent>;";";";""
;";";";";""
          <TabsContent value="preview" className="pt-4">;"
=======
'
  const handleDeployContract = async () => {'
    if (!generatedContract) return;
'
    try {'
      setDeployStatus('deploying')'
      const contractInfo = await deploySmartContract(;
        generatedContract,;
        deployOptions,'
      )'

      if (contractInfo) {'
        setDeploymentInfo(contractInfo)'
        setDeployStatus('deployed')'
        toast.success('Smart contract deployed successfully!')'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}else {'
        setDeployStatus('error')'
        toast.error('Failed to deploy smart contract')'
      }'
    } catch {'
      logErrorToProduction('Error deploying contract:', { data: error })"
      setDeployStatus('error')'
      toast.error('Failed to deploy smart contract')'
    };
  }'
'
  // Modified to match the expected interface;
  const handleFormSubmit = (_contract: string) => {'
    // This should be a function that takes a string (contract content)'
    // Since we need to adapt the interface, we'll implement the simplest solution that works'
    if (onContractGenerated) {'
      onContractGenerated(contract);
    }'
    setGeneratedContract(contract)'
    setActiveTab('preview')'
  }'

  return ('
    <Dialog open={isOpen} onOpenChange={onClose}>'
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto>;"
        <DialogHeader>";
          <DialogTitle>Smart Contract Builder</DialogTitle>;"";
        </DialogHeader>;""
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4>;"";
          <div className="flex justify-between items-center">;"
            <TabsList className=grid grid-cols-2">""
              <TabsTrigger value=form>Contract Details</TabsTrigger>"
              <TabsTrigger value="preview disabled={!generatedContract}>"
                Preview;""
              </TabsTrigger>;"
            </TabsList>";"
";""
            <div className=flex gap-2>";";
              <Button"
                variant="outline;"";
                size="sm"
                onClick={() => setTemplateManagerOpen(true)};";"
                className=flex gap-1""
              >";""
                <Save className=h-4 w-4 />"
                Templates"
              </Button>;
            </div>;"";
          </div>;"";"";
          <TabsContent value="form" className=pt-4>"
            <ContractForm"
              talent={talent};
              clientName={clientName};"";
              initialValues={;"";
                formValues || {;"";
                  projectName: '','
                  startDate: new Date(),;"
                  scopeSummary: '','
                  paymentTerms: 'fixed','
                  paymentAmount: '','
                  endDate: undefined",""
                  additionalClauses: [],"
                };
              };
              onFormValuesChange={setFormValues}"
              onContractGenerated={handleFormSubmit};
            />;"";
          </TabsContent>;"";"";
          <TabsContent value="preview" className=pt-4>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            {generatedContract && (;
              <div>;
                <ContractPreview;
                  generatedContract={generatedContract};
                  talent={talent};
<<<<<<< HEAD
                  onClose={onClose};""
                  deploymentInfo={deploymentInfo};";""
                />;";";""
;";";";""
                {!deploymentInfo && deployOptions.deployToChain && (;";";";";""
                  <div className="mt-6 flex justify-center">;";";""
                    <Button;";";";""
                      onClick={handleDeployContract};";";";";""
                      disabled={deployStatus === 'deploying'};;'
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700";";";";""
                    >;";";";";""
                      {deployStatus === 'deploying;''
                        ? 'Deploying...;''
                        : 'Deploy to Blockchain'};'
=======
                  onClose={onClose}"
                  deploymentInfo={deploymentInfo};
                />;"";"";
                {!deploymentInfo && deployOptions.deployToChain && (;"";
                  <div className="mt-6 flex justify-center">;"
                    <Button;";"
                      onClick={handleDeployContract};"
                      disabled={deployStatus === 'deploying'}'
                      className=bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700";";
                    >"
                      {deployStatus === 'deploying'
                        ? 'Deploying...'
                        : 'Deploy to Blockchain'}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                    </Button>;
                  </div>)};
              </div>;
            )};
          </TabsContent>;
        </Tabs>;

        <TemplateManager;
<<<<<<< HEAD
          isOpen={templateManagerOpen};''
          onClose={() => setTemplateManagerOpen(false)};
          onSelectTemplate={handleLoadTemplate};
          currentValues={;''
            formValues || {;;
              projectName: '',;;'
              startDate: "new Date()",;";";";";""
              scopeSummary: '',;;'
              paymentTerms: 'fixed',;;'
              paymentAmount: '',;;'
              endDate: "undefined",;";";";";""
              additionalClauses: "[]",;"
            };
          };
        />;
      </DialogContent>;""
    </Dialog>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
          isOpen={templateManagerOpen}'
          onClose={() => setTemplateManagerOpen(false)}'
          onSelectTemplate={handleLoadTemplate};
          currentValues={'
            formValues || {'
              projectName: '','
              startDate: "new Date(),;"";
              scopeSummary: '','
              paymentTerms: 'fixed','
              paymentAmount: '','
              endDate: undefined,;"
              additionalClauses: []","
            };
          };
        />;
      </DialogContent>
    </Dialog>;"
  );";
}";";
"";
}"";
}"
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
