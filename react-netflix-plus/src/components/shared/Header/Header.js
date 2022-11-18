// Functional component with Named Function

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import Menu from "../Menu/Menu";

function Header(){
  const appName = 'React App';

  // Step 3 of Context API Demo
  const cartData = useContext(CartContext);
  console.log(cartData.cartState);

  return(
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{appName}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Menu />
            <Link to='/'
              className="btn btn-danger">
              Cart({cartData?.cartState?.length > 0 ? cartData?.cartState?.length: 0})
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header; 
