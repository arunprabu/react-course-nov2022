// App Comp 
import './App.css'; // external css (css is optional)
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StyledCompDemo from './components/StyledCompDemo/StyledCompDemo';
import HocDemo from './components/HocDemo/HocDemo';
import HooksDemo from './components/HooksDemo/HooksDemo';
import Products from './components/Products/Products';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
import Contacts from './components/Contacts/Contacts';

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
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/styled-comp-demo' element={<StyledCompDemo />} />
              <Route path='/hoc-demo' element={<HocDemo />} />
              <Route path='/hooks' element={<HooksDemo />} />
              <Route path='/products' element={<Products />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
    
  )
}

export default App; // must be exported

// Comp in React will be with import, comp defn, export