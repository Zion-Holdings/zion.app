import { useState } from 'react';
import Head from 'next/head';
import { sanitizeHtml } from '../utils/sanitizeHtml';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

interface InvoiceInput {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
  notes: string;
  paymentTerms: string;
}

const defaultItem: InvoiceItem = {
  id: '1',
  description: '',
  quantity: 1,
  unitPrice: 0,
  amount: 0,
};

const defaultInput: InvoiceInput = {
  invoiceNumber: '',
  issueDate: '',
  dueDate: '',
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  companyName: '',
  companyEmail: '',
  companyAddress: '',
  items: [defaultItem],
  subtotal: 0,
  taxRate: 0,
  taxAmount: 0,
  total: 0,
  notes: '',
  paymentTerms: 'Net 30',
};

const InvoiceGenerator = () => {
  const [input, setInput] = useState<InvoiceInput>(defaultInput);
  const [invoice, setInvoice] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const calculateTotals = (items: InvoiceItem[], taxRate: number) => {
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount;
    return { subtotal, taxAmount, total };
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: any) => {
    const newItems = [...input.items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    // Calculate amount for this item
    if (field === 'quantity' || field === 'unitPrice') {
      newItems[index].amount = newItems[index].quantity * newItems[index].unitPrice;
    }
    
    const { subtotal, taxAmount, total } = calculateTotals(newItems, input.taxRate);
    setInput({ ...input, items: newItems, subtotal, taxAmount, total });
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: (input.items.length + 1).toString(),
      description: '',
      quantity: 1,
      unitPrice: 0,
      amount: 0,
    };
    setInput({ ...input, items: [...input.items, newItem] });
  };

  const removeItem = (index: number) => {
    const newItems = input.items.filter((_, i) => i !== index);
    const { subtotal, taxAmount, total } = calculateTotals(newItems, input.taxRate);
    setInput({ ...input, items: newItems, subtotal, taxAmount, total });
  };

  const generateInvoice = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error('Failed to generate invoice');
      }

      const data = await response.json();
      // Sanitize the HTML before setting it
      setInvoice(sanitizeHtml(data.invoice));
      setGenerated(true);
    } catch (error) {
      console.error('Error generating invoice:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadInvoice = () => {
    const element = document.createElement('a');
    const file = new Blob([invoice], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `invoice-${input.invoiceNumber}-${Date.now()}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invoice);
  };

  return (
    <>
      <Head>
        <title>AI Invoice Generator - Zion Marketplace</title>
        <meta name="description" content="Generate professional invoices and manage billing with AI assistance" />
      </Head>

      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI Invoice Generator
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create professional invoices, manage billing, and track payments with AI assistance. 
                Generate beautiful invoices in minutes.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Invoice Details</h2>
                
                <div className="space-y-6">
                  {/* Invoice Header */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Invoice Number *
                      </label>
                      <input
                        type="text"
                        value={input.invoiceNumber}
                        onChange={(e) => setInput({ ...input, invoiceNumber: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="INV-001"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Issue Date *
                      </label>
                      <input
                        type="date"
                        value={input.issueDate}
                        onChange={(e) => setInput({ ...input, issueDate: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Due Date *
                      </label>
                      <input
                        type="date"
                        value={input.dueDate}
                        onChange={(e) => setInput({ ...input, dueDate: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Your Company Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={input.companyName}
                          onChange={(e) => setInput({ ...input, companyName: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Email *
                        </label>
                        <input
                          type="email"
                          value={input.companyEmail}
                          onChange={(e) => setInput({ ...input, companyEmail: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="contact@company.com"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Address *
                      </label>
                      <textarea
                        value={input.companyAddress}
                        onChange={(e) => setInput({ ...input, companyAddress: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company address"
                      />
                    </div>
                  </div>

                  {/* Client Details */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Client Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Client Name *
                        </label>
                        <input
                          type="text"
                          value={input.clientName}
                          onChange={(e) => setInput({ ...input, clientName: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Client Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Client Email *
                        </label>
                        <input
                          type="email"
                          value={input.clientEmail}
                          onChange={(e) => setInput({ ...input, clientEmail: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="client@email.com"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Client Address *
                      </label>
                      <textarea
                        value={input.clientAddress}
                        onChange={(e) => setInput({ ...input, clientAddress: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Client address"
                      />
                    </div>
                  </div>

                  {/* Invoice Items */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Invoice Items</h3>
                      <button
                        onClick={addItem}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add Item
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {input.items.map((item, index) => (
                        <div key={item.id} className="bg-white/5 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-white font-medium">Item {index + 1}</h4>
                            {input.items.length > 1 && (
                              <button
                                onClick={() => removeItem(index)}
                                className="text-red-400 hover:text-red-300 transition-colors"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Description *
                              </label>
                              <input
                                type="text"
                                value={item.description}
                                onChange={(e) => updateItem(index, 'description', e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Service or product description"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Quantity
                              </label>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                min="0"
                                step="0.01"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Unit Price
                              </label>
                              <input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                min="0"
                                step="0.01"
                              />
                            </div>
                          </div>
                          
                          <div className="mt-3 text-right">
                            <span className="text-white font-semibold">
                              Amount: ${item.amount.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Totals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Tax Rate (%)
                        </label>
                        <input
                          type="number"
                          value={input.taxRate}
                          onChange={(e) => {
                            const taxRate = parseFloat(e.target.value) || 0;
                            const { subtotal, taxAmount, total } = calculateTotals(input.items, taxRate);
                            setInput({ ...input, taxRate, taxAmount, total });
                          }}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Payment Terms
                        </label>
                        <input
                          type="text"
                          value={input.paymentTerms}
                          onChange={(e) => setInput({ ...input, paymentTerms: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Net 30"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>Subtotal:</span>
                        <span>${input.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Tax ({input.taxRate}%):</span>
                        <span>${input.taxAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold text-lg border-t border-white/20 pt-2">
                        <span>Total:</span>
                        <span>${input.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Notes
                    </label>
                    <textarea
                      value={input.notes}
                      onChange={(e) => setInput({ ...input, notes: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Additional notes or terms"
                    />
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={generateInvoice}
                    disabled={loading || !input.invoiceNumber || !input.clientName || !input.companyName}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Generating Invoice...' : 'Generate Invoice'}
                  </button>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Invoice Preview</h2>
                  {generated && (
                    <div className="flex space-x-3">
                      <button
                        onClick={copyToClipboard}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Copy
                      </button>
                      <button
                        onClick={downloadInvoice}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Download
                      </button>
                    </div>
                  )}
                </div>

                {generated ? (
                  <div className="bg-white/10 rounded-lg p-6 max-h-96 overflow-y-auto">
                    <div dangerouslySetInnerHTML={{ __html: invoice }} />
                  </div>
                ) : (
                  <div className="bg-white/10 rounded-lg p-6 h-96 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-6xl mb-4">📄</div>
                      <p className="text-lg">Your invoice will appear here</p>
                      <p className="text-sm">Fill out the form and click "Generate Invoice"</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">AI Invoice Generator Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Professional invoice templates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">AI-powered invoice generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Automatic calculations and totals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Download and share capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Professional formatting and layout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceGenerator; 