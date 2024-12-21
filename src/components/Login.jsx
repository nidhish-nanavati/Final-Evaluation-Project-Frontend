import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/dashboard');
        }

    },[]);
    const [formData,setFormData] = useState({
        email:'',
        password:''
      })

      const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
        
      const handleLogin = async (e) => {
        e.preventDefault();
        await axios.post(apiUrl + '/api/user/login',formData)
        .then(response => {
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard')
        })
        .catch(error => {
          console.log(error);
          alert('Error in Login');
        })
      }



    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log(formData);
    };

    return (
        <div>
        <form onSubmit={handleLogin}>
            <input type="text" name="email" id="email"  onChange={handleChange} value ={formData.email} placeholder="Enter Email"/>
            <input type="password" name="password" id="password" onChange={handleChange} value ={formData.password} placeholder="Enter Password"/>
            <input type="submit" value="Sign in"/>
        </form>
        <div>Don't have an account? <a href="/register">Sign Up</a></div>
        </div>
  )
}

export default Login
