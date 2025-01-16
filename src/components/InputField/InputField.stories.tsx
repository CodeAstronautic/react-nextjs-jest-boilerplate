import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Use StoryFn for defining templates
import InputField, { InputFieldProps } from './InputField';
import { FormData } from '../../types/formTypes';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta<InputFieldProps>;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  name: 'defaultInput' as keyof FormData,
  type: 'text',
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log('Default Input:', e.target.value),
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Password',
  name: 'password' as keyof FormData,
  type: 'password',
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log('Password Input:', e.target.value),
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
  name: 'email' as keyof FormData,
  type: 'email',
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log('Email Input:', e.target.value),
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: 'Disabled Input',
  name: 'disabledInput' as keyof FormData,
  type: 'text',
  value: 'Cannot change me',
  onChange: () => {},
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: 'Styled Input',
  name: 'styledInput' as keyof FormData,
  type: 'text',
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log('Styled Input:', e.target.value),
};
