import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../edusity_assets/logo.png'
import {Link} from 'react-scroll'
import menu_icon from '../../edusity_assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () =>{
    menu ? setMenu(false) : setMenu(true)

  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[] )

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img className='logo' src={logo} alt="" />
        <ul className={menu?"":"hide-mobile-menu"}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        </ul>
        <img onClick={toggleMenu} src={menu_icon} alt="" className='menu-icon'/>
    </nav>
  )
}

export default Navbar