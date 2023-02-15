import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Users from './pages/users/users';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import NotFound from './pages/not-found/not-found';
import Navbar from './components/navbar/navbar';
import Product from './pages/product/product';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='/users' element={<Product />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>        
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
