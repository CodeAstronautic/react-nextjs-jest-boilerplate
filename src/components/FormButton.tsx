import React from 'react';

interface FormButtonProps {
  label: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormButton: React.FC<FormButtonProps> = ({ label, type = 'submit', onClick }) => {
  return (
    <button type={type} className="form-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default FormButton;
