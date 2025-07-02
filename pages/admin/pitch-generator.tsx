import AdminLayout from '@/components/admin/AdminLayout';
import InputFields from '@/components/admin/pitch-generator/InputFields';
import DataSync from '@/components/admin/pitch-generator/DataSync';
import SlideEditor from '@/components/admin/pitch-generator/SlideEditor';
import { useAuth } from '@/hooks/useAuth';
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import jsPDF from 'jspdf';
// Dynamic import for html2canvas to reduce bundle size
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';


interface Slide {
  id: string;
  title: string;
  content: string;
  type: string;
  chartType?: 'bar' | 'funnel' | 'timeline';
}

const PitchGeneratorPage: React.FC = () => {
  const { user, isLoading: loading } = useAuth();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<'inputs' | 'data' | 'editor'>('inputs');
  const [inputData, setInputData] = useState<any>(null);
  const [syncedData, setSyncedData] = useState<any>(null);
  const [generatedSlides, setGeneratedSlides] = useState<Slide[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [deckVersion, setDeckVersion] = useState<number>(1);
  const [versionHistory, setVersionHistory] = useState<any[]>([]);
  const [isSavingVersion, setIsSavingVersion] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (!loading && user && !['founder', 'admin', 'finance'].includes(user.role as string)) {
      router.push('/admin');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user && !syncedData) {
      const placeholderSyncedData = {
        activeUsers30d: '12,000+',
        gmv: '$1.5M',
        mrr: '$120K',
        yoyGrowth: '160%',
        totalCompletedProjects: '550+',
        globalReach: '80+ Countries',
        marketplaceConversionFunnel: {
          visitors: 120000,
          signups: 6000,
          activeListings: 1200,
          completedTransactions: 250,
        },
        notableClients: [
          { name: 'Tech Corp', caseStudyUrl: '#' },
          { name: 'Innovate Ltd', caseStudyUrl: '#' },
        ],
      };
      setSyncedData(placeholderSyncedData);
    }
  }, [user, syncedData]);

  const handleSaveVersion = async () => {
    if (generatedSlides.length === 0) {
      alert("No deck to save!");
      return;
    }
    setIsSavingVersion(true);
    setError(null);
    try {
      // Since Supabase is disabled, use Auth0 for authentication instead
      // For now, we'll simulate the save operation without requiring a token
      let token = null;
      
      try {
        const sessionResult = await supabase.auth.getSession();
        // Handle mock client response where session is always null - use type assertion
        token = (sessionResult?.data?.session as any)?.access_token || null;
      } catch (authError) {
        logWarn('Supabase auth disabled, using Auth0 fallback for admin operations');
        // In a real scenario, we'd get the Auth0 token here
        // For now, we'll proceed without a token since this is an admin operation
      }

      logInfo('Simulating API call to /api/admin/pitch-decks/save with slides data.');
      // const response = await fetch('/api/admin/pitch-decks/save', {
      //   method: 'POST',
      //   headers: { 
      //     'Content-Type': 'application/json', 
      //     ...(token && { 'Authorization': `Bearer ${token}` })
      //   },
      //   body: JSON.stringify({ slides: generatedSlides, parentVersion: deckVersion }),
      // });
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Failed to save version');
      // }
      // const savedVersionData = await response.json();

      await new Promise(resolve => setTimeout(resolve, 700));
      const newVersionNumber = deckVersion; // Current version is saved, next one will be +1
      const newVersionEntry = {
        version: newVersionNumber,
        savedAt: new Date().toISOString(),
        slideCount: generatedSlides.length,
        notes: `Saved version ${newVersionNumber}` // Example note
      };

      setDeckVersion(newVersionNumber + 1); // Increment for the *next* working version
      setVersionHistory(prev => [newVersionEntry, ...prev].sort((a,b) => b.version - a.version));
      alert(`Version ${newVersionNumber} saved successfully (mocked). Now working on v${newVersionNumber + 1}.`);

    } catch (e: any) {
      logErrorToProduction('Failed to save version:', { data:  e });
      setError(e.message || 'Failed to save version.');
    } finally {
      setIsSavingVersion(false);
    }
  };

  const fetchVersionHistory = async () => {
    if (versionHistory.length > 0 && deckVersion > 1) return; // Avoid refetching if already populated unless it's initial load

    setError(null);
    try {
        // Simulate API Call
        // const session = await supabase.auth.getSession();
        // const token = session?.data?.session?.access_token;
        // if (!token) throw new Error("Authentication token not found.");
        // const response = await fetch('/api/admin/pitch-decks/history', {
        //   headers: { 'Authorization': `Bearer ${token}` },
        // });
        // if (!response.ok) throw new Error('Failed to fetch version history');
        // const historyData = await response.json();
        // setVersionHistory(historyData);

        await new Promise(resolve => setTimeout(resolve, 500));
        const mockHistory = [
            { version: 1, savedAt: new Date(Date.now() - 100000000).toISOString(), slideCount: 10, notes: "Initial AI draft" },
        ];
        // Sort history descending by version
        const sortedHistory = mockHistory.sort((a,b) => b.version - a.version);
        setVersionHistory(sortedHistory);

        if (sortedHistory.length > 0) {
            setDeckVersion((sortedHistory[0]?.version ?? 0) + 1);
        } else {
            setDeckVersion(1); // Start with v1 if no history
        }
    } catch (e:any) {
        logErrorToProduction('Failed to fetch version history:', { data:  e });
        setError(e.message || 'Failed to fetch version history.');
    }
  };

  useEffect(() => {
    if (user) {
        fetchVersionHistory();
    }
  }, [user, fetchVersionHistory]);


  const handleInputSubmit = (data: any) => {
    setInputData(data);
    setCurrentStep('data');
  };

  const handleDataConfirm = () => {
    setCurrentStep('editor');
    if (generatedSlides.length === 0) {
        handleGenerateDeck();
    }
  };

  const handleGenerateDeck = async () => {
    if (!inputData || !syncedData) {
      setError('Input data or synced data is missing.');
      return;
    }
    setIsGenerating(true);
    setError(null);

    try {
      // Handle mock Supabase client - session is always null
      const sessionResult = await supabase.auth.getSession();
      const token = (sessionResult?.data?.session as any)?.access_token || null;

      if (!token) {
        // Since Supabase is disabled, generate mock slides instead of making API calls
        logWarn('Supabase auth disabled - generating mock pitch deck slides');
        
        // Generate mock slides for demonstration
        const mockSlides: Slide[] = [
          {
            id: '1',
            title: 'Problem Statement',
            content: 'Businesses struggle to find reliable AI talent and services in a fragmented marketplace.',
            type: 'text'
          },
          {
            id: '2', 
            title: 'Solution',
            content: 'Zion.app provides a unified AI services marketplace connecting businesses with verified AI professionals.',
            type: 'text'
          },
          {
            id: '3',
            title: 'Market Opportunity',
            content: 'The global AI services market is valued at $150B and growing at 25% annually.',
            type: 'text'
          },
          {
            id: '4',
            title: 'Traction',
            content: `Active Users: ${syncedData.activeUsers30d}\nGMV: ${syncedData.gmv}\nMRR: ${syncedData.mrr}\nYoY Growth: ${syncedData.yoyGrowth}`,
            type: 'text'
          },
          {
            id: '5',
            title: 'Business Model',
            content: 'Revenue streams: marketplace fees (3%), subscription plans ($99-$999/mo), and premium services.',
            type: 'text'
          }
        ];

        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
        setGeneratedSlides(mockSlides);
        setIsGenerating(false);
        return;
      }

      const response = await fetch('/api/admin/generate-pitch-deck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          prompt: "Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.",
          inputData,
          syncedData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedSlides(data.slides || []);
       // When a new deck is generated, it's based on the current deckVersion being edited.
      // alert(`New deck generated for Version ${deckVersion}. Save if you want to keep it.`);

    } catch (e: any) {
      logErrorToProduction('Failed to generate pitch deck:', { data:  e });
      setError(e.message || 'Failed to generate pitch deck. Check console for details.');
      setGeneratedSlides([]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSlidesUpdate = (updatedSlides: Slide[]) => {
    setGeneratedSlides(updatedSlides);
  };

  const handleExportToPDF = async () => {
    if (generatedSlides.length === 0) {
      alert("No slides to export!");
      return;
    }
    setIsExporting(true);
    setError(null);

    try {
      const pdf = new jsPDF('landscape', 'pt', 'a4');
      for (let i = 0; i < generatedSlides.length; i++) {
        const slide = generatedSlides[i];
        if (!slide) continue; // Skip if slide is undefined
        
        const slideElement = document.createElement('div');
        slideElement.style.width = '1024px';
        slideElement.style.height = '576px';
        slideElement.style.backgroundColor = 'white';
        slideElement.style.padding = '40px';
        slideElement.style.border = '1px solid #ccc';
        slideElement.style.boxSizing = 'border-box';
        slideElement.style.display = 'flex';
        slideElement.style.flexDirection = 'column';
        slideElement.style.justifyContent = 'center';
        slideElement.style.alignItems = 'center';
        slideElement.style.fontFamily = 'Arial, sans-serif';

        const titleElement = document.createElement('h2');
        titleElement.innerText = slide.title;
        titleElement.style.fontSize = '32px';
        titleElement.style.marginBottom = '30px';
        titleElement.style.textAlign = 'center';
        slideElement.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.innerText = slide.content;
        contentElement.style.fontSize = '18px';
        contentElement.style.textAlign = 'center';
        contentElement.style.whiteSpace = 'pre-wrap';
        slideElement.appendChild(contentElement);

        slideElement.style.position = 'absolute';
        slideElement.style.left = '-9999px';
        document.body.appendChild(slideElement);

        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(slideElement, {
          scale: 2, useCORS: true, logging: false,
        });
        const imgData = canvas.toDataURL('image/png');
        document.body.removeChild(slideElement);

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const aspectRatio = imgProps.width / imgProps.height;
        let newImgWidth = pdfWidth;
        let newImgHeight = newImgWidth / aspectRatio;
        if (newImgHeight > pdfHeight) {
            newImgHeight = pdfHeight;
            newImgWidth = newImgHeight * aspectRatio;
        }
        const xOffset = (pdfWidth - newImgWidth) / 2;
        const yOffset = (pdfHeight - newImgHeight) / 2;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', xOffset, yOffset, newImgWidth, newImgHeight);
      }
      pdf.save(`pitch-deck-v${deckVersion -1}.pdf`); // Save with the version number that was just saved
    } catch (e: any) {
      logErrorToProduction('Failed to export PDF:', { data:  e });
      setError(e.message || 'Failed to export PDF.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportToGoogleSlides = () => {
    alert('Export to Google Slides - Not implemented yet. This would require Google API integration.');
  };

  if (loading || !user ) {
     return (
      <AdminLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg">Loading user information...</p>
        </div>
      </AdminLayout>
    );
  }

  if (user && !['founder', 'admin', 'finance'].includes(user.role as string)) {
    return (
      <AdminLayout>
        <div className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-lg">You do not have permission to view this page.</p>
          <button onClick={() => router.push('/admin')} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
            Go to Admin Dashboard
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <NextSeo
        title="Pitch Deck Generator"
        description="AI-powered tool to create data-driven pitch decks"
        openGraph={{ title: 'Pitch Deck Generator', description: 'AI-powered tool to create data-driven pitch decks' }}
      />
      <div className="container mx-auto p-4 md:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">AI-Powered Pitch Deck Generator</h1>
          <p className="text-gray-600">Create a data-driven pitch deck in minutes.</p>
        </header>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {currentStep === 'inputs' && (
          <section id="input-fields" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Step 1: Provide Company Details</h2>
            <InputFields onSubmit={handleInputSubmit} />
          </section>
        )}

        {currentStep === 'data' && inputData && (
          <section id="data-sync" className="bg-white p-6 rounded-lg shadow-lg mt-8">
             <h2 className="text-2xl font-semibold mb-4 text-gray-700">Step 2: Confirm Marketplace Data</h2>
            {syncedData ? <DataSync /> : <p>Loading synced data...</p>}
            <div className="mt-6 flex justify-end space-x-3">
                <button
                    onClick={() => setCurrentStep('inputs')}
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Back to Inputs
                </button>
                <button
                    onClick={handleDataConfirm}
                    disabled={isGenerating}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {isGenerating ? 'Generating...' : (generatedSlides.length > 0 ? 'Proceed to Editor / Regenerate' : 'Generate Pitch Deck & Edit')}
                </button>
            </div>
          </section>
        )}

        {currentStep === 'editor' && inputData && syncedData && (
          <section id="slide-editor" className="mt-8">
            <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div className="mb-2 md:mb-0">
                  <h2 className="text-2xl font-semibold text-gray-700">Step 3: Edit Your Pitch Deck</h2>
                  <p className="text-sm text-gray-500">Current working on: <span className="font-semibold text-indigo-600">v{deckVersion}</span></p>
                </div>
                <div className="flex items-center space-x-2 flex-wrap">
                    <button
                        onClick={() => setCurrentStep('data')}
                        disabled={isGenerating || isExporting || isSavingVersion}
                        className="py-2 px-3 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                        Back to Data
                    </button>
                    <button
                        onClick={handleGenerateDeck}
                        disabled={isGenerating || isExporting || isSavingVersion}
                        className="inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 disabled:opacity-50"
                    >
                        {isGenerating ? 'Regenerating...' : 'Regenerate AI Deck'}
                    </button>
                    <button
                      onClick={handleSaveVersion}
                      disabled={isSavingVersion || generatedSlides.length === 0 || isGenerating || isExporting}
                      className="inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50"
                    >
                      {isSavingVersion ? 'Saving...' : `Save v${deckVersion}`}
                    </button>
                    <button
                      onClick={handleExportToPDF}
                      disabled={isExporting || generatedSlides.length === 0 || isGenerating || isSavingVersion}
                      className="inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                    >
                      {isExporting ? 'Exporting PDF...' : 'Export PDF'}
                    </button>
                    <button
                      onClick={handleExportToGoogleSlides}
                      disabled={generatedSlides.length === 0 || isGenerating || isExporting || isSavingVersion}
                      className="inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50"
                    >
                      Google Slides
                    </button>
                </div>
            </div>

            {isGenerating && <p className="text-center py-4">Generating slides, please wait...</p>}
            {isExporting && <p className="text-center py-4 text-green-700">Exporting PDF, please wait...</p>}
            {isSavingVersion && <p className="text-center py-4 text-teal-700">Saving version, please wait...</p>}

            {!isGenerating && !isExporting && !isSavingVersion && generatedSlides.length > 0 && (
              <SlideEditor initialSlides={generatedSlides} onSlidesChange={handleSlidesUpdate} />
            )}
            {!isGenerating && !isExporting && !isSavingVersion && generatedSlides.length === 0 && !error && (
              <p className="text-center text-gray-500 py-8">Your generated slides will appear here. Click "Regenerate" if they don't load.</p>
            )}

            {versionHistory.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Version History</h3>
                <ul className="space-y-3 max-h-60 overflow-y-auto"> {/* Added max-h and overflow for scroll */}
                  {versionHistory.map((versionItem, index) => (
                    <li key={index} className="p-3 bg-gray-50 rounded-md shadow-sm flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-indigo-600">Version {versionItem.version}</span>
                        <span className="text-xs text-gray-500 ml-2">({new Date(versionItem.savedAt).toLocaleString()})</span>
                        <p className="text-sm text-gray-600 mt-1">Slides: {versionItem.slideCount}{versionItem.notes ? ` - Notes: ${versionItem.notes}` : ''}</p>
                      </div>
                      <button
                          // onClick={() => handleLoadVersion(versionItem.version)}
                          className="text-xs py-1 px-2 border border-indigo-500 text-indigo-600 rounded hover:bg-indigo-50 disabled:opacity-50"
                          title="Load this version - Not implemented"
                          disabled
                      >
                          Load Version
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
      </div>
    </AdminLayout>
  );
};

export default PitchGeneratorPage;
