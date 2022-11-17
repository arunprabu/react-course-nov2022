// App Comp 
import './App.css'; // external css (css is optional)
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StyledCompDemo from './components/StyledCompDemo/StyledCompDemo';
import HocDemo from './components/HocDemo/HocDemo';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import HooksDemo from './components/HooksDemo/HooksDemo';


// comp defn 
function App() {
  // a comp in react must return JSX
  return(
    <BrowserRouter>
      <div>
        <Header></Header>

        <div className="mt-5 container">
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/styled-comp-demo' element={<StyledCompDemo />} />
            <Route path='/hoc-demo' element={<HocDemo />} />
            <Route path='/hooks' element={<HooksDemo />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
    
  )
}

export default App; // must be exported

// Comp in React will be with import, comp defn, export