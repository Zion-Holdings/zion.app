import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperGeneratorPage from '@/pages/WhitepaperGeneratorPage';
import { supabase } from '@/integrations/supabase/client';
import * as recharts from 'recharts'; // For mocking ResponsiveContainer
import { vi, describe, test, expect, beforeEach, type MockInstance } from 'vitest';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


// --- Mocks ---
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: vi.fn(),
    },
  },
}));

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
  },
}));

vi.mock('react-markdown', () => ({
    default: (props: { children: React.ReactNode }) => <div data-testid="mock-markdown">{props.children}</div>
}));


vi.mock('@/components/WhitepaperSectionEditor', () => ({
    default: vi.fn(({ title, content, onContentChange }: {title: string; content: string; onContentChange: (value: string) => void}) => (
        <div data-testid={`mock-section-editor-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3>{title}</h3>
            <textarea value={content} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onContentChange(e.target.value)} />
        </div>
    ))
}));

vi.mock('@/components/WhitepaperPreviewPanel', () => ({
    default: vi.fn(() => <div data-testid="mock-preview-panel" />)
}));

// Mock Recharts ResponsiveContainer as it can cause issues in JSDOM
vi.spyOn(recharts, 'ResponsiveContainer').mockImplementation(({ children }: any) => <div data-testid="mock-responsive-container">{children}</div>);


// Mock html2canvas and jsPDF
vi.mock('html2canvas', () => ({ default: vi.fn(() => Promise.resolve({ toDataURL: () => 'mockImageDataUri' } as any)) }));

const mockAddImage = vi.fn();
const mockSave = vi.fn();
const mockAddPage = vi.fn();
vi.mock('jspdf', () => ({
    default: vi.fn(() => ({
        addImage: mockAddImage,
        save: mockSave,
        addPage: mockAddPage,
        internal: { pageSize: { getWidth: () => 210, getHeight: () => 297 } },
        getImageProperties: () => ({ width: 200, height: 100}),
    }))
}));


// Helper to manage global URL.createObjectURL for download tests
const mockCreateObjectURL = vi.fn();
const mockRevokeObjectURL = vi.fn();
global.URL.createObjectURL = mockCreateObjectURL;
global.URL.revokeObjectURL = mockRevokeObjectURL;


// --- Test Suite ---
const mockSupabaseInvoke = supabase.functions.invoke as MockInstance<any, any>;

describe('WhitepaperGeneratorPage', () => {
  beforeEach(() => {
    mockSupabaseInvoke.mockReset();
    vi.clearAllMocks();

    mockCreateObjectURL.mockReset();
    mockRevokeObjectURL.mockReset();
    // Also reset specific jspdf and html2canvas mocks if they were called
    mockAddImage.mockReset();
    mockSave.mockReset();
    mockAddPage.mockReset();
    (html2canvas as MockInstance<any,any>).mockClear();
    (jsPDF as unknown as MockInstance<any,any>).mockClear();
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
      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('generate-whitepaper', expect.any(Object)));

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
    const setupPageWithContent = async () => {
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Test\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
        await waitFor(() => expect(screen.getByTestId('mock-section-editor-test')).toBeInTheDocument());
    };

    test('"Download MD" button triggers download', async () => {
        await setupPageWithContent();
        const downloadMdButton = screen.getByRole('button', { name: /MD/i });
        expect(downloadMdButton).not.toBeDisabled();

        const appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation(() => {} as any);
        const removeChildSpy = vi.spyOn(document.body, 'removeChild').mockImplementation(() => {} as any);
        mockCreateObjectURL.mockReturnValue('mock-url');


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
        await setupPageWithContent(); // Re-use setup or adapt if PDF content is different
        const downloadPdfButton = screen.getByRole('button', { name: /PDF/i });
        expect(downloadPdfButton).not.toBeDisabled();

        (html2canvas as MockInstance<any,any>).mockResolvedValue({ toDataURL: () => 'mockImageDataUri' });

        fireEvent.click(downloadPdfButton);

        await waitFor(() => expect(html2canvas).toHaveBeenCalled());
        await waitFor(() => expect(mockAddImage).toHaveBeenCalledWith('mockImageDataUri', 'PNG', 0, 0, expect.any(Number), expect.any(Number)));
        await waitFor(() => expect(mockSave).toHaveBeenCalledWith(expect.stringContaining('_whitepaper.pdf')));
    });
  });

  describe('Shareable Link Functionality', () => {
    beforeEach(async () => {
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Share\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />); // Render fresh for each test in this describe block
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
      const shareId = 'toggle-id';
      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: false }, error: null });
      fireEvent.click(screen.getByRole('button', { name: /Share/i }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Public/i })).toBeInTheDocument());

      mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: shareId, is_public: true }, error: null });
      const toggleButton = screen.getByRole('button', { name: /Make Public/i });
      fireEvent.click(toggleButton);

      await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('set-shared-whitepaper-public-status', {
        body: { whitepaperId: shareId, isPublic: true },
      }));
      await waitFor(() => expect(screen.getByRole('button', { name: /Make Private/i })).toBeInTheDocument());
      expect(screen.getByText(/Currently: Public/i)).toBeInTheDocument();

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
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { whitepaperDraft: "## Counsel\nContent" }, error: null });
        render(<WhitepaperGeneratorPage />);  // Render fresh
        fireEvent.click(screen.getByRole('button', { name: /Generate Whitepaper Draft/i }));
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
        body: expect.objectContaining({ whitepaperId: newShareId, tokenName: 'My Awesome Token' }) // Assuming 'My Awesome Token' is default or from input
      }));
      expect(counselButton).not.toBeDisabled();
    });

    test('calls notify-legal-team (if link already exists and is public)', async () => {
        const existingShareId = 'existing-link-id';
        mockSupabaseInvoke.mockResolvedValueOnce({ data: { id: existingShareId, is_public: true }, error: null });
        fireEvent.click(screen.getByRole('button', { name: /Share/i }));
        await waitFor(() => expect(screen.getByRole('button', { name: /Make Private/i })).toBeInTheDocument());

        mockSupabaseInvoke.mockResolvedValueOnce({ data: { message: "Notification sent" }, error: null });
        const counselButton = screen.getByRole('button', { name: /Submit to Counsel/i });
        fireEvent.click(counselButton);

        await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('notify-legal-team', {
            body: expect.objectContaining({ whitepaperId: existingShareId })
        }));
        expect(mockSupabaseInvoke).toHaveBeenCalledTimes(2);
    });
  });
});
