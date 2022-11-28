import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AgGridDemo = () => {
  return (
    <div>
      <h1>Ag-Grid Demo</h1>
      <Link to='demo1'>Demo 1</Link> <br />
      <Link to='demo2'>Demo 2</Link> <br />
      <Link to='demo3'>Demo 3</Link>

      <Outlet />
    </div>
  )
}

export default AgGridDemo