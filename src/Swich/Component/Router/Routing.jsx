import React from 'react';
 import Productpage from '../Productpage';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
 

const Routing = () => {
  return (
     <Routes>
        <Route path='/' element={<Productpage />} />
        <Route path='/Product : id' element={<ProductDetails />} />

      </Routes>
  );
};

export default Routing;
