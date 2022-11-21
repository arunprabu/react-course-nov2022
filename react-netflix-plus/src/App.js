// App Comp 
import './App.css'; // external css (css is optional)
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
import { appRoutes } from './routes/appRoutes';

// comp defn 
function App() {

  // Step 2 of Context API: Let's provide the data thru CartContext to the whole app
  const [_cartState, _cartDispatch] = useReducer(cartReducer);
  console.log(_cartState);

  const cartData = {
    cartState: _cartState,
    cartDispatch: _cartDispatch
  }

  // a comp in react must return JSX
  return(
    <CartContext.Provider value={cartData}>
      <BrowserRouter>
        <div>
          <Header></Header>

          <div className="mt-5 container">
            <p>welcome</p>
            {appRoutes }
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
    
  )
}

export default App; // must be exported

// Comp in React will be with import, comp defn, export