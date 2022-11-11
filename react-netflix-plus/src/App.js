// App Comp 
import './App.css'; // external css (css is optional)
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// comp defn 
function App() {
  // a comp in react must return JSX
  return(
    <div>
      <Header></Header>
      <div className="mt-5">
        <h1>Success!</h1>
      </div>
      <Footer />
    </div>
  )
}

export default App; // must be exported

// Comp in React will be with import, comp defn, export