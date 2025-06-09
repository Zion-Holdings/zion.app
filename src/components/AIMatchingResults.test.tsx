import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { AIMatchingResults } from './AIMatchingResults'; // Assuming the path
import { MatchResultItem } from '@/lib/ai-matchmaking'; // Assuming the path

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  BarChart3: () => <svg data-testid="barchart-icon" />,
  BriefcaseIcon: () => <svg data-testid="briefcase-icon" />,
  Monitor: () => <svg data-testid="monitor-icon" />,
  User: () => <svg data-testid="user-icon" />,
}));

// Mock UI components
jest.mock('@/components/ui/card', () => ({
  Card: jest.fn(({ children, ...props }: any) => <div data-testid="card" {...props}>{children}</div>),
  CardContent: jest.fn(({ children, ...props }: any) => <div data-testid="card-content" {...props}>{children}</div>),
}));
jest.mock('@/components/ui/badge', () => ({
  Badge: jest.fn(({ children, ...props }: any) => <span data-testid="badge" {...props}>{children}</span>),
}));
jest.mock('@/components/ui/avatar', () => ({
  Avatar: jest.fn(({ children, ...props }: any) => <div data-testid="avatar" {...props}>{children}</div>),
  AvatarImage: jest.fn((props: any) => <img data-testid="avatar-image" {...props} />),
  AvatarFallback: jest.fn(({ children, ...props }: any) => <div data-testid="avatar-fallback" {...props}>{children}</div>),
}));
jest.mock('@/components/ui/tabs', () => {
  // Simpler mock focusing on onValueChange and content visibility
  const Tabs = ({ children, value, onValueChange, defaultValue, ...props }: any) => {
    // The AIMatchingResults component controls the 'value' prop based on its own state.
    // The mock's main job is to ensure 'onValueChange' is called and content is filtered.
    return (
      <div data-testid="tabs" data-value={value || defaultValue} {...props}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          // Pass onValueChange to TabsList, which will pass to TabsTrigger
          if (child.type.displayName === 'TabsList' || child.props.originalType === 'TabsList') {
            return React.cloneElement(child, { __onValueChange: onValueChange, __currentValue: value } as any);
          }
          // For TabsContent, only render if its value matches the current Tabs value
          if (child.type.displayName === 'TabsContent' || child.props.originalType === 'TabsContent') {
            return child.props.value === (value || defaultValue) ? child : null;
          }
          return child;
        })}
      </div>
    );
  };
  Tabs.displayName = 'Tabs';

  const TabsList = ({ children, __onValueChange, __currentValue, ...props }: any) => (
    <div role="tablist" data-testid="tabs-list" {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        if (child.type.displayName === 'TabsTrigger' || child.props.originalType === 'TabsTrigger') {
          return React.cloneElement(child, { __onValueChange, __currentValue } as any);
        }
        return child;
      })}
    </div>
  );
  TabsList.displayName = 'TabsList';

  const TabsTrigger = ({ children, value, __onValueChange, __currentValue, ...props }: any) => (
    <button
      role="tab"
      data-state={__currentValue === value ? 'active' : 'inactive'}
      data-testid={`tab-trigger-${value}`}
      value={value}
      onClick={() => __onValueChange && __onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
  TabsTrigger.displayName = 'TabsTrigger';

  const TabsContent = ({ children, value, ...props }: any) => (
    <div role="tabpanel" data-testid={`tab-content-${value}`} {...props}>
      {children}
    </div>
  );
  TabsContent.displayName = 'TabsContent';

  return { Tabs, TabsList, TabsTrigger, TabsContent };
});
jest.mock('@/components/ui/skeleton', () => jest.fn((props: any) => <div data-testid="skeleton" {...props} />));

// Mock cn utility
jest.mock('@/lib/utils', () => ({
  cn: (...inputs: any[]) => inputs.filter(Boolean).join(' '),
}));

const mockMatches: MatchResultItem[] = [
  { id: '1', title: 'Talent A', description: 'Description A', category: 'Talent', image: 'imgA.png', price: 50, skills: ['React', 'Node'] },
  { id: '2', title: 'Service B', description: 'Description B', category: 'Service Provider', image: null, price: 100, skills: ['Consulting'] },
  { id: '3', title: 'Equipment C', description: 'Description C', category: 'Equipment Rental', image: 'imgC.png', skills: ['Camera', 'Lighting'] },
  { id: '4', title: 'Talent D', description: 'Description D', category: 'Talent', price: 75, skills: ['Vue', 'Firebase'] },
];

