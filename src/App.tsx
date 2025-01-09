import React from 'react';
import { FormProvider } from './contexts/FormContext';
import UserForm from './pages/UserForm';

const App: React.FC = () => {
  return (
    <FormProvider>
      <UserForm />
    </FormProvider>
  );
};

export default App;
