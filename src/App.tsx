import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./App.css";
import formConfig from "./config/FormConfig";
import FormField from './components/common/FormField';

interface FormData {
  [key: string]: string | number;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(
    formConfig.reduce((acc, field) => {
      acc[field.name] = field.type === 'number' ? 0 : '';
      return acc;
    }, {} as FormData)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="App">
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        {formConfig.map((field, index) => (
          <FormField
            key={index}
            formField={field}
            value={formData[field.name]}
            onChange={handleChange}
            formData={formData}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
