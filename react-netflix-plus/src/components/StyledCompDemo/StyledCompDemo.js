import React from 'react'
import styled from 'styled-components'

const StyledCompDemo = () => {

  const Wrapper = styled.section`
    border: solid 5px #00f;
    padding: 20px;
    margin-top: 50px;
    text-align: center;
    `;
  
  return (
    <Wrapper>
      Ref: https://styled-components.com/docs/basics
    </Wrapper>
  )
}

export default StyledCompDemo;