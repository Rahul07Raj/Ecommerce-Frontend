import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import api from "../api/api"

const Home = () => {
  const[product,setProduct] = useState([]);
  const navigate = useNavigate();

  
  const getProducts = async()=>{
    try{
      const response = await api.get(`/product/all`);
      setProduct(response.data.products);
      console.log(response.data.products);
    }catch(err){
      console.error("err",err);
    }

  }
  useEffect(()=>{
   getProducts();
  },[])
  return (
 <div style={{ display: 'flex', flexWrap: 'wrap',gap: '20px',justifyContent:"center",alignContent:"center" }}>
{
product.map((data)=>(
  
  <Link to={`/product/${data._id}`}>

<ProductCard
key={data._id}
 name={data.name}
 price ={data.price}
//  photo="https://m.media-amazon.com/images/I/51ltGkq0m5L._SX679_.jpg"
photo={`http://localhost:4000/${data.photo}`}
// photo={product.photo.replace(/\\/g, '/')}

onClick={() => {console.log("clinkk")}} 
/>
  </Link>
))
}
</div>
  )
}

export default Home
