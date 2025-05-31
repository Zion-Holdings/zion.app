import { render, screen } from '@testing-library/react';
import StarRating from '@/components/StarRating';

test('rating 4.5 renders 4 full and 1 half star', () => {
  render(<StarRating value={4.5} />);
  expect(screen.getAllByTestId('full-star')).toHaveLength(4);
  expect(screen.getAllByTestId('half-star')).toHaveLength(1);
});
