
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { join } from "https://deno.land/std@0.168.0/path/mod.ts"; // Added for path joining
// No longer needed: import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const {
      contractType, // 'simple' | 'escrow'
      clientAddress,
      talentAddress,
      projectDetailsIPFSHash,
      // paymentAmount is not directly used in template replacement but good to have for future logic
    } = await req.json();

    if (!contractType || !clientAddress || !talentAddress || !projectDetailsIPFSHash) {
      throw new Error('Missing required parameters: contractType, clientAddress, talentAddress, projectDetailsIPFSHash');
    }

    let templateFileName = '';
    if (contractType === 'simple') {
      templateFileName = 'SimpleAgreement.sol';
    } else if (contractType === 'escrow') {
      templateFileName = 'EscrowAgreement.sol';
    } else {
      throw new Error(`Invalid contractType: ${contractType}. Must be 'simple' or 'escrow'.`);
    }

    // Construct the path to the template file
    // Deno.mainModule provides the path to the main script.
    // We go up one level for 'functions', then into 'smart-contract-templates'
    const templatePath = join(new URL('.', Deno.mainModule).pathname, `../smart-contract-templates/${templateFileName}`);
    
    let solidityTemplate = '';
    try {
      solidityTemplate = await Deno.readTextFile(templatePath.substring(1)); // Remove leading '/' for Windows compatibility if needed, Deno handles paths well.
    } catch (e) {
        console.error(`Error reading template file: ${templatePath}`, e);
        throw new Error(`Could not read template file: ${templateFileName}`);
    }

    let modifiedTemplateString = solidityTemplate;

    // Perform replacements based on the new placeholder strategy
    if (contractType === 'simple') {
      modifiedTemplateString = modifiedTemplateString.replace(/{{clientAddress}}/g, clientAddress);
      modifiedTemplateString = modifiedTemplateString.replace(/{{talentAddress}}/g, talentAddress);
      modifiedTemplateString = modifiedTemplateString.replace(/{{projectDetailsIPFSHash}}/g, `"${projectDetailsIPFSHash}"`);
    } else if (contractType === 'escrow') {
      modifiedTemplateString = modifiedTemplateString.replace(/{{initialOwner}}/g, clientAddress);
      // For talentAddress, ensure it's replaced in multiple contexts correctly.
      // Using a more specific placeholder in the template for assignment vs. function calls might be safer,
      // but {{talentAddress}} should work if it's consistently the same address.
      modifiedTemplateString = modifiedTemplateString.replace(/{{talentAddress}}/g, talentAddress);
      modifiedTemplateString = modifiedTemplateString.replace(/{{projectDetailsIPFSHash}}/g, `"${projectDetailsIPFSHash}"`);
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      solidityCode: modifiedTemplateString
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing smart contract request:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to process smart contract request'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
