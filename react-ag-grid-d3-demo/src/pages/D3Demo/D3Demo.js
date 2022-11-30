import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const D3Demo = () => {
  return (
    <div>
      <h1>D3 JS Demo</h1>
      <ul>
        <li>
          <Link to='scatterplot-chart'>Scatterplot Chart</Link>
        </li>
        <li>
          <Link to='donut-chart'>Donut Chart</Link>
        </li>
        <li>
          <Link to='pie-chart'>Pie Chart</Link>
        </li>
        <li>
          <Link to='bar-chart'>Bar Chart</Link>
        </li>
        <li>
          <Link to='line-chart'>Line Chart</Link>
        </li>
      </ul>
      <hr />

      <Outlet />
    </div>
  )
}

export default D3Demo