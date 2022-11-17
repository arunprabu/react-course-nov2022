import React, { useState } from 'react'

const MyAccount = () => {
  const [accountName, setAccountName] = useState('arun');

  return (
    <div>
      <h3>Account Name</h3>
      <p>{accountName}</p>
      <button onClick={() => {
        setAccountName('john');
      } }>Update Account Name</button>
    </div>
  )
}

export default MyAccount