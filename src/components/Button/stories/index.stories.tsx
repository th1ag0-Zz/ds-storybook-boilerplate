import type { Meta, StoryFn } from '@storybook/react';
import Button from '../index.tsx';
import buttonDocs from './docs/button.mdx';
import { buttonPropsTypes } from './docs/props-types/props.ts';
import type { IButtonProps } from '../types';
import { StoryTemplate } from './templates/index.tsx'

const StoryData: Meta<IButtonProps> = {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    docs: {
      page: buttonDocs,
    }
  },
  argTypes: buttonPropsTypes, 
};

export const Default: StoryFn<IButtonProps> = props => {
  return <StoryTemplate {...props} />;
};

export default StoryData;
