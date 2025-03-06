import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../assets/reduce/Sliceses'
 
  const Cartpage = () => {
    const cartData =  useSelector(state => state.Cart)
    //const [removes, setRemove]= useState(true)
    const dispatch = useDispatch()
  //  console.log(cartData);

   const removeHandler = (id)=>{
    // setRemove(removes(id))
     dispatch(remove(id))
   }
  return (
    <div>
        <h2>Cartpage</h2>
        <h4>Total Price:0</h4>
        {
          cartData && cartData.length > 0 ? cartData.map((product)=>(
            <div className='row border mb-3' key={product.id}>
              <div className='col-md-4 img-fluid rounded'>
                <img src={product.image} alt={product.title} className='img-fluid rounded' style={{width:"250px", paddingTop:"50px"}}  />
              </div>
              <div className='col-md-4'>
                <h5 style={{paddingTop:"70px"}}>{product.title}</h5>
                <p >{product.description}</p>
              </div>
              <div className='col-md-4'>
              <button className='bg-info p-2 my-5'>{product.price}</button><br /><br />
                <button className='btn btn-danger my-3' onClick={()=>{removeHandler(product.id)}} >Remove</button>
              </div>
            </div>
          )): <h5>Cart is empty</h5>

        }
    </div>
  )
}

export default Cartpage