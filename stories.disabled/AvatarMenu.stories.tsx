import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { within, userEvent } from '@storybook/testing-library';
import { AvatarMenu } from '../src/components/header/AvatarMenu';

const meta: Meta<typeof AvatarMenu> = {
  title: 'Components/AvatarMenu',
  component: AvatarMenu,
};

export default meta;

export const Default: StoryObj<typeof AvatarMenu> = {
  render: () => (
    <MemoryRouter>
      <AvatarMenu />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await userEvent.keyboard('{Escape}');
  },
};
