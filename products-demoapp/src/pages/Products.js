import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText, 
  CardBody,
 
} from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import {CartContext} from '../contexts/Cart';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    
    axios.get('https://zzt4v.sse.codesandbox.io/products')
      .then((res) => {
        // handle success
        this.setState({products: res.data})
      });
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Products</h2>
        <Container>
          <Row>
            {
              products.map(product => (
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={product.imageUrl} />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>

                    <CardText>{product.description}</CardText>
                    <CartContext.Consumer>
                      {({addToCart}) => <Button onClick={() => addToCart(product)}>Add to cart</Button> }
                      
                    </CartContext.Consumer>
                    
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Products;
