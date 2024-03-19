import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../assets/css/Register.css';

const Register = () => {
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
    <div>
      <div className="login-container2">
            <form onSubmit={handleLogin} className="login-form2">
                <h2>Sign Up</h2>
                <div className="form-group2">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group2">
                    <label htmlFor="password">Password:</label>
                    <input type={showPassword?"text":"password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                   
                </div>
                <div className="form-group2">
                    <label htmlFor="password">Re-Enter Password:</label>
                    <input type={showPassword?"text":"password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                   
                </div>
                <Link to='/event/user/home' style={{ textDecoration:'none'}}><button type="submit" className="login-button2">REGISTER</button> </Link>               
                
                <div className='content2'>
                  Already have an account?&nbsp; 
                  <Link to='/event/login' style={{color:"black", textDecoration:'none',fontWeight: 600}}>
                     Login.
                  </Link>
                  <br></br>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register
