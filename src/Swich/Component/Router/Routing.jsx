import React from 'react';
 import Productpage from '../Productpage';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
import Pagination from '../../../assets/Work/Pagination';
 

const Routing = () => {
  return (
     <Routes>
        {/* <Route path='/' element={<Productpage />} /> */}
        <Route path='/Product : id' element={<ProductDetails />} />
        <Route path='/Pagination' element={<Pagination />} />


      </Routes>
  );
};

export default Routing;
