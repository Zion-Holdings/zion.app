import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ViewModeProvider, useViewMode } from '@/context/ViewModeContext';
jest.mock('@/pages/Marketplace.module.css', () => ({ grid: 'grid', list: 'list' }));
import styles from '@/pages/Marketplace.module.css';

function TestComponent() {
  const { viewMode, setViewMode } = useViewMode();
  return (
    <div>
      <button aria-label="List view" onClick={() => setViewMode('list')} />
      <div data-testid="container" className={viewMode === 'grid' ? styles.grid : styles.list} />
    </div>
  );
}

test('toggle state updates and class applied', () => {
  const { getByLabelText, getByTestId } = render(
    <ViewModeProvider>
      <TestComponent />
    </ViewModeProvider>
  );
  fireEvent.click(getByLabelText('List view'));
  expect(getByTestId('container').className).toContain(styles.list);
});
