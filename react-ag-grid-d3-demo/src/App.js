import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AgGridDemo from './pages/AgGridDemo/AgGridDemo';
import D3Demo from './pages/D3Demo/D3Demo';
import AgGridExample1 from './components/AgGridExamples/AgGridExample1';
import AgGridExample2 from './components/AgGridExamples/AgGridExample2';
import AgGridExample3 from './components/AgGridExamples/AgGridExample3';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/ag-grid-demo' element={<AgGridDemo />}>
            <Route path='demo1' element={ <AgGridExample1 />} />
            <Route path='demo2' element={ <AgGridExample2 />} />
            <Route path='demo3' element={<AgGridExample3 />} />
          </Route>
          <Route path='/d3-js-demo' element={<D3Demo />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
