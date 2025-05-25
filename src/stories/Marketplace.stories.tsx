import type { Meta, StoryObj } from '@storybook/react';
import Marketplace from '../pages/Marketplace';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Marketplace> = {
  title: 'Pages/Marketplace',
  component: Marketplace,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof Marketplace>;

export const Grid: Story = {
  render: () => {
    localStorage.setItem('marketplaceView', 'grid');
    return <Marketplace />;
  }
};

export const List: Story = {
  render: () => {
    localStorage.setItem('marketplaceView', 'list');
    return <Marketplace />;
  }
};
