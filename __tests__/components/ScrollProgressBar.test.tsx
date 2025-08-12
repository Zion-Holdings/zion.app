import { render, fireEvent } from '@testing-library/react';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';

describe('ScrollProgressBar', () => {
  test('updates progress width when scrolling', () => {
    Object.defineProperty(window, 'innerHeight', {
      value: 1000,
      writable: true,
    });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });

    const { container } = render(<ScrollProgressBar />);
    const bar = container.querySelector('div > div') as HTMLDivElement;
    expect(bar.style.width).toBe('0%');

    window.scrollY = 500;
    fireEvent.scroll(window);
    expect(bar.style.width).toBe('50%');
  });
});
