import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Loader from './components/Loader';
import Header from './components/Header';
import Login from './pages/Login';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from '../src/components/CartContext';
import Signup from './pages/Signup';

// import './styles/app.scss'

const Home =  lazy(()=>import("./pages/Home"));
const Search =  lazy(()=>import("./pages/Search"));
const Cart =  lazy(()=>import("./pages/Cart"));
const Shipping =  lazy(()=>import("./pages/Shipping"));
const Orders =  lazy(()=>import("./pages/Orders"));

const App = () => {
   const isLoggedIN = localStorage.getItem("token");
  console.log(isLoggedIN);
  return (
   < Router>
   <CartProvider>

   <Header/>
<Suspense fallback={<Loader/>}>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
    
    <Route>
    <Route path="/shipping" element={<Shipping/>}/>
    <Route path="/orders" element={<Orders/>}/>
    </Route>


   </Routes>
</Suspense>
      </CartProvider>

   </Router>
  )
}

export default App
