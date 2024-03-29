import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
const Product=({product})=>{
  return(
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`} >
        <Card.Img src={product.image} varient='top' />
      </Link>
      
      <Card.Body>
        <Link to={`/product/${product._id}`} >
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='div'>
        <div className='my-3'>
          {product.rating} from{product.numReviews} reviews
        </div>
      </Card.Text>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
      </Card.Text>
      <Card.Text as='h3'>&#8377;{product.price}</Card.Text>
    </Card>
  )
}

export default Product