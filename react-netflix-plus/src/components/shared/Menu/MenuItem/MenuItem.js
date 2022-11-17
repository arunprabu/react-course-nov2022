import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ( {title, url}) => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link active"
        aria-current="page" to={url}>{title}</Link>
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default MenuItem