import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
// BlogSection will be imported dynamically in beforeEach / test blocks

// Mock data source: This object will hold the array that the mock uses.
const mockBlogDataStore = {
  BLOG_POSTS: [] as any[],
};
jest.mock('@/data/blog-posts', () => ({
  __esModule: true,
  // Use a getter to ensure the BlogSection module gets the array
  // that 'mockBlogDataStore.BLOG_POSTS' points to at the time of module execution.
  get BLOG_POSTS() {
    return mockBlogDataStore.BLOG_POSTS;
  },
}));

// Mock react-router-dom Link
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn(({ children, to, ...props }: { children: React.ReactNode, to: string }) => <a href={to} {...props}>{children}</a>),
}));

// Mock child components
jest.mock('./GradientHeading', () => ({
  GradientHeading: jest.fn(({ children }) => <h2 data-testid="gradient-heading">{children}</h2>),
}));
jest.mock('@/components/ui/card', () => ({
  Card: jest.fn(({ children, ...props }) => <div data-testid="blog-card" {...props}>{children}</div>),
  CardContent: jest.fn(({ children, ...props }) => <div data-testid="card-content" {...props}>{children}</div>),
  CardFooter: jest.fn(({ children, ...props }) => <div data-testid="card-footer" {...props}>{children}</div>),
}));

// Simplified Button mock for asChild to prevent React warning
jest.mock('./ui/button', () => ({
  Button: jest.fn(({ children, asChild, ...props }: any) => {
    if (asChild) {
      // If asChild is true, and children is a single ReactElement, clone it with remaining props.
      // This assumes the child (e.g., Link) can handle these props or will ignore them.
      // The main goal is to avoid passing Button-specific props like 'variant' to non-Button DOM elements.
      if (React.isValidElement(children)) {
        const { variant, ...restProps } = props; // Explicitly remove variant if it's an issue
        return React.cloneElement(children, { ...children.props, ...restProps });
      }
      return children;
    }
    return <button {...props}>{children}</button>;
  }),
}));


const samplePostsData = [
  { id: '4', title: 'Blog Post 4', excerpt: 'Summary 4', featuredImage: '/img4.jpg', slug: 'blog-post-4', category: 'Tutorial', publishedDate: '2023-09-01', readTime: '10 min read' },
  { id: '1', title: 'Blog Post 1', excerpt: 'Summary 1', featuredImage: '/img1.jpg', slug: 'blog-post-1', category: 'Tech', publishedDate: '2023-10-01', readTime: '5 min read' },
  { id: '2', title: 'Blog Post 2', excerpt: 'Summary 2', featuredImage: '/img2.jpg', slug: 'blog-post-2', category: 'Business', publishedDate: '2023-10-15', readTime: '7 min read' },
  { id: '3', title: 'Blog Post 3', excerpt: 'Summary 3', featuredImage: '/img3.jpg', slug: 'blog-post-3', category: 'AI', publishedDate: '2023-10-20', readTime: '6 min read' },
];

describe('BlogSection', () => {
  let BlogSection: any;

  const loadBlogSectionWithData = (posts: any[]) => {
    jest.resetModules(); // Reset modules to ensure BlogSection re-imports mocked data
    mockBlogDataStore.BLOG_POSTS = [...posts]; // Set the data for the mock
    BlogSection = require('./BlogSection').BlogSection; // Dynamically import after setting data

    // Clear mocks for components that are checked per test
    (require('./GradientHeading').GradientHeading as jest.Mock).mockClear();
    (require('@/components/ui/card').Card as jest.Mock).mockClear();
    (require('./ui/button').Button as jest.Mock).mockClear();
    (require('react-router-dom').Link as jest.Mock).mockClear();

    return render(<BlogSection />);
  };

  beforeEach(() => {
    // Clear all top-level mocks (like Link, Button, etc.) that are not re-required.
    jest.clearAllMocks();
  });

  it('should render the main heading, subtitle, and "View All Articles" button', () => {
    loadBlogSectionWithData(samplePostsData.slice(0,1));
    expect(screen.getByTestId('gradient-heading')).toHaveTextContent('Latest Insights');
    expect(screen.getByText("Stay updated with trends in AI technology, marketplace strategies, and IT services")).toBeInTheDocument();

    const viewAllButtonLink = screen.getByRole('link', { name: /view all articles/i });
    expect(viewAllButtonLink).toBeInTheDocument();
    expect(viewAllButtonLink).toHaveAttribute('href', '/blog');
  });

  it('should display up to 3 recent blog posts, sorted by date', () => {
    loadBlogSectionWithData(samplePostsData);
    const blogCards = screen.getAllByTestId('blog-card');
    expect(blogCards).toHaveLength(3);

    expect(within(blogCards[0]).getByText('Blog Post 3')).toBeInTheDocument();
    expect(within(blogCards[1]).getByText('Blog Post 2')).toBeInTheDocument();
    expect(within(blogCards[2]).getByText('Blog Post 1')).toBeInTheDocument();
    expect(screen.queryByText('Blog Post 4')).not.toBeInTheDocument();
  });

  it('should display correct number of posts if fewer than 3 are available', () => {
    const twoMostRecent = [...samplePostsData]
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      .slice(0, 2);
    loadBlogSectionWithData(twoMostRecent);
    const blogCards = screen.getAllByTestId('blog-card');
    expect(blogCards).toHaveLength(2);
  });

  it('should display no blog posts if BLOG_POSTS is empty', () => {
    loadBlogSectionWithData([]);
    expect(screen.queryAllByTestId('blog-card')).toHaveLength(0);
  });

  it('should render correct content within each blog post card', () => {
    const mostRecentPost = [...samplePostsData].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())[0];
    loadBlogSectionWithData([mostRecentPost]);

    const card = screen.getByTestId('blog-card');

    expect(within(card).getByRole('img')).toHaveAttribute('src', mostRecentPost.featuredImage);
    expect(within(card).getByRole('img')).toHaveAttribute('alt', mostRecentPost.title);
    expect(within(card).getByText(mostRecentPost.category)).toBeInTheDocument();
    expect(within(card).getByText(`${mostRecentPost.publishedDate} • ${mostRecentPost.readTime}`)).toBeInTheDocument();
    expect(within(card).getByText(mostRecentPost.title)).toBeInTheDocument();
    expect(within(card).getByText(mostRecentPost.excerpt)).toBeInTheDocument();

    const readMoreLink = within(card).getByRole('link', { name: /read more/i });
    expect(readMoreLink).toHaveAttribute('href', `/blog/${mostRecentPost.slug}`);
  });

  it('renders fallback image if featuredImage fails to load', () => {
    // Use only one post for this test to simplify image selection
    const postWithInvalidImage = { ...samplePostsData[0], featuredImage: 'invalid-url.jpg' };
    loadBlogSectionWithData([postWithInvalidImage]);

    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image).toHaveAttribute('src', 'invalid-url.jpg');

    fireEvent.error(image); // Simulate image loading error
    expect(image.src).toContain('/images/blog-placeholder.svg'); // Check if src is updated
  });
});
