import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../assets/css/Login.css';
const Login = () => {
  // const data = undefined
  // console.log(data);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
      e.preventDefault();
      // Your login logic goes here
      console.log("Logging in with:", username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
  
       <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Have an account?</h2>
                
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type={showPassword?"text":"password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" onClick={togglePasswordVisibility}    className='visibility'   
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
                </div>
                <Link to='/event/user/home' style={{ textDecoration:'none'}}><button type="submit" className="login-button">LOGIN</button> </Link>               
                
                <div className='content'>
                  <Link to='/event/forgotpassword' style={{color:"black", textDecoration:'none'}}>
                     Forgot Password?
                  </Link>
                  <br></br>
                  Don't have an account?&nbsp; 
                  <Link to='/event/register' style={{color:"black", textDecoration:'none',fontWeight: 600}}>
                     Register.
                  </Link>
                  
                  
                </div>
            </form>
        </div>
   
  )
}

export default Login
