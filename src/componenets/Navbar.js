import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h2 className='logo'> D&H dev </h2>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/doc'>Doc</Link>
            </li>
            <li>
              <Link to='/features'>Features</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
