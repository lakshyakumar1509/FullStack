import React from 'react'
import '../../assets/css/Footer.css';
import image from '../../assets/images/flogo.png'
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer'>
            

            
           <div className='logo'>
            <img src={image}></img>
           </div>
           <div className='col2'>
            <p>EXPLORE</p>
               <ul>
               <Link to="/event/user/about"><li>ABOUT</li></Link>
               <Link to="/event/user/about"> <li>SERVICES</li></Link>
               <Link to="/event/user/about"><li>PORTFOLIO</li></Link>
               <Link to="/event/user/about"><li>BOOKINGS</li></Link>
               </ul>
           </div>
           <div className='col3'>
           <ul>
                 <li>TESTIMONIALS</li>
                 <li>PRESS</li>
            </ul>
           </div>
           <div className='col4'>
           <p>GET IN TOUCH</p>
           <div className='up'>
           <br></br>
           Contact  
           <br></br>
           <br></br>
           <PhoneIcon/>
           <h4>+821 863 736</h4>
           </div>
           <div className='low'>
                <ul>
                    <li><InstagramIcon/></li>
                    <li><LinkedInIcon/></li>
                    <li><XIcon/></li>
                    <li><YouTubeIcon/></li>
                </ul>
           </div>
           </div>
          
        </div>
        
        </footer>
    </div>
  )
}

export default Footer
