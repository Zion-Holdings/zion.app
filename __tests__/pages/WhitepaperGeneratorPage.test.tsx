import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperGeneratorPage from '@/pages/WhitepaperGeneratorPage';
import { supabase } from '@/lib/supabaseClient';
import * as recharts from 'recharts'; // For mocking ResponsiveContainer

// --- Mocks ---
jest.mock('@/lib/supabaseClient', () => ({
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

jest.mock('@/components/WhitepaperSectionEditor', () => jest.fn(({ title, content, onContentChange }: { title: string; content: string; onContentChange: (newContent: string) => void }) => (
  <div data-testid={`mock-section-editor-${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <h3>{title}</h3>
    <textarea value={content} onChange={(e) => onContentChange(e.target.value)} />
  </div>
)));

jest.mock('@/components/WhitepaperPreviewPanel', () => jest.fn(() => <div data-testid="mock-preview-panel" />));

// Mock Recharts ResponsiveContainer as it can cause issues in JSDOM
jest.spyOn(recharts, 'ResponsiveContainer').mockImplementation(({ children }: { children: React.ReactNode}) => <div data-testid="mock-responsive-container">{children}</div>);

// Define a type for the mocked html2canvas result
interface MockCanvas {
  toDataURL: (type?: string, quality?: unknown) => string;
  // Add other canvas properties/methods if needed by jsPDF mock
  width?: number;
  height?: number;
}

// Mock html2canvas and jsPDF
jest.mock('html2canvas', () => jest.fn(() => Promise.resolve({ 
  toDataURL: () => 'mockImageDataUri',
  width: 200, // Example width
  height: 100, // Example height
} as MockCanvas)));

interface MockJsPDF {
  addImage: jest.Mock;
  save: jest.Mock;
  addPage: jest.Mock;
  internal: {
    pageSize: {
      getWidth: () => number;
      getHeight: () => number;
    };
  };
  getImageProperties: (imageData: string | HTMLImageElement | HTMLCanvasElement | Uint8Array) => { width: number; height: number; };
}

jest.mock('jspdf', () => {
    const mockAddImage = jest.fn();
    const mockSave = jest.fn();
    const mockAddPage = jest.fn();
    return jest.fn((): MockJsPDF => ({ // Return type for the constructor
        addImage: mockAddImage,
        save: mockSave,
        addPage: mockAddPage,
        internal: { pageSize: { getWidth: () => 210, getHeight: () => 297 } },
        getImageProperties: () => ({ width: 200, height: 100}), 
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
    jest.clearAllMocks(); 

    mockCreateObjectURL.mockReset();
    mockRevokeObjectURL.mockReset();
  });

  test('renders initial layout with all input fields and buttons', () => {
    render(<WhitepaperGeneratorPage />);
    expect(screen.getByLabelText(/Token Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Token Supply:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Use Cases:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Legal Disclaimers:/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Generate Whitepaper Draft/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /MD/i })).toBeInTheDocument(); 
    expect(screen.getByRole('button', { name: /PDF/i })).toBeInTheDocument(); 
    expect(screen.getByRole('button', { name: /Share/i })).toBeInTheDocument(); 
    expect(screen.queryByRole('button', { name: /Submit to Counsel/i })).not.toBeInTheDocument();
  });

  test('updates token name state on input change', () => {
    render(<WhitepaperGeneratorPage />);
    const tokenNameInput = screen.getByLabelText(/Token Name:/i);
    fireEvent.change(tokenNameInput, { target: { value: 'New Token Name' } });
    expect(tokenNameInput).toHaveValue('New Token Name');
  });

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
      // Assuming generate-whitepaper function expects an object with specific properties
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('generate-whitepaper', 
        { body: expect.objectContaining({ /* include expected properties based on actual usage */ }) }
      ));

      await waitFor(() => {
        expect(screen.getByTestId('mock-section-editor-section-1')).toBeInTheDocument();
        expect(screen.getByTestId('mock-section-editor-section-2')).toBeInTheDocument();
      });
      expect(screen.getByRole('button', { name: /Submit to Counsel/i })).toBeInTheDocument(); 
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
    beforeEach(async () => { // Ensure content is "generated" before each download test
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Test\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-test')).toBeInTheDocument());
    });

    test('"Download MD" button triggers download', async () => {
        const downloadMdButton = screen.getByRole('button', { name: /MD/i });
        expect(downloadMdButton).not.toBeDisabled();

        const appendChildSpy = jest.spyOn(document.body, 'appendChild');
        const removeChildSpy = jest.spyOn(document.body, 'removeChild');

        fireEvent.click(downloadMdButton);

        await waitFor(() => expect(appendChildSpy).toHaveBeenCalled());
        expect(mockCreateObjectURL).toHaveBeenCalled();
        const link = appendChildSpy.mock.calls[0][0] as HTMLAnchorElement;
        expect(link.download).toContain('_whitepaper.md');

        expect(removeChildSpy).toHaveBeenCalledWith(link); 
        appendChildSpy.mockRestore();
        removeChildSpy.mockRestore();
    });


    test('"Download PDF" button triggers PDF generation', async () => {
        const downloadPdfButton = screen.getByRole('button', { name: /PDF/i });
        expect(downloadPdfButton).not.toBeDisabled();

        fireEvent.click(downloadPdfButton);

        const jsPDFMockStatic = require('jspdf') as jest.Mock; // Get the static mock constructor
        const jsPDFMockInstance = jsPDFMockStatic.mock.instances[0] as MockJsPDF; // Access the instance


        await waitFor(() => expect(html2canvas).toHaveBeenCalled());
        await waitFor(() => expect(jsPDFMockInstance.addImage).toHaveBeenCalledWith('mockImageDataUri', 'PNG', 0, 0, expect.any(Number), expect.any(Number)));
        await waitFor(() => expect(jsPDFMockInstance.save).toHaveBeenCalledWith(expect.stringContaining('_whitepaper.pdf')));
    });
  });

  describe('Shareable Link Functionality', () => {
    beforeEach(async () => {
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Share\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-share')).toBeInTheDocument());
    });

    test('"Generate Shareable Link" button calls create-shared-whitepaper and displays link', async () => {
      const shareId = 'test-share-id';
      const initialPublicStatus = false;
      // Mock for create-shared-whitepaper
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: initialPublicStatus }, error: null });

      const shareButton = screen.getByRole('button', { name: /Share/i });
      fireEvent.click(shareButton);

      expect(shareButton).toBeDisabled();
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('create-shared-whitepaper', 
        { body: expect.objectContaining({ /* sections, tokenName, etc. */ }) }
      ));

      const expectedLink = `${window.location.origin}/whitepaper/view/${shareId}`;
      await waitFor(() => expect(screen.getByDisplayValue(expectedLink)).toBeInTheDocument());
      expect(screen.getByRole('button', { name: /Copy/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: initialPublicStatus ? /Make Private/i : /Make Public/i })).toBeInTheDocument();
      expect(shareButton).not.toBeDisabled();
    });

    test('"Make Public/Private" toggle calls set-shared-whitepaper-public-status and updates UI', async () => {
      const shareId = 'toggle-id';
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: false }, error: null }); // Initial create
      fireEvent.click(screen.getByRole('button', { name: /Share/i }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Public/i })).toBeInTheDocument());

      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: true }, error: null }); // For set to public
      const toggleButton = screen.getByRole('button', { name: /Make Public/i });
      fireEvent.click(toggleButton);

      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('set-shared-whitepaper-public-status', {
        body: { whitepaperId: shareId, isPublic: true },
      }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Private/i })).toBeInTheDocument());
      expect(screen.getByText(/Currently: Public/i)).toBeInTheDocument();

      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: false }, error: null }); // For set to private
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
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Counsel\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        // Fill in token name for the notify-legal-team call
        fireEvent.change(screen.getByLabelText(/Token Name:/i), { target: { value: 'My Test Token' } });
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-counsel')).toBeInTheDocument());
    });

    test('calls notify-legal-team (and creates link if needed)', async () => {
      const counselButton = screen.getByRole('button', { name: /Submit to Counsel/i });
      const newShareId = 'counsel-share-id';
      
      mockSupabaseInvoke
        .mockResolvedValueOnce({ data: { id: newShareId, is_public: false }, error: null }) 
        .mockResolvedValueOnce({ data: { id: newShareId, is_public: true }, error: null })  
        .mockResolvedValueOnce({ data: { message: "Notification sent" }, error: null }); 

      fireEvent.click(counselButton);

      expect(counselButton).toBeDisabled();
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('create-shared-whitepaper', expect.any(Object)));
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('set-shared-whitepaper-public-status', {
          body: { whitepaperId: newShareId, isPublic: true }
      }));
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('notify-legal-team', {
        body: expect.objectContaining({ whitepaperId: newShareId, tokenName: 'My Test Token' }) 
      }));
      expect(counselButton).not.toBeDisabled();
    });

    test('calls notify-legal-team (if link already exists and is public)', async () => {
        const existingShareId = 'existing-link-id';
        // Simulate link already exists and is public
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: existingShareId, is_public: true }, error: null }); 
        fireEvent.click(screen.getByRole('button', { name: /Share/i }));
        await waitFor(() => expect(screen.getByRole('button', { name: /Make Private/i })).toBeInTheDocument());

        mockSupabaseInvoke.mockResolvedValueOnce({ data: { message: "Notification sent" }, error: null }); 
        const counselButton = screen.getByRole('button', { name: /Submit to Counsel/i });
        fireEvent.click(counselButton);

        await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('notify-legal-team', {
            body: expect.objectContaining({ whitepaperId: existingShareId, tokenName: 'My Test Token' })
        }));
        // create-shared-whitepaper was called once, then notify-legal-team
        expect(mockSupabaseInvoke.mock.calls.filter(call => call[0] === 'create-shared-whitepaper').length).toBe(1);
        expect(mockSupabaseInvoke.mock.calls.filter(call => call[0] === 'set-shared-whitepaper-public-status').length).toBe(0); // Not called again for this specific submit
    });
  });
});
