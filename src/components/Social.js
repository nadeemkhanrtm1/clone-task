import React from 'react';
import {FaFacebookF, FaInstagram, FaTripadvisor} from 'react-icons/fa';

const Social = () => {
  return (
    <div className="social-icon">
      <FaTripadvisor style={{fontSize:'1.8rem',marginBottom:'40px',marginRight:'20px'}}/>
      <FaFacebookF style={{fontSize:'1.8rem',marginBottom:'40px',marginRight:'20px'}}/>
      <FaInstagram style={{fontSize:'1.8rem',marginRight:'20px'}}/>
    </div>
  )
}

export default Social
