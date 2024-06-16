import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const param = useParams();

  return <>
    <div>ProductDetails</div>
    <h1>{param.productId}</h1>
    <p>
        <Link to='..' relative='path' style={{color:'white'}}>Back</Link>
    </p>
  </>   
}

export default ProductDetails