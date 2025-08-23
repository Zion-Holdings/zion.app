import { render } from '@testing-library/react';
import { RatingStars } from '@/components/RatingStars';

test('rating 4.7 shows 4 filled and 1 half star', () => {
  const { container } = render(<RatingStars value={4.7} />);
  const filled = container.querySelectorAll('[data-testid="star-filled"]');
  const half = container.querySelectorAll('[data-testid="star-half"]');
  const outline = container.querySelectorAll('[data-testid="star-outline"]');
  expect(filled).toHaveLength(4);
  expect(half).toHaveLength(1);
  expect(filled.length + half.length + outline.length).toBe(5);
});
