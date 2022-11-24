import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetails from './components/Posts/PostDetails/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header /> 

        <main className="container mt-5 pt-5">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:postId' element={<PostDetails />} /> {/* URL param - postId */}
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
