import React from 'react'
import { Outlet } from 'react-router-dom'


const FrontLayout = () => {
  return (<>
     <div className='bg-white sticky-top'>
        <div className='container'>
          <nav className='navbar px-0 navbar-expand-lg navbar-light bg-white'>
            <a
              className='navbar-brand position-absolute'
              href='./index.html'
              style={{
                left: '50%',
                transform: 'translate(-50%, -50%)',
                top: '50%',
              }}
            >
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse bg-white custom-header-md-open'
              id='navbarNav'
            >
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <a className='nav-link ps-0' href='./product.html'>
                    Lorem ipsum
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='./detail.html'>
                    Lorem ipsum
                  </a>
                </li>
              </ul>
            </div>
            <div className='d-flex'>
              <a href='#'>
                <i className='fas fa-heart me-5'></i>
              </a>
              <a href='./cart-2.html'>
                <i className='fas fa-shopping-cart'></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <Outlet></Outlet>
      {/* footer */}
      <div className='bg-dark'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between text-white py-4'>
            <p className='mb-0'>© 2020 LOGO All Rights Reserved.</p>
            <ul className='d-flex list-unstyled mb-0 h4'>
              <li>
                <a href='#' className='text-white mx-3'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-white mx-3'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#' className='text-white ms-3'>
                  <i className='fab fa-line'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </>)
}

export default FrontLayout
