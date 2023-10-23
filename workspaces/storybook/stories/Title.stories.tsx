import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Title, TitleVariantEnum} from 'matrix-artifact-react-io-ui-components';

export default {
  title: 'Title',
  component: Title,
  parameters: {
    notes: `
    ## Here I can add some markdown
  
    #### Put a full new line between each element.
   `,
  },
  args: {
    variant: TitleVariantEnum.h1,
    children: 'Title component',
  },
  argTypes: {
    children: {
      name: 'children',
      control: {type: 'text'},
    },
    variant: {
      name: 'variant',
      options: Object.keys(TitleVariantEnum),
      control: {type: 'select'},
    },
  },
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = args => (
  <Title {...args} />
);
