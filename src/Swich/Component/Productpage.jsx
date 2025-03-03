import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Productpage = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
      getDataHandeler()
    },[])

    const getDataHandeler = async () =>{
    const {data} =await axios("https://fakestoreapi.com/products")
     setProducts(data);
     console.log(data)
    }
  return (
    <div> 
       <h1>Products</h1>
        <div className="row" key={products.id}>
            {
             products && products.length > 0 ? products.map((product)=>(
             <div className='col-md-3'>
                <Link to={`/product/${product.id}`}>
                <div className='card'>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                </div>
                </Link>
             </div>
             )) : <p>Loading....</p>
            }
        </div>
    </div>
  )
}

export default Productpage