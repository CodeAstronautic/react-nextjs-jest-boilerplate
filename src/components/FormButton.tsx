import React from 'react';

interface FormButtonProps {
  label: string;
  type?: 'submit' | 'button' | 'reset';
}

const FormButton: React.FC<FormButtonProps> = ({ label, type = 'submit' }) => {
  return (
    <button type={type} className="form-button">
      {label}
    </button>
  );
};

export default FormButton;
