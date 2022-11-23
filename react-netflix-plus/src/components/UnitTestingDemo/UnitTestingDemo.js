import React from 'react'
import CompanyInfo from './CompanyInfo/CompanyInfo'
import Users from './Users/Users'

const UnitTestingDemo = () => {

  return (
    <div>
      <h1>unit testing examples</h1>

      <CompanyInfo 
        name="Cognizant Tech Pvt Ltd" 
        foundedYear="1996" 
        employeeCount="350000+"/>

      <Users />
    </div>
  )
}

export default UnitTestingDemo