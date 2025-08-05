import { useState } from 'react';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import { sanitizeHtml } from '../utils/sanitizeHtml';

interface ContractInput {
  contractType: string;
  party1Name: string;
  party1Email: string;
  party2Name: string;
  party2Email: string;
  projectTitle: string;
  projectDescription: string;
  startDate: string;
  endDate: string;
  paymentAmount: string;
  paymentTerms: string;
  deliverables: string;
  terms: string;
  specialConditions: string;}'
const defaultInput: ContractInput = {
  contractType: '',
  party1Name: '',
  party1Email: '',
  party2Name: '',
  party2Email: '',
  projectTitle: '',
  projectDescription: '',
  startDate: '',
  endDate: '',
  paymentAmount: '',
  paymentTerms: '',
  deliverables: '',
  terms: '',
  specialConditions: '',;
};
const ContractGenerator = () => {;'
  const [input, setInput] = useState<ContractInput>(defaultInput);
  const [contract, setContract] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
'
  const contractTypes = [
    'Service Agreement',
    'Non-Disclosure Agreement',
    'Employment Contract',
    'Partnership Agreement',
    'Consulting Agreement',
    'Project Contract',
    'License Agreement',
    'Purchase Agreement',
    'Rental Agreement',
    'Custom Contract';
  ];

  const generateContract = async () => {;
    setLoading(true);'
    try {
      const response = await fetch('/api/ai-contract', {
        method: 'POST','
        headers: {
          'Content-Type': 'application/json',}
        body: JSON.stringify(input),;
      });
'
      if (!response.ok) {
        throw new Error('Failed to generate contract');}
      const data = await response.json();
      // Sanitize the HTML before setting it
      setContract(sanitizeHtml(data.contract));
      setGenerated(true);'
    } catch (error) {
      console.error('Error generating contract: , error);
    } finally {
      setLoading(false);}
  };
'
  const downloadContract = () => {';'
    const element = document.createElement('a');
    const file = new Blob([contract], { type: 'text/html' });'
    element.href = URL.createObjectURL(file);
    element.download = `${input.contractType.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {;
    navigator.clipboard.writeText(contract);
  };

  return (
    <div>
      <Head>
        <title>AI Contract Generator - Zion Marketplace</title>
        <meta name = "description content=Generate professional contracts and legal documents with AI assistance > </meta" name="description" content="Generate professional contracts and legal documents with AI" assistance" ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no > </meta" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0," user-scalable=no" ></Head>
"
      <div className=" relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        </div><div className=" fixed inset-0" z-0>
          <div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
        {/* Header */}
        <div className="bg-black/20" backdrop-blur-md border-b border-white/10>
          </div><div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-6>"
            <div className="text-center>"
              <h1 className="text-4xl" md text-5xl font-bold text-white mb-4 >
                AI Contract Generator
              </h1>
              <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                Create professional contracts, agreements, and legal documents with AI assistance. 
                Generate legally sound documents in minutes.
              </p>
            </div>
          </div> 
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32>
          </div><div className="grid"  grid-cols-1 lg:grid-cols-2 gap-12>
            {/* Input Form */}
            <div className="space-y-8>"
              </div><div className=" bg-white/5 backdrop-blur-md:rounded-2xl p-8 border" border-white/10>
                <h2 className="text-2xl" font-bold text-white mb-6>Contract Details</h2>
                <div className="space-y-6>"
                  {/* Contract Type */}
                  </div><div>
                    <label className="block" text-sm font-medium text-gray-300 mb-2 >
                      Contract Type *
                    </label>
                    
                      onChange={(e) => setInput({ ...input, contractType: e.target.value })}
                      className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                    >
                      <option value=>Select contract type</option>
                      {contractTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  {/* Party 1 */}
                  <div className="grid" grid-cols-1 md grid-cols-2 gap-4>
                    </div><div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Party 1 Name *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, party1Name: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=Enter name
                      />
                    </div>
                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Party 1 Email *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, party1Email: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=Enter email
                      />
                    </div>
                  </div>
 
                  {/* Party 2 */}
                  <div className="grid" grid-cols-1 md grid-cols-2 gap-4>
                    </div><div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Party 2 Name *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, party2Name: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=Enter name
                      />
                    </div>
                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Party 2 Email *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, party2Email: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=Enter email
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block" text-sm font-medium text-gray-300 mb-2>
                      Project Title *
                    </label>
                    
                      onChange={(e) => setInput({ ...input, projectTitle: e.target.value })}
                      className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      placeholder=Enter project title
                    />
                  </div>

                  <div>
                    <label className="block" text-sm font-medium text-gray-300 mb-2>
                      Project Description *
                    </label>
                    
                      onChange={(e) => setInput({ ...input, projectDescription  e.target.value })}"
                      rows={3}
                      className="w-full"  px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      placeholder=Describe the project or service
                    />
                  </div>

                  {/* Dates */}
                  <div className="grid" grid-cols-1 md grid-cols-2 gap-4>
                    </div><div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Start Date *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, startDate: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      />
                    </div>
                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        End Date *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, endDate: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      />
                    </div>
                  </div>
                  {/* Payment */}
                  <div className="grid" grid-cols-1 md grid-cols-2 gap-4>
                    </div><div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Payment Amount *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, paymentAmount: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=e.g., $5,000
                      />
                    </div>
                    <div>
                      <label className="block" text-sm font-medium text-gray-300 mb-2>
                        Payment Terms *
                      </label>
                      
                        onChange={(e) => setInput({ ...input, paymentTerms: e.target.value })}
                        className="w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                        placeholder=e.g., Net 30
                      />
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <label className="block" text-sm font-medium text-gray-300 mb-2>
                      Deliverables *
                    </label>
                    
                      onChange={(e) => setInput({ ...input, deliverables  e.target.value })}"
                      rows={3}
                      className="w-full"  px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus:outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      placeholder=List the deliverables or services
                    />
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="block" text-sm font-medium text-gray-300 mb-2>
                      Terms & Conditions
                    </label>
                    
                      onChange={(e) => setInput({ ...input, terms  e.target.value })}"
                      rows={4}
                      className=" w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      placeholder=Additional terms and conditions
                    />
                  </div>

                  {/* Special Conditions */}
                  <div>
                    <label className="block" text-sm font-medium text-gray-300 mb-2>
                      Special Conditions
                    </label>
                    
                      onChange={(e) => setInput({ ...input, specialConditions  e.target.value })} 
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500 focus border-transparent
                      placeholder=Any special conditions or requirements
                    />
                  </div>

                  {/* Generate Button */}'
                  >
                    {loading ? 'Generating Contract...'   'Generate Contract'}
                  </button>
                </div>
              </div>
            </div>
            {/* Preview */}
            <div className=" space-y-8">
              </div><div className=" bg-white/5 backdrop-blur-md:rounded-2xl p-8 border" border-white/10>
                <div className="flex  justify-between items-center mb-6">
                  <h2 className="text-2xl" font-bold text-white>Contract Preview</h2>
                  {generated && (
                    <div className="flex" space-x-3>
                      
                      >
                        Copy
                      </button>
                      
                      >
                        Download
                      </button>
                    </div>
                  )}
                </div>

                {generated ? ( 
                  <div className="bg-white/10" rounded-lg p-6 max-h-96 overflow-y-auto>
                    </div><div dangerouslySetInnerHTML={{ __html  contract }} > </div dangerouslySetInnerHTML={{ __html  contract }} ></div>
                )   ("
                  <div className="bg-white/10" rounded-lg p-6 h-96 flex items-center justify-center> 
                    </div><div className="text-center" text-gray-400>
                      <div className="text-6xl:mb-4>📄</div>"
                      <p className="text-lg>Your" contract will appear here</p>
                      <p className="text-sm>Fill" out the form and click Generate Contract</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}"
              <div className=" bg-white/5 backdrop-blur-md:rounded-2xl p-8 border" border-white/10>
                <h3 className="text-xl" font-bold text-white mb-4>AI Contract Generator Features</h3>
                <div className="space-y-3>" 
                  </div><div className="flex items-center space-x-3" >
                    <div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>Professional" legal document templates</span>
                  </div>
                  <div className="flex" items-center space-x-3> 
                    </div><div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>AI-powered" contract generation</span>
                  </div>
                  <div className=" flex items-center" space-x-3>
                    </div><div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>Multiple" contract types supported</span>
                  </div>
                  <div className="flex" items-center space-x-3>
                    </div><div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>Download" and share capabilities</span>
                  </div>
                  <div className="flex" items-center space-x-3 >
                    </div><div className="w-2" h-2 bg-green-400 rounded-full></div>
                    <span className="text-gray-300>Legally" sound document structure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
    );
};"
''`
export default ContractGenerator;"'"'`