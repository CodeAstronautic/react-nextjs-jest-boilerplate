import React from 'react';
import useFormData from '../hooks/useFormData';
import FormContainer from '../components/FormContainer';

const UserForm: React.FC = () => {
  const { formData, handleChange, resetForm } = useFormData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <div className="form-page">
      <h1>User Form</h1>
      <FormContainer formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default UserForm;
