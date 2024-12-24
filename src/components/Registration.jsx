import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
      username : '',
      email:'',
      password:'',
      confPassword: ''
    })
    
    const [formErrors, setFormErrors] = useState({
      usernameError : '',
      emailError : '',
      passwordError : '',
      confPasswordError : ''
    })
  

    const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
    console.log(apiUrl);
      
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      console.log(formData);
    };
    
      const handleRegister = async (e) => {
        e.preventDefault();
        if(formData.password != formData.confPassword){
          formErrors.confPasswordError = 'enter same password in both fiels';
        }
        
        else{
          await axios.post(apiUrl + '/api/user/register',formData)
          .then(response => {
            console.log(response);
            navigate('/login');
          })
          .catch(error => {
            console.log(error);
            alert('Error in registration');
          })
        }
    
      }

    const backtoLandingPage = () => {
      navigate('/');
    }

  return (
    <div className='registerForm'>
      <button onClick={backtoLandingPage}></button>      
      <form onSubmit={handleRegister}>
        <div>
          <label className="title-label">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} value ={formData.name}placeholder="Enter Name"/>
          <label className="error" style={{ color : 'red' }}>{formErrors.usernameError}</label>
        </div>
        <div>
          <label className="title-label">Email</label>
          <input type="text" name="email" id="email"  onChange={handleChange} value ={formData.email} placeholder="Enter Email"/>
          <label className="error" style={{ color : 'red' }}>{formErrors.emailError}</label>
        </div>
        <div>
          <label className="title-label">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} value ={formData.password} placeholder="Enter Password"/>
          <label className="error" style={{ color : 'red' }}>{formErrors.passwordError}</label>
        </div>
        <div>
          <label className="title-label">Confirm Password</label>
          <input type="password" name="conf_password" id="conf_password" onChange={handleChange} value ={formData.confPassword} placeholder="Enter Password"/>
          <label className="error" id="confPasswordError" style={{ color : 'red' }}>{formErrors.confPasswordError}</label>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
      <div>Already have an account? <a href="/login">Sign In</a></div>
    </div>
  )
}

export default Registration
