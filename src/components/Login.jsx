import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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
      console.log(apiUrl);
        
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

    const backtoLandingPage = () => {
      navigate('/');
    }

    return (
        <div className='login'>
          <button onClick={backtoLandingPage} className='backButton'><img src="/arrow_back.png" alt="back"/></button>
          <form onSubmit={handleLogin} className='loginForm'>
              <div>
                <label>Email</label>
                <input type="text" name="email" id="email"  onChange={handleChange} value ={formData.email} placeholder="Enter your email"/>
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value ={formData.password} placeholder="**********"/>
              </div>
              <input type="submit" value="Log In"/>
              <div>OR</div>
              <input type="button" value = "Sign in with Google"/>
              <div>Don't have an account? <a href="/register">Register Now</a></div>
          </form>
          <div id='triangles'><img src="/Group2.png" alt="Triangles"/></div>
          <div id='ellipse1'><img src="/Ellipse1.png" alt="Triangles"/></div>
          <div id='ellipse2'><img src="/Ellipse2.png" alt="Triangles"/></div>
        </div>
  )
}

export default Login
