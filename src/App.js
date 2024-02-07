import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Loader from './components/Loader';
import Header from './components/Header';
// import './styles/app.scss'

const Home =  lazy(()=>import("./pages/Home"));
const Search =  lazy(()=>import("./pages/Search"));
const Cart =  lazy(()=>import("./pages/Cart"));
const Shipping =  lazy(()=>import("./pages/Shipping"));

const App = () => {
  return (
   < Router>
   <Header/>
<Suspense fallback={<Loader/>}>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/cart" element={<Cart/>}/>


    <Route>
    <Route path="/shipping" element={<Shipping/>}/>
    </Route>

    
   </Routes>
</Suspense>

   </Router>
  )
}

export default App
