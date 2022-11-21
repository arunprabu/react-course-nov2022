import React from 'react'

const CompanyInfo = ({name, foundedYear}) => {
  return (
    <div>
      <h2>CompanyInfo | Testing Props, Styles, Placeholder text, Events, States, Snapshot</h2>
      <h3 data-testid="companyNameHeading">{name}</h3>
      <p data-testid="foundedYear">Founded In: {foundedYear}</p>

      <p>
        Enter Country: 
        <input type="text" placeholder='Enter Your Country Name' />
      </p>
    </div>
  )
}

export default CompanyInfo