
import './NavBar.css'
import { NavLink } from "react-router-dom";
import { FaCalendar  } from "react-icons/fa";
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import {  useRef, useState }  from "react";
import Button from '../Button/Button';
import ScheduleButton from '../ScheduleButton/ScheduleButton';



const NavBar = () => {
  
  const navRef = useRef(null)
  


  
const showNavbar= () => {
  
  console.log('clicked');
  
  if(navRef!==null)
 { 
  navRef.current.toggle('responsive-nav')
  }
    
};
  

  return(

      <div className='header'>
      <header>
        <nav className='nav'>
          <NavLink to="/" className="nav__logo">
            <h1>Villa</h1>
          </NavLink>

          <ul className='nav__menu' ref={navRef}>
            <li className='nav__item'>
              <NavLink to="/"  className='first-child'>
                Home
              </NavLink>

            </li>


            <li className='nav__item'>
              <NavLink to="/properities"  className='nav__link'>
              Properties
              </NavLink>

            </li>


            <li className='nav__item'>
              <NavLink to="/prop-details"  className='nav__link'>
              Property Details
              </NavLink>

            </li>


            <li className='nav__item'>
              <NavLink to="/contact"  className='nav__link'>
              Contact Us
              </NavLink>

            </li>

            <li className='nav__item'>
              <NavLink to="/" className='last-child' >
                
              
                 <ScheduleButton  />
              
                
              </NavLink>

            </li>
          </ul>
 
          <button className='nav-btn nav-close-btn' >
            <IoClose/>
          </button>
          
          <button
          className='nav-btn'  onClick={showNavbar}>
            <IoMenuSharp />
          </button>

        </nav>
        </header>

        </div>


   

  )
}

export default NavBar
