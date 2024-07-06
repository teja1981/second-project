import React, { useState } from 'react';
import card from './card';
import cart from './cart';
import './cont.css'

function Allproducts({cart,setcart}) {
    function addtocart(product){
        setcart([...cart,product])
        console.log(cart);
    }
  
  const products = [
    {
        id:'1',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Derived organic honey',
      title: 'Rose Honey'
    },
    {
        id:'2',
      image: 'https://images.unsplash.com/photo-1576086213369-97d6cf3a937c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Pure wildflower honey',
      title: 'Wildflower Honey'
    },
    {
        id:'3',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Raw acacia honey',
      title: 'Acacia Honey'
    },
    {
        id:'4',
      image: 'https://images.unsplash.com/photo-1598378678822-45c2bde0a281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Organic lavender honey',
      title: 'Lavender Honey'
    },
    {
        id:'5',
      image: 'https://images.unsplash.com/photo-1598378678663-720a7e6f162f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Forest honey',
      title: 'Forest Honey'
    },
    {
        id:'6',
      image: 'https://images.unsplash.com/photo-1571689937702-87918c28e7c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Manuka honey',
      title: 'Manuka Honey'
    }
  ];

 

  return (
    <div >
      <h1>Products</h1>
      <div className="product-list">
        {products.map((item) => (
          <card 
            key={item.id} 
            product={item}
            addtocart={addtocart}
             
          />
        ))}
      </div>
      <cart cart={cart}/>
      
    </div>
  );
}

export default Allproducts;