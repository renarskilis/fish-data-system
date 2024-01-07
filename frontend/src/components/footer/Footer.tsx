import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'><a href='#' className='nav-link px-2 text-body-secondary'>Code (Github
            repository)</a></li>
          <li className='nav-item'><a
            href='https://docs.google.com/document/d/1utAD8QcVO3Tj9V-8cnUk2eDPDA2nuOAWEJkTo8ei0p0/edit?usp=sharing'
            className='nav-link px-2 text-body-secondary'>Technical description (Google DOC)</a></li>
        </ul>
        <p className='text-center text-body-secondary'>&copy; 2024 - Renārs Ķīlis</p>
      </footer>
    </div>
  )
}

export default Footer
