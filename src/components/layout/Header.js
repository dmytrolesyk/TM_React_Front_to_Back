import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { branding } = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ml-2">
              <Link 
                to="/" 
                className="nav-link">
                  <span className="fas fa-home"></span> Home
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link 
                to="/contacts/add"
                className="nav-link">
                  <span className="fas fa-plus"></span> Add Contact
              </Link>
            </li>
            <li className="nav-item ml-2">
              <Link
                to="/about"
                className="nav-link">
                  <span className="fas fa-question"></span> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>   
  )
}

// const headingStyle = {
//   color: 'green', 
//   fontSize: '50px'
// }

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header
