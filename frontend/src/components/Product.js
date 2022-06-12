import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

const Product =({product})=>{
  return (
    <>
      <Row>
        {/* my-3: margin py-3: padding */}
          <Card className="my-3  py-3 rounded">
            <Link to={`/product/${product._id}`} >
              <Card.Img src={product.image} varient='top' />
            </Link>

            <Card.Body>
              <Link to={`/product/${product._id}`} >
                <Card.Title as='div'>
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>

              <Card.Text as='div'> {/* import Rating*/}
                <Rating value={product.rating} text={`${product.numReviews} reviews`} 
                // color='red'
                />
              </Card.Text>
              
              <Card.Text as='h3'>&#8377;{product.price}</Card.Text>
            </Card.Body>
          </Card>

        </Row>
      
    </>
    )
}

export default Product