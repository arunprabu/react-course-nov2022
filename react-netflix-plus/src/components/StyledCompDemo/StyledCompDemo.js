import React from 'react'
import styled from 'styled-components'

const StyledCompDemo = () => {

  const Wrapper = styled.section`
    border: solid 5px #00f;
    padding: 20px;
    margin-top: 50px;
    text-align: center;
    `;

  const Heading1 = styled.h1`
    font-size: 48px;
    border: dotted 3px #0ff;
  `;
  
  const Button = styled.button`
    background-color: ${ props => props.primary? 'aqua': 'yellow'};
    padding: 10px 20px;
    font-size: 16px;
  `;

  // creating a new button comp out of prev Button comp with slight change in style 
  const TomatoButton = styled(Button)`
    background: tomato;
  `;


  return (
    <Wrapper>
      <Heading1>Styled Components</Heading1>
      <Button primary>Learn more about Styled components</Button> <br />
      <Button secondary>Demo Button </Button> <br />
      <TomatoButton>This is also a Demo Button</TomatoButton>
      <hr />
      Ref: https://styled-components.com/docs/basics
    </Wrapper>
  )
}

export default StyledCompDemo;