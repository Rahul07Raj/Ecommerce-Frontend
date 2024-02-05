import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import ProductCard from '../components/ProductCard'


const Home = () => {
  return (
<div>
<ProductCard
 name="Sofa"
 price ="300" 
 photo="https://m.media-amazon.com/images/I/51ltGkq0m5L._SX679_.jpg"
 />
</div>
  )
}

export default Home
