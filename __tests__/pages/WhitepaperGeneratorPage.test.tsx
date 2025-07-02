import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperGeneratorPage from '@/pages/WhitepaperGeneratorPage';
import { supabase } from '@/integrations/supabase/client';
import * as recharts from 'recharts'; // For mocking ResponsiveContainer

// --- Mocks ---
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: jest.fn(),
    },
  },
}));

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  },
}));

jest.mock('react-markdown', () => (props: { children: React.ReactNode }) => <div data-testid="mock-markdown">{props.children}</div>);

jest.mock('@/components/WhitepaperSectionEditor', () => {
  const MockWhitepaperSectionEditor = ({ title, content, onContentChange }: any) => (
    <div data-testid={`mock-section-editor-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h3>{title}</h3>
      <textarea value={content} onChange={(e) => onContentChange(e.target.value)} />
    </div>
  );
  MockWhitepaperSectionEditor.displayName = 'MockWhitepaperSectionEditor';
  return MockWhitepaperSectionEditor;
});

jest.mock('@/components/WhitepaperPreviewPanel', () => {
  const MockWhitepaperPreviewPanel = () => <div data-testid="mock-preview-panel" />;
  MockWhitepaperPreviewPanel.displayName = 'MockWhitepaperPreviewPanel';
  return MockWhitepaperPreviewPanel;
});

// Mock Recharts ResponsiveContainer as it can cause issues in JSDOM
jest.spyOn(recharts, 'ResponsiveContainer').mockImplementation(function MockResponsiveContainer({ children }) { 
  return <div data-testid="mock-responsive-container">{children}</div>;
});


// Mock html2canvas and jsPDF
jest.mock('html2canvas', () => jest.fn(() => Promise.resolve({ toDataURL: () => 'mockImageDataUri' } as any)));
jest.mock('jspdf', () => {
    const mockAddImage = jest.fn();
    const mockSave = jest.fn();
    const mockAddPage = jest.fn();
    return jest.fn(() => ({
        addImage: mockAddImage,
        save: mockSave,
        addPage: mockAddPage,
        internal: { pageSize: { getWidth: () => 210, getHeight: () => 297 } },
        getImageProperties: () => ({ width: 200, height: 100}), // Mock properties
    }));
});


// Helper to manage global URL.createObjectURL for download tests
const mockCreateObjectURL = jest.fn();
const mockRevokeObjectURL = jest.fn();
global.URL.createObjectURL = mockCreateObjectURL;
global.URL.revokeObjectURL = mockRevokeObjectURL;


// --- Test Suite ---
const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;

describe('WhitepaperGeneratorPage', () => {
  beforeEach(() => {
    mockSupabaseInvoke.mockReset();
    jest.clearAllMocks(); // Clear all mocks including toast, html2canvas, etc.

    // Reset createObjectURL for each test if needed, or ensure it's clean
    mockCreateObjectURL.mockReset();
    mockRevokeObjectURL.mockReset();
  });

  test('renders initial layout with all input fields and buttons', () => {
    render(<WhitepaperGeneratorPage />);
    expect(screen.getByLabelText(/Token Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Token Supply:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Use Cases:/i)).toBeInTheDocument();
    // ... (add checks for all other initial input fields)
    expect(screen.getByLabelText(/Legal Disclaimers:/i)).toBeInTheDocument();

    // Initial Buttons
    expect(screen.getByRole('button', { name: /Generate Whitepaper Draft/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /MD/i })).toBeInTheDocument(); // Download MD
    expect(screen.getByRole('button', { name: /PDF/i })).toBeInTheDocument(); // Download PDF
    expect(screen.getByRole('button', { name: /Share/i })).toBeInTheDocument(); // Generate Shareable Link
    // Submit to Counsel button should initially not be visible or disabled until sections exist
    expect(screen.queryByRole('button', { name: /Submit to Counsel/i })).not.toBeInTheDocument();
  });

  test('updates token name state on input change', () => {
    render(<WhitepaperGeneratorPage />);
    const tokenNameInput = screen.getByLabelText(/Token Name:/i);
    fireEvent.change(tokenNameInput, { target: { value: 'New Token Name' } });
    expect(tokenNameInput).toHaveValue('New Token Name');
  });
  // ... (similar tests for other basic input fields like supply, useCases, etc.)

  describe('"Generate Draft" button', () => {
    test('calls generate-whitepaper, renders sections on success', async () => {
      const mockGeneratedDraft = "## Section 1\nContent 1\n## Section 2\nContent 2";
      mockSupabaseInvoke.mockResolvedValueOnce({
        data: { whitepaperDraft: mockGeneratedDraft },
        error: null,
      });
      render(<WhitepaperGeneratorPage />);
      const generateButton = screen.getByRole('button', { name: /Generate Whitepaper Draft/i });
      fireEvent.click(generateButton);

      expect(generateButton).toBeDisabled();
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('generate-whitepaper', expect.any(Object)));

      // Check for section editors based on mock component
      await waitFor(() => {
        expect(screen.getByTestId('mock-section-editor-section-1')).toBeInTheDocument();
        expect(screen.getByTestId('mock-section-editor-section-2')).toBeInTheDocument();
      });
      expect(screen.getByRole('button', { name: /Submit to Counsel/i })).toBeInTheDocument(); // Now visible
      expect(generateButton).not.toBeDisabled();
    });

    test('displays error message on generate-whitepaper failure', async () => {
      mockSupabaseInvoke.mockResolvedValueOnce({
        data: null,
        error: { message: 'Generation failed' },
      });
      render(<WhitepaperGeneratorPage />);
      fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
      await waitFor(() => expect(screen.getByText(/Supabase function error: Generation failed/i)).toBeInTheDocument());
    });
  });

  describe('Download Buttons', () => {
    // Simulate that sections have been generated
    const _setupPageWithSections = () => {
        render(<WhitepaperGeneratorPage />);
        // Simulate generation and section rendering
        act(() => {
            // Directly set sections state for testing purposes
            // This is a bit of a hack, ideally we'd trigger generation
            // but that makes the test more complex. For isolated download tests, this is fine.
            const _setSections = jest.requireActual('react').useState()[1]; // Get the setState function
            // This part is tricky as we don't have direct access to page's internal setState.
            // A better way would be to have a helper function or refactor the component for testability.
            // For now, we'll assume sections are present by testing after a simulated generation.
        });
        // For the purpose of this test, we'll assume sections are populated by a prior action
        // and buttons are enabled. If not, these tests will fail, indicating a setup issue.
    };


    test('"Download MD" button triggers download', async () => {
        // First, simulate generating content so the button is active and there's content
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Test\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-test')).toBeInTheDocument());

        const downloadMdButton = screen.getByRole('button', { name: /MD/i });
        expect(downloadMdButton).not.toBeDisabled();

        // Spy on appendChild to check if the link is created
        const appendChildSpy = jest.spyOn(document.body, 'appendChild');
        const removeChildSpy = jest.spyOn(document.body, 'removeChild');

        fireEvent.click(downloadMdButton);

        await waitFor(() => expect(appendChildSpy).toHaveBeenCalled());
        expect(mockCreateObjectURL).toHaveBeenCalled();
        // Check if the link has download attribute (filename)
        const link = appendChildSpy.mock.calls[0][0] as HTMLAnchorElement;
        expect(link.download).toContain('_whitepaper.md');

        expect(removeChildSpy).toHaveBeenCalledWith(link); // Verify cleanup
        appendChildSpy.mockRestore();
        removeChildSpy.mockRestore();
    });


    test('"Download PDF" button triggers PDF generation', async () => {
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Test PDF\nContent PDF" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-test-pdf')).toBeInTheDocument());

        const downloadPdfButton = screen.getByRole('button', { name: /PDF/i });
        expect(downloadPdfButton).not.toBeDisabled();

        fireEvent.click(downloadPdfButton);

        const jsPDF = await import('jspdf');
        const jsPDFMockInstance = (jsPDF.default as any).mock?.instances?.[0] || jest.mocked(jsPDF.default).mock.instances[0];

        await waitFor(() => expect(html2canvas).toHaveBeenCalled());
        await waitFor(() => expect(jsPDFMockInstance.addImage).toHaveBeenCalledWith('mockImageDataUri', 'PNG', 0, 0, expect.any(Number), expect.any(Number)));
        await waitFor(() => expect(jsPDFMockInstance.save).toHaveBeenCalledWith(expect.stringContaining('_whitepaper.pdf')));
    });
  });

  describe('Shareable Link Functionality', () => {
    beforeEach(async () => {
        // Ensure sections are generated before each share test
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Share\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-share')).toBeInTheDocument());
    });

    test('"Generate Shareable Link" button calls create-shared-whitepaper and displays link', async () => {
      const shareId = 'test-share-id';
      const initialPublicStatus = false;
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: initialPublicStatus }, error: null });

      const shareButton = screen.getByRole('button', { name: /Share/i });
      fireEvent.click(shareButton);

      expect(shareButton).toBeDisabled();
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('create-shared-whitepaper', expect.any(Object)));

      const expectedLink = `${window.location.origin}/whitepaper/view/${shareId}`;
      await waitFor(() => expect(screen.getByDisplayValue(expectedLink)).toBeInTheDocument());
      expect(screen.getByRole('button', { name: /Copy/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: initialPublicStatus ? /Make Private/i : /Make Public/i })).toBeInTheDocument();
      expect(shareButton).not.toBeDisabled();
    });

    test('"Make Public/Private" toggle calls set-shared-whitepaper-public-status and updates UI', async () => {
      // 1. Generate initial link
      const shareId = 'toggle-id';
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: false }, error: null });
      fireEvent.click(screen.getByRole('button', { name: /Share/i }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Public/i })).toBeInTheDocument());

      // 2. Mock the update call and click "Make Public"
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: true }, error: null });
      const toggleButton = screen.getByRole('button', { name: /Make Public/i });
      fireEvent.click(toggleButton);

      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('set-shared-whitepaper-public-status', {
        body: { whitepaperId: shareId, isPublic: true },
      }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Private/i })).toBeInTheDocument());
      expect(screen.getByText(/Currently: Public/i)).toBeInTheDocument();

      // 3. Mock the update call again and click "Make Private"
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: false }, error: null });
      const newToggleButton = screen.getByRole('button', { name: /Make Private/i });
      fireEvent.click(newToggleButton);

      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('set-shared-whitepaper-public-status', {
        body: { whitepaperId: shareId, isPublic: false },
      }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Public/i })).toBeInTheDocument());
       expect(screen.getByText(/Currently: Private/i)).toBeInTheDocument();
    });
  });

  describe('"Submit to Counsel" Button', () => {
     beforeEach(async () => {
        // Ensure sections are generated
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Counsel\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-counsel')).toBeInTheDocument());
    });

    test('calls notify-legal-team (and creates link if needed)', async () => {
      const counselButton = screen.getByRole('button', { name: /Submit to Counsel/i });

      // Scenario 1: No shareable link exists yet
      const newShareId = 'counsel-share-id';
      mockSupabaseInvoke
        .mockResolvedValueOnce({ data: { id: newShareId, is_public: false }, error: null }) // For create-shared-whitepaper
        .mockResolvedValueOnce({ data: { id: newShareId, is_public: true }, error: null })  // For set-shared-whitepaper-public-status (making it public)
        .mockResolvedValueOnce({ data: { message: "Notification sent" }, error: null }); // For notify-legal-team

      fireEvent.click(counselButton);

      expect(counselButton).toBeDisabled();
      // Verify create-shared-whitepaper was called
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('create-shared-whitepaper', expect.any(Object)));
      // Verify set-shared-whitepaper-public-status was called to make it public
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('set-shared-whitepaper-public-status', {
          body: { whitepaperId: newShareId, isPublic: true }
      }));
      // Verify notify-legal-team was called
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('notify-legal-team', {
        body: expect.objectContaining({ whitepaperId: newShareId, tokenName: 'My Awesome Token' })
      }));
      expect(counselButton).not.toBeDisabled();
    });

    test('calls notify-legal-team (if link already exists and is public)', async () => {
        // 1. First, generate a link and make it public
        const existingShareId = 'existing-link-id';
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: existingShareId, is_public: true }, error: null }); // create-shared-whitepaper returns public
        fireEvent.click(screen.getByRole('button', { name: /Share/i }));
        await waitFor(() => expect(screen.getByRole('button', { name: /Make Private/i })).toBeInTheDocument()); // Link is public

        // 2. Now click "Submit to Counsel"
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { message: "Notification sent" }, error: null }); // For notify-legal-team
        const counselButton = screen.getByRole('button', { name: /Submit to Counsel/i });
        fireEvent.click(counselButton);

        await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('notify-legal-team', {
            body: expect.objectContaining({ whitepaperId: existingShareId })
        }));
        // Ensure create-shared-whitepaper and set-status were not called again for this specific submit action
        expect(mockSupabaseInvoke).toHaveBeenCalledTimes(2); // 1 for share, 1 for notify
    });
  });
});
