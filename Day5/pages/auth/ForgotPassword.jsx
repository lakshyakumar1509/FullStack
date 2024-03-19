import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../assets/css/ForgotPassword.css';
const ForgotPassword = () => {
  // const data = undefined
  // console.log(data);
  const [email, setEmail] = useState('');
  
  const handleLogin = (e) => {
      e.preventDefault();
      // Your login logic goes here
      console.log("Logging in with:", email);
  };

  

  return (
  
       <div className="fp-container">
            <form onSubmit={handleLogin} className="fp-form">
                <h2>Forgot Password?</h2>
                <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                <div className="fp-group">
                    <label htmlFor="username">Email Address</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>               
                           
                <Link to='/' style={{ textDecoration:'none'}}><button type="submit" className="fp-button">RESET MY PASSWORD</button> </Link>               
                
                
            </form>
        </div>
   
  )
}

export default ForgotPassword
