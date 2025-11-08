import React from 'react'
import Card from './Card'

export default function AllProduct() {
  return (
    <div>
        {dataAllProduct.map((item,index)=>{
            return(
                <Card key={index} product={item}/>
            )
        })}
    </div>
  )
}
