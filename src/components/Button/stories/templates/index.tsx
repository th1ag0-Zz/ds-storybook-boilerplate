
import type { StoryFn } from '@storybook/react';

import Button from '../../index';

export const StoryTemplate: StoryFn<typeof Button> = props => (
  <div>
    <Button {...props} />
  </div>
);
