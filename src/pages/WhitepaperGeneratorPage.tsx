import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Import the new preview panel
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Download, Share2, Send } from 'lucide-react';



 // Added Send icon
import { toast } from "sonner";
import { logErrorToProduction } from '@/utils/productionLogger';


interface WhitepaperSection {
  id: string;
  title: string;
  content: string;
}

interface DistributionItem {
  id: string;
  name: string;
  percentage: string;
}

interface DistributionChartItem {
    name: string;
    value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#FF00AA', '#00AAAA', '#AAAA00'];

// Helper for slugifying filenames
const slugify = (text: string): string => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/--+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};


const WhitepaperGeneratorPage: React.FC = () => {
  const [tokenName, setTokenName] = useState('My Awesome Token');
  const [tokenSupply, setTokenSupply] = useState<string>('1000000000');
  const [useCases, setUseCases] = useState('To facilitate transactions and reward users in our innovative freelance AI marketplace. It will be used for payments, staking for dispute resolution, and accessing premium features.');
  const [rewardsLogic, setRewardsLogic] = useState('Users earn tokens by completing projects and participating in platform governance. A percentage of transaction fees is burned, creating a deflationary pressure. Staking rewards are distributed weekly.');
  const [distributionBreakdown, setDistributionBreakdown] = useState('');
  const [governanceLogic, setGovernanceLogic] = useState('Token holders can vote on platform upgrades, fee structures, and policy changes. Staking tokens increases voting power. A decentralized council oversees proposal implementation.');
  const [legalDisclaimers, setLegalDisclaimers] = useState('This whitepaper is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. The token is a utility token and should not be considered an investment. Please consult with a legal professional in your jurisdiction.');

  const [distributionData, setDistributionData] = useState<DistributionItem[]>([
    { id: crypto.randomUUID(), name: 'Team & Advisors', percentage: '15' },
    { id: crypto.randomUUID(), name: 'Private Sale Investors', percentage: '20' },
    { id: crypto.randomUUID(), name: 'Ecosystem Development Fund', percentage: '35' },
    { id: crypto.randomUUID(), name: 'Community Rewards & Airdrops', percentage: '20' },
    { id: crypto.randomUUID(), name: 'Public Sale Allocation', percentage: '10' },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isSubmittingToCounsel, setIsSubmittingToCounsel] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shareableLink, setShareableLink] = useState<string | null>(null);
  const [currentSharedWhitepaperId, setCurrentSharedWhitepaperId] = useState<string | null>(null); // For public/private toggle
  const [currentSharedWhitepaperIsPublic, setCurrentSharedWhitepaperIsPublic] = useState<boolean | null>(null); // For public/private toggle
  const [rawDraft, setRawDraft] = useState<string | null>(null);
  const [sections, setSections] = useState<WhitepaperSection[]>([]);
  const [showRawDraft, setShowRawDraft] = useState(false);

  const previewPanelRef = React.useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel) setError(null);
   
  }, [tokenName, tokenSupply, useCases, rewardsLogic, distributionData, governanceLogic, legalDisclaimers, sections]);


  const parseWhitepaperDraft = useCallback((draft: string): WhitepaperSection[] => {
    if (!draft) return [];
    const sectionRegex = /(?:^|\n)(?:##\s*(.*?)\s*\n|^\*\*(.*?):\*\*\s*\n)([\s\S]*?)(?=\n(?:##\s|\*\*.+:\*\*)|$)/g;
    const parsed: WhitepaperSection[] = [];
    let match;
    let idCounter = 0;
    while ((match = sectionRegex.exec(draft)) !== null) {
      const title = (match[1] || match[2] || `Section ${idCounter + 1}`).trim();
      const content = (match[3] || '').trim();
      parsed.push({ id: `section-${idCounter++}-${title.toLowerCase().replace(/\s+/g, '-')}`, title, content });
    }
    if (parsed.length === 0 && draft.trim().length > 0) {
      parsed.push({ id: 'section-0-full-draft', title: 'Full Draft', content: draft.trim() });
    }
    return parsed;
  }, []);

  const handleDistributionChange = (id: string, field: 'name' | 'percentage', value: string) => {
    setDistributionData(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addDistributionItem = () => {
    setDistributionData(prev => [...prev, { id: crypto.randomUUID(), name: '', percentage: '' }]);
  };

  const removeDistributionItem = (id: string) => {
    setDistributionData(prev => prev.filter(item => item.id !== id));
  };

  const distributionChartData: DistributionChartItem[] = React.useMemo(() => {
    return distributionData
      .map(item => ({
        name: item.name || 'Unnamed',
        value: parseFloat(item.percentage) || 0,
      }))
      .filter(item => item.value > 0);
  }, [distributionData]);

  const handleGenerateWhitepaper = async () => {
    setIsLoading(true);
    setError(null);
    setRawDraft(null);

    const processedDistData = distributionChartData.map(d => ({name: d.name, percentage: d.value}));
    const totalPercentage = processedDistData.reduce((sum, item) => sum + item.percentage, 0);
    if (totalPercentage > 100) {
        setError("Total distribution percentage cannot exceed 100%.");
        setIsLoading(false);
        return;
    }
     if (totalPercentage < 100 && totalPercentage > 0 && processedDistData.length > 0) {
        setError(`Warning: Total distribution is ${totalPercentage}%. Consider adjusting to sum to 100%.`);
    } else if (totalPercentage === 0 && processedDistData.length > 0 && distributionData.some(d => d.name && d.percentage)) {
        setError("Distribution percentages are all zero or invalid.");
        setIsLoading(false);
        return;
    }

    try {
      const apiPayload: any = {
        tokenName,
        tokenSupply: tokenSupply.toString(),
        useCases,
        rewardsLogic,
        governanceLogic,
        legalDisclaimers,
        distributionBreakdown,
      };

      if (processedDistData.length > 0) {
        apiPayload.distributionData = processedDistData;
      }

      const { data, error: funcError } = await supabase.functions.invoke('generate-whitepaper', {
        body: apiPayload,
      });

      if (funcError) {
        throw new Error(`Supabase function error: ${funcError.message}`);
      }
      if (data && (data as any).error) {
        throw new Error(`Generation error: ${(data as any).error}`);
      }
      if (!data || !(data as any).whitepaperDraft) {
        throw new Error('No whitepaper draft received from the function.');
      }
      setRawDraft((data as any).whitepaperDraft);
      setSections(parseWhitepaperDraft((data as any).whitepaperDraft));
    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating whitepaper' });
      setError(e.message || 'An unexpected error occurred.');
      setSections([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSectionContentChange = (id: string, newContent: string) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === id ? { ...section, content: newContent } : section
      )
    );
  };

  const assembleMarkdownContent = (): string => {
    let mdContent = `# ${tokenName} - Whitepaper\n\n`;
    mdContent += `**Total Supply:** ${tokenSupply}\n\n`;

    sections.forEach(section => {
      mdContent += `## ${section.title}\n\n${section.content}\n\n`;
      if (section.title.toLowerCase().includes('token distribution')) {
        if (distributionChartData.length > 0) {
          mdContent += `### Distribution Details\n\n`;
          distributionChartData.forEach(item => {
            mdContent += `- **${item.name}:** ${item.value}%\n`;
          });
          mdContent += `\n${distributionBreakdown ? `**Additional Notes:** ${distributionBreakdown}\n\n` : ''}`;
        } else if (distributionBreakdown) {
           mdContent += `**Distribution Notes:** ${distributionBreakdown}\n\n`;
        }
      }
    });
    return mdContent;
  };

  const handleDownloadMarkdown = () => {
    setIsDownloading(true);
    try {
      const markdown = assembleMarkdownContent();
      const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${slugify(tokenName || 'whitepaper')}_whitepaper.md`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setError(null);
    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading Markdown' });
        setError("Failed to download Markdown file. " + e.message);
    } finally {
        setIsDownloading(false);
    }
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    setError(null);
    if (!previewPanelRef.current) {
      setError("Preview panel is not available. Cannot generate PDF.");
      setIsDownloading(false);
      return;
    }

    try {
      // Temporarily ensure the entire preview panel content is visible for capture if it's scrollable internally.
      // This might involve temporarily changing styles, which is complex and error-prone.
      // A better approach for very long content is to paginate in jsPDF directly.
      // For now, we capture what's visible or rely on html2canvas's capabilities with scroll.

      const html2canvasModule = await import('html2canvas');
      const html2canvas = html2canvasModule.default;
      const { default: jsPDF } = await import('jspdf');

      const canvas = await html2canvas(previewPanelRef.current, {
        scale: 2, // Increase scale for better resolution
        useCORS: true, // If there are any external images/fonts (though unlikely here)
        logging: true, // For debugging
        onclone: (documentClone) => {
            // You might need to re-apply some styles here if they don't transfer well
            // For example, ensure SVGs from recharts are fully rendered.
            // This is advanced usage of html2canvas.
        }
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight; // Or position = position - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${slugify(tokenName || 'whitepaper')}_whitepaper.pdf`);

    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error downloading PDF' });
      setError("Failed to download PDF file. " + e.message);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleGenerateShareableLink = async () => {
    if (sections.length === 0) {
      toast.error("Please generate the whitepaper content first before creating a shareable link.");
      return;
    }
    setIsSharing(true);
    setError(null);
    setShareableLink(null);
    setCurrentSharedWhitepaperId(null);
    setCurrentSharedWhitepaperIsPublic(null);
    try {
      const whitepaperPayload = {
        tokenName,
        tokenSupply,
        sections,
        distributionChartData,
        distributionBreakdown,
      };
      const { data: response, error: funcError } = await supabase.functions.invoke('create-shared-whitepaper', {
        body: whitepaperPayload,
      });

      if (funcError) throw new Error(`Supabase function error: ${funcError.message}`);
      if (!response) throw new Error('No response received from create-shared-whitepaper function');
      if ((response as any).error) throw new Error(`Error from create-shared-whitepaper: ${(response as any).error}`);
      if (!(response as any).id) throw new Error('Failed to get ID for shareable link.');

      const link = `${window.location.origin}/whitepaper/view/${(response as any).id}`;
      setShareableLink(link);
      setCurrentSharedWhitepaperId((response as any).id);
      setCurrentSharedWhitepaperIsPublic((response as any).is_public);
      toast.success("Shareable link generated!");
    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' });
      setError("Failed to generate shareable link: " + e.message);
      toast.error("Failed to generate shareable link.");
    } finally {
      setIsSharing(false);
    }
  };

  const handleTogglePublicStatus = async () => {
    if (!currentSharedWhitepaperId || currentSharedWhitepaperIsPublic === null) {
        toast.error("No shareable whitepaper selected or status is unknown.");
        return;
    }
    // Optimistically update UI, or wait for response for certainty
    const newPublicStatus = !currentSharedWhitepaperIsPublic;

    // For optimistic update:
    // setCurrentSharedWhitepaperIsPublic(newPublicStatus);

    try {
        const { data: response, error: funcError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus },
        });
        if (funcError) throw new Error(`Supabase function error: ${funcError.message}`);
        if (!response) throw new Error('No response received from set-shared-whitepaper-public-status function');
        if ((response as any).error) throw new Error(`Error from set-shared-whitepaper-public-status: ${(response as any).error}`);

        setCurrentSharedWhitepaperIsPublic((response as any).is_public); // Update with actual status from DB
        toast.success(`Whitepaper is now ${(response as any).is_public ? 'public' : 'private'}.`);

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error toggling public status' });
        setError("Failed to update public status: " + e.message);
        toast.error("Failed to update public status.");
        // Revert optimistic update if it failed:
        // setCurrentSharedWhitepaperIsPublic(!newPublicStatus);
    }
  };

  const handleSubmitToCounsel = async () => {
    if (sections.length === 0) {
        toast.error("Please generate and finalize the whitepaper before submitting.");
        return;
    }
    setIsSubmittingToCounsel(true);
    setError(null);
    try {
        let linkToSubmit = shareableLink;
        let whitepaperIdToSubmit = currentSharedWhitepaperId;

        if (!linkToSubmit || !whitepaperIdToSubmit) {
            toast.info("Generating a shareable link first to submit to counsel...");
            const whitepaperPayload = { tokenName, tokenSupply, sections, distributionChartData, distributionBreakdown };
            const { data: linkResponse, error: linkFuncError } = await supabase.functions.invoke('create-shared-whitepaper', {
                body: whitepaperPayload,
            });
            if (linkFuncError) throw new Error(`Failed to create link for counsel: ${linkFuncError.message}`);
            if (!linkResponse) throw new Error('No response received from create-shared-whitepaper function for counsel');
            if ((linkResponse as any).error) throw new Error(`Error from create-shared-whitepaper function: ${(linkResponse as any).error}`);
            if (!(linkResponse as any).id) throw new Error('Failed to get ID for shareable link for counsel.');

            linkToSubmit = `${window.location.origin}/whitepaper/view/${(linkResponse as any).id}`;
            whitepaperIdToSubmit = (linkResponse as any).id;
            setShareableLink(linkToSubmit);
            setCurrentSharedWhitepaperId(whitepaperIdToSubmit);
            setCurrentSharedWhitepaperIsPublic((linkResponse as any).is_public);
        }

        // Ensure it's public before submitting, or handle as per requirements
        if (currentSharedWhitepaperIsPublic === false) {
            toast.info("Making whitepaper public before submitting to counsel...");
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true },
            });
            if (statusError) throw new Error(`Failed to make whitepaper public: ${statusError.message}`);
            if (!statusResponse) throw new Error('No response received from set-shared-whitepaper-public-status function');
            if ((statusResponse as any).error) throw new Error((statusResponse as any).error);
            setCurrentSharedWhitepaperIsPublic(true);
        }


        const { data: notifyResponse, error: notifyError } = await supabase.functions.invoke('notify-legal-team', {
            body: {
                whitepaperId: whitepaperIdToSubmit,
                sharableLink: linkToSubmit, // Corrected variable name
                tokenName: tokenName,
            }
        });
        if (notifyError) throw new Error(`Failed to notify counsel: ${notifyError.message}`);
        if (!notifyResponse) throw new Error('No response received from notify-legal-team function');
        if ((notifyResponse as any).error) throw new Error(`Error from notify-legal-team: ${(notifyResponse as any).error}`);

        toast.success("Whitepaper submitted to counsel successfully!");

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error submitting to counsel' });
        setError("Failed to submit to counsel: " + e.message);
        toast.error("Failed to submit to counsel: " + e.message);
    } finally {
        setIsSubmittingToCounsel(false);
    }
};


  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen p-4 gap-4 bg-gray-100">
      {/* Left Column: Inputs and Editors */}
      <div className="md:w-1/2 lg:w-2/5 xl:w-1/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-center flex-grow">Whitepaper Configuration</h1>
            <div className="flex space-x-1">
                <Button onClick={handleDownloadMarkdown} disabled={isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel } variant="outline" size="sm" title="Download as Markdown">
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">MD</span>
                </Button>
                <Button onClick={handleDownloadPdf} disabled={isDownloading || sections.length === 0 || isLoading || isSharing || isSubmittingToCounsel} variant="outline" size="sm" title="Download as PDF">
                    <Download className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">PDF</span>
                </Button>
                 <Button onClick={handleGenerateShareableLink} disabled={isSharing || sections.length === 0 || isLoading || isDownloading || isSubmittingToCounsel} variant="outline" size="sm" title="Generate Shareable Link">
                    <Share2 className="h-4 w-4" /> <span className="ml-1 hidden sm:inline">Share</span>
                </Button>
            </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* ... (Input fields remain the same) ... */}
           <div>
            <label htmlFor="tokenName" className="block text-sm font-medium">Token Name:</label>
            <Input id="tokenName" value={tokenName} onChange={(e) => setTokenName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="tokenSupply" className="block text-sm font-medium">Token Supply:</label>
            <Input id="tokenSupply" value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="useCases" className="block text-sm font-medium">Use Cases:</label>
            <textarea id="useCases" value={useCases} onChange={(e) => setUseCases(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>
          <div>
            <label htmlFor="rewardsLogic" className="block text-sm font-medium">Rewards Logic:</label>
            <textarea id="rewardsLogic" value={rewardsLogic} onChange={(e) => setRewardsLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>

          {/* Token Distribution Inputs */}
          <div className="space-y-3 p-3 border rounded-md">
            <h2 className="text-lg font-semibold">Token Distribution</h2>
            {distributionData.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <Input type="text" placeholder="Category" value={item.name} onChange={(e) => handleDistributionChange(item.id, 'name', e.target.value)} className="flex-grow"/>
                <Input type="number" placeholder="%" value={item.percentage} onChange={(e) => handleDistributionChange(item.id, 'percentage', e.target.value)} className="w-24" min="0" max="100"/>
                <Button variant="ghost" size="icon" onClick={() => removeDistributionItem(item.id)} aria-label="Remove"><Trash2 className="h-4 w-4"/></Button>
              </div>
            ))}
            <Button type="button" onClick={addDistributionItem} variant="outline" className="w-full">Add Distribution Item</Button>
            <div>
              <label htmlFor="distributionBreakdownDetails" className="block text-sm font-medium">Additional Distribution Details (Text):</label>
              <textarea id="distributionBreakdownDetails" value={distributionBreakdown} onChange={(e) => setDistributionBreakdown(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={2}/>
            </div>
          </div>

          <div>
            <label htmlFor="governanceLogic" className="block text-sm font-medium">Governance Logic:</label>
            <textarea id="governanceLogic" value={governanceLogic} onChange={(e) => setGovernanceLogic(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>
          <div>
            <label htmlFor="legalDisclaimers" className="block text-sm font-medium">Legal Disclaimers:</label>
            <textarea id="legalDisclaimers" value={legalDisclaimers} onChange={(e) => setLegalDisclaimers(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={3}/>
          </div>
          {/* END OF INPUT FIELDS */}

          <Button
            type="button"
            onClick={handleGenerateWhitepaper}
            disabled={isLoading || isDownloading || isSharing || isSubmittingToCounsel}
            size="lg"
            className="w-full"
          >
            {isLoading ? 'Generating Draft...' : 'Generate Whitepaper Draft'}
          </Button>

          {isLoading && <p className="text-center text-sm text-blue-600">Draft generation in progress...</p>}
          {error && !isLoading && !isDownloading && !isSharing && !isSubmittingToCounsel &&
            <p className="text-center text-sm text-red-600 p-2 bg-red-50 rounded-md">{error}</p>
          }

          {shareableLink && !isSharing && currentSharedWhitepaperId && (
            <div className="mt-4 p-3 border rounded-md bg-green-50">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-green-700">Shareable Link:</label>
                <Button
                    onClick={handleTogglePublicStatus}
                    variant="outline"
                    size="sm" // smaller button
                    disabled={isSharing} // Disable while another share operation is in progress
                    className={currentSharedWhitepaperIsPublic ? "bg-red-100 hover:bg-red-200" : "bg-green-100 hover:bg-green-200"}
                >
                    {currentSharedWhitepaperIsPublic ? 'Make Private' : 'Make Public'}
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Input type="text" value={shareableLink} readOnly className="flex-grow bg-white text-xs"/>
                <Button variant="outline" size="sm" onClick={() => {
                    navigator.clipboard.writeText(shareableLink);
                    toast.success("Link copied to clipboard!");
                }}>Copy</Button>
              </div>
               {currentSharedWhitepaperIsPublic !== null && (
                <p className="text-xs mt-1 text-gray-600">
                    Currently: {currentSharedWhitepaperIsPublic ? "Public" : "Private (Only admins can view)"}
                </p>
              )}
            </div>
          )}
           {isSharing && <p className="text-center text-sm text-blue-600">Generating shareable link...</p>}

          {/* Submit to Counsel Button */}
          {sections.length > 0 && (
            <Button
                type="button"
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant="default"
                size="lg"
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
                <Send className="mr-2 h-4 w-4" />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>
          )}
           {isSubmittingToCounsel && <p className="text-center text-sm text-blue-600">Submitting to counsel...</p>}

        </form>

        {/* Section Editors */}
        {sections.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Generated Sections</h2>
            {sections.map((section) => (
              <WhitepaperSectionEditor
                key={section.id}
                title={section.title}
                content={section.content}
                onContentChange={(newContent) => handleSectionContentChange(section.id, newContent)}
              />
            ))}
          </div>
        )}
        {rawDraft && (
            <div className="mt-6 p-3 border rounded-md">
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant="outline" size="sm" className="w-full">
                {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {showRawDraft && (
                <pre className="mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded">
                {rawDraft}
                </pre>
            )}
            </div>
        )}
      </div>

      {/* Right Column: Preview Panel - Pass ref here */}
      <div id="preview-panel-content" ref={previewPanelRef} className="md:w-1/2 lg:w-3/5 xl:w-2/3 p-1">
        <WhitepaperPreviewPanel
            sections={sections}
            distributionChartData={distributionChartData}
            tokenName={tokenName}
            tokenSupply={tokenSupply}
        />
      </div>
    </div>
  );
};

export default WhitepaperGeneratorPage;
