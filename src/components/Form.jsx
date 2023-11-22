import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
  });
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:8080/form', formData);
      console.log(data);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        password: '',
        gender: '',
        age: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
const { name, email, password, gender, age } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className='container mt-5'>
        <div className='row p-4 w-50 g-3 justify-content-center align-item-center'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input type='text' name='name' value={name} onChange={handleChange} className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input type='email' name='email' value={email} onChange={handleChange} className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input type='password' name='password' value={password} onChange={handleChange} className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor='gender' className='form-label'>
              Gender
            </label>
            <input type='text' name='gender' value={gender} onChange={handleChange} className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>
              Age
            </label>
            <input type='number' name='age' value={age} onChange={handleChange} className='form-control' required />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
