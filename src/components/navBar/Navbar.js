import React from 'react'
import './navBar.css'
import  moon from './bxs-moon.svg'
import sun from './bxs-sun.svg'


const Navbar = ({toggleTheme , theme})=>{ 
  const ico = theme === 'light' ? moon : sun
  return(
      <div className={
        theme === 'light' ?
        'navbar-light navbar' :
        'navbar-dark navbar'
      }>
        <h1 className="title">Where in the world?</h1>
        <button className='toggle' onClick={toggleTheme}><img className={
          theme === 'light' ?
          'icon icon-light' :
          'icon icon-dark'
        } src={ico} alt="toggle"/></button>
      </div>
    )
}

export default Navbar;