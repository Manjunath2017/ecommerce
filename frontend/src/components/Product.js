import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

const Product =({product})=>{
  return (
    <>
      <Row>
        {/* my-3: margin py-3: padding */}
          <Card className="my-3  py-3 rounded">
            <a href={`/product/${product._id}`} >
              <Card.Img src={product.image} varient='top' />
            </a>

            <Card.Body>
              <a href={`/product/${product._id}`} >
                <Card.Title as='div'>
                  <strong>{product.name}</strong>
                </Card.Title>
              </a>

              <Card.Text as='div'>
                <div className='my-3'>
                  {product.rating} from {product.numReviews} reviews
                </div>
              </Card.Text>
              
              <Card.Text as='h3'>&#8377;{product.price}</Card.Text>
            </Card.Body>
          </Card>

        </Row>
      
    </>
    )
}

export default Product