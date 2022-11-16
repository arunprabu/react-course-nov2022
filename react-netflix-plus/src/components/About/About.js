import React from 'react';
import styled from 'styled-components';

const About = () => {

  const Heading1 = styled.h1`
    color: red;
    text-align: center;
  `;

  const MyPara = styled.p`
    color: green;
    font-weight: bold;
    font-size: 15px;
  `

  return (
    <>
      <div>About</div>
      <Heading1>About us</Heading1>
      <MyPara>Checking para</MyPara>
    </>
  )
}

export default About