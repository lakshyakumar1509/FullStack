import React, { useState } from 'react';
import '../../assets/css/Navbar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  // Function to handle toggling the dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to close the dropdown when clicking outside of it
  const handleClickOutside = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  return (
    <nav className="navbar">
      <div className="container" onClick={handleClickOutside}>
        <h3 className="logo">UPPER EAST SIDE</h3>
        <ul className="nav-links">
          <Link to="/event/user/home"><li>HOME</li></Link>
          <Link to="/event/user/about"><li>ABOUT</li></Link>
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#services">SERVICES</a>
            {showDropdown && (
              <ul className="dropdown-content">
                <Link to="/event/user/services/weddings"><li>Weddings</li></Link>
                <Link to="/event/user/services/nonprofit"><li>Non-Profit</li></Link>
                <Link to="/event/user/services/social"><li>Social</li></Link>
                <Link to="/event/user/services/destination"><li>Destination</li></Link>
                <Link to="/event/user/services/corporate"><li>Corporate</li></Link>
              </ul>
            )}
          </li>
          <Link to="/event/user/portfolio"><li>PORTFOLIO</li></Link>
          <Link to="/event/user/press"><li>PRESS</li></Link>
          <Link to="/event/user/booking"><li>BOOKINGS</li></Link>
          {/* <Link to="/event/login" onClick={toggleLogoutPopup}>  */}
          
          <li onClick={toggleLogoutPopup} className='lo'>LOGOUT <LogoutIcon /></li>
         
          {/* </Link>  */}
        </ul>
      </div>
      {showLogoutPopup && (
        <div className="logout-popup">
          <p>Are you sure you want to logout?</p>
          <div>
            <button onClick={() => setShowLogoutPopup(false)}>Cancel</button>
            <Link to="/event/login" style={{cursor:"pointer"}}><button>Logout</button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
