import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name : '',
        email:'',
        mobile: '',
        password:''
      })
    
      const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
      
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log(formData);
      };
    
      const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post(apiUrl + '/api/user/register',formData)
        .then(response => {
          console.log(response);
          alert('User Registered succesfully');
          navigate('/login');
        })
        .catch(error => {
          console.log(error);
          alert('Error in registration');
        })
    
      }

    const backtoLandingPage = () => {
      navigate('/');
    }

  return (
    <div className='registerForm'>
      <button onClick={backtoLandingPage}></button>      
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="name" onChange={handleChange} value ={formData.name}placeholder="Enter Name"/>
        <input type="text" name="email" id="email"  onChange={handleChange} value ={formData.email} placeholder="Enter Email"/>
        <input type="text" name="mobile" id="mobile" onChange={handleChange} value ={formData.mobile} placeholder="Enter Phone"/>
        <input type="password" name="password" id="password" onChange={handleChange} value ={formData.password} placeholder="Enter Password"/>
        <input type="submit" value="Submit"/>
      </form>
      <div>Already have an account? <a href="/login">Sign In</a></div>
    </div>
  )
}

export default Registration
