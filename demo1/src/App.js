import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Allproducts from './All products';
import cart from './cart';

function App() {
  const [cart, setcart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path='/allproducts' element={<Allproducts cart={cart} setcart={setcart} />} />
        <Route path='/cart' element={<cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
