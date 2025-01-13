import { Meta, StoryFn } from '@storybook/react';
import UserForm from './UserForm';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Pages/UserForm',
  component: UserForm,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn<typeof UserForm> = (args) => <UserForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'User Form';

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const nameInput = await canvas.findByLabelText('Name');
  userEvent.type(nameInput, 'John Doe');

  const emailInput = await canvas.findByLabelText('Email');
  userEvent.type(emailInput, 'john.doe@example.com');

  const passwordInput = await canvas.findByLabelText('Password');
  userEvent.type(passwordInput, 'password123');

  const submitButton = await canvas.findByRole('button', { name: /submit/i });
  userEvent.click(submitButton);

};
