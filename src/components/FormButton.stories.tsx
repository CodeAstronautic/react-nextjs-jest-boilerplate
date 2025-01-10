import { Meta, StoryFn } from '@storybook/react';
import FormButton from './FormButton';

export default {
  title: 'Components/FormButton',
  component: FormButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn = (args) => <FormButton label={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  label: 'Reset',
  type: 'reset',
};

export const CustomOnClick = Template.bind({});
CustomOnClick.args = {
  label: 'Click Me',
  onClick: () => alert('Button Clicked!'),
};

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  label: 'Submit',
  ariaLabel: 'Submit Form Button',
};
