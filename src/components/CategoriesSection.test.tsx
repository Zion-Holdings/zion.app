import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { CategoriesSection } from './CategoriesSection';

// Mock child components and dependencies
jest.mock('./GradientHeading', () => ({
  GradientHeading: jest.fn(({ children }) => <h2 data-testid="gradient-heading">{children}</h2>),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn(({ children, to, className, ...props }: { children: React.ReactNode, to: string, className?: string }) => (
    <a href={to} className={className || ''} data-testid="mocked-link" {...props}>{children}</a>
  )),
}));

jest.mock('lucide-react', () => ({
  Briefcase: () => <svg data-testid="briefcase-icon" />,
  Users: () => <svg data-testid="users-icon" />,
  HardDrive: () => <svg data-testid="harddrive-icon" />,
  Lightbulb: () => <svg data-testid="lightbulb-icon" />,
  HelpCircle: () => <svg data-testid="helpcircle-icon" />,
}));

jest.mock('@/lib/utils', () => ({
  cn: (...inputs: any[]) => inputs.filter(Boolean).join(' '),
}));

// Internal defaultCategories data from the component for verification
const defaultCategoriesData = [
  { name: "Services", title: "Services", description: "On-demand IT support, consulting, development, and more", iconTestId: "briefcase-icon", link: "/services" },
  { name: "Talents", title: "Talents", description: "Connect with AI experts, developers, and tech specialists", iconTestId: "users-icon", link: "/talent" },
  { name: "Equipment", title: "Equipment", description: "Rent or buy specialized hardware, servers, and devices", iconTestId: "harddrive-icon", link: "/equipment" },
  { name: "Innovation", title: "Innovation", description: "Discover cutting-edge solutions and tech breakthroughs", iconTestId: "lightbulb-icon", link: "/innovation" },
];

const customCategoriesPropData = [
  { id: 'custom1', name: 'Custom Category 1', description: 'Custom Desc 1', iconName: 'Briefcase', link: '/custom-link-1' },
  { id: 'custom2', name: 'Custom Category 2', description: 'Custom Desc 2', iconName: 'Users' /* No link, expect default */ },
];


describe('CategoriesSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Default Rendering (with defaultCategories)', () => {
    it('should render title and subtitle by default', () => {
      render(<CategoriesSection />);
      expect(screen.getByTestId('gradient-heading')).toHaveTextContent('Explore Categories');
      expect(screen.getByText('Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation')).toBeInTheDocument();
    });

    it('should render the 4 default categories', () => {
      render(<CategoriesSection />);
      // Each category is wrapped in a Link, which our mock renders as an <a>
      // The visual card is inside the link. We check for elements unique to each card.
      defaultCategoriesData.forEach(catData => {
        expect(screen.getByText(catData.title)).toBeInTheDocument();
        expect(screen.getByText(catData.description)).toBeInTheDocument();
      });
       // Count distinct elements that indicate a card, like descriptions
      const descriptions = defaultCategoriesData.map(cat => cat.description);
      descriptions.forEach(desc => expect(screen.getByText(desc)).toBeInTheDocument());
    });

    it('renders correct content and links for default categories', () => {
      render(<CategoriesSection />);
      const links = screen.getAllByTestId('mocked-link');

      defaultCategoriesData.forEach(catData => {
        const linkElement = links.find(link => link.getAttribute('href') === catData.link && link.textContent?.includes(catData.title));
        expect(linkElement).toBeInTheDocument();
        if (linkElement) {
          expect(within(linkElement).getByText(catData.title)).toBeInTheDocument();
          expect(within(linkElement).getByText(catData.description)).toBeInTheDocument();
          expect(within(linkElement).getByTestId(catData.iconTestId)).toBeInTheDocument();
        }
      });
    });
  });

  describe('With Custom Categories Prop', () => {
    it('should render custom categories when passed as props', () => {
      render(<CategoriesSection categories={customCategoriesPropData} />);
      customCategoriesPropData.forEach(catData => {
        expect(screen.getByText(catData.name)).toBeInTheDocument();
        expect(screen.getByText(catData.description)).toBeInTheDocument();
      });

      const links = screen.getAllByTestId('mocked-link').filter(link =>
        !link.textContent?.includes("View All Categories") && !link.textContent?.includes("IT Onsite Services")
      );
      expect(links).toHaveLength(customCategoriesPropData.length);
    });

    it('constructs default links for custom categories if link is not provided', () => {
      render(<CategoriesSection categories={customCategoriesPropData} />);
      const category2Data = customCategoriesPropData[1];
      const linkElement = screen.getAllByTestId('mocked-link').find(link => link.textContent?.includes(category2Data.name));
      expect(linkElement).toHaveAttribute('href', `/category/${category2Data.id}`);
    });

     it('renders correct icons for custom categories', () => {
      render(<CategoriesSection categories={customCategoriesPropData} />);
      const cat1Link = screen.getAllByTestId('mocked-link').find(link => link.textContent?.includes(customCategoriesPropData[0].name));
      const cat2Link = screen.getAllByTestId('mocked-link').find(link => link.textContent?.includes(customCategoriesPropData[1].name));

      expect(within(cat1Link!).getByTestId('briefcase-icon')).toBeInTheDocument();
      expect(within(cat2Link!).getByTestId('users-icon')).toBeInTheDocument();
    });
  });

  it('should render "No Categories Found" when categories prop is an empty array', () => {
    render(<CategoriesSection categories={[]} />);
    expect(screen.getByText('No Categories Found')).toBeInTheDocument();
    expect(screen.getByText("We couldn't find any categories to display at this time.")).toBeInTheDocument();
    expect(screen.queryByTestId('gradient-heading')).not.toBeInTheDocument();
  });

  it('should not render title and subtitle if showTitle is false', () => {
    render(<CategoriesSection showTitle={false} categories={customCategoriesPropData} />);
    expect(screen.queryByTestId('gradient-heading')).not.toBeInTheDocument();
    expect(screen.queryByText('Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation')).not.toBeInTheDocument();
  });

  it('should render Featured Services and View All Categories link', () => {
    render(<CategoriesSection />);
    expect(screen.getByText('Featured Services')).toBeInTheDocument();

    const featuredServiceLink = screen.getAllByTestId('mocked-link').find(link => link.textContent?.includes('IT Onsite Services'));
    expect(featuredServiceLink).toHaveAttribute('href', '/it-onsite-services');

    const viewAllLink = screen.getAllByTestId('mocked-link').find(link => link.textContent?.includes('View All Categories →'));
    expect(viewAllLink).toHaveAttribute('href', '/categories/all');
  });

  it('should apply className prop to the root section element', () => {
    const customClassName = "my-custom-class";
    const { container } = render(<CategoriesSection className={customClassName} />);
    expect(container.firstChild).toHaveClass(customClassName);
    expect(container.firstChild).toHaveClass("py-20"); // default class
  });

  it('should apply style prop to the root section element', () => {
    const customStyle = { backgroundColor: 'blue' };
    const { container } = render(<CategoriesSection style={customStyle} />);
    expect(container.firstChild).toHaveStyle('background-color: rgb(0, 0, 255);'); // Corrected
  });
});
