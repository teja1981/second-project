import React from 'react'
import './cart.css'

const cart = ({cart}) => {
  return (
    <center>
        <div>
            {
                cart.map(function(item){
                    return(
                        <cartIndv key={item.id} image={item.image} title={item.title}/>
                    )
                })

                }
            
        </div>

    </center>
  )
}

export default cart