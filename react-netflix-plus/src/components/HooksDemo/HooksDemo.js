import React from 'react'
import Blog from './Blog/Blog'
import MyAccount from './MyAccount/MyAccount'

const HooksDemo = () => {
  return (
    <div>
      <h1>Hooks Demo</h1>
      <h2>useState() Hook Demo</h2>
      <MyAccount></MyAccount>

      <hr />
      <h2>useEffect() Hook Demo</h2>
      <Blog/>

    </div>
  )
}

export default HooksDemo