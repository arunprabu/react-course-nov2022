// App Comp 
import './App.css'; // external css (css is optional)
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';

// comp defn 
function App() {
  // a comp in react must return JSX
  return(
    <div>
      <Header></Header>

      <div className="mt-5 container">
        <Home/>
      </div>
      
      <Footer />
    </div>
  )
}

export default App; // must be exported

// Comp in React will be with import, comp defn, export