import React from 'react'
import '../styles/cart.css'

export const cartIndv = ({image,title}) => {
  return (
    <div className='main'>
       <div>
       <img src={image}/>
       </div>
        <h4>{title}</h4>
        
    </div>
  )
}