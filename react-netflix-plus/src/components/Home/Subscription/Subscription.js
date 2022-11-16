import React from 'react'
import './Subscription.css';

const Subscription = () => {

  const myStyles = {
    paraStyles: {
      backgroundColor: 'red',
      color: '#fff'
    },
    btnStyles: {
      border: 'solid 1px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px'
    }
  }
  
  return (
    <div className='text-center'>
      {/* External CSS from Subscription.css - RECOMMENDED */}
      <h3 className='subscription-info'>You are an Active Subscriber!</h3>
      {/* Inline CSS -- NEVER EVER TRY THIS IN LOOPS */}
      <p style={ { backgroundColor: 'red', color: '#fff'} }>Your Subscription ends in two weeks</p>
      {/* Internal Styles */}
      <p style={myStyles.paraStyles}>Renew Now at 50% discount. Apply Coupon: OFFER50</p>
      <button type='button' style={myStyles.btnStyles}>RENEW NOW</button>
    </div>
  )
}

export default Subscription