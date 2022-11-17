import React from 'react'
import applyStyles from '../../hoc/applyStyles';
import Bye from './Bye'
import Hello from './Hello'

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemo = () => {
  return (
    <div className='pt-3'>
      <StyledHello name="John"></StyledHello>
      <StyledBye name="John"></StyledBye>
    </div>
  )
}

export default HocDemo