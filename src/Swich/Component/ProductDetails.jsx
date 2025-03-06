import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { add } from '../../assets/reduce/Sliceses';

  export const ProductDetails = () => {
   const {id} = useParams()
   const [product, setProduct] = useState({});
   const [added, setAdded] = useState(false)
   const dispatch = useDispatch()
    
    useEffect(()=>{
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const {data} = await axios(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
        console.log(data);
    }
    const handlerAdd = (product)=>{
      setAdded(true)
      dispatch(add(product))
    }
  return (
    <div>
        <h1>ProductDetails</h1>
         <div className='row border'>
           <div className='col-md-6 img-fluid'>
            <img src={product.image} alt={product.title} className='img-fluid rounded'style={{width:"250px"}}/>
           </div>
            <div className='col-md-6'>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
               <button className='bg-info p-2'>{product.price}</button><br /><br />
               <button className='btn btn-outline-success ' onClick={()=>{handlerAdd(product)}}>{added ? "added" : "Add To Cart"}</button>
             
            
           </div>
        </div> 

    </div>
  )
}

export default ProductDetails