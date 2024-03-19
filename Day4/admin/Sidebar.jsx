import React, { useState } from 'react';
import '../../assets/css/Sidebar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Sidebar() {
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
    <nav className="navbar2">
      <div className="container2" onClick={handleClickOutside}>
        <h3 className="logo2">UPPER EAST SIDE</h3>
        <ul className="nav-links2">
          <Link to="/event/admin/dashboard"><li>DASHBOARD</li></Link>
          <Link to="/event/admin/event"><li>EVENT MANAGEMENT</li></Link>
          <Link to="/event/admin/support"><li>SUPPORT</li></Link>
          <Link to="/event/admin/report"><li>REPORTS</li></Link>
          <Link to="/event/admin/settings"><li>SETTINGS</li></Link>
          {/* <Link to="/event/login" onClick={toggleLogoutPopup}>  */}
          
          <li onClick={toggleLogoutPopup} className='lo2'>LOGOUT <LogoutIcon /></li>
         
          {/* </Link>  */}
        </ul>
      </div>
      {showLogoutPopup && (
        <div className="logout-popup2">
          <p>Are you sure you want to logout?</p>
          <div>
            <button onClick={() => setShowLogoutPopup(false)}>Cancel</button>
            <Link to="/event/login"><button>Logout</button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Sidebar;