describe('AIMatchingResults', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading skeletons when isLoading is true', () => {
    render(<AIMatchingResults matches={[]} isLoading={true} />);
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);
    expect(screen.queryByTestId('tabs')).not.toBeInTheDocument(); // Tabs should not be visible
  });

  it('renders "No matches found" when matches array is empty and not loading', () => {
    render(<AIMatchingResults matches={[]} isLoading={false} />);
    expect(screen.getByText('No matches found')).toBeInTheDocument();
    expect(screen.getByTestId('barchart-icon')).toBeInTheDocument();
  });

  it('displays projectDescription when no matches are found', () => {
    const projectDesc = "Looking for a React developer";
    render(<AIMatchingResults matches={[]} isLoading={false} projectDescription={projectDesc} />);
    expect(screen.getByText('No matches found')).toBeInTheDocument();
    expect(screen.getByText(projectDesc)).toBeInTheDocument();
  });

  it('renders tabs and all matches by default', () => {
    render(<AIMatchingResults matches={mockMatches} isLoading={false} />);
    expect(screen.getByTestId('tabs')).toBeInTheDocument();
    expect(screen.getByTestId('tab-trigger-all')).toHaveTextContent(`All (${mockMatches.length})`);
    expect(screen.getByTestId('tab-trigger-talent')).toHaveTextContent(`Talent (2)`);
    expect(screen.getByTestId('tab-trigger-services')).toHaveTextContent(`Services (1)`);
    expect(screen.getByTestId('tab-trigger-equipment')).toHaveTextContent(`Equipment (1)`);

    // All cards should be rendered under the 'all' tab content initially
    const allTabContent = screen.getByTestId('tab-content-all');
    expect(allTabContent.querySelectorAll('[data-testid="card"]').length).toBe(mockMatches.length);
  });

  it('filters matches when a category tab is clicked', async () => {
    render(<AIMatchingResults matches={mockMatches} isLoading={false} />);
    const talentTabTrigger = screen.getByTestId('tab-trigger-talent');

    fireEvent.click(talentTabTrigger); // This should now trigger onValueChange via the mock

    await waitFor(() => {
      const tabsContainer = screen.getByTestId('tabs');
      expect(tabsContainer.getAttribute('data-value')).toBe('talent');
    });

    // After state updates and re-render, check content
    const talentTabContent = screen.getByTestId('tab-content-talent');
    expect(within(talentTabContent).getAllByTestId('card').length).toBe(2);
    expect(within(talentTabContent).getByText('Talent A')).toBeInTheDocument();
    expect(within(talentTabContent).getByText('Talent D')).toBeInTheDocument();

    // Ensure items from other categories are not present in this specific tab's content
    expect(within(talentTabContent).queryByText('Service B')).not.toBeInTheDocument();

    // Check that other tab contents are not rendered (or are empty)
    // This depends on the mock: if it only renders active tab content, others won't be found.
    // If it renders all but hides inactive, this check needs adjustment.
    // My new mock for TabsContent should only render if its value matches.
    expect(screen.queryByTestId('tab-content-all')).toBeNull();
    expect(screen.queryByTestId('tab-content-services')).toBeNull();
    expect(screen.queryByTestId('tab-content-equipment')).toBeNull();
  });

  it('displays "No {tab} matches found." if a category tab has no items', async () => {
    const specificMatches: MatchResultItem[] = [
      { id: '1', title: 'Talent A', description: 'Desc A', category: 'Talent' },
    ];
    render(<AIMatchingResults matches={specificMatches} isLoading={false} />);
    const servicesTabTrigger = screen.getByTestId('tab-trigger-services');
    fireEvent.click(servicesTabTrigger);

    await waitFor(() => {
      const servicesTabContent = screen.getByTestId('tab-content-services');
      expect(servicesTabContent).toHaveTextContent('No services matches found.');
    });
  });

  it('renders match card with correct details (including image and price)', () => {
    render(<AIMatchingResults matches={[mockMatches[0]]} isLoading={false} />);
    const allTabContent = screen.getByTestId('tab-content-all');

    expect(within(allTabContent).getByText('Talent A')).toBeInTheDocument();
    expect(within(allTabContent).getByText('Description A')).toBeInTheDocument();
    expect(within(allTabContent).getByTestId('avatar-image')).toHaveAttribute('src', 'imgA.png');
    expect(screen.getByText('$50')).toBeInTheDocument();
    expect(screen.getByText('/hour')).toBeInTheDocument();
    expect(screen.getByText('Talent')).toBeInTheDocument(); // Category Badge
    expect(screen.getByText('React')).toBeInTheDocument(); // Skill Badge
    expect(screen.getByText('Node')).toBeInTheDocument(); // Skill Badge
  });

  it('renders match card with fallback avatar and no price if not provided', () => {
    render(<AIMatchingResults matches={[mockMatches[1]]} isLoading={false} />);
    const allTabContent = screen.getByTestId('tab-content-all');

    expect(within(allTabContent).getByText('Service B')).toBeInTheDocument();
    expect(within(allTabContent).getByTestId('avatar-fallback')).toBeInTheDocument();
    expect(within(allTabContent).getByTestId('briefcase-icon')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.queryByText('/hour')).not.toBeInTheDocument();
  });

  it('calls onSelectMatch with correct match when a card is clicked', () => {
    const mockOnSelectMatch = jest.fn();
    render(<AIMatchingResults matches={mockMatches} isLoading={false} onSelectMatch={mockOnSelectMatch} />);

    const firstCard = screen.getAllByTestId('card')[0];
    fireEvent.click(firstCard);

    expect(mockOnSelectMatch).toHaveBeenCalledTimes(1);
    expect(mockOnSelectMatch).toHaveBeenCalledWith(mockMatches[0]);
  });

  it('does not call onSelectMatch if not provided', () => {
    render(<AIMatchingResults matches={mockMatches} isLoading={false} />);
    const firstCard = screen.getAllByTestId('card')[0];
    // No error should occur if onSelectMatch is undefined
    expect(() => fireEvent.click(firstCard)).not.toThrow();
  });
});
