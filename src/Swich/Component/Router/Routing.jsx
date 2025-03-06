import React from 'react';
 import Productpage from '../Productpage';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
import Pagination from '../../../assets/Work/Pagination';
import Cartpage from '../Cartpage';
 

const Routing = () => {
  return (
     <Routes>
        <Route path='/' element={<Productpage />} />
        <Route path='/Product/:id' element={<ProductDetails />} />
        <Route path='/Pagination' element={<Pagination />} />
        <Route path='/Cartpage' element={<Cartpage />} />


      </Routes>
  );
};

export default Routing;
