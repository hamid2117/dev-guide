import React from 'react'
import { Link } from 'react-router-dom'
import { social } from './../utiles/data'
const Footer = () => {
  return (
    <footer className='footer bg-dark py-5'>
      <div className='container grid grid-3'>
        <div>
          <h1>D & H Dev</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link className='footer-links' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/features' className='footer-links'>
                Features
              </Link>
            </li>
            <li>
              <Link to='/doc' className='footer-links'>
                Docs
              </Link>
            </li>
          </ul>
        </nav>
        <div className='social'>
          {social.map((soc) => {
            const { Icon, id, link } = soc
            return (
              <Icon
                style={{ margin: '10px', fontSize: '30px', cursor: 'pointer' }}
                href={link}
                key={id}
              />
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
