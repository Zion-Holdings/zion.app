import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ComparisonSection } from './ComparisonSection'; // Assuming named export or default if that's the case

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  CheckCircle2: () => <svg data-testid="check-icon" />,
}));

// Mock child components
jest.mock('./GradientHeading', () => ({
  GradientHeading: jest.fn(({ children }) => <h2 data-testid="gradient-heading">{children}</h2>),
}));
jest.mock('./ui/button', () => ({
  Button: jest.fn(({ children, ...props }) => <button {...props}>{children}</button>),
}));

// Mock table components from @/components/ui/table
jest.mock('./ui/table', () => ({
  Table: jest.fn(({ children, ...props }) => <table data-testid="table" {...props}>{children}</table>),
  TableHeader: jest.fn(({ children, ...props }) => <thead data-testid="table-header" {...props}>{children}</thead>),
  TableRow: jest.fn(({ children, ...props }) => <tr data-testid="table-row" {...props}>{children}</tr>),
  TableHead: jest.fn(({ children, ...props }) => <th data-testid="table-head" {...props}>{children}</th>),
  TableBody: jest.fn(({ children, ...props }) => <tbody data-testid="table-body" {...props}>{children}</tbody>),
  TableCell: jest.fn(({ children, ...props }) => <td data-testid="table-cell" {...props}>{children}</td>),
}));

const expectedComparisonData = [
  { service: "Server Hosting", traditional: "$1,200/mo", zion: "$650/mo", savings: "45%" },
  { service: "IT Equipment", traditional: "Full Purchase", zion: "Flexible Rental", savings: "60%" },
  { service: "24/7 Support", traditional: "$2,500/mo", zion: "$950/mo", savings: "62%" },
  { service: "Storage Solutions", traditional: "$800/mo", zion: "$350/mo", savings: "56%" },
  { service: "Marketplace Listings", traditional: "$99/mo", zion: "Free", savings: "100%" },
];

describe('ComparisonSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the main title and subtitle', () => {
    render(<ComparisonSection />);
    expect(screen.getByTestId('gradient-heading')).toHaveTextContent('Compare & Save');
    expect(screen.getByText('See how Zion can drastically reduce your IT costs compared to traditional providers')).toBeInTheDocument();
  });

  it('should render the table with correct headers', () => {
    render(<ComparisonSection />);
    expect(screen.getByTestId('table')).toBeInTheDocument();
    const headers = screen.getAllByTestId('table-head');
    expect(headers).toHaveLength(4);
    expect(headers[0]).toHaveTextContent('Service');
    expect(headers[1]).toHaveTextContent('Traditional Providers');
    expect(headers[2]).toHaveTextContent('With Zion');
    expect(headers[3]).toHaveTextContent('Savings');
  });

  it('should render all comparison data rows correctly', () => {
    render(<ComparisonSection />);
    const rows = screen.getAllByTestId('table-row');
    // +1 for the header row
    expect(rows).toHaveLength(expectedComparisonData.length + 1);

    expectedComparisonData.forEach((item, index) => {
      // Get cells within the body row (index + 1 because of header row)
      const currentRow = rows[index + 1];
      const cells = within(currentRow).getAllByTestId('table-cell');
      expect(cells).toHaveLength(4);
      expect(cells[0]).toHaveTextContent(item.service);
      expect(cells[1]).toHaveTextContent(item.traditional);
      expect(cells[2]).toHaveTextContent(item.zion);
      expect(cells[3]).toHaveTextContent(item.savings);
    });
  });

  it('should apply specific styling/classes to "With Zion" and "Savings" cells', () => {
    render(<ComparisonSection />);
    const rows = screen.getAllByTestId('table-row');

    expectedComparisonData.forEach((_item, index) => {
      const currentRow = rows[index + 1]; // Skip header row
      const cells = within(currentRow).getAllByTestId('table-cell');

      // Check classes based on component's internal styling (text-zion-cyan, text-green-400)
      // Note: Direct class checking on mocked components can be brittle if class names are dynamic via cn.
      // It's better to test visual outcomes if possible, or trust `cn` and test props if classes are passed.
      // For this mock, we can check the text content and assume styling is correct if data is right.
      // If we wanted to check classes passed to the *actual* TableCell, the mock would need to retain props.className.
      // My current TableCell mock does pass ...props, so it should have the className.
      expect(cells[2]).toHaveClass('text-center text-zion-cyan font-semibold');
      expect(cells[3]).toHaveClass('text-center text-green-400 font-bold');
    });
  });


  it('should render the total annual savings section with icon and button', () => {
    render(<ComparisonSection />);
    expect(screen.getByText('Total Annual Savings:')).toBeInTheDocument();
    expect(screen.getByText('Up to 65%')).toBeInTheDocument();
    expect(screen.getByText('Results may vary based on specific requirements and service levels')).toBeInTheDocument();
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Calculate Your Savings' })).toBeInTheDocument();
  });
});
