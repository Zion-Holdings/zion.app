import React from 'react';
import { render, screen, within } from '@testing-library/react'; // Added within
import { BenefitsSection } from './BenefitsSection'; // Assuming default export based on your file, or named if it's { BenefitsSection }

// Mock child components
jest.mock('./GradientHeading', () => ({
  GradientHeading: jest.fn(({ children }) => <h2 data-testid="gradient-heading">{children}</h2>),
}));

jest.mock('./FeatureCard', () => ({
  FeatureCard: jest.fn(({ title, description, icon }) => (
    <div data-testid="feature-card">
      <h3 data-testid="feature-card-title">{title}</h3>
      <p data-testid="feature-card-description">{description}</p>
      <div data-testid="feature-card-icon">{icon}</div>
    </div>
  )),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Bot: () => <svg data-testid="bot-icon" />,
  Clock: () => <svg data-testid="clock-icon" />,
  Globe: () => <svg data-testid="globe-icon" />,
  TrendingDown: () => <svg data-testid="trendingdown-icon" />,
}));

// Mock cn utility
jest.mock('@/lib/utils', () => ({
  cn: (...inputs: any[]) => inputs.filter(Boolean).join(' '),
}));

// Internal benefits data from the component for verification
const benefitsData = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    iconTestId: "bot-icon", // To check for the correct icon mock
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    iconTestId: "globe-icon",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    iconTestId: "clock-icon",
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    iconTestId: "trendingdown-icon",
  },
];

describe('BenefitsSection', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    (require('./GradientHeading').GradientHeading as jest.Mock).mockClear();
    (require('./FeatureCard').FeatureCard as jest.Mock).mockClear();
  });

  it('should render the main heading and subtitle', () => {
    render(<BenefitsSection />);
    expect(screen.getByTestId('gradient-heading')).toHaveTextContent('Why Zion?');
    expect(screen.getByText("Experience the next generation of tech marketplace with features designed to maximize efficiency and value")).toBeInTheDocument();
  });

  it('should render the correct number of FeatureCard components', () => {
    render(<BenefitsSection />);
    const featureCards = screen.getAllByTestId('feature-card');
    expect(featureCards).toHaveLength(benefitsData.length);
  });

  it('should pass correct props to each FeatureCard', () => {
    render(<BenefitsSection />);
    const featureCardMock = require('./FeatureCard').FeatureCard as jest.Mock;

    expect(featureCardMock).toHaveBeenCalledTimes(benefitsData.length);

    benefitsData.forEach((benefit, index) => {
      const expectedProps = expect.objectContaining({
        title: benefit.title,
        description: benefit.description,
        icon: expect.anything(), // Icon is a JSX element, harder to match precisely without deeper inspection
      });
      expect(featureCardMock.mock.calls[index][0]).toMatchObject(expectedProps);

      // Check if the icon's mock is rendered within the card
      const cardElement = screen.getAllByTestId('feature-card')[index];
      expect(within(cardElement).getByTestId(benefit.iconTestId)).toBeInTheDocument();
    });
  });

  it('should apply className prop to the root section element', () => {
    const customClassName = "my-custom-class";
    const { container } = render(<BenefitsSection className={customClassName} />);
    // The root element is the first child of the container provided by render
    // and it's a <section> element.
    expect(container.firstChild).toHaveClass(customClassName);
    expect(container.firstChild).toHaveClass("py-20"); // Default class
  });

  it('should apply style prop to the root section element', () => {
    const customStyle = { backgroundColor: 'red', padding: '10px' };
    const { container } = render(<BenefitsSection style={customStyle} />);
    expect(container.firstChild).toHaveStyle('background-color: rgb(255, 0, 0);'); // Corrected color value
    expect(container.firstChild).toHaveStyle('padding: 10px;');
  });
});
