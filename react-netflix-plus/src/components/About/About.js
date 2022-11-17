import React from 'react';
import ErrorBoundary from '../../containers/shared/ErrorBoundary/ErrorBoundary';
import Calculator from './Calculator/Calculator';

const About = () => {
  
  return (
    <>
      <h1>Error Boundary Demo</h1>
      <ErrorBoundary>
        <Calculator />
      </ErrorBoundary>
    </>
  )
}

export default About