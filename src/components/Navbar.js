import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render () {
    return (
      <div className='Navbar'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              <i className='fa fa-film' style={{color: '#ffffff'}} title='Movie&Tv'/>
            </Link>
            <button
              className='navbar-toggler hidden-lg-up'
              type='button'
              data-toggle='collapse'
              data-target='#collapsibleNavId'
              aria-controls='collapsibleNavId'
              aria-expanded='false'
              aria-label='Toggle navigation'
            ><span className="navbar-toggler-icon" /></button>
            <div className='collapse navbar-collapse' id='collapsibleNavId'>
              <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/movies'>
                    Movies
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/tvshows'>
                    Tv Shows
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/people'>
                    People
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
