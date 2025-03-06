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
     console.log(data);
    }
  return (
    <div> 
       <h1>Products</h1>
        <div className="row" >
            {
             products && products.length > 0 ? products.map((product)=>(
              <div className='col-md-3' key={product.id}>
                <Link to={`/product/${product.id}`}>
                   
                <div className='card rounded'>
                    <img src={product.image} alt={product.title} style={{width:"200px",height: "250px" ,objectFit:"fill", display:"block",margin:"auto" }} />
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