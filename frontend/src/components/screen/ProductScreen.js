import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../Rating'
import products from '../../products'

 
const ProductScreen =({match})=>{
  const singleProduct=products.find(item =>item._id===match.params.id )
console.log('products', singleProduct)
  return( 
  <>
{/* brand: "Apple"
category: "Electronics"
countInStock: 10
description: "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working"
image: "/images/airpods.jpg"
name: "Airpods Wireless Bluetooth Headphones"
numReviews: 12
price: 89.99
rating: 4.5 */}

  Product
    <Link className='btn btn-light my-3' to='/'>Go Back </Link> 
    <Row>
      <Col md={6}>
        <Image src={singleProduct.image} alt={singleProduct.name} fluid/> 
      </Col>
      <Col md={3}>
        <ListGroup varient='fluid'>
          <ListGroup.Item>
            <h3>{singleProduct.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={singleProduct.rating} text={`${singleProduct.numReviews} reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            <ListGroup.Item>Price: ${singleProduct.price}</ListGroup.Item>
            <ListGroup.Item>Description: {singleProduct.description}</ListGroup.Item>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='fluid'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col> <strong>&#8377;{singleProduct.price}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{singleProduct.countInStock>0? 'In Stock':'Out Of Stock'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled={singleProduct.countInStock===0}>Add To Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>
)}

export default ProductScreen