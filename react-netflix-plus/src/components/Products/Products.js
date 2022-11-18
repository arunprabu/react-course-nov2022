import React, { useContext, useReducer } from 'react'
import { CartContext } from '../../contexts/CartContext';
import cartReducer from '../../reducers/cartReducer';

const Products = () => {

  const cartData = useContext(CartContext);
  console.log(cartData);

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

  const handleAddToCart = (pdt) => {
    console.log(pdt);
    cartData.cartDispatch({
      type: 'ADD_TO_CART',
      payload: pdt
    })
  }

  let products = null;
  if(Array.isArray(pdtList) && pdtList.length > 0){
    products = pdtList.map((pdt) => {
      return (
        <div className='col-md-3' key={pdt.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{pdt.productName}</h5>
              <p className="card-text">
                {pdt.productDescription}
              </p>
              <p>Rs. {pdt.price}</p>
              <button className="btn btn-primary" 
                onClick={handleAddToCart.bind(this, pdt)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )
    })
  }
  

  return (
    <div className='row pt-3'>
      <h1>Products - Context API Demo</h1>

      {products}

    </div>
  )
}

export default Products