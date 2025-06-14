import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import html2canvas from 'html2canvas';
const PitchGeneratorPage = () => {
    const { user, isLoading: loading } = useAuth();
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState('inputs');
    const [inputData, setInputData] = useState(null);
    const [syncedData, setSyncedData] = useState(null);
    const [generatedSlides, setGeneratedSlides] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState(null);
    const [isExporting, setIsExporting] = useState(false);
    const [deckVersion, setDeckVersion] = useState(1);
    const [versionHistory, setVersionHistory] = useState([]);
    const [isSavingVersion, setIsSavingVersion] = useState(false);
    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
        else if (!loading && user && !['founder', 'admin', 'finance'].includes(user.role)) {
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
            const sessionResult = await supabase.auth.getSession();
            const token = sessionResult?.data?.session?.access_token;
            if (!token)
                throw new Error("Authentication token not found.");
            console.log('Simulating API call to /api/admin/pitch-decks/save with token and slides data.');
            // const response = await fetch('/api/admin/pitch-decks/save', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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
            setVersionHistory(prev => [newVersionEntry, ...prev].sort((a, b) => b.version - a.version));
            alert(`Version ${newVersionNumber} saved successfully (mocked). Now working on v${newVersionNumber + 1}.`);
        }
        catch (e) {
            console.error('Failed to save version:', e);
            setError(e.message || 'Failed to save version.');
        }
        finally {
            setIsSavingVersion(false);
        }
    };
    const fetchVersionHistory = async () => {
        if (versionHistory.length > 0 && deckVersion > 1)
            return; // Avoid refetching if already populated unless it's initial load
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
            const sortedHistory = mockHistory.sort((a, b) => b.version - a.version);
            setVersionHistory(sortedHistory);
            if (sortedHistory.length > 0) {
                setDeckVersion(sortedHistory[0].version + 1);
            }
            else {
                setDeckVersion(1); // Start with v1 if no history
            }
        }
        catch (e) {
            console.error('Failed to fetch version history:', e);
            setError(e.message || 'Failed to fetch version history.');
        }
    };
    useEffect(() => {
        if (user) {
            fetchVersionHistory();
        }
    }, [user, fetchVersionHistory]);
    const handleInputSubmit = (data) => {
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
            const sessionResult = await supabase.auth.getSession();
            const token = sessionResult?.data?.session?.access_token;
            if (!token) {
                setError('Authentication token not found. Please log in again.');
                setIsGenerating(false);
                router.push('/login');
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
        }
        catch (e) {
            console.error('Failed to generate pitch deck:', e);
            setError(e.message || 'Failed to generate pitch deck. Check console for details.');
            setGeneratedSlides([]);
        }
        finally {
            setIsGenerating(false);
        }
    };
    const handleSlidesUpdate = (updatedSlides) => {
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
                if (i > 0)
                    pdf.addPage();
                pdf.addImage(imgData, 'PNG', xOffset, yOffset, newImgWidth, newImgHeight);
            }
            pdf.save(`pitch-deck-v${deckVersion - 1}.pdf`); // Save with the version number that was just saved
        }
        catch (e) {
            console.error('Failed to export PDF:', e);
            setError(e.message || 'Failed to export PDF.');
        }
        finally {
            setIsExporting(false);
        }
    };
    const handleExportToGoogleSlides = () => {
        alert('Export to Google Slides - Not implemented yet. This would require Google API integration.');
    };
    if (loading || !user) {
        return (_jsx(AdminLayout, { children: _jsx("div", { className: "flex justify-center items-center h-screen", children: _jsx("p", { className: "text-lg", children: "Loading user information..." }) }) }));
    }
    if (user && !['founder', 'admin', 'finance'].includes(user.role)) {
        return (_jsx(AdminLayout, { children: _jsxs("div", { className: "flex flex-col justify-center items-center h-screen text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-red-600 mb-4", children: "Access Denied" }), _jsx("p", { className: "text-lg", children: "You do not have permission to view this page." }), _jsx("button", { onClick: () => router.push('/admin'), className: "mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700", children: "Go to Admin Dashboard" })] }) }));
    }
    return (_jsxs(AdminLayout, { children: [_jsx(NextSeo, { title: "Pitch Deck Generator", description: "AI-powered tool to create data-driven pitch decks", openGraph: { title: 'Pitch Deck Generator', description: 'AI-powered tool to create data-driven pitch decks' } }), _jsxs("div", { className: "container mx-auto p-4 md:p-8", children: [_jsxs("header", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800", children: "AI-Powered Pitch Deck Generator" }), _jsx("p", { className: "text-gray-600", children: "Create a data-driven pitch deck in minutes." })] }), error && (_jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", role: "alert", children: [_jsx("strong", { className: "font-bold", children: "Error: " }), _jsx("span", { className: "block sm:inline", children: error })] })), currentStep === 'inputs' && (_jsxs("section", { id: "input-fields", className: "bg-white p-6 rounded-lg shadow-lg", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4 text-gray-700", children: "Step 1: Provide Company Details" }), _jsx(InputFields, { onSubmit: handleInputSubmit })] })), currentStep === 'data' && inputData && (_jsxs("section", { id: "data-sync", className: "bg-white p-6 rounded-lg shadow-lg mt-8", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4 text-gray-700", children: "Step 2: Confirm Marketplace Data" }), syncedData ? _jsx(DataSync, {}) : _jsx("p", { children: "Loading synced data..." }), _jsxs("div", { className: "mt-6 flex justify-end space-x-3", children: [_jsx("button", { onClick: () => setCurrentStep('inputs'), className: "py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Back to Inputs" }), _jsx("button", { onClick: handleDataConfirm, disabled: isGenerating, className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50", children: isGenerating ? 'Generating...' : (generatedSlides.length > 0 ? 'Proceed to Editor / Regenerate' : 'Generate Pitch Deck & Edit') })] })] })), currentStep === 'editor' && inputData && syncedData && (_jsxs("section", { id: "slide-editor", className: "mt-8", children: [_jsxs("div", { className: "flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-gray-200", children: [_jsxs("div", { className: "mb-2 md:mb-0", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-700", children: "Step 3: Edit Your Pitch Deck" }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Current working on: ", _jsxs("span", { className: "font-semibold text-indigo-600", children: ["v", deckVersion] })] })] }), _jsxs("div", { className: "flex items-center space-x-2 flex-wrap", children: [_jsx("button", { onClick: () => setCurrentStep('data'), disabled: isGenerating || isExporting || isSavingVersion, className: "py-2 px-3 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50", children: "Back to Data" }), _jsx("button", { onClick: handleGenerateDeck, disabled: isGenerating || isExporting || isSavingVersion, className: "inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 disabled:opacity-50", children: isGenerating ? 'Regenerating&apos;...' : 'Regenerate AI Deck' }), _jsx("button", { onClick: handleSaveVersion, disabled: isSavingVersion || generatedSlides.length === 0 || isGenerating || isExporting, className: "inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50", children: isSavingVersion ? 'Saving...' : `Save v${deckVersion}` }), _jsx("button", { onClick: handleExportToPDF, disabled: isExporting || generatedSlides.length === 0 || isGenerating || isSavingVersion, className: "inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50", children: isExporting ? 'Exporting PDF...' : 'Export PDF' }), _jsx("button", { onClick: handleExportToGoogleSlides, disabled: generatedSlides.length === 0 || isGenerating || isExporting || isSavingVersion, className: "inline-flex items-center py-2 px-3 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50", children: "Google Slides" })] })] }), isGenerating && _jsx("p", { className: "text-center py-4", children: "Generating slides, please wait..." }), isExporting && _jsx("p", { className: "text-center py-4 text-green-700", children: "Exporting PDF, please wait..." }), isSavingVersion && _jsx("p", { className: "text-center py-4 text-teal-700", children: "Saving version, please wait..." }), !isGenerating && !isExporting && !isSavingVersion && generatedSlides.length > 0 && (_jsx(SlideEditor, { initialSlides: generatedSlides, onSlidesChange: handleSlidesUpdate })), !isGenerating && !isExporting && !isSavingVersion && generatedSlides.length === 0 && !error && (_jsx("p", { className: "text-center text-gray-500 py-8", children: "Your generated slides will appear here. Click \"Regenerate\" if they don't load." })), versionHistory.length > 0 && (_jsxs("div", { className: "mt-10 pt-6 border-t border-gray-200", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-700 mb-3", children: "Version History" }), _jsxs("ul", { className: "space-y-3 max-h-60 overflow-y-auto", children: [" ", versionHistory.map((versionItem, index) => (_jsxs("li", { className: "p-3 bg-gray-50 rounded-md shadow-sm flex justify-between items-center", children: [_jsxs("div", { children: [_jsxs("span", { className: "font-semibold text-indigo-600", children: ["Version ", versionItem.version] }), _jsxs("span", { className: "text-xs text-gray-500 ml-2", children: ["(", new Date(versionItem.savedAt).toLocaleString(), ")"] }), _jsxs("p", { className: "text-sm text-gray-600 mt-1", children: ["Slides: ", versionItem.slideCount, versionItem.notes ? ` - Notes: ${versionItem.notes}` : ''] })] }), _jsx("button", { 
                                                        // onClick={() => handleLoadVersion(versionItem.version)}
                                                        className: "text-xs py-1 px-2 border border-indigo-500 text-indigo-600 rounded hover:bg-indigo-50 disabled:opacity-50", title: "Load this version - Not implemented", disabled: true, children: "Load Version" })] }, index)))] })] }))] }))] })] }));
};
export default PitchGeneratorPage;
