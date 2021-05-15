import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

const Nav = () => (
 <div className="header_nav">
   <Link to={'/'} className="header_link">
       Home
   </Link>
   <Link to={'/programmes'} className="header_link">
       Programmes
   </Link>
   <Link to={'/contact'} className="header_link">
       Contact
   </Link>
   <Link to={'/espacePersonnel'} className="header_link">
       Espace personnel
   </Link>
 </div>

);

export default Nav;
