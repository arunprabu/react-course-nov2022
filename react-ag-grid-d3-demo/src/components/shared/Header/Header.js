import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>Home</Link> <br />
      <Link to='/ag-grid-demo'>AG Grid Demo</Link> <br />
      <Link to='/d3-js-demo'>D3 JS Demo</Link> <br />
      <hr/>
    </header>
  )
}

export default Header