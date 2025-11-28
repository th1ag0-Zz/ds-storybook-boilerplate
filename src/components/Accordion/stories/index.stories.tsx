import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './templates';

const meta: Meta<typeof Accordion> = {
  title: 'Componentes/Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: 'Default',
  render: () => <Accordion />,
};
