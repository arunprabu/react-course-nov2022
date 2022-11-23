import React, { useState } from 'react'

const CompanyInfo = ({name, foundedYear, employeeCount}) => {

  const [ countryName, setCountryName ] = useState('Canada');
  const [branchName, setBranchName ] = useState('Bangalore');
  const [relocationBranchName, setRelocationBranch] = useState('');

  return (
    <div>
      <h2>CompanyInfo | Testing Props, Styles, Placeholder text, Events, States, Snapshot!</h2>
      <h3 data-testid="companyNameHeading">{name}</h3>
      <p data-testid="foundedYear">Founded In: {foundedYear}</p>
      <p data-testid="employeeCountEl" style={{color: 'rgb(0, 255, 0)'}}>Total Employees: {employeeCount}</p>

      <button type='button' data-testid="joinCognizantBtn" className='btn btn-primary btn-lg'>JOIN COGNIZANT</button>

      <br />
      <br />
      <input type="text" 
        placeholder='Enter Your Country Name' 
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}/>
      <p data-testid="visitWebsiteEl">Visit Cognizant {countryName} website</p>

      <hr />
      <p data-testid="workingLocationInfo">I am working in {branchName}</p>
      <input 
        type='text' 
        placeholder='Enter the location you want to relocate to'
        className='form-control'
        value={relocationBranchName}
        onChange={ (event) => {
          setRelocationBranch(event.target.value)
        }}/>
      <br/>
      <button data-testid="relocateBtn"
        type="button"
        className='btn btn-secondary'
        onClick={() => {
          setBranchName(relocationBranchName);
        }}>Relocate</button>
    </div>
  )
}

export default CompanyInfo