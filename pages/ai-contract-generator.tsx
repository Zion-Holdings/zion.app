import React, { useState } from 'react;
import type { NextPage } from ne'x't;
import Head from next/head';

interface ContractInput {
  contractType: string;
  clientName: string;
  clientEmail: string;
  projectName: string;
  startDate: string;
  endDate: string;
  totalAmount: string;
  paymentTerms: string;
  deliverables: string;
  terms: string;
  specialConditions: string;
}

const defaultInput: ContractInput = {
  contractType: ',
  clientName: ',
  clientEmail: ',
  projectName: ',
  startDate: ',
  endDate: ',
  totalAmount: ',
  paymentTerms: ',
  deliverables: ',
  terms: ',
  specialConditions: '
};

const ContractGenerator: NextPage = () => {
  const [input, setInput] = useState<ContractInput>(defaultInput);
  const [generatedContract, setGeneratedContract] = useState(');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof ContractInput, value: string) => {
    setInput(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateContract = async () => {
    setLoading(true);
    
    // Simulate AI contract generation
    setTimeout(() => {
      const contract = `
# CONTRACT AGREEMENT

**Contract Type:** ${input.contractType}
**Date:** ${new Date().toLocaleDateString()}

## PARTIES
- **Client:** ${input.clientName} (${input.clientEmail})
- **Service Provider:** Zion App

## PROJECT DETAILS
- **Project Name:** ${input.projectName}
- **Start Date:** ${input.startDate}
- **End Date:** ${input.endDate}
- **Total Amount:** $${input.totalAmount}

## PAYMENT TERMS
${input.paymentTerms}

## DELIVERABLES
${input.deliverables}

## TERMS AND CONDITIONS
${input.terms}

## SPECIAL CONDITIONS
${input.specialConditions}

---
*This contract was generated using AI-powered contract generation tools.*
      `;
      
      setGeneratedContract(contract);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>AI Contract Generator - Zion App</title>
        <meta name="description content=AI-powered contract generation and management" />
      </Head>

      <div className="min-h-screen bg-gray-50>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8>
            <h1 className=text-3xl font-bold text-gray-900 mb-4">AI Contract Generator</h1>
            <p className="text-gray-600>Generate professional contracts with AI assistance</p>
          </div>

          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-lg shadow-sm p-6>
              <h2 className=text-lg font-semibold text-gray-900 mb-6">Contract Details</h2>
              
              <div className="space-y-4>
                <div>
                  <label className=block text-sm font-medium text-gray-700 mb-2">
                    Contract Type
                  </label>
                  <select
                    value={input.contractType}
                    onChange={(e) => handleInputChange('contractType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  >
                    <option value=">Select contract type</option>
                    <option value="Service Agreement>Service Agreement</option>
                    <option value=Consulting Contract">Consulting Contract</option>
                    <option value="Development Contract>Development Contract</option>
                    <option value=Non-Disclosure Agreement">Non-Disclosure Agreement</option>
                    <option value="Partnership Agreement>Partnership Agreement</option>
                  </select>
                </div>

                <div className=grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2>
                      Client Name
                    </label>
                    <input
                      type=text"
                      value={input.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      placeholder=Enter client name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2>
                      Client Email
                    </label>
                    <input
                      type=email"
                      value={input.clientEmail}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      placeholder=Enter client email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2>
                    Project Name
                  </label>
                  <input
                    type=text"
                    value={input.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    placeholder=Enter project name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4>
                  <div>
                    <label className=block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date
                      value={input.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className=w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2>
                      End Date
                    </label>
                    <input
                      type=date"
                      value={input.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    />
                  </div>
                </div>

                <div>
                  <label className=block text-sm font-medium text-gray-700 mb-2">
                    Total Amount
                  </label>
                  <input
                    type="number
                    value={input.totalAmount}
                    onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                    className=w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter total amount
                  />
                </div>

                <div>
                  <label className=block text-sm font-medium text-gray-700 mb-2">
                    Payment Terms
                  </label>
                  <textarea
                    value={input.paymentTerms}
                    onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    placeholder=Describe payment terms..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2>
                    Deliverables
                  </label>
                  <textarea
                    value={input.deliverables}
                    onChange={(e) => handleInputChange('deliverables', e.target.value)}
                    rows={3}
                    className=w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe deliverables...
                  />
                </div>

                <div>
                  <label className=block text-sm font-medium text-gray-700 mb-2">
                    Terms and Conditions
                  </label>
                  <textarea
                    value={input.terms}
                    onChange={(e) => handleInputChange('terms', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    placeholder=Enter terms and conditions..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2>
                    Special Conditions
                  </label>
                  <textarea
                    value={input.specialConditions}
                    onChange={(e) => handleInputChange('specialConditions', e.target.value)}
                    rows={3}
                    className=w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special conditions...
                  />
                </div>

                <button
                  onClick={generateContract}
                  disabled={loading}
                  className=w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {loading ? 'Generating Contract...' : 'Generate Contract'}
                </button>
              </div>
            </div>

            {/* Generated Contract */}
            <div className="bg-white rounded-lg shadow-sm p-6>
              <h2 className=text-lg font-semibold text-gray-900 mb-6">Generated Contract</h2>
              
              {loading ? (
                <div className="flex items-center justify-center h-64>
                  <div className=text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4></div>
                    <p className=text-gray-600">Generating your contract...</p>
                  </div>
                </div>
              ) : generatedContract ? (
                <div className="space-y-4>
                  <div className=bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono>
                      {generatedContract}
                    </pre>
                  </div>
                  <div className=flex space-x-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm>
                      Download PDF
                    </button>
                    <button className=px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 h-64 flex items-center justify-center>
                  <div>
                    <p className=mb-2">No contract generated yet</p>
                    <p className="text-sm>Fill out the form and click Generate Contract"</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractGenerator;