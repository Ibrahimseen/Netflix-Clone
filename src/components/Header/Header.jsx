import React from 'react'
import {  Link } from 'react-router-dom';
import logo from '../../logo.png'
import { GrSearch } from "react-icons/gr";


const Header = () => {
    return (
 <nav className="header">
<img src={logo} />

<div className="link">
    <Link to="/tvshow">Tv shows</Link>
    <Link to="/Movies">Movies</Link>
    <Link to="/Recently">Recently Added</Link>
    <Link to="/Mylist">My list</Link>
   


</div>
<GrSearch />


 </nav>
  )
}

export default Header;

