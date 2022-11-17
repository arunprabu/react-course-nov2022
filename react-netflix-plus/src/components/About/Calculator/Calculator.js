import React from 'react'

const Calculator = ( props ) => {
  return (
    <div>
      <h2>Calculator</h2>
      <p>{props.add()}</p>
    </div>
  )
}

export default Calculator