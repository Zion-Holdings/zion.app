import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'; // Import within
import { CommunityDiscussion } from './CommunityDiscussion';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  MessageCircle: () => <svg data-testid="message-circle-icon" />,
}));

// Mock UI components from @/components/ui/*
jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, onClick, disabled, variant, size, ...props }: any) => (
    <button onClick={onClick} disabled={disabled} data-variant={variant} data-size={size} {...props}>
      {children}
    </button>
  )),
}));
jest.mock('@/components/ui/input', () => ({
  Input: jest.fn((props: any) => <input data-testid="input-title" {...props} />),
}));
jest.mock('@/components/ui/textarea', () => ({
  Textarea: jest.fn((props: any) => <textarea data-testid="textarea-body" {...props} />),
}));
jest.mock('@/components/ui/avatar', () => ({
  Avatar: jest.fn(({ children, ...props }: any) => <div data-testid="avatar" {...props}>{children}</div>),
  AvatarFallback: jest.fn(({ children, ...props }: any) => <div data-testid="avatar-fallback" {...props}>{children}</div>),
}));
jest.mock('@/components/ui/card', () => ({
  Card: jest.fn(({ children, ...props }: any) => <div data-testid="card" {...props}>{children}</div>),
  CardContent: jest.fn(({ children, ...props }: any) => <div data-testid="card-content" {...props}>{children}</div>),
}));
jest.mock('@/components/ui/separator', () => ({
  Separator: jest.fn((props: any) => <hr data-testid="separator" {...props} />),
}));


// Initial posts data from the component for verification and count
const initialPostsData = [
  { author: "Anna Zhou", title: "What AI trends are you most excited for in 2025?" },
  { author: "David Kim", title: "Quick tip: How to rank your Zion listing higher" },
];

describe('CommunityDiscussion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render initial layout, title, post count, and initial posts', () => {
    render(<CommunityDiscussion />);
    expect(screen.getByTestId('message-circle-icon')).toBeInTheDocument();
    expect(screen.getByText('Community Discussion')).toBeInTheDocument();
    expect(screen.getByText(`${initialPostsData.length} posts`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'New Post' })).toBeInTheDocument();
    expect(screen.getByTestId('separator')).toBeInTheDocument();

    initialPostsData.forEach(post => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.author, { exact: false })).toBeInTheDocument();
    });
    // Only initial posts cards should be rendered. The new post form card is conditional.
    expect(screen.getAllByTestId('card')).toHaveLength(initialPostsData.length);
  });

  it('should show and hide the new post form when "New Post" / "Cancel" is clicked', () => {
    render(<CommunityDiscussion />);
    const newPostButton = screen.getByRole('button', { name: 'New Post' });

    expect(screen.queryByPlaceholderText("Title (e.g., Share an AI tool, Ask for help...)")).not.toBeInTheDocument();

    fireEvent.click(newPostButton);
    expect(screen.getByPlaceholderText("Title (e.g., Share an AI tool, Ask for help...)")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What's on your mind?")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Post' })).toBeInTheDocument();
    expect(newPostButton).toHaveTextContent('Cancel');

    fireEvent.click(newPostButton);
    expect(screen.queryByPlaceholderText("Title (e.g., Share an AI tool, Ask for help...)")).not.toBeInTheDocument();
    expect(newPostButton).toHaveTextContent('New Post');
  });

  it('should allow typing in new post form and enable Post button', () => {
    render(<CommunityDiscussion />);
    fireEvent.click(screen.getByRole('button', { name: 'New Post' }));

    const titleInput = screen.getByTestId('input-title');
    const bodyTextarea = screen.getByTestId('textarea-body');
    const postButton = screen.getByRole('button', { name: 'Post' });

    expect(postButton).toBeDisabled();

    fireEvent.change(titleInput, { target: { value: 'New Test Title' } });
    expect(postButton).toBeDisabled();

    fireEvent.change(bodyTextarea, { target: { value: 'New Test Body' } });
    expect(postButton).not.toBeDisabled();
  });

  it('should add a new post and clear/hide form on "Post" click', async () => {
    render(<CommunityDiscussion />);
    fireEvent.click(screen.getByRole('button', { name: 'New Post' }));

    const titleInput = screen.getByTestId('input-title');
    const bodyTextarea = screen.getByTestId('textarea-body');
    const postButton = screen.getByRole('button', { name: 'Post' });

    fireEvent.change(titleInput, { target: { value: 'Awesome New Idea' } });
    fireEvent.change(bodyTextarea, { target: { value: 'This is my great idea.' } });
    fireEvent.click(postButton);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText("Title (e.g., Share an AI tool, Ask for help...)")).not.toBeInTheDocument();
    });

    const allCards = screen.getAllByTestId('card');
    // New post is prepended, so it should be the first among the post cards.
    // initialPostsData.length cards + 1 new card
    expect(allCards).toHaveLength(initialPostsData.length + 1);

    const newPostCard = allCards.find(card => within(card).queryByText('Awesome New Idea'));
    expect(newPostCard).toBeInTheDocument();

    if (newPostCard) {
        expect(within(newPostCard).getByText('You')).toBeInTheDocument();
        expect(within(newPostCard).getByText('Now')).toBeInTheDocument();
        expect(within(newPostCard).getByText('Awesome New Idea')).toBeInTheDocument();
        expect(within(newPostCard).getByText('This is my great idea.')).toBeInTheDocument();
    }

    expect(screen.getByText(`${initialPostsData.length + 1} posts`)).toBeInTheDocument();
  });

  it('should correctly generate avatar fallback from author name', () => {
    render(<CommunityDiscussion />);
    // Find cards based on content to ensure we are targetting the correct ones
    const annaZhouPostContainer = screen.getByText('What AI trends are you most excited for in 2025?').closest('[data-testid="card"]');
    expect(annaZhouPostContainer).toBeInTheDocument();
    expect(within(annaZhouPostContainer!).getByTestId('avatar-fallback')).toHaveTextContent('AZ');

    const davidKimPostContainer = screen.getByText('Quick tip: How to rank your Zion listing higher').closest('[data-testid="card"]');
    expect(davidKimPostContainer).toBeInTheDocument();
    expect(within(davidKimPostContainer!).getByTestId('avatar-fallback')).toHaveTextContent('DK');
  });
});
