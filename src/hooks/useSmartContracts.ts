import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types/smart-contracts';
import { TalentProfile } from '@/types/talent';
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import {logErrorToProduction} from '@/utils/productionLogger';

export function useSmartContracts() {

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  
  const generateSolidityContract = async (
    values: ContractFormValues, 
    talent: TalentProfile, 
    clientName: string
  ): Promise<string> => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke("generate-smart-contract", {
        body: {
          talentName: talent.full_name,
          clientName: clientName,
          projectName: values.projectName,
          scopeSummary: values.scopeSummary,
          startDate: values.startDate.toISOString(),
          endDate: values.endDate?.toISOString(),
          paymentTerms: values.paymentTerms,
          paymentAmount: values.paymentAmount,
          additionalClauses: values.additionalClauses || [],
        }
      });
      
      if (error) throw error;
      
      if (data && (data as any).solidityCode) {
        return (data as any).solidityCode;
      } else {
        throw new Error("Failed to generate Solidity contract");
      }
    } catch (err: any) {
      logErrorToProduction('Error generating Solidity contract:', { data: err });
      toast.error("Failed to generate smart contract");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  
  const deploySmartContract = async (
    contractCode: string,
    options: DeploymentOptions
  ): Promise<SmartContractInfo | null> => {
    if (!user?.id) {
      toast.error("You must be logged in to deploy a contract");
      return null;
    }
    
    try {
      setDeploymentStatus('deploying');
      
      // This would normally connect to MetaMask or other Web3 provider
      // For now, we'll just simulate success
      const mockTransactionHash = `0x${Array.from({length: 64}, () => 
        Math.floor(Math.random() * 16).toString(16)).join('')}`;
      
      const mockSmartContractInfo: SmartContractInfo = {
        id: crypto.randomUUID(),
        transactionHash: mockTransactionHash,
        networkName: options.network,
        blockNumber: Math.floor(Math.random() * 1000000),
        deployedAddress: `0x${Array.from({length: 40}, () => 
          Math.floor(Math.random() * 16).toString(16)).join('')}`,
        contractType: 'escrow',
        createdAt: new Date().toISOString(),
        createdBy: user.id,
        status: 'deployed'
      };
      
      // Wait to simulate blockchain transaction time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setDeploymentStatus('success');
      toast.success("Smart contract deployed successfully!");
      
      return mockSmartContractInfo;
    } catch (err: any) {
      logErrorToProduction('Error deploying smart contract:', { data: err });
      toast.error("Failed to deploy smart contract");
      setDeploymentStatus('error');
      return null;
    }
  };
  
  return {
    generateSolidityContract,
    deploySmartContract,
    isLoading,
    deploymentStatus
  };
}
