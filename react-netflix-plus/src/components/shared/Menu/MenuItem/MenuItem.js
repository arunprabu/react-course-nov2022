import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ( {title, url}) => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link active"
        aria-current="page" to={url}>{title}</Link>
    </li>
  )
}

export default MenuItem