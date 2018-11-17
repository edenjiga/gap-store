import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

export default class extends Component {
  render() {
    const { car } = this.props;
    return (
      <Col md={4} sm={12} onClick={() => console.log('aa')}>
        <Card>
          <CardImg
            top
            width="100%"
            height="180px"
            src={car.picture}
            alt="Card image cap"
          />
          <CardBody>
            {/* <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>Model: {car.model}</CardText>
            <CardText>Year: {car.year}</CardText>
            <CardText>Brand: {car.brand}</CardText>
            <CardText>Price: {car.price}</CardText>

            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
