import React from 'react'

const Products = () => {

  const pdtList = [
    {
      id: 1,
      productName: "Apple-iPhone-13-pro-smartphone",
      productDescription: "15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel.\n      Cinematic mode adds shallow depth....",
      price: 84900,
      quantity: 30,
    },
    {
      id: 2,
      productName: "Samsung Galaxys S21 FE 5G",
      productDescription: "Samsung Galaxy S21 5G supports frequency bands GSM , CDMA , HSPA , EVDO , LTE , 5G. Official\n      announcement date is January 14 2021.",
      price: 54600,
      quantity: 20,
    }
  ];

  return (
    <div className='row pt-3'>
      <h1>Products - Context API Demo</h1>
      
      <div className='col-md-3'>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">pdt name</h5>
            <p className="card-text">
              desc
            </p>
            <p>Rs. 15000</p>
            <button className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products