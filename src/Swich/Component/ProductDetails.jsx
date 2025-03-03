import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

  export const ProductDetails = () => {
   const {id} = useParams()
 
    
    useEffect(()=>{
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const {data} = await axios(`https://fakestoreapi.com/products`)
        console.log(data);
        
    }
  return (
    <div>
        <h1>hlo</h1>
        <div className='row'>
           <div className='col-md-6'>
            <img src={product.image} alt={product.title} />
           </div>
            <div className='col-md-6'>
                <h4>{product.title}</h4>
               <p className='bg-info p-2'>{product.price}</p>
            
           </div>
        </div>

    </div>
  )
}

export default ProductDetails