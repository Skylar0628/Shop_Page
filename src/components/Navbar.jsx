import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = ({cartData}) => {
  return (<>
    <div className='bg-white sticky-top'>
        <div className='container'>
          <nav className='navbar px-0 navbar-expand-lg navbar-light bg-white'>
            <NavLink
              className='navbar-brand position-absolute'
              href='./index.html'
              style={{
               left: '50%',
               transform: 'translate(-50%, -50%)',
               top: '50%',
              }}
              to={'/'}
            >
                Navbar
                </NavLink>
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
               <NavLink className='nav-link ps-0' to={'/products'}>
                 產品列表
               </NavLink>
              </ul>
            </div>
            <div className='d-flex'>
                <NavLink className='nav-link' to={'/cart'}>
                  <i className="bi bi-basket3-fill position-relative">
                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                        {cartData?.carts?.length}
                     </span>
                  </i>
                </NavLink>
            </div>
          </nav>
        </div>
      </div>
  </>)
}

export default Navbar
