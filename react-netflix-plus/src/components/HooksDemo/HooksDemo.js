import React from 'react'
import Blog from './Blog/Blog'
import MyAccount from './MyAccount/MyAccount'
import Todos from './Todos/Todos'

const HooksDemo = () => {
  return (
    <div>
      <h1>Hooks Demo</h1>
      <h2>useState() Hook Demo</h2>
      <MyAccount></MyAccount>

      <hr />
      <h2>useEffect() Hook Demo</h2>
      <Blog/>

      <hr/>
      <h2>useRef() and useReducer() Hooks Demo</h2>
      <Todos />

    </div>
  )
}

export default HooksDemo